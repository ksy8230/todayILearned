"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{4141:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(5444),o=function(e){var t=e.location,n=e.children,o="/todayILearned/"===t.pathname;(0,r.useStaticQuery)("3708219967").allMarkdownRemark;return a.createElement("div",{className:"global-wrapper","data-is-root-path":o},a.createElement("header",{className:"global-header"},a.createElement(r.Link,{to:"/"},"Today I Learn")),a.createElement("div",{className:"contents-wrap"},a.createElement("main",null,n),a.createElement("footer",null,"© 2021, COPYRIGHT ALL RIGHT",a.createElement("a",{href:"https://www.gatsbyjs.com"}))))}},6179:function(e,t,n){var a=n(7294),r=n(5414),o=n(5444),l=function(e){var t,n,l,c=e.description,i=e.lang,m=e.meta,s=e.title,u=(0,o.useStaticQuery)("2841359383").site,d=c||u.siteMetadata.description,p=null===(t=u.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(r.q,{htmlAttributes:{lang:i},title:s,titleTemplate:p?"%s | "+p:null,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=u.siteMetadata)||void 0===n||null===(l=n.social)||void 0===l?void 0:l.twitter)||""},{name:"twitter:title",content:s},{name:"twitter:description",content:d},{name:"google-site-verification",content:"M0Wa_Sh6Ip9woLirwOec9KhuVfJmogHmiDoSA0nZEc0"}].concat(m)})};l.defaultProps={lang:"en",meta:[],description:""},t.Z=l},6861:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var a=n(7294),r=(n(5444),n(4141)),o=n(6179);function l(e){var t=e.repo,n=(0,a.createRef)();return(0,a.useEffect)((function(){var e=document.createElement("script"),a={src:"https://utteranc.es/client.js",repo:t,"issue-term":"pathname",theme:"github-light",crossOrigin:"anonymous",async:"true"};Object.entries(a).forEach((function(t){var n=t[0],a=t[1];e.setAttribute(n,a)})),n.current.appendChild(e)}),[t]),a.createElement("div",{id:"comment",ref:n})}var c=function(e){var t=e.content;return a.createElement("div",{className:"blog-table"},a.createElement("div",{className:"table-of-contents",dangerouslySetInnerHTML:{__html:t}}))},i=function(e){var t,n=e.data,i=e.location,m=n.markdownRemark,s=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title";return a.createElement(a.Fragment,null,a.createElement(r.Z,{location:i,title:s},a.createElement(o.Z,{title:m.frontmatter.title,description:m.frontmatter.description||m.excerpt}),a.createElement("div",{className:"blog-post-container"},a.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h1",{itemProp:"headline"},m.frontmatter.title),a.createElement("p",null,m.frontmatter.date)),a.createElement("section",{dangerouslySetInnerHTML:{__html:m.html},itemProp:"articleBody"})),a.createElement(c,{content:n.markdownRemark.tableOfContents})),a.createElement("hr",null),a.createElement(l,{repo:"ksy8230/blog-commnets"})))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-bce757da9ffc0c9d493d.js.map