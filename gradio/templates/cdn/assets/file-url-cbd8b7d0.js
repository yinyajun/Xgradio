import{aw as k,ax as p,ay as n,r as m,u as w,v as g,w as i,af as v,az as x}from"./index-9ac29d30.js";function R(e,t){const l=t.token={};function c(r,s,u,b){if(t.token!==l)return;t.resolved=b;let a=t.ctx;u!==void 0&&(a=a.slice(),a[u]=b);const o=r&&(t.current=r)(a);let d=!1;t.block&&(t.blocks?t.blocks.forEach((h,_)=>{_!==s&&h&&(m(),w(h,1,1,()=>{t.blocks[_]===h&&(t.blocks[_]=null)}),g())}):t.block.d(1),o.c(),i(o,1),o.m(t.mount(),t.anchor),d=!0),t.block=o,t.blocks&&(t.blocks[s]=o),d&&v()}if(k(e)){const r=p();if(e.then(s=>{n(r),c(t.then,1,t.value,s),n(null)},s=>{if(n(r),c(t.catch,2,t.error,s),n(null),!t.hasCatch)throw s}),t.current!==t.pending)return c(t.pending,0),!0}else{if(t.current!==t.then)return c(t.then,1,t.value,e),!0;t.resolved=e}}function C(e,t,l){const c=t.slice(),{resolved:r}=e;e.current===e.then&&(c[e.value]=r),e.current===e.catch&&(c[e.error]=r),e.block.p(c,l)}function y(e){return e.host===window.location.host||e.host==="localhost:7860"||e.host==="127.0.0.1:7860"||e.host==="lite.local"}async function E(e){if(e==null)return e;const t=new URL(e);if(!y(t)||t.protocol!=="http:"&&t.protocol!=="https:")return e;const l=x();if(l==null)return e;const c=t.pathname;return l.httpRequest({method:"GET",path:c,headers:{},query_string:""}).then(r=>{if(r.status!==200)throw new Error(`Failed to get file ${c} from the Wasm worker.`);const s=new Blob([r.body],{type:r.headers["Content-Type"]});return URL.createObjectURL(s)})}export{R as h,E as r,C as u};
//# sourceMappingURL=file-url-cbd8b7d0.js.map