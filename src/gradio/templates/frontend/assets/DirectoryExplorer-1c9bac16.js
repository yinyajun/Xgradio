import{S as G,e as H,s as K,f as X,g as p,K as z,h as E,j as C,n as j,k as F,m as A,N as T,p as U,B as ie,C as J,I as $,w as m,r as R,v as N,u as b,O as ce,R as fe,U as ae,F as D,o as O,t as oe,G as S,X as ue,x as _e,H as q,a7 as he,E as de,M as pe,q as ge,aF as me,Q as ke,a0 as ve}from"./index-a959df42.js";import{F as be}from"./File-0ede8772.js";import"./Button-fb0eed2f.js";import{E as ye}from"./Empty-3abf203a.js";var x=Object.prototype.hasOwnProperty;function ee(n,e,l){for(l of n.keys())if(I(l,e))return l}function I(n,e){var l,t,i;if(n===e)return!0;if(n&&e&&(l=n.constructor)===e.constructor){if(l===Date)return n.getTime()===e.getTime();if(l===RegExp)return n.toString()===e.toString();if(l===Array){if((t=n.length)===e.length)for(;t--&&I(n[t],e[t]););return t===-1}if(l===Set){if(n.size!==e.size)return!1;for(t of n)if(i=t,i&&typeof i=="object"&&(i=ee(e,i),!i)||!e.has(i))return!1;return!0}if(l===Map){if(n.size!==e.size)return!1;for(t of n)if(i=t[0],i&&typeof i=="object"&&(i=ee(e,i),!i)||!I(t[1],e.get(i)))return!1;return!0}if(l===ArrayBuffer)n=new Uint8Array(n),e=new Uint8Array(e);else if(l===DataView){if((t=n.byteLength)===e.byteLength)for(;t--&&n.getInt8(t)===e.getInt8(t););return t===-1}if(ArrayBuffer.isView(n)){if((t=n.byteLength)===e.byteLength)for(;t--&&n[t]===e[t];);return t===-1}if(!l||typeof n=="object"){t=0;for(l in n)if(x.call(n,l)&&++t&&!x.call(e,l)||!(l in e)||!I(n[l],e[l]))return!1;return Object.keys(e).length===t}}return n!==n&&e!==e}function we(n){let e,l,t;return{c(){e=X("svg"),l=X("g"),t=X("path"),p(t,"d","M12.7,24.033C12.256,24.322 11.806,24.339 11.351,24.084C10.896,23.829 10.668,23.434 10.667,22.9L10.667,9.1C10.667,8.567 10.895,8.172 11.351,7.916C11.807,7.66 12.256,7.677 12.7,7.967L23.567,14.867C23.967,15.133 24.167,15.511 24.167,16C24.167,16.489 23.967,16.867 23.567,17.133L12.7,24.033Z"),z(t,"fill","currentColor"),z(t,"fill-rule","nonzero"),p(l,"transform","matrix(1,0,0,1,-10.6667,-7.73588)"),p(e,"width","100%"),p(e,"height","100%"),p(e,"viewBox","0 0 14 17"),p(e,"version","1.1"),z(e,"fill-rule","evenodd"),z(e,"clip-rule","evenodd"),z(e,"stroke-linejoin","round"),z(e,"stroke-miterlimit","2")},m(i,f){E(i,e,f),C(e,l),C(l,t)},p:j,i:j,o:j,d(i){i&&F(e)}}}class Le extends G{constructor(e){super(),H(this,e,null,we,K,{})}}function Ce(n){let e,l,t;return{c(){e=A("input"),p(e,"type","checkbox"),e.disabled=n[1],p(e,"class","svelte-8ywr9r"),T(e,"disabled",n[1]&&!n[0])},m(i,f){E(i,e,f),e.checked=n[0],l||(t=[U(e,"change",n[3]),U(e,"click",n[4])],l=!0)},p(i,[f]){f&2&&(e.disabled=i[1]),f&1&&(e.checked=i[0]),f&3&&T(e,"disabled",i[1]&&!i[0])},i:j,o:j,d(i){i&&F(e),l=!1,ie(t)}}}function je(n,e,l){let{value:t}=e,{disabled:i}=e;const f=J();function c(){t=this.checked,l(0,t)}const s=()=>f("change",t);return n.$$set=r=>{"value"in r&&l(0,t=r.value),"disabled"in r&&l(1,i=r.disabled)},[t,i,f,c,s]}class Ae extends G{constructor(e){super(),H(this,e,je,Ce,K,{value:0,disabled:1})}}const Ee=""+new URL("light-file-0e72c1e1.svg",import.meta.url).href;function te(n,e,l){const t=n.slice();return t[12]=e[l].type,t[13]=e[l].path,t[14]=e[l].children,t[15]=e[l].children_visible,t[16]=e[l].checked,t[17]=e,t[18]=l,t}function Fe(n){let e,l,t;return{c(){e=A("span"),l=A("img"),pe(l.src,t=Ee)||p(l,"src",t),p(l,"alt","file icon"),p(l,"class","svelte-19ypun1"),p(e,"class","file-icon svelte-19ypun1")},m(i,f){E(i,e,f),C(e,l)},p:j,i:j,o:j,d(i){i&&F(e)}}}function Ie(n){let e,l,t,i,f;l=new Le({});function c(){return n[8](n[18])}function s(...r){return n[9](n[18],...r)}return{c(){e=A("span"),D(l.$$.fragment),p(e,"class","icon svelte-19ypun1"),p(e,"role","button"),p(e,"tabindex","0"),T(e,"hidden",!n[0][n[18]].children_visible)},m(r,o){E(r,e,o),S(l,e,null),t=!0,i||(f=[U(e,"click",ge(c)),U(e,"keydown",s)],i=!0)},p(r,o){n=r,(!t||o&1)&&T(e,"hidden",!n[0][n[18]].children_visible)},i(r){t||(m(l.$$.fragment,r),t=!0)},o(r){b(l.$$.fragment,r),t=!1},d(r){r&&F(e),q(l),i=!1,ie(f)}}}function ne(n){let e,l;return e=new re({props:{tree:n[14],icons:n[2],node_indices:[...n[3],n[18]],mode:n[1],file_count:n[4]}}),e.$on("check",n[10]),{c(){D(e.$$.fragment)},m(t,i){S(e,t,i),l=!0},p(t,i){const f={};i&1&&(f.tree=t[14]),i&4&&(f.icons=t[2]),i&8&&(f.node_indices=[...t[3],t[18]]),i&2&&(f.mode=t[1]),i&16&&(f.file_count=t[4]),e.$set(f)},i(t){l||(m(e.$$.fragment,t),l=!0)},o(t){b(e.$$.fragment,t),l=!1},d(t){q(e,t)}}}function le(n){let e,l,t,i,f,c,s,r,o=n[13]+"",h,d,u,k;function _(y){n[6](y,n[16],n[17],n[18])}function a(){return n[7](n[18])}let v={disabled:n[1]==="static"||n[12]==="folder"&&n[4]==="single"};n[16]!==void 0&&(v.value=n[16]),t=new Ae({props:v}),fe.push(()=>ae(t,"value",_)),t.$on("change",a);const M=[Ie,Fe],w=[];function Y(y,L){return y[12]==="folder"?0:1}c=Y(n),s=w[c]=M[c](n);let g=n[14]&&n[15]&&ne(n);return{c(){e=A("li"),l=A("span"),D(t.$$.fragment),f=O(),s.c(),r=O(),h=oe(o),d=O(),g&&g.c(),u=O(),p(l,"class","wrap svelte-19ypun1"),p(e,"class","svelte-19ypun1")},m(y,L){E(y,e,L),C(e,l),S(t,l,null),C(l,f),w[c].m(l,null),C(l,r),C(l,h),C(e,d),g&&g.m(e,null),C(e,u),k=!0},p(y,L){n=y;const P={};L&19&&(P.disabled=n[1]==="static"||n[12]==="folder"&&n[4]==="single"),!i&&L&1&&(i=!0,P.value=n[16],ue(()=>i=!1)),t.$set(P);let Q=c;c=Y(n),c===Q?w[c].p(n,L):(R(),b(w[Q],1,1,()=>{w[Q]=null}),N(),s=w[c],s?s.p(n,L):(s=w[c]=M[c](n),s.c()),m(s,1),s.m(l,r)),(!k||L&1)&&o!==(o=n[13]+"")&&_e(h,o),n[14]&&n[15]?g?(g.p(n,L),L&1&&m(g,1)):(g=ne(n),g.c(),m(g,1),g.m(e,u)):g&&(R(),b(g,1,1,()=>{g=null}),N())},i(y){k||(m(t.$$.fragment,y),m(s),m(g),k=!0)},o(y){b(t.$$.fragment,y),b(s),b(g),k=!1},d(y){y&&F(e),q(t),w[c].d(),g&&g.d()}}}function ze(n){let e,l,t=$(n[0]),i=[];for(let c=0;c<t.length;c+=1)i[c]=le(te(n,t,c));const f=c=>b(i[c],1,1,()=>{i[c]=null});return{c(){e=A("ul");for(let c=0;c<i.length;c+=1)i[c].c();p(e,"class","svelte-19ypun1")},m(c,s){E(c,e,s);for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(e,null);l=!0},p(c,[s]){if(s&63){t=$(c[0]);let r;for(r=0;r<t.length;r+=1){const o=te(c,t,r);i[r]?(i[r].p(o,s),m(i[r],1)):(i[r]=le(o),i[r].c(),m(i[r],1),i[r].m(e,null))}for(R(),r=t.length;r<i.length;r+=1)f(r);N()}},i(c){if(!l){for(let s=0;s<t.length;s+=1)m(i[s]);l=!0}},o(c){i=i.filter(Boolean);for(let s=0;s<i.length;s+=1)b(i[s]);l=!1},d(c){c&&F(e),ce(i,c)}}}function De(n,e,l){let{mode:t}=e,{tree:i=[]}=e,{icons:f={}}=e,{node_indices:c=[]}=e,{file_count:s="multiple"}=e;const r=J();async function o(a){await he(),r("check",{node_indices:[...c,a],checked:!i[a].checked})}function h(a,v,M,w){M[w].checked=a,l(0,i)}const d=a=>o(a),u=a=>l(0,i[a].children_visible=!i[a].children_visible,i),k=(a,{key:v})=>v===" "&&l(0,i[a].children_visible=!i[a].children_visible,i);function _(a){de.call(this,n,a)}return n.$$set=a=>{"mode"in a&&l(1,t=a.mode),"tree"in a&&l(0,i=a.tree),"icons"in a&&l(2,f=a.icons),"node_indices"in a&&l(3,c=a.node_indices),"file_count"in a&&l(4,s=a.file_count)},[i,t,f,c,s,o,h,d,u,k,_]}class re extends G{constructor(e){super(),H(this,e,De,ze,K,{mode:1,tree:0,icons:2,node_indices:3,file_count:4})}}const Se=()=>{const{subscribe:n,set:e,update:l}=me(null);let t={type:"folder",path:"",checked:!1,children_visible:!1,parent:null};function i(r){t.children=se(r),e(t.children)}let f=[];function c(r){if(I(r,f))return r;f=r,B(t.children,!1,[]);const o=[],h=new Set;for(let d=0;d<r.length;d++){let u=t,k=[];for(let a=0;a<r[d].length;a++)u?.children&&(k.push(r[d][a]),u=u.children.find(v=>v.path===r[d][a]));if(!u)continue;u.checked=!0,W(u);const _=B(u.children,!0,[u]);V(u),_.forEach(a=>{const v=Z(a);h.has(v.join("/"))||(a.type==="file"&&o.push(v),h.add(v.join("/")))})}return e(t.children),o}function s(r,o,h,d){let u=t;d==="single"&&(B(t.children,!1,[]),e(t.children));for(let a=0;a<r.length;a++)u=u.children[r[a]];u.checked=o;const k=B(u.children,o,[u]);let _=new Map(h.map(a=>[a.join("/"),a]));for(let a=0;a<k.length;a++){const v=Z(k[a]);o?o&&(d==="single"&&(_=new Map),k[a].type==="file"&&_.set(v.join("/"),v)):_.delete(v.join("/"))}return V(u),e(t.children),f=Array.from(_).map(a=>a[1]),f}return{subscribe:n,create_fs_graph:i,set_checked:s,set_checked_from_paths:c}};function W(n){n.parent&&(n.parent.children_visible=!0,W(n.parent))}function se(n,e=0,l=[],t=null){const i=[],f=[];for(let s=0;s<n.length;s++){let r=n[s];if(r.type==="file"){let o=f.findIndex(d=>d.path.toLocaleLowerCase()>=r.path.toLocaleLowerCase());const h={children:void 0,type:"file",path:r.path,checked:!1,children_visible:!1,parent:t};f.splice(o===-1?f.length:o,0,h)}else{let o=i.findIndex(u=>u.path.toLocaleLowerCase()>=r.path.toLocaleLowerCase());const h={type:"folder",path:r.path,checked:!1,children_visible:!1,parent:t},d=se(r.children,e+1,[...l,r.path],h);h.children=d,i.splice(o===-1?i.length:o,0,h)}}const c=f[f.length-1]||i[i.length-1];for(let s=0;s<i.length;s++)i[s].last=c,i[s].previous=i[s-1]||null;for(let s=0;s<f.length;s++)s===0?f[s].previous=i[i.length-1]||null:f[s].previous=f[s-1]||null,f[s].last=c;return Array().concat(i,f)}function Z(n,e=[]){const l=[n.path,...e];return n.parent?Z(n.parent,l):l}function B(n,e,l){if(n==null)return l;for(let t=0;t<n.length;t++)n[t].checked=e,l.push(n[t]),e&&W(n[t]),l.concat(B(n[t].children,e,l));return l}function V(n){if(n==null||!n.parent)return;let e=n.last,l=[];for(;e;)l.push(e.checked),e=e.previous;l.every(t=>t===!0)?(n.parent.checked=!0,V(n?.parent)):l.some(t=>t===!1)&&(n.parent.checked=!1,V(n?.parent))}function qe(n){let e,l;return e=new ye({props:{unpadded_box:!0,size:"large",$$slots:{default:[Me]},$$scope:{ctx:n}}}),{c(){D(e.$$.fragment)},m(t,i){S(e,t,i),l=!0},p(t,i){const f={};i&2048&&(f.$$scope={dirty:i,ctx:t}),e.$set(f)},i(t){l||(m(e.$$.fragment,t),l=!0)},o(t){b(e.$$.fragment,t),l=!1},d(t){q(e,t)}}}function Be(n){let e,l,t;return l=new re({props:{tree:n[2],mode:n[0],file_count:n[1]}}),l.$on("check",n[7]),{c(){e=A("div"),D(l.$$.fragment),p(e,"class","file-wrap svelte-qyxej8")},m(i,f){E(i,e,f),S(l,e,null),t=!0},p(i,f){const c={};f&4&&(c.tree=i[2]),f&1&&(c.mode=i[0]),f&2&&(c.file_count=i[1]),l.$set(c)},i(i){t||(m(l.$$.fragment,i),t=!0)},o(i){b(l.$$.fragment,i),t=!1},d(i){i&&F(e),q(l)}}}function Me(n){let e,l;return e=new be({}),{c(){D(e.$$.fragment)},m(t,i){S(e,t,i),l=!0},i(t){l||(m(e.$$.fragment,t),l=!0)},o(t){b(e.$$.fragment,t),l=!1},d(t){q(e,t)}}}function Oe(n){let e,l,t,i;const f=[Be,qe],c=[];function s(r,o){return r[2]&&r[2].length?0:1}return e=s(n),l=c[e]=f[e](n),{c(){l.c(),t=ke()},m(r,o){c[e].m(r,o),E(r,t,o),i=!0},p(r,[o]){let h=e;e=s(r),e===h?c[e].p(r,o):(R(),b(c[h],1,1,()=>{c[h]=null}),N(),l=c[e],l?l.p(r,o):(l=c[e]=f[e](r),l.c()),m(l,1),l.m(t.parentNode,t))},i(r){i||(m(l),i=!0)},o(r){b(l),i=!1},d(r){r&&F(t),c[e].d(r)}}}function Te(n,e,l){let t,{mode:i}=e,{server:f}=e,{file_count:c="multiple"}=e,{value:s=[]}=e;const r=J(),o=Se();ve(n,o,_=>l(2,t=_)),f.ls().then(_=>{o.create_fs_graph(_)});function h(){l(5,s=c==="single"?[s[0]||[]]:s),l(5,s=o.set_checked_from_paths(s)),I(s,d)||(d=s,r("change",s))}let d=[];function u({node_indices:_,checked:a}){l(5,s=o.set_checked(_,a,s,c)),I(s,d)||(d=s,r("change",s))}const k=({detail:_})=>u(_);return n.$$set=_=>{"mode"in _&&l(0,i=_.mode),"server"in _&&l(6,f=_.server),"file_count"in _&&l(1,c=_.file_count),"value"in _&&l(5,s=_.value)},n.$$.update=()=>{n.$$.dirty&36&&s.length&&t&&h()},[i,c,t,o,u,s,f,k]}class Ge extends G{constructor(e){super(),H(this,e,Te,Oe,K,{mode:0,server:6,file_count:1,value:5})}}export{Ge as D};
//# sourceMappingURL=DirectoryExplorer-1c9bac16.js.map
