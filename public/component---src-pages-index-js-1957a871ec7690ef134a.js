(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{140:function(e,t,n){"use strict";n.r(t);n(154);var r=n(0),a=n.n(r),i=n(147),u=n(7),o=n.n(u),c=n(162),l=n.n(c),s=n(163),d=n(4),p=n.n(d),f=n(142);n(144);function m(){var e=l()(["\n  padding-right: 10px;\n"]);return m=function(){return e},e}function g(){var e=l()(["\n  display: flex;\n"]);return g=function(){return e},e}var h=s.a.ul(g()),y=s.a.li(m()),v=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return a.a.createElement(y,this.props,a.a.createElement(f.Link,{to:this.props.url},a.a.createElement("icon",null,a.a.createElement("img",{src:this.props.src,alt:this.props.name?this.props.name:" "}))))},t}(a.a.Component),E=v;v.propTypes={src:p.a.string.required,url:p.a.string.required,name:p.a.string},n.d(t,"test",function(){return w}),n.d(t,"query",function(){return b});var w=function(e){var t=e.data;return console.log(t),null},b=(t.default=function(e){var t=e.data;return a.a.createElement(i.a,null,a.a.createElement(h,null,t.allContentfulSocialMedia.edges.map(function(e){return a.a.createElement(E,{name:e.name,src:e.icon.file.url,url:e.url})})))},"1709771140")},142:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var r=n(0),a=n.n(r),i=n(4),u=n.n(i),o=n(141),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var l=n(143),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=a.a.createContext({}),f=function(e){return a.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},143:function(e,t,n){var r;e.exports=(r=n(146))&&r.default||r},144:function(e,t,n){},145:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},146:function(e,t,n){"use strict";n.r(t);n(33);var r=n(0),a=n.n(r),i=n(4),u=n.n(i),o=n(53),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=l},147:function(e,t,n){"use strict";var r=n(145),a=n(0),i=n.n(a),u=n(4),o=n.n(u),c=n(142),l=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};l.propTypes={siteTitle:o.a.string},l.defaultProps={siteTitle:""};var s=l,d=(n(144),function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:r})});d.propTypes={children:o.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-index-js-1957a871ec7690ef134a.js.map