import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{R as o}from"./index-DyTKwKRb.js";import{c as i}from"./slot-BZvB-ER0.js";import{B as p}from"./Button-NI9E2YlZ.js";import"./_commonjsHelpers-Cpj98o6Y.js";const n=o.forwardRef(({className:a,variant:r="default",children:t,...g},v)=>e.jsx("div",{ref:v,className:i("ui-card",a),"data-variant":r,...g,children:t}));n.displayName="Card";const c=o.forwardRef(({className:a,...r},t)=>e.jsx("div",{ref:t,className:i("ui-card__header",a),...r}));c.displayName="CardHeader";const l=o.forwardRef(({className:a,...r},t)=>e.jsx("div",{ref:t,className:i("ui-card__body",a),...r}));l.displayName="CardBody";const m=o.forwardRef(({className:a,...r},t)=>e.jsx("div",{ref:t,className:i("ui-card__footer",a),...r}));m.displayName="CardFooter";n.__docgenInfo={description:"",methods:[],displayName:"Card",props:{variant:{required:!1,tsType:{name:"union",raw:'"default" | "elevated" | "outline" | "ghost"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"elevated"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"ghost"'}]},description:"",defaultValue:{value:'"default"',computed:!1}}}};c.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};l.__docgenInfo={description:"",methods:[],displayName:"CardBody"};m.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};const R={title:"Layout/Card",component:n,tags:["autodocs"]},d={render:()=>e.jsxs(n,{style:{maxWidth:380},children:[e.jsx(c,{children:e.jsx("strong",{children:"Card Title"})}),e.jsx(l,{children:e.jsx("p",{style:{margin:0},children:"Card content goes here. Add any components or text."})}),e.jsxs(m,{style:{display:"flex",justifyContent:"flex-end",gap:8},children:[e.jsx(p,{variant:"ghost",size:"sm",children:"Cancel"}),e.jsx(p,{size:"sm",children:"Confirm"})]})]})},s={render:()=>e.jsx("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:["default","elevated","outline","ghost"].map(a=>e.jsx(n,{variant:a,style:{width:200},children:e.jsxs(l,{children:[e.jsx("strong",{children:a}),e.jsx("p",{style:{margin:"4px 0 0"},children:"Content"})]})},a))})};var u,f,y;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Card style={{
    maxWidth: 380
  }}>
      <CardHeader><strong>Card Title</strong></CardHeader>
      <CardBody><p style={{
        margin: 0
      }}>Card content goes here. Add any components or text.</p></CardBody>
      <CardFooter style={{
      display: "flex",
      justifyContent: "flex-end",
      gap: 8
    }}>
        <Button variant="ghost" size="sm">Cancel</Button>
        <Button size="sm">Confirm</Button>
      </CardFooter>
    </Card>
}`,...(y=(f=d.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var C,x,h;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 16,
    flexWrap: "wrap"
  }}>
      {(["default", "elevated", "outline", "ghost"] as const).map(v => <Card key={v} variant={v} style={{
      width: 200
    }}>
          <CardBody><strong>{v}</strong><p style={{
          margin: "4px 0 0"
        }}>Content</p></CardBody>
        </Card>)}
    </div>
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const F=["Default","Variants"];export{d as Default,s as Variants,F as __namedExportsOrder,R as default};
