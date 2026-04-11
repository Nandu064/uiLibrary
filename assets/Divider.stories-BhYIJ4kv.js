import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{R as y}from"./index-DyTKwKRb.js";import{c as d}from"./slot-BZvB-ER0.js";import"./_commonjsHelpers-Cpj98o6Y.js";const r=y.forwardRef(({className:s,orientation:o="horizontal",label:t,...j},f)=>t?e.jsxs("div",{className:d("ui-divider-label",s),role:"separator","aria-label":t,children:[e.jsx("span",{className:"ui-divider-label__line","aria-hidden":"true"}),e.jsx("span",{className:"ui-divider-label__text",children:t}),e.jsx("span",{className:"ui-divider-label__line","aria-hidden":"true"})]}):e.jsx("hr",{ref:f,className:d("ui-divider",s),"data-orientation":o,role:"separator","aria-orientation":o,...j}));r.displayName="Divider";r.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""}}};const S={title:"Layout/Divider",component:r,tags:["autodocs"]},i={render:()=>e.jsxs("div",{style:{padding:20},children:[e.jsx("p",{children:"Content above"}),e.jsx(r,{}),e.jsx("p",{children:"Content below"})]})},n={render:()=>e.jsxs("div",{style:{padding:20,maxWidth:400},children:[e.jsx("p",{children:"Section one"}),e.jsx(r,{label:"Or continue with"}),e.jsx("p",{children:"Section two"})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",height:60,padding:20,alignItems:"center",gap:16},children:[e.jsx("span",{children:"Left"}),e.jsx(r,{orientation:"vertical"}),e.jsx("span",{children:"Right"})]})};var l,c,p;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 20
  }}>
      <p>Content above</p>
      <Divider />
      <p>Content below</p>
    </div>
}`,...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 20,
    maxWidth: 400
  }}>
      <p>Section one</p>
      <Divider label="Or continue with" />
      <p>Section two</p>
    </div>
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var v,x,g;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    height: 60,
    padding: 20,
    alignItems: "center",
    gap: 16
  }}>
      <span>Left</span>
      <Divider orientation="vertical" />
      <span>Right</span>
    </div>
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const z=["Horizontal","WithLabel","Vertical"];export{i as Horizontal,a as Vertical,n as WithLabel,z as __namedExportsOrder,S as default};
