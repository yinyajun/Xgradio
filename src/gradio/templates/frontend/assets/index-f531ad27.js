import{S as ie,e as se,s as oe,F as q,G as E,w,u as I,H as N,a0 as ue,a1 as fe,Z as _e,ae as re,o as z,m as S,g as d,h as b,V as me,W as ce,r as he,v as ge,k as v,I as K,Q as de,M as L,N as A,j as O,n as J,O as p,t as be,K as P,p as j,x as ve,B as ke}from"./index-a959df42.js";import{B as we,n as R}from"./Button-fb0eed2f.js";import{B as Ie}from"./BlockLabel-5f053d92.js";import{E as Be}from"./Empty-3abf203a.js";import{I as x}from"./Image-d002fc8a.js";function T(n,e,t){const l=n.slice();return l[29]=e[t][0],l[12]=e[t][1],l[31]=t,l}function U(n,e,t){const l=n.slice();return l[32]=e[t][0],l[12]=e[t][1],l[31]=t,l}function Me(n){let e,t,l,a,i,s,_=K(n[13]?n[13][1]:[]),m=[];for(let u=0;u<_.length;u+=1)m[u]=X(U(n,_,u));let c=n[4]&&n[13]&&Y(n);return{c(){e=S("div"),t=S("img"),a=z();for(let u=0;u<m.length;u+=1)m[u].c();i=z(),c&&c.c(),s=de(),d(t,"class","base-image svelte-m3v3vb"),L(t.src,l=n[13]?n[13][0].data:null)||d(t,"src",l),d(t,"alt","uploaded file"),A(t,"fit-height",n[5]),d(e,"class","image-container svelte-m3v3vb")},m(u,h){b(u,e,h),O(e,t),O(e,a);for(let r=0;r<m.length;r+=1)m[r]&&m[r].m(e,null);b(u,i,h),c&&c.m(u,h),b(u,s,h)},p(u,h){if(h[0]&8192&&!L(t.src,l=u[13]?u[13][0].data:null)&&d(t,"src",l),h[0]&32&&A(t,"fit-height",u[5]),h[0]&24704){_=K(u[13]?u[13][1]:[]);let r;for(r=0;r<_.length;r+=1){const k=U(u,_,r);m[r]?m[r].p(k,h):(m[r]=X(k),m[r].c(),m[r].m(e,null))}for(;r<m.length;r+=1)m[r].d(1);m.length=_.length}u[4]&&u[13]?c?c.p(u,h):(c=Y(u),c.c(),c.m(s.parentNode,s)):c&&(c.d(1),c=null)},i:J,o:J,d(u){u&&(v(e),v(i),v(s)),p(m,u),c&&c.d(u)}}}function Ae(n){let e,t;return e=new Be({props:{size:"large",unpadded_box:!0,$$slots:{default:[Se]},$$scope:{ctx:n}}}),{c(){q(e.$$.fragment)},m(l,a){E(e,l,a),t=!0},p(l,a){const i={};a[1]&8&&(i.$$scope={dirty:a,ctx:l}),e.$set(i)},i(l){t||(w(e.$$.fragment,l),t=!0)},o(l){I(e.$$.fragment,l),t=!1},d(l){N(e,l)}}}function X(n){let e,t,l,a;return{c(){e=S("img"),d(e,"alt",t="segmentation mask identifying "+n[12]+" within the uploaded file"),d(e,"class","mask fit-height svelte-m3v3vb"),L(e.src,l=n[32].data)||d(e,"src",l),d(e,"style",a=n[7]&&n[12]in n[7]?null:`filter: hue-rotate(${Math.round(n[31]*360/n[13][1].length)}deg);`),A(e,"active",n[14]==n[12]),A(e,"inactive",n[14]!=n[12]&&n[14]!=null)},m(i,s){b(i,e,s)},p(i,s){s[0]&8192&&t!==(t="segmentation mask identifying "+i[12]+" within the uploaded file")&&d(e,"alt",t),s[0]&8192&&!L(e.src,l=i[32].data)&&d(e,"src",l),s[0]&8320&&a!==(a=i[7]&&i[12]in i[7]?null:`filter: hue-rotate(${Math.round(i[31]*360/i[13][1].length)}deg);`)&&d(e,"style",a),s[0]&24576&&A(e,"active",i[14]==i[12]),s[0]&24576&&A(e,"inactive",i[14]!=i[12]&&i[14]!=null)},d(i){i&&v(e)}}}function Y(n){let e,t=K(n[13][1]),l=[];for(let a=0;a<t.length;a+=1)l[a]=y(T(n,t,a));return{c(){e=S("div");for(let a=0;a<l.length;a+=1)l[a].c();d(e,"class","legend svelte-m3v3vb")},m(a,i){b(a,e,i);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(e,null)},p(a,i){if(i[0]&467072){t=K(a[13][1]);let s;for(s=0;s<t.length;s+=1){const _=T(a,t,s);l[s]?l[s].p(_,i):(l[s]=y(_),l[s].c(),l[s].m(e,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=t.length}},d(a){a&&v(e),p(l,a)}}}function y(n){let e,t=n[12]+"",l,a,i,s;function _(){return n[24](n[12])}function m(){return n[25](n[12])}function c(){return n[28](n[31])}return{c(){e=S("button"),l=be(t),a=z(),d(e,"class","legend-item svelte-m3v3vb"),P(e,"background-color",n[7]&&n[12]in n[7]?n[7][n[12]]+"88":`hsla(${Math.round(n[31]*360/n[13][1].length)}, 100%, 50%, 0.3)`)},m(u,h){b(u,e,h),O(e,l),O(e,a),i||(s=[j(e,"mouseover",_),j(e,"focus",m),j(e,"mouseout",n[26]),j(e,"blur",n[27]),j(e,"click",c)],i=!0)},p(u,h){n=u,h[0]&8192&&t!==(t=n[12]+"")&&ve(l,t),h[0]&8320&&P(e,"background-color",n[7]&&n[12]in n[7]?n[7][n[12]]+"88":`hsla(${Math.round(n[31]*360/n[13][1].length)}, 100%, 50%, 0.3)`)},d(u){u&&v(e),i=!1,ke(s)}}}function Se(n){let e,t;return e=new x({}),{c(){q(e.$$.fragment)},m(l,a){E(e,l,a),t=!0},i(l){t||(w(e.$$.fragment,l),t=!0)},o(l){I(e.$$.fragment,l),t=!1},d(l){N(e,l)}}}function je(n){let e,t,l,a,i,s,_,m;const c=[n[11]];let u={};for(let f=0;f<c.length;f+=1)u=_e(u,c[f]);e=new re({props:u}),l=new Ie({props:{show_label:n[3],Icon:x,label:n[12]||n[15]("image.image")}});const h=[Ae,Me],r=[];function k(f,g){return f[13]==null?0:1}return s=k(n),_=r[s]=h[s](n),{c(){q(e.$$.fragment),t=z(),q(l.$$.fragment),a=z(),i=S("div"),_.c(),d(i,"class","container svelte-m3v3vb")},m(f,g){E(e,f,g),b(f,t,g),E(l,f,g),b(f,a,g),b(f,i,g),r[s].m(i,null),m=!0},p(f,g){const C=g[0]&2048?me(c,[ce(f[11])]):{};e.$set(C);const B={};g[0]&8&&(B.show_label=f[3]),g[0]&36864&&(B.label=f[12]||f[15]("image.image")),l.$set(B);let M=s;s=k(f),s===M?r[s].p(f,g):(he(),I(r[M],1,1,()=>{r[M]=null}),ge(),_=r[s],_?_.p(f,g):(_=r[s]=h[s](f),_.c()),w(_,1),_.m(i,null))},i(f){m||(w(e.$$.fragment,f),w(l.$$.fragment,f),w(_),m=!0)},o(f){I(e.$$.fragment,f),I(l.$$.fragment,f),I(_),m=!1},d(f){f&&(v(t),v(a),v(i)),N(e,f),N(l,f),r[s].d()}}}function qe(n){let e,t;return e=new we({props:{visible:n[2],elem_id:n[0],elem_classes:n[1],padding:!1,height:n[5],width:n[6],allow_overflow:!1,container:n[8],scale:n[9],min_width:n[10],$$slots:{default:[je]},$$scope:{ctx:n}}}),{c(){q(e.$$.fragment)},m(l,a){E(e,l,a),t=!0},p(l,a){const i={};a[0]&4&&(i.visible=l[2]),a[0]&1&&(i.elem_id=l[0]),a[0]&2&&(i.elem_classes=l[1]),a[0]&32&&(i.height=l[5]),a[0]&64&&(i.width=l[6]),a[0]&256&&(i.container=l[8]),a[0]&512&&(i.scale=l[9]),a[0]&1024&&(i.min_width=l[10]),a[0]&63672|a[1]&8&&(i.$$scope={dirty:a,ctx:l}),e.$set(i)},i(l){t||(w(e.$$.fragment,l),t=!0)},o(l){I(e.$$.fragment,l),t=!1},d(l){N(e,l)}}}function Ee(n,e,t){let l;ue(n,fe,o=>t(15,l=o));let{elem_id:a=""}=e,{elem_classes:i=[]}=e,{visible:s=!0}=e,{value:_}=e,m,c,{label:u=l("annotated_image.annotated_image")}=e,{show_label:h=!0}=e,{show_legend:r=!0}=e,{height:k}=e,{width:f}=e,{color_map:g}=e,{container:C=!0}=e,{scale:B=null}=e,{min_width:M=void 0}=e,{root:F}=e,{root_url:G}=e,Q=null,{loading_status:Z}=e,{gradio:H}=e;function V(o){t(14,Q=o)}function W(){t(14,Q=null)}function D(o){H.dispatch("select",{value:u,index:o})}const $=o=>V(o),ee=o=>V(o),le=()=>W(),ne=()=>W(),te=o=>D(o);return n.$$set=o=>{"elem_id"in o&&t(0,a=o.elem_id),"elem_classes"in o&&t(1,i=o.elem_classes),"visible"in o&&t(2,s=o.visible),"value"in o&&t(19,_=o.value),"label"in o&&t(12,u=o.label),"show_label"in o&&t(3,h=o.show_label),"show_legend"in o&&t(4,r=o.show_legend),"height"in o&&t(5,k=o.height),"width"in o&&t(6,f=o.width),"color_map"in o&&t(7,g=o.color_map),"container"in o&&t(8,C=o.container),"scale"in o&&t(9,B=o.scale),"min_width"in o&&t(10,M=o.min_width),"root"in o&&t(20,F=o.root),"root_url"in o&&t(21,G=o.root_url),"loading_status"in o&&t(11,Z=o.loading_status),"gradio"in o&&t(22,H=o.gradio)},n.$$.update=()=>{n.$$.dirty[0]&16252928&&(_!==m&&(t(23,m=_),H.dispatch("change")),_?t(13,c=[R(_[0],F,G),_[1].map(([o,ae])=>[R(o,F,G),ae])]):t(13,c=null))},[a,i,s,h,r,k,f,g,C,B,M,Z,u,c,Q,l,V,W,D,_,F,G,H,m,$,ee,le,ne,te]}class Ne extends ie{constructor(e){super(),se(this,e,Ee,qe,oe,{elem_id:0,elem_classes:1,visible:2,value:19,label:12,show_label:3,show_legend:4,height:5,width:6,color_map:7,container:8,scale:9,min_width:10,root:20,root_url:21,loading_status:11,gradio:22},null,[-1,-1])}}const Ke=Ne;export{Ke as default};
//# sourceMappingURL=index-f531ad27.js.map
