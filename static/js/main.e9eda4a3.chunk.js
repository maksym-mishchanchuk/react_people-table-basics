(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(22),s=(c(31),c(32),c(6)),a=c(3),r=(c(33),c(8)),i=c.n(r),l=c(4),j=c(0),o=c(2),d=Object(j.createContext)({hasClickedPeopleLink:!1,setHasClickedPeopleLink:function(){}}),b=function(e){var t=e.children,c=Object(j.useState)(!1),n=Object(l.a)(c,2),s=n[0],a=n[1];return Object(o.jsx)(d.Provider,{value:{hasClickedPeopleLink:s,setHasClickedPeopleLink:a},children:t})},h=function(){return Object(j.useContext)(d)},u=function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},x=function(){var e=h().setHasClickedPeopleLink;return Object(o.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)(s.c,{to:"/",className:u,children:"Home"}),Object(o.jsx)(s.c,{onClick:function(){e(!0)},to:"/people",className:u,children:"People"})]})})})},O=function(){return Object(o.jsx)("div",{"data-cy":"app",children:Object(o.jsxs)(b,{children:[Object(o.jsx)(x,{}),Object(o.jsx)("main",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(a.b,{})})})]})})},p=function(){return Object(o.jsx)("h1",{className:"title",children:"Home Page"})},m=(c(35),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})});function f(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var g=function(e,t,c){return"m"===e?c.filter((function(e){return"m"===e.sex})).find((function(e){return e.name===t.fatherName})):"f"===e?c.filter((function(e){return"f"===e.sex})).find((function(e){return e.name===t.motherName})):void 0},v=function(e){var t=e.person,c=e.people,n=e.selectedUser,a=t.name,r=t.sex,l=t.born,j=t.died,d=t.motherName,b=t.fatherName,h=t.slug,u=g("f",t,c),x=g("m",t,c);return Object(o.jsxs)("tr",{className:i()({"has-background-warning":h===(null===n||void 0===n?void 0:n.slug)}),"data-cy":"person",children:[Object(o.jsx)("td",{children:Object(o.jsx)(s.b,{to:"/people/".concat(h),className:i()({"has-text-danger":"f"===r}),children:a})}),Object(o.jsx)("td",{children:r}),Object(o.jsx)("td",{children:l}),Object(o.jsx)("td",{children:j}),Object(o.jsxs)("td",{children:[u&&Object(o.jsx)(s.b,{to:"/people/".concat(u.slug),className:i()({"has-text-danger":"f"===u.sex}),children:u.name}),!u&&d?d:"-"]}),Object(o.jsxs)("td",{children:[x&&Object(o.jsx)(s.b,{to:"/people/".concat(x.slug),className:i()({"has-text-danger":"f"===x.sex}),children:x.name}),!x&&b?b:"-"]})]},h)},N=function(){var e=Object(j.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(j.useState)(!1),r=Object(l.a)(s,2),i=r[0],d=r[1],b=h().hasClickedPeopleLink,u=Object(j.useState)(!1),x=Object(l.a)(u,2),O=x[0],p=x[1],g=Object(a.r)().slug||"",N=c.find((function(e){return e.slug===g}));return Object(j.useEffect)((function(){b&&f().then((function(e){return n(e)})).catch((function(){throw d(!0),new Error(" Something went wrong")})).finally((function(){return p(!0)}))}),[b]),Object(o.jsx)("div",{className:"block",children:Object(o.jsxs)("div",{className:"box table-container",children:[Object(o.jsx)("h1",{className:"title",children:"People Page"}),i&&Object(o.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!c.length&&!i&&Object(o.jsx)(m,{}),!!c.length&&Object(o.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Sex"}),Object(o.jsx)("th",{children:"Born"}),Object(o.jsx)("th",{children:"Died"}),Object(o.jsx)("th",{children:"Mother"}),Object(o.jsx)("th",{children:"Father"})]})}),Object(o.jsx)("tbody",{children:c.map((function(e){return Object(o.jsx)(v,{people:c,person:e,selectedUser:N},e.slug)}))})]}),!O&&!c.length&&Object(o.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})]})})},k=function(){return Object(o.jsx)(s.a,{children:Object(o.jsxs)(a.e,{children:[Object(o.jsxs)(a.c,{path:"/",element:Object(o.jsx)(O,{}),children:[Object(o.jsx)(a.c,{index:!0,element:Object(o.jsx)(p,{})}),Object(o.jsx)(a.c,{path:"people",element:Object(o.jsx)(N,{}),children:Object(o.jsx)(a.c,{path:"/people/:slug?",element:Object(o.jsx)(N,{})})})]}),Object(o.jsxs)(a.c,{path:"*",element:Object(o.jsx)(O,{}),children:[Object(o.jsx)(a.c,{index:!0,element:Object(o.jsx)(p,{})}),Object(o.jsx)(a.c,{path:"*",element:Object(o.jsx)("h1",{children:"Page not found"})})]}),Object(o.jsx)(a.c,{path:"home",element:Object(o.jsx)(a.a,{to:".."})})]})})};Object(n.createRoot)(document.getElementById("root")).render(Object(o.jsx)(k,{}))}},[[36,1,2]]]);
//# sourceMappingURL=main.e9eda4a3.chunk.js.map