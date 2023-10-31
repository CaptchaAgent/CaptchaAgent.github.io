"use strict";(self.webpackChunkCaptchaAgent=self.webpackChunkCaptchaAgent||[]).push([[6329],{6495:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var i=n(5893),r=n(1151),s=n(2991);const c={title:"Getting Started",sidebar_position:2},o=void 0,a={id:"getting-started/index",title:"Getting Started",description:"",source:"@site/docs/getting-started/index.md",sourceDirName:"getting-started",slug:"/getting-started/",permalink:"/docs/getting-started/",draft:!1,unlisted:!1,editUrl:"https://github.com/CaptchaAgent/docs-source/tree/main/docs/getting-started/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Getting Started",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Installation",permalink:"/docs/getting-started/installation"}},d={},l=[];function u(t){return(0,i.jsx)(s.Z,{})}function m(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(u,{...t})}):u()}},2991:(t,e,n)=>{n.d(e,{Z:()=>x});n(7294);var i=n(6010),r=n(2802),s=n(9960),c=n(3919),o=n(5999),a=n(2503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(5893);function u(t){let{href:e,children:n}=t;return(0,l.jsx)(s.Z,{href:e,className:(0,i.Z)("card padding--lg",d.cardContainer),children:n})}function m(t){let{href:e,icon:n,title:r,description:s}=t;return(0,l.jsxs)(u,{href:e,children:[(0,l.jsxs)(a.Z,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:r,children:[n," ",r]}),s&&(0,l.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function p(t){let{item:e}=t;const n=(0,r.LM)(e);return n?(0,l.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f(t){let{item:e}=t;const n=(0,c.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.xz)(e.docId??void 0);return(0,l.jsx)(m,{href:e.href,icon:n,title:e.label,description:e.description??i?.description})}function g(t){let{item:e}=t;switch(e.type){case"link":return(0,l.jsx)(f,{item:e});case"category":return(0,l.jsx)(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function h(t){let{className:e}=t;const n=(0,r.jA)();return(0,l.jsx)(x,{items:n.items,className:e})}function x(t){const{items:e,className:n}=t;if(!e)return(0,l.jsx)(h,{...t});const s=(0,r.MN)(e);return(0,l.jsx)("section",{className:(0,i.Z)("row",n),children:s.map(((t,e)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(g,{item:t})},e)))})}},1151:(t,e,n)=>{n.d(e,{Z:()=>o,a:()=>c});var i=n(7294);const r={},s=i.createContext(r);function c(t){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:c(t.components),i.createElement(s.Provider,{value:e},t.children)}}}]);