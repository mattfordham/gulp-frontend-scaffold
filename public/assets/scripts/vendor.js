(function(){function t(t,e,n){for(var i=(n||0)-1,r=t?t.length:0;++i<r;)if(t[i]===e)return i;return-1}function e(e,n){var i=typeof n;if(e=e.cache,"boolean"==i||null==n)return e[n]?0:-1;"number"!=i&&"string"!=i&&(i="object");var r="number"==i?n:y+n;return e=(e=e[i])&&e[r],"object"==i?e&&t(e,n)>-1?0:-1:e?0:-1}function n(t){var e=this.cache,n=typeof t;if("boolean"==n||null==t)e[t]=!0;else{"number"!=n&&"string"!=n&&(n="object");var i="number"==n?t:y+t,r=e[n]||(e[n]={});"object"==n?(r[i]||(r[i]=[])).push(t):r[i]=!0}}function i(t){return t.charCodeAt(0)}function r(t,e){for(var n=t.criteria,i=e.criteria,r=-1,s=n.length;++r<s;){var o=n[r],a=i[r];if(o!==a){if(o>a||"undefined"==typeof o)return 1;if(a>o||"undefined"==typeof a)return-1}}return t.index-e.index}function s(t){var e=-1,i=t.length,r=t[0],s=t[i/2|0],o=t[i-1];if(r&&"object"==typeof r&&s&&"object"==typeof s&&o&&"object"==typeof o)return!1;var a=l();a["false"]=a["null"]=a["true"]=a.undefined=!1;var u=l();for(u.array=t,u.cache=a,u.push=n;++e<i;)u.push(t[e]);return u}function o(t){return"\\"+K[t]}function a(){return m.pop()||[]}function l(){return g.pop()||{array:null,cache:null,criteria:null,"false":!1,index:0,"null":!1,number:null,object:null,push:null,string:null,"true":!1,undefined:!1,value:null}}function u(t){return"function"!=typeof t.toString&&"string"==typeof(t+"")}function c(t){t.length=0,m.length<x&&m.push(t)}function h(t){var e=t.cache;e&&h(e),t.array=t.cache=t.criteria=t.object=t.number=t.string=t.value=null,g.length<x&&g.push(t)}function f(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);for(var i=-1,r=n-e||0,s=Array(0>r?0:r);++i<r;)s[i]=t[e+i];return s}function p(n){function m(t){return t&&"object"==typeof t&&!hr(t)&&$i.call(t,"__wrapped__")?t:new g(t)}function g(t,e){this.__chain__=!!e,this.__wrapped__=t}function x(t){function e(){if(i){var t=f(i);Wi.apply(t,arguments)}if(this instanceof e){var s=ee(n.prototype),o=n.apply(s,t||arguments);return Fe(o)?o:s}return n.apply(r,t||arguments)}var n=t[0],i=t[2],r=t[4];return cr(e,t),e}function K(t,e,n,i,r){if(n){var s=n(t);if("undefined"!=typeof s)return s}var o=Fe(t);if(!o)return t;var l=Fi.call(t);if(!V[l]||!lr.nodeClass&&u(t))return t;var h=or[l];switch(l){case q:case B:return new h(+t);case $:case Y:return new h(t);case U:return s=h(t.source,A.exec(t)),s.lastIndex=t.lastIndex,s}var p=hr(t);if(e){var d=!i;i||(i=a()),r||(r=a());for(var m=i.length;m--;)if(i[m]==t)return r[m];s=p?h(t.length):{}}else s=p?f(t):wr({},t);return p&&($i.call(t,"index")&&(s.index=t.index),$i.call(t,"input")&&(s.input=t.input)),e?(i.push(t),r.push(s),(p?xr:Cr)(t,function(t,o){s[o]=K(t,e,n,i,r)}),d&&(c(i),c(r)),s):s}function ee(t){return Fe(t)?Zi(t):{}}function ne(t,e,n){if("function"!=typeof t)return si;if("undefined"==typeof e||!("prototype"in t))return t;var i=t.__bindData__;if("undefined"==typeof i&&(lr.funcNames&&(i=!t.name),i=i||!lr.funcDecomp,!i)){var r=Xi.call(t);lr.funcNames||(i=!N.test(r)),i||(i=D.test(r),cr(t,i))}if(i===!1||i!==!0&&1&i[1])return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)};case 4:return function(n,i,r,s){return t.call(e,n,i,r,s)}}return Xn(t,e)}function ie(t){function e(){var t=l?o:this;if(r){var d=f(r);Wi.apply(d,arguments)}if((s||c)&&(d||(d=f(arguments)),s&&Wi.apply(d,s),c&&d.length<a))return i|=16,ie([n,h?i:-4&i,d,null,o,a]);if(d||(d=arguments),u&&(n=t[p]),this instanceof e){t=ee(n.prototype);var m=n.apply(t,d);return Fe(m)?m:t}return n.apply(t,d)}var n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=1&i,u=2&i,c=4&i,h=8&i,p=n;return cr(e,t),e}function re(n,i){var r=-1,o=me(),a=n?n.length:0,l=a>=b&&o===t,u=[];if(l){var c=s(i);c?(o=e,i=c):l=!1}for(;++r<a;){var f=n[r];o(i,f)<0&&u.push(f)}return l&&h(i),u}function oe(t,e,n,i){for(var r=(i||0)-1,s=t?t.length:0,o=[];++r<s;){var a=t[r];if(a&&"object"==typeof a&&"number"==typeof a.length&&(hr(a)||ye(a))){e||(a=oe(a,e,n));var l=-1,u=a.length,c=o.length;for(o.length+=u;++l<u;)o[c++]=a[l]}else n||o.push(a)}return o}function ae(t,e,n,i,r,s){if(n){var o=n(t,e);if("undefined"!=typeof o)return!!o}if(t===e)return 0!==t||1/t==1/e;var l=typeof t,h=typeof e;if(!(t!==t||t&&Q[l]||e&&Q[h]))return!1;if(null==t||null==e)return t===e;var f=Fi.call(t),p=Fi.call(e);if(f==I&&(f=W),p==I&&(p=W),f!=p)return!1;switch(f){case q:case B:return+t==+e;case $:return t!=+t?e!=+e:0==t?1/t==1/e:t==+e;case U:case Y:return t==Ei(e)}var d=f==H;if(!d){var m=$i.call(t,"__wrapped__"),g=$i.call(e,"__wrapped__");if(m||g)return ae(m?t.__wrapped__:t,g?e.__wrapped__:e,n,i,r,s);if(f!=W||!lr.nodeClass&&(u(t)||u(e)))return!1;var _=!lr.argsObject&&ye(t)?Ai:t.constructor,v=!lr.argsObject&&ye(e)?Ai:e.constructor;if(_!=v&&!(Me(_)&&_ instanceof _&&Me(v)&&v instanceof v)&&"constructor"in t&&"constructor"in e)return!1}var y=!r;r||(r=a()),s||(s=a());for(var b=r.length;b--;)if(r[b]==t)return s[b]==e;var x=0;if(o=!0,r.push(t),s.push(e),d){if(b=t.length,x=e.length,o=x==b,o||i)for(;x--;){var w=b,T=e[x];if(i)for(;w--&&!(o=ae(t[w],T,n,i,r,s)););else if(!(o=ae(t[x],T,n,i,r,s)))break}}else kr(e,function(e,a,l){return $i.call(l,a)?(x++,o=$i.call(t,a)&&ae(t[a],e,n,i,r,s)):void 0}),o&&!i&&kr(t,function(t,e,n){return $i.call(n,e)?o=--x>-1:void 0});return r.pop(),s.pop(),y&&(c(r),c(s)),o}function le(t,e,n,i,r){(hr(e)?rn:Cr)(e,function(e,s){var o,a,l=e,u=t[s];if(e&&((a=hr(e))||Sr(e))){for(var c=i.length;c--;)if(o=i[c]==e){u=r[c];break}if(!o){var h;n&&(l=n(u,e),(h="undefined"!=typeof l)&&(u=l)),h||(u=a?hr(u)?u:[]:Sr(u)?u:{}),i.push(e),r.push(u),h||le(u,e,n,i,r)}}else n&&(l=n(u,e),"undefined"==typeof l&&(l=e)),"undefined"!=typeof l&&(u=l);t[s]=u})}function ue(t,e){return t+Bi(sr()*(e-t+1))}function ce(n,i,r){var o=-1,l=me(),u=n?n.length:0,f=[],p=!i&&u>=b&&l===t,d=r||p?a():f;if(p){var m=s(d);l=e,d=m}for(;++o<u;){var g=n[o],_=r?r(g,o,n):g;(i?!o||d[d.length-1]!==_:l(d,_)<0)&&((r||p)&&d.push(_),f.push(g))}return p?(c(d.array),h(d)):r&&c(d),f}function he(t){return function(e,n,i){var r={};if(n=m.createCallback(n,i,3),hr(e))for(var s=-1,o=e.length;++s<o;){var a=e[s];t(r,a,n(a,s,e),e)}else xr(e,function(e,i,s){t(r,e,n(e,i,s),s)});return r}}function fe(t,e,n,i,r,s){var o=1&e,a=2&e,l=4&e,u=16&e,c=32&e;if(!a&&!Me(t))throw new Ri;u&&!n.length&&(e&=-17,u=n=!1),c&&!i.length&&(e&=-33,c=i=!1);var h=t&&t.__bindData__;if(h&&h!==!0)return h=f(h),h[2]&&(h[2]=f(h[2])),h[3]&&(h[3]=f(h[3])),!o||1&h[1]||(h[4]=r),!o&&1&h[1]&&(e|=8),!l||4&h[1]||(h[5]=s),u&&Wi.apply(h[2]||(h[2]=[]),n),c&&Ji.apply(h[3]||(h[3]=[]),i),h[1]|=e,fe.apply(null,h);var p=1==e||17===e?x:ie;return p([t,e,n,i,r,s])}function pe(){Z.shadowedProps=M,Z.array=Z.bottom=Z.loop=Z.top="",Z.init="iterable",Z.useHas=!0;for(var t,e=0;t=arguments[e];e++)for(var n in t)Z[n]=t[n];var i=Z.args;Z.firstArg=/^[^,]+/.exec(i)[0];var r=Ci("baseCreateCallback, errorClass, errorProto, hasOwnProperty, indicatorObject, isArguments, isArray, isString, keys, objectProto, objectTypes, nonEnumProps, stringClass, stringProto, toString","return function("+i+") {\n"+ur(Z)+"\n}");return r(ne,X,Di,$i,v,ye,hr,Xe,Z.keys,ji,Q,ar,Y,Li,Fi)}function de(t){return _r[t]}function me(){var e=(e=m.indexOf)===Cn?t:e;return e}function ge(t){return"function"==typeof t&&Ii.test(t)}function _e(t){var e,n;return!t||Fi.call(t)!=W||(e=t.constructor,Me(e)&&!(e instanceof e))||!lr.argsClass&&ye(t)||!lr.nodeClass&&u(t)?!1:lr.ownLast?(kr(t,function(t,e,i){return n=$i.call(i,e),!1}),n!==!1):(kr(t,function(t,e){n=e}),"undefined"==typeof n||$i.call(t,n))}function ve(t){return vr[t]}function ye(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Fi.call(t)==I||!1}function be(t,e,n,i){return"boolean"!=typeof e&&null!=e&&(i=n,n=e,e=!1),K(t,e,"function"==typeof n&&ne(n,i,1))}function xe(t,e,n){return K(t,!0,"function"==typeof e&&ne(e,n,1))}function we(t,e){var n=ee(t);return e?wr(n,e):n}function Te(t,e,n){var i;return e=m.createCallback(e,n,3),Cr(t,function(t,n,r){return e(t,n,r)?(i=n,!1):void 0}),i}function ke(t,e,n){var i;return e=m.createCallback(e,n,3),Se(t,function(t,n,r){return e(t,n,r)?(i=n,!1):void 0}),i}function Ce(t,e,n){var i=[];kr(t,function(t,e){i.push(e,t)});var r=i.length;for(e=ne(e,n,3);r--&&e(i[r--],i[r],t)!==!1;);return t}function Se(t,e,n){var i=pr(t),r=i.length;for(e=ne(e,n,3);r--;){var s=i[r];if(e(t[s],s,t)===!1)break}return t}function Pe(t){var e=[];return kr(t,function(t,n){Me(t)&&e.push(n)}),e.sort()}function Ae(t,e){return t?$i.call(t,e):!1}function Ne(t){for(var e=-1,n=pr(t),i=n.length,r={};++e<i;){var s=n[e];r[t[s]]=s}return r}function Ee(t){return t===!0||t===!1||t&&"object"==typeof t&&Fi.call(t)==q||!1}function Re(t){return t&&"object"==typeof t&&Fi.call(t)==B||!1}function Oe(t){return t&&1===t.nodeType||!1}function De(t){var e=!0;if(!t)return e;var n=Fi.call(t),i=t.length;return n==H||n==Y||(lr.argsClass?n==I:ye(t))||n==W&&"number"==typeof i&&Me(t.splice)?!i:(Cr(t,function(){return e=!1}),e)}function je(t,e,n,i){return ae(t,e,"function"==typeof n&&ne(n,i,2))}function Le(t){return Ki(t)&&!tr(parseFloat(t))}function Me(t){return"function"==typeof t}function Fe(t){return!(!t||!Q[typeof t])}function Ie(t){return qe(t)&&t!=+t}function He(t){return null===t}function qe(t){return"number"==typeof t||t&&"object"==typeof t&&Fi.call(t)==$||!1}function Be(t){return t&&Q[typeof t]&&Fi.call(t)==U||!1}function Xe(t){return"string"==typeof t||t&&"object"==typeof t&&Fi.call(t)==Y||!1}function ze(t){return"undefined"==typeof t}function $e(t,e,n){var i={};return e=m.createCallback(e,n,3),Cr(t,function(t,n,r){i[n]=e(t,n,r)}),i}function We(t){var e=arguments,n=2;if(!Fe(t))return t;if("number"!=typeof e[2]&&(n=e.length),n>3&&"function"==typeof e[n-2])var i=ne(e[--n-1],e[n--],2);else n>2&&"function"==typeof e[n-1]&&(i=e[--n]);for(var r=f(arguments,1,n),s=-1,o=a(),l=a();++s<n;)le(t,r[s],i,o,l);return c(o),c(l),t}function Ue(t,e,n){var i={};if("function"!=typeof e){var r=[];kr(t,function(t,e){r.push(e)}),r=re(r,oe(arguments,!0,!1,1));for(var s=-1,o=r.length;++s<o;){var a=r[s];i[a]=t[a]}}else e=m.createCallback(e,n,3),kr(t,function(t,n,r){e(t,n,r)||(i[n]=t)});return i}function Ye(t){for(var e=-1,n=pr(t),i=n.length,r=xi(i);++e<i;){var s=n[e];r[e]=[s,t[s]]}return r}function Ve(t,e,n){var i={};if("function"!=typeof e)for(var r=-1,s=oe(arguments,!0,!1,1),o=Fe(t)?s.length:0;++r<o;){var a=s[r];a in t&&(i[a]=t[a])}else e=m.createCallback(e,n,3),kr(t,function(t,n,r){e(t,n,r)&&(i[n]=t)});return i}function Je(t,e,n,i){var r=hr(t);if(null==n)if(r)n=[];else{var s=t&&t.constructor,o=s&&s.prototype;n=ee(o)}return e&&(e=m.createCallback(e,i,4),(r?xr:Cr)(t,function(t,i,r){return e(n,t,i,r)})),n}function Ge(t){for(var e=-1,n=pr(t),i=n.length,r=xi(i);++e<i;)r[e]=t[n[e]];return r}function Ze(t){var e=arguments,n=-1,i=oe(e,!0,!1,1),r=e[2]&&e[2][e[1]]===t?1:i.length,s=xi(r);for(lr.unindexedChars&&Xe(t)&&(t=t.split(""));++n<r;)s[n]=t[i[n]];return s}function Qe(t,e,n){var i=-1,r=me(),s=t?t.length:0,o=!1;return n=(0>n?nr(0,s+n):n)||0,hr(t)?o=r(t,e,n)>-1:"number"==typeof s?o=(Xe(t)?t.indexOf(e,n):r(t,e,n))>-1:xr(t,function(t){return++i>=n?!(o=t===e):void 0}),o}function Ke(t,e,n){var i=!0;if(e=m.createCallback(e,n,3),hr(t))for(var r=-1,s=t.length;++r<s&&(i=!!e(t[r],r,t)););else xr(t,function(t,n,r){return i=!!e(t,n,r)});return i}function tn(t,e,n){var i=[];if(e=m.createCallback(e,n,3),hr(t))for(var r=-1,s=t.length;++r<s;){var o=t[r];e(o,r,t)&&i.push(o)}else xr(t,function(t,n,r){e(t,n,r)&&i.push(t)});return i}function en(t,e,n){if(e=m.createCallback(e,n,3),!hr(t)){var i;return xr(t,function(t,n,r){return e(t,n,r)?(i=t,!1):void 0}),i}for(var r=-1,s=t.length;++r<s;){var o=t[r];if(e(o,r,t))return o}}function nn(t,e,n){var i;return e=m.createCallback(e,n,3),sn(t,function(t,n,r){return e(t,n,r)?(i=t,!1):void 0}),i}function rn(t,e,n){if(e&&"undefined"==typeof n&&hr(t))for(var i=-1,r=t.length;++i<r&&e(t[i],i,t)!==!1;);else xr(t,e,n);return t}function sn(t,e,n){var i=t,r=t?t.length:0;if(e=e&&"undefined"==typeof n?e:ne(e,n,3),hr(t))for(;r--&&e(t[r],r,t)!==!1;);else{if("number"!=typeof r){var s=pr(t);r=s.length}else lr.unindexedChars&&Xe(t)&&(i=t.split(""));xr(t,function(t,n,o){return n=s?s[--r]:--r,e(i[n],n,o)})}return t}function on(t,e){var n=f(arguments,2),i=-1,r="function"==typeof e,s=t?t.length:0,o=xi("number"==typeof s?s:0);return rn(t,function(t){o[++i]=(r?e:t[e]).apply(t,n)}),o}function an(t,e,n){var i=-1,r=t?t.length:0,s=xi("number"==typeof r?r:0);if(e=m.createCallback(e,n,3),hr(t))for(;++i<r;)s[i]=e(t[i],i,t);else xr(t,function(t,n,r){s[++i]=e(t,n,r)});return s}function ln(t,e,n){var r=-1/0,s=r;if("function"!=typeof e&&n&&n[e]===t&&(e=null),null==e&&hr(t))for(var o=-1,a=t.length;++o<a;){var l=t[o];l>s&&(s=l)}else e=null==e&&Xe(t)?i:m.createCallback(e,n,3),xr(t,function(t,n,i){var o=e(t,n,i);o>r&&(r=o,s=t)});return s}function un(t,e,n){var r=1/0,s=r;if("function"!=typeof e&&n&&n[e]===t&&(e=null),null==e&&hr(t))for(var o=-1,a=t.length;++o<a;){var l=t[o];s>l&&(s=l)}else e=null==e&&Xe(t)?i:m.createCallback(e,n,3),xr(t,function(t,n,i){var o=e(t,n,i);r>o&&(r=o,s=t)});return s}function cn(t,e,n,i){var r=arguments.length<3;if(e=m.createCallback(e,i,4),hr(t)){var s=-1,o=t.length;for(r&&(n=t[++s]);++s<o;)n=e(n,t[s],s,t)}else xr(t,function(t,i,s){n=r?(r=!1,t):e(n,t,i,s)});return n}function hn(t,e,n,i){var r=arguments.length<3;return e=m.createCallback(e,i,4),sn(t,function(t,i,s){n=r?(r=!1,t):e(n,t,i,s)}),n}function fn(t,e,n){return e=m.createCallback(e,n,3),tn(t,function(t,n,i){return!e(t,n,i)})}function pn(t,e,n){if(t&&"number"!=typeof t.length?t=Ge(t):lr.unindexedChars&&Xe(t)&&(t=t.split("")),null==e||n)return t?t[ue(0,t.length-1)]:d;var i=dn(t);return i.length=ir(nr(0,e),i.length),i}function dn(t){var e=-1,n=t?t.length:0,i=xi("number"==typeof n?n:0);return rn(t,function(t){var n=ue(0,++e);i[e]=i[n],i[n]=t}),i}function mn(t){var e=t?t.length:0;return"number"==typeof e?e:pr(t).length}function gn(t,e,n){var i;if(e=m.createCallback(e,n,3),hr(t))for(var r=-1,s=t.length;++r<s&&!(i=e(t[r],r,t)););else xr(t,function(t,n,r){return!(i=e(t,n,r))});return!!i}function _n(t,e,n){var i=-1,s=hr(e),o=t?t.length:0,u=xi("number"==typeof o?o:0);for(s||(e=m.createCallback(e,n,3)),rn(t,function(t,n,r){var o=u[++i]=l();s?o.criteria=an(e,function(e){return t[e]}):(o.criteria=a())[0]=e(t,n,r),o.index=i,o.value=t}),o=u.length,u.sort(r);o--;){var f=u[o];u[o]=f.value,s||c(f.criteria),h(f)}return u}function vn(t){return t&&"number"==typeof t.length?lr.unindexedChars&&Xe(t)?t.split(""):f(t):Ge(t)}function yn(t){for(var e=-1,n=t?t.length:0,i=[];++e<n;){var r=t[e];r&&i.push(r)}return i}function bn(t){return re(t,oe(arguments,!0,!0,1))}function xn(t,e,n){var i=-1,r=t?t.length:0;for(e=m.createCallback(e,n,3);++i<r;)if(e(t[i],i,t))return i;return-1}function wn(t,e,n){var i=t?t.length:0;for(e=m.createCallback(e,n,3);i--;)if(e(t[i],i,t))return i;return-1}function Tn(t,e,n){var i=0,r=t?t.length:0;if("number"!=typeof e&&null!=e){var s=-1;for(e=m.createCallback(e,n,3);++s<r&&e(t[s],s,t);)i++}else if(i=e,null==i||n)return t?t[0]:d;return f(t,0,ir(nr(0,i),r))}function kn(t,e,n,i){return"boolean"!=typeof e&&null!=e&&(i=n,n="function"!=typeof e&&i&&i[e]===t?null:e,e=!1),null!=n&&(t=an(t,n,i)),oe(t,e)}function Cn(e,n,i){if("number"==typeof i){var r=e?e.length:0;i=0>i?nr(0,r+i):i||0}else if(i){var s=jn(e,n);return e[s]===n?s:-1}return t(e,n,i)}function Sn(t,e,n){var i=0,r=t?t.length:0;if("number"!=typeof e&&null!=e){var s=r;for(e=m.createCallback(e,n,3);s--&&e(t[s],s,t);)i++}else i=null==e||n?1:e||i;return f(t,0,ir(nr(0,r-i),r))}function Pn(){for(var n=[],i=-1,r=arguments.length,o=a(),l=me(),u=l===t,f=a();++i<r;){var p=arguments[i];(hr(p)||ye(p))&&(n.push(p),o.push(u&&p.length>=b&&s(i?n[i]:f)))}var d=n[0],m=-1,g=d?d.length:0,_=[];t:for(;++m<g;){var v=o[0];if(p=d[m],(v?e(v,p):l(f,p))<0){for(i=r,(v||f).push(p);--i;)if(v=o[i],(v?e(v,p):l(n[i],p))<0)continue t;_.push(p)}}for(;r--;)v=o[r],v&&h(v);return c(o),c(f),_}function An(t,e,n){var i=0,r=t?t.length:0;if("number"!=typeof e&&null!=e){var s=r;for(e=m.createCallback(e,n,3);s--&&e(t[s],s,t);)i++}else if(i=e,null==i||n)return t?t[r-1]:d;return f(t,nr(0,r-i))}function Nn(t,e,n){var i=t?t.length:0;for("number"==typeof n&&(i=(0>n?nr(0,i+n):ir(n,i-1))+1);i--;)if(t[i]===e)return i;return-1}function En(t){for(var e=arguments,n=0,i=e.length,r=t?t.length:0;++n<i;)for(var s=-1,o=e[n];++s<r;)t[s]===o&&(Vi.call(t,s--,1),r--);return t}function Rn(t,e,n){t=+t||0,n="number"==typeof n?n:+n||1,null==e&&(e=t,t=0);for(var i=-1,r=nr(0,Hi((e-t)/(n||1))),s=xi(r);++i<r;)s[i]=t,t+=n;return s}function On(t,e,n){var i=-1,r=t?t.length:0,s=[];for(e=m.createCallback(e,n,3);++i<r;){var o=t[i];e(o,i,t)&&(s.push(o),Vi.call(t,i--,1),r--)}return s}function Dn(t,e,n){if("number"!=typeof e&&null!=e){var i=0,r=-1,s=t?t.length:0;for(e=m.createCallback(e,n,3);++r<s&&e(t[r],r,t);)i++}else i=null==e||n?1:nr(0,e);return f(t,i)}function jn(t,e,n,i){var r=0,s=t?t.length:r;for(n=n?m.createCallback(n,i,1):si,e=n(e);s>r;){var o=r+s>>>1;n(t[o])<e?r=o+1:s=o}return r}function Ln(){return ce(oe(arguments,!0,!0))}function Mn(t,e,n,i){return"boolean"!=typeof e&&null!=e&&(i=n,n="function"!=typeof e&&i&&i[e]===t?null:e,e=!1),null!=n&&(n=m.createCallback(n,i,3)),ce(t,e,n)}function Fn(t){return re(t,f(arguments,1))}function In(){for(var t=-1,e=arguments.length;++t<e;){var n=arguments[t];if(hr(n)||ye(n))var i=i?ce(re(i,n).concat(re(n,i))):n}return i||[]}function Hn(){for(var t=arguments.length>1?arguments:arguments[0],e=-1,n=t?ln(Er(t,"length")):0,i=xi(0>n?0:n);++e<n;)i[e]=Er(t,e);return i}function qn(t,e){var n=-1,i=t?t.length:0,r={};for(e||!i||hr(t[0])||(e=[]);++n<i;){var s=t[n];e?r[s]=e[n]:s&&(r[s[0]]=s[1])}return r}function Bn(t,e){if(!Me(e))throw new Ri;return function(){return--t<1?e.apply(this,arguments):void 0}}function Xn(t,e){return arguments.length>2?fe(t,17,f(arguments,2),null,e):fe(t,1,null,null,e)}function zn(t){for(var e=arguments.length>1?oe(arguments,!0,!1,1):Pe(t),n=-1,i=e.length;++n<i;){var r=e[n];t[r]=fe(t[r],1,null,null,t)}return t}function $n(t,e){return arguments.length>2?fe(e,19,f(arguments,2),null,t):fe(e,3,null,null,t)}function Wn(){for(var t=arguments,e=t.length;e--;)if(!Me(t[e]))throw new Ri;return function(){for(var e=arguments,n=t.length;n--;)e=[t[n].apply(this,e)];return e[0]}}function Un(t,e){return e="number"==typeof e?e:+e||t.length,fe(t,4,null,null,null,e)}function Yn(t,e,n){var i,r,s,o,a,l,u,c=0,h=!1,f=!0;if(!Me(t))throw new Ri;if(e=nr(0,e)||0,n===!0){var p=!0;f=!1}else Fe(n)&&(p=n.leading,h="maxWait"in n&&(nr(e,n.maxWait)||0),f="trailing"in n?n.trailing:f);var m=function(){var n=e-(Or()-o);if(0>=n){r&&qi(r);var h=u;r=l=u=d,h&&(c=Or(),s=t.apply(a,i),l||r||(i=a=null))}else l=Yi(m,n)},g=function(){l&&qi(l),r=l=u=d,(f||h!==e)&&(c=Or(),s=t.apply(a,i),l||r||(i=a=null))};return function(){if(i=arguments,o=Or(),a=this,u=f&&(l||!p),h===!1)var n=p&&!l;else{r||p||(c=o);var d=h-(o-c),_=0>=d;_?(r&&(r=qi(r)),c=o,s=t.apply(a,i)):r||(r=Yi(g,d))}return _&&l?l=qi(l):l||e===h||(l=Yi(m,e)),n&&(_=!0,s=t.apply(a,i)),!_||l||r||(i=a=null),s}}function Vn(t){if(!Me(t))throw new Ri;var e=f(arguments,1);return Yi(function(){t.apply(d,e)},1)}function Jn(t,e){if(!Me(t))throw new Ri;var n=f(arguments,2);return Yi(function(){t.apply(d,n)},e)}function Gn(t,e){if(!Me(t))throw new Ri;var n=function(){var i=n.cache,r=e?e.apply(this,arguments):y+arguments[0];return $i.call(i,r)?i[r]:i[r]=t.apply(this,arguments)};return n.cache={},n}function Zn(t){var e,n;if(!Me(t))throw new Ri;return function(){return e?n:(e=!0,n=t.apply(this,arguments),t=null,n)}}function Qn(t){return fe(t,16,f(arguments,1))}function Kn(t){return fe(t,32,null,f(arguments,1))}function ti(t,e,n){var i=!0,r=!0;if(!Me(t))throw new Ri;return n===!1?i=!1:Fe(n)&&(i="leading"in n?n.leading:i,r="trailing"in n?n.trailing:r),J.leading=i,J.maxWait=e,J.trailing=r,Yn(t,e,J)}function ei(t,e){return fe(e,16,[t])}function ni(t){return function(){return t}}function ii(t,e,n){var i=typeof t;if(null==t||"function"==i)return ne(t,e,n);if("object"!=i)return ui(t);var r=pr(t),s=r[0],o=t[s];return 1!=r.length||o!==o||Fe(o)?function(e){for(var n=r.length,i=!1;n--&&(i=ae(e[r[n]],t[r[n]],null,!0)););return i}:function(t){var e=t[s];return o===e&&(0!==o||1/o==1/e)}}function ri(t){return null==t?"":Ei(t).replace(br,de)}function si(t){return t}function oi(t,e,n){var i=!0,r=e&&Pe(e);e&&(n||r.length)||(null==n&&(n=e),s=g,e=t,t=m,r=Pe(e)),n===!1?i=!1:Fe(n)&&"chain"in n&&(i=n.chain);var s=t,o=Me(s);rn(r,function(n){var r=t[n]=e[n];o&&(s.prototype[n]=function(){var e=this.__chain__,n=this.__wrapped__,o=[n];Wi.apply(o,arguments);var a=r.apply(t,o);if(i||e){if(n===a&&Fe(a))return this;a=new s(a),a.__chain__=e}return a})})}function ai(){return n._=Mi,this}function li(){}function ui(t){return function(e){return e[t]}}function ci(t,e,n){var i=null==t,r=null==e;if(null==n&&("boolean"==typeof t&&r?(n=t,t=1):r||"boolean"!=typeof e||(n=e,r=!0)),i&&r&&(e=1),t=+t||0,r?(e=t,t=0):e=+e||0,n||t%1||e%1){var s=sr();return ir(t+s*(e-t+parseFloat("1e-"+((s+"").length-1))),e)}return ue(t,e)}function hi(t,e){if(t){var n=t[e];return Me(n)?t[e]():n}}function fi(t,e,n){var i=m.templateSettings;t=Ei(t||""),n=Tr({},n,i);var r,s=Tr({},n.imports,i.imports),a=pr(s),l=Ge(s),u=0,c=n.interpolate||O,h="__p += '",f=Ni((n.escape||O).source+"|"+c.source+"|"+(c===E?P:O).source+"|"+(n.evaluate||O).source+"|$","g");t.replace(f,function(e,n,i,s,a,l){return i||(i=s),h+=t.slice(u,l).replace(j,o),n&&(h+="' +\n__e("+n+") +\n'"),a&&(r=!0,h+="';\n"+a+";\n__p += '"),i&&(h+="' +\n((__t = ("+i+")) == null ? '' : __t) +\n'"),u=l+e.length,e}),h+="';\n";var p=n.variable,g=p;g||(p="obj",h="with ("+p+") {\n"+h+"\n}\n"),h=(r?h.replace(T,""):h).replace(C,"$1").replace(S,"$1;"),h="function("+p+") {\n"+(g?"":p+" || ("+p+" = {});\n")+"var __t, __p = '', __e = _.escape"+(r?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+h+"return __p\n}";var _="\n/*\n//# sourceURL="+(n.sourceURL||"/lodash/template/source["+F++ +"]")+"\n*/";try{var v=Ci(a,"return "+h+_).apply(d,l)}catch(y){throw y.source=h,y}return e?v(e):(v.source=h,v)}function pi(t,e,n){t=(t=+t)>-1?t:0;var i=-1,r=xi(t);for(e=ne(e,n,1);++i<t;)r[i]=e(i);return r}function di(t){return null==t?"":Ei(t).replace(yr,ve)}function mi(t){var e=++_;return Ei(null==t?"":t)+e}function gi(t){return t=new g(t),t.__chain__=!0,t}function _i(t,e){return e(t),t}function vi(){return this.__chain__=!0,this}function yi(){return Ei(this.__wrapped__)}function bi(){return this.__wrapped__}n=n?se.defaults(te.Object(),n,se.pick(te,L)):te;var xi=n.Array,wi=n.Boolean,Ti=n.Date,ki=n.Error,Ci=n.Function,Si=n.Math,Pi=n.Number,Ai=n.Object,Ni=n.RegExp,Ei=n.String,Ri=n.TypeError,Oi=[],Di=ki.prototype,ji=Ai.prototype,Li=Ei.prototype,Mi=n._,Fi=ji.toString,Ii=Ni("^"+Ei(Fi).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),Hi=Si.ceil,qi=n.clearTimeout,Bi=Si.floor,Xi=Ci.prototype.toString,zi=ge(zi=Ai.getPrototypeOf)&&zi,$i=ji.hasOwnProperty,Wi=Oi.push,Ui=ji.propertyIsEnumerable,Yi=n.setTimeout,Vi=Oi.splice,Ji=Oi.unshift,Gi=function(){try{var t={},e=ge(e=Ai.defineProperty)&&e,n=e(t,t,t)&&e}catch(i){}return n}(),Zi=ge(Zi=Ai.create)&&Zi,Qi=ge(Qi=xi.isArray)&&Qi,Ki=n.isFinite,tr=n.isNaN,er=ge(er=Ai.keys)&&er,nr=Si.max,ir=Si.min,rr=n.parseInt,sr=Si.random,or={};or[H]=xi,or[q]=wi,or[B]=Ti,or[z]=Ci,or[W]=Ai,or[$]=Pi,or[U]=Ni,or[Y]=Ei;var ar={};ar[H]=ar[B]=ar[$]={constructor:!0,toLocaleString:!0,toString:!0,valueOf:!0},ar[q]=ar[Y]={constructor:!0,toString:!0,valueOf:!0},ar[X]=ar[z]=ar[U]={constructor:!0,toString:!0},ar[W]={constructor:!0},function(){for(var t=M.length;t--;){var e=M[t];for(var n in ar)$i.call(ar,n)&&!$i.call(ar[n],e)&&(ar[n][e]=!1)}}(),g.prototype=m.prototype;var lr=m.support={};!function(){var t=function(){this.x=1},e={0:1,length:1},i=[];t.prototype={valueOf:1,y:1};for(var r in new t)i.push(r);for(r in arguments);lr.argsClass=Fi.call(arguments)==I,lr.argsObject=arguments.constructor==Ai&&!(arguments instanceof xi),lr.enumErrorProps=Ui.call(Di,"message")||Ui.call(Di,"name"),lr.enumPrototypes=Ui.call(t,"prototype"),lr.funcDecomp=!ge(n.WinRTError)&&D.test(p),lr.funcNames="string"==typeof Ci.name,lr.nonEnumArgs=0!=r,lr.nonEnumShadows=!/valueOf/.test(i),lr.ownLast="x"!=i[0],lr.spliceObjects=(Oi.splice.call(e,0,1),!e[0]),lr.unindexedChars="x"[0]+Ai("x")[0]!="xx";try{lr.nodeClass=!(Fi.call(document)==W&&!({toString:0}+""))}catch(s){lr.nodeClass=!0}}(1),m.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:E,variable:"",imports:{_:m}};var ur=function(t){var e="var index, iterable = "+t.firstArg+", result = "+t.init+";\nif (!iterable) return result;\n"+t.top+";";t.array?(e+="\nvar length = iterable.length; index = -1;\nif ("+t.array+") {  ",lr.unindexedChars&&(e+="\n  if (isString(iterable)) {\n    iterable = iterable.split('')\n  }  "),e+="\n  while (++index < length) {\n    "+t.loop+";\n  }\n}\nelse {  "):lr.nonEnumArgs&&(e+="\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += '';\n      "+t.loop+";\n    }\n  } else {  "),lr.enumPrototypes&&(e+="\n  var skipProto = typeof iterable == 'function';\n  "),lr.enumErrorProps&&(e+="\n  var skipErrorProps = iterable === errorProto || iterable instanceof Error;\n  ");var n=[];if(lr.enumPrototypes&&n.push('!(skipProto && index == "prototype")'),lr.enumErrorProps&&n.push('!(skipErrorProps && (index == "message" || index == "name"))'),t.useHas&&t.keys)e+="\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] && keys(iterable),\n      length = ownProps ? ownProps.length : 0;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n",n.length&&(e+="    if ("+n.join(" && ")+") {\n  "),e+=t.loop+";    ",n.length&&(e+="\n    }"),e+="\n  }  ";else if(e+="\n  for (index in iterable) {\n",t.useHas&&n.push("hasOwnProperty.call(iterable, index)"),n.length&&(e+="    if ("+n.join(" && ")+") {\n  "),e+=t.loop+";    ",n.length&&(e+="\n    }"),e+="\n  }    ",lr.nonEnumShadows){for(e+="\n\n  if (iterable !== objectProto) {\n    var ctor = iterable.constructor,\n        isProto = iterable === (ctor && ctor.prototype),\n        className = iterable === stringProto ? stringClass : iterable === errorProto ? errorClass : toString.call(iterable),\n        nonEnum = nonEnumProps[className];\n      ",k=0;7>k;k++)e+="\n    index = '"+t.shadowedProps[k]+"';\n    if ((!(isProto && nonEnum[index]) && hasOwnProperty.call(iterable, index))",t.useHas||(e+=" || (!nonEnum[index] && iterable[index] !== objectProto[index])"),e+=") {\n      "+t.loop+";\n    }      ";e+="\n  }    "}return(t.array||lr.nonEnumArgs)&&(e+="\n}"),e+=t.bottom+";\nreturn result"};Zi||(ee=function(){function t(){}return function(e){if(Fe(e)){t.prototype=e;var i=new t;t.prototype=null}return i||n.Object()}}());var cr=Gi?function(t,e){G.value=e,Gi(t,"__bindData__",G)}:li;lr.argsClass||(ye=function(t){return t&&"object"==typeof t&&"number"==typeof t.length&&$i.call(t,"callee")&&!Ui.call(t,"callee")||!1});var hr=Qi||function(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Fi.call(t)==H||!1},fr=pe({args:"object",init:"[]",top:"if (!(objectTypes[typeof object])) return result",loop:"result.push(index)"}),pr=er?function(t){return Fe(t)?lr.enumPrototypes&&"function"==typeof t||lr.nonEnumArgs&&t.length&&ye(t)?fr(t):er(t):[]}:fr,dr={args:"collection, callback, thisArg",top:"callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3)",array:"typeof length == 'number'",keys:pr,loop:"if (callback(iterable[index], index, collection) === false) return result"},mr={args:"object, source, guard",top:"var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",keys:pr,loop:"if (typeof result[index] == 'undefined') result[index] = iterable[index]",bottom:"  }\n}"},gr={top:"if (!objectTypes[typeof iterable]) return result;\n"+dr.top,array:!1},_r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},vr=Ne(_r),yr=Ni("("+pr(vr).join("|")+")","g"),br=Ni("["+pr(_r).join("")+"]","g"),xr=pe(dr),wr=pe(mr,{top:mr.top.replace(";",";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = baseCreateCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),loop:"result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"}),Tr=pe(mr),kr=pe(dr,gr,{useHas:!1}),Cr=pe(dr,gr);Me(/x/)&&(Me=function(t){return"function"==typeof t&&Fi.call(t)==z});var Sr=zi?function(t){if(!t||Fi.call(t)!=W||!lr.argsClass&&ye(t))return!1;var e=t.valueOf,n=ge(e)&&(n=zi(e))&&zi(n);return n?t==n||zi(t)==n:_e(t)}:_e,Pr=he(function(t,e,n){$i.call(t,n)?t[n]++:t[n]=1}),Ar=he(function(t,e,n){($i.call(t,n)?t[n]:t[n]=[]).push(e)}),Nr=he(function(t,e,n){t[n]=e}),Er=an,Rr=tn,Or=ge(Or=Ti.now)&&Or||function(){return(new Ti).getTime()},Dr=8==rr(w+"08")?rr:function(t,e){return rr(Xe(t)?t.replace(R,""):t,e||0)};return m.after=Bn,m.assign=wr,m.at=Ze,m.bind=Xn,m.bindAll=zn,m.bindKey=$n,m.chain=gi,m.compact=yn,m.compose=Wn,m.constant=ni,m.countBy=Pr,m.create=we,m.createCallback=ii,m.curry=Un,m.debounce=Yn,m.defaults=Tr,m.defer=Vn,m.delay=Jn,m.difference=bn,m.filter=tn,m.flatten=kn,m.forEach=rn,m.forEachRight=sn,m.forIn=kr,m.forInRight=Ce,m.forOwn=Cr,m.forOwnRight=Se,m.functions=Pe,m.groupBy=Ar,m.indexBy=Nr,m.initial=Sn,m.intersection=Pn,m.invert=Ne,m.invoke=on,m.keys=pr,m.map=an,m.mapValues=$e,m.max=ln,m.memoize=Gn,m.merge=We,m.min=un,m.omit=Ue,m.once=Zn,m.pairs=Ye,m.partial=Qn,m.partialRight=Kn,m.pick=Ve,m.pluck=Er,m.property=ui,m.pull=En,m.range=Rn,m.reject=fn,m.remove=On,m.rest=Dn,m.shuffle=dn,m.sortBy=_n,m.tap=_i,m.throttle=ti,m.times=pi,m.toArray=vn,m.transform=Je,m.union=Ln,m.uniq=Mn,m.values=Ge,m.where=Rr,m.without=Fn,m.wrap=ei,m.xor=In,m.zip=Hn,m.zipObject=qn,m.collect=an,m.drop=Dn,m.each=rn,m.eachRight=sn,m.extend=wr,m.methods=Pe,m.object=qn,m.select=tn,m.tail=Dn,m.unique=Mn,m.unzip=Hn,oi(m),m.clone=be,m.cloneDeep=xe,m.contains=Qe,m.escape=ri,m.every=Ke,m.find=en,m.findIndex=xn,m.findKey=Te,m.findLast=nn,m.findLastIndex=wn,m.findLastKey=ke,m.has=Ae,m.identity=si,m.indexOf=Cn,m.isArguments=ye,m.isArray=hr,m.isBoolean=Ee,m.isDate=Re,m.isElement=Oe,m.isEmpty=De,m.isEqual=je,m.isFinite=Le,m.isFunction=Me,m.isNaN=Ie,m.isNull=He,m.isNumber=qe,m.isObject=Fe,m.isPlainObject=Sr,m.isRegExp=Be,m.isString=Xe,m.isUndefined=ze,m.lastIndexOf=Nn,m.mixin=oi,m.noConflict=ai,m.noop=li,m.now=Or,m.parseInt=Dr,m.random=ci,m.reduce=cn,m.reduceRight=hn,m.result=hi,m.runInContext=p,m.size=mn,m.some=gn,m.sortedIndex=jn,m.template=fi,m.unescape=di,m.uniqueId=mi,m.all=Ke,m.any=gn,m.detect=en,m.findWhere=en,m.foldl=cn,m.foldr=hn,m.include=Qe,m.inject=cn,oi(function(){var t={};return Cr(m,function(e,n){m.prototype[n]||(t[n]=e)}),t}(),!1),m.first=Tn,m.last=An,m.sample=pn,m.take=Tn,m.head=Tn,Cr(m,function(t,e){var n="sample"!==e;m.prototype[e]||(m.prototype[e]=function(e,i){var r=this.__chain__,s=t(this.__wrapped__,e,i);return r||null!=e&&(!i||n&&"function"==typeof e)?new g(s,r):s})}),m.VERSION="2.4.1",m.prototype.chain=vi,m.prototype.toString=yi,m.prototype.value=bi,m.prototype.valueOf=bi,xr(["join","pop","shift"],function(t){var e=Oi[t];m.prototype[t]=function(){var t=this.__chain__,n=e.apply(this.__wrapped__,arguments);return t?new g(n,t):n}}),xr(["push","reverse","sort","unshift"],function(t){var e=Oi[t];m.prototype[t]=function(){return e.apply(this.__wrapped__,arguments),this}}),xr(["concat","slice","splice"],function(t){var e=Oi[t];m.prototype[t]=function(){return new g(e.apply(this.__wrapped__,arguments),this.__chain__)}}),lr.spliceObjects||xr(["pop","shift","splice"],function(t){var e=Oi[t],n="splice"==t;m.prototype[t]=function(){var t=this.__chain__,i=this.__wrapped__,r=e.apply(i,arguments);return 0===i.length&&delete i[0],t||n?new g(r,t):r}}),m}var d,m=[],g=[],_=0,v={},y=+new Date+"",b=75,x=40,w=" 	\f ﻿\n\r\u2028\u2029 ᠎             　",T=/\b__p \+= '';/g,C=/\b(__p \+=) '' \+/g,S=/(__e\(.*?\)|\b__t\)) \+\n'';/g,P=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,A=/\w*$/,N=/^\s*function[ \n\r\t]+\w/,E=/<%=([\s\S]+?)%>/g,R=RegExp("^["+w+"]*0+(?=.$)"),O=/($^)/,D=/\bthis\b/,j=/['\n\r\t\u2028\u2029\\]/g,L=["Array","Boolean","Date","Error","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setTimeout"],M=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],F=0,I="[object Arguments]",H="[object Array]",q="[object Boolean]",B="[object Date]",X="[object Error]",z="[object Function]",$="[object Number]",W="[object Object]",U="[object RegExp]",Y="[object String]",V={};
V[z]=!1,V[I]=V[H]=V[q]=V[B]=V[$]=V[W]=V[U]=V[Y]=!0;var J={leading:!1,maxWait:0,trailing:!1},G={configurable:!1,enumerable:!1,value:null,writable:!1},Z={args:"",array:null,bottom:"",firstArg:"",init:"",keys:null,loop:"",shadowedProps:null,support:null,top:"",useHas:!1},Q={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},K={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},te=Q[typeof window]&&window||this,ee=Q[typeof exports]&&exports&&!exports.nodeType&&exports,ne=Q[typeof module]&&module&&!module.nodeType&&module,ie=ne&&ne.exports===ee&&ee,re=Q[typeof global]&&global;!re||re.global!==re&&re.window!==re||(te=re);var se=p();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(te._=se,define(function(){return se})):ee&&ne?ie?(ne.exports=se)._=se:ee._=se:te._=se}).call(this),function(t,e){function n(t){var e=t.length,n=ce.type(t);return ce.isWindow(t)?!1:1===t.nodeType&&e?!0:"array"===n||"function"!==n&&(0===e||"number"==typeof e&&e>0&&e-1 in t)}function i(t){var e=Ce[t]={};return ce.each(t.match(fe)||[],function(t,n){e[n]=!0}),e}function r(t,n,i,r){if(ce.acceptData(t)){var s,o,a=ce.expando,l=t.nodeType,u=l?ce.cache:t,c=l?t[a]:t[a]&&a;if(c&&u[c]&&(r||u[c].data)||i!==e||"string"!=typeof n)return c||(c=l?t[a]=ee.pop()||ce.guid++:a),u[c]||(u[c]=l?{}:{toJSON:ce.noop}),("object"==typeof n||"function"==typeof n)&&(r?u[c]=ce.extend(u[c],n):u[c].data=ce.extend(u[c].data,n)),o=u[c],r||(o.data||(o.data={}),o=o.data),i!==e&&(o[ce.camelCase(n)]=i),"string"==typeof n?(s=o[n],null==s&&(s=o[ce.camelCase(n)])):s=o,s}}function s(t,e,n){if(ce.acceptData(t)){var i,r,s=t.nodeType,o=s?ce.cache:t,l=s?t[ce.expando]:ce.expando;if(o[l]){if(e&&(i=n?o[l]:o[l].data)){ce.isArray(e)?e=e.concat(ce.map(e,ce.camelCase)):e in i?e=[e]:(e=ce.camelCase(e),e=e in i?[e]:e.split(" ")),r=e.length;for(;r--;)delete i[e[r]];if(n?!a(i):!ce.isEmptyObject(i))return}(n||(delete o[l].data,a(o[l])))&&(s?ce.cleanData([t],!0):ce.support.deleteExpando||o!=o.window?delete o[l]:o[l]=null)}}}function o(t,n,i){if(i===e&&1===t.nodeType){var r="data-"+n.replace(Pe,"-$1").toLowerCase();if(i=t.getAttribute(r),"string"==typeof i){try{i="true"===i?!0:"false"===i?!1:"null"===i?null:+i+""===i?+i:Se.test(i)?ce.parseJSON(i):i}catch(s){}ce.data(t,n,i)}else i=e}return i}function a(t){var e;for(e in t)if(("data"!==e||!ce.isEmptyObject(t[e]))&&"toJSON"!==e)return!1;return!0}function l(){return!0}function u(){return!1}function c(){try{return G.activeElement}catch(t){}}function h(t,e){do t=t[e];while(t&&1!==t.nodeType);return t}function f(t,e,n){if(ce.isFunction(e))return ce.grep(t,function(t,i){return!!e.call(t,i,t)!==n});if(e.nodeType)return ce.grep(t,function(t){return t===e!==n});if("string"==typeof e){if(Xe.test(e))return ce.filter(e,t,n);e=ce.filter(e,t)}return ce.grep(t,function(t){return ce.inArray(t,e)>=0!==n})}function p(t){var e=Ue.split("|"),n=t.createDocumentFragment();if(n.createElement)for(;e.length;)n.createElement(e.pop());return n}function d(t,e){return ce.nodeName(t,"table")&&ce.nodeName(1===e.nodeType?e:e.firstChild,"tr")?t.getElementsByTagName("tbody")[0]||t.appendChild(t.ownerDocument.createElement("tbody")):t}function m(t){return t.type=(null!==ce.find.attr(t,"type"))+"/"+t.type,t}function g(t){var e=sn.exec(t.type);return e?t.type=e[1]:t.removeAttribute("type"),t}function _(t,e){for(var n,i=0;null!=(n=t[i]);i++)ce._data(n,"globalEval",!e||ce._data(e[i],"globalEval"))}function v(t,e){if(1===e.nodeType&&ce.hasData(t)){var n,i,r,s=ce._data(t),o=ce._data(e,s),a=s.events;if(a){delete o.handle,o.events={};for(n in a)for(i=0,r=a[n].length;r>i;i++)ce.event.add(e,n,a[n][i])}o.data&&(o.data=ce.extend({},o.data))}}function y(t,e){var n,i,r;if(1===e.nodeType){if(n=e.nodeName.toLowerCase(),!ce.support.noCloneEvent&&e[ce.expando]){r=ce._data(e);for(i in r.events)ce.removeEvent(e,i,r.handle);e.removeAttribute(ce.expando)}"script"===n&&e.text!==t.text?(m(e).text=t.text,g(e)):"object"===n?(e.parentNode&&(e.outerHTML=t.outerHTML),ce.support.html5Clone&&t.innerHTML&&!ce.trim(e.innerHTML)&&(e.innerHTML=t.innerHTML)):"input"===n&&en.test(t.type)?(e.defaultChecked=e.checked=t.checked,e.value!==t.value&&(e.value=t.value)):"option"===n?e.defaultSelected=e.selected=t.defaultSelected:("input"===n||"textarea"===n)&&(e.defaultValue=t.defaultValue)}}function b(t,n){var i,r,s=0,o=typeof t.getElementsByTagName!==V?t.getElementsByTagName(n||"*"):typeof t.querySelectorAll!==V?t.querySelectorAll(n||"*"):e;if(!o)for(o=[],i=t.childNodes||t;null!=(r=i[s]);s++)!n||ce.nodeName(r,n)?o.push(r):ce.merge(o,b(r,n));return n===e||n&&ce.nodeName(t,n)?ce.merge([t],o):o}function x(t){en.test(t.type)&&(t.defaultChecked=t.checked)}function w(t,e){if(e in t)return e;for(var n=e.charAt(0).toUpperCase()+e.slice(1),i=e,r=Cn.length;r--;)if(e=Cn[r]+n,e in t)return e;return i}function T(t,e){return t=e||t,"none"===ce.css(t,"display")||!ce.contains(t.ownerDocument,t)}function k(t,e){for(var n,i,r,s=[],o=0,a=t.length;a>o;o++)i=t[o],i.style&&(s[o]=ce._data(i,"olddisplay"),n=i.style.display,e?(s[o]||"none"!==n||(i.style.display=""),""===i.style.display&&T(i)&&(s[o]=ce._data(i,"olddisplay",A(i.nodeName)))):s[o]||(r=T(i),(n&&"none"!==n||!r)&&ce._data(i,"olddisplay",r?n:ce.css(i,"display"))));for(o=0;a>o;o++)i=t[o],i.style&&(e&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=e?s[o]||"":"none"));return t}function C(t,e,n){var i=vn.exec(e);return i?Math.max(0,i[1]-(n||0))+(i[2]||"px"):e}function S(t,e,n,i,r){for(var s=n===(i?"border":"content")?4:"width"===e?1:0,o=0;4>s;s+=2)"margin"===n&&(o+=ce.css(t,n+kn[s],!0,r)),i?("content"===n&&(o-=ce.css(t,"padding"+kn[s],!0,r)),"margin"!==n&&(o-=ce.css(t,"border"+kn[s]+"Width",!0,r))):(o+=ce.css(t,"padding"+kn[s],!0,r),"padding"!==n&&(o+=ce.css(t,"border"+kn[s]+"Width",!0,r)));return o}function P(t,e,n){var i=!0,r="width"===e?t.offsetWidth:t.offsetHeight,s=hn(t),o=ce.support.boxSizing&&"border-box"===ce.css(t,"boxSizing",!1,s);if(0>=r||null==r){if(r=fn(t,e,s),(0>r||null==r)&&(r=t.style[e]),yn.test(r))return r;i=o&&(ce.support.boxSizingReliable||r===t.style[e]),r=parseFloat(r)||0}return r+S(t,e,n||(o?"border":"content"),i,s)+"px"}function A(t){var e=G,n=xn[t];return n||(n=N(t,e),"none"!==n&&n||(cn=(cn||ce("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(e.documentElement),e=(cn[0].contentWindow||cn[0].contentDocument).document,e.write("<!doctype html><html><body>"),e.close(),n=N(t,e),cn.detach()),xn[t]=n),n}function N(t,e){var n=ce(e.createElement(t)).appendTo(e.body),i=ce.css(n[0],"display");return n.remove(),i}function E(t,e,n,i){var r;if(ce.isArray(e))ce.each(e,function(e,r){n||Pn.test(t)?i(t,r):E(t+"["+("object"==typeof r?e:"")+"]",r,n,i)});else if(n||"object"!==ce.type(e))i(t,e);else for(r in e)E(t+"["+r+"]",e[r],n,i)}function R(t){return function(e,n){"string"!=typeof e&&(n=e,e="*");var i,r=0,s=e.toLowerCase().match(fe)||[];if(ce.isFunction(n))for(;i=s[r++];)"+"===i[0]?(i=i.slice(1)||"*",(t[i]=t[i]||[]).unshift(n)):(t[i]=t[i]||[]).push(n)}}function O(t,e,n,i){function r(a){var l;return s[a]=!0,ce.each(t[a]||[],function(t,a){var u=a(e,n,i);return"string"!=typeof u||o||s[u]?o?!(l=u):void 0:(e.dataTypes.unshift(u),r(u),!1)}),l}var s={},o=t===$n;return r(e.dataTypes[0])||!s["*"]&&r("*")}function D(t,n){var i,r,s=ce.ajaxSettings.flatOptions||{};for(r in n)n[r]!==e&&((s[r]?t:i||(i={}))[r]=n[r]);return i&&ce.extend(!0,t,i),t}function j(t,n,i){for(var r,s,o,a,l=t.contents,u=t.dataTypes;"*"===u[0];)u.shift(),s===e&&(s=t.mimeType||n.getResponseHeader("Content-Type"));if(s)for(a in l)if(l[a]&&l[a].test(s)){u.unshift(a);break}if(u[0]in i)o=u[0];else{for(a in i){if(!u[0]||t.converters[a+" "+u[0]]){o=a;break}r||(r=a)}o=o||r}return o?(o!==u[0]&&u.unshift(o),i[o]):void 0}function L(t,e,n,i){var r,s,o,a,l,u={},c=t.dataTypes.slice();if(c[1])for(o in t.converters)u[o.toLowerCase()]=t.converters[o];for(s=c.shift();s;)if(t.responseFields[s]&&(n[t.responseFields[s]]=e),!l&&i&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=s,s=c.shift())if("*"===s)s=l;else if("*"!==l&&l!==s){if(o=u[l+" "+s]||u["* "+s],!o)for(r in u)if(a=r.split(" "),a[1]===s&&(o=u[l+" "+a[0]]||u["* "+a[0]])){o===!0?o=u[r]:u[r]!==!0&&(s=a[0],c.unshift(a[1]));break}if(o!==!0)if(o&&t["throws"])e=o(e);else try{e=o(e)}catch(h){return{state:"parsererror",error:o?h:"No conversion from "+l+" to "+s}}}return{state:"success",data:e}}function M(){try{return new t.XMLHttpRequest}catch(e){}}function F(){try{return new t.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}function I(){return setTimeout(function(){Kn=e}),Kn=ce.now()}function H(t,e,n){for(var i,r=(si[e]||[]).concat(si["*"]),s=0,o=r.length;o>s;s++)if(i=r[s].call(n,e,t))return i}function q(t,e,n){var i,r,s=0,o=ri.length,a=ce.Deferred().always(function(){delete l.elem}),l=function(){if(r)return!1;for(var e=Kn||I(),n=Math.max(0,u.startTime+u.duration-e),i=n/u.duration||0,s=1-i,o=0,l=u.tweens.length;l>o;o++)u.tweens[o].run(s);return a.notifyWith(t,[u,s,n]),1>s&&l?n:(a.resolveWith(t,[u]),!1)},u=a.promise({elem:t,props:ce.extend({},e),opts:ce.extend(!0,{specialEasing:{}},n),originalProperties:e,originalOptions:n,startTime:Kn||I(),duration:n.duration,tweens:[],createTween:function(e,n){var i=ce.Tween(t,u.opts,e,n,u.opts.specialEasing[e]||u.opts.easing);return u.tweens.push(i),i},stop:function(e){var n=0,i=e?u.tweens.length:0;if(r)return this;for(r=!0;i>n;n++)u.tweens[n].run(1);return e?a.resolveWith(t,[u,e]):a.rejectWith(t,[u,e]),this}}),c=u.props;for(B(c,u.opts.specialEasing);o>s;s++)if(i=ri[s].call(u,t,c,u.opts))return i;return ce.map(c,H,u),ce.isFunction(u.opts.start)&&u.opts.start.call(t,u),ce.fx.timer(ce.extend(l,{elem:t,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function B(t,e){var n,i,r,s,o;for(n in t)if(i=ce.camelCase(n),r=e[i],s=t[n],ce.isArray(s)&&(r=s[1],s=t[n]=s[0]),n!==i&&(t[i]=s,delete t[n]),o=ce.cssHooks[i],o&&"expand"in o){s=o.expand(s),delete t[i];for(n in s)n in t||(t[n]=s[n],e[n]=r)}else e[i]=r}function X(t,e,n){var i,r,s,o,a,l,u=this,c={},h=t.style,f=t.nodeType&&T(t),p=ce._data(t,"fxshow");n.queue||(a=ce._queueHooks(t,"fx"),null==a.unqueued&&(a.unqueued=0,l=a.empty.fire,a.empty.fire=function(){a.unqueued||l()}),a.unqueued++,u.always(function(){u.always(function(){a.unqueued--,ce.queue(t,"fx").length||a.empty.fire()})})),1===t.nodeType&&("height"in e||"width"in e)&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],"inline"===ce.css(t,"display")&&"none"===ce.css(t,"float")&&(ce.support.inlineBlockNeedsLayout&&"inline"!==A(t.nodeName)?h.zoom=1:h.display="inline-block")),n.overflow&&(h.overflow="hidden",ce.support.shrinkWrapBlocks||u.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]}));for(i in e)if(r=e[i],ei.exec(r)){if(delete e[i],s=s||"toggle"===r,r===(f?"hide":"show"))continue;c[i]=p&&p[i]||ce.style(t,i)}if(!ce.isEmptyObject(c)){p?"hidden"in p&&(f=p.hidden):p=ce._data(t,"fxshow",{}),s&&(p.hidden=!f),f?ce(t).show():u.done(function(){ce(t).hide()}),u.done(function(){var e;ce._removeData(t,"fxshow");for(e in c)ce.style(t,e,c[e])});for(i in c)o=H(f?p[i]:0,i,u),i in p||(p[i]=o.start,f&&(o.end=o.start,o.start="width"===i||"height"===i?1:0))}}function z(t,e,n,i,r){return new z.prototype.init(t,e,n,i,r)}function $(t,e){var n,i={height:t},r=0;for(e=e?1:0;4>r;r+=2-e)n=kn[r],i["margin"+n]=i["padding"+n]=t;return e&&(i.opacity=i.width=t),i}function W(t){return ce.isWindow(t)?t:9===t.nodeType?t.defaultView||t.parentWindow:!1}var U,Y,V=typeof e,J=t.location,G=t.document,Z=G.documentElement,Q=t.jQuery,K=t.$,te={},ee=[],ne="1.10.2",ie=ee.concat,re=ee.push,se=ee.slice,oe=ee.indexOf,ae=te.toString,le=te.hasOwnProperty,ue=ne.trim,ce=function(t,e){return new ce.fn.init(t,e,Y)},he=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,fe=/\S+/g,pe=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,de=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,me=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,ge=/^[\],:{}\s]*$/,_e=/(?:^|:|,)(?:\s*\[)+/g,ve=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,ye=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,be=/^-ms-/,xe=/-([\da-z])/gi,we=function(t,e){return e.toUpperCase()},Te=function(t){(G.addEventListener||"load"===t.type||"complete"===G.readyState)&&(ke(),ce.ready())},ke=function(){G.addEventListener?(G.removeEventListener("DOMContentLoaded",Te,!1),t.removeEventListener("load",Te,!1)):(G.detachEvent("onreadystatechange",Te),t.detachEvent("onload",Te))};ce.fn=ce.prototype={jquery:ne,constructor:ce,init:function(t,n,i){var r,s;if(!t)return this;if("string"==typeof t){if(r="<"===t.charAt(0)&&">"===t.charAt(t.length-1)&&t.length>=3?[null,t,null]:de.exec(t),!r||!r[1]&&n)return!n||n.jquery?(n||i).find(t):this.constructor(n).find(t);if(r[1]){if(n=n instanceof ce?n[0]:n,ce.merge(this,ce.parseHTML(r[1],n&&n.nodeType?n.ownerDocument||n:G,!0)),me.test(r[1])&&ce.isPlainObject(n))for(r in n)ce.isFunction(this[r])?this[r](n[r]):this.attr(r,n[r]);return this}if(s=G.getElementById(r[2]),s&&s.parentNode){if(s.id!==r[2])return i.find(t);this.length=1,this[0]=s}return this.context=G,this.selector=t,this}return t.nodeType?(this.context=this[0]=t,this.length=1,this):ce.isFunction(t)?i.ready(t):(t.selector!==e&&(this.selector=t.selector,this.context=t.context),ce.makeArray(t,this))},selector:"",length:0,toArray:function(){return se.call(this)},get:function(t){return null==t?this.toArray():0>t?this[this.length+t]:this[t]},pushStack:function(t){var e=ce.merge(this.constructor(),t);return e.prevObject=this,e.context=this.context,e},each:function(t,e){return ce.each(this,t,e)},ready:function(t){return ce.ready.promise().done(t),this},slice:function(){return this.pushStack(se.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,n=+t+(0>t?e:0);return this.pushStack(n>=0&&e>n?[this[n]]:[])},map:function(t){return this.pushStack(ce.map(this,function(e,n){return t.call(e,n,e)}))},end:function(){return this.prevObject||this.constructor(null)},push:re,sort:[].sort,splice:[].splice},ce.fn.init.prototype=ce.fn,ce.extend=ce.fn.extend=function(){var t,n,i,r,s,o,a=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof a&&(c=a,a=arguments[1]||{},l=2),"object"==typeof a||ce.isFunction(a)||(a={}),u===l&&(a=this,--l);u>l;l++)if(null!=(s=arguments[l]))for(r in s)t=a[r],i=s[r],a!==i&&(c&&i&&(ce.isPlainObject(i)||(n=ce.isArray(i)))?(n?(n=!1,o=t&&ce.isArray(t)?t:[]):o=t&&ce.isPlainObject(t)?t:{},a[r]=ce.extend(c,o,i)):i!==e&&(a[r]=i));return a},ce.extend({expando:"jQuery"+(ne+Math.random()).replace(/\D/g,""),noConflict:function(e){return t.$===ce&&(t.$=K),e&&t.jQuery===ce&&(t.jQuery=Q),ce},isReady:!1,readyWait:1,holdReady:function(t){t?ce.readyWait++:ce.ready(!0)},ready:function(t){if(t===!0?!--ce.readyWait:!ce.isReady){if(!G.body)return setTimeout(ce.ready);ce.isReady=!0,t!==!0&&--ce.readyWait>0||(U.resolveWith(G,[ce]),ce.fn.trigger&&ce(G).trigger("ready").off("ready"))}},isFunction:function(t){return"function"===ce.type(t)},isArray:Array.isArray||function(t){return"array"===ce.type(t)},isWindow:function(t){return null!=t&&t==t.window},isNumeric:function(t){return!isNaN(parseFloat(t))&&isFinite(t)},type:function(t){return null==t?String(t):"object"==typeof t||"function"==typeof t?te[ae.call(t)]||"object":typeof t},isPlainObject:function(t){var n;if(!t||"object"!==ce.type(t)||t.nodeType||ce.isWindow(t))return!1;try{if(t.constructor&&!le.call(t,"constructor")&&!le.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(i){return!1}if(ce.support.ownLast)for(n in t)return le.call(t,n);for(n in t);return n===e||le.call(t,n)},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},error:function(t){throw new Error(t)},parseHTML:function(t,e,n){if(!t||"string"!=typeof t)return null;"boolean"==typeof e&&(n=e,e=!1),e=e||G;var i=me.exec(t),r=!n&&[];return i?[e.createElement(i[1])]:(i=ce.buildFragment([t],e,r),r&&ce(r).remove(),ce.merge([],i.childNodes))},parseJSON:function(e){return t.JSON&&t.JSON.parse?t.JSON.parse(e):null===e?e:"string"==typeof e&&(e=ce.trim(e),e&&ge.test(e.replace(ve,"@").replace(ye,"]").replace(_e,"")))?new Function("return "+e)():void ce.error("Invalid JSON: "+e)},parseXML:function(n){var i,r;if(!n||"string"!=typeof n)return null;try{t.DOMParser?(r=new DOMParser,i=r.parseFromString(n,"text/xml")):(i=new ActiveXObject("Microsoft.XMLDOM"),i.async="false",i.loadXML(n))}catch(s){i=e}return i&&i.documentElement&&!i.getElementsByTagName("parsererror").length||ce.error("Invalid XML: "+n),i},noop:function(){},globalEval:function(e){e&&ce.trim(e)&&(t.execScript||function(e){t.eval.call(t,e)})(e)},camelCase:function(t){return t.replace(be,"ms-").replace(xe,we)},nodeName:function(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()},each:function(t,e,i){var r,s=0,o=t.length,a=n(t);if(i){if(a)for(;o>s&&(r=e.apply(t[s],i),r!==!1);s++);else for(s in t)if(r=e.apply(t[s],i),r===!1)break}else if(a)for(;o>s&&(r=e.call(t[s],s,t[s]),r!==!1);s++);else for(s in t)if(r=e.call(t[s],s,t[s]),r===!1)break;return t},trim:ue&&!ue.call("﻿ ")?function(t){return null==t?"":ue.call(t)}:function(t){return null==t?"":(t+"").replace(pe,"")},makeArray:function(t,e){var i=e||[];return null!=t&&(n(Object(t))?ce.merge(i,"string"==typeof t?[t]:t):re.call(i,t)),i},inArray:function(t,e,n){var i;if(e){if(oe)return oe.call(e,t,n);for(i=e.length,n=n?0>n?Math.max(0,i+n):n:0;i>n;n++)if(n in e&&e[n]===t)return n}return-1},merge:function(t,n){var i=n.length,r=t.length,s=0;if("number"==typeof i)for(;i>s;s++)t[r++]=n[s];else for(;n[s]!==e;)t[r++]=n[s++];return t.length=r,t},grep:function(t,e,n){var i,r=[],s=0,o=t.length;for(n=!!n;o>s;s++)i=!!e(t[s],s),n!==i&&r.push(t[s]);return r},map:function(t,e,i){var r,s=0,o=t.length,a=n(t),l=[];if(a)for(;o>s;s++)r=e(t[s],s,i),null!=r&&(l[l.length]=r);else for(s in t)r=e(t[s],s,i),null!=r&&(l[l.length]=r);return ie.apply([],l)},guid:1,proxy:function(t,n){var i,r,s;return"string"==typeof n&&(s=t[n],n=t,t=s),ce.isFunction(t)?(i=se.call(arguments,2),r=function(){return t.apply(n||this,i.concat(se.call(arguments)))},r.guid=t.guid=t.guid||ce.guid++,r):e},access:function(t,n,i,r,s,o,a){var l=0,u=t.length,c=null==i;if("object"===ce.type(i)){s=!0;for(l in i)ce.access(t,n,l,i[l],!0,o,a)}else if(r!==e&&(s=!0,ce.isFunction(r)||(a=!0),c&&(a?(n.call(t,r),n=null):(c=n,n=function(t,e,n){return c.call(ce(t),n)})),n))for(;u>l;l++)n(t[l],i,a?r:r.call(t[l],l,n(t[l],i)));return s?t:c?n.call(t):u?n(t[0],i):o},now:function(){return(new Date).getTime()},swap:function(t,e,n,i){var r,s,o={};for(s in e)o[s]=t.style[s],t.style[s]=e[s];r=n.apply(t,i||[]);for(s in e)t.style[s]=o[s];return r}}),ce.ready.promise=function(e){if(!U)if(U=ce.Deferred(),"complete"===G.readyState)setTimeout(ce.ready);else if(G.addEventListener)G.addEventListener("DOMContentLoaded",Te,!1),t.addEventListener("load",Te,!1);else{G.attachEvent("onreadystatechange",Te),t.attachEvent("onload",Te);var n=!1;try{n=null==t.frameElement&&G.documentElement}catch(i){}n&&n.doScroll&&!function r(){if(!ce.isReady){try{n.doScroll("left")}catch(t){return setTimeout(r,50)}ke(),ce.ready()}}()}return U.promise(e)},ce.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){te["[object "+e+"]"]=e.toLowerCase()}),Y=ce(G),function(t,e){function n(t,e,n,i){var r,s,o,a,l,u,c,h,d,m;if((e?e.ownerDocument||e:q)!==O&&R(e),e=e||O,n=n||[],!t||"string"!=typeof t)return n;if(1!==(a=e.nodeType)&&9!==a)return[];if(j&&!i){if(r=ye.exec(t))if(o=r[1]){if(9===a){if(s=e.getElementById(o),!s||!s.parentNode)return n;if(s.id===o)return n.push(s),n}else if(e.ownerDocument&&(s=e.ownerDocument.getElementById(o))&&I(e,s)&&s.id===o)return n.push(s),n}else{if(r[2])return te.apply(n,e.getElementsByTagName(t)),n;if((o=r[3])&&T.getElementsByClassName&&e.getElementsByClassName)return te.apply(n,e.getElementsByClassName(o)),n}if(T.qsa&&(!L||!L.test(t))){if(h=c=H,d=e,m=9===a&&t,1===a&&"object"!==e.nodeName.toLowerCase()){for(u=f(t),(c=e.getAttribute("id"))?h=c.replace(we,"\\$&"):e.setAttribute("id",h),h="[id='"+h+"'] ",l=u.length;l--;)u[l]=h+p(u[l]);d=pe.test(t)&&e.parentNode||e,m=u.join(",")}if(m)try{return te.apply(n,d.querySelectorAll(m)),n}catch(g){}finally{c||e.removeAttribute("id")}}}return x(t.replace(ue,"$1"),e,n,i)}function i(){function t(n,i){return e.push(n+=" ")>C.cacheLength&&delete t[e.shift()],t[n]=i}var e=[];return t}function r(t){return t[H]=!0,t}function s(t){var e=O.createElement("div");try{return!!t(e)}catch(n){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function o(t,e){for(var n=t.split("|"),i=t.length;i--;)C.attrHandle[n[i]]=e}function a(t,e){var n=e&&t,i=n&&1===t.nodeType&&1===e.nodeType&&(~e.sourceIndex||J)-(~t.sourceIndex||J);if(i)return i;if(n)for(;n=n.nextSibling;)if(n===e)return-1;return t?1:-1}function l(t){return function(e){var n=e.nodeName.toLowerCase();return"input"===n&&e.type===t}}function u(t){return function(e){var n=e.nodeName.toLowerCase();return("input"===n||"button"===n)&&e.type===t}}function c(t){return r(function(e){return e=+e,r(function(n,i){for(var r,s=t([],n.length,e),o=s.length;o--;)n[r=s[o]]&&(n[r]=!(i[r]=n[r]))})})}function h(){}function f(t,e){var i,r,s,o,a,l,u,c=$[t+" "];if(c)return e?0:c.slice(0);for(a=t,l=[],u=C.preFilter;a;){(!i||(r=he.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),l.push(s=[])),i=!1,(r=fe.exec(a))&&(i=r.shift(),s.push({value:i,type:r[0].replace(ue," ")}),a=a.slice(i.length));for(o in C.filter)!(r=_e[o].exec(a))||u[o]&&!(r=u[o](r))||(i=r.shift(),s.push({value:i,type:o,matches:r}),a=a.slice(i.length));if(!i)break}return e?a.length:a?n.error(t):$(t,l).slice(0)}function p(t){for(var e=0,n=t.length,i="";n>e;e++)i+=t[e].value;return i}function d(t,e,n){var i=e.dir,r=n&&"parentNode"===i,s=X++;return e.first?function(e,n,s){for(;e=e[i];)if(1===e.nodeType||r)return t(e,n,s)}:function(e,n,o){var a,l,u,c=B+" "+s;if(o){for(;e=e[i];)if((1===e.nodeType||r)&&t(e,n,o))return!0}else for(;e=e[i];)if(1===e.nodeType||r)if(u=e[H]||(e[H]={}),(l=u[i])&&l[0]===c){if((a=l[1])===!0||a===k)return a===!0}else if(l=u[i]=[c],l[1]=t(e,n,o)||k,l[1]===!0)return!0}}function m(t){return t.length>1?function(e,n,i){for(var r=t.length;r--;)if(!t[r](e,n,i))return!1;return!0}:t[0]}function g(t,e,n,i,r){for(var s,o=[],a=0,l=t.length,u=null!=e;l>a;a++)(s=t[a])&&(!n||n(s,i,r))&&(o.push(s),u&&e.push(a));return o}function _(t,e,n,i,s,o){return i&&!i[H]&&(i=_(i)),s&&!s[H]&&(s=_(s,o)),r(function(r,o,a,l){var u,c,h,f=[],p=[],d=o.length,m=r||b(e||"*",a.nodeType?[a]:a,[]),_=!t||!r&&e?m:g(m,f,t,a,l),v=n?s||(r?t:d||i)?[]:o:_;if(n&&n(_,v,a,l),i)for(u=g(v,p),i(u,[],a,l),c=u.length;c--;)(h=u[c])&&(v[p[c]]=!(_[p[c]]=h));if(r){if(s||t){if(s){for(u=[],c=v.length;c--;)(h=v[c])&&u.push(_[c]=h);s(null,v=[],u,l)}for(c=v.length;c--;)(h=v[c])&&(u=s?ne.call(r,h):f[c])>-1&&(r[u]=!(o[u]=h))}}else v=g(v===o?v.splice(d,v.length):v),s?s(null,o,v,l):te.apply(o,v)})}function v(t){for(var e,n,i,r=t.length,s=C.relative[t[0].type],o=s||C.relative[" "],a=s?1:0,l=d(function(t){return t===e},o,!0),u=d(function(t){return ne.call(e,t)>-1},o,!0),c=[function(t,n,i){return!s&&(i||n!==N)||((e=n).nodeType?l(t,n,i):u(t,n,i))}];r>a;a++)if(n=C.relative[t[a].type])c=[d(m(c),n)];else{if(n=C.filter[t[a].type].apply(null,t[a].matches),n[H]){for(i=++a;r>i&&!C.relative[t[i].type];i++);return _(a>1&&m(c),a>1&&p(t.slice(0,a-1).concat({value:" "===t[a-2].type?"*":""})).replace(ue,"$1"),n,i>a&&v(t.slice(a,i)),r>i&&v(t=t.slice(i)),r>i&&p(t))}c.push(n)}return m(c)}function y(t,e){var i=0,s=e.length>0,o=t.length>0,a=function(r,a,l,u,c){var h,f,p,d=[],m=0,_="0",v=r&&[],y=null!=c,b=N,x=r||o&&C.find.TAG("*",c&&a.parentNode||a),w=B+=null==b?1:Math.random()||.1;for(y&&(N=a!==O&&a,k=i);null!=(h=x[_]);_++){if(o&&h){for(f=0;p=t[f++];)if(p(h,a,l)){u.push(h);break}y&&(B=w,k=++i)}s&&((h=!p&&h)&&m--,r&&v.push(h))}if(m+=_,s&&_!==m){for(f=0;p=e[f++];)p(v,d,a,l);if(r){if(m>0)for(;_--;)v[_]||d[_]||(d[_]=Q.call(u));d=g(d)}te.apply(u,d),y&&!r&&d.length>0&&m+e.length>1&&n.uniqueSort(u)}return y&&(B=w,N=b),v};return s?r(a):a}function b(t,e,i){for(var r=0,s=e.length;s>r;r++)n(t,e[r],i);return i}function x(t,e,n,i){var r,s,o,a,l,u=f(t);if(!i&&1===u.length){if(s=u[0]=u[0].slice(0),s.length>2&&"ID"===(o=s[0]).type&&T.getById&&9===e.nodeType&&j&&C.relative[s[1].type]){if(e=(C.find.ID(o.matches[0].replace(Te,ke),e)||[])[0],!e)return n;t=t.slice(s.shift().value.length)}for(r=_e.needsContext.test(t)?0:s.length;r--&&(o=s[r],!C.relative[a=o.type]);)if((l=C.find[a])&&(i=l(o.matches[0].replace(Te,ke),pe.test(s[0].type)&&e.parentNode||e))){if(s.splice(r,1),t=i.length&&p(s),!t)return te.apply(n,i),n;break}}return A(t,u)(i,e,!j,n,pe.test(t)),n}var w,T,k,C,S,P,A,N,E,R,O,D,j,L,M,F,I,H="sizzle"+-new Date,q=t.document,B=0,X=0,z=i(),$=i(),W=i(),U=!1,Y=function(t,e){return t===e?(U=!0,0):0},V=typeof e,J=1<<31,G={}.hasOwnProperty,Z=[],Q=Z.pop,K=Z.push,te=Z.push,ee=Z.slice,ne=Z.indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(this[e]===t)return e;return-1},ie="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",re="[\\x20\\t\\r\\n\\f]",se="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",oe=se.replace("w","w#"),ae="\\["+re+"*("+se+")"+re+"*(?:([*^$|!~]?=)"+re+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+oe+")|)|)"+re+"*\\]",le=":("+se+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+ae.replace(3,8)+")*)|.*)\\)|)",ue=new RegExp("^"+re+"+|((?:^|[^\\\\])(?:\\\\.)*)"+re+"+$","g"),he=new RegExp("^"+re+"*,"+re+"*"),fe=new RegExp("^"+re+"*([>+~]|"+re+")"+re+"*"),pe=new RegExp(re+"*[+~]"),de=new RegExp("="+re+"*([^\\]'\"]*)"+re+"*\\]","g"),me=new RegExp(le),ge=new RegExp("^"+oe+"$"),_e={ID:new RegExp("^#("+se+")"),CLASS:new RegExp("^\\.("+se+")"),TAG:new RegExp("^("+se.replace("w","w*")+")"),ATTR:new RegExp("^"+ae),PSEUDO:new RegExp("^"+le),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+re+"*(even|odd|(([+-]|)(\\d*)n|)"+re+"*(?:([+-]|)"+re+"*(\\d+)|))"+re+"*\\)|)","i"),bool:new RegExp("^(?:"+ie+")$","i"),needsContext:new RegExp("^"+re+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+re+"*((?:-\\d)?\\d*)"+re+"*\\)|)(?=[^-]|$)","i")},ve=/^[^{]+\{\s*\[native \w/,ye=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,be=/^(?:input|select|textarea|button)$/i,xe=/^h\d$/i,we=/'|\\/g,Te=new RegExp("\\\\([\\da-f]{1,6}"+re+"?|("+re+")|.)","ig"),ke=function(t,e,n){var i="0x"+e-65536;return i!==i||n?e:0>i?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)};try{te.apply(Z=ee.call(q.childNodes),q.childNodes),Z[q.childNodes.length].nodeType}catch(Ce){te={apply:Z.length?function(t,e){K.apply(t,ee.call(e))}:function(t,e){for(var n=t.length,i=0;t[n++]=e[i++];);t.length=n-1}}}P=n.isXML=function(t){var e=t&&(t.ownerDocument||t).documentElement;return e?"HTML"!==e.nodeName:!1},T=n.support={},R=n.setDocument=function(t){var e=t?t.ownerDocument||t:q,n=e.defaultView;return e!==O&&9===e.nodeType&&e.documentElement?(O=e,D=e.documentElement,j=!P(e),n&&n.attachEvent&&n!==n.top&&n.attachEvent("onbeforeunload",function(){R()}),T.attributes=s(function(t){return t.className="i",!t.getAttribute("className")}),T.getElementsByTagName=s(function(t){return t.appendChild(e.createComment("")),!t.getElementsByTagName("*").length}),T.getElementsByClassName=s(function(t){return t.innerHTML="<div class='a'></div><div class='a i'></div>",t.firstChild.className="i",2===t.getElementsByClassName("i").length}),T.getById=s(function(t){return D.appendChild(t).id=H,!e.getElementsByName||!e.getElementsByName(H).length}),T.getById?(C.find.ID=function(t,e){if(typeof e.getElementById!==V&&j){var n=e.getElementById(t);return n&&n.parentNode?[n]:[]}},C.filter.ID=function(t){var e=t.replace(Te,ke);return function(t){return t.getAttribute("id")===e}}):(delete C.find.ID,C.filter.ID=function(t){var e=t.replace(Te,ke);return function(t){var n=typeof t.getAttributeNode!==V&&t.getAttributeNode("id");return n&&n.value===e}}),C.find.TAG=T.getElementsByTagName?function(t,e){return typeof e.getElementsByTagName!==V?e.getElementsByTagName(t):void 0}:function(t,e){var n,i=[],r=0,s=e.getElementsByTagName(t);if("*"===t){for(;n=s[r++];)1===n.nodeType&&i.push(n);return i}return s},C.find.CLASS=T.getElementsByClassName&&function(t,e){return typeof e.getElementsByClassName!==V&&j?e.getElementsByClassName(t):void 0},M=[],L=[],(T.qsa=ve.test(e.querySelectorAll))&&(s(function(t){t.innerHTML="<select><option selected=''></option></select>",t.querySelectorAll("[selected]").length||L.push("\\["+re+"*(?:value|"+ie+")"),t.querySelectorAll(":checked").length||L.push(":checked")}),s(function(t){var n=e.createElement("input");n.setAttribute("type","hidden"),t.appendChild(n).setAttribute("t",""),t.querySelectorAll("[t^='']").length&&L.push("[*^$]="+re+"*(?:''|\"\")"),t.querySelectorAll(":enabled").length||L.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),L.push(",.*:")})),(T.matchesSelector=ve.test(F=D.webkitMatchesSelector||D.mozMatchesSelector||D.oMatchesSelector||D.msMatchesSelector))&&s(function(t){T.disconnectedMatch=F.call(t,"div"),F.call(t,"[s!='']:x"),M.push("!=",le)}),L=L.length&&new RegExp(L.join("|")),M=M.length&&new RegExp(M.join("|")),I=ve.test(D.contains)||D.compareDocumentPosition?function(t,e){var n=9===t.nodeType?t.documentElement:t,i=e&&e.parentNode;return t===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):t.compareDocumentPosition&&16&t.compareDocumentPosition(i)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},Y=D.compareDocumentPosition?function(t,n){if(t===n)return U=!0,0;var i=n.compareDocumentPosition&&t.compareDocumentPosition&&t.compareDocumentPosition(n);return i?1&i||!T.sortDetached&&n.compareDocumentPosition(t)===i?t===e||I(q,t)?-1:n===e||I(q,n)?1:E?ne.call(E,t)-ne.call(E,n):0:4&i?-1:1:t.compareDocumentPosition?-1:1}:function(t,n){var i,r=0,s=t.parentNode,o=n.parentNode,l=[t],u=[n];if(t===n)return U=!0,0;if(!s||!o)return t===e?-1:n===e?1:s?-1:o?1:E?ne.call(E,t)-ne.call(E,n):0;if(s===o)return a(t,n);for(i=t;i=i.parentNode;)l.unshift(i);for(i=n;i=i.parentNode;)u.unshift(i);for(;l[r]===u[r];)r++;return r?a(l[r],u[r]):l[r]===q?-1:u[r]===q?1:0},e):O},n.matches=function(t,e){return n(t,null,null,e)},n.matchesSelector=function(t,e){if((t.ownerDocument||t)!==O&&R(t),e=e.replace(de,"='$1']"),!(!T.matchesSelector||!j||M&&M.test(e)||L&&L.test(e)))try{var i=F.call(t,e);if(i||T.disconnectedMatch||t.document&&11!==t.document.nodeType)return i}catch(r){}return n(e,O,null,[t]).length>0},n.contains=function(t,e){return(t.ownerDocument||t)!==O&&R(t),I(t,e)},n.attr=function(t,n){(t.ownerDocument||t)!==O&&R(t);var i=C.attrHandle[n.toLowerCase()],r=i&&G.call(C.attrHandle,n.toLowerCase())?i(t,n,!j):e;return r===e?T.attributes||!j?t.getAttribute(n):(r=t.getAttributeNode(n))&&r.specified?r.value:null:r},n.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},n.uniqueSort=function(t){var e,n=[],i=0,r=0;if(U=!T.detectDuplicates,E=!T.sortStable&&t.slice(0),t.sort(Y),U){for(;e=t[r++];)e===t[r]&&(i=n.push(r));for(;i--;)t.splice(n[i],1)}return t},S=n.getText=function(t){var e,n="",i=0,r=t.nodeType;if(r){if(1===r||9===r||11===r){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)n+=S(t)}else if(3===r||4===r)return t.nodeValue}else for(;e=t[i];i++)n+=S(e);return n},C=n.selectors={cacheLength:50,createPseudo:r,match:_e,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(Te,ke),t[3]=(t[4]||t[5]||"").replace(Te,ke),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||n.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&n.error(t[0]),t},PSEUDO:function(t){var n,i=!t[5]&&t[2];return _e.CHILD.test(t[0])?null:(t[3]&&t[4]!==e?t[2]=t[4]:i&&me.test(i)&&(n=f(i,!0))&&(n=i.indexOf(")",i.length-n)-i.length)&&(t[0]=t[0].slice(0,n),t[2]=i.slice(0,n)),t.slice(0,3))
}},filter:{TAG:function(t){var e=t.replace(Te,ke).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=z[t+" "];return e||(e=new RegExp("(^|"+re+")"+t+"("+re+"|$)"))&&z(t,function(t){return e.test("string"==typeof t.className&&t.className||typeof t.getAttribute!==V&&t.getAttribute("class")||"")})},ATTR:function(t,e,i){return function(r){var s=n.attr(r,t);return null==s?"!="===e:e?(s+="","="===e?s===i:"!="===e?s!==i:"^="===e?i&&0===s.indexOf(i):"*="===e?i&&s.indexOf(i)>-1:"$="===e?i&&s.slice(-i.length)===i:"~="===e?(" "+s+" ").indexOf(i)>-1:"|="===e?s===i||s.slice(0,i.length+1)===i+"-":!1):!0}},CHILD:function(t,e,n,i,r){var s="nth"!==t.slice(0,3),o="last"!==t.slice(-4),a="of-type"===e;return 1===i&&0===r?function(t){return!!t.parentNode}:function(e,n,l){var u,c,h,f,p,d,m=s!==o?"nextSibling":"previousSibling",g=e.parentNode,_=a&&e.nodeName.toLowerCase(),v=!l&&!a;if(g){if(s){for(;m;){for(h=e;h=h[m];)if(a?h.nodeName.toLowerCase()===_:1===h.nodeType)return!1;d=m="only"===t&&!d&&"nextSibling"}return!0}if(d=[o?g.firstChild:g.lastChild],o&&v){for(c=g[H]||(g[H]={}),u=c[t]||[],p=u[0]===B&&u[1],f=u[0]===B&&u[2],h=p&&g.childNodes[p];h=++p&&h&&h[m]||(f=p=0)||d.pop();)if(1===h.nodeType&&++f&&h===e){c[t]=[B,p,f];break}}else if(v&&(u=(e[H]||(e[H]={}))[t])&&u[0]===B)f=u[1];else for(;(h=++p&&h&&h[m]||(f=p=0)||d.pop())&&((a?h.nodeName.toLowerCase()!==_:1!==h.nodeType)||!++f||(v&&((h[H]||(h[H]={}))[t]=[B,f]),h!==e)););return f-=r,f===i||f%i===0&&f/i>=0}}},PSEUDO:function(t,e){var i,s=C.pseudos[t]||C.setFilters[t.toLowerCase()]||n.error("unsupported pseudo: "+t);return s[H]?s(e):s.length>1?(i=[t,t,"",e],C.setFilters.hasOwnProperty(t.toLowerCase())?r(function(t,n){for(var i,r=s(t,e),o=r.length;o--;)i=ne.call(t,r[o]),t[i]=!(n[i]=r[o])}):function(t){return s(t,0,i)}):s}},pseudos:{not:r(function(t){var e=[],n=[],i=A(t.replace(ue,"$1"));return i[H]?r(function(t,e,n,r){for(var s,o=i(t,null,r,[]),a=t.length;a--;)(s=o[a])&&(t[a]=!(e[a]=s))}):function(t,r,s){return e[0]=t,i(e,null,s,n),!n.pop()}}),has:r(function(t){return function(e){return n(t,e).length>0}}),contains:r(function(t){return function(e){return(e.textContent||e.innerText||S(e)).indexOf(t)>-1}}),lang:r(function(t){return ge.test(t||"")||n.error("unsupported lang: "+t),t=t.replace(Te,ke).toLowerCase(),function(e){var n;do if(n=j?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return n=n.toLowerCase(),n===t||0===n.indexOf(t+"-");while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var n=t.location&&t.location.hash;return n&&n.slice(1)===e.id},root:function(t){return t===D},focus:function(t){return t===O.activeElement&&(!O.hasFocus||O.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:function(t){return t.disabled===!1},disabled:function(t){return t.disabled===!0},checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,t.selected===!0},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeName>"@"||3===t.nodeType||4===t.nodeType)return!1;return!0},parent:function(t){return!C.pseudos.empty(t)},header:function(t){return xe.test(t.nodeName)},input:function(t){return be.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||e.toLowerCase()===t.type)},first:c(function(){return[0]}),last:c(function(t,e){return[e-1]}),eq:c(function(t,e,n){return[0>n?n+e:n]}),even:c(function(t,e){for(var n=0;e>n;n+=2)t.push(n);return t}),odd:c(function(t,e){for(var n=1;e>n;n+=2)t.push(n);return t}),lt:c(function(t,e,n){for(var i=0>n?n+e:n;--i>=0;)t.push(i);return t}),gt:c(function(t,e,n){for(var i=0>n?n+e:n;++i<e;)t.push(i);return t})}},C.pseudos.nth=C.pseudos.eq;for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})C.pseudos[w]=l(w);for(w in{submit:!0,reset:!0})C.pseudos[w]=u(w);h.prototype=C.filters=C.pseudos,C.setFilters=new h,A=n.compile=function(t,e){var n,i=[],r=[],s=W[t+" "];if(!s){for(e||(e=f(t)),n=e.length;n--;)s=v(e[n]),s[H]?i.push(s):r.push(s);s=W(t,y(r,i))}return s},T.sortStable=H.split("").sort(Y).join("")===H,T.detectDuplicates=U,R(),T.sortDetached=s(function(t){return 1&t.compareDocumentPosition(O.createElement("div"))}),s(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||o("type|href|height|width",function(t,e,n){return n?void 0:t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),T.attributes&&s(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||o("value",function(t,e,n){return n||"input"!==t.nodeName.toLowerCase()?void 0:t.defaultValue}),s(function(t){return null==t.getAttribute("disabled")})||o(ie,function(t,e,n){var i;return n?void 0:(i=t.getAttributeNode(e))&&i.specified?i.value:t[e]===!0?e.toLowerCase():null}),ce.find=n,ce.expr=n.selectors,ce.expr[":"]=ce.expr.pseudos,ce.unique=n.uniqueSort,ce.text=n.getText,ce.isXMLDoc=n.isXML,ce.contains=n.contains}(t);var Ce={};ce.Callbacks=function(t){t="string"==typeof t?Ce[t]||i(t):ce.extend({},t);var n,r,s,o,a,l,u=[],c=!t.once&&[],h=function(e){for(r=t.memory&&e,s=!0,a=l||0,l=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(e[0],e[1])===!1&&t.stopOnFalse){r=!1;break}n=!1,u&&(c?c.length&&h(c.shift()):r?u=[]:f.disable())},f={add:function(){if(u){var e=u.length;!function i(e){ce.each(e,function(e,n){var r=ce.type(n);"function"===r?t.unique&&f.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})}(arguments),n?o=u.length:r&&(l=e,h(r))}return this},remove:function(){return u&&ce.each(arguments,function(t,e){for(var i;(i=ce.inArray(e,u,i))>-1;)u.splice(i,1),n&&(o>=i&&o--,a>=i&&a--)}),this},has:function(t){return t?ce.inArray(t,u)>-1:!(!u||!u.length)},empty:function(){return u=[],o=0,this},disable:function(){return u=c=r=e,this},disabled:function(){return!u},lock:function(){return c=e,r||f.disable(),this},locked:function(){return!c},fireWith:function(t,e){return!u||s&&!c||(e=e||[],e=[t,e.slice?e.slice():e],n?c.push(e):h(e)),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!s}};return f},ce.extend({Deferred:function(t){var e=[["resolve","done",ce.Callbacks("once memory"),"resolved"],["reject","fail",ce.Callbacks("once memory"),"rejected"],["notify","progress",ce.Callbacks("memory")]],n="pending",i={state:function(){return n},always:function(){return r.done(arguments).fail(arguments),this},then:function(){var t=arguments;return ce.Deferred(function(n){ce.each(e,function(e,s){var o=s[0],a=ce.isFunction(t[e])&&t[e];r[s[1]](function(){var t=a&&a.apply(this,arguments);t&&ce.isFunction(t.promise)?t.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o+"With"](this===i?n.promise():this,a?[t]:arguments)})}),t=null}).promise()},promise:function(t){return null!=t?ce.extend(t,i):i}},r={};return i.pipe=i.then,ce.each(e,function(t,s){var o=s[2],a=s[3];i[s[1]]=o.add,a&&o.add(function(){n=a},e[1^t][2].disable,e[2][2].lock),r[s[0]]=function(){return r[s[0]+"With"](this===r?i:this,arguments),this},r[s[0]+"With"]=o.fireWith}),i.promise(r),t&&t.call(r,r),r},when:function(t){var e,n,i,r=0,s=se.call(arguments),o=s.length,a=1!==o||t&&ce.isFunction(t.promise)?o:0,l=1===a?t:ce.Deferred(),u=function(t,n,i){return function(r){n[t]=this,i[t]=arguments.length>1?se.call(arguments):r,i===e?l.notifyWith(n,i):--a||l.resolveWith(n,i)}};if(o>1)for(e=new Array(o),n=new Array(o),i=new Array(o);o>r;r++)s[r]&&ce.isFunction(s[r].promise)?s[r].promise().done(u(r,i,s)).fail(l.reject).progress(u(r,n,e)):--a;return a||l.resolveWith(i,s),l.promise()}}),ce.support=function(e){var n,i,r,s,o,a,l,u,c,h=G.createElement("div");if(h.setAttribute("className","t"),h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=h.getElementsByTagName("*")||[],i=h.getElementsByTagName("a")[0],!i||!i.style||!n.length)return e;s=G.createElement("select"),a=s.appendChild(G.createElement("option")),r=h.getElementsByTagName("input")[0],i.style.cssText="top:1px;float:left;opacity:.5",e.getSetAttribute="t"!==h.className,e.leadingWhitespace=3===h.firstChild.nodeType,e.tbody=!h.getElementsByTagName("tbody").length,e.htmlSerialize=!!h.getElementsByTagName("link").length,e.style=/top/.test(i.getAttribute("style")),e.hrefNormalized="/a"===i.getAttribute("href"),e.opacity=/^0.5/.test(i.style.opacity),e.cssFloat=!!i.style.cssFloat,e.checkOn=!!r.value,e.optSelected=a.selected,e.enctype=!!G.createElement("form").enctype,e.html5Clone="<:nav></:nav>"!==G.createElement("nav").cloneNode(!0).outerHTML,e.inlineBlockNeedsLayout=!1,e.shrinkWrapBlocks=!1,e.pixelPosition=!1,e.deleteExpando=!0,e.noCloneEvent=!0,e.reliableMarginRight=!0,e.boxSizingReliable=!0,r.checked=!0,e.noCloneChecked=r.cloneNode(!0).checked,s.disabled=!0,e.optDisabled=!a.disabled;try{delete h.test}catch(f){e.deleteExpando=!1}r=G.createElement("input"),r.setAttribute("value",""),e.input=""===r.getAttribute("value"),r.value="t",r.setAttribute("type","radio"),e.radioValue="t"===r.value,r.setAttribute("checked","t"),r.setAttribute("name","t"),o=G.createDocumentFragment(),o.appendChild(r),e.appendChecked=r.checked,e.checkClone=o.cloneNode(!0).cloneNode(!0).lastChild.checked,h.attachEvent&&(h.attachEvent("onclick",function(){e.noCloneEvent=!1}),h.cloneNode(!0).click());for(c in{submit:!0,change:!0,focusin:!0})h.setAttribute(l="on"+c,"t"),e[c+"Bubbles"]=l in t||h.attributes[l].expando===!1;h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",e.clearCloneStyle="content-box"===h.style.backgroundClip;for(c in ce(e))break;return e.ownLast="0"!==c,ce(function(){var n,i,r,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",o=G.getElementsByTagName("body")[0];o&&(n=G.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",o.appendChild(n).appendChild(h),h.innerHTML="<table><tr><td></td><td>t</td></tr></table>",r=h.getElementsByTagName("td"),r[0].style.cssText="padding:0;margin:0;border:0;display:none",u=0===r[0].offsetHeight,r[0].style.display="",r[1].style.display="none",e.reliableHiddenOffsets=u&&0===r[0].offsetHeight,h.innerHTML="",h.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",ce.swap(o,null!=o.style.zoom?{zoom:1}:{},function(){e.boxSizing=4===h.offsetWidth}),t.getComputedStyle&&(e.pixelPosition="1%"!==(t.getComputedStyle(h,null)||{}).top,e.boxSizingReliable="4px"===(t.getComputedStyle(h,null)||{width:"4px"}).width,i=h.appendChild(G.createElement("div")),i.style.cssText=h.style.cssText=s,i.style.marginRight=i.style.width="0",h.style.width="1px",e.reliableMarginRight=!parseFloat((t.getComputedStyle(i,null)||{}).marginRight)),typeof h.style.zoom!==V&&(h.innerHTML="",h.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",e.inlineBlockNeedsLayout=3===h.offsetWidth,h.style.display="block",h.innerHTML="<div></div>",h.firstChild.style.width="5px",e.shrinkWrapBlocks=3!==h.offsetWidth,e.inlineBlockNeedsLayout&&(o.style.zoom=1)),o.removeChild(n),n=h=r=i=null)}),n=s=o=a=i=r=null,e}({});var Se=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,Pe=/([A-Z])/g;ce.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(t){return t=t.nodeType?ce.cache[t[ce.expando]]:t[ce.expando],!!t&&!a(t)},data:function(t,e,n){return r(t,e,n)},removeData:function(t,e){return s(t,e)},_data:function(t,e,n){return r(t,e,n,!0)},_removeData:function(t,e){return s(t,e,!0)},acceptData:function(t){if(t.nodeType&&1!==t.nodeType&&9!==t.nodeType)return!1;var e=t.nodeName&&ce.noData[t.nodeName.toLowerCase()];return!e||e!==!0&&t.getAttribute("classid")===e}}),ce.fn.extend({data:function(t,n){var i,r,s=null,a=0,l=this[0];if(t===e){if(this.length&&(s=ce.data(l),1===l.nodeType&&!ce._data(l,"parsedAttrs"))){for(i=l.attributes;a<i.length;a++)r=i[a].name,0===r.indexOf("data-")&&(r=ce.camelCase(r.slice(5)),o(l,r,s[r]));ce._data(l,"parsedAttrs",!0)}return s}return"object"==typeof t?this.each(function(){ce.data(this,t)}):arguments.length>1?this.each(function(){ce.data(this,t,n)}):l?o(l,t,ce.data(l,t)):null},removeData:function(t){return this.each(function(){ce.removeData(this,t)})}}),ce.extend({queue:function(t,e,n){var i;return t?(e=(e||"fx")+"queue",i=ce._data(t,e),n&&(!i||ce.isArray(n)?i=ce._data(t,e,ce.makeArray(n)):i.push(n)),i||[]):void 0},dequeue:function(t,e){e=e||"fx";var n=ce.queue(t,e),i=n.length,r=n.shift(),s=ce._queueHooks(t,e),o=function(){ce.dequeue(t,e)};"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===e&&n.unshift("inprogress"),delete s.stop,r.call(t,o,s)),!i&&s&&s.empty.fire()},_queueHooks:function(t,e){var n=e+"queueHooks";return ce._data(t,n)||ce._data(t,n,{empty:ce.Callbacks("once memory").add(function(){ce._removeData(t,e+"queue"),ce._removeData(t,n)})})}}),ce.fn.extend({queue:function(t,n){var i=2;return"string"!=typeof t&&(n=t,t="fx",i--),arguments.length<i?ce.queue(this[0],t):n===e?this:this.each(function(){var e=ce.queue(this,t,n);ce._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&ce.dequeue(this,t)})},dequeue:function(t){return this.each(function(){ce.dequeue(this,t)})},delay:function(t,e){return t=ce.fx?ce.fx.speeds[t]||t:t,e=e||"fx",this.queue(e,function(e,n){var i=setTimeout(e,t);n.stop=function(){clearTimeout(i)}})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,n){var i,r=1,s=ce.Deferred(),o=this,a=this.length,l=function(){--r||s.resolveWith(o,[o])};for("string"!=typeof t&&(n=t,t=e),t=t||"fx";a--;)i=ce._data(o[a],t+"queueHooks"),i&&i.empty&&(r++,i.empty.add(l));return l(),s.promise(n)}});var Ae,Ne,Ee=/[\t\r\n\f]/g,Re=/\r/g,Oe=/^(?:input|select|textarea|button|object)$/i,De=/^(?:a|area)$/i,je=/^(?:checked|selected)$/i,Le=ce.support.getSetAttribute,Me=ce.support.input;ce.fn.extend({attr:function(t,e){return ce.access(this,ce.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each(function(){ce.removeAttr(this,t)})},prop:function(t,e){return ce.access(this,ce.prop,t,e,arguments.length>1)},removeProp:function(t){return t=ce.propFix[t]||t,this.each(function(){try{this[t]=e,delete this[t]}catch(n){}})},addClass:function(t){var e,n,i,r,s,o=0,a=this.length,l="string"==typeof t&&t;if(ce.isFunction(t))return this.each(function(e){ce(this).addClass(t.call(this,e,this.className))});if(l)for(e=(t||"").match(fe)||[];a>o;o++)if(n=this[o],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Ee," "):" ")){for(s=0;r=e[s++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");n.className=ce.trim(i)}return this},removeClass:function(t){var e,n,i,r,s,o=0,a=this.length,l=0===arguments.length||"string"==typeof t&&t;if(ce.isFunction(t))return this.each(function(e){ce(this).removeClass(t.call(this,e,this.className))});if(l)for(e=(t||"").match(fe)||[];a>o;o++)if(n=this[o],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Ee," "):"")){for(s=0;r=e[s++];)for(;i.indexOf(" "+r+" ")>=0;)i=i.replace(" "+r+" "," ");n.className=t?ce.trim(i):""}return this},toggleClass:function(t,e){var n=typeof t;return"boolean"==typeof e&&"string"===n?e?this.addClass(t):this.removeClass(t):this.each(ce.isFunction(t)?function(n){ce(this).toggleClass(t.call(this,n,this.className,e),e)}:function(){if("string"===n)for(var e,i=0,r=ce(this),s=t.match(fe)||[];e=s[i++];)r.hasClass(e)?r.removeClass(e):r.addClass(e);else(n===V||"boolean"===n)&&(this.className&&ce._data(this,"__className__",this.className),this.className=this.className||t===!1?"":ce._data(this,"__className__")||"")})},hasClass:function(t){for(var e=" "+t+" ",n=0,i=this.length;i>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(Ee," ").indexOf(e)>=0)return!0;return!1},val:function(t){var n,i,r,s=this[0];{if(arguments.length)return r=ce.isFunction(t),this.each(function(n){var s;1===this.nodeType&&(s=r?t.call(this,n,ce(this).val()):t,null==s?s="":"number"==typeof s?s+="":ce.isArray(s)&&(s=ce.map(s,function(t){return null==t?"":t+""})),i=ce.valHooks[this.type]||ce.valHooks[this.nodeName.toLowerCase()],i&&"set"in i&&i.set(this,s,"value")!==e||(this.value=s))});if(s)return i=ce.valHooks[s.type]||ce.valHooks[s.nodeName.toLowerCase()],i&&"get"in i&&(n=i.get(s,"value"))!==e?n:(n=s.value,"string"==typeof n?n.replace(Re,""):null==n?"":n)}}}),ce.extend({valHooks:{option:{get:function(t){var e=ce.find.attr(t,"value");return null!=e?e:t.text}},select:{get:function(t){for(var e,n,i=t.options,r=t.selectedIndex,s="select-one"===t.type||0>r,o=s?null:[],a=s?r+1:i.length,l=0>r?a:s?r:0;a>l;l++)if(n=i[l],!(!n.selected&&l!==r||(ce.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&ce.nodeName(n.parentNode,"optgroup"))){if(e=ce(n).val(),s)return e;o.push(e)}return o},set:function(t,e){for(var n,i,r=t.options,s=ce.makeArray(e),o=r.length;o--;)i=r[o],(i.selected=ce.inArray(ce(i).val(),s)>=0)&&(n=!0);return n||(t.selectedIndex=-1),s}}},attr:function(t,n,i){var r,s,o=t.nodeType;if(t&&3!==o&&8!==o&&2!==o)return typeof t.getAttribute===V?ce.prop(t,n,i):(1===o&&ce.isXMLDoc(t)||(n=n.toLowerCase(),r=ce.attrHooks[n]||(ce.expr.match.bool.test(n)?Ne:Ae)),i===e?r&&"get"in r&&null!==(s=r.get(t,n))?s:(s=ce.find.attr(t,n),null==s?e:s):null!==i?r&&"set"in r&&(s=r.set(t,i,n))!==e?s:(t.setAttribute(n,i+""),i):void ce.removeAttr(t,n))},removeAttr:function(t,e){var n,i,r=0,s=e&&e.match(fe);if(s&&1===t.nodeType)for(;n=s[r++];)i=ce.propFix[n]||n,ce.expr.match.bool.test(n)?Me&&Le||!je.test(n)?t[i]=!1:t[ce.camelCase("default-"+n)]=t[i]=!1:ce.attr(t,n,""),t.removeAttribute(Le?n:i)},attrHooks:{type:{set:function(t,e){if(!ce.support.radioValue&&"radio"===e&&ce.nodeName(t,"input")){var n=t.value;return t.setAttribute("type",e),n&&(t.value=n),e}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(t,n,i){var r,s,o,a=t.nodeType;if(t&&3!==a&&8!==a&&2!==a)return o=1!==a||!ce.isXMLDoc(t),o&&(n=ce.propFix[n]||n,s=ce.propHooks[n]),i!==e?s&&"set"in s&&(r=s.set(t,i,n))!==e?r:t[n]=i:s&&"get"in s&&null!==(r=s.get(t,n))?r:t[n]},propHooks:{tabIndex:{get:function(t){var e=ce.find.attr(t,"tabindex");return e?parseInt(e,10):Oe.test(t.nodeName)||De.test(t.nodeName)&&t.href?0:-1}}}}),Ne={set:function(t,e,n){return e===!1?ce.removeAttr(t,n):Me&&Le||!je.test(n)?t.setAttribute(!Le&&ce.propFix[n]||n,n):t[ce.camelCase("default-"+n)]=t[n]=!0,n}},ce.each(ce.expr.match.bool.source.match(/\w+/g),function(t,n){var i=ce.expr.attrHandle[n]||ce.find.attr;ce.expr.attrHandle[n]=Me&&Le||!je.test(n)?function(t,n,r){var s=ce.expr.attrHandle[n],o=r?e:(ce.expr.attrHandle[n]=e)!=i(t,n,r)?n.toLowerCase():null;return ce.expr.attrHandle[n]=s,o}:function(t,n,i){return i?e:t[ce.camelCase("default-"+n)]?n.toLowerCase():null}}),Me&&Le||(ce.attrHooks.value={set:function(t,e,n){return ce.nodeName(t,"input")?void(t.defaultValue=e):Ae&&Ae.set(t,e,n)}}),Le||(Ae={set:function(t,n,i){var r=t.getAttributeNode(i);return r||t.setAttributeNode(r=t.ownerDocument.createAttribute(i)),r.value=n+="","value"===i||n===t.getAttribute(i)?n:e}},ce.expr.attrHandle.id=ce.expr.attrHandle.name=ce.expr.attrHandle.coords=function(t,n,i){var r;return i?e:(r=t.getAttributeNode(n))&&""!==r.value?r.value:null},ce.valHooks.button={get:function(t,n){var i=t.getAttributeNode(n);return i&&i.specified?i.value:e},set:Ae.set},ce.attrHooks.contenteditable={set:function(t,e,n){Ae.set(t,""===e?!1:e,n)}},ce.each(["width","height"],function(t,e){ce.attrHooks[e]={set:function(t,n){return""===n?(t.setAttribute(e,"auto"),n):void 0}}})),ce.support.hrefNormalized||ce.each(["href","src"],function(t,e){ce.propHooks[e]={get:function(t){return t.getAttribute(e,4)}}}),ce.support.style||(ce.attrHooks.style={get:function(t){return t.style.cssText||e},set:function(t,e){return t.style.cssText=e+""}}),ce.support.optSelected||(ce.propHooks.selected={get:function(t){var e=t.parentNode;return e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex),null}}),ce.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ce.propFix[this.toLowerCase()]=this}),ce.support.enctype||(ce.propFix.enctype="encoding"),ce.each(["radio","checkbox"],function(){ce.valHooks[this]={set:function(t,e){return ce.isArray(e)?t.checked=ce.inArray(ce(t).val(),e)>=0:void 0}},ce.support.checkOn||(ce.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})});var Fe=/^(?:input|select|textarea)$/i,Ie=/^key/,He=/^(?:mouse|contextmenu)|click/,qe=/^(?:focusinfocus|focusoutblur)$/,Be=/^([^.]*)(?:\.(.+)|)$/;ce.event={global:{},add:function(t,n,i,r,s){var o,a,l,u,c,h,f,p,d,m,g,_=ce._data(t);if(_){for(i.handler&&(u=i,i=u.handler,s=u.selector),i.guid||(i.guid=ce.guid++),(a=_.events)||(a=_.events={}),(h=_.handle)||(h=_.handle=function(t){return typeof ce===V||t&&ce.event.triggered===t.type?e:ce.event.dispatch.apply(h.elem,arguments)},h.elem=t),n=(n||"").match(fe)||[""],l=n.length;l--;)o=Be.exec(n[l])||[],d=g=o[1],m=(o[2]||"").split(".").sort(),d&&(c=ce.event.special[d]||{},d=(s?c.delegateType:c.bindType)||d,c=ce.event.special[d]||{},f=ce.extend({type:d,origType:g,data:r,handler:i,guid:i.guid,selector:s,needsContext:s&&ce.expr.match.needsContext.test(s),namespace:m.join(".")},u),(p=a[d])||(p=a[d]=[],p.delegateCount=0,c.setup&&c.setup.call(t,r,m,h)!==!1||(t.addEventListener?t.addEventListener(d,h,!1):t.attachEvent&&t.attachEvent("on"+d,h))),c.add&&(c.add.call(t,f),f.handler.guid||(f.handler.guid=i.guid)),s?p.splice(p.delegateCount++,0,f):p.push(f),ce.event.global[d]=!0);t=null}},remove:function(t,e,n,i,r){var s,o,a,l,u,c,h,f,p,d,m,g=ce.hasData(t)&&ce._data(t);if(g&&(c=g.events)){for(e=(e||"").match(fe)||[""],u=e.length;u--;)if(a=Be.exec(e[u])||[],p=m=a[1],d=(a[2]||"").split(".").sort(),p){for(h=ce.event.special[p]||{},p=(i?h.delegateType:h.bindType)||p,f=c[p]||[],a=a[2]&&new RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=s=f.length;s--;)o=f[s],!r&&m!==o.origType||n&&n.guid!==o.guid||a&&!a.test(o.namespace)||i&&i!==o.selector&&("**"!==i||!o.selector)||(f.splice(s,1),o.selector&&f.delegateCount--,h.remove&&h.remove.call(t,o));l&&!f.length&&(h.teardown&&h.teardown.call(t,d,g.handle)!==!1||ce.removeEvent(t,p,g.handle),delete c[p])}else for(p in c)ce.event.remove(t,p+e[u],n,i,!0);ce.isEmptyObject(c)&&(delete g.handle,ce._removeData(t,"events"))}},trigger:function(n,i,r,s){var o,a,l,u,c,h,f,p=[r||G],d=le.call(n,"type")?n.type:n,m=le.call(n,"namespace")?n.namespace.split("."):[];if(l=h=r=r||G,3!==r.nodeType&&8!==r.nodeType&&!qe.test(d+ce.event.triggered)&&(d.indexOf(".")>=0&&(m=d.split("."),d=m.shift(),m.sort()),a=d.indexOf(":")<0&&"on"+d,n=n[ce.expando]?n:new ce.Event(d,"object"==typeof n&&n),n.isTrigger=s?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=e,n.target||(n.target=r),i=null==i?[n]:ce.makeArray(i,[n]),c=ce.event.special[d]||{},s||!c.trigger||c.trigger.apply(r,i)!==!1)){if(!s&&!c.noBubble&&!ce.isWindow(r)){for(u=c.delegateType||d,qe.test(u+d)||(l=l.parentNode);l;l=l.parentNode)p.push(l),h=l;h===(r.ownerDocument||G)&&p.push(h.defaultView||h.parentWindow||t)}for(f=0;(l=p[f++])&&!n.isPropagationStopped();)n.type=f>1?u:c.bindType||d,o=(ce._data(l,"events")||{})[n.type]&&ce._data(l,"handle"),o&&o.apply(l,i),o=a&&l[a],o&&ce.acceptData(l)&&o.apply&&o.apply(l,i)===!1&&n.preventDefault();if(n.type=d,!s&&!n.isDefaultPrevented()&&(!c._default||c._default.apply(p.pop(),i)===!1)&&ce.acceptData(r)&&a&&r[d]&&!ce.isWindow(r)){h=r[a],h&&(r[a]=null),ce.event.triggered=d;try{r[d]()}catch(g){}ce.event.triggered=e,h&&(r[a]=h)}return n.result}},dispatch:function(t){t=ce.event.fix(t);var n,i,r,s,o,a=[],l=se.call(arguments),u=(ce._data(this,"events")||{})[t.type]||[],c=ce.event.special[t.type]||{};if(l[0]=t,t.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,t)!==!1){for(a=ce.event.handlers.call(this,t,u),n=0;(s=a[n++])&&!t.isPropagationStopped();)for(t.currentTarget=s.elem,o=0;(r=s.handlers[o++])&&!t.isImmediatePropagationStopped();)(!t.namespace_re||t.namespace_re.test(r.namespace))&&(t.handleObj=r,t.data=r.data,i=((ce.event.special[r.origType]||{}).handle||r.handler).apply(s.elem,l),i!==e&&(t.result=i)===!1&&(t.preventDefault(),t.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(t,n){var i,r,s,o,a=[],l=n.delegateCount,u=t.target;if(l&&u.nodeType&&(!t.button||"click"!==t.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==t.type)){for(s=[],o=0;l>o;o++)r=n[o],i=r.selector+" ",s[i]===e&&(s[i]=r.needsContext?ce(i,this).index(u)>=0:ce.find(i,this,null,[u]).length),s[i]&&s.push(r);s.length&&a.push({elem:u,handlers:s})}return l<n.length&&a.push({elem:this,handlers:n.slice(l)}),a},fix:function(t){if(t[ce.expando])return t;var e,n,i,r=t.type,s=t,o=this.fixHooks[r];for(o||(this.fixHooks[r]=o=He.test(r)?this.mouseHooks:Ie.test(r)?this.keyHooks:{}),i=o.props?this.props.concat(o.props):this.props,t=new ce.Event(s),e=i.length;e--;)n=i[e],t[n]=s[n];return t.target||(t.target=s.srcElement||G),3===t.target.nodeType&&(t.target=t.target.parentNode),t.metaKey=!!t.metaKey,o.filter?o.filter(t,s):t},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(t,e){return null==t.which&&(t.which=null!=e.charCode?e.charCode:e.keyCode),t}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(t,n){var i,r,s,o=n.button,a=n.fromElement;return null==t.pageX&&null!=n.clientX&&(r=t.target.ownerDocument||G,s=r.documentElement,i=r.body,t.pageX=n.clientX+(s&&s.scrollLeft||i&&i.scrollLeft||0)-(s&&s.clientLeft||i&&i.clientLeft||0),t.pageY=n.clientY+(s&&s.scrollTop||i&&i.scrollTop||0)-(s&&s.clientTop||i&&i.clientTop||0)),!t.relatedTarget&&a&&(t.relatedTarget=a===t.target?n.toElement:a),t.which||o===e||(t.which=1&o?1:2&o?3:4&o?2:0),t}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==c()&&this.focus)try{return this.focus(),!1}catch(t){}},delegateType:"focusin"},blur:{trigger:function(){return this===c()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return ce.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(t){return ce.nodeName(t.target,"a")}},beforeunload:{postDispatch:function(t){t.result!==e&&(t.originalEvent.returnValue=t.result)}}},simulate:function(t,e,n,i){var r=ce.extend(new ce.Event,n,{type:t,isSimulated:!0,originalEvent:{}});i?ce.event.trigger(r,null,e):ce.event.dispatch.call(e,r),r.isDefaultPrevented()&&n.preventDefault()}},ce.removeEvent=G.removeEventListener?function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n,!1)}:function(t,e,n){var i="on"+e;t.detachEvent&&(typeof t[i]===V&&(t[i]=null),t.detachEvent(i,n))},ce.Event=function(t,e){return this instanceof ce.Event?(t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||t.returnValue===!1||t.getPreventDefault&&t.getPreventDefault()?l:u):this.type=t,e&&ce.extend(this,e),this.timeStamp=t&&t.timeStamp||ce.now(),void(this[ce.expando]=!0)):new ce.Event(t,e)},ce.Event.prototype={isDefaultPrevented:u,isPropagationStopped:u,isImmediatePropagationStopped:u,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=l,t&&(t.preventDefault?t.preventDefault():t.returnValue=!1)},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=l,t&&(t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=l,this.stopPropagation()}},ce.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(t,e){ce.event.special[t]={delegateType:e,bindType:e,handle:function(t){var n,i=this,r=t.relatedTarget,s=t.handleObj;return(!r||r!==i&&!ce.contains(i,r))&&(t.type=s.origType,n=s.handler.apply(this,arguments),t.type=e),n}}}),ce.support.submitBubbles||(ce.event.special.submit={setup:function(){return ce.nodeName(this,"form")?!1:void ce.event.add(this,"click._submit keypress._submit",function(t){var n=t.target,i=ce.nodeName(n,"input")||ce.nodeName(n,"button")?n.form:e;i&&!ce._data(i,"submitBubbles")&&(ce.event.add(i,"submit._submit",function(t){t._submit_bubble=!0}),ce._data(i,"submitBubbles",!0))})},postDispatch:function(t){t._submit_bubble&&(delete t._submit_bubble,this.parentNode&&!t.isTrigger&&ce.event.simulate("submit",this.parentNode,t,!0))},teardown:function(){return ce.nodeName(this,"form")?!1:void ce.event.remove(this,"._submit")}}),ce.support.changeBubbles||(ce.event.special.change={setup:function(){return Fe.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(ce.event.add(this,"propertychange._change",function(t){"checked"===t.originalEvent.propertyName&&(this._just_changed=!0)}),ce.event.add(this,"click._change",function(t){this._just_changed&&!t.isTrigger&&(this._just_changed=!1),ce.event.simulate("change",this,t,!0)})),!1):void ce.event.add(this,"beforeactivate._change",function(t){var e=t.target;Fe.test(e.nodeName)&&!ce._data(e,"changeBubbles")&&(ce.event.add(e,"change._change",function(t){!this.parentNode||t.isSimulated||t.isTrigger||ce.event.simulate("change",this.parentNode,t,!0)}),ce._data(e,"changeBubbles",!0))})},handle:function(t){var e=t.target;return this!==e||t.isSimulated||t.isTrigger||"radio"!==e.type&&"checkbox"!==e.type?t.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return ce.event.remove(this,"._change"),!Fe.test(this.nodeName)}}),ce.support.focusinBubbles||ce.each({focus:"focusin",blur:"focusout"},function(t,e){var n=0,i=function(t){ce.event.simulate(e,t.target,ce.event.fix(t),!0)};ce.event.special[e]={setup:function(){0===n++&&G.addEventListener(t,i,!0)},teardown:function(){0===--n&&G.removeEventListener(t,i,!0)}}}),ce.fn.extend({on:function(t,n,i,r,s){var o,a;if("object"==typeof t){"string"!=typeof n&&(i=i||n,n=e);for(o in t)this.on(o,n,i,t[o],s);return this}if(null==i&&null==r?(r=n,i=n=e):null==r&&("string"==typeof n?(r=i,i=e):(r=i,i=n,n=e)),r===!1)r=u;else if(!r)return this;return 1===s&&(a=r,r=function(t){return ce().off(t),a.apply(this,arguments)},r.guid=a.guid||(a.guid=ce.guid++)),this.each(function(){ce.event.add(this,t,r,i,n)})},one:function(t,e,n,i){return this.on(t,e,n,i,1)},off:function(t,n,i){var r,s;if(t&&t.preventDefault&&t.handleObj)return r=t.handleObj,ce(t.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof t){for(s in t)this.off(s,n,t[s]);return this}return(n===!1||"function"==typeof n)&&(i=n,n=e),i===!1&&(i=u),this.each(function(){ce.event.remove(this,t,i,n)})},trigger:function(t,e){return this.each(function(){ce.event.trigger(t,e,this)})},triggerHandler:function(t,e){var n=this[0];return n?ce.event.trigger(t,e,n,!0):void 0}});var Xe=/^.[^:#\[\.,]*$/,ze=/^(?:parents|prev(?:Until|All))/,$e=ce.expr.match.needsContext,We={children:!0,contents:!0,next:!0,prev:!0};ce.fn.extend({find:function(t){var e,n=[],i=this,r=i.length;if("string"!=typeof t)return this.pushStack(ce(t).filter(function(){for(e=0;r>e;e++)if(ce.contains(i[e],this))return!0}));for(e=0;r>e;e++)ce.find(t,i[e],n);return n=this.pushStack(r>1?ce.unique(n):n),n.selector=this.selector?this.selector+" "+t:t,n},has:function(t){var e,n=ce(t,this),i=n.length;return this.filter(function(){for(e=0;i>e;e++)if(ce.contains(this,n[e]))return!0})},not:function(t){return this.pushStack(f(this,t||[],!0))},filter:function(t){return this.pushStack(f(this,t||[],!1))},is:function(t){return!!f(this,"string"==typeof t&&$e.test(t)?ce(t):t||[],!1).length},closest:function(t,e){for(var n,i=0,r=this.length,s=[],o=$e.test(t)||"string"!=typeof t?ce(t,e||this.context):0;r>i;i++)for(n=this[i];n&&n!==e;n=n.parentNode)if(n.nodeType<11&&(o?o.index(n)>-1:1===n.nodeType&&ce.find.matchesSelector(n,t))){n=s.push(n);
break}return this.pushStack(s.length>1?ce.unique(s):s)},index:function(t){return t?"string"==typeof t?ce.inArray(this[0],ce(t)):ce.inArray(t.jquery?t[0]:t,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){var n="string"==typeof t?ce(t,e):ce.makeArray(t&&t.nodeType?[t]:t),i=ce.merge(this.get(),n);return this.pushStack(ce.unique(i))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),ce.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return ce.dir(t,"parentNode")},parentsUntil:function(t,e,n){return ce.dir(t,"parentNode",n)},next:function(t){return h(t,"nextSibling")},prev:function(t){return h(t,"previousSibling")},nextAll:function(t){return ce.dir(t,"nextSibling")},prevAll:function(t){return ce.dir(t,"previousSibling")},nextUntil:function(t,e,n){return ce.dir(t,"nextSibling",n)},prevUntil:function(t,e,n){return ce.dir(t,"previousSibling",n)},siblings:function(t){return ce.sibling((t.parentNode||{}).firstChild,t)},children:function(t){return ce.sibling(t.firstChild)},contents:function(t){return ce.nodeName(t,"iframe")?t.contentDocument||t.contentWindow.document:ce.merge([],t.childNodes)}},function(t,e){ce.fn[t]=function(n,i){var r=ce.map(this,e,n);return"Until"!==t.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=ce.filter(i,r)),this.length>1&&(We[t]||(r=ce.unique(r)),ze.test(t)&&(r=r.reverse())),this.pushStack(r)}}),ce.extend({filter:function(t,e,n){var i=e[0];return n&&(t=":not("+t+")"),1===e.length&&1===i.nodeType?ce.find.matchesSelector(i,t)?[i]:[]:ce.find.matches(t,ce.grep(e,function(t){return 1===t.nodeType}))},dir:function(t,n,i){for(var r=[],s=t[n];s&&9!==s.nodeType&&(i===e||1!==s.nodeType||!ce(s).is(i));)1===s.nodeType&&r.push(s),s=s[n];return r},sibling:function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n}});var Ue="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Ye=/ jQuery\d+="(?:null|\d+)"/g,Ve=new RegExp("<(?:"+Ue+")[\\s/>]","i"),Je=/^\s+/,Ge=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Ze=/<([\w:]+)/,Qe=/<tbody/i,Ke=/<|&#?\w+;/,tn=/<(?:script|style|link)/i,en=/^(?:checkbox|radio)$/i,nn=/checked\s*(?:[^=]|=\s*.checked.)/i,rn=/^$|\/(?:java|ecma)script/i,sn=/^true\/(.*)/,on=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,an={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:ce.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},ln=p(G),un=ln.appendChild(G.createElement("div"));an.optgroup=an.option,an.tbody=an.tfoot=an.colgroup=an.caption=an.thead,an.th=an.td,ce.fn.extend({text:function(t){return ce.access(this,function(t){return t===e?ce.text(this):this.empty().append((this[0]&&this[0].ownerDocument||G).createTextNode(t))},null,t,arguments.length)},append:function(){return this.domManip(arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=d(this,t);e.appendChild(t)}})},prepend:function(){return this.domManip(arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=d(this,t);e.insertBefore(t,e.firstChild)}})},before:function(){return this.domManip(arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return this.domManip(arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},remove:function(t,e){for(var n,i=t?ce.filter(t,this):this,r=0;null!=(n=i[r]);r++)e||1!==n.nodeType||ce.cleanData(b(n)),n.parentNode&&(e&&ce.contains(n.ownerDocument,n)&&_(b(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var t,e=0;null!=(t=this[e]);e++){for(1===t.nodeType&&ce.cleanData(b(t,!1));t.firstChild;)t.removeChild(t.firstChild);t.options&&ce.nodeName(t,"select")&&(t.options.length=0)}return this},clone:function(t,e){return t=null==t?!1:t,e=null==e?t:e,this.map(function(){return ce.clone(this,t,e)})},html:function(t){return ce.access(this,function(t){var n=this[0]||{},i=0,r=this.length;if(t===e)return 1===n.nodeType?n.innerHTML.replace(Ye,""):e;if(!("string"!=typeof t||tn.test(t)||!ce.support.htmlSerialize&&Ve.test(t)||!ce.support.leadingWhitespace&&Je.test(t)||an[(Ze.exec(t)||["",""])[1].toLowerCase()])){t=t.replace(Ge,"<$1></$2>");try{for(;r>i;i++)n=this[i]||{},1===n.nodeType&&(ce.cleanData(b(n,!1)),n.innerHTML=t);n=0}catch(s){}}n&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=ce.map(this,function(t){return[t.nextSibling,t.parentNode]}),e=0;return this.domManip(arguments,function(n){var i=t[e++],r=t[e++];r&&(i&&i.parentNode!==r&&(i=this.nextSibling),ce(this).remove(),r.insertBefore(n,i))},!0),e?this:this.remove()},detach:function(t){return this.remove(t,!0)},domManip:function(t,e,n){t=ie.apply([],t);var i,r,s,o,a,l,u=0,c=this.length,h=this,f=c-1,p=t[0],d=ce.isFunction(p);if(d||!(1>=c||"string"!=typeof p||ce.support.checkClone)&&nn.test(p))return this.each(function(i){var r=h.eq(i);d&&(t[0]=p.call(this,i,r.html())),r.domManip(t,e,n)});if(c&&(l=ce.buildFragment(t,this[0].ownerDocument,!1,!n&&this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(o=ce.map(b(l,"script"),m),s=o.length;c>u;u++)r=l,u!==f&&(r=ce.clone(r,!0,!0),s&&ce.merge(o,b(r,"script"))),e.call(this[u],r,u);if(s)for(a=o[o.length-1].ownerDocument,ce.map(o,g),u=0;s>u;u++)r=o[u],rn.test(r.type||"")&&!ce._data(r,"globalEval")&&ce.contains(a,r)&&(r.src?ce._evalUrl(r.src):ce.globalEval((r.text||r.textContent||r.innerHTML||"").replace(on,"")));l=i=null}return this}}),ce.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){ce.fn[t]=function(t){for(var n,i=0,r=[],s=ce(t),o=s.length-1;o>=i;i++)n=i===o?this:this.clone(!0),ce(s[i])[e](n),re.apply(r,n.get());return this.pushStack(r)}}),ce.extend({clone:function(t,e,n){var i,r,s,o,a,l=ce.contains(t.ownerDocument,t);if(ce.support.html5Clone||ce.isXMLDoc(t)||!Ve.test("<"+t.nodeName+">")?s=t.cloneNode(!0):(un.innerHTML=t.outerHTML,un.removeChild(s=un.firstChild)),!(ce.support.noCloneEvent&&ce.support.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||ce.isXMLDoc(t)))for(i=b(s),a=b(t),o=0;null!=(r=a[o]);++o)i[o]&&y(r,i[o]);if(e)if(n)for(a=a||b(t),i=i||b(s),o=0;null!=(r=a[o]);o++)v(r,i[o]);else v(t,s);return i=b(s,"script"),i.length>0&&_(i,!l&&b(t,"script")),i=a=r=null,s},buildFragment:function(t,e,n,i){for(var r,s,o,a,l,u,c,h=t.length,f=p(e),d=[],m=0;h>m;m++)if(s=t[m],s||0===s)if("object"===ce.type(s))ce.merge(d,s.nodeType?[s]:s);else if(Ke.test(s)){for(a=a||f.appendChild(e.createElement("div")),l=(Ze.exec(s)||["",""])[1].toLowerCase(),c=an[l]||an._default,a.innerHTML=c[1]+s.replace(Ge,"<$1></$2>")+c[2],r=c[0];r--;)a=a.lastChild;if(!ce.support.leadingWhitespace&&Je.test(s)&&d.push(e.createTextNode(Je.exec(s)[0])),!ce.support.tbody)for(s="table"!==l||Qe.test(s)?"<table>"!==c[1]||Qe.test(s)?0:a:a.firstChild,r=s&&s.childNodes.length;r--;)ce.nodeName(u=s.childNodes[r],"tbody")&&!u.childNodes.length&&s.removeChild(u);for(ce.merge(d,a.childNodes),a.textContent="";a.firstChild;)a.removeChild(a.firstChild);a=f.lastChild}else d.push(e.createTextNode(s));for(a&&f.removeChild(a),ce.support.appendChecked||ce.grep(b(d,"input"),x),m=0;s=d[m++];)if((!i||-1===ce.inArray(s,i))&&(o=ce.contains(s.ownerDocument,s),a=b(f.appendChild(s),"script"),o&&_(a),n))for(r=0;s=a[r++];)rn.test(s.type||"")&&n.push(s);return a=null,f},cleanData:function(t,e){for(var n,i,r,s,o=0,a=ce.expando,l=ce.cache,u=ce.support.deleteExpando,c=ce.event.special;null!=(n=t[o]);o++)if((e||ce.acceptData(n))&&(r=n[a],s=r&&l[r])){if(s.events)for(i in s.events)c[i]?ce.event.remove(n,i):ce.removeEvent(n,i,s.handle);l[r]&&(delete l[r],u?delete n[a]:typeof n.removeAttribute!==V?n.removeAttribute(a):n[a]=null,ee.push(r))}},_evalUrl:function(t){return ce.ajax({url:t,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),ce.fn.extend({wrapAll:function(t){if(ce.isFunction(t))return this.each(function(e){ce(this).wrapAll(t.call(this,e))});if(this[0]){var e=ce(t,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstChild&&1===t.firstChild.nodeType;)t=t.firstChild;return t}).append(this)}return this},wrapInner:function(t){return this.each(ce.isFunction(t)?function(e){ce(this).wrapInner(t.call(this,e))}:function(){var e=ce(this),n=e.contents();n.length?n.wrapAll(t):e.append(t)})},wrap:function(t){var e=ce.isFunction(t);return this.each(function(n){ce(this).wrapAll(e?t.call(this,n):t)})},unwrap:function(){return this.parent().each(function(){ce.nodeName(this,"body")||ce(this).replaceWith(this.childNodes)}).end()}});var cn,hn,fn,pn=/alpha\([^)]*\)/i,dn=/opacity\s*=\s*([^)]*)/,mn=/^(top|right|bottom|left)$/,gn=/^(none|table(?!-c[ea]).+)/,_n=/^margin/,vn=new RegExp("^("+he+")(.*)$","i"),yn=new RegExp("^("+he+")(?!px)[a-z%]+$","i"),bn=new RegExp("^([+-])=("+he+")","i"),xn={BODY:"block"},wn={position:"absolute",visibility:"hidden",display:"block"},Tn={letterSpacing:0,fontWeight:400},kn=["Top","Right","Bottom","Left"],Cn=["Webkit","O","Moz","ms"];ce.fn.extend({css:function(t,n){return ce.access(this,function(t,n,i){var r,s,o={},a=0;if(ce.isArray(n)){for(s=hn(t),r=n.length;r>a;a++)o[n[a]]=ce.css(t,n[a],!1,s);return o}return i!==e?ce.style(t,n,i):ce.css(t,n)},t,n,arguments.length>1)},show:function(){return k(this,!0)},hide:function(){return k(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){T(this)?ce(this).show():ce(this).hide()})}}),ce.extend({cssHooks:{opacity:{get:function(t,e){if(e){var n=fn(t,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":ce.support.cssFloat?"cssFloat":"styleFloat"},style:function(t,n,i,r){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var s,o,a,l=ce.camelCase(n),u=t.style;if(n=ce.cssProps[l]||(ce.cssProps[l]=w(u,l)),a=ce.cssHooks[n]||ce.cssHooks[l],i===e)return a&&"get"in a&&(s=a.get(t,!1,r))!==e?s:u[n];if(o=typeof i,"string"===o&&(s=bn.exec(i))&&(i=(s[1]+1)*s[2]+parseFloat(ce.css(t,n)),o="number"),!(null==i||"number"===o&&isNaN(i)||("number"!==o||ce.cssNumber[l]||(i+="px"),ce.support.clearCloneStyle||""!==i||0!==n.indexOf("background")||(u[n]="inherit"),a&&"set"in a&&(i=a.set(t,i,r))===e)))try{u[n]=i}catch(c){}}},css:function(t,n,i,r){var s,o,a,l=ce.camelCase(n);return n=ce.cssProps[l]||(ce.cssProps[l]=w(t.style,l)),a=ce.cssHooks[n]||ce.cssHooks[l],a&&"get"in a&&(o=a.get(t,!0,i)),o===e&&(o=fn(t,n,r)),"normal"===o&&n in Tn&&(o=Tn[n]),""===i||i?(s=parseFloat(o),i===!0||ce.isNumeric(s)?s||0:o):o}}),t.getComputedStyle?(hn=function(e){return t.getComputedStyle(e,null)},fn=function(t,n,i){var r,s,o,a=i||hn(t),l=a?a.getPropertyValue(n)||a[n]:e,u=t.style;return a&&(""!==l||ce.contains(t.ownerDocument,t)||(l=ce.style(t,n)),yn.test(l)&&_n.test(n)&&(r=u.width,s=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=a.width,u.width=r,u.minWidth=s,u.maxWidth=o)),l}):G.documentElement.currentStyle&&(hn=function(t){return t.currentStyle},fn=function(t,n,i){var r,s,o,a=i||hn(t),l=a?a[n]:e,u=t.style;return null==l&&u&&u[n]&&(l=u[n]),yn.test(l)&&!mn.test(n)&&(r=u.left,s=t.runtimeStyle,o=s&&s.left,o&&(s.left=t.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=r,o&&(s.left=o)),""===l?"auto":l}),ce.each(["height","width"],function(t,e){ce.cssHooks[e]={get:function(t,n,i){return n?0===t.offsetWidth&&gn.test(ce.css(t,"display"))?ce.swap(t,wn,function(){return P(t,e,i)}):P(t,e,i):void 0},set:function(t,n,i){var r=i&&hn(t);return C(t,n,i?S(t,e,i,ce.support.boxSizing&&"border-box"===ce.css(t,"boxSizing",!1,r),r):0)}}}),ce.support.opacity||(ce.cssHooks.opacity={get:function(t,e){return dn.test((e&&t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":e?"1":""},set:function(t,e){var n=t.style,i=t.currentStyle,r=ce.isNumeric(e)?"alpha(opacity="+100*e+")":"",s=i&&i.filter||n.filter||"";n.zoom=1,(e>=1||""===e)&&""===ce.trim(s.replace(pn,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===e||i&&!i.filter)||(n.filter=pn.test(s)?s.replace(pn,r):s+" "+r)}}),ce(function(){ce.support.reliableMarginRight||(ce.cssHooks.marginRight={get:function(t,e){return e?ce.swap(t,{display:"inline-block"},fn,[t,"marginRight"]):void 0}}),!ce.support.pixelPosition&&ce.fn.position&&ce.each(["top","left"],function(t,e){ce.cssHooks[e]={get:function(t,n){return n?(n=fn(t,e),yn.test(n)?ce(t).position()[e]+"px":n):void 0}}})}),ce.expr&&ce.expr.filters&&(ce.expr.filters.hidden=function(t){return t.offsetWidth<=0&&t.offsetHeight<=0||!ce.support.reliableHiddenOffsets&&"none"===(t.style&&t.style.display||ce.css(t,"display"))},ce.expr.filters.visible=function(t){return!ce.expr.filters.hidden(t)}),ce.each({margin:"",padding:"",border:"Width"},function(t,e){ce.cssHooks[t+e]={expand:function(n){for(var i=0,r={},s="string"==typeof n?n.split(" "):[n];4>i;i++)r[t+kn[i]+e]=s[i]||s[i-2]||s[0];return r}},_n.test(t)||(ce.cssHooks[t+e].set=C)});var Sn=/%20/g,Pn=/\[\]$/,An=/\r?\n/g,Nn=/^(?:submit|button|image|reset|file)$/i,En=/^(?:input|select|textarea|keygen)/i;ce.fn.extend({serialize:function(){return ce.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=ce.prop(this,"elements");return t?ce.makeArray(t):this}).filter(function(){var t=this.type;return this.name&&!ce(this).is(":disabled")&&En.test(this.nodeName)&&!Nn.test(t)&&(this.checked||!en.test(t))}).map(function(t,e){var n=ce(this).val();return null==n?null:ce.isArray(n)?ce.map(n,function(t){return{name:e.name,value:t.replace(An,"\r\n")}}):{name:e.name,value:n.replace(An,"\r\n")}}).get()}}),ce.param=function(t,n){var i,r=[],s=function(t,e){e=ce.isFunction(e)?e():null==e?"":e,r[r.length]=encodeURIComponent(t)+"="+encodeURIComponent(e)};if(n===e&&(n=ce.ajaxSettings&&ce.ajaxSettings.traditional),ce.isArray(t)||t.jquery&&!ce.isPlainObject(t))ce.each(t,function(){s(this.name,this.value)});else for(i in t)E(i,t[i],n,s);return r.join("&").replace(Sn,"+")},ce.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(t,e){ce.fn[e]=function(t,n){return arguments.length>0?this.on(e,null,t,n):this.trigger(e)}}),ce.fn.extend({hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)},bind:function(t,e,n){return this.on(t,null,e,n)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,n,i){return this.on(e,t,n,i)},undelegate:function(t,e,n){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n)}});var Rn,On,Dn=ce.now(),jn=/\?/,Ln=/#.*$/,Mn=/([?&])_=[^&]*/,Fn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,In=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Hn=/^(?:GET|HEAD)$/,qn=/^\/\//,Bn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Xn=ce.fn.load,zn={},$n={},Wn="*/".concat("*");try{On=J.href}catch(Un){On=G.createElement("a"),On.href="",On=On.href}Rn=Bn.exec(On.toLowerCase())||[],ce.fn.load=function(t,n,i){if("string"!=typeof t&&Xn)return Xn.apply(this,arguments);var r,s,o,a=this,l=t.indexOf(" ");return l>=0&&(r=t.slice(l,t.length),t=t.slice(0,l)),ce.isFunction(n)?(i=n,n=e):n&&"object"==typeof n&&(o="POST"),a.length>0&&ce.ajax({url:t,type:o,dataType:"html",data:n}).done(function(t){s=arguments,a.html(r?ce("<div>").append(ce.parseHTML(t)).find(r):t)}).complete(i&&function(t,e){a.each(i,s||[t.responseText,e,t])}),this},ce.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){ce.fn[e]=function(t){return this.on(e,t)}}),ce.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:On,type:"GET",isLocal:In.test(Rn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Wn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":ce.parseJSON,"text xml":ce.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?D(D(t,ce.ajaxSettings),e):D(ce.ajaxSettings,t)},ajaxPrefilter:R(zn),ajaxTransport:R($n),ajax:function(t,n){function i(t,n,i,r){var s,h,v,y,x,T=n;2!==b&&(b=2,l&&clearTimeout(l),c=e,a=r||"",w.readyState=t>0?4:0,s=t>=200&&300>t||304===t,i&&(y=j(f,w,i)),y=L(f,y,w,s),s?(f.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(ce.lastModified[o]=x),x=w.getResponseHeader("etag"),x&&(ce.etag[o]=x)),204===t||"HEAD"===f.type?T="nocontent":304===t?T="notmodified":(T=y.state,h=y.data,v=y.error,s=!v)):(v=T,(t||!T)&&(T="error",0>t&&(t=0))),w.status=t,w.statusText=(n||T)+"",s?m.resolveWith(p,[h,T,w]):m.rejectWith(p,[w,T,v]),w.statusCode(_),_=e,u&&d.trigger(s?"ajaxSuccess":"ajaxError",[w,f,s?h:v]),g.fireWith(p,[w,T]),u&&(d.trigger("ajaxComplete",[w,f]),--ce.active||ce.event.trigger("ajaxStop")))}"object"==typeof t&&(n=t,t=e),n=n||{};var r,s,o,a,l,u,c,h,f=ce.ajaxSetup({},n),p=f.context||f,d=f.context&&(p.nodeType||p.jquery)?ce(p):ce.event,m=ce.Deferred(),g=ce.Callbacks("once memory"),_=f.statusCode||{},v={},y={},b=0,x="canceled",w={readyState:0,getResponseHeader:function(t){var e;if(2===b){if(!h)for(h={};e=Fn.exec(a);)h[e[1].toLowerCase()]=e[2];e=h[t.toLowerCase()]}return null==e?null:e},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(t,e){var n=t.toLowerCase();return b||(t=y[n]=y[n]||t,v[t]=e),this},overrideMimeType:function(t){return b||(f.mimeType=t),this},statusCode:function(t){var e;if(t)if(2>b)for(e in t)_[e]=[_[e],t[e]];else w.always(t[w.status]);return this},abort:function(t){var e=t||x;return c&&c.abort(e),i(0,e),this}};if(m.promise(w).complete=g.add,w.success=w.done,w.error=w.fail,f.url=((t||f.url||On)+"").replace(Ln,"").replace(qn,Rn[1]+"//"),f.type=n.method||n.type||f.method||f.type,f.dataTypes=ce.trim(f.dataType||"*").toLowerCase().match(fe)||[""],null==f.crossDomain&&(r=Bn.exec(f.url.toLowerCase()),f.crossDomain=!(!r||r[1]===Rn[1]&&r[2]===Rn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(Rn[3]||("http:"===Rn[1]?"80":"443")))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=ce.param(f.data,f.traditional)),O(zn,f,n,w),2===b)return w;u=f.global,u&&0===ce.active++&&ce.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!Hn.test(f.type),o=f.url,f.hasContent||(f.data&&(o=f.url+=(jn.test(o)?"&":"?")+f.data,delete f.data),f.cache===!1&&(f.url=Mn.test(o)?o.replace(Mn,"$1_="+Dn++):o+(jn.test(o)?"&":"?")+"_="+Dn++)),f.ifModified&&(ce.lastModified[o]&&w.setRequestHeader("If-Modified-Since",ce.lastModified[o]),ce.etag[o]&&w.setRequestHeader("If-None-Match",ce.etag[o])),(f.data&&f.hasContent&&f.contentType!==!1||n.contentType)&&w.setRequestHeader("Content-Type",f.contentType),w.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Wn+"; q=0.01":""):f.accepts["*"]);for(s in f.headers)w.setRequestHeader(s,f.headers[s]);if(f.beforeSend&&(f.beforeSend.call(p,w,f)===!1||2===b))return w.abort();x="abort";for(s in{success:1,error:1,complete:1})w[s](f[s]);if(c=O($n,f,n,w)){w.readyState=1,u&&d.trigger("ajaxSend",[w,f]),f.async&&f.timeout>0&&(l=setTimeout(function(){w.abort("timeout")},f.timeout));try{b=1,c.send(v,i)}catch(T){if(!(2>b))throw T;i(-1,T)}}else i(-1,"No Transport");return w},getJSON:function(t,e,n){return ce.get(t,e,n,"json")},getScript:function(t,n){return ce.get(t,e,n,"script")}}),ce.each(["get","post"],function(t,n){ce[n]=function(t,i,r,s){return ce.isFunction(i)&&(s=s||r,r=i,i=e),ce.ajax({url:t,type:n,dataType:s,data:i,success:r})}}),ce.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(t){return ce.globalEval(t),t}}}),ce.ajaxPrefilter("script",function(t){t.cache===e&&(t.cache=!1),t.crossDomain&&(t.type="GET",t.global=!1)}),ce.ajaxTransport("script",function(t){if(t.crossDomain){var n,i=G.head||ce("head")[0]||G.documentElement;return{send:function(e,r){n=G.createElement("script"),n.async=!0,t.scriptCharset&&(n.charset=t.scriptCharset),n.src=t.url,n.onload=n.onreadystatechange=function(t,e){(e||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,e||r(200,"success"))},i.insertBefore(n,i.firstChild)},abort:function(){n&&n.onload(e,!0)}}}});var Yn=[],Vn=/(=)\?(?=&|$)|\?\?/;ce.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=Yn.pop()||ce.expando+"_"+Dn++;return this[t]=!0,t}}),ce.ajaxPrefilter("json jsonp",function(n,i,r){var s,o,a,l=n.jsonp!==!1&&(Vn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(s=n.jsonpCallback=ce.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Vn,"$1"+s):n.jsonp!==!1&&(n.url+=(jn.test(n.url)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return a||ce.error(s+" was not called"),a[0]},n.dataTypes[0]="json",o=t[s],t[s]=function(){a=arguments},r.always(function(){t[s]=o,n[s]&&(n.jsonpCallback=i.jsonpCallback,Yn.push(s)),a&&ce.isFunction(o)&&o(a[0]),a=o=e}),"script"):void 0});var Jn,Gn,Zn=0,Qn=t.ActiveXObject&&function(){var t;for(t in Jn)Jn[t](e,!0)};ce.ajaxSettings.xhr=t.ActiveXObject?function(){return!this.isLocal&&M()||F()}:M,Gn=ce.ajaxSettings.xhr(),ce.support.cors=!!Gn&&"withCredentials"in Gn,Gn=ce.support.ajax=!!Gn,Gn&&ce.ajaxTransport(function(n){if(!n.crossDomain||ce.support.cors){var i;return{send:function(r,s){var o,a,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(a in n.xhrFields)l[a]=n.xhrFields[a];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest");try{for(a in r)l.setRequestHeader(a,r[a])}catch(u){}l.send(n.hasContent&&n.data||null),i=function(t,r){var a,u,c,h;try{if(i&&(r||4===l.readyState))if(i=e,o&&(l.onreadystatechange=ce.noop,Qn&&delete Jn[o]),r)4!==l.readyState&&l.abort();else{h={},a=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(h.text=l.responseText);try{c=l.statusText}catch(f){c=""}a||!n.isLocal||n.crossDomain?1223===a&&(a=204):a=h.text?200:404}}catch(p){r||s(-1,p)}h&&s(a,c,h,u)},n.async?4===l.readyState?setTimeout(i):(o=++Zn,Qn&&(Jn||(Jn={},ce(t).unload(Qn)),Jn[o]=i),l.onreadystatechange=i):i()},abort:function(){i&&i(e,!0)}}}});var Kn,ti,ei=/^(?:toggle|show|hide)$/,ni=new RegExp("^(?:([+-])=|)("+he+")([a-z%]*)$","i"),ii=/queueHooks$/,ri=[X],si={"*":[function(t,e){var n=this.createTween(t,e),i=n.cur(),r=ni.exec(e),s=r&&r[3]||(ce.cssNumber[t]?"":"px"),o=(ce.cssNumber[t]||"px"!==s&&+i)&&ni.exec(ce.css(n.elem,t)),a=1,l=20;if(o&&o[3]!==s){s=s||o[3],r=r||[],o=+i||1;do a=a||".5",o/=a,ce.style(n.elem,t,o+s);while(a!==(a=n.cur()/i)&&1!==a&&--l)}return r&&(o=n.start=+o||+i||0,n.unit=s,n.end=r[1]?o+(r[1]+1)*r[2]:+r[2]),n}]};ce.Animation=ce.extend(q,{tweener:function(t,e){ce.isFunction(t)?(e=t,t=["*"]):t=t.split(" ");for(var n,i=0,r=t.length;r>i;i++)n=t[i],si[n]=si[n]||[],si[n].unshift(e)},prefilter:function(t,e){e?ri.unshift(t):ri.push(t)}}),ce.Tween=z,z.prototype={constructor:z,init:function(t,e,n,i,r,s){this.elem=t,this.prop=n,this.easing=r||"swing",this.options=e,this.start=this.now=this.cur(),this.end=i,this.unit=s||(ce.cssNumber[n]?"":"px")},cur:function(){var t=z.propHooks[this.prop];return t&&t.get?t.get(this):z.propHooks._default.get(this)},run:function(t){var e,n=z.propHooks[this.prop];return this.pos=e=this.options.duration?ce.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):z.propHooks._default.set(this),this}},z.prototype.init.prototype=z.prototype,z.propHooks={_default:{get:function(t){var e;return null==t.elem[t.prop]||t.elem.style&&null!=t.elem.style[t.prop]?(e=ce.css(t.elem,t.prop,""),e&&"auto"!==e?e:0):t.elem[t.prop]},set:function(t){ce.fx.step[t.prop]?ce.fx.step[t.prop](t):t.elem.style&&(null!=t.elem.style[ce.cssProps[t.prop]]||ce.cssHooks[t.prop])?ce.style(t.elem,t.prop,t.now+t.unit):t.elem[t.prop]=t.now}}},z.propHooks.scrollTop=z.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},ce.each(["toggle","show","hide"],function(t,e){var n=ce.fn[e];ce.fn[e]=function(t,i,r){return null==t||"boolean"==typeof t?n.apply(this,arguments):this.animate($(e,!0),t,i,r)}}),ce.fn.extend({fadeTo:function(t,e,n,i){return this.filter(T).css("opacity",0).show().end().animate({opacity:e},t,n,i)},animate:function(t,e,n,i){var r=ce.isEmptyObject(t),s=ce.speed(e,n,i),o=function(){var e=q(this,ce.extend({},t),s);(r||ce._data(this,"finish"))&&e.stop(!0)};return o.finish=o,r||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(t,n,i){var r=function(t){var e=t.stop;delete t.stop,e(i)};return"string"!=typeof t&&(i=n,n=t,t=e),n&&t!==!1&&this.queue(t||"fx",[]),this.each(function(){var e=!0,n=null!=t&&t+"queueHooks",s=ce.timers,o=ce._data(this);if(n)o[n]&&o[n].stop&&r(o[n]);else for(n in o)o[n]&&o[n].stop&&ii.test(n)&&r(o[n]);for(n=s.length;n--;)s[n].elem!==this||null!=t&&s[n].queue!==t||(s[n].anim.stop(i),e=!1,s.splice(n,1));(e||!i)&&ce.dequeue(this,t)})},finish:function(t){return t!==!1&&(t=t||"fx"),this.each(function(){var e,n=ce._data(this),i=n[t+"queue"],r=n[t+"queueHooks"],s=ce.timers,o=i?i.length:0;for(n.finish=!0,ce.queue(this,t,[]),r&&r.stop&&r.stop.call(this,!0),e=s.length;e--;)s[e].elem===this&&s[e].queue===t&&(s[e].anim.stop(!0),s.splice(e,1));for(e=0;o>e;e++)i[e]&&i[e].finish&&i[e].finish.call(this);delete n.finish})}}),ce.each({slideDown:$("show"),slideUp:$("hide"),slideToggle:$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,e){ce.fn[t]=function(t,n,i){return this.animate(e,t,n,i)}}),ce.speed=function(t,e,n){var i=t&&"object"==typeof t?ce.extend({},t):{complete:n||!n&&e||ce.isFunction(t)&&t,duration:t,easing:n&&e||e&&!ce.isFunction(e)&&e};return i.duration=ce.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in ce.fx.speeds?ce.fx.speeds[i.duration]:ce.fx.speeds._default,(null==i.queue||i.queue===!0)&&(i.queue="fx"),i.old=i.complete,i.complete=function(){ce.isFunction(i.old)&&i.old.call(this),i.queue&&ce.dequeue(this,i.queue)},i},ce.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2}},ce.timers=[],ce.fx=z.prototype.init,ce.fx.tick=function(){var t,n=ce.timers,i=0;for(Kn=ce.now();i<n.length;i++)t=n[i],t()||n[i]!==t||n.splice(i--,1);n.length||ce.fx.stop(),Kn=e},ce.fx.timer=function(t){t()&&ce.timers.push(t)&&ce.fx.start()},ce.fx.interval=13,ce.fx.start=function(){ti||(ti=setInterval(ce.fx.tick,ce.fx.interval))},ce.fx.stop=function(){clearInterval(ti),ti=null},ce.fx.speeds={slow:600,fast:200,_default:400},ce.fx.step={},ce.expr&&ce.expr.filters&&(ce.expr.filters.animated=function(t){return ce.grep(ce.timers,function(e){return t===e.elem}).length}),ce.fn.offset=function(t){if(arguments.length)return t===e?this:this.each(function(e){ce.offset.setOffset(this,t,e)});var n,i,r={top:0,left:0},s=this[0],o=s&&s.ownerDocument;if(o)return n=o.documentElement,ce.contains(n,s)?(typeof s.getBoundingClientRect!==V&&(r=s.getBoundingClientRect()),i=W(o),{top:r.top+(i.pageYOffset||n.scrollTop)-(n.clientTop||0),left:r.left+(i.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):r},ce.offset={setOffset:function(t,e,n){var i=ce.css(t,"position");"static"===i&&(t.style.position="relative");var r,s,o=ce(t),a=o.offset(),l=ce.css(t,"top"),u=ce.css(t,"left"),c=("absolute"===i||"fixed"===i)&&ce.inArray("auto",[l,u])>-1,h={},f={};c?(f=o.position(),r=f.top,s=f.left):(r=parseFloat(l)||0,s=parseFloat(u)||0),ce.isFunction(e)&&(e=e.call(t,n,a)),null!=e.top&&(h.top=e.top-a.top+r),null!=e.left&&(h.left=e.left-a.left+s),"using"in e?e.using.call(t,h):o.css(h)}},ce.fn.extend({position:function(){if(this[0]){var t,e,n={top:0,left:0},i=this[0];return"fixed"===ce.css(i,"position")?e=i.getBoundingClientRect():(t=this.offsetParent(),e=this.offset(),ce.nodeName(t[0],"html")||(n=t.offset()),n.top+=ce.css(t[0],"borderTopWidth",!0),n.left+=ce.css(t[0],"borderLeftWidth",!0)),{top:e.top-n.top-ce.css(i,"marginTop",!0),left:e.left-n.left-ce.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||Z;t&&!ce.nodeName(t,"html")&&"static"===ce.css(t,"position");)t=t.offsetParent;return t||Z})}}),ce.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var i=/Y/.test(n);ce.fn[t]=function(r){return ce.access(this,function(t,r,s){var o=W(t);return s===e?o?n in o?o[n]:o.document.documentElement[r]:t[r]:void(o?o.scrollTo(i?ce(o).scrollLeft():s,i?s:ce(o).scrollTop()):t[r]=s)},t,r,arguments.length,null)}}),ce.each({Height:"height",Width:"width"},function(t,n){ce.each({padding:"inner"+t,content:n,"":"outer"+t},function(i,r){ce.fn[r]=function(r,s){var o=arguments.length&&(i||"boolean"!=typeof r),a=i||(r===!0||s===!0?"margin":"border");return ce.access(this,function(n,i,r){var s;return ce.isWindow(n)?n.document.documentElement["client"+t]:9===n.nodeType?(s=n.documentElement,Math.max(n.body["scroll"+t],s["scroll"+t],n.body["offset"+t],s["offset"+t],s["client"+t])):r===e?ce.css(n,i,a):ce.style(n,i,r,a)},n,o?r:e,o,null)}})}),ce.fn.size=function(){return this.length},ce.fn.andSelf=ce.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=ce:(t.jQuery=t.$=ce,"function"==typeof define&&define.amd&&define("jquery",[],function(){return ce}))}(window),function(t,e){if("function"==typeof define&&define.amd)define(["underscore","jquery","exports"],function(n,i,r){t.Backbone=e(t,r,n,i)});else if("undefined"!=typeof exports){var n=require("underscore");e(t,exports,n)}else t.Backbone=e(t,{},t._,t.jQuery||t.Zepto||t.ender||t.$)}(this,function(t,e,n,i){{var r=t.Backbone,s=[],o=(s.push,s.slice);s.splice}e.VERSION="1.1.2",e.$=i,e.noConflict=function(){return t.Backbone=r,this},e.emulateHTTP=!1,e.emulateJSON=!1;var a=e.Events={on:function(t,e,n){if(!u(this,"on",t,[e,n])||!e)return this;this._events||(this._events={});var i=this._events[t]||(this._events[t]=[]);return i.push({callback:e,context:n,ctx:n||this}),this},once:function(t,e,i){if(!u(this,"once",t,[e,i])||!e)return this;var r=this,s=n.once(function(){r.off(t,s),e.apply(this,arguments)});return s._callback=e,this.on(t,s,i)},off:function(t,e,i){var r,s,o,a,l,c,h,f;if(!this._events||!u(this,"off",t,[e,i]))return this;if(!t&&!e&&!i)return this._events=void 0,this;for(a=t?[t]:n.keys(this._events),l=0,c=a.length;c>l;l++)if(t=a[l],o=this._events[t]){if(this._events[t]=r=[],e||i)for(h=0,f=o.length;f>h;h++)s=o[h],(e&&e!==s.callback&&e!==s.callback._callback||i&&i!==s.context)&&r.push(s);r.length||delete this._events[t]}return this},trigger:function(t){if(!this._events)return this;var e=o.call(arguments,1);if(!u(this,"trigger",t,e))return this;var n=this._events[t],i=this._events.all;return n&&c(n,e),i&&c(i,arguments),this},stopListening:function(t,e,i){var r=this._listeningTo;if(!r)return this;var s=!e&&!i;i||"object"!=typeof e||(i=this),t&&((r={})[t._listenId]=t);for(var o in r)t=r[o],t.off(e,i,this),(s||n.isEmpty(t._events))&&delete this._listeningTo[o];
return this}},l=/\s+/,u=function(t,e,n,i){if(!n)return!0;if("object"==typeof n){for(var r in n)t[e].apply(t,[r,n[r]].concat(i));return!1}if(l.test(n)){for(var s=n.split(l),o=0,a=s.length;a>o;o++)t[e].apply(t,[s[o]].concat(i));return!1}return!0},c=function(t,e){var n,i=-1,r=t.length,s=e[0],o=e[1],a=e[2];switch(e.length){case 0:for(;++i<r;)(n=t[i]).callback.call(n.ctx);return;case 1:for(;++i<r;)(n=t[i]).callback.call(n.ctx,s);return;case 2:for(;++i<r;)(n=t[i]).callback.call(n.ctx,s,o);return;case 3:for(;++i<r;)(n=t[i]).callback.call(n.ctx,s,o,a);return;default:for(;++i<r;)(n=t[i]).callback.apply(n.ctx,e);return}},h={listenTo:"on",listenToOnce:"once"};n.each(h,function(t,e){a[e]=function(e,i,r){var s=this._listeningTo||(this._listeningTo={}),o=e._listenId||(e._listenId=n.uniqueId("l"));return s[o]=e,r||"object"!=typeof i||(r=this),e[t](i,r,this),this}}),a.bind=a.on,a.unbind=a.off,n.extend(e,a);var f=e.Model=function(t,e){var i=t||{};e||(e={}),this.cid=n.uniqueId("c"),this.attributes={},e.collection&&(this.collection=e.collection),e.parse&&(i=this.parse(i,e)||{}),i=n.defaults({},i,n.result(this,"defaults")),this.set(i,e),this.changed={},this.initialize.apply(this,arguments)};n.extend(f.prototype,a,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(){return n.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return n.escape(this.get(t))},has:function(t){return null!=this.get(t)},set:function(t,e,i){var r,s,o,a,l,u,c,h;if(null==t)return this;if("object"==typeof t?(s=t,i=e):(s={})[t]=e,i||(i={}),!this._validate(s,i))return!1;o=i.unset,l=i.silent,a=[],u=this._changing,this._changing=!0,u||(this._previousAttributes=n.clone(this.attributes),this.changed={}),h=this.attributes,c=this._previousAttributes,this.idAttribute in s&&(this.id=s[this.idAttribute]);for(r in s)e=s[r],n.isEqual(h[r],e)||a.push(r),n.isEqual(c[r],e)?delete this.changed[r]:this.changed[r]=e,o?delete h[r]:h[r]=e;if(!l){a.length&&(this._pending=i);for(var f=0,p=a.length;p>f;f++)this.trigger("change:"+a[f],this,h[a[f]],i)}if(u)return this;if(!l)for(;this._pending;)i=this._pending,this._pending=!1,this.trigger("change",this,i);return this._pending=!1,this._changing=!1,this},unset:function(t,e){return this.set(t,void 0,n.extend({},e,{unset:!0}))},clear:function(t){var e={};for(var i in this.attributes)e[i]=void 0;return this.set(e,n.extend({},t,{unset:!0}))},hasChanged:function(t){return null==t?!n.isEmpty(this.changed):n.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?n.clone(this.changed):!1;var e,i=!1,r=this._changing?this._previousAttributes:this.attributes;for(var s in t)n.isEqual(r[s],e=t[s])||((i||(i={}))[s]=e);return i},previous:function(t){return null!=t&&this._previousAttributes?this._previousAttributes[t]:null},previousAttributes:function(){return n.clone(this._previousAttributes)},fetch:function(t){t=t?n.clone(t):{},void 0===t.parse&&(t.parse=!0);var e=this,i=t.success;return t.success=function(n){return e.set(e.parse(n,t),t)?(i&&i(e,n,t),void e.trigger("sync",e,n,t)):!1},F(this,t),this.sync("read",this,t)},save:function(t,e,i){var r,s,o,a=this.attributes;if(null==t||"object"==typeof t?(r=t,i=e):(r={})[t]=e,i=n.extend({validate:!0},i),r&&!i.wait){if(!this.set(r,i))return!1}else if(!this._validate(r,i))return!1;r&&i.wait&&(this.attributes=n.extend({},a,r)),void 0===i.parse&&(i.parse=!0);var l=this,u=i.success;return i.success=function(t){l.attributes=a;var e=l.parse(t,i);return i.wait&&(e=n.extend(r||{},e)),n.isObject(e)&&!l.set(e,i)?!1:(u&&u(l,t,i),void l.trigger("sync",l,t,i))},F(this,i),s=this.isNew()?"create":i.patch?"patch":"update","patch"===s&&(i.attrs=r),o=this.sync(s,this,i),r&&i.wait&&(this.attributes=a),o},destroy:function(t){t=t?n.clone(t):{};var e=this,i=t.success,r=function(){e.trigger("destroy",e,e.collection,t)};if(t.success=function(n){(t.wait||e.isNew())&&r(),i&&i(e,n,t),e.isNew()||e.trigger("sync",e,n,t)},this.isNew())return t.success(),!1;F(this,t);var s=this.sync("delete",this,t);return t.wait||r(),s},url:function(){var t=n.result(this,"urlRoot")||n.result(this.collection,"url")||M();return this.isNew()?t:t.replace(/([^\/])$/,"$1/")+encodeURIComponent(this.id)},parse:function(t){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},n.extend(t||{},{validate:!0}))},_validate:function(t,e){if(!e.validate||!this.validate)return!0;t=n.extend({},this.attributes,t);var i=this.validationError=this.validate(t,e)||null;return i?(this.trigger("invalid",this,i,n.extend(e,{validationError:i})),!1):!0}});var p=["keys","values","pairs","invert","pick","omit"];n.each(p,function(t){f.prototype[t]=function(){var e=o.call(arguments);return e.unshift(this.attributes),n[t].apply(n,e)}});var d=e.Collection=function(t,e){e||(e={}),e.model&&(this.model=e.model),void 0!==e.comparator&&(this.comparator=e.comparator),this._reset(),this.initialize.apply(this,arguments),t&&this.reset(t,n.extend({silent:!0},e))},m={add:!0,remove:!0,merge:!0},g={add:!0,remove:!1};n.extend(d.prototype,a,{model:f,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,n.extend({merge:!1},e,g))},remove:function(t,e){var i=!n.isArray(t);t=i?[t]:n.clone(t),e||(e={});var r,s,o,a;for(r=0,s=t.length;s>r;r++)a=t[r]=this.get(t[r]),a&&(delete this._byId[a.id],delete this._byId[a.cid],o=this.indexOf(a),this.models.splice(o,1),this.length--,e.silent||(e.index=o,a.trigger("remove",a,this,e)),this._removeReference(a,e));return i?t[0]:t},set:function(t,e){e=n.defaults({},e,m),e.parse&&(t=this.parse(t,e));var i=!n.isArray(t);t=i?t?[t]:[]:n.clone(t);var r,s,o,a,l,u,c,h=e.at,p=this.model,d=this.comparator&&null==h&&e.sort!==!1,g=n.isString(this.comparator)?this.comparator:null,_=[],v=[],y={},b=e.add,x=e.merge,w=e.remove,T=!d&&b&&w?[]:!1;for(r=0,s=t.length;s>r;r++){if(l=t[r]||{},o=l instanceof f?a=l:l[p.prototype.idAttribute||"id"],u=this.get(o))w&&(y[u.cid]=!0),x&&(l=l===a?a.attributes:l,e.parse&&(l=u.parse(l,e)),u.set(l,e),d&&!c&&u.hasChanged(g)&&(c=!0)),t[r]=u;else if(b){if(a=t[r]=this._prepareModel(l,e),!a)continue;_.push(a),this._addReference(a,e)}a=u||a,!T||!a.isNew()&&y[a.id]||T.push(a),y[a.id]=!0}if(w){for(r=0,s=this.length;s>r;++r)y[(a=this.models[r]).cid]||v.push(a);v.length&&this.remove(v,e)}if(_.length||T&&T.length)if(d&&(c=!0),this.length+=_.length,null!=h)for(r=0,s=_.length;s>r;r++)this.models.splice(h+r,0,_[r]);else{T&&(this.models.length=0);var k=T||_;for(r=0,s=k.length;s>r;r++)this.models.push(k[r])}if(c&&this.sort({silent:!0}),!e.silent){for(r=0,s=_.length;s>r;r++)(a=_[r]).trigger("add",a,this,e);(c||T&&T.length)&&this.trigger("sort",this,e)}return i?t[0]:t},reset:function(t,e){e||(e={});for(var i=0,r=this.models.length;r>i;i++)this._removeReference(this.models[i],e);return e.previousModels=this.models,this._reset(),t=this.add(t,n.extend({silent:!0},e)),e.silent||this.trigger("reset",this,e),t},push:function(t,e){return this.add(t,n.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t),e},unshift:function(t,e){return this.add(t,n.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t),e},slice:function(){return o.apply(this.models,arguments)},get:function(t){return null==t?void 0:this._byId[t]||this._byId[t.id]||this._byId[t.cid]},at:function(t){return this.models[t]},where:function(t,e){return n.isEmpty(t)?e?void 0:[]:this[e?"find":"filter"](function(e){for(var n in t)if(t[n]!==e.get(n))return!1;return!0})},findWhere:function(t){return this.where(t,!0)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");return t||(t={}),n.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(n.bind(this.comparator,this)),t.silent||this.trigger("sort",this,t),this},pluck:function(t){return n.invoke(this.models,"get",t)},fetch:function(t){t=t?n.clone(t):{},void 0===t.parse&&(t.parse=!0);var e=t.success,i=this;return t.success=function(n){var r=t.reset?"reset":"set";i[r](n,t),e&&e(i,n,t),i.trigger("sync",i,n,t)},F(this,t),this.sync("read",this,t)},create:function(t,e){if(e=e?n.clone(e):{},!(t=this._prepareModel(t,e)))return!1;e.wait||this.add(t,e);var i=this,r=e.success;return e.success=function(t,n){e.wait&&i.add(t,e),r&&r(t,n,e)},t.save(null,e),t},parse:function(t){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(t,e){if(t instanceof f)return t;e=e?n.clone(e):{},e.collection=this;var i=new this.model(t,e);return i.validationError?(this.trigger("invalid",this,i.validationError,e),!1):i},_addReference:function(t){this._byId[t.cid]=t,null!=t.id&&(this._byId[t.id]=t),t.collection||(t.collection=this),t.on("all",this._onModelEvent,this)},_removeReference:function(t){this===t.collection&&delete t.collection,t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,n,i){("add"!==t&&"remove"!==t||n===this)&&("destroy"===t&&this.remove(e,i),e&&t==="change:"+e.idAttribute&&(delete this._byId[e.previous(e.idAttribute)],null!=e.id&&(this._byId[e.id]=e)),this.trigger.apply(this,arguments))}});var _=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain","sample"];n.each(_,function(t){d.prototype[t]=function(){var e=o.call(arguments);return e.unshift(this.models),n[t].apply(n,e)}});var v=["groupBy","countBy","sortBy","indexBy"];n.each(v,function(t){d.prototype[t]=function(e,i){var r=n.isFunction(e)?e:function(t){return t.get(e)};return n[t](this.models,r,i)}});var y=e.View=function(t){this.cid=n.uniqueId("view"),t||(t={}),n.extend(this,n.pick(t,x)),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},b=/^(\S+)\s*(.*)$/,x=["model","collection","el","id","attributes","className","tagName","events"];n.extend(y.prototype,a,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this.stopListening(),this},setElement:function(t,n){return this.$el&&this.undelegateEvents(),this.$el=t instanceof e.$?t:e.$(t),this.el=this.$el[0],n!==!1&&this.delegateEvents(),this},delegateEvents:function(t){if(!t&&!(t=n.result(this,"events")))return this;this.undelegateEvents();for(var e in t){var i=t[e];if(n.isFunction(i)||(i=this[t[e]]),i){var r=e.match(b),s=r[1],o=r[2];i=n.bind(i,this),s+=".delegateEvents"+this.cid,""===o?this.$el.on(s,i):this.$el.on(s,o,i)}}return this},undelegateEvents:function(){return this.$el.off(".delegateEvents"+this.cid),this},_ensureElement:function(){if(this.el)this.setElement(n.result(this,"el"),!1);else{var t=n.extend({},n.result(this,"attributes"));this.id&&(t.id=n.result(this,"id")),this.className&&(t["class"]=n.result(this,"className"));var i=e.$("<"+n.result(this,"tagName")+">").attr(t);this.setElement(i,!1)}}}),e.sync=function(t,i,r){var s=T[t];n.defaults(r||(r={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var o={type:s,dataType:"json"};if(r.url||(o.url=n.result(i,"url")||M()),null!=r.data||!i||"create"!==t&&"update"!==t&&"patch"!==t||(o.contentType="application/json",o.data=JSON.stringify(r.attrs||i.toJSON(r))),r.emulateJSON&&(o.contentType="application/x-www-form-urlencoded",o.data=o.data?{model:o.data}:{}),r.emulateHTTP&&("PUT"===s||"DELETE"===s||"PATCH"===s)){o.type="POST",r.emulateJSON&&(o.data._method=s);var a=r.beforeSend;r.beforeSend=function(t){return t.setRequestHeader("X-HTTP-Method-Override",s),a?a.apply(this,arguments):void 0}}"GET"===o.type||r.emulateJSON||(o.processData=!1),"PATCH"===o.type&&w&&(o.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")});var l=r.xhr=e.ajax(n.extend(o,r));return i.trigger("request",i,l,r),l};var w=!("undefined"==typeof window||!window.ActiveXObject||window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent),T={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var k=e.Router=function(t){t||(t={}),t.routes&&(this.routes=t.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},C=/\((.*?)\)/g,S=/(\(\?)?:\w+/g,P=/\*\w+/g,A=/[\-{}\[\]+?.,\\\^$|#\s]/g;n.extend(k.prototype,a,{initialize:function(){},route:function(t,i,r){n.isRegExp(t)||(t=this._routeToRegExp(t)),n.isFunction(i)&&(r=i,i=""),r||(r=this[i]);var s=this;return e.history.route(t,function(n){var o=s._extractParameters(t,n);s.execute(r,o),s.trigger.apply(s,["route:"+i].concat(o)),s.trigger("route",i,o),e.history.trigger("route",s,i,o)}),this},execute:function(t,e){t&&t.apply(this,e)},navigate:function(t,n){return e.history.navigate(t,n),this},_bindRoutes:function(){if(this.routes){this.routes=n.result(this,"routes");for(var t,e=n.keys(this.routes);null!=(t=e.pop());)this.route(t,this.routes[t])}},_routeToRegExp:function(t){return t=t.replace(A,"\\$&").replace(C,"(?:$1)?").replace(S,function(t,e){return e?t:"([^/?]+)"}).replace(P,"([^?]*?)"),new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return n.map(i,function(t,e){return e===i.length-1?t||null:t?decodeURIComponent(t):null})}});var N=e.History=function(){this.handlers=[],n.bindAll(this,"checkUrl"),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)},E=/^[#\/]|\s+$/g,R=/^\/+|\/+$/g,O=/msie [\w.]+/,D=/\/$/,j=/#.*$/;N.started=!1,n.extend(N.prototype,a,{interval:50,atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(null==t)if(this._hasPushState||!this._wantsHashChange||e){t=decodeURI(this.location.pathname+this.location.search);var n=this.root.replace(D,"");t.indexOf(n)||(t=t.slice(n.length))}else t=this.getHash();return t.replace(E,"")},start:function(t){if(N.started)throw new Error("Backbone.history has already been started");N.started=!0,this.options=n.extend({root:"/"},this.options,t),this.root=this.options.root,this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var i=this.getFragment(),r=document.documentMode,s=O.exec(navigator.userAgent.toLowerCase())&&(!r||7>=r);if(this.root=("/"+this.root+"/").replace(R,"/"),s&&this._wantsHashChange){var o=e.$('<iframe src="javascript:0" tabindex="-1">');this.iframe=o.hide().appendTo("body")[0].contentWindow,this.navigate(i)}this._hasPushState?e.$(window).on("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!s?e.$(window).on("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=i;var a=this.location;if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot())return this.fragment=this.getFragment(null,!0),this.location.replace(this.root+"#"+this.fragment),!0;this._hasPushState&&this.atRoot()&&a.hash&&(this.fragment=this.getHash().replace(E,""),this.history.replaceState({},document.title,this.root+this.fragment))}return this.options.silent?void 0:this.loadUrl()},stop:function(){e.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl),this._checkUrlInterval&&clearInterval(this._checkUrlInterval),N.started=!1},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(){var t=this.getFragment();return t===this.fragment&&this.iframe&&(t=this.getFragment(this.getHash(this.iframe))),t===this.fragment?!1:(this.iframe&&this.navigate(t),void this.loadUrl())},loadUrl:function(t){return t=this.fragment=this.getFragment(t),n.any(this.handlers,function(e){return e.route.test(t)?(e.callback(t),!0):void 0})},navigate:function(t,e){if(!N.started)return!1;e&&e!==!0||(e={trigger:!!e});var n=this.root+(t=this.getFragment(t||""));if(t=t.replace(j,""),this.fragment!==t){if(this.fragment=t,""===t&&"/"!==n&&(n=n.slice(0,-1)),this._hasPushState)this.history[e.replace?"replaceState":"pushState"]({},document.title,n);else{if(!this._wantsHashChange)return this.location.assign(n);this._updateHash(this.location,t,e.replace),this.iframe&&t!==this.getFragment(this.getHash(this.iframe))&&(e.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,t,e.replace))}return e.trigger?this.loadUrl(t):void 0}},_updateHash:function(t,e,n){if(n){var i=t.href.replace(/(javascript:|#).*$/,"");t.replace(i+"#"+e)}else t.hash="#"+e}}),e.history=new N;var L=function(t,e){var i,r=this;i=t&&n.has(t,"constructor")?t.constructor:function(){return r.apply(this,arguments)},n.extend(i,r,e);var s=function(){this.constructor=i};return s.prototype=r.prototype,i.prototype=new s,t&&n.extend(i.prototype,t),i.__super__=r.prototype,i};f.extend=d.extend=k.extend=y.extend=N.extend=L;var M=function(){throw new Error('A "url" property or function must be specified')},F=function(t,e){var n=e.error;e.error=function(i){n&&n(t,i,e),t.trigger("error",t,i,e)}};return e}),(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,n){var i=[].slice,r=function(t,e,i){n.call(this,t,e,i),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=r.prototype.render},s=1e-10,o=n._internals.isSelector,a=n._internals.isArray,l=r.prototype=n.to({},.1,{}),u=[];r.version="1.11.8",l.constructor=r,l.kill()._gc=!1,r.killTweensOf=r.killDelayedCallsTo=n.killTweensOf,r.getTweensOf=n.getTweensOf,r.ticker=n.ticker,l.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),n.prototype.invalidate.call(this)},l.updateTo=function(t,e){var i,r=this.ratio;e&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(i in t)this.vars[i]=t[i];if(this._initted)if(e)this._initted=!1;else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&n._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var s=this._time;this.render(0,!0,!1),this._initted=!1,this.render(s,!0,!1)}else if(this._time>0){this._initted=!1,this._init();for(var o,a=1/(1-r),l=this._firstPT;l;)o=l.s+l.c,l.c*=a,l.s=o-l.c,l=l._next}return this},l.render=function(t,e,n){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var i,r,o,a,l,c,h,f,p=this._dirty?this.totalDuration():this._totalDuration,d=this._time,m=this._totalTime,g=this._cycle,_=this._duration;if(t>=p?(this._totalTime=p,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=_,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(i=!0,r="onComplete"),0===_&&(f=this._rawPrevTime,this._startTime===this._timeline._duration&&(t=0),(0===t||0>f||f===s)&&f!==t&&(n=!0,f>s&&(r="onReverseComplete")),this._rawPrevTime=f=!e||t||this._rawPrevTime===t?t:s)):1e-7>t?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==m||0===_&&this._rawPrevTime>0&&this._rawPrevTime!==s)&&(r="onReverseComplete",i=this._reversed),0>t?(this._active=!1,0===_&&(this._rawPrevTime>=0&&(n=!0),this._rawPrevTime=f=!e||t||this._rawPrevTime===t?t:s)):this._initted||(n=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(a=_+this._repeatDelay,this._cycle=this._totalTime/a>>0,0!==this._cycle&&this._cycle===this._totalTime/a&&this._cycle--,this._time=this._totalTime-this._cycle*a,this._yoyo&&0!==(1&this._cycle)&&(this._time=_-this._time),this._time>_?this._time=_:this._time<0&&(this._time=0)),this._easeType?(l=this._time/_,c=this._easeType,h=this._easePower,(1===c||3===c&&l>=.5)&&(l=1-l),3===c&&(l*=2),1===h?l*=l:2===h?l*=l*l:3===h?l*=l*l*l:4===h&&(l*=l*l*l*l),this.ratio=1===c?1-l:2===c?l:this._time/_<.5?l/2:1-l/2):this.ratio=this._ease.getRatio(this._time/_)),d===this._time&&!n&&g===this._cycle)return void(m!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||u)));if(!this._initted){if(this._init(),!this._initted||this._gc)return;this._time&&!i?this.ratio=this._ease.getRatio(this._time/_):i&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._active||!this._paused&&this._time!==d&&t>=0&&(this._active=!0),0===m&&(this._startAt&&(t>=0?this._startAt.render(t,e,n):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===_)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||u))),o=this._firstPT;o;)o.f?o.t[o.p](o.c*this.ratio+o.s):o.t[o.p]=o.c*this.ratio+o.s,o=o._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,n),e||(this._totalTime!==m||i)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||u)),this._cycle!==g&&(e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||u)),r&&(this._gc||(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,n),i&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||u),0===_&&this._rawPrevTime===s&&f!==s&&(this._rawPrevTime=0)))},r.to=function(t,e,n){return new r(t,e,n)},r.from=function(t,e,n){return n.runBackwards=!0,n.immediateRender=0!=n.immediateRender,new r(t,e,n)},r.fromTo=function(t,e,n,i){return i.startAt=n,i.immediateRender=0!=i.immediateRender&&0!=n.immediateRender,new r(t,e,i)},r.staggerTo=r.allTo=function(t,e,s,l,c,h,f){l=l||0;var p,d,m,g,_=s.delay||0,v=[],y=function(){s.onComplete&&s.onComplete.apply(s.onCompleteScope||this,arguments),c.apply(f||this,h||u)};for(a(t)||("string"==typeof t&&(t=n.selector(t)||t),o(t)&&(t=i.call(t,0))),p=t.length,m=0;p>m;m++){d={};for(g in s)d[g]=s[g];d.delay=_,m===p-1&&c&&(d.onComplete=y),v[m]=new r(t[m],e,d),_+=l}return v},r.staggerFrom=r.allFrom=function(t,e,n,i,s,o,a){return n.runBackwards=!0,n.immediateRender=0!=n.immediateRender,r.staggerTo(t,e,n,i,s,o,a)},r.staggerFromTo=r.allFromTo=function(t,e,n,i,s,o,a,l){return i.startAt=n,i.immediateRender=0!=i.immediateRender&&0!=n.immediateRender,r.staggerTo(t,e,i,s,o,a,l)},r.delayedCall=function(t,e,n,i,s){return new r(e,0,{delay:t,onComplete:e,onCompleteParams:n,onCompleteScope:i,onReverseComplete:e,onReverseCompleteParams:n,onReverseCompleteScope:i,immediateRender:!1,useFrames:s,overwrite:0})},r.set=function(t,e){return new r(t,0,e)},r.isTweening=function(t){return n.getTweensOf(t,!0).length>0};var c=function(t,e){for(var i=[],r=0,s=t._first;s;)s instanceof n?i[r++]=s:(e&&(i[r++]=s),i=i.concat(c(s,e)),r=i.length),s=s._next;return i},h=r.getAllTweens=function(e){return c(t._rootTimeline,e).concat(c(t._rootFramesTimeline,e))};r.killAll=function(t,n,i,r){null==n&&(n=!0),null==i&&(i=!0);var s,o,a,l=h(0!=r),u=l.length,c=n&&i&&r;for(a=0;u>a;a++)o=l[a],(c||o instanceof e||(s=o.target===o.vars.onComplete)&&i||n&&!s)&&(t?o.totalTime(o.totalDuration()):o._enabled(!1,!1))},r.killChildTweensOf=function(t,e){if(null!=t){var s,l,u,c,h,f=n._tweenLookup;if("string"==typeof t&&(t=n.selector(t)||t),o(t)&&(t=i.call(t,0)),a(t))for(c=t.length;--c>-1;)r.killChildTweensOf(t[c],e);else{s=[];for(u in f)for(l=f[u].target.parentNode;l;)l===t&&(s=s.concat(f[u].tweens)),l=l.parentNode;for(h=s.length,c=0;h>c;c++)e&&s[c].totalTime(s[c].totalDuration()),s[c]._enabled(!1,!1)}}};var f=function(t,n,i,r){n=n!==!1,i=i!==!1,r=r!==!1;for(var s,o,a=h(r),l=n&&i&&r,u=a.length;--u>-1;)o=a[u],(l||o instanceof e||(s=o.target===o.vars.onComplete)&&i||n&&!s)&&o.paused(t)};return r.pauseAll=function(t,e,n){f(!0,t,e,n)},r.resumeAll=function(t,e,n){f(!1,t,e,n)},r.globalTimeScale=function(e){var i=t._rootTimeline,r=n.ticker.time;return arguments.length?(e=e||s,i._startTime=r-(r-i._startTime)*i._timeScale/e,i=t._rootFramesTimeline,r=n.ticker.frame,i._startTime=r-(r-i._startTime)*i._timeScale/e,i._timeScale=t._rootTimeline._timeScale=e,e):i._timeScale},l.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},l.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},l.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},l.duration=function(e){return arguments.length?t.prototype.duration.call(this,e):this._duration},l.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},l.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},l.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},l.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},r},!0),window._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,n){var i=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var n,i,r=this.vars;for(i in r)n=r[i],o(n)&&-1!==n.join("").indexOf("{self}")&&(r[i]=this._swapSelfInParams(n));o(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,s=n._internals.isSelector,o=n._internals.isArray,a=[],l=window._gsDefine.globals,u=function(t){var e,n={};for(e in t)n[e]=t[e];return n},c=function(t,e,n,i){t._timeline.pause(t._startTime),e&&e.apply(i||t._timeline,n||a)},h=a.slice,f=i.prototype=new e;return i.version="1.11.8",f.constructor=i,f.kill()._gc=!1,f.to=function(t,e,i,r){var s=i.repeat&&l.TweenMax||n;return e?this.add(new s(t,e,i),r):this.set(t,i,r)},f.from=function(t,e,i,r){return this.add((i.repeat&&l.TweenMax||n).from(t,e,i),r)},f.fromTo=function(t,e,i,r,s){var o=r.repeat&&l.TweenMax||n;return e?this.add(o.fromTo(t,e,i,r),s):this.set(t,r,s)},f.staggerTo=function(t,e,r,o,a,l,c,f){var p,d=new i({onComplete:l,onCompleteParams:c,onCompleteScope:f,smoothChildTiming:this.smoothChildTiming});for("string"==typeof t&&(t=n.selector(t)||t),s(t)&&(t=h.call(t,0)),o=o||0,p=0;p<t.length;p++)r.startAt&&(r.startAt=u(r.startAt)),d.to(t[p],e,u(r),p*o);return this.add(d,a)},f.staggerFrom=function(t,e,n,i,r,s,o,a){return n.immediateRender=0!=n.immediateRender,n.runBackwards=!0,this.staggerTo(t,e,n,i,r,s,o,a)},f.staggerFromTo=function(t,e,n,i,r,s,o,a,l){return i.startAt=n,i.immediateRender=0!=i.immediateRender&&0!=n.immediateRender,this.staggerTo(t,e,i,r,s,o,a,l)},f.call=function(t,e,i,r){return this.add(n.delayedCall(0,t,e,i),r)},f.set=function(t,e,i){return i=this._parseTimeOrLabel(i,0,!0),null==e.immediateRender&&(e.immediateRender=i===this._time&&!this._paused),this.add(new n(t,0,e),i)},i.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,s,o=new i(t),a=o._timeline;for(null==e&&(e=!0),a._remove(o,!0),o._startTime=0,o._rawPrevTime=o._time=o._totalTime=a._time,r=a._first;r;)s=r._next,e&&r instanceof n&&r.target===r.vars.onComplete||o.add(r,r._startTime-r._delay),r=s;return a.add(o,0),o},f.add=function(r,s,a,l){var u,c,h,f,p,d;if("number"!=typeof s&&(s=this._parseTimeOrLabel(s,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&o(r)){for(a=a||"normal",l=l||0,u=s,c=r.length,h=0;c>h;h++)o(f=r[h])&&(f=new i({tweens:f})),this.add(f,u),"string"!=typeof f&&"function"!=typeof f&&("sequence"===a?u=f._startTime+f.totalDuration()/f._timeScale:"start"===a&&(f._startTime-=f.delay())),u+=l;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,s);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=n.delayedCall(0,r)}if(e.prototype.add.call(this,r,s),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(p=this,d=p.rawTime()>r._startTime;p._timeline;)d&&p._timeline.smoothChildTiming?p.totalTime(p._totalTime,!0):p._gc&&p._enabled(!0,!1),p=p._timeline;return this},f.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array||e&&e.push&&o(e)){for(var n=e.length;--n>-1;)this.remove(e[n]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},f._remove=function(t,n){e.prototype._remove.call(this,t,n);var i=this._last;return i?this._time>i._startTime+i._totalDuration/i._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},f.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},f.insert=f.insertMultiple=function(t,e,n,i){return this.add(t,e||0,n,i)},f.appendMultiple=function(t,e,n,i){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),n,i)},f.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},f.addPause=function(t,e,n,i){return this.call(c,["{self}",e,n,i],this,t)},f.removeLabel=function(t){return delete this._labels[t],this},f.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},f._parseTimeOrLabel=function(e,n,i,r){var s;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&o(r)))for(s=r.length;--s>-1;)r[s]instanceof t&&r[s].timeline===this&&this.remove(r[s]);if("string"==typeof n)return this._parseTimeOrLabel(n,i&&"number"==typeof e&&null==this._labels[n]?e-this.duration():0,i);if(n=n||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(s=e.indexOf("="),-1===s)return null==this._labels[e]?i?this._labels[e]=this.duration()+n:n:this._labels[e]+n;n=parseInt(e.charAt(s-1)+"1",10)*Number(e.substr(s+1)),e=s>1?this._parseTimeOrLabel(e.substr(0,s-1),0,i):this.duration()}return Number(e)+n},f.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},f.stop=function(){return this.paused(!0)},f.gotoAndPlay=function(t,e){return this.play(t,e)},f.gotoAndStop=function(t,e){return this.pause(t,e)},f.render=function(t,e,n){this._gc&&this._enabled(!0,!1);var i,s,o,l,u,c=this._dirty?this.totalDuration():this._totalDuration,h=this._time,f=this._startTime,p=this._timeScale,d=this._paused;if(t>=c?(this._totalTime=this._time=c,this._reversed||this._hasPausedChild()||(s=!0,l="onComplete",0===this._duration&&(0===t||this._rawPrevTime<0||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(u=!0,this._rawPrevTime>r&&(l="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=c+1e-4):1e-7>t?(this._totalTime=this._time=0,(0!==h||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(l="onReverseComplete",s=this._reversed),0>t?(this._active=!1,0===this._duration&&this._rawPrevTime>=0&&this._first&&(u=!0),this._rawPrevTime=t):(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=0,this._initted||(u=!0))):this._totalTime=this._time=this._rawPrevTime=t,this._time!==h&&this._first||n||u){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==h&&t>0&&(this._active=!0),0===h&&this.vars.onStart&&0!==this._time&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||a)),this._time>=h)for(i=this._first;i&&(o=i._next,!this._paused||d);)(i._active||i._startTime<=this._time&&!i._paused&&!i._gc)&&(i._reversed?i.render((i._dirty?i.totalDuration():i._totalDuration)-(t-i._startTime)*i._timeScale,e,n):i.render((t-i._startTime)*i._timeScale,e,n)),i=o;
else for(i=this._last;i&&(o=i._prev,!this._paused||d);)(i._active||i._startTime<=h&&!i._paused&&!i._gc)&&(i._reversed?i.render((i._dirty?i.totalDuration():i._totalDuration)-(t-i._startTime)*i._timeScale,e,n):i.render((t-i._startTime)*i._timeScale,e,n)),i=o;this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||a)),l&&(this._gc||(f===this._startTime||p!==this._timeScale)&&(0===this._time||c>=this.totalDuration())&&(s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[l]&&this.vars[l].apply(this.vars[l+"Scope"]||this,this.vars[l+"Params"]||a)))}},f._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof i&&t._hasPausedChild())return!0;t=t._next}return!1},f.getChildren=function(t,e,i,r){r=r||-9999999999;for(var s=[],o=this._first,a=0;o;)o._startTime<r||(o instanceof n?e!==!1&&(s[a++]=o):(i!==!1&&(s[a++]=o),t!==!1&&(s=s.concat(o.getChildren(!0,e,i)),a=s.length))),o=o._next;return s},f.getTweensOf=function(t,e){for(var i=n.getTweensOf(t),r=i.length,s=[],o=0;--r>-1;)(i[r].timeline===this||e&&this._contains(i[r]))&&(s[o++]=i[r]);return s},f._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},f.shiftChildren=function(t,e,n){n=n||0;for(var i,r=this._first,s=this._labels;r;)r._startTime>=n&&(r._startTime+=t),r=r._next;if(e)for(i in s)s[i]>=n&&(s[i]+=t);return this._uncache(!0)},f._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var n=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),i=n.length,r=!1;--i>-1;)n[i]._kill(t,e)&&(r=!0);return r},f.clear=function(t){var e=this.getChildren(!1,!0,!0),n=e.length;for(this._time=this._totalTime=0;--n>-1;)e[n]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},f.invalidate=function(){for(var t=this._first;t;)t.invalidate(),t=t._next;return this},f._enabled=function(t,n){if(t===this._gc)for(var i=this._first;i;)i._enabled(t,!0),i=i._next;return e.prototype._enabled.call(this,t,n)},f.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},f.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,n,i=0,r=this._last,s=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>s&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):s=r._startTime,r._startTime<0&&!r._paused&&(i-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),s=0),n=r._startTime+r._totalDuration/r._timeScale,n>i&&(i=n),r=e;this._duration=this._totalDuration=i,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},f.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},f.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},i},!0),window._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(t,e,n){var i=function(e){t.call(this,e),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},r=1e-10,s=[],o=new n(null,null,1,0),a=i.prototype=new t;return a.constructor=i,a.kill()._gc=!1,i.version="1.11.8",a.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)},a.addCallback=function(t,n,i,r){return this.add(e.delayedCall(0,t,i,r),n)},a.removeCallback=function(t,e){if(t)if(null==e)this._kill(null,t);else for(var n=this.getTweensOf(t,!1),i=n.length,r=this._parseTimeOrLabel(e);--i>-1;)n[i]._startTime===r&&n[i]._enabled(!1,!1);return this},a.tweenTo=function(t,n){n=n||{};var i,r,a,l={ease:o,overwrite:n.delay?2:1,useFrames:this.usesFrames(),immediateRender:!1};for(r in n)l[r]=n[r];return l.time=this._parseTimeOrLabel(t),i=Math.abs(Number(l.time)-this._time)/this._timeScale||.001,a=new e(this,i,l),l.onStart=function(){a.target.paused(!0),a.vars.time!==a.target.time()&&i===a.duration()&&a.duration(Math.abs(a.vars.time-a.target.time())/a.target._timeScale),n.onStart&&n.onStart.apply(n.onStartScope||a,n.onStartParams||s)},a},a.tweenFromTo=function(t,e,n){n=n||{},t=this._parseTimeOrLabel(t),n.startAt={onComplete:this.seek,onCompleteParams:[t],onCompleteScope:this},n.immediateRender=n.immediateRender!==!1;var i=this.tweenTo(e,n);return i.duration(Math.abs(i.vars.time-t)/this._timeScale||.001)},a.render=function(t,e,n){this._gc&&this._enabled(!0,!1);var i,o,a,l,u,c,h=this._dirty?this.totalDuration():this._totalDuration,f=this._duration,p=this._time,d=this._totalTime,m=this._startTime,g=this._timeScale,_=this._rawPrevTime,v=this._paused,y=this._cycle;if(t>=h?(this._locked||(this._totalTime=h,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(o=!0,l="onComplete",0===this._duration&&(0===t||0>_||_===r)&&_!==t&&this._first&&(u=!0,_>r&&(l="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,this._yoyo&&0!==(1&this._cycle)?this._time=t=0:(this._time=f,t=f+1e-4)):1e-7>t?(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==p||0===f&&_!==r&&(_>0||0>t&&_>=0)&&!this._locked)&&(l="onReverseComplete",o=this._reversed),0>t?(this._active=!1,0===f&&_>=0&&this._first&&(u=!0),this._rawPrevTime=t):(this._rawPrevTime=f||!e||t||this._rawPrevTime===t?t:r,t=0,this._initted||(u=!0))):(0===f&&0>_&&(u=!0),this._time=this._rawPrevTime=t,this._locked||(this._totalTime=t,0!==this._repeat&&(c=f+this._repeatDelay,this._cycle=this._totalTime/c>>0,0!==this._cycle&&this._cycle===this._totalTime/c&&this._cycle--,this._time=this._totalTime-this._cycle*c,this._yoyo&&0!==(1&this._cycle)&&(this._time=f-this._time),this._time>f?(this._time=f,t=f+1e-4):this._time<0?this._time=t=0:t=this._time))),this._cycle!==y&&!this._locked){var b=this._yoyo&&0!==(1&y),x=b===(this._yoyo&&0!==(1&this._cycle)),w=this._totalTime,T=this._cycle,k=this._rawPrevTime,C=this._time;if(this._totalTime=y*f,this._cycle<y?b=!b:this._totalTime+=f,this._time=p,this._rawPrevTime=0===f?_-1e-4:_,this._cycle=y,this._locked=!0,p=b?0:f,this.render(p,e,0===f),e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||s),x&&(p=b?f+1e-4:-1e-4,this.render(p,!0,!1)),this._locked=!1,this._paused&&!v)return;this._time=C,this._totalTime=w,this._cycle=T,this._rawPrevTime=k}if(!(this._time!==p&&this._first||n||u))return void(d!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||s)));if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==d&&t>0&&(this._active=!0),0===d&&this.vars.onStart&&0!==this._totalTime&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||s)),this._time>=p)for(i=this._first;i&&(a=i._next,!this._paused||v);)(i._active||i._startTime<=this._time&&!i._paused&&!i._gc)&&(i._reversed?i.render((i._dirty?i.totalDuration():i._totalDuration)-(t-i._startTime)*i._timeScale,e,n):i.render((t-i._startTime)*i._timeScale,e,n)),i=a;else for(i=this._last;i&&(a=i._prev,!this._paused||v);)(i._active||i._startTime<=p&&!i._paused&&!i._gc)&&(i._reversed?i.render((i._dirty?i.totalDuration():i._totalDuration)-(t-i._startTime)*i._timeScale,e,n):i.render((t-i._startTime)*i._timeScale,e,n)),i=a;this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||s)),l&&(this._locked||this._gc||(m===this._startTime||g!==this._timeScale)&&(0===this._time||h>=this.totalDuration())&&(o&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[l]&&this.vars[l].apply(this.vars[l+"Scope"]||this,this.vars[l+"Params"]||s)))},a.getActive=function(t,e,n){null==t&&(t=!0),null==e&&(e=!0),null==n&&(n=!1);var i,r,s=[],o=this.getChildren(t,e,n),a=0,l=o.length;for(i=0;l>i;i++)r=o[i],r.isActive()&&(s[a++]=r);return s},a.getLabelAfter=function(t){t||0!==t&&(t=this._time);var e,n=this.getLabelsArray(),i=n.length;for(e=0;i>e;e++)if(n[e].time>t)return n[e].name;return null},a.getLabelBefore=function(t){null==t&&(t=this._time);for(var e=this.getLabelsArray(),n=e.length;--n>-1;)if(e[n].time<t)return e[n].name;return null},a.getLabelsArray=function(){var t,e=[],n=0;for(t in this._labels)e[n++]={time:this._labels[t],name:t};return e.sort(function(t,e){return t.time-e.time}),e},a.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},a.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},a.totalDuration=function(e){return arguments.length?-1===this._repeat?this:this.duration((e-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(t.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},a.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},a.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},a.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},a.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},a.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.getLabelBefore(this._time+1e-8)},i},!0),function(){var t=180/Math.PI,e=[],n=[],i=[],r={},s=function(t,e,n,i){this.a=t,this.b=e,this.c=n,this.d=i,this.da=i-t,this.ca=n-t,this.ba=e-t},o=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",a=function(t,e,n,i){var r={a:t},s={},o={},a={c:i},l=(t+e)/2,u=(e+n)/2,c=(n+i)/2,h=(l+u)/2,f=(u+c)/2,p=(f-h)/8;return r.b=l+(t-l)/4,s.b=h+p,r.c=s.a=(r.b+s.b)/2,s.c=o.a=(h+f)/2,o.b=f-p,a.b=c+(i-c)/4,o.c=a.a=(o.b+a.b)/2,[r,s,o,a]},l=function(t,r,s,o,l){var u,c,h,f,p,d,m,g,_,v,y,b,x,w=t.length-1,T=0,k=t[0].a;for(u=0;w>u;u++)p=t[T],c=p.a,h=p.d,f=t[T+1].d,l?(y=e[u],b=n[u],x=(b+y)*r*.25/(o?.5:i[u]||.5),d=h-(h-c)*(o?.5*r:0!==y?x/y:0),m=h+(f-h)*(o?.5*r:0!==b?x/b:0),g=h-(d+((m-d)*(3*y/(y+b)+.5)/4||0))):(d=h-(h-c)*r*.5,m=h+(f-h)*r*.5,g=h-(d+m)/2),d+=g,m+=g,p.c=_=d,p.b=0!==u?k:k=p.a+.6*(p.c-p.a),p.da=h-c,p.ca=_-c,p.ba=k-c,s?(v=a(c,k,_,h),t.splice(T,1,v[0],v[1],v[2],v[3]),T+=4):T++,k=m;p=t[T],p.b=k,p.c=k+.4*(p.d-k),p.da=p.d-p.a,p.ca=p.c-p.a,p.ba=k-p.a,s&&(v=a(p.a,k,p.c,p.d),t.splice(T,1,v[0],v[1],v[2],v[3]))},u=function(t,i,r,o){var a,l,u,c,h,f,p=[];if(o)for(t=[o].concat(t),l=t.length;--l>-1;)"string"==typeof(f=t[l][i])&&"="===f.charAt(1)&&(t[l][i]=o[i]+Number(f.charAt(0)+f.substr(2)));if(a=t.length-2,0>a)return p[0]=new s(t[0][i],0,0,t[-1>a?0:1][i]),p;for(l=0;a>l;l++)u=t[l][i],c=t[l+1][i],p[l]=new s(u,0,0,c),r&&(h=t[l+2][i],e[l]=(e[l]||0)+(c-u)*(c-u),n[l]=(n[l]||0)+(h-c)*(h-c));return p[l]=new s(t[l][i],0,0,t[l+1][i]),p},c=function(t,s,a,c,h,f){var p,d,m,g,_,v,y,b,x={},w=[],T=f||t[0];h="string"==typeof h?","+h+",":o,null==s&&(s=1);for(d in t[0])w.push(d);if(t.length>1){for(b=t[t.length-1],y=!0,p=w.length;--p>-1;)if(d=w[p],Math.abs(T[d]-b[d])>.05){y=!1;break}y&&(t=t.concat(),f&&t.unshift(f),t.push(t[1]),f=t[t.length-3])}for(e.length=n.length=i.length=0,p=w.length;--p>-1;)d=w[p],r[d]=-1!==h.indexOf(","+d+","),x[d]=u(t,d,r[d],f);for(p=e.length;--p>-1;)e[p]=Math.sqrt(e[p]),n[p]=Math.sqrt(n[p]);if(!c){for(p=w.length;--p>-1;)if(r[d])for(m=x[w[p]],v=m.length-1,g=0;v>g;g++)_=m[g+1].da/n[g]+m[g].da/e[g],i[g]=(i[g]||0)+_*_;for(p=i.length;--p>-1;)i[p]=Math.sqrt(i[p])}for(p=w.length,g=a?4:1;--p>-1;)d=w[p],m=x[d],l(m,s,a,c,r[d]),y&&(m.splice(0,g),m.splice(m.length-g,g));return x},h=function(t,e,n){e=e||"soft";var i,r,o,a,l,u,c,h,f,p,d,m={},g="cubic"===e?3:2,_="soft"===e,v=[];if(_&&n&&(t=[n].concat(t)),null==t||t.length<g+1)throw"invalid Bezier data";for(f in t[0])v.push(f);for(u=v.length;--u>-1;){for(f=v[u],m[f]=l=[],p=0,h=t.length,c=0;h>c;c++)i=null==n?t[c][f]:"string"==typeof(d=t[c][f])&&"="===d.charAt(1)?n[f]+Number(d.charAt(0)+d.substr(2)):Number(d),_&&c>1&&h-1>c&&(l[p++]=(i+l[p-2])/2),l[p++]=i;for(h=p-g+1,p=0,c=0;h>c;c+=g)i=l[c],r=l[c+1],o=l[c+2],a=2===g?0:l[c+3],l[p++]=d=3===g?new s(i,r,o,a):new s(i,(2*r+i)/3,(2*r+o)/3,o);l.length=p}return m},f=function(t,e,n){for(var i,r,s,o,a,l,u,c,h,f,p,d=1/n,m=t.length;--m>-1;)for(f=t[m],s=f.a,o=f.d-s,a=f.c-s,l=f.b-s,i=r=0,c=1;n>=c;c++)u=d*c,h=1-u,i=r-(r=(u*u*o+3*h*(u*a+h*l))*u),p=m*n+c-1,e[p]=(e[p]||0)+i*i},p=function(t,e){e=e>>0||6;var n,i,r,s,o=[],a=[],l=0,u=0,c=e-1,h=[],p=[];for(n in t)f(t[n],o,e);for(r=o.length,i=0;r>i;i++)l+=Math.sqrt(o[i]),s=i%e,p[s]=l,s===c&&(u+=l,s=i/e>>0,h[s]=p,a[s]=u,l=0,p=[]);return{length:u,lengths:a,segments:h}},d=window._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.2",API:2,global:!0,init:function(t,e,n){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._round={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var i,r,s,o,a,l=e.values||[],u={},f=l[0],d=e.autoRotate||n.vars.orientToBezier;this._autoRotate=d?d instanceof Array?d:[["x","y","rotation",d===!0?0:Number(d)||0]]:null;for(i in f)this._props.push(i);for(s=this._props.length;--s>-1;)i=this._props[s],this._overwriteProps.push(i),r=this._func[i]="function"==typeof t[i],u[i]=r?t[i.indexOf("set")||"function"!=typeof t["get"+i.substr(3)]?i:"get"+i.substr(3)]():parseFloat(t[i]),a||u[i]!==l[0][i]&&(a=u);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?c(l,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,a):h(l,e.type,u),this._segCount=this._beziers[i].length,this._timeRes){var m=p(this._beziers,this._timeRes);this._length=m.length,this._lengths=m.lengths,this._segments=m.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(d=this._autoRotate)for(this._initialRotations=[],d[0]instanceof Array||(this._autoRotate=d=[d]),s=d.length;--s>-1;){for(o=0;3>o;o++)i=d[s][o],this._func[i]="function"==typeof t[i]?t[i.indexOf("set")||"function"!=typeof t["get"+i.substr(3)]?i:"get"+i.substr(3)]:!1;i=d[s][2],this._initialRotations[s]=this._func[i]?this._func[i].call(this._target):this._target[i]}return this._startRatio=n.vars.runBackwards?1:0,!0},set:function(e){var n,i,r,s,o,a,l,u,c,h,f=this._segCount,p=this._func,d=this._target,m=e!==this._startRatio;if(this._timeRes){if(c=this._lengths,h=this._curSeg,e*=this._length,r=this._li,e>this._l2&&f-1>r){for(u=f-1;u>r&&(this._l2=c[++r])<=e;);this._l1=c[r-1],this._li=r,this._curSeg=h=this._segments[r],this._s2=h[this._s1=this._si=0]}else if(e<this._l1&&r>0){for(;r>0&&(this._l1=c[--r])>=e;);0===r&&e<this._l1?this._l1=0:r++,this._l2=c[r],this._li=r,this._curSeg=h=this._segments[r],this._s1=h[(this._si=h.length-1)-1]||0,this._s2=h[this._si]}if(n=r,e-=this._l1,r=this._si,e>this._s2&&r<h.length-1){for(u=h.length-1;u>r&&(this._s2=h[++r])<=e;);this._s1=h[r-1],this._si=r}else if(e<this._s1&&r>0){for(;r>0&&(this._s1=h[--r])>=e;);0===r&&e<this._s1?this._s1=0:r++,this._s2=h[r],this._si=r}a=(r+(e-this._s1)/(this._s2-this._s1))*this._prec}else n=0>e?0:e>=1?f-1:f*e>>0,a=(e-n*(1/f))*f;for(i=1-a,r=this._props.length;--r>-1;)s=this._props[r],o=this._beziers[s][n],l=(a*a*o.da+3*i*(a*o.ca+i*o.ba))*a+o.a,this._round[s]&&(l=Math.round(l)),p[s]?d[s](l):d[s]=l;if(this._autoRotate){var g,_,v,y,b,x,w,T=this._autoRotate;for(r=T.length;--r>-1;)s=T[r][2],x=T[r][3]||0,w=T[r][4]===!0?1:t,o=this._beziers[T[r][0]],g=this._beziers[T[r][1]],o&&g&&(o=o[n],g=g[n],_=o.a+(o.b-o.a)*a,y=o.b+(o.c-o.b)*a,_+=(y-_)*a,y+=(o.c+(o.d-o.c)*a-y)*a,v=g.a+(g.b-g.a)*a,b=g.b+(g.c-g.b)*a,v+=(b-v)*a,b+=(g.c+(g.d-g.c)*a-b)*a,l=m?Math.atan2(b-v,y-_)*w+x:this._initialRotations[r],p[s]?d[s](l):d[s]=l)}}}),m=d.prototype;d.bezierThrough=c,d.cubicToQuadratic=a,d._autoCSS=!0,d.quadraticToCubic=function(t,e,n){return new s(t,(2*e+t)/3,(2*e+n)/3,n)},d._cssRegister=function(){var t=window._gsDefine.globals.CSSPlugin;if(t){var e=t._internals,n=e._parseToProxy,i=e._setPluginRatio,r=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(t,e,s,o,a,l){e instanceof Array&&(e={values:e}),l=new d;var u,c,h,f=e.values,p=f.length-1,m=[],g={};if(0>p)return a;for(u=0;p>=u;u++)h=n(t,f[u],o,a,l,p!==u),m[u]=h.end;for(c in e)g[c]=e[c];return g.values=m,a=new r(t,"bezier",0,0,h.pt,2),a.data=h,a.plugin=l,a.setRatio=i,0===g.autoRotate&&(g.autoRotate=!0),!g.autoRotate||g.autoRotate instanceof Array||(u=g.autoRotate===!0?0:Number(g.autoRotate),g.autoRotate=null!=h.end.left?[["left","top","rotation",u,!1]]:null!=h.end.x?[["x","y","rotation",u,!1]]:!1),g.autoRotate&&(o._transform||o._enableTransforms(!1),h.autoRotate=o._target._gsTransform),l._onInitTween(h.proxy,g,o._tween),a}})}},m._roundProps=function(t,e){for(var n=this._overwriteProps,i=n.length;--i>-1;)(t[n[i]]||t.bezier||t.bezierThrough)&&(this._round[n[i]]=e)},m._kill=function(t){var e,n,i=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],n=i.length;--n>-1;)i[n]===e&&i.splice(n,1);return this._super._kill.call(this,t)}}(),window._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var n,i,r,s,o=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=o.prototype.setRatio},a={},l=o.prototype=new t("css");l.constructor=o,o.version="1.11.8",o.API=2,o.defaultTransformPerspective=0,o.defaultSkewType="compensated",l="px",o.suffixMap={top:l,right:l,bottom:l,left:l,width:l,height:l,fontSize:l,padding:l,margin:l,perspective:l,lineHeight:""};var u,c,h,f,p,d,m=/(?:\d|\-\d|\.\d|\-\.\d)+/g,g=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,_=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/[^\d\-\.]/g,y=/(?:\d|\-|\+|=|#|\.)*/g,b=/opacity *= *([^)]*)/,x=/opacity:([^;]*)/,w=/alpha\(opacity *=.+?\)/i,T=/^(rgb|hsl)/,k=/([A-Z])/g,C=/-([a-z])/gi,S=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,P=function(t,e){return e.toUpperCase()},A=/(?:Left|Right|Width)/i,N=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,E=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,R=/,(?=[^\)]*(?:\(|$))/gi,O=Math.PI/180,D=180/Math.PI,j={},L=document,M=L.createElement("div"),F=L.createElement("img"),I=o._internals={_specialProps:a},H=navigator.userAgent,q=function(){var t,e=H.indexOf("Android"),n=L.createElement("div");return h=-1!==H.indexOf("Safari")&&-1===H.indexOf("Chrome")&&(-1===e||Number(H.substr(e+8,1))>3),p=h&&Number(H.substr(H.indexOf("Version/")+8,1))<6,f=-1!==H.indexOf("Firefox"),/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(H)&&(d=parseFloat(RegExp.$1)),n.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",t=n.getElementsByTagName("a")[0],t?/^0.55/.test(t.style.opacity):!1}(),B=function(t){return b.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},X=function(t){window.console&&console.log(t)},z="",$="",W=function(t,e){e=e||M;var n,i,r=e.style;if(void 0!==r[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),n=["O","Moz","ms","Ms","Webkit"],i=5;--i>-1&&void 0===r[n[i]+t];);return i>=0?($=3===i?"ms":n[i],z="-"+$.toLowerCase()+"-",$+t):null},U=L.defaultView?L.defaultView.getComputedStyle:function(){},Y=o.getStyle=function(t,e,n,i,r){var s;return q||"opacity"!==e?(!i&&t.style[e]?s=t.style[e]:(n=n||U(t,null))?s=n[e]||n.getPropertyValue(e)||n.getPropertyValue(e.replace(k,"-$1").toLowerCase()):t.currentStyle&&(s=t.currentStyle[e]),null==r||s&&"none"!==s&&"auto"!==s&&"auto auto"!==s?s:r):B(t)},V=I.convertToPixels=function(t,n,i,r,s){if("px"===r||!r)return i;if("auto"===r||!i)return 0;var a,l,u,c=A.test(n),h=t,f=M.style,p=0>i;if(p&&(i=-i),"%"===r&&-1!==n.indexOf("border"))a=i/100*(c?t.clientWidth:t.clientHeight);else{if(f.cssText="border:0 solid red;position:"+Y(t,"position")+";line-height:0;","%"!==r&&h.appendChild)f[c?"borderLeftWidth":"borderTopWidth"]=i+r;else{if(h=t.parentNode||L.body,l=h._gsCache,u=e.ticker.frame,l&&c&&l.time===u)return l.width*i/100;f[c?"width":"height"]=i+r}h.appendChild(M),a=parseFloat(M[c?"offsetWidth":"offsetHeight"]),h.removeChild(M),c&&"%"===r&&o.cacheWidths!==!1&&(l=h._gsCache=h._gsCache||{},l.time=u,l.width=a/i*100),0!==a||s||(a=V(t,n,i,r,!0))}return p?-a:a},J=I.calculateOffset=function(t,e,n){if("absolute"!==Y(t,"position",n))return 0;var i="left"===e?"Left":"Top",r=Y(t,"margin"+i,n);return t["offset"+i]-(V(t,e,parseFloat(r),r.replace(y,""))||0)},G=function(t,e){var n,i,r={};if(e=e||U(t,null))if(n=e.length)for(;--n>-1;)r[e[n].replace(C,P)]=e.getPropertyValue(e[n]);else for(n in e)r[n]=e[n];else if(e=t.currentStyle||t.style)for(n in e)"string"==typeof n&&void 0===r[n]&&(r[n.replace(C,P)]=e[n]);return q||(r.opacity=B(t)),i=ke(t,e,!1),r.rotation=i.rotation,r.skewX=i.skewX,r.scaleX=i.scaleX,r.scaleY=i.scaleY,r.x=i.x,r.y=i.y,we&&(r.z=i.z,r.rotationX=i.rotationX,r.rotationY=i.rotationY,r.scaleZ=i.scaleZ),r.filters&&delete r.filters,r},Z=function(t,e,n,i,r){var s,o,a,l={},u=t.style;for(o in n)"cssText"!==o&&"length"!==o&&isNaN(o)&&(e[o]!==(s=n[o])||r&&r[o])&&-1===o.indexOf("Origin")&&("number"==typeof s||"string"==typeof s)&&(l[o]="auto"!==s||"left"!==o&&"top"!==o?""!==s&&"auto"!==s&&"none"!==s||"string"!=typeof e[o]||""===e[o].replace(v,"")?s:0:J(t,o),void 0!==u[o]&&(a=new he(u,o,u[o],a)));if(i)for(o in i)"className"!==o&&(l[o]=i[o]);return{difs:l,firstMPT:a}},Q={width:["Left","Right"],height:["Top","Bottom"]},K=["marginLeft","marginRight","marginTop","marginBottom"],te=function(t,e,n){var i=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),r=Q[e],s=r.length;for(n=n||U(t,null);--s>-1;)i-=parseFloat(Y(t,"padding"+r[s],n,!0))||0,i-=parseFloat(Y(t,"border"+r[s]+"Width",n,!0))||0;return i},ee=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var n=t.split(" "),i=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":n[0],r=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":n[1];return null==r?r="0":"center"===r&&(r="50%"),("center"===i||isNaN(parseFloat(i))&&-1===(i+"").indexOf("="))&&(i="50%"),e&&(e.oxp=-1!==i.indexOf("%"),e.oyp=-1!==r.indexOf("%"),e.oxr="="===i.charAt(1),e.oyr="="===r.charAt(1),e.ox=parseFloat(i.replace(v,"")),e.oy=parseFloat(r.replace(v,""))),i+" "+r+(n.length>2?" "+n[2]:"")},ne=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},ie=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*Number(t.substr(2))+e:parseFloat(t)},re=function(t,e,n,i){var r,s,o,a,l=1e-6;return null==t?a=e:"number"==typeof t?a=t:(r=360,s=t.split("_"),o=Number(s[0].replace(v,""))*(-1===t.indexOf("rad")?1:D)-("="===t.charAt(1)?0:e),s.length&&(i&&(i[n]=e+o),-1!==t.indexOf("short")&&(o%=r,o!==o%(r/2)&&(o=0>o?o+r:o-r)),-1!==t.indexOf("_cw")&&0>o?o=(o+9999999999*r)%r-(o/r|0)*r:-1!==t.indexOf("ccw")&&o>0&&(o=(o-9999999999*r)%r-(o/r|0)*r)),a=e+o),l>a&&a>-l&&(a=0),a},se={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},oe=function(t,e,n){return t=0>t?t+1:t>1?t-1:t,255*(1>6*t?e+(n-e)*t*6:.5>t?n:2>3*t?e+(n-e)*(2/3-t)*6:e)+.5|0},ae=function(t){var e,n,i,r,s,o;return t&&""!==t?"number"==typeof t?[t>>16,t>>8&255,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),se[t]?se[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),n=t.charAt(2),i=t.charAt(3),t="#"+e+e+n+n+i+i),t=parseInt(t.substr(1),16),[t>>16,t>>8&255,255&t]):"hsl"===t.substr(0,3)?(t=t.match(m),r=Number(t[0])%360/360,s=Number(t[1])/100,o=Number(t[2])/100,n=.5>=o?o*(s+1):o+s-o*s,e=2*o-n,t.length>3&&(t[3]=Number(t[3])),t[0]=oe(r+1/3,e,n),t[1]=oe(r,e,n),t[2]=oe(r-1/3,e,n),t):(t=t.match(m)||se.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):se.black},le="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(l in se)le+="|"+l+"\\b";le=new RegExp(le+")","gi");var ue=function(t,e,n,i){if(null==t)return function(t){return t};var r,s=e?(t.match(le)||[""])[0]:"",o=t.split(s).join("").match(_)||[],a=t.substr(0,t.indexOf(o[0])),l=")"===t.charAt(t.length-1)?")":"",u=-1!==t.indexOf(" ")?" ":",",c=o.length,h=c>0?o[0].replace(m,""):"";return c?r=e?function(t){var e,f,p,d;if("number"==typeof t)t+=h;else if(i&&R.test(t)){for(d=t.replace(R,"|").split("|"),p=0;p<d.length;p++)d[p]=r(d[p]);return d.join(",")}if(e=(t.match(le)||[s])[0],f=t.split(e).join("").match(_)||[],p=f.length,c>p--)for(;++p<c;)f[p]=n?f[(p-1)/2|0]:o[p];return a+f.join(u)+u+e+l+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,s,f;if("number"==typeof t)t+=h;else if(i&&R.test(t)){for(s=t.replace(R,"|").split("|"),f=0;f<s.length;f++)s[f]=r(s[f]);return s.join(",")}if(e=t.match(_)||[],f=e.length,c>f--)for(;++f<c;)e[f]=n?e[(f-1)/2|0]:o[f];return a+e.join(u)+l}:function(t){return t}},ce=function(t){return t=t.split(","),function(e,n,i,r,s,o,a){var l,u=(n+"").split(" ");for(a={},l=0;4>l;l++)a[t[l]]=u[l]=u[l]||u[(l-1)/2>>0];return r.parse(e,a,s,o)}},he=(I._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,n,i,r,s=this.data,o=s.proxy,a=s.firstMPT,l=1e-6;a;)e=o[a.v],a.r?e=Math.round(e):l>e&&e>-l&&(e=0),a.t[a.p]=e,a=a._next;if(s.autoRotate&&(s.autoRotate.rotation=o.rotation),1===t)for(a=s.firstMPT;a;){if(n=a.t,n.type){if(1===n.type){for(r=n.xs0+n.s+n.xs1,i=1;i<n.l;i++)r+=n["xn"+i]+n["xs"+(i+1)];n.e=r}}else n.e=n.s+n.xs0;a=a._next}},function(t,e,n,i,r){this.t=t,this.p=e,this.v=n,this.r=r,i&&(i._prev=this,this._next=i)}),fe=(I._parseToProxy=function(t,e,n,i,r,s){var o,a,l,u,c,h=i,f={},p={},d=n._transform,m=j;for(n._transform=null,j=e,i=c=n.parse(t,e,i,r),j=m,s&&(n._transform=d,h&&(h._prev=null,h._prev&&(h._prev._next=null)));i&&i!==h;){if(i.type<=1&&(a=i.p,p[a]=i.s+i.c,f[a]=i.s,s||(u=new he(i,"s",a,u,i.r),i.c=0),1===i.type))for(o=i.l;--o>0;)l="xn"+o,a=i.p+"_"+l,p[a]=i.data[l],f[a]=i[l],s||(u=new he(i,l,a,u,i.rxp[l]));i=i._next}return{proxy:f,end:p,firstMPT:u,pt:c}},I.CSSPropTween=function(t,e,i,r,o,a,l,u,c,h,f){this.t=t,this.p=e,this.s=i,this.c=r,this.n=l||e,t instanceof fe||s.push(this.n),this.r=u,this.type=a||0,c&&(this.pr=c,n=!0),this.b=void 0===h?i:h,this.e=void 0===f?i+r:f,o&&(this._next=o,o._prev=this)}),pe=o.parseComplex=function(t,e,n,i,r,s,o,a,l,c){n=n||s||"",o=new fe(t,e,0,0,o,c?2:1,null,!1,a,n,i),i+="";var h,f,p,d,_,v,y,b,x,w,k,C,S=n.split(", ").join(",").split(" "),P=i.split(", ").join(",").split(" "),A=S.length,N=u!==!1;for((-1!==i.indexOf(",")||-1!==n.indexOf(","))&&(S=S.join(" ").replace(R,", ").split(" "),P=P.join(" ").replace(R,", ").split(" "),A=S.length),A!==P.length&&(S=(s||"").split(" "),A=S.length),o.plugin=l,o.setRatio=c,h=0;A>h;h++)if(d=S[h],_=P[h],b=parseFloat(d),b||0===b)o.appendXtra("",b,ne(_,b),_.replace(g,""),N&&-1!==_.indexOf("px"),!0);else if(r&&("#"===d.charAt(0)||se[d]||T.test(d)))C=","===_.charAt(_.length-1)?"),":")",d=ae(d),_=ae(_),x=d.length+_.length>6,x&&!q&&0===_[3]?(o["xs"+o.l]+=o.l?" transparent":"transparent",o.e=o.e.split(P[h]).join("transparent")):(q||(x=!1),o.appendXtra(x?"rgba(":"rgb(",d[0],_[0]-d[0],",",!0,!0).appendXtra("",d[1],_[1]-d[1],",",!0).appendXtra("",d[2],_[2]-d[2],x?",":C,!0),x&&(d=d.length<4?1:d[3],o.appendXtra("",d,(_.length<4?1:_[3])-d,C,!1)));else if(v=d.match(m)){if(y=_.match(g),!y||y.length!==v.length)return o;for(p=0,f=0;f<v.length;f++)k=v[f],w=d.indexOf(k,p),o.appendXtra(d.substr(p,w-p),Number(k),ne(y[f],k),"",N&&"px"===d.substr(w+k.length,2),0===f),p=w+k.length;o["xs"+o.l]+=d.substr(p)}else o["xs"+o.l]+=o.l?" "+d:d;if(-1!==i.indexOf("=")&&o.data){for(C=o.xs0+o.data.s,h=1;h<o.l;h++)C+=o["xs"+h]+o.data["xn"+h];o.e=C+o["xs"+h]}return o.l||(o.type=-1,o.xs0=o.e),o.xfirst||o},de=9;for(l=fe.prototype,l.l=l.pr=0;--de>0;)l["xn"+de]=0,l["xs"+de]="";l.xs0="",l._next=l._prev=l.xfirst=l.data=l.plugin=l.setRatio=l.rxp=null,l.appendXtra=function(t,e,n,i,r,s){var o=this,a=o.l;return o["xs"+a]+=s&&a?" "+t:t||"",n||0===a||o.plugin?(o.l++,o.type=o.setRatio?2:1,o["xs"+o.l]=i||"",a>0?(o.data["xn"+a]=e+n,o.rxp["xn"+a]=r,o["xn"+a]=e,o.plugin||(o.xfirst=new fe(o,"xn"+a,e,n,o.xfirst||o,0,o.n,r,o.pr),o.xfirst.xs0=0),o):(o.data={s:e+n},o.rxp={},o.s=e,o.c=n,o.r=r,o)):(o["xs"+a]+=e+(i||""),o)};var me=function(t,e){e=e||{},this.p=e.prefix?W(t)||t:t,a[t]=a[this.p]=this,this.format=e.formatter||ue(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},ge=I._registerComplexSpecialProp=function(t,e,n){"object"!=typeof e&&(e={parser:n});var i,r,s=t.split(","),o=e.defaultValue;for(n=n||[o],i=0;i<s.length;i++)e.prefix=0===i&&e.prefix,e.defaultValue=n[i]||o,r=new me(s[i],e)},_e=function(t){if(!a[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";ge(t,{parser:function(t,n,i,r,s,o,l){var u=(window.GreenSockGlobals||window).com.greensock.plugins[e];return u?(u._cssRegister(),a[i].parse(t,n,i,r,s,o,l)):(X("Error: "+e+" js file not loaded."),s)}})}};l=me.prototype,l.parseComplex=function(t,e,n,i,r,s){var o,a,l,u,c,h,f=this.keyword;if(this.multi&&(R.test(n)||R.test(e)?(a=e.replace(R,"|").split("|"),l=n.replace(R,"|").split("|")):f&&(a=[e],l=[n])),l){for(u=l.length>a.length?l.length:a.length,o=0;u>o;o++)e=a[o]=a[o]||this.dflt,n=l[o]=l[o]||this.dflt,f&&(c=e.indexOf(f),h=n.indexOf(f),c!==h&&(n=-1===h?l:a,n[o]+=" "+f));e=a.join(", "),n=l.join(", ")}return pe(t,this.p,e,n,this.clrs,this.dflt,i,this.pr,r,s)},l.parse=function(t,e,n,i,s,o){return this.parseComplex(t.style,this.format(Y(t,this.p,r,!1,this.dflt)),this.format(e),s,o)},o.registerSpecialProp=function(t,e,n){ge(t,{parser:function(t,i,r,s,o,a){var l=new fe(t,r,0,0,o,2,r,!1,n);return l.plugin=a,l.setRatio=e(t,i,s._tween,r),l},priority:n})};var ve="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective".split(","),ye=W("transform"),be=z+"transform",xe=W("transformOrigin"),we=null!==W("perspective"),Te=I.Transform=function(){this.skewY=0},ke=I.getTransform=function(t,e,n,i){if(t._gsTransform&&n&&!i)return t._gsTransform;var r,s,a,l,u,c,h,f,p,d,m,g,_,v=n?t._gsTransform||new Te:new Te,y=v.scaleX<0,b=2e-5,x=1e5,w=179.99,T=w*O,k=we?parseFloat(Y(t,xe,e,!1,"0 0 0").split(" ")[2])||v.zOrigin||0:0;for(ye?r=Y(t,be,e,!0):t.currentStyle&&(r=t.currentStyle.filter.match(N),r=r&&4===r.length?[r[0].substr(4),Number(r[2].substr(4)),Number(r[1].substr(4)),r[3].substr(4),v.x||0,v.y||0].join(","):""),s=(r||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],a=s.length;--a>-1;)l=Number(s[a]),s[a]=(u=l-(l|=0))?(u*x+(0>u?-.5:.5)|0)/x+l:l;if(16===s.length){var C=s[8],S=s[9],P=s[10],A=s[12],E=s[13],R=s[14];if(v.zOrigin&&(R=-v.zOrigin,A=C*R-s[12],E=S*R-s[13],R=P*R+v.zOrigin-s[14]),!n||i||null==v.rotationX){var j,L,M,F,I,H,q,B=s[0],X=s[1],z=s[2],$=s[3],W=s[4],U=s[5],V=s[6],J=s[7],G=s[11],Z=Math.atan2(V,P),Q=-T>Z||Z>T;v.rotationX=Z*D,Z&&(F=Math.cos(-Z),I=Math.sin(-Z),j=W*F+C*I,L=U*F+S*I,M=V*F+P*I,C=W*-I+C*F,S=U*-I+S*F,P=V*-I+P*F,G=J*-I+G*F,W=j,U=L,V=M),Z=Math.atan2(C,B),v.rotationY=Z*D,Z&&(H=-T>Z||Z>T,F=Math.cos(-Z),I=Math.sin(-Z),j=B*F-C*I,L=X*F-S*I,M=z*F-P*I,S=X*I+S*F,P=z*I+P*F,G=$*I+G*F,B=j,X=L,z=M),Z=Math.atan2(X,U),v.rotation=Z*D,Z&&(q=-T>Z||Z>T,F=Math.cos(-Z),I=Math.sin(-Z),B=B*F+W*I,L=X*F+U*I,U=X*-I+U*F,V=z*-I+V*F,X=L),q&&Q?v.rotation=v.rotationX=0:q&&H?v.rotation=v.rotationY=0:H&&Q&&(v.rotationY=v.rotationX=0),v.scaleX=(Math.sqrt(B*B+X*X)*x+.5|0)/x,v.scaleY=(Math.sqrt(U*U+S*S)*x+.5|0)/x,v.scaleZ=(Math.sqrt(V*V+P*P)*x+.5|0)/x,v.skewX=0,v.perspective=G?1/(0>G?-G:G):0,v.x=A,v.y=E,v.z=R
}}else if(!(we&&!i&&s.length&&v.x===s[4]&&v.y===s[5]&&(v.rotationX||v.rotationY)||void 0!==v.x&&"none"===Y(t,"display",e))){var K=s.length>=6,te=K?s[0]:1,ee=s[1]||0,ne=s[2]||0,ie=K?s[3]:1;v.x=s[4]||0,v.y=s[5]||0,c=Math.sqrt(te*te+ee*ee),h=Math.sqrt(ie*ie+ne*ne),f=te||ee?Math.atan2(ee,te)*D:v.rotation||0,p=ne||ie?Math.atan2(ne,ie)*D+f:v.skewX||0,d=c-Math.abs(v.scaleX||0),m=h-Math.abs(v.scaleY||0),Math.abs(p)>90&&Math.abs(p)<270&&(y?(c*=-1,p+=0>=f?180:-180,f+=0>=f?180:-180):(h*=-1,p+=0>=p?180:-180)),g=(f-v.rotation)%180,_=(p-v.skewX)%180,(void 0===v.skewX||d>b||-b>d||m>b||-b>m||g>-w&&w>g&&g*x|!1||_>-w&&w>_&&_*x|!1)&&(v.scaleX=c,v.scaleY=h,v.rotation=f,v.skewX=p),we&&(v.rotationX=v.rotationY=v.z=0,v.perspective=parseFloat(o.defaultTransformPerspective)||0,v.scaleZ=1)}v.zOrigin=k;for(a in v)v[a]<b&&v[a]>-b&&(v[a]=0);return n&&(t._gsTransform=v),v},Ce=function(t){var e,n,i=this.data,r=-i.rotation*O,s=r+i.skewX*O,o=1e5,a=(Math.cos(r)*i.scaleX*o|0)/o,l=(Math.sin(r)*i.scaleX*o|0)/o,u=(Math.sin(s)*-i.scaleY*o|0)/o,c=(Math.cos(s)*i.scaleY*o|0)/o,h=this.t.style,f=this.t.currentStyle;if(f){n=l,l=-u,u=-n,e=f.filter,h.filter="";var p,m,g=this.t.offsetWidth,_=this.t.offsetHeight,v="absolute"!==f.position,x="progid:DXImageTransform.Microsoft.Matrix(M11="+a+", M12="+l+", M21="+u+", M22="+c,w=i.x,T=i.y;if(null!=i.ox&&(p=(i.oxp?g*i.ox*.01:i.ox)-g/2,m=(i.oyp?_*i.oy*.01:i.oy)-_/2,w+=p-(p*a+m*l),T+=m-(p*u+m*c)),v?(p=g/2,m=_/2,x+=", Dx="+(p-(p*a+m*l)+w)+", Dy="+(m-(p*u+m*c)+T)+")"):x+=", sizingMethod='auto expand')",h.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(E,x):x+" "+e,(0===t||1===t)&&1===a&&0===l&&0===u&&1===c&&(v&&-1===x.indexOf("Dx=0, Dy=0")||b.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&h.removeAttribute("filter")),!v){var k,C,S,P=8>d?1:-1;for(p=i.ieOffsetX||0,m=i.ieOffsetY||0,i.ieOffsetX=Math.round((g-((0>a?-a:a)*g+(0>l?-l:l)*_))/2+w),i.ieOffsetY=Math.round((_-((0>c?-c:c)*_+(0>u?-u:u)*g))/2+T),de=0;4>de;de++)C=K[de],k=f[C],n=-1!==k.indexOf("px")?parseFloat(k):V(this.t,C,parseFloat(k),k.replace(y,""))||0,S=n!==i[C]?2>de?-i.ieOffsetX:-i.ieOffsetY:2>de?p-i.ieOffsetX:m-i.ieOffsetY,h[C]=(i[C]=Math.round(n-S*(0===de||2===de?1:P)))+"px"}}},Se=I.set3DTransformRatio=function(){var t,e,n,i,r,s,o,a,l,u,c,h,p,d,m,g,_,v,y,b,x,w,T,k=this.data,C=this.t.style,S=k.rotation*O,P=k.scaleX,A=k.scaleY,N=k.scaleZ,E=k.perspective;if(f){var R=1e-4;R>P&&P>-R&&(P=N=2e-5),R>A&&A>-R&&(A=N=2e-5),!E||k.z||k.rotationX||k.rotationY||(E=0)}if(S||k.skewX)v=Math.cos(S),y=Math.sin(S),t=v,r=y,k.skewX&&(S-=k.skewX*O,v=Math.cos(S),y=Math.sin(S),"simple"===k.skewType&&(b=Math.tan(k.skewX*O),b=Math.sqrt(1+b*b),v*=b,y*=b)),e=-y,s=v;else{if(!(k.rotationY||k.rotationX||1!==N||E))return void(C[ye]="translate3d("+k.x+"px,"+k.y+"px,"+k.z+"px)"+(1!==P||1!==A?" scale("+P+","+A+")":""));t=s=1,e=r=0}c=1,n=i=o=a=l=u=h=p=d=0,m=E?-1/E:0,g=k.zOrigin,_=1e5,S=k.rotationY*O,S&&(v=Math.cos(S),y=Math.sin(S),l=c*-y,p=m*-y,n=t*y,o=r*y,c*=v,m*=v,t*=v,r*=v),S=k.rotationX*O,S&&(v=Math.cos(S),y=Math.sin(S),b=e*v+n*y,x=s*v+o*y,w=u*v+c*y,T=d*v+m*y,n=e*-y+n*v,o=s*-y+o*v,c=u*-y+c*v,m=d*-y+m*v,e=b,s=x,u=w,d=T),1!==N&&(n*=N,o*=N,c*=N,m*=N),1!==A&&(e*=A,s*=A,u*=A,d*=A),1!==P&&(t*=P,r*=P,l*=P,p*=P),g&&(h-=g,i=n*h,a=o*h,h=c*h+g),i=(b=(i+=k.x)-(i|=0))?(b*_+(0>b?-.5:.5)|0)/_+i:i,a=(b=(a+=k.y)-(a|=0))?(b*_+(0>b?-.5:.5)|0)/_+a:a,h=(b=(h+=k.z)-(h|=0))?(b*_+(0>b?-.5:.5)|0)/_+h:h,C[ye]="matrix3d("+[(t*_|0)/_,(r*_|0)/_,(l*_|0)/_,(p*_|0)/_,(e*_|0)/_,(s*_|0)/_,(u*_|0)/_,(d*_|0)/_,(n*_|0)/_,(o*_|0)/_,(c*_|0)/_,(m*_|0)/_,i,a,h,E?1+-h/E:1].join(",")+")"},Pe=I.set2DTransformRatio=function(t){var e,n,i,r,s,o=this.data,a=this.t,l=a.style;return o.rotationX||o.rotationY||o.z||o.force3D?(this.setRatio=Se,void Se.call(this,t)):void(o.rotation||o.skewX?(e=o.rotation*O,n=e-o.skewX*O,i=1e5,r=o.scaleX*i,s=o.scaleY*i,l[ye]="matrix("+(Math.cos(e)*r|0)/i+","+(Math.sin(e)*r|0)/i+","+(Math.sin(n)*-s|0)/i+","+(Math.cos(n)*s|0)/i+","+o.x+","+o.y+")"):l[ye]="matrix("+o.scaleX+",0,0,"+o.scaleY+","+o.x+","+o.y+")")};ge("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType",{parser:function(t,e,n,i,s,a,l){if(i._transform)return s;var u,c,h,f,p,d,m,g=i._transform=ke(t,r,!0,l.parseTransform),_=t.style,v=1e-6,y=ve.length,b=l,x={};if("string"==typeof b.transform&&ye)h=_.cssText,_[ye]=b.transform,_.display="block",u=ke(t,null,!1),_.cssText=h;else if("object"==typeof b){if(u={scaleX:ie(null!=b.scaleX?b.scaleX:b.scale,g.scaleX),scaleY:ie(null!=b.scaleY?b.scaleY:b.scale,g.scaleY),scaleZ:ie(b.scaleZ,g.scaleZ),x:ie(b.x,g.x),y:ie(b.y,g.y),z:ie(b.z,g.z),perspective:ie(b.transformPerspective,g.perspective)},m=b.directionalRotation,null!=m)if("object"==typeof m)for(h in m)b[h]=m[h];else b.rotation=m;u.rotation=re("rotation"in b?b.rotation:"shortRotation"in b?b.shortRotation+"_short":"rotationZ"in b?b.rotationZ:g.rotation,g.rotation,"rotation",x),we&&(u.rotationX=re("rotationX"in b?b.rotationX:"shortRotationX"in b?b.shortRotationX+"_short":g.rotationX||0,g.rotationX,"rotationX",x),u.rotationY=re("rotationY"in b?b.rotationY:"shortRotationY"in b?b.shortRotationY+"_short":g.rotationY||0,g.rotationY,"rotationY",x)),u.skewX=null==b.skewX?g.skewX:re(b.skewX,g.skewX),u.skewY=null==b.skewY?g.skewY:re(b.skewY,g.skewY),(c=u.skewY-g.skewY)&&(u.skewX+=c,u.rotation+=c)}for(we&&null!=b.force3D&&(g.force3D=b.force3D,d=!0),g.skewType=b.skewType||g.skewType||o.defaultSkewType,p=g.force3D||g.z||g.rotationX||g.rotationY||u.z||u.rotationX||u.rotationY||u.perspective,p||null==b.scale||(u.scaleZ=1);--y>-1;)n=ve[y],f=u[n]-g[n],(f>v||-v>f||null!=j[n])&&(d=!0,s=new fe(g,n,g[n],f,s),n in x&&(s.e=x[n]),s.xs0=0,s.plugin=a,i._overwriteProps.push(s.n));return f=b.transformOrigin,(f||we&&p&&g.zOrigin)&&(ye?(d=!0,n=xe,f=(f||Y(t,n,r,!1,"50% 50%"))+"",s=new fe(_,n,0,0,s,-1,"transformOrigin"),s.b=_[n],s.plugin=a,we?(h=g.zOrigin,f=f.split(" "),g.zOrigin=(f.length>2&&(0===h||"0px"!==f[2])?parseFloat(f[2]):h)||0,s.xs0=s.e=_[n]=f[0]+" "+(f[1]||"50%")+" 0px",s=new fe(g,"zOrigin",0,0,s,-1,s.n),s.b=h,s.xs0=s.e=g.zOrigin):s.xs0=s.e=_[n]=f):ee(f+"",g)),d&&(i._transformType=p||3===this._transformType?3:2),s},prefix:!0}),ge("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ge("borderRadius",{defaultValue:"0px",parser:function(t,e,n,s,o){e=this.format(e);var a,l,u,c,h,f,p,d,m,g,_,v,y,b,x,w,T=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],k=t.style;for(m=parseFloat(t.offsetWidth),g=parseFloat(t.offsetHeight),a=e.split(" "),l=0;l<T.length;l++)this.p.indexOf("border")&&(T[l]=W(T[l])),h=c=Y(t,T[l],r,!1,"0px"),-1!==h.indexOf(" ")&&(c=h.split(" "),h=c[0],c=c[1]),f=u=a[l],p=parseFloat(h),v=h.substr((p+"").length),y="="===f.charAt(1),y?(d=parseInt(f.charAt(0)+"1",10),f=f.substr(2),d*=parseFloat(f),_=f.substr((d+"").length-(0>d?1:0))||""):(d=parseFloat(f),_=f.substr((d+"").length)),""===_&&(_=i[n]||v),_!==v&&(b=V(t,"borderLeft",p,v),x=V(t,"borderTop",p,v),"%"===_?(h=b/m*100+"%",c=x/g*100+"%"):"em"===_?(w=V(t,"borderLeft",1,"em"),h=b/w+"em",c=x/w+"em"):(h=b+"px",c=x+"px"),y&&(f=parseFloat(h)+d+_,u=parseFloat(c)+d+_)),o=pe(k,T[l],h+" "+c,f+" "+u,!1,"0px",o);return o},prefix:!0,formatter:ue("0px 0px 0px 0px",!1,!0)}),ge("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,n,i,s,o){var a,l,u,c,h,f,p="background-position",m=r||U(t,null),g=this.format((m?d?m.getPropertyValue(p+"-x")+" "+m.getPropertyValue(p+"-y"):m.getPropertyValue(p):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),_=this.format(e);if(-1!==g.indexOf("%")!=(-1!==_.indexOf("%"))&&(f=Y(t,"backgroundImage").replace(S,""),f&&"none"!==f)){for(a=g.split(" "),l=_.split(" "),F.setAttribute("src",f),u=2;--u>-1;)g=a[u],c=-1!==g.indexOf("%"),c!==(-1!==l[u].indexOf("%"))&&(h=0===u?t.offsetWidth-F.width:t.offsetHeight-F.height,a[u]=c?parseFloat(g)/100*h+"px":parseFloat(g)/h*100+"%");g=a.join(" ")}return this.parseComplex(t.style,g,_,s,o)},formatter:ee}),ge("backgroundSize",{defaultValue:"0 0",formatter:ee}),ge("perspective",{defaultValue:"0px",prefix:!0}),ge("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ge("transformStyle",{prefix:!0}),ge("backfaceVisibility",{prefix:!0}),ge("userSelect",{prefix:!0}),ge("margin",{parser:ce("marginTop,marginRight,marginBottom,marginLeft")}),ge("padding",{parser:ce("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ge("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,n,i,s,o){var a,l,u;return 9>d?(l=t.currentStyle,u=8>d?" ":",",a="rect("+l.clipTop+u+l.clipRight+u+l.clipBottom+u+l.clipLeft+")",e=this.format(e).split(",").join(u)):(a=this.format(Y(t,this.p,r,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,a,e,s,o)}}),ge("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ge("autoRound,strictUnits",{parser:function(t,e,n,i,r){return r}}),ge("border",{defaultValue:"0px solid #000",parser:function(t,e,n,i,s,o){return this.parseComplex(t.style,this.format(Y(t,"borderTopWidth",r,!1,"0px")+" "+Y(t,"borderTopStyle",r,!1,"solid")+" "+Y(t,"borderTopColor",r,!1,"#000")),this.format(e),s,o)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(le)||["#000"])[0]}}),ge("borderWidth",{parser:ce("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ge("float,cssFloat,styleFloat",{parser:function(t,e,n,i,r){var s=t.style,o="cssFloat"in s?"cssFloat":"styleFloat";return new fe(s,o,0,0,r,-1,n,!1,0,s[o],e)}});var Ae=function(t){var e,n=this.t,i=n.filter||Y(this.data,"filter"),r=this.s+this.c*t|0;100===r&&(-1===i.indexOf("atrix(")&&-1===i.indexOf("radient(")&&-1===i.indexOf("oader(")?(n.removeAttribute("filter"),e=!Y(this.data,"filter")):(n.filter=i.replace(w,""),e=!0)),e||(this.xn1&&(n.filter=i=i||"alpha(opacity="+r+")"),-1===i.indexOf("opacity")?0===r&&this.xn1||(n.filter=i+" alpha(opacity="+r+")"):n.filter=i.replace(b,"opacity="+r))};ge("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,n,i,s,o){var a=parseFloat(Y(t,"opacity",r,!1,"1")),l=t.style,u="autoAlpha"===n;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+a),u&&1===a&&"hidden"===Y(t,"visibility",r)&&0!==e&&(a=0),q?s=new fe(l,"opacity",a,e-a,s):(s=new fe(l,"opacity",100*a,100*(e-a),s),s.xn1=u?1:0,l.zoom=1,s.type=2,s.b="alpha(opacity="+s.s+")",s.e="alpha(opacity="+(s.s+s.c)+")",s.data=t,s.plugin=o,s.setRatio=Ae),u&&(s=new fe(l,"visibility",0,0,s,-1,null,!1,0,0!==a?"inherit":"hidden",0===e?"hidden":"inherit"),s.xs0="inherit",i._overwriteProps.push(s.n),i._overwriteProps.push(n)),s}});var Ne=function(t,e){e&&(t.removeProperty?("ms"===e.substr(0,2)&&(e="M"+e.substr(1)),t.removeProperty(e.replace(k,"-$1").toLowerCase())):t.removeAttribute(e))},Ee=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.className=0===t?this.b:this.e;for(var e=this.data,n=this.t.style;e;)e.v?n[e.p]=e.v:Ne(n,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.className!==this.e&&(this.t.className=this.e)};ge("className",{parser:function(t,e,i,s,o,a,l){var u,c,h,f,p,d=t.className,m=t.style.cssText;if(o=s._classNamePT=new fe(t,i,0,0,o,2),o.setRatio=Ee,o.pr=-11,n=!0,o.b=d,c=G(t,r),h=t._gsClassPT){for(f={},p=h.data;p;)f[p.p]=1,p=p._next;h.setRatio(1)}return t._gsClassPT=o,o.e="="!==e.charAt(1)?e:d.replace(new RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),s._tween._duration&&(t.className=o.e,u=Z(t,c,G(t),l,f),t.className=d,o.data=u.firstMPT,t.style.cssText=m,o=o.xfirst=s.parse(t,u.difs,o,a)),o}});var Re=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,n,i,r,s=this.t.style,o=a.transform.parse;if("all"===this.e)s.cssText="",r=!0;else for(e=this.e.split(","),i=e.length;--i>-1;)n=e[i],a[n]&&(a[n].parse===o?r=!0:n="transformOrigin"===n?xe:a[n].p),Ne(s,n);r&&(Ne(s,ye),this.t._gsTransform&&delete this.t._gsTransform)}};for(ge("clearProps",{parser:function(t,e,i,r,s){return s=new fe(t,i,0,0,s,2),s.setRatio=Re,s.e=e,s.pr=-10,s.data=r._tween,n=!0,s}}),l="bezier,throwProps,physicsProps,physics2D".split(","),de=l.length;de--;)_e(l[de]);l=o.prototype,l._firstPT=null,l._onInitTween=function(t,e,a){if(!t.nodeType)return!1;this._target=t,this._tween=a,this._vars=e,u=e.autoRound,n=!1,i=e.suffixMap||o.suffixMap,r=U(t,""),s=this._overwriteProps;var l,f,d,m,g,_,v,y,b,w=t.style;if(c&&""===w.zIndex&&(l=Y(t,"zIndex",r),("auto"===l||""===l)&&(w.zIndex=0)),"string"==typeof e&&(m=w.cssText,l=G(t,r),w.cssText=m+";"+e,l=Z(t,l,G(t)).difs,!q&&x.test(e)&&(l.opacity=parseFloat(RegExp.$1)),e=l,w.cssText=m),this._firstPT=f=this.parse(t,e,null),this._transformType){for(b=3===this._transformType,ye?h&&(c=!0,""===w.zIndex&&(v=Y(t,"zIndex",r),("auto"===v||""===v)&&(w.zIndex=0)),p&&(w.WebkitBackfaceVisibility=this._vars.WebkitBackfaceVisibility||(b?"visible":"hidden"))):w.zoom=1,d=f;d&&d._next;)d=d._next;y=new fe(t,"transform",0,0,null,2),this._linkCSSP(y,null,d),y.setRatio=b&&we?Se:ye?Pe:Ce,y.data=this._transform||ke(t,r,!0),s.pop()}if(n){for(;f;){for(_=f._next,d=m;d&&d.pr>f.pr;)d=d._next;(f._prev=d?d._prev:g)?f._prev._next=f:m=f,(f._next=d)?d._prev=f:g=f,f=_}this._firstPT=m}return!0},l.parse=function(t,e,n,s){var o,l,c,h,f,p,d,m,g,_,v=t.style;for(o in e)p=e[o],l=a[o],l?n=l.parse(t,p,o,this,n,s,e):(f=Y(t,o,r)+"",g="string"==typeof p,"color"===o||"fill"===o||"stroke"===o||-1!==o.indexOf("Color")||g&&T.test(p)?(g||(p=ae(p),p=(p.length>3?"rgba(":"rgb(")+p.join(",")+")"),n=pe(v,o,f,p,!0,"transparent",n,0,s)):!g||-1===p.indexOf(" ")&&-1===p.indexOf(",")?(c=parseFloat(f),d=c||0===c?f.substr((c+"").length):"",(""===f||"auto"===f)&&("width"===o||"height"===o?(c=te(t,o,r),d="px"):"left"===o||"top"===o?(c=J(t,o,r),d="px"):(c="opacity"!==o?0:1,d="")),_=g&&"="===p.charAt(1),_?(h=parseInt(p.charAt(0)+"1",10),p=p.substr(2),h*=parseFloat(p),m=p.replace(y,"")):(h=parseFloat(p),m=g?p.substr((h+"").length)||"":""),""===m&&(m=o in i?i[o]:d),p=h||0===h?(_?h+c:h)+m:e[o],d!==m&&""!==m&&(h||0===h)&&c&&(c=V(t,o,c,d),"%"===m?(c/=V(t,o,100,"%")/100,e.strictUnits!==!0&&(f=c+"%")):"em"===m?c/=V(t,o,1,"em"):"px"!==m&&(h=V(t,o,h,m),m="px"),_&&(h||0===h)&&(p=h+c+m)),_&&(h+=c),!c&&0!==c||!h&&0!==h?void 0!==v[o]&&(p||p+""!="NaN"&&null!=p)?(n=new fe(v,o,h||c||0,0,n,-1,o,!1,0,f,p),n.xs0="none"!==p||"display"!==o&&-1===o.indexOf("Style")?p:f):X("invalid "+o+" tween value: "+e[o]):(n=new fe(v,o,c,h-c,n,0,o,u!==!1&&("px"===m||"zIndex"===o),0,f,p),n.xs0=m)):n=pe(v,o,f,p,!0,null,n,0,s)),s&&n&&!n.plugin&&(n.plugin=s);return n},l.setRatio=function(t){var e,n,i,r=this._firstPT,s=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;r;){if(e=r.c*t+r.s,r.r?e=Math.round(e):s>e&&e>-s&&(e=0),r.type)if(1===r.type)if(i=r.l,2===i)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2;else if(3===i)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3;else if(4===i)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4;else if(5===i)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4+r.xn4+r.xs5;else{for(n=r.xs0+e+r.xs1,i=1;i<r.l;i++)n+=r["xn"+i]+r["xs"+(i+1)];r.t[r.p]=n}else-1===r.type?r.t[r.p]=r.xs0:r.setRatio&&r.setRatio(t);else r.t[r.p]=e+r.xs0;r=r._next}else for(;r;)2!==r.type?r.t[r.p]=r.b:r.setRatio(t),r=r._next;else for(;r;)2!==r.type?r.t[r.p]=r.e:r.setRatio(t),r=r._next},l._enableTransforms=function(t){this._transformType=t||3===this._transformType?3:2,this._transform=this._transform||ke(this._target,r,!0)},l._linkCSSP=function(t,e,n,i){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,i=!0),n?n._next=t:i||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=n),t},l._kill=function(e){var n,i,r,s=e;if(e.autoAlpha||e.alpha){s={};for(i in e)s[i]=e[i];s.opacity=1,s.autoAlpha&&(s.visibility=1)}return e.className&&(n=this._classNamePT)&&(r=n.xfirst,r&&r._prev?this._linkCSSP(r._prev,n._next,r._prev._prev):r===this._firstPT&&(this._firstPT=n._next),n._next&&this._linkCSSP(n._next,n._next._next,r._prev),this._classNamePT=null),t.prototype._kill.call(this,s)};var Oe=function(t,e,n){var i,r,s,o;if(t.slice)for(r=t.length;--r>-1;)Oe(t[r],e,n);else for(i=t.childNodes,r=i.length;--r>-1;)s=i[r],o=s.type,s.style&&(e.push(G(s)),n&&n.push(s)),1!==o&&9!==o&&11!==o||!s.childNodes.length||Oe(s,e,n)};return o.cascadeTo=function(t,n,i){var r,s,o,a=e.to(t,n,i),l=[a],u=[],c=[],h=[],f=e._internals.reservedProps;for(t=a._targets||a.target,Oe(t,u,h),a.render(n,!0),Oe(t,c),a.render(0,!0),a._enabled(!0),r=h.length;--r>-1;)if(s=Z(h[r],u[r],c[r]),s.firstMPT){s=s.difs;for(o in i)f[o]&&(s[o]=i[o]);l.push(e.to(h[r],n,s))}return l},t.activate([o]),o},!0),function(){var t=window._gsDefine.plugin({propName:"roundProps",priority:-1,API:2,init:function(t,e,n){return this._tween=n,!0}}),e=t.prototype;e._onInitAllProps=function(){for(var t,e,n,i=this._tween,r=i.vars.roundProps instanceof Array?i.vars.roundProps:i.vars.roundProps.split(","),s=r.length,o={},a=i._propLookup.roundProps;--s>-1;)o[r[s]]=1;for(s=r.length;--s>-1;)for(t=r[s],e=i._firstPT;e;)n=e._next,e.pg?e.t._roundProps(o,!0):e.n===t&&(this._add(e.t,t,e.s,e.c),n&&(n._prev=e._prev),e._prev?e._prev._next=n:i._firstPT===e&&(i._firstPT=n),e._next=e._prev=null,i._propLookup[t]=a),e=n;return!1},e._add=function(t,e,n,i){this._addTween(t,e,n,n+i,e,!0),this._overwriteProps.push(e)}}(),window._gsDefine.plugin({propName:"attr",API:2,version:"0.3.0",init:function(t,e,n){var i,r,s;if("function"!=typeof t.setAttribute)return!1;this._target=t,this._proxy={},this._start={},this._end={},this._endRatio=n.vars.runBackwards?0:1;for(i in e)this._start[i]=this._proxy[i]=r=t.getAttribute(i),this._end[i]=s=e[i],this._addTween(this._proxy,i,parseFloat(r),s,i),this._overwriteProps.push(i);return!0},set:function(t){this._super.setRatio.call(this,t);for(var e,n=this._overwriteProps,i=n.length,r=0!==t&&1!==t?this._proxy:t===this._endRatio?this._end:this._start;--i>-1;)e=n[i],this._target.setAttribute(e,r[e]+"")}}),window._gsDefine.plugin({propName:"directionalRotation",API:2,version:"0.2.0",init:function(t,e){"object"!=typeof e&&(e={rotation:e}),this.finals={};var n,i,r,s,o,a,l=e.useRadians===!0?2*Math.PI:360,u=1e-6;for(n in e)"useRadians"!==n&&(a=(e[n]+"").split("_"),i=a[0],r=parseFloat("function"!=typeof t[n]?t[n]:t[n.indexOf("set")||"function"!=typeof t["get"+n.substr(3)]?n:"get"+n.substr(3)]()),s=this.finals[n]="string"==typeof i&&"="===i.charAt(1)?r+parseInt(i.charAt(0)+"1",10)*Number(i.substr(2)):Number(i)||0,o=s-r,a.length&&(i=a.join("_"),-1!==i.indexOf("short")&&(o%=l,o!==o%(l/2)&&(o=0>o?o+l:o-l)),-1!==i.indexOf("_cw")&&0>o?o=(o+9999999999*l)%l-(o/l|0)*l:-1!==i.indexOf("ccw")&&o>0&&(o=(o-9999999999*l)%l-(o/l|0)*l)),(o>u||-u>o)&&(this._addTween(t,n,r,r+o,n),this._overwriteProps.push(n)));return!0},set:function(t){var e;if(1!==t)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0,window._gsDefine("easing.Back",["easing.Ease"],function(t){var e,n,i,r=window.GreenSockGlobals||window,s=r.com.greensock,o=2*Math.PI,a=Math.PI/2,l=s._class,u=function(e,n){var i=l("easing."+e,function(){},!0),r=i.prototype=new t;return r.constructor=i,r.getRatio=n,i},c=t.register||function(){},h=function(t,e,n,i){var r=l("easing."+t,{easeOut:new e,easeIn:new n,easeInOut:new i},!0);return c(r,t),r},f=function(t,e,n){this.t=t,this.v=e,n&&(this.next=n,n.prev=this,this.c=n.v-e,this.gap=n.t-t)},p=function(e,n){var i=l("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=i.prototype=new t;return r.constructor=i,r.getRatio=n,r.config=function(t){return new i(t)},i},d=h("Back",p("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),p("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),p("BackInOut",function(t){return(t*=2)<1?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=l("easing.SlowMo",function(t,e,n){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=n===!0},!0),g=m.prototype=new t;return g.constructor=m,g.getRatio=function(t){var e=t+(.5-t)*this._p;return t<this._p1?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),g.config=m.config=function(t,e,n){return new m(t,e,n)},e=l("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),g=e.prototype=new t,g.constructor=e,g.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},g.config=e.config=function(t){return new e(t)},n=l("easing.RoughEase",function(e){e=e||{};for(var n,i,r,s,o,a,l=e.taper||"none",u=[],c=0,h=0|(e.points||20),p=h,d=e.randomize!==!1,m=e.clamp===!0,g=e.template instanceof t?e.template:null,_="number"==typeof e.strength?.4*e.strength:.4;--p>-1;)n=d?Math.random():1/h*p,i=g?g.getRatio(n):n,"none"===l?r=_:"out"===l?(s=1-n,r=s*s*_):"in"===l?r=n*n*_:.5>n?(s=2*n,r=s*s*.5*_):(s=2*(1-n),r=s*s*.5*_),d?i+=Math.random()*r-.5*r:p%2?i+=.5*r:i-=.5*r,m&&(i>1?i=1:0>i&&(i=0)),u[c++]={x:n,y:i};for(u.sort(function(t,e){return t.x-e.x}),a=new f(1,1,null),p=h;--p>-1;)o=u[p],a=new f(o.x,o.y,a);this._prev=new f(0,0,0!==a.t?a:a.next)},!0),g=n.prototype=new t,g.constructor=n,g.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&t<=e.t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},g.config=function(t){return new n(t)},n.ease=new n,h("Bounce",u("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),u("BounceIn",function(t){return(t=1-t)<1/2.75?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),u("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),h("Circ",u("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),u("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),u("CircInOut",function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),i=function(e,n,i){var r=l("easing."+e,function(t,e){this._p1=t||1,this._p2=e||i,this._p3=this._p2/o*(Math.asin(1/this._p1)||0)},!0),s=r.prototype=new t;return s.constructor=r,s.getRatio=n,s.config=function(t,e){return new r(t,e)},r},h("Elastic",i("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*o/this._p2)+1},.3),i("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*o/this._p2))},.3),i("ElasticInOut",function(t){return(t*=2)<1?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*o/this._p2):this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*o/this._p2)*.5+1},.45)),h("Expo",u("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),u("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),u("ExpoInOut",function(t){return(t*=2)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),h("Sine",u("SineOut",function(t){return Math.sin(t*a)}),u("SineIn",function(t){return-Math.cos(t*a)+1}),u("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),l("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),c(r.SlowMo,"SlowMo","ease,"),c(n,"RoughEase","ease,"),c(e,"SteppedEase","ease,"),d},!0)}),function(t){"use strict";var e=t.GreenSockGlobals||t;if(!e.TweenLite){var n,i,r,s,o,a=function(t){var n,i=t.split("."),r=e;for(n=0;n<i.length;n++)r[i[n]]=r=r[i[n]]||{};return r},l=a("com.greensock"),u=1e-10,c=[].slice,h=function(){},f=function(){var t=Object.prototype.toString,e=t.call([]);return function(n){return null!=n&&(n instanceof Array||"object"==typeof n&&!!n.push&&t.call(n)===e)}}(),p={},d=function(n,i,r,s){this.sc=p[n]?p[n].sc:[],p[n]=this,this.gsClass=null,this.func=r;var o=[];this.check=function(l){for(var u,c,h,f,m=i.length,g=m;--m>-1;)(u=p[i[m]]||new d(i[m],[])).gsClass?(o[m]=u.gsClass,g--):l&&u.sc.push(this);if(0===g&&r)for(c=("com.greensock."+n).split("."),h=c.pop(),f=a(c.join("."))[h]=this.gsClass=r.apply(r,o),s&&(e[h]=f,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+n.split(".").join("/"),[],function(){return f}):"undefined"!=typeof module&&module.exports&&(module.exports=f)),m=0;m<this.sc.length;m++)this.sc[m].check()},this.check(!0)},m=t._gsDefine=function(t,e,n,i){return new d(t,e,n,i)},g=l._class=function(t,e,n){return e=e||function(){},m(t,[],function(){return e},n),e};m.globals=e;var _=[0,0,1,1],v=[],y=g("easing.Ease",function(t,e,n,i){this._func=t,this._type=n||0,this._power=i||0,this._params=e?_.concat(e):_},!0),b=y.map={},x=y.register=function(t,e,n,i){for(var r,s,o,a,u=e.split(","),c=u.length,h=(n||"easeIn,easeOut,easeInOut").split(",");--c>-1;)for(s=u[c],r=i?g("easing."+s,null,!0):l.easing[s]||{},o=h.length;--o>-1;)a=h[o],b[s+"."+a]=b[a+s]=r[a]=t.getRatio?t:t[a]||new t};for(r=y.prototype,r._calcEnd=!1,r.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,n=this._power,i=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===n?i*=i:2===n?i*=i*i:3===n?i*=i*i*i:4===n&&(i*=i*i*i*i),1===e?1-i:2===e?i:.5>t?i/2:1-i/2},n=["Linear","Quad","Cubic","Quart","Quint,Strong"],i=n.length;--i>-1;)r=n[i]+",Power"+i,x(new y(null,null,1,i),r,"easeOut",!0),x(new y(null,null,2,i),r,"easeIn"+(0===i?",easeNone":"")),x(new y(null,null,3,i),r,"easeInOut");b.linear=l.easing.Linear.easeIn,b.swing=l.easing.Quad.easeInOut;var w=g("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});r=w.prototype,r.addEventListener=function(t,e,n,i,r){r=r||0;var a,l,u=this._listeners[t],c=0;for(null==u&&(this._listeners[t]=u=[]),l=u.length;--l>-1;)a=u[l],a.c===e&&a.s===n?u.splice(l,1):0===c&&a.pr<r&&(c=l+1);u.splice(c,0,{c:e,s:n,up:i,pr:r}),this!==s||o||s.wake()},r.removeEventListener=function(t,e){var n,i=this._listeners[t];if(i)for(n=i.length;--n>-1;)if(i[n].c===e)return void i.splice(n,1)},r.dispatchEvent=function(t){var e,n,i,r=this._listeners[t];if(r)for(e=r.length,n=this._eventTarget;--e>-1;)i=r[e],i.up?i.c.call(i.s||n,{type:t,target:n}):i.c.call(i.s||n)};var T=t.requestAnimationFrame,k=t.cancelAnimationFrame,C=Date.now||function(){return(new Date).getTime()},S=C();for(n=["ms","moz","webkit","o"],i=n.length;--i>-1&&!T;)T=t[n[i]+"RequestAnimationFrame"],k=t[n[i]+"CancelAnimationFrame"]||t[n[i]+"CancelRequestAnimationFrame"];g("Ticker",function(t,e){var n,i,r,a,l,u=this,c=C(),f=e!==!1&&T,p=function(t){S=C(),u.time=(S-c)/1e3;var e,s=u.time-l;(!n||s>0||t===!0)&&(u.frame++,l+=s+(s>=a?.004:a-s),e=!0),t!==!0&&(r=i(p)),e&&u.dispatchEvent("tick")};w.call(u),u.time=u.frame=0,u.tick=function(){p(!0)},u.sleep=function(){null!=r&&(f&&k?k(r):clearTimeout(r),i=h,r=null,u===s&&(o=!1))},u.wake=function(){null!==r&&u.sleep(),i=0===n?h:f&&T?T:function(t){return setTimeout(t,1e3*(l-u.time)+1|0)},u===s&&(o=!0),p(2)},u.fps=function(t){return arguments.length?(n=t,a=1/(n||60),l=this.time+a,void u.wake()):n},u.useRAF=function(t){return arguments.length?(u.sleep(),f=t,void u.fps(n)):f},u.fps(t),setTimeout(function(){f&&(!r||u.frame<5)&&u.useRAF(!1)},1500)}),r=l.Ticker.prototype=new l.events.EventDispatcher,r.constructor=l.Ticker;var P=g("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,q){o||s.wake();var n=this.vars.useFrames?H:q;n.add(this,n._time),this.vars.paused&&this.paused(!0)}});s=P.ticker=new l.Ticker,r=P.prototype,r._dirty=r._gc=r._initted=r._paused=!1,r._totalTime=r._time=0,r._rawPrevTime=-1,r._next=r._last=r._onUpdate=r._timeline=r.timeline=null,r._paused=!1;var A=function(){o&&C()-S>2e3&&s.wake(),setTimeout(A,2e3)};A(),r.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},r.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},r.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},r.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},r.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},r.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},r.render=function(){},r.invalidate=function(){return this},r.isActive=function(){var t,e=this._timeline,n=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=n&&t<n+this.totalDuration()/this._timeScale},r._enabled=function(t,e){return o||s.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},r._kill=function(){return this._enabled(!1,!1)},r.kill=function(t,e){return this._kill(t,e),this},r._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},r._swapSelfInParams=function(t){for(var e=t.length,n=t.concat();--e>-1;)"{self}"===t[e]&&(n[e]=this);return n},r.eventCallback=function(t,e,n,i){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=f(n)&&-1!==n.join("").indexOf("{self}")?this._swapSelfInParams(n):n,r[t+"Scope"]=i),"onUpdate"===t&&(this._onUpdate=e)}return this},r.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},r.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},r.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},r.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},r.totalTime=function(t,e,n){if(o||s.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!n&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var i=this._totalDuration,r=this._timeline;if(t>i&&!n&&(t=i),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?i-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&this.render(t,e,!1)}return this},r.progress=r.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},r.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},r.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||u,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,n=e||0===e?e:this._timeline.totalTime();this._startTime=n-(n-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},r.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed
},r.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){o||t||s.wake();var e=this._timeline,n=e.rawTime(),i=n-this._pauseTime;!t&&e.smoothChildTiming&&(this._startTime+=i,this._uncache(!1)),this._pauseTime=t?n:null,this._paused=t,this._active=this.isActive(),!t&&0!==i&&this._initted&&this.duration()&&this.render(e.smoothChildTiming?this._totalTime:(n-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var N=g("core.SimpleTimeline",function(t){P.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});r=N.prototype=new P,r.constructor=N,r.kill()._gc=!1,r._first=r._last=null,r._sortChildren=!1,r.add=r.insert=function(t,e){var n,i;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),n=this._last,this._sortChildren)for(i=t._startTime;n&&n._startTime>i;)n=n._prev;return n?(t._next=n._next,n._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=n,this._timeline&&this._uncache(!0),this},r._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t.timeline=null,t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),this._timeline&&this._uncache(!0)),this},r.render=function(t,e,n){var i,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)i=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,n):r.render((t-r._startTime)*r._timeScale,e,n)),r=i},r.rawTime=function(){return o||s.wake(),this._totalTime};var E=g("TweenLite",function(e,n,i){if(P.call(this,n,i),this.render=E.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:E.selector(e)||e;var r,s,o,a=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),l=this.vars.overwrite;if(this._overwrite=l=null==l?I[E.defaultOverwrite]:"number"==typeof l?l>>0:I[l],(a||e instanceof Array||e.push&&f(e))&&"number"!=typeof e[0])for(this._targets=o=c.call(e,0),this._propLookup=[],this._siblings=[],r=0;r<o.length;r++)s=o[r],s?"string"!=typeof s?s.length&&s!==t&&s[0]&&(s[0]===t||s[0].nodeType&&s[0].style&&!s.nodeType)?(o.splice(r--,1),this._targets=o=o.concat(c.call(s,0))):(this._siblings[r]=B(s,this,!1),1===l&&this._siblings[r].length>1&&X(s,this,null,1,this._siblings[r])):(s=o[r--]=E.selector(s),"string"==typeof s&&o.splice(r+1,1)):o.splice(r--,1);else this._propLookup={},this._siblings=B(e,this,!1),1===l&&this._siblings.length>1&&X(e,this,null,1,this._siblings);(this.vars.immediateRender||0===n&&0===this._delay&&this.vars.immediateRender!==!1)&&this.render(-this._delay,!1,!0)},!0),R=function(e){return e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},O=function(t,e){var n,i={};for(n in t)F[n]||n in e&&"x"!==n&&"y"!==n&&"width"!==n&&"height"!==n&&"className"!==n&&"border"!==n||!(!j[n]||j[n]&&j[n]._autoCSS)||(i[n]=t[n],delete t[n]);t.css=i};r=E.prototype=new P,r.constructor=E,r.kill()._gc=!1,r.ratio=0,r._firstPT=r._targets=r._overwrittenProps=r._startAt=null,r._notifyPluginsOfEnabled=!1,E.version="1.11.8",E.defaultEase=r._ease=new y(null,null,1,1),E.defaultOverwrite="auto",E.ticker=s,E.autoSleep=!0,E.selector=t.$||t.jQuery||function(e){return t.$?(E.selector=t.$,t.$(e)):t.document?t.document.getElementById("#"===e.charAt(0)?e.substr(1):e):e};var D=E._internals={isArray:f,isSelector:R},j=E._plugins={},L=E._tweenLookup={},M=0,F=D.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1},I={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},H=P._rootFramesTimeline=new N,q=P._rootTimeline=new N;q._startTime=s.time,H._startTime=s.frame,q._active=H._active=!0,P._updateRoot=function(){if(q.render((s.time-q._startTime)*q._timeScale,!1,!1),H.render((s.frame-H._startTime)*H._timeScale,!1,!1),!(s.frame%120)){var t,e,n;for(n in L){for(e=L[n].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete L[n]}if(n=q._first,(!n||n._paused)&&E.autoSleep&&!H._first&&1===s._listeners.tick.length){for(;n&&n._paused;)n=n._next;n||s.sleep()}}},s.addEventListener("tick",P._updateRoot);var B=function(t,e,n){var i,r,s=t._gsTweenID;if(L[s||(t._gsTweenID=s="t"+M++)]||(L[s]={target:t,tweens:[]}),e&&(i=L[s].tweens,i[r=i.length]=e,n))for(;--r>-1;)i[r]===e&&i.splice(r,1);return L[s].tweens},X=function(t,e,n,i,r){var s,o,a,l;if(1===i||i>=4){for(l=r.length,s=0;l>s;s++)if((a=r[s])!==e)a._gc||a._enabled(!1,!1)&&(o=!0);else if(5===i)break;return o}var c,h=e._startTime+u,f=[],p=0,d=0===e._duration;for(s=r.length;--s>-1;)(a=r[s])===e||a._gc||a._paused||(a._timeline!==e._timeline?(c=c||z(e,0,d),0===z(a,c,d)&&(f[p++]=a)):a._startTime<=h&&a._startTime+a.totalDuration()/a._timeScale>h&&((d||!a._initted)&&h-a._startTime<=2e-10||(f[p++]=a)));for(s=p;--s>-1;)a=f[s],2===i&&a._kill(n,t)&&(o=!0),(2!==i||!a._firstPT&&a._initted)&&a._enabled(!1,!1)&&(o=!0);return o},z=function(t,e,n){for(var i=t._timeline,r=i._timeScale,s=t._startTime;i._timeline;){if(s+=i._startTime,r*=i._timeScale,i._paused)return-100;i=i._timeline}return s/=r,s>e?s-e:n&&s===e||!t._initted&&2*u>s-e?u:(s+=t.totalDuration()/t._timeScale/r)>e+u?0:s-e-u};r._init=function(){var t,e,n,i,r=this.vars,s=this._overwrittenProps,o=this._duration,a=r.immediateRender,l=r.ease;if(r.startAt){if(this._startAt&&this._startAt.render(-1,!0),r.startAt.overwrite=0,r.startAt.immediateRender=!0,this._startAt=E.to(this.target,0,r.startAt),a)if(this._time>0)this._startAt=null;else if(0!==o)return}else if(r.runBackwards&&0!==o)if(this._startAt)this._startAt.render(-1,!0),this._startAt=null;else{n={};for(i in r)F[i]&&"autoCSS"!==i||(n[i]=r[i]);if(n.overwrite=0,n.data="isFromStart",this._startAt=E.to(this.target,0,n),r.immediateRender){if(0===this._time)return}else this._startAt.render(-1,!0)}if(this._ease=l?l instanceof y?r.easeParams instanceof Array?l.config.apply(l,r.easeParams):l:"function"==typeof l?new y(l,r.easeParams):b[l]||E.defaultEase:E.defaultEase,this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],s?s[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,s);if(e&&E._onPluginEvent("_onInitAllProps",this),s&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),r.runBackwards)for(n=this._firstPT;n;)n.s+=n.c,n.c=-n.c,n=n._next;this._onUpdate=r.onUpdate,this._initted=!0},r._initProps=function(e,n,i,r){var s,o,a,l,u,c;if(null==e)return!1;this.vars.css||e.style&&e!==t&&e.nodeType&&j.css&&this.vars.autoCSS!==!1&&O(this.vars,e);for(s in this.vars){if(c=this.vars[s],F[s])c&&(c instanceof Array||c.push&&f(c))&&-1!==c.join("").indexOf("{self}")&&(this.vars[s]=c=this._swapSelfInParams(c,this));else if(j[s]&&(l=new j[s])._onInitTween(e,this.vars[s],this)){for(this._firstPT=u={_next:this._firstPT,t:l,p:"setRatio",s:0,c:1,f:!0,n:s,pg:!0,pr:l._priority},o=l._overwriteProps.length;--o>-1;)n[l._overwriteProps[o]]=this._firstPT;(l._priority||l._onInitAllProps)&&(a=!0),(l._onDisable||l._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=n[s]=u={_next:this._firstPT,t:e,p:s,f:"function"==typeof e[s],n:s,pg:!1,pr:0},u.s=u.f?e[s.indexOf("set")||"function"!=typeof e["get"+s.substr(3)]?s:"get"+s.substr(3)]():parseFloat(e[s]),u.c="string"==typeof c&&"="===c.charAt(1)?parseInt(c.charAt(0)+"1",10)*Number(c.substr(2)):Number(c)-u.s||0;u&&u._next&&(u._next._prev=u)}return r&&this._kill(r,e)?this._initProps(e,n,i,r):this._overwrite>1&&this._firstPT&&i.length>1&&X(e,this,n,this._overwrite,i)?(this._kill(n,e),this._initProps(e,n,i,r)):a},r.render=function(t,e,n){var i,r,s,o,a=this._time,l=this._duration;if(t>=l)this._totalTime=this._time=l,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(i=!0,r="onComplete"),0===l&&(o=this._rawPrevTime,this._startTime===this._timeline._duration&&(t=0),(0===t||0>o||o===u)&&o!==t&&(n=!0,o>u&&(r="onReverseComplete")),this._rawPrevTime=o=!e||t||this._rawPrevTime===t?t:u);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==a||0===l&&this._rawPrevTime>0&&this._rawPrevTime!==u)&&(r="onReverseComplete",i=this._reversed),0>t?(this._active=!1,0===l&&(this._rawPrevTime>=0&&(n=!0),this._rawPrevTime=o=!e||t||this._rawPrevTime===t?t:u)):this._initted||(n=!0);else if(this._totalTime=this._time=t,this._easeType){var c=t/l,h=this._easeType,f=this._easePower;(1===h||3===h&&c>=.5)&&(c=1-c),3===h&&(c*=2),1===f?c*=c:2===f?c*=c*c:3===f?c*=c*c*c:4===f&&(c*=c*c*c*c),this.ratio=1===h?1-c:2===h?c:.5>t/l?c/2:1-c/2}else this.ratio=this._ease.getRatio(t/l);if(this._time!==a||n){if(!this._initted){if(this._init(),!this._initted||this._gc)return;this._time&&!i?this.ratio=this._ease.getRatio(this._time/l):i&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._active||!this._paused&&this._time!==a&&t>=0&&(this._active=!0),0===a&&(this._startAt&&(t>=0?this._startAt.render(t,e,n):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===l)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||v))),s=this._firstPT;s;)s.f?s.t[s.p](s.c*this.ratio+s.s):s.t[s.p]=s.c*this.ratio+s.s,s=s._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,n),e||(this._time!==a||i)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||v)),r&&(this._gc||(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,n),i&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||v),0===l&&this._rawPrevTime===u&&o!==u&&(this._rawPrevTime=0)))}},r._kill=function(t,e){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:E.selector(e)||e;var n,i,r,s,o,a,l,u;if((f(e)||R(e))&&"number"!=typeof e[0])for(n=e.length;--n>-1;)this._kill(t,e[n])&&(a=!0);else{if(this._targets){for(n=this._targets.length;--n>-1;)if(e===this._targets[n]){o=this._propLookup[n]||{},this._overwrittenProps=this._overwrittenProps||[],i=this._overwrittenProps[n]=t?this._overwrittenProps[n]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,i=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){l=t||o,u=t!==i&&"all"!==i&&t!==o&&("object"!=typeof t||!t._tempKill);for(r in l)(s=o[r])&&(s.pg&&s.t._kill(l)&&(a=!0),s.pg&&0!==s.t._overwriteProps.length||(s._prev?s._prev._next=s._next:s===this._firstPT&&(this._firstPT=s._next),s._next&&(s._next._prev=s._prev),s._next=s._prev=null),delete o[r]),u&&(i[r]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return a},r.invalidate=function(){return this._notifyPluginsOfEnabled&&E._onPluginEvent("_onDisable",this),this._firstPT=null,this._overwrittenProps=null,this._onUpdate=null,this._startAt=null,this._initted=this._active=this._notifyPluginsOfEnabled=!1,this._propLookup=this._targets?{}:[],this},r._enabled=function(t,e){if(o||s.wake(),t&&this._gc){var n,i=this._targets;if(i)for(n=i.length;--n>-1;)this._siblings[n]=B(i[n],this,!0);else this._siblings=B(this.target,this,!0)}return P.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?E._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},E.to=function(t,e,n){return new E(t,e,n)},E.from=function(t,e,n){return n.runBackwards=!0,n.immediateRender=0!=n.immediateRender,new E(t,e,n)},E.fromTo=function(t,e,n,i){return i.startAt=n,i.immediateRender=0!=i.immediateRender&&0!=n.immediateRender,new E(t,e,i)},E.delayedCall=function(t,e,n,i,r){return new E(e,0,{delay:t,onComplete:e,onCompleteParams:n,onCompleteScope:i,onReverseComplete:e,onReverseCompleteParams:n,onReverseCompleteScope:i,immediateRender:!1,useFrames:r,overwrite:0})},E.set=function(t,e){return new E(t,0,e)},E.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:E.selector(t)||t;var n,i,r,s;if((f(t)||R(t))&&"number"!=typeof t[0]){for(n=t.length,i=[];--n>-1;)i=i.concat(E.getTweensOf(t[n],e));for(n=i.length;--n>-1;)for(s=i[n],r=n;--r>-1;)s===i[r]&&i.splice(n,1)}else for(i=B(t).concat(),n=i.length;--n>-1;)(i[n]._gc||e&&!i[n].isActive())&&i.splice(n,1);return i},E.killTweensOf=E.killDelayedCallsTo=function(t,e,n){"object"==typeof e&&(n=e,e=!1);for(var i=E.getTweensOf(t,e),r=i.length;--r>-1;)i[r]._kill(n,t)};var $=g("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=$.prototype},!0);if(r=$.prototype,$.version="1.10.1",$.API=2,r._firstPT=null,r._addTween=function(t,e,n,i,r,s){var o,a;return null!=i&&(o="number"==typeof i||"="!==i.charAt(1)?Number(i)-n:parseInt(i.charAt(0)+"1",10)*Number(i.substr(2)))?(this._firstPT=a={_next:this._firstPT,t:t,p:e,s:n,c:o,f:"function"==typeof t[e],n:r||e,r:s},a._next&&(a._next._prev=a),a):void 0},r.setRatio=function(t){for(var e,n=this._firstPT,i=1e-6;n;)e=n.c*t+n.s,n.r?e=Math.round(e):i>e&&e>-i&&(e=0),n.f?n.t[n.p](e):n.t[n.p]=e,n=n._next},r._kill=function(t){var e,n=this._overwriteProps,i=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=n.length;--e>-1;)null!=t[n[e]]&&n.splice(e,1);for(;i;)null!=t[i.n]&&(i._next&&(i._next._prev=i._prev),i._prev?(i._prev._next=i._next,i._prev=null):this._firstPT===i&&(this._firstPT=i._next)),i=i._next;return!1},r._roundProps=function(t,e){for(var n=this._firstPT;n;)(t[this._propName]||null!=n.n&&t[n.n.split(this._propName+"_").join("")])&&(n.r=e),n=n._next},E._onPluginEvent=function(t,e){var n,i,r,s,o,a=e._firstPT;if("_onInitAllProps"===t){for(;a;){for(o=a._next,i=r;i&&i.pr>a.pr;)i=i._next;(a._prev=i?i._prev:s)?a._prev._next=a:r=a,(a._next=i)?i._prev=a:s=a,a=o}a=e._firstPT=r}for(;a;)a.pg&&"function"==typeof a.t[t]&&a.t[t]()&&(n=!0),a=a._next;return n},$.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===$.API&&(j[(new t[e])._propName]=t[e]);return!0},m.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,n=t.propName,i=t.priority||0,r=t.overwriteProps,s={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},o=g("plugins."+n.charAt(0).toUpperCase()+n.substr(1)+"Plugin",function(){$.call(this,n,i),this._overwriteProps=r||[]},t.global===!0),a=o.prototype=new $(n);a.constructor=o,o.API=t.API;for(e in s)"function"==typeof t[e]&&(a[s[e]]=t[e]);return o.version=t.version,$.activate([o]),o},n=t._gsQueue){for(i=0;i<n.length;i++)n[i]();for(r in p)p[r].func||t.console.log("GSAP encountered missing dependency: com.greensock."+r)}o=!1}}(window);        : result;
      };
    });

    // add `Array` functions that return the existing wrapped value
    baseEach(['push', 'reverse', 'sort', 'unshift'], function(methodName) {
      var func = arrayRef[methodName];
      lodash.prototype[methodName] = function() {
        func.apply(this.__wrapped__, arguments);
        return this;
      };
    });

    // add `Array` functions that return new wrapped values
    baseEach(['concat', 'slice', 'splice'], function(methodName) {
      var func = arrayRef[methodName];
      lodash.prototype[methodName] = function() {
        return new lodashWrapper(func.apply(this.__wrapped__, arguments), this.__chain__);
      };
    });

    // avoid array-like object bugs with `Array#shift` and `Array#splice`
    // in IE < 9, Firefox < 10, Narwhal, and RingoJS
    if (!support.spliceObjects) {
      baseEach(['pop', 'shift', 'splice'], function(methodName) {
        var func = arrayRef[methodName],
            isSplice = methodName == 'splice';

        lodash.prototype[methodName] = function() {
          var chainAll = this.__chain__,
              value = this.__wrapped__,
              result = func.apply(value, arguments);

          if (value.length === 0) {
            delete value[0];
          }
          return (chainAll || isSplice)
            ? new lodashWrapper(result, chainAll)
            : result;
        };
      });
    }

    return lodash;
  }

  /*--------------------------------------------------------------------------*/

  // expose Lo-Dash
  var _ = runInContext();

  // some AMD build optimizers like r.js check for condition patterns like the following:
  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    // Expose Lo-Dash to the global object even when an AMD loader is present in
    // case Lo-Dash is loaded with a RequireJS shim config.
    // See http://requirejs.org/docs/api.html#config-shim
    root._ = _;

    // define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module
    define(function() {
      return _;
    });
  }
  // check for `exports` after `define` in case a build optimizer adds an `exports` object
  else if (freeExports && freeModule) {
    // in Node.js or RingoJS
    if (moduleExports) {
      (freeModule.exports = _)._ = _;
    }
    // in Narwhal or Rhino -require
    else {
      freeExports._ = _;
    }
  }
  else {
    // in a browser or Rhino
    root._ = _;
  }
}.call(this));

/*!
 * jQuery JavaScript Library v1.10.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:48Z
 */
(function( window, undefined ) {

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//"use strict";
var
	// The deferred used on DOM ready
	readyList,

	// A central reference to the root jQuery(document)
	rootjQuery,

	// Support: IE<10
	// For `typeof xmlNode.method` instead of `xmlNode.method !== undefined`
	core_strundefined = typeof undefined,

	// Use the correct document accordingly with window argument (sandbox)
	location = window.location,
	document = window.document,
	docElem = document.documentElement,

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$,

	// [[Class]] -> type pairs
	class2type = {},

	// List of deleted data cache ids, so we can reuse them
	core_deletedIds = [],

	core_version = "1.10.2",

	// Save a reference to some core methods
	core_concat = core_deletedIds.concat,
	core_push = core_deletedIds.push,
	core_slice = core_deletedIds.slice,
	core_indexOf = core_deletedIds.indexOf,
	core_toString = class2type.toString,
	core_hasOwn = class2type.hasOwnProperty,
	core_trim = core_version.trim,

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context, rootjQuery );
	},

	// Used for matching numbers
	core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,

	// Used for splitting on whitespace
	core_rnotwhite = /\S+/g,

	// Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	// Match a standalone tag
	rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,

	// JSON RegExp
	rvalidchars = /^[\],:{}\s]*$/,
	rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
	rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
	rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	},

	// The ready event handler
	completed = function( event ) {

		// readyState === "complete" is good enough for us to call the dom ready in oldIE
		if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
			detach();
			jQuery.ready();
		}
	},
	// Clean-up method for dom ready events
	detach = function() {
		if ( document.addEventListener ) {
			document.removeEventListener( "DOMContentLoaded", completed, false );
			window.removeEventListener( "load", completed, false );

		} else {
			document.detachEvent( "onreadystatechange", completed );
			window.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// scripts is true for back-compat
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[2] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return rootjQuery.ready( selector );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	},

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return core_slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num == null ?

			// Return a 'clean' array
			this.toArray() :

			// Return just the object
			( num < 0 ? this[ this.length + num ] : this[ num ] );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	ready: function( fn ) {
		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	},

	slice: function() {
		return this.pushStack( core_slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: core_push,
	sort: [].sort,
	splice: [].splice
};

// Give the init function the jQuery prototype for later instantiation
jQuery.fn.init.prototype = jQuery.fn;

jQuery.extend = jQuery.fn.extend = function() {
	var src, copyIsArray, copy, name, options, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( length === i ) {
		target = this;
		--i;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	// Non-digits removed to match rinlinejQuery
	expando: "jQuery" + ( core_version + Math.random() ).replace( /\D/g, "" ),

	noConflict: function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	},

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
		if ( !document.body ) {
			return setTimeout( jQuery.ready );
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.trigger ) {
			jQuery( document ).trigger("ready").off("ready");
		}
	},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type(obj) === "array";
	},

	isWindow: function( obj ) {
		/* jshint eqeqeq: false */
		return obj != null && obj == obj.window;
	},

	isNumeric: function( obj ) {
		return !isNaN( parseFloat(obj) ) && isFinite( obj );
	},

	type: function( obj ) {
		if ( obj == null ) {
			return String( obj );
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ core_toString.call(obj) ] || "object" :
			typeof obj;
	},

	isPlainObject: function( obj ) {
		var key;

		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {
			// Not own constructor property must be Object
			if ( obj.constructor &&
				!core_hasOwn.call(obj, "constructor") &&
				!core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
				return false;
			}
		} catch ( e ) {
			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Support: IE<9
		// Handle iteration over inherited properties before own properties.
		if ( jQuery.support.ownLast ) {
			for ( key in obj ) {
				return core_hasOwn.call( obj, key );
			}
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		for ( key in obj ) {}

		return key === undefined || core_hasOwn.call( obj, key );
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	error: function( msg ) {
		throw new Error( msg );
	},

	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	parseHTML: function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[1] ) ];
		}

		parsed = jQuery.buildFragment( [ data ], context, scripts );
		if ( scripts ) {
			jQuery( scripts ).remove();
		}
		return jQuery.merge( [], parsed.childNodes );
	},

	parseJSON: function( data ) {
		// Attempt to parse using the native JSON parser first
		if ( window.JSON && window.JSON.parse ) {
			return window.JSON.parse( data );
		}

		if ( data === null ) {
			return data;
		}

		if ( typeof data === "string" ) {

			// Make sure leading/trailing whitespace is removed (IE can't handle it)
			data = jQuery.trim( data );

			if ( data ) {
				// Make sure the incoming data is actual JSON
				// Logic borrowed from http://json.org/json2.js
				if ( rvalidchars.test( data.replace( rvalidescape, "@" )
					.replace( rvalidtokens, "]" )
					.replace( rvalidbraces, "")) ) {

					return ( new Function( "return " + data ) )();
				}
			}
		}

		jQuery.error( "Invalid JSON: " + data );
	},

	// Cross-browser xml parsing
	parseXML: function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		try {
			if ( window.DOMParser ) { // Standard
				tmp = new DOMParser();
				xml = tmp.parseFromString( data , "text/xml" );
			} else { // IE
				xml = new ActiveXObject( "Microsoft.XMLDOM" );
				xml.async = "false";
				xml.loadXML( data );
			}
		} catch( e ) {
			xml = undefined;
		}
		if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	},

	noop: function() {},

	// Evaluates a script in a global context
	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && jQuery.trim( data ) ) {
			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data );
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Use native String.trim function wherever possible
	trim: core_trim && !core_trim.call("\uFEFF\xA0") ?
		function( text ) {
			return text == null ?
				"" :
				core_trim.call( text );
		} :

		// Otherwise use our own trimming functionality
		function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				core_push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		var len;

		if ( arr ) {
			if ( core_indexOf ) {
				return core_indexOf.call( arr, elem, i );
			}

			len = arr.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {
				// Skip accessing in sparse arrays
				if ( i in arr && arr[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var l = second.length,
			i = first.length,
			j = 0;

		if ( typeof l === "number" ) {
			for ( ; j < l; j++ ) {
				first[ i++ ] = second[ j ];
			}
		} else {
			while ( second[j] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, inv ) {
		var retVal,
			ret = [],
			i = 0,
			length = elems.length;
		inv = !!inv;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			retVal = !!callback( elems[ i ], i );
			if ( inv !== retVal ) {
				ret.push( elems[ i ] );
			}
		}

		return ret;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}
		}

		// Flatten any nested arrays
		return core_concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var args, proxy, tmp;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = core_slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( core_slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	access: function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			length = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < length; i++ ) {
					fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				length ? fn( elems[0], key ) : emptyGet;
	},

	now: function() {
		return ( new Date() ).getTime();
	},

	// A method for quickly swapping in/out CSS properties to get correct calculations.
	// Note: this method belongs to the css module but it's needed here for the support module.
	// If support gets modularized, this method should be moved back to the css module.
	swap: function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	}
});

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// we once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		// Standards-based browsers support DOMContentLoaded
		} else if ( document.addEventListener ) {
			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );

		// If IE event model is used
		} else {
			// Ensure firing before onload, maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", completed );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", completed );

			// If IE and not a frame
			// continually check to see if the document is ready
			var top = false;

			try {
				top = window.frameElement == null && document.documentElement;
			} catch(e) {}

			if ( top && top.doScroll ) {
				(function doScrollCheck() {
					if ( !jQuery.isReady ) {

						try {
							// Use the trick by Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll("left");
						} catch(e) {
							return setTimeout( doScrollCheck, 50 );
						}

						// detach all dom ready events
						detach();

						// and execute any waiting functions
						jQuery.ready();
					}
				})();
			}
		}
	}
	return readyList.promise( obj );
};

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {
	var length = obj.length,
		type = jQuery.type( obj );

	if ( jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || type !== "function" &&
		( length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj );
}

// All jQuery objects should point back to these
rootjQuery = jQuery(document);
/*!
 * Sizzle CSS Selector Engine v1.10.2
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03
 */
(function( window, undefined ) {

var i,
	support,
	cachedruns,
	Expr,
	getText,
	isXML,
	compile,
	outermostContext,
	sortInput,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + -(new Date()),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	hasDuplicate = false,
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}
		return 0;
	},

	// General-purpose constants
	strundefined = typeof undefined,
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf if we can't use a native one
	indexOf = arr.indexOf || function( elem ) {
		var i = 0,
			len = this.length;
		for ( ; i < len; i++ ) {
			if ( this[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
		"*(?:([*^$|!~]?=)" + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",

	// Prefer arguments quoted,
	//   then not containing pseudos/brackets,
	//   then attribute selectors/non-parenthetical expressions,
	//   then anything else
	// These preferences are here to reduce the number of selectors
	//   needing tokenize in the PSEUDO preFilter
	pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace( 3, 8 ) + ")*)|.*)\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rsibling = new RegExp( whitespace + "*[+~]" ),
	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			// BMP codepoint
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];

	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
		return [];
	}

	if ( documentIsHTML && !seed ) {

		// Shortcuts
		if ( (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName && context.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType === 9 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && context.parentNode || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key += " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Detect xml
 * @param {Element|Object} elem An element or a document
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var doc = node ? node.ownerDocument || node : preferredDoc,
		parent = doc.defaultView;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;

	// Support tests
	documentIsHTML = !isXML( doc );

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent.attachEvent && parent !== parent.top ) {
		parent.attachEvent( "onbeforeunload", function() {
			setDocument();
		});
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Check if getElementsByClassName can be trusted
	support.getElementsByClassName = assert(function( div ) {
		div.innerHTML = "<div class='a'></div><div class='a i'></div>";

		// Support: Safari<4
		// Catch class over-caching
		div.firstChild.className = "i";
		// Support: Opera<10
		// Catch gEBCN failure to find non-leading classes
		return div.getElementsByClassName("i").length === 2;
	});

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== strundefined && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [m] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== strundefined ) {
				return context.getElementsByTagName( tag );
			}
		} :
		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== strundefined && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			div.innerHTML = "<select><option selected=''></option></select>";

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}
		});

		assert(function( div ) {

			// Support: Opera 10-12/IE8
			// ^= $= *= and empty values
			// Should not select anything
			// Support: Windows 8 Native Apps
			// The type attribute is restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "t", "" );

			if ( div.querySelectorAll("[t^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = rnative.test( docElem.contains ) || docElem.compareDocumentPosition ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = docElem.compareDocumentPosition ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition( b );

		if ( compare ) {
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === doc || contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === doc || contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		}

		// Not directly comparable, sort on existence of method
		return a.compareDocumentPosition ? -1 : 1;
	} :
	function( a, b ) {
		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;

		// Parentless nodes are either documents or disconnected
		} else if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch(e) {}
	}

	return Sizzle( expr, document, null, [elem] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val === undefined ?
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null :
		val;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		for ( ; (node = elem[i]); i++ ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (see #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[5] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] && match[4] !== undefined ) {
				match[2] = match[4];

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
			//   not comment, processing instructions, or others
			// Thanks to Diego Perini for the nodeName shortcut
			//   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
			// use getAttribute instead to test this case
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

function tokenize( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( tokens = [] );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
}

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var data, cache, outerCache,
				dirkey = dirruns + " " + doneName;

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (cache = outerCache[ dir ]) && cache[0] === dirkey ) {
							if ( (data = cache[1]) === true || data === cachedruns ) {
								return data === true;
							}
						} else {
							cache = outerCache[ dir ] = [ dirkey ];
							cache[1] = matcher( elem, context, xml ) || cachedruns;
							if ( cache[1] === true ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	// A counter to specify which element is currently being matched
	var matcherCachedRuns = 0,
		bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, expandContext ) {
			var elem, j, matcher,
				setMatched = [],
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				outermost = expandContext != null,
				contextBackup = outermostContext,
				// We must always have either seed elements or context
				elems = seed || byElement && Expr.find["TAG"]( "*", expandContext && context.parentNode || context ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1);

			if ( outermost ) {
				outermostContext = context !== document && context;
				cachedruns = matcherCachedRuns;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			for ( ; (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
						cachedruns = ++matcherCachedRuns;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, group /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !group ) {
			group = tokenize( selector );
		}
		i = group.length;
		while ( i-- ) {
			cached = matcherFromTokens( group[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	}
	return cached;
};

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function select( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		match = tokenize( selector );

	if ( !seed ) {
		// Try to minimize operations if there is only one group
		if ( match.length === 1 ) {

			// Take a shortcut and set the context if the root selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
				}
				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && context.parentNode || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}
	}

	// Compile and execute a filtering function
	// Provide `match` to avoid retokenization if we modified the selector above
	compile( selector, match )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector )
	);
	return results;
}

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome<14
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return (val = elem.getAttributeNode( name )) && val.specified ?
				val.value :
				elem[ name ] === true ? name.toLowerCase() : null;
		}
	});
}

jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;


})( window );
// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( core_rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,
		// Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};
jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var action = tuple[ 0 ],
								fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ action + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = core_slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? core_slice.call( arguments ) : value;
					if( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});
jQuery.support = (function( support ) {

	var all, a, input, select, fragment, opt, eventName, isSupported, i,
		div = document.createElement("div");

	// Setup
	div.setAttribute( "className", "t" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	// Finish early in limited (non-browser) environments
	all = div.getElementsByTagName("*") || [];
	a = div.getElementsByTagName("a")[ 0 ];
	if ( !a || !a.style || !all.length ) {
		return support;
	}

	// First batch of tests
	select = document.createElement("select");
	opt = select.appendChild( document.createElement("option") );
	input = div.getElementsByTagName("input")[ 0 ];

	a.style.cssText = "top:1px;float:left;opacity:.5";

	// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
	support.getSetAttribute = div.className !== "t";

	// IE strips leading whitespace when .innerHTML is used
	support.leadingWhitespace = div.firstChild.nodeType === 3;

	// Make sure that tbody elements aren't automatically inserted
	// IE will insert them into empty tables
	support.tbody = !div.getElementsByTagName("tbody").length;

	// Make sure that link elements get serialized correctly by innerHTML
	// This requires a wrapper element in IE
	support.htmlSerialize = !!div.getElementsByTagName("link").length;

	// Get the style information from getAttribute
	// (IE uses .cssText instead)
	support.style = /top/.test( a.getAttribute("style") );

	// Make sure that URLs aren't manipulated
	// (IE normalizes it by default)
	support.hrefNormalized = a.getAttribute("href") === "/a";

	// Make sure that element opacity exists
	// (IE uses filter instead)
	// Use a regex to work around a WebKit issue. See #5145
	support.opacity = /^0.5/.test( a.style.opacity );

	// Verify style float existence
	// (IE uses styleFloat instead of cssFloat)
	support.cssFloat = !!a.style.cssFloat;

	// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
	support.checkOn = !!input.value;

	// Make sure that a selected-by-default option has a working selected property.
	// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
	support.optSelected = opt.selected;

	// Tests for enctype support on a form (#6743)
	support.enctype = !!document.createElement("form").enctype;

	// Makes sure cloning an html5 element does not cause problems
	// Where outerHTML is undefined, this still works
	support.html5Clone = document.createElement("nav").cloneNode( true ).outerHTML !== "<:nav></:nav>";

	// Will be defined later
	support.inlineBlockNeedsLayout = false;
	support.shrinkWrapBlocks = false;
	support.pixelPosition = false;
	support.deleteExpando = true;
	support.noCloneEvent = true;
	support.reliableMarginRight = true;
	support.boxSizingReliable = true;

	// Make sure checked status is properly cloned
	input.checked = true;
	support.noCloneChecked = input.cloneNode( true ).checked;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<9
	try {
		delete div.test;
	} catch( e ) {
		support.deleteExpando = false;
	}

	// Check if we can trust getAttribute("value")
	input = document.createElement("input");
	input.setAttribute( "value", "" );
	support.input = input.getAttribute( "value" ) === "";

	// Check if an input maintains its value after becoming a radio
	input.value = "t";
	input.setAttribute( "type", "radio" );
	support.radioValue = input.value === "t";

	// #11217 - WebKit loses check when the name is after the checked attribute
	input.setAttribute( "checked", "t" );
	input.setAttribute( "name", "t" );

	fragment = document.createDocumentFragment();
	fragment.appendChild( input );

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	support.appendChecked = input.checked;

	// WebKit doesn't clone checked state correctly in fragments
	support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<9
	// Opera does not clone events (and typeof div.attachEvent === undefined).
	// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
	if ( div.attachEvent ) {
		div.attachEvent( "onclick", function() {
			support.noCloneEvent = false;
		});

		div.cloneNode( true ).click();
	}

	// Support: IE<9 (lack submit/change bubble), Firefox 17+ (lack focusin event)
	// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
	for ( i in { submit: true, change: true, focusin: true }) {
		div.setAttribute( eventName = "on" + i, "t" );

		support[ i + "Bubbles" ] = eventName in window || div.attributes[ eventName ].expando === false;
	}

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	// Support: IE<9
	// Iteration over object's inherited properties before its own.
	for ( i in jQuery( support ) ) {
		break;
	}
	support.ownLast = i !== "0";

	// Run tests that need a body at doc ready
	jQuery(function() {
		var container, marginDiv, tds,
			divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
			body = document.getElementsByTagName("body")[0];

		if ( !body ) {
			// Return for frameset docs that don't have a body
			return;
		}

		container = document.createElement("div");
		container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";

		body.appendChild( container ).appendChild( div );

		// Support: IE8
		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
		tds = div.getElementsByTagName("td");
		tds[ 0 ].style.cssText = "padding:0;margin:0;border:0;display:none";
		isSupported = ( tds[ 0 ].offsetHeight === 0 );

		tds[ 0 ].style.display = "";
		tds[ 1 ].style.display = "none";

		// Support: IE8
		// Check if empty table cells still have offsetWidth/Height
		support.reliableHiddenOffsets = isSupported && ( tds[ 0 ].offsetHeight === 0 );

		// Check box-sizing and margin behavior.
		div.innerHTML = "";
		div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";

		// Workaround failing boxSizing test due to offsetWidth returning wrong value
		// with some non-1 values of body zoom, ticket #13543
		jQuery.swap( body, body.style.zoom != null ? { zoom: 1 } : {}, function() {
			support.boxSizing = div.offsetWidth === 4;
		});

		// Use window.getComputedStyle because jsdom on node.js will break without it.
		if ( window.getComputedStyle ) {
			support.pixelPosition = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
			support.boxSizingReliable = ( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";

			// Check if div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container. (#3333)
			// Fails in WebKit before Feb 2011 nightlies
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			marginDiv = div.appendChild( document.createElement("div") );
			marginDiv.style.cssText = div.style.cssText = divReset;
			marginDiv.style.marginRight = marginDiv.style.width = "0";
			div.style.width = "1px";

			support.reliableMarginRight =
				!parseFloat( ( window.getComputedStyle( marginDiv, null ) || {} ).marginRight );
		}

		if ( typeof div.style.zoom !== core_strundefined ) {
			// Support: IE<8
			// Check if natively block-level elements act like inline-block
			// elements when setting their display to 'inline' and giving
			// them layout
			div.innerHTML = "";
			div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
			support.inlineBlockNeedsLayout = ( div.offsetWidth === 3 );

			// Support: IE6
			// Check if elements with layout shrink-wrap their children
			div.style.display = "block";
			div.innerHTML = "<div></div>";
			div.firstChild.style.width = "5px";
			support.shrinkWrapBlocks = ( div.offsetWidth !== 3 );

			if ( support.inlineBlockNeedsLayout ) {
				// Prevent IE 6 from affecting layout for positioned elements #11048
				// Prevent IE from shrinking the body in IE 7 mode #12869
				// Support: IE<8
				body.style.zoom = 1;
			}
		}

		body.removeChild( container );

		// Null elements to avoid leaks in IE
		container = div = tds = marginDiv = null;
	});

	// Null elements to avoid leaks in IE
	all = select = fragment = opt = a = input = null;

	return support;
})({});

var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
	rmultiDash = /([A-Z])/g;

function internalData( elem, name, data, pvt /* Internal Use Only */ ){
	if ( !jQuery.acceptData( elem ) ) {
		return;
	}

	var ret, thisCache,
		internalKey = jQuery.expando,

		// We have to handle DOM nodes and JS objects differently because IE6-7
		// can't GC object references properly across the DOM-JS boundary
		isNode = elem.nodeType,

		// Only DOM nodes need the global jQuery cache; JS object data is
		// attached directly to the object so GC can occur automatically
		cache = isNode ? jQuery.cache : elem,

		// Only defining an ID for JS objects if its cache already exists allows
		// the code to shortcut on the same path as a DOM node with no cache
		id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

	// Avoid doing any more work than we need to when trying to get data on an
	// object that has no data at all
	if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && data === undefined && typeof name === "string" ) {
		return;
	}

	if ( !id ) {
		// Only DOM nodes need a new unique ID for each element since their data
		// ends up in the global cache
		if ( isNode ) {
			id = elem[ internalKey ] = core_deletedIds.pop() || jQuery.guid++;
		} else {
			id = internalKey;
		}
	}

	if ( !cache[ id ] ) {
		// Avoid exposing jQuery metadata on plain JS objects when the object
		// is serialized using JSON.stringify
		cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
	}

	// An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if ( typeof name === "object" || typeof name === "function" ) {
		if ( pvt ) {
			cache[ id ] = jQuery.extend( cache[ id ], name );
		} else {
			cache[ id ].data = jQuery.extend( cache[ id ].data, name );
		}
	}

	thisCache = cache[ id ];

	// jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if ( !pvt ) {
		if ( !thisCache.data ) {
			thisCache.data = {};
		}

		thisCache = thisCache.data;
	}

	if ( data !== undefined ) {
		thisCache[ jQuery.camelCase( name ) ] = data;
	}

	// Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if ( typeof name === "string" ) {

		// First Try to find as-is property data
		ret = thisCache[ name ];

		// Test for null|undefined property data
		if ( ret == null ) {

			// Try to find the camelCased property
			ret = thisCache[ jQuery.camelCase( name ) ];
		}
	} else {
		ret = thisCache;
	}

	return ret;
}

function internalRemoveData( elem, name, pvt ) {
	if ( !jQuery.acceptData( elem ) ) {
		return;
	}

	var thisCache, i,
		isNode = elem.nodeType,

		// See jQuery.data for more information
		cache = isNode ? jQuery.cache : elem,
		id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

	// If there is already no cache entry for this object, there is no
	// purpose in continuing
	if ( !cache[ id ] ) {
		return;
	}

	if ( name ) {

		thisCache = pvt ? cache[ id ] : cache[ id ].data;

		if ( thisCache ) {

			// Support array or space separated string names for data keys
			if ( !jQuery.isArray( name ) ) {

				// try the string as a key before any manipulation
				if ( name in thisCache ) {
					name = [ name ];
				} else {

					// split the camel cased version by spaces unless a key with the spaces exists
					name = jQuery.camelCase( name );
					if ( name in thisCache ) {
						name = [ name ];
					} else {
						name = name.split(" ");
					}
				}
			} else {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = name.concat( jQuery.map( name, jQuery.camelCase ) );
			}

			i = name.length;
			while ( i-- ) {
				delete thisCache[ name[i] ];
			}

			// If there is no data left in the cache, we want to continue
			// and let the cache object itself get destroyed
			if ( pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache) ) {
				return;
			}
		}
	}

	// See jQuery.data for more information
	if ( !pvt ) {
		delete cache[ id ].data;

		// Don't destroy the parent cache unless the internal data object
		// had been the only thing left in it
		if ( !isEmptyDataObject( cache[ id ] ) ) {
			return;
		}
	}

	// Destroy the cache
	if ( isNode ) {
		jQuery.cleanData( [ elem ], true );

	// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
	/* jshint eqeqeq: false */
	} else if ( jQuery.support.deleteExpando || cache != cache.window ) {
		/* jshint eqeqeq: true */
		delete cache[ id ];

	// When all else fails, null
	} else {
		cache[ id ] = null;
	}
}

jQuery.extend({
	cache: {},

	// The following elements throw uncatchable exceptions if you
	// attempt to add expando properties to them.
	noData: {
		"applet": true,
		"embed": true,
		// Ban all objects except for Flash (which handle expandos)
		"object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data ) {
		return internalData( elem, name, data );
	},

	removeData: function( elem, name ) {
		return internalRemoveData( elem, name );
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return internalData( elem, name, data, true );
	},

	_removeData: function( elem, name ) {
		return internalRemoveData( elem, name, true );
	},

	// A method for determining if a DOM node can handle the data expando
	acceptData: function( elem ) {
		// Do not set data on non-element because it will not be cleared (#8335).
		if ( elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9 ) {
			return false;
		}

		var noData = elem.nodeName && jQuery.noData[ elem.nodeName.toLowerCase() ];

		// nodes accept data unless otherwise specified; rejection can be conditional
		return !noData || noData !== true && elem.getAttribute("classid") === noData;
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var attrs, name,
			data = null,
			i = 0,
			elem = this[0];

		// Special expections of .data basically thwart jQuery.access,
		// so implement the relevant behavior ourselves

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
					attrs = elem.attributes;
					for ( ; i < attrs.length; i++ ) {
						name = attrs[i].name;

						if ( name.indexOf("data-") === 0 ) {
							name = jQuery.camelCase( name.slice(5) );

							dataAttr( elem, name, data[ name ] );
						}
					}
					jQuery._data( elem, "parsedAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				jQuery.data( this, key );
			});
		}

		return arguments.length > 1 ?

			// Sets one value
			this.each(function() {
				jQuery.data( this, key, value );
			}) :

			// Gets one value
			// Try to fetch any internally stored data first
			elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : null;
	},

	removeData: function( key ) {
		return this.each(function() {
			jQuery.removeData( this, key );
		});
	}
});

function dataAttr( elem, key, data ) {
	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	var name;
	for ( name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}
jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray(data) ) {
					queue = jQuery._data( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object, or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return jQuery._data( elem, key ) || jQuery._data( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				jQuery._removeData( elem, type + "queue" );
				jQuery._removeData( elem, key );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	delay: function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while( i-- ) {
			tmp = jQuery._data( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var nodeHook, boolHook,
	rclass = /[\t\r\n\f]/g,
	rreturn = /\r/g,
	rfocusable = /^(?:input|select|textarea|button|object)$/i,
	rclickable = /^(?:a|area)$/i,
	ruseDefault = /^(?:checked|selected)$/i,
	getSetAttribute = jQuery.support.getSetAttribute,
	getSetInput = jQuery.support.input;

jQuery.fn.extend({
	attr: function( name, value ) {
		return jQuery.access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	},

	prop: function( name, value ) {
		return jQuery.access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each(function() {
			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch( e ) {}
		});
	},

	addClass: function( value ) {
		var classes, elem, cur, clazz, j,
			i = 0,
			len = this.length,
			proceed = typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( core_rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}
					elem.className = jQuery.trim( cur );

				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j,
			i = 0,
			len = this.length,
			proceed = arguments.length === 0 || typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( core_rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}
					elem.className = value ? jQuery.trim( cur ) : "";
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( core_rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === core_strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					jQuery._data( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	},

	val: function( value ) {
		var ret, hooks, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map(val, function ( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				// Use proper attribute retrieval(#6932, #12072)
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					elem.text;
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// oldIE doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( (option.selected = jQuery.inArray( jQuery(option).val(), values ) >= 0) ) {
						optionSet = true;
					}
				}

				// force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	},

	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === core_strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( core_rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
						elem[ propName ] = false;
					// Support: IE<9
					// Also clear defaultChecked/defaultSelected (if appropriate)
					} else {
						elem[ jQuery.camelCase( "default-" + name ) ] =
							elem[ propName ] = false;
					}

				// See #9699 for explanation of this approach (setting first, then removal)
				} else {
					jQuery.attr( elem, name, "" );
				}

				elem.removeAttribute( getSetAttribute ? name : propName );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
						0 :
						-1;
			}
		}
	}
});

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
			// IE<8 needs the *property* name
			elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

		// Use defaultChecked and defaultSelected for oldIE
		} else {
			elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
		}

		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = jQuery.expr.attrHandle[ name ] || jQuery.find.attr;

	jQuery.expr.attrHandle[ name ] = getSetInput && getSetAttribute || !ruseDefault.test( name ) ?
		function( elem, name, isXML ) {
			var fn = jQuery.expr.attrHandle[ name ],
				ret = isXML ?
					undefined :
					/* jshint eqeqeq: false */
					(jQuery.expr.attrHandle[ name ] = undefined) !=
						getter( elem, name, isXML ) ?

						name.toLowerCase() :
						null;
			jQuery.expr.attrHandle[ name ] = fn;
			return ret;
		} :
		function( elem, name, isXML ) {
			return isXML ?
				undefined :
				elem[ jQuery.camelCase( "default-" + name ) ] ?
					name.toLowerCase() :
					null;
		};
});

// fix oldIE attroperties
if ( !getSetInput || !getSetAttribute ) {
	jQuery.attrHooks.value = {
		set: function( elem, value, name ) {
			if ( jQuery.nodeName( elem, "input" ) ) {
				// Does not return so that setAttribute is also used
				elem.defaultValue = value;
			} else {
				// Use nodeHook if defined (#1954); otherwise setAttribute is fine
				return nodeHook && nodeHook.set( elem, value, name );
			}
		}
	};
}

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = {
		set: function( elem, value, name ) {
			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				elem.setAttributeNode(
					(ret = elem.ownerDocument.createAttribute( name ))
				);
			}

			ret.value = value += "";

			// Break association with cloned elements by also using setAttribute (#9646)
			return name === "value" || value === elem.getAttribute( name ) ?
				value :
				undefined;
		}
	};
	jQuery.expr.attrHandle.id = jQuery.expr.attrHandle.name = jQuery.expr.attrHandle.coords =
		// Some attributes are constructed with empty-string values when not defined
		function( elem, name, isXML ) {
			var ret;
			return isXML ?
				undefined :
				(ret = elem.getAttributeNode( name )) && ret.value !== "" ?
					ret.value :
					null;
		};
	jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			return ret && ret.specified ?
				ret.value :
				undefined;
		},
		set: nodeHook.set
	};

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		set: function( elem, value, name ) {
			nodeHook.set( elem, value === "" ? false : value, name );
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each([ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		};
	});
}


// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !jQuery.support.hrefNormalized ) {
	// href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each([ "href", "src" ], function( i, name ) {
		jQuery.propHooks[ name ] = {
			get: function( elem ) {
				return elem.getAttribute( name, 4 );
			}
		};
	});
}

if ( !jQuery.support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {
			// Return undefined in the case of empty string
			// Note: IE uppercases css property names, but if we were to .toLowerCase()
			// .cssText, that would destroy case senstitivity in URL's, like in "background"
			return elem.style.cssText || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = value + "" );
		}
	};
}

// Safari mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
if ( !jQuery.support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});

// IE6/7 call enctype encoding
if ( !jQuery.support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !jQuery.support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			// Support: Webkit
			// "" is returned instead of "on" if a value isn't specified
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});
var rformElems = /^(?:input|select|textarea)$/i,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {
		var tmp, events, t, handleObjIn,
			special, eventHandle, handleObj,
			handlers, type, namespaces, origType,
			elemData = jQuery._data( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};
			// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( core_rnotwhite ) || [""];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {
		var j, handleObj, tmp,
			origCount, t, events,
			special, handlers, type,
			namespaces, origType,
			elemData = jQuery.hasData( elem ) && jQuery._data( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( core_rnotwhite ) || [""];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery._removeData( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		var handle, ontype, cur,
			bubbleType, special, tmp, i,
			eventPath = [ elem || document ],
			type = core_hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = core_hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && jQuery.acceptData( cur ) && handle.apply && handle.apply( cur, data ) === false ) {
				event.preventDefault();
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					try {
						elem[ type ]();
					} catch ( e ) {
						// IE<9 dies on focus/blur to hidden element (#1486,#12518)
						// only reproducible on winXP IE8 native, not IE9 in IE8 mode
					}
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, ret, handleObj, matched, j,
			handlerQueue = [],
			args = core_slice.call( arguments ),
			handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or
				// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var sel, handleObj, matches, i,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			/* jshint eqeqeq: false */
			for ( ; cur != this; cur = cur.parentNode || this ) {
				/* jshint eqeqeq: true */

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click") ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: IE<9
		// Fix target property (#1925)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Support: Chrome 23+, Safari?
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// Support: IE<9
		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
		event.metaKey = !!event.metaKey;

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var body, eventDoc, doc,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					try {
						this.focus();
						return false;
					} catch ( e ) {
						// Support: IE<9
						// If we error on focus to hidden element (#1486, #12518),
						// let .trigger() run the handlers
					}
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Even when returnValue equals to undefined Firefox will still show alert
				if ( event.result !== undefined ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	} :
	function( elem, type, handle ) {
		var name = "on" + type;

		if ( elem.detachEvent ) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8
			// detachEvent needed property on element, by name of that event, to properly expose it to GC
			if ( typeof elem[ name ] === core_strundefined ) {
				elem[ name ] = null;
			}

			elem.detachEvent( name, handle );
		}
	};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = ( src.defaultPrevented || src.returnValue === false ||
			src.getPreventDefault && src.getPreventDefault() ) ? returnTrue : returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;
		if ( !e ) {
			return;
		}

		// If preventDefault exists, run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// Support: IE
		// Otherwise set the returnValue property of the original event to false
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;
		if ( !e ) {
			return;
		}
		// If stopPropagation exists, run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}

		// Support: IE
		// Set the cancelBubble property of the original event to true
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		this.isImmediatePropagationStopped = returnTrue;
		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// IE submit delegation
if ( !jQuery.support.submitBubbles ) {

	jQuery.event.special.submit = {
		setup: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
				if ( form && !jQuery._data( form, "submitBubbles" ) ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						event._submit_bubble = true;
					});
					jQuery._data( form, "submitBubbles", true );
				}
			});
			// return undefined since we don't need an event listener
		},

		postDispatch: function( event ) {
			// If form was submitted by the user, bubble the event up the tree
			if ( event._submit_bubble ) {
				delete event._submit_bubble;
				if ( this.parentNode && !event.isTrigger ) {
					jQuery.event.simulate( "submit", this.parentNode, event, true );
				}
			}
		},

		teardown: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !jQuery.support.changeBubbles ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {
				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._just_changed = true;
						}
					});
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._just_changed && !event.isTrigger ) {
							this._just_changed = false;
						}
						// Allow triggered, simulated change events (#11500)
						jQuery.event.simulate( "change", this, event, true );
					});
				}
				return false;
			}
			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "changeBubbles" ) ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event, true );
						}
					});
					jQuery._data( elem, "changeBubbles", true );
				}
			});
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return !rformElems.test( this.nodeName );
		}
	};
}

// Create "bubbling" focus and blur events
if ( !jQuery.support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler while someone wants focusin/focusout
		var attaches = 0,
			handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				if ( attaches++ === 0 ) {
					document.addEventListener( orig, handler, true );
				}
			},
			teardown: function() {
				if ( --attaches === 0 ) {
					document.removeEventListener( orig, handler, true );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var type, origFn;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});
var isSimple = /^.[^:#\[\.,]*$/,
	rparentsprev = /^(?:parents|prev(?:Until|All))/,
	rneedsContext = jQuery.expr.match.needsContext,
	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			ret = [],
			self = this,
			len = self.length;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},

	has: function( target ) {
		var i,
			targets = jQuery( target, this ),
			len = targets.length;

		return this.filter(function() {
			for ( i = 0; i < len; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},

	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},

	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			ret = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					cur = ret.push( cur );
					break;
				}
			}
		}

		return this.pushStack( ret.length > 1 ? jQuery.unique( ret ) : ret );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[0] && this[0].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[0], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(
			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem, this );
	},

	add: function( selector, context ) {
		var set = typeof selector === "string" ?
				jQuery( selector, context ) :
				jQuery.makeArray( selector && selector.nodeType ? [ selector ] : selector ),
			all = jQuery.merge( this.get(), set );

		return this.pushStack( jQuery.unique(all) );
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	do {
		cur = cur[ dir ];
	} while ( cur && cur.nodeType !== 1 );

	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				ret = jQuery.unique( ret );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				ret = ret.reverse();
			}
		}

		return this.pushStack( ret );
	};
});

jQuery.extend({
	filter: function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			}));
	},

	dir: function( elem, dir, until ) {
		var matched = [],
			cur = elem[ dir ];

		while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
			if ( cur.nodeType === 1 ) {
				matched.push( cur );
			}
			cur = cur[dir];
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var r = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				r.push( n );
			}
		}

		return r;
	}
});

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( isSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( jQuery.inArray( elem, qualifier ) >= 0 ) !== not;
	});
}
function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
		safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
		"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
	rleadingWhitespace = /^\s+/,
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rtbody = /<tbody/i,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	manipulation_rcheckableType = /^(?:checkbox|radio)$/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		area: [ 1, "<map>", "</map>" ],
		param: [ 1, "<object>", "</object>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
		// unless wrapped in a div with non-breaking characters in front of it.
		_default: jQuery.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>"  ]
	},
	safeFragment = createSafeFragment( document ),
	fragmentDiv = safeFragment.appendChild( document.createElement("div") );

wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

jQuery.fn.extend({
	text: function( value ) {
		return jQuery.access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	// keepData is for internal use only--do not document
	remove: function( selector, keepData ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {

			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem, false ) );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}

			// If this is a select, ensure that it displays empty (#12336)
			// Support: IE<9
			if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
				elem.options.length = 0;
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function () {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return jQuery.access( this, function( value ) {
			var elem = this[0] || {},
				i = 0,
				l = this.length;

			if ( value === undefined ) {
				return elem.nodeType === 1 ?
					elem.innerHTML.replace( rinlinejQuery, "" ) :
					undefined;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				( jQuery.support.htmlSerialize || !rnoshimcache.test( value )  ) &&
				( jQuery.support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
				!wrapMap[ ( rtagName.exec( value ) || ["", ""] )[1].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for (; i < l; i++ ) {
						// Remove element nodes and prevent memory leaks
						elem = this[i] || {};
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch(e) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var
			// Snapshot the DOM in case .domManip sweeps something relevant into its fragment
			args = jQuery.map( this, function( elem ) {
				return [ elem.nextSibling, elem.parentNode ];
			}),
			i = 0;

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			var next = args[ i++ ],
				parent = args[ i++ ];

			if ( parent ) {
				// Don't use the snapshot next if it has moved (#13810)
				if ( next && next.parentNode !== parent ) {
					next = this.nextSibling;
				}
				jQuery( this ).remove();
				parent.insertBefore( elem, next );
			}
		// Allow new content to include elements from the context set
		}, true );

		// Force removal if there was no new content (e.g., from empty arguments)
		return i ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback, allowIntersection ) {

		// Flatten any nested arrays
		args = core_concat.apply( [], args );

		var first, node, hasScripts,
			scripts, doc, fragment,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[0],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction || !( l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[0] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback, allowIntersection );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, !allowIntersection && this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[i], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!jQuery._data( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Hope ajax is available...
								jQuery._evalUrl( node.src );
							} else {
								jQuery.globalEval( ( node.text || node.textContent || node.innerHTML || "" ).replace( rcleanScript, "" ) );
							}
						}
					}
				}

				// Fix #11809: Avoid leaking memory
				fragment = first = null;
			}
		}

		return this;
	}
});

// Support: IE<8
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType === 1 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (jQuery.find.attr( elem, "type" ) !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );
	if ( match ) {
		elem.type = match[1];
	} else {
		elem.removeAttribute("type");
	}
	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var elem,
		i = 0;
	for ( ; (elem = elems[i]) != null; i++ ) {
		jQuery._data( elem, "globalEval", !refElements || jQuery._data( refElements[i], "globalEval" ) );
	}
}

function cloneCopyEvent( src, dest ) {

	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type, events[ type ][ i ] );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function fixCloneNodeIssues( src, dest ) {
	var nodeName, e, data;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 copies events bound via attachEvent when using cloneNode.
	if ( !jQuery.support.noCloneEvent && dest[ jQuery.expando ] ) {
		data = jQuery._data( dest );

		for ( e in data.events ) {
			jQuery.removeEvent( dest, e, data.handle );
		}

		// Event data gets referenced instead of copied if the expando gets copied too
		dest.removeAttribute( jQuery.expando );
	}

	// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
	if ( nodeName === "script" && dest.text !== src.text ) {
		disableScript( dest ).text = src.text;
		restoreScript( dest );

	// IE6-10 improperly clones children of object elements using classid.
	// IE10 throws NoModificationAllowedError if parent is null, #12132.
	} else if ( nodeName === "object" ) {
		if ( dest.parentNode ) {
			dest.outerHTML = src.outerHTML;
		}

		// This path appears unavoidable for IE9. When cloning an object
		// element in IE9, the outerHTML strategy above is not sufficient.
		// If the src has innerHTML and the destination does not,
		// copy the src.innerHTML into the dest.innerHTML. #10324
		if ( jQuery.support.html5Clone && ( src.innerHTML && !jQuery.trim(dest.innerHTML) ) ) {
			dest.innerHTML = src.innerHTML;
		}

	} else if ( nodeName === "input" && manipulation_rcheckableType.test( src.type ) ) {
		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.defaultSelected = dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			i = 0,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone(true);
			jQuery( insert[i] )[ original ]( elems );

			// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
			core_push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});

function getAll( context, tag ) {
	var elems, elem,
		i = 0,
		found = typeof context.getElementsByTagName !== core_strundefined ? context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== core_strundefined ? context.querySelectorAll( tag || "*" ) :
			undefined;

	if ( !found ) {
		for ( found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++ ) {
			if ( !tag || jQuery.nodeName( elem, tag ) ) {
				found.push( elem );
			} else {
				jQuery.merge( found, getAll( elem, tag ) );
			}
		}
	}

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], found ) :
		found;
}

// Used in buildFragment, fixes the defaultChecked property
function fixDefaultChecked( elem ) {
	if ( manipulation_rcheckableType.test( elem.type ) ) {
		elem.defaultChecked = elem.checked;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var destElements, node, clone, i, srcElements,
			inPage = jQuery.contains( elem.ownerDocument, elem );

		if ( jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
			clone = elem.cloneNode( true );

		// IE<=8 does not properly clone detached, unknown element nodes
		} else {
			fragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
		}

		if ( (!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) &&
				(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			// Fix all IE cloning issues
			for ( i = 0; (node = srcElements[i]) != null; ++i ) {
				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[i] ) {
					fixCloneNodeIssues( node, destElements[i] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0; (node = srcElements[i]) != null; i++ ) {
					cloneCopyEvent( node, destElements[i] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		destElements = srcElements = node = null;

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var j, elem, contains,
			tmp, tag, tbody, wrap,
			l = elems.length,

			// Ensure a safe fragment
			safe = createSafeFragment( context ),

			nodes = [],
			i = 0;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || safe.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || ["", ""] )[1].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;

					tmp.innerHTML = wrap[1] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[2];

					// Descend through wrappers to the right content
					j = wrap[0];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Manually add leading whitespace removed by IE
					if ( !jQuery.support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
						nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[0] ) );
					}

					// Remove IE's autoinserted <tbody> from table fragments
					if ( !jQuery.support.tbody ) {

						// String was a <table>, *may* have spurious <tbody>
						elem = tag === "table" && !rtbody.test( elem ) ?
							tmp.firstChild :

							// String was a bare <thead> or <tfoot>
							wrap[1] === "<table>" && !rtbody.test( elem ) ?
								tmp :
								0;

						j = elem && elem.childNodes.length;
						while ( j-- ) {
							if ( jQuery.nodeName( (tbody = elem.childNodes[j]), "tbody" ) && !tbody.childNodes.length ) {
								elem.removeChild( tbody );
							}
						}
					}

					jQuery.merge( nodes, tmp.childNodes );

					// Fix #12392 for WebKit and IE > 9
					tmp.textContent = "";

					// Fix #12392 for oldIE
					while ( tmp.firstChild ) {
						tmp.removeChild( tmp.firstChild );
					}

					// Remember the top-level container for proper cleanup
					tmp = safe.lastChild;
				}
			}
		}

		// Fix #11356: Clear elements from fragment
		if ( tmp ) {
			safe.removeChild( tmp );
		}

		// Reset defaultChecked for any radios and checkboxes
		// about to be appended to the DOM in IE 6/7 (#8060)
		if ( !jQuery.support.appendChecked ) {
			jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
		}

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( safe.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		tmp = null;

		return safe;
	},

	cleanData: function( elems, /* internal */ acceptData ) {
		var elem, type, id, data,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			deleteExpando = jQuery.support.deleteExpando,
			special = jQuery.event.special;

		for ( ; (elem = elems[i]) != null; i++ ) {

			if ( acceptData || jQuery.acceptData( elem ) ) {

				id = elem[ internalKey ];
				data = id && cache[ id ];

				if ( data ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Remove cache only if it was not already removed by jQuery.event.remove
					if ( cache[ id ] ) {

						delete cache[ id ];

						// IE does not allow us to delete expando properties from nodes,
						// nor does it have a removeAttribute function on Document nodes;
						// we must handle all of these cases
						if ( deleteExpando ) {
							delete elem[ internalKey ];

						} else if ( typeof elem.removeAttribute !== core_strundefined ) {
							elem.removeAttribute( internalKey );

						} else {
							elem[ internalKey ] = null;
						}

						core_deletedIds.push( id );
					}
				}
			}
		}
	},

	_evalUrl: function( url ) {
		return jQuery.ajax({
			url: url,
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		});
	}
});
jQuery.fn.extend({
	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapAll( html.call(this, i) );
			});
		}

		if ( this[0] ) {
			// The elements to wrap the target around
			var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

			if ( this[0].parentNode ) {
				wrap.insertBefore( this[0] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function(i) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});
var iframe, getStyles, curCSS,
	ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity\s*=\s*([^)]*)/,
	rposition = /^(top|right|bottom|left)$/,
	// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rmargin = /^margin/,
	rnumsplit = new RegExp( "^(" + core_pnum + ")(.*)$", "i" ),
	rnumnonpx = new RegExp( "^(" + core_pnum + ")(?!px)[a-z%]+$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + core_pnum + ")", "i" ),
	elemdisplay = { BODY: "block" },

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: 0,
		fontWeight: 400
	},

	cssExpand = [ "Top", "Right", "Bottom", "Left" ],
	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name.charAt(0).toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function isHidden( elem, el ) {
	// isHidden might be called from jQuery#filter function;
	// in that case, element will be second argument
	elem = el || elem;
	return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = jQuery._data( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = jQuery._data( elem, "olddisplay", css_defaultDisplay(elem.nodeName) );
			}
		} else {

			if ( !values[ index ] ) {
				hidden = isHidden( elem );

				if ( display && display !== "none" || !hidden ) {
					jQuery._data( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
				}
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.fn.extend({
	css: function( name, value ) {
		return jQuery.access( this, function( elem, name, value ) {
			var len, styles,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});

jQuery.extend({
	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {
					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		// normalize float css property
		"float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {
		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// convert relative number strings (+= or -=) to relative numbers. #7345
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that NaN and null values aren't set. See: #7116
			if ( value == null || type === "number" && isNaN( value ) ) {
				return;
			}

			// If a number was passed in, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
			// but it would mean to define eight (for every problematic property) identical functions
			if ( !jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {

				// Wrapped to prevent IE from throwing errors when 'invalid' values are provided
				// Fixes bug #5509
				try {
					style[ name ] = value;
				} catch(e) {}
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var num, val, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});

// NOTE: we've included the "window" in window.getComputedStyle
// because jsdom on node.js will break without it.
if ( window.getComputedStyle ) {
	getStyles = function( elem ) {
		return window.getComputedStyle( elem, null );
	};

	curCSS = function( elem, name, _computed ) {
		var width, minWidth, maxWidth,
			computed = _computed || getStyles( elem ),

			// getPropertyValue is only needed for .css('filter') in IE9, see #12537
			ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined,
			style = elem.style;

		if ( computed ) {

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
			// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret;
	};
} else if ( document.documentElement.currentStyle ) {
	getStyles = function( elem ) {
		return elem.currentStyle;
	};

	curCSS = function( elem, name, _computed ) {
		var left, rs, rsLeft,
			computed = _computed || getStyles( elem ),
			ret = computed ? computed[ name ] : undefined,
			style = elem.style;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret == null && style && style[ name ] ) {
			ret = style[ name ];
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		// but not position css attributes, as those are proportional to the parent element instead
		// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
		if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

			// Remember the original values
			left = style.left;
			rs = elem.runtimeStyle;
			rsLeft = rs && rs.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				rs.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ret;
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				rs.left = rsLeft;
			}
		}

		return ret === "" ? "auto" : ret;
	};
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox && ( jQuery.support.boxSizingReliable || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

// Try to determine the default display value of an element
function css_defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {
			// Use the already-created iframe if possible
			iframe = ( iframe ||
				jQuery("<iframe frameborder='0' width='0' height='0'/>")
				.css( "cssText", "display:block !important" )
			).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = ( iframe[0].contentWindow || iframe[0].contentDocument ).document;
			doc.write("<!doctype html><html><body>");
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}

// Called ONLY from within css_defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
		display = jQuery.css( elem[0], "display" );
	elem.remove();
	return display;
}

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {
				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return elem.offsetWidth === 0 && rdisplayswap.test( jQuery.css( elem, "display" ) ) ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

if ( !jQuery.support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {
			// IE uses filters for opacity
			return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
				( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
				computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
			// if value === "", then remove inline opacity #12685
			if ( ( value >= 1 || value === "" ) &&
					jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
					style.removeAttribute ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there is no filter style applied in a css rule or unset inline opacity, we are done
				if ( value === "" || currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

// These hooks cannot be added until DOM ready because the support test
// for it is not run until after DOM ready
jQuery(function() {
	if ( !jQuery.support.reliableMarginRight ) {
		jQuery.cssHooks.marginRight = {
			get: function( elem, computed ) {
				if ( computed ) {
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					// Work around by temporarily setting element display to inline-block
					return jQuery.swap( elem, { "display": "inline-block" },
						curCSS, [ elem, "marginRight" ] );
				}
			}
		};
	}

	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// getComputedStyle returns percent when specified for top/left/bottom/right
	// rather than make the css module depend on the offset module, we just check for it here
	if ( !jQuery.support.pixelPosition && jQuery.fn.position ) {
		jQuery.each( [ "top", "left" ], function( i, prop ) {
			jQuery.cssHooks[ prop ] = {
				get: function( elem, computed ) {
					if ( computed ) {
						computed = curCSS( elem, prop );
						// if curCSS returns percentage, fallback to offset
						return rnumnonpx.test( computed ) ?
							jQuery( elem ).position()[ prop ] + "px" :
							computed;
					}
				}
			};
		});
	}

});

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.hidden = function( elem ) {
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
			(!jQuery.support.reliableHiddenOffsets && ((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
	};

	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};
}

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});
var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function(){
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function(){
			var type = this.type;
			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !manipulation_rcheckableType.test( type ) );
		})
		.map(function( i, elem ){
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ){
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});

//Serialize an array of form elements or a set of
//key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}
jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});
var
	// Document location
	ajaxLocParts,
	ajaxLocation,
	ajax_nonce = jQuery.now(),

	ajax_rquery = /\?/,
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,

	// Keep a copy of the old load method
	_load = jQuery.fn.load,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*");

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
	ajaxLocation = location.href;
} catch( e ) {
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( core_rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var deep, key,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, response, type,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = url.slice( off, url.length );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};

// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ){
	jQuery.fn[ type ] = function( fn ){
		return this.on( type, fn );
	};
});

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var // Cross-domain detection vars
			parts,
			// Loop variable
			i,
			// URL without anti-cache param
			cacheURL,
			// Response headers as string
			responseHeadersString,
			// timeout handle
			timeoutTimer,

			// To know if global events are to be dispatched
			fireGlobals,

			transport,
			// Response headers
			responseHeaders,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( core_rnotwhite ) || [""];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		fireGlobals = s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + ajax_nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ajax_nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
	var firstDataType, ct, finalDataType, type,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}
// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function(s) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || jQuery("head")[0] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement("script");

				script.async = true;

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( script.parentNode ) {
							script.parentNode.removeChild( script );
						}

						// Dereference the script
						script = null;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};

				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
				// Use native DOM manipulation to avoid our domManip AJAX trickery
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( undefined, true );
				}
			}
		};
	}
});
var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( ajax_nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( ajax_rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});
var xhrCallbacks, xhrSupported,
	xhrId = 0,
	// #5280: Internet Explorer will keep connections alive if we don't abort on unload
	xhrOnUnloadAbort = window.ActiveXObject && function() {
		// Abort all pending requests
		var key;
		for ( key in xhrCallbacks ) {
			xhrCallbacks[ key ]( undefined, true );
		}
	};

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject("Microsoft.XMLHTTP");
	} catch( e ) {}
}

// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject ?
	/* Microsoft failed to properly
	 * implement the XMLHttpRequest in IE7 (can't request local files),
	 * so we use the ActiveXObject when it is available
	 * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
	 * we need a fallback.
	 */
	function() {
		return !this.isLocal && createStandardXHR() || createActiveXHR();
	} :
	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

// Determine support properties
xhrSupported = jQuery.ajaxSettings.xhr();
jQuery.support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = jQuery.support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) {

	jQuery.ajaxTransport(function( s ) {
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !s.crossDomain || jQuery.support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {

					// Get a new xhr
					var handle, i,
						xhr = s.xhr();

					// Open the socket
					// Passing null username, generates a login popup on Opera (#2865)
					if ( s.username ) {
						xhr.open( s.type, s.url, s.async, s.username, s.password );
					} else {
						xhr.open( s.type, s.url, s.async );
					}

					// Apply custom fields if provided
					if ( s.xhrFields ) {
						for ( i in s.xhrFields ) {
							xhr[ i ] = s.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( s.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( s.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !s.crossDomain && !headers["X-Requested-With"] ) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Need an extra try/catch for cross domain requests in Firefox 3
					try {
						for ( i in headers ) {
							xhr.setRequestHeader( i, headers[ i ] );
						}
					} catch( err ) {}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( s.hasContent && s.data ) || null );

					// Listener
					callback = function( _, isAbort ) {
						var status, responseHeaders, statusText, responses;

						// Firefox throws exceptions when accessing properties
						// of an xhr when a network error occurred
						// http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
						try {

							// Was never called and is aborted or complete
							if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

								// Only called once
								callback = undefined;

								// Do not keep as active anymore
								if ( handle ) {
									xhr.onreadystatechange = jQuery.noop;
									if ( xhrOnUnloadAbort ) {
										delete xhrCallbacks[ handle ];
									}
								}

								// If it's an abort
								if ( isAbort ) {
									// Abort it manually if needed
									if ( xhr.readyState !== 4 ) {
										xhr.abort();
									}
								} else {
									responses = {};
									status = xhr.status;
									responseHeaders = xhr.getAllResponseHeaders();

									// When requesting binary data, IE6-9 will throw an exception
									// on any attempt to access responseText (#11426)
									if ( typeof xhr.responseText === "string" ) {
										responses.text = xhr.responseText;
									}

									// Firefox throws an exception when accessing
									// statusText for faulty cross-domain requests
									try {
										statusText = xhr.statusText;
									} catch( e ) {
										// We normalize with Webkit giving an empty statusText
										statusText = "";
									}

									// Filter status for non standard behaviors

									// If the request is local and we have data: assume a success
									// (success with no data won't get notified, that's the best we
									// can do given current implementations)
									if ( !status && s.isLocal && !s.crossDomain ) {
										status = responses.text ? 200 : 404;
									// IE - #1450: sometimes returns 1223 when it should be 204
									} else if ( status === 1223 ) {
										status = 204;
									}
								}
							}
						} catch( firefoxAccessException ) {
							if ( !isAbort ) {
								complete( -1, firefoxAccessException );
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, responseHeaders );
						}
					};

					if ( !s.async ) {
						// if we're in sync mode we fire the callback
						callback();
					} else if ( xhr.readyState === 4 ) {
						// (IE6 & IE7) if it's in cache and has been
						// retrieved directly we need to fire the callback
						setTimeout( callback );
					} else {
						handle = ++xhrId;
						if ( xhrOnUnloadAbort ) {
							// Create the active xhrs callbacks list if needed
							// and attach the unload handler
							if ( !xhrCallbacks ) {
								xhrCallbacks = {};
								jQuery( window ).unload( xhrOnUnloadAbort );
							}
							// Add to list of active xhrs callbacks
							xhrCallbacks[ handle ] = callback;
						}
						xhr.onreadystatechange = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback( undefined, true );
					}
				}
			};
		}
	});
}
var fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*
					// Use a string for doubling factor so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur()
				// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}

			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}

			return tween;
		}]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// we're done with this property
			return tween;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

jQuery.Animation = jQuery.extend( Animation, {

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = jQuery._data( elem, "fxshow" );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE does not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		if ( jQuery.css( elem, "display" ) === "inline" &&
				jQuery.css( elem, "float" ) === "none" ) {

			// inline-level elements accept inline-block;
			// block-level elements need to be inline with layout
			if ( !jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay( elem.nodeName ) === "inline" ) {
				style.display = "inline-block";

			} else {
				style.zoom = 1;
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		if ( !jQuery.support.shrinkWrapBlocks ) {
			anim.always(function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			});
		}
	}


	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {
				continue;
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = jQuery._data( elem, "fxshow", {} );
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;
			jQuery._removeData( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}
	}
}

function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9
// Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || jQuery._data( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = jQuery._data( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = jQuery._data( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		});
	}
});

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth? 1 : 0;
	for( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p*Math.PI ) / 2;
	}
};

jQuery.timers = [];
jQuery.fx = Tween.prototype.init;
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	if ( timer() && jQuery.timers.push( timer ) ) {
		jQuery.fx.start();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};

// Back Compat <1.8 extension point
jQuery.fx.step = {};

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};
}
jQuery.fn.offset = function( options ) {
	if ( arguments.length ) {
		return options === undefined ?
			this :
			this.each(function( i ) {
				jQuery.offset.setOffset( this, options, i );
			});
	}

	var docElem, win,
		box = { top: 0, left: 0 },
		elem = this[ 0 ],
		doc = elem && elem.ownerDocument;

	if ( !doc ) {
		return;
	}

	docElem = doc.documentElement;

	// Make sure it's not a disconnected DOM node
	if ( !jQuery.contains( docElem, elem ) ) {
		return box;
	}

	// If we don't have gBCR, just use 0,0 rather than error
	// BlackBerry 5, iOS 3 (original iPhone)
	if ( typeof elem.getBoundingClientRect !== core_strundefined ) {
		box = elem.getBoundingClientRect();
	}
	win = getWindow( doc );
	return {
		top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
		left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
	};
};

jQuery.offset = {

	setOffset: function( elem, options, i ) {
		var position = jQuery.css( elem, "position" );

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		var curElem = jQuery( elem ),
			curOffset = curElem.offset(),
			curCSSTop = jQuery.css( elem, "top" ),
			curCSSLeft = jQuery.css( elem, "left" ),
			calculatePosition = ( position === "absolute" || position === "fixed" ) && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
			props = {}, curPosition = {}, curTop, curLeft;

		// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};


jQuery.fn.extend({

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			parentOffset = { top: 0, left: 0 },
			elem = this[ 0 ];

		// fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// we assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();
		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		return {
			top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true)
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;
			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position") === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || docElem;
		});
	}
});


// Create scrollLeft and scrollTop methods
jQuery.each( {scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function( method, prop ) {
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) {
		return jQuery.access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? (prop in win) ? win[ prop ] :
					win.document.documentElement[ method ] :
					elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					top ? val : jQuery( win ).scrollTop()
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return jQuery.access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
					// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});
// Limit scope pollution from any deprecated API
// (function() {

// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;

// })();
if ( typeof module === "object" && module && typeof module.exports === "object" ) {
	// Expose jQuery as module.exports in loaders that implement the Node
	// module pattern (including browserify). Do not create the global, since
	// the user will be storing it themselves locally, and globals are frowned
	// upon in the Node module world.
	module.exports = jQuery;
} else {
	// Otherwise expose jQuery to the global object as usual
	window.jQuery = window.$ = jQuery;

	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	if ( typeof define === "function" && define.amd ) {
		define( "jquery", [], function () { return jQuery; } );
	}
}

})( window );

//     Backbone.js 1.1.2

//     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(root, factory) {

  // Set up Backbone appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define(['underscore', 'jquery', 'exports'], function(_, $, exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.Backbone = factory(root, exports, _, $);
    });

  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
    var _ = require('underscore');
    factory(root, exports, _);

  // Finally, as a browser global.
  } else {
    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
  }

}(this, function(root, Backbone, _, $) {

  // Initial Setup
  // -------------

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create local references to array methods we'll want to use later.
  var array = [];
  var push = array.push;
  var slice = array.slice;
  var splice = array.splice;

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.1.2';

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = $;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // custom events. You may bind with `on` or remove with `off` callback
  // functions to an event; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {

    // Bind an event to a `callback` function. Passing `"all"` will bind
    // the callback to all events fired.
    on: function(name, callback, context) {
      if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
      this._events || (this._events = {});
      var events = this._events[name] || (this._events[name] = []);
      events.push({callback: callback, context: context, ctx: context || this});
      return this;
    },

    // Bind an event to only be triggered a single time. After the first time
    // the callback is invoked, it will be removed.
    once: function(name, callback, context) {
      if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
      var self = this;
      var once = _.once(function() {
        self.off(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
      return this.on(name, once, context);
    },

    // Remove one or many callbacks. If `context` is null, removes all
    // callbacks with that function. If `callback` is null, removes all
    // callbacks for the event. If `name` is null, removes all bound
    // callbacks for all events.
    off: function(name, callback, context) {
      var retain, ev, events, names, i, l, j, k;
      if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
      if (!name && !callback && !context) {
        this._events = void 0;
        return this;
      }
      names = name ? [name] : _.keys(this._events);
      for (i = 0, l = names.length; i < l; i++) {
        name = names[i];
        if (events = this._events[name]) {
          this._events[name] = retain = [];
          if (callback || context) {
            for (j = 0, k = events.length; j < k; j++) {
              ev = events[j];
              if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
                  (context && context !== ev.context)) {
                retain.push(ev);
              }
            }
          }
          if (!retain.length) delete this._events[name];
        }
      }

      return this;
    },

    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    trigger: function(name) {
      if (!this._events) return this;
      var args = slice.call(arguments, 1);
      if (!eventsApi(this, 'trigger', name, args)) return this;
      var events = this._events[name];
      var allEvents = this._events.all;
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, arguments);
      return this;
    },

    // Tell this object to stop listening to either specific events ... or
    // to every object it's currently listening to.
    stopListening: function(obj, name, callback) {
      var listeningTo = this._listeningTo;
      if (!listeningTo) return this;
      var remove = !name && !callback;
      if (!callback && typeof name === 'object') callback = this;
      if (obj) (listeningTo = {})[obj._listenId] = obj;
      for (var id in listeningTo) {
        obj = listeningTo[id];
        obj.off(name, callback, this);
        if (remove || _.isEmpty(obj._events)) delete this._listeningTo[id];
      }
      return this;
    }

  };

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Implement fancy features of the Events API such as multiple event
  // names `"change blur"` and jQuery-style event maps `{change: action}`
  // in terms of the existing API.
  var eventsApi = function(obj, action, name, rest) {
    if (!name) return true;

    // Handle event maps.
    if (typeof name === 'object') {
      for (var key in name) {
        obj[action].apply(obj, [key, name[key]].concat(rest));
      }
      return false;
    }

    // Handle space separated event names.
    if (eventSplitter.test(name)) {
      var names = name.split(eventSplitter);
      for (var i = 0, l = names.length; i < l; i++) {
        obj[action].apply(obj, [names[i]].concat(rest));
      }
      return false;
    }

    return true;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
    }
  };

  var listenMethods = {listenTo: 'on', listenToOnce: 'once'};

  // Inversion-of-control versions of `on` and `once`. Tell *this* object to
  // listen to an event in another object ... keeping track of what it's
  // listening to.
  _.each(listenMethods, function(implementation, method) {
    Events[method] = function(obj, name, callback) {
      var listeningTo = this._listeningTo || (this._listeningTo = {});
      var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
      listeningTo[id] = obj;
      if (!callback && typeof name === 'object') callback = this;
      obj[implementation](name, callback, this);
      return this;
    };
  });

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId('c');
    this.attributes = {};
    if (options.collection) this.collection = options.collection;
    if (options.parse) attrs = this.parse(attrs, options) || {};
    attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function(key, val, options) {
      var attr, attrs, unset, changes, silent, changing, prev, current;
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      unset           = options.unset;
      silent          = options.silent;
      changes         = [];
      changing        = this._changing;
      this._changing  = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }
      current = this.attributes, prev = this._previousAttributes;

      // Check for changes of `id`.
      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

      // For each `set` attribute, update or delete the current value.
      for (attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          this.changed[attr] = val;
        } else {
          delete this.changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = options;
        for (var i = 0, l = changes.length; i < l; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          options = this._pending;
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var val, changed = false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      for (var attr in diff) {
        if (_.isEqual(old[attr], (val = diff[attr]))) continue;
        (changed || (changed = {}))[attr] = val;
      }
      return changed;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server. If the server's representation of the
    // model differs from its current attributes, they will be overridden,
    // triggering a `"change"` event.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        if (!model.set(model.parse(resp, options), options)) return false;
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      var attrs, method, xhr, attributes = this.attributes;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options = _.extend({validate: true}, options);

      // If we're not waiting and attributes exist, save acts as
      // `set(attr).save(null, opts)` with validation. Otherwise, check if
      // the model will be valid when the attributes, if any, are set.
      if (attrs && !options.wait) {
        if (!this.set(attrs, options)) return false;
      } else {
        if (!this._validate(attrs, options)) return false;
      }

      // Set temporary attributes if `{wait: true}`.
      if (attrs && options.wait) {
        this.attributes = _.extend({}, attributes, attrs);
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = model.parse(resp, options);
        if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
        if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
          return false;
        }
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch') options.attrs = attrs;
      xhr = this.sync(method, this, options);

      // Restore attributes.
      if (attrs && options.wait) this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;

      var destroy = function() {
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(resp) {
        if (options.wait || model.isNew()) destroy();
        if (success) success(model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      if (this.isNew()) {
        options.success();
        return false;
      }
      wrapError(this, options);

      var xhr = this.sync('delete', this, options);
      if (!options.wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base =
        _.result(this, 'urlRoot') ||
        _.result(this.collection, 'url') ||
        urlError();
      if (this.isNew()) return base;
      return base.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return !this.has(this.idAttribute);
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return this._validate({}, _.extend(options || {}, { validate: true }));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
      return false;
    }

  });

  // Underscore methods that we want to implement on the Model.
  var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];

  // Mix in each Underscore method as a proxy to `Model#attributes`.
  _.each(modelMethods, function(method) {
    Model.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.attributes);
      return _[method].apply(_, args);
    };
  });

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analagous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Default options for `Collection#set`.
  var setOptions = {add: true, remove: true, merge: true};
  var addOptions = {add: true, remove: false};

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model){ return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set.
    add: function(models, options) {
      return this.set(models, _.extend({merge: false}, options, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      var singular = !_.isArray(models);
      models = singular ? [models] : _.clone(models);
      options || (options = {});
      var i, l, index, model;
      for (i = 0, l = models.length; i < l; i++) {
        model = models[i] = this.get(models[i]);
        if (!model) continue;
        delete this._byId[model.id];
        delete this._byId[model.cid];
        index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;
        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }
        this._removeReference(model, options);
      }
      return singular ? models[0] : models;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function(models, options) {
      options = _.defaults({}, options, setOptions);
      if (options.parse) models = this.parse(models, options);
      var singular = !_.isArray(models);
      models = singular ? (models ? [models] : []) : _.clone(models);
      var i, l, id, model, attrs, existing, sort;
      var at = options.at;
      var targetModel = this.model;
      var sortable = this.comparator && (at == null) && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;
      var toAdd = [], toRemove = [], modelMap = {};
      var add = options.add, merge = options.merge, remove = options.remove;
      var order = !sortable && add && remove ? [] : false;

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      for (i = 0, l = models.length; i < l; i++) {
        attrs = models[i] || {};
        if (attrs instanceof Model) {
          id = model = attrs;
        } else {
          id = attrs[targetModel.prototype.idAttribute || 'id'];
        }

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        if (existing = this.get(id)) {
          if (remove) modelMap[existing.cid] = true;
          if (merge) {
            attrs = attrs === model ? model.attributes : attrs;
            if (options.parse) attrs = existing.parse(attrs, options);
            existing.set(attrs, options);
            if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
          }
          models[i] = existing;

        // If this is a new, valid model, push it to the `toAdd` list.
        } else if (add) {
          model = models[i] = this._prepareModel(attrs, options);
          if (!model) continue;
          toAdd.push(model);
          this._addReference(model, options);
        }

        // Do not add multiple models with the same `id`.
        model = existing || model;
        if (order && (model.isNew() || !modelMap[model.id])) order.push(model);
        modelMap[model.id] = true;
      }

      // Remove nonexistent models if appropriate.
      if (remove) {
        for (i = 0, l = this.length; i < l; ++i) {
          if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
        }
        if (toRemove.length) this.remove(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      if (toAdd.length || (order && order.length)) {
        if (sortable) sort = true;
        this.length += toAdd.length;
        if (at != null) {
          for (i = 0, l = toAdd.length; i < l; i++) {
            this.models.splice(at + i, 0, toAdd[i]);
          }
        } else {
          if (order) this.models.length = 0;
          var orderedModels = order || toAdd;
          for (i = 0, l = orderedModels.length; i < l; i++) {
            this.models.push(orderedModels[i]);
          }
        }
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({silent: true});

      // Unless silenced, it's time to fire all appropriate add/sort events.
      if (!options.silent) {
        for (i = 0, l = toAdd.length; i < l; i++) {
          (model = toAdd[i]).trigger('add', model, this, options);
        }
        if (sort || (order && order.length)) this.trigger('sort', this, options);
      }

      // Return the added (or merged) model (or models).
      return singular ? models[0] : models;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function(models, options) {
      options || (options = {});
      for (var i = 0, l = this.models.length; i < l; i++) {
        this._removeReference(this.models[i], options);
      }
      options.previousModels = this.models;
      this._reset();
      models = this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return models;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      return this.add(model, _.extend({at: this.length}, options));
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      this.remove(model, options);
      return model;
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      return this.add(model, _.extend({at: 0}, options));
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      this.remove(model, options);
      return model;
    },

    // Slice out a sub-array of models from the collection.
    slice: function() {
      return slice.apply(this.models, arguments);
    },

    // Get a model from the set by id.
    get: function(obj) {
      if (obj == null) return void 0;
      return this._byId[obj] || this._byId[obj.id] || this._byId[obj.cid];
    },

    // Get the model at the given index.
    at: function(index) {
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function(attrs, first) {
      if (_.isEmpty(attrs)) return first ? void 0 : [];
      return this[first ? 'find' : 'filter'](function(model) {
        for (var key in attrs) {
          if (attrs[key] !== model.get(key)) return false;
        }
        return true;
      });
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function(attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      // Run sort based on type of `comparator`.
      if (_.isString(this.comparator) || this.comparator.length === 1) {
        this.models = this.sortBy(this.comparator, this);
      } else {
        this.models.sort(_.bind(this.comparator, this));
      }

      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return _.invoke(this.models, 'get', attr);
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success(collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      if (!(model = this._prepareModel(model, options))) return false;
      if (!options.wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(model, resp) {
        if (options.wait) collection.add(model, options);
        if (success) success(model, resp, options);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models);
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId  = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function(attrs, options) {
      if (attrs instanceof Model) return attrs;
      options = options ? _.clone(options) : {};
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model.validationError) return model;
      this.trigger('invalid', this, model.validationError, options);
      return false;
    },

    // Internal method to create a model's ties to a collection.
    _addReference: function(model, options) {
      this._byId[model.cid] = model;
      if (model.id != null) this._byId[model.id] = model;
      if (!model.collection) model.collection = this;
      model.on('all', this._onModelEvent, this);
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function(model, options) {
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if ((event === 'add' || event === 'remove') && collection !== this) return;
      if (event === 'destroy') this.remove(model, options);
      if (model && event === 'change:' + model.idAttribute) {
        delete this._byId[model.previous(model.idAttribute)];
        if (model.id != null) this._byId[model.id] = model;
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
    'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
    'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
    'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
    'tail', 'drop', 'last', 'without', 'difference', 'indexOf', 'shuffle',
    'lastIndexOf', 'isEmpty', 'chain', 'sample'];

  // Mix in each Underscore method as a proxy to `Collection#models`.
  _.each(methods, function(method) {
    Collection.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.models);
      return _[method].apply(_, args);
    };
  });

  // Underscore methods that take a property name as an argument.
  var attributeMethods = ['groupBy', 'countBy', 'sortBy', 'indexBy'];

  // Use attributes instead of properties.
  _.each(attributeMethods, function(method) {
    Collection.prototype[method] = function(value, context) {
      var iterator = _.isFunction(value) ? value : function(model) {
        return model.get(value);
      };
      return _[method](this.models, iterator, context);
    };
  });

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    options || (options = {});
    _.extend(this, _.pick(options, viewOptions));
    this._ensureElement();
    this.initialize.apply(this, arguments);
    this.delegateEvents();
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be merged as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be preferred to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this.$el.remove();
      this.stopListening();
      return this;
    },

    // Change the view's element (`this.el` property), including event
    // re-delegation.
    setElement: function(element, delegate) {
      if (this.$el) this.undelegateEvents();
      this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
      this.el = this.$el[0];
      if (delegate !== false) this.delegateEvents();
      return this;
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save',
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    // This only works for delegate-able events: not `focus`, `blur`, and
    // not `change`, `submit`, and `reset` in Internet Explorer.
    delegateEvents: function(events) {
      if (!(events || (events = _.result(this, 'events')))) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[events[key]];
        if (!method) continue;

        var match = key.match(delegateEventSplitter);
        var eventName = match[1], selector = match[2];
        method = _.bind(method, this);
        eventName += '.delegateEvents' + this.cid;
        if (selector === '') {
          this.$el.on(eventName, method);
        } else {
          this.$el.on(eventName, selector, method);
        }
      }
      return this;
    },

    // Clears all callbacks previously bound to the view with `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
        this.setElement($el, false);
      } else {
        this.setElement(_.result(this, 'el'), false);
      }
    }

  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // If we're sending a `PATCH` request, and we're in an old Internet Explorer
    // that still has ActiveX enabled by default, override jQuery to use that
    // for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.
    if (params.type === 'PATCH' && noXhrPatch) {
      params.xhr = function() {
        return new ActiveXObject("Microsoft.XMLHTTP");
      };
    }

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  var noXhrPatch =
    typeof window !== 'undefined' && !!window.ActiveXObject &&
      !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch':  'PATCH',
    'delete': 'DELETE',
    'read':   'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        router.execute(callback, args);
        router.trigger.apply(router, ['route:' + name].concat(args));
        router.trigger('route', name, args);
        Backbone.history.trigger('route', router, name, args);
      });
      return this;
    },

    // Execute a route handler with the provided parameters.  This is an
    // excellent place to do pre-route setup or post-route cleanup.
    execute: function(callback, args) {
      if (callback) callback.apply(this, args);
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(optionalParam, '(?:$1)?')
                   .replace(namedParam, function(match, optional) {
                     return optional ? match : '([^/?]+)';
                   })
                   .replace(splatParam, '([^?]*?)');
      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param, i) {
        // Don't decode the search params.
        if (i === params.length - 1) return param || null;
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    _.bindAll(this, 'checkUrl');

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for detecting MSIE.
  var isExplorer = /msie [\w.]+/;

  // Cached regex for removing a trailing slash.
  var trailingSlash = /\/$/;

  // Cached regex for stripping urls of hash.
  var pathStripper = /#.*$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Are we at the app root?
    atRoot: function() {
      return this.location.pathname.replace(/[^\/]$/, '$&/') === this.root;
    },

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the cross-browser normalized URL fragment, either from the URL,
    // the hash, or the override.
    getFragment: function(fragment, forcePushState) {
      if (fragment == null) {
        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
          fragment = decodeURI(this.location.pathname + this.location.search);
          var root = this.root.replace(trailingSlash, '');
          if (!fragment.indexOf(root)) fragment = fragment.slice(root.length);
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error("Backbone.history has already been started");
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);
      var fragment          = this.getFragment();
      var docMode           = document.documentMode;
      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      if (oldIE && this._wantsHashChange) {
        var frame = Backbone.$('<iframe src="javascript:0" tabindex="-1">');
        this.iframe = frame.hide().appendTo('body')[0].contentWindow;
        this.navigate(fragment);
      }

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._hasPushState) {
        Backbone.$(window).on('popstate', this.checkUrl);
      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
        Backbone.$(window).on('hashchange', this.checkUrl);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      // Determine if we need to change the base url, for a pushState link
      // opened by a non-pushState browser.
      this.fragment = fragment;
      var loc = this.location;

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !this.atRoot()) {
          this.fragment = this.getFragment(null, true);
          this.location.replace(this.root + '#' + this.fragment);
          // Return immediately as browser will do redirect to new url
          return true;

        // Or if we've started out with a hash-based route, but we're currently
        // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && this.atRoot() && loc.hash) {
          this.fragment = this.getHash().replace(routeStripper, '');
          this.history.replaceState({}, document.title, this.root + this.fragment);
        }

      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();
      if (current === this.fragment && this.iframe) {
        current = this.getFragment(this.getHash(this.iframe));
      }
      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragment) {
      fragment = this.fragment = this.getFragment(fragment);
      return _.any(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: !!options};

      var url = this.root + (fragment = this.getFragment(fragment || ''));

      // Strip the hash for matching.
      fragment = fragment.replace(pathStripper, '');

      if (this.fragment === fragment) return;
      this.fragment = fragment;

      // Don't include a trailing slash on the root.
      if (fragment === '' && url !== '/') url = url.slice(0, -1);

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._hasPushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if(!options.replace) this.iframe.document.open().close();
          this._updateHash(this.iframe.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain, for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function(model, options) {
    var error = options.error;
    options.error = function(resp) {
      if (error) error(model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

  return Backbone;

}));

/*!
 * VERSION: 1.11.8
 * DATE: 2014-05-13
 * UPDATES AND DOCS AT: http://www.greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/

(window._gsQueue || (window._gsQueue = [])).push( function() {

	"use strict";

	window._gsDefine("TweenMax", ["core.Animation","core.SimpleTimeline","TweenLite"], function(Animation, SimpleTimeline, TweenLite) {
		
		var _slice = [].slice,
			TweenMax = function(target, duration, vars) {
				TweenLite.call(this, target, duration, vars);
				this._cycle = 0;
				this._yoyo = (this.vars.yoyo === true);
				this._repeat = this.vars.repeat || 0;
				this._repeatDelay = this.vars.repeatDelay || 0;
				this._dirty = true; //ensures that if there is any repeat, the totalDuration will get recalculated to accurately report it.
				this.render = TweenMax.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)
			},
			_tinyNum = 0.0000000001,
			_isSelector = TweenLite._internals.isSelector,
			_isArray = TweenLite._internals.isArray,
			p = TweenMax.prototype = TweenLite.to({}, 0.1, {}),
			_blankArray = [];

		TweenMax.version = "1.11.8";
		p.constructor = TweenMax;
		p.kill()._gc = false;
		TweenMax.killTweensOf = TweenMax.killDelayedCallsTo = TweenLite.killTweensOf;
		TweenMax.getTweensOf = TweenLite.getTweensOf;
		TweenMax.ticker = TweenLite.ticker;
	
		p.invalidate = function() {
			this._yoyo = (this.vars.yoyo === true);
			this._repeat = this.vars.repeat || 0;
			this._repeatDelay = this.vars.repeatDelay || 0;
			this._uncache(true);
			return TweenLite.prototype.invalidate.call(this);
		};
		
		p.updateTo = function(vars, resetDuration) {
			var curRatio = this.ratio, p;
			if (resetDuration && this._startTime < this._timeline._time) {
				this._startTime = this._timeline._time;
				this._uncache(false);
				if (this._gc) {
					this._enabled(true, false);
				} else {
					this._timeline.insert(this, this._startTime - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
				}
			}
			for (p in vars) {
				this.vars[p] = vars[p];
			}
			if (this._initted) {
				if (resetDuration) {
					this._initted = false;
				} else {
					if (this._gc) {
						this._enabled(true, false);
					}
					if (this._notifyPluginsOfEnabled && this._firstPT) {
						TweenLite._onPluginEvent("_onDisable", this); //in case a plugin like MotionBlur must perform some cleanup tasks
					}
					if (this._time / this._duration > 0.998) { //if the tween has finished (or come extremely close to finishing), we just need to rewind it to 0 and then render it again at the end which forces it to re-initialize (parsing the new vars). We allow tweens that are close to finishing (but haven't quite finished) to work this way too because otherwise, the values are so small when determining where to project the starting values that binary math issues creep in and can make the tween appear to render incorrectly when run backwards. 
						var prevTime = this._time;
						this.render(0, true, false);
						this._initted = false;
						this.render(prevTime, true, false);
					} else if (this._time > 0) {
						this._initted = false;
						this._init();
						var inv = 1 / (1 - curRatio),
							pt = this._firstPT, endValue;
						while (pt) {
							endValue = pt.s + pt.c; 
							pt.c *= inv;
							pt.s = endValue - pt.c;
							pt = pt._next;
						}
					}
				}
			}
			return this;
		};
				
		p.render = function(time, suppressEvents, force) {
			if (!this._initted) if (this._duration === 0 && this.vars.repeat) { //zero duration tweens that render immediately have render() called from TweenLite's constructor, before TweenMax's constructor has finished setting _repeat, _repeatDelay, and _yoyo which are critical in determining totalDuration() so we need to call invalidate() which is a low-kb way to get those set properly.
				this.invalidate();
			}
			var totalDur = (!this._dirty) ? this._totalDuration : this.totalDuration(),
				prevTime = this._time,
				prevTotalTime = this._totalTime, 
				prevCycle = this._cycle,
				duration = this._duration,
				isComplete, callback, pt, cycleDuration, r, type, pow, rawPrevTime;
			if (time >= totalDur) {
				this._totalTime = totalDur;
				this._cycle = this._repeat;
				if (this._yoyo && (this._cycle & 1) !== 0) {
					this._time = 0;
					this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
				} else {
					this._time = duration;
					this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
				}
				if (!this._reversed) {
					isComplete = true;
					callback = "onComplete";
				}
				if (duration === 0) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
					rawPrevTime = this._rawPrevTime;
					if (this._startTime === this._timeline._duration) { //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
						time = 0;
					}
					if (time === 0 || rawPrevTime < 0 || rawPrevTime === _tinyNum) if (rawPrevTime !== time) {
						force = true;
						if (rawPrevTime > _tinyNum) {
							callback = "onReverseComplete";
						}
					}
					this._rawPrevTime = rawPrevTime = (!suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				}
				
			} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
				this._totalTime = this._time = this._cycle = 0;
				this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
				if (prevTotalTime !== 0 || (duration === 0 && this._rawPrevTime > 0 && this._rawPrevTime !== _tinyNum)) {
					callback = "onReverseComplete";
					isComplete = this._reversed;
				}
				if (time < 0) {
					this._active = false;
					if (duration === 0) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
						if (this._rawPrevTime >= 0) {
							force = true;
						}
						this._rawPrevTime = rawPrevTime = (!suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					}
				} else if (!this._initted) { //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
					force = true;
				}
			} else {
				this._totalTime = this._time = time;
				
				if (this._repeat !== 0) {
					cycleDuration = duration + this._repeatDelay;
					this._cycle = (this._totalTime / cycleDuration) >> 0; //originally _totalTime % cycleDuration but floating point errors caused problems, so I normalized it. (4 % 0.8 should be 0 but Flash reports it as 0.79999999!)
					if (this._cycle !== 0) if (this._cycle === this._totalTime / cycleDuration) {
						this._cycle--; //otherwise when rendered exactly at the end time, it will act as though it is repeating (at the beginning)
					}
					this._time = this._totalTime - (this._cycle * cycleDuration);
					if (this._yoyo) if ((this._cycle & 1) !== 0) {
						this._time = duration - this._time;
					}
					if (this._time > duration) {
						this._time = duration;
					} else if (this._time < 0) {
						this._time = 0;
					}
				}
				
				if (this._easeType) {
					r = this._time / duration;
					type = this._easeType;
					pow = this._easePower;
					if (type === 1 || (type === 3 && r >= 0.5)) {
						r = 1 - r;
					}
					if (type === 3) {
						r *= 2;
					}
					if (pow === 1) {
						r *= r;
					} else if (pow === 2) {
						r *= r * r;
					} else if (pow === 3) {
						r *= r * r * r;
					} else if (pow === 4) {
						r *= r * r * r * r;
					}
					
					if (type === 1) {
						this.ratio = 1 - r;
					} else if (type === 2) {
						this.ratio = r;
					} else if (this._time / duration < 0.5) {
						this.ratio = r / 2;
					} else {
						this.ratio = 1 - (r / 2);
					}
					
				} else {
					this.ratio = this._ease.getRatio(this._time / duration);
				}
				
			}
				
			if (prevTime === this._time && !force && prevCycle === this._cycle) {
				if (prevTotalTime !== this._totalTime) if (this._onUpdate) if (!suppressEvents) { //so that onUpdate fires even during the repeatDelay - as long as the totalTime changed, we should trigger onUpdate.
					this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _blankArray);
				}
				return;
			} else if (!this._initted) {
				this._init();
				if (!this._initted || this._gc) { //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
					return;
				}
				//_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
				if (this._time && !isComplete) {
					this.ratio = this._ease.getRatio(this._time / duration);
				} else if (isComplete && this._ease._calcEnd) {
					this.ratio = this._ease.getRatio((this._time === 0) ? 0 : 1);
				}
			}
			
			if (!this._active) if (!this._paused && this._time !== prevTime && time >= 0) {
				this._active = true; //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
			}
			if (prevTotalTime === 0) {
				if (this._startAt) {
					if (time >= 0) {
						this._startAt.render(time, suppressEvents, force);
					} else if (!callback) {
						callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
					}
				}
				if (this.vars.onStart) if (this._totalTime !== 0 || duration === 0) if (!suppressEvents) {
					this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _blankArray);
				}
			}
			
			pt = this._firstPT;
			while (pt) {
				if (pt.f) {
					pt.t[pt.p](pt.c * this.ratio + pt.s);
				} else {
					pt.t[pt.p] = pt.c * this.ratio + pt.s;
				}
				pt = pt._next;
			}
			
			if (this._onUpdate) {
				if (time < 0) if (this._startAt && this._startTime) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
					this._startAt.render(time, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
				}
				if (!suppressEvents) if (this._totalTime !== prevTotalTime || isComplete) {
					this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _blankArray);
				}
			}
			if (this._cycle !== prevCycle) if (!suppressEvents) if (!this._gc) if (this.vars.onRepeat) {
				this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || _blankArray);
			}
			if (callback) if (!this._gc) { //check gc because there's a chance that kill() could be called in an onUpdate
				if (time < 0 && this._startAt && !this._onUpdate && this._startTime) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
					this._startAt.render(time, suppressEvents, force);
				}
				if (isComplete) {
					if (this._timeline.autoRemoveChildren) {
						this._enabled(false, false);
					}
					this._active = false;
				}
				if (!suppressEvents && this.vars[callback]) {
					this.vars[callback].apply(this.vars[callback + "Scope"] || this, this.vars[callback + "Params"] || _blankArray);
				}
				if (duration === 0 && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) { //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
					this._rawPrevTime = 0;
				}
			}
		};
		
//---- STATIC FUNCTIONS -----------------------------------------------------------------------------------------------------------
		
		TweenMax.to = function(target, duration, vars) {
			return new TweenMax(target, duration, vars);
		};
		
		TweenMax.from = function(target, duration, vars) {
			vars.runBackwards = true;
			vars.immediateRender = (vars.immediateRender != false);
			return new TweenMax(target, duration, vars);
		};
		
		TweenMax.fromTo = function(target, duration, fromVars, toVars) {
			toVars.startAt = fromVars;
			toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
			return new TweenMax(target, duration, toVars);
		};
		
		TweenMax.staggerTo = TweenMax.allTo = function(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			stagger = stagger || 0;
			var delay = vars.delay || 0,
				a = [],
				finalComplete = function() {
					if (vars.onComplete) {
						vars.onComplete.apply(vars.onCompleteScope || this, arguments);
					}
					onCompleteAll.apply(onCompleteAllScope || this, onCompleteAllParams || _blankArray);
				},
				l, copy, i, p;
			if (!_isArray(targets)) {
				if (typeof(targets) === "string") {
					targets = TweenLite.selector(targets) || targets;
				}
				if (_isSelector(targets)) {
					targets = _slice.call(targets, 0);
				}
			}
			l = targets.length;
			for (i = 0; i < l; i++) {
				copy = {};
				for (p in vars) {
					copy[p] = vars[p];
				}
				copy.delay = delay;
				if (i === l - 1 && onCompleteAll) {
					copy.onComplete = finalComplete;
				}
				a[i] = new TweenMax(targets[i], duration, copy);
				delay += stagger;
			}
			return a;
		};
		
		TweenMax.staggerFrom = TweenMax.allFrom = function(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			vars.runBackwards = true;
			vars.immediateRender = (vars.immediateRender != false);
			return TweenMax.staggerTo(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
		};
		
		TweenMax.staggerFromTo = TweenMax.allFromTo = function(targets, duration, fromVars, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			toVars.startAt = fromVars;
			toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
			return TweenMax.staggerTo(targets, duration, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
		};
				
		TweenMax.delayedCall = function(delay, callback, params, scope, useFrames) {
			return new TweenMax(callback, 0, {delay:delay, onComplete:callback, onCompleteParams:params, onCompleteScope:scope, onReverseComplete:callback, onReverseCompleteParams:params, onReverseCompleteScope:scope, immediateRender:false, useFrames:useFrames, overwrite:0});
		};
		
		TweenMax.set = function(target, vars) {
			return new TweenMax(target, 0, vars);
		};
		
		TweenMax.isTweening = function(target) {
			return (TweenLite.getTweensOf(target, true).length > 0);
		};
		
		var _getChildrenOf = function(timeline, includeTimelines) {
				var a = [],
					cnt = 0,
					tween = timeline._first;
				while (tween) {
					if (tween instanceof TweenLite) {
						a[cnt++] = tween;
					} else {
						if (includeTimelines) {
							a[cnt++] = tween;
						}
						a = a.concat(_getChildrenOf(tween, includeTimelines));
						cnt = a.length;
					}
					tween = tween._next;
				}
				return a;
			}, 
			getAllTweens = TweenMax.getAllTweens = function(includeTimelines) {
				return _getChildrenOf(Animation._rootTimeline, includeTimelines).concat( _getChildrenOf(Animation._rootFramesTimeline, includeTimelines) );
			};
		
		TweenMax.killAll = function(complete, tweens, delayedCalls, timelines) {
			if (tweens == null) {
				tweens = true;
			}
			if (delayedCalls == null) {
				delayedCalls = true;
			}
			var a = getAllTweens((timelines != false)),
				l = a.length,
				allTrue = (tweens && delayedCalls && timelines),
				isDC, tween, i;
			for (i = 0; i < l; i++) {
				tween = a[i];
				if (allTrue || (tween instanceof SimpleTimeline) || ((isDC = (tween.target === tween.vars.onComplete)) && delayedCalls) || (tweens && !isDC)) {
					if (complete) {
						tween.totalTime(tween.totalDuration());
					} else {
						tween._enabled(false, false);
					}
				}
			}
		};
		
		TweenMax.killChildTweensOf = function(parent, complete) {
			if (parent == null) {
				return;
			}
			var tl = TweenLite._tweenLookup,
				a, curParent, p, i, l;
			if (typeof(parent) === "string") {
				parent = TweenLite.selector(parent) || parent;
			}
			if (_isSelector(parent)) {
				parent = _slice.call(parent, 0);
			}
			if (_isArray(parent)) {
				i = parent.length;
				while (--i > -1) {
					TweenMax.killChildTweensOf(parent[i], complete);
				}
				return;
			}
			a = [];
			for (p in tl) {
				curParent = tl[p].target.parentNode;
				while (curParent) {
					if (curParent === parent) {
						a = a.concat(tl[p].tweens);
					}
					curParent = curParent.parentNode;
				}
			}
			l = a.length;
			for (i = 0; i < l; i++) {
				if (complete) {
					a[i].totalTime(a[i].totalDuration());
				}
				a[i]._enabled(false, false);
			}
		};

		var _changePause = function(pause, tweens, delayedCalls, timelines) {
			tweens = (tweens !== false);
			delayedCalls = (delayedCalls !== false);
			timelines = (timelines !== false);
			var a = getAllTweens(timelines),
				allTrue = (tweens && delayedCalls && timelines),
				i = a.length,
				isDC, tween;
			while (--i > -1) {
				tween = a[i];
				if (allTrue || (tween instanceof SimpleTimeline) || ((isDC = (tween.target === tween.vars.onComplete)) && delayedCalls) || (tweens && !isDC)) {
					tween.paused(pause);
				}
			}
		};
		
		TweenMax.pauseAll = function(tweens, delayedCalls, timelines) {
			_changePause(true, tweens, delayedCalls, timelines);
		};
		
		TweenMax.resumeAll = function(tweens, delayedCalls, timelines) {
			_changePause(false, tweens, delayedCalls, timelines);
		};

		TweenMax.globalTimeScale = function(value) {
			var tl = Animation._rootTimeline,
				t = TweenLite.ticker.time;
			if (!arguments.length) {
				return tl._timeScale;
			}
			value = value || _tinyNum; //can't allow zero because it'll throw the math off
			tl._startTime = t - ((t - tl._startTime) * tl._timeScale / value);
			tl = Animation._rootFramesTimeline;
			t = TweenLite.ticker.frame;
			tl._startTime = t - ((t - tl._startTime) * tl._timeScale / value);
			tl._timeScale = Animation._rootTimeline._timeScale = value;
			return value;
		};
		
	
//---- GETTERS / SETTERS ----------------------------------------------------------------------------------------------------------
		
		p.progress = function(value) {
			return (!arguments.length) ? this._time / this.duration() : this.totalTime( this.duration() * ((this._yoyo && (this._cycle & 1) !== 0) ? 1 - value : value) + (this._cycle * (this._duration + this._repeatDelay)), false);
		};
		
		p.totalProgress = function(value) {
			return (!arguments.length) ? this._totalTime / this.totalDuration() : this.totalTime( this.totalDuration() * value, false);
		};
		
		p.time = function(value, suppressEvents) {
			if (!arguments.length) {
				return this._time;
			}
			if (this._dirty) {
				this.totalDuration();
			}
			if (value > this._duration) {
				value = this._duration;
			}
			if (this._yoyo && (this._cycle & 1) !== 0) {
				value = (this._duration - value) + (this._cycle * (this._duration + this._repeatDelay));
			} else if (this._repeat !== 0) {
				value += this._cycle * (this._duration + this._repeatDelay);
			}
			return this.totalTime(value, suppressEvents);
		};

		p.duration = function(value) {
			if (!arguments.length) {
				return this._duration; //don't set _dirty = false because there could be repeats that haven't been factored into the _totalDuration yet. Otherwise, if you create a repeated TweenMax and then immediately check its duration(), it would cache the value and the totalDuration would not be correct, thus repeats wouldn't take effect.
			}
			return Animation.prototype.duration.call(this, value);
		};

		p.totalDuration = function(value) {
			if (!arguments.length) {
				if (this._dirty) {
					//instead of Infinity, we use 999999999999 so that we can accommodate reverses
					this._totalDuration = (this._repeat === -1) ? 999999999999 : this._duration * (this._repeat + 1) + (this._repeatDelay * this._repeat);
					this._dirty = false;
				}
				return this._totalDuration;
			}
			return (this._repeat === -1) ? this : this.duration( (value - (this._repeat * this._repeatDelay)) / (this._repeat + 1) );
		};
		
		p.repeat = function(value) {
			if (!arguments.length) {
				return this._repeat;
			}
			this._repeat = value;
			return this._uncache(true);
		};
		
		p.repeatDelay = function(value) {
			if (!arguments.length) {
				return this._repeatDelay;
			}
			this._repeatDelay = value;
			return this._uncache(true);
		};
		
		p.yoyo = function(value) {
			if (!arguments.length) {
				return this._yoyo;
			}
			this._yoyo = value;
			return this;
		};
		
		
		return TweenMax;
		
	}, true);








/*
 * ----------------------------------------------------------------
 * TimelineLite
 * ----------------------------------------------------------------
 */
	window._gsDefine("TimelineLite", ["core.Animation","core.SimpleTimeline","TweenLite"], function(Animation, SimpleTimeline, TweenLite) {

		var TimelineLite = function(vars) {
				SimpleTimeline.call(this, vars);
				this._labels = {};
				this.autoRemoveChildren = (this.vars.autoRemoveChildren === true);
				this.smoothChildTiming = (this.vars.smoothChildTiming === true);
				this._sortChildren = true;
				this._onUpdate = this.vars.onUpdate;
				var v = this.vars,
					val, p;
				for (p in v) {
					val = v[p];
					if (_isArray(val)) if (val.join("").indexOf("{self}") !== -1) {
						v[p] = this._swapSelfInParams(val);
					}
				}
				if (_isArray(v.tweens)) {
					this.add(v.tweens, 0, v.align, v.stagger);
				}
			},
			_tinyNum = 0.0000000001,
			_isSelector = TweenLite._internals.isSelector,
			_isArray = TweenLite._internals.isArray,
			_blankArray = [],
			_globals = window._gsDefine.globals,
			_copy = function(vars) {
				var copy = {}, p;
				for (p in vars) {
					copy[p] = vars[p];
				}
				return copy;
			},
			_pauseCallback = function(tween, callback, params, scope) {
				tween._timeline.pause(tween._startTime);
				if (callback) {
					callback.apply(scope || tween._timeline, params || _blankArray);
				}
			},
			_slice = _blankArray.slice,
			p = TimelineLite.prototype = new SimpleTimeline();

		TimelineLite.version = "1.11.8";
		p.constructor = TimelineLite;
		p.kill()._gc = false;

		p.to = function(target, duration, vars, position) {
			var Engine = (vars.repeat && _globals.TweenMax) || TweenLite;
			return duration ? this.add( new Engine(target, duration, vars), position) : this.set(target, vars, position);
		};

		p.from = function(target, duration, vars, position) {
			return this.add( ((vars.repeat && _globals.TweenMax) || TweenLite).from(target, duration, vars), position);
		};

		p.fromTo = function(target, duration, fromVars, toVars, position) {
			var Engine = (toVars.repeat && _globals.TweenMax) || TweenLite;
			return duration ? this.add( Engine.fromTo(target, duration, fromVars, toVars), position) : this.set(target, toVars, position);
		};

		p.staggerTo = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			var tl = new TimelineLite({onComplete:onCompleteAll, onCompleteParams:onCompleteAllParams, onCompleteScope:onCompleteAllScope, smoothChildTiming:this.smoothChildTiming}),
				i;
			if (typeof(targets) === "string") {
				targets = TweenLite.selector(targets) || targets;
			}
			if (_isSelector(targets)) { //senses if the targets object is a selector. If it is, we should translate it into an array.
				targets = _slice.call(targets, 0);
			}
			stagger = stagger || 0;
			for (i = 0; i < targets.length; i++) {
				if (vars.startAt) {
					vars.startAt = _copy(vars.startAt);
				}
				tl.to(targets[i], duration, _copy(vars), i * stagger);
			}
			return this.add(tl, position);
		};

		p.staggerFrom = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			vars.immediateRender = (vars.immediateRender != false);
			vars.runBackwards = true;
			return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
		};

		p.staggerFromTo = function(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			toVars.startAt = fromVars;
			toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
			return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
		};

		p.call = function(callback, params, scope, position) {
			return this.add( TweenLite.delayedCall(0, callback, params, scope), position);
		};

		p.set = function(target, vars, position) {
			position = this._parseTimeOrLabel(position, 0, true);
			if (vars.immediateRender == null) {
				vars.immediateRender = (position === this._time && !this._paused);
			}
			return this.add( new TweenLite(target, 0, vars), position);
		};

		TimelineLite.exportRoot = function(vars, ignoreDelayedCalls) {
			vars = vars || {};
			if (vars.smoothChildTiming == null) {
				vars.smoothChildTiming = true;
			}
			var tl = new TimelineLite(vars),
				root = tl._timeline,
				tween, next;
			if (ignoreDelayedCalls == null) {
				ignoreDelayedCalls = true;
			}
			root._remove(tl, true);
			tl._startTime = 0;
			tl._rawPrevTime = tl._time = tl._totalTime = root._time;
			tween = root._first;
			while (tween) {
				next = tween._next;
				if (!ignoreDelayedCalls || !(tween instanceof TweenLite && tween.target === tween.vars.onComplete)) {
					tl.add(tween, tween._startTime - tween._delay);
				}
				tween = next;
			}
			root.add(tl, 0);
			return tl;
		};

		p.add = function(value, position, align, stagger) {
			var curTime, l, i, child, tl, beforeRawTime;
			if (typeof(position) !== "number") {
				position = this._parseTimeOrLabel(position, 0, true, value);
			}
			if (!(value instanceof Animation)) {
				if ((value instanceof Array) || (value && value.push && _isArray(value))) {
					align = align || "normal";
					stagger = stagger || 0;
					curTime = position;
					l = value.length;
					for (i = 0; i < l; i++) {
						if (_isArray(child = value[i])) {
							child = new TimelineLite({tweens:child});
						}
						this.add(child, curTime);
						if (typeof(child) !== "string" && typeof(child) !== "function") {
							if (align === "sequence") {
								curTime = child._startTime + (child.totalDuration() / child._timeScale);
							} else if (align === "start") {
								child._startTime -= child.delay();
							}
						}
						curTime += stagger;
					}
					return this._uncache(true);
				} else if (typeof(value) === "string") {
					return this.addLabel(value, position);
				} else if (typeof(value) === "function") {
					value = TweenLite.delayedCall(0, value);
				} else {
					throw("Cannot add " + value + " into the timeline; it is not a tween, timeline, function, or string.");
				}
			}

			SimpleTimeline.prototype.add.call(this, value, position);

			//if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.
			if (this._gc || this._time === this._duration) if (!this._paused) if (this._duration < this.duration()) {
				//in case any of the ancestors had completed but should now be enabled...
				tl = this;
				beforeRawTime = (tl.rawTime() > value._startTime); //if the tween is placed on the timeline so that it starts BEFORE the current rawTime, we should align the playhead (move the timeline). This is because sometimes users will create a timeline, let it finish, and much later append a tween and expect it to run instead of jumping to its end state. While technically one could argue that it should jump to its end state, that's not what users intuitively expect.
				while (tl._timeline) {
					if (beforeRawTime && tl._timeline.smoothChildTiming) {
						tl.totalTime(tl._totalTime, true); //moves the timeline (shifts its startTime) if necessary, and also enables it.
					} else if (tl._gc) {
						tl._enabled(true, false);
					}
					tl = tl._timeline;
				}
			}

			return this;
		};

		p.remove = function(value) {
			if (value instanceof Animation) {
				return this._remove(value, false);
			} else if (value instanceof Array || (value && value.push && _isArray(value))) {
				var i = value.length;
				while (--i > -1) {
					this.remove(value[i]);
				}
				return this;
			} else if (typeof(value) === "string") {
				return this.removeLabel(value);
			}
			return this.kill(null, value);
		};

		p._remove = function(tween, skipDisable) {
			SimpleTimeline.prototype._remove.call(this, tween, skipDisable);
			var last = this._last;
			if (!last) {
				this._time = this._totalTime = this._duration = this._totalDuration = 0;
			} else if (this._time > last._startTime + last._totalDuration / last._timeScale) {
				this._time = this.duration();
				this._totalTime = this._totalDuration;
			}
			return this;
		};

		p.append = function(value, offsetOrLabel) {
			return this.add(value, this._parseTimeOrLabel(null, offsetOrLabel, true, value));
		};

		p.insert = p.insertMultiple = function(value, position, align, stagger) {
			return this.add(value, position || 0, align, stagger);
		};

		p.appendMultiple = function(tweens, offsetOrLabel, align, stagger) {
			return this.add(tweens, this._parseTimeOrLabel(null, offsetOrLabel, true, tweens), align, stagger);
		};

		p.addLabel = function(label, position) {
			this._labels[label] = this._parseTimeOrLabel(position);
			return this;
		};

		p.addPause = function(position, callback, params, scope) {
			return this.call(_pauseCallback, ["{self}", callback, params, scope], this, position);
		};

		p.removeLabel = function(label) {
			delete this._labels[label];
			return this;
		};

		p.getLabelTime = function(label) {
			return (this._labels[label] != null) ? this._labels[label] : -1;
		};

		p._parseTimeOrLabel = function(timeOrLabel, offsetOrLabel, appendIfAbsent, ignore) {
			var i;
			//if we're about to add a tween/timeline (or an array of them) that's already a child of this timeline, we should remove it first so that it doesn't contaminate the duration().
			if (ignore instanceof Animation && ignore.timeline === this) {
				this.remove(ignore);
			} else if (ignore && ((ignore instanceof Array) || (ignore.push && _isArray(ignore)))) {
				i = ignore.length;
				while (--i > -1) {
					if (ignore[i] instanceof Animation && ignore[i].timeline === this) {
						this.remove(ignore[i]);
					}
				}
			}
			if (typeof(offsetOrLabel) === "string") {
				return this._parseTimeOrLabel(offsetOrLabel, (appendIfAbsent && typeof(timeOrLabel) === "number" && this._labels[offsetOrLabel] == null) ? timeOrLabel - this.duration() : 0, appendIfAbsent);
			}
			offsetOrLabel = offsetOrLabel || 0;
			if (typeof(timeOrLabel) === "string" && (isNaN(timeOrLabel) || this._labels[timeOrLabel] != null)) { //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
				i = timeOrLabel.indexOf("=");
				if (i === -1) {
					if (this._labels[timeOrLabel] == null) {
						return appendIfAbsent ? (this._labels[timeOrLabel] = this.duration() + offsetOrLabel) : offsetOrLabel;
					}
					return this._labels[timeOrLabel] + offsetOrLabel;
				}
				offsetOrLabel = parseInt(timeOrLabel.charAt(i-1) + "1", 10) * Number(timeOrLabel.substr(i+1));
				timeOrLabel = (i > 1) ? this._parseTimeOrLabel(timeOrLabel.substr(0, i-1), 0, appendIfAbsent) : this.duration();
			} else if (timeOrLabel == null) {
				timeOrLabel = this.duration();
			}
			return Number(timeOrLabel) + offsetOrLabel;
		};

		p.seek = function(position, suppressEvents) {
			return this.totalTime((typeof(position) === "number") ? position : this._parseTimeOrLabel(position), (suppressEvents !== false));
		};

		p.stop = function() {
			return this.paused(true);
		};

		p.gotoAndPlay = function(position, suppressEvents) {
			return this.play(position, suppressEvents);
		};

		p.gotoAndStop = function(position, suppressEvents) {
			return this.pause(position, suppressEvents);
		};

		p.render = function(time, suppressEvents, force) {
			if (this._gc) {
				this._enabled(true, false);
			}
			var totalDur = (!this._dirty) ? this._totalDuration : this.totalDuration(),
				prevTime = this._time,
				prevStart = this._startTime,
				prevTimeScale = this._timeScale,
				prevPaused = this._paused,
				tween, isComplete, next, callback, internalForce;
			if (time >= totalDur) {
				this._totalTime = this._time = totalDur;
				if (!this._reversed) if (!this._hasPausedChild()) {
					isComplete = true;
					callback = "onComplete";
					if (this._duration === 0) if (time === 0 || this._rawPrevTime < 0 || this._rawPrevTime === _tinyNum) if (this._rawPrevTime !== time && this._first) {
						internalForce = true;
						if (this._rawPrevTime > _tinyNum) {
							callback = "onReverseComplete";
						}
					}
				}
				this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				time = totalDur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7.

			} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
				this._totalTime = this._time = 0;
				if (prevTime !== 0 || (this._duration === 0 && this._rawPrevTime !== _tinyNum && (this._rawPrevTime > 0 || (time < 0 && this._rawPrevTime >= 0)))) {
					callback = "onReverseComplete";
					isComplete = this._reversed;
				}
				if (time < 0) {
					this._active = false;
					if (this._duration === 0) if (this._rawPrevTime >= 0 && this._first) { //zero-duration timelines are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
						internalForce = true;
					}
					this._rawPrevTime = time;
				} else {
					this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.

					time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)
					if (!this._initted) {
						internalForce = true;
					}
				}

			} else {
				this._totalTime = this._time = this._rawPrevTime = time;
			}
			if ((this._time === prevTime || !this._first) && !force && !internalForce) {
				return;
			} else if (!this._initted) {
				this._initted = true;
			}

			if (!this._active) if (!this._paused && this._time !== prevTime && time > 0) {
				this._active = true;  //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
			}

			if (prevTime === 0) if (this.vars.onStart) if (this._time !== 0) if (!suppressEvents) {
				this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _blankArray);
			}

			if (this._time >= prevTime) {
				tween = this._first;
				while (tween) {
					next = tween._next; //record it here because the value could change after rendering...
					if (this._paused && !prevPaused) { //in case a tween pauses the timeline when rendering
						break;
					} else if (tween._active || (tween._startTime <= this._time && !tween._paused && !tween._gc)) {

						if (!tween._reversed) {
							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
						} else {
							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
						}

					}
					tween = next;
				}
			} else {
				tween = this._last;
				while (tween) {
					next = tween._prev; //record it here because the value could change after rendering...
					if (this._paused && !prevPaused) { //in case a tween pauses the timeline when rendering
						break;
					} else if (tween._active || (tween._startTime <= prevTime && !tween._paused && !tween._gc)) {

						if (!tween._reversed) {
							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
						} else {
							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
						}

					}
					tween = next;
				}
			}

			if (this._onUpdate) if (!suppressEvents) {
				this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _blankArray);
			}

			if (callback) if (!this._gc) if (prevStart === this._startTime || prevTimeScale !== this._timeScale) if (this._time === 0 || totalDur >= this.totalDuration()) { //if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
				if (isComplete) {
					if (this._timeline.autoRemoveChildren) {
						this._enabled(false, false);
					}
					this._active = false;
				}
				if (!suppressEvents && this.vars[callback]) {
					this.vars[callback].apply(this.vars[callback + "Scope"] || this, this.vars[callback + "Params"] || _blankArray);
				}
			}
		};

		p._hasPausedChild = function() {
			var tween = this._first;
			while (tween) {
				if (tween._paused || ((tween instanceof TimelineLite) && tween._hasPausedChild())) {
					return true;
				}
				tween = tween._next;
			}
			return false;
		};

		p.getChildren = function(nested, tweens, timelines, ignoreBeforeTime) {
			ignoreBeforeTime = ignoreBeforeTime || -9999999999;
			var a = [],
				tween = this._first,
				cnt = 0;
			while (tween) {
				if (tween._startTime < ignoreBeforeTime) {
					//do nothing
				} else if (tween instanceof TweenLite) {
					if (tweens !== false) {
						a[cnt++] = tween;
					}
				} else {
					if (timelines !== false) {
						a[cnt++] = tween;
					}
					if (nested !== false) {
						a = a.concat(tween.getChildren(true, tweens, timelines));
						cnt = a.length;
					}
				}
				tween = tween._next;
			}
			return a;
		};

		p.getTweensOf = function(target, nested) {
			var tweens = TweenLite.getTweensOf(target),
				i = tweens.length,
				a = [],
				cnt = 0;
			while (--i > -1) {
				if (tweens[i].timeline === this || (nested && this._contains(tweens[i]))) {
					a[cnt++] = tweens[i];
				}
			}
			return a;
		};

		p._contains = function(tween) {
			var tl = tween.timeline;
			while (tl) {
				if (tl === this) {
					return true;
				}
				tl = tl.timeline;
			}
			return false;
		};

		p.shiftChildren = function(amount, adjustLabels, ignoreBeforeTime) {
			ignoreBeforeTime = ignoreBeforeTime || 0;
			var tween = this._first,
				labels = this._labels,
				p;
			while (tween) {
				if (tween._startTime >= ignoreBeforeTime) {
					tween._startTime += amount;
				}
				tween = tween._next;
			}
			if (adjustLabels) {
				for (p in labels) {
					if (labels[p] >= ignoreBeforeTime) {
						labels[p] += amount;
					}
				}
			}
			return this._uncache(true);
		};

		p._kill = function(vars, target) {
			if (!vars && !target) {
				return this._enabled(false, false);
			}
			var tweens = (!target) ? this.getChildren(true, true, false) : this.getTweensOf(target),
				i = tweens.length,
				changed = false;
			while (--i > -1) {
				if (tweens[i]._kill(vars, target)) {
					changed = true;
				}
			}
			return changed;
		};

		p.clear = function(labels) {
			var tweens = this.getChildren(false, true, true),
				i = tweens.length;
			this._time = this._totalTime = 0;
			while (--i > -1) {
				tweens[i]._enabled(false, false);
			}
			if (labels !== false) {
				this._labels = {};
			}
			return this._uncache(true);
		};

		p.invalidate = function() {
			var tween = this._first;
			while (tween) {
				tween.invalidate();
				tween = tween._next;
			}
			return this;
		};

		p._enabled = function(enabled, ignoreTimeline) {
			if (enabled === this._gc) {
				var tween = this._first;
				while (tween) {
					tween._enabled(enabled, true);
					tween = tween._next;
				}
			}
			return SimpleTimeline.prototype._enabled.call(this, enabled, ignoreTimeline);
		};

		p.duration = function(value) {
			if (!arguments.length) {
				if (this._dirty) {
					this.totalDuration(); //just triggers recalculation
				}
				return this._duration;
			}
			if (this.duration() !== 0 && value !== 0) {
				this.timeScale(this._duration / value);
			}
			return this;
		};

		p.totalDuration = function(value) {
			if (!arguments.length) {
				if (this._dirty) {
					var max = 0,
						tween = this._last,
						prevStart = 999999999999,
						prev, end;
					while (tween) {
						prev = tween._prev; //record it here in case the tween changes position in the sequence...
						if (tween._dirty) {
							tween.totalDuration(); //could change the tween._startTime, so make sure the tween's cache is clean before analyzing it.
						}
						if (tween._startTime > prevStart && this._sortChildren && !tween._paused) { //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
							this.add(tween, tween._startTime - tween._delay);
						} else {
							prevStart = tween._startTime;
						}
						if (tween._startTime < 0 && !tween._paused) { //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
							max -= tween._startTime;
							if (this._timeline.smoothChildTiming) {
								this._startTime += tween._startTime / this._timeScale;
							}
							this.shiftChildren(-tween._startTime, false, -9999999999);
							prevStart = 0;
						}
						end = tween._startTime + (tween._totalDuration / tween._timeScale);
						if (end > max) {
							max = end;
						}
						tween = prev;
					}
					this._duration = this._totalDuration = max;
					this._dirty = false;
				}
				return this._totalDuration;
			}
			if (this.totalDuration() !== 0) if (value !== 0) {
				this.timeScale(this._totalDuration / value);
			}
			return this;
		};

		p.usesFrames = function() {
			var tl = this._timeline;
			while (tl._timeline) {
				tl = tl._timeline;
			}
			return (tl === Animation._rootFramesTimeline);
		};

		p.rawTime = function() {
			return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale;
		};

		return TimelineLite;

	}, true);
	







	
	
	
	
	
/*
 * ----------------------------------------------------------------
 * TimelineMax
 * ----------------------------------------------------------------
 */
	window._gsDefine("TimelineMax", ["TimelineLite","TweenLite","easing.Ease"], function(TimelineLite, TweenLite, Ease) {

		var TimelineMax = function(vars) {
				TimelineLite.call(this, vars);
				this._repeat = this.vars.repeat || 0;
				this._repeatDelay = this.vars.repeatDelay || 0;
				this._cycle = 0;
				this._yoyo = (this.vars.yoyo === true);
				this._dirty = true;
			},
			_tinyNum = 0.0000000001,
			_blankArray = [],
			_easeNone = new Ease(null, null, 1, 0),
			p = TimelineMax.prototype = new TimelineLite();

		p.constructor = TimelineMax;
		p.kill()._gc = false;
		TimelineMax.version = "1.11.8";

		p.invalidate = function() {
			this._yoyo = (this.vars.yoyo === true);
			this._repeat = this.vars.repeat || 0;
			this._repeatDelay = this.vars.repeatDelay || 0;
			this._uncache(true);
			return TimelineLite.prototype.invalidate.call(this);
		};

		p.addCallback = function(callback, position, params, scope) {
			return this.add( TweenLite.delayedCall(0, callback, params, scope), position);
		};

		p.removeCallback = function(callback, position) {
			if (callback) {
				if (position == null) {
					this._kill(null, callback);
				} else {
					var a = this.getTweensOf(callback, false),
						i = a.length,
						time = this._parseTimeOrLabel(position);
					while (--i > -1) {
						if (a[i]._startTime === time) {
							a[i]._enabled(false, false);
						}
					}
				}
			}
			return this;
		};

		p.tweenTo = function(position, vars) {
			vars = vars || {};
			var copy = {ease:_easeNone, overwrite:(vars.delay ? 2 : 1), useFrames:this.usesFrames(), immediateRender:false},//note: set overwrite to 1 (true/all) by default unless there's a delay so that we avoid a racing situation that could happen if, for example, an onmousemove creates the same tweenTo() over and over again.
				duration, p, t;
			for (p in vars) {
				copy[p] = vars[p];
			}
			copy.time = this._parseTimeOrLabel(position);
			duration = (Math.abs(Number(copy.time) - this._time) / this._timeScale) || 0.001;
			t = new TweenLite(this, duration, copy);
			copy.onStart = function() {
				t.target.paused(true);
				if (t.vars.time !== t.target.time() && duration === t.duration()) { //don't make the duration zero - if it's supposed to be zero, don't worry because it's already initting the tween and will complete immediately, effectively making the duration zero anyway. If we make duration zero, the tween won't run at all.
					t.duration( Math.abs( t.vars.time - t.target.time()) / t.target._timeScale );
				}
				if (vars.onStart) { //in case the user had an onStart in the vars - we don't want to overwrite it.
					vars.onStart.apply(vars.onStartScope || t, vars.onStartParams || _blankArray);
				}
			};
			return t;
		};

		p.tweenFromTo = function(fromPosition, toPosition, vars) {
			vars = vars || {};
			fromPosition = this._parseTimeOrLabel(fromPosition);
			vars.startAt = {onComplete:this.seek, onCompleteParams:[fromPosition], onCompleteScope:this};
			vars.immediateRender = (vars.immediateRender !== false);
			var t = this.tweenTo(toPosition, vars);
			return t.duration((Math.abs( t.vars.time - fromPosition) / this._timeScale) || 0.001);
		};

		p.render = function(time, suppressEvents, force) {
			if (this._gc) {
				this._enabled(true, false);
			}
			var totalDur = (!this._dirty) ? this._totalDuration : this.totalDuration(),
				dur = this._duration,
				prevTime = this._time,
				prevTotalTime = this._totalTime,
				prevStart = this._startTime,
				prevTimeScale = this._timeScale,
				prevRawPrevTime = this._rawPrevTime,
				prevPaused = this._paused,
				prevCycle = this._cycle,
				tween, isComplete, next, callback, internalForce, cycleDuration;
			if (time >= totalDur) {
				if (!this._locked) {
					this._totalTime = totalDur;
					this._cycle = this._repeat;
				}
				if (!this._reversed) if (!this._hasPausedChild()) {
					isComplete = true;
					callback = "onComplete";
					if (this._duration === 0) if (time === 0 || prevRawPrevTime < 0 || prevRawPrevTime === _tinyNum) if (prevRawPrevTime !== time && this._first) {
						internalForce = true;
						if (prevRawPrevTime > _tinyNum) {
							callback = "onReverseComplete";
						}
					}
				}
				this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				if (this._yoyo && (this._cycle & 1) !== 0) {
					this._time = time = 0;
				} else {
					this._time = dur;
					time = dur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7. We cannot do less then 0.0001 because the same issue can occur when the duration is extremely large like 999999999999 in which case adding 0.00000001, for example, causes it to act like nothing was added.
				}

			} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
				if (!this._locked) {
					this._totalTime = this._cycle = 0;
				}
				this._time = 0;
				if (prevTime !== 0 || (dur === 0 && prevRawPrevTime !== _tinyNum && (prevRawPrevTime > 0 || (time < 0 && prevRawPrevTime >= 0)) && !this._locked)) { //edge case for checking time < 0 && prevRawPrevTime >= 0: a zero-duration fromTo() tween inside a zero-duration timeline (yeah, very rare)
					callback = "onReverseComplete";
					isComplete = this._reversed;
				}
				if (time < 0) {
					this._active = false;
					if (dur === 0) if (prevRawPrevTime >= 0 && this._first) { //zero-duration timelines are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
						internalForce = true;
					}
					this._rawPrevTime = time;
				} else {
					this._rawPrevTime = (dur || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)
					if (!this._initted) {
						internalForce = true;
					}
				}

			} else {
				if (dur === 0 && prevRawPrevTime < 0) { //without this, zero-duration repeating timelines (like with a simple callback nested at the very beginning and a repeatDelay) wouldn't render the first time through.
					internalForce = true;
				}
				this._time = this._rawPrevTime = time;
				if (!this._locked) {
					this._totalTime = time;
					if (this._repeat !== 0) {
						cycleDuration = dur + this._repeatDelay;
						this._cycle = (this._totalTime / cycleDuration) >> 0; //originally _totalTime % cycleDuration but floating point errors caused problems, so I normalized it. (4 % 0.8 should be 0 but it gets reported as 0.79999999!)
						if (this._cycle !== 0) if (this._cycle === this._totalTime / cycleDuration) {
							this._cycle--; //otherwise when rendered exactly at the end time, it will act as though it is repeating (at the beginning)
						}
						this._time = this._totalTime - (this._cycle * cycleDuration);
						if (this._yoyo) if ((this._cycle & 1) !== 0) {
							this._time = dur - this._time;
						}
						if (this._time > dur) {
							this._time = dur;
							time = dur + 0.0001; //to avoid occasional floating point rounding error
						} else if (this._time < 0) {
							this._time = time = 0;
						} else {
							time = this._time;
						}
					}
				}
			}

			if (this._cycle !== prevCycle) if (!this._locked) {
				/*
				make sure children at the end/beginning of the timeline are rendered properly. If, for example,
				a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
				would get transated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
				could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
				we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
				ensure that zero-duration tweens at the very beginning or end of the TimelineMax work.
				*/
				var backwards = (this._yoyo && (prevCycle & 1) !== 0),
					wrap = (backwards === (this._yoyo && (this._cycle & 1) !== 0)),
					recTotalTime = this._totalTime,
					recCycle = this._cycle,
					recRawPrevTime = this._rawPrevTime,
					recTime = this._time;

				this._totalTime = prevCycle * dur;
				if (this._cycle < prevCycle) {
					backwards = !backwards;
				} else {
					this._totalTime += dur;
				}
				this._time = prevTime; //temporarily revert _time so that render() renders the children in the correct order. Without this, tweens won't rewind correctly. We could arhictect things in a "cleaner" way by splitting out the rendering queue into a separate method but for performance reasons, we kept it all inside this method.

				this._rawPrevTime = (dur === 0) ? prevRawPrevTime - 0.0001 : prevRawPrevTime;
				this._cycle = prevCycle;
				this._locked = true; //prevents changes to totalTime and skips repeat/yoyo behavior when we recursively call render()
				prevTime = (backwards) ? 0 : dur;
				this.render(prevTime, suppressEvents, (dur === 0));
				if (!suppressEvents) if (!this._gc) {
					if (this.vars.onRepeat) {
						this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || _blankArray);
					}
				}
				if (wrap) {
					prevTime = (backwards) ? dur + 0.0001 : -0.0001;
					this.render(prevTime, true, false);
				}
				this._locked = false;
				if (this._paused && !prevPaused) { //if the render() triggered callback that paused this timeline, we should abort (very rare, but possible)
					return;
				}
				this._time = recTime;
				this._totalTime = recTotalTime;
				this._cycle = recCycle;
				this._rawPrevTime = recRawPrevTime;
			}

			if ((this._time === prevTime || !this._first) && !force && !internalForce) {
				if (prevTotalTime !== this._totalTime) if (this._onUpdate) if (!suppressEvents) { //so that onUpdate fires even during the repeatDelay - as long as the totalTime changed, we should trigger onUpdate.
					this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _blankArray);
				}
				return;
			} else if (!this._initted) {
				this._initted = true;
			}

			if (!this._active) if (!this._paused && this._totalTime !== prevTotalTime && time > 0) {
				this._active = true;  //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
			}

			if (prevTotalTime === 0) if (this.vars.onStart) if (this._totalTime !== 0) if (!suppressEvents) {
				this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _blankArray);
			}

			if (this._time >= prevTime) {
				tween = this._first;
				while (tween) {
					next = tween._next; //record it here because the value could change after rendering...
					if (this._paused && !prevPaused) { //in case a tween pauses the timeline when rendering
						break;
					} else if (tween._active || (tween._startTime <= this._time && !tween._paused && !tween._gc)) {
						if (!tween._reversed) {
							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
						} else {
							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
						}

					}
					tween = next;
				}
			} else {
				tween = this._last;
				while (tween) {
					next = tween._prev; //record it here because the value could change after rendering...
					if (this._paused && !prevPaused) { //in case a tween pauses the timeline when rendering
						break;
					} else if (tween._active || (tween._startTime <= prevTime && !tween._paused && !tween._gc)) {
						if (!tween._reversed) {
							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
						} else {
							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
						}

					}
					tween = next;
				}
			}

			if (this._onUpdate) if (!suppressEvents) {
				this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _blankArray);
			}
			if (callback) if (!this._locked) if (!this._gc) if (prevStart === this._startTime || prevTimeScale !== this._timeScale) if (this._time === 0 || totalDur >= this.totalDuration()) { //if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
				if (isComplete) {
					if (this._timeline.autoRemoveChildren) {
						this._enabled(false, false);
					}
					this._active = false;
				}
				if (!suppressEvents && this.vars[callback]) {
					this.vars[callback].apply(this.vars[callback + "Scope"] || this, this.vars[callback + "Params"] || _blankArray);
				}
			}
		};

		p.getActive = function(nested, tweens, timelines) {
			if (nested == null) {
				nested = true;
			}
			if (tweens == null) {
				tweens = true;
			}
			if (timelines == null) {
				timelines = false;
			}
			var a = [],
				all = this.getChildren(nested, tweens, timelines),
				cnt = 0,
				l = all.length,
				i, tween;
			for (i = 0; i < l; i++) {
				tween = all[i];
				if (tween.isActive()) {
					a[cnt++] = tween;
				}
			}
			return a;
		};


		p.getLabelAfter = function(time) {
			if (!time) if (time !== 0) { //faster than isNan()
				time = this._time;
			}
			var labels = this.getLabelsArray(),
				l = labels.length,
				i;
			for (i = 0; i < l; i++) {
				if (labels[i].time > time) {
					return labels[i].name;
				}
			}
			return null;
		};

		p.getLabelBefore = function(time) {
			if (time == null) {
				time = this._time;
			}
			var labels = this.getLabelsArray(),
				i = labels.length;
			while (--i > -1) {
				if (labels[i].time < time) {
					return labels[i].name;
				}
			}
			return null;
		};

		p.getLabelsArray = function() {
			var a = [],
				cnt = 0,
				p;
			for (p in this._labels) {
				a[cnt++] = {time:this._labels[p], name:p};
			}
			a.sort(function(a,b) {
				return a.time - b.time;
			});
			return a;
		};


//---- GETTERS / SETTERS -------------------------------------------------------------------------------------------------------

		p.progress = function(value) {
			return (!arguments.length) ? this._time / this.duration() : this.totalTime( this.duration() * ((this._yoyo && (this._cycle & 1) !== 0) ? 1 - value : value) + (this._cycle * (this._duration + this._repeatDelay)), false);
		};

		p.totalProgress = function(value) {
			return (!arguments.length) ? this._totalTime / this.totalDuration() : this.totalTime( this.totalDuration() * value, false);
		};

		p.totalDuration = function(value) {
			if (!arguments.length) {
				if (this._dirty) {
					TimelineLite.prototype.totalDuration.call(this); //just forces refresh
					//Instead of Infinity, we use 999999999999 so that we can accommodate reverses.
					this._totalDuration = (this._repeat === -1) ? 999999999999 : this._duration * (this._repeat + 1) + (this._repeatDelay * this._repeat);
				}
				return this._totalDuration;
			}
			return (this._repeat === -1) ? this : this.duration( (value - (this._repeat * this._repeatDelay)) / (this._repeat + 1) );
		};

		p.time = function(value, suppressEvents) {
			if (!arguments.length) {
				return this._time;
			}
			if (this._dirty) {
				this.totalDuration();
			}
			if (value > this._duration) {
				value = this._duration;
			}
			if (this._yoyo && (this._cycle & 1) !== 0) {
				value = (this._duration - value) + (this._cycle * (this._duration + this._repeatDelay));
			} else if (this._repeat !== 0) {
				value += this._cycle * (this._duration + this._repeatDelay);
			}
			return this.totalTime(value, suppressEvents);
		};

		p.repeat = function(value) {
			if (!arguments.length) {
				return this._repeat;
			}
			this._repeat = value;
			return this._uncache(true);
		};

		p.repeatDelay = function(value) {
			if (!arguments.length) {
				return this._repeatDelay;
			}
			this._repeatDelay = value;
			return this._uncache(true);
		};

		p.yoyo = function(value) {
			if (!arguments.length) {
				return this._yoyo;
			}
			this._yoyo = value;
			return this;
		};

		p.currentLabel = function(value) {
			if (!arguments.length) {
				return this.getLabelBefore(this._time + 0.00000001);
			}
			return this.seek(value, true);
		};

		return TimelineMax;

	}, true);
	




	
	
	
	
	
	
	
/*
 * ----------------------------------------------------------------
 * BezierPlugin
 * ----------------------------------------------------------------
 */
	(function() {

		var _RAD2DEG = 180 / Math.PI,
			_r1 = [],
			_r2 = [],
			_r3 = [],
			_corProps = {},
			Segment = function(a, b, c, d) {
				this.a = a;
				this.b = b;
				this.c = c;
				this.d = d;
				this.da = d - a;
				this.ca = c - a;
				this.ba = b - a;
			},
			_correlate = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
			cubicToQuadratic = function(a, b, c, d) {
				var q1 = {a:a},
					q2 = {},
					q3 = {},
					q4 = {c:d},
					mab = (a + b) / 2,
					mbc = (b + c) / 2,
					mcd = (c + d) / 2,
					mabc = (mab + mbc) / 2,
					mbcd = (mbc + mcd) / 2,
					m8 = (mbcd - mabc) / 8;
				q1.b = mab + (a - mab) / 4;
				q2.b = mabc + m8;
				q1.c = q2.a = (q1.b + q2.b) / 2;
				q2.c = q3.a = (mabc + mbcd) / 2;
				q3.b = mbcd - m8;
				q4.b = mcd + (d - mcd) / 4;
				q3.c = q4.a = (q3.b + q4.b) / 2;
				return [q1, q2, q3, q4];
			},
			_calculateControlPoints = function(a, curviness, quad, basic, correlate) {
				var l = a.length - 1,
					ii = 0,
					cp1 = a[0].a,
					i, p1, p2, p3, seg, m1, m2, mm, cp2, qb, r1, r2, tl;
				for (i = 0; i < l; i++) {
					seg = a[ii];
					p1 = seg.a;
					p2 = seg.d;
					p3 = a[ii+1].d;

					if (correlate) {
						r1 = _r1[i];
						r2 = _r2[i];
						tl = ((r2 + r1) * curviness * 0.25) / (basic ? 0.5 : _r3[i] || 0.5);
						m1 = p2 - (p2 - p1) * (basic ? curviness * 0.5 : (r1 !== 0 ? tl / r1 : 0));
						m2 = p2 + (p3 - p2) * (basic ? curviness * 0.5 : (r2 !== 0 ? tl / r2 : 0));
						mm = p2 - (m1 + (((m2 - m1) * ((r1 * 3 / (r1 + r2)) + 0.5) / 4) || 0));
					} else {
						m1 = p2 - (p2 - p1) * curviness * 0.5;
						m2 = p2 + (p3 - p2) * curviness * 0.5;
						mm = p2 - (m1 + m2) / 2;
					}
					m1 += mm;
					m2 += mm;

					seg.c = cp2 = m1;
					if (i !== 0) {
						seg.b = cp1;
					} else {
						seg.b = cp1 = seg.a + (seg.c - seg.a) * 0.6; //instead of placing b on a exactly, we move it inline with c so that if the user specifies an ease like Back.easeIn or Elastic.easeIn which goes BEYOND the beginning, it will do so smoothly.
					}

					seg.da = p2 - p1;
					seg.ca = cp2 - p1;
					seg.ba = cp1 - p1;

					if (quad) {
						qb = cubicToQuadratic(p1, cp1, cp2, p2);
						a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]);
						ii += 4;
					} else {
						ii++;
					}

					cp1 = m2;
				}
				seg = a[ii];
				seg.b = cp1;
				seg.c = cp1 + (seg.d - cp1) * 0.4; //instead of placing c on d exactly, we move it inline with b so that if the user specifies an ease like Back.easeOut or Elastic.easeOut which goes BEYOND the end, it will do so smoothly.
				seg.da = seg.d - seg.a;
				seg.ca = seg.c - seg.a;
				seg.ba = cp1 - seg.a;
				if (quad) {
					qb = cubicToQuadratic(seg.a, cp1, seg.c, seg.d);
					a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]);
				}
			},
			_parseAnchors = function(values, p, correlate, prepend) {
				var a = [],
					l, i, p1, p2, p3, tmp;
				if (prepend) {
					values = [prepend].concat(values);
					i = values.length;
					while (--i > -1) {
						if (typeof( (tmp = values[i][p]) ) === "string") if (tmp.charAt(1) === "=") {
							values[i][p] = prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)); //accommodate relative values. Do it inline instead of breaking it out into a function for speed reasons
						}
					}
				}
				l = values.length - 2;
				if (l < 0) {
					a[0] = new Segment(values[0][p], 0, 0, values[(l < -1) ? 0 : 1][p]);
					return a;
				}
				for (i = 0; i < l; i++) {
					p1 = values[i][p];
					p2 = values[i+1][p];
					a[i] = new Segment(p1, 0, 0, p2);
					if (correlate) {
						p3 = values[i+2][p];
						_r1[i] = (_r1[i] || 0) + (p2 - p1) * (p2 - p1);
						_r2[i] = (_r2[i] || 0) + (p3 - p2) * (p3 - p2);
					}
				}
				a[i] = new Segment(values[i][p], 0, 0, values[i+1][p]);
				return a;
			},
			bezierThrough = function(values, curviness, quadratic, basic, correlate, prepend) {
				var obj = {},
					props = [],
					first = prepend || values[0],
					i, p, a, j, r, l, seamless, last;
				correlate = (typeof(correlate) === "string") ? ","+correlate+"," : _correlate;
				if (curviness == null) {
					curviness = 1;
				}
				for (p in values[0]) {
					props.push(p);
				}
				//check to see if the last and first values are identical (well, within 0.05). If so, make seamless by appending the second element to the very end of the values array and the 2nd-to-last element to the very beginning (we'll remove those segments later)
				if (values.length > 1) {
					last = values[values.length - 1];
					seamless = true;
					i = props.length;
					while (--i > -1) {
						p = props[i];
						if (Math.abs(first[p] - last[p]) > 0.05) { //build in a tolerance of +/-0.05 to accommodate rounding errors. For example, if you set an object's position to 4.945, Flash will make it 4.9
							seamless = false;
							break;
						}
					}
					if (seamless) {
						values = values.concat(); //duplicate the array to avoid contaminating the original which the user may be reusing for other tweens
						if (prepend) {
							values.unshift(prepend);
						}
						values.push(values[1]);
						prepend = values[values.length - 3];
					}
				}
				_r1.length = _r2.length = _r3.length = 0;
				i = props.length;
				while (--i > -1) {
					p = props[i];
					_corProps[p] = (correlate.indexOf(","+p+",") !== -1);
					obj[p] = _parseAnchors(values, p, _corProps[p], prepend);
				}
				i = _r1.length;
				while (--i > -1) {
					_r1[i] = Math.sqrt(_r1[i]);
					_r2[i] = Math.sqrt(_r2[i]);
				}
				if (!basic) {
					i = props.length;
					while (--i > -1) {
						if (_corProps[p]) {
							a = obj[props[i]];
							l = a.length - 1;
							for (j = 0; j < l; j++) {
								r = a[j+1].da / _r2[j] + a[j].da / _r1[j];
								_r3[j] = (_r3[j] || 0) + r * r;
							}
						}
					}
					i = _r3.length;
					while (--i > -1) {
						_r3[i] = Math.sqrt(_r3[i]);
					}
				}
				i = props.length;
				j = quadratic ? 4 : 1;
				while (--i > -1) {
					p = props[i];
					a = obj[p];
					_calculateControlPoints(a, curviness, quadratic, basic, _corProps[p]); //this method requires that _parseAnchors() and _setSegmentRatios() ran first so that _r1, _r2, and _r3 values are populated for all properties
					if (seamless) {
						a.splice(0, j);
						a.splice(a.length - j, j);
					}
				}
				return obj;
			},
			_parseBezierData = function(values, type, prepend) {
				type = type || "soft";
				var obj = {},
					inc = (type === "cubic") ? 3 : 2,
					soft = (type === "soft"),
					props = [],
					a, b, c, d, cur, i, j, l, p, cnt, tmp;
				if (soft && prepend) {
					values = [prepend].concat(values);
				}
				if (values == null || values.length < inc + 1) { throw "invalid Bezier data"; }
				for (p in values[0]) {
					props.push(p);
				}
				i = props.length;
				while (--i > -1) {
					p = props[i];
					obj[p] = cur = [];
					cnt = 0;
					l = values.length;
					for (j = 0; j < l; j++) {
						a = (prepend == null) ? values[j][p] : (typeof( (tmp = values[j][p]) ) === "string" && tmp.charAt(1) === "=") ? prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)) : Number(tmp);
						if (soft) if (j > 1) if (j < l - 1) {
							cur[cnt++] = (a + cur[cnt-2]) / 2;
						}
						cur[cnt++] = a;
					}
					l = cnt - inc + 1;
					cnt = 0;
					for (j = 0; j < l; j += inc) {
						a = cur[j];
						b = cur[j+1];
						c = cur[j+2];
						d = (inc === 2) ? 0 : cur[j+3];
						cur[cnt++] = tmp = (inc === 3) ? new Segment(a, b, c, d) : new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
					}
					cur.length = cnt;
				}
				return obj;
			},
			_addCubicLengths = function(a, steps, resolution) {
				var inc = 1 / resolution,
					j = a.length,
					d, d1, s, da, ca, ba, p, i, inv, bez, index;
				while (--j > -1) {
					bez = a[j];
					s = bez.a;
					da = bez.d - s;
					ca = bez.c - s;
					ba = bez.b - s;
					d = d1 = 0;
					for (i = 1; i <= resolution; i++) {
						p = inc * i;
						inv = 1 - p;
						d = d1 - (d1 = (p * p * da + 3 * inv * (p * ca + inv * ba)) * p);
						index = j * resolution + i - 1;
						steps[index] = (steps[index] || 0) + d * d;
					}
				}
			},
			_parseLengthData = function(obj, resolution) {
				resolution = resolution >> 0 || 6;
				var a = [],
					lengths = [],
					d = 0,
					total = 0,
					threshold = resolution - 1,
					segments = [],
					curLS = [], //current length segments array
					p, i, l, index;
				for (p in obj) {
					_addCubicLengths(obj[p], a, resolution);
				}
				l = a.length;
				for (i = 0; i < l; i++) {
					d += Math.sqrt(a[i]);
					index = i % resolution;
					curLS[index] = d;
					if (index === threshold) {
						total += d;
						index = (i / resolution) >> 0;
						segments[index] = curLS;
						lengths[index] = total;
						d = 0;
						curLS = [];
					}
				}
				return {length:total, lengths:lengths, segments:segments};
			},



			BezierPlugin = window._gsDefine.plugin({
					propName: "bezier",
					priority: -1,
					version: "1.3.2",
					API: 2,
					global:true,

					//gets called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
					init: function(target, vars, tween) {
						this._target = target;
						if (vars instanceof Array) {
							vars = {values:vars};
						}
						this._func = {};
						this._round = {};
						this._props = [];
						this._timeRes = (vars.timeResolution == null) ? 6 : parseInt(vars.timeResolution, 10);
						var values = vars.values || [],
							first = {},
							second = values[0],
							autoRotate = vars.autoRotate || tween.vars.orientToBezier,
							p, isFunc, i, j, prepend;

						this._autoRotate = autoRotate ? (autoRotate instanceof Array) ? autoRotate : [["x","y","rotation",((autoRotate === true) ? 0 : Number(autoRotate) || 0)]] : null;
						for (p in second) {
							this._props.push(p);
						}

						i = this._props.length;
						while (--i > -1) {
							p = this._props[i];

							this._overwriteProps.push(p);
							isFunc = this._func[p] = (typeof(target[p]) === "function");
							first[p] = (!isFunc) ? parseFloat(target[p]) : target[ ((p.indexOf("set") || typeof(target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3)) ]();
							if (!prepend) if (first[p] !== values[0][p]) {
								prepend = first;
							}
						}
						this._beziers = (vars.type !== "cubic" && vars.type !== "quadratic" && vars.type !== "soft") ? bezierThrough(values, isNaN(vars.curviness) ? 1 : vars.curviness, false, (vars.type === "thruBasic"), vars.correlate, prepend) : _parseBezierData(values, vars.type, first);
						this._segCount = this._beziers[p].length;

						if (this._timeRes) {
							var ld = _parseLengthData(this._beziers, this._timeRes);
							this._length = ld.length;
							this._lengths = ld.lengths;
							this._segments = ld.segments;
							this._l1 = this._li = this._s1 = this._si = 0;
							this._l2 = this._lengths[0];
							this._curSeg = this._segments[0];
							this._s2 = this._curSeg[0];
							this._prec = 1 / this._curSeg.length;
						}

						if ((autoRotate = this._autoRotate)) {
							this._initialRotations = [];
							if (!(autoRotate[0] instanceof Array)) {
								this._autoRotate = autoRotate = [autoRotate];
							}
							i = autoRotate.length;
							while (--i > -1) {
								for (j = 0; j < 3; j++) {
									p = autoRotate[i][j];
									this._func[p] = (typeof(target[p]) === "function") ? target[ ((p.indexOf("set") || typeof(target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3)) ] : false;
								}
								p = autoRotate[i][2];
								this._initialRotations[i] = this._func[p] ? this._func[p].call(this._target) : this._target[p];
							}
						}
						this._startRatio = tween.vars.runBackwards ? 1 : 0; //we determine the starting ratio when the tween inits which is always 0 unless the tween has runBackwards:true (indicating it's a from() tween) in which case it's 1.
						return true;
					},

					//called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
					set: function(v) {
						var segments = this._segCount,
							func = this._func,
							target = this._target,
							notStart = (v !== this._startRatio),
							curIndex, inv, i, p, b, t, val, l, lengths, curSeg;
						if (!this._timeRes) {
							curIndex = (v < 0) ? 0 : (v >= 1) ? segments - 1 : (segments * v) >> 0;
							t = (v - (curIndex * (1 / segments))) * segments;
						} else {
							lengths = this._lengths;
							curSeg = this._curSeg;
							v *= this._length;
							i = this._li;
							//find the appropriate segment (if the currently cached one isn't correct)
							if (v > this._l2 && i < segments - 1) {
								l = segments - 1;
								while (i < l && (this._l2 = lengths[++i]) <= v) {	}
								this._l1 = lengths[i-1];
								this._li = i;
								this._curSeg = curSeg = this._segments[i];
								this._s2 = curSeg[(this._s1 = this._si = 0)];
							} else if (v < this._l1 && i > 0) {
								while (i > 0 && (this._l1 = lengths[--i]) >= v) { }
								if (i === 0 && v < this._l1) {
									this._l1 = 0;
								} else {
									i++;
								}
								this._l2 = lengths[i];
								this._li = i;
								this._curSeg = curSeg = this._segments[i];
								this._s1 = curSeg[(this._si = curSeg.length - 1) - 1] || 0;
								this._s2 = curSeg[this._si];
							}
							curIndex = i;
							//now find the appropriate sub-segment (we split it into the number of pieces that was defined by "precision" and measured each one)
							v -= this._l1;
							i = this._si;
							if (v > this._s2 && i < curSeg.length - 1) {
								l = curSeg.length - 1;
								while (i < l && (this._s2 = curSeg[++i]) <= v) {	}
								this._s1 = curSeg[i-1];
								this._si = i;
							} else if (v < this._s1 && i > 0) {
								while (i > 0 && (this._s1 = curSeg[--i]) >= v) {	}
								if (i === 0 && v < this._s1) {
									this._s1 = 0;
								} else {
									i++;
								}
								this._s2 = curSeg[i];
								this._si = i;
							}
							t = (i + (v - this._s1) / (this._s2 - this._s1)) * this._prec;
						}
						inv = 1 - t;

						i = this._props.length;
						while (--i > -1) {
							p = this._props[i];
							b = this._beziers[p][curIndex];
							val = (t * t * b.da + 3 * inv * (t * b.ca + inv * b.ba)) * t + b.a;
							if (this._round[p]) {
								val = Math.round(val);
							}
							if (func[p]) {
								target[p](val);
							} else {
								target[p] = val;
							}
						}

						if (this._autoRotate) {
							var ar = this._autoRotate,
								b2, x1, y1, x2, y2, add, conv;
							i = ar.length;
							while (--i > -1) {
								p = ar[i][2];
								add = ar[i][3] || 0;
								conv = (ar[i][4] === true) ? 1 : _RAD2DEG;
								b = this._beziers[ar[i][0]];
								b2 = this._beziers[ar[i][1]];

								if (b && b2) { //in case one of the properties got overwritten.
									b = b[curIndex];
									b2 = b2[curIndex];

									x1 = b.a + (b.b - b.a) * t;
									x2 = b.b + (b.c - b.b) * t;
									x1 += (x2 - x1) * t;
									x2 += ((b.c + (b.d - b.c) * t) - x2) * t;

									y1 = b2.a + (b2.b - b2.a) * t;
									y2 = b2.b + (b2.c - b2.b) * t;
									y1 += (y2 - y1) * t;
									y2 += ((b2.c + (b2.d - b2.c) * t) - y2) * t;

									val = notStart ? Math.atan2(y2 - y1, x2 - x1) * conv + add : this._initialRotations[i];

									if (func[p]) {
										target[p](val);
									} else {
										target[p] = val;
									}
								}
							}
						}
					}
			}),
			p = BezierPlugin.prototype;


		BezierPlugin.bezierThrough = bezierThrough;
		BezierPlugin.cubicToQuadratic = cubicToQuadratic;
		BezierPlugin._autoCSS = true; //indicates that this plugin can be inserted into the "css" object using the autoCSS feature of TweenLite
		BezierPlugin.quadraticToCubic = function(a, b, c) {
			return new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
		};

		BezierPlugin._cssRegister = function() {
			var CSSPlugin = window._gsDefine.globals.CSSPlugin;
			if (!CSSPlugin) {
				return;
			}
			var _internals = CSSPlugin._internals,
				_parseToProxy = _internals._parseToProxy,
				_setPluginRatio = _internals._setPluginRatio,
				CSSPropTween = _internals.CSSPropTween;
			_internals._registerComplexSpecialProp("bezier", {parser:function(t, e, prop, cssp, pt, plugin) {
				if (e instanceof Array) {
					e = {values:e};
				}
				plugin = new BezierPlugin();
				var values = e.values,
					l = values.length - 1,
					pluginValues = [],
					v = {},
					i, p, data;
				if (l < 0) {
					return pt;
				}
				for (i = 0; i <= l; i++) {
					data = _parseToProxy(t, values[i], cssp, pt, plugin, (l !== i));
					pluginValues[i] = data.end;
				}
				for (p in e) {
					v[p] = e[p]; //duplicate the vars object because we need to alter some things which would cause problems if the user plans to reuse the same vars object for another tween.
				}
				v.values = pluginValues;
				pt = new CSSPropTween(t, "bezier", 0, 0, data.pt, 2);
				pt.data = data;
				pt.plugin = plugin;
				pt.setRatio = _setPluginRatio;
				if (v.autoRotate === 0) {
					v.autoRotate = true;
				}
				if (v.autoRotate && !(v.autoRotate instanceof Array)) {
					i = (v.autoRotate === true) ? 0 : Number(v.autoRotate);
					v.autoRotate = (data.end.left != null) ? [["left","top","rotation",i,false]] : (data.end.x != null) ? [["x","y","rotation",i,false]] : false;
				}
				if (v.autoRotate) {
					if (!cssp._transform) {
						cssp._enableTransforms(false);
					}
					data.autoRotate = cssp._target._gsTransform;
				}
				plugin._onInitTween(data.proxy, v, cssp._tween);
				return pt;
			}});
		};

		p._roundProps = function(lookup, value) {
			var op = this._overwriteProps,
				i = op.length;
			while (--i > -1) {
				if (lookup[op[i]] || lookup.bezier || lookup.bezierThrough) {
					this._round[op[i]] = value;
				}
			}
		};

		p._kill = function(lookup) {
			var a = this._props,
				p, i;
			for (p in this._beziers) {
				if (p in lookup) {
					delete this._beziers[p];
					delete this._func[p];
					i = a.length;
					while (--i > -1) {
						if (a[i] === p) {
							a.splice(i, 1);
						}
					}
				}
			}
			return this._super._kill.call(this, lookup);
		};

	}());






	
	
	
	
	
	
	
	
/*
 * ----------------------------------------------------------------
 * CSSPlugin
 * ----------------------------------------------------------------
 */
	window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin","TweenLite"], function(TweenPlugin, TweenLite) {

		/** @constructor **/
		var CSSPlugin = function() {
				TweenPlugin.call(this, "css");
				this._overwriteProps.length = 0;
				this.setRatio = CSSPlugin.prototype.setRatio; //speed optimization (avoid prototype lookup on this "hot" method)
			},
			_hasPriority, //turns true whenever a CSSPropTween instance is created that has a priority other than 0. This helps us discern whether or not we should spend the time organizing the linked list or not after a CSSPlugin's _onInitTween() method is called.
			_suffixMap, //we set this in _onInitTween() each time as a way to have a persistent variable we can use in other methods like _parse() without having to pass it around as a parameter and we keep _parse() decoupled from a particular CSSPlugin instance
			_cs, //computed style (we store this in a shared variable to conserve memory and make minification tighter
			_overwriteProps, //alias to the currently instantiating CSSPlugin's _overwriteProps array. We use this closure in order to avoid having to pass a reference around from method to method and aid in minification.
			_specialProps = {},
			p = CSSPlugin.prototype = new TweenPlugin("css");

		p.constructor = CSSPlugin;
		CSSPlugin.version = "1.11.8";
		CSSPlugin.API = 2;
		CSSPlugin.defaultTransformPerspective = 0;
		CSSPlugin.defaultSkewType = "compensated";
		p = "px"; //we'll reuse the "p" variable to keep file size down
		CSSPlugin.suffixMap = {top:p, right:p, bottom:p, left:p, width:p, height:p, fontSize:p, padding:p, margin:p, perspective:p, lineHeight:""};


		var _numExp = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
			_relNumExp = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
			_valuesExp = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, //finds all the values that begin with numbers or += or -= and then a number. Includes suffixes. We use this to split complex values apart like "1px 5px 20px rgb(255,102,51)"
			_NaNExp = /[^\d\-\.]/g,
			_suffixExp = /(?:\d|\-|\+|=|#|\.)*/g,
			_opacityExp = /opacity *= *([^)]*)/,
			_opacityValExp = /opacity:([^;]*)/,
			_alphaFilterExp = /alpha\(opacity *=.+?\)/i,
			_rgbhslExp = /^(rgb|hsl)/,
			_capsExp = /([A-Z])/g,
			_camelExp = /-([a-z])/gi,
			_urlExp = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, //for pulling out urls from url(...) or url("...") strings (some browsers wrap urls in quotes, some don't when reporting things like backgroundImage)
			_camelFunc = function(s, g) { return g.toUpperCase(); },
			_horizExp = /(?:Left|Right|Width)/i,
			_ieGetMatrixExp = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
			_ieSetMatrixExp = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
			_commasOutsideParenExp = /,(?=[^\)]*(?:\(|$))/gi, //finds any commas that are not within parenthesis
			_DEG2RAD = Math.PI / 180,
			_RAD2DEG = 180 / Math.PI,
			_forcePT = {},
			_doc = document,
			_tempDiv = _doc.createElement("div"),
			_tempImg = _doc.createElement("img"),
			_internals = CSSPlugin._internals = {_specialProps:_specialProps}, //provides a hook to a few internal methods that we need to access from inside other plugins
			_agent = navigator.userAgent,
			_autoRound,
			_reqSafariFix, //we won't apply the Safari transform fix until we actually come across a tween that affects a transform property (to maintain best performance).

			_isSafari,
			_isFirefox, //Firefox has a bug that causes 3D transformed elements to randomly disappear unless a repaint is forced after each update on each element.
			_isSafariLT6, //Safari (and Android 4 which uses a flavor of Safari) has a bug that prevents changes to "top" and "left" properties from rendering properly if changed on the same frame as a transform UNLESS we set the element's WebkitBackfaceVisibility to hidden (weird, I know). Doing this for Android 3 and earlier seems to actually cause other problems, though (fun!)
			_ieVers,
			_supportsOpacity = (function() { //we set _isSafari, _ieVers, _isFirefox, and _supportsOpacity all in one function here to reduce file size slightly, especially in the minified version.
				var i = _agent.indexOf("Android"),
					d = _doc.createElement("div"), a;

				_isSafari = (_agent.indexOf("Safari") !== -1 && _agent.indexOf("Chrome") === -1 && (i === -1 || Number(_agent.substr(i+8, 1)) > 3));
				_isSafariLT6 = (_isSafari && (Number(_agent.substr(_agent.indexOf("Version/")+8, 1)) < 6));
				_isFirefox = (_agent.indexOf("Firefox") !== -1);

				if ((/MSIE ([0-9]{1,}[\.0-9]{0,})/).exec(_agent)) {
					_ieVers = parseFloat( RegExp.$1 );
				}

				d.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>";
				a = d.getElementsByTagName("a")[0];
				return a ? /^0.55/.test(a.style.opacity) : false;
			}()),
			_getIEOpacity = function(v) {
				return (_opacityExp.test( ((typeof(v) === "string") ? v : (v.currentStyle ? v.currentStyle.filter : v.style.filter) || "") ) ? ( parseFloat( RegExp.$1 ) / 100 ) : 1);
			},
			_log = function(s) {//for logging messages, but in a way that won't throw errors in old versions of IE.
				if (window.console) {
					console.log(s);
				}
			},
			_prefixCSS = "", //the non-camelCase vendor prefix like "-o-", "-moz-", "-ms-", or "-webkit-"
			_prefix = "", //camelCase vendor prefix like "O", "ms", "Webkit", or "Moz".

			// @private feed in a camelCase property name like "transform" and it will check to see if it is valid as-is or if it needs a vendor prefix. It returns the corrected camelCase property name (i.e. "WebkitTransform" or "MozTransform" or "transform" or null if no such property is found, like if the browser is IE8 or before, "transform" won't be found at all)
			_checkPropPrefix = function(p, e) {
				e = e || _tempDiv;
				var s = e.style,
					a, i;
				if (s[p] !== undefined) {
					return p;
				}
				p = p.charAt(0).toUpperCase() + p.substr(1);
				a = ["O","Moz","ms","Ms","Webkit"];
				i = 5;
				while (--i > -1 && s[a[i]+p] === undefined) { }
				if (i >= 0) {
					_prefix = (i === 3) ? "ms" : a[i];
					_prefixCSS = "-" + _prefix.toLowerCase() + "-";
					return _prefix + p;
				}
				return null;
			},

			_getComputedStyle = _doc.defaultView ? _doc.defaultView.getComputedStyle : function() {},

			/**
			 * @private Returns the css style for a particular property of an element. For example, to get whatever the current "left" css value for an element with an ID of "myElement", you could do:
			 * var currentLeft = CSSPlugin.getStyle( document.getElementById("myElement"), "left");
			 *
			 * @param {!Object} t Target element whose style property you want to query
			 * @param {!string} p Property name (like "left" or "top" or "marginTop", etc.)
			 * @param {Object=} cs Computed style object. This just provides a way to speed processing if you're going to get several properties on the same element in quick succession - you can reuse the result of the getComputedStyle() call.
			 * @param {boolean=} calc If true, the value will not be read directly from the element's "style" property (if it exists there), but instead the getComputedStyle() result will be used. This can be useful when you want to ensure that the browser itself is interpreting the value.
			 * @param {string=} dflt Default value that should be returned in the place of null, "none", "auto" or "auto auto".
			 * @return {?string} The current property value
			 */
			_getStyle = CSSPlugin.getStyle = function(t, p, cs, calc, dflt) {
				var rv;
				if (!_supportsOpacity) if (p === "opacity") { //several versions of IE don't use the standard "opacity" property - they use things like filter:alpha(opacity=50), so we parse that here.
					return _getIEOpacity(t);
				}
				if (!calc && t.style[p]) {
					rv = t.style[p];
				} else if ((cs = cs || _getComputedStyle(t, null))) {
					rv = cs[p] || cs.getPropertyValue(p) || cs.getPropertyValue(p.replace(_capsExp, "-$1").toLowerCase());
				} else if (t.currentStyle) {
					rv = t.currentStyle[p];
				}
				return (dflt != null && (!rv || rv === "none" || rv === "auto" || rv === "auto auto")) ? dflt : rv;
			},

			/**
			 * @private Pass the target element, the property name, the numeric value, and the suffix (like "%", "em", "px", etc.) and it will spit back the equivalent pixel number.
			 * @param {!Object} t Target element
			 * @param {!string} p Property name (like "left", "top", "marginLeft", etc.)
			 * @param {!number} v Value
			 * @param {string=} sfx Suffix (like "px" or "%" or "em")
			 * @param {boolean=} recurse If true, the call is a recursive one. In some browsers (like IE7/8), occasionally the value isn't accurately reported initially, but if we run the function again it will take effect.
			 * @return {number} value in pixels
			 */
			_convertToPixels = _internals.convertToPixels = function(t, p, v, sfx, recurse) {
				if (sfx === "px" || !sfx) { return v; }
				if (sfx === "auto" || !v) { return 0; }
				var horiz = _horizExp.test(p),
					node = t,
					style = _tempDiv.style,
					neg = (v < 0),
					pix, cache, time;
				if (neg) {
					v = -v;
				}
				if (sfx === "%" && p.indexOf("border") !== -1) {
					pix = (v / 100) * (horiz ? t.clientWidth : t.clientHeight);
				} else {
					style.cssText = "border:0 solid red;position:" + _getStyle(t, "position") + ";line-height:0;";
					if (sfx === "%" || !node.appendChild) {
						node = t.parentNode || _doc.body;
						cache = node._gsCache;
						time = TweenLite.ticker.frame;
						if (cache && horiz && cache.time === time) { //performance optimization: we record the width of elements along with the ticker frame so that we can quickly get it again on the same tick (seems relatively safe to assume it wouldn't change on the same tick)
							return cache.width * v / 100;
						}
						style[(horiz ? "width" : "height")] = v + sfx;
					} else {
						style[(horiz ? "borderLeftWidth" : "borderTopWidth")] = v + sfx;
					}
					node.appendChild(_tempDiv);
					pix = parseFloat(_tempDiv[(horiz ? "offsetWidth" : "offsetHeight")]);
					node.removeChild(_tempDiv);
					if (horiz && sfx === "%" && CSSPlugin.cacheWidths !== false) {
						cache = node._gsCache = node._gsCache || {};
						cache.time = time;
						cache.width = pix / v * 100;
					}
					if (pix === 0 && !recurse) {
						pix = _convertToPixels(t, p, v, sfx, true);
					}
				}
				return neg ? -pix : pix;
			},
			_calculateOffset = _internals.calculateOffset = function(t, p, cs) { //for figuring out "top" or "left" in px when it's "auto". We need to factor in margin with the offsetLeft/offsetTop
				if (_getStyle(t, "position", cs) !== "absolute") { return 0; }
				var dim = ((p === "left") ? "Left" : "Top"),
					v = _getStyle(t, "margin" + dim, cs);
				return t["offset" + dim] - (_convertToPixels(t, p, parseFloat(v), v.replace(_suffixExp, "")) || 0);
			},

			// @private returns at object containing ALL of the style properties in camelCase and their associated values.
			_getAllStyles = function(t, cs) {
				var s = {},
					i, tr;
				if ((cs = cs || _getComputedStyle(t, null))) {
					if ((i = cs.length)) {
						while (--i > -1) {
							s[cs[i].replace(_camelExp, _camelFunc)] = cs.getPropertyValue(cs[i]);
						}
					} else { //Opera behaves differently - cs.length is always 0, so we must do a for...in loop.
						for (i in cs) {
							s[i] = cs[i];
						}
					}
				} else if ((cs = t.currentStyle || t.style)) {
					for (i in cs) {
						if (typeof(i) === "string" && s[i] === undefined) {
							s[i.replace(_camelExp, _camelFunc)] = cs[i];
						}
					}
				}
				if (!_supportsOpacity) {
					s.opacity = _getIEOpacity(t);
				}
				tr = _getTransform(t, cs, false);
				s.rotation = tr.rotation;
				s.skewX = tr.skewX;
				s.scaleX = tr.scaleX;
				s.scaleY = tr.scaleY;
				s.x = tr.x;
				s.y = tr.y;
				if (_supports3D) {
					s.z = tr.z;
					s.rotationX = tr.rotationX;
					s.rotationY = tr.rotationY;
					s.scaleZ = tr.scaleZ;
				}
				if (s.filters) {
					delete s.filters;
				}
				return s;
			},

			// @private analyzes two style objects (as returned by _getAllStyles()) and only looks for differences between them that contain tweenable values (like a number or color). It returns an object with a "difs" property which refers to an object containing only those isolated properties and values for tweening, and a "firstMPT" property which refers to the first MiniPropTween instance in a linked list that recorded all the starting values of the different properties so that we can revert to them at the end or beginning of the tween - we don't want the cascading to get messed up. The forceLookup parameter is an optional generic object with properties that should be forced into the results - this is necessary for className tweens that are overwriting others because imagine a scenario where a rollover/rollout adds/removes a class and the user swipes the mouse over the target SUPER fast, thus nothing actually changed yet and the subsequent comparison of the properties would indicate they match (especially when px rounding is taken into consideration), thus no tweening is necessary even though it SHOULD tween and remove those properties after the tween (otherwise the inline styles will contaminate things). See the className SpecialProp code for details.
			_cssDif = function(t, s1, s2, vars, forceLookup) {
				var difs = {},
					style = t.style,
					val, p, mpt;
				for (p in s2) {
					if (p !== "cssText") if (p !== "length") if (isNaN(p)) if (s1[p] !== (val = s2[p]) || (forceLookup && forceLookup[p])) if (p.indexOf("Origin") === -1) if (typeof(val) === "number" || typeof(val) === "string") {
						difs[p] = (val === "auto" && (p === "left" || p === "top")) ? _calculateOffset(t, p) : ((val === "" || val === "auto" || val === "none") && typeof(s1[p]) === "string" && s1[p].replace(_NaNExp, "") !== "") ? 0 : val; //if the ending value is defaulting ("" or "auto"), we check the starting value and if it can be parsed into a number (a string which could have a suffix too, like 700px), then we swap in 0 for "" or "auto" so that things actually tween.
						if (style[p] !== undefined) { //for className tweens, we must remember which properties already existed inline - the ones that didn't should be removed when the tween isn't in progress because they were only introduced to facilitate the transition between classes.
							mpt = new MiniPropTween(style, p, style[p], mpt);
						}
					}
				}
				if (vars) {
					for (p in vars) { //copy properties (except className)
						if (p !== "className") {
							difs[p] = vars[p];
						}
					}
				}
				return {difs:difs, firstMPT:mpt};
			},
			_dimensions = {width:["Left","Right"], height:["Top","Bottom"]},
			_margins = ["marginLeft","marginRight","marginTop","marginBottom"],

			/**
			 * @private Gets the width or height of an element
			 * @param {!Object} t Target element
			 * @param {!string} p Property name ("width" or "height")
			 * @param {Object=} cs Computed style object (if one exists). Just a speed optimization.
			 * @return {number} Dimension (in pixels)
			 */
			_getDimension = function(t, p, cs) {
				var v = parseFloat((p === "width") ? t.offsetWidth : t.offsetHeight),
					a = _dimensions[p],
					i = a.length;
				cs = cs || _getComputedStyle(t, null);
				while (--i > -1) {
					v -= parseFloat( _getStyle(t, "padding" + a[i], cs, true) ) || 0;
					v -= parseFloat( _getStyle(t, "border" + a[i] + "Width", cs, true) ) || 0;
				}
				return v;
			},

			// @private Parses position-related complex strings like "top left" or "50px 10px" or "70% 20%", etc. which are used for things like transformOrigin or backgroundPosition. Optionally decorates a supplied object (recObj) with the following properties: "ox" (offsetX), "oy" (offsetY), "oxp" (if true, "ox" is a percentage not a pixel value), and "oxy" (if true, "oy" is a percentage not a pixel value)
			_parsePosition = function(v, recObj) {
				if (v == null || v === "" || v === "auto" || v === "auto auto") { //note: Firefox uses "auto auto" as default whereas Chrome uses "auto".
					v = "0 0";
				}
				var a = v.split(" "),
					x = (v.indexOf("left") !== -1) ? "0%" : (v.indexOf("right") !== -1) ? "100%" : a[0],
					y = (v.indexOf("top") !== -1) ? "0%" : (v.indexOf("bottom") !== -1) ? "100%" : a[1];
				if (y == null) {
					y = "0";
				} else if (y === "center") {
					y = "50%";
				}
				if (x === "center" || (isNaN(parseFloat(x)) && (x + "").indexOf("=") === -1)) { //remember, the user could flip-flop the values and say "bottom center" or "center bottom", etc. "center" is ambiguous because it could be used to describe horizontal or vertical, hence the isNaN(). If there's an "=" sign in the value, it's relative.
					x = "50%";
				}
				if (recObj) {
					recObj.oxp = (x.indexOf("%") !== -1);
					recObj.oyp = (y.indexOf("%") !== -1);
					recObj.oxr = (x.charAt(1) === "=");
					recObj.oyr = (y.charAt(1) === "=");
					recObj.ox = parseFloat(x.replace(_NaNExp, ""));
					recObj.oy = parseFloat(y.replace(_NaNExp, ""));
				}
				return x + " " + y + ((a.length > 2) ? " " + a[2] : "");
			},

			/**
			 * @private Takes an ending value (typically a string, but can be a number) and a starting value and returns the change between the two, looking for relative value indicators like += and -= and it also ignores suffixes (but make sure the ending value starts with a number or +=/-= and that the starting value is a NUMBER!)
			 * @param {(number|string)} e End value which is typically a string, but could be a number
			 * @param {(number|string)} b Beginning value which is typically a string but could be a number
			 * @return {number} Amount of change between the beginning and ending values (relative values that have a "+=" or "-=" are recognized)
			 */
			_parseChange = function(e, b) {
				return (typeof(e) === "string" && e.charAt(1) === "=") ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(b);
			},

			/**
			 * @private Takes a value and a default number, checks if the value is relative, null, or numeric and spits back a normalized number accordingly. Primarily used in the _parseTransform() function.
			 * @param {Object} v Value to be parsed
			 * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
			 * @return {number} Parsed value
			 */
			_parseVal = function(v, d) {
				return (v == null) ? d : (typeof(v) === "string" && v.charAt(1) === "=") ? parseInt(v.charAt(0) + "1", 10) * Number(v.substr(2)) + d : parseFloat(v);
			},

			/**
			 * @private Translates strings like "40deg" or "40" or 40rad" or "+=40deg" or "270_short" or "-90_cw" or "+=45_ccw" to a numeric radian angle. Of course a starting/default value must be fed in too so that relative values can be calculated properly.
			 * @param {Object} v Value to be parsed
			 * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
			 * @param {string=} p property name for directionalEnd (optional - only used when the parsed value is directional ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation). Property name would be "rotation", "rotationX", or "rotationY"
			 * @param {Object=} directionalEnd An object that will store the raw end values for directional angles ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation.
			 * @return {number} parsed angle in radians
			 */
			_parseAngle = function(v, d, p, directionalEnd) {
				var min = 0.000001,
					cap, split, dif, result;
				if (v == null) {
					result = d;
				} else if (typeof(v) === "number") {
					result = v;
				} else {
					cap = 360;
					split = v.split("_");
					dif = Number(split[0].replace(_NaNExp, "")) * ((v.indexOf("rad") === -1) ? 1 : _RAD2DEG) - ((v.charAt(1) === "=") ? 0 : d);
					if (split.length) {
						if (directionalEnd) {
							directionalEnd[p] = d + dif;
						}
						if (v.indexOf("short") !== -1) {
							dif = dif % cap;
							if (dif !== dif % (cap / 2)) {
								dif = (dif < 0) ? dif + cap : dif - cap;
							}
						}
						if (v.indexOf("_cw") !== -1 && dif < 0) {
							dif = ((dif + cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
						} else if (v.indexOf("ccw") !== -1 && dif > 0) {
							dif = ((dif - cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
						}
					}
					result = d + dif;
				}
				if (result < min && result > -min) {
					result = 0;
				}
				return result;
			},

			_colorLookup = {aqua:[0,255,255],
				lime:[0,255,0],
				silver:[192,192,192],
				black:[0,0,0],
				maroon:[128,0,0],
				teal:[0,128,128],
				blue:[0,0,255],
				navy:[0,0,128],
				white:[255,255,255],
				fuchsia:[255,0,255],
				olive:[128,128,0],
				yellow:[255,255,0],
				orange:[255,165,0],
				gray:[128,128,128],
				purple:[128,0,128],
				green:[0,128,0],
				red:[255,0,0],
				pink:[255,192,203],
				cyan:[0,255,255],
				transparent:[255,255,255,0]},

			_hue = function(h, m1, m2) {
				h = (h < 0) ? h + 1 : (h > 1) ? h - 1 : h;
				return ((((h * 6 < 1) ? m1 + (m2 - m1) * h * 6 : (h < 0.5) ? m2 : (h * 3 < 2) ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * 255) + 0.5) | 0;
			},

			/**
			 * @private Parses a color (like #9F0, #FF9900, or rgb(255,51,153)) into an array with 3 elements for red, green, and blue. Also handles rgba() values (splits into array of 4 elements of course)
			 * @param {(string|number)} v The value the should be parsed which could be a string like #9F0 or rgb(255,102,51) or rgba(255,0,0,0.5) or it could be a number like 0xFF00CC or even a named color like red, blue, purple, etc.
			 * @return {Array.<number>} An array containing red, green, and blue (and optionally alpha) in that order.
			 */
			_parseColor = function(v) {
				var c1, c2, c3, h, s, l;
				if (!v || v === "") {
					return _colorLookup.black;
				}
				if (typeof(v) === "number") {
					return [v >> 16, (v >> 8) & 255, v & 255];
				}
				if (v.charAt(v.length - 1) === ",") { //sometimes a trailing commma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
					v = v.substr(0, v.length - 1);
				}
				if (_colorLookup[v]) {
					return _colorLookup[v];
				}
				if (v.charAt(0) === "#") {
					if (v.length === 4) { //for shorthand like #9F0
						c1 = v.charAt(1),
						c2 = v.charAt(2),
						c3 = v.charAt(3);
						v = "#" + c1 + c1 + c2 + c2 + c3 + c3;
					}
					v = parseInt(v.substr(1), 16);
					return [v >> 16, (v >> 8) & 255, v & 255];
				}
				if (v.substr(0, 3) === "hsl") {
					v = v.match(_numExp);
					h = (Number(v[0]) % 360) / 360;
					s = Number(v[1]) / 100;
					l = Number(v[2]) / 100;
					c2 = (l <= 0.5) ? l * (s + 1) : l + s - l * s;
					c1 = l * 2 - c2;
					if (v.length > 3) {
						v[3] = Number(v[3]);
					}
					v[0] = _hue(h + 1 / 3, c1, c2);
					v[1] = _hue(h, c1, c2);
					v[2] = _hue(h - 1 / 3, c1, c2);
					return v;
				}
				v = v.match(_numExp) || _colorLookup.transparent;
				v[0] = Number(v[0]);
				v[1] = Number(v[1]);
				v[2] = Number(v[2]);
				if (v.length > 3) {
					v[3] = Number(v[3]);
				}
				return v;
			},
			_colorExp = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b"; //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.

		for (p in _colorLookup) {
			_colorExp += "|" + p + "\\b";
		}
		_colorExp = new RegExp(_colorExp+")", "gi");

		/**
		 * @private Returns a formatter function that handles taking a string (or number in some cases) and returning a consistently formatted one in terms of delimiters, quantity of values, etc. For example, we may get boxShadow values defined as "0px red" or "0px 0px 10px rgb(255,0,0)" or "0px 0px 20px 20px #F00" and we need to ensure that what we get back is described with 4 numbers and a color. This allows us to feed it into the _parseComplex() method and split the values up appropriately. The neat thing about this _getFormatter() function is that the dflt defines a pattern as well as a default, so for example, _getFormatter("0px 0px 0px 0px #777", true) not only sets the default as 0px for all distances and #777 for the color, but also sets the pattern such that 4 numbers and a color will always get returned.
		 * @param {!string} dflt The default value and pattern to follow. So "0px 0px 0px 0px #777" will ensure that 4 numbers and a color will always get returned.
		 * @param {boolean=} clr If true, the values should be searched for color-related data. For example, boxShadow values typically contain a color whereas borderRadius don't.
		 * @param {boolean=} collapsible If true, the value is a top/left/right/bottom style one that acts like margin or padding, where if only one value is received, it's used for all 4; if 2 are received, the first is duplicated for 3rd (bottom) and the 2nd is duplicated for the 4th spot (left), etc.
		 * @return {Function} formatter function
		 */
		var _getFormatter = function(dflt, clr, collapsible, multi) {
				if (dflt == null) {
					return function(v) {return v;};
				}
				var dColor = clr ? (dflt.match(_colorExp) || [""])[0] : "",
					dVals = dflt.split(dColor).join("").match(_valuesExp) || [],
					pfx = dflt.substr(0, dflt.indexOf(dVals[0])),
					sfx = (dflt.charAt(dflt.length - 1) === ")") ? ")" : "",
					delim = (dflt.indexOf(" ") !== -1) ? " " : ",",
					numVals = dVals.length,
					dSfx = (numVals > 0) ? dVals[0].replace(_numExp, "") : "",
					formatter;
				if (!numVals) {
					return function(v) {return v;};
				}
				if (clr) {
					formatter = function(v) {
						var color, vals, i, a;
						if (typeof(v) === "number") {
							v += dSfx;
						} else if (multi && _commasOutsideParenExp.test(v)) {
							a = v.replace(_commasOutsideParenExp, "|").split("|");
							for (i = 0; i < a.length; i++) {
								a[i] = formatter(a[i]);
							}
							return a.join(",");
						}
						color = (v.match(_colorExp) || [dColor])[0];
						vals = v.split(color).join("").match(_valuesExp) || [];
						i = vals.length;
						if (numVals > i--) {
							while (++i < numVals) {
								vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i];
							}
						}
						return pfx + vals.join(delim) + delim + color + sfx + (v.indexOf("inset") !== -1 ? " inset" : "");
					};
					return formatter;

				}
				formatter = function(v) {
					var vals, a, i;
					if (typeof(v) === "number") {
						v += dSfx;
					} else if (multi && _commasOutsideParenExp.test(v)) {
						a = v.replace(_commasOutsideParenExp, "|").split("|");
						for (i = 0; i < a.length; i++) {
							a[i] = formatter(a[i]);
						}
						return a.join(",");
					}
					vals = v.match(_valuesExp) || [];
					i = vals.length;
					if (numVals > i--) {
						while (++i < numVals) {
							vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i];
						}
					}
					return pfx + vals.join(delim) + sfx;
				};
				return formatter;
			},

			/**
			 * @private returns a formatter function that's used for edge-related values like marginTop, marginLeft, paddingBottom, paddingRight, etc. Just pass a comma-delimited list of property names related to the edges.
			 * @param {!string} props a comma-delimited list of property names in order from top to left, like "marginTop,marginRight,marginBottom,marginLeft"
			 * @return {Function} a formatter function
			 */
			_getEdgeParser = function(props) {
				props = props.split(",");
				return function(t, e, p, cssp, pt, plugin, vars) {
					var a = (e + "").split(" "),
						i;
					vars = {};
					for (i = 0; i < 4; i++) {
						vars[props[i]] = a[i] = a[i] || a[(((i - 1) / 2) >> 0)];
					}
					return cssp.parse(t, vars, pt, plugin);
				};
			},

			// @private used when other plugins must tween values first, like BezierPlugin or ThrowPropsPlugin, etc. That plugin's setRatio() gets called first so that the values are updated, and then we loop through the MiniPropTweens  which handle copying the values into their appropriate slots so that they can then be applied correctly in the main CSSPlugin setRatio() method. Remember, we typically create a proxy object that has a bunch of uniquely-named properties that we feed to the sub-plugin and it does its magic normally, and then we must interpret those values and apply them to the css because often numbers must get combined/concatenated, suffixes added, etc. to work with css, like boxShadow could have 4 values plus a color.
			_setPluginRatio = _internals._setPluginRatio = function(v) {
				this.plugin.setRatio(v);
				var d = this.data,
					proxy = d.proxy,
					mpt = d.firstMPT,
					min = 0.000001,
					val, pt, i, str;
				while (mpt) {
					val = proxy[mpt.v];
					if (mpt.r) {
						val = Math.round(val);
					} else if (val < min && val > -min) {
						val = 0;
					}
					mpt.t[mpt.p] = val;
					mpt = mpt._next;
				}
				if (d.autoRotate) {
					d.autoRotate.rotation = proxy.rotation;
				}
				//at the end, we must set the CSSPropTween's "e" (end) value dynamically here because that's what is used in the final setRatio() method.
				if (v === 1) {
					mpt = d.firstMPT;
					while (mpt) {
						pt = mpt.t;
						if (!pt.type) {
							pt.e = pt.s + pt.xs0;
						} else if (pt.type === 1) {
							str = pt.xs0 + pt.s + pt.xs1;
							for (i = 1; i < pt.l; i++) {
								str += pt["xn"+i] + pt["xs"+(i+1)];
							}
							pt.e = str;
						}
						mpt = mpt._next;
					}
				}
			},

			/**
			 * @private @constructor Used by a few SpecialProps to hold important values for proxies. For example, _parseToProxy() creates a MiniPropTween instance for each property that must get tweened on the proxy, and we record the original property name as well as the unique one we create for the proxy, plus whether or not the value needs to be rounded plus the original value.
			 * @param {!Object} t target object whose property we're tweening (often a CSSPropTween)
			 * @param {!string} p property name
			 * @param {(number|string|object)} v value
			 * @param {MiniPropTween=} next next MiniPropTween in the linked list
			 * @param {boolean=} r if true, the tweened value should be rounded to the nearest integer
			 */
			MiniPropTween = function(t, p, v, next, r) {
				this.t = t;
				this.p = p;
				this.v = v;
				this.r = r;
				if (next) {
					next._prev = this;
					this._next = next;
				}
			},

			/**
			 * @private Most other plugins (like BezierPlugin and ThrowPropsPlugin and others) can only tween numeric values, but CSSPlugin must accommodate special values that have a bunch of extra data (like a suffix or strings between numeric values, etc.). For example, boxShadow has values like "10px 10px 20px 30px rgb(255,0,0)" which would utterly confuse other plugins. This method allows us to split that data apart and grab only the numeric data and attach it to uniquely-named properties of a generic proxy object ({}) so that we can feed that to virtually any plugin to have the numbers tweened. However, we must also keep track of which properties from the proxy go with which CSSPropTween values and instances. So we create a linked list of MiniPropTweens. Each one records a target (the original CSSPropTween), property (like "s" or "xn1" or "xn2") that we're tweening and the unique property name that was used for the proxy (like "boxShadow_xn1" and "boxShadow_xn2") and whether or not they need to be rounded. That way, in the _setPluginRatio() method we can simply copy the values over from the proxy to the CSSPropTween instance(s). Then, when the main CSSPlugin setRatio() method runs and applies the CSSPropTween values accordingly, they're updated nicely. So the external plugin tweens the numbers, _setPluginRatio() copies them over, and setRatio() acts normally, applying css-specific values to the element.
			 * This method returns an object that has the following properties:
			 *  - proxy: a generic object containing the starting values for all the properties that will be tweened by the external plugin.  This is what we feed to the external _onInitTween() as the target
			 *  - end: a generic object containing the ending values for all the properties that will be tweened by the external plugin. This is what we feed to the external plugin's _onInitTween() as the destination values
			 *  - firstMPT: the first MiniPropTween in the linked list
			 *  - pt: the first CSSPropTween in the linked list that was created when parsing. If shallow is true, this linked list will NOT attach to the one passed into the _parseToProxy() as the "pt" (4th) parameter.
			 * @param {!Object} t target object to be tweened
			 * @param {!(Object|string)} vars the object containing the information about the tweening values (typically the end/destination values) that should be parsed
			 * @param {!CSSPlugin} cssp The CSSPlugin instance
			 * @param {CSSPropTween=} pt the next CSSPropTween in the linked list
			 * @param {TweenPlugin=} plugin the external TweenPlugin instance that will be handling tweening the numeric values
			 * @param {boolean=} shallow if true, the resulting linked list from the parse will NOT be attached to the CSSPropTween that was passed in as the "pt" (4th) parameter.
			 * @return An object containing the following properties: proxy, end, firstMPT, and pt (see above for descriptions)
			 */
			_parseToProxy = _internals._parseToProxy = function(t, vars, cssp, pt, plugin, shallow) {
				var bpt = pt,
					start = {},
					end = {},
					transform = cssp._transform,
					oldForce = _forcePT,
					i, p, xp, mpt, firstPT;
				cssp._transform = null;
				_forcePT = vars;
				pt = firstPT = cssp.parse(t, vars, pt, plugin);
				_forcePT = oldForce;
				//break off from the linked list so the new ones are isolated.
				if (shallow) {
					cssp._transform = transform;
					if (bpt) {
						bpt._prev = null;
						if (bpt._prev) {
							bpt._prev._next = null;
						}
					}
				}
				while (pt && pt !== bpt) {
					if (pt.type <= 1) {
						p = pt.p;
						end[p] = pt.s + pt.c;
						start[p] = pt.s;
						if (!shallow) {
							mpt = new MiniPropTween(pt, "s", p, mpt, pt.r);
							pt.c = 0;
						}
						if (pt.type === 1) {
							i = pt.l;
							while (--i > 0) {
								xp = "xn" + i;
								p = pt.p + "_" + xp;
								end[p] = pt.data[xp];
								start[p] = pt[xp];
								if (!shallow) {
									mpt = new MiniPropTween(pt, xp, p, mpt, pt.rxp[xp]);
								}
							}
						}
					}
					pt = pt._next;
				}
				return {proxy:start, end:end, firstMPT:mpt, pt:firstPT};
			},



			/**
			 * @constructor Each property that is tweened has at least one CSSPropTween associated with it. These instances store important information like the target, property, starting value, amount of change, etc. They can also optionally have a number of "extra" strings and numeric values named xs1, xn1, xs2, xn2, xs3, xn3, etc. where "s" indicates string and "n" indicates number. These can be pieced together in a complex-value tween (type:1) that has alternating types of data like a string, number, string, number, etc. For example, boxShadow could be "5px 5px 8px rgb(102, 102, 51)". In that value, there are 6 numbers that may need to tween and then pieced back together into a string again with spaces, suffixes, etc. xs0 is special in that it stores the suffix for standard (type:0) tweens, -OR- the first string (prefix) in a complex-value (type:1) CSSPropTween -OR- it can be the non-tweening value in a type:-1 CSSPropTween. We do this to conserve memory.
			 * CSSPropTweens have the following optional properties as well (not defined through the constructor):
			 *  - l: Length in terms of the number of extra properties that the CSSPropTween has (default: 0). For example, for a boxShadow we may need to tween 5 numbers in which case l would be 5; Keep in mind that the start/end values for the first number that's tweened are always stored in the s and c properties to conserve memory. All additional values thereafter are stored in xn1, xn2, etc.
			 *  - xfirst: The first instance of any sub-CSSPropTweens that are tweening properties of this instance. For example, we may split up a boxShadow tween so that there's a main CSSPropTween of type:1 that has various xs* and xn* values associated with the h-shadow, v-shadow, blur, color, etc. Then we spawn a CSSPropTween for each of those that has a higher priority and runs BEFORE the main CSSPropTween so that the values are all set by the time it needs to re-assemble them. The xfirst gives us an easy way to identify the first one in that chain which typically ends at the main one (because they're all prepende to the linked list)
			 *  - plugin: The TweenPlugin instance that will handle the tweening of any complex values. For example, sometimes we don't want to use normal subtweens (like xfirst refers to) to tween the values - we might want ThrowPropsPlugin or BezierPlugin some other plugin to do the actual tweening, so we create a plugin instance and store a reference here. We need this reference so that if we get a request to round values or disable a tween, we can pass along that request.
			 *  - data: Arbitrary data that needs to be stored with the CSSPropTween. Typically if we're going to have a plugin handle the tweening of a complex-value tween, we create a generic object that stores the END values that we're tweening to and the CSSPropTween's xs1, xs2, etc. have the starting values. We store that object as data. That way, we can simply pass that object to the plugin and use the CSSPropTween as the target.
			 *  - setRatio: Only used for type:2 tweens that require custom functionality. In this case, we call the CSSPropTween's setRatio() method and pass the ratio each time the tween updates. This isn't quite as efficient as doing things directly in the CSSPlugin's setRatio() method, but it's very convenient and flexible.
			 * @param {!Object} t Target object whose property will be tweened. Often a DOM element, but not always. It could be anything.
			 * @param {string} p Property to tween (name). For example, to tween element.width, p would be "width".
			 * @param {number} s Starting numeric value
			 * @param {number} c Change in numeric value over the course of the entire tween. For example, if element.width starts at 5 and should end at 100, c would be 95.
			 * @param {CSSPropTween=} next The next CSSPropTween in the linked list. If one is defined, we will define its _prev as the new instance, and the new instance's _next will be pointed at it.
			 * @param {number=} type The type of CSSPropTween where -1 = a non-tweening value, 0 = a standard simple tween, 1 = a complex value (like one that has multiple numbers in a comma- or space-delimited string like border:"1px solid red"), and 2 = one that uses a custom setRatio function that does all of the work of applying the values on each update.
			 * @param {string=} n Name of the property that should be used for overwriting purposes which is typically the same as p but not always. For example, we may need to create a subtween for the 2nd part of a "clip:rect(...)" tween in which case "p" might be xs1 but "n" is still "clip"
			 * @param {boolean=} r If true, the value(s) should be rounded
			 * @param {number=} pr Priority in the linked list order. Higher priority CSSPropTweens will be updated before lower priority ones. The default priority is 0.
			 * @param {string=} b Beginning value. We store this to ensure that it is EXACTLY what it was when the tween began without any risk of interpretation issues.
			 * @param {string=} e Ending value. We store this to ensure that it is EXACTLY what the user defined at the end of the tween without any risk of interpretation issues.
			 */
			CSSPropTween = _internals.CSSPropTween = function(t, p, s, c, next, type, n, r, pr, b, e) {
				this.t = t; //target
				this.p = p; //property
				this.s = s; //starting value
				this.c = c; //change value
				this.n = n || p; //name that this CSSPropTween should be associated to (usually the same as p, but not always - n is what overwriting looks at)
				if (!(t instanceof CSSPropTween)) {
					_overwriteProps.push(this.n);
				}
				this.r = r; //round (boolean)
				this.type = type || 0; //0 = normal tween, -1 = non-tweening (in which case xs0 will be applied to the target's property, like tp.t[tp.p] = tp.xs0), 1 = complex-value SpecialProp, 2 = custom setRatio() that does all the work
				if (pr) {
					this.pr = pr;
					_hasPriority = true;
				}
				this.b = (b === undefined) ? s : b;
				this.e = (e === undefined) ? s + c : e;
				if (next) {
					this._next = next;
					next._prev = this;
				}
			},

			/**
			 * Takes a target, the beginning value and ending value (as strings) and parses them into a CSSPropTween (possibly with child CSSPropTweens) that accommodates multiple numbers, colors, comma-delimited values, etc. For example:
			 * sp.parseComplex(element, "boxShadow", "5px 10px 20px rgb(255,102,51)", "0px 0px 0px red", true, "0px 0px 0px rgb(0,0,0,0)", pt);
			 * It will walk through the beginning and ending values (which should be in the same format with the same number and type of values) and figure out which parts are numbers, what strings separate the numeric/tweenable values, and then create the CSSPropTweens accordingly. If a plugin is defined, no child CSSPropTweens will be created. Instead, the ending values will be stored in the "data" property of the returned CSSPropTween like: {s:-5, xn1:-10, xn2:-20, xn3:255, xn4:0, xn5:0} so that it can be fed to any other plugin and it'll be plain numeric tweens but the recomposition of the complex value will be handled inside CSSPlugin's setRatio().
			 * If a setRatio is defined, the type of the CSSPropTween will be set to 2 and recomposition of the values will be the responsibility of that method.
			 *
			 * @param {!Object} t Target whose property will be tweened
			 * @param {!string} p Property that will be tweened (its name, like "left" or "backgroundColor" or "boxShadow")
			 * @param {string} b Beginning value
			 * @param {string} e Ending value
			 * @param {boolean} clrs If true, the value could contain a color value like "rgb(255,0,0)" or "#F00" or "red". The default is false, so no colors will be recognized (a performance optimization)
			 * @param {(string|number|Object)} dflt The default beginning value that should be used if no valid beginning value is defined or if the number of values inside the complex beginning and ending values don't match
			 * @param {?CSSPropTween} pt CSSPropTween instance that is the current head of the linked list (we'll prepend to this).
			 * @param {number=} pr Priority in the linked list order. Higher priority properties will be updated before lower priority ones. The default priority is 0.
			 * @param {TweenPlugin=} plugin If a plugin should handle the tweening of extra properties, pass the plugin instance here. If one is defined, then NO subtweens will be created for any extra properties (the properties will be created - just not additional CSSPropTween instances to tween them) because the plugin is expected to do so. However, the end values WILL be populated in the "data" property, like {s:100, xn1:50, xn2:300}
			 * @param {function(number)=} setRatio If values should be set in a custom function instead of being pieced together in a type:1 (complex-value) CSSPropTween, define that custom function here.
			 * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parseComplex() call.
			 */
			_parseComplex = CSSPlugin.parseComplex = function(t, p, b, e, clrs, dflt, pt, pr, plugin, setRatio) {
				//DEBUG: _log("parseComplex: "+p+", b: "+b+", e: "+e);
				b = b || dflt || "";
				pt = new CSSPropTween(t, p, 0, 0, pt, (setRatio ? 2 : 1), null, false, pr, b, e);
				e += ""; //ensures it's a string
				var ba = b.split(", ").join(",").split(" "), //beginning array
					ea = e.split(", ").join(",").split(" "), //ending array
					l = ba.length,
					autoRound = (_autoRound !== false),
					i, xi, ni, bv, ev, bnums, enums, bn, rgba, temp, cv, str;
				if (e.indexOf(",") !== -1 || b.indexOf(",") !== -1) {
					ba = ba.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
					ea = ea.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
					l = ba.length;
				}
				if (l !== ea.length) {
					//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
					ba = (dflt || "").split(" ");
					l = ba.length;
				}
				pt.plugin = plugin;
				pt.setRatio = setRatio;
				for (i = 0; i < l; i++) {
					bv = ba[i];
					ev = ea[i];
					bn = parseFloat(bv);

					//if the value begins with a number (most common). It's fine if it has a suffix like px
					if (bn || bn === 0) {
						pt.appendXtra("", bn, _parseChange(ev, bn), ev.replace(_relNumExp, ""), (autoRound && ev.indexOf("px") !== -1), true);

					//if the value is a color
					} else if (clrs && (bv.charAt(0) === "#" || _colorLookup[bv] || _rgbhslExp.test(bv))) {
						str = ev.charAt(ev.length - 1) === "," ? ")," : ")"; //if there's a comma at the end, retain it.
						bv = _parseColor(bv);
						ev = _parseColor(ev);
						rgba = (bv.length + ev.length > 6);
						if (rgba && !_supportsOpacity && ev[3] === 0) { //older versions of IE don't support rgba(), so if the destination alpha is 0, just use "transparent" for the end color
							pt["xs" + pt.l] += pt.l ? " transparent" : "transparent";
							pt.e = pt.e.split(ea[i]).join("transparent");
						} else {
							if (!_supportsOpacity) { //old versions of IE don't support rgba().
								rgba = false;
							}
							pt.appendXtra((rgba ? "rgba(" : "rgb("), bv[0], ev[0] - bv[0], ",", true, true)
								.appendXtra("", bv[1], ev[1] - bv[1], ",", true)
								.appendXtra("", bv[2], ev[2] - bv[2], (rgba ? "," : str), true);
							if (rgba) {
								bv = (bv.length < 4) ? 1 : bv[3];
								pt.appendXtra("", bv, ((ev.length < 4) ? 1 : ev[3]) - bv, str, false);
							}
						}

					} else {
						bnums = bv.match(_numExp); //gets each group of numbers in the beginning value string and drops them into an array

						//if no number is found, treat it as a non-tweening value and just append the string to the current xs.
						if (!bnums) {
							pt["xs" + pt.l] += pt.l ? " " + bv : bv;

						//loop through all the numbers that are found and construct the extra values on the pt.
						} else {
							enums = ev.match(_relNumExp); //get each group of numbers in the end value string and drop them into an array. We allow relative values too, like +=50 or -=.5
							if (!enums || enums.length !== bnums.length) {
								//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
								return pt;
							}
							ni = 0;
							for (xi = 0; xi < bnums.length; xi++) {
								cv = bnums[xi];
								temp = bv.indexOf(cv, ni);
								pt.appendXtra(bv.substr(ni, temp - ni), Number(cv), _parseChange(enums[xi], cv), "", (autoRound && bv.substr(temp + cv.length, 2) === "px"), (xi === 0));
								ni = temp + cv.length;
							}
							pt["xs" + pt.l] += bv.substr(ni);
						}
					}
				}
				//if there are relative values ("+=" or "-=" prefix), we need to adjust the ending value to eliminate the prefixes and combine the values properly.
				if (e.indexOf("=") !== -1) if (pt.data) {
					str = pt.xs0 + pt.data.s;
					for (i = 1; i < pt.l; i++) {
						str += pt["xs" + i] + pt.data["xn" + i];
					}
					pt.e = str + pt["xs" + i];
				}
				if (!pt.l) {
					pt.type = -1;
					pt.xs0 = pt.e;
				}
				return pt.xfirst || pt;
			},
			i = 9;


		p = CSSPropTween.prototype;
		p.l = p.pr = 0; //length (number of extra properties like xn1, xn2, xn3, etc.
		while (--i > 0) {
			p["xn" + i] = 0;
			p["xs" + i] = "";
		}
		p.xs0 = "";
		p._next = p._prev = p.xfirst = p.data = p.plugin = p.setRatio = p.rxp = null;


		/**
		 * Appends and extra tweening value to a CSSPropTween and automatically manages any prefix and suffix strings. The first extra value is stored in the s and c of the main CSSPropTween instance, but thereafter any extras are stored in the xn1, xn2, xn3, etc. The prefixes and suffixes are stored in the xs0, xs1, xs2, etc. properties. For example, if I walk through a clip value like "rect(10px, 5px, 0px, 20px)", the values would be stored like this:
		 * xs0:"rect(", s:10, xs1:"px, ", xn1:5, xs2:"px, ", xn2:0, xs3:"px, ", xn3:20, xn4:"px)"
		 * And they'd all get joined together when the CSSPlugin renders (in the setRatio() method).
		 * @param {string=} pfx Prefix (if any)
		 * @param {!number} s Starting value
		 * @param {!number} c Change in numeric value over the course of the entire tween. For example, if the start is 5 and the end is 100, the change would be 95.
		 * @param {string=} sfx Suffix (if any)
		 * @param {boolean=} r Round (if true).
		 * @param {boolean=} pad If true, this extra value should be separated by the previous one by a space. If there is no previous extra and pad is true, it will automatically drop the space.
		 * @return {CSSPropTween} returns itself so that multiple methods can be chained together.
		 */
		p.appendXtra = function(pfx, s, c, sfx, r, pad) {
			var pt = this,
				l = pt.l;
			pt["xs" + l] += (pad && l) ? " " + pfx : pfx || "";
			if (!c) if (l !== 0 && !pt.plugin) { //typically we'll combine non-changing values right into the xs to optimize performance, but we don't combine them when there's a plugin that will be tweening the values because it may depend on the values being split apart, like for a bezier, if a value doesn't change between the first and second iteration but then it does on the 3rd, we'll run into trouble because there's no xn slot for that value!
				pt["xs" + l] += s + (sfx || "");
				return pt;
			}
			pt.l++;
			pt.type = pt.setRatio ? 2 : 1;
			pt["xs" + pt.l] = sfx || "";
			if (l > 0) {
				pt.data["xn" + l] = s + c;
				pt.rxp["xn" + l] = r; //round extra property (we need to tap into this in the _parseToProxy() method)
				pt["xn" + l] = s;
				if (!pt.plugin) {
					pt.xfirst = new CSSPropTween(pt, "xn" + l, s, c, pt.xfirst || pt, 0, pt.n, r, pt.pr);
					pt.xfirst.xs0 = 0; //just to ensure that the property stays numeric which helps modern browsers speed up processing. Remember, in the setRatio() method, we do pt.t[pt.p] = val + pt.xs0 so if pt.xs0 is "" (the default), it'll cast the end value as a string. When a property is a number sometimes and a string sometimes, it prevents the compiler from locking in the data type, slowing things down slightly.
				}
				return pt;
			}
			pt.data = {s:s + c};
			pt.rxp = {};
			pt.s = s;
			pt.c = c;
			pt.r = r;
			return pt;
		};

		/**
		 * @constructor A SpecialProp is basically a css property that needs to be treated in a non-standard way, like if it may contain a complex value like boxShadow:"5px 10px 15px rgb(255, 102, 51)" or if it is associated with another plugin like ThrowPropsPlugin or BezierPlugin. Every SpecialProp is associated with a particular property name like "boxShadow" or "throwProps" or "bezier" and it will intercept those values in the vars object that's passed to the CSSPlugin and handle them accordingly.
		 * @param {!string} p Property name (like "boxShadow" or "throwProps")
		 * @param {Object=} options An object containing any of the following configuration options:
		 *                      - defaultValue: the default value
		 *                      - parser: A function that should be called when the associated property name is found in the vars. This function should return a CSSPropTween instance and it should ensure that it is properly inserted into the linked list. It will receive 4 paramters: 1) The target, 2) The value defined in the vars, 3) The CSSPlugin instance (whose _firstPT should be used for the linked list), and 4) A computed style object if one was calculated (this is a speed optimization that allows retrieval of starting values quicker)
		 *                      - formatter: a function that formats any value received for this special property (for example, boxShadow could take "5px 5px red" and format it to "5px 5px 0px 0px red" so that both the beginning and ending values have a common order and quantity of values.)
		 *                      - prefix: if true, we'll determine whether or not this property requires a vendor prefix (like Webkit or Moz or ms or O)
		 *                      - color: set this to true if the value for this SpecialProp may contain color-related values like rgb(), rgba(), etc.
		 *                      - priority: priority in the linked list order. Higher priority SpecialProps will be updated before lower priority ones. The default priority is 0.
		 *                      - multi: if true, the formatter should accommodate a comma-delimited list of values, like boxShadow could have multiple boxShadows listed out.
		 *                      - collapsible: if true, the formatter should treat the value like it's a top/right/bottom/left value that could be collapsed, like "5px" would apply to all, "5px, 10px" would use 5px for top/bottom and 10px for right/left, etc.
		 *                      - keyword: a special keyword that can [optionally] be found inside the value (like "inset" for boxShadow). This allows us to validate beginning/ending values to make sure they match (if the keyword is found in one, it'll be added to the other for consistency by default).
		 */
		var SpecialProp = function(p, options) {
				options = options || {};
				this.p = options.prefix ? _checkPropPrefix(p) || p : p;
				_specialProps[p] = _specialProps[this.p] = this;
				this.format = options.formatter || _getFormatter(options.defaultValue, options.color, options.collapsible, options.multi);
				if (options.parser) {
					this.parse = options.parser;
				}
				this.clrs = options.color;
				this.multi = options.multi;
				this.keyword = options.keyword;
				this.dflt = options.defaultValue;
				this.pr = options.priority || 0;
			},

			//shortcut for creating a new SpecialProp that can accept multiple properties as a comma-delimited list (helps minification). dflt can be an array for multiple values (we don't do a comma-delimited list because the default value may contain commas, like rect(0px,0px,0px,0px)). We attach this method to the SpecialProp class/object instead of using a private _createSpecialProp() method so that we can tap into it externally if necessary, like from another plugin.
			_registerComplexSpecialProp = _internals._registerComplexSpecialProp = function(p, options, defaults) {
				if (typeof(options) !== "object") {
					options = {parser:defaults}; //to make backwards compatible with older versions of BezierPlugin and ThrowPropsPlugin
				}
				var a = p.split(","),
					d = options.defaultValue,
					i, temp;
				defaults = defaults || [d];
				for (i = 0; i < a.length; i++) {
					options.prefix = (i === 0 && options.prefix);
					options.defaultValue = defaults[i] || d;
					temp = new SpecialProp(a[i], options);
				}
			},

			//creates a placeholder special prop for a plugin so that the property gets caught the first time a tween of it is attempted, and at that time it makes the plugin register itself, thus taking over for all future tweens of that property. This allows us to not mandate that things load in a particular order and it also allows us to log() an error that informs the user when they attempt to tween an external plugin-related property without loading its .js file.
			_registerPluginProp = function(p) {
				if (!_specialProps[p]) {
					var pluginName = p.charAt(0).toUpperCase() + p.substr(1) + "Plugin";
					_registerComplexSpecialProp(p, {parser:function(t, e, p, cssp, pt, plugin, vars) {
						var pluginClass = (window.GreenSockGlobals || window).com.greensock.plugins[pluginName];
						if (!pluginClass) {
							_log("Error: " + pluginName + " js file not loaded.");
							return pt;
						}
						pluginClass._cssRegister();
						return _specialProps[p].parse(t, e, p, cssp, pt, plugin, vars);
					}});
				}
			};


		p = SpecialProp.prototype;

		/**
		 * Alias for _parseComplex() that automatically plugs in certain values for this SpecialProp, like its property name, whether or not colors should be sensed, the default value, and priority. It also looks for any keyword that the SpecialProp defines (like "inset" for boxShadow) and ensures that the beginning and ending values have the same number of values for SpecialProps where multi is true (like boxShadow and textShadow can have a comma-delimited list)
		 * @param {!Object} t target element
		 * @param {(string|number|object)} b beginning value
		 * @param {(string|number|object)} e ending (destination) value
		 * @param {CSSPropTween=} pt next CSSPropTween in the linked list
		 * @param {TweenPlugin=} plugin If another plugin will be tweening the complex value, that TweenPlugin instance goes here.
		 * @param {function=} setRatio If a custom setRatio() method should be used to handle this complex value, that goes here.
		 * @return {CSSPropTween=} First CSSPropTween in the linked list
		 */
		p.parseComplex = function(t, b, e, pt, plugin, setRatio) {
			var kwd = this.keyword,
				i, ba, ea, l, bi, ei;
			//if this SpecialProp's value can contain a comma-delimited list of values (like boxShadow or textShadow), we must parse them in a special way, and look for a keyword (like "inset" for boxShadow) and ensure that the beginning and ending BOTH have it if the end defines it as such. We also must ensure that there are an equal number of values specified (we can't tween 1 boxShadow to 3 for example)
			if (this.multi) if (_commasOutsideParenExp.test(e) || _commasOutsideParenExp.test(b)) {
				ba = b.replace(_commasOutsideParenExp, "|").split("|");
				ea = e.replace(_commasOutsideParenExp, "|").split("|");
			} else if (kwd) {
				ba = [b];
				ea = [e];
			}
			if (ea) {
				l = (ea.length > ba.length) ? ea.length : ba.length;
				for (i = 0; i < l; i++) {
					b = ba[i] = ba[i] || this.dflt;
					e = ea[i] = ea[i] || this.dflt;
					if (kwd) {
						bi = b.indexOf(kwd);
						ei = e.indexOf(kwd);
						if (bi !== ei) {
							e = (ei === -1) ? ea : ba;
							e[i] += " " + kwd;
						}
					}
				}
				b = ba.join(", ");
				e = ea.join(", ");
			}
			return _parseComplex(t, this.p, b, e, this.clrs, this.dflt, pt, this.pr, plugin, setRatio);
		};

		/**
		 * Accepts a target and end value and spits back a CSSPropTween that has been inserted into the CSSPlugin's linked list and conforms with all the conventions we use internally, like type:-1, 0, 1, or 2, setting up any extra property tweens, priority, etc. For example, if we have a boxShadow SpecialProp and call:
		 * this._firstPT = sp.parse(element, "5px 10px 20px rgb(2550,102,51)", "boxShadow", this);
		 * It should figure out the starting value of the element's boxShadow, compare it to the provided end value and create all the necessary CSSPropTweens of the appropriate types to tween the boxShadow. The CSSPropTween that gets spit back should already be inserted into the linked list (the 4th parameter is the current head, so prepend to that).
		 * @param {!Object} t Target object whose property is being tweened
		 * @param {Object} e End value as provided in the vars object (typically a string, but not always - like a throwProps would be an object).
		 * @param {!string} p Property name
		 * @param {!CSSPlugin} cssp The CSSPlugin instance that should be associated with this tween.
		 * @param {?CSSPropTween} pt The CSSPropTween that is the current head of the linked list (we'll prepend to it)
		 * @param {TweenPlugin=} plugin If a plugin will be used to tween the parsed value, this is the plugin instance.
		 * @param {Object=} vars Original vars object that contains the data for parsing.
		 * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parse() call.
		 */
		p.parse = function(t, e, p, cssp, pt, plugin, vars) {
			return this.parseComplex(t.style, this.format(_getStyle(t, this.p, _cs, false, this.dflt)), this.format(e), pt, plugin);
		};

		/**
		 * Registers a special property that should be intercepted from any "css" objects defined in tweens. This allows you to handle them however you want without CSSPlugin doing it for you. The 2nd parameter should be a function that accepts 3 parameters:
		 *  1) Target object whose property should be tweened (typically a DOM element)
		 *  2) The end/destination value (could be a string, number, object, or whatever you want)
		 *  3) The tween instance (you probably don't need to worry about this, but it can be useful for looking up information like the duration)
		 *
		 * Then, your function should return a function which will be called each time the tween gets rendered, passing a numeric "ratio" parameter to your function that indicates the change factor (usually between 0 and 1). For example:
		 *
		 * CSSPlugin.registerSpecialProp("myCustomProp", function(target, value, tween) {
		 *      var start = target.style.width;
		 *      return function(ratio) {
		 *              target.style.width = (start + value * ratio) + "px";
		 *              console.log("set width to " + target.style.width);
		 *          }
		 * }, 0);
		 *
		 * Then, when I do this tween, it will trigger my special property:
		 *
		 * TweenLite.to(element, 1, {css:{myCustomProp:100}});
		 *
		 * In the example, of course, we're just changing the width, but you can do anything you want.
		 *
		 * @param {!string} name Property name (or comma-delimited list of property names) that should be intercepted and handled by your function. For example, if I define "myCustomProp", then it would handle that portion of the following tween: TweenLite.to(element, 1, {css:{myCustomProp:100}})
		 * @param {!function(Object, Object, Object, string):function(number)} onInitTween The function that will be called when a tween of this special property is performed. The function will receive 4 parameters: 1) Target object that should be tweened, 2) Value that was passed to the tween, 3) The tween instance itself (rarely used), and 4) The property name that's being tweened. Your function should return a function that should be called on every update of the tween. That function will receive a single parameter that is a "change factor" value (typically between 0 and 1) indicating the amount of change as a ratio. You can use this to determine how to set the values appropriately in your function.
		 * @param {number=} priority Priority that helps the engine determine the order in which to set the properties (default: 0). Higher priority properties will be updated before lower priority ones.
		 */
		CSSPlugin.registerSpecialProp = function(name, onInitTween, priority) {
			_registerComplexSpecialProp(name, {parser:function(t, e, p, cssp, pt, plugin, vars) {
				var rv = new CSSPropTween(t, p, 0, 0, pt, 2, p, false, priority);
				rv.plugin = plugin;
				rv.setRatio = onInitTween(t, e, cssp._tween, p);
				return rv;
			}, priority:priority});
		};








		//transform-related methods and properties
		var _transformProps = ("scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective").split(","),
			_transformProp = _checkPropPrefix("transform"), //the Javascript (camelCase) transform property, like msTransform, WebkitTransform, MozTransform, or OTransform.
			_transformPropCSS = _prefixCSS + "transform",
			_transformOriginProp = _checkPropPrefix("transformOrigin"),
			_supports3D = (_checkPropPrefix("perspective") !== null),
			Transform = _internals.Transform = function() {
				this.skewY = 0;
			},

			/**
			 * Parses the transform values for an element, returning an object with x, y, z, scaleX, scaleY, scaleZ, rotation, rotationX, rotationY, skewX, and skewY properties. Note: by default (for performance reasons), all skewing is combined into skewX and rotation but skewY still has a place in the transform object so that we can record how much of the skew is attributed to skewX vs skewY. Remember, a skewY of 10 looks the same as a rotation of 10 and skewX of -10.
			 * @param {!Object} t target element
			 * @param {Object=} cs computed style object (optional)
			 * @param {boolean=} rec if true, the transform values will be recorded to the target element's _gsTransform object, like target._gsTransform = {x:0, y:0, z:0, scaleX:1...}
			 * @param {boolean=} parse if true, we'll ignore any _gsTransform values that already exist on the element, and force a reparsing of the css (calculated style)
			 * @return {object} object containing all of the transform properties/values like {x:0, y:0, z:0, scaleX:1...}
			 */
			_getTransform = _internals.getTransform = function(t, cs, rec, parse) {
				if (t._gsTransform && rec && !parse) {
					return t._gsTransform; //if the element already has a _gsTransform, use that. Note: some browsers don't accurately return the calculated style for the transform (particularly for SVG), so it's almost always safest to just use the values we've already applied rather than re-parsing things.
				}
				var tm = rec ? t._gsTransform || new Transform() : new Transform(),
					invX = (tm.scaleX < 0), //in order to interpret things properly, we need to know if the user applied a negative scaleX previously so that we can adjust the rotation and skewX accordingly. Otherwise, if we always interpret a flipped matrix as affecting scaleY and the user only wants to tween the scaleX on multiple sequential tweens, it would keep the negative scaleY without that being the user's intent.
					min = 0.00002,
					rnd = 100000,
					minAngle = 179.99,
					minPI = minAngle * _DEG2RAD,
					zOrigin = _supports3D ? parseFloat(_getStyle(t, _transformOriginProp, cs, false, "0 0 0").split(" ")[2]) || tm.zOrigin  || 0 : 0,
					s, m, i, n, dec, scaleX, scaleY, rotation, skewX, difX, difY, difR, difS;
				if (_transformProp) {
					s = _getStyle(t, _transformPropCSS, cs, true);
				} else if (t.currentStyle) {
					//for older versions of IE, we need to interpret the filter portion that is in the format: progid:DXImageTransform.Microsoft.Matrix(M11=6.123233995736766e-17, M12=-1, M21=1, M22=6.123233995736766e-17, sizingMethod='auto expand') Notice that we need to swap b and c compared to a normal matrix.
					s = t.currentStyle.filter.match(_ieGetMatrixExp);
					s = (s && s.length === 4) ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), (tm.x || 0), (tm.y || 0)].join(",") : "";
				}
				//split the matrix values out into an array (m for matrix)
				m = (s || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [];
				i = m.length;
				while (--i > -1) {
					n = Number(m[i]);
					m[i] = (dec = n - (n |= 0)) ? ((dec * rnd + (dec < 0 ? -0.5 : 0.5)) | 0) / rnd + n : n; //convert strings to Numbers and round to 5 decimal places to avoid issues with tiny numbers. Roughly 20x faster than Number.toFixed(). We also must make sure to round before dividing so that values like 0.9999999999 become 1 to avoid glitches in browser rendering and interpretation of flipped/rotated 3D matrices. And don't just multiply the number by rnd, floor it, and then divide by rnd because the bitwise operations max out at a 32-bit signed integer, thus it could get clipped at a relatively low value (like 22,000.00000 for example).
				}
				if (m.length === 16) {

					//we'll only look at these position-related 6 variables first because if x/y/z all match, it's relatively safe to assume we don't need to re-parse everything which risks losing important rotational information (like rotationX:180 plus rotationY:180 would look the same as rotation:180 - there's no way to know for sure which direction was taken based solely on the matrix3d() values)
					var a13 = m[8], a23 = m[9], a33 = m[10],
						a14 = m[12], a24 = m[13], a34 = m[14];

					//we manually compensate for non-zero z component of transformOrigin to work around bugs in Safari
					if (tm.zOrigin) {
						a34 = -tm.zOrigin;
						a14 = a13*a34-m[12];
						a24 = a23*a34-m[13];
						a34 = a33*a34+tm.zOrigin-m[14];
					}

					//only parse from the matrix if we MUST because not only is it usually unnecessary due to the fact that we store the values in the _gsTransform object, but also because it's impossible to accurately interpret rotationX, rotationY, rotationZ, scaleX, and scaleY if all are applied, so it's much better to rely on what we store. However, we must parse the first time that an object is tweened. We also assume that if the position has changed, the user must have done some styling changes outside of CSSPlugin, thus we force a parse in that scenario.
					if (!rec || parse || tm.rotationX == null) {
						var a11 = m[0], a21 = m[1], a31 = m[2], a41 = m[3],
							a12 = m[4], a22 = m[5], a32 = m[6], a42 = m[7],
							a43 = m[11],
							angle = Math.atan2(a32, a33),
							xFlip = (angle < -minPI || angle > minPI),
							t1, t2, t3, cos, sin, yFlip, zFlip;
						tm.rotationX = angle * _RAD2DEG;
						//rotationX
						if (angle) {
							cos = Math.cos(-angle);
							sin = Math.sin(-angle);
							t1 = a12*cos+a13*sin;
							t2 = a22*cos+a23*sin;
							t3 = a32*cos+a33*sin;
							a13 = a12*-sin+a13*cos;
							a23 = a22*-sin+a23*cos;
							a33 = a32*-sin+a33*cos;
							a43 = a42*-sin+a43*cos;
							a12 = t1;
							a22 = t2;
							a32 = t3;
						}
						//rotationY
						angle = Math.atan2(a13, a11);
						tm.rotationY = angle * _RAD2DEG;
						if (angle) {
							yFlip = (angle < -minPI || angle > minPI);
							cos = Math.cos(-angle);
							sin = Math.sin(-angle);
							t1 = a11*cos-a13*sin;
							t2 = a21*cos-a23*sin;
							t3 = a31*cos-a33*sin;
							a23 = a21*sin+a23*cos;
							a33 = a31*sin+a33*cos;
							a43 = a41*sin+a43*cos;
							a11 = t1;
							a21 = t2;
							a31 = t3;
						}
						//rotationZ
						angle = Math.atan2(a21, a22);
						tm.rotation = angle * _RAD2DEG;
						if (angle) {
							zFlip = (angle < -minPI || angle > minPI);
							cos = Math.cos(-angle);
							sin = Math.sin(-angle);
							a11 = a11*cos+a12*sin;
							t2 = a21*cos+a22*sin;
							a22 = a21*-sin+a22*cos;
							a32 = a31*-sin+a32*cos;
							a21 = t2;
						}

						if (zFlip && xFlip) {
							tm.rotation = tm.rotationX = 0;
						} else if (zFlip && yFlip) {
							tm.rotation = tm.rotationY = 0;
						} else if (yFlip && xFlip) {
							tm.rotationY = tm.rotationX = 0;
						}

						tm.scaleX = ((Math.sqrt(a11 * a11 + a21 * a21) * rnd + 0.5) | 0) / rnd;
						tm.scaleY = ((Math.sqrt(a22 * a22 + a23 * a23) * rnd + 0.5) | 0) / rnd;
						tm.scaleZ = ((Math.sqrt(a32 * a32 + a33 * a33) * rnd + 0.5) | 0) / rnd;
						tm.skewX = 0;
						tm.perspective = a43 ? 1 / ((a43 < 0) ? -a43 : a43) : 0;
						tm.x = a14;
						tm.y = a24;
						tm.z = a34;
					}

				} else if ((!_supports3D || parse || !m.length || tm.x !== m[4] || tm.y !== m[5] || (!tm.rotationX && !tm.rotationY)) && !(tm.x !== undefined && _getStyle(t, "display", cs) === "none")) { //sometimes a 6-element matrix is returned even when we performed 3D transforms, like if rotationX and rotationY are 180. In cases like this, we still need to honor the 3D transforms. If we just rely on the 2D info, it could affect how the data is interpreted, like scaleY might get set to -1 or rotation could get offset by 180 degrees. For example, do a TweenLite.to(element, 1, {css:{rotationX:180, rotationY:180}}) and then later, TweenLite.to(element, 1, {css:{rotationX:0}}) and without this conditional logic in place, it'd jump to a state of being unrotated when the 2nd tween starts. Then again, we need to honor the fact that the user COULD alter the transforms outside of CSSPlugin, like by manually applying new css, so we try to sense that by looking at x and y because if those changed, we know the changes were made outside CSSPlugin and we force a reinterpretation of the matrix values. Also, in Webkit browsers, if the element's "display" is "none", its calculated style value will always return empty, so if we've already recorded the values in the _gsTransform object, we'll just rely on those.
					var k = (m.length >= 6),
						a = k ? m[0] : 1,
						b = m[1] || 0,
						c = m[2] || 0,
						d = k ? m[3] : 1;
					tm.x = m[4] || 0;
					tm.y = m[5] || 0;
					scaleX = Math.sqrt(a * a + b * b);
					scaleY = Math.sqrt(d * d + c * c);
					rotation = (a || b) ? Math.atan2(b, a) * _RAD2DEG : tm.rotation || 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
					skewX = (c || d) ? Math.atan2(c, d) * _RAD2DEG + rotation : tm.skewX || 0;
					difX = scaleX - Math.abs(tm.scaleX || 0);
					difY = scaleY - Math.abs(tm.scaleY || 0);
					if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
						if (invX) {
							scaleX *= -1;
							skewX += (rotation <= 0) ? 180 : -180;
							rotation += (rotation <= 0) ? 180 : -180;
						} else {
							scaleY *= -1;
							skewX += (skewX <= 0) ? 180 : -180;
						}
					}
					difR = (rotation - tm.rotation) % 180; //note: matching ranges would be very small (+/-0.0001) or very close to 180.
					difS = (skewX - tm.skewX) % 180;
					//if there's already a recorded _gsTransform in place for the target, we should leave those values in place unless we know things changed for sure (beyond a super small amount). This gets around ambiguous interpretations, like if scaleX and scaleY are both -1, the matrix would be the same as if the rotation was 180 with normal scaleX/scaleY. If the user tweened to particular values, those must be prioritized to ensure animation is consistent.
					if (tm.skewX === undefined || difX > min || difX < -min || difY > min || difY < -min || (difR > -minAngle && difR < minAngle && (difR * rnd) | 0 !== 0) || (difS > -minAngle && difS < minAngle && (difS * rnd) | 0 !== 0)) {
						tm.scaleX = scaleX;
						tm.scaleY = scaleY;
						tm.rotation = rotation;
						tm.skewX = skewX;
					}
					if (_supports3D) {
						tm.rotationX = tm.rotationY = tm.z = 0;
						tm.perspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0;
						tm.scaleZ = 1;
					}
				}
				tm.zOrigin = zOrigin;

				//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 0 in these cases. The conditional logic here is faster than calling Math.abs(). Also, browsers tend to render a SLIGHTLY rotated object in a fuzzy way, so we need to snap to exactly 0 when appropriate.
				for (i in tm) {
					if (tm[i] < min) if (tm[i] > -min) {
						tm[i] = 0;
					}
				}
				//DEBUG: _log("parsed rotation: "+(tm.rotationX)+", "+(tm.rotationY)+", "+(tm.rotation)+", scale: "+tm.scaleX+", "+tm.scaleY+", "+tm.scaleZ+", position: "+tm.x+", "+tm.y+", "+tm.z+", perspective: "+tm.perspective);
				if (rec) {
					t._gsTransform = tm; //record to the object's _gsTransform which we use so that tweens can control individual properties independently (we need all the properties to accurately recompose the matrix in the setRatio() method)
				}
				return tm;
			},

			//for setting 2D transforms in IE6, IE7, and IE8 (must use a "filter" to emulate the behavior of modern day browser transforms)
			_setIETransformRatio = function(v) {
				var t = this.data, //refers to the element's _gsTransform object
					ang = -t.rotation * _DEG2RAD,
					skew = ang + t.skewX * _DEG2RAD,
					rnd = 100000,
					a = ((Math.cos(ang) * t.scaleX * rnd) | 0) / rnd,
					b = ((Math.sin(ang) * t.scaleX * rnd) | 0) / rnd,
					c = ((Math.sin(skew) * -t.scaleY * rnd) | 0) / rnd,
					d = ((Math.cos(skew) * t.scaleY * rnd) | 0) / rnd,
					style = this.t.style,
					cs = this.t.currentStyle,
					filters, val;
				if (!cs) {
					return;
				}
				val = b; //just for swapping the variables an inverting them (reused "val" to avoid creating another variable in memory). IE's filter matrix uses a non-standard matrix configuration (angle goes the opposite way, and b and c are reversed and inverted)
				b = -c;
				c = -val;
				filters = cs.filter;
				style.filter = ""; //remove filters so that we can accurately measure offsetWidth/offsetHeight
				var w = this.t.offsetWidth,
					h = this.t.offsetHeight,
					clip = (cs.position !== "absolute"),
					m = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + b + ", M21=" + c + ", M22=" + d,
					ox = t.x,
					oy = t.y,
					dx, dy;

				//if transformOrigin is being used, adjust the offset x and y
				if (t.ox != null) {
					dx = ((t.oxp) ? w * t.ox * 0.01 : t.ox) - w / 2;
					dy = ((t.oyp) ? h * t.oy * 0.01 : t.oy) - h / 2;
					ox += dx - (dx * a + dy * b);
					oy += dy - (dx * c + dy * d);
				}

				if (!clip) {
					m += ", sizingMethod='auto expand')";
				} else {
					dx = (w / 2);
					dy = (h / 2);
					//translate to ensure that transformations occur around the correct origin (default is center).
					m += ", Dx=" + (dx - (dx * a + dy * b) + ox) + ", Dy=" + (dy - (dx * c + dy * d) + oy) + ")";
				}
				if (filters.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1) {
					style.filter = filters.replace(_ieSetMatrixExp, m);
				} else {
					style.filter = m + " " + filters; //we must always put the transform/matrix FIRST (before alpha(opacity=xx)) to avoid an IE bug that slices part of the object when rotation is applied with alpha.
				}

				//at the end or beginning of the tween, if the matrix is normal (1, 0, 0, 1) and opacity is 100 (or doesn't exist), remove the filter to improve browser performance.
				if (v === 0 || v === 1) if (a === 1) if (b === 0) if (c === 0) if (d === 1) if (!clip || m.indexOf("Dx=0, Dy=0") !== -1) if (!_opacityExp.test(filters) || parseFloat(RegExp.$1) === 100) if (filters.indexOf("gradient(" && filters.indexOf("Alpha")) === -1) {
					style.removeAttribute("filter");
				}

				//we must set the margins AFTER applying the filter in order to avoid some bugs in IE8 that could (in rare scenarios) cause them to be ignored intermittently (vibration).
				if (!clip) {
					var mult = (_ieVers < 8) ? 1 : -1, //in Internet Explorer 7 and before, the box model is broken, causing the browser to treat the width/height of the actual rotated filtered image as the width/height of the box itself, but Microsoft corrected that in IE8. We must use a negative offset in IE8 on the right/bottom
						marg, prop, dif;
					dx = t.ieOffsetX || 0;
					dy = t.ieOffsetY || 0;
					t.ieOffsetX = Math.round((w - ((a < 0 ? -a : a) * w + (b < 0 ? -b : b) * h)) / 2 + ox);
					t.ieOffsetY = Math.round((h - ((d < 0 ? -d : d) * h + (c < 0 ? -c : c) * w)) / 2 + oy);
					for (i = 0; i < 4; i++) {
						prop = _margins[i];
						marg = cs[prop];
						//we need to get the current margin in case it is being tweened separately (we want to respect that tween's changes)
						val = (marg.indexOf("px") !== -1) ? parseFloat(marg) : _convertToPixels(this.t, prop, parseFloat(marg), marg.replace(_suffixExp, "")) || 0;
						if (val !== t[prop]) {
							dif = (i < 2) ? -t.ieOffsetX : -t.ieOffsetY; //if another tween is controlling a margin, we cannot only apply the difference in the ieOffsets, so we essentially zero-out the dx and dy here in that case. We record the margin(s) later so that we can keep comparing them, making this code very flexible.
						} else {
							dif = (i < 2) ? dx - t.ieOffsetX : dy - t.ieOffsetY;
						}
						style[prop] = (t[prop] = Math.round( val - dif * ((i === 0 || i === 2) ? 1 : mult) )) + "px";
					}
				}
			},

			_set3DTransformRatio = _internals.set3DTransformRatio = function(v) {
				var t = this.data, //refers to the element's _gsTransform object
					style = this.t.style,
					angle = t.rotation * _DEG2RAD,
					sx = t.scaleX,
					sy = t.scaleY,
					sz = t.scaleZ,
					perspective = t.perspective,
					a11, a12, a13, a14,	a21, a22, a23, a24, a31, a32, a33, a34,	a41, a42, a43,
					zOrigin, rnd, cos, sin, t1, t2, t3, t4;
				if (_isFirefox) {
					var n = 0.0001;
					if (sx < n && sx > -n) { //Firefox has a bug (at least in v25) that causes it to render the transparent part of 32-bit PNG images as black when displayed inside an iframe and the 3D scale is very small and doesn't change sufficiently enough between renders (like if you use a Power4.easeInOut to scale from 0 to 1 where the beginning values only change a tiny amount to begin the tween before accelerating). In this case, we force the scale to be 0.00002 instead which is visually the same but works around the Firefox issue.
						sx = sz = 0.00002;
					}
					if (sy < n && sy > -n) {
						sy = sz = 0.00002;
					}
					if (perspective && !t.z && !t.rotationX && !t.rotationY) { //Firefox has a bug that causes elements to have an odd super-thin, broken/dotted black border on elements that have a perspective set but aren't utilizing 3D space (no rotationX, rotationY, or z).
						perspective = 0;
					}
				}
				if (angle || t.skewX) {
					cos = Math.cos(angle);
					sin = Math.sin(angle);
					a11 = cos;
					a21 = sin;
					if (t.skewX) {
						angle -= t.skewX * _DEG2RAD;
						cos = Math.cos(angle);
						sin = Math.sin(angle);
						if (t.skewType === "simple") { //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
							t1 = Math.tan(t.skewX * _DEG2RAD);
							t1 = Math.sqrt(1 + t1 * t1);
							cos *= t1;
							sin *= t1;
						}
					}
					a12 = -sin;
					a22 = cos;

				} else if (!t.rotationY && !t.rotationX && sz === 1 && !perspective) { //if we're only translating and/or 2D scaling, this is faster...
					style[_transformProp] = "translate3d(" + t.x + "px," + t.y + "px," + t.z +"px)" + ((sx !== 1 || sy !== 1) ? " scale(" + sx + "," + sy + ")" : "");
					return;
				} else {
					a11 = a22 = 1;
					a12 = a21 = 0;
				}
				a33 = 1;
				a13 = a14 = a23 = a24 = a31 = a32 = a34 = a41 = a42 = 0;
				a43 = (perspective) ? -1 / perspective : 0;
				zOrigin = t.zOrigin;
				rnd = 100000;
				angle = t.rotationY * _DEG2RAD;
				if (angle) {
					cos = Math.cos(angle);
					sin = Math.sin(angle);
					a31 = a33*-sin;
					a41 = a43*-sin;
					a13 = a11*sin;
					a23 = a21*sin;
					a33 *= cos;
					a43 *= cos;
					a11 *= cos;
					a21 *= cos;
				}
				angle = t.rotationX * _DEG2RAD;
				if (angle) {
					cos = Math.cos(angle);
					sin = Math.sin(angle);
					t1 = a12*cos+a13*sin;
					t2 = a22*cos+a23*sin;
					t3 = a32*cos+a33*sin;
					t4 = a42*cos+a43*sin;
					a13 = a12*-sin+a13*cos;
					a23 = a22*-sin+a23*cos;
					a33 = a32*-sin+a33*cos;
					a43 = a42*-sin+a43*cos;
					a12 = t1;
					a22 = t2;
					a32 = t3;
					a42 = t4;
				}
				if (sz !== 1) {
					a13*=sz;
					a23*=sz;
					a33*=sz;
					a43*=sz;
				}
				if (sy !== 1) {
					a12*=sy;
					a22*=sy;
					a32*=sy;
					a42*=sy;
				}
				if (sx !== 1) {
					a11*=sx;
					a21*=sx;
					a31*=sx;
					a41*=sx;
				}
				if (zOrigin) {
					a34 -= zOrigin;
					a14 = a13*a34;
					a24 = a23*a34;
					a34 = a33*a34+zOrigin;
				}
				//we round the x, y, and z slightly differently to allow even larger values.
				a14 = (t1 = (a14 += t.x) - (a14 |= 0)) ? ((t1 * rnd + (t1 < 0 ? -0.5 : 0.5)) | 0) / rnd + a14 : a14;
				a24 = (t1 = (a24 += t.y) - (a24 |= 0)) ? ((t1 * rnd + (t1 < 0 ? -0.5 : 0.5)) | 0) / rnd + a24 : a24;
				a34 = (t1 = (a34 += t.z) - (a34 |= 0)) ? ((t1 * rnd + (t1 < 0 ? -0.5 : 0.5)) | 0) / rnd + a34 : a34;
				style[_transformProp] = "matrix3d(" + [ (((a11 * rnd) | 0) / rnd), (((a21 * rnd) | 0) / rnd), (((a31 * rnd) | 0) / rnd), (((a41 * rnd) | 0) / rnd), (((a12 * rnd) | 0) / rnd), (((a22 * rnd) | 0) / rnd), (((a32 * rnd) | 0) / rnd), (((a42 * rnd) | 0) / rnd), (((a13 * rnd) | 0) / rnd), (((a23 * rnd) | 0) / rnd), (((a33 * rnd) | 0) / rnd), (((a43 * rnd) | 0) / rnd), a14, a24, a34, (perspective ? (1 + (-a34 / perspective)) : 1) ].join(",") + ")";
			},

			_set2DTransformRatio = _internals.set2DTransformRatio = function(v) {
				var t = this.data, //refers to the element's _gsTransform object
					targ = this.t,
					style = targ.style,
					ang, skew, rnd, sx, sy;
				if (t.rotationX || t.rotationY || t.z || t.force3D) { //if a 3D tween begins while a 2D one is running, we need to kick the rendering over to the 3D method. For example, imagine a yoyo-ing, infinitely repeating scale tween running, and then the object gets rotated in 3D space with a different tween.
					this.setRatio = _set3DTransformRatio;
					_set3DTransformRatio.call(this, v);
					return;
				}
				if (!t.rotation && !t.skewX) {
					style[_transformProp] = "matrix(" + t.scaleX + ",0,0," + t.scaleY + "," + t.x + "," + t.y + ")";
				} else {
					ang = t.rotation * _DEG2RAD;
					skew = ang - t.skewX * _DEG2RAD;
					rnd = 100000;
					sx = t.scaleX * rnd;
					sy = t.scaleY * rnd;
					//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 5 decimal places.
					style[_transformProp] = "matrix(" + (((Math.cos(ang) * sx) | 0) / rnd) + "," + (((Math.sin(ang) * sx) | 0) / rnd) + "," + (((Math.sin(skew) * -sy) | 0) / rnd) + "," + (((Math.cos(skew) * sy) | 0) / rnd) + "," + t.x + "," + t.y + ")";
				}
			};

		_registerComplexSpecialProp("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType", {parser:function(t, e, p, cssp, pt, plugin, vars) {
			if (cssp._transform) { return pt; } //only need to parse the transform once, and only if the browser supports it.
			var m1 = cssp._transform = _getTransform(t, _cs, true, vars.parseTransform),
				style = t.style,
				min = 0.000001,
				i = _transformProps.length,
				v = vars,
				endRotations = {},
				m2, skewY, copy, orig, has3D, hasChange, dr;
			if (typeof(v.transform) === "string" && _transformProp) { //for values like transform:"rotate(60deg) scale(0.5, 0.8)"
				copy = style.cssText;
				style[_transformProp] = v.transform;
				style.display = "block"; //if display is "none", the browser often refuses to report the transform properties correctly.
				m2 = _getTransform(t, null, false);
				style.cssText = copy;
			} else if (typeof(v) === "object") { //for values like scaleX, scaleY, rotation, x, y, skewX, and skewY or transform:{...} (object)
				m2 = {scaleX:_parseVal((v.scaleX != null) ? v.scaleX : v.scale, m1.scaleX),
					scaleY:_parseVal((v.scaleY != null) ? v.scaleY : v.scale, m1.scaleY),
					scaleZ:_parseVal(v.scaleZ, m1.scaleZ),
					x:_parseVal(v.x, m1.x),
					y:_parseVal(v.y, m1.y),
					z:_parseVal(v.z, m1.z),
					perspective:_parseVal(v.transformPerspective, m1.perspective)};
				dr = v.directionalRotation;
				if (dr != null) {
					if (typeof(dr) === "object") {
						for (copy in dr) {
							v[copy] = dr[copy];
						}
					} else {
						v.rotation = dr;
					}
				}
				m2.rotation = _parseAngle(("rotation" in v) ? v.rotation : ("shortRotation" in v) ? v.shortRotation + "_short" : ("rotationZ" in v) ? v.rotationZ : m1.rotation, m1.rotation, "rotation", endRotations);
				if (_supports3D) {
					m2.rotationX = _parseAngle(("rotationX" in v) ? v.rotationX : ("shortRotationX" in v) ? v.shortRotationX + "_short" : m1.rotationX || 0, m1.rotationX, "rotationX", endRotations);
					m2.rotationY = _parseAngle(("rotationY" in v) ? v.rotationY : ("shortRotationY" in v) ? v.shortRotationY + "_short" : m1.rotationY || 0, m1.rotationY, "rotationY", endRotations);
				}
				m2.skewX = (v.skewX == null) ? m1.skewX : _parseAngle(v.skewX, m1.skewX);

				//note: for performance reasons, we combine all skewing into the skewX and rotation values, ignoring skewY but we must still record it so that we can discern how much of the overall skew is attributed to skewX vs. skewY. Otherwise, if the skewY would always act relative (tween skewY to 10deg, for example, multiple times and if we always combine things into skewX, we can't remember that skewY was 10 from last time). Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of -10 degrees.
				m2.skewY = (v.skewY == null) ? m1.skewY : _parseAngle(v.skewY, m1.skewY);
				if ((skewY = m2.skewY - m1.skewY)) {
					m2.skewX += skewY;
					m2.rotation += skewY;
				}
			}

			if (_supports3D && v.force3D != null) {
				m1.force3D = v.force3D;
				hasChange = true;
			}

			m1.skewType = v.skewType || m1.skewType || CSSPlugin.defaultSkewType;

			has3D = (m1.force3D || m1.z || m1.rotationX || m1.rotationY || m2.z || m2.rotationX || m2.rotationY || m2.perspective);
			if (!has3D && v.scale != null) {
				m2.scaleZ = 1; //no need to tween scaleZ.
			}

			while (--i > -1) {
				p = _transformProps[i];
				orig = m2[p] - m1[p];
				if (orig > min || orig < -min || _forcePT[p] != null) {
					hasChange = true;
					pt = new CSSPropTween(m1, p, m1[p], orig, pt);
					if (p in endRotations) {
						pt.e = endRotations[p]; //directional rotations typically have compensated values during the tween, but we need to make sure they end at exactly what the user requested
					}
					pt.xs0 = 0; //ensures the value stays numeric in setRatio()
					pt.plugin = plugin;
					cssp._overwriteProps.push(pt.n);
				}
			}

			orig = v.transformOrigin;
			if (orig || (_supports3D && has3D && m1.zOrigin)) { //if anything 3D is happening and there's a transformOrigin with a z component that's non-zero, we must ensure that the transformOrigin's z-component is set to 0 so that we can manually do those calculations to get around Safari bugs. Even if the user didn't specifically define a "transformOrigin" in this particular tween (maybe they did it via css directly).
				if (_transformProp) {
					hasChange = true;
					p = _transformOriginProp;
					orig = (orig || _getStyle(t, p, _cs, false, "50% 50%")) + ""; //cast as string to avoid errors
					pt = new CSSPropTween(style, p, 0, 0, pt, -1, "transformOrigin");
					pt.b = style[p];
					pt.plugin = plugin;
					if (_supports3D) {
						copy = m1.zOrigin;
						orig = orig.split(" ");
						m1.zOrigin = ((orig.length > 2 && !(copy !== 0 && orig[2] === "0px")) ? parseFloat(orig[2]) : copy) || 0; //Safari doesn't handle the z part of transformOrigin correctly, so we'll manually handle it in the _set3DTransformRatio() method.
						pt.xs0 = pt.e = style[p] = orig[0] + " " + (orig[1] || "50%") + " 0px"; //we must define a z value of 0px specifically otherwise iOS 5 Safari will stick with the old one (if one was defined)!
						pt = new CSSPropTween(m1, "zOrigin", 0, 0, pt, -1, pt.n); //we must create a CSSPropTween for the _gsTransform.zOrigin so that it gets reset properly at the beginning if the tween runs backward (as opposed to just setting m1.zOrigin here)
						pt.b = copy;
						pt.xs0 = pt.e = m1.zOrigin;
					} else {
						pt.xs0 = pt.e = style[p] = orig;
					}

				//for older versions of IE (6-8), we need to manually calculate things inside the setRatio() function. We record origin x and y (ox and oy) and whether or not the values are percentages (oxp and oyp).
				} else {
					_parsePosition(orig + "", m1);
				}
			}

			if (hasChange) {
				cssp._transformType = (has3D || this._transformType === 3) ? 3 : 2; //quicker than calling cssp._enableTransforms();
			}
			return pt;
		}, prefix:true});

		_registerComplexSpecialProp("boxShadow", {defaultValue:"0px 0px 0px 0px #999", prefix:true, color:true, multi:true, keyword:"inset"});

		_registerComplexSpecialProp("borderRadius", {defaultValue:"0px", parser:function(t, e, p, cssp, pt, plugin) {
			e = this.format(e);
			var props = ["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],
				style = t.style,
				ea1, i, es2, bs2, bs, es, bn, en, w, h, esfx, bsfx, rel, hn, vn, em;
			w = parseFloat(t.offsetWidth);
			h = parseFloat(t.offsetHeight);
			ea1 = e.split(" ");
			for (i = 0; i < props.length; i++) { //if we're dealing with percentages, we must convert things separately for the horizontal and vertical axis!
				if (this.p.indexOf("border")) { //older browsers used a prefix
					props[i] = _checkPropPrefix(props[i]);
				}
				bs = bs2 = _getStyle(t, props[i], _cs, false, "0px");
				if (bs.indexOf(" ") !== -1) {
					bs2 = bs.split(" ");
					bs = bs2[0];
					bs2 = bs2[1];
				}
				es = es2 = ea1[i];
				bn = parseFloat(bs);
				bsfx = bs.substr((bn + "").length);
				rel = (es.charAt(1) === "=");
				if (rel) {
					en = parseInt(es.charAt(0)+"1", 10);
					es = es.substr(2);
					en *= parseFloat(es);
					esfx = es.substr((en + "").length - (en < 0 ? 1 : 0)) || "";
				} else {
					en = parseFloat(es);
					esfx = es.substr((en + "").length);
				}
				if (esfx === "") {
					esfx = _suffixMap[p] || bsfx;
				}
				if (esfx !== bsfx) {
					hn = _convertToPixels(t, "borderLeft", bn, bsfx); //horizontal number (we use a bogus "borderLeft" property just because the _convertToPixels() method searches for the keywords "Left", "Right", "Top", and "Bottom" to determine of it's a horizontal or vertical property, and we need "border" in the name so that it knows it should measure relative to the element itself, not its parent.
					vn = _convertToPixels(t, "borderTop", bn, bsfx); //vertical number
					if (esfx === "%") {
						bs = (hn / w * 100) + "%";
						bs2 = (vn / h * 100) + "%";
					} else if (esfx === "em") {
						em = _convertToPixels(t, "borderLeft", 1, "em");
						bs = (hn / em) + "em";
						bs2 = (vn / em) + "em";
					} else {
						bs = hn + "px";
						bs2 = vn + "px";
					}
					if (rel) {
						es = (parseFloat(bs) + en) + esfx;
						es2 = (parseFloat(bs2) + en) + esfx;
					}
				}
				pt = _parseComplex(style, props[i], bs + " " + bs2, es + " " + es2, false, "0px", pt);
			}
			return pt;
		}, prefix:true, formatter:_getFormatter("0px 0px 0px 0px", false, true)});
		_registerComplexSpecialProp("backgroundPosition", {defaultValue:"0 0", parser:function(t, e, p, cssp, pt, plugin) {
			var bp = "background-position",
				cs = (_cs || _getComputedStyle(t, null)),
				bs = this.format( ((cs) ? _ieVers ? cs.getPropertyValue(bp + "-x") + " " + cs.getPropertyValue(bp + "-y") : cs.getPropertyValue(bp) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), //Internet Explorer doesn't report background-position correctly - we must query background-position-x and background-position-y and combine them (even in IE10). Before IE9, we must do the same with the currentStyle object and use camelCase
				es = this.format(e),
				ba, ea, i, pct, overlap, src;
			if ((bs.indexOf("%") !== -1) !== (es.indexOf("%") !== -1)) {
				src = _getStyle(t, "backgroundImage").replace(_urlExp, "");
				if (src && src !== "none") {
					ba = bs.split(" ");
					ea = es.split(" ");
					_tempImg.setAttribute("src", src); //set the temp <img>'s src to the background-image so that we can measure its width/height
					i = 2;
					while (--i > -1) {
						bs = ba[i];
						pct = (bs.indexOf("%") !== -1);
						if (pct !== (ea[i].indexOf("%") !== -1)) {
							overlap = (i === 0) ? t.offsetWidth - _tempImg.width : t.offsetHeight - _tempImg.height;
							ba[i] = pct ? (parseFloat(bs) / 100 * overlap) + "px" : (parseFloat(bs) / overlap * 100) + "%";
						}
					}
					bs = ba.join(" ");
				}
			}
			return this.parseComplex(t.style, bs, es, pt, plugin);
		}, formatter:_parsePosition});
		_registerComplexSpecialProp("backgroundSize", {defaultValue:"0 0", formatter:_parsePosition});
		_registerComplexSpecialProp("perspective", {defaultValue:"0px", prefix:true});
		_registerComplexSpecialProp("perspectiveOrigin", {defaultValue:"50% 50%", prefix:true});
		_registerComplexSpecialProp("transformStyle", {prefix:true});
		_registerComplexSpecialProp("backfaceVisibility", {prefix:true});
		_registerComplexSpecialProp("userSelect", {prefix:true});
		_registerComplexSpecialProp("margin", {parser:_getEdgeParser("marginTop,marginRight,marginBottom,marginLeft")});
		_registerComplexSpecialProp("padding", {parser:_getEdgeParser("paddingTop,paddingRight,paddingBottom,paddingLeft")});
		_registerComplexSpecialProp("clip", {defaultValue:"rect(0px,0px,0px,0px)", parser:function(t, e, p, cssp, pt, plugin){
			var b, cs, delim;
			if (_ieVers < 9) { //IE8 and earlier don't report a "clip" value in the currentStyle - instead, the values are split apart into clipTop, clipRight, clipBottom, and clipLeft. Also, in IE7 and earlier, the values inside rect() are space-delimited, not comma-delimited.
				cs = t.currentStyle;
				delim = _ieVers < 8 ? " " : ",";
				b = "rect(" + cs.clipTop + delim + cs.clipRight + delim + cs.clipBottom + delim + cs.clipLeft + ")";
				e = this.format(e).split(",").join(delim);
			} else {
				b = this.format(_getStyle(t, this.p, _cs, false, this.dflt));
				e = this.format(e);
			}
			return this.parseComplex(t.style, b, e, pt, plugin);
		}});
		_registerComplexSpecialProp("textShadow", {defaultValue:"0px 0px 0px #999", color:true, multi:true});
		_registerComplexSpecialProp("autoRound,strictUnits", {parser:function(t, e, p, cssp, pt) {return pt;}}); //just so that we can ignore these properties (not tween them)
		_registerComplexSpecialProp("border", {defaultValue:"0px solid #000", parser:function(t, e, p, cssp, pt, plugin) {
				return this.parseComplex(t.style, this.format(_getStyle(t, "borderTopWidth", _cs, false, "0px") + " " + _getStyle(t, "borderTopStyle", _cs, false, "solid") + " " + _getStyle(t, "borderTopColor", _cs, false, "#000")), this.format(e), pt, plugin);
			}, color:true, formatter:function(v) {
				var a = v.split(" ");
				return a[0] + " " + (a[1] || "solid") + " " + (v.match(_colorExp) || ["#000"])[0];
			}});
		_registerComplexSpecialProp("borderWidth", {parser:_getEdgeParser("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}); //Firefox doesn't pick up on borderWidth set in style sheets (only inline).
		_registerComplexSpecialProp("float,cssFloat,styleFloat", {parser:function(t, e, p, cssp, pt, plugin) {
			var s = t.style,
				prop = ("cssFloat" in s) ? "cssFloat" : "styleFloat";
			return new CSSPropTween(s, prop, 0, 0, pt, -1, p, false, 0, s[prop], e);
		}});

		//opacity-related
		var _setIEOpacityRatio = function(v) {
				var t = this.t, //refers to the element's style property
					filters = t.filter || _getStyle(this.data, "filter"),
					val = (this.s + this.c * v) | 0,
					skip;
				if (val === 100) { //for older versions of IE that need to use a filter to apply opacity, we should remove the filter if opacity hits 1 in order to improve performance, but make sure there isn't a transform (matrix) or gradient in the filters.
					if (filters.indexOf("atrix(") === -1 && filters.indexOf("radient(") === -1 && filters.indexOf("oader(") === -1) {
						t.removeAttribute("filter");
						skip = (!_getStyle(this.data, "filter")); //if a class is applied that has an alpha filter, it will take effect (we don't want that), so re-apply our alpha filter in that case. We must first remove it and then check.
					} else {
						t.filter = filters.replace(_alphaFilterExp, "");
						skip = true;
					}
				}
				if (!skip) {
					if (this.xn1) {
						t.filter = filters = filters || ("alpha(opacity=" + val + ")"); //works around bug in IE7/8 that prevents changes to "visibility" from being applied properly if the filter is changed to a different alpha on the same frame.
					}
					if (filters.indexOf("opacity") === -1) { //only used if browser doesn't support the standard opacity style property (IE 7 and 8)
						if (val !== 0 || !this.xn1) { //bugs in IE7/8 won't render the filter properly if opacity is ADDED on the same frame/render as "visibility" changes (this.xn1 is 1 if this tween is an "autoAlpha" tween)
							t.filter = filters + " alpha(opacity=" + val + ")"; //we round the value because otherwise, bugs in IE7/8 can prevent "visibility" changes from being applied properly.
						}
					} else {
						t.filter = filters.replace(_opacityExp, "opacity=" + val);
					}
				}
			};
		_registerComplexSpecialProp("opacity,alpha,autoAlpha", {defaultValue:"1", parser:function(t, e, p, cssp, pt, plugin) {
			var b = parseFloat(_getStyle(t, "opacity", _cs, false, "1")),
				style = t.style,
				isAutoAlpha = (p === "autoAlpha");
			if (typeof(e) === "string" && e.charAt(1) === "=") {
				e = ((e.charAt(0) === "-") ? -1 : 1) * parseFloat(e.substr(2)) + b;
			}
			if (isAutoAlpha && b === 1 && _getStyle(t, "visibility", _cs) === "hidden" && e !== 0) { //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
				b = 0;
			}
			if (_supportsOpacity) {
				pt = new CSSPropTween(style, "opacity", b, e - b, pt);
			} else {
				pt = new CSSPropTween(style, "opacity", b * 100, (e - b) * 100, pt);
				pt.xn1 = isAutoAlpha ? 1 : 0; //we need to record whether or not this is an autoAlpha so that in the setRatio(), we know to duplicate the setting of the alpha in order to work around a bug in IE7 and IE8 that prevents changes to "visibility" from taking effect if the filter is changed to a different alpha(opacity) at the same time. Setting it to the SAME value first, then the new value works around the IE7/8 bug.
				style.zoom = 1; //helps correct an IE issue.
				pt.type = 2;
				pt.b = "alpha(opacity=" + pt.s + ")";
				pt.e = "alpha(opacity=" + (pt.s + pt.c) + ")";
				pt.data = t;
				pt.plugin = plugin;
				pt.setRatio = _setIEOpacityRatio;
			}
			if (isAutoAlpha) { //we have to create the "visibility" PropTween after the opacity one in the linked list so that they run in the order that works properly in IE8 and earlier
				pt = new CSSPropTween(style, "visibility", 0, 0, pt, -1, null, false, 0, ((b !== 0) ? "inherit" : "hidden"), ((e === 0) ? "hidden" : "inherit"));
				pt.xs0 = "inherit";
				cssp._overwriteProps.push(pt.n);
				cssp._overwriteProps.push(p);
			}
			return pt;
		}});


		var _removeProp = function(s, p) {
				if (p) {
					if (s.removeProperty) {
						if (p.substr(0,2) === "ms") { //Microsoft browsers don't conform to the standard of capping the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
							p = "M" + p.substr(1);
						}
						s.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
					} else { //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
						s.removeAttribute(p);
					}
				}
			},
			_setClassNameRatio = function(v) {
				this.t._gsClassPT = this;
				if (v === 1 || v === 0) {
					this.t.className = (v === 0) ? this.b : this.e;
					var mpt = this.data, //first MiniPropTween
						s = this.t.style;
					while (mpt) {
						if (!mpt.v) {
							_removeProp(s, mpt.p);
						} else {
							s[mpt.p] = mpt.v;
						}
						mpt = mpt._next;
					}
					if (v === 1 && this.t._gsClassPT === this) {
						this.t._gsClassPT = null;
					}
				} else if (this.t.className !== this.e) {
					this.t.className = this.e;
				}
			};
		_registerComplexSpecialProp("className", {parser:function(t, e, p, cssp, pt, plugin, vars) {
			var b = t.className,
				cssText = t.style.cssText,
				difData, bs, cnpt, cnptLookup, mpt;
			pt = cssp._classNamePT = new CSSPropTween(t, p, 0, 0, pt, 2);
			pt.setRatio = _setClassNameRatio;
			pt.pr = -11;
			_hasPriority = true;
			pt.b = b;
			bs = _getAllStyles(t, _cs);
			//if there's a className tween already operating on the target, force it to its end so that the necessary inline styles are removed and the class name is applied before we determine the end state (we don't want inline styles interfering that were there just for class-specific values)
			cnpt = t._gsClassPT;
			if (cnpt) {
				cnptLookup = {};
				mpt = cnpt.data; //first MiniPropTween which stores the inline styles - we need to force these so that the inline styles don't contaminate things. Otherwise, there's a small chance that a tween could start and the inline values match the destination values and they never get cleaned.
				while (mpt) {
					cnptLookup[mpt.p] = 1;
					mpt = mpt._next;
				}
				cnpt.setRatio(1);
			}
			t._gsClassPT = pt;
			pt.e = (e.charAt(1) !== "=") ? e : b.replace(new RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ((e.charAt(0) === "+") ? " " + e.substr(2) : "");
			if (cssp._tween._duration) { //if it's a zero-duration tween, there's no need to tween anything or parse the data. In fact, if we switch classes temporarily (which we must do for proper parsing) and the class has a transition applied, it could cause a quick flash to the end state and back again initially in some browsers.
				t.className = pt.e;
				difData = _cssDif(t, bs, _getAllStyles(t), vars, cnptLookup);
				t.className = b;
				pt.data = difData.firstMPT;
				t.style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
				pt = pt.xfirst = cssp.parse(t, difData.difs, pt, plugin); //we record the CSSPropTween as the xfirst so that we can handle overwriting propertly (if "className" gets overwritten, we must kill all the properties associated with the className part of the tween, so we can loop through from xfirst to the pt itself)
			}
			return pt;
		}});


		var _setClearPropsRatio = function(v) {
			if (v === 1 || v === 0) if (this.data._totalTime === this.data._totalDuration && this.data.data !== "isFromStart") { //this.data refers to the tween. Only clear at the END of the tween (remember, from() tweens make the ratio go from 1 to 0, so we can't just check that and if the tween is the zero-duration one that's created internally to render the starting values in a from() tween, ignore that because otherwise, for example, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in).
				var s = this.t.style,
					transformParse = _specialProps.transform.parse,
					a, p, i, clearTransform;
				if (this.e === "all") {
					s.cssText = "";
					clearTransform = true;
				} else {
					a = this.e.split(",");
					i = a.length;
					while (--i > -1) {
						p = a[i];
						if (_specialProps[p]) {
							if (_specialProps[p].parse === transformParse) {
								clearTransform = true;
							} else {
								p = (p === "transformOrigin") ? _transformOriginProp : _specialProps[p].p; //ensures that special properties use the proper browser-specific property name, like "scaleX" might be "-webkit-transform" or "boxShadow" might be "-moz-box-shadow"
							}
						}
						_removeProp(s, p);
					}
				}
				if (clearTransform) {
					_removeProp(s, _transformProp);
					if (this.t._gsTransform) {
						delete this.t._gsTransform;
					}
				}

			}
		};
		_registerComplexSpecialProp("clearProps", {parser:function(t, e, p, cssp, pt) {
			pt = new CSSPropTween(t, p, 0, 0, pt, 2);
			pt.setRatio = _setClearPropsRatio;
			pt.e = e;
			pt.pr = -10;
			pt.data = cssp._tween;
			_hasPriority = true;
			return pt;
		}});

		p = "bezier,throwProps,physicsProps,physics2D".split(",");
		i = p.length;
		while (i--) {
			_registerPluginProp(p[i]);
		}








		p = CSSPlugin.prototype;
		p._firstPT = null;

		//gets called when the tween renders for the first time. This kicks everything off, recording start/end values, etc.
		p._onInitTween = function(target, vars, tween) {
			if (!target.nodeType) { //css is only for dom elements
				return false;
			}
			this._target = target;
			this._tween = tween;
			this._vars = vars;
			_autoRound = vars.autoRound;
			_hasPriority = false;
			_suffixMap = vars.suffixMap || CSSPlugin.suffixMap;
			_cs = _getComputedStyle(target, "");
			_overwriteProps = this._overwriteProps;
			var style = target.style,
				v, pt, pt2, first, last, next, zIndex, tpt, threeD;
			if (_reqSafariFix) if (style.zIndex === "") {
				v = _getStyle(target, "zIndex", _cs);
				if (v === "auto" || v === "") {
					//corrects a bug in [non-Android] Safari that prevents it from repainting elements in their new positions if they don't have a zIndex set. We also can't just apply this inside _parseTransform() because anything that's moved in any way (like using "left" or "top" instead of transforms like "x" and "y") can be affected, so it is best to ensure that anything that's tweening has a z-index. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly. Plus zIndex is less memory-intensive.
					style.zIndex = 0;
				}
			}

			if (typeof(vars) === "string") {
				first = style.cssText;
				v = _getAllStyles(target, _cs);
				style.cssText = first + ";" + vars;
				v = _cssDif(target, v, _getAllStyles(target)).difs;
				if (!_supportsOpacity && _opacityValExp.test(vars)) {
					v.opacity = parseFloat( RegExp.$1 );
				}
				vars = v;
				style.cssText = first;
			}
			this._firstPT = pt = this.parse(target, vars, null);

			if (this._transformType) {
				threeD = (this._transformType === 3);
				if (!_transformProp) {
					style.zoom = 1; //helps correct an IE issue.
				} else if (_isSafari) {
					_reqSafariFix = true;
					//if zIndex isn't set, iOS Safari doesn't repaint things correctly sometimes (seemingly at random).
					if (style.zIndex === "") {
						zIndex = _getStyle(target, "zIndex", _cs);
						if (zIndex === "auto" || zIndex === "") {
							style.zIndex = 0;
						}
					}
					//Setting WebkitBackfaceVisibility corrects 3 bugs:
					// 1) [non-Android] Safari skips rendering changes to "top" and "left" that are made on the same frame/render as a transform update.
					// 2) iOS Safari sometimes neglects to repaint elements in their new positions. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly.
					// 3) Safari sometimes displayed odd artifacts when tweening the transform (or WebkitTransform) property, like ghosts of the edges of the element remained. Definitely a browser bug.
					//Note: we allow the user to override the auto-setting by defining WebkitBackfaceVisibility in the vars of the tween.
					if (_isSafariLT6) {
						style.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (threeD ? "visible" : "hidden");
					}
				}
				pt2 = pt;
				while (pt2 && pt2._next) {
					pt2 = pt2._next;
				}
				tpt = new CSSPropTween(target, "transform", 0, 0, null, 2);
				this._linkCSSP(tpt, null, pt2);
				tpt.setRatio = (threeD && _supports3D) ? _set3DTransformRatio : _transformProp ? _set2DTransformRatio : _setIETransformRatio;
				tpt.data = this._transform || _getTransform(target, _cs, true);
				_overwriteProps.pop(); //we don't want to force the overwrite of all "transform" tweens of the target - we only care about individual transform properties like scaleX, rotation, etc. The CSSPropTween constructor automatically adds the property to _overwriteProps which is why we need to pop() here.
			}

			if (_hasPriority) {
				//reorders the linked list in order of pr (priority)
				while (pt) {
					next = pt._next;
					pt2 = first;
					while (pt2 && pt2.pr > pt.pr) {
						pt2 = pt2._next;
					}
					if ((pt._prev = pt2 ? pt2._prev : last)) {
						pt._prev._next = pt;
					} else {
						first = pt;
					}
					if ((pt._next = pt2)) {
						pt2._prev = pt;
					} else {
						last = pt;
					}
					pt = next;
				}
				this._firstPT = first;
			}
			return true;
		};


		p.parse = function(target, vars, pt, plugin) {
			var style = target.style,
				p, sp, bn, en, bs, es, bsfx, esfx, isStr, rel;
			for (p in vars) {
				es = vars[p]; //ending value string
				sp = _specialProps[p]; //SpecialProp lookup.
				if (sp) {
					pt = sp.parse(target, es, p, this, pt, plugin, vars);

				} else {
					bs = _getStyle(target, p, _cs) + "";
					isStr = (typeof(es) === "string");
					if (p === "color" || p === "fill" || p === "stroke" || p.indexOf("Color") !== -1 || (isStr && _rgbhslExp.test(es))) { //Opera uses background: to define color sometimes in addition to backgroundColor:
						if (!isStr) {
							es = _parseColor(es);
							es = ((es.length > 3) ? "rgba(" : "rgb(") + es.join(",") + ")";
						}
						pt = _parseComplex(style, p, bs, es, true, "transparent", pt, 0, plugin);

					} else if (isStr && (es.indexOf(" ") !== -1 || es.indexOf(",") !== -1)) {
						pt = _parseComplex(style, p, bs, es, true, null, pt, 0, plugin);

					} else {
						bn = parseFloat(bs);
						bsfx = (bn || bn === 0) ? bs.substr((bn + "").length) : ""; //remember, bs could be non-numeric like "normal" for fontWeight, so we should default to a blank suffix in that case.

						if (bs === "" || bs === "auto") {
							if (p === "width" || p === "height") {
								bn = _getDimension(target, p, _cs);
								bsfx = "px";
							} else if (p === "left" || p === "top") {
								bn = _calculateOffset(target, p, _cs);
								bsfx = "px";
							} else {
								bn = (p !== "opacity") ? 0 : 1;
								bsfx = "";
							}
						}

						rel = (isStr && es.charAt(1) === "=");
						if (rel) {
							en = parseInt(es.charAt(0) + "1", 10);
							es = es.substr(2);
							en *= parseFloat(es);
							esfx = es.replace(_suffixExp, "");
						} else {
							en = parseFloat(es);
							esfx = isStr ? es.substr((en + "").length) || "" : "";
						}

						if (esfx === "") {
							esfx = (p in _suffixMap) ? _suffixMap[p] : bsfx; //populate the end suffix, prioritizing the map, then if none is found, use the beginning suffix.
						}

						es = (en || en === 0) ? (rel ? en + bn : en) + esfx : vars[p]; //ensures that any += or -= prefixes are taken care of. Record the end value before normalizing the suffix because we always want to end the tween on exactly what they intended even if it doesn't match the beginning value's suffix.

						//if the beginning/ending suffixes don't match, normalize them...
						if (bsfx !== esfx) if (esfx !== "") if (en || en === 0) if (bn) { //note: if the beginning value (bn) is 0, we don't need to convert units!
							bn = _convertToPixels(target, p, bn, bsfx);
							if (esfx === "%") {
								bn /= _convertToPixels(target, p, 100, "%") / 100;
								if (vars.strictUnits !== true) { //some browsers report only "px" values instead of allowing "%" with getComputedStyle(), so we assume that if we're tweening to a %, we should start there too unless strictUnits:true is defined. This approach is particularly useful for responsive designs that use from() tweens.
									bs = bn + "%";
								}

							} else if (esfx === "em") {
								bn /= _convertToPixels(target, p, 1, "em");

							//otherwise convert to pixels.
							} else if (esfx !== "px") {
								en = _convertToPixels(target, p, en, esfx);
								esfx = "px"; //we don't use bsfx after this, so we don't need to set it to px too.
							}
							if (rel) if (en || en === 0) {
								es = (en + bn) + esfx; //the changes we made affect relative calculations, so adjust the end value here.
							}
						}

						if (rel) {
							en += bn;
						}

						if ((bn || bn === 0) && (en || en === 0)) { //faster than isNaN(). Also, previously we required en !== bn but that doesn't really gain much performance and it prevents _parseToProxy() from working properly if beginning and ending values match but need to get tweened by an external plugin anyway. For example, a bezier tween where the target starts at left:0 and has these points: [{left:50},{left:0}] wouldn't work properly because when parsing the last point, it'd match the first (current) one and a non-tweening CSSPropTween would be recorded when we actually need a normal tween (type:0) so that things get updated during the tween properly.
							pt = new CSSPropTween(style, p, bn, en - bn, pt, 0, p, (_autoRound !== false && (esfx === "px" || p === "zIndex")), 0, bs, es);
							pt.xs0 = esfx;
							//DEBUG: _log("tween "+p+" from "+pt.b+" ("+bn+esfx+") to "+pt.e+" with suffix: "+pt.xs0);
						} else if (style[p] === undefined || !es && (es + "" === "NaN" || es == null)) {
							_log("invalid " + p + " tween value: " + vars[p]);
						} else {
							pt = new CSSPropTween(style, p, en || bn || 0, 0, pt, -1, p, false, 0, bs, es);
							pt.xs0 = (es === "none" && (p === "display" || p.indexOf("Style") !== -1)) ? bs : es; //intermediate value should typically be set immediately (end value) except for "display" or things like borderTopStyle, borderBottomStyle, etc. which should use the beginning value during the tween.
							//DEBUG: _log("non-tweening value "+p+": "+pt.xs0);
						}
					}
				}
				if (plugin) if (pt && !pt.plugin) {
					pt.plugin = plugin;
				}
			}
			return pt;
		};


		//gets called every time the tween updates, passing the new ratio (typically a value between 0 and 1, but not always (for example, if an Elastic.easeOut is used, the value can jump above 1 mid-tween). It will always start and 0 and end at 1.
		p.setRatio = function(v) {
			var pt = this._firstPT,
				min = 0.000001,
				val, str, i;

			//at the end of the tween, we set the values to exactly what we received in order to make sure non-tweening values (like "position" or "float" or whatever) are set and so that if the beginning/ending suffixes (units) didn't match and we normalized to px, the value that the user passed in is used here. We check to see if the tween is at its beginning in case it's a from() tween in which case the ratio will actually go from 1 to 0 over the course of the tween (backwards).
			if (v === 1 && (this._tween._time === this._tween._duration || this._tween._time === 0)) {
				while (pt) {
					if (pt.type !== 2) {
						pt.t[pt.p] = pt.e;
					} else {
						pt.setRatio(v);
					}
					pt = pt._next;
				}

			} else if (v || !(this._tween._time === this._tween._duration || this._tween._time === 0) || this._tween._rawPrevTime === -0.000001) {
				while (pt) {
					val = pt.c * v + pt.s;
					if (pt.r) {
						val = Math.round(val);
					} else if (val < min) if (val > -min) {
						val = 0;
					}
					if (!pt.type) {
						pt.t[pt.p] = val + pt.xs0;
					} else if (pt.type === 1) { //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
						i = pt.l;
						if (i === 2) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2;
						} else if (i === 3) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3;
						} else if (i === 4) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4;
						} else if (i === 5) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4 + pt.xn4 + pt.xs5;
						} else {
							str = pt.xs0 + val + pt.xs1;
							for (i = 1; i < pt.l; i++) {
								str += pt["xn"+i] + pt["xs"+(i+1)];
							}
							pt.t[pt.p] = str;
						}

					} else if (pt.type === -1) { //non-tweening value
						pt.t[pt.p] = pt.xs0;

					} else if (pt.setRatio) { //custom setRatio() for things like SpecialProps, external plugins, etc.
						pt.setRatio(v);
					}
					pt = pt._next;
				}

			//if the tween is reversed all the way back to the beginning, we need to restore the original values which may have different units (like % instead of px or em or whatever).
			} else {
				while (pt) {
					if (pt.type !== 2) {
						pt.t[pt.p] = pt.b;
					} else {
						pt.setRatio(v);
					}
					pt = pt._next;
				}
			}
		};

		/**
		 * @private
		 * Forces rendering of the target's transforms (rotation, scale, etc.) whenever the CSSPlugin's setRatio() is called.
		 * Basically, this tells the CSSPlugin to create a CSSPropTween (type 2) after instantiation that runs last in the linked
		 * list and calls the appropriate (3D or 2D) rendering function. We separate this into its own method so that we can call
		 * it from other plugins like BezierPlugin if, for example, it needs to apply an autoRotation and this CSSPlugin
		 * doesn't have any transform-related properties of its own. You can call this method as many times as you
		 * want and it won't create duplicate CSSPropTweens.
		 *
		 * @param {boolean} threeD if true, it should apply 3D tweens (otherwise, just 2D ones are fine and typically faster)
		 */
		p._enableTransforms = function(threeD) {
			this._transformType = (threeD || this._transformType === 3) ? 3 : 2;
			this._transform = this._transform || _getTransform(this._target, _cs, true); //ensures that the element has a _gsTransform property with the appropriate values.
		};

		/** @private **/
		p._linkCSSP = function(pt, next, prev, remove) {
			if (pt) {
				if (next) {
					next._prev = pt;
				}
				if (pt._next) {
					pt._next._prev = pt._prev;
				}
				if (pt._prev) {
					pt._prev._next = pt._next;
				} else if (this._firstPT === pt) {
					this._firstPT = pt._next;
					remove = true; //just to prevent resetting this._firstPT 5 lines down in case pt._next is null. (optimized for speed)
				}
				if (prev) {
					prev._next = pt;
				} else if (!remove && this._firstPT === null) {
					this._firstPT = pt;
				}
				pt._next = next;
				pt._prev = prev;
			}
			return pt;
		};

		//we need to make sure that if alpha or autoAlpha is killed, opacity is too. And autoAlpha affects the "visibility" property.
		p._kill = function(lookup) {
			var copy = lookup,
				pt, p, xfirst;
			if (lookup.autoAlpha || lookup.alpha) {
				copy = {};
				for (p in lookup) { //copy the lookup so that we're not changing the original which may be passed elsewhere.
					copy[p] = lookup[p];
				}
				copy.opacity = 1;
				if (copy.autoAlpha) {
					copy.visibility = 1;
				}
			}
			if (lookup.className && (pt = this._classNamePT)) { //for className tweens, we need to kill any associated CSSPropTweens too; a linked list starts at the className's "xfirst".
				xfirst = pt.xfirst;
				if (xfirst && xfirst._prev) {
					this._linkCSSP(xfirst._prev, pt._next, xfirst._prev._prev); //break off the prev
				} else if (xfirst === this._firstPT) {
					this._firstPT = pt._next;
				}
				if (pt._next) {
					this._linkCSSP(pt._next, pt._next._next, xfirst._prev);
				}
				this._classNamePT = null;
			}
			return TweenPlugin.prototype._kill.call(this, copy);
		};



		//used by cascadeTo() for gathering all the style properties of each child element into an array for comparison.
		var _getChildStyles = function(e, props, targets) {
				var children, i, child, type;
				if (e.slice) {
					i = e.length;
					while (--i > -1) {
						_getChildStyles(e[i], props, targets);
					}
					return;
				}
				children = e.childNodes;
				i = children.length;
				while (--i > -1) {
					child = children[i];
					type = child.type;
					if (child.style) {
						props.push(_getAllStyles(child));
						if (targets) {
							targets.push(child);
						}
					}
					if ((type === 1 || type === 9 || type === 11) && child.childNodes.length) {
						_getChildStyles(child, props, targets);
					}
				}
			};

		/**
		 * Typically only useful for className tweens that may affect child elements, this method creates a TweenLite
		 * and then compares the style properties of all the target's child elements at the tween's start and end, and
		 * if any are different, it also creates tweens for those and returns an array containing ALL of the resulting
		 * tweens (so that you can easily add() them to a TimelineLite, for example). The reason this functionality is
		 * wrapped into a separate static method of CSSPlugin instead of being integrated into all regular className tweens
		 * is because it creates entirely new tweens that may have completely different targets than the original tween,
		 * so if they were all lumped into the original tween instance, it would be inconsistent with the rest of the API
		 * and it would create other problems. For example:
		 *  - If I create a tween of elementA, that tween instance may suddenly change its target to include 50 other elements (unintuitive if I specifically defined the target I wanted)
		 *  - We can't just create new independent tweens because otherwise, what happens if the original/parent tween is reversed or pause or dropped into a TimelineLite for tight control? You'd expect that tween's behavior to affect all the others.
		 *  - Analyzing every style property of every child before and after the tween is an expensive operation when there are many children, so this behavior shouldn't be imposed on all className tweens by default, especially since it's probably rare that this extra functionality is needed.
		 *
		 * @param {Object} target object to be tweened
		 * @param {number} Duration in seconds (or frames for frames-based tweens)
		 * @param {Object} Object containing the end values, like {className:"newClass", ease:Linear.easeNone}
		 * @return {Array} An array of TweenLite instances
		 */
		CSSPlugin.cascadeTo = function(target, duration, vars) {
			var tween = TweenLite.to(target, duration, vars),
				results = [tween],
				b = [],
				e = [],
				targets = [],
				_reservedProps = TweenLite._internals.reservedProps,
				i, difs, p;
			target = tween._targets || tween.target;
			_getChildStyles(target, b, targets);
			tween.render(duration, true);
			_getChildStyles(target, e);
			tween.render(0, true);
			tween._enabled(true);
			i = targets.length;
			while (--i > -1) {
				difs = _cssDif(targets[i], b[i], e[i]);
				if (difs.firstMPT) {
					difs = difs.difs;
					for (p in vars) {
						if (_reservedProps[p]) {
							difs[p] = vars[p];
						}
					}
					results.push( TweenLite.to(targets[i], duration, difs) );
				}
			}
			return results;
		};

		TweenPlugin.activate([CSSPlugin]);
		return CSSPlugin;

	}, true);

	
	
	
	
	
	
	
	
	
	
/*
 * ----------------------------------------------------------------
 * RoundPropsPlugin
 * ----------------------------------------------------------------
 */
	(function() {

		var RoundPropsPlugin = window._gsDefine.plugin({
				propName: "roundProps",
				priority: -1,
				API: 2,

				//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
				init: function(target, value, tween) {
					this._tween = tween;
					return true;
				}

			}),
			p = RoundPropsPlugin.prototype;

		p._onInitAllProps = function() {
			var tween = this._tween,
				rp = (tween.vars.roundProps instanceof Array) ? tween.vars.roundProps : tween.vars.roundProps.split(","),
				i = rp.length,
				lookup = {},
				rpt = tween._propLookup.roundProps,
				prop, pt, next;
			while (--i > -1) {
				lookup[rp[i]] = 1;
			}
			i = rp.length;
			while (--i > -1) {
				prop = rp[i];
				pt = tween._firstPT;
				while (pt) {
					next = pt._next; //record here, because it may get removed
					if (pt.pg) {
						pt.t._roundProps(lookup, true);
					} else if (pt.n === prop) {
						this._add(pt.t, prop, pt.s, pt.c);
						//remove from linked list
						if (next) {
							next._prev = pt._prev;
						}
						if (pt._prev) {
							pt._prev._next = next;
						} else if (tween._firstPT === pt) {
							tween._firstPT = next;
						}
						pt._next = pt._prev = null;
						tween._propLookup[prop] = rpt;
					}
					pt = next;
				}
			}
			return false;
		};

		p._add = function(target, p, s, c) {
			this._addTween(target, p, s, s + c, p, true);
			this._overwriteProps.push(p);
		};

	}());










/*
 * ----------------------------------------------------------------
 * AttrPlugin
 * ----------------------------------------------------------------
 */
	window._gsDefine.plugin({
		propName: "attr",
		API: 2,
		version: "0.3.0",

		//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
		init: function(target, value, tween) {
			var p, start, end;
			if (typeof(target.setAttribute) !== "function") {
				return false;
			}
			this._target = target;
			this._proxy = {};
			this._start = {}; // we record start and end values exactly as they are in case they're strings (not numbers) - we need to be able to revert to them cleanly.
			this._end = {};
			this._endRatio = tween.vars.runBackwards ? 0 : 1;
			for (p in value) {
				this._start[p] = this._proxy[p] = start = target.getAttribute(p);
				this._end[p] = end = value[p];
				this._addTween(this._proxy, p, parseFloat(start), end, p);
				this._overwriteProps.push(p);
			}
			return true;
		},

		//called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
		set: function(ratio) {
			this._super.setRatio.call(this, ratio);
			var props = this._overwriteProps,
				i = props.length,
				lookup = (ratio !== 0 && ratio !== 1) ? this._proxy : (ratio === this._endRatio) ? this._end : this._start,
				p;
			while (--i > -1) {
				p = props[i];
				this._target.setAttribute(p, lookup[p] + "");
			}
		}

	})










/*
 * ----------------------------------------------------------------
 * DirectionalRotationPlugin
 * ----------------------------------------------------------------
 */
	window._gsDefine.plugin({
		propName: "directionalRotation",
		API: 2,
		version: "0.2.0",

		//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
		init: function(target, value, tween) {
			if (typeof(value) !== "object") {
				value = {rotation:value};
			}
			this.finals = {};
			var cap = (value.useRadians === true) ? Math.PI * 2 : 360,
				min = 0.000001,
				p, v, start, end, dif, split;
			for (p in value) {
				if (p !== "useRadians") {
					split = (value[p] + "").split("_");
					v = split[0];
					start = parseFloat( (typeof(target[p]) !== "function") ? target[p] : target[ ((p.indexOf("set") || typeof(target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3)) ]() );
					end = this.finals[p] = (typeof(v) === "string" && v.charAt(1) === "=") ? start + parseInt(v.charAt(0) + "1", 10) * Number(v.substr(2)) : Number(v) || 0;
					dif = end - start;
					if (split.length) {
						v = split.join("_");
						if (v.indexOf("short") !== -1) {
							dif = dif % cap;
							if (dif !== dif % (cap / 2)) {
								dif = (dif < 0) ? dif + cap : dif - cap;
							}
						}
						if (v.indexOf("_cw") !== -1 && dif < 0) {
							dif = ((dif + cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
						} else if (v.indexOf("ccw") !== -1 && dif > 0) {
							dif = ((dif - cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
						}
					}
					if (dif > min || dif < -min) {
						this._addTween(target, p, start, start + dif, p);
						this._overwriteProps.push(p);
					}
				}
			}
			return true;
		},

		//called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
		set: function(ratio) {
			var pt;
			if (ratio !== 1) {
				this._super.setRatio.call(this, ratio);
			} else {
				pt = this._firstPT;
				while (pt) {
					if (pt.f) {
						pt.t[pt.p](this.finals[pt.p]);
					} else {
						pt.t[pt.p] = this.finals[pt.p];
					}
					pt = pt._next;
				}
			}
		}

	})._autoCSS = true;







	
	
	
	
/*
 * ----------------------------------------------------------------
 * EasePack
 * ----------------------------------------------------------------
 */
	window._gsDefine("easing.Back", ["easing.Ease"], function(Ease) {
		
		var w = (window.GreenSockGlobals || window),
			gs = w.com.greensock,
			_2PI = Math.PI * 2,
			_HALF_PI = Math.PI / 2,
			_class = gs._class,
			_create = function(n, f) {
				var C = _class("easing." + n, function(){}, true),
					p = C.prototype = new Ease();
				p.constructor = C;
				p.getRatio = f;
				return C;
			},
			_easeReg = Ease.register || function(){}, //put an empty function in place just as a safety measure in case someone loads an OLD version of TweenLite.js where Ease.register doesn't exist.
			_wrap = function(name, EaseOut, EaseIn, EaseInOut, aliases) {
				var C = _class("easing."+name, {
					easeOut:new EaseOut(),
					easeIn:new EaseIn(),
					easeInOut:new EaseInOut()
				}, true);
				_easeReg(C, name);
				return C;
			},
			EasePoint = function(time, value, next) {
				this.t = time;
				this.v = value;
				if (next) {
					this.next = next;
					next.prev = this;
					this.c = next.v - value;
					this.gap = next.t - time;
				}
			},

			//Back
			_createBack = function(n, f) {
				var C = _class("easing." + n, function(overshoot) {
						this._p1 = (overshoot || overshoot === 0) ? overshoot : 1.70158;
						this._p2 = this._p1 * 1.525;
					}, true),
					p = C.prototype = new Ease();
				p.constructor = C;
				p.getRatio = f;
				p.config = function(overshoot) {
					return new C(overshoot);
				};
				return C;
			},

			Back = _wrap("Back",
				_createBack("BackOut", function(p) {
					return ((p = p - 1) * p * ((this._p1 + 1) * p + this._p1) + 1);
				}),
				_createBack("BackIn", function(p) {
					return p * p * ((this._p1 + 1) * p - this._p1);
				}),
				_createBack("BackInOut", function(p) {
					return ((p *= 2) < 1) ? 0.5 * p * p * ((this._p2 + 1) * p - this._p2) : 0.5 * ((p -= 2) * p * ((this._p2 + 1) * p + this._p2) + 2);
				})
			),


			//SlowMo
			SlowMo = _class("easing.SlowMo", function(linearRatio, power, yoyoMode) {
				power = (power || power === 0) ? power : 0.7;
				if (linearRatio == null) {
					linearRatio = 0.7;
				} else if (linearRatio > 1) {
					linearRatio = 1;
				}
				this._p = (linearRatio !== 1) ? power : 0;
				this._p1 = (1 - linearRatio) / 2;
				this._p2 = linearRatio;
				this._p3 = this._p1 + this._p2;
				this._calcEnd = (yoyoMode === true);
			}, true),
			p = SlowMo.prototype = new Ease(),
			SteppedEase, RoughEase, _createElastic;

		p.constructor = SlowMo;
		p.getRatio = function(p) {
			var r = p + (0.5 - p) * this._p;
			if (p < this._p1) {
				return this._calcEnd ? 1 - ((p = 1 - (p / this._p1)) * p) : r - ((p = 1 - (p / this._p1)) * p * p * p * r);
			} else if (p > this._p3) {
				return this._calcEnd ? 1 - (p = (p - this._p3) / this._p1) * p : r + ((p - r) * (p = (p - this._p3) / this._p1) * p * p * p);
			}
			return this._calcEnd ? 1 : r;
		};
		SlowMo.ease = new SlowMo(0.7, 0.7);

		p.config = SlowMo.config = function(linearRatio, power, yoyoMode) {
			return new SlowMo(linearRatio, power, yoyoMode);
		};


		//SteppedEase
		SteppedEase = _class("easing.SteppedEase", function(steps) {
				steps = steps || 1;
				this._p1 = 1 / steps;
				this._p2 = steps + 1;
			}, true);
		p = SteppedEase.prototype = new Ease();
		p.constructor = SteppedEase;
		p.getRatio = function(p) {
			if (p < 0) {
				p = 0;
			} else if (p >= 1) {
				p = 0.999999999;
			}
			return ((this._p2 * p) >> 0) * this._p1;
		};
		p.config = SteppedEase.config = function(steps) {
			return new SteppedEase(steps);
		};


		//RoughEase
		RoughEase = _class("easing.RoughEase", function(vars) {
			vars = vars || {};
			var taper = vars.taper || "none",
				a = [],
				cnt = 0,
				points = (vars.points || 20) | 0,
				i = points,
				randomize = (vars.randomize !== false),
				clamp = (vars.clamp === true),
				template = (vars.template instanceof Ease) ? vars.template : null,
				strength = (typeof(vars.strength) === "number") ? vars.strength * 0.4 : 0.4,
				x, y, bump, invX, obj, pnt;
			while (--i > -1) {
				x = randomize ? Math.random() : (1 / points) * i;
				y = template ? template.getRatio(x) : x;
				if (taper === "none") {
					bump = strength;
				} else if (taper === "out") {
					invX = 1 - x;
					bump = invX * invX * strength;
				} else if (taper === "in") {
					bump = x * x * strength;
				} else if (x < 0.5) {  //"both" (start)
					invX = x * 2;
					bump = invX * invX * 0.5 * strength;
				} else {				//"both" (end)
					invX = (1 - x) * 2;
					bump = invX * invX * 0.5 * strength;
				}
				if (randomize) {
					y += (Math.random() * bump) - (bump * 0.5);
				} else if (i % 2) {
					y += bump * 0.5;
				} else {
					y -= bump * 0.5;
				}
				if (clamp) {
					if (y > 1) {
						y = 1;
					} else if (y < 0) {
						y = 0;
					}
				}
				a[cnt++] = {x:x, y:y};
			}
			a.sort(function(a, b) {
				return a.x - b.x;
			});

			pnt = new EasePoint(1, 1, null);
			i = points;
			while (--i > -1) {
				obj = a[i];
				pnt = new EasePoint(obj.x, obj.y, pnt);
			}

			this._prev = new EasePoint(0, 0, (pnt.t !== 0) ? pnt : pnt.next);
		}, true);
		p = RoughEase.prototype = new Ease();
		p.constructor = RoughEase;
		p.getRatio = function(p) {
			var pnt = this._prev;
			if (p > pnt.t) {
				while (pnt.next && p >= pnt.t) {
					pnt = pnt.next;
				}
				pnt = pnt.prev;
			} else {
				while (pnt.prev && p <= pnt.t) {
					pnt = pnt.prev;
				}
			}
			this._prev = pnt;
			return (pnt.v + ((p - pnt.t) / pnt.gap) * pnt.c);
		};
		p.config = function(vars) {
			return new RoughEase(vars);
		};
		RoughEase.ease = new RoughEase();


		//Bounce
		_wrap("Bounce",
			_create("BounceOut", function(p) {
				if (p < 1 / 2.75) {
					return 7.5625 * p * p;
				} else if (p < 2 / 2.75) {
					return 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
				} else if (p < 2.5 / 2.75) {
					return 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
				}
				return 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
			}),
			_create("BounceIn", function(p) {
				if ((p = 1 - p) < 1 / 2.75) {
					return 1 - (7.5625 * p * p);
				} else if (p < 2 / 2.75) {
					return 1 - (7.5625 * (p -= 1.5 / 2.75) * p + 0.75);
				} else if (p < 2.5 / 2.75) {
					return 1 - (7.5625 * (p -= 2.25 / 2.75) * p + 0.9375);
				}
				return 1 - (7.5625 * (p -= 2.625 / 2.75) * p + 0.984375);
			}),
			_create("BounceInOut", function(p) {
				var invert = (p < 0.5);
				if (invert) {
					p = 1 - (p * 2);
				} else {
					p = (p * 2) - 1;
				}
				if (p < 1 / 2.75) {
					p = 7.5625 * p * p;
				} else if (p < 2 / 2.75) {
					p = 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
				} else if (p < 2.5 / 2.75) {
					p = 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
				} else {
					p = 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
				}
				return invert ? (1 - p) * 0.5 : p * 0.5 + 0.5;
			})
		);


		//CIRC
		_wrap("Circ",
			_create("CircOut", function(p) {
				return Math.sqrt(1 - (p = p - 1) * p);
			}),
			_create("CircIn", function(p) {
				return -(Math.sqrt(1 - (p * p)) - 1);
			}),
			_create("CircInOut", function(p) {
				return ((p*=2) < 1) ? -0.5 * (Math.sqrt(1 - p * p) - 1) : 0.5 * (Math.sqrt(1 - (p -= 2) * p) + 1);
			})
		);


		//Elastic
		_createElastic = function(n, f, def) {
			var C = _class("easing." + n, function(amplitude, period) {
					this._p1 = amplitude || 1;
					this._p2 = period || def;
					this._p3 = this._p2 / _2PI * (Math.asin(1 / this._p1) || 0);
				}, true),
				p = C.prototype = new Ease();
			p.constructor = C;
			p.getRatio = f;
			p.config = function(amplitude, period) {
				return new C(amplitude, period);
			};
			return C;
		};
		_wrap("Elastic",
			_createElastic("ElasticOut", function(p) {
				return this._p1 * Math.pow(2, -10 * p) * Math.sin( (p - this._p3) * _2PI / this._p2 ) + 1;
			}, 0.3),
			_createElastic("ElasticIn", function(p) {
				return -(this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin( (p - this._p3) * _2PI / this._p2 ));
			}, 0.3),
			_createElastic("ElasticInOut", function(p) {
				return ((p *= 2) < 1) ? -0.5 * (this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin( (p - this._p3) * _2PI / this._p2)) : this._p1 * Math.pow(2, -10 *(p -= 1)) * Math.sin( (p - this._p3) * _2PI / this._p2 ) *0.5 + 1;
			}, 0.45)
		);


		//Expo
		_wrap("Expo",
			_create("ExpoOut", function(p) {
				return 1 - Math.pow(2, -10 * p);
			}),
			_create("ExpoIn", function(p) {
				return Math.pow(2, 10 * (p - 1)) - 0.001;
			}),
			_create("ExpoInOut", function(p) {
				return ((p *= 2) < 1) ? 0.5 * Math.pow(2, 10 * (p - 1)) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
			})
		);


		//Sine
		_wrap("Sine",
			_create("SineOut", function(p) {
				return Math.sin(p * _HALF_PI);
			}),
			_create("SineIn", function(p) {
				return -Math.cos(p * _HALF_PI) + 1;
			}),
			_create("SineInOut", function(p) {
				return -0.5 * (Math.cos(Math.PI * p) - 1);
			})
		);

		_class("easing.EaseLookup", {
				find:function(s) {
					return Ease.map[s];
				}
			}, true);

		//register the non-standard eases
		_easeReg(w.SlowMo, "SlowMo", "ease,");
		_easeReg(RoughEase, "RoughEase", "ease,");
		_easeReg(SteppedEase, "SteppedEase", "ease,");

		return Back;
		
	}, true);


}); 











/*
 * ----------------------------------------------------------------
 * Base classes like TweenLite, SimpleTimeline, Ease, Ticker, etc.
 * ----------------------------------------------------------------
 */
(function(window) {

		"use strict";
		var _globals = window.GreenSockGlobals || window;
		if (_globals.TweenLite) {
			return; //in case the core set of classes is already loaded, don't instantiate twice.
		}
		var _namespace = function(ns) {
				var a = ns.split("."),
					p = _globals, i;
				for (i = 0; i < a.length; i++) {
					p[a[i]] = p = p[a[i]] || {};
				}
				return p;
			},
			gs = _namespace("com.greensock"),
			_tinyNum = 0.0000000001,
			_slice = [].slice,
			_emptyFunc = function() {},
			_isArray = (function() { //works around issues in iframe environments where the Array global isn't shared, thus if the object originates in a different window/iframe, "(obj instanceof Array)" will evaluate false. We added some speed optimizations to avoid Object.prototype.toString.call() unless it's absolutely necessary because it's VERY slow (like 20x slower)
				var toString = Object.prototype.toString,
					array = toString.call([]);
				return function(obj) {
					return obj != null && (obj instanceof Array || (typeof(obj) === "object" && !!obj.push && toString.call(obj) === array));
				};
			}()),
			a, i, p, _ticker, _tickerActive,
			_defLookup = {},

			/**
			 * @constructor
			 * Defines a GreenSock class, optionally with an array of dependencies that must be instantiated first and passed into the definition.
			 * This allows users to load GreenSock JS files in any order even if they have interdependencies (like CSSPlugin extends TweenPlugin which is
			 * inside TweenLite.js, but if CSSPlugin is loaded first, it should wait to run its code until TweenLite.js loads and instantiates TweenPlugin
			 * and then pass TweenPlugin to CSSPlugin's definition). This is all done automatically and internally.
			 *
			 * Every definition will be added to a "com.greensock" global object (typically window, but if a window.GreenSockGlobals object is found,
			 * it will go there as of v1.7). For example, TweenLite will be found at window.com.greensock.TweenLite and since it's a global class that should be available anywhere,
			 * it is ALSO referenced at window.TweenLite. However some classes aren't considered global, like the base com.greensock.core.Animation class, so
			 * those will only be at the package like window.com.greensock.core.Animation. Again, if you define a GreenSockGlobals object on the window, everything
			 * gets tucked neatly inside there instead of on the window directly. This allows you to do advanced things like load multiple versions of GreenSock
			 * files and put them into distinct objects (imagine a banner ad uses a newer version but the main site uses an older one). In that case, you could
			 * sandbox the banner one like:
			 *
			 * <script>
			 *     var gs = window.GreenSockGlobals = {}; //the newer version we're about to load could now be referenced in a "gs" object, like gs.TweenLite.to(...). Use whatever alias you want as long as it's unique, "gs" or "banner" or whatever.
			 * </script>
			 * <script src="js/greensock/v1.7/TweenMax.js"></script>
			 * <script>
			 *     window.GreenSockGlobals = null; //reset it back to null so that the next load of TweenMax affects the window and we can reference things directly like TweenLite.to(...)
			 * </script>
			 * <script src="js/greensock/v1.6/TweenMax.js"></script>
			 * <script>
			 *     gs.TweenLite.to(...); //would use v1.7
			 *     TweenLite.to(...); //would use v1.6
			 * </script>
			 *
			 * @param {!string} ns The namespace of the class definition, leaving off "com.greensock." as that's assumed. For example, "TweenLite" or "plugins.CSSPlugin" or "easing.Back".
			 * @param {!Array.<string>} dependencies An array of dependencies (described as their namespaces minus "com.greensock." prefix). For example ["TweenLite","plugins.TweenPlugin","core.Animation"]
			 * @param {!function():Object} func The function that should be called and passed the resolved dependencies which will return the actual class for this definition.
			 * @param {boolean=} global If true, the class will be added to the global scope (typically window unless you define a window.GreenSockGlobals object)
			 */
			Definition = function(ns, dependencies, func, global) {
				this.sc = (_defLookup[ns]) ? _defLookup[ns].sc : []; //subclasses
				_defLookup[ns] = this;
				this.gsClass = null;
				this.func = func;
				var _classes = [];
				this.check = function(init) {
					var i = dependencies.length,
						missing = i,
						cur, a, n, cl;
					while (--i > -1) {
						if ((cur = _defLookup[dependencies[i]] || new Definition(dependencies[i], [])).gsClass) {
							_classes[i] = cur.gsClass;
							missing--;
						} else if (init) {
							cur.sc.push(this);
						}
					}
					if (missing === 0 && func) {
						a = ("com.greensock." + ns).split(".");
						n = a.pop();
						cl = _namespace(a.join("."))[n] = this.gsClass = func.apply(func, _classes);

						//exports to multiple environments
						if (global) {
							_globals[n] = cl; //provides a way to avoid global namespace pollution. By default, the main classes like TweenLite, Power1, Strong, etc. are added to window unless a GreenSockGlobals is defined. So if you want to have things added to a custom object instead, just do something like window.GreenSockGlobals = {} before loading any GreenSock files. You can even set up an alias like window.GreenSockGlobals = windows.gs = {} so that you can access everything like gs.TweenLite. Also remember that ALL classes are added to the window.com.greensock object (in their respective packages, like com.greensock.easing.Power1, com.greensock.TweenLite, etc.)
							if (typeof(define) === "function" && define.amd){ //AMD
								define((window.GreenSockAMDPath ? window.GreenSockAMDPath + "/" : "") + ns.split(".").join("/"), [], function() { return cl; });
							} else if (typeof(module) !== "undefined" && module.exports){ //node
								module.exports = cl;
							}
						}
						for (i = 0; i < this.sc.length; i++) {
							this.sc[i].check();
						}
					}
				};
				this.check(true);
			},

			//used to create Definition instances (which basically registers a class that has dependencies).
			_gsDefine = window._gsDefine = function(ns, dependencies, func, global) {
				return new Definition(ns, dependencies, func, global);
			},

			//a quick way to create a class that doesn't have any dependencies. Returns the class, but first registers it in the GreenSock namespace so that other classes can grab it (other classes might be dependent on the class).
			_class = gs._class = function(ns, func, global) {
				func = func || function() {};
				_gsDefine(ns, [], function(){ return func; }, global);
				return func;
			};

		_gsDefine.globals = _globals;



/*
 * ----------------------------------------------------------------
 * Ease
 * ----------------------------------------------------------------
 */
		var _baseParams = [0, 0, 1, 1],
			_blankArray = [],
			Ease = _class("easing.Ease", function(func, extraParams, type, power) {
				this._func = func;
				this._type = type || 0;
				this._power = power || 0;
				this._params = extraParams ? _baseParams.concat(extraParams) : _baseParams;
			}, true),
			_easeMap = Ease.map = {},
			_easeReg = Ease.register = function(ease, names, types, create) {
				var na = names.split(","),
					i = na.length,
					ta = (types || "easeIn,easeOut,easeInOut").split(","),
					e, name, j, type;
				while (--i > -1) {
					name = na[i];
					e = create ? _class("easing."+name, null, true) : gs.easing[name] || {};
					j = ta.length;
					while (--j > -1) {
						type = ta[j];
						_easeMap[name + "." + type] = _easeMap[type + name] = e[type] = ease.getRatio ? ease : ease[type] || new ease();
					}
				}
			};

		p = Ease.prototype;
		p._calcEnd = false;
		p.getRatio = function(p) {
			if (this._func) {
				this._params[0] = p;
				return this._func.apply(null, this._params);
			}
			var t = this._type,
				pw = this._power,
				r = (t === 1) ? 1 - p : (t === 2) ? p : (p < 0.5) ? p * 2 : (1 - p) * 2;
			if (pw === 1) {
				r *= r;
			} else if (pw === 2) {
				r *= r * r;
			} else if (pw === 3) {
				r *= r * r * r;
			} else if (pw === 4) {
				r *= r * r * r * r;
			}
			return (t === 1) ? 1 - r : (t === 2) ? r : (p < 0.5) ? r / 2 : 1 - (r / 2);
		};

		//create all the standard eases like Linear, Quad, Cubic, Quart, Quint, Strong, Power0, Power1, Power2, Power3, and Power4 (each with easeIn, easeOut, and easeInOut)
		a = ["Linear","Quad","Cubic","Quart","Quint,Strong"];
		i = a.length;
		while (--i > -1) {
			p = a[i]+",Power"+i;
			_easeReg(new Ease(null,null,1,i), p, "easeOut", true);
			_easeReg(new Ease(null,null,2,i), p, "easeIn" + ((i === 0) ? ",easeNone" : ""));
			_easeReg(new Ease(null,null,3,i), p, "easeInOut");
		}
		_easeMap.linear = gs.easing.Linear.easeIn;
		_easeMap.swing = gs.easing.Quad.easeInOut; //for jQuery folks


/*
 * ----------------------------------------------------------------
 * EventDispatcher
 * ----------------------------------------------------------------
 */
		var EventDispatcher = _class("events.EventDispatcher", function(target) {
			this._listeners = {};
			this._eventTarget = target || this;
		});
		p = EventDispatcher.prototype;

		p.addEventListener = function(type, callback, scope, useParam, priority) {
			priority = priority || 0;
			var list = this._listeners[type],
				index = 0,
				listener, i;
			if (list == null) {
				this._listeners[type] = list = [];
			}
			i = list.length;
			while (--i > -1) {
				listener = list[i];
				if (listener.c === callback && listener.s === scope) {
					list.splice(i, 1);
				} else if (index === 0 && listener.pr < priority) {
					index = i + 1;
				}
			}
			list.splice(index, 0, {c:callback, s:scope, up:useParam, pr:priority});
			if (this === _ticker && !_tickerActive) {
				_ticker.wake();
			}
		};

		p.removeEventListener = function(type, callback) {
			var list = this._listeners[type], i;
			if (list) {
				i = list.length;
				while (--i > -1) {
					if (list[i].c === callback) {
						list.splice(i, 1);
						return;
					}
				}
			}
		};

		p.dispatchEvent = function(type) {
			var list = this._listeners[type],
				i, t, listener;
			if (list) {
				i = list.length;
				t = this._eventTarget;
				while (--i > -1) {
					listener = list[i];
					if (listener.up) {
						listener.c.call(listener.s || t, {type:type, target:t});
					} else {
						listener.c.call(listener.s || t);
					}
				}
			}
		};


/*
 * ----------------------------------------------------------------
 * Ticker
 * ----------------------------------------------------------------
 */
 		var _reqAnimFrame = window.requestAnimationFrame,
			_cancelAnimFrame = window.cancelAnimationFrame,
			_getTime = Date.now || function() {return new Date().getTime();},
			_lastUpdate = _getTime();

		//now try to determine the requestAnimationFrame and cancelAnimationFrame functions and if none are found, we'll use a setTimeout()/clearTimeout() polyfill.
		a = ["ms","moz","webkit","o"];
		i = a.length;
		while (--i > -1 && !_reqAnimFrame) {
			_reqAnimFrame = window[a[i] + "RequestAnimationFrame"];
			_cancelAnimFrame = window[a[i] + "CancelAnimationFrame"] || window[a[i] + "CancelRequestAnimationFrame"];
		}

		_class("Ticker", function(fps, useRAF) {
			var _self = this,
				_startTime = _getTime(),
				_useRAF = (useRAF !== false && _reqAnimFrame),
				_fps, _req, _id, _gap, _nextTime,
				_tick = function(manual) {
					_lastUpdate = _getTime();
					_self.time = (_lastUpdate - _startTime) / 1000;
					var overlap = _self.time - _nextTime,
						dispatch;
					if (!_fps || overlap > 0 || manual === true) {
						_self.frame++;
						_nextTime += overlap + (overlap >= _gap ? 0.004 : _gap - overlap);
						dispatch = true;
					}
					if (manual !== true) { //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
						_id = _req(_tick);
					}
					if (dispatch) {
						_self.dispatchEvent("tick");
					}
				};

			EventDispatcher.call(_self);
			_self.time = _self.frame = 0;
			_self.tick = function() {
				_tick(true);
			};

			_self.sleep = function() {
				if (_id == null) {
					return;
				}
				if (!_useRAF || !_cancelAnimFrame) {
					clearTimeout(_id);
				} else {
					_cancelAnimFrame(_id);
				}
				_req = _emptyFunc;
				_id = null;
				if (_self === _ticker) {
					_tickerActive = false;
				}
			};

			_self.wake = function() {
				if (_id !== null) {
					_self.sleep();
				}
				_req = (_fps === 0) ? _emptyFunc : (!_useRAF || !_reqAnimFrame) ? function(f) { return setTimeout(f, ((_nextTime - _self.time) * 1000 + 1) | 0); } : _reqAnimFrame;
				if (_self === _ticker) {
					_tickerActive = true;
				}
				_tick(2);
			};

			_self.fps = function(value) {
				if (!arguments.length) {
					return _fps;
				}
				_fps = value;
				_gap = 1 / (_fps || 60);
				_nextTime = this.time + _gap;
				_self.wake();
			};

			_self.useRAF = function(value) {
				if (!arguments.length) {
					return _useRAF;
				}
				_self.sleep();
				_useRAF = value;
				_self.fps(_fps);
			};
			_self.fps(fps);

			//a bug in iOS 6 Safari occasionally prevents the requestAnimationFrame from working initially, so we use a 1.5-second timeout that automatically falls back to setTimeout() if it senses this condition.
			setTimeout(function() {
				if (_useRAF && (!_id || _self.frame < 5)) {
					_self.useRAF(false);
				}
			}, 1500);
		});

		p = gs.Ticker.prototype = new gs.events.EventDispatcher();
		p.constructor = gs.Ticker;


/*
 * ----------------------------------------------------------------
 * Animation
 * ----------------------------------------------------------------
 */
		var Animation = _class("core.Animation", function(duration, vars) {
				this.vars = vars = vars || {};
				this._duration = this._totalDuration = duration || 0;
				this._delay = Number(vars.delay) || 0;
				this._timeScale = 1;
				this._active = (vars.immediateRender === true);
				this.data = vars.data;
				this._reversed = (vars.reversed === true);

				if (!_rootTimeline) {
					return;
				}
				if (!_tickerActive) { //some browsers (like iOS 6 Safari) shut down JavaScript execution when the tab is disabled and they [occasionally] neglect to start up requestAnimationFrame again when returning - this code ensures that the engine starts up again properly.
					_ticker.wake();
				}

				var tl = this.vars.useFrames ? _rootFramesTimeline : _rootTimeline;
				tl.add(this, tl._time);

				if (this.vars.paused) {
					this.paused(true);
				}
			});

		_ticker = Animation.ticker = new gs.Ticker();
		p = Animation.prototype;
		p._dirty = p._gc = p._initted = p._paused = false;
		p._totalTime = p._time = 0;
		p._rawPrevTime = -1;
		p._next = p._last = p._onUpdate = p._timeline = p.timeline = null;
		p._paused = false;


		//some browsers (like iOS) occasionally drop the requestAnimationFrame event when the user switches to a different tab and then comes back again, so we use a 2-second setTimeout() to sense if/when that condition occurs and then wake() the ticker.
		var _checkTimeout = function() {
				if (_tickerActive && _getTime() - _lastUpdate > 2000) {
					_ticker.wake();
				}
				setTimeout(_checkTimeout, 2000);
			};
		_checkTimeout();


		p.play = function(from, suppressEvents) {
			if (from != null) {
				this.seek(from, suppressEvents);
			}
			return this.reversed(false).paused(false);
		};

		p.pause = function(atTime, suppressEvents) {
			if (atTime != null) {
				this.seek(atTime, suppressEvents);
			}
			return this.paused(true);
		};

		p.resume = function(from, suppressEvents) {
			if (from != null) {
				this.seek(from, suppressEvents);
			}
			return this.paused(false);
		};

		p.seek = function(time, suppressEvents) {
			return this.totalTime(Number(time), suppressEvents !== false);
		};

		p.restart = function(includeDelay, suppressEvents) {
			return this.reversed(false).paused(false).totalTime(includeDelay ? -this._delay : 0, (suppressEvents !== false), true);
		};

		p.reverse = function(from, suppressEvents) {
			if (from != null) {
				this.seek((from || this.totalDuration()), suppressEvents);
			}
			return this.reversed(true).paused(false);
		};

		p.render = function(time, suppressEvents, force) {
			//stub - we override this method in subclasses.
		};

		p.invalidate = function() {
			return this;
		};

		p.isActive = function() {
			var tl = this._timeline, //the 2 root timelines won't have a _timeline; they're always active.
				startTime = this._startTime,
				rawTime;
			return (!tl || (!this._gc && !this._paused && tl.isActive() && (rawTime = tl.rawTime()) >= startTime && rawTime < startTime + this.totalDuration() / this._timeScale));
		};

		p._enabled = function (enabled, ignoreTimeline) {
			if (!_tickerActive) {
				_ticker.wake();
			}
			this._gc = !enabled;
			this._active = this.isActive();
			if (ignoreTimeline !== true) {
				if (enabled && !this.timeline) {
					this._timeline.add(this, this._startTime - this._delay);
				} else if (!enabled && this.timeline) {
					this._timeline._remove(this, true);
				}
			}
			return false;
		};


		p._kill = function(vars, target) {
			return this._enabled(false, false);
		};

		p.kill = function(vars, target) {
			this._kill(vars, target);
			return this;
		};

		p._uncache = function(includeSelf) {
			var tween = includeSelf ? this : this.timeline;
			while (tween) {
				tween._dirty = true;
				tween = tween.timeline;
			}
			return this;
		};

		p._swapSelfInParams = function(params) {
			var i = params.length,
				copy = params.concat();
			while (--i > -1) {
				if (params[i] === "{self}") {
					copy[i] = this;
				}
			}
			return copy;
		};

//----Animation getters/setters --------------------------------------------------------

		p.eventCallback = function(type, callback, params, scope) {
			if ((type || "").substr(0,2) === "on") {
				var v = this.vars;
				if (arguments.length === 1) {
					return v[type];
				}
				if (callback == null) {
					delete v[type];
				} else {
					v[type] = callback;
					v[type + "Params"] = (_isArray(params) && params.join("").indexOf("{self}") !== -1) ? this._swapSelfInParams(params) : params;
					v[type + "Scope"] = scope;
				}
				if (type === "onUpdate") {
					this._onUpdate = callback;
				}
			}
			return this;
		};

		p.delay = function(value) {
			if (!arguments.length) {
				return this._delay;
			}
			if (this._timeline.smoothChildTiming) {
				this.startTime( this._startTime + value - this._delay );
			}
			this._delay = value;
			return this;
		};

		p.duration = function(value) {
			if (!arguments.length) {
				this._dirty = false;
				return this._duration;
			}
			this._duration = this._totalDuration = value;
			this._uncache(true); //true in case it's a TweenMax or TimelineMax that has a repeat - we'll need to refresh the totalDuration.
			if (this._timeline.smoothChildTiming) if (this._time > 0) if (this._time < this._duration) if (value !== 0) {
				this.totalTime(this._totalTime * (value / this._duration), true);
			}
			return this;
		};

		p.totalDuration = function(value) {
			this._dirty = false;
			return (!arguments.length) ? this._totalDuration : this.duration(value);
		};

		p.time = function(value, suppressEvents) {
			if (!arguments.length) {
				return this._time;
			}
			if (this._dirty) {
				this.totalDuration();
			}
			return this.totalTime((value > this._duration) ? this._duration : value, suppressEvents);
		};

		p.totalTime = function(time, suppressEvents, uncapped) {
			if (!_tickerActive) {
				_ticker.wake();
			}
			if (!arguments.length) {
				return this._totalTime;
			}
			if (this._timeline) {
				if (time < 0 && !uncapped) {
					time += this.totalDuration();
				}
				if (this._timeline.smoothChildTiming) {
					if (this._dirty) {
						this.totalDuration();
					}
					var totalDuration = this._totalDuration,
						tl = this._timeline;
					if (time > totalDuration && !uncapped) {
						time = totalDuration;
					}
					this._startTime = (this._paused ? this._pauseTime : tl._time) - ((!this._reversed ? time : totalDuration - time) / this._timeScale);
					if (!tl._dirty) { //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
						this._uncache(false);
					}
					//in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The startTime of that child would get pushed out, but one of the ancestors may have completed.
					if (tl._timeline) {
						while (tl._timeline) {
							if (tl._timeline._time !== (tl._startTime + tl._totalTime) / tl._timeScale) {
								tl.totalTime(tl._totalTime, true);
							}
							tl = tl._timeline;
						}
					}
				}
				if (this._gc) {
					this._enabled(true, false);
				}
				if (this._totalTime !== time || this._duration === 0) {
					this.render(time, suppressEvents, false);
				}
			}
			return this;
		};

		p.progress = p.totalProgress = function(value, suppressEvents) {
			return (!arguments.length) ? this._time / this.duration() : this.totalTime(this.duration() * value, suppressEvents);
		};

		p.startTime = function(value) {
			if (!arguments.length) {
				return this._startTime;
			}
			if (value !== this._startTime) {
				this._startTime = value;
				if (this.timeline) if (this.timeline._sortChildren) {
					this.timeline.add(this, value - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
				}
			}
			return this;
		};

		p.timeScale = function(value) {
			if (!arguments.length) {
				return this._timeScale;
			}
			value = value || _tinyNum; //can't allow zero because it'll throw the math off
			if (this._timeline && this._timeline.smoothChildTiming) {
				var pauseTime = this._pauseTime,
					t = (pauseTime || pauseTime === 0) ? pauseTime : this._timeline.totalTime();
				this._startTime = t - ((t - this._startTime) * this._timeScale / value);
			}
			this._timeScale = value;
			return this._uncache(false);
		};

		p.reversed = function(value) {
			if (!arguments.length) {
				return this._reversed;
			}
			if (value != this._reversed) {
				this._reversed = value;
				this.totalTime(((this._timeline && !this._timeline.smoothChildTiming) ? this.totalDuration() - this._totalTime : this._totalTime), true);
			}
			return this;
		};

		p.paused = function(value) {
			if (!arguments.length) {
				return this._paused;
			}
			if (value != this._paused) if (this._timeline) {
				if (!_tickerActive && !value) {
					_ticker.wake();
				}
				var tl = this._timeline,
					raw = tl.rawTime(),
					elapsed = raw - this._pauseTime;
				if (!value && tl.smoothChildTiming) {
					this._startTime += elapsed;
					this._uncache(false);
				}
				this._pauseTime = value ? raw : null;
				this._paused = value;
				this._active = this.isActive();
				if (!value && elapsed !== 0 && this._initted && this.duration()) {
					this.render((tl.smoothChildTiming ? this._totalTime : (raw - this._startTime) / this._timeScale), true, true); //in case the target's properties changed via some other tween or manual update by the user, we should force a render.
				}
			}
			if (this._gc && !value) {
				this._enabled(true, false);
			}
			return this;
		};


/*
 * ----------------------------------------------------------------
 * SimpleTimeline
 * ----------------------------------------------------------------
 */
		var SimpleTimeline = _class("core.SimpleTimeline", function(vars) {
			Animation.call(this, 0, vars);
			this.autoRemoveChildren = this.smoothChildTiming = true;
		});

		p = SimpleTimeline.prototype = new Animation();
		p.constructor = SimpleTimeline;
		p.kill()._gc = false;
		p._first = p._last = null;
		p._sortChildren = false;

		p.add = p.insert = function(child, position, align, stagger) {
			var prevTween, st;
			child._startTime = Number(position || 0) + child._delay;
			if (child._paused) if (this !== child._timeline) { //we only adjust the _pauseTime if it wasn't in this timeline already. Remember, sometimes a tween will be inserted again into the same timeline when its startTime is changed so that the tweens in the TimelineLite/Max are re-ordered properly in the linked list (so everything renders in the proper order).
				child._pauseTime = child._startTime + ((this.rawTime() - child._startTime) / child._timeScale);
			}
			if (child.timeline) {
				child.timeline._remove(child, true); //removes from existing timeline so that it can be properly added to this one.
			}
			child.timeline = child._timeline = this;
			if (child._gc) {
				child._enabled(true, true);
			}
			prevTween = this._last;
			if (this._sortChildren) {
				st = child._startTime;
				while (prevTween && prevTween._startTime > st) {
					prevTween = prevTween._prev;
				}
			}
			if (prevTween) {
				child._next = prevTween._next;
				prevTween._next = child;
			} else {
				child._next = this._first;
				this._first = child;
			}
			if (child._next) {
				child._next._prev = child;
			} else {
				this._last = child;
			}
			child._prev = prevTween;
			if (this._timeline) {
				this._uncache(true);
			}
			return this;
		};

		p._remove = function(tween, skipDisable) {
			if (tween.timeline === this) {
				if (!skipDisable) {
					tween._enabled(false, true);
				}
				tween.timeline = null;

				if (tween._prev) {
					tween._prev._next = tween._next;
				} else if (this._first === tween) {
					this._first = tween._next;
				}
				if (tween._next) {
					tween._next._prev = tween._prev;
				} else if (this._last === tween) {
					this._last = tween._prev;
				}

				if (this._timeline) {
					this._uncache(true);
				}
			}
			return this;
		};

		p.render = function(time, suppressEvents, force) {
			var tween = this._first,
				next;
			this._totalTime = this._time = this._rawPrevTime = time;
			while (tween) {
				next = tween._next; //record it here because the value could change after rendering...
				if (tween._active || (time >= tween._startTime && !tween._paused)) {
					if (!tween._reversed) {
						tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
					} else {
						tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
					}
				}
				tween = next;
			}
		};

		p.rawTime = function() {
			if (!_tickerActive) {
				_ticker.wake();
			}
			return this._totalTime;
		};


/*
 * ----------------------------------------------------------------
 * TweenLite
 * ----------------------------------------------------------------
 */
		var TweenLite = _class("TweenLite", function(target, duration, vars) {
				Animation.call(this, duration, vars);
				this.render = TweenLite.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)

				if (target == null) {
					throw "Cannot tween a null target.";
				}

				this.target = target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;

				var isSelector = (target.jquery || (target.length && target !== window && target[0] && (target[0] === window || (target[0].nodeType && target[0].style && !target.nodeType)))),
					overwrite = this.vars.overwrite,
					i, targ, targets;

				this._overwrite = overwrite = (overwrite == null) ? _overwriteLookup[TweenLite.defaultOverwrite] : (typeof(overwrite) === "number") ? overwrite >> 0 : _overwriteLookup[overwrite];

				if ((isSelector || target instanceof Array || (target.push && _isArray(target))) && typeof(target[0]) !== "number") {
					this._targets = targets = _slice.call(target, 0);
					this._propLookup = [];
					this._siblings = [];
					for (i = 0; i < targets.length; i++) {
						targ = targets[i];
						if (!targ) {
							targets.splice(i--, 1);
							continue;
						} else if (typeof(targ) === "string") {
							targ = targets[i--] = TweenLite.selector(targ); //in case it's an array of strings
							if (typeof(targ) === "string") {
								targets.splice(i+1, 1); //to avoid an endless loop (can't imagine why the selector would return a string, but just in case)
							}
							continue;
						} else if (targ.length && targ !== window && targ[0] && (targ[0] === window || (targ[0].nodeType && targ[0].style && !targ.nodeType))) { //in case the user is passing in an array of selector objects (like jQuery objects), we need to check one more level and pull things out if necessary. Also note that <select> elements pass all the criteria regarding length and the first child having style, so we must also check to ensure the target isn't an HTML node itself.
							targets.splice(i--, 1);
							this._targets = targets = targets.concat(_slice.call(targ, 0));
							continue;
						}
						this._siblings[i] = _register(targ, this, false);
						if (overwrite === 1) if (this._siblings[i].length > 1) {
							_applyOverwrite(targ, this, null, 1, this._siblings[i]);
						}
					}

				} else {
					this._propLookup = {};
					this._siblings = _register(target, this, false);
					if (overwrite === 1) if (this._siblings.length > 1) {
						_applyOverwrite(target, this, null, 1, this._siblings);
					}
				}
				if (this.vars.immediateRender || (duration === 0 && this._delay === 0 && this.vars.immediateRender !== false)) {
					this.render(-this._delay, false, true);
				}
			}, true),
			_isSelector = function(v) {
				return (v.length && v !== window && v[0] && (v[0] === window || (v[0].nodeType && v[0].style && !v.nodeType))); //we cannot check "nodeType" if the target is window from within an iframe, otherwise it will trigger a security error in some browsers like Firefox.
			},
			_autoCSS = function(vars, target) {
				var css = {},
					p;
				for (p in vars) {
					if (!_reservedProps[p] && (!(p in target) || p === "x" || p === "y" || p === "width" || p === "height" || p === "className" || p === "border") && (!_plugins[p] || (_plugins[p] && _plugins[p]._autoCSS))) { //note: <img> elements contain read-only "x" and "y" properties. We should also prioritize editing css width/height rather than the element's properties.
						css[p] = vars[p];
						delete vars[p];
					}
				}
				vars.css = css;
			};

		p = TweenLite.prototype = new Animation();
		p.constructor = TweenLite;
		p.kill()._gc = false;

//----TweenLite defaults, overwrite management, and root updates ----------------------------------------------------

		p.ratio = 0;
		p._firstPT = p._targets = p._overwrittenProps = p._startAt = null;
		p._notifyPluginsOfEnabled = false;

		TweenLite.version = "1.11.8";
		TweenLite.defaultEase = p._ease = new Ease(null, null, 1, 1);
		TweenLite.defaultOverwrite = "auto";
		TweenLite.ticker = _ticker;
		TweenLite.autoSleep = true;
		TweenLite.selector = window.$ || window.jQuery || function(e) { if (window.$) { TweenLite.selector = window.$; return window.$(e); } return window.document ? window.document.getElementById((e.charAt(0) === "#") ? e.substr(1) : e) : e; };

		var _internals = TweenLite._internals = {isArray:_isArray, isSelector:_isSelector}, //gives us a way to expose certain private values to other GreenSock classes without contaminating tha main TweenLite object.
			_plugins = TweenLite._plugins = {},
			_tweenLookup = TweenLite._tweenLookup = {},
			_tweenLookupNum = 0,
			_reservedProps = _internals.reservedProps = {ease:1, delay:1, overwrite:1, onComplete:1, onCompleteParams:1, onCompleteScope:1, useFrames:1, runBackwards:1, startAt:1, onUpdate:1, onUpdateParams:1, onUpdateScope:1, onStart:1, onStartParams:1, onStartScope:1, onReverseComplete:1, onReverseCompleteParams:1, onReverseCompleteScope:1, onRepeat:1, onRepeatParams:1, onRepeatScope:1, easeParams:1, yoyo:1, immediateRender:1, repeat:1, repeatDelay:1, data:1, paused:1, reversed:1, autoCSS:1},
			_overwriteLookup = {none:0, all:1, auto:2, concurrent:3, allOnStart:4, preexisting:5, "true":1, "false":0},
			_rootFramesTimeline = Animation._rootFramesTimeline = new SimpleTimeline(),
			_rootTimeline = Animation._rootTimeline = new SimpleTimeline();

		_rootTimeline._startTime = _ticker.time;
		_rootFramesTimeline._startTime = _ticker.frame;
		_rootTimeline._active = _rootFramesTimeline._active = true;

		Animation._updateRoot = function() {
				_rootTimeline.render((_ticker.time - _rootTimeline._startTime) * _rootTimeline._timeScale, false, false);
				_rootFramesTimeline.render((_ticker.frame - _rootFramesTimeline._startTime) * _rootFramesTimeline._timeScale, false, false);
				if (!(_ticker.frame % 120)) { //dump garbage every 120 frames...
					var i, a, p;
					for (p in _tweenLookup) {
						a = _tweenLookup[p].tweens;
						i = a.length;
						while (--i > -1) {
							if (a[i]._gc) {
								a.splice(i, 1);
							}
						}
						if (a.length === 0) {
							delete _tweenLookup[p];
						}
					}
					//if there are no more tweens in the root timelines, or if they're all paused, make the _timer sleep to reduce load on the CPU slightly
					p = _rootTimeline._first;
					if (!p || p._paused) if (TweenLite.autoSleep && !_rootFramesTimeline._first && _ticker._listeners.tick.length === 1) {
						while (p && p._paused) {
							p = p._next;
						}
						if (!p) {
							_ticker.sleep();
						}
					}
				}
			};

		_ticker.addEventListener("tick", Animation._updateRoot);

		var _register = function(target, tween, scrub) {
				var id = target._gsTweenID, a, i;
				if (!_tweenLookup[id || (target._gsTweenID = id = "t" + (_tweenLookupNum++))]) {
					_tweenLookup[id] = {target:target, tweens:[]};
				}
				if (tween) {
					a = _tweenLookup[id].tweens;
					a[(i = a.length)] = tween;
					if (scrub) {
						while (--i > -1) {
							if (a[i] === tween) {
								a.splice(i, 1);
							}
						}
					}
				}
				return _tweenLookup[id].tweens;
			},

			_applyOverwrite = function(target, tween, props, mode, siblings) {
				var i, changed, curTween, l;
				if (mode === 1 || mode >= 4) {
					l = siblings.length;
					for (i = 0; i < l; i++) {
						if ((curTween = siblings[i]) !== tween) {
							if (!curTween._gc) if (curTween._enabled(false, false)) {
								changed = true;
							}
						} else if (mode === 5) {
							break;
						}
					}
					return changed;
				}
				//NOTE: Add 0.0000000001 to overcome floating point errors that can cause the startTime to be VERY slightly off (when a tween's time() is set for example)
				var startTime = tween._startTime + _tinyNum,
					overlaps = [],
					oCount = 0,
					zeroDur = (tween._duration === 0),
					globalStart;
				i = siblings.length;
				while (--i > -1) {
					if ((curTween = siblings[i]) === tween || curTween._gc || curTween._paused) {
						//ignore
					} else if (curTween._timeline !== tween._timeline) {
						globalStart = globalStart || _checkOverlap(tween, 0, zeroDur);
						if (_checkOverlap(curTween, globalStart, zeroDur) === 0) {
							overlaps[oCount++] = curTween;
						}
					} else if (curTween._startTime <= startTime) if (curTween._startTime + curTween.totalDuration() / curTween._timeScale > startTime) if (!((zeroDur || !curTween._initted) && startTime - curTween._startTime <= 0.0000000002)) {
						overlaps[oCount++] = curTween;
					}
				}

				i = oCount;
				while (--i > -1) {
					curTween = overlaps[i];
					if (mode === 2) if (curTween._kill(props, target)) {
						changed = true;
					}
					if (mode !== 2 || (!curTween._firstPT && curTween._initted)) {
						if (curTween._enabled(false, false)) { //if all property tweens have been overwritten, kill the tween.
							changed = true;
						}
					}
				}
				return changed;
			},

			_checkOverlap = function(tween, reference, zeroDur) {
				var tl = tween._timeline,
					ts = tl._timeScale,
					t = tween._startTime;
				while (tl._timeline) {
					t += tl._startTime;
					ts *= tl._timeScale;
					if (tl._paused) {
						return -100;
					}
					tl = tl._timeline;
				}
				t /= ts;
				return (t > reference) ? t - reference : ((zeroDur && t === reference) || (!tween._initted && t - reference < 2 * _tinyNum)) ? _tinyNum : ((t += tween.totalDuration() / tween._timeScale / ts) > reference + _tinyNum) ? 0 : t - reference - _tinyNum;
			};


//---- TweenLite instance methods -----------------------------------------------------------------------------

		p._init = function() {
			var v = this.vars,
				op = this._overwrittenProps,
				dur = this._duration,
				immediate = v.immediateRender,
				ease = v.ease,
				i, initPlugins, pt, p;
			if (v.startAt) {
				if (this._startAt) {
					this._startAt.render(-1, true); //if we've run a startAt previously (when the tween instantiated), we should revert it so that the values re-instantiate correctly particularly for relative tweens. Without this, a TweenLite.fromTo(obj, 1, {x:"+=100"}, {x:"-=100"}), for example, would actually jump to +=200 because the startAt would run twice, doubling the relative change.
				}
				v.startAt.overwrite = 0;
				v.startAt.immediateRender = true;
				this._startAt = TweenLite.to(this.target, 0, v.startAt);
				if (immediate) {
					if (this._time > 0) {
						this._startAt = null; //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in TimelineLite/Max instances where immediateRender was false (which is the default in the convenience methods like from()).
					} else if (dur !== 0) {
						return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a TimelineLite or TimelineMax, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
					}
				}
			} else if (v.runBackwards && dur !== 0) {
				//from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
				if (this._startAt) {
					this._startAt.render(-1, true);
					this._startAt = null;
				} else {
					pt = {};
					for (p in v) { //copy props into a new object and skip any reserved props, otherwise onComplete or onUpdate or onStart could fire. We should, however, permit autoCSS to go through.
						if (!_reservedProps[p] || p === "autoCSS") {
							pt[p] = v[p];
						}
					}
					pt.overwrite = 0;
					pt.data = "isFromStart"; //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
					this._startAt = TweenLite.to(this.target, 0, pt);
					if (!v.immediateRender) {
						this._startAt.render(-1, true); //for tweens that aren't rendered immediately, we still need to use the _startAt to record the starting values so that we can revert to them if the parent timeline's playhead goes backward beyond the beginning, but we immediately revert the tween back otherwise the parent tween that's currently instantiating wouldn't see the wrong starting values (since they were changed by the _startAt tween)
					} else if (this._time === 0) {
						return;
					}
				}
			}
			if (!ease) {
				this._ease = TweenLite.defaultEase;
			} else if (ease instanceof Ease) {
				this._ease = (v.easeParams instanceof Array) ? ease.config.apply(ease, v.easeParams) : ease;
			} else {
				this._ease = (typeof(ease) === "function") ? new Ease(ease, v.easeParams) : _easeMap[ease] || TweenLite.defaultEase;
			}
			this._easeType = this._ease._type;
			this._easePower = this._ease._power;
			this._firstPT = null;

			if (this._targets) {
				i = this._targets.length;
				while (--i > -1) {
					if ( this._initProps( this._targets[i], (this._propLookup[i] = {}), this._siblings[i], (op ? op[i] : null)) ) {
						initPlugins = true;
					}
				}
			} else {
				initPlugins = this._initProps(this.target, this._propLookup, this._siblings, op);
			}

			if (initPlugins) {
				TweenLite._onPluginEvent("_onInitAllProps", this); //reorders the array in order of priority. Uses a static TweenPlugin method in order to minimize file size in TweenLite
			}
			if (op) if (!this._firstPT) if (typeof(this.target) !== "function") { //if all tweening properties have been overwritten, kill the tween. If the target is a function, it's probably a delayedCall so let it live.
				this._enabled(false, false);
			}
			if (v.runBackwards) {
				pt = this._firstPT;
				while (pt) {
					pt.s += pt.c;
					pt.c = -pt.c;
					pt = pt._next;
				}
			}
			this._onUpdate = v.onUpdate;
			this._initted = true;
		};

		p._initProps = function(target, propLookup, siblings, overwrittenProps) {
			var p, i, initPlugins, plugin, pt, v;
			if (target == null) {
				return false;
			}
			if (!this.vars.css) if (target.style) if (target !== window && target.nodeType) if (_plugins.css) if (this.vars.autoCSS !== false) { //it's so common to use TweenLite/Max to animate the css of DOM elements, we assume that if the target is a DOM element, that's what is intended (a convenience so that users don't have to wrap things in css:{}, although we still recommend it for a slight performance boost and better specificity). Note: we cannot check "nodeType" on the window inside an iframe.
				_autoCSS(this.vars, target);
			}
			for (p in this.vars) {
				v = this.vars[p];
				if (_reservedProps[p]) {
					if (v) if ((v instanceof Array) || (v.push && _isArray(v))) if (v.join("").indexOf("{self}") !== -1) {
						this.vars[p] = v = this._swapSelfInParams(v, this);
					}

				} else if (_plugins[p] && (plugin = new _plugins[p]())._onInitTween(target, this.vars[p], this)) {

					//t - target 		[object]
					//p - property 		[string]
					//s - start			[number]
					//c - change		[number]
					//f - isFunction	[boolean]
					//n - name			[string]
					//pg - isPlugin 	[boolean]
					//pr - priority		[number]
					this._firstPT = pt = {_next:this._firstPT, t:plugin, p:"setRatio", s:0, c:1, f:true, n:p, pg:true, pr:plugin._priority};
					i = plugin._overwriteProps.length;
					while (--i > -1) {
						propLookup[plugin._overwriteProps[i]] = this._firstPT;
					}
					if (plugin._priority || plugin._onInitAllProps) {
						initPlugins = true;
					}
					if (plugin._onDisable || plugin._onEnable) {
						this._notifyPluginsOfEnabled = true;
					}

				} else {
					this._firstPT = propLookup[p] = pt = {_next:this._firstPT, t:target, p:p, f:(typeof(target[p]) === "function"), n:p, pg:false, pr:0};
					pt.s = (!pt.f) ? parseFloat(target[p]) : target[ ((p.indexOf("set") || typeof(target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3)) ]();
					pt.c = (typeof(v) === "string" && v.charAt(1) === "=") ? parseInt(v.charAt(0) + "1", 10) * Number(v.substr(2)) : (Number(v) - pt.s) || 0;
				}
				if (pt) if (pt._next) {
					pt._next._prev = pt;
				}
			}

			if (overwrittenProps) if (this._kill(overwrittenProps, target)) { //another tween may have tried to overwrite properties of this tween before init() was called (like if two tweens start at the same time, the one created second will run first)
				return this._initProps(target, propLookup, siblings, overwrittenProps);
			}
			if (this._overwrite > 1) if (this._firstPT) if (siblings.length > 1) if (_applyOverwrite(target, this, propLookup, this._overwrite, siblings)) {
				this._kill(propLookup, target);
				return this._initProps(target, propLookup, siblings, overwrittenProps);
			}
			return initPlugins;
		};

		p.render = function(time, suppressEvents, force) {
			var prevTime = this._time,
				duration = this._duration,
				isComplete, callback, pt, rawPrevTime;
			if (time >= duration) {
				this._totalTime = this._time = duration;
				this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
				if (!this._reversed) {
					isComplete = true;
					callback = "onComplete";
				}
				if (duration === 0) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
					rawPrevTime = this._rawPrevTime;
					if (this._startTime === this._timeline._duration) { //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
						time = 0;
					}
					if (time === 0 || rawPrevTime < 0 || rawPrevTime === _tinyNum) if (rawPrevTime !== time) {
						force = true;
						if (rawPrevTime > _tinyNum) {
							callback = "onReverseComplete";
						}
					}
					this._rawPrevTime = rawPrevTime = (!suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				}

			} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
				this._totalTime = this._time = 0;
				this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
				if (prevTime !== 0 || (duration === 0 && this._rawPrevTime > 0 && this._rawPrevTime !== _tinyNum)) {
					callback = "onReverseComplete";
					isComplete = this._reversed;
				}
				if (time < 0) {
					this._active = false;
					if (duration === 0) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
						if (this._rawPrevTime >= 0) {
							force = true;
						}
						this._rawPrevTime = rawPrevTime = (!suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					}
				} else if (!this._initted) { //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
					force = true;
				}
			} else {
				this._totalTime = this._time = time;

				if (this._easeType) {
					var r = time / duration, type = this._easeType, pow = this._easePower;
					if (type === 1 || (type === 3 && r >= 0.5)) {
						r = 1 - r;
					}
					if (type === 3) {
						r *= 2;
					}
					if (pow === 1) {
						r *= r;
					} else if (pow === 2) {
						r *= r * r;
					} else if (pow === 3) {
						r *= r * r * r;
					} else if (pow === 4) {
						r *= r * r * r * r;
					}

					if (type === 1) {
						this.ratio = 1 - r;
					} else if (type === 2) {
						this.ratio = r;
					} else if (time / duration < 0.5) {
						this.ratio = r / 2;
					} else {
						this.ratio = 1 - (r / 2);
					}

				} else {
					this.ratio = this._ease.getRatio(time / duration);
				}

			}

			if (this._time === prevTime && !force) {
				return;
			} else if (!this._initted) {
				this._init();
				if (!this._initted || this._gc) { //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
					return;
				}
				//_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
				if (this._time && !isComplete) {
					this.ratio = this._ease.getRatio(this._time / duration);
				} else if (isComplete && this._ease._calcEnd) {
					this.ratio = this._ease.getRatio((this._time === 0) ? 0 : 1);
				}
			}

			if (!this._active) if (!this._paused && this._time !== prevTime && time >= 0) {
				this._active = true;  //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
			}
			if (prevTime === 0) {
				if (this._startAt) {
					if (time >= 0) {
						this._startAt.render(time, suppressEvents, force);
					} else if (!callback) {
						callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
					}
				}
				if (this.vars.onStart) if (this._time !== 0 || duration === 0) if (!suppressEvents) {
					this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _blankArray);
				}
			}

			pt = this._firstPT;
			while (pt) {
				if (pt.f) {
					pt.t[pt.p](pt.c * this.ratio + pt.s);
				} else {
					pt.t[pt.p] = pt.c * this.ratio + pt.s;
				}
				pt = pt._next;
			}

			if (this._onUpdate) {
				if (time < 0) if (this._startAt && this._startTime) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
					this._startAt.render(time, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
				}
				if (!suppressEvents) if (this._time !== prevTime || isComplete) {
					this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _blankArray);
				}
			}

			if (callback) if (!this._gc) { //check _gc because there's a chance that kill() could be called in an onUpdate
				if (time < 0 && this._startAt && !this._onUpdate && this._startTime) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
					this._startAt.render(time, suppressEvents, force);
				}
				if (isComplete) {
					if (this._timeline.autoRemoveChildren) {
						this._enabled(false, false);
					}
					this._active = false;
				}
				if (!suppressEvents && this.vars[callback]) {
					this.vars[callback].apply(this.vars[callback + "Scope"] || this, this.vars[callback + "Params"] || _blankArray);
				}
				if (duration === 0 && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) { //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
					this._rawPrevTime = 0;
				}
			}

		};

		p._kill = function(vars, target) {
			if (vars === "all") {
				vars = null;
			}
			if (vars == null) if (target == null || target === this.target) {
				return this._enabled(false, false);
			}
			target = (typeof(target) !== "string") ? (target || this._targets || this.target) : TweenLite.selector(target) || target;
			var i, overwrittenProps, p, pt, propLookup, changed, killProps, record;
			if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
				i = target.length;
				while (--i > -1) {
					if (this._kill(vars, target[i])) {
						changed = true;
					}
				}
			} else {
				if (this._targets) {
					i = this._targets.length;
					while (--i > -1) {
						if (target === this._targets[i]) {
							propLookup = this._propLookup[i] || {};
							this._overwrittenProps = this._overwrittenProps || [];
							overwrittenProps = this._overwrittenProps[i] = vars ? this._overwrittenProps[i] || {} : "all";
							break;
						}
					}
				} else if (target !== this.target) {
					return false;
				} else {
					propLookup = this._propLookup;
					overwrittenProps = this._overwrittenProps = vars ? this._overwrittenProps || {} : "all";
				}

				if (propLookup) {
					killProps = vars || propLookup;
					record = (vars !== overwrittenProps && overwrittenProps !== "all" && vars !== propLookup && (typeof(vars) !== "object" || !vars._tempKill)); //_tempKill is a super-secret way to delete a particular tweening property but NOT have it remembered as an official overwritten property (like in BezierPlugin)
					for (p in killProps) {
						if ((pt = propLookup[p])) {
							if (pt.pg && pt.t._kill(killProps)) {
								changed = true; //some plugins need to be notified so they can perform cleanup tasks first
							}
							if (!pt.pg || pt.t._overwriteProps.length === 0) {
								if (pt._prev) {
									pt._prev._next = pt._next;
								} else if (pt === this._firstPT) {
									this._firstPT = pt._next;
								}
								if (pt._next) {
									pt._next._prev = pt._prev;
								}
								pt._next = pt._prev = null;
							}
							delete propLookup[p];
						}
						if (record) {
							overwrittenProps[p] = 1;
						}
					}
					if (!this._firstPT && this._initted) { //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
						this._enabled(false, false);
					}
				}
			}
			return changed;
		};

		p.invalidate = function() {
			if (this._notifyPluginsOfEnabled) {
				TweenLite._onPluginEvent("_onDisable", this);
			}
			this._firstPT = null;
			this._overwrittenProps = null;
			this._onUpdate = null;
			this._startAt = null;
			this._initted = this._active = this._notifyPluginsOfEnabled = false;
			this._propLookup = (this._targets) ? {} : [];
			return this;
		};

		p._enabled = function(enabled, ignoreTimeline) {
			if (!_tickerActive) {
				_ticker.wake();
			}
			if (enabled && this._gc) {
				var targets = this._targets,
					i;
				if (targets) {
					i = targets.length;
					while (--i > -1) {
						this._siblings[i] = _register(targets[i], this, true);
					}
				} else {
					this._siblings = _register(this.target, this, true);
				}
			}
			Animation.prototype._enabled.call(this, enabled, ignoreTimeline);
			if (this._notifyPluginsOfEnabled) if (this._firstPT) {
				return TweenLite._onPluginEvent((enabled ? "_onEnable" : "_onDisable"), this);
			}
			return false;
		};


//----TweenLite static methods -----------------------------------------------------

		TweenLite.to = function(target, duration, vars) {
			return new TweenLite(target, duration, vars);
		};

		TweenLite.from = function(target, duration, vars) {
			vars.runBackwards = true;
			vars.immediateRender = (vars.immediateRender != false);
			return new TweenLite(target, duration, vars);
		};

		TweenLite.fromTo = function(target, duration, fromVars, toVars) {
			toVars.startAt = fromVars;
			toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
			return new TweenLite(target, duration, toVars);
		};

		TweenLite.delayedCall = function(delay, callback, params, scope, useFrames) {
			return new TweenLite(callback, 0, {delay:delay, onComplete:callback, onCompleteParams:params, onCompleteScope:scope, onReverseComplete:callback, onReverseCompleteParams:params, onReverseCompleteScope:scope, immediateRender:false, useFrames:useFrames, overwrite:0});
		};

		TweenLite.set = function(target, vars) {
			return new TweenLite(target, 0, vars);
		};

		TweenLite.getTweensOf = function(target, onlyActive) {
			if (target == null) { return []; }
			target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;
			var i, a, j, t;
			if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
				i = target.length;
				a = [];
				while (--i > -1) {
					a = a.concat(TweenLite.getTweensOf(target[i], onlyActive));
				}
				i = a.length;
				//now get rid of any duplicates (tweens of arrays of objects could cause duplicates)
				while (--i > -1) {
					t = a[i];
					j = i;
					while (--j > -1) {
						if (t === a[j]) {
							a.splice(i, 1);
						}
					}
				}
			} else {
				a = _register(target).concat();
				i = a.length;
				while (--i > -1) {
					if (a[i]._gc || (onlyActive && !a[i].isActive())) {
						a.splice(i, 1);
					}
				}
			}
			return a;
		};

		TweenLite.killTweensOf = TweenLite.killDelayedCallsTo = function(target, onlyActive, vars) {
			if (typeof(onlyActive) === "object") {
				vars = onlyActive; //for backwards compatibility (before "onlyActive" parameter was inserted)
				onlyActive = false;
			}
			var a = TweenLite.getTweensOf(target, onlyActive),
				i = a.length;
			while (--i > -1) {
				a[i]._kill(vars, target);
			}
		};



/*
 * ----------------------------------------------------------------
 * TweenPlugin   (could easily be split out as a separate file/class, but included for ease of use (so that people don't need to include another <script> call before loading plugins which is easy to forget)
 * ----------------------------------------------------------------
 */
		var TweenPlugin = _class("plugins.TweenPlugin", function(props, priority) {
					this._overwriteProps = (props || "").split(",");
					this._propName = this._overwriteProps[0];
					this._priority = priority || 0;
					this._super = TweenPlugin.prototype;
				}, true);

		p = TweenPlugin.prototype;
		TweenPlugin.version = "1.10.1";
		TweenPlugin.API = 2;
		p._firstPT = null;

		p._addTween = function(target, prop, start, end, overwriteProp, round) {
			var c, pt;
			if (end != null && (c = (typeof(end) === "number" || end.charAt(1) !== "=") ? Number(end) - start : parseInt(end.charAt(0) + "1", 10) * Number(end.substr(2)))) {
				this._firstPT = pt = {_next:this._firstPT, t:target, p:prop, s:start, c:c, f:(typeof(target[prop]) === "function"), n:overwriteProp || prop, r:round};
				if (pt._next) {
					pt._next._prev = pt;
				}
				return pt;
			}
		};

		p.setRatio = function(v) {
			var pt = this._firstPT,
				min = 0.000001,
				val;
			while (pt) {
				val = pt.c * v + pt.s;
				if (pt.r) {
					val = Math.round(val);
				} else if (val < min) if (val > -min) { //prevents issues with converting very small numbers to strings in the browser
					val = 0;
				}
				if (pt.f) {
					pt.t[pt.p](val);
				} else {
					pt.t[pt.p] = val;
				}
				pt = pt._next;
			}
		};

		p._kill = function(lookup) {
			var a = this._overwriteProps,
				pt = this._firstPT,
				i;
			if (lookup[this._propName] != null) {
				this._overwriteProps = [];
			} else {
				i = a.length;
				while (--i > -1) {
					if (lookup[a[i]] != null) {
						a.splice(i, 1);
					}
				}
			}
			while (pt) {
				if (lookup[pt.n] != null) {
					if (pt._next) {
						pt._next._prev = pt._prev;
					}
					if (pt._prev) {
						pt._prev._next = pt._next;
						pt._prev = null;
					} else if (this._firstPT === pt) {
						this._firstPT = pt._next;
					}
				}
				pt = pt._next;
			}
			return false;
		};

		p._roundProps = function(lookup, value) {
			var pt = this._firstPT;
			while (pt) {
				if (lookup[this._propName] || (pt.n != null && lookup[ pt.n.split(this._propName + "_").join("") ])) { //some properties that are very plugin-specific add a prefix named after the _propName plus an underscore, so we need to ignore that extra stuff here.
					pt.r = value;
				}
				pt = pt._next;
			}
		};

		TweenLite._onPluginEvent = function(type, tween) {
			var pt = tween._firstPT,
				changed, pt2, first, last, next;
			if (type === "_onInitAllProps") {
				//sorts the PropTween linked list in order of priority because some plugins need to render earlier/later than others, like MotionBlurPlugin applies its effects after all x/y/alpha tweens have rendered on each frame.
				while (pt) {
					next = pt._next;
					pt2 = first;
					while (pt2 && pt2.pr > pt.pr) {
						pt2 = pt2._next;
					}
					if ((pt._prev = pt2 ? pt2._prev : last)) {
						pt._prev._next = pt;
					} else {
						first = pt;
					}
					if ((pt._next = pt2)) {
						pt2._prev = pt;
					} else {
						last = pt;
					}
					pt = next;
				}
				pt = tween._firstPT = first;
			}
			while (pt) {
				if (pt.pg) if (typeof(pt.t[type]) === "function") if (pt.t[type]()) {
					changed = true;
				}
				pt = pt._next;
			}
			return changed;
		};

		TweenPlugin.activate = function(plugins) {
			var i = plugins.length;
			while (--i > -1) {
				if (plugins[i].API === TweenPlugin.API) {
					_plugins[(new plugins[i]())._propName] = plugins[i];
				}
			}
			return true;
		};

		//provides a more concise way to define plugins that have no dependencies besides TweenPlugin and TweenLite, wrapping common boilerplate stuff into one function (added in 1.9.0). You don't NEED to use this to define a plugin - the old way still works and can be useful in certain (rare) situations.
		_gsDefine.plugin = function(config) {
			if (!config || !config.propName || !config.init || !config.API) { throw "illegal plugin definition."; }
			var propName = config.propName,
				priority = config.priority || 0,
				overwriteProps = config.overwriteProps,
				map = {init:"_onInitTween", set:"setRatio", kill:"_kill", round:"_roundProps", initAll:"_onInitAllProps"},
				Plugin = _class("plugins." + propName.charAt(0).toUpperCase() + propName.substr(1) + "Plugin",
					function() {
						TweenPlugin.call(this, propName, priority);
						this._overwriteProps = overwriteProps || [];
					}, (config.global === true)),
				p = Plugin.prototype = new TweenPlugin(propName),
				prop;
			p.constructor = Plugin;
			Plugin.API = config.API;
			for (prop in map) {
				if (typeof(config[prop]) === "function") {
					p[map[prop]] = config[prop];
				}
			}
			Plugin.version = config.version;
			TweenPlugin.activate([Plugin]);
			return Plugin;
		};


		//now run through all the dependencies discovered and if any are missing, log that to the console as a warning. This is why it's best to have TweenLite load last - it can check all the dependencies for you.
		a = window._gsQueue;
		if (a) {
			for (i = 0; i < a.length; i++) {
				a[i]();
			}
			for (p in _defLookup) {
				if (!_defLookup[p].func) {
					window.console.log("GSAP encountered missing dependency: com.greensock." + p);
				}
			}
		}

		_tickerActive = false; //ensures that the first official animation forces a ticker.tick() to update the time when it is instantiated

})(window);