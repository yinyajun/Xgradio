import{S as q,e as H,s as N,m as y,t as M,g as b,N as r,h as m,j as A,x as T,n as w,k as g,I as D,O as P,Q as E,as as se,Z as le,aj as Qe,K as X,at as ie,V as Ue,M as Xe,F as K,G as Q,w as C,u as S,H as U,y as Ye,ar as Je,D as pe,R as Re,U as xe,b as ae,X as $e,a0 as el,a1 as ll,p as I,B as te,o as F,f as fe,r as O,v as W,T as p,al as ce}from"./index-9ac29d30.js";import{B as tl,g as nl}from"./Button-30981e7d.js";import{h as re,r as ue,u as sl}from"./file-url-cbd8b7d0.js";import{V as il}from"./Player.svelte_svelte_type_style_lang-44a28a28.js";import{c as al}from"./csv-b0b7514a.js";import{d as fl}from"./dsv-576afacd.js";var cl=fl("	"),rl=cl.parseRows;function ul(s){let e,l;return{c(){e=y("div"),l=M(s[0]),b(e,"class","svelte-1ayixqk"),r(e,"table",s[1]==="table"),r(e,"gallery",s[1]==="gallery"),r(e,"selected",s[2])},m(t,n){m(t,e,n),A(e,l)},p(t,[n]){n&1&&T(l,t[0]),n&2&&r(e,"table",t[1]==="table"),n&2&&r(e,"gallery",t[1]==="gallery"),n&4&&r(e,"selected",t[2])},i:w,o:w,d(t){t&&g(e)}}}function ol(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class _l extends q{constructor(e){super(),H(this,e,ol,ul,N,{value:0,type:1,selected:2})}}function dl(s){let e,l;return{c(){e=y("div"),l=M(s[0]),b(e,"class","svelte-1ayixqk"),r(e,"table",s[1]==="table"),r(e,"gallery",s[1]==="gallery"),r(e,"selected",s[2])},m(t,n){m(t,e,n),A(e,l)},p(t,[n]){n&1&&T(l,t[0]),n&2&&r(e,"table",t[1]==="table"),n&2&&r(e,"gallery",t[1]==="gallery"),n&4&&r(e,"selected",t[2])},i:w,o:w,d(t){t&&g(e)}}}function ml(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class gl extends q{constructor(e){super(),H(this,e,ml,dl,N,{value:0,type:1,selected:2})}}function hl(s){let e,l=s[0].toLocaleString()+"",t;return{c(){e=y("div"),t=M(l),b(e,"class","svelte-1ayixqk"),r(e,"table",s[1]==="table"),r(e,"gallery",s[1]==="gallery"),r(e,"selected",s[2])},m(n,a){m(n,e,a),A(e,t)},p(n,[a]){a&1&&l!==(l=n[0].toLocaleString()+"")&&T(t,l),a&2&&r(e,"table",n[1]==="table"),a&2&&r(e,"gallery",n[1]==="gallery"),a&4&&r(e,"selected",n[2])},i:w,o:w,d(n){n&&g(e)}}}function bl(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class vl extends q{constructor(e){super(),H(this,e,bl,hl,N,{value:0,type:1,selected:2})}}function oe(s,e,l){const t=s.slice();return t[3]=e[l],t[5]=l,t}function _e(s){let e;return{c(){e=M(", ")},m(l,t){m(l,e,t)},d(l){l&&g(e)}}}function de(s){let e=s[3].toLocaleString()+"",l,t,n=s[5]!==s[0].length-1&&_e();return{c(){l=M(e),n&&n.c(),t=E()},m(a,i){m(a,l,i),n&&n.m(a,i),m(a,t,i)},p(a,i){i&1&&e!==(e=a[3].toLocaleString()+"")&&T(l,e),a[5]!==a[0].length-1?n||(n=_e(),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(a){a&&(g(l),g(t)),n&&n.d(a)}}}function yl(s){let e,l=D(s[0]),t=[];for(let n=0;n<l.length;n+=1)t[n]=de(oe(s,l,n));return{c(){e=y("div");for(let n=0;n<t.length;n+=1)t[n].c();b(e,"class","svelte-1ayixqk"),r(e,"table",s[1]==="table"),r(e,"gallery",s[1]==="gallery"),r(e,"selected",s[2])},m(n,a){m(n,e,a);for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(e,null)},p(n,[a]){if(a&1){l=D(n[0]);let i;for(i=0;i<l.length;i+=1){const f=oe(n,l,i);t[i]?t[i].p(f,a):(t[i]=de(f),t[i].c(),t[i].m(e,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=l.length}a&2&&r(e,"table",n[1]==="table"),a&2&&r(e,"gallery",n[1]==="gallery"),a&4&&r(e,"selected",n[2])},i:w,o:w,d(n){n&&g(e),P(t,n)}}}function kl(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class wl extends q{constructor(e){super(),H(this,e,kl,yl,N,{value:0,type:1,selected:2})}}function Al(s){let e,l;return{c(){e=y("div"),l=M(s[0]),b(e,"class","svelte-1ayixqk"),r(e,"table",s[1]==="table"),r(e,"gallery",s[1]==="gallery"),r(e,"selected",s[2])},m(t,n){m(t,e,n),A(e,l)},p(t,[n]){n&1&&T(l,t[0]),n&2&&r(e,"table",t[1]==="table"),n&2&&r(e,"gallery",t[1]==="gallery"),n&4&&r(e,"selected",t[2])},i:w,o:w,d(t){t&&g(e)}}}function jl(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class zl extends q{constructor(e){super(),H(this,e,jl,Al,N,{value:0,type:1,selected:2})}}function Cl(s){let e,l;return{c(){e=y("div"),l=M(s[0]),b(e,"class","svelte-1ayixqk"),r(e,"table",s[1]==="table"),r(e,"gallery",s[1]==="gallery"),r(e,"selected",s[2])},m(t,n){m(t,e,n),A(e,l)},p(t,[n]){n&1&&T(l,t[0]),n&2&&r(e,"table",t[1]==="table"),n&2&&r(e,"gallery",t[1]==="gallery"),n&4&&r(e,"selected",t[2])},i:w,o:w,d(t){t&&g(e)}}}function Ml(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class ql extends q{constructor(e){super(),H(this,e,Ml,Cl,N,{value:0,type:1,selected:2})}}function Hl(s){let e,l=s[3].message+"",t;return{c(){e=y("p"),t=M(l),X(e,"color","red")},m(n,a){m(n,e,a),A(e,t)},p(n,a){a&1&&l!==(l=n[3].message+"")&&T(t,l)},d(n){n&&g(e)}}}function Nl(s){let e,l,t=[{src:l=s[2]},s[1]],n={};for(let a=0;a<t.length;a+=1)n=le(n,t[a]);return{c(){e=y("img"),ie(e,n),r(e,"svelte-2xi6dn",!0)},m(a,i){m(a,e,i)},p(a,i){ie(e,n=Ue(t,[i&1&&!Xe(e.src,l=a[2])&&{src:l},i&2&&a[1]])),r(e,"svelte-2xi6dn",!0)},d(a){a&&g(e)}}}function Sl(s){return{c:w,m:w,p:w,d:w}}function Tl(s){let e,l,t={ctx:s,current:null,token:null,hasCatch:!0,pending:Sl,then:Nl,catch:Hl,value:2,error:3};return re(l=ue(s[0]),t),{c(){e=E(),t.block.c()},m(n,a){m(n,e,a),t.block.m(n,t.anchor=a),t.mount=()=>e.parentNode,t.anchor=e},p(n,[a]){s=n,t.ctx=s,a&1&&l!==(l=ue(s[0]))&&re(l,t)||sl(t,s,a)},i:w,o:w,d(n){n&&g(e),t.block.d(n),t.token=null,t=null}}}function Dl(s,e,l){const t=["src"];let n=se(e,t),{src:a=void 0}=e;return s.$$set=i=>{e=le(le({},e),Qe(i)),l(1,n=se(e,t)),"src"in i&&l(0,a=i.src)},[a,n]}class Ll extends q{constructor(e){super(),H(this,e,Dl,Tl,N,{src:0})}}function Bl(s){let e,l,t;return l=new Ll({props:{src:s[1]+s[0],alt:""}}),{c(){e=y("div"),K(l.$$.fragment),b(e,"class","container svelte-5cqjmr"),r(e,"table",s[2]==="table"),r(e,"gallery",s[2]==="gallery"),r(e,"selected",s[3])},m(n,a){m(n,e,a),Q(l,e,null),t=!0},p(n,[a]){const i={};a&3&&(i.src=n[1]+n[0]),l.$set(i),(!t||a&4)&&r(e,"table",n[2]==="table"),(!t||a&4)&&r(e,"gallery",n[2]==="gallery"),(!t||a&8)&&r(e,"selected",n[3])},i(n){t||(C(l.$$.fragment,n),t=!0)},o(n){S(l.$$.fragment,n),t=!1},d(n){n&&g(e),U(l)}}}function Fl(s,e,l){let{value:t}=e,{samples_dir:n}=e,{type:a}=e,{selected:i=!1}=e;return s.$$set=f=>{"value"in f&&l(0,t=f.value),"samples_dir"in f&&l(1,n=f.samples_dir),"type"in f&&l(2,a=f.type),"selected"in f&&l(3,i=f.selected)},[t,n,a,i]}class Rl extends q{constructor(e){super(),H(this,e,Fl,Bl,N,{value:0,samples_dir:1,type:2,selected:3})}}function Il(s){let e,l,t;return{c(){e=y("div"),l=M(s[0]),b(e,"class","svelte-1viwdyg"),Ye(()=>s[5].call(e)),r(e,"table",s[1]==="table"),r(e,"gallery",s[1]==="gallery"),r(e,"selected",s[2])},m(n,a){m(n,e,a),A(e,l),t=Je(e,s[5].bind(e)),s[6](e)},p(n,[a]){a&1&&T(l,n[0]),a&2&&r(e,"table",n[1]==="table"),a&2&&r(e,"gallery",n[1]==="gallery"),a&4&&r(e,"selected",n[2])},i:w,o:w,d(n){n&&g(e),t(),s[6](null)}}}function Pl(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e,i,f;function c(o,z){!o||!z||(f.style.setProperty("--local-text-width",`${z<150?z:200}px`),l(4,f.style.whiteSpace="unset",f))}pe(()=>{c(f,i)});function u(){i=this.clientWidth,l(3,i)}function h(o){Re[o?"unshift":"push"](()=>{f=o,l(4,f)})}return s.$$set=o=>{"value"in o&&l(0,t=o.value),"type"in o&&l(1,n=o.type),"selected"in o&&l(2,a=o.selected)},[t,n,a,i,f,u,h]}class Vl extends q{constructor(e){super(),H(this,e,Pl,Il,N,{value:0,type:1,selected:2})}}function El(s){let e,l;return{c(){e=y("div"),l=M(s[0]),b(e,"class","svelte-1ayixqk"),r(e,"table",s[1]==="table"),r(e,"gallery",s[1]==="gallery"),r(e,"selected",s[2])},m(t,n){m(t,e,n),A(e,l)},p(t,[n]){n&1&&T(l,t[0]),n&2&&r(e,"table",t[1]==="table"),n&2&&r(e,"gallery",t[1]==="gallery"),n&4&&r(e,"selected",t[2])},i:w,o:w,d(t){t&&g(e)}}}function Ol(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class Wl extends q{constructor(e){super(),H(this,e,Ol,El,N,{value:0,type:1,selected:2})}}function Zl(s){let e,l;return{c(){e=y("div"),l=M(s[2])},m(t,n){m(t,e,n),A(e,l)},p(t,n){n&4&&T(l,t[2])},i:w,o:w,d(t){t&&g(e)}}}function Gl(s){let e,l,t,n;function a(f){s[6](f)}let i={muted:!0,playsinline:!0,src:s[3]+s[2]};return s[4]!==void 0&&(i.node=s[4]),l=new il({props:i}),Re.push(()=>xe(l,"node",a)),l.$on("loadeddata",s[5]),l.$on("mouseover",function(){ae(s[4].play.bind(s[4]))&&s[4].play.bind(s[4]).apply(this,arguments)}),l.$on("mouseout",function(){ae(s[4].pause.bind(s[4]))&&s[4].pause.bind(s[4]).apply(this,arguments)}),{c(){e=y("div"),K(l.$$.fragment),b(e,"class","container svelte-1jmx6y1"),r(e,"table",s[0]==="table"),r(e,"gallery",s[0]==="gallery"),r(e,"selected",s[1])},m(f,c){m(f,e,c),Q(l,e,null),n=!0},p(f,c){s=f;const u={};c&12&&(u.src=s[3]+s[2]),!t&&c&16&&(t=!0,u.node=s[4],$e(()=>t=!1)),l.$set(u),(!n||c&1)&&r(e,"table",s[0]==="table"),(!n||c&1)&&r(e,"gallery",s[0]==="gallery"),(!n||c&2)&&r(e,"selected",s[1])},i(f){n||(C(l.$$.fragment,f),n=!0)},o(f){S(l.$$.fragment,f),n=!1},d(f){f&&g(e),U(l)}}}function Kl(s){let e,l,t,n;const a=[Gl,Zl],i=[];function f(c,u){return 0}return e=f(),l=i[e]=a[e](s),{c(){l.c(),t=E()},m(c,u){i[e].m(c,u),m(c,t,u),n=!0},p(c,[u]){l.p(c,u)},i(c){n||(C(l),n=!0)},o(c){S(l),n=!1},d(c){c&&g(t),i[e].d(c)}}}function Ql(s,e,l){let{type:t}=e,{selected:n=!1}=e,{value:a}=e,{samples_dir:i}=e,f;async function c(){l(4,f.muted=!0,f),l(4,f.playsInline=!0,f),l(4,f.controls=!1,f),f.setAttribute("muted",""),await f.play(),f.pause()}function u(h){f=h,l(4,f)}return s.$$set=h=>{"type"in h&&l(0,t=h.type),"selected"in h&&l(1,n=h.selected),"value"in h&&l(2,a=h.value),"samples_dir"in h&&l(3,i=h.samples_dir)},[t,n,a,i,f,c,u]}class Ul extends q{constructor(e){super(),H(this,e,Ql,Kl,N,{type:0,selected:1,value:2,samples_dir:3})}}function Xl(s){let e,l=(Array.isArray(s[0])?s[0].join(", "):s[0])+"",t;return{c(){e=y("div"),t=M(l),b(e,"class","svelte-rgtszb"),r(e,"table",s[1]==="table"),r(e,"gallery",s[1]==="gallery"),r(e,"selected",s[2])},m(n,a){m(n,e,a),A(e,t)},p(n,[a]){a&1&&l!==(l=(Array.isArray(n[0])?n[0].join(", "):n[0])+"")&&T(t,l),a&2&&r(e,"table",n[1]==="table"),a&2&&r(e,"gallery",n[1]==="gallery"),a&4&&r(e,"selected",n[2])},i:w,o:w,d(n){n&&g(e)}}}function Yl(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}let Jl=class extends q{constructor(e){super(),H(this,e,Yl,Xl,N,{value:0,type:1,selected:2})}};function me(s,e,l){const t=s.slice();return t[11]=e[l],t[13]=l,t}function ge(s,e,l){const t=s.slice();return t[14]=e[l],t[16]=l,t}function he(s){let e,l,t;function n(f,c){return typeof f[6]=="string"?xl:pl}let a=n(s),i=a(s);return{c(){e=y("div"),i.c(),b(e,"class","svelte-1cib1xd"),r(e,"table",s[1]==="table"),r(e,"gallery",s[1]==="gallery"),r(e,"selected",s[2])},m(f,c){m(f,e,c),i.m(e,null),l||(t=[I(e,"mouseenter",s[9]),I(e,"mouseleave",s[10])],l=!0)},p(f,c){a===(a=n(f))&&i?i.p(f,c):(i.d(1),i=a(f),i&&(i.c(),i.m(e,null))),c&2&&r(e,"table",f[1]==="table"),c&2&&r(e,"gallery",f[1]==="gallery"),c&4&&r(e,"selected",f[2])},d(f){f&&g(e),i.d(),l=!1,te(t)}}}function pl(s){let e,l,t=D(s[6].slice(0,3)),n=[];for(let i=0;i<t.length;i+=1)n[i]=ye(me(s,t,i));let a=s[0].length>3&&ke(s);return{c(){e=y("table");for(let i=0;i<n.length;i+=1)n[i].c();l=F(),a&&a.c(),b(e,"class"," svelte-1cib1xd")},m(i,f){m(i,e,f);for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(e,null);A(e,l),a&&a.m(e,null)},p(i,f){if(f&64){t=D(i[6].slice(0,3));let c;for(c=0;c<t.length;c+=1){const u=me(i,t,c);n[c]?n[c].p(u,f):(n[c]=ye(u),n[c].c(),n[c].m(e,l))}for(;c<n.length;c+=1)n[c].d(1);n.length=t.length}i[0].length>3?a?a.p(i,f):(a=ke(i),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},d(i){i&&g(e),P(n,i),a&&a.d()}}}function xl(s){let e;return{c(){e=M(s[6])},m(l,t){m(l,e,t)},p(l,t){t&64&&T(e,l[6])},d(l){l&&g(e)}}}function be(s){let e,l=s[14]+"",t;return{c(){e=y("td"),t=M(l),b(e,"class","svelte-1cib1xd")},m(n,a){m(n,e,a),A(e,t)},p(n,a){a&64&&l!==(l=n[14]+"")&&T(t,l)},d(n){n&&g(e)}}}function ve(s){let e;return{c(){e=y("td"),e.textContent="…",b(e,"class","svelte-1cib1xd")},m(l,t){m(l,e,t)},d(l){l&&g(e)}}}function ye(s){let e,l,t=D(s[11].slice(0,3)),n=[];for(let i=0;i<t.length;i+=1)n[i]=be(ge(s,t,i));let a=s[11].length>3&&ve();return{c(){e=y("tr");for(let i=0;i<n.length;i+=1)n[i].c();l=F(),a&&a.c()},m(i,f){m(i,e,f);for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(e,null);A(e,l),a&&a.m(e,null)},p(i,f){if(f&64){t=D(i[11].slice(0,3));let c;for(c=0;c<t.length;c+=1){const u=ge(i,t,c);n[c]?n[c].p(u,f):(n[c]=be(u),n[c].c(),n[c].m(e,l))}for(;c<n.length;c+=1)n[c].d(1);n.length=t.length}i[11].length>3?a||(a=ve(),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},d(i){i&&g(e),P(n,i),a&&a.d()}}}function ke(s){let e;return{c(){e=y("div"),b(e,"class","overlay svelte-1cib1xd"),r(e,"odd",s[3]%2!=0),r(e,"even",s[3]%2==0),r(e,"button",s[1]==="gallery")},m(l,t){m(l,e,t)},p(l,t){t&8&&r(e,"odd",l[3]%2!=0),t&8&&r(e,"even",l[3]%2==0),t&2&&r(e,"button",l[1]==="gallery")},d(l){l&&g(e)}}}function $l(s){let e,l=s[4]&&he(s);return{c(){l&&l.c(),e=E()},m(t,n){l&&l.m(t,n),m(t,e,n)},p(t,[n]){t[4]?l?l.p(t,n):(l=he(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:w,o:w,d(t){t&&g(e),l&&l.d(t)}}}function et(s,e,l){let t;el(s,ll,k=>l(8,t=k));let{value:n}=e,{samples_dir:a}=e,{type:i}=e,{selected:f=!1}=e,{index:c}=e,u=!1,h=n,o=Array.isArray(h);const z=()=>l(5,u=!0),_=()=>l(5,u=!1);return s.$$set=k=>{"value"in k&&l(0,n=k.value),"samples_dir"in k&&l(7,a=k.samples_dir),"type"in k&&l(1,i=k.type),"selected"in k&&l(2,f=k.selected),"index"in k&&l(3,c=k.index)},s.$$.update=()=>{s.$$.dirty&401&&!o&&typeof n=="string"&&/\.[a-zA-Z]+$/.test(n)&&fetch(a+n).then(k=>k.text()).then(k=>{try{if(n.endsWith("csv")){const d=k.split(`
`).slice(0,4).map(j=>j.split(",").slice(0,4).join(",")).join(`
`);l(6,h=al(d))}else if(n.endsWith("tsv")){const d=k.split(`
`).slice(0,4).map(j=>j.split("	").slice(0,4).join("	")).join(`
`);l(6,h=rl(d))}else throw new Error(t("dataframe.incorrect_format"));l(4,o=!0)}catch(d){console.error(d)}}).catch(k=>{l(6,h=n),l(4,o=!0)})},[n,i,f,c,o,u,h,a,t,z,_]}class lt extends q{constructor(e){super(),H(this,e,et,$l,N,{value:0,samples_dir:7,type:1,selected:2,index:3})}}function tt(s){let e,l;return{c(){e=y("div"),l=M(s[0]),b(e,"class","svelte-1ayixqk"),r(e,"table",s[1]==="table"),r(e,"gallery",s[1]==="gallery"),r(e,"selected",s[2])},m(t,n){m(t,e,n),A(e,l)},p(t,[n]){n&1&&T(l,t[0]),n&2&&r(e,"table",t[1]==="table"),n&2&&r(e,"gallery",t[1]==="gallery"),n&4&&r(e,"selected",t[2])},i:w,o:w,d(t){t&&g(e)}}}function nt(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class st extends q{constructor(e){super(),H(this,e,nt,tt,N,{value:0,type:1,selected:2})}}function it(s){let e;return{c(){e=y("div"),X(e,"background-color",s[0]),b(e,"class","svelte-h6ogpl"),r(e,"table",s[1]==="table"),r(e,"gallery",s[1]==="gallery"),r(e,"selected",s[2])},m(l,t){m(l,e,t)},p(l,[t]){t&1&&X(e,"background-color",l[0]),t&2&&r(e,"table",l[1]==="table"),t&2&&r(e,"gallery",l[1]==="gallery"),t&4&&r(e,"selected",l[2])},i:w,o:w,d(l){l&&g(e)}}}function at(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class ft extends q{constructor(e){super(),H(this,e,at,it,N,{value:0,type:1,selected:2})}}function ct(s){let e,l;return{c(){e=y("div"),l=M(s[0]),b(e,"class","svelte-1ayixqk"),r(e,"table",s[1]==="table"),r(e,"gallery",s[1]==="gallery"),r(e,"selected",s[2])},m(t,n){m(t,e,n),A(e,l)},p(t,[n]){n&1&&T(l,t[0]),n&2&&r(e,"table",t[1]==="table"),n&2&&r(e,"gallery",t[1]==="gallery"),n&4&&r(e,"selected",t[2])},i:w,o:w,d(t){t&&g(e)}}}function rt(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class ut extends q{constructor(e){super(),H(this,e,rt,ct,N,{value:0,type:1,selected:2})}}function ot(s){let e;return{c(){e=y("div"),b(e,"class","prose svelte-1ayixqk"),r(e,"table",s[1]==="table"),r(e,"gallery",s[1]==="gallery"),r(e,"selected",s[2])},m(l,t){m(l,e,t),e.innerHTML=s[0]},p(l,[t]){t&1&&(e.innerHTML=l[0]),t&2&&r(e,"table",l[1]==="table"),t&2&&r(e,"gallery",l[1]==="gallery"),t&4&&r(e,"selected",l[2])},i:w,o:w,d(l){l&&g(e)}}}function _t(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class dt extends q{constructor(e){super(),H(this,e,_t,ot,N,{value:0,type:1,selected:2})}}function mt(s){let e;return{c(){e=y("div"),b(e,"class","prose svelte-zvfedn"),r(e,"table",s[1]==="table"),r(e,"gallery",s[1]==="gallery"),r(e,"selected",s[2])},m(l,t){m(l,e,t),e.innerHTML=s[0]},p(l,[t]){t&1&&(e.innerHTML=l[0]),t&2&&r(e,"table",l[1]==="table"),t&2&&r(e,"gallery",l[1]==="gallery"),t&4&&r(e,"selected",l[2])},i:w,o:w,d(l){l&&g(e)}}}function gt(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class ht extends q{constructor(e){super(),H(this,e,gt,mt,N,{value:0,type:1,selected:2})}}function bt(s){let e,l;return{c(){e=y("pre"),l=M(s[0]),b(e,"class","svelte-agpzo2"),r(e,"table",s[1]==="table"),r(e,"gallery",s[1]==="gallery"),r(e,"selected",s[2])},m(t,n){m(t,e,n),A(e,l)},p(t,[n]){n&1&&T(l,t[0]),n&2&&r(e,"table",t[1]==="table"),n&2&&r(e,"gallery",t[1]==="gallery"),n&4&&r(e,"selected",t[2])},i:w,o:w,d(t){t&&g(e)}}}function vt(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class yt extends q{constructor(e){super(),H(this,e,vt,bt,N,{value:0,type:1,selected:2})}}function we(s,e,l){const t=s.slice();return t[3]=e[l],t}function Ae(s){let e,l,t,n=s[3]+"",a;return{c(){e=y("li"),l=y("code"),t=M("./"),a=M(n)},m(i,f){m(i,e,f),A(e,l),A(l,t),A(l,a)},p(i,f){f&1&&n!==(n=i[3]+"")&&T(a,n)},d(i){i&&g(e)}}}function je(s){let e;return{c(){e=y("li"),e.textContent="...",b(e,"class","extra svelte-4tf8f")},m(l,t){m(l,e,t)},d(l){l&&g(e)}}}function kt(s){let e,l,t=Array.isArray(s[0])&&s[0].length>3,n=D(Array.isArray(s[0])?s[0].slice(0,3):[s[0]]),a=[];for(let f=0;f<n.length;f+=1)a[f]=Ae(we(s,n,f));let i=t&&je();return{c(){e=y("ul");for(let f=0;f<a.length;f+=1)a[f].c();l=F(),i&&i.c(),b(e,"class","svelte-4tf8f"),r(e,"table",s[1]==="table"),r(e,"gallery",s[1]==="gallery"),r(e,"selected",s[2])},m(f,c){m(f,e,c);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(e,null);A(e,l),i&&i.m(e,null)},p(f,[c]){if(c&1){n=D(Array.isArray(f[0])?f[0].slice(0,3):[f[0]]);let u;for(u=0;u<n.length;u+=1){const h=we(f,n,u);a[u]?a[u].p(h,c):(a[u]=Ae(h),a[u].c(),a[u].m(e,l))}for(;u<a.length;u+=1)a[u].d(1);a.length=n.length}c&1&&(t=Array.isArray(f[0])&&f[0].length>3),t?i||(i=je(),i.c(),i.m(e,null)):i&&(i.d(1),i=null),c&2&&r(e,"table",f[1]==="table"),c&2&&r(e,"gallery",f[1]==="gallery"),c&4&&r(e,"selected",f[2])},i:w,o:w,d(f){f&&g(e),P(a,f),i&&i.d()}}}function wt(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class At extends q{constructor(e){super(),H(this,e,wt,kt,N,{value:0,type:1,selected:2})}}const G={dropdown:gl,checkbox:vl,checkboxgroup:wl,number:_l,slider:zl,radio:ql,image:Rl,textbox:Vl,audio:Wl,video:Ul,file:Jl,dataframe:lt,model3d:st,colorpicker:ft,timeseries:ut,markdown:dt,html:ht,code:yt,fileexplorer:At};function ze(s,e,l){const t=s.slice();return t[32]=e[l],t}function Ce(s,e,l){const t=s.slice();return t[35]=e[l],t[37]=l,t}function Me(s,e,l){const t=s.slice();t[0]=e[l].value,t[39]=e[l].component,t[42]=l;const n=t[1][t[42]];return t[40]=n,t}function qe(s,e,l){const t=s.slice();return t[43]=e[l],t}function He(s,e,l){const t=s.slice();return t[35]=e[l],t[37]=l,t}function jt(s){let e,l,t,n,a,i,f,c=D(s[3]),u=[];for(let _=0;_<c.length;_+=1)u[_]=Ne(qe(s,c,_));let h=D(s[15]),o=[];for(let _=0;_<h.length;_+=1)o[_]=De(Ce(s,h,_));const z=_=>S(o[_],1,1,()=>{o[_]=null});return{c(){e=y("div"),l=y("table"),t=y("thead"),n=y("tr");for(let _=0;_<u.length;_+=1)u[_].c();a=F(),i=y("tbody");for(let _=0;_<o.length;_+=1)o[_].c();b(n,"class","tr-head svelte-13hsdno"),b(l,"tabindex","0"),b(l,"role","grid"),b(l,"class","svelte-13hsdno"),b(e,"class","table-wrap svelte-13hsdno")},m(_,k){m(_,e,k),A(e,l),A(l,t),A(t,n);for(let d=0;d<u.length;d+=1)u[d]&&u[d].m(n,null);A(l,a),A(l,i);for(let d=0;d<o.length;d+=1)o[d]&&o[d].m(i,null);f=!0},p(_,k){if(k[0]&8){c=D(_[3]);let d;for(d=0;d<c.length;d+=1){const j=qe(_,c,d);u[d]?u[d].p(j,k):(u[d]=Ne(j),u[d].c(),u[d].m(n,null))}for(;d<u.length;d+=1)u[d].d(1);u.length=c.length}if(k[0]&1756291){h=D(_[15]);let d;for(d=0;d<h.length;d+=1){const j=Ce(_,h,d);o[d]?(o[d].p(j,k),C(o[d],1)):(o[d]=De(j),o[d].c(),C(o[d],1),o[d].m(i,null))}for(O(),d=h.length;d<o.length;d+=1)z(d);W()}},i(_){if(!f){for(let k=0;k<h.length;k+=1)C(o[k]);f=!0}},o(_){o=o.filter(Boolean);for(let k=0;k<o.length;k+=1)S(o[k]);f=!1},d(_){_&&g(e),P(u,_),P(o,_)}}}function zt(s){let e,l,t=D(s[12]),n=[];for(let i=0;i<t.length;i+=1)n[i]=Be(He(s,t,i));const a=i=>S(n[i],1,1,()=>{n[i]=null});return{c(){e=y("div");for(let i=0;i<n.length;i+=1)n[i].c();b(e,"class","gallery svelte-13hsdno")},m(i,f){m(i,e,f);for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(e,null);l=!0},p(i,f){if(f[0]&1760387){t=D(i[12]);let c;for(c=0;c<t.length;c+=1){const u=He(i,t,c);n[c]?(n[c].p(u,f),C(n[c],1)):(n[c]=Be(u),n[c].c(),C(n[c],1),n[c].m(e,null))}for(O(),c=t.length;c<n.length;c+=1)a(c);W()}},i(i){if(!l){for(let f=0;f<t.length;f+=1)C(n[f]);l=!0}},o(i){n=n.filter(Boolean);for(let f=0;f<n.length;f+=1)S(n[f]);l=!1},d(i){i&&g(e),P(n,i)}}}function Ne(s){let e,l=s[43]+"",t,n;return{c(){e=y("th"),t=M(l),n=F(),b(e,"class","svelte-13hsdno")},m(a,i){m(a,e,i),A(e,t),A(e,n)},p(a,i){i[0]&8&&l!==(l=a[43]+"")&&T(t,l)},d(a){a&&g(e)}}}function Se(s){let e,l,t,n;var a=s[39];function i(f){return{props:{value:f[0],samples_dir:f[17],type:"table",selected:f[14]===f[37],index:f[37]}}}return a&&(l=p(a,i(s))),{c(){e=y("td"),l&&K(l.$$.fragment),X(e,"max-width",s[40]==="textbox"?"35ch":"auto"),b(e,"class",t=ce(s[40])+" svelte-13hsdno")},m(f,c){m(f,e,c),l&&Q(l,e,null),n=!0},p(f,c){const u={};if(c[0]&32768&&(u.value=f[0]),c[0]&16384&&(u.selected=f[14]===f[37]),c[0]&32768&&a!==(a=f[39])){if(l){O();const h=l;S(h.$$.fragment,1,0,()=>{U(h,1)}),W()}a?(l=p(a,i(f)),K(l.$$.fragment),C(l.$$.fragment,1),Q(l,e,null)):l=null}else a&&l.$set(u);(!n||c[0]&2)&&X(e,"max-width",f[40]==="textbox"?"35ch":"auto"),(!n||c[0]&2&&t!==(t=ce(f[40])+" svelte-13hsdno"))&&b(e,"class",t)},i(f){n||(l&&C(l.$$.fragment,f),n=!0)},o(f){l&&S(l.$$.fragment,f),n=!1},d(f){f&&g(e),l&&U(l)}}}function Te(s){let e,l,t=s[40]!==void 0&&G[s[40]]!==void 0&&Se(s);return{c(){t&&t.c(),e=E()},m(n,a){t&&t.m(n,a),m(n,e,a),l=!0},p(n,a){n[40]!==void 0&&G[n[40]]!==void 0?t?(t.p(n,a),a[0]&2&&C(t,1)):(t=Se(n),t.c(),C(t,1),t.m(e.parentNode,e)):t&&(O(),S(t,1,1,()=>{t=null}),W())},i(n){l||(C(t),l=!0)},o(n){S(t),l=!1},d(n){n&&g(e),t&&t.d(n)}}}function De(s){let e,l,t,n,a,i=D(s[35]),f=[];for(let o=0;o<i.length;o+=1)f[o]=Te(Me(s,i,o));const c=o=>S(f[o],1,1,()=>{f[o]=null});function u(){return s[28](s[37])}function h(){return s[29](s[37])}return{c(){e=y("tr");for(let o=0;o<f.length;o+=1)f[o].c();l=F(),b(e,"class","tr-body svelte-13hsdno")},m(o,z){m(o,e,z);for(let _=0;_<f.length;_+=1)f[_]&&f[_].m(e,null);A(e,l),t=!0,n||(a=[I(e,"click",u),I(e,"mouseenter",h),I(e,"mouseleave",s[30])],n=!0)},p(o,z){if(s=o,z[0]&180226){i=D(s[35]);let _;for(_=0;_<i.length;_+=1){const k=Me(s,i,_);f[_]?(f[_].p(k,z),C(f[_],1)):(f[_]=Te(k),f[_].c(),C(f[_],1),f[_].m(e,l))}for(O(),_=i.length;_<f.length;_+=1)c(_);W()}},i(o){if(!t){for(let z=0;z<i.length;z+=1)C(f[z]);t=!0}},o(o){f=f.filter(Boolean);for(let z=0;z<f.length;z+=1)S(f[z]);t=!1},d(o){o&&g(e),P(f,o),n=!1,te(a)}}}function Le(s){let e,l,t;var n=s[15][0][0].component;function a(i){return{props:{value:i[35][0],samples_dir:i[17],type:"gallery",selected:i[14]===i[37],index:i[37]}}}return n&&(e=p(n,a(s))),{c(){e&&K(e.$$.fragment),l=E()},m(i,f){e&&Q(e,i,f),m(i,l,f),t=!0},p(i,f){const c={};if(f[0]&4096&&(c.value=i[35][0]),f[0]&16384&&(c.selected=i[14]===i[37]),f[0]&32768&&n!==(n=i[15][0][0].component)){if(e){O();const u=e;S(u.$$.fragment,1,0,()=>{U(u,1)}),W()}n?(e=p(n,a(i)),K(e.$$.fragment),C(e.$$.fragment,1),Q(e,l.parentNode,l)):e=null}else n&&e.$set(c)},i(i){t||(e&&C(e.$$.fragment,i),t=!0)},o(i){e&&S(e.$$.fragment,i),t=!1},d(i){i&&g(l),e&&U(e,i)}}}function Be(s){let e,l=Object.keys(G).includes(s[1][0])&&G[s[1][0]],t,n,a,i,f=l&&Le(s);function c(){return s[25](s[37],s[35])}function u(){return s[26](s[37])}return{c(){e=y("button"),f&&f.c(),t=F(),b(e,"class","gallery-item svelte-13hsdno")},m(h,o){m(h,e,o),f&&f.m(e,null),A(e,t),n=!0,a||(i=[I(e,"click",c),I(e,"mouseenter",u),I(e,"mouseleave",s[27])],a=!0)},p(h,o){s=h,o[0]&2&&(l=Object.keys(G).includes(s[1][0])&&G[s[1][0]]),l?f?(f.p(s,o),o[0]&2&&C(f,1)):(f=Le(s),f.c(),C(f,1),f.m(e,t)):f&&(O(),S(f,1,1,()=>{f=null}),W())},i(h){n||(C(f),n=!0)},o(h){S(f),n=!1},d(h){h&&g(e),f&&f.d(),a=!1,te(i)}}}function Ct(s){let e,l,t=D(s[13]),n=[];for(let a=0;a<t.length;a+=1)n[a]=Fe(ze(s,t,a));return{c(){e=y("div"),l=M(`Pages:
			`);for(let a=0;a<n.length;a+=1)n[a].c();b(e,"class","paginate svelte-13hsdno")},m(a,i){m(a,e,i),A(e,l);for(let f=0;f<n.length;f+=1)n[f]&&n[f].m(e,null)},p(a,i){if(i[0]&10240){t=D(a[13]);let f;for(f=0;f<t.length;f+=1){const c=ze(a,t,f);n[f]?n[f].p(c,i):(n[f]=Fe(c),n[f].c(),n[f].m(e,null))}for(;f<n.length;f+=1)n[f].d(1);n.length=t.length}},d(a){a&&g(e),P(n,a)}}}function Mt(s){let e,l=s[32]+1+"",t,n,a,i;function f(){return s[31](s[32])}return{c(){e=y("button"),t=M(l),n=F(),b(e,"class","svelte-13hsdno"),r(e,"current-page",s[11]===s[32])},m(c,u){m(c,e,u),A(e,t),A(e,n),a||(i=I(e,"click",f),a=!0)},p(c,u){s=c,u[0]&8192&&l!==(l=s[32]+1+"")&&T(t,l),u[0]&10240&&r(e,"current-page",s[11]===s[32])},d(c){c&&g(e),a=!1,i()}}}function qt(s){let e;return{c(){e=y("div"),e.textContent="..."},m(l,t){m(l,e,t)},p:w,d(l){l&&g(e)}}}function Fe(s){let e;function l(a,i){return a[32]===-1?qt:Mt}let t=l(s),n=t(s);return{c(){n.c(),e=E()},m(a,i){n.m(a,i),m(a,e,i)},p(a,i){t===(t=l(a))&&n?n.p(a,i):(n.d(1),n=t(a),n&&(n.c(),n.m(e.parentNode,e)))},d(a){a&&g(e),n.d(a)}}}function Ht(s){let e,l,t,n,a,i,f,c,u,h,o;const z=[zt,jt],_=[];function k(j,L){return j[16]?0:1}f=k(s),c=_[f]=z[f](s);let d=s[18]&&Ct(s);return{c(){e=y("div"),l=fe("svg"),t=fe("path"),n=F(),a=M(s[2]),i=F(),c.c(),u=F(),d&&d.c(),h=E(),b(t,"fill","currentColor"),b(t,"d","M10 6h18v2H10zm0 18h18v2H10zm0-9h18v2H10zm-6 0h2v2H4zm0-9h2v2H4zm0 18h2v2H4z"),b(l,"xmlns","http://www.w3.org/2000/svg"),b(l,"xmlns:xlink","http://www.w3.org/1999/xlink"),b(l,"aria-hidden","true"),b(l,"role","img"),b(l,"width","1em"),b(l,"height","1em"),b(l,"preserveAspectRatio","xMidYMid meet"),b(l,"viewBox","0 0 32 32"),b(l,"class","svelte-13hsdno"),b(e,"class","label svelte-13hsdno")},m(j,L){m(j,e,L),A(e,l),A(l,t),A(e,n),A(e,a),m(j,i,L),_[f].m(j,L),m(j,u,L),d&&d.m(j,L),m(j,h,L),o=!0},p(j,L){(!o||L[0]&4)&&T(a,j[2]);let R=f;f=k(j),f===R?_[f].p(j,L):(O(),S(_[R],1,1,()=>{_[R]=null}),W(),c=_[f],c?c.p(j,L):(c=_[f]=z[f](j),c.c()),C(c,1),c.m(u.parentNode,u)),j[18]&&d.p(j,L)},i(j){o||(C(c),o=!0)},o(j){S(c),o=!1},d(j){j&&(g(e),g(i),g(u),g(h)),_[f].d(j),d&&d.d(j)}}}function Nt(s){let e,l;return e=new tl({props:{visible:s[6],padding:!1,elem_id:s[4],elem_classes:s[5],scale:s[8],min_width:s[9],allow_overflow:!1,container:!1,$$slots:{default:[Ht]},$$scope:{ctx:s}}}),{c(){K(e.$$.fragment)},m(t,n){Q(e,t,n),l=!0},p(t,n){const a={};n[0]&64&&(a.visible=t[6]),n[0]&16&&(a.elem_id=t[4]),n[0]&32&&(a.elem_classes=t[5]),n[0]&256&&(a.scale=t[8]),n[0]&512&&(a.min_width=t[9]),n[0]&130191|n[1]&32768&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){l||(C(e.$$.fragment,t),l=!0)},o(t){S(e.$$.fragment,t),l=!1},d(t){U(e,t)}}}function St(s,e,l){let t,n,{components:a}=e,{label:i="Examples"}=e,{headers:f}=e,{samples:c}=e,{elem_id:u=""}=e,{elem_classes:h=[]}=e,{visible:o=!0}=e,{value:z=null}=e,{root:_}=e,{root_url:k}=e,{samples_per_page:d=10}=e,{scale:j=null}=e,{min_width:L=void 0}=e,{gradio:R}=e,Ie=nl(null,_,k),Z=0,ne=c.length>d,Y,J,V=[],x=-1;function $(v){l(14,x=v)}function ee(){l(14,x=-1)}const Pe=(v,B)=>{l(0,z=v+Z*d),R.dispatch("click",z),R.dispatch("select",{index:z,value:B})},Ve=v=>$(v),Ee=()=>ee(),Oe=v=>{l(0,z=v+Z*d),R.dispatch("click",z)},We=v=>$(v),Ze=()=>ee(),Ge=v=>l(11,Z=v);return s.$$set=v=>{"components"in v&&l(1,a=v.components),"label"in v&&l(2,i=v.label),"headers"in v&&l(3,f=v.headers),"samples"in v&&l(21,c=v.samples),"elem_id"in v&&l(4,u=v.elem_id),"elem_classes"in v&&l(5,h=v.elem_classes),"visible"in v&&l(6,o=v.visible),"value"in v&&l(0,z=v.value),"root"in v&&l(22,_=v.root),"root_url"in v&&l(23,k=v.root_url),"samples_per_page"in v&&l(7,d=v.samples_per_page),"scale"in v&&l(8,j=v.scale),"min_width"in v&&l(9,L=v.min_width),"gradio"in v&&l(10,R=v.gradio)},s.$$.update=()=>{s.$$.dirty[0]&2&&l(16,t=a.length<2),s.$$.dirty[0]&18884736&&(ne?(l(13,V=[]),l(12,Y=c.slice(Z*d,(Z+1)*d)),l(24,J=Math.ceil(c.length/d)),[0,Z,J-1].forEach(v=>{for(let B=v-2;B<=v+2;B++)B>=0&&B<J&&!V.includes(B)&&(V.length>0&&B-V[V.length-1]>1&&V.push(-1),V.push(B))})):l(12,Y=c.slice())),s.$$.dirty[0]&4098&&l(15,n=Y.map(v=>v.map((B,Ke)=>({value:B,component:G[a[Ke]]}))))},[z,a,i,f,u,h,o,d,j,L,R,Z,Y,V,x,n,t,Ie,ne,$,ee,c,_,k,J,Pe,Ve,Ee,Oe,We,Ze,Ge]}class Tt extends q{constructor(e){super(),H(this,e,St,Nt,N,{components:1,label:2,headers:3,samples:21,elem_id:4,elem_classes:5,visible:6,value:0,root:22,root_url:23,samples_per_page:7,scale:8,min_width:9,gradio:10},null,[-1,-1])}}const Vt=Tt;export{Vt as default};
//# sourceMappingURL=index-cbe23029.js.map
