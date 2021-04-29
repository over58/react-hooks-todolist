(this["webpackJsonpreact-hooks-todolist"]=this["webpackJsonpreact-hooks-todolist"]||[]).push([[0],{12:function(e,t,n){e.exports=n(20)},17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(10),i=n.n(r),c=(n(17),n(1));var l=function(e,t,n){var o=Object(a.useReducer)(t,n,(function(){var t;try{t=JSON.parse(window.localStorage.getItem(e)||String(n))}catch(a){t=n}return t})),r=Object(c.a)(o,2),i=r[0],l=r[1];return Object(a.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(i))}),[e,i]),[i,l]},s=n(5),u=n(11),d=n(32),m=function(e,t){switch(t.type){case"ADD_TODO":return[].concat(Object(u.a)(e),[{id:Object(d.a)(),task:t.task,completed:!1}]);case"REMOVE_TODO":return e.filter((function(e){return e.id!==t.id}));case"TOGGLE_TODO":return e.map((function(e){return e.id===t.id?Object(s.a)(Object(s.a)({},e),{},{completed:!e.completed}):e}));case"EDIT_TODO":return e.map((function(e){return e.id===t.id?Object(s.a)(Object(s.a)({},e),{},{task:t.task}):e}));default:return e}},f=[{id:"0",task:"Read a book",completed:!1},{id:"1",task:"Jog in a playground",completed:!0},{id:"2",task:"Write articles",completed:!1}],p=Object(a.createContext)(),b=Object(a.createContext)();function O(e){var t=l("todos",m,f),n=Object(c.a)(t,2),a=n[0],r=n[1];return o.a.createElement(p.Provider,{value:a},o.a.createElement(b.Provider,{value:r},e.children))}var h=function(e){var t=Object(a.useState)(e),n=Object(c.a)(t,2),o=n[0],r=n[1];return[o,function(e){return r(e.target.value)},function(){return r("")}]},g=n(31),E=Object(g.a)({TodoForm:{width:"100%",marginBottom:"1rem"},input:{width:"100%",height:"2rem",background:"none",border:"none",borderBottom:"1px solid #34495e",color:"#34495e",fontSize:"1.2rem",fontWeight:"300",outline:"none"}});var v=function(){var e=E(),t=Object(a.useContext)(b),n=h(""),r=Object(c.a)(n,3),i=r[0],l=r[1],s=r[2];return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({type:"ADD_TODO",task:i}),s()},className:e.TodoForm},o.a.createElement("input",{placeholder:"Add your task here...",value:i,onChange:l,className:e.input}))},j=Object(g.a)({EditTodoForm:{width:"100%",marginBottom:"1rem"},input:{width:"85%",background:"transparent",border:"none",borderBottom:"1px solid #ccc",fontSize:"1rem",transition:"0.6s",transform:"translateY(8px)","&:focus":{borderBottom:"1px solid #58b2dc",outline:"none"}}});var k=function(e){var t=e.id,n=e.task,r=e.toggleEditForm,i=j(),l=Object(a.useContext)(b),s=h(n),u=Object(c.a)(s,3),d=u[0],m=u[1],f=u[2];return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l({type:"EDIT_TODO",id:t,task:d}),r(),f()},className:i.EditTodoForm},o.a.createElement("input",{autoFocus:!0,value:d,onChange:m,onClick:function(e){return e.stopPropagation()},className:i.input}))},x=Object(g.a)({Todo:{width:"100%",height:"2.5rem",display:"flex",alignItems:"center",justifyContent:"space-between",paddingLeft:"0.5rem",color:"#34495e",fontSize:"1rem",lineHeight:"2.5rem",overflowX:"hidden",transition:"all 0.3s ease","&:hover":{background:"rgba(0, 0, 0, 0.03)",cursor:"pointer"},"&:hover div":{opacity:"1"}},icons:{width:"40px",display:"inline-flex",alignItems:"center",justifyContent:"space-between",marginRight:"1rem",float:"right",transition:"all 0.3s",opacity:"0"}});var y=Object(a.memo)((function(e){var t=e.id,n=e.task,r=e.completed,i=x(),l=Object(a.useContext)(b),s=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(a.useState)(e),n=Object(c.a)(t,2),o=n[0],r=n[1],i=function(){return r(!o)};return[o,i]}(!1),u=Object(c.a)(s,2),d=u[0],m=u[1];return d?o.a.createElement("li",{className:i.Todo,style:{overflowY:"hidden"},onClick:function(){return m()}},o.a.createElement(k,{id:t,task:n,toggleEditForm:m})):o.a.createElement("li",{className:i.Todo,onClick:function(){return l({type:"TOGGLE_TODO",id:t})}},o.a.createElement("span",{style:{textDecoration:r?"line-through":"",color:r?"#bdc3c7":"#34495e"}},n),o.a.createElement("div",{className:i.icons},o.a.createElement("i",{style:{color:"#c0392b"},className:"fas fa-trash",onClick:function(e){e.stopPropagation(),l({type:"REMOVE_TODO",id:t})}}),o.a.createElement("i",{style:{color:"#58b2dc"},className:"fas fa-pen",onClick:function(e){e.stopPropagation(),m()}})))}));var w=function(){var e=Object(a.useContext)(p);return o.a.createElement("ul",{style:{paddingLeft:10,width:"95%"}},e.map((function(e){return o.a.createElement(y,Object.assign({key:e.id},e))})))};var T,D=function(){return o.a.createElement(O,null,o.a.createElement(v,null),o.a.createElement(w,null))},C=n(3),S=function(e){return"@media (max-width: ".concat({xs:"575.98px",md:"991.98px"}[e],")")},N=Object(g.a)({App:(T={width:"50%",margin:"0 auto"},Object(C.a)(T,S("md"),{width:"70%"}),Object(C.a)(T,S("xs"),{width:"90%"}),T),header:{textAlign:"center","& h1":Object(C.a)({color:"#2c3e50",margin:"5vh 0 0 0",fontSize:"5rem",fontWeight:"300","& span":{fontWeight:"700"}},S("xs"),{fontSize:"4.5rem"}),"& h2":Object(C.a)({color:"#9aa1a5",fontSize:"1rem",fontWeight:"300"},S("xs"),{fontSize:"0.6rem"})},link:{display:"flex",justifyContent:"center",backfaceVisibility:"hidden",color:"#81b3d2",fontSize:"0.7rem",position:"relative",textDecoration:"none",transition:"0.5s color ease"}});var z=function(){var e=N();return o.a.createElement("div",{className:e.App},o.a.createElement("header",{className:e.header},o.a.createElement("h1",null,"todo",o.a.createElement("span",null,"list")),o.a.createElement("h2",null,"A simple todolist app built with React Hooks & Context")),o.a.createElement(D,null))};i.a.render(o.a.createElement(z,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.c5bfaf7e.chunk.js.map