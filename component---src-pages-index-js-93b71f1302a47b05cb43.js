(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{665:function(t,e,r){"use strict";r.r(e);r(20),r(11),r(4),r(5),r(2),r(6);var n=r(1),o=r(0),a=r.n(o),c=r(680),i=r.n(c),s=r(670),l=r(149),u=(r(8),r(54)),f=r(696),d=r.n(f),h=r(668),b=Object(u.a)("div",{target:"e1c6yvqb0"})({name:"k008qs",styles:"display:flex;"}),p=Object(u.a)(h.a,{target:"e1c6yvqb1"})("font-size:1em;padding:1em;margin:1em;border-radius:2em;outline:none;background-color:transparent;border:3px solid ",function(t){return t.dark?t.theme.colors.black:t.theme.colors.white},";color:",function(t){return t.dark?t.theme.colors.black:t.theme.colors.white},";font-weight:bold;cursor:pointer;transition:all 0.3s;&:hover{color:",function(t){return t.dark?t.theme.colors.white:t.theme.colors.black},";border-color:",function(t){return t.dark?t.theme.colors.white:t.theme.colors.black},";}"),m=Object(u.a)("div",{target:"ev6bp270"})("position:absolute;top:0;left:0;right:0;bottom:0;background-color:",function(t){return t.theme.colors.primary},";opacity:0.8;"),j=Object(u.a)("div",{target:"ev6bp271"})({name:"17yfqez",styles:"position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;flex-direction:column;"}),g=Object(u.a)("div",{target:"ev6bp272"})("font-size:3em;text-align:center;color:",function(t){return t.theme.colors.white},";line-height:1.5em;font-weight:bold;padding:1em;font-family:",function(t){return t.theme.fonts.heading},";"),y={name:"1l686lc",styles:"height:80vh;position:relative;"},O=function(t){var e=t.bgImage,r=t.recentLesson;return Object(n.jsx)(d.a,{css:y,fluid:e},Object(n.jsx)(m,null),Object(n.jsx)(j,null,Object(n.jsx)(g,null,"NHS Special Topics in Computer Science"),Object(n.jsx)(b,null,Object(n.jsx)(p,{to:r.replace(/\/lesson-\d+/,"")},"Current Unit"),Object(n.jsx)(p,{to:r},"Most Recent Lesson"))))},x=(r(217),r(216),r(701)),v=r(713);var k={name:"1u3csm8",styles:"box-shadow:0 3px 5px rgba(0,0,0,0.2);"},w=Object(u.a)("div",{target:"ethrphz0"})("text-align:center;font-size:2em;background-color:",function(t){return t.theme.colors.black},";color:",function(t){return t.theme.colors.white},";display:flex;justify-content:space-between;align-items:center;height:2em;"),z=Object(u.a)("button",{target:"ethrphz1"})("height:100%;flex:0 0 1em;border:0;background-color:transparent;color:",function(t){return t.theme.colors.white},";cursor:pointer;transition:background-color 0.3s;outline:none;:hover{background-color:rgba(255,255,255,0.3);}"),M=Object(u.a)("div",{target:"ethrphz2"})("width:100%;display:flex;background-color:",function(t){return t.theme.colors.black},";color:",function(t){return t.theme.colors.white},";"),C=Object(u.a)("div",{target:"ethrphz3"})({name:"1c35wtk",styles:"width:100%;height:200px;position:relative;padding-top:2.5em;"}),S=Object(u.a)("div",{target:"ethrphz4"})({name:"44o4vm",styles:"display:flex;position:absolute;top:0;left:0;bottom:0;right:0;"}),P=Object(u.a)("div",{target:"ethrphz5"})({name:"xj3itw",styles:"flex:1 0 calc(100% / 7);text-align:center;padding:0.5em;"}),D=Object(u.a)("div",{target:"ethrphz6"})("width:2em;height:2em;margin:auto;display:flex;align-items:center;justify-content:center;border-radius:2em;",function(t){return t.today?Object(n.css)("color:",t.theme.colors.white,";background-color:",t.theme.colors.primary,";"):null}),A=Object(u.a)("div",{target:"ethrphz7"})({name:"k008qs",styles:"display:flex;"}),_=Object(u.a)("div",{target:"ethrphz8"})("background-color:transparent;margin:0;flex-basis:calc(",function(t){return 100*t.durr/7},"%);"),q=Object(u.a)(h.a,{target:"ethrphz9"})("background-color:",function(t){return t.theme.colors.primary},";color:",function(t){return t.theme.colors.white},";margin:0.25em;border-radius:0.5em;padding:0.5em;font-size:0.75em;z-index:1;flex-basis:calc(",function(t){return 100*t.durr/7},"% - 0.5em);:hover{color:",function(t){return t.theme.colors.white},";}"),E=function(t){var e,r;function o(e){var r;return(r=t.call(this,e)||this).state={currentMonth:i()().get("month")},r}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var a=o.prototype;return a.changeMonth=function(t){this.setState(function(e){return{currentMonth:e.currentMonth+t}})},a.visibleDays=function(t){for(var e=[],r=i()(t).startOf("month").startOf("week"),n=i()(t).endOf("month").endOf("week");r.isSameOrBefore(n);)e.push(i()(r)),r.add(1,"days");return e},a.renderDay=function(t,e){return Object(n.jsx)(P,{key:"day-"+e},Object(n.jsx)(D,{today:i()().startOf("day").isSame(t)},t.format("D")))},a.renderWeek=function(t,e){var r=this.props.dates.filter(function(e){return e.start.isSameOrAfter(t[0])&&e.end.isSameOrBefore(t[t.length-1])});r.sort(function(t,e){if(t.start.isBefore(e.start))return-1;if(t.start.isAfter(e.start))return 1;var r=t.end.diff(t.start);return e.end.diff(e.start)-r});var o=r.reduce(function(e,r){for(var n=0;n<e.length&&e[n].length>0&&e[n][e[n].length-1].end.isAfter(r.start);)n++;return n>=e.length?r.start.diff(t[0],"days")>0?e.push([{start:t[0],end:r.start,empty:!0},r]):e.push([r]):(r.start.diff(e[n][e[n].length-1].end,"days")>0&&e[n].push({start:e[n][e[n].length-1].end,end:r.start,empty:!0}),e[n].push(r)),e},[]);return Object(n.jsx)(C,{key:"week-container-"+e},Object(n.jsx)(S,{key:"week-"+e},t.map(this.renderDay)),o.map(function(t){return Object(n.jsx)(A,null,t.map(function(t,e){return t.empty?Object(n.jsx)(_,{durr:t.end.diff(t.start,"days"),key:"empty-"+e}):Object(n.jsx)(q,{durr:t.end.diff(t.start,"days"),key:t.path,to:t.path},t.title)}))}))},a.renderWeekHeadings=function(){return Array(7).fill().map(function(t,e){return Object(n.jsx)(P,{key:"week-header-"+e},i()(e,"d").format("ddd"))})},a.render=function(){var t=this,e=i()(this.state.currentMonth+1,"M"),r=this.visibleDays(e),o=Object(x.chunk)(r,7);return Object(n.jsx)("div",{css:k},Object(n.jsx)(w,null,Object(n.jsx)(z,{onClick:function(e){return t.changeMonth(-1)}},Object(n.jsx)(v.a,null)),e.format("MMMM Y"),Object(n.jsx)(z,{onClick:function(e){return t.changeMonth(1)}},Object(n.jsx)(v.b,null))),Object(n.jsx)(M,null,this.renderWeekHeadings()),o.map(this.renderWeek.bind(this)))},o}(a.a.Component);function N(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function H(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"query",function(){return L});e.default=function(t){var e=t.data,r=e.banner.childImageSharp.fluid,o=e.lessons.edges;return Object(n.jsx)(s.a,{header:Object(n.jsx)(O,{bgImage:r,recentLesson:o[o.length-1].node.frontmatter.path})},Object(n.jsx)(l.a,{level:1},"Course Calendar"),Object(n.jsx)(E,{dates:o.map(function(t){var e=t.node.frontmatter,r=e.start,n=e.end,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(e,["start","end"]);return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?N(r,!0).forEach(function(e){H(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):N(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({start:i()(r).startOf("day"),end:i()(n).add(1,"day").startOf("day")},o)})}))};var L="2118569758"},668:function(t,e,r){"use strict";r(7),r(4),r(5),r(2),r(6);var n=r(54),o=r(1),a=(r(0),r(17)),c=r.n(a),i=r(89);function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var l=function(t){var e=t.children,r=t.to,n=t.activeClassName,a=t.partiallyActive,c=t.forceExternal,l=void 0!==c&&c,u=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,["children","to","activeClassName","partiallyActive","forceExternal"]),f=/^\/(?!\/)/.test(r);return l||!f?Object(o.jsx)("a",s({href:r},u),e):Object(o.jsx)(i.Link,s({to:r,activeClassName:n,partiallyActive:a},u),e)},u=Object(n.a)(l,{target:"e1ga3fa70"})("transition:all 0.3s;color:",function(t){return t.theme.colors.black},";&:hover{color:",function(t){return t.theme.colors.primary},";cursor:pointer;}");u.propTypes={to:c.a.string.isRequired,activeClassName:c.a.string,partiallyActive:c.a.bool,forceExternal:c.a.bool},e.a=u},670:function(t,e,r){"use strict";var n=r(54),o=r(1),a=r(0),c=r.n(a),i=r(148),s=r(88),l=(r(19),r(668));var u={name:"2cspzy",styles:"box-shadow:0 3px 2px rgba(0,0,0,0.2);"},f=Object(n.a)("li",{target:"ensi4as0"})({name:"1r12575",styles:"padding:1.5em;"}),d=Object(n.a)("ul",{target:"ensi4as1"})({name:"kmkx9k",styles:"display:flex;margin:0;justify-content:flex-end;list-style-type:none;padding:0;"}),h=function(t){var e,r;function n(){return t.apply(this,arguments)||this}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){var t=this.props.links.map(function(t){return Object(o.jsx)(l.a,{to:t.url,key:t.name},Object(o.jsx)(f,null,t.name))});return Object(o.jsx)("nav",{css:u},Object(o.jsx)(d,null,t))},n}(c.a.Component),b=r(673);function p(){var t=function(t,e){e||(e=t.slice(0));return t.raw=e,t}(["\n  color: ",";\n"]);return p=function(){return t},t}var m=function(t){return Object(o.css)("background-color:",t.colors.black,";color:",t.colors.white,";padding:1em;font-size:2em;text-align:center;")},j=Object(n.a)(l.a)(p(),function(t){return t.theme.colors.white}),g=function(t){return Object(o.jsx)("footer",{css:m},Object(o.jsx)(j,{to:"https://github.com"},Object(o.jsx)(b.a,null)))},y=r(674),O=r.n(y),x=function(t){return Object(o.css)(O.a," @import url(",s.a,");body,html{font-size:18px;font-family:",t.fonts.body,";color:",t.colors.black,";}*{line-height:1.5em;box-sizing:border-box;}a{color:",t.colors.black,";text-decoration:none;}")},v=function(){return Object(o.jsx)(o.Global,{styles:x})},k=[{name:"Home",url:"/"},{name:"Units",url:"/units"},{name:"Syllabus",url:"/syllabus"}],w=Object(n.a)("main",{target:"e13sf5n10"})({name:"nm3whp",styles:"max-width:900px;margin:auto;min-height:100vh;margin-top:2em;padding:1em;"});e.a=function(t){var e=t.children,r=t.header;return Object(o.jsx)(i.a,{theme:s.b},Object(o.jsx)(v,null),Object(o.jsx)(h,{links:k}),r,Object(o.jsx)(w,null,e),Object(o.jsx)(g,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-93b71f1302a47b05cb43.js.map