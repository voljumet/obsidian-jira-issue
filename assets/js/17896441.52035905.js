"use strict";(self.webpackChunkobsidian_jira_issue=self.webpackChunkobsidian_jira_issue||[]).push([[401],{2170:(e,t,a)=>{a.d(t,{A:()=>h});var n=a(991),l=a(7953),r=a(8835),o=a(7363),s=a(4414),c=a(4901),i=a(7554),d=a(988),m=a(2576);function u(e){return l.createElement("svg",(0,n.A)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const b={breadcrumbsContainer:"breadcrumbsContainer_z_oH",breadcrumbHomeIcon:"breadcrumbHomeIcon_YQcR"};function p(e){let{children:t,href:a,isLast:n}=e;const r="breadcrumbs__link";return n?l.createElement("span",{className:r,itemProp:"name"},t):a?l.createElement(i.A,{className:r,href:a,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:r},t)}function v(e){let{children:t,active:a,index:o,addMicrodata:s}=e;return l.createElement("li",(0,n.A)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.A)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,l.createElement("meta",{itemProp:"position",content:String(o+1)}))}function E(){const e=(0,d.A)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(i.A,{"aria-label":(0,m.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.A)("breadcrumbs__link",b.breadcrumbsItemLink),href:e},l.createElement(u,{className:b.breadcrumbHomeIcon})))}function h(){const e=(0,s.OF)(),t=(0,c.Dt)();return e?l.createElement("nav",{className:(0,r.A)(o.G.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,m.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(E,null),e.map(((t,a)=>{const n=a===e.length-1;return l.createElement(v,{key:a,active:n,index:a,addMicrodata:!!t.href},l.createElement(p,{href:t.href,isLast:n},t.label))})))):null}},1903:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Y});var n=a(7953),l=a(8125),r=a(2680);const o=n.createContext(null);function s(e){let{children:t,content:a}=e;const l=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return n.createElement(o.Provider,{value:l},t)}function c(){const e=(0,n.useContext)(o);if(null===e)throw new r.dV("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:a}=c();return n.createElement(l.be,{title:e.title,description:e.description,keywords:t.keywords,image:a.image??t.image})}var d=a(8835),m=a(9449),u=a(1533);function b(){const{metadata:e}=c();return n.createElement(u.A,{previous:e.previous,next:e.next})}var p=a(4742),v=a(9051),E=a(7363),h=a(2576);function g(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(h.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function f(e){let{lastUpdatedBy:t}=e;return n.createElement(h.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function A(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:E.G.common.lastUpdated},n.createElement(h.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(g,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(f,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var _=a(991);const N={iconEdit:"iconEdit_Hf3O"};function L(e){let{className:t,...a}=e;return n.createElement("svg",(0,_.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.A)(N.iconEdit,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function C(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:E.G.common.editThisPage},n.createElement(L,null),n.createElement(h.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var T=a(7554);const k={tag:"tag_bzNy",tagRegular:"tagRegular_SJpj",tagWithCount:"tagWithCount_bg7j"};function U(e){let{permalink:t,label:a,count:l}=e;return n.createElement(T.A,{href:t,className:(0,d.A)(k.tag,l?k.tagWithCount:k.tagRegular)},a,l&&n.createElement("span",null,l))}const w={tags:"tags_Mdqv",tag:"tag_jpLK"};function x(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(h.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,d.A)(w.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:w.tag},n.createElement(U,{label:t,permalink:a}))}))))}const y={lastUpdated:"lastUpdated_IWNM"};function M(e){return n.createElement("div",{className:(0,d.A)(E.G.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(x,e)))}function B(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return n.createElement("div",{className:(0,d.A)(E.G.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(C,{editUrl:t})),n.createElement("div",{className:(0,d.A)("col",y.lastUpdated)},(a||l)&&n.createElement(A,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function I(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:o}=e,s=o.length>0,i=!!(t||a||r);return s||i?n.createElement("footer",{className:(0,d.A)(E.G.docs.docFooter,"docusaurus-mt-lg")},s&&n.createElement(M,{tags:o}),i&&n.createElement(B,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var H=a(5530),P=a(4263);const S={tocCollapsibleButton:"tocCollapsibleButton_kmLy",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_Jk9S"};function V(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,_.A)({type:"button"},a,{className:(0,d.A)("clean-btn",S.tocCollapsibleButton,!t&&S.tocCollapsibleButtonExpanded,a.className)}),n.createElement(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const G={tocCollapsible:"tocCollapsible_xUP3",tocCollapsibleContent:"tocCollapsibleContent_dBWT",tocCollapsibleExpanded:"tocCollapsibleExpanded_vj67"};function D(e){let{toc:t,className:a,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:o,toggleCollapsed:s}=(0,H.u)({initialState:!0});return n.createElement("div",{className:(0,d.A)(G.tocCollapsible,!o&&G.tocCollapsibleExpanded,a)},n.createElement(V,{collapsed:o,onClick:s}),n.createElement(H.N,{lazy:!0,className:G.tocCollapsibleContent,collapsed:o},n.createElement(P.A,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const j={tocMobile:"tocMobile_S7fw"};function R(){const{toc:e,frontMatter:t}=c();return n.createElement(D,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.A)(E.G.docs.docTocMobile,j.tocMobile)})}var z=a(8651);function F(){const{toc:e,frontMatter:t}=c();return n.createElement(z.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:E.G.docs.docTocDesktop})}var O=a(9131),W=a(7317);function q(e){let{children:t}=e;const a=function(){const{metadata:e,frontMatter:t,contentTitle:a}=c();return t.hide_title||void 0!==a?null:e.title}();return n.createElement("div",{className:(0,d.A)(E.G.docs.docMarkdown,"markdown")},a&&n.createElement("header",null,n.createElement(O.A,{as:"h1"},a)),n.createElement(W.A,null,t))}var J=a(2170);const Q={docItemContainer:"docItemContainer_jj9Q",docItemCol:"docItemCol_kjv8"};function K(e){let{children:t}=e;const a=function(){const{frontMatter:e,toc:t}=c(),a=(0,m.l)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?n.createElement(R,null):void 0,desktop:!r||"desktop"!==a&&"ssr"!==a?void 0:n.createElement(F,null)}}();return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.A)("col",!a.hidden&&Q.docItemCol)},n.createElement(p.A,null),n.createElement("div",{className:Q.docItemContainer},n.createElement("article",null,n.createElement(J.A,null),n.createElement(v.A,null),a.mobile,n.createElement(q,null,t),n.createElement(I,null)),n.createElement(b,null))),a.desktop&&n.createElement("div",{className:"col col--3"},a.desktop))}function Y(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,a=e.content;return n.createElement(s,{content:e.content},n.createElement(l.e3,{className:t},n.createElement(i,null),n.createElement(K,null,n.createElement(a,null))))}},1533:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(991),l=a(7953),r=a(2576),o=a(8835),s=a(7554);function c(e){const{permalink:t,title:a,subLabel:n,isNext:r}=e;return l.createElement(s.A,{className:(0,o.A)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},n&&l.createElement("div",{className:"pagination-nav__sublabel"},n),l.createElement("div",{className:"pagination-nav__label"},a))}function i(e){const{previous:t,next:a}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&l.createElement(c,(0,n.A)({},t,{subLabel:l.createElement(r.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&l.createElement(c,(0,n.A)({},a,{subLabel:l.createElement(r.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},9051:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(7953),l=a(8835),r=a(2576),o=a(7363),s=a(1888);function c(e){let{className:t}=e;const a=(0,s.r)();return a.badge?n.createElement("span",{className:(0,l.A)(t,o.G.docs.docVersionBadge,"badge badge--secondary")},n.createElement(r.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},4742:(e,t,a)=>{a.d(t,{A:()=>E});var n=a(7953),l=a(8835),r=a(4783),o=a(7554),s=a(2576),c=a(9770),i=a(7363),d=a(1745),m=a(1888);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function p(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(s.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(o.A,{to:a,onClick:l},n.createElement(s.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:o}}=(0,r.A)(),{pluginId:s}=(0,c.vT)({failfast:!0}),{savePreferredVersionName:m}=(0,d.g1)(s),{latestDocSuggestion:u,latestVersionSuggestion:v}=(0,c.HW)(s),E=u??(h=v).docs.find((e=>e.id===h.mainDocId));var h;return n.createElement("div",{className:(0,l.A)(t,i.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(b,{siteTitle:o,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(p,{versionLabel:v.label,to:E.path,onClick:()=>m(v.name)})))}function E(e){let{className:t}=e;const a=(0,m.r)();return a.banner?n.createElement(v,{className:t,versionMetadata:a}):null}}}]);