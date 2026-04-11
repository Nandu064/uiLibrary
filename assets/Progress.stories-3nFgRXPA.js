import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{R as E}from"./index-DyTKwKRb.js";import{c as U}from"./slot-BZvB-ER0.js";import"./_commonjsHelpers-Cpj98o6Y.js";const a=E.forwardRef(({className:D,value:u=0,max:d=100,size:M="md",color:N="primary",label:s,showValue:c=!1,striped:m=!1,animated:R=!1,"aria-label":p,"aria-labelledby":I,...k},A)=>{const i=d>0?d:100,C=Math.min(Math.max(u,0),i),g=Math.min(100,Math.max(0,C/i*100));return e.jsxs("div",{ref:A,className:U("ui-progress",D),"data-color":N,"data-striped":m||void 0,"data-animated":m&&R||void 0,...k,children:[(s||c)&&e.jsxs("div",{className:"ui-progress__label",children:[s&&e.jsx("span",{children:s}),c&&e.jsxs("span",{children:[Math.round(g),"%"]})]}),e.jsx("div",{className:"ui-progress__track","data-size":M,role:"progressbar","aria-valuenow":u,"aria-valuemin":0,"aria-valuemax":i,"aria-label":p??s??"Progress","aria-labelledby":p?void 0:I,children:e.jsx("div",{className:"ui-progress__fill",style:{width:`${g}%`}})})]})});a.displayName="Progress";a.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"primary" | "success" | "danger" | "warning"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"warning"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},showValue:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},striped:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},animated:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const B={title:"Feedback/Progress",component:a,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{value:{control:{type:"range",min:0,max:100}},size:{control:"select",options:["xs","sm","md","lg"]},color:{control:"select",options:["primary","success","danger","warning"]},striped:{control:"boolean"},animated:{control:"boolean"},showValue:{control:"boolean"}}},r={args:{value:60,label:"Upload progress",showValue:!0}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:400},children:[e.jsx(a,{size:"xs",value:40}),e.jsx(a,{size:"sm",value:55}),e.jsx(a,{size:"md",value:70}),e.jsx(a,{size:"lg",value:85})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:400},children:[e.jsx(a,{color:"primary",value:60,label:"Primary",showValue:!0}),e.jsx(a,{color:"success",value:80,label:"Success",showValue:!0}),e.jsx(a,{color:"warning",value:45,label:"Warning",showValue:!0}),e.jsx(a,{color:"danger",value:25,label:"Danger",showValue:!0})]})},n={args:{value:65,striped:!0,label:"Installing...",showValue:!0}},t={args:{value:65,striped:!0,animated:!0,label:"Processing...",showValue:!0}};var v,f,x;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    value: 60,
    label: "Upload progress",
    showValue: true
  }
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var h,y,w;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 400
  }}>
      <Progress size="xs" value={40} />
      <Progress size="sm" value={55} />
      <Progress size="md" value={70} />
      <Progress size="lg" value={85} />
    </div>
}`,...(w=(y=l.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var b,V,j;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 400
  }}>
      <Progress color="primary" value={60} label="Primary" showValue />
      <Progress color="success" value={80} label="Success" showValue />
      <Progress color="warning" value={45} label="Warning" showValue />
      <Progress color="danger" value={25} label="Danger" showValue />
    </div>
}`,...(j=(V=o.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var P,z,S;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    value: 65,
    striped: true,
    label: "Installing...",
    showValue: true
  }
}`,...(S=(z=n.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var _,T,q;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    value: 65,
    striped: true,
    animated: true,
    label: "Processing...",
    showValue: true
  }
}`,...(q=(T=t.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};const G=["Default","Sizes","Colors","Striped","Animated"];export{t as Animated,o as Colors,r as Default,l as Sizes,n as Striped,G as __namedExportsOrder,B as default};
