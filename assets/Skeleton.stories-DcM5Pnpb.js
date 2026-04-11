import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{R as b}from"./index-DyTKwKRb.js";import{c as T}from"./slot-BZvB-ER0.js";import"./_commonjsHelpers-Cpj98o6Y.js";const t=b.forwardRef(({className:y,variant:S="rounded",width:n,height:a,style:k,...j},D)=>e.jsx("span",{ref:D,className:T("ui-skeleton",y),"data-variant":S,"aria-hidden":"true",style:{width:n!==void 0?typeof n=="number"?`${n}px`:n:void 0,height:a!==void 0?typeof a=="number"?`${a}px`:a:void 0,...k},...j}));t.displayName="Skeleton";t.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{variant:{required:!1,tsType:{name:"union",raw:'"text" | "circular" | "rectangular" | "rounded"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"circular"'},{name:"literal",value:'"rectangular"'},{name:"literal",value:'"rounded"'}]},description:"",defaultValue:{value:'"rounded"',computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""}}};const N={title:"Feedback/Skeleton",component:t,tags:["autodocs"],parameters:{layout:"padded"}},r={args:{width:300,height:20}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,width:320},children:[e.jsx(t,{variant:"text",width:"80%",height:20}),e.jsx(t,{variant:"text",width:"100%",height:20}),e.jsx(t,{variant:"text",width:"60%",height:20})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:12,width:320},children:[e.jsx(t,{variant:"circular",width:48,height:48}),e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:8},children:[e.jsx(t,{variant:"text",width:"70%",height:16}),e.jsx(t,{variant:"text",width:"90%",height:16}),e.jsx(t,{variant:"text",width:"50%",height:16})]})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:300},children:[e.jsx(t,{variant:"rectangular",width:300,height:180}),e.jsx(t,{variant:"text",width:"80%",height:20}),e.jsx(t,{variant:"text",width:"60%",height:16})]})};var l,o,h;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    width: 300,
    height: 20
  }
}`,...(h=(o=r.parameters)==null?void 0:o.docs)==null?void 0:h.source}}};var c,m,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 8,
    width: 320
  }}>
      <Skeleton variant="text" width="80%" height={20} />
      <Skeleton variant="text" width="100%" height={20} />
      <Skeleton variant="text" width="60%" height={20} />
    </div>
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,x,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 12,
    width: 320
  }}>
      <Skeleton variant="circular" width={48} height={48} />
      <div style={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }}>
        <Skeleton variant="text" width="70%" height={16} />
        <Skeleton variant="text" width="90%" height={16} />
        <Skeleton variant="text" width="50%" height={16} />
      </div>
    </div>
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var v,f,w;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 300
  }}>
      <Skeleton variant="rectangular" width={300} height={180} />
      <Skeleton variant="text" width="80%" height={20} />
      <Skeleton variant="text" width="60%" height={16} />
    </div>
}`,...(w=(f=d.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};const C=["Default","TextLines","CardSkeleton","ImageSkeleton"];export{s as CardSkeleton,r as Default,d as ImageSkeleton,i as TextLines,C as __namedExportsOrder,N as default};
