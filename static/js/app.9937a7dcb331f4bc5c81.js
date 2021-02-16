webpackJsonp([1],[,,,,,,function(e,t,n){"use strict";var o=n(23),a=new o({url:"https://dev-64727739.okta.com",issuer:"default"});t.a={login:function(e,t,n){var o=this;return n=arguments[arguments.length-1],localStorage.token?(n&&n(!0),void this.onChange(!0)):a.signIn({username:e,password:t}).then(function(e){if("SUCCESS"===e.status)return a.token.getWithoutPrompt({clientId:"0oa617stnPlWXZkVP5d6",responseType:["id_token","token"],scopes:["openid","email","profile"],sessionToken:e.sessionToken,redirectUri:window.location.origin}).then(function(e){localStorage.token=e[1].accessToken,localStorage.idToken=e[0].idToken,n&&n(!0),o.onChange(!0)})})},getToken:function(){return localStorage.token},logout:function(e){return delete localStorage.token,delete localStorage.idToken,e&&e(),this.onChange(!1),a.signOut()},loggedIn:function(){return!!localStorage.token},onChange:function(){},getName:function(){var e=this.parseJwt(localStorage.idToken);return console.jwt(localStorage.idToken),e.name},parseJwt:function(e){var t=e.split(".")[1],n=t.replace("-","+").replace("_","/");return JSON.parse(window.atob(n))}}},,,,,,,function(e,t,n){"use strict";var o=n(6);t.a={data:function(){return{loggedIn:o.a.loggedIn()}},created:function(){var e=this;o.a.onChange=function(t){e.loggedIn=t}}}},,,function(e,t,n){"use strict";var o=n(6);t.a={data:function(){return{name:o.a.getName()}}}},function(e,t,n){"use strict";var o=n(6);t.a={data:function(){return{email:"",pass:"",error:!1}},methods:{login:function(){var e=this;o.a.login(this.email,this.pass,function(t){t?e.$router.replace(e.$route.query.redirect||"/"):e.error=!0})}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(10),a=n(20),r=n(42);o.a.config.productionTip=!1,o.a.directive("focus",{inserted:function(e){e.focus()}}),new o.a({el:"#app",router:r.a,template:"<App/>",components:{App:a.a}})},,function(e,t,n){"use strict";function o(e){n(21)}var a=n(13),r=n(41),i=n(5),u=o,s=i(a.a,r.a,!1,u,null,null);t.a=s.exports},function(e,t){},,,,,,function(e,t){},,,,,,,,,,,,,,function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("Auth Flow")]),e._v(" "),n("ul",[n("li",[e.loggedIn?n("router-link",{attrs:{to:"/logout"}},[e._v("Log out")]):e._e(),e._v(" "),e.loggedIn?e._e():n("router-link",{attrs:{to:"/login"}},[e._v("Log in")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"/dashboard"}},[e._v("Dashboard")]),e._v("\n      (authenticated)\n    ")],1)]),e._v(" "),e.$route.matched.length?[n("router-view")]:[n("p",[e._v("You are logged "+e._s(e.loggedIn?"in":"out"))])]],2)},a=[],r={render:o,staticRenderFns:a};t.a=r},function(e,t,n){"use strict";function o(e,t,n){i.a.loggedIn()?n():n({path:"/login",query:{redirect:e.fullPath}})}var a=n(10),r=n(43),i=n(6),u=n(44),s=n(46),l=n(48);a.a.use(r.a),t.a=new r.a({mode:"history",base:"/business-card-auth/",routes:[{path:"/about",component:u.a},{path:"/dashboard",component:s.a,beforeEnter:o},{path:"/login",component:l.a},{path:"/logout",beforeEnter:function(e,t,n){i.a.logout(),n("/")}}]})},,function(e,t,n){"use strict";var o=n(45),a=n(5),r=a(null,o.a,!1,null,null,null);t.a=r.exports},function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("About")])])}],r={render:o,staticRenderFns:a};t.a=r},function(e,t,n){"use strict";var o=n(16),a=n(47),r=n(5),i=r(o.a,a.a,!1,null,null,null);t.a=i.exports},function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Dashboard")]),e._v(" "),n("p",[e._v("Yay you made it "),n("b",[e._v(e._s(e.name))]),e._v("!")])])},a=[],r={render:o,staticRenderFns:a};t.a=r},function(e,t,n){"use strict";function o(e){n(49)}var a=n(17),r=n(50),i=n(5),u=o,s=i(a.a,r.a,!1,u,null,null);t.a=s.exports},function(e,t){},function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Login")]),e._v(" "),e.$route.query.redirect?n("p",[e._v("\n    You need to login first.\n  ")]):e._e(),e._v(" "),n("form",{attrs:{autocomplete:"off"},on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"},{name:"focus",rawName:"v-focus"}],attrs:{placeholder:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.pass,expression:"pass"}],attrs:{placeholder:"password",type:"password"},domProps:{value:e.pass},on:{input:function(t){t.target.composing||(e.pass=t.target.value)}}})]),n("br"),e._v(" "),n("button",{attrs:{type:"submit"}},[e._v("login")]),e._v(" "),e.error?n("p",{staticClass:"error"},[e._v("Bad login information")]):e._e()])])},a=[],r={render:o,staticRenderFns:a};t.a=r}],[18]);
//# sourceMappingURL=app.9937a7dcb331f4bc5c81.js.map