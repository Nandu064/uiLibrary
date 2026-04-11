import{R as i}from"./index-DyTKwKRb.js";function a(t){var o,n,e="";if(typeof t=="string"||typeof t=="number")e+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(o=0;o<r;o++)t[o]&&(n=a(t[o]))&&(e&&(e+=" "),e+=n)}else for(n in t)t[n]&&(e&&(e+=" "),e+=n);return e}function f(){for(var t,o,n=0,e="",r=arguments.length;n<r;n++)(t=arguments[n])&&(o=a(t))&&(e&&(e+=" "),e+=o);return e}function p(...t){return f(t)}function m(...t){return o=>{t.forEach(n=>{typeof n=="function"?n(o):n!=null&&(n.current=o)})}}const c=i.forwardRef(({children:t,...o},n)=>{const e=i.Children.toArray(t).find(i.isValidElement);if(!e)return i.createElement(i.Fragment,null,t);const r=e.props;return i.cloneElement(e,{...u(o,r),ref:n?m(n,e.ref):e.ref})});c.displayName="Slot";function u(t,o){const n={...o};for(const e in t){const r=t[e],l=o[e];typeof r=="function"&&typeof l=="function"&&e.startsWith("on")?n[e]=(...s)=>{l(...s),r(...s)}:e==="className"?n[e]=[r,l].filter(Boolean).join(" "):e==="style"?n[e]={...r,...l}:n[e]=r!==void 0?r:l}return n}c.__docgenInfo={description:`Merges its props onto the immediate child element.
Used to implement the \`asChild\` pattern without Radix UI.

@example
<Slot className="my-class" onClick={handler}>
  <a href="/link">Click me</a>
</Slot>
// Renders: <a href="/link" class="my-class" onclick={handler}>Click me</a>`,methods:[],displayName:"Slot",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};export{c as S,p as c};
