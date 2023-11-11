"use strict";(self.webpackChunkobsidian_jira_issue=self.webpackChunkobsidian_jira_issue||[]).push([[165],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7605),a=(n(9496),n(9613));const i={sidebar_position:4},o="Advanced configuration",l={unversionedId:"configuration/advanced",id:"configuration/advanced",title:"Advanced configuration",description:"Other plugin settings.",source:"@site/docs/configuration/advanced.md",sourceDirName:"configuration",slug:"/configuration/advanced",permalink:"/obsidian-jira-issue/docs/configuration/advanced",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Search default columns",permalink:"/obsidian-jira-issue/docs/configuration/search-default-columns"},next:{title:"Components",permalink:"/obsidian-jira-issue/docs/category/components"}},s={},d=[{value:"Cache time",id:"cache-time",level:2},{value:"Debug mode",id:"debug-mode",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"advanced-configuration"},"Advanced configuration"),(0,a.kt)("p",null,"Other plugin settings."),(0,a.kt)("h2",{id:"cache-time"},"Cache time"),(0,a.kt)("p",null,"To speed up the issues rendering and reduce the network usage, the plugin relies on a in-memory cache."),(0,a.kt)("p",null,"The cache stores the issues data and the JQL search results.\nEvery time a component is rendered, the plugin first check if the data is available in the cache and if not, it retrieves the data from the Jira server."),(0,a.kt)("p",null,"The items stored in the in-memory cache have an expiration date in order to periodically download updated information on the issues status and the search results. The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"15m"),"."),(0,a.kt)("p",null,"The syntax used to fill this field must be compatible with the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/vercel/ms#readme"},"JavaScript library ms"),"."),(0,a.kt)("p",null,"Examples"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Example"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"5s")),(0,a.kt)("td",{parentName:"tr",align:null},"5 seconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1m")),(0,a.kt)("td",{parentName:"tr",align:null},"1 minute")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"2h")),(0,a.kt)("td",{parentName:"tr",align:null},"2 hours")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1d")),(0,a.kt)("td",{parentName:"tr",align:null},"1 day")))),(0,a.kt)("h2",{id:"debug-mode"},"Debug mode"),(0,a.kt)("p",null,"In order to help users debug authentication issues and provide useful information when submitting new Issues on GitHub, the plugin provides a way to increase the debug information in the Obsidian.md console."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Log Requests and Responses")," option allow to display in the console all the request and responses exchanged with the Jira Server."))}p.isMDXComponent=!0}}]);