import{S as D,e as E,s as G,I,a9 as M,m as S,o as p,g as h,N as y,h as v,j as k,J as L,aH as O,ab as Q,ac as R,ad as U,w,u as C,k as j,aF as F,a0 as H,C as X,Y as P,Q as J,aJ as N,t as Y,p as V,x as z,R as W,U as Z,F as x,G as $,X as ee,H as le}from"./index-9ac29d30.js";function A(l,e,s){const t=l.slice();return t[14]=e[s],t[16]=s,t}function te(l){let e,s=l[14].name+"",t,_,c,n,i;function o(){return l[12](l[14],l[16])}return{c(){e=S("button"),t=Y(s),_=p(),h(e,"id",c=l[14].elem_id?l[14].elem_id+"-button":null),h(e,"class","svelte-kqij2n")},m(b,r){v(b,e,r),k(e,t),k(e,_),n||(i=V(e,"click",o),n=!0)},p(b,r){l=b,r&8&&s!==(s=l[14].name+"")&&z(t,s),r&8&&c!==(c=l[14].elem_id?l[14].elem_id+"-button":null)&&h(e,"id",c)},d(b){b&&j(e),n=!1,i()}}}function se(l){let e,s=l[14].name+"",t,_,c;return{c(){e=S("button"),t=Y(s),_=p(),h(e,"class","selected svelte-kqij2n"),h(e,"id",c=l[14].elem_id?l[14].elem_id+"-button":null)},m(n,i){v(n,e,i),k(e,t),k(e,_)},p(n,i){i&8&&s!==(s=n[14].name+"")&&z(t,s),i&8&&c!==(c=n[14].elem_id?n[14].elem_id+"-button":null)&&h(e,"id",c)},d(n){n&&j(e)}}}function B(l,e){let s,t;function _(i,o){return i[14].id===i[4]?se:te}let c=_(e),n=c(e);return{key:l,first:null,c(){s=J(),n.c(),t=J(),this.first=s},m(i,o){v(i,s,o),n.m(i,o),v(i,t,o)},p(i,o){e=i,c===(c=_(e))&&n?n.p(e,o):(n.d(1),n=c(e),n&&(n.c(),n.m(t.parentNode,t)))},d(i){i&&(j(s),j(t)),n.d(i)}}}function ne(l){let e,s,t=[],_=new Map,c,n,i,o=I(l[3]);const b=a=>a[14].id;for(let a=0;a<o.length;a+=1){let m=A(l,o,a),u=b(m);_.set(u,t[a]=B(u,m))}const r=l[11].default,f=M(r,l,l[10],null);return{c(){e=S("div"),s=S("div");for(let a=0;a<t.length;a+=1)t[a].c();c=p(),f&&f.c(),h(s,"class","tab-nav scroll-hide svelte-kqij2n"),h(e,"class",n="tabs "+l[2].join(" ")+" svelte-kqij2n"),h(e,"id",l[1]),y(e,"hide",!l[0])},m(a,m){v(a,e,m),k(e,s);for(let u=0;u<t.length;u+=1)t[u]&&t[u].m(s,null);k(e,c),f&&f.m(e,null),i=!0},p(a,[m]){m&408&&(o=I(a[3]),t=L(t,m,b,1,a,o,_,s,O,B,null,A)),f&&f.p&&(!i||m&1024)&&Q(f,r,a,a[10],i?U(r,a[10],m,null):R(a[10]),null),(!i||m&4&&n!==(n="tabs "+a[2].join(" ")+" svelte-kqij2n"))&&h(e,"class",n),(!i||m&2)&&h(e,"id",a[1]),(!i||m&5)&&y(e,"hide",!a[0])},i(a){i||(w(f,a),i=!0)},o(a){C(f,a),i=!1},d(a){a&&j(e);for(let m=0;m<t.length;m+=1)t[m].d();f&&f.d(a)}}}const ie={};function ae(l,e,s){let t,_,{$$slots:c={},$$scope:n}=e,{visible:i=!0}=e,{elem_id:o="id"}=e,{elem_classes:b=[]}=e,{selected:r}=e,f=[];const a=F(!1);H(l,a,d=>s(4,_=d));const m=F(0);H(l,m,d=>s(13,t=d));const u=X();P(ie,{register_tab:d=>(f.push({name:d.name,id:d.id,elem_id:d.elem_id}),a.update(g=>g??d.id),s(3,f),f.length-1),unregister_tab:d=>{const g=f.findIndex(q=>q.id===d.id);f.splice(g,1),a.update(q=>q===d.id?f[g]?.id||f[f.length-1]?.id:q)},selected_tab:a,selected_tab_index:m});function T(d){s(9,r=d),N(a,_=d,_),N(m,t=f.findIndex(g=>g.id===d),t),u("change")}const K=(d,g)=>{T(d.id),u("select",{value:d.name,index:g})};return l.$$set=d=>{"visible"in d&&s(0,i=d.visible),"elem_id"in d&&s(1,o=d.elem_id),"elem_classes"in d&&s(2,b=d.elem_classes),"selected"in d&&s(9,r=d.selected),"$$scope"in d&&s(10,n=d.$$scope)},l.$$.update=()=>{l.$$.dirty&512&&r!==null&&T(r)},[i,o,b,f,_,a,m,u,T,r,n,c,K]}class _e extends D{constructor(e){super(),E(this,e,ae,ne,G,{visible:0,elem_id:1,elem_classes:2,selected:9})}}function ce(l){let e;const s=l[5].default,t=M(s,l,l[9],null);return{c(){t&&t.c()},m(_,c){t&&t.m(_,c),e=!0},p(_,c){t&&t.p&&(!e||c&512)&&Q(t,s,_,_[9],e?U(s,_[9],c,null):R(_[9]),null)},i(_){e||(w(t,_),e=!0)},o(_){C(t,_),e=!1},d(_){t&&t.d(_)}}}function de(l){let e,s,t;function _(n){l[6](n)}let c={visible:l[1],elem_id:l[2],elem_classes:l[3],$$slots:{default:[ce]},$$scope:{ctx:l}};return l[0]!==void 0&&(c.selected=l[0]),e=new _e({props:c}),W.push(()=>Z(e,"selected",_)),e.$on("change",l[7]),e.$on("select",l[8]),{c(){x(e.$$.fragment)},m(n,i){$(e,n,i),t=!0},p(n,[i]){const o={};i&2&&(o.visible=n[1]),i&4&&(o.elem_id=n[2]),i&8&&(o.elem_classes=n[3]),i&512&&(o.$$scope={dirty:i,ctx:n}),!s&&i&1&&(s=!0,o.selected=n[0],ee(()=>s=!1)),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){C(e.$$.fragment,n),t=!1},d(n){le(e,n)}}}function ue(l,e,s){let{$$slots:t={},$$scope:_}=e;const c=X();let{visible:n=!0}=e,{elem_id:i=""}=e,{elem_classes:o=[]}=e,{selected:b}=e,{gradio:r}=e;function f(u){b=u,s(0,b)}const a=()=>r.dispatch("change"),m=u=>r.dispatch("select",u.detail);return l.$$set=u=>{"visible"in u&&s(1,n=u.visible),"elem_id"in u&&s(2,i=u.elem_id),"elem_classes"in u&&s(3,o=u.elem_classes),"selected"in u&&s(0,b=u.selected),"gradio"in u&&s(4,r=u.gradio),"$$scope"in u&&s(9,_=u.$$scope)},l.$$.update=()=>{l.$$.dirty&1&&c("prop_change",{selected:b})},[b,n,i,o,r,t,f,a,m,_]}class oe extends D{constructor(e){super(),E(this,e,ue,de,G,{visible:1,elem_id:2,elem_classes:3,selected:0,gradio:4})}}const me=oe;export{me as S,ie as T};
//# sourceMappingURL=StaticTabs-cf23674d.js.map
