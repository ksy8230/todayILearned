"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{3503:function(e,t,l){l.r(t),l.d(t,{default:function(){return c}});var n=l(7294),r=l(5444),a=function(){var e,t,l=(0,r.useStaticQuery)("3257411868");null===(e=l.site.siteMetadata)||void 0===e||e.author,null===(t=l.site.siteMetadata)||void 0===t||t.social;return n.createElement("div",{className:"bio"},n.createElement("p",null,"무엇이든 꾸준히"))},i=l(4141),s=l(3751),c=function(e){var t,l=e.data,c=e.location,o=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",m=l.allMarkdownRemark.nodes;console.log(m);var u=m.filter((function(e){return e.fields.slug.includes("/bugLists")})),d=m.filter((function(e){return e.fields.slug.includes("/review")})),p=m.filter((function(e){return e.fields.slug.includes("/javascript")})),f=m.filter((function(e){return e.fields.slug.includes("/docker")}));return 0===m.length?n.createElement(i.Z,{location:c,title:o},n.createElement(s.Z,{title:"All posts"}),n.createElement(a,null),n.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):n.createElement(i.Z,{location:c,title:o},n.createElement(s.Z,{title:"All posts"}),n.createElement(a,null),n.createElement("h2",null,"Review"),n.createElement("ol",{style:{listStyle:"none"}},d.map((function(e){var t=e.frontmatter.title||e.fields.slug;return console.log(e),n.createElement("li",{key:e.fields.slug},n.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("p",null,n.createElement(r.Link,{to:""+e.fields.slug,itemProp:"url"},n.createElement("span",{itemProp:"headline"},t))),n.createElement("small",null,e.frontmatter.date))))}))),n.createElement("h2",null,"Bug Report"),n.createElement("ol",{style:{listStyle:"none"}},u.map((function(e){var t=e.frontmatter.title||e.fields.slug;return console.log(e),n.createElement("li",{key:e.fields.slug},n.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("p",null,n.createElement(r.Link,{to:""+e.fields.slug,itemProp:"url"},n.createElement("span",{itemProp:"headline"},t))),n.createElement("small",null,e.frontmatter.date))))}))),n.createElement("h2",null,"Javascript"),n.createElement("ol",{style:{listStyle:"none"}},p.map((function(e){var t=e.frontmatter.title||e.fields.slug;return console.log(e),n.createElement("li",{key:e.fields.slug},n.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("p",null,n.createElement(r.Link,{to:""+e.fields.slug,itemProp:"url"},n.createElement("span",{itemProp:"headline"},t))),n.createElement("small",null,e.frontmatter.date))))}))),n.createElement("h2",null,"Docker"),n.createElement("ol",{style:{listStyle:"none"}},f.map((function(e){var t=e.frontmatter.title||e.fields.slug;return console.log(e),n.createElement("li",{key:e.fields.slug},n.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("p",null,n.createElement(r.Link,{to:""+e.fields.slug,itemProp:"url"},n.createElement("span",{itemProp:"headline"},t))),n.createElement("small",null,e.frontmatter.date))))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-50e2a784dc8afe20bbd8.js.map