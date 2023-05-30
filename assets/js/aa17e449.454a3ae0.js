"use strict";(self.webpackChunkobsidian_jira_issue=self.webpackChunkobsidian_jira_issue||[]).push([[438],{9613:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var n=a(9496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),o=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=o(t.components);return n.createElement(s.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),d=o(a),c=r,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return a?n.createElement(k,i(i({ref:e},p),{},{components:a})):n.createElement(k,i({ref:e},p))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=t,u[d]="string"==typeof t?t:r,i[1]=u;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3629:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var n=a(795),r=(a(9496),a(9613));const l={sidebar_position:2},i="API Base",u={unversionedId:"api/api-base",id:"api/api-base",title:"API Base",description:"This category contains all the functions to directly access the Jira API. You can find all the api description at the official documentation page.",source:"@site/docs/api/api-base.md",sourceDirName:"api",slug:"/api/api-base",permalink:"/obsidian-jira-issue/docs/api/api-base",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"API Introduction",permalink:"/obsidian-jira-issue/docs/api/api-introduction"},next:{title:"API Defaulted",permalink:"/obsidian-jira-issue/docs/api/api-defaulted"}},s={},o=[{value:"getIssue",id:"getissue",level:2},{value:"getSearchResults",id:"getsearchresults",level:2},{value:"getDevStatus",id:"getdevstatus",level:2},{value:"getBoards",id:"getboards",level:2},{value:"getSprints",id:"getsprints",level:2},{value:"getLoggedUser",id:"getloggeduser",level:2}],p={toc:o},d="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api-base"},"API Base"),(0,r.kt)("p",null,"This category contains all the functions to directly access the Jira API. You can find all the api description at the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.atlassian.com/cloud/jira/platform/rest"},"official documentation page"),"."),(0,r.kt)("p",null,"The responses are cached in order to reduce the network load. You can clean the cache using ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/api-util#clearCache"},"dedicated api")," or the ",(0,r.kt)("a",{parentName:"p",href:"/docs/components/commands#clear-cache"},"command"),"."),(0,r.kt)("h2",{id:"getissue"},"getIssue"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$ji.base.getIssue(issueKey: string, options: { fields?: string[], account?: IJiraIssueAccountSettings } = {})"))),(0,r.kt)("p",null,"Retrieve all details related to an issue based on the key. Use the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"options.fields")," to specify the list of fields you need, in order to reduce the Jira and network load."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"issueKey"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Id or Key of the issue to retrieve")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options.fields"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null},"Most of the fields"),(0,r.kt)("td",{parentName:"tr",align:null},"List of fields to retrieve")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options.account"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IJiraIssueAccountSettings")),(0,r.kt)("td",{parentName:"tr",align:null},"Automatically detect"),(0,r.kt)("td",{parentName:"tr",align:null},"Jira account to use. Use the ",(0,r.kt)("a",{parentName:"td",href:"/docs/api/api-util"},"util api")," to retrieve an account object.")))),(0,r.kt)("p",null,"Return value type: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/marc0l92/obsidian-jira-issue/blob/master/src/interfaces/issueInterfaces.ts#L3-L79"},(0,r.kt)("inlineCode",{parentName:"a"},"Promise<IJiraIssue>"))),(0,r.kt)("h2",{id:"getsearchresults"},"getSearchResults"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$ji.base.getSearchResults(query: string, options: { limit?: number, offset?: number, fields?: string[], account?: IJiraIssueAccountSettings } = {})"))),(0,r.kt)("p",null,"Execute a JQL query to get all the matching issues."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"JQL query to find the issues")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options.limit"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number > 0")),(0,r.kt)("td",{parentName:"tr",align:null},"Configured in Settings"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of issue to extract")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options.fields"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null},"Most of the fields"),(0,r.kt)("td",{parentName:"tr",align:null},"List of fields to retrieve")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options.account"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IJiraIssueAccountSettings")),(0,r.kt)("td",{parentName:"tr",align:null},"Automatically detect"),(0,r.kt)("td",{parentName:"tr",align:null},"Jira account to use. Use the ",(0,r.kt)("a",{parentName:"td",href:"/docs/api/api-util"},"util api")," to retrieve an account object.")))),(0,r.kt)("p",null,"Return value type: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/marc0l92/obsidian-jira-issue/blob/master/src/interfaces/issueInterfaces.ts#L107-L113"},(0,r.kt)("inlineCode",{parentName:"a"},"Promise<IJiraSearchResults>"))),(0,r.kt)("h2",{id:"getdevstatus"},"getDevStatus"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$ji.base.getDevStatus(issueId: string, options: { account?: IJiraIssueAccountSettings } = {})"))),(0,r.kt)("p",null,"Retrieve the pull requests open/merged/declined related to a user story."),(0,r.kt)("p",null,"This API works only if the version control software has been connected to your Jira account using OAuth2.\nTo check your the list of Authorized Application go to ",(0,r.kt)("a",{parentName:"p",href:"https://community.atlassian.com/t5/Jira-questions/Where-does-JIRA-s-Authorized-Application-s-list-information/qaq-p/602471"},(0,r.kt)("inlineCode",{parentName:"a"},"Profile > Tools > View OAuth Access Tokens")),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"issueId"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Issue ID. The id can be found using the ",(0,r.kt)("a",{parentName:"td",href:"/docs/api/api-base#getIssue"},"getIssue")," API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options.account"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IJiraIssueAccountSettings")),(0,r.kt)("td",{parentName:"tr",align:null},"Automatically detect"),(0,r.kt)("td",{parentName:"tr",align:null},"Jira account to use. Use the ",(0,r.kt)("a",{parentName:"td",href:"/docs/api/api-util"},"util api")," to retrieve an account object.")))),(0,r.kt)("p",null,"Return value type: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/marc0l92/obsidian-jira-issue/blob/master/src/interfaces/issueInterfaces.ts#L163-L202"},(0,r.kt)("inlineCode",{parentName:"a"},"Promise<IJiraDevStatus>"))),(0,r.kt)("h2",{id:"getboards"},"getBoards"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$ji.base.getBoards(projectKeyOrId: string, options: { limit?: number, offset?: number, account?: IJiraIssueAccountSettings } = {})"))),(0,r.kt)("p",null,"Retrieve list of boards associated to a project."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"projectKeyOrId"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Project key or numeric id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options.limit"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number > 0")),(0,r.kt)("td",{parentName:"tr",align:null},"Configured in Settings"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of boards to extract")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options.account"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IJiraIssueAccountSettings")),(0,r.kt)("td",{parentName:"tr",align:null},"Automatically detect"),(0,r.kt)("td",{parentName:"tr",align:null},"Jira account to use. Use the ",(0,r.kt)("a",{parentName:"td",href:"/docs/api/api-util"},"util api")," to retrieve an account object.")))),(0,r.kt)("p",null,"Return value type: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/marc0l92/obsidian-jira-issue/blob/master/src/interfaces/issueInterfaces.ts#L204-L208"},(0,r.kt)("inlineCode",{parentName:"a"},"Promise<IJiraBoard[]>"))),(0,r.kt)("h2",{id:"getsprints"},"getSprints"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$ji.base.getSprints(boardId: number, options: { limit?: number, offset?: number, state?: ESprintState[], account?: IJiraIssueAccountSettings } = {})"))),(0,r.kt)("p",null,"Retrieve list of sprints associated to a board."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boardId"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Board numeric id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options.limit"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number > 0")),(0,r.kt)("td",{parentName:"tr",align:null},"Configured in Settings"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of sprints to extract")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options.account"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IJiraIssueAccountSettings")),(0,r.kt)("td",{parentName:"tr",align:null},"Automatically detect"),(0,r.kt)("td",{parentName:"tr",align:null},"Jira account to use. Use the ",(0,r.kt)("a",{parentName:"td",href:"/docs/api/api-util"},"util api")," to retrieve an account object.")))),(0,r.kt)("p",null,"Return value type: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/marc0l92/obsidian-jira-issue/blob/master/src/interfaces/issueInterfaces.ts#L210-L220"},(0,r.kt)("inlineCode",{parentName:"a"},"Promise<IJiraSprint[]>"))),(0,r.kt)("h2",{id:"getloggeduser"},"getLoggedUser"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$ji.base.getLoggedUser(account: IJiraIssueAccountSettings = null)"))),(0,r.kt)("p",null,"Retrieve information related to the user associated to the credentials configured in the plugin settings."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"account"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IJiraIssueAccountSettings")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Jira account to use. Use the ",(0,r.kt)("a",{parentName:"td",href:"/docs/api/api-util"},"util api")," to retrieve an account object.")))),(0,r.kt)("p",null,"Return value type: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/marc0l92/obsidian-jira-issue/blob/master/src/interfaces/issueInterfaces.ts#L93-L105"},(0,r.kt)("inlineCode",{parentName:"a"},"Promise<IJiraUser>"))))}m.isMDXComponent=!0}}]);