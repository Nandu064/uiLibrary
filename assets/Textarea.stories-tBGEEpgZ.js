import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{R as p}from"./index-DyTKwKRb.js";import{c as T}from"./slot-BZvB-ER0.js";import{u as P}from"./useId-BaSnWAOt.js";import"./_commonjsHelpers-Cpj98o6Y.js";const m=p.forwardRef(({className:D,label:h,helperText:c,errorMessage:a,isInvalid:F,isRequired:f,resize:W="vertical",maxLength:e,showCount:$=!1,id:M,value:s,defaultValue:x,onChange:d,...O},V)=>{const k=P("textarea"),t=M??k,b=`${t}-error`,g=`${t}-helper`,A=F||!!a,[u,v]=p.useState(()=>String(s??x??"").length);p.useEffect(()=>{s!==void 0&&v(String(s).length)},[s]);const G=y=>{v(y.target.value.length),d==null||d(y)},H=e?u/e>.8:!1,J=e?u>=e:!1,K=[a?b:null,c?g:null].filter(Boolean).join(" ")||void 0;return r.jsxs("div",{className:"ui-field",children:[h&&r.jsxs("label",{htmlFor:t,className:"ui-label",children:[h,f&&r.jsx("span",{className:"ui-label__required","aria-hidden":"true",children:"*"})]}),r.jsx("textarea",{ref:V,id:t,className:T("ui-textarea",D),style:{resize:W},"aria-invalid":A||void 0,"aria-required":f||void 0,"aria-describedby":K,maxLength:e,value:s,defaultValue:x,onChange:G,...O}),$&&e&&r.jsxs("span",{className:T("ui-textarea-count",H&&"ui-textarea-count--near-limit",J&&"ui-textarea-count--at-limit"),"aria-live":"polite",children:[u,"/",e]}),a&&r.jsx("span",{id:b,className:"ui-error-text",role:"alert",children:a}),c&&!a&&r.jsx("span",{id:g,className:"ui-helper-text",children:c})]})});m.displayName="Textarea";m.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},isInvalid:{required:!1,tsType:{name:"boolean"},description:""},isRequired:{required:!1,tsType:{name:"boolean"},description:""},resize:{required:!1,tsType:{name:"union",raw:'"none" | "vertical" | "horizontal" | "both"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'},{name:"literal",value:'"both"'}]},description:"Controls the resize behavior",defaultValue:{value:'"vertical"',computed:!1}},maxLength:{required:!1,tsType:{name:"number"},description:"Shows current/max character count"},showCount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const L={title:"Forms/Textarea",component:m,tags:["autodocs"],parameters:{layout:"padded"}},o={args:{label:"Description",placeholder:"Enter description..."}},i={args:{label:"Bio",errorMessage:"Bio is required",isInvalid:!0}},n={args:{label:"Message",maxLength:200,showCount:!0,placeholder:"Type your message..."}},l={args:{label:"Fixed",resize:"none",rows:4}};var q,N,j;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: "Description",
    placeholder: "Enter description..."
  }
}`,...(j=(N=o.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var C,w,z;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: "Bio",
    errorMessage: "Bio is required",
    isInvalid: true
  }
}`,...(z=(w=i.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var E,I,S;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "Message",
    maxLength: 200,
    showCount: true,
    placeholder: "Type your message..."
  }
}`,...(S=(I=n.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var B,R,_;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: "Fixed",
    resize: "none",
    rows: 4
  }
}`,...(_=(R=l.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};const ee=["Default","WithError","WithCharCount","NoResize"];export{o as Default,l as NoResize,n as WithCharCount,i as WithError,ee as __namedExportsOrder,L as default};
