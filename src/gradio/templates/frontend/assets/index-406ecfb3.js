import{S as v,e as C,s as I,m as H,F as w,g as r,K as T,h as K,G as j,w as d,u as b,k as M,H as D,C as z,au as J,a0 as k,D as L,a7 as N,a9 as q,ab as A,ac as B,ad as E}from"./index-a959df42.js";import{T as O}from"./StaticTabs-30305e19.js";import{S as P}from"./StaticColumn-e8db0143.js";function Q(a){let e;const l=a[8].default,t=q(l,a,a[9],null);return{c(){t&&t.c()},m(s,n){t&&t.m(s,n),e=!0},p(s,n){t&&t.p&&(!e||n&512)&&A(t,l,s,s[9],e?E(l,s[9],n,null):B(s[9]),null)},i(s){e||(d(t,s),e=!0)},o(s){b(t,s),e=!1},d(s){t&&t.d(s)}}}function R(a){let e,l,t,s;return l=new P({props:{$$slots:{default:[Q]},$$scope:{ctx:a}}}),{c(){e=H("div"),w(l.$$.fragment),r(e,"id",a[0]),r(e,"class",t="tabitem "+a[1].join(" ")+" svelte-19hvt5v"),T(e,"display",a[3]===a[2]?"block":"none")},m(n,c){K(n,e,c),j(l,e,null),s=!0},p(n,[c]){const m={};c&512&&(m.$$scope={dirty:c,ctx:n}),l.$set(m),(!s||c&1)&&r(e,"id",n[0]),(!s||c&2&&t!==(t="tabitem "+n[1].join(" ")+" svelte-19hvt5v"))&&r(e,"class",t),c&12&&T(e,"display",n[3]===n[2]?"block":"none")},i(n){s||(d(l.$$.fragment,n),s=!0)},o(n){b(l.$$.fragment,n),s=!1},d(n){n&&M(e),D(l)}}}function U(a,e,l){let t,s,{$$slots:n={},$$scope:c}=e,{elem_id:m=""}=e,{elem_classes:o=[]}=e,{name:f}=e,{id:u={}}=e;const i=z(),{register_tab:F,unregister_tab:G,selected_tab:g,selected_tab_index:h}=J(O);k(a,g,_=>l(3,s=_)),k(a,h,_=>l(7,t=_));let S=F({name:f,id:u,elem_id:m});return L(()=>()=>G({name:f,id:u,elem_id:m})),a.$$set=_=>{"elem_id"in _&&l(0,m=_.elem_id),"elem_classes"in _&&l(1,o=_.elem_classes),"name"in _&&l(6,f=_.name),"id"in _&&l(2,u=_.id),"$$scope"in _&&l(9,c=_.$$scope)},a.$$.update=()=>{a.$$.dirty&192&&t===S&&N().then(()=>i("select",{value:f,index:S}))},[m,o,u,s,g,h,f,t,n,c]}class V extends v{constructor(e){super(),C(this,e,U,R,I,{elem_id:0,elem_classes:1,name:6,id:2})}}function W(a){let e;const l=a[5].default,t=q(l,a,a[7],null);return{c(){t&&t.c()},m(s,n){t&&t.m(s,n),e=!0},p(s,n){t&&t.p&&(!e||n&128)&&A(t,l,s,s[7],e?E(l,s[7],n,null):B(s[7]),null)},i(s){e||(d(t,s),e=!0)},o(s){b(t,s),e=!1},d(s){t&&t.d(s)}}}function X(a){let e,l;return e=new V({props:{elem_id:a[0],elem_classes:a[1],name:a[2],id:a[3],$$slots:{default:[W]},$$scope:{ctx:a}}}),e.$on("select",a[6]),{c(){w(e.$$.fragment)},m(t,s){j(e,t,s),l=!0},p(t,[s]){const n={};s&1&&(n.elem_id=t[0]),s&2&&(n.elem_classes=t[1]),s&4&&(n.name=t[2]),s&8&&(n.id=t[3]),s&128&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){b(e.$$.fragment,t),l=!1},d(t){D(e,t)}}}function Y(a,e,l){let{$$slots:t={},$$scope:s}=e,{elem_id:n=""}=e,{elem_classes:c=[]}=e,{label:m}=e,{id:o}=e,{gradio:f}=e;const u=({detail:i})=>f.dispatch("select",i);return a.$$set=i=>{"elem_id"in i&&l(0,n=i.elem_id),"elem_classes"in i&&l(1,c=i.elem_classes),"label"in i&&l(2,m=i.label),"id"in i&&l(3,o=i.id),"gradio"in i&&l(4,f=i.gradio),"$$scope"in i&&l(7,s=i.$$scope)},[n,c,m,o,f,t,u,s]}class Z extends v{constructor(e){super(),C(this,e,Y,X,I,{elem_id:0,elem_classes:1,label:2,id:3,gradio:4})}}const $=Z;export{$ as default};
//# sourceMappingURL=index-406ecfb3.js.map
