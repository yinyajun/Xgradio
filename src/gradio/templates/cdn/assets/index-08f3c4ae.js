import{S as $,e as x,s as ee,Q as X,h as T,n as ie,k as L,m as N,g as h,K as q,p as w,B as K,r as F,u as S,v as A,w as p,D as nl,C as tl,I as D,o as M,O as J,t as Z,N as V,j as I,x as Y,R as le,U as ne,F as U,G,X as te,H as P,a0 as ol,a1 as il,Z as al,ae as ul,V as rl,W as fl}from"./index-9ac29d30.js";import{g as sl}from"./color-a2896a03.js";import{c as _l,m as Te,T as Le}from"./utils-97bc5ebf.js";import{B as cl}from"./Button-30981e7d.js";import{B as dl}from"./BlockLabel-b7cb63ab.js";import{E as hl}from"./Empty-db75912e.js";function ml(e){let l,n,o,i;return{c(){l=N("input"),h(l,"class","label-input svelte-1cag2po"),l.autofocus=!0,h(l,"type","number"),h(l,"step","0.1"),h(l,"style",n="background-color: rgba("+(typeof e[1]=="number"&&e[1]<0?"128, 90, 213,"+-e[1]:"239, 68, 60,"+e[1])+")"),l.value=e[1],q(l,"width","7ch")},m(u,t){T(u,l,t),l.focus(),o||(i=[w(l,"input",e[8]),w(l,"blur",e[14]),w(l,"keydown",e[15])],o=!0)},p(u,t){t&2&&n!==(n="background-color: rgba("+(typeof u[1]=="number"&&u[1]<0?"128, 90, 213,"+-u[1]:"239, 68, 60,"+u[1])+")")&&h(l,"style",n),t&2&&l.value!==u[1]&&(l.value=u[1]),t&2&&q(l,"width","7ch")},d(u){u&&L(l),o=!1,K(i)}}}function gl(e){let l,n,o,i;return{c(){l=N("input"),h(l,"class","label-input svelte-1cag2po"),l.autofocus=!0,h(l,"id",n=`label-input-${e[3]}`),h(l,"type","text"),h(l,"placeholder","label"),l.value=e[1],q(l,"background-color",e[1]===null||e[2]&&e[2]!==e[1]?"":e[6][e[1]].primary),q(l,"width",e[7]?e[7].toString()?.length+4+"ch":"8ch")},m(u,t){T(u,l,t),l.focus(),o||(i=[w(l,"input",e[8]),w(l,"blur",e[12]),w(l,"keydown",e[13]),w(l,"focus",kl)],o=!0)},p(u,t){t&8&&n!==(n=`label-input-${u[3]}`)&&h(l,"id",n),t&2&&l.value!==u[1]&&(l.value=u[1]),t&70&&q(l,"background-color",u[1]===null||u[2]&&u[2]!==u[1]?"":u[6][u[1]].primary),t&128&&q(l,"width",u[7]?u[7].toString()?.length+4+"ch":"8ch")},d(u){u&&L(l),o=!1,K(i)}}}function bl(e){let l;function n(u,t){return u[5]?ml:gl}let o=n(e),i=o(e);return{c(){i.c(),l=X()},m(u,t){i.m(u,t),T(u,l,t)},p(u,[t]){o===(o=n(u))&&i?i.p(u,t):(i.d(1),i=o(u),i&&(i.c(),i.m(l.parentNode,l)))},i:ie,o:ie,d(u){u&&L(l),i.d(u)}}}function kl(e){let l=e.target;l&&l.placeholder&&(l.placeholder="")}function pl(e,l,n){let{value:o}=l,{category:i}=l,{active:u}=l,{labelToEdit:t}=l,{indexOfLabel:r}=l,{text:a}=l,{handleValueChange:s}=l,{isScoresMode:f=!1}=l,{_color_map:v}=l,y=i;function g(d){let O=d.target;O&&n(7,y=O.value)}function m(d,O,c){let H=d.target;n(10,o=[...o.slice(0,O),[c,H.value===""?null:f?Number(H.value):H.value],...o.slice(O+1)]),s()}const b=d=>m(d,r,a),k=d=>{d.key==="Enter"&&(m(d,r,a),n(0,t=-1))},B=d=>m(d,r,a),E=d=>{d.key==="Enter"&&(m(d,r,a),n(0,t=-1))};return e.$$set=d=>{"value"in d&&n(10,o=d.value),"category"in d&&n(1,i=d.category),"active"in d&&n(2,u=d.active),"labelToEdit"in d&&n(0,t=d.labelToEdit),"indexOfLabel"in d&&n(3,r=d.indexOfLabel),"text"in d&&n(4,a=d.text),"handleValueChange"in d&&n(11,s=d.handleValueChange),"isScoresMode"in d&&n(5,f=d.isScoresMode),"_color_map"in d&&n(6,v=d._color_map)},[t,i,u,r,a,f,v,y,g,m,o,s,b,k,B,E]}class Oe extends ${constructor(l){super(),x(this,l,pl,bl,ee,{value:10,category:1,active:2,labelToEdit:0,indexOfLabel:3,text:4,handleValueChange:11,isScoresMode:5,_color_map:6})}}function ae(e,l,n){const o=e.slice();o[45]=l[n][0],o[54]=l[n][1],o[48]=n;const i=typeof o[54]=="string"?parseInt(o[54]):o[54];return o[55]=i,o}function ue(e,l,n){const o=e.slice();return o[45]=l[n][0],o[46]=l[n][1],o[48]=n,o}function re(e,l,n){const o=e.slice();return o[49]=l[n],o[51]=n,o}function fe(e,l,n){const o=e.slice();return o[46]=l[n][0],o[52]=l[n][1],o[48]=n,o}function vl(e){let l,n,o,i=e[1]&&se(),u=D(e[0]),t=[];for(let a=0;a<u.length;a+=1)t[a]=de(ae(e,u,a));const r=a=>S(t[a],1,1,()=>{t[a]=null});return{c(){i&&i.c(),l=M(),n=N("div");for(let a=0;a<t.length;a+=1)t[a].c();h(n,"class","textfield svelte-1yo97r7"),h(n,"data-testid","highlighted-text:textfield")},m(a,s){i&&i.m(a,s),T(a,l,s),T(a,n,s);for(let f=0;f<t.length;f+=1)t[f]&&t[f].m(n,null);o=!0},p(a,s){if(a[1]?i||(i=se(),i.c(),i.m(l.parentNode,l)):i&&(i.d(1),i=null),s[0]&889){u=D(a[0]);let f;for(f=0;f<u.length;f+=1){const v=ae(a,u,f);t[f]?(t[f].p(v,s),p(t[f],1)):(t[f]=de(v),t[f].c(),p(t[f],1),t[f].m(n,null))}for(F(),f=u.length;f<t.length;f+=1)r(f);A()}},i(a){if(!o){for(let s=0;s<u.length;s+=1)p(t[s]);o=!0}},o(a){t=t.filter(Boolean);for(let s=0;s<t.length;s+=1)S(t[s]);o=!1},d(a){a&&(L(l),L(n)),i&&i.d(a),J(t,a)}}}function wl(e){let l,n,o,i=e[1]&&he(e),u=D(e[0]),t=[];for(let a=0;a<u.length;a+=1)t[a]=Ee(ue(e,u,a));const r=a=>S(t[a],1,1,()=>{t[a]=null});return{c(){i&&i.c(),l=M(),n=N("div");for(let a=0;a<t.length;a+=1)t[a].c();h(n,"class","textfield svelte-1yo97r7")},m(a,s){i&&i.m(a,s),T(a,l,s),T(a,n,s);for(let f=0;f<t.length;f+=1)t[f]&&t[f].m(n,null);o=!0},p(a,s){if(a[1]?i?i.p(a,s):(i=he(a),i.c(),i.m(l.parentNode,l)):i&&(i.d(1),i=null),s[0]&13183){u=D(a[0]);let f;for(f=0;f<u.length;f+=1){const v=ue(a,u,f);t[f]?(t[f].p(v,s),p(t[f],1)):(t[f]=Ee(v),t[f].c(),p(t[f],1),t[f].m(n,null))}for(F(),f=u.length;f<t.length;f+=1)r(f);A()}},i(a){if(!o){for(let s=0;s<u.length;s+=1)p(t[s]);o=!0}},o(a){t=t.filter(Boolean);for(let s=0;s<t.length;s+=1)S(t[s]);o=!1},d(a){a&&(L(l),L(n)),i&&i.d(a),J(t,a)}}}function se(e){let l;return{c(){l=N("div"),l.innerHTML="<span>-1</span> <span>0</span> <span>+1</span>",h(l,"class","color-legend svelte-1yo97r7"),h(l,"data-testid","highlighted-text:color-legend")},m(n,o){T(n,l,o)},d(n){n&&L(l)}}}function _e(e){let l,n,o;function i(t){e[32](t)}let u={labelToEdit:e[6],_color_map:e[3],category:e[54],active:e[5],indexOfLabel:e[48],text:e[45],handleValueChange:e[9],isScoresMode:!0};return e[0]!==void 0&&(u.value=e[0]),l=new Oe({props:u}),le.push(()=>ne(l,"value",i)),{c(){U(l.$$.fragment)},m(t,r){G(l,t,r),o=!0},p(t,r){const a={};r[0]&64&&(a.labelToEdit=t[6]),r[0]&8&&(a._color_map=t[3]),r[0]&1&&(a.category=t[54]),r[0]&32&&(a.active=t[5]),r[0]&1&&(a.text=t[45]),!n&&r[0]&1&&(n=!0,a.value=t[0],te(()=>n=!1)),l.$set(a)},i(t){o||(p(l.$$.fragment,t),o=!0)},o(t){S(l.$$.fragment,t),o=!1},d(t){P(l,t)}}}function ce(e){let l,n,o;function i(){return e[37](e[48])}function u(...t){return e[38](e[48],...t)}return{c(){l=N("span"),l.textContent="×",h(l,"class","label-clear-button svelte-1yo97r7"),h(l,"role","button"),h(l,"aria-roledescription","Remove label from text"),h(l,"tabindex","0")},m(t,r){T(t,l,r),n||(o=[w(l,"click",i),w(l,"keydown",u)],n=!0)},p(t,r){e=t},d(t){t&&L(l),n=!1,K(o)}}}function de(e){let l,n,o,i=e[45]+"",u,t,r,a,s,f,v,y,g=e[54]&&e[6]===e[48]&&_e(e);function m(){return e[33](e[48])}function b(){return e[34](e[48])}function k(){return e[35](e[48])}function B(...d){return e[36](e[48],...d)}let E=e[54]&&e[4]===e[48]&&ce(e);return{c(){l=N("span"),n=N("span"),o=N("span"),u=Z(i),t=M(),g&&g.c(),a=M(),E&&E.c(),s=M(),h(o,"class","text svelte-1yo97r7"),h(n,"class","textspan score-text svelte-1yo97r7"),h(n,"role","button"),h(n,"tabindex","0"),h(n,"style",r="background-color: rgba("+(e[55]&&e[55]<0?"128, 90, 213,"+-e[55]:"239, 68, 60,"+e[55])+")"),V(n,"no-cat",e[54]===null||e[5]&&e[5]!==e[54]),V(n,"hl",e[54]!==null),h(l,"class","score-text-container svelte-1yo97r7")},m(d,O){T(d,l,O),I(l,n),I(n,o),I(o,u),I(n,t),g&&g.m(n,null),I(l,a),E&&E.m(l,null),I(l,s),f=!0,v||(y=[w(n,"mouseover",m),w(n,"focus",b),w(n,"click",k),w(n,"keydown",B)],v=!0)},p(d,O){e=d,(!f||O[0]&1)&&i!==(i=e[45]+"")&&Y(u,i),e[54]&&e[6]===e[48]?g?(g.p(e,O),O[0]&65&&p(g,1)):(g=_e(e),g.c(),p(g,1),g.m(n,null)):g&&(F(),S(g,1,1,()=>{g=null}),A()),(!f||O[0]&1&&r!==(r="background-color: rgba("+(e[55]&&e[55]<0?"128, 90, 213,"+-e[55]:"239, 68, 60,"+e[55])+")"))&&h(n,"style",r),(!f||O[0]&33)&&V(n,"no-cat",e[54]===null||e[5]&&e[5]!==e[54]),(!f||O[0]&1)&&V(n,"hl",e[54]!==null),e[54]&&e[4]===e[48]?E?E.p(e,O):(E=ce(e),E.c(),E.m(l,s)):E&&(E.d(1),E=null)},i(d){f||(p(g),f=!0)},o(d){S(g),f=!1},d(d){d&&L(l),g&&g.d(),E&&E.d(),v=!1,K(y)}}}function he(e){let l,n=e[3]&&me(e);return{c(){l=N("div"),n&&n.c(),h(l,"class","category-legend svelte-1yo97r7"),h(l,"data-testid","highlighted-text:category-legend")},m(o,i){T(o,l,i),n&&n.m(l,null)},p(o,i){o[3]?n?n.p(o,i):(n=me(o),n.c(),n.m(l,null)):n&&(n.d(1),n=null)},d(o){o&&L(l),n&&n.d()}}}function me(e){let l,n=D(Object.entries(e[3])),o=[];for(let i=0;i<n.length;i+=1)o[i]=ge(fe(e,n,i));return{c(){for(let i=0;i<o.length;i+=1)o[i].c();l=X()},m(i,u){for(let t=0;t<o.length;t+=1)o[t]&&o[t].m(i,u);T(i,l,u)},p(i,u){if(u[0]&3080){n=D(Object.entries(i[3]));let t;for(t=0;t<n.length;t+=1){const r=fe(i,n,t);o[t]?o[t].p(r,u):(o[t]=ge(r),o[t].c(),o[t].m(l.parentNode,l))}for(;t<o.length;t+=1)o[t].d(1);o.length=n.length}},d(i){i&&L(l),J(o,i)}}}function ge(e){let l,n=e[46]+"",o,i,u,t,r;function a(){return e[15](e[46])}function s(){return e[16](e[46])}return{c(){l=N("div"),o=Z(n),i=M(),h(l,"role","button"),h(l,"aria-roledescription","Categories of highlighted text. Hover to see text with this category highlighted."),h(l,"tabindex","0"),h(l,"class","category-label svelte-1yo97r7"),h(l,"style",u="background-color:"+e[52].secondary)},m(f,v){T(f,l,v),I(l,o),I(l,i),t||(r=[w(l,"mouseover",a),w(l,"focus",s),w(l,"mouseout",e[17]),w(l,"blur",e[18])],t=!0)},p(f,v){e=f,v[0]&8&&n!==(n=e[46]+"")&&Y(o,n),v[0]&8&&u!==(u="background-color:"+e[52].secondary)&&h(l,"style",u)},d(f){f&&L(l),t=!1,K(r)}}}function be(e){let l,n,o,i=e[49]+"",u,t,r,a,s,f,v;function y(){return e[20](e[48])}function g(){return e[21](e[48])}function m(){return e[22](e[48])}let b=!e[1]&&e[46]!==null&&e[6]!==e[48]&&ke(e),k=e[6]===e[48]&&e[46]!==null&&pe(e);function B(){return e[26](e[46],e[48],e[45])}function E(...H){return e[27](e[46],e[48],e[45],...H)}function d(){return e[28](e[48])}function O(){return e[29](e[48])}let c=e[46]!==null&&ve(e);return{c(){l=N("span"),n=N("span"),o=N("span"),u=Z(i),t=M(),b&&b.c(),r=M(),k&&k.c(),a=M(),c&&c.c(),h(o,"class","text svelte-1yo97r7"),h(o,"role","button"),h(o,"tabindex","0"),V(o,"no-label",e[46]===null),h(n,"role","button"),h(n,"tabindex","0"),h(n,"class","textspan svelte-1yo97r7"),V(n,"no-cat",e[46]===null||e[5]&&e[5]!==e[46]),V(n,"hl",e[46]!==null),V(n,"selectable",e[2]),q(n,"background-color",e[46]===null||e[5]&&e[5]!==e[46]?"":e[46]&&e[3][e[46]]?e[3][e[46]].secondary:""),h(l,"class","text-category-container svelte-1yo97r7")},m(H,j){T(H,l,j),I(l,n),I(n,o),I(o,u),I(n,t),b&&b.m(n,null),I(n,r),k&&k.m(n,null),I(l,a),c&&c.m(l,null),s=!0,f||(v=[w(o,"keydown",e[19]),w(o,"focus",y),w(o,"mouseover",g),w(o,"click",m),w(n,"click",B),w(n,"keydown",E),w(n,"focus",d),w(n,"mouseover",O)],f=!0)},p(H,j){e=H,(!s||j[0]&1)&&i!==(i=e[49]+"")&&Y(u,i),(!s||j[0]&1)&&V(o,"no-label",e[46]===null),!e[1]&&e[46]!==null&&e[6]!==e[48]?b?b.p(e,j):(b=ke(e),b.c(),b.m(n,r)):b&&(b.d(1),b=null),e[6]===e[48]&&e[46]!==null?k?(k.p(e,j),j[0]&65&&p(k,1)):(k=pe(e),k.c(),p(k,1),k.m(n,null)):k&&(F(),S(k,1,1,()=>{k=null}),A()),(!s||j[0]&33)&&V(n,"no-cat",e[46]===null||e[5]&&e[5]!==e[46]),(!s||j[0]&1)&&V(n,"hl",e[46]!==null),(!s||j[0]&4)&&V(n,"selectable",e[2]),j[0]&41&&q(n,"background-color",e[46]===null||e[5]&&e[5]!==e[46]?"":e[46]&&e[3][e[46]]?e[3][e[46]].secondary:""),e[46]!==null?c?c.p(e,j):(c=ve(e),c.c(),c.m(l,null)):c&&(c.d(1),c=null)},i(H){s||(p(k),s=!0)},o(H){S(k),s=!1},d(H){H&&L(l),b&&b.d(),k&&k.d(),c&&c.d(),f=!1,K(v)}}}function ke(e){let l,n=e[46]+"",o,i,u;function t(){return e[23](e[48])}function r(){return e[24](e[48])}return{c(){l=N("span"),o=Z(n),h(l,"id",`label-tag-${e[48]}`),h(l,"class","label svelte-1yo97r7"),h(l,"role","button"),h(l,"tabindex","0"),q(l,"background-color",e[46]===null||e[5]&&e[5]!==e[46]?"":e[3][e[46]].primary)},m(a,s){T(a,l,s),I(l,o),i||(u=[w(l,"click",t),w(l,"keydown",r)],i=!0)},p(a,s){e=a,s[0]&1&&n!==(n=e[46]+"")&&Y(o,n),s[0]&41&&q(l,"background-color",e[46]===null||e[5]&&e[5]!==e[46]?"":e[3][e[46]].primary)},d(a){a&&L(l),i=!1,K(u)}}}function pe(e){let l,n,o,i;function u(r){e[25](r)}let t={labelToEdit:e[6],category:e[46],active:e[5],_color_map:e[3],indexOfLabel:e[48],text:e[45],handleValueChange:e[9]};return e[0]!==void 0&&(t.value=e[0]),n=new Oe({props:t}),le.push(()=>ne(n,"value",u)),{c(){l=Z(` 
									`),U(n.$$.fragment)},m(r,a){T(r,l,a),G(n,r,a),i=!0},p(r,a){const s={};a[0]&64&&(s.labelToEdit=r[6]),a[0]&1&&(s.category=r[46]),a[0]&32&&(s.active=r[5]),a[0]&8&&(s._color_map=r[3]),a[0]&1&&(s.text=r[45]),!o&&a[0]&1&&(o=!0,s.value=r[0],te(()=>o=!1)),n.$set(s)},i(r){i||(p(n.$$.fragment,r),i=!0)},o(r){S(n.$$.fragment,r),i=!1},d(r){r&&L(l),P(n,r)}}}function ve(e){let l,n,o;function i(){return e[30](e[48])}function u(...t){return e[31](e[48],...t)}return{c(){l=N("span"),l.textContent="×",h(l,"class","label-clear-button svelte-1yo97r7"),h(l,"role","button"),h(l,"aria-roledescription","Remove label from text"),h(l,"tabindex","0")},m(t,r){T(t,l,r),n||(o=[w(l,"click",i),w(l,"keydown",u)],n=!0)},p(t,r){e=t},d(t){t&&L(l),n=!1,K(o)}}}function we(e){let l;return{c(){l=N("br")},m(n,o){T(n,l,o)},d(n){n&&L(l)}}}function ye(e){let l=e[49].trim()!=="",n,o=e[51]<z(e[45]).length-1,i,u,t=l&&be(e),r=o&&we();return{c(){t&&t.c(),n=M(),r&&r.c(),i=X()},m(a,s){t&&t.m(a,s),T(a,n,s),r&&r.m(a,s),T(a,i,s),u=!0},p(a,s){s[0]&1&&(l=a[49].trim()!==""),l?t?(t.p(a,s),s[0]&1&&p(t,1)):(t=be(a),t.c(),p(t,1),t.m(n.parentNode,n)):t&&(F(),S(t,1,1,()=>{t=null}),A()),s[0]&1&&(o=a[51]<z(a[45]).length-1),o?r||(r=we(),r.c(),r.m(i.parentNode,i)):r&&(r.d(1),r=null)},i(a){u||(p(t),u=!0)},o(a){S(t),u=!1},d(a){a&&(L(n),L(i)),t&&t.d(a),r&&r.d(a)}}}function Ee(e){let l,n,o=D(z(e[45])),i=[];for(let t=0;t<o.length;t+=1)i[t]=ye(re(e,o,t));const u=t=>S(i[t],1,1,()=>{i[t]=null});return{c(){for(let t=0;t<i.length;t+=1)i[t].c();l=X()},m(t,r){for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(t,r);T(t,l,r),n=!0},p(t,r){if(r[0]&13183){o=D(z(t[45]));let a;for(a=0;a<o.length;a+=1){const s=re(t,o,a);i[a]?(i[a].p(s,r),p(i[a],1)):(i[a]=ye(s),i[a].c(),p(i[a],1),i[a].m(l.parentNode,l))}for(F(),a=o.length;a<i.length;a+=1)u(a);A()}},i(t){if(!n){for(let r=0;r<o.length;r+=1)p(i[r]);n=!0}},o(t){i=i.filter(Boolean);for(let r=0;r<i.length;r+=1)S(i[r]);n=!1},d(t){t&&L(l),J(i,t)}}}function yl(e){let l,n,o,i;const u=[wl,vl],t=[];function r(a,s){return a[7]==="categories"?0:1}return n=r(e),o=t[n]=u[n](e),{c(){l=N("div"),o.c(),h(l,"class","container svelte-1yo97r7")},m(a,s){T(a,l,s),t[n].m(l,null),i=!0},p(a,s){let f=n;n=r(a),n===f?t[n].p(a,s):(F(),S(t[f],1,1,()=>{t[f]=null}),A(),o=t[n],o?o.p(a,s):(o=t[n]=u[n](a),o.c()),p(o,1),o.m(l,null))},i(a){i||(p(o),i=!0)},o(a){S(o),i=!1},d(a){a&&L(l),t[n].d()}}}function z(e){return e.split(`
`)}function El(e,l,n){const o=typeof document<"u";let{value:i=[]}=l,{show_legend:u=!1}=l,{color_map:t={}}=l,{selectable:r=!1}=l,a=-1,s,f={},v="",y,g=-1;nl(()=>{const _=()=>{y=window.getSelection(),H(),window.removeEventListener("mouseup",_)};window.addEventListener("mousedown",()=>{window.addEventListener("mouseup",_)})});async function m(_,C){if(y?.toString()&&a!==-1&&i[a][0].toString().includes(y.toString())){const R=Symbol(),Q=i[a][0],[$e,xe,el]=[Q.substring(0,_),Q.substring(_,C),Q.substring(C)];let W=[...i.slice(0,a),[$e,null],[xe,E==="scores"?1:"label",R],[el,null],...i.slice(a+1)];n(6,g=W.findIndex(([oe,jl,ll])=>ll===R)),W[g].pop(),W=W.filter(oe=>oe[0].trim()!==""),n(0,i=W),B(),document.getElementById(`label-input-${g}`)?.focus()}}const b=tl();function k(_){_<0||_>=i.length||(n(0,i[_][1]=null,i),n(0,i=Te(i,"equal")),B(),window.getSelection()?.empty())}function B(){b("change",i),n(6,g=-1),u&&(n(14,t={}),n(3,f={}))}let E;function d(_){n(5,v=_)}function O(){n(5,v="")}async function c(_){y=window.getSelection(),_.key==="Enter"&&H()}function H(){if(y&&y?.toString().trim()!==""){const _=y.getRangeAt(0).startOffset,C=y.getRangeAt(0).endOffset;m(_,C)}}function j(_,C,R){b("select",{index:_,value:[C,R]})}const Ce=_=>d(_),Ne=_=>d(_),Be=()=>O(),He=()=>O(),je=_=>c(_),Ie=_=>n(4,a=_),Ve=_=>n(4,a=_),Me=_=>n(6,g=_),Re=_=>n(6,g=_),qe=_=>n(6,g=_);function Fe(_){i=_,n(0,i)}const Ae=(_,C,R)=>{_!==null&&j(C,R,_)},De=(_,C,R,Q)=>{_!==null?(n(6,g=C),j(C,R,_)):c(Q)},Ke=_=>n(4,a=_),Ue=_=>n(4,a=_),Ge=_=>k(_),Pe=(_,C)=>{C.key==="Enter"&&k(_)};function Qe(_){i=_,n(0,i)}const We=_=>n(4,a=_),Xe=_=>n(4,a=_),Ze=_=>n(6,g=_),ze=(_,C)=>{C.key==="Enter"&&n(6,g=_)},Je=_=>k(_),Ye=(_,C)=>{C.key==="Enter"&&k(_)};return e.$$set=_=>{"value"in _&&n(0,i=_.value),"show_legend"in _&&n(1,u=_.show_legend),"color_map"in _&&n(14,t=_.color_map),"selectable"in _&&n(2,r=_.selectable)},e.$$.update=()=>{if(e.$$.dirty[0]&16393){if(t||n(14,t={}),i.length>0){for(let[_,C]of i)if(C!==null)if(typeof C=="string"){if(n(7,E="categories"),!(C in t)){let R=sl(Object.keys(t).length);n(14,t[C]=R,t)}}else n(7,E="scores")}_l(t,f,o,s)}},[i,u,r,f,a,v,g,E,k,B,d,O,c,j,t,Ce,Ne,Be,He,je,Ie,Ve,Me,Re,qe,Fe,Ae,De,Ke,Ue,Ge,Pe,Qe,We,Xe,Ze,ze,Je,Ye]}class Sl extends ${constructor(l){super(),x(this,l,El,yl,ee,{value:0,show_legend:1,color_map:14,selectable:2},null,[-1,-1])}}function Se(e){let l,n;return l=new dl({props:{Icon:Le,label:e[7],float:!1,disable:e[8]===!1}}),{c(){U(l.$$.fragment)},m(o,i){G(l,o,i),n=!0},p(o,i){const u={};i&128&&(u.label=o[7]),i&256&&(u.disable=o[8]===!1),l.$set(u)},i(o){n||(p(l.$$.fragment,o),n=!0)},o(o){S(l.$$.fragment,o),n=!1},d(o){P(l,o)}}}function Tl(e){let l,n;return l=new hl({props:{$$slots:{default:[Ol]},$$scope:{ctx:e}}}),{c(){U(l.$$.fragment)},m(o,i){G(l,o,i),n=!0},p(o,i){const u={};i&262144&&(u.$$scope={dirty:i,ctx:o}),l.$set(u)},i(o){n||(p(l.$$.fragment,o),n=!0)},o(o){S(l.$$.fragment,o),n=!1},d(o){P(l,o)}}}function Ll(e){let l,n,o;function i(t){e[15](t)}let u={selectable:e[11],show_legend:e[6],color_map:e[1]};return e[0]!==void 0&&(u.value=e[0]),l=new Sl({props:u}),le.push(()=>ne(l,"value",i)),l.$on("change",e[16]),{c(){U(l.$$.fragment)},m(t,r){G(l,t,r),o=!0},p(t,r){const a={};r&2048&&(a.selectable=t[11]),r&64&&(a.show_legend=t[6]),r&2&&(a.color_map=t[1]),!n&&r&1&&(n=!0,a.value=t[0],te(()=>n=!1)),l.$set(a)},i(t){o||(p(l.$$.fragment,t),o=!0)},o(t){S(l.$$.fragment,t),o=!1},d(t){P(l,t)}}}function Ol(e){let l,n;return l=new Le({}),{c(){U(l.$$.fragment)},m(o,i){G(l,o,i),n=!0},i(o){n||(p(l.$$.fragment,o),n=!0)},o(o){S(l.$$.fragment,o),n=!1},d(o){P(l,o)}}}function Cl(e){let l,n,o,i,u,t,r;const a=[e[13]];let s={};for(let m=0;m<a.length;m+=1)s=al(s,a[m]);l=new ul({props:s});let f=e[7]&&Se(e);const v=[Ll,Tl],y=[];function g(m,b){return m[0]?0:1}return i=g(e),u=y[i]=v[i](e),{c(){U(l.$$.fragment),n=M(),f&&f.c(),o=M(),u.c(),t=X()},m(m,b){G(l,m,b),T(m,n,b),f&&f.m(m,b),T(m,o,b),y[i].m(m,b),T(m,t,b),r=!0},p(m,b){const k=b&8192?rl(a,[fl(m[13])]):{};l.$set(k),m[7]?f?(f.p(m,b),b&128&&p(f,1)):(f=Se(m),f.c(),p(f,1),f.m(o.parentNode,o)):f&&(F(),S(f,1,1,()=>{f=null}),A());let B=i;i=g(m),i===B?y[i].p(m,b):(F(),S(y[B],1,1,()=>{y[B]=null}),A(),u=y[i],u?u.p(m,b):(u=y[i]=v[i](m),u.c()),p(u,1),u.m(t.parentNode,t))},i(m){r||(p(l.$$.fragment,m),p(f),p(u),r=!0)},o(m){S(l.$$.fragment,m),S(f),S(u),r=!1},d(m){m&&(L(n),L(o),L(t)),P(l,m),f&&f.d(m),y[i].d(m)}}}function Nl(e){let l,n;return l=new cl({props:{variant:e[5]==="interactive"?"dashed":"solid",test_id:"highlighted-text",visible:e[4],elem_id:e[2],elem_classes:e[3],padding:!1,container:e[8],scale:e[9],min_width:e[10],$$slots:{default:[Cl]},$$scope:{ctx:e}}}),{c(){U(l.$$.fragment)},m(o,i){G(l,o,i),n=!0},p(o,[i]){const u={};i&32&&(u.variant=o[5]==="interactive"?"dashed":"solid"),i&16&&(u.visible=o[4]),i&4&&(u.elem_id=o[2]),i&8&&(u.elem_classes=o[3]),i&256&&(u.container=o[8]),i&512&&(u.scale=o[9]),i&1024&&(u.min_width=o[10]),i&276931&&(u.$$scope={dirty:i,ctx:o}),l.$set(u)},i(o){n||(p(l.$$.fragment,o),n=!0)},o(o){S(l.$$.fragment,o),n=!1},d(o){P(l,o)}}}function Bl(e,l,n){let o;ol(e,il,c=>n(17,o=c));let{elem_id:i=""}=l,{elem_classes:u=[]}=l,{visible:t=!0}=l,{value:r}=l,{mode:a}=l,{show_legend:s}=l,{color_map:f={}}=l,{label:v=o("highlighted_text.highlighted_text")}=l,{container:y=!0}=l,{scale:g=null}=l,{min_width:m=void 0}=l,{selectable:b=!1}=l,{combine_adjacent:k=!1}=l,{gradio:B}=l,{loading_status:E}=l;function d(c){r=c,n(0,r),n(14,k)}const O=()=>B.dispatch("change");return e.$$set=c=>{"elem_id"in c&&n(2,i=c.elem_id),"elem_classes"in c&&n(3,u=c.elem_classes),"visible"in c&&n(4,t=c.visible),"value"in c&&n(0,r=c.value),"mode"in c&&n(5,a=c.mode),"show_legend"in c&&n(6,s=c.show_legend),"color_map"in c&&n(1,f=c.color_map),"label"in c&&n(7,v=c.label),"container"in c&&n(8,y=c.container),"scale"in c&&n(9,g=c.scale),"min_width"in c&&n(10,m=c.min_width),"selectable"in c&&n(11,b=c.selectable),"combine_adjacent"in c&&n(14,k=c.combine_adjacent),"gradio"in c&&n(12,B=c.gradio),"loading_status"in c&&n(13,E=c.loading_status)},e.$$.update=()=>{e.$$.dirty&2&&!f&&Object.keys(f).length&&n(1,f),e.$$.dirty&16385&&r&&k&&n(0,r=Te(r,"equal"))},[r,f,i,u,t,a,s,v,y,g,m,b,B,E,k,d,O]}class Hl extends ${constructor(l){super(),x(this,l,Bl,Nl,ee,{elem_id:2,elem_classes:3,visible:4,value:0,mode:5,show_legend:6,color_map:1,label:7,container:8,scale:9,min_width:10,selectable:11,combine_adjacent:14,gradio:12,loading_status:13})}}const Al=Hl;export{Al as default};
//# sourceMappingURL=index-08f3c4ae.js.map
