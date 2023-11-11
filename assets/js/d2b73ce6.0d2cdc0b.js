"use strict";(self.webpackChunkobsidian_jira_issue=self.webpackChunkobsidian_jira_issue||[]).push([[538],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return r?a.createElement(m,s(s({ref:t},u),{},{components:r})):a.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1375:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=r(7605),n=(r(9496),r(9613));const i={sidebar_position:3},s="API Defaulted",o={unversionedId:"api/api-defaulted",id:"api/api-defaulted",title:"API Defaulted",description:"This category contains few functions to directly access the Jira API.",source:"@site/docs/api/api-defaulted.md",sourceDirName:"api",slug:"/api/api-defaulted",permalink:"/obsidian-jira-issue/docs/api/api-defaulted",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"API Base",permalink:"/obsidian-jira-issue/docs/api/api-base"},next:{title:"API Macro",permalink:"/obsidian-jira-issue/docs/api/api-macro"}},c={},l=[{value:"getIssue",id:"getissue",level:2},{value:"getSearchResults",id:"getsearchresults",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"api-defaulted"},"API Defaulted"),(0,n.kt)("p",null,"This category contains few functions to directly access the Jira API."),(0,n.kt)("p",null,"The difference with the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/api-base"},"Base")," section is the format of the response where all the fields have been set to a default value in case the Jira API call replied with some missing data. This type of API allows you to simplify the data access because you don't need to check if the fields exists."),(0,n.kt)("p",null,"The responses are cached in order to reduce the network load. You can clean the cache using ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/api-util#clearCache"},"dedicated api")," or the ",(0,n.kt)("a",{parentName:"p",href:"/docs/components/commands#clear-cache"},"command"),"."),(0,n.kt)("h2",{id:"getissue"},"getIssue"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$ji.defaulted.getIssue(issueKey: string, options: { fields?: string[], account?: IJiraIssueAccountSettings } = {})"))),(0,n.kt)("p",null,"Read ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/api-base#getIssue"},"$ji.base.getIssue")),(0,n.kt)("h2",{id:"getsearchresults"},"getSearchResults"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$ji.defaulted.getSearchResults(query: string, options: { limit?: number, offset?: number, fields?: string[], account?: IJiraIssueAccountSettings } = {})"))),(0,n.kt)("p",null,"Read ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/api-base#getSearchResults"},"$ji.base.getSearchResults")))}d.isMDXComponent=!0}}]);