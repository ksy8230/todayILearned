"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{9535:function(e,t,l){var a=l(7294),n=l(5444);t.Z=function(){var e,t,l=(0,n.useStaticQuery)("3257411868");null===(e=l.site.siteMetadata)||void 0===e||e.author,null===(t=l.site.siteMetadata)||void 0===t||t.social;return a.createElement("div",{className:"bio"},a.createElement("p",null,"무엇이든 꾸준히"))}},7704:function(e,t,l){l.r(t);var a=l(7294),n=l(5444),r=l(9535),i=l(7198),o=l(3751);t.default=function(e){var t,l=e.data,s=e.location,c=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",u=l.allMarkdownRemark.nodes;return 0===u.length?a.createElement(i.Z,{location:s,title:c},a.createElement(o.Z,{title:"All posts"}),a.createElement(r.Z,null),a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):a.createElement(i.Z,{location:s,title:c},a.createElement(o.Z,{title:"All posts"}),a.createElement(r.Z,null),a.createElement("ol",{style:{listStyle:"none"}},u.map((function(e){var t=e.frontmatter.title||e.fields.slug;return console.log(e),a.createElement("li",{key:e.fields.slug},a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h2",null,a.createElement(n.Link,{to:e.fields.slug,itemProp:"url"},a.createElement("span",{itemProp:"headline"},t))),a.createElement("small",null,e.frontmatter.date))))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-4dc323564c174b93caf5.js.map