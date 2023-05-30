"use strict";(self.webpackChunkobsidian_jira_issue=self.webpackChunkobsidian_jira_issue||[]).push([[891],{9613:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var i=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=i.createContext({}),l=function(e){var t=i.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),g=r,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||n;return a?i.createElement(m,o(o({ref:t},c),{},{components:a})):i.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<n;l++)o[l]=a[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}g.displayName="MDXCreateElement"},837:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var i=a(795),r=(a(9496),a(9613));const n={sidebar_position:1},o="API Introduction",s={unversionedId:"api/api-introduction",id:"api/api-introduction",title:"API Introduction",description:"The plugin exposes some API that can be used by other plugins that provide JavaScript access.",source:"@site/docs/api/api-introduction.md",sourceDirName:"api",slug:"/api/api-introduction",permalink:"/obsidian-jira-issue/docs/api/api-introduction",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/obsidian-jira-issue/docs/category/api"},next:{title:"API Base",permalink:"/obsidian-jira-issue/docs/api/api-base"}},p={},l=[{value:"API Categories",id:"api-categories",level:2},{value:"API Category - Base",id:"api-category---base",level:3},{value:"API Category - Defaulted",id:"api-category---defaulted",level:3},{value:"API Category - Macro",id:"api-category---macro",level:3},{value:"API Category - Chart",id:"api-category---chart",level:3},{value:"API Category - Account",id:"api-category---account",level:3},{value:"API Category - Util",id:"api-category---util",level:3}],c={toc:l},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api-introduction"},"API Introduction"),(0,r.kt)("p",null,"The plugin exposes some API that can be used by other plugins that provide JavaScript access."),(0,r.kt)("p",null,"Some of the plugin that are compatible with those API are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/blacksmithgu/obsidian-dataview"},"Dataview")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SilentVoid13/Templater"},"Templater")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/phibr0/obsidian-charts"},"Obsidian Chart"))),(0,r.kt)("p",null,"It is possible to access the API using the plugin reference"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"this.app.plugins.plugins['obsidian-jira-issue'].api\n")),(0,r.kt)("p",null,"or the global variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"$ji\n")),(0,r.kt)("h2",{id:"api-categories"},"API Categories"),(0,r.kt)("p",null,"The API are divided in few categories to help the navigation."),(0,r.kt)("h3",{id:"api-category---base"},"API Category - ",(0,r.kt)("a",{parentName:"h3",href:"/docs/api/api-base"},"Base")),(0,r.kt)("p",null,"This category contains all the functions to directly access the Jira API."),(0,r.kt)("p",null,"The responses are cached in order to reduce the network load."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/api-base#getIssue"},(0,r.kt)("inlineCode",{parentName:"a"},"$ji.base.getIssue(issueKey: string, options: { fields?: string[], account?: IJiraIssueAccountSettings } = {})"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/api-base#getSearchResults"},(0,r.kt)("inlineCode",{parentName:"a"},"$ji.base.getSearchResults(query: string, options: { limit?: number, offset?: number, fields?: string[], account?: IJiraIssueAccountSettings } = {})"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/api-base#getDevStatus"},(0,r.kt)("inlineCode",{parentName:"a"},"$ji.base.getDevStatus(issueId: string, options: { account?: IJiraIssueAccountSettings } = {})"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/api-base#getBoards"},(0,r.kt)("inlineCode",{parentName:"a"},"$ji.base.getBoards(projectKeyOrId: string, options: { limit?: number, offset?: number, account?: IJiraIssueAccountSettings } = {})"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/api-base#getSprint"},(0,r.kt)("inlineCode",{parentName:"a"},"$ji.base.getSprint(sprintId: number, options: { account?: IJiraIssueAccountSettings } = {})"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/api-base#getSprints"},(0,r.kt)("inlineCode",{parentName:"a"},"$ji.base.getSprints(boardId: number, options: { limit?: number, offset?: number, state?: ESprintState[], account?: IJiraIssueAccountSettings } = {})"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/api-base#getLoggedUser"},(0,r.kt)("inlineCode",{parentName:"a"},"$ji.base.getLoggedUser(account: IJiraIssueAccountSettings = null)")))),(0,r.kt)("h3",{id:"api-category---defaulted"},"API Category - ",(0,r.kt)("a",{parentName:"h3",href:"/docs/api/api-defaulted"},"Defaulted")),(0,r.kt)("p",null,"This category contains few functions to directly access the Jira API."),(0,r.kt)("p",null,"The difference with the ",(0,r.kt)("a",{parentName:"p",href:"#api-category---base"},"Base")," section is the format of the response where all the fields have been set to a default value in case the Jira API call replied with some missing data. This type of API allows you to simplify the data access because you don't need to check if the fields exists."),(0,r.kt)("p",null,"The responses are cached in order to reduce the network load."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/api-defaulted#getIssue"},(0,r.kt)("inlineCode",{parentName:"a"},"$ji.defaulted.getIssue(issueKey: string, options: { fields?: string[], account?: IJiraIssueAccountSettings } = {})"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/api-defaulted#getSearchResults"},(0,r.kt)("inlineCode",{parentName:"a"},"$ji.defaulted.getSearchResults(query: string, options: { limit?: number, offset?: number, fields?: string[], account?: IJiraIssueAccountSettings } = {})")))),(0,r.kt)("h3",{id:"api-category---macro"},"API Category - ",(0,r.kt)("a",{parentName:"h3",href:"/docs/api/api-macro"},"Macro")),(0,r.kt)("p",null,"This category contains functions that perform few Jira API call to get some advanced information. This category is designed to help the user access some data with few steps."),(0,r.kt)("p",null,"Please open an Issue on GitHub to request more of this functions."),(0,r.kt)("p",null,"The responses are cached in order to reduce the network load."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/api-macro#getActiveSprint"},(0,r.kt)("inlineCode",{parentName:"a"},"$ji.macro.getActiveSprint(projectKeyOrId: string)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/api-macro#getActiveSprintName"},(0,r.kt)("inlineCode",{parentName:"a"},"$ji.macro.getActiveSprintName(projectKeyOrId: string)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/api-macro#getWorkLogBySprint"},(0,r.kt)("inlineCode",{parentName:"a"},"$ji.macro.getWorkLogBySprint(projectKeyOrId: string, sprint: IJiraSprint)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/api-macro#getWorkLogBySprintId"},(0,r.kt)("inlineCode",{parentName:"a"},"$ji.macro.getWorkLogBySprintId(projectKeyOrId: string, sprintId: number)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/api-macro#getWorkLogByDates"},(0,r.kt)("inlineCode",{parentName:"a"},"$ji.macro.getWorkLogByDates(projectKeyOrId: string, startDate: string, endDate: string = 'now()')"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/api-macro#getWorkLogSeriesByUser"},(0,r.kt)("inlineCode",{parentName:"a"},"$ji.macro.getWorkLogSeriesByUser(projectKeyOrId: string, startDate: string, endDate: string = 'now()')"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/api-macro#getVelocity"},(0,r.kt)("inlineCode",{parentName:"a"},"$ji.macro.getVelocity(projectKeyOrId: string, sprintId: number, storyPointFieldName: string = 'aggregatetimeoriginalestimate')")))),(0,r.kt)("h3",{id:"api-category---chart"},"API Category - ",(0,r.kt)("a",{parentName:"h3",href:"/docs/api/api-chart"},"Chart")),(0,r.kt)("p",null,"This category contains functions to generate charts using the community plugin ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/phibr0/obsidian-charts"},"Obsidian-Charts"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/api-chart#getWorklogPerDay"},(0,r.kt)("inlineCode",{parentName:"a"},"$ji.chart.getWorklogPerDay(projectKeyOrId: string, startDate: string, endDate: string = 'now()')"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/api-chart#getWorklogPerUser"},(0,r.kt)("inlineCode",{parentName:"a"},"$ji.chart.getWorklogPerUser(projectKeyOrId: string, startDate: string, endDate: string = 'now()', options: { format?: EChartFormat, capacity?: ISeries } = {})")))),(0,r.kt)("h3",{id:"api-category---account"},"API Category - ",(0,r.kt)("a",{parentName:"h3",href:"/docs/api/api-account"},"Account")),(0,r.kt)("p",null,"This category contains functions to access the accounts data stored in the Obsidian settings of this plugin."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/api-account#getAccountByAlias"},(0,r.kt)("inlineCode",{parentName:"a"},"$ji.account.getAccountByAlias(alias: string)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/api-account#getAccountByHost"},(0,r.kt)("inlineCode",{parentName:"a"},"$ji.account.getAccountByHost(host: string)")))),(0,r.kt)("h3",{id:"api-category---util"},"API Category - ",(0,r.kt)("a",{parentName:"h3",href:"/docs/api/api-util"},"Util")),(0,r.kt)("p",null,"This category contains generic functions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/api-util#clearCache"},(0,r.kt)("inlineCode",{parentName:"a"},"$ji.util.clearCache()")))))}d.isMDXComponent=!0}}]);