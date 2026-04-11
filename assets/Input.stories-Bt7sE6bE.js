import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{R as ee}from"./index-DyTKwKRb.js";import{c as R}from"./slot-BZvB-ER0.js";import{u as ae}from"./useId-BaSnWAOt.js";import"./_commonjsHelpers-Cpj98o6Y.js";const a=ee.forwardRef(({className:J,label:f,helperText:c,errorMessage:r,size:O="md",isInvalid:P,isRequired:x,leftAddon:u,rightAddon:m,leftElement:h,rightElement:b,id:U,"aria-describedby":$,...C},G)=>{const K=ae("input"),s=U??K,g=`${s}-helper`,y=`${s}-error`,Q=P||!!r,X=[r?y:null,c?g:null].filter(Boolean).join(" ")||void 0,Y=$??X,Z=e.jsx("input",{ref:G,id:s,className:R("ui-input",h&&"ui-input--has-left",b&&"ui-input--has-right",J),"data-size":O,"aria-invalid":Q||void 0,"aria-required":x||void 0,"aria-describedby":Y,...C});return e.jsxs("div",{className:"ui-field",children:[f&&e.jsxs("label",{htmlFor:s,className:"ui-label",children:[f,x&&e.jsx("span",{className:"ui-label__required","aria-hidden":"true",children:"*"})]}),e.jsxs("div",{className:R("ui-input-wrapper",u&&"ui-input-wrapper--has-left-addon",m&&"ui-input-wrapper--has-right-addon"),children:[u&&e.jsx("span",{className:"ui-input-addon ui-input-addon--left",children:u}),h&&e.jsx("span",{className:"ui-input-element ui-input-element--left","aria-hidden":"true",children:h}),Z,b&&e.jsx("span",{className:"ui-input-element ui-input-element--right","aria-hidden":"true",children:b}),m&&e.jsx("span",{className:"ui-input-addon ui-input-addon--right",children:m})]}),r&&e.jsx("span",{id:y,className:"ui-error-text",role:"alert",children:r}),c&&!r&&e.jsx("span",{id:g,className:"ui-helper-text",children:c})]})});a.displayName="Input";a.__docgenInfo={description:`Text input with optional label, helper/error text, and icon slots.

@example
<Input label="Email" type="email" placeholder="you@example.com" />`,methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:"Label text (renders a visible label above the input)"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text shown below the input"},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message (replaces helperText, applies error styling)"},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"Size of the input",defaultValue:{value:'"md"',computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:"Makes the field show error state"},isRequired:{required:!1,tsType:{name:"boolean"},description:"Makes the field required (shows indicator)"},leftAddon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Renders a readonly, visually styled element before input"},rightAddon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Renders a readonly, visually styled element after input"},leftElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Element rendered inside the input on the left"},rightElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Element rendered inside the input on the right"}},composes:["Omit"]};const ne={title:"Forms/Input",component:a,tags:["autodocs"],parameters:{layout:"padded"}},l={args:{label:"Email address",placeholder:"you@example.com",type:"email"}},t={args:{label:"Username",helperText:"Must be 3–20 characters",placeholder:"username"}},i={args:{label:"Email",errorMessage:"Please enter a valid email address",isInvalid:!0,defaultValue:"not-an-email"}},n={args:{label:"Full name",isRequired:!0,placeholder:"Jane Doe"}},d={args:{label:"Locked field",disabled:!0,defaultValue:"read only value"}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:400},children:[e.jsx(a,{size:"sm",label:"Small",placeholder:"Small input"}),e.jsx(a,{size:"md",label:"Medium",placeholder:"Medium input"}),e.jsx(a,{size:"lg",label:"Large",placeholder:"Large input"})]})},p={args:{label:"Website",leftAddon:"https://",placeholder:"example.com"}};var v,N,j;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Email address",
    placeholder: "you@example.com",
    type: "email"
  }
}`,...(j=(N=l.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var q,I,T;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: "Username",
    helperText: "Must be 3–20 characters",
    placeholder: "username"
  }
}`,...(T=(I=t.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var w,S,E;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Email",
    errorMessage: "Please enter a valid email address",
    isInvalid: true,
    defaultValue: "not-an-email"
  }
}`,...(E=(S=i.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var z,W,D;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: "Full name",
    isRequired: true,
    placeholder: "Jane Doe"
  }
}`,...(D=(W=n.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var L,M,_;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: "Locked field",
    disabled: true,
    defaultValue: "read only value"
  }
}`,...(_=(M=d.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var V,k,F;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    maxWidth: 400
  }}>
      <Input size="sm" label="Small" placeholder="Small input" />
      <Input size="md" label="Medium" placeholder="Medium input" />
      <Input size="lg" label="Large" placeholder="Large input" />
    </div>
}`,...(F=(k=o.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var B,H,A;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: "Website",
    leftAddon: "https://",
    placeholder: "example.com"
  }
}`,...(A=(H=p.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};const de=["Default","WithHelperText","WithError","Required","Disabled","Sizes","WithAddon"];export{l as Default,d as Disabled,n as Required,o as Sizes,p as WithAddon,i as WithError,t as WithHelperText,de as __namedExportsOrder,ne as default};
