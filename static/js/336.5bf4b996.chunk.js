"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[336],{8336:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var i,f,r,a,s,o,l,d=t(885),c=t(2791),u=t(6871),p=t(168),x=t(6444),h=x.ZP.ul(i||(i=(0,p.Z)(["\n    list-style: none;\n    margin: 0 0 40px 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n"]))),g=x.ZP.li(f||(f=(0,p.Z)(["\n    padding: 25px;\n    border: 1px solid #ffffff;\n    border-radius: 10px;\n    box-shadow: 2px 2px 7px 3px rgba(255, 255, 255, 0.2);\n"]))),m=x.ZP.p(r||(r=(0,p.Z)(["\n    margin: 0;\n    padding: 30px;\n    color: #ffffff;\n    text-align: center;\n    font-family: 'Ubuntu', sans-serif;\n    font-size: 20px;\n    text-decoration: underline;\n"]))),Z=t(3243),j=x.ZP.div(a||(a=(0,p.Z)(["\n    display: flex;\n    align-items: center;\n    gap: 8px;\n"]))),v=x.ZP.h4(s||(s=(0,p.Z)(["\n    margin: 0;\n    padding: 0;\n    color: #ffffff;\n    font-family: 'Ubuntu', sans-serif;\n    font-weight: 600;\n    font-size: 25px;\n"]))),w=x.ZP.h4(o||(o=(0,p.Z)(["\n    margin: 0;\n    padding: 0;\n    color: #ffffff;\n    font-family: 'Ubuntu', sans-serif;\n"]))),b=x.ZP.p(l||(l=(0,p.Z)(["\n    color: #ffffff;\n"]))),y=t(184),P=function(n){var e=n.reviews,t=e.author_details.name,i=e.created_at,f=e.content;return(0,y.jsxs)("div",{children:[(0,y.jsxs)(j,{children:[(0,y.jsx)(v,{children:t||"Anonymus"}),(0,y.jsxs)(w,{children:["| ",new Date(i).toLocaleDateString()]})]}),(0,y.jsx)(b,{children:f})]})},k=function(){var n=(0,c.useState)(null),e=(0,d.Z)(n,2),t=e[0],i=e[1],f=(0,u.UO)().movieId;return(0,c.useEffect)((function(){Z.Z.getReviews(f).then((function(n){return i(n.results)}))}),[f]),(0,y.jsx)("div",{children:t&&t.length?(0,y.jsx)(h,{children:t.map((function(n){return(0,y.jsx)(g,{children:(0,y.jsx)(P,{reviews:n})},n.id)}))}):(0,y.jsx)(m,{children:"No data"})})}}}]);
//# sourceMappingURL=336.5bf4b996.chunk.js.map