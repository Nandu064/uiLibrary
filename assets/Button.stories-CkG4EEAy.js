import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as r}from"./Button-NI9E2YlZ.js";import"./index-DyTKwKRb.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./slot-BZvB-ER0.js";const N={title:"Actions/Button",component:r,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["solid","outline","ghost","link"]},size:{control:"select",options:["sm","md","lg"]},colorScheme:{control:"select",options:["primary","danger","success"]},loading:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},children:{control:"text"}}},n={args:{children:"Button"}},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(r,{variant:"solid",children:"Solid"}),e.jsx(r,{variant:"outline",children:"Outline"}),e.jsx(r,{variant:"ghost",children:"Ghost"}),e.jsx(r,{variant:"link",children:"Link"})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"}),e.jsx(r,{size:"lg",children:"Large"})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(r,{colorScheme:"primary",children:"Primary"}),e.jsx(r,{colorScheme:"danger",children:"Danger"})]})},o={args:{loading:!0,loadingText:"Saving...",children:"Save"}},i={args:{disabled:!0,children:"Disabled"}},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(r,{leftIcon:e.jsx("span",{children:"←"}),children:"Back"}),e.jsx(r,{rightIcon:e.jsx("span",{children:"→"}),children:"Next"})]})},c={render:()=>e.jsx(r,{asChild:!0,variant:"outline",children:e.jsx("a",{href:"https://example.com",children:"Visit site"})})};var d,p,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: "Button"
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,g,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "12px",
    flexWrap: "wrap"
  }}>
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,B,v;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "12px",
    alignItems: "center"
  }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
}`,...(v=(B=t.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var S,y,j;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "12px"
  }}>
      <Button colorScheme="primary">Primary</Button>
      <Button colorScheme="danger">Danger</Button>
    </div>
}`,...(j=(y=a.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var f,b,k;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    loading: true,
    loadingText: "Saving...",
    children: "Save"
  }
}`,...(k=(b=o.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var z,D,I;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: "Disabled"
  }
}`,...(I=(D=i.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var L,W,C;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "12px"
  }}>
      <Button leftIcon={<span>←</span>}>Back</Button>
      <Button rightIcon={<span>→</span>}>Next</Button>
    </div>
}`,...(C=(W=l.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var V,A,O;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Button asChild variant="outline">
      <a href="https://example.com">Visit site</a>
    </Button>
}`,...(O=(A=c.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};const P=["Default","Variants","Sizes","ColorSchemes","Loading","Disabled","WithIcons","AsLink"];export{c as AsLink,a as ColorSchemes,n as Default,i as Disabled,o as Loading,t as Sizes,s as Variants,l as WithIcons,P as __namedExportsOrder,N as default};
