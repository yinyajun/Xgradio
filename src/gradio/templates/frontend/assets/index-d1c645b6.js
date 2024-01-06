import{S as F,e as G,s as H,F as d,G as g,w,u as b,H as k,an as U,Z as V,ae as W,o as Z,h as z,V as E,W as K,k as L}from"./index-a959df42.js";import{B as M}from"./Button-fb0eed2f.js";import{T as P}from"./Table-b4406f17.js";import"./index-2f00b72c.js";import"./utils-c3e3db58.js";import"./Upload-4d8da01b.js";import"./StaticMarkdown-06312fb7.js";import"./dsv-576afacd.js";function Q(n){let a,l,i,_;const f=[n[17],{border:!0}];let m={};for(let t=0;t<f.length;t+=1)m=V(m,f[t]);return a=new W({props:m}),i=new P({props:{label:n[9],row_count:n[8],col_count:n[7],value:n[0],headers:n[1],editable:!0,wrap:n[10],datatype:n[11],latex_delimiters:n[5],height:n[6],line_breaks:n[14],column_widths:n[15]}}),i.$on("change",n[20]),i.$on("select",n[21]),{c(){d(a.$$.fragment),l=Z(),d(i.$$.fragment)},m(t,s){g(a,t,s),z(t,l,s),g(i,t,s),_=!0},p(t,s){const c=s&131072?E(f,[K(t[17]),f[1]]):{};a.$set(c);const u={};s&512&&(u.label=t[9]),s&256&&(u.row_count=t[8]),s&128&&(u.col_count=t[7]),s&1&&(u.value=t[0]),s&2&&(u.headers=t[1]),s&1024&&(u.wrap=t[10]),s&2048&&(u.datatype=t[11]),s&32&&(u.latex_delimiters=t[5]),s&64&&(u.height=t[6]),s&16384&&(u.line_breaks=t[14]),s&32768&&(u.column_widths=t[15]),i.$set(u)},i(t){_||(w(a.$$.fragment,t),w(i.$$.fragment,t),_=!0)},o(t){b(a.$$.fragment,t),b(i.$$.fragment,t),_=!1},d(t){t&&L(l),k(a,t),k(i,t)}}}function R(n){let a,l;return a=new M({props:{visible:n[4],padding:!1,elem_id:n[2],elem_classes:n[3],container:!1,scale:n[12],min_width:n[13],allow_overflow:!1,$$slots:{default:[Q]},$$scope:{ctx:n}}}),{c(){d(a.$$.fragment)},m(i,_){g(a,i,_),l=!0},p(i,[_]){const f={};_&16&&(f.visible=i[4]),_&4&&(f.elem_id=i[2]),_&8&&(f.elem_classes=i[3]),_&4096&&(f.scale=i[12]),_&8192&&(f.min_width=i[13]),_&8638435&&(f.$$scope={dirty:_,ctx:i}),a.$set(f)},i(i){l||(w(a.$$.fragment,i),l=!0)},o(i){b(a.$$.fragment,i),l=!1},d(i){k(a,i)}}}function X(n,a,l){let{headers:i=[]}=a,{elem_id:_=""}=a,{elem_classes:f=[]}=a,{visible:m=!0}=a,{value:t={data:[["","",""]],headers:["1","2","3"],metadata:null}}=a,{latex_delimiters:s}=a,{height:c=500}=a,u=JSON.stringify(t),{value_is_output:h=!1}=a,{col_count:o}=a,{row_count:S}=a,{label:A=null}=a,{wrap:J}=a,{datatype:N}=a,{scale:O=null}=a,{min_width:B=void 0}=a,{line_breaks:D=!0}=a,{column_widths:I=[]}=a,{gradio:r}=a,{loading_status:T}=a;function j(){r.dispatch("change"),h||r.dispatch("input")}U(()=>{l(18,h=!1)}),(Array.isArray(t)&&t?.[0]?.length===0||t.data?.[0]?.length===0)&&(t={data:[Array(o?.[0]||3).fill("")],headers:Array(o?.[0]||3).fill("").map((e,C)=>`${C+1}`),metadata:null});const q=({detail:e})=>{l(0,t=e)},v=e=>r.dispatch("select",e.detail);return n.$$set=e=>{"headers"in e&&l(1,i=e.headers),"elem_id"in e&&l(2,_=e.elem_id),"elem_classes"in e&&l(3,f=e.elem_classes),"visible"in e&&l(4,m=e.visible),"value"in e&&l(0,t=e.value),"latex_delimiters"in e&&l(5,s=e.latex_delimiters),"height"in e&&l(6,c=e.height),"value_is_output"in e&&l(18,h=e.value_is_output),"col_count"in e&&l(7,o=e.col_count),"row_count"in e&&l(8,S=e.row_count),"label"in e&&l(9,A=e.label),"wrap"in e&&l(10,J=e.wrap),"datatype"in e&&l(11,N=e.datatype),"scale"in e&&l(12,O=e.scale),"min_width"in e&&l(13,B=e.min_width),"line_breaks"in e&&l(14,D=e.line_breaks),"column_widths"in e&&l(15,I=e.column_widths),"gradio"in e&&l(16,r=e.gradio),"loading_status"in e&&l(17,T=e.loading_status)},n.$$.update=()=>{n.$$.dirty&524289&&JSON.stringify(t)!==u&&(l(19,u=JSON.stringify(t)),j())},[t,i,_,f,m,s,c,o,S,A,J,N,O,B,D,I,r,T,h,u,q,v]}class Y extends F{constructor(a){super(),G(this,a,X,R,H,{headers:1,elem_id:2,elem_classes:3,visible:4,value:0,latex_delimiters:5,height:6,value_is_output:18,col_count:7,row_count:8,label:9,wrap:10,datatype:11,scale:12,min_width:13,line_breaks:14,column_widths:15,gradio:16,loading_status:17})}}const ie=Y;export{ie as default};
//# sourceMappingURL=index-d1c645b6.js.map
