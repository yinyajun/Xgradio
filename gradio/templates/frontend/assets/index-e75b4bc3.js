import{S as v,e as z,s as B,F as S,G as q,w as C,u as F,H as G,a0 as H,a1 as j,t as A,h as D,x as E,k as I}from"./index-a959df42.js";import{a as J}from"./Button-fb0eed2f.js";function K(a){let i=a[14](a[3])+"",l;return{c(){l=A(i)},m(e,t){D(e,l,t)},p(e,t){t&16392&&i!==(i=e[14](e[3])+"")&&E(l,i)},d(e){e&&I(l)}}}function L(a){let i,l;return i=new J({props:{value:a[3],variant:a[4],elem_id:a[0],elem_classes:a[1],size:a[6],scale:a[7],link:a[9],icon:a[8],min_width:a[10],visible:a[2],root:a[12],root_url:a[13],disabled:a[5]==="static",$$slots:{default:[K]},$$scope:{ctx:a}}}),i.$on("click",a[15]),{c(){S(i.$$.fragment)},m(e,t){q(i,e,t),l=!0},p(e,[t]){const s={};t&8&&(s.value=e[3]),t&16&&(s.variant=e[4]),t&1&&(s.elem_id=e[0]),t&2&&(s.elem_classes=e[1]),t&64&&(s.size=e[6]),t&128&&(s.scale=e[7]),t&512&&(s.link=e[9]),t&256&&(s.icon=e[8]),t&1024&&(s.min_width=e[10]),t&4&&(s.visible=e[2]),t&4096&&(s.root=e[12]),t&8192&&(s.root_url=e[13]),t&32&&(s.disabled=e[5]==="static"),t&81928&&(s.$$scope={dirty:t,ctx:e}),i.$set(s)},i(e){l||(C(i.$$.fragment,e),l=!0)},o(e){F(i.$$.fragment,e),l=!1},d(e){G(i,e)}}}function M(a,i,l){let e;H(a,j,n=>l(14,e=n));let{elem_id:t=""}=i,{elem_classes:s=[]}=i,{visible:u=!0}=i,{value:m}=i,{variant:o="secondary"}=i,{mode:_="dynamic"}=i,{size:c="lg"}=i,{scale:b=null}=i,{icon:h=null}=i,{link:d=null}=i,{min_width:r=void 0}=i,{gradio:f}=i,{root:g=""}=i,{root_url:k=null}=i;const w=()=>f.dispatch("click");return a.$$set=n=>{"elem_id"in n&&l(0,t=n.elem_id),"elem_classes"in n&&l(1,s=n.elem_classes),"visible"in n&&l(2,u=n.visible),"value"in n&&l(3,m=n.value),"variant"in n&&l(4,o=n.variant),"mode"in n&&l(5,_=n.mode),"size"in n&&l(6,c=n.size),"scale"in n&&l(7,b=n.scale),"icon"in n&&l(8,h=n.icon),"link"in n&&l(9,d=n.link),"min_width"in n&&l(10,r=n.min_width),"gradio"in n&&l(11,f=n.gradio),"root"in n&&l(12,g=n.root),"root_url"in n&&l(13,k=n.root_url)},[t,s,u,m,o,_,c,b,h,d,r,f,g,k,e,w]}class P extends v{constructor(i){super(),z(this,i,M,L,B,{elem_id:0,elem_classes:1,visible:2,value:3,variant:4,mode:5,size:6,scale:7,icon:8,link:9,min_width:10,gradio:11,root:12,root_url:13})}}export{J as BaseButton,P as default};
//# sourceMappingURL=index-e75b4bc3.js.map