import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{R as m}from"./index-DyTKwKRb.js";import{c as E}from"./slot-BZvB-ER0.js";import"./_commonjsHelpers-Cpj98o6Y.js";const W={info:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{d:"M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0 3.5c.4 0 .75.3.75.7v3.1a.75.75 0 0 1-1.5 0V8.2c0-.4.35-.7.75-.7z"})}),success:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{d:"M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm3.03 5.03a.75.75 0 0 0-1.06-1.06L7 7.94 5.53 6.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l3.5-3.5z"})}),warning:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{d:"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"})}),error:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{d:"M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm-.75 4a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-1.5 0V5zm.75 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"})})},U=()=>e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{d:"M1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41l5.59 5.59L14 12.59 8.41 7 14 1.41 12.59 0 7 5.59z"})}),s=m.forwardRef(({className:k,status:c="info",variant:I="subtle",title:u,description:d,icon:R,dismissible:V=!1,onClose:t,children:q,...O},B)=>{const[M,P]=m.useState(!0);if(!M)return null;const Y=()=>{P(!1),t==null||t()},F=V||!!t,L=W[c];return e.jsxs("div",{ref:B,role:"alert",className:E("ui-alert",k),"data-status":c,"data-variant":I,...O,children:[e.jsx("span",{className:"ui-alert__icon","aria-hidden":"true",children:R??L}),e.jsxs("div",{className:"ui-alert__body",children:[u&&e.jsx("div",{className:"ui-alert__title",children:u}),d&&e.jsx("div",{className:"ui-alert__description",children:d}),q]}),F&&e.jsx("button",{type:"button",className:"ui-alert__close",onClick:Y,"aria-label":"Dismiss alert",children:e.jsx(U,{})})]})});s.displayName="Alert";s.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{status:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"subtle" | "solid" | "outline"',elements:[{name:"literal",value:'"subtle"'},{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'}]},description:"",defaultValue:{value:'"subtle"',computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},dismissible:{required:!1,tsType:{name:"boolean"},description:"Show built-in close button that dismisses the alert automatically",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the alert is closed (works with both dismissible and manual onClose)"}}};const Q={title:"Feedback/Alert",component:s,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{status:{control:"select",options:["info","success","warning","error"]},variant:{control:"select",options:["subtle","solid","outline"]},title:{control:"text"},description:{control:"text"},dismissible:{control:"boolean"}}},i={args:{title:"Info",description:"This is an informational alert.",status:"info",dismissible:!0}},r={args:{status:"warning",title:"Storage almost full",description:"You are using 90% of your storage. Upgrade your plan to get more space.",dismissible:!0}},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(s,{status:"info",title:"Info",description:"Your profile has been updated.",dismissible:!0}),e.jsx(s,{status:"success",title:"Success",description:"Payment processed successfully.",dismissible:!0}),e.jsx(s,{status:"warning",title:"Warning",description:"Your session expires in 5 minutes.",dismissible:!0}),e.jsx(s,{status:"error",title:"Error",description:"Something went wrong. Please try again.",dismissible:!0})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(s,{status:"info",variant:"subtle",title:"Subtle",description:"Default subtle variant.",dismissible:!0}),e.jsx(s,{status:"info",variant:"outline",title:"Outline",description:"Outline border only.",dismissible:!0}),e.jsx(s,{status:"info",variant:"solid",title:"Solid",description:"Full background fill.",dismissible:!0})]})},n={args:{status:"success",title:"Changes saved successfully.",dismissible:!0}},o={render:()=>e.jsx(s,{status:"error",title:"Failed to save",description:"Please check your connection and try again.",onClose:()=>console.log("Alert closed")})};var p,f,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: "Info",
    description: "This is an informational alert.",
    status: "info",
    dismissible: true
  }
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,b,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    status: "warning",
    title: "Storage almost full",
    description: "You are using 90% of your storage. Upgrade your plan to get more space.",
    dismissible: true
  }
}`,...(v=(b=r.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,y,w;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12
  }}>
      <Alert status="info" title="Info" description="Your profile has been updated." dismissible />
      <Alert status="success" title="Success" description="Payment processed successfully." dismissible />
      <Alert status="warning" title="Warning" description="Your session expires in 5 minutes." dismissible />
      <Alert status="error" title="Error" description="Something went wrong. Please try again." dismissible />
    </div>
}`,...(w=(y=a.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var j,A,S;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12
  }}>
      <Alert status="info" variant="subtle" title="Subtle" description="Default subtle variant." dismissible />
      <Alert status="info" variant="outline" title="Outline" description="Outline border only." dismissible />
      <Alert status="info" variant="solid" title="Solid" description="Full background fill." dismissible />
    </div>
}`,...(S=(A=l.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var _,C,z;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    status: "success",
    title: "Changes saved successfully.",
    dismissible: true
  }
}`,...(z=(C=n.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var T,D,N;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Alert status="error" title="Failed to save" description="Please check your connection and try again." onClose={() => console.log("Alert closed")} />
}`,...(N=(D=o.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};const X=["Default","Dismissible","AllStatuses","Variants","TitleOnly","WithCallback"];export{a as AllStatuses,i as Default,r as Dismissible,n as TitleOnly,l as Variants,o as WithCallback,X as __namedExportsOrder,Q as default};
