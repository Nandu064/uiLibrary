import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{R as o}from"./index-DyTKwKRb.js";import{c as B}from"./slot-BZvB-ER0.js";import{u as z}from"./useControllableState-se4VbC8n.js";import"./_commonjsHelpers-Cpj98o6Y.js";const a=o.forwardRef(({className:L,label:h,checked:P,defaultChecked:A=!1,indeterminate:s=!1,onChange:F,disabled:b,id:G,...O},t)=>{const[m,V]=z({prop:P,defaultProp:A,onChange:F}),W=o.useId(),f=G??W,p=o.useRef(null);return o.useEffect(()=>{p.current&&(p.current.indeterminate=s)},[s]),e.jsxs("label",{className:B("ui-checkbox",L),"data-checked":m||void 0,"data-indeterminate":s||void 0,"data-disabled":b||void 0,htmlFor:f,children:[e.jsxs("span",{className:"ui-checkbox__control",children:[e.jsx("input",{ref:r=>{p.current=r,typeof t=="function"?t(r):t&&(t.current=r)},id:f,type:"checkbox",className:"ui-checkbox__input",checked:m,disabled:b,onChange:r=>V(r.target.checked),"aria-checked":s?"mixed":m,...O}),e.jsx("svg",{className:"ui-checkbox__indicator",viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:s?e.jsx("path",{d:"M2 5h6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}):e.jsx("path",{d:"M1.5 5l2.5 2.5 5-5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})]}),h&&e.jsx("span",{className:"ui-checkbox__label",children:h})]})});a.displayName="Checkbox";a.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const X={title:"Forms/Checkbox",component:a,tags:["autodocs"],parameters:{layout:"centered"}},c={args:{label:"Accept terms and conditions"}},n={args:{label:"Checked by default",defaultChecked:!0}},d={args:{label:"Indeterminate state",indeterminate:!0}},l={args:{label:"Disabled checkbox",disabled:!0}},i={args:{label:"Disabled and checked",disabled:!0,defaultChecked:!0}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[e.jsx(a,{label:"Email notifications",defaultChecked:!0}),e.jsx(a,{label:"SMS notifications"}),e.jsx(a,{label:"Push notifications",defaultChecked:!0}),e.jsx(a,{label:"Marketing emails",disabled:!0})]})};var k,x,C;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: "Accept terms and conditions"
  }
}`,...(C=(x=c.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var g,y,j;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Checked by default",
    defaultChecked: true
  }
}`,...(j=(y=n.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var v,D,_;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Indeterminate state",
    indeterminate: true
  }
}`,...(_=(D=d.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var S,R,I;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: "Disabled checkbox",
    disabled: true
  }
}`,...(I=(R=l.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var N,M,q;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: "Disabled and checked",
    disabled: true,
    defaultChecked: true
  }
}`,...(q=(M=i.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var E,T,w;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 10
  }}>
      <Checkbox label="Email notifications" defaultChecked />
      <Checkbox label="SMS notifications" />
      <Checkbox label="Push notifications" defaultChecked />
      <Checkbox label="Marketing emails" disabled />
    </div>
}`,...(w=(T=u.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};const Y=["Default","Checked","Indeterminate","Disabled","DisabledChecked","Group"];export{n as Checked,c as Default,l as Disabled,i as DisabledChecked,u as Group,d as Indeterminate,Y as __namedExportsOrder,X as default};
