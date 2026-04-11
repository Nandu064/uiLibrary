import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{R as i}from"./index-DyTKwKRb.js";import{c as $}from"./slot-BZvB-ER0.js";import"./_commonjsHelpers-Cpj98o6Y.js";function F(s){const a=s.trim().split(/\s+/);return a.length===1?a[0].charAt(0).toUpperCase():(a[0].charAt(0)+a[a.length-1].charAt(0)).toUpperCase()}const H=()=>e.jsx("svg",{className:"ui-avatar__icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{d:"M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"})}),r=i.forwardRef(({className:s,src:a,alt:c,name:o,size:f="md",variant:y="circle",badge:t,...A},l)=>{const[n,j]=i.useState(!1),m=a&&!n,b=!m&&o;return e.jsxs("span",{ref:l,className:$("ui-avatar",s),"data-size":f,"data-variant":y,...A,children:[m&&e.jsx("img",{src:a,alt:c??o??"Avatar",onError:()=>j(!0)}),!m&&b&&e.jsx("span",{className:"ui-avatar__initials","aria-hidden":"true",children:F(o)}),!m&&!b&&e.jsx(H,{}),t&&e.jsx("span",{className:"ui-avatar__badge",children:t})]})});r.displayName="Avatar";const z=i.forwardRef(({className:s,max:a,size:c,children:o,...f},y)=>{const t=i.Children.toArray(o),A=a!==void 0?t.slice(0,a):t,l=a!==void 0?t.length-a:0;return e.jsxs("div",{ref:y,className:$("ui-avatar-group",s),...f,children:[A.map((n,j)=>i.isValidElement(n)?i.cloneElement(n,{size:c??n.props.size,key:j}):n),l>0&&e.jsxs("span",{className:"ui-avatar ui-avatar--overflow","data-size":c??"md","aria-label":`${l} more`,children:["+",l]})]})});z.displayName="AvatarGroup";r.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"circle" | "square"',elements:[{name:"literal",value:'"circle"'},{name:"literal",value:'"square"'}]},description:"",defaultValue:{value:'"circle"',computed:!1}},badge:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};z.__docgenInfo={description:"",methods:[],displayName:"AvatarGroup",props:{max:{required:!1,tsType:{name:"number"},description:""},size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Y={title:"Data Display/Avatar",component:r,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]},variant:{control:"select",options:["circle","square"]}}},d={args:{name:"John Doe"}},p={args:{src:"https://i.pravatar.cc/150?img=3",alt:"User avatar",name:"Jane"}},u={render:()=>e.jsx("div",{style:{display:"flex",gap:12,alignItems:"center"},children:["xs","sm","md","lg","xl"].map(s=>e.jsx(r,{name:"John Doe",size:s},s))})},v={args:{name:"JS",variant:"square",size:"lg"}},g={args:{size:"md"}},h={render:()=>e.jsxs(z,{max:3,children:[e.jsx(r,{name:"Alice A"}),e.jsx(r,{name:"Bob B"}),e.jsx(r,{name:"Carol C"}),e.jsx(r,{name:"David D"}),e.jsx(r,{name:"Eve E"})]})},x={args:{name:"John Doe",size:"lg",badge:e.jsx("span",{style:{width:10,height:10,borderRadius:"50%",background:"#22c55e",border:"2px solid white",display:"block"}})}};var q,w,R;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    name: "John Doe"
  }
}`,...(R=(w=d.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var S,N,I;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    src: "https://i.pravatar.cc/150?img=3",
    alt: "User avatar",
    name: "Jane"
  }
}`,...(I=(N=p.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var D,_,E;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 12,
    alignItems: "center"
  }}>
      {(["xs", "sm", "md", "lg", "xl"] as const).map(size => <Avatar key={size} name="John Doe" size={size} />)}
    </div>
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var J,T,C;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    name: "JS",
    variant: "square",
    size: "lg"
  }
}`,...(C=(T=v.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var B,G,k;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: "md"
  }
}`,...(k=(G=g.parameters)==null?void 0:G.docs)==null?void 0:k.source}}};var W,U,P;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <AvatarGroup max={3}>
      <Avatar name="Alice A" />
      <Avatar name="Bob B" />
      <Avatar name="Carol C" />
      <Avatar name="David D" />
      <Avatar name="Eve E" />
    </AvatarGroup>
}`,...(P=(U=h.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var V,M,O;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    name: "John Doe",
    size: "lg",
    badge: <span style={{
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "#22c55e",
      border: "2px solid white",
      display: "block"
    }} />
  }
}`,...(O=(M=x.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const Z=["WithInitials","WithImage","AllSizes","Square","Placeholder","Group","WithBadge"];export{u as AllSizes,h as Group,g as Placeholder,v as Square,x as WithBadge,p as WithImage,d as WithInitials,Z as __namedExportsOrder,Y as default};
