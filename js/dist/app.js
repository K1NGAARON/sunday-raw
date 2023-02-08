/*! For license information please see app.js.LICENSE.txt */
(()=>{"use strict";function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}var t="(prefers-reduced-motion: reduce)",e={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,SCROLLING:5,DRAGGING:6,DESTROYED:7};function i(n){n.length=0}function o(n,t,e){return Array.prototype.slice.call(n,t,e)}function r(n){return n.bind.apply(n,[null].concat(o(arguments,1)))}var u=setTimeout,c=function(){};function a(n){return requestAnimationFrame(n)}function s(n,t){return typeof t===n}function l(n){return!p(n)&&s("object",n)}var f=Array.isArray,d=r(s,"function"),g=r(s,"string"),v=r(s,"undefined");function p(n){return null===n}function h(n){try{return n instanceof(n.ownerDocument.defaultView||window).HTMLElement}catch(n){return!1}}function m(n){return f(n)?n:[n]}function y(n,t){m(n).forEach(t)}function b(n,t){return n.indexOf(t)>-1}function w(n,t){return n.push.apply(n,m(t)),n}function E(n,t,e){n&&y(t,(function(t){t&&n.classList[e?"add":"remove"](t)}))}function S(n,t){E(n,g(t)?t.split(" "):t,!0)}function C(n,t){y(t,n.appendChild.bind(n))}function L(n,t){y(n,(function(n){var e=(t||n).parentNode;e&&e.insertBefore(n,t)}))}function x(n,t){return h(n)&&(n.msMatchesSelector||n.matches).call(n,t)}function k(n,t){var e=n?o(n.children):[];return t?e.filter((function(n){return x(n,t)})):e}function P(n,t){return t?k(n,t)[0]:n.firstElementChild}var _=Object.keys;function A(n,t,e){return n&&(e?_(n).reverse():_(n)).forEach((function(e){"__proto__"!==e&&t(n[e],e)})),n}function D(n){return o(arguments,1).forEach((function(t){A(t,(function(e,i){n[i]=t[i]}))})),n}function M(n){return o(arguments,1).forEach((function(t){A(t,(function(t,e){f(t)?n[e]=t.slice():l(t)?n[e]=M({},l(n[e])?n[e]:{},t):n[e]=t}))})),n}function O(n,t){y(t||_(n),(function(t){delete n[t]}))}function z(n,t){y(n,(function(n){y(t,(function(t){n&&n.removeAttribute(t)}))}))}function T(n,t,e){l(t)?A(t,(function(t,e){T(n,e,t)})):y(n,(function(n){p(e)||""===e?z(n,t):n.setAttribute(t,String(e))}))}function I(n,t,e){var i=document.createElement(n);return t&&(g(t)?S(i,t):T(i,t)),e&&C(e,i),i}function N(n,t,e){if(v(e))return getComputedStyle(n)[t];p(e)||(n.style[t]=""+e)}function F(n,t){N(n,"display",t)}function j(n){n.setActive&&n.setActive()||n.focus({preventScroll:!0})}function R(n,t){return n.getAttribute(t)}function G(n,t){return n&&n.classList.contains(t)}function H(n){return n.getBoundingClientRect()}function W(n){y(n,(function(n){n&&n.parentNode&&n.parentNode.removeChild(n)}))}function X(n){return P((new DOMParser).parseFromString(n,"text/html").body)}function B(n,t){n.preventDefault(),t&&(n.stopPropagation(),n.stopImmediatePropagation())}function q(n,t){return n&&n.querySelector(t)}function U(n,t){return t?o(n.querySelectorAll(t)):[]}function Y(n,t){E(n,t,!1)}function J(n){return n.timeStamp}function K(n){return g(n)?n:n?n+"px":""}var V="splide",Q="data-"+V;function Z(n,t){if(!n)throw new Error("["+V+"] "+(t||""))}var nn=Math.min,tn=Math.max,en=Math.floor,on=Math.ceil,rn=Math.abs;function un(n,t,e){return rn(n-t)<e}function cn(n,t,e,i){var o=nn(t,e),r=tn(t,e);return i?o<n&&n<r:o<=n&&n<=r}function an(n,t,e){var i=nn(t,e),o=tn(t,e);return nn(tn(i,n),o)}function sn(n){return+(n>0)-+(n<0)}function ln(n,t){return y(t,(function(t){n=n.replace("%s",""+t)})),n}function fn(n){return n<10?"0"+n:""+n}var dn={};function gn(n){return""+n+fn(dn[n]=(dn[n]||0)+1)}function vn(){var n=[];function t(n,t,e){y(n,(function(n){n&&y(t,(function(t){t.split(" ").forEach((function(t){var i=t.split(".");e(n,i[0],i[1])}))}))}))}return{bind:function(e,i,o,r){t(e,i,(function(t,e,i){var u="addEventListener"in t,c=u?t.removeEventListener.bind(t,e,o,r):t.removeListener.bind(t,o);u?t.addEventListener(e,o,r):t.addListener(o),n.push([t,e,i,o,c])}))},unbind:function(e,i,o){t(e,i,(function(t,e,i){n=n.filter((function(n){return!!(n[0]!==t||n[1]!==e||n[2]!==i||o&&n[3]!==o)||(n[4](),!1)}))}))},dispatch:function(n,t,e){var i;return"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:true,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,true,!1,e),n.dispatchEvent(i),i},destroy:function(){n.forEach((function(n){n[4]()})),i(n)}}}var pn="mounted",hn="ready",mn="move",yn="moved",bn="click",wn="active",En="inactive",Sn="visible",Cn="hidden",Ln="refresh",xn="updated",kn="resize",Pn="resized",_n="scroll",An="scrolled",Dn="destroy",Mn="arrows:mounted",On="navigation:mounted",zn="autoplay:play",$n="autoplay:pause",Tn="lazyload:loaded",In="sk",Nn="sh",Fn="ei";function jn(n){var t=n?n.event.bus:document.createDocumentFragment(),e=vn();return n&&n.event.on(Dn,e.destroy),D(e,{bus:t,on:function(n,i){e.bind(t,m(n).join(" "),(function(n){i.apply(i,f(n.detail)?n.detail:[])}))},off:r(e.unbind,t),emit:function(n){e.dispatch(t,n,o(arguments,1))}})}function Rn(n,t,e,i){var o,r,u=Date.now,c=0,s=!0,l=0;function f(){if(!s){if(c=n?nn((u()-o)/n,1):1,e&&e(c),c>=1&&(t(),o=u(),i&&++l>=i))return d();r=a(f)}}function d(){s=!0}function g(){r&&cancelAnimationFrame(r),c=0,r=0,s=!0}return{start:function(t){t||g(),o=u()-(t?c*n:0),s=!1,r=a(f)},rewind:function(){o=u(),c=0,e&&e(c)},pause:d,cancel:g,set:function(t){n=t},isPaused:function(){return s}}}var Gn="Arrow",Hn=Gn+"Left",Wn=Gn+"Right",Xn=Gn+"Up",Bn=Gn+"Down",qn="ttb",Un={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Xn,Wn],ArrowRight:[Bn,Hn]};function Yn(n,t,e){return{resolve:function(n,t,i){var o="rtl"!==(i=i||e.direction)||t?i===qn?0:-1:1;return Un[n]&&Un[n][o]||n.replace(/width|left|right/i,(function(n,t){var e=Un[n.toLowerCase()][o]||n;return t>0?e.charAt(0).toUpperCase()+e.slice(1):e}))},orient:function(n){return n*("rtl"===e.direction?1:-1)}}}var Jn="role",Kn="tabindex",Vn="aria-",Qn=Vn+"controls",Zn=Vn+"current",nt=Vn+"selected",tt=Vn+"label",et=Vn+"labelledby",it=Vn+"hidden",ot=Vn+"orientation",rt=Vn+"roledescription",ut=Vn+"live",ct=Vn+"busy",at=Vn+"atomic",st=[Jn,Kn,"disabled",Qn,Zn,tt,et,it,ot,rt],lt=V+"__",ft="is-",dt=V,gt=lt+"track",vt=lt+"list",pt=lt+"slide",ht=pt+"--clone",mt=pt+"__container",yt=lt+"arrows",bt=lt+"arrow",wt=bt+"--prev",Et=bt+"--next",St=lt+"pagination",Ct=St+"__page",Lt=lt+"progress"+"__bar",xt=lt+"toggle",kt=lt+"sr",Pt=ft+"initialized",_t=ft+"active",At=ft+"prev",Dt=ft+"next",Mt=ft+"visible",Ot=ft+"loading",zt=ft+"focus-in",$t=ft+"overflow",Tt=[_t,Mt,At,Dt,Ot,zt,$t],It={slide:pt,clone:ht,arrows:yt,arrow:bt,prev:wt,next:Et,pagination:St,page:Ct,spinner:lt+"spinner"};var Nt="touchstart mousedown",Ft="touchmove mousemove",jt="touchend touchcancel mouseup click";var Rt="slide",Gt="loop",Ht="fade";function Wt(n,t,e,i){var o,u=jn(n),c=u.on,a=u.emit,s=u.bind,l=n.Components,f=n.root,d=n.options,g=d.isNavigation,v=d.updateOnMove,p=d.i18n,h=d.pagination,m=d.slideFocus,y=l.Direction.resolve,b=R(i,"style"),w=R(i,tt),S=e>-1,C=P(i,"."+mt);function L(){var o=n.splides.map((function(n){var e=n.splide.Components.Slides.getAt(t);return e?e.slide.id:""})).join(" ");T(i,tt,ln(p.slideX,(S?e:t)+1)),T(i,Qn,o),T(i,Jn,m?"button":""),m&&z(i,rt)}function x(){o||k()}function k(){if(!o){var e=n.index;(r=_())!==G(i,_t)&&(E(i,_t,r),T(i,Zn,g&&r||""),a(r?wn:En,A)),function(){var t=function(){if(n.is(Ht))return _();var t=H(l.Elements.track),e=H(i),o=y("left",!0),r=y("right",!0);return en(t[o])<=on(e[o])&&en(e[r])<=on(t[r])}(),e=!t&&(!_()||S);n.state.is([4,5])||T(i,it,e||"");T(U(i,d.focusableNodes||""),Kn,e?-1:""),m&&T(i,Kn,e?-1:0);t!==G(i,Mt)&&(E(i,Mt,t),a(t?Sn:Cn,A));if(!t&&document.activeElement===i){var o=l.Slides.getAt(n.index);o&&j(o.slide)}}(),E(i,At,t===e-1),E(i,Dt,t===e+1)}var r}function _(){var i=n.index;return i===t||d.cloneStatus&&i===e}var A={index:t,slideIndex:e,slide:i,container:C,isClone:S,mount:function(){S||(i.id=f.id+"-slide"+fn(t+1),T(i,Jn,h?"tabpanel":"group"),T(i,rt,p.slide),T(i,tt,w||ln(p.slideLabel,[t+1,n.length]))),s(i,"click",r(a,bn,A)),s(i,"keydown",r(a,In,A)),c([yn,Nn,An],k),c(On,L),v&&c(mn,x)},destroy:function(){o=!0,u.destroy(),Y(i,Tt),z(i,st),T(i,"style",b),T(i,tt,w||"")},update:k,style:function(n,t,e){N(e&&C||i,n,t)},isWithin:function(e,i){var o=rn(e-t);return S||!d.rewind&&!n.is(Gt)||(o=nn(o,n.length-o)),o<=i}};return A}var Xt="http://www.w3.org/2000/svg",Bt="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";var qt=Q+"-interval";var Ut={passive:!1,capture:!0};var Yt={Spacebar:" ",Right:Wn,Left:Hn,Up:Xn,Down:Bn};function Jt(n){return n=g(n)?n:n.key,Yt[n]||n}var Kt="keydown";var Vt=Q+"-lazy",Qt=Vt+"-srcset",Zt="["+Vt+"], ["+Qt+"]";var ne=[" ","Enter"];var te=Object.freeze({__proto__:null,Media:function(n,e,i){var o=n.state,r=i.breakpoints||{},u=i.reducedMotion||{},c=vn(),a=[];function s(n){n&&c.destroy()}function l(n,t){var e=matchMedia(t);c.bind(e,"change",f),a.push([n,e])}function f(){var t=o.is(7),e=i.direction,r=a.reduce((function(n,t){return M(n,t[1].matches?t[0]:{})}),{});O(i),d(r),i.destroy?n.destroy("completely"===i.destroy):t?(s(!0),n.mount()):e!==i.direction&&n.refresh()}function d(t,e,r){M(i,t),e&&M(Object.getPrototypeOf(i),t),!r&&o.is(1)||n.emit(xn,i)}return{setup:function(){var n="min"===i.mediaQuery;_(r).sort((function(t,e){return n?+t-+e:+e-+t})).forEach((function(t){l(r[t],"("+(n?"min":"max")+"-width:"+t+"px)")})),l(u,t),f()},destroy:s,reduce:function(n){matchMedia(t).matches&&(n?M(i,u):O(i,_(u)))},set:d}},Direction:Yn,Elements:function(n,t,e){var o,r,u,c=jn(n),a=c.on,s=c.bind,l=n.root,f=e.i18n,g={},v=[],p=[],h=[];function m(){o=C("."+gt),r=P(o,"."+vt),Z(o&&r,"A track/list element is missing."),w(v,k(r,"."+pt+":not(."+ht+")")),A({arrows:yt,pagination:St,prev:wt,next:Et,bar:Lt,toggle:xt},(function(n,t){g[t]=C("."+n)})),D(g,{root:l,track:o,list:r,slides:v}),function(){var n=l.id||gn(V),t=e.role;l.id=n,o.id=o.id||n+"-track",r.id=r.id||n+"-list",!R(l,Jn)&&"SECTION"!==l.tagName&&t&&T(l,Jn,t);T(l,rt,f.carousel),T(r,Jn,"presentation")}(),b()}function y(n){var t=st.concat("style");i(v),Y(l,p),Y(o,h),z([o,r],t),z(l,n?t:["style",rt])}function b(){Y(l,p),Y(o,h),p=L(dt),h=L(gt),S(l,p),S(o,h),T(l,tt,e.label),T(l,et,e.labelledby)}function C(n){var t=q(l,n);return t&&function(n,t){if(d(n.closest))return n.closest(t);for(var e=n;e&&1===e.nodeType&&!x(e,t);)e=e.parentElement;return e}(t,"."+dt)===l?t:void 0}function L(n){return[n+"--"+e.type,n+"--"+e.direction,e.drag&&n+"--draggable",e.isNavigation&&n+"--nav",n===dt&&_t]}return D(g,{setup:m,mount:function(){a(Ln,y),a(Ln,m),a(xn,b),s(document,Nt+" keydown",(function(n){u="keydown"===n.type}),{capture:!0}),s(l,"focusin",(function(){E(l,zt,!!u)}))},destroy:y})},Slides:function(n,t,e){var o=jn(n),u=o.on,c=o.emit,a=o.bind,s=t.Elements,l=s.slides,f=s.list,v=[];function p(){l.forEach((function(n,t){E(n,t,-1)}))}function w(){P((function(n){n.destroy()})),i(v)}function E(t,e,i){var o=Wt(n,e,i,t);o.mount(),v.push(o),v.sort((function(n,t){return n.index-t.index}))}function k(n){return n?_((function(n){return!n.isClone})):v}function P(n,t){k(t).forEach(n)}function _(n){return v.filter(d(n)?n:function(t){return g(n)?x(t.slide,n):b(m(n),t.index)})}return{mount:function(){p(),u(Ln,w),u(Ln,p)},destroy:w,update:function(){P((function(n){n.update()}))},register:E,get:k,getIn:function(n){var i=t.Controller,o=i.toIndex(n),r=i.hasFocus()?1:e.perPage;return _((function(n){return cn(n.index,o,o+r-1)}))},getAt:function(n){return _(n)[0]},add:function(n,t){y(n,(function(n){if(g(n)&&(n=X(n)),h(n)){var i=l[t];i?L(n,i):C(f,n),S(n,e.classes.slide),o=n,u=r(c,kn),s=U(o,"img"),(d=s.length)?s.forEach((function(n){a(n,"load error",(function(){--d||u()}))})):u()}var o,u,s,d})),c(Ln)},remove:function(n){W(_(n).map((function(n){return n.slide}))),c(Ln)},forEach:P,filter:_,style:function(n,t,e){P((function(i){i.style(n,t,e)}))},getLength:function(n){return n?l.length:v.length},isEnough:function(){return v.length>e.perPage}}},Layout:function(n,t,e){var i,o,u,c=jn(n),a=c.on,s=c.bind,f=c.emit,d=t.Slides,g=t.Direction.resolve,v=t.Elements,p=v.root,h=v.track,m=v.list,y=d.getAt,b=d.style;function w(){i=e.direction===qn,N(p,"maxWidth",K(e.width)),N(h,g("paddingLeft"),C(!1)),N(h,g("paddingRight"),C(!0)),S(!0)}function S(n){var t=H(p);(n||o.width!==t.width||o.height!==t.height)&&(N(h,"height",function(){var n="";i&&(Z(n=L(),"height or heightRatio is missing."),n="calc("+n+" - "+C(!1)+" - "+C(!0)+")");return n}()),b(g("marginRight"),K(e.gap)),b("width",e.autoWidth?null:K(e.fixedWidth)||(i?"":x())),b("height",K(e.fixedHeight)||(i?e.autoHeight?null:x():L()),!0),o=t,f(Pn),u!==(u=M())&&(E(p,$t,u),f("overflow",u)))}function C(n){var t=e.padding,i=g(n?"right":"left");return t&&K(t[i]||(l(t)?0:t))||"0px"}function L(){return K(e.height||H(m).width*e.heightRatio)}function x(){var n=K(e.gap);return"calc((100%"+(n&&" + "+n)+")/"+(e.perPage||1)+(n&&" - "+n)+")"}function k(){return H(m)[g("width")]}function P(n,t){var e=y(n||0);return e?H(e.slide)[g("width")]+(t?0:D()):0}function _(n,t){var e=y(n);if(e){var i=H(e.slide)[g("right")],o=H(m)[g("left")];return rn(i-o)+(t?0:D())}return 0}function A(t){return _(n.length-1)-_(0)+P(0,t)}function D(){var n=y(0);return n&&parseFloat(N(n.slide,g("marginRight")))||0}function M(){return n.is(Ht)||A(!0)>k()}return{mount:function(){var n,t,e;w(),s(window,"resize load",(n=r(f,kn),e=Rn(t||0,n,null,1),function(){e.isPaused()&&e.start()})),a([xn,Ln],w),a(kn,S)},resize:S,listSize:k,slideSize:P,sliderSize:A,totalSize:_,getPadding:function(n){return parseFloat(N(h,g("padding"+(n?"Right":"Left"))))||0},isOverflow:M}},Clones:function(n,t,e){var o,r=jn(n),u=r.on,c=t.Elements,a=t.Slides,s=t.Direction.resolve,l=[];function f(){u(Ln,d),u([xn,kn],p),(o=h())&&(!function(t){var i=a.get().slice(),o=i.length;if(o){for(;i.length<t;)w(i,i);w(i.slice(-t),i.slice(0,t)).forEach((function(r,u){var s=u<t,f=function(t,i){var o=t.cloneNode(!0);return S(o,e.classes.clone),o.id=n.root.id+"-clone"+fn(i+1),o}(r.slide,u);s?L(f,i[0].slide):C(c.list,f),w(l,f),a.register(f,u-t+(s?0:o),r.index)}))}}(o),t.Layout.resize(!0))}function d(){g(),f()}function g(){W(l),i(l),r.destroy()}function p(){var n=h();o!==n&&(o<n||!n)&&r.emit(Ln)}function h(){var i=e.clones;if(n.is(Gt)){if(v(i)){var o=e[s("fixedWidth")]&&t.Layout.slideSize(0);i=o&&on(H(c.track)[s("width")]/o)||e[s("autoWidth")]&&n.length||2*e.perPage}}else i=0;return i}return{mount:f,destroy:g}},Move:function(n,t,e){var i,o=jn(n),r=o.on,u=o.emit,c=n.state.set,a=t.Layout,s=a.slideSize,l=a.getPadding,f=a.totalSize,d=a.listSize,g=a.sliderSize,p=t.Direction,h=p.resolve,m=p.orient,y=t.Elements,b=y.list,w=y.track;function E(){t.Controller.isBusy()||(t.Scroll.cancel(),S(n.index),t.Slides.update())}function S(n){C(P(n,!0))}function C(e,i){if(!n.is(Ht)){var o=i?e:function(e){if(n.is(Gt)){var i=k(e),o=i>t.Controller.getEnd();(i<0||o)&&(e=L(e,o))}return e}(e);N(b,"transform","translate"+h("X")+"("+o+"px)"),e!==o&&u(Nn)}}function L(n,t){var e=n-A(t),i=g();return n-=m(i*(on(rn(e)/i)||1))*(t?1:-1)}function x(){C(_(),!0),i.cancel()}function k(n){for(var e=t.Slides.get(),i=0,o=1/0,r=0;r<e.length;r++){var u=e[r].index,c=rn(P(u,!0)-n);if(!(c<=o))break;o=c,i=u}return i}function P(t,i){var o=m(f(t-1)-function(n){var t=e.focus;return"center"===t?(d()-s(n,!0))/2:+t*s(n)||0}(t));return i?function(t){e.trimSpace&&n.is(Rt)&&(t=an(t,0,m(g(!0)-d())));return t}(o):o}function _(){var n=h("left");return H(b)[n]-H(w)[n]+m(l(!1))}function A(n){return P(n?t.Controller.getEnd():0,!!e.trimSpace)}return{mount:function(){i=t.Transition,r([pn,Pn,xn,Ln],E)},move:function(n,t,e,o){var r,a;n!==t&&(r=n>e,a=m(L(_(),r)),r?a>=0:a<=b[h("scrollWidth")]-H(w)[h("width")])&&(x(),C(L(_(),n>e),!0)),c(4),u(mn,t,e,n),i.start(t,(function(){c(3),u(yn,t,e,n),o&&o()}))},jump:S,translate:C,shift:L,cancel:x,toIndex:k,toPosition:P,getPosition:_,getLimit:A,exceededLimit:function(n,t){t=v(t)?_():t;var e=!0!==n&&m(t)<m(A(!1)),i=!1!==n&&m(t)>m(A(!0));return e||i},reposition:E}},Controller:function(n,t,e){var i,o,u,c,a=jn(n),s=a.on,l=a.emit,f=t.Move,d=f.getPosition,p=f.getLimit,h=f.toPosition,m=t.Slides,y=m.isEnough,b=m.getLength,w=e.omitEnd,E=n.is(Gt),S=n.is(Rt),C=r(A,!1),L=r(A,!0),x=e.start||0,k=x;function P(){o=b(!0),u=e.perMove,c=e.perPage,i=O();var n=an(x,0,w?i:o-1);n!==x&&(x=n,f.reposition())}function _(){i!==O()&&l(Fn)}function A(n,t){var e=u||(I()?1:c),o=D(x+e*(n?-1:1),x,!(u||I()));return-1===o&&S&&!un(d(),p(!n),1)?n?0:i:t?o:M(o)}function D(t,r,a){if(y()||I()){var s=function(t){if(S&&"move"===e.trimSpace&&t!==x)for(var i=d();i===h(t,!0)&&cn(t,0,n.length-1,!e.rewind);)t<x?--t:++t;return t}(t);s!==t&&(r=t,t=s,a=!1),t<0||t>i?t=u||!cn(0,t,r,!0)&&!cn(i,r,t,!0)?E?a?t<0?-(o%c||c):o:t:e.rewind?t<0?i:0:-1:z($(t)):a&&t!==r&&(t=z($(r)+(t<r?-1:1)))}else t=-1;return t}function M(n){return E?(n+o)%o||0:n}function O(){for(var n=o-(I()||E&&u?1:c);w&&n-- >0;)if(h(o-1,!0)!==h(n,!0)){n++;break}return an(n,0,o-1)}function z(n){return an(I()?n:c*n,0,i)}function $(n){return I()?nn(n,i):en((n>=i?o-1:n)/c)}function T(n){n!==x&&(k=x,x=n)}function I(){return!v(e.focus)||e.isNavigation}function N(){return n.state.is([4,5])&&!!e.waitForTransition}return{mount:function(){P(),s([xn,Ln,Fn],P),s(Pn,_)},go:function(n,t,e){if(!N()){var o=function(n){var t=x;if(g(n)){var e=n.match(/([+\-<>])(\d+)?/)||[],o=e[1],r=e[2];"+"===o||"-"===o?t=D(x+ +(""+o+(+r||1)),x):">"===o?t=r?z(+r):C(!0):"<"===o&&(t=L(!0))}else t=E?n:an(n,0,i);return t}(n),r=M(o);r>-1&&(t||r!==x)&&(T(r),f.move(o,r,k,e))}},scroll:function(n,e,o,r){t.Scroll.scroll(n,e,o,(function(){var n=M(f.toIndex(d()));T(w?nn(n,i):n),r&&r()}))},getNext:C,getPrev:L,getAdjacent:A,getEnd:O,setIndex:T,getIndex:function(n){return n?k:x},toIndex:z,toPage:$,toDest:function(n){var t=f.toIndex(n);return S?an(t,0,i):t},hasFocus:I,isBusy:N}},Arrows:function(n,t,e){var i,o,u=jn(n),c=u.on,a=u.bind,s=u.emit,l=e.classes,f=e.i18n,d=t.Elements,g=t.Controller,v=d.arrows,p=d.track,h=v,m=d.prev,y=d.next,b={};function w(){!function(){var n=e.arrows;!n||m&&y||(h=v||I("div",l.arrows),m=P(!0),y=P(!1),i=!0,C(h,[m,y]),!v&&L(h,p));m&&y&&(D(b,{prev:m,next:y}),F(h,n?"":"none"),S(h,o=yt+"--"+e.direction),n&&(c([pn,yn,Ln,An,Fn],_),a(y,"click",r(k,">")),a(m,"click",r(k,"<")),_(),T([m,y],Qn,p.id),s(Mn,m,y)))}(),c(xn,E)}function E(){x(),w()}function x(){u.destroy(),Y(h,o),i?(W(v?[m,y]:h),m=y=null):z([m,y],st)}function k(n){g.go(n,!0)}function P(n){return X('<button class="'+l.arrow+" "+(n?l.prev:l.next)+'" type="button"><svg xmlns="'+Xt+'" viewBox="0 0 '+"40 "+'40" width="'+'40" height="'+'40" focusable="false"><path d="'+(e.arrowPath||Bt)+'" />')}function _(){if(m&&y){var t=n.index,e=g.getPrev(),i=g.getNext(),o=e>-1&&t<e?f.last:f.prev,r=i>-1&&t>i?f.first:f.next;m.disabled=e<0,y.disabled=i<0,T(m,tt,o),T(y,tt,r),s("arrows:updated",m,y,e,i)}}return{arrows:b,mount:w,destroy:x,update:_}},Autoplay:function(n,t,e){var i,o,r=jn(n),u=r.on,c=r.bind,a=r.emit,s=Rn(e.interval,n.go.bind(n,">"),(function(n){var t=f.bar;t&&N(t,"width",100*n+"%"),a("autoplay:playing",n)})),l=s.isPaused,f=t.Elements,d=t.Elements,g=d.root,v=d.toggle,p=e.autoplay,h="pause"===p;function m(){l()&&t.Slides.isEnough()&&(s.start(!e.resetProgress),o=i=h=!1,w(),a(zn))}function y(n){void 0===n&&(n=!0),h=!!n,w(),l()||(s.pause(),a($n))}function b(){h||(i||o?y(!1):m())}function w(){v&&(E(v,_t,!h),T(v,tt,e.i18n[h?"play":"pause"]))}function S(n){var i=t.Slides.getAt(n);s.set(i&&+R(i.slide,qt)||e.interval)}return{mount:function(){p&&(!function(){e.pauseOnHover&&c(g,"mouseenter mouseleave",(function(n){i="mouseenter"===n.type,b()}));e.pauseOnFocus&&c(g,"focusin focusout",(function(n){o="focusin"===n.type,b()}));v&&c(v,"click",(function(){h?m():y(!0)}));u([mn,_n,Ln],s.rewind),u(mn,S)}(),v&&T(v,Qn,f.track.id),h||m(),w())},destroy:s.cancel,play:m,pause:y,isPaused:l}},Cover:function(n,t,e){var i=jn(n).on;function o(n){t.Slides.forEach((function(t){var e=P(t.container||t.slide,"img");e&&e.src&&u(n,e,t)}))}function u(n,t,e){e.style("background",n?'center/cover no-repeat url("'+t.src+'")':"",!0),F(t,n?"none":"")}return{mount:function(){e.cover&&(i(Tn,r(u,!0)),i([pn,xn,Ln],r(o,!0)))},destroy:r(o,!1)}},Scroll:function(n,t,e){var i,o,u=jn(n),c=u.on,a=u.emit,s=n.state.set,l=t.Move,f=l.getPosition,d=l.getLimit,g=l.exceededLimit,v=l.translate,p=n.is(Rt),h=1;function m(n,e,u,c,d){var v=f();if(w(),u&&(!p||!g())){var m=t.Layout.sliderSize(),E=sn(n)*m*en(rn(n)/m)||0;n=l.toPosition(t.Controller.toDest(n%m))+E}var S=un(v,n,1);h=1,e=S?0:e||tn(rn(n-v)/1.5,800),o=c,i=Rn(e,y,r(b,v,n,d),1),s(5),a(_n),i.start()}function y(){s(3),o&&o(),a(An)}function b(n,t,i,r){var u,c,a=f(),s=(n+(t-n)*(u=r,(c=e.easingFunc)?c(u):1-Math.pow(1-u,4))-a)*h;v(a+s),p&&!i&&g()&&(h*=.6,rn(s)<10&&m(d(g(!0)),600,!1,o,!0))}function w(){i&&i.cancel()}function E(){i&&!i.isPaused()&&(w(),y())}return{mount:function(){c(mn,w),c([xn,Ln],E)},destroy:w,scroll:m,cancel:E}},Drag:function(n,t,e){var i,o,r,u,a,s,f,d,g=jn(n),v=g.on,p=g.emit,h=g.bind,m=g.unbind,y=n.state,b=t.Move,w=t.Scroll,E=t.Controller,S=t.Elements.track,C=t.Media.reduce,L=t.Direction,k=L.resolve,P=L.orient,_=b.getPosition,A=b.exceededLimit,D=!1;function M(){var n=e.drag;H(!n),u="free"===n}function O(n){if(s=!1,!f){var t=G(n);i=n.target,o=e.noDrag,x(i,"."+Ct+", ."+bt)||o&&x(i,o)||!t&&n.button||(E.isBusy()?B(n,!0):(d=t?S:window,a=y.is([4,5]),r=null,h(d,Ft,z,Ut),h(d,jt,$,Ut),b.cancel(),w.cancel(),I(n)))}var i,o}function z(t){if(y.is(6)||(y.set(6),p("drag")),t.cancelable)if(a){b.translate(i+N(t)/(D&&n.is(Rt)?5:1));var o=F(t)>200,r=D!==(D=A());(o||r)&&I(t),s=!0,p("dragging"),B(t)}else(function(n){return rn(N(n))>rn(N(n,!0))})(t)&&(a=function(n){var t=e.dragMinThreshold,i=l(t),o=i&&t.mouse||0,r=(i?t.touch:+t)||10;return rn(N(n))>(G(n)?r:o)}(t),B(t))}function $(i){y.is(6)&&(y.set(3),p("dragged")),a&&(!function(i){var o=function(t){if(n.is(Gt)||!D){var e=F(t);if(e&&e<200)return N(t)/e}return 0}(i),r=function(n){return _()+sn(n)*nn(rn(n)*(e.flickPower||600),u?1/0:t.Layout.listSize()*(e.flickMaxPages||1))}(o),c=e.rewind&&e.rewindByDrag;C(!1),u?E.scroll(r,0,e.snap):n.is(Ht)?E.go(P(sn(o))<0?c?"<":"-":c?">":"+"):n.is(Rt)&&D&&c?E.go(A(!0)?">":"<"):E.go(E.toDest(r),!0);C(!0)}(i),B(i)),m(d,Ft,z),m(d,jt,$),a=!1}function T(n){!f&&s&&B(n,!0)}function I(n){r=o,o=n,i=_()}function N(n,t){return R(n,t)-R(j(n),t)}function F(n){return J(n)-J(j(n))}function j(n){return o===n&&r||o}function R(n,t){return(G(n)?n.changedTouches[0]:n)["page"+k(t?"Y":"X")]}function G(n){return"undefined"!=typeof TouchEvent&&n instanceof TouchEvent}function H(n){f=n}return{mount:function(){h(S,Ft,c,Ut),h(S,jt,c,Ut),h(S,Nt,O,Ut),h(S,"click",T,{capture:!0}),h(S,"dragstart",B),v([pn,xn],M)},disable:H,isDragging:function(){return a}}},Keyboard:function(n,t,e){var i,o,r=jn(n),c=r.on,a=r.bind,s=r.unbind,l=n.root,f=t.Direction.resolve;function d(){var n=e.keyboard;n&&(i="global"===n?window:l,a(i,Kt,p))}function g(){s(i,Kt)}function v(){var n=o;o=!0,u((function(){o=n}))}function p(t){if(!o){var e=Jt(t);e===f(Hn)?n.go("<"):e===f(Wn)&&n.go(">")}}return{mount:function(){d(),c(xn,g),c(xn,d),c(mn,v)},destroy:g,disable:function(n){o=n}}},LazyLoad:function(n,t,e){var o=jn(n),u=o.on,c=o.off,a=o.bind,s=o.emit,l="sequential"===e.lazyLoad,f=[yn,An],d=[];function g(){i(d),t.Slides.forEach((function(n){U(n.slide,Zt).forEach((function(t){var i=R(t,Vt),o=R(t,Qt);if(i!==t.src||o!==t.srcset){var r=e.classes.spinner,u=t.parentElement,c=P(u,"."+r)||I("span",r,u);d.push([t,n,c]),t.src||F(t,"none")}}))})),l?m():(c(f),u(f,v),v())}function v(){(d=d.filter((function(t){var i=e.perPage*((e.preloadPages||1)+1)-1;return!t[1].isWithin(n.index,i)||p(t)}))).length||c(f)}function p(n){var t=n[0];S(n[1].slide,Ot),a(t,"load error",r(h,n)),T(t,"src",R(t,Vt)),T(t,"srcset",R(t,Qt)),z(t,Vt),z(t,Qt)}function h(n,t){var e=n[0],i=n[1];Y(i.slide,Ot),"error"!==t.type&&(W(n[2]),F(e,""),s(Tn,e,i),s(kn)),l&&m()}function m(){d.length&&p(d.shift())}return{mount:function(){e.lazyLoad&&(g(),u(Ln,g))},destroy:r(i,d),check:v}},Pagination:function(n,t,e){var u,c,a=jn(n),s=a.on,l=a.emit,f=a.bind,d=t.Slides,g=t.Elements,v=t.Controller,p=v.hasFocus,h=v.getIndex,m=v.go,y=t.Direction.resolve,b=g.pagination,w=[];function E(){u&&(W(b?o(u.children):u),Y(u,c),i(w),u=null),a.destroy()}function C(n){m(">"+n,!0)}function L(n,t){var e=w.length,i=Jt(t),o=x(),r=-1;i===y(Wn,!1,o)?r=++n%e:i===y(Hn,!1,o)?r=(--n+e)%e:"Home"===i?r=0:"End"===i&&(r=e-1);var u=w[r];u&&(j(u.button),m(">"+r),B(t,!0))}function x(){return e.paginationDirection||e.direction}function k(n){return w[v.toPage(n)]}function P(){var n=k(h(!0)),t=k(h());if(n){var e=n.button;Y(e,_t),z(e,nt),T(e,Kn,-1)}if(t){var i=t.button;S(i,_t),T(i,nt,!0),T(i,Kn,"")}l("pagination:updated",{list:u,items:w},n,t)}return{items:w,mount:function t(){E(),s([xn,Ln,Fn],t);var i=e.pagination;b&&F(b,i?"":"none"),i&&(s([mn,_n,An],P),function(){var t=n.length,i=e.classes,o=e.i18n,a=e.perPage,s=p()?v.getEnd()+1:on(t/a);S(u=b||I("ul",i.pagination,g.track.parentElement),c=St+"--"+x()),T(u,Jn,"tablist"),T(u,tt,o.select),T(u,ot,x()===qn?"vertical":"");for(var l=0;l<s;l++){var h=I("li",null,u),m=I("button",{class:i.page,type:"button"},h),y=d.getIn(l).map((function(n){return n.slide.id})),E=!p()&&a>1?o.pageX:o.slideX;f(m,"click",r(C,l)),e.paginationKeyboard&&f(m,"keydown",r(L,l)),T(h,Jn,"presentation"),T(m,Jn,"tab"),T(m,Qn,y.join(" ")),T(m,tt,ln(E,l+1)),T(m,Kn,-1),w.push({li:h,button:m,page:l})}}(),P(),l("pagination:mounted",{list:u,items:w},k(n.index)))},destroy:E,getAt:k,update:P}},Sync:function(n,t,e){var o=e.isNavigation,u=e.slideFocus,c=[];function a(){var t,e;n.splides.forEach((function(t){t.isParent||(l(n,t.splide),l(t.splide,n))})),o&&(t=jn(n),(e=t.on)(bn,d),e(In,g),e([pn,xn],f),c.push(t),t.emit(On,n.splides))}function s(){c.forEach((function(n){n.destroy()})),i(c)}function l(n,t){var e=jn(n);e.on(mn,(function(n,e,i){t.go(t.is(Gt)?i:n)})),c.push(e)}function f(){T(t.Elements.list,ot,e.direction===qn?"vertical":"")}function d(t){n.go(t.index)}function g(n,t){b(ne,Jt(t))&&(d(n),B(t))}return{setup:r(t.Media.set,{slideFocus:v(u)?o:u},!0),mount:a,destroy:s,remount:function(){s(),a()}}},Wheel:function(n,t,e){var i=jn(n).bind,o=0;function r(i){if(i.cancelable){var r=i.deltaY,u=r<0,c=J(i),a=e.wheelMinThreshold||0,s=e.wheelSleep||0;rn(r)>a&&c-o>s&&(n.go(u?"<":">"),o=c),function(i){return!e.releaseWheel||n.state.is(4)||-1!==t.Controller.getAdjacent(i)}(u)&&B(i)}}return{mount:function(){e.wheel&&i(t.Elements.track,"wheel",r,Ut)}}},Live:function(n,t,e){var i=jn(n).on,o=t.Elements.track,u=e.live&&!e.isNavigation,c=I("span",kt),a=Rn(90,r(s,!1));function s(n){T(o,ct,n),n?(C(o,c),a.start()):(W(c),a.cancel())}function l(n){u&&T(o,ut,n?"off":"polite")}return{mount:function(){u&&(l(!t.Autoplay.isPaused()),T(o,at,!0),c.textContent="…",i(zn,r(l,!0)),i($n,r(l,!1)),i([yn,An],r(s,!0)))},disable:l,destroy:function(){z(o,[ut,at,ct]),W(c)}}}}),ee={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:It,i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function ie(n,t,e){var i=t.Slides;function o(){i.forEach((function(n){n.style("transform","translateX(-"+100*n.index+"%)")}))}return{mount:function(){jn(n).on([pn,Ln],o)},start:function(n,t){i.style("transition","opacity "+e.speed+"ms "+e.easing),u(t)},cancel:c}}function oe(n,t,e){var i,o=t.Move,u=t.Controller,c=t.Scroll,a=t.Elements.list,s=r(N,a,"transition");function l(){s(""),c.cancel()}return{mount:function(){jn(n).bind(a,"transitionend",(function(n){n.target===a&&i&&(l(),i())}))},start:function(t,r){var a=o.toPosition(t,!0),l=o.getPosition(),f=function(t){var i=e.rewindSpeed;if(n.is(Rt)&&i){var o=u.getIndex(!0),r=u.getEnd();if(0===o&&t>=r||o>=r&&0===t)return i}return e.speed}(t);rn(a-l)>=1&&f>=1?e.useScroll?c.scroll(a,f,!1,r):(s("transform "+f+"ms "+e.easing),o.translate(a,!0),i=r):(o.jump(t),r())},cancel:l}}var re=function(){function t(n,e){var i;this.event=jn(),this.Components={},this.state=(i=1,{set:function(n){i=n},is:function(n){return b(m(n),i)}}),this.splides=[],this._o={},this._E={};var o=g(n)?q(document,n):n;Z(o,o+" is invalid."),this.root=o,e=M({label:R(o,tt)||"",labelledby:R(o,et)||""},ee,t.defaults,e||{});try{M(e,JSON.parse(R(o,Q)))}catch(n){Z(!1,"Invalid JSON")}this._o=Object.create(M({},e))}var e,r,u,c=t.prototype;return c.mount=function(n,t){var e=this,i=this.state,o=this.Components;return Z(i.is([1,7]),"Already mounted!"),i.set(1),this._C=o,this._T=t||this._T||(this.is(Ht)?ie:oe),this._E=n||this._E,A(D({},te,this._E,{Transition:this._T}),(function(n,t){var i=n(e,o,e._o);o[t]=i,i.setup&&i.setup()})),A(o,(function(n){n.mount&&n.mount()})),this.emit(pn),S(this.root,Pt),i.set(3),this.emit(hn),this},c.sync=function(n){return this.splides.push({splide:n}),n.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._C.Sync.remount(),n.Components.Sync.remount()),this},c.go=function(n){return this._C.Controller.go(n),this},c.on=function(n,t){return this.event.on(n,t),this},c.off=function(n){return this.event.off(n),this},c.emit=function(n){var t;return(t=this.event).emit.apply(t,[n].concat(o(arguments,1))),this},c.add=function(n,t){return this._C.Slides.add(n,t),this},c.remove=function(n){return this._C.Slides.remove(n),this},c.is=function(n){return this._o.type===n},c.refresh=function(){return this.emit(Ln),this},c.destroy=function(n){void 0===n&&(n=!0);var t=this.event,e=this.state;return e.is(1)?jn(this).on(hn,this.destroy.bind(this,n)):(A(this._C,(function(t){t.destroy&&t.destroy(n)}),!0),t.emit(Dn),t.destroy(),n&&i(this.splides),e.set(7)),this},e=t,(r=[{key:"options",get:function(){return this._o},set:function(n){this._C.Media.set(n,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}])&&n(e.prototype,r),u&&n(e,u),Object.defineProperty(e,"prototype",{writable:!1}),t}();re.defaults={},re.STATES=e;function ue(n,t,e){return Array.prototype.slice.call(n,t,e)}function ce(n){return n.bind.apply(n,[null].concat(ue(arguments,1)))}function ae(n){return requestAnimationFrame(n)}function se(n,t){return typeof t===n}var le=Array.isArray;function fe(n){return le(n)?n:[n]}function de(n,t){fe(n).forEach(t)}ce(se,"function"),ce(se,"string"),ce(se,"undefined");var ge=Object.keys;function ve(n,t,e){if(n){var i=ge(n);i=e?i.reverse():i;for(var o=0;o<i.length;o++){var r=i[o];if("__proto__"!==r&&!1===t(n[r],r))break}}return n}var pe=Math.min;var he="move",me="moved",ye="updated",be="drag",we="dragged",Ee="scroll",Se="scrolled";function Ce(n){var t=n?n.event.bus:document.createDocumentFragment(),e=function(){var n=[];function t(n,t,e){de(n,(function(n){n&&de(t,(function(t){t.split(" ").forEach((function(t){var i=t.split(".");e(n,i[0],i[1])}))}))}))}return{bind:function(e,i,o,r){t(e,i,(function(t,e,i){var u="addEventListener"in t,c=u?t.removeEventListener.bind(t,e,o,r):t.removeListener.bind(t,o);u?t.addEventListener(e,o,r):t.addListener(o),n.push([t,e,i,o,c])}))},unbind:function(e,i,o){t(e,i,(function(t,e,i){n=n.filter((function(n){return!!(n[0]!==t||n[1]!==e||n[2]!==i||o&&n[3]!==o)||(n[4](),!1)}))}))},dispatch:function(n,t,e){var i;return"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:!0,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!1,e),n.dispatchEvent(i),i},destroy:function(){n.forEach((function(n){n[4]()})),n.length=0}}}();return n&&n.event.on("destroy",e.destroy),function(n){return ue(arguments,1).forEach((function(t){ve(t,(function(e,i){n[i]=t[i]}))})),n}(e,{bus:t,on:function(n,i){e.bind(t,fe(n).join(" "),(function(n){i.apply(i,le(n.detail)?n.detail:[])}))},off:ce(e.unbind,t),emit:function(n){e.dispatch(t,n,ue(arguments,1))}})}function Le(n,t,e,i){var o,r,u=Date.now,c=0,a=!0,s=0;function l(){if(!a){if(c=n?pe((u()-o)/n,1):1,e&&e(c),c>=1&&(t(),o=u(),i&&++s>=i))return f();ae(l)}}function f(){a=!0}function d(){r&&cancelAnimationFrame(r),c=0,r=0,a=!0}return{start:function(t){!t&&d(),o=u()-(t?c*n:0),a=!1,ae(l)},rewind:function(){o=u(),c=0,e&&e(c)},pause:f,cancel:d,set:function(t){n=t},isPaused:function(){return a}}}var xe="slide";function ke(n,t,e){return Array.prototype.slice.call(n,t,e)}function Pe(n){return n.bind(null,...ke(arguments,1))}function _e(n,t){return typeof t===n}function Ae(n){return!Oe(n)&&_e("object",n)}const De=Array.isArray;Pe(_e,"function"),Pe(_e,"string");const Me=Pe(_e,"undefined");function Oe(n){return null===n}function ze(n,t){var e;(e=n,De(e)?e:[e]).forEach(t)}const $e=Object.keys;function Te(n,t,e){if(n){let i=$e(n);i=e?i.reverse():i;for(let e=0;e<i.length;e++){const o=i[e];if("__proto__"!==o&&!1===t(n[o],o))break}}return n}function Ie(n){return ke(arguments,1).forEach((t=>{Te(t,((e,i)=>{n[i]=t[i]}))})),n}function Ne(n,t,e){Ae(t)?Te(t,((t,e)=>{Ne(n,e,t)})):ze(n,(n=>{Oe(e)||""===e?function(n,t){ze(n,(n=>{ze(t,(t=>{n&&n.removeAttribute(t)}))}))}(n,t):n.setAttribute(t,String(e))}))}const{min:Fe,max:je,floor:Re,ceil:Ge,abs:He}=Math;const We={speed:1,autoStart:!0,pauseOnHover:!0,pauseOnFocus:!0},Xe={startScroll:"Start auto scroll",pauseScroll:"Pause auto scroll"};function Be(n,t,e){const{on:i,off:o,bind:r,unbind:u}=Ce(n),{translate:c,getPosition:a,toIndex:s,getLimit:l}=t.Move,{setIndex:f,getIndex:d}=t.Controller,{orient:g}=t.Direction,{toggle:v}=t.Elements,{Live:p}=t,{root:h}=n,m=function(n,t){var e;return function(){e||(e=Le(t||0,(function(){n(),e=null}),null,1)).start()}}(t.Arrows.update,500);let y,b,w,E,S,C,L={};function x(){n.is("fade")||y||!1===e.autoScroll||(y=Le(0,M),function(){L.pauseOnHover&&r(h,"mouseenter mouseleave",(n=>{w="mouseenter"===n.type,D()}));L.pauseOnFocus&&r(h,"focusin focusout",(n=>{E="focusin"===n.type,D()}));L.useToggleButton&&r(v,"click",(()=>{b?_():A()}));i(ye,P),i([he,be,Ee],(()=>{S=!0,A(!1)})),i([me,we,Se],(()=>{S=!1,D()}))}(),L.autoStart&&("complete"===document.readyState?_():r(window,"load",_)))}function k(){y&&(y.cancel(),y=null,C=void 0,o([he,be,Ee,me,Se]),u(h,"mouseenter mouseleave focusin focusout"),u(v,"click"))}function P(){const{autoScroll:n}=e;!1!==n?(L=Ie({},L,Ae(n)?n:{}),x()):k(),y&&!Me(C)&&c(C)}function _(){z()&&(y.start(!0),p.disable(!0),E=w=b=!1,O())}function A(n=!0){b||(b=n,O(),z()||(y.pause(),p.disable(!1)))}function D(){b||(w||E||S?A(!1):_())}function M(){const i=a(),o=function(t){const e=L.speed||1;t+=g(e),n.is(xe)&&(t=function(n,t,e){const i=Fe(t,e),o=je(t,e);return Fe(je(i,n),o)}(t,l(!1),l(!0)));return t}(i);i!==o?(c(o),function(i){const{length:o}=n,r=(s(i)+o)%o;r!==d()&&(f(r),t.Slides.update(),t.Pagination.update(),"nearby"===e.lazyLoad&&t.LazyLoad.check())}(C=a())):(A(!1),L.rewind&&n.go(L.speed>0?0:t.Controller.getEnd())),m()}function O(){if(v){const o=b?"startScroll":"pauseScroll";t="is-active",i=!b,(n=v)&&ze(t,(t=>{t&&n.classList[i?"add":"remove"](t)})),Ne(v,"aria-label",e.i18n[o]||Xe[o])}var n,t,i}function z(){return!y||y.isPaused()}return{setup:function(){const{autoScroll:n}=e;L=Ie({},We,Ae(n)?n:{})},mount:x,destroy:k,play:_,pause:A,isPaused:z}}$(document).scroll((function(n){var t=$(".header"),e=$(".header .logo");document.querySelector(".product-header")?$(this).scrollTop()>t.height()?($(e).attr("src","/branding/logo-black.svg"),t.addClass("active")):($(e).attr("src","/branding/logo-black.svg"),t.removeClass("active")):$(this).scrollTop()>t.height()?($(e).attr("src","/branding/logo-black.svg"),t.addClass("active")):($(e).attr("src","/branding/logo-white.svg"),t.removeClass("active"))})),$("#menu-toggle").click((function(){$(".small-menu-wrapper").toggle("active")})),$(".dropdown-btn").click((function(n){$(this).parent().hasClass("active")?$(this).parent().removeClass("active"):($(".dropdown-btn").parent().removeClass("active"),$(this).parent().addClass("active"))})),$(".accordion-item").click((function(){$(".accordion-head").removeClass("active"),$(".accordion-body").removeClass("active"),$(".accordion-head").children(".icon").removeClass("active"),$(".accordion-head").children(".icon").children("i").removeClass("fa-minus"),$(".accordion-head").children(".icon").children("i").addClass("fa-plus"),$(this).children(".accordion-head").toggleClass("active"),$(this).children(".accordion-head").siblings(".accordion-body").toggleClass("active"),$(this).children(".accordion-head").children(".icon").toggleClass("active"),$(this).children(".accordion-head").children(".icon").children("i").removeClass("fa-plus"),$(this).children(".accordion-head").children(".icon").children("i").addClass("fa-minus")}));var qe=document.querySelector("#logoHolder"),Ue=[{client:"Adyen",img:"/img/logos/adyen-logo.svg"},{client:"AirBnb",img:"/img/logos/airbnb-logo.svg"},{client:"Deloitte Logo",img:"/img/logos/deloitte-logo.svg"},{client:"Google Logo",img:"/img/logos/google-logo.svg"},{client:"Hubspot Logo",img:"/img/logos/hubspot-logo.svg"},{client:"Mastercard Logo",img:"/img/logos/mastercard-logo.svg"},{client:"TikTok Logo",img:"/img/logos/tiktok-logo.svg"},{client:"Zalando Logo",img:"/img/logos/zalando-logo.svg"},{client:"Croky Logo",img:"/img/logos/croky.svg"},{client:"Delaware Logo",img:"/img/logos/delaware.svg"},{client:"Getinge Logo",img:"/img/logos/getinge.svg"},{client:"Gorillas Logo",img:"/img/logos/gorillas.svg"},{client:"iO Logo",img:"/img/logos/io.svg"},{client:"Johnnie Walker Logo",img:"/img/logos/johnniewalker.svg"},{client:"Oaky Logo",img:"/img/logos/oaky.svg"},{client:"Rituals Logo",img:"/img/logos/rituals.svg"},{client:"Salesforce Logo",img:"/img/logos/salesforce.svg"},{client:"Showpad Logo",img:"/img/logos/showpad.svg"},{client:"Signpost Logo",img:"/img/logos/signpost.svg"},{client:"SumUp Logo",img:"/img/logos/sumup.svg"},{client:"Videoland Logo",img:"/img/logos/videoland.svg"}];$(document).ready((function(){if(qe){Ue.sort((function(){return Math.random()-.5}));var n=document.createElement("div");n.classList.add("splide__track");var t=document.createElement("div");t.classList.add("splide__list");for(var e=0;e<Ue.length;e++){var i=document.createElement("div");i.classList.add("item","splide__slide");var o=document.createElement("img");o.src=Ue[e].img,o.alt=Ue[e].client,i.appendChild(o),t.appendChild(i)}n.appendChild(t),qe.appendChild(n),new re("#logoHolder",{arrows:!1,drag:"free",gap:"180px",height:"100px",clones:10,pagination:!1,type:"loop",autoScroll:{speed:.2}}).mount({AutoScroll:Be})}}))})();