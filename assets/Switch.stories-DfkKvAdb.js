import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{R as m}from"./index-DyTKwKRb.js";import{c as L}from"./slot-BZvB-ER0.js";import{u as O}from"./useControllableState-se4VbC8n.js";import"./_commonjsHelpers-Cpj98o6Y.js";const a=m.forwardRef(({className:s,label:t,checked:_,defaultChecked:N=!1,onChange:R,disabled:o,size:I="md",id:E,...T},q)=>{const[c,M]=O({prop:_,defaultProp:N,onChange:R}),P=m.useId(),u=E??P;return e.jsxs("label",{className:L("ui-switch",s),"data-checked":c||void 0,"data-disabled":o||void 0,"data-size":I,htmlFor:u,children:[e.jsxs("span",{className:"ui-switch__track",children:[e.jsx("input",{ref:q,id:u,type:"checkbox",role:"switch",className:"ui-switch__input",checked:c,disabled:o,onChange:F=>M(F.target.checked),"aria-checked":c,...T}),e.jsx("span",{className:"ui-switch__thumb","aria-hidden":"true"})]}),t&&e.jsx("span",{className:"ui-switch__label",children:t})]})});a.displayName="Switch";a.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}}},composes:["Omit"]};const H={title:"Forms/Switch",component:a,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"}}},l={args:{label:"Enable notifications"}},n={args:{label:"Dark mode",defaultChecked:!0}},r={args:{label:"Disabled",disabled:!0}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(a,{size:"sm",label:"Small",defaultChecked:!0}),e.jsx(a,{size:"md",label:"Medium",defaultChecked:!0}),e.jsx(a,{size:"lg",label:"Large",defaultChecked:!0})]})},d={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16,width:320},children:[{label:"Email notifications",defaultChecked:!0},{label:"Push notifications",defaultChecked:!1},{label:"Weekly digest",defaultChecked:!0},{label:"Marketing emails",defaultChecked:!1}].map(({label:s,defaultChecked:t})=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:14},children:s}),e.jsx(a,{defaultChecked:t})]},s))})};var p,f,h;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Enable notifications"
  }
}`,...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,k,g;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Dark mode",
    defaultChecked: true
  }
}`,...(g=(k=n.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var y,C,x;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Disabled",
    disabled: true
  }
}`,...(x=(C=r.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var w,S,v;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <Switch size="sm" label="Small" defaultChecked />
      <Switch size="md" label="Medium" defaultChecked />
      <Switch size="lg" label="Large" defaultChecked />
    </div>
}`,...(v=(S=i.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var j,z,D;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16,
    width: 320
  }}>
      {[{
      label: "Email notifications",
      defaultChecked: true
    }, {
      label: "Push notifications",
      defaultChecked: false
    }, {
      label: "Weekly digest",
      defaultChecked: true
    }, {
      label: "Marketing emails",
      defaultChecked: false
    }].map(({
      label,
      defaultChecked
    }) => <div key={label} style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
          <span style={{
        fontSize: 14
      }}>{label}</span>
          <Switch defaultChecked={defaultChecked} />
        </div>)}
    </div>
}`,...(D=(z=d.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};const J=["Default","Checked","Disabled","Sizes","Settings"];export{n as Checked,l as Default,r as Disabled,d as Settings,i as Sizes,J as __namedExportsOrder,H as default};
