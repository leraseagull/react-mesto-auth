(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{29:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(19),o=a.n(s),i=a(8),r=(a(29),a(5)),l=a(23),u=a(2),d=a(3),p=a.p+"static/media/Logo.bbe2a6ea.svg",j=a(0);var h=function(e){var t=e.userData,a=e.handleLogOut,n=e.loggedIn,s=c.a.useState(!1),o=Object(u.a)(s,2),r=o[0],l=o[1];return Object(j.jsxs)(j.Fragment,{children:[r&&n&&Object(j.jsxs)("div",{className:"header__container header__container_hamburger",children:[Object(j.jsx)("p",{className:"header__email",children:t.email}),Object(j.jsx)(i.b,{className:"header__auth-link header__auth-link_type_gray",to:"/signin",onClick:a,children:"\u0412\u044b\u0439\u0442\u0438"})]}),Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)(d.b,{children:Object(j.jsx)(i.b,{className:"header__logo",to:"/",target:"_self",children:Object(j.jsx)("img",{className:"header__img",src:p,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f. \u041c\u0435\u0441\u0442\u043e."})})}),Object(j.jsxs)(d.b,{path:"/signup",children:[Object(j.jsx)("p",{className:"header__email",children:t.email}),Object(j.jsx)(i.b,{className:"header__auth-link",to:"/signin",children:"\u0412\u043e\u0439\u0442\u0438"})]}),Object(j.jsxs)(d.b,{path:"/signin",children:[Object(j.jsx)("p",{className:"header__email",children:t.email}),Object(j.jsx)(i.b,{className:"header__auth-link",to:"/signup",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]}),Object(j.jsxs)(d.b,{exact:!0,path:"/",children:[Object(j.jsx)("input",{id:"header__hamburger-menu",className:"header__hamburger-menu",type:"checkBox"}),Object(j.jsx)("label",{htmlFor:"header__hamburger-menu",className:"header__hamburger-icon",onClick:function(){l(!r)}}),Object(j.jsxs)("div",{className:"header__container",children:[Object(j.jsx)("p",{className:"header__email",children:t.email}),Object(j.jsx)(i.b,{className:"header__auth-link header__auth-link_type_gray",to:"/signin",onClick:a,children:"\u0412\u044b\u0439\u0442\u0438"})]})]})]})]})},m=c.a.createContext();var b=function(e){var t=e.card,a=e.onCardClick,n=e.onCardLike,s=e.onCardDelete,o=c.a.useContext(m),i=t.owner._id===o._id,r="card__delete ".concat(i?"":"card__delete_hidden"),l=t.likes.some((function(e){return e._id===o._id})),u="card__like ".concat(l&&"card__like_active");return Object(j.jsxs)("li",{className:"card",children:[Object(j.jsx)("img",{className:"card__photo",src:t.link,alt:t.name,onClick:function(){a(t)}}),Object(j.jsxs)("div",{className:"card__info",children:[Object(j.jsx)("h4",{className:"card__title",children:t.name}),Object(j.jsxs)("div",{className:"card__like-contain",children:[Object(j.jsx)("button",{className:u,type:"button","aria-label":"\u041b\u0430\u0439\u043a",onClick:function(){n(t)}}),Object(j.jsx)("p",{className:"card__like-count",children:t.likes.length})]}),Object(j.jsx)("button",{className:r,type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",onClick:function(){s(t)}})]})]})};var _=function(e){var t=e.onEditProfile,a=e.onAddPlace,n=e.onEditAvatar,s=e.onCardClick,o=e.cards,i=e.onCardLike,r=e.onCardDelete,l=c.a.useContext(m);return Object(j.jsxs)("main",{className:"content",children:[Object(j.jsxs)("section",{className:"profile",children:[Object(j.jsxs)("div",{className:"profile__avatar-container",onClick:n,children:[Object(j.jsx)("img",{className:"profile__avatar",src:l.avatar,alt:"\u0424\u043e\u0442\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f"}),Object(j.jsx)("div",{className:"profile__avatar-act"})]}),Object(j.jsxs)("div",{className:"profile__info",children:[Object(j.jsx)("h1",{className:"profile__info-author",children:l.name}),Object(j.jsx)("button",{className:"profile__edit-button",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0444\u043e\u0440\u043c\u0443",onClick:t}),Object(j.jsx)("p",{className:"profile__info-subline",children:l.about})]}),Object(j.jsx)("button",{className:"profile__add-button",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e",onClick:a})]}),Object(j.jsx)("section",{className:"cards",children:Object(j.jsx)("ul",{className:"cards__list",children:o.map((function(e){return Object(j.jsx)(b,{card:e,onCardClick:s,onCardLike:i,onCardDelete:r},e._id)}))})})]})};var f=function(){return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsx)("p",{className:"footer__copyright",children:"\xa9 ".concat((new Date).getFullYear()," Mesto Russia")})})};var O=function(e){return Object(j.jsx)("div",{className:"popup popup_type_image ".concat(e.card?"popup_opened":""),children:Object(j.jsxs)("div",{className:"popup__img-container",children:[Object(j.jsx)("img",{className:"popup__img",src:e.card?e.card.link:"",alt:e.card?e.card.name:""}),Object(j.jsx)("p",{className:"popup__img-caption",children:e.card?e.card.name:""}),Object(j.jsx)("button",{className:"popup__close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose})]})})},x=a(21),g=a(22),v=new(function(){function e(t){var a=t.address,n=t.token;Object(x.a)(this,e),this._address=a,this._token=n}return Object(g.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._address,"/users/me"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e){var t=e.name,a=e.about;return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,about:a})}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._address,"/cards"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"addCard",value:function(e){var t=e.name,a=e.link;return fetch("".concat(this._address,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:a})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"setCurrentElement",value:function(e){this.elem=e}},{key:"changeLikeCardStatus",value:function(e,t){return t?fetch("".concat(this._address,"/cards/likes/").concat(e),{method:"Delete",headers:{authorization:this._token}}).then(this._checkResponse):fetch("".concat(this._address,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"setUserAvatar",value:function(e){var t=e.avatar;return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then(this._checkResponse)}}]),e}())({address:"https://mesto.nomoreparties.co/v1/cohort-23",token:"3ba80848-84c8-48bd-a97a-d35ecfe36586"});var N=function(e){var t=e.title,a=e.name,n=e.isOpen,c=e.onClose,s=e.buttonText,o=e.children,i=e.onSubmit;return Object(j.jsx)("div",{className:"popup popup_type_".concat(a," ").concat(n?"popup_opened":""),children:Object(j.jsxs)("form",{className:"popup__container",name:a,onSubmit:i,children:[Object(j.jsx)("h2",{className:"popup__title",children:t}),o,Object(j.jsx)("button",{className:"popup__save",type:"submit",children:s}),Object(j.jsx)("button",{className:"popup__close popup__close_profile",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:c})]})})};var k=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,s=c.a.useContext(m),o=c.a.useState("\u0416\u0430\u043a-\u0418\u0432 \u041a\u0443\u0441\u0442\u043e"),i=Object(u.a)(o,2),r=i[0],l=i[1],d=c.a.useState("\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c"),p=Object(u.a)(d,2),h=p[0],b=p[1];return c.a.useEffect((function(e){l(s.name),b(s.about)}),[s,t]),Object(j.jsxs)(N,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c\xa0\u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",name:"edit-profile",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:r,about:h})},children:[Object(j.jsxs)("label",{className:"popup__field",children:[Object(j.jsx)("input",{className:"popup__input",type:"text",placeholder:"\u0418\u043c\u044f",name:"name",minLength:"2",maxLength:"40",onChange:function(e){l(e.target.value)},value:r||""}),Object(j.jsx)("span",{className:"popup__input-error"})]}),Object(j.jsxs)("label",{className:"popup__field",children:[Object(j.jsx)("input",{className:"popup__input",type:"text",placeholder:"\u0420\u0430\u0431\u043e\u0442\u0430",name:"about",minLength:"2",maxLength:"200",onChange:function(e){b(e.target.value)},value:h||""}),Object(j.jsx)("span",{className:"popup__input-error"})]})]})};var C=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,s=c.a.useRef();return Object(j.jsx)(N,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",name:"edit-avatar",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({avatar:s.current.value})},children:Object(j.jsxs)("label",{className:"popup__field",children:[Object(j.jsx)("input",{className:"popup__input",type:"url",minLength:"2",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",ref:s}),Object(j.jsx)("span",{className:"popup__input-error"})]})})};var y=function(e){var t=e.isOpen,a=e.onClose,n=e.onAddPlace,s=c.a.useState(""),o=Object(u.a)(s,2),i=o[0],r=o[1],l=c.a.useState(""),d=Object(u.a)(l,2),p=d[0],h=d[1];return c.a.useEffect((function(e){r(""),h("")}),[t]),Object(j.jsxs)(N,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",name:"add-card",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:i,link:p})},children:[Object(j.jsxs)("label",{className:"popup__field",children:[Object(j.jsx)("input",{className:"popup__input",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",minLength:"2",maxLength:"30",onChange:function(e){r(e.target.value)},value:i}),Object(j.jsx)("span",{className:"popup__input-error"})]}),Object(j.jsxs)("label",{className:"popup__field",children:[Object(j.jsx)("input",{className:"popup__input",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",onChange:function(e){h(e.target.value)},value:p}),Object(j.jsx)("span",{className:"popup__input-error"})]})]})},S=a(11);var w=function(e){var t=e.handleLogin,a=c.a.useState({email:"",password:""}),n=Object(u.a)(a,2),s=n[0],o=n[1];function i(e){var t=e.target,a=t.name,n=t.value;o(Object(r.a)(Object(r.a)({},s),{},Object(S.a)({},a,n)))}return Object(j.jsxs)("form",{className:"form",name:"login",noValidate:!0,onSubmit:function(e){e.preventDefault();var a=s.password,n=s.email;t({password:a,email:n})},children:[Object(j.jsx)("h2",{className:"form__title",children:"\u0412\u0445\u043e\u0434"}),Object(j.jsx)("label",{className:"form__field",children:Object(j.jsx)("input",{className:"form__input",type:"email",placeholder:"Email",name:"email",onChange:i,value:s.email,required:!0})}),Object(j.jsx)("label",{className:"form__field",children:Object(j.jsx)("input",{className:"form__input",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",onChange:i,value:s.password,required:!0})}),Object(j.jsx)("button",{className:"form__button",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})};var L=function(e){var t=e.handleRegister,a=c.a.useState({email:"",password:""}),n=Object(u.a)(a,2),s=n[0],o=n[1];function l(e){var t=e.target,a=t.name,n=t.value;o(Object(r.a)(Object(r.a)({},s),{},Object(S.a)({},a,n)))}return Object(j.jsxs)("form",{className:"form",name:"register",noValidate:!0,onSubmit:function(e){e.preventDefault();var a=s.password,n=s.email;t({password:a,email:n})},children:[Object(j.jsx)("h2",{className:"form__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(j.jsx)("label",{className:"form__field",children:Object(j.jsx)("input",{className:"form__input",type:"email",placeholder:"Email",name:"email",onChange:l,value:s.email,required:!0})}),Object(j.jsx)("label",{className:"form__field",children:Object(j.jsx)("input",{className:"form__input",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",onChange:l,value:s.password,required:!0})}),Object(j.jsx)("button",{className:"form__button",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(j.jsx)(i.b,{className:"form__link",to:"/signin",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})},T=a(24),P=["component"],A=function(e){var t=e.component,a=Object(T.a)(e,P);return Object(j.jsx)(d.b,{children:function(){return a.loggedIn?Object(j.jsx)(t,Object(r.a)({},a)):Object(j.jsx)(d.a,{to:"./signup"})}})};var D=function(e){var t=e.image,a=e.text,n=e.isOpen,c=e.onClose;return Object(j.jsx)("div",{className:"popup ".concat(n?"popup_opened":""),children:Object(j.jsxs)("div",{className:"popup__container popup__container_place_info-tool",children:[Object(j.jsx)("img",{className:"info-tool__img",alt:a,src:t}),Object(j.jsx)("h2",{className:" popup__title popup__title_type_center",children:a}),Object(j.jsx)("button",{className:"popup__close popup__close_type_center",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:c})]})})},E="https://auth.nomoreparties.co",I=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))},R=a.p+"static/media/success.1b6082f8.svg",U=a.p+"static/media/unsuccess.df8eddf6.svg";var z=function(){var e=c.a.useState(!1),t=Object(u.a)(e,2),a=t[0],n=t[1],s=c.a.useState(!1),o=Object(u.a)(s,2),i=o[0],p=o[1],b=c.a.useState(!1),x=Object(u.a)(b,2),g=x[0],N=x[1],S=c.a.useState(null),T=Object(u.a)(S,2),P=T[0],z=T[1],F=c.a.useState({}),J=Object(u.a)(F,2),q=J[0],B=J[1],H=c.a.useState([]),M=Object(u.a)(H,2),V=M[0],G=M[1],Y=c.a.useState(null),K=Object(u.a)(Y,2),Q=K[0],W=K[1],X=c.a.useState({_id:"",email:""}),Z=Object(u.a)(X,2),$=Z[0],ee=Z[1],te=c.a.useState(!1),ae=Object(u.a)(te,2),ne=ae[0],ce=ae[1],se=c.a.useState({image:"",text:""}),oe=Object(u.a)(se,2),ie=oe[0],re=oe[1],le=Object(d.g)();function ue(){n(!1),p(!1),N(!1),z(null),ce(!1)}function de(e){var t=e.password,a=e.email;(function(e,t){return fetch("".concat(E,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then(I)})(t,a).then((function(e){var t=e.token;localStorage.setItem("token",t),W(!0),le.push("/"),ee(Object(r.a)(Object(r.a)({},$),{},{email:a}))})).catch((function(e){console.log(e)}))}function pe(){W(!1),localStorage.removeItem("token"),le.push("/signin"),ee({_id:"",email:""})}return c.a.useEffect((function(){!function(){var e=localStorage.getItem("token");e?function(e){return fetch("".concat(E,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(I)}(e).then((function(e){var t=e.data,a=t._id,n=t.email;ee({_id:a,email:n}),W(!0),le.push("/")})).catch((function(e){console.log(e)})):W(!1)}(),Promise.all([v.getInitialCards(),v.getUserInfo()]).then((function(e){var t=Object(u.a)(e,2),a=t[0],n=t[1];G(a),B(n)})).catch((function(e){return console.error(e)}))}),[]),null===Q?Object(j.jsx)(h,{userData:$,handleLogOut:pe}):Object(j.jsx)(m.Provider,{value:q,children:Object(j.jsx)("div",{className:"page",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(h,{userData:$,handleLogOut:pe,loggedIn:Q}),Object(j.jsxs)(d.d,{children:[Object(j.jsx)(A,{exact:!0,path:"/",loggedIn:Q,component:_,onEditAvatar:function(){n(!0)},onEditProfile:function(){p(!0)},onAddPlace:function(){N(!0)},onCardClick:function(e){z(e)},cards:V,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===q._id}));v.changeLikeCardStatus(e._id,t).then((function(t){G((function(a){return a.map((function(a){return a._id===e._id?t:a}))}))})).catch((function(e){return console.error(e)}))},onCardDelete:function(e){v.deleteCard(e._id).then((function(t){G((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch((function(e){return console.error(e)}))}}),Object(j.jsx)(d.b,{path:"/signin",children:Object(j.jsx)(w,{handleLogin:de})}),Object(j.jsx)(d.b,{path:"/signup",children:Object(j.jsx)(L,{handleRegister:function(e){var t=e.password,a=e.email;(function(e,t){return fetch("".concat(E,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then(I)})(t,a).then((function(e){var a=e.data.email;ee(Object(r.a)(Object(r.a)({},$),{},{email:a})),re({image:R,text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"}),de({password:t,email:a})})).catch((function(e){console.log(e),re({image:U,text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})})).finally((function(e){ce(!0)}))}})}),Object(j.jsx)(d.b,{children:Q?Object(j.jsx)(d.a,{to:"/"}):Object(j.jsx)(d.a,{to:"/signup"})})]}),Object(j.jsx)(f,{}),Object(j.jsx)(k,{isOpen:i,onClose:ue,onUpdateUser:function(e,t){v.setUserInfo(e,t).then((function(e){B(e),ue()})).catch((function(e){return console.error(e)}))}}),Object(j.jsx)(y,{isOpen:g,onClose:ue,onAddPlace:function(e,t){v.addCard(e,t).then((function(e){ue(),G([e].concat(Object(l.a)(V)))})).catch((function(e){return console.error(e)}))}}),Object(j.jsx)(C,{isOpen:a,onClose:ue,onUpdateAvatar:function(e){v.setUserAvatar(e).then((function(e){B(e),ue()})).catch((function(e){return console.error(e)}))}}),Object(j.jsx)(O,{onClose:ue,card:P}),Object(j.jsx)(D,{isOpen:ne,onClose:ue,image:ie.image,text:ie.text})]})})})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,40)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),s(e),o(e)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(i.a,{children:Object(j.jsx)(z,{})})}),document.getElementById("root")),F()}},[[39,1,2]]]);
//# sourceMappingURL=main.0b2576da.chunk.js.map