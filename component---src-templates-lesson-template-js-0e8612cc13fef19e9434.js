(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{660:function(t,e,n){"use strict";n.r(e),n.d(e,"query",function(){return p});n(8),n(19);var r=n(54),a=n(1),o=(n(0),n(671)),s=n(670),c=n(668),l=n(149),i=n(675),u=n(676),j=n(692),b=Object(r.a)("div",{target:"e1h2drmd0"})({name:"1it3c32",styles:"display:flex;align-items:center;height:100%;svg{font-size:2em;margin-right:1em;}"});e.default=function(t){var e=t.data.mdx,n=e.frontmatter.slides?Object(a.jsx)(i.a,null,Object(a.jsx)(c.a,{to:"/slides"+e.frontmatter.path},Object(a.jsx)(b,null,Object(a.jsx)(j.b,null),"Slide Deck"))):null,r=[];return e.frontmatter.attachments&&(r=e.frontmatter.attachments.map(function(t,e){return Object(a.jsx)(i.a,null,Object(a.jsx)(c.a,{forceExternal:!0,key:"attachment-"+e,to:t.publicURL,download:!0},Object(a.jsx)(b,null,Object(a.jsx)(j.a,null),t.name)))})),Object(a.jsx)(s.a,null,Object(a.jsx)(c.a,{to:e.frontmatter.path.replace(/\/lesson-\d+/,"")},"< Back To Unit Overview"),Object(a.jsx)(l.a,{level:1},e.frontmatter.title),Object(a.jsx)("div",{style:{marginBottom:"3em"}},Object(a.jsx)(o.MDXRenderer,null,e.body)),n||r.length?Object(a.jsx)("div",null,Object(a.jsx)(l.a,{level:2},"Links / Downloads"),Object(a.jsx)(u.a,null,n,r)):null)};var p="955908860"},668:function(t,e,n){"use strict";n(7),n(4),n(5),n(2),n(6);var r=n(54),a=n(1),o=(n(0),n(17)),s=n.n(o),c=n(89);function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var i=function(t){var e=t.children,n=t.to,r=t.activeClassName,o=t.partiallyActive,s=t.forceExternal,i=void 0!==s&&s,u=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,["children","to","activeClassName","partiallyActive","forceExternal"]),j=/^\/(?!\/)/.test(n);return i||!j?Object(a.jsx)("a",l({href:n},u),e):Object(a.jsx)(c.Link,l({to:n,activeClassName:r,partiallyActive:o},u),e)},u=Object(r.a)(i,{target:"e1ga3fa70"})("transition:all 0.3s;color:",function(t){return t.theme.colors.black},";&:hover{color:",function(t){return t.theme.colors.primary},";cursor:pointer;}");u.propTypes={to:s.a.string.isRequired,activeClassName:s.a.string,partiallyActive:s.a.bool,forceExternal:s.a.bool},e.a=u},670:function(t,e,n){"use strict";var r=n(54),a=n(1),o=n(0),s=n.n(o),c=n(148),l=n(88),i=(n(19),n(668));var u={name:"2cspzy",styles:"box-shadow:0 3px 2px rgba(0,0,0,0.2);"},j=Object(r.a)("li",{target:"ensi4as0"})({name:"1r12575",styles:"padding:1.5em;"}),b=Object(r.a)("ul",{target:"ensi4as1"})({name:"kmkx9k",styles:"display:flex;margin:0;justify-content:flex-end;list-style-type:none;padding:0;"}),p=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t=this.props.links.map(function(t){return Object(a.jsx)(i.a,{to:t.url,key:t.name},Object(a.jsx)(j,null,t.name))});return Object(a.jsx)("nav",{css:u},Object(a.jsx)(b,null,t))},r}(s.a.Component),m=n(673);function d(){var t=function(t,e){e||(e=t.slice(0));return t.raw=e,t}(["\n  color: ",";\n"]);return d=function(){return t},t}var f=function(t){return Object(a.css)("background-color:",t.colors.black,";color:",t.colors.white,";padding:1em;font-size:2em;text-align:center;")},x=Object(r.a)(i.a)(d(),function(t){return t.theme.colors.white}),g=function(t){return Object(a.jsx)("footer",{css:f},Object(a.jsx)(x,{to:"https://github.com"},Object(a.jsx)(m.a,null)))},O=n(674),h=n.n(O),v=function(t){return Object(a.css)(h.a," @import url(",l.a,");body,html{font-size:18px;font-family:",t.fonts.body,";color:",t.colors.black,";}*{line-height:1.5em;box-sizing:border-box;}a{color:",t.colors.black,";text-decoration:none;}")},y=function(){return Object(a.jsx)(a.Global,{styles:v})},k=[{name:"Home",url:"/"},{name:"Units",url:"/units"},{name:"Syllabus",url:"/syllabus"}],w=Object(r.a)("main",{target:"e13sf5n10"})({name:"nm3whp",styles:"max-width:900px;margin:auto;min-height:100vh;margin-top:2em;padding:1em;"});e.a=function(t){var e=t.children,n=t.header;return Object(a.jsx)(c.a,{theme:l.b},Object(a.jsx)(y,null),Object(a.jsx)(p,{links:k}),n,Object(a.jsx)(w,null,e),Object(a.jsx)(g,null))}},675:function(t,e,n){"use strict";var r=n(1),a=(n(0),{name:"gdnqjg",styles:"padding:1em;box-shadow:0 2px 5px rgba(0,0,0,0.2);border-radius:1em;height:100%;"});e.a=function(t){var e=t.children;return Object(r.jsx)("div",{css:a},e)}},676:function(t,e,n){"use strict";var r=n(54),a=n(17),o=n.n(a),s=Object(r.a)("div",{target:"ejaf9li0"})("display:grid;grid-template-columns:repeat(",function(t){return t.cols},",1fr);grid-column-gap:",function(t){return t.gap},";grid-row-gap:",function(t){return t.gap},";@media screen and (max-width:800px){grid-template-columns:1fr;}");s.propTypes={gap:o.a.string,cols:o.a.number},s.defaultProps={gap:"1em",cols:2},e.a=s}}]);
//# sourceMappingURL=component---src-templates-lesson-template-js-0e8612cc13fef19e9434.js.map