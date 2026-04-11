import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{R as c}from"./index-DyTKwKRb.js";import{c as $}from"./slot-BZvB-ER0.js";import"./_commonjsHelpers-Cpj98o6Y.js";function F(n){var o,s;const a=n.trim();if(!a)return"";const r=a.split(/\s+/),i=((o=r[0])==null?void 0:o.charAt(0))??"",m=((s=r[r.length-1])==null?void 0:s.charAt(0))??"";return(i+(r.length>1?m:"")).toUpperCase()}const H=()=>e.jsx("svg",{className:"ui-avatar__icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{d:"M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"})}),t=c.forwardRef(({className:n,src:a,alt:r,name:i,size:m="md",variant:o="circle",badge:s,...A},d)=>{const[l,j]=c.useState(!1),p=a&&!l,b=!p&&i;return e.jsxs("span",{ref:d,className:$("ui-avatar",n),"data-size":m,"data-variant":o,...A,children:[p&&e.jsx("img",{src:a,alt:r??i??"Avatar",onError:()=>j(!0)}),!p&&b&&e.jsx("span",{className:"ui-avatar__initials","aria-hidden":"true",children:F(i)}),!p&&!b&&e.jsx(H,{}),s&&e.jsx("span",{className:"ui-avatar__badge",children:s})]})});t.displayName="Avatar";const z=c.forwardRef(({className:n,max:a,size:r,children:i,...m},o)=>{const s=c.Children.toArray(i),A=a!==void 0?s.slice(0,a):s,d=a!==void 0?s.length-a:0;return e.jsxs("div",{ref:o,className:$("ui-avatar-group",n),...m,children:[A.map((l,j)=>c.isValidElement(l)?c.cloneElement(l,{size:r??l.props.size,key:j}):l),d>0&&e.jsxs("span",{className:"ui-avatar ui-avatar--overflow","data-size":r??"md","aria-label":`${d} more`,children:["+",d]})]})});z.displayName="AvatarGroup";t.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"circle" | "square"',elements:[{name:"literal",value:'"circle"'},{name:"literal",value:'"square"'}]},description:"",defaultValue:{value:'"circle"',computed:!1}},badge:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};z.__docgenInfo={description:"",methods:[],displayName:"AvatarGroup",props:{max:{required:!1,tsType:{name:"number"},description:""},size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Y={title:"Data Display/Avatar",component:t,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]},variant:{control:"select",options:["circle","square"]}}},u={args:{name:"John Doe"}},v={args:{src:"https://i.pravatar.cc/150?img=3",alt:"User avatar",name:"Jane"}},g={render:()=>e.jsx("div",{style:{display:"flex",gap:12,alignItems:"center"},children:["xs","sm","md","lg","xl"].map(n=>e.jsx(t,{name:"John Doe",size:n},n))})},h={args:{name:"JS",variant:"square",size:"lg"}},x={args:{size:"md"}},f={render:()=>e.jsxs(z,{max:3,children:[e.jsx(t,{name:"Alice A"}),e.jsx(t,{name:"Bob B"}),e.jsx(t,{name:"Carol C"}),e.jsx(t,{name:"David D"}),e.jsx(t,{name:"Eve E"})]})},y={args:{name:"John Doe",size:"lg",badge:e.jsx("span",{style:{width:10,height:10,borderRadius:"50%",background:"#22c55e",border:"2px solid white",display:"block"}})}};var q,w,R;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    name: "John Doe"
  }
}`,...(R=(w=u.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var S,N,I;v.parameters={...v.parameters,docs:{...(S=v.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    src: "https://i.pravatar.cc/150?img=3",
    alt: "User avatar",
    name: "Jane"
  }
}`,...(I=(N=v.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var D,_,E;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 12,
    alignItems: "center"
  }}>
      {(["xs", "sm", "md", "lg", "xl"] as const).map(size => <Avatar key={size} name="John Doe" size={size} />)}
    </div>
}`,...(E=(_=g.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var J,T,B;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    name: "JS",
    variant: "square",
    size: "lg"
  }
}`,...(B=(T=h.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var C,G,k;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: "md"
  }
}`,...(k=(G=x.parameters)==null?void 0:G.docs)==null?void 0:k.source}}};var W,P,U;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <AvatarGroup max={3}>
      <Avatar name="Alice A" />
      <Avatar name="Bob B" />
      <Avatar name="Carol C" />
      <Avatar name="David D" />
      <Avatar name="Eve E" />
    </AvatarGroup>
}`,...(U=(P=f.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var V,M,O;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(O=(M=y.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const Z=["WithInitials","WithImage","AllSizes","Square","Placeholder","Group","WithBadge"];export{g as AllSizes,f as Group,x as Placeholder,h as Square,y as WithBadge,v as WithImage,u as WithInitials,Z as __namedExportsOrder,Y as default};
