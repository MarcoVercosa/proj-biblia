(this["webpackJsonpproj-biblia"]=this["webpackJsonpproj-biblia"]||[]).push([[0],{106:function(e,a,t){},125:function(e,a,t){},126:function(e,a,t){},127:function(e,a,t){},128:function(e,a,t){},129:function(e,a,t){},130:function(e,a,t){},131:function(e,a,t){},132:function(e,a,t){},133:function(e,a,t){},134:function(e,a,t){},135:function(e,a,t){},136:function(e,a,t){},137:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t(0),i=t(12),n=t.n(i),r=t(29),l=t(13),o=t(7),j=(t(95),t(40)),b=t(179),d=t(181),u=t(140),O=t(79),m=t(176),p=t(19),h=t(76),x=t.n(h),f=t(182),v=t(77),g=t(194),N=(t(96),Object(m.a)((function(e){var a;return{root:Object(j.a)({flexGrow:1},e.breakpoints.down("xs"),{width:"100%"}),menuButton:Object(j.a)({marginRight:e.spacing(2),display:"none"},e.breakpoints.down("xs"),{display:"block"}),title:Object(j.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:(a={position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(p.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(p.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},Object(j.a)(a,e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),Object(j.a)(a,e.breakpoints.down("xs"),{marginLeft:e.spacing(1),width:"60%"}),a),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(j.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})));function E(){var e=Object(s.useState)(null),a=Object(o.a)(e,2),t=a[0],i=a[1],n=function(){i(null)},l=N(),j=Object(s.useState)(),m=Object(o.a)(j,2),p=m[0],h=m[1];return Object(c.jsx)("div",{className:l.root,children:Object(c.jsx)(b.a,{position:"relative",style:{backgroundColor:"#14a37f"},children:Object(c.jsxs)(d.a,{children:[Object(c.jsx)(f.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},className:l.menuButton,children:Object(c.jsx)("i",{style:{color:"white"},class:"fas fa-bars fa-2x"})}),Object(c.jsxs)(v.a,{id:"simple-menu",anchorEl:t,keepMounted:!0,open:Boolean(t),onClose:n,children:[Object(c.jsx)(r.Link,{className:"li-vamos",to:"/",children:Object(c.jsx)(g.a,{onClick:n,children:"IN\xcdCIO"})}),Object(c.jsx)(r.Link,{className:"li-vamos",to:"/biblianvi#selecionar",children:Object(c.jsx)(g.a,{onClick:n,children:"LEITURA DA B\xcdBLIA"})}),Object(c.jsx)(r.Link,{className:"li-vamos",to:"/harpacrista",children:Object(c.jsx)(g.a,{onClick:n,children:"HINOS DA HARPA"})}),Object(c.jsx)(r.Link,{className:"li-vamos",to:"/sobre",children:Object(c.jsx)(g.a,{onClick:n,children:"SOBRE"})})]}),Object(c.jsxs)(u.a,{style:{display:"flex",fontFamily:"Lora"},className:l.title,variant:"h4",noWrap:!0,children:[Object(c.jsx)("span",{style:{marginLeft:"15px"},className:"icone-bible",children:Object(c.jsx)("i",{className:"fas fa-bible fa-1x"})})," ",Object(c.jsx)("span",{className:"SearchAppBar-spam",style:{marginLeft:"25px"},children:" FONTE DE VIDA on line"})]}),Object(c.jsxs)("div",{className:l.search,children:[Object(c.jsx)("div",{className:l.searchIcon,children:Object(c.jsx)(x.a,{})}),Object(c.jsx)(O.a,{onChange:function(e){h(e.target.value)},onKeyDown:function(e){!function(e){if("Enter"===e.key){if(void 0===p||p.length<2)return void alert("Digite ao menos 2 letras para iniciar a pesquisa");window.location.href="/biblianvi/pesquisa/".concat(p)}}(e)},placeholder:"Pesquisar",classes:{root:l.inputRoot,input:l.inputInput},inputProps:{"aria-label":"search"}})]})]})})})}var k=Object(s.memo)(E),A=(t(106),t.p+"static/media/Biblia.ce1e1349.jpg"),S=t(24);function I(){return Object(c.jsxs)("menu",{className:"menu-menu",children:[Object(c.jsx)("hr",{}),Object(c.jsxs)("ul",{className:"menu-ul",children:[Object(c.jsx)(S.HashLink,{className:"li-vamos",to:"/",children:Object(c.jsx)("li",{children:"IN\xcdCIO"})}),Object(c.jsx)(S.HashLink,{className:"li-vamos",to:"/biblianvi#selecionar",children:Object(c.jsx)("li",{className:"li-vamos",children:"LEITURA DA B\xcdBLIA"})}),Object(c.jsx)(S.HashLink,{className:"li-vamos",to:"/harpacrista",children:Object(c.jsx)("li",{className:"li-vamos",children:"HINOS DA HARPA"})}),Object(c.jsx)(S.HashLink,{className:"li-vamos",to:"/sobre",children:Object(c.jsx)("li",{className:"li-vamos",children:"SOBRE"})})]}),Object(c.jsx)("img",{className:"menu-imagem",src:A,alt:"Nosso caminho"})]})}var C=t(9),w=t.n(C),L=t(15),q=t(58),T=t.n(q);function y(e,a){return D.apply(this,arguments)}function D(){return(D=Object(L.a)(w.a.mark((function e(a,t){var c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("http://191.181.11.42:9000/".concat(a));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R=t(192),B=t(188),F=t(184),P=t(183),V=t(195),M=t(186),H=t(185),U=t(191),z=Object(m.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(1),minWidth:120}}}));function G(e){var a=Object(s.useState)(),t=Object(o.a)(a,2),i=t[0],n=t[1],l=Object(s.useState)([]),j=Object(o.a)(l,2),b=j[0],d=j[1],u=Object(s.useState)(),O=Object(o.a)(u,2),m=O[0],p=O[1],h=Object(s.useState)(),x=Object(o.a)(h,2),v=x[0],g=x[1],N=Object(s.useState)(),E=Object(o.a)(N,2),k=E[0],A=E[1],S=z(),I=Object(s.useState)(!1),C=Object(o.a)(I,2),q=C[0],T=C[1];Object(s.useEffect)(Object(L.a)(w.a.mark((function a(){var t,c;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if("ANTIGO TESTAMENTO"!==e.idadeLivro){a.next=8;break}return a.next=3,y("buscalivroantigotesta");case 3:t=a.sent,d("antigo"),n(t),a.next=13;break;case 8:return a.next=10,y("buscalivronovotesta");case 10:c=a.sent,d("novo"),n(c);case 13:case"end":return a.stop()}}),a)}))),[]);function D(){return(D=Object(L.a)(w.a.mark((function a(t){var c,s;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if("ANTIGO TESTAMENTO"!==e.idadeLivro){a.next=7;break}return a.next=3,y("buscacapituloantigotesta".concat(t));case 3:c=a.sent,g(c),a.next=11;break;case 7:return a.next=9,y("buscacapitulonovotesta".concat(t));case 9:s=a.sent,g(s);case 11:case"end":return a.stop()}}),a)})))).apply(this,arguments)}var G=function(){T(!1)};return Object(c.jsxs)("div",{children:[Object(c.jsx)(f.a,{style:{fontFamily:"Lora",fontSize:"25px",color:"White",borderRadius:"350px"},onClick:function(){T(!0)},children:"BUSCAR LIVRO"}),Object(c.jsxs)(R.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,open:q,onClose:G,children:[Object(c.jsx)(P.a,{children:e.idadeLivro}),Object(c.jsx)(F.a,{children:Object(c.jsxs)("form",{className:S.container,children:[Object(c.jsxs)(H.a,{className:S.formControl,children:[Object(c.jsx)(V.a,{htmlFor:"demo-dialog-native",children:"LIVRO"}),Object(c.jsxs)(U.a,{native:!0,value:m,onChange:function(e){"SELECIONE"===e.target.value?p(!1):(p(e.target.value),function(e){D.apply(this,arguments)}(e.target.value))},input:Object(c.jsx)(M.a,{id:"demo-dialog-native"}),children:[Object(c.jsx)("option",{"aria-label":"None",value:"SELECIONE",children:" "}),i&&i.data.map((function(e,a){return Object(c.jsxs)("option",{children:[" ",e]},a)}))]})]}),Object(c.jsxs)(H.a,{className:S.formControl,children:[Object(c.jsx)(V.a,{id:"demo-dialog-select-label",children:"CAPITULO"}),Object(c.jsxs)(U.a,{native:!0,value:k,onChange:function(e){"SELECIONE"===e.target.value?A(!1):A(e.target.value)},input:Object(c.jsx)(M.a,{id:"demo-dialog-native"}),children:[Object(c.jsx)("option",{"aria-label":"None",value:"SELECIONE",children:" "}),v&&v.data.map((function(e,a){return Object(c.jsx)("option",{children:e},a)}))]})]})]})}),Object(c.jsxs)(B.a,{children:[Object(c.jsx)(f.a,{onClick:G,color:"primary",children:"Cancel"}),Object(c.jsx)(r.Link,{to:"/biblianvi/painelleitura/".concat(b,"/").concat(m,"/").concat(k,"/m"),children:Object(c.jsx)(f.a,{disabled:!m||!k,onClick:G,color:"primary",children:"Ok"})})]})]})]})}t(125);function Q(){return Object(c.jsx)("footer",{className:"footer-footer",children:Object(c.jsxs)("ul",{className:"footer-ul",children:[Object(c.jsx)("li",{className:"footer-mavs",children:"Developer by: MAVS"}),Object(c.jsx)("li",{children:Object(c.jsx)("p",{children:"\xa9 2020 - 2021"})}),Object(c.jsx)("li",{children:Object(c.jsx)("p",{children:"Todos os direitos reservados"})})]})})}t(126);var W=t.p+"static/media/zero.3967ce14.jpg",J=t.p+"static/media/um.0e097720.jpg",K=t.p+"static/media/dois.596e39b0.png";function Z(e){var a=[W,J,K];return"ANTIGO TESTAMENTO"===e.idadeLivro?Object(c.jsx)("div",{className:"carrosel-div imagem-zero",children:Object(c.jsx)("img",{className:"imagem-carrosel",src:a[0]})}):"NOVO TESTAMENTO"===e.idadeLivro?Object(c.jsx)("div",{className:"carrosel-div imagem-um",children:Object(c.jsx)("img",{className:"imagem-carrosel",src:a[1]})}):Object(c.jsx)("div",{className:"carrosel-div imagem-dois",children:Object(c.jsx)("img",{className:"imagem-carrosel imagem-carrosel-daniel ",src:a[2]})})}var X=t(189),Y=Object(m.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function $(){var e=Y();return Object(c.jsxs)("div",{className:e.root,children:[Object(c.jsx)(X.a,{}),Object(c.jsx)(X.a,{color:"secondary"})]})}t(127);function _(){return Object(c.jsx)("menu",{className:"painelleitura-menu",children:Object(c.jsxs)("ul",{className:"menu-painelleitura-ul",children:[Object(c.jsx)(S.HashLink,{className:"li-vamos",to:"/",children:Object(c.jsxs)("li",{className:"menu-painelleitura-li",children:[Object(c.jsx)("i",{className:"fas fa-home fa-2x icone"}),"IN\xcdCIO"]})}),Object(c.jsx)(S.HashLink,{className:"li-vamos",to:"/biblianvi#selecionar",children:Object(c.jsxs)("li",{className:"menu-painelleitura-li",children:[Object(c.jsx)("i",{className:"fas fa-bible fa-2x icone"})," LEITURA DA B\xcdBLIA"]})}),Object(c.jsx)(S.HashLink,{className:"li-vamos",to:"/harpacrista",children:Object(c.jsxs)("li",{className:"menu-painelleitura-li",children:[Object(c.jsx)("i",{className:"fas fa-music fa-2x icone"}),"HINOS DA HARPA"]})}),Object(c.jsx)(S.HashLink,{to:"/sobre",children:Object(c.jsxs)("li",{className:"menu-painelleitura-li",children:[Object(c.jsx)("i",{className:"fas fa-globe fa-2x icone"}),"SOBRE"]})})]})})}t(128);t(129);var ee=t(193),ae=Object(m.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:80},selectEmpty:{marginTop:e.spacing(2)}}}));t(130);t(131);t(132);t(133),t(134),t(135);function te(){return Object(c.jsxs)("article",{className:"artigo-article",children:[Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"artigo-article-div-um",children:[Object(c.jsx)("span",{children:Object(c.jsx)("i",{className:"fas fa-bible fa-4x",children:" "})}),Object(c.jsx)("h3",{children:"Vers\xe3o dispon\xedvel - NVI"}),Object(c.jsx)("p",{children:"A B\xedblia Nova Vers\xe3o Internacional n\xe3o foi traduzida de uma outra tradu\xe7\xe3o b\xedblica, mas foi traduzida diretamente dos manuscritos dos idiomas originais hebraico, aramaico e grego, o que torna o conte\xfado da tradu\xe7\xe3o NVI mais confi\xe1vel ainda."})]}),Object(c.jsxs)("div",{className:"artigo-article-div-dois",children:[Object(c.jsx)("span",{children:Object(c.jsx)("i",{className:"fas fa-mouse fa-4x"})}),Object(c.jsx)("h3",{children:"Onde voc\xea estiver"}),Object(c.jsx)("p",{children:"O Site FONTE DE VIDA foi criado para que voc\xea possa achar de modo f\xe1cil e pr\xe1tico a palavra de Deus."})]}),Object(c.jsxs)("div",{className:"artigo-article-div-tres",children:[Object(c.jsx)("span",{children:Object(c.jsx)("i",{className:"fas fa-mobile-alt fa-4x"})}),Object(c.jsx)("h3",{children:"F\xe1cil leitura em seu celular"}),Object(c.jsx)("p",{children:"O site FONTE DE VIDA foi criado n\xe3o s\xf3 para ser de f\xe1cil acesso em seu computador, mas tamb\xe9m em seu celular. Para que voc\xea leia a palavra de Deus  em qualquer lugar."})]})]})}var ce=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(k,{}),Object(c.jsx)(I,{}),Object(c.jsx)(te,{}),Object(c.jsx)(Q,{})]})};t(136);n.a.render(Object(c.jsx)(r.BrowserRouter,{children:Object(c.jsxs)(l.g,{children:[Object(c.jsx)(l.d,{path:"/",exact:!0,component:ce}),Object(c.jsx)(l.d,{path:"/biblianvi",exact:!0,component:function(){var e=Object(s.useState)(""),a=Object(o.a)(e,2),t=a[0],i=a[1],n=Object(s.useState)(!1),r=Object(o.a)(n,2),l=r[0],j=r[1],b=Object(s.useState)(!1),d=Object(o.a)(b,2),u=d[0],O=d[1];function m(e,a){"ANTIGO TESTAMENTO"===a?(j(!0),O(!1),i(a)):(j(!1),O(!0),i(a))}return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(k,{}),Object(c.jsx)(I,{}),Object(c.jsx)("main",{className:"biblia-main",children:Object(c.jsxs)("div",{className:"biblia-div-um",id:"selecionar",children:[Object(c.jsxs)("div",{className:"biblia-div-velho",onClick:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ANTIGO TESTAMENTO";m(0,a)},children:[Object(c.jsx)("span",{children:Object(c.jsx)("i",{class:"fas fa-scroll fa-4x biblia-icone"})}),Object(c.jsx)("p",{children:"ANTIGO TESTAMENTO"})]}),Object(c.jsxs)("div",{className:"biblia-div-novo",onClick:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"NOVO TESTAMENTO";m(0,a)},children:[Object(c.jsx)("span",{children:Object(c.jsx)("i",{class:"fas fa-cross fa-4x biblia-icone"})})," ",Object(c.jsx)("p",{children:"NOVO TESTAMENTO"})]})]})}),Object(c.jsx)("div",{className:"biblia-div-select",children:l&&Object(c.jsx)(G,{idadeLivro:t,DesativaSelect:function(){}})}),Object(c.jsx)("div",{className:"biblia-div-select",children:u&&Object(c.jsx)(G,{idadeLivro:t})}),Object(c.jsx)(Z,{idadeLivro:t}),Object(c.jsx)(Q,{})]})}}),Object(c.jsx)(l.d,{path:"/biblianvi/painelleitura/:idade/:livro/:capitulo/:versiculo",component:function(e){var a=Object(s.useState)(),t=Object(o.a)(a,2),i=t[0],n=t[1],r=Object(s.useState)(e.match.params.livro),l=Object(o.a)(r,2),j=l[0],b=l[1],d=Object(s.useState)(e.match.params.capitulo),u=Object(o.a)(d,2),O=u[0],m=u[1],p=Object(s.useState)(e.match.params.versiculo),h=Object(o.a)(p,2),x=h[0],f=(h[1],Object(s.useState)(!1)),v=Object(o.a)(f,2),g=v[0],N=v[1],E=Object(s.useState)([]),A=Object(o.a)(E,2),S=A[0],I=A[1],C=Object(s.useState)(!1),q=Object(o.a)(C,2),T=q[0],D=q[1],R=Object(s.useState)(!1),B=Object(o.a)(R,2),F=B[0],P=B[1],V=Object(s.useState)(!0),M=Object(o.a)(V,2),H=M[0],U=M[1],z=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(k,{}),Object(c.jsx)("article",{className:"erro-article",children:Object(c.jsxs)("div",{className:"erro-article-div",children:[Object(c.jsx)("spam",{children:Object(c.jsx)("i",{class:"fas fa-exclamation-triangle fa-5x"})}),Object(c.jsx)("h1",{children:"Desculpe, mas a pesquisa n\xe3o retornou informa\xe7\xe3o."})]})}),Object(c.jsx)(_,{}),Object(c.jsx)(Q,{})]})};function G(e,a,t){return W.apply(this,arguments)}function W(){return(W=Object(L.a)(w.a.mark((function e(a,t,c){var s,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==c){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,y("".concat(i,"/").concat(t,"/").concat(c));case 4:if(s=e.sent,!(c>s.data[0])){e.next=7;break}return e.abrupt("return");case 7:b(t),m(c),N(s),n=document.getElementById(x),console.log(typeof n),"m"!=x&null!=n&&(n.style.color="Black");case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e){return K.apply(this,arguments)}function K(){return(K=Object(L.a)(w.a.mark((function e(a){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("buscacuriosidade/".concat(a));case 2:t=e.sent,D(t),console.log(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)(Object(L.a)(w.a.mark((function a(){var t,s,i;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if("antigo"!==e.match.params.idade){a.next=13;break}return n("antigotesta"),a.next=4,y("antigotesta/".concat(j,"/").concat(O));case 4:if(!((t=a.sent).data[1]<1||t.data[0]<1||t.data<1)){a.next=9;break}return P(!0),U(!1),a.abrupt("return");case 9:N(t),U(!1),a.next=23;break;case 13:return n("novotesta"),a.next=16,y("novotesta/".concat(j,"/").concat(O));case 16:if(!((t=a.sent).data[1]<1||t.data[0]<1||t.data<1)){a.next=21;break}return P(!0),U(!1),a.abrupt("return");case 21:N(t),U(!1);case 23:for(s=[],i=1;i<=t.data[0];i++)s.push(Object(c.jsx)("option",{value:i,children:i},i));I(s),J(j),"m"!=x&&(document.getElementById(x).style.color="Red");case 28:case"end":return a.stop()}}),a)}))),[]),H?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(k,{}),Object(c.jsx)($,{}),Object(c.jsx)(Q,{})]}):F?Object(c.jsx)(z,{}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(k,{}),Object(c.jsxs)("menu",{className:"painelleiturabiblia-menu",id:"inicio",children:[Object(c.jsx)("article",{className:"painelleitura-article",children:Object(c.jsxs)("div",{className:"painelleitura-article-div",children:[Object(c.jsxs)("h3",{className:"painelleitura-article-h3",children:[j," - ",O]}),g.data[1].map((function(e,a){return Object(c.jsxs)("p",{id:a+1,className:"painelleitura-article-paragrafo",children:[Object(c.jsx)("spam",{children:a+1})," - ",e]},a)}))]})}),Object(c.jsx)(_,{}),Object(c.jsx)("article",{className:"painelleitura-article-paginacao",children:Object(c.jsxs)("ul",{className:"painelleitura-article-ul",children:[Object(c.jsxs)("a",{href:"#inicio",children:["   ",Object(c.jsxs)("li",{className:"painelleitura-article-li",onClick:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:parseInt(O)-1;G(e,a,t)},children:[Object(c.jsx)("span",{children:Object(c.jsx)("i",{className:"fas fa-arrow-circle-left fa-sm"})}),"  ",j," -   ",parseInt(O)-1===0?parseInt(O):parseInt(O)-1]})," "]}),Object(c.jsxs)("li",{className:"painelleitura-article-li",children:[Object(c.jsx)("label",{children:"CAP\xcdTULO"}),Object(c.jsx)("select",{className:"painelleitura-article-select",value:parseInt(O),onChange:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j;G(e,a,e.target.value)},children:S})]}),Object(c.jsxs)("a",{className:"ancora",href:"#inicio",children:["   ",Object(c.jsxs)("li",{className:"painelleitura-article-li",onClick:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:parseInt(O)+1;G(e,a,t)},children:[j," -  ",parseInt(O)+1>g.data[0]?parseInt(O):parseInt(O)+1,"  ",Object(c.jsx)("span",{children:Object(c.jsx)("i",{className:"fas fa-arrow-circle-right fa-sm"})})]})," "]})]})}),Object(c.jsx)("article",{className:"painelleitura-article-article",children:T&&T.data.map((function(e,a){return Object(c.jsxs)("div",{className:"painelleitura-article-article-div",children:[Object(c.jsx)("span",{children:Object(c.jsx)("i",{className:"fas fa-search fa-3x"})}),Object(c.jsx)("h3",{className:"painelleitura-article-article-div-p-um",children:"Curiosidades"}),Object(c.jsx)("p",{className:"painelleitura-article-article-div-p-dois",children:e.conteudo})]},a)}))})]}),Object(c.jsx)(Q,{})]})}}),Object(c.jsx)(l.d,{path:"/harpacrista",component:function(){var e=ae(),a=Object(s.useState)(),t=Object(o.a)(a,2),i=t[0],n=t[1],r=Object(s.useState)(!1),l=Object(o.a)(r,2),j=l[0],b=l[1],d=Object(s.useState)(!1),u=Object(o.a)(d,2),O=u[0],m=u[1],p=Object(s.useState)(!1),h=Object(o.a)(p,2),x=h[0],v=h[1],g=Object(s.useState)(),N=Object(o.a)(g,2),E=N[0],A=N[1],S=Object(s.useState)(!1),I=Object(o.a)(S,2),C=I[0],q=I[1],T=Object(s.useState)(!1),D=Object(o.a)(T,2),R=D[0],B=D[1];function F(e){return P.apply(this,arguments)}function P(){return(P=Object(L.a)(w.a.mark((function e(a){var t,c,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=12;break}return b(a),e.next=4,y("buscatitulopornumero/".concat(a));case 4:t=e.sent,c=[],c=t.data[0].letra.split("%"),B(!1),m(c),v(t.data[0].titulo),e.next=20;break;case 12:return e.next=14,y("buscatitulopornumero/".concat(j));case 14:s=e.sent,c=[],c=s.data[0].letra.split("%"),B(!1),m(c),v(s.data[0].titulo);case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(){return(V=Object(L.a)(w.a.mark((function e(){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(void 0===E||E.length<2)){e.next=3;break}return alert("Digite ao menos 2 letras para iniciar a pesquisa"),e.abrupt("return");case 3:return e.next=5,y("buscatituloporpalavra/".concat(E));case 5:(a=e.sent).data.length<1?(B(!0),q(!1),m(!1),v(!1)):(m(!1),v(!1),q(a),B(!1));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)(Object(L.a)(w.a.mark((function e(){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("buscanumeroharpa");case 2:a=e.sent,n(a);case 4:case"end":return e.stop()}}),e)}))),[]),i?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("nav",{className:"hinoharpa-nav",children:[Object(c.jsx)(k,{}),Object(c.jsxs)("article",{className:"hinoharp-article",children:[Object(c.jsxs)("div",{className:"hinoharpa-article-div-numero",children:[Object(c.jsx)("label",{className:"hinoharpa-article-div-label-numero",children:"N\xdaMERO"}),Object(c.jsxs)("form",{className:"hinoharpa-article-div-form",children:[Object(c.jsxs)("select",{className:"hinoharpa-article-div-select",value:j,onChange:function(e){return b(e.target.value)},children:[Object(c.jsx)("option",{}),i.data.map((function(e,a){return Object(c.jsx)("option",{children:e.numero},a)}))]}),Object(c.jsx)(ee.a,{multiline:!0,rows:2,style:{marginLeft:"10px",width:"50%",justifyContent:"center",textAlign:"center",marginBottom:"10px"},disabled:!0,size:"small",id:"outlined-basic",label:x}),Object(c.jsx)(f.a,{style:{backgroundColor:"#14a37f",color:"White",marginLeft:"15px"},variant:"contained",disabled:!j,onClick:function(){F()},children:"BUSCAR"})]})]}),Object(c.jsxs)("div",{className:"hinoharpa-article-div-titulo",children:[Object(c.jsx)("div",{children:Object(c.jsx)("label",{className:"hinoharpa-article-div-label-titulo",children:"PALAVRA"})}),Object(c.jsx)("form",{className:e.root,noValidate:!0,autoComplete:"off",children:Object(c.jsx)(ee.a,{onChange:function(e){A(e.target.value)},size:"small",id:"outlined-basic",label:"DIGITE",variant:"outlined"})}),Object(c.jsx)("div",{children:Object(c.jsx)(f.a,{style:{backgroundColor:"#14a37f",color:"White",marginLeft:"10px"},variant:"contained",onClick:function(){!function(){V.apply(this,arguments)}()},children:"BUSCAR"})})]})]}),Object(c.jsx)("hr",{}),R&&Object(c.jsxs)("menu",{className:"hinoharpa-busca-menu-erro",children:[Object(c.jsx)("spam",{children:Object(c.jsx)("i",{class:"far fa-frown fa-4x"})}),Object(c.jsx)("p",{children:"N\xe3o encontrei o Hino desejado."})]}),Object(c.jsxs)("article",{className:"hinoharpaleitura-article",children:[Object(c.jsx)("h3",{children:x}),O&&O.map((function(e,a){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("p",{children:e},a)})})),Object(c.jsx)("menu",{className:"hinoharpa-busca-menu",children:C&&C.data.map((function(e,a){return Object(c.jsxs)("div",{onClick:function(){q(!1),F(e.numero)},children:[Object(c.jsxs)("p",{children:[" ",Object(c.jsx)("i",{class:"icone fas fa-music fa-2x"}),"HINO: ",e.numero]},a),Object(c.jsx)("p",{children:e.titulo},a+1)]},e.numero)}))})]}),Object(c.jsx)(_,{})]}),Object(c.jsx)(Q,{})]}):Object(c.jsx)($,{})}}),Object(c.jsx)(l.d,{path:"/biblianvi/pesquisa/:palavrapesquisabiblia",component:function(e){var a=Object(s.useState)(!0),t=Object(o.a)(a,2),i=t[0],n=t[1],r=Object(s.useState)(!1),l=Object(o.a)(r,2),j=l[0],b=l[1],d=Object(s.useState)(e.match.params.palavrapesquisabiblia),u=Object(o.a)(d,2),O=u[0],m=u[1],p=Object(s.useState)(!1),h=Object(o.a)(p,2),x=h[0],f=h[1],v=Object(s.useState)(),g=Object(o.a)(v,2),N=g[0],E=g[1],A=Object(s.useState)(4),I=Object(o.a)(A,2),C=I[0],q=I[1],T=Object(s.useState)(0),D=Object(o.a)(T,2),R=D[0],B=D[1];function F(){return(F=Object(L.a)(w.a.mark((function a(){var t,c;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(O==e.match.params.palavrapesquisabiblia){a.next=7;break}return m(e.match.params.palavrapesquisabiblia),t=e.match.params.palavrapesquisabiblia.normalize("NFD").replace(/[\u0300-\u036f]/g,""),a.next=5,y("biblianvi/pesquisa/".concat(t.toLowerCase()));case 5:(c=a.sent).data.length<1?(b(!0),n(!1)):(E([{tamanho:c.data.length,paginacao:c.data.slice(R,C),saberQuePagina:1}]),f(c),n(!1),b(!1));case 7:case"end":return a.stop()}}),a)})))).apply(this,arguments)}function P(e,a){"avanca"===a&C<N[0].tamanho&&(E([{tamanho:x.data.length,paginacao:x.data.slice(R+4,C+4),saberQuePagina:N[0].saberQuePagina+1}]),q(C+4),B(R+4)),"voltar"===a&R>0&&(E([{tamanho:x.data.length,paginacao:x.data.slice(R-4,C-4),saberQuePagina:N[0].saberQuePagina-1}]),q(C-4),B(R-4))}return Object(s.useEffect)(Object(L.a)(w.a.mark((function e(){var a,t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=O.normalize("NFD").replace(/[\u0300-\u036f]/g,""),e.next=3,y("biblianvi/pesquisa/".concat(a.toLowerCase()));case 3:(t=e.sent).data.length<1?(b(!0),n(!1)):(E([{tamanho:t.data.length,paginacao:t.data.slice(R,C),saberQuePagina:1}]),f(t),n(!1),b(!1));case 5:case"end":return e.stop()}}),e)}))),[]),function(){F.apply(this,arguments)}(),i?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(k,{}),Object(c.jsx)($,{}),Object(c.jsx)(Q,{})]}):j?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(k,{}),Object(c.jsxs)("article",{className:"pesquisabibia-article",children:[Object(c.jsx)("div",{className:"pesquisabibia-article-div-erro",children:Object(c.jsxs)("h2",{children:[" ",Object(c.jsx)("spam",{children:Object(c.jsx)("i",{class:"far fa-frown fa-4x"})}),"Desculpe, n\xe3o encontramos a palavra ***",e.match.params.palavrapesquisabiblia,"*** que voc\xea solicitou ."]})}),Object(c.jsx)(_,{})]}),Object(c.jsx)(Q,{})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(k,{}),Object(c.jsx)("div",{className:"pesquisabibia-article-div-palavra",children:Object(c.jsxs)("h3",{children:[Object(c.jsx)("i",{class:"fas fa-search fa-3x"})," ** ",e.match.params.palavrapesquisabiblia," **"]})}),Object(c.jsx)("article",{id:"inicio",className:"pesquisabibia-article",children:Object(c.jsx)("div",{className:"pesquisabibia-article-div-um",children:N[0].paginacao.map((function(e){return Object(c.jsx)(c.Fragment,{children:e.capituloVersiculoConteudo.map((function(a){return Object(c.jsx)(c.Fragment,{children:a.conteudo.map((function(t,s){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"pesquisabibia-article-div-dois",children:[Object(c.jsxs)("p",{children:["Palavra: ",t.conteudo]},s),Object(c.jsx)(S.HashLink,{to:"/biblianvi/painelleitura/".concat(e.idadeTestamento,"/").concat(e.livro,"/").concat(a.capituloLivro,"/").concat(t.versiculo,"#").concat(t.versiculo),children:Object(c.jsxs)("p",{children:[e.livro," - ",a.capituloLivro," : ",t.versiculo]},s+1)})]})})}))})}))})}))})}),Object(c.jsx)(_,{}),Object(c.jsx)("div",{className:"pesquisabibia-article-div-paginas",children:Object(c.jsxs)("ul",{className:"pesquisabibia-article-div-paginas-li-ul",children:[Object(c.jsx)("a",{href:"#inicio",children:Object(c.jsxs)("li",{className:"pesquisabibia-article-div-paginas-li-left",onClick:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"voltar";P(0,a)},children:[Object(c.jsx)("span",{children:Object(c.jsx)("i",{className:"fas fa-arrow-circle-left sm"})}),"Voltar"]})}),Object(c.jsxs)("li",{children:[" P\xe1gina ",N[0].saberQuePagina," de ",N[0].tamanho%4===0?N[0].tamanho/4:Math.floor(N[0].tamanho/4+1)]}),Object(c.jsxs)("a",{href:"#inicio",children:[" ",Object(c.jsxs)("li",{className:"pesquisabibia-article-div-paginas-li-right",onClick:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"avanca";P(0,a)},children:["Avan\xe7ar",Object(c.jsx)("span",{children:Object(c.jsx)("i",{className:"fas fa-arrow-circle-right sm"})})]})]})]})}),Object(c.jsx)(Q,{})]})}}),Object(c.jsx)(l.d,{path:"/sobre",component:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(k,{}),Object(c.jsx)("article",{className:"sobre-article",children:Object(c.jsxs)("div",{className:"sobre-article-div",children:[Object(c.jsx)("h2",{children:"Sobre"}),Object(c.jsxs)("p",{children:["Ol\xe1, meu nome \xe9 Marco. Uma pessoa cheia de defeitos e que comete falhas, mas que sempre tenta fazer o melhor e melhorar para agradar a ",Object(c.jsx)("strong",{children:"Deus"}),"."]}),Object(c.jsx)("p",{children:Object(c.jsx)("strong",{children:"A vida de um crist\xe3o \xe9 feita de busca incans\xe1vel pela boa, perfeita e agrad\xe1vel presen\xe7a de Deus e de boas obras, obras que ajudam seu pr\xf3ximo e que agradam o Pai, filho e o Esp\xedrito Santo segundo a vontade de Deus."})}),Object(c.jsx)("p",{children:"Mas eu sempre achei que as obras que fa\xe7o ou que j\xe1 fiz ainda s\xe3o pouqu\xedssimas perto do que Deus j\xe1 fez por mim."}),Object(c.jsxs)("p",{children:["\xc9 claro, mesmo que se eu dedicar minha vida inteira a fazer obras, ",Object(c.jsx)("strong",{children:"ainda sim n\xe3o ser\xe1 o suficiente perto do que Deus e seu filho Jesus j\xe1 fizeram por mim."})]}),Object(c.jsx)("p",{children:" E como gosto muito de tecnologia, resolvi criar algo relacionado que agradasse a Deus."}),Object(c.jsxs)("p",{children:["E foi com muito orgulho e suor que criei o site ",Object(c.jsx)("strong",{children:"FONTE DE VIDA"}),", para que voc\xea possa de forma din\xe2mica, f\xe1cil e intuitiva ler a palavra de Deus, pois Sua palavra \xe9 vida e vida em abunbd\xe2ncia e deve ser acess\xedvel de forma pr\xe1tica e f\xe1cil. "]}),Object(c.jsxs)("p",{children:[" O site ",Object(c.jsx)("strong",{children:"FONTE DE VIDA"})," foi criado para poder levar a palavra, conhecimento e a vontade de Deus para qualquer lugar do mundo. "]}),Object(c.jsxs)("p",{children:["Aqui voc\xea tem acesso a ",Object(c.jsx)("strong",{children:"Bibia NVI Vers\xe3o Internacional"}),", que n\xe3o foi traduzida de uma outra tradu\xe7\xe3o b\xedblica, mas foi traduzida diretamente dos manuscritos dos idiomas originais hebraico, aramaico e grego, o que torna o conte\xfado da tradu\xe7\xe3o NVI ainda mais confi\xe1vel."]}),Object(c.jsx)("p",{children:"O site FONTE DE VIDA permite voc\xea a encontrar de forma f\xe1cil o livro, cap\xedtulo e vers\xedculo e tamb\xe9m via pesquisa por palavra,"}),Object(c.jsx)("p",{children:"onde a pesquisa lhe mostrar\xe1 livro, cap\xedtulo e vers\xedculo relacionado a palavra desejada e te direcionar\xe1 at\xe9 o caminho correto onde se encontra na b\xedblia."}),Object(c.jsxs)("p",{children:["H\xe1 tamb\xe9m acesso aos ",Object(c.jsx)("strong",{children:"524 Hinos da Harpa Crist\xe3."})," "]}),Object(c.jsx)("p",{children:"Onde voc\xea pode buscar o hino desejado tanto por n\xfamero, quanto pela pesquisa por palavra contida no Hino."}),Object(c.jsx)("hr",{}),Object(c.jsxs)("p",{children:[" Esse site ",Object(c.jsx)("strong",{children:"n\xe3o tem fins lucrativos"}),", por isso voc\xea n\xe3o vai encontrar propaganda durante seu uso."]}),Object(c.jsx)("hr",{}),Object(c.jsx)("p",{children:"Caso voc\xea queira propor melhorias, corre\xe7\xf5es ou at\xe9 mesmo doa\xe7\xf5es que ajudem a manter o site no ar, por favor, envie um e-mail com as informa\xe7\xf5es: marco2011sky@gmail.com"}),Object(c.jsx)("h3",{children:"QUE DEUS ABEN\xc7OE CADA UM DE VOC\xcaS COM MUITA SA\xdaDE, PAZ E PRINCIPALMENTE COM A PRESEN\xc7A DELE, NA QUAL \xc9 PERFEITA E AGRAD\xc1VEL."}),Object(c.jsxs)("p",{children:["N\xc3O SE ESQUE\xc7A: VOC\xca \xc9 MUITO AMADO E ESPECIAL PRA DEUS. SEMPRE !",Object(c.jsx)("spam",{children:Object(c.jsx)("i",{class:"far fa-gem fa-2x"})})]}),Object(c.jsx)("p",{children:"Um forte abra\xe7o a todos."})]})}),Object(c.jsx)(_,{}),Object(c.jsx)(Q,{})]})}}),Object(c.jsx)(l.d,{path:"*",component:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(k,{}),Object(c.jsx)("article",{className:"erro-article",children:Object(c.jsxs)("div",{className:"erro-article-div",children:[Object(c.jsx)("spam",{children:Object(c.jsx)("i",{class:"fas fa-exclamation-triangle fa-5x"})}),Object(c.jsx)("h1",{children:"Desculpe, p\xe1gina n\xe3o encontrada!"})]})}),Object(c.jsx)(_,{}),Object(c.jsx)(Q,{})]})}})]})}),document.getElementById("root"))},95:function(e,a,t){},96:function(e,a,t){}},[[137,1,2]]]);
//# sourceMappingURL=main.06ce36b9.chunk.js.map