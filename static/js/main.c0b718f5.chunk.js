(this["webpackJsonpmonitprod-front"]=this["webpackJsonpmonitprod-front"]||[]).push([[0],{115:function(e,t,n){},128:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(33),c=n.n(o),i=(n(115),n(80)),s=n.n(i),l=n(42),u=n.n(l),p=n(81),d=n.n(p),b=n(19),m=n(174),j=n(1);function h(e){return Object(j.jsx)(m.a,Object(b.a)(Object(b.a)({},e),{},{variant:"h1"}))}function f(e){return Object(j.jsx)(m.a,Object(b.a)(Object(b.a)({},e),{},{variant:"h2"}))}function x(e){return Object(j.jsx)(m.a,Object(b.a)(Object(b.a)({},e),{},{variant:"subtitle1"}))}function O(e){return Object(j.jsx)(m.a,Object(b.a)(Object(b.a)({},e),{},{variant:"price"}))}function g(e){return Object(j.jsx)(m.a,Object(b.a)(Object(b.a)({},e),{},{variant:"body1"}))}function C(e){var t,n=e.product,r=n.title,a=n.specification,o=n.price,c=n.source.imageUrl;return Object(j.jsx)("div",{className:u.a.Card,children:Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)(d.a,{src:c,className:u.a["Card-Image"],style:{paddingTop:"60%"},cover:!0,animationDuration:3e3})}),Object(j.jsxs)("div",{className:u.a["Text-wrapper"],children:[Object(j.jsx)(f,{className:u.a.H2,children:v(r,20,"...")}),Object(j.jsx)(x,{className:u.a.Sub,children:v(a,45,"...")}),Object(j.jsxs)(O,{children:["R$ ",(t=o.value,(t/100).toLocaleString("PT-BR",{maximumFractionDigits:2,minimumFractionDigits:2}))]})]})]})})}function v(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return t+n.length-1<e.length||(n=""),e.substr(0,t-n.length).trim()+n}function _(e){var t=e.products;return Object(j.jsx)("div",{className:s.a.Grid,children:t.map((function(e){return Object(j.jsx)(C,{product:e})}))})}var y=n(20),S=n.n(y),w=n(13),H=n(27),M=n(86);Number("0");function B(e){return k.apply(this,arguments)}function k(){return(k=Object(H.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=5;break;case 4:return e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N="".concat("https://1y3vz1b125.execute-api.us-east-1.amazonaws.com/monitprod","/products");function z(){return F.apply(this,arguments)}function F(){return(F=Object(H.a)(S.a.mark((function e(){var t,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(M);case 2:if(!(t=e.sent)){e.next=5;break}return e.abrupt("return",{products:t});case 5:return e.next=7,fetch(N);case 7:return n=e.sent,e.abrupt("return",n.json());case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(){return(V=Object(H.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:n=e.sent,t(n.products);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){var e=Object(r.useState)([]),t=Object(w.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(!1),c=Object(w.a)(o,2),i=c[0],s=c[1];return console.log(n),i||(!function(e){V.apply(this,arguments)}(a),s(!0)),{products:n,setIsStarted:s}}var P=n(87),A=n.n(P);function U(){var e=L().products;return Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{className:A.a["Products-H1"],children:"Produtos"}),Object(j.jsx)(_,{products:e})]})}var G=n(88),E=n.n(G);var T=function(){return Object(j.jsx)("div",{className:E.a.Home,children:Object(j.jsx)(U,{})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,179)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))},D=n(64),W=n.n(D);function Z(e){var t=e.header,n=e.body;return Object(j.jsxs)("div",{className:W.a.Main,children:[Object(j.jsx)("header",{className:W.a["Main-header"],children:t}),Object(j.jsx)("div",{className:W.a["Main-body"],children:n})]})}var R,J,Y,q=n(178),Q=n(177),X=["title","titleId"];function K(){return K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},K.apply(this,arguments)}function $(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function ee(e,t){var n=e.title,a=e.titleId,o=$(e,X);return r.createElement("svg",K({width:123,height:33,viewBox:"0 0 123 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},o),n?r.createElement("title",{id:a},n):null,R||(R=r.createElement("path",{d:"M20.426 10.364V23H17.348V15.422L14.522 23H12.038L9.194 15.404V23H6.116V10.364H9.752L13.298 19.112L16.808 10.364H20.426ZM29.6154 23.126C28.4274 23.126 27.3354 22.85 26.3394 22.298C25.3554 21.746 24.5694 20.978 23.9814 19.994C23.4054 18.998 23.1174 17.882 23.1174 16.646C23.1174 15.41 23.4054 14.3 23.9814 13.316C24.5694 12.332 25.3554 11.564 26.3394 11.012C27.3354 10.46 28.4274 10.184 29.6154 10.184C30.8034 10.184 31.8894 10.46 32.8734 11.012C33.8694 11.564 34.6494 12.332 35.2134 13.316C35.7894 14.3 36.0774 15.41 36.0774 16.646C36.0774 17.882 35.7894 18.998 35.2134 19.994C34.6374 20.978 33.8574 21.746 32.8734 22.298C31.8894 22.85 30.8034 23.126 29.6154 23.126ZM29.6154 20.318C30.6234 20.318 31.4274 19.982 32.0274 19.31C32.6394 18.638 32.9454 17.75 32.9454 16.646C32.9454 15.53 32.6394 14.642 32.0274 13.982C31.4274 13.31 30.6234 12.974 29.6154 12.974C28.5954 12.974 27.7794 13.304 27.1674 13.964C26.5674 14.624 26.2674 15.518 26.2674 16.646C26.2674 17.762 26.5674 18.656 27.1674 19.328C27.7794 19.988 28.5954 20.318 29.6154 20.318ZM50.0938 23H47.0158L41.8678 15.206V23H38.7898V10.364H41.8678L47.0158 18.194V10.364H50.0938V23ZM56.403 10.364V23H53.325V10.364H56.403ZM68.7236 10.364V12.83H65.3756V23H62.2976V12.83H58.9496V10.364H68.7236ZM80.8983 14.432C80.8983 15.164 80.7303 15.836 80.3943 16.448C80.0583 17.048 79.5423 17.534 78.8463 17.906C78.1503 18.278 77.2863 18.464 76.2543 18.464H74.3463V23H71.2683V10.364H76.2543C77.2623 10.364 78.1143 10.538 78.8103 10.886C79.5063 11.234 80.0283 11.714 80.3763 12.326C80.7243 12.938 80.8983 13.64 80.8983 14.432ZM76.0203 16.016C76.6083 16.016 77.0463 15.878 77.3343 15.602C77.6223 15.326 77.7663 14.936 77.7663 14.432C77.7663 13.928 77.6223 13.538 77.3343 13.262C77.0463 12.986 76.6083 12.848 76.0203 12.848H74.3463V16.016H76.0203ZM89.9448 23L87.3168 18.23H86.5788V23H83.5008V10.364H88.6668C89.6628 10.364 90.5088 10.538 91.2048 10.886C91.9128 11.234 92.4408 11.714 92.7888 12.326C93.1368 12.926 93.3108 13.598 93.3108 14.342C93.3108 15.182 93.0708 15.932 92.5908 16.592C92.1228 17.252 91.4268 17.72 90.5028 17.996L93.4188 23H89.9448ZM86.5788 16.052H88.4868C89.0508 16.052 89.4708 15.914 89.7468 15.638C90.0348 15.362 90.1788 14.972 90.1788 14.468C90.1788 13.988 90.0348 13.61 89.7468 13.334C89.4708 13.058 89.0508 12.92 88.4868 12.92H86.5788V16.052ZM102.219 23.126C101.031 23.126 99.939 22.85 98.943 22.298C97.959 21.746 97.173 20.978 96.585 19.994C96.009 18.998 95.721 17.882 95.721 16.646C95.721 15.41 96.009 14.3 96.585 13.316C97.173 12.332 97.959 11.564 98.943 11.012C99.939 10.46 101.031 10.184 102.219 10.184C103.407 10.184 104.493 10.46 105.477 11.012C106.473 11.564 107.253 12.332 107.817 13.316C108.393 14.3 108.681 15.41 108.681 16.646C108.681 17.882 108.393 18.998 107.817 19.994C107.241 20.978 106.461 21.746 105.477 22.298C104.493 22.85 103.407 23.126 102.219 23.126ZM102.219 20.318C103.227 20.318 104.031 19.982 104.631 19.31C105.243 18.638 105.549 17.75 105.549 16.646C105.549 15.53 105.243 14.642 104.631 13.982C104.031 13.31 103.227 12.974 102.219 12.974C101.199 12.974 100.383 13.304 99.771 13.964C99.171 14.624 98.871 15.518 98.871 16.646C98.871 17.762 99.171 18.656 99.771 19.328C100.383 19.988 101.199 20.318 102.219 20.318ZM116.127 10.364C117.459 10.364 118.623 10.628 119.619 11.156C120.615 11.684 121.383 12.428 121.923 13.388C122.475 14.336 122.751 15.434 122.751 16.682C122.751 17.918 122.475 19.016 121.923 19.976C121.383 20.936 120.609 21.68 119.601 22.208C118.605 22.736 117.447 23 116.127 23H111.393V10.364H116.127ZM115.929 20.336C117.093 20.336 117.999 20.018 118.647 19.382C119.295 18.746 119.619 17.846 119.619 16.682C119.619 15.518 119.295 14.612 118.647 13.964C117.999 13.316 117.093 12.992 115.929 12.992H114.471V20.336H115.929Z",fill:"#14142B"})),J||(J=r.createElement("rect",{x:6.7998,y:4.81738,width:18.4944,height:18.4944,transform:"rotate(14 6.7998 4.81738)",fill:"url(#paint0_linear_36:274)",fillOpacity:.6})),Y||(Y=r.createElement("defs",null,r.createElement("linearGradient",{id:"paint0_linear_36:274",x1:6.08578,y1:2.19229,x2:29.7675,y2:11.1582,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"#EB0055"}),r.createElement("stop",{offset:1,stopColor:"#FFFA80"})))))}var te=r.forwardRef(ee),ne=(n.p,n(171)),re=n(90),ae=n.n(re),oe=n(175),ce=n(50),ie=n.n(ce);function se(e){var t=e.children,n=e.open,r=e.onClose;return Object(j.jsx)("div",{children:Object(j.jsx)(ne.a,{open:n,onClose:r,className:ie.a.Modal,BackdropComponent:le,children:Object(j.jsxs)("div",{className:ie.a.Box,children:[Object(j.jsx)("div",{className:ie.a["Icon-wrapper"],children:Object(j.jsx)(oe.a,{sx:{color:"black"},"aria-label":"close",onClick:function(e){return r&&r(e,"backdropClick")},children:Object(j.jsx)(ae.a,{})})}),t]})})})}function le(e){return Object(j.jsx)("div",Object(b.a)(Object(b.a)({},e),{},{className:ie.a.Backdrop}))}var ue=n(91),pe=n.n(ue),de=n(176),be=n(169),me=n(51),je=n.n(me),he=n(92),fe=n.n(he);function xe(e){return Object(j.jsx)("div",{children:Object(j.jsx)(de.a,Object(b.a)({className:fe.a.Button,variant:"contained",color:"primary"},e))})}var Oe=n(93),ge=n.n(Oe),Ce="".concat("https://1y3vz1b125.execute-api.us-east-1.amazonaws.com/monitprod","/sign");function ve(e){return _e.apply(this,arguments)}function _e(){return(_e=Object(H.a)(S.a.mark((function e(t){var n,r,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B({value:!0});case 2:if(!(n=e.sent)){e.next=5;break}return e.abrupt("return",n.value);case 5:return e.next=7,fetch(Ce,{method:"POST",body:JSON.stringify(t)});case 7:return r=e.sent,a=r.status,e.abrupt("return",201===a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ye(){return(ye=Object(H.a)(S.a.mark((function e(t,n){var r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ve(n);case 2:r=e.sent,t(r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Se(){var e=Object(r.useState)(void 0),t=Object(w.a)(e,2),n=t[0],a=t[1];return{isSigned:n,sign:function(e){return function(e,t){return ye.apply(this,arguments)}(a,e)}}}function we(){return Object(j.jsx)("div",{className:je.a["Sign-Content"],children:Object(j.jsx)(He,{})})}function He(){var e=Se(),t=e.isSigned,n=e.sign;return void 0===t?Object(j.jsx)(Me,{sign:n}):!0===t?Object(j.jsx)(h,{children:"Sucesso! \u2728\ud83c\udf89"}):Object(j.jsx)(h,{children:"N\xe3o foi poss\xedvel completar a sua chamada! \ud83d\ude25"})}function Me(e){var t=e.sign,n=Object(r.useState)(""),a=Object(w.a)(n,2),o=a[0],c=a[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h,{className:je.a["Form-H1"],children:"Assine j\xe1! \ud83c\udfac"}),Object(j.jsx)(g,{children:"Receba relat\xf3rios sobres os pre\xe7os de produtos em sua caixa de email todos os dias!"}),Object(j.jsx)("div",{children:Object(j.jsxs)(Q.a,{className:je.a["Box-Form-Wrapper"],children:[Object(j.jsx)(be.a,{value:o,onChange:function(e){return c(e.target.value)},placeholder:"exemplo@monitprod.com",className:je.a.TextField}),Object(j.jsx)(xe,{onClick:function(){t({email:o})},children:Object(j.jsx)(ge.a,{})})]})})]})}function Be(){var e=Object(r.useState)(!1),t=Object(w.a)(e,2),n=t[0],a=t[1];return Object(j.jsx)("div",{className:pe.a.Header,children:Object(j.jsxs)(q.a,{children:[Object(j.jsx)(te,{}),Object(j.jsx)(Q.a,{sx:{flexGrow:1}}),Object(j.jsx)(de.a,{color:"inherit",onClick:function(){return a(!0)},children:"\ud83d\udd25 Assinar"}),Object(j.jsx)(se,{open:n,onClose:function(){return a(!1)},children:Object(j.jsx)(we,{})})]})})}var ke=n(173),Ne=n(94),ze=Object(Ne.a)({palette:{primary:{main:"#ED2E7E"}},typography:{price:{fontWeight:"bold",fontStyle:"normal",fontSize:"19px",letterSpacing:"1px",color:"#19D284"},button:{fontWeight:600,fontStyle:"normal",fontSize:"16px",textTransform:"none"},h1:{fontWeight:"bold",fontStyle:"normal",fontSize:"32px"},h2:{fontWeight:"bold",fontStyle:"normal",fontSize:"24px"},subtitle1:{fontWeight:"normal",fontStyle:"normal",fontSize:"19px",letterSpacing:"1px",color:"#66738F",lineHeight:"25px"},body1:{fontWeight:"normal",fontStyle:"normal",fontSize:"24px",letterSpacing:"0.75px",color:"#14142B",lineHeight:"38px"},fontFamily:["Poppins"].join(",")},components:{MuiButton:{styleOverrides:{root:{fontSize:"1rem"}},variants:[]},MuiOutlinedInput:{styleOverrides:{root:{borderRadius:"15px"}}},MuiButtonBase:{defaultProps:{}},MuiToolbar:{defaultProps:{style:{background:"white"}}}}}),Fe=n(168);c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(Fe.a,{injectFirst:!0,children:Object(j.jsx)(ke.a,{theme:ze,children:Object(j.jsx)(Z,{header:Object(j.jsx)(Be,{}),body:Object(j.jsx)(T,{})})})})}),document.getElementById("root")),I()},42:function(e,t,n){e.exports={Card:"Card_Card__1YcyA","Card-Image":"Card_Card-Image__2Q_lP","Text-wrapper":"Card_Text-wrapper__2O977",Sub:"Card_Sub__25wjW",H2:"Card_H2__1WwGO"}},50:function(e,t,n){e.exports={Modal:"Modal_Modal__2cxtP",Backdrop:"Modal_Backdrop__p4b6Z",Box:"Modal_Box__1kPxS","Icon-wrapper":"Modal_Icon-wrapper__1ZmBB"}},51:function(e,t,n){e.exports={"Box-Form-Wrapper":"Sign_Box-Form-Wrapper__3Q55J","Sign-Content":"Sign_Sign-Content__J0C_c",TextField:"Sign_TextField__1oySh","Form-H1":"Sign_Form-H1__1qo1y"}},64:function(e,t,n){e.exports={"Main-header":"Main_Main-header__1L7kp","Main-body":"Main_Main-body__dSieY"}},80:function(e,t,n){e.exports={Grid:"Grid_Grid__nMiVc"}},86:function(e){e.exports=JSON.parse('[{"title":"Nintendo Switch","specification":"with Neon Blue and Neon Red Joy\u2011Con - HAC-001(-01)","brand":"Nintendo","model":"Switch","description":null,"price":{"value":161666,"shipping":null,"cashback":null},"source":{"site":"Amazon","imageUrl":"https://m.media-amazon.com/images/I/61-PblYntsL._AC_SX466_.jpg","pageUrl":"https://www.amazon.com.br/Nintendo-Switch-Azul-Vermelho-Neon/dp/B07VGRJDFY"}},{"title":"Cadeira Tecton All Black Unique","specification":"Tecton All Black Unique","brand":"Flexform","model":"Tecton All Black Unique","description":null,"price":{"value":166050,"shipping":null,"cashback":null},"source":{"site":"Flexform E-commerce","imageUrl":"https://assets.betalabs.net/production/flexform/item-images/23dc7b0869e882ad51f7a8e2e4675201.png","pageUrl":"https://www.flexform.com.br/loja/office-chairs/cadeira-de-escritorio-flexform-tecton-all-black-unique"}},{"title":"Lenovo Laptop IdeaPad 3","specification":"14 polegadas Laptop, 14 FHD (1920 x 1080) Display, AMD Ryzen 5 3500U Processor, 8GB DDR4 RAM, 256GB SSD, AMD Radeon Vega 8 Graphics, Bisel estreito, Windows 10, 81W0003QUS, Abyss Blue","brand":"Lenovo","model":"IdeaPad 3","description":null,"price":{"value":356050,"shipping":null,"cashback":null},"source":{"site":"Amazon","imageUrl":"https://images-na.ssl-images-amazon.com/images/I/61eiHmoOxLL.__AC_SX300_SY300_QL70_ML2_.jpg","pageUrl":"https://www.amazon.com.br/Lenovo-polegadas-Processor-Graphics-81W0003QUS/dp/B0862269YP"}},{"title":"Processador AMD Ryzen 5","specification":"5600X, Cache 35MB, 3.7GHz (4.6GHz Max Turbo), AM4, Sem V\xeddeo - 100-100000065BOX","brand":"AMD","model":"Ryzen 5","description":null,"price":{"value":181990,"shipping":null,"cashback":null},"source":{"site":"Kabum","imageUrl":"https://images.kabum.com.br/produtos/fotos/129451/processador-amd-ryzen-9-5950x-cache-72mb-3-4ghz-4-9ghz-max-turbo-am4-100-100000065box_1602603581_gg.jpg","pageUrl":"https://www.kabum.com.br/produto/129451/processador-amd-ryzen-5-5600x-cache-35mb-3-7ghz-4-6ghz-max-turbo-am4-sem-video-100-100000065box"}},{"title":"Guitarra SG Epiphone","specification":"Standard 61 Vintage Cherry","brand":"Epiphone","model":"SG Standard 61","description":null,"price":{"value":594400,"shipping":null,"cashback":null},"source":{"site":"Groover","imageUrl":"https://www.groover.com.br/lojas/00016379/prod/epi-sg-standard61-ch-1g.jpg","pageUrl":"https://www.groover.com.br/guitarra-sg-epiphone-standard-61-vintage-cherry-94472903"}},{"title":"Serra M\xe1rmore","specification":"1450W com 3 Discos - MAKITA-4100NH2ZL","brand":"Makita","model":"4100NH2Z-L220","description":null,"price":{"value":39990,"shipping":null,"cashback":null},"source":{"site":"Loja do Mec\xe2nico","imageUrl":"https://img.lojadomecanico.com.br/IMAGENS/21/224/106627/Serra-Marmore-1450W-220V-com-3-Discos--makita-4100nh2zl1.JPG","pageUrl":"https://www.lojadomecanico.com.br/produto/106627/21/224/serra-marmore-1450w-220v-com-3-discos--makita-4100nh2zl"}}]')},87:function(e,t,n){e.exports={"Products-H1":"Products_Products-H1__1EryA"}},88:function(e,t,n){e.exports={Home:"Home_Home__10E3z"}},91:function(e,t,n){e.exports={Header:"Header_Header__36XCU","Box-Form-Wrapper":"Header_Box-Form-Wrapper__3_VdG",TextField:"Header_TextField__mMun5"}},92:function(e,t,n){e.exports={Button:"Button_Button__SLH42"}}},[[128,1,2]]]);
//# sourceMappingURL=main.c0b718f5.chunk.js.map