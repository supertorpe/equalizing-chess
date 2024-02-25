var G=Object.defineProperty;var K=(o,t,e)=>t in o?G(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var l=(o,t,e)=>(K(o,typeof t!="symbol"?t+"":t,e),e);import{S as Q,D as O,i as Y,I as X,a as Z,b as ee,c as te,d as se,e as ie,f as oe,g as ne,h as ae,j as re,k as ce,l as he,m as le,n as ue,o as de,p as me,q as ge,r as fe,s as pe,t as ve,u as be,v as ye,w as ke,x as _e,y as we,z as Se,A as Ee,B as Te,C as Ce,E as Pe,F as Me,G as Ie,H as Ae,J as qe,_ as g,K as R,L as Ve,N as ze,M as Le,O as b,P as Be,Q as Oe,R as Re,T as De,U as D,V as je}from"./vendor-D-c0f6XP.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();const xe="main-menu",Fe=[{name:"dark",class:"dark",mainColor:"#000000"},{name:"light",class:"",mainColor:"#ffffff"}],W=["alpha","california","cburnett","chess7","chessnut","chicago","companion","fantasy","iowa","kosal","leipzig","letter","merida","mono","oslo","pirouetti","pixel","reilly","riohacha","shapes","spatial","symmetric"],A=[{name:"brown",styles:[{themeVariable:"--chess-white-background",value:"#F3E1C2"},{themeVariable:"--chess-white-color",value:"#C39976"},{themeVariable:"--chess-black-background",value:"#C39976"},{themeVariable:"--chess-black-color",value:"#F3E1C2"}]},{name:"blue",styles:[{themeVariable:"--chess-white-background",value:"#E4E9EB"},{themeVariable:"--chess-white-color",value:"#9DB1BB"},{themeVariable:"--chess-black-background",value:"#9DB1BB"},{themeVariable:"--chess-black-color",value:"#E4E9EB"}]},{name:"green",styles:[{themeVariable:"--chess-white-background",value:"#FFFEE4"},{themeVariable:"--chess-white-color",value:"#97B378"},{themeVariable:"--chess-black-background",value:"#97B378"},{themeVariable:"--chess-black-color",value:"#FFFEE4"}]},{name:"grey",styles:[{themeVariable:"--chess-white-background",value:"#AAAAAA"},{themeVariable:"--chess-white-color",value:"#888888"},{themeVariable:"--chess-black-background",value:"#888888"},{themeVariable:"--chess-black-color",value:"#AAAAAA"}]},{name:"pink",styles:[{themeVariable:"--chess-white-background",value:"#FFF2F2"},{themeVariable:"--chess-white-color",value:"#BC4545"},{themeVariable:"--chess-black-background",value:"#BC4545"},{themeVariable:"--chess-black-color",value:"#FFF2F2"}]},{name:"navy",styles:[{themeVariable:"--chess-white-background",value:"#ECECEC"},{themeVariable:"--chess-white-color",value:"#385170"},{themeVariable:"--chess-black-background",value:"#385170"},{themeVariable:"--chess-black-color",value:"#ECECEC"}]},{name:"dark-green",styles:[{themeVariable:"--chess-white-background",value:"#E0EFBA"},{themeVariable:"--chess-white-color",value:"#467A4B"},{themeVariable:"--chess-black-background",value:"#467A4B"},{themeVariable:"--chess-black-color",value:"#E0EFBA"}]},{name:"black-white",styles:[{themeVariable:"--chess-white-background",value:"#F2F2F2"},{themeVariable:"--chess-white-color",value:"#0C0C0C"},{themeVariable:"--chess-black-background",value:"#0C0C0C"},{themeVariable:"--chess-black-color",value:"#F2F2F2"}]}];class N{constructor(){l(this,"_listeners",[])}addEventListener(t){this._listeners.includes(t)||this._listeners.push(t)}removeEventListener(t){const e=this._listeners.indexOf(t);e!==-1&&this._listeners.splice(e,1)}removeListeners(){this._listeners=[]}notify(t){this._listeners.forEach(e=>{e(t)})}}const P=(o,t)=>`assets/pieces/${t}/${o}`,We=o=>o.endsWith("3.svg")?"three":o.endsWith("4.svg")?"four":o.endsWith("5.svg")?"five":o.endsWith("elementary.svg")?"elementary":o.endsWith("swords.svg")?"against":o.endsWith("B.svg")?"bishop":o.endsWith("K.svg")?"king":o.endsWith("N.svg")?"knight":o.endsWith("P.svg")?"pawn":o.endsWith("Q.svg")?"queen":o.endsWith("R.svg")?"rook":"unknown",Ne=o=>{window.document.title=o},$e=(o,t)=>{window.document.getElementsByName(o)[0].content=t},j=(o,t)=>{const e=o.replace(".html","");Ne(window.AlpineI18n.t(`${e}.seo.title`,t)),$e("description",window.AlpineI18n.t(`${e}.seo.meta_description`,t))};class ${constructor(t,e,s,i,n,a,h,f,m){l(this,"_configurationChangedEmitter",new N);this._stockfishDepth=t,this._stockfishMultiPV=e,this._preventScreenOff=s,this._colorTheme=i,this._playSounds=n,this._fullScreen=a,this._highlightSquares=h,this._pieceTheme=f,this._boardTheme=m}serialize(){return{stockfishDepth:this._stockfishDepth,stockfishMultiPV:this._stockfishMultiPV,preventScreenOff:this._preventScreenOff,colorTheme:this._colorTheme,playSounds:this._playSounds,fullScreen:this._fullScreen,highlightSquares:this._highlightSquares,pieceTheme:this._pieceTheme,boardTheme:this._boardTheme}}get configuration(){return this}get configurationChangedEmitter(){return this._configurationChangedEmitter}get stockfishDepth(){return this._stockfishDepth}set stockfishDepth(t){this._stockfishDepth!=t&&(this._stockfishDepth=t,this._configurationChangedEmitter.notify({config:this,field:"stockfishDepth"}))}get stockfishMultiPV(){return this._stockfishMultiPV}set stockfishMultiPV(t){this._stockfishMultiPV!=t&&(this._stockfishMultiPV=t,this._configurationChangedEmitter.notify({config:this,field:"stockfishMultiPV"}))}get preventScreenOff(){return this._preventScreenOff}set preventScreenOff(t){this._preventScreenOff!=t&&(this._preventScreenOff=t,this._configurationChangedEmitter.notify({config:this,field:"preventScreenOff"}))}get colorTheme(){return this._colorTheme}set colorTheme(t){this._colorTheme!=t&&(this._colorTheme=t,this._configurationChangedEmitter.notify({config:this,field:"colorTheme"}))}get playSounds(){return this._playSounds}set playSounds(t){this._playSounds!=t&&(this._playSounds=t,this._configurationChangedEmitter.notify({config:this,field:"playSounds"}))}get fullScreen(){return this._fullScreen}set fullScreen(t){this._fullScreen!=t&&(this._fullScreen=t,this._configurationChangedEmitter.notify({config:this,field:"fullScreen"}))}get highlightSquares(){return this._highlightSquares}set highlightSquares(t){this._highlightSquares!=t&&(this._highlightSquares=t,this._configurationChangedEmitter.notify({config:this,field:"highlightSquares"}))}get pieceTheme(){return this._pieceTheme}set pieceTheme(t){this._pieceTheme!=t&&(this._pieceTheme=t,this._configurationChangedEmitter.notify({config:this,field:"pieceTheme"}))}get boardTheme(){return this._boardTheme}set boardTheme(t){this._boardTheme!=t&&(this._boardTheme=t,this._configurationChangedEmitter.notify({config:this,field:"boardTheme"}))}}const p=new $(15,10,!0,"dark",!0,!0,!0,W[0],A[0].name);class He{constructor(){l(this,"store",new Q({name:"CET_STORAGE",driverOrder:[O.IndexedDB,O.LocalStorage]}))}async init(){return this.store.create()}get(t){return this.store.get(t)}set(t,e){return this.store.set(t,e)}remove(t){return this.store.remove(t)}}const z=new He;class Je{constructor(){l(this,"_configuration")}get configuration(){return this._configuration}init(){return new Promise(t=>{z.get("CONFIGURATION").then(e=>{e?(e.stockfishDepth===void 0&&(e.stockfishDepth=p.stockfishDepth),e.stockfishMultiPV===void 0&&(e.stockfishMultiPV=p.stockfishMultiPV),e.preventScreenOff===void 0&&(e.preventScreenOff=p.preventScreenOff),e.colorTheme===void 0&&(e.colorTheme=p.colorTheme),e.playSounds===void 0&&(e.playSounds=p.playSounds),e.fullScreen===void 0&&(e.fullScreen=p.fullScreen),e.highlightSquares===void 0&&(e.highlightSquares=p.highlightSquares),e.pieceTheme===void 0&&(e.pieceTheme=p.pieceTheme),e.boardTheme===void 0&&(e.boardTheme=p.boardTheme),this._configuration=new $(e.stockfishDepth,e.stockfishMultiPV,e.preventScreenOff,e.colorTheme,e.playSounds,e.fullScreen,e.highlightSquares,e.pieceTheme,e.boardTheme),t(this._configuration)):(this._configuration=p,this.save().then(s=>{t(s)}))})})}save(){return z.set("CONFIGURATION",this._configuration.serialize())}}const c=new Je;document.documentElement.classList.add("ion-ce");function r(o,t){try{customElements.define(t,o)}catch{}}Y();r(X,"ion-app");r(Z,"ion-button");r(ee,"ion-buttons");r(te,"ion-card-content");r(se,"ion-card-header");r(ie,"ion-card");r(oe,"ion-card-title");r(ne,"ion-col");r(ae,"ion-content");r(re,"ion-fab-button");r(ce,"ion-fab");r(he,"ion-fab-list");r(le,"ion-footer");r(ue,"ion-grid");r(de,"ion-header");r(me,"ion-icon");r(ge,"ion-item");r(fe,"ion-label");r(pe,"ion-menu-button");r(ve,"ion-menu");r(be,"ion-menu-toggle");r(ye,"ion-modal");r(ke,"ion-range");r(_e,"ion-ripple-effect");r(we,"ion-router-link");r(Se,"ion-router-outlet");r(Ee,"ion-row");r(Te,"ion-segment-button");r(Ce,"ion-segment");r(Pe,"ion-split-pane");r(Me,"ion-title");r(Ie,"ion-toast");r(Ae,"ion-toggle");r(qe,"ion-toolbar");const Ue=Object.assign({"/node_modules/@ionic/core/dist/ionic/svg/arrow-back.svg":()=>g(()=>import("./arrow-back-D-orv5c1.js"),__vite__mapDeps([])).then(o=>o.default),"/node_modules/@ionic/core/dist/ionic/svg/arrow-forward.svg":()=>g(()=>import("./arrow-forward-Bnj_Gn2j.js"),__vite__mapDeps([])).then(o=>o.default),"/node_modules/@ionic/core/dist/ionic/svg/arrow-undo.svg":()=>g(()=>import("./arrow-undo-C-1zIByy.js"),__vite__mapDeps([])).then(o=>o.default),"/node_modules/@ionic/core/dist/ionic/svg/bulb.svg":()=>g(()=>import("./bulb-BQBTeG-f.js"),__vite__mapDeps([])).then(o=>o.default),"/node_modules/@ionic/core/dist/ionic/svg/caret-down.svg":()=>g(()=>import("./caret-down-CgdCcEJE.js"),__vite__mapDeps([])).then(o=>o.default),"/node_modules/@ionic/core/dist/ionic/svg/caret-forward.svg":()=>g(()=>import("./caret-forward-D90KpvAo.js"),__vite__mapDeps([])).then(o=>o.default),"/node_modules/@ionic/core/dist/ionic/svg/caret-up.svg":()=>g(()=>import("./caret-up-D9Gp9sHm.js"),__vite__mapDeps([])).then(o=>o.default),"/node_modules/@ionic/core/dist/ionic/svg/close.svg":()=>g(()=>import("./close-Da1lKQrP.js"),__vite__mapDeps([])).then(o=>o.default),"/node_modules/@ionic/core/dist/ionic/svg/color-wand.svg":()=>g(()=>import("./color-wand-BHrDbzBV.js"),__vite__mapDeps([])).then(o=>o.default),"/node_modules/@ionic/core/dist/ionic/svg/flag.svg":()=>g(()=>import("./flag-DD7xd5JK.js"),__vite__mapDeps([])).then(o=>o.default),"/node_modules/@ionic/core/dist/ionic/svg/home-sharp.svg":()=>g(()=>import("./home-sharp-MT0ovGxc.js"),__vite__mapDeps([])).then(o=>o.default),"/node_modules/@ionic/core/dist/ionic/svg/information-circle.svg":()=>g(()=>import("./information-circle-BFRZsY_T.js"),__vite__mapDeps([])).then(o=>o.default),"/node_modules/@ionic/core/dist/ionic/svg/power.svg":()=>g(()=>import("./power-6A_yMQ7H.js"),__vite__mapDeps([])).then(o=>o.default),"/node_modules/@ionic/core/dist/ionic/svg/save.svg":()=>g(()=>import("./save-6TErxtDE.js"),__vite__mapDeps([])).then(o=>o.default),"/node_modules/@ionic/core/dist/ionic/svg/settings-sharp.svg":()=>g(()=>import("./settings-sharp-b5VK1TDx.js"),__vite__mapDeps([])).then(o=>o.default),"/node_modules/@ionic/core/dist/ionic/svg/swap-vertical.svg":()=>g(()=>import("./swap-vertical-CwZ8QMVW.js"),__vite__mapDeps([])).then(o=>o.default)}),I=()=>{document.querySelectorAll("ion-icon").forEach(o=>{const t=o.getAttribute("data-name");t!=null&&Ue[`/node_modules/@ionic/core/dist/ionic/svg/${t}.svg`]().then(e=>{o.src=e})})};class Ge{constructor(){l(this,"navigo");l(this,"menuRegistered",!1);l(this,"templates",new Map);l(this,"currentController");l(this,"closeMenu",t=>{if(!this.menuRegistered){const e="ion-menu[menu-id='"+t+"']",s=document.querySelector(e);if(!s)return;R._register(s),this.menuRegistered=!0}R.close(t)});l(this,"openRoute",(t,e,s,i,n)=>(this.currentController&&this.currentController.onExit(),this.currentController=i,this.closeMenu(xe),new Promise(a=>{const h=document.querySelector(s);if(h){const f=new MutationObserver(u=>{u.forEach(d=>{i&&(f.disconnect(),I(),t.updatePageLinks(),i.run(n),a())})});f.observe(h,{childList:!0}),i.preload(n);const m=this.templates.get(e);m?(h.innerHTML=m,j(e,i.getSEOParams())):fetch(e).then(u=>u.text().then(d=>{this.templates.set(e,d),h.innerHTML=d,j(e,i.getSEOParams()),I()}))}})))}open(t){return t.hasParams?e=>this.openRoute(this.navigo,t.template,t.tag,t.controller,e):()=>this.openRoute(this.navigo,t.template,t.tag,t.controller)}openModal(t,e,s,i,n,a){const h=document.createElement("div");h.setAttribute("x-data",t);const f=this.templates.get(e);return f?(h.innerHTML=f,this.innerOpenModal(h,s,i,n,a)):fetch(e).then(m=>m.text().then(async u=>(this.templates.set(e,u),h.innerHTML=u,this.innerOpenModal(h,s,i,n,a))))}async innerOpenModal(t,e,s,i,n){const a=await Ve.create({component:t});i&&a.style.setProperty("--height","auto"),n&&e.setInfo(n),e.preload(n),a.present().then(()=>{I()}),e.run(),s||requestAnimationFrame(()=>{s||t.classList.remove("ion-page")});const{data:h}=await a.onDidDismiss();return h}updatePageLinks(){this.navigo.updatePageLinks()}init(t){this.navigo=new ze(t.mainRoute.path,{hash:t.hash});const e=this.open(t.mainRoute);t.routes.forEach(s=>{const i=this.open(s);s.hasParams?this.navigo.on(s.path,n=>{document.querySelector(s.tag)?i(n.data):e().then(()=>i(n.data))}):this.navigo.on(s.path,()=>{document.querySelector(s.tag)?i():e().then(()=>i())})}),this.navigo.resolve()}}const B=new Ge;class Ke{getThemes(){return Fe}setTheme(t){var e,s;t=="dark"?(e=document.querySelector("body"))==null||e.classList.add("dark"):(s=document.querySelector("body"))==null||s.classList.remove("dark")}currentTheme(){var t;return(t=document.querySelector("body"))!=null&&t.classList.contains("dark")?"dark":"light"}init(){this.setTheme(c.configuration.colorTheme)}}const E=new Ke;class Qe{getThemes(){return A}setTheme(t){const e=A.find(s=>s.name==t);e&&e.styles.forEach(s=>{document.documentElement.style.setProperty(s.themeVariable,s.value)})}currentTheme(){return c.configuration.boardTheme}init(){this.setTheme(this.currentTheme())}}const H=new Qe;class Ye{constructor(){l(this,"stockfish");l(this,"_version");l(this,"_messageEmitter",new N)}get version(){return this._version}get messageEmitter(){return this._messageEmitter}postMessage(t){this.stockfish.postMessage(t)}initStockfish(t,e){const s=this;this.stockfish=new Worker(t),this.stockfish.addEventListener("message",function(i){s._messageEmitter.notify(i.data)}),this.stockfish.postMessage("uci"),e&&this.stockfish.postMessage("setoption name Use NNUE value true")}async initStockfishNnue16(){this.initStockfish("assets/stockfish/stockfish-nnue-16.js#stockfish-nnue-16.wasm",!0)}initStockfishNnue16NoSimd(){this.initStockfish("assets/stockfish/stockfish-nnue-16-no-simd.js#stockfish-nnue-16-no-simd.wasm",!0)}initStockfishNnue16Single(){this.initStockfish("assets/stockfish/stockfish-nnue-16-single.js#stockfish-nnue-16-single.wasm",!0)}initStockfishJs(){this.initStockfish("assets/stockfish/stockfish.asm.js",!1)}sharedMemoryTest(){if(typeof Atomics!="object"||typeof SharedArrayBuffer!="function")return!1;let t;try{if(t=new WebAssembly.Memory({shared:!0,initial:1,maximum:2}),!(t.buffer instanceof SharedArrayBuffer))return!1;window.postMessage(t.buffer,"*")}catch{return!1}return t.buffer instanceof SharedArrayBuffer}detectFeatures(){const t=[];if(typeof WebAssembly=="object"&&typeof WebAssembly.validate=="function"&&WebAssembly.validate(Uint8Array.from([0,97,115,109,1,0,0,0]))&&(t.push("wasm"),this.sharedMemoryTest())){t.push("sharedMem");const e=Uint8Array.from([0,97,115,109,1,0,0,0,1,12,2,96,2,123,123,1,123,96,1,123,1,123,3,3,2,0,1,7,9,2,1,97,0,0,1,98,0,1,10,19,2,9,0,32,0,32,1,253,186,1,11,7,0,32,0,253,253,1,11]);WebAssembly.validate(e)&&t.push("simd")}return t}init(){return new Promise(t=>{const e=i=>{this._version||(this._version=i),console.log(i),i=="uciok"&&t(!0)};this._messageEmitter.addEventListener(e);const s=this.detectFeatures();s.includes("simd")?this.initStockfishNnue16():s.includes("sharedMem")?this.initStockfishNnue16NoSimd():s.includes("wasm")?this.initStockfishNnue16Single():this.initStockfishJs()})}}const _=new Ye,Xe={app:{seo:{title:"Equalizing Chess",meta_description:"Equalizing Chess"},menu:"Menu",home:"Home",settings:"Settings",about:"About",exit:"Exit","back-to-exit":"Press back again to exit"},home:{seo:{title:"Equalizing Chess",meta_description:"Explore the unpredictable realm of Equalizing Chess, a web app that challenges the traditional norms of chess by providing a dynamic and adaptable playing experience. Embrace the unpredictability as the AI strives to match the skill level of human players, creating an engaging and level playing field for enthusiasts of all backgrounds. Whether you're a seasoned grandmaster or a casual player, Equalizing Chess ensures a unique and balanced chess encounter, where the pursuit of equality takes center stage. Immerse yourself in a chess adventure that mirrors the twists and turns of human intuition, making every move an exciting and strategic endeavor. Unleash the potential for thrilling matches with Equalizing Chess, where the pursuit of equality knows no bounds."},title:"Equalizing Chess","get-started":"Get Started",presentation:"Presentation",description:"Equalizing Chess is a chess game where the engine tries to play as well or as badly as the user. To do this, he tries to balance the position in each movement.","start-game":"New game: choose pieces"},position:{seo:{title:"Equalizing Chess",meta_description:"Equalizing Chess"},white:"white",black:"black",to:"to",checkmate:"checkmate",draw:"draw",moves:"moves","your-turn":"Your turn",congratulations:"Congratulations",review:"review","fen-clipboard":"FEN copied to clipboard",in:"in",ups:"Oooops!",ok:"OK"},chessboard:{stalemate:"Stalemate","three-repetition":"Three Repetition","rule-fifty":"Draw: fifty-move rule","game-over":"Game Over","mate-in":"You can reach mate in","white-advantage":"White advantage","black-advantage":"Black advantage","stockfish-slow":"Stockfish is working slow. Consider lowering the search depth in configuration screen."},settings:{seo:{title:"Settings - Equalizing Chess",meta_description:"Settings of 'Equalizing Chess'"},title:"Settings","theme-dark":"Dark","theme-light":"Light","clean-database":"Reset records","records-removed":"Records removed","color-theme":"Color theme","piece-theme":"Pieces style","board-theme":"Board theme","save-changes":"Save changes","changes-saved":"Changes saved","goto-position":"Show puzzle at the beginning","play-sounds":"Sound","highlight-squares":"Highlight squares","prevent-screen-off":"Keep screen on","full-screen":"Full screen mode","use-syzygy":"Use Syzygy tables","stockfish-depth":"Stockfish depth","stockfish-multipv":"Stockfish MultiPV","clean-dialog":{title:"Are you sure?",subtitle:"Reset records",message:"All your records will be lost !!!",cancel:"Cancel",continue:"Continue"}},about:{seo:{title:"Information - Equalizing Chess",meta_description:"Version information and 3dparty resources used in Equalizing Chess"},title:"About",description:"Equalizing Chess (v{version}) is a free and open source project.","source-code":"See project's source code","third-party":"Following software and resources has been used:","chessjs-description":"chess.js: a Javascript chess library for chess move generation/validation, piece placement/movement, and check/checkmate/draw detection","chessground-description":"chessground: a Javascript chess board","stockfish-js-description":"Stockfish.js: WASM implementation of Stockfish chess engine by Nathan Rugg (nmrugg)<br/>{stockfishRunningVersion}",typescript:"TypeScript: JavaScript with syntax for types",ionic:"Ionic Framework: the mobile sdk for the web","alpine-js":"Alpine.js: lightweight JavaScript framework","alpinejs-i18n":"Alpine i18n: Internationalization (i18n) support for Alpine.js",navigo:"Navigo: a simple vanilla JavaScript router",howlerjs:"Javascript audio library for the modern web",vite:"Vite: fast build tool",logo:"Logo: designed by Inipagi from Iconfinder",pacifier:"Pacifier: designed by Smashicons from Flaticon",pieces:"Chess pieces: from their respective authors (see details...)",font:"Russo One: text font by Jovanny Lemonad","move-sound":"Move sound: from lichess static resources","capture-sound":"Capture sound: from lichess static resources","success-sound":"Success sound: shinephoenixstormcrow from freesound.org","fail-sound":"Fail sound: Bertrof from freesound.org"}},Ze={app:{seo:{title:"Equalizing Chess",meta_description:"Equalizing Chess..."},menu:"Menú",home:"Inicio",settings:"Configuración",about:"Acerca de",exit:"Salir","back-to-exit":"Pulse 'atrás' de nuevo para salir"},home:{seo:{title:"Equalizing Chess",meta_description:"Equalizing Chess..."},title:"Equalizing Chess","get-started":"Inicio",presentation:"Presentación",description:"Equalizing Chess es un juego de ajedrez donde el motor intenta jugar tan bien o mal como el usuario. Para ello, él intenta balancear la posición en cada movimiento.","start-game":"Nueva partida: elige piezas"},list:{seo:{title:"Equalizing Chess",meta_description:"Posiciones para practicar finales de ajedrez: {kind}"}},category:{Basic:"Básicos",Pawn:"Peones",Bishop:"Alfiles",Knight:"Caballos","Knight-Bishop":"Caballos y Alfiles","Rook-Pawn":"Torres y Peones","Rook-Pieces":"Torres y Piezas",Queen:"Dama"},position:{seo:{title:"Posición con {kind} - Equalizing Chess",meta_description:"Posición para practicar el fin de juego de ajedrez: {kind}"},white:"blancas",black:"negras",to:"buscan",checkmate:"mate",draw:"tablas","personal-record":"Record personal",moves:"movimientos","your-turn":"Tu turno","used-assistance":"Ha usado ayuda, no se registra record","new-record":"¡Nuevo record personal!","goal-achieved":"Objetivo alcanzado",congratulations:"Enhorabuena",review:"revisar","next-puzzle":"siguiente puzzle","fen-clipboard":"FEN copiado al portapapeles",in:"en",ups:"¡Ohhh!","keep-practicing":"sigue practicando, ¡lo conseguirás!",ok:"Aceptar"},chessboard:{stalemate:"Ahogado","insufficent-material":"Material insuficiente","three-repetition":"Triple repetición","rule-fifty":"Tablas: regla 50 movimientos","game-over":"Fin del juego","mate-in":"Puedes conseguir mate en","receive-mate-in":"Vas a recibir mate","unfeasible-mate":"Mate inviable","white-advantage":"Ventaja blancas","black-advantage":"Ventaja negras","querying-syzygy":"Consultando Syzygy...","syzygy-error":"Error en Syzygy. Cambiando a Stockfish","stockfish-slow":"Stockfish está tardando mucho. Puede bajar la profundidad de búsqueda en la pantalla de configuración."},settings:{seo:{title:"Configuración - Equalizing Chess",meta_description:"Configuración de 'Equalizing Chess'"},title:"Configuración","theme-dark":"Oscuro","theme-light":"Claro","clean-database":"Eliminar records","records-removed":"Records eliminados","color-theme":"Apariencia","piece-theme":"Estilo de piezas","board-theme":"Colores del tablero","save-changes":"Guardar cambios","changes-saved":"Cambios guardados","goto-position":"Mostrar puzzle al iniciar","play-sounds":"Sonido","highlight-squares":"Iluminar casillas","prevent-screen-off":"Mantener pantalla encendida","full-screen":"Ocupar toda la pantalla","use-syzygy":"Usar tablas Syzygy","stockfish-depth":"Stockfish depth","stockfish-multipv":"Stockfish MultiPV","clean-dialog":{title:"¿Está seguro?",subtitle:"Eliminar records",message:"¡Se perderán todos tus records!",cancel:"Cancelar",continue:"Continuar"}},about:{seo:{title:"Información - Equalizing Chess",meta_description:"Información de la versión y recursos de terceros utilizados en 'Equalizing Chess'"},title:"Acerca de",description:"Equalizing Chess (v{version}) es un proyecto open source","source-code":"Ver código fuente del proyecto","third-party":"Para su desarrollo se ha utilizado el siguiente software y recursos de terceros:","chessjs-description":"chess.js: librería Javascript para la generación / validación / posicionamiento de movimientos de piezas, y detección de jaque, mate y tablas","chessground-description":"chessground: un tablero de ajedrez en Javascript","stockfish-js-description":"Stockfish.js: implementación WASM del motor de ajedrez Stockfish por Nathan Rugg (nmrugg)<br/>{stockfishRunningVersion}",ionic:"Ionic Framework: el SDK móvil para la web",typescript:"TypeScript: JavaScript con sintaxis para tipos","alpine-js":"Alpine.js: framework javascript ligero","alpinejs-i18n":"Alpine i18n: plugin de internacionalización para Alpine.js",navigo:"Navigo: un enrutador JavaScript básico",howlerjs:"Librería Javascript de audio para la web moderna",vite:"Vite: herramienta de construcción rápida",logo:"Logo: diseñado por Inipagi en Iconfinder",pacifier:"Chupete: diseñado por Smashicons en Flaticon",pieces:"Piezas de ajedrez: de sus respectivos autores (ver detalles...)",font:"Russo One: fuente de texto de Jovanny Lemonad","move-sound":"Audio de movimiento: recursos estáticos de Lichess","capture-sound":"Audio de captura: recursos estáticos de Lichess","success-sound":"Audio de éxito: shinephoenixstormcrow en freesound.org","fail-sound":"Audio de fallo: Bertrof from freesound.org"}},M={en:Xe,es:Ze},et=[{url:"https://github.com/jhlywa/chess.js",i18n:"about.chessjs-description"},{url:"https://github.com/lichess-org/chessground",i18n:"about.chessground-description"},{url:"https://github.com/nmrugg/stockfish.js",i18n:"about.stockfish-js-description"},{url:"https://www.typescriptlang.org",i18n:"about.typescript"},{url:"https://ionicframework.com",i18n:"about.ionic"},{url:"https://alpinejs.dev",i18n:"about.alpine-js"},{url:"https://github.com/rehhouari/alpinejs-i18n",i18n:"about.alpinejs-i18n"},{url:"https://github.com/krasimir/navigo",i18n:"about.navigo"},{url:"https://github.com/goldfire/howler.js",i18n:"about.howlerjs"},{url:"https://vitejs.dev",i18n:"about.vite"},{url:"https://www.iconfinder.com/icons/1688870/business_chess_strategy_icon",i18n:"about.logo"},{url:"https://github.com/supertorpe/equalizing-chess",i18n:"about.pieces"},{url:"https://fonts.google.com/specimen/Russo+One",i18n:"about.font"},{url:"https://github.com/lichess-org/lila/blob/master/public/sound/standard/Move.mp3",i18n:"about.move-sound"},{url:"https://github.com/lichess-org/lila/blob/master/public/sound/standard/Capture.mp3",i18n:"about.capture-sound"},{url:"https://freesound.org/people/shinephoenixstormcrow/sounds/337049/",i18n:"about.success-sound"},{url:"https://freesound.org/people/Bertrof/sounds/131657/",i18n:"about.fail-sound"}],tt={items:et},st=[{key:"move",audio:"assets/audio/move.mp3"},{key:"capture",audio:"assets/audio/capture.mp3"},{key:"success",audio:"assets/audio/success.mp3"},{key:"fail",audio:"assets/audio/fail.mp3"}],it={sounds:st};class ot{constructor(){l(this,"sounds",[])}playAudio(t){if(c.configuration.playSounds){const e=this.sounds.find(s=>s.key===t);e&&(t!=="fail"||!e.audio.playing())&&e.audio.play()}}init(){it.sounds.forEach(t=>this.sounds.push({key:t.key,audio:new Le.Howl({src:[t.audio]})}))}}const L=new ot;class nt{hideLoader(){const t=document.querySelector(".loader-container");t&&t.remove()}i18n(){document.addEventListener("alpine-i18n:ready",()=>{const t=navigator.language;let e="",s=!1;Object.keys(M).forEach(i=>{window.AlpineI18n.fallbackLocale||(window.AlpineI18n.fallbackLocale=i),s||(i==t?(window.AlpineI18n.create(i,M),s=!0,document.documentElement.lang=i):!e&&t.startsWith(i)&&(e=i))}),s||(e?(window.AlpineI18n.create(e,M),document.documentElement.lang=e):(window.AlpineI18n.create(window.AlpineI18n.fallbackLocale,M),document.documentElement.lang=window.AlpineI18n.fallbackLocale))})}init(){this.i18n(),b.plugin(Be),b.start(),this.hideLoader()}}const at=new nt;function rt(){return z.init().then(()=>c.init()).then(()=>_.init()).then(()=>L.init()).then(()=>E.init()).then(()=>H.init()).then(()=>at.init())}class w{setInfo(t){}preload(t){}run(t){}onExit(){}getSEOParams(){return{}}}const ct="1.0.0-alpha.1";class ht extends w{preload(t){b.data("info",()=>({version:ct,items:tt.items.map(e=>({url:e.url,text:window.AlpineI18n.t(e.i18n,{stockfishRunningVersion:_.version})}))}))}}const lt=new ht;class ut extends w{preload(t){b.data("settings",()=>({color:E.currentTheme()=="dark"?"w":"b",showThemes:!1,themes:E.getThemes(),currentTheme(){return c.configuration.colorTheme},toggleThemes(){this.showThemes=!this.showThemes,this.showPieceThemes=!1,this.showBoardThemes=!1},setTheme(e){E.setTheme(e),c.configuration.colorTheme=e,this.color=E.currentTheme()=="dark"?"w":"b"},showPieceThemes:!1,pieceThemes:W,currentPieceTheme:c.configuration.pieceTheme,togglePieceThemes(){this.showPieceThemes=!this.showPieceThemes,this.showThemes=!1,this.showBoardThemes=!1},setPieceTheme(e){this.currentPieceTheme=e,c.configuration.pieceTheme=e},showBoardThemes:!1,boardThemes:A,currentBoardTheme:c.configuration.boardTheme,toggleBoardThemes(){this.showBoardThemes=!this.showBoardThemes,this.showThemes=!1,this.showPieceThemes=!1},setBoardTheme(e){this.currentBoardTheme=e,c.configuration.boardTheme=e,H.setTheme(e)},playSounds:c.configuration.playSounds,playSoundsChanged(e){this.playSounds=e,c.configuration.playSounds=e},highlightSquares:c.configuration.highlightSquares,highlightSquaresChanged(e){this.highlightSquares=e,c.configuration.highlightSquares=e},currentStockfishDepth:c.configuration.stockfishDepth,changeStockfishDepth(e){this.currentStockfishDepth=e,c.configuration.stockfishDepth=e},currentStockfishMultiPV:c.configuration.stockfishMultiPV,changeStockfishMultiPV(e){this.currentStockfishMultiPV=e,c.configuration.stockfishMultiPV=e},save(){c.save().then(async()=>{(await Oe.create({message:window.AlpineI18n.t("settings.changes-saved"),position:"middle",color:"success",duration:1e3})).present(),this.close()})},close(){document.querySelector("ion-modal").dismiss()},init(){const e=document.getElementById("toggleHighlightSquares");e.addEventListener("ionChange",()=>{this.highlightSquaresChanged(e.checked)});const s=document.getElementById("togglePlaySounds");s.addEventListener("ionChange",()=>{this.playSoundsChanged(s.checked)});const i=document.getElementById("stockfishDepthRange");i.value=c.configuration.stockfishDepth,i.addEventListener("ionChange",()=>{typeof i.value=="number"&&this.changeStockfishDepth(i.value)});const n=document.getElementById("stockfishMultiPVRange");n.value=c.configuration.stockfishMultiPV,n.addEventListener("ionChange",()=>{typeof n.value=="number"&&this.changeStockfishMultiPV(n.value)}),["showThemes","showPieceThemes","showBoardThemes"].forEach(a=>{this.$watch(a,h=>{I()})}),document.getElementById("stockfishDepthRange").pinFormatter=a=>a,document.getElementById("stockfishMultiPVRange").pinFormatter=a=>a}}))}}const J=new ut;class dt extends w{preload(t){b.data("info",()=>({showSettings(){B.openModal("settings","settings.html",J,!0,!1)},init(){}}))}}const mt=new dt;class gt extends w{preload(t){const e=c.configuration.pieceTheme;b.data("info",()=>({iconWhite:P("wP.svg",e),iconBlack:P("bP.svg",e),init(){c.configuration.configurationChangedEmitter.addEventListener(s=>{s.field=="pieceTheme"&&(this.iconWhite=P("wP.svg",s.config.pieceTheme),this.iconBlack=P("bP.svg",s.config.pieceTheme))})}}))}}const x=new gt;class ft extends w{constructor(){super(...arguments);l(this,"player")}setInfo(e){this.player=e}preload(e){b.data("promotion",()=>({player:this.player,currentPieceTheme:c.configuration.pieceTheme,select(s){document.querySelector("ion-modal").dismiss({piece:s})}}))}}const U=new ft;class pt extends w{constructor(){super();l(this,"seo");l(this,"chess",Re());l(this,"board");l(this,"boardConfig");l(this,"parsedPgn");l(this,"player");l(this,"engine");l(this,"listeningToStockfish",!1);l(this,"stockfishMessageBuffer",[]);_.messageEmitter.addEventListener(e=>this.stockfishMessage(e))}resizeBoard(){const s=Array.from(document.querySelectorAll("ion-header")).find(C=>C.clientHeight>0);if(!s)return;const i=document.querySelector(".container"),n=document.querySelector(".board_wrapper"),a=document.querySelector(".gauge"),h=document.querySelector(".info_wrapper"),f=document.querySelector(".action_buttons"),m=i.clientWidth,u=i.clientHeight-s.clientHeight;let d=Math.min(m,u);n.style.height=`${d}px`,n.style.width=`${d}px`,m>u?(h.style.width=`${m-d-2}px`,h.style.height="100%"):(h.style.width="100%",h.style.height=`${u-d-2}px`),f.style.width=h.style.width;const T=document.getElementById("__chessboard__"),q=n.clientWidth%8;let v=n.clientWidth-q;n.clientWidth-v<4&&(v=v-8),T.style.height=`${v}px`,T.style.width=`${v}px`,a.style.height=`${v}px`,a.style.width=`${n.clientWidth-v}px`}parsePgn(e){if(this.parsedPgn=[],e=="")return;const s=e.split(".");let i=0;s.forEach(n=>{if(i>0){let a=n.trim().split(" ",2);this.parsedPgn.push(a)}i++})}toDests(){const e=new Map;return De.forEach(s=>{const i=this.chess.moves({square:s,verbose:!0});i.length&&e.set(s,i.map(n=>n.to))}),e}preload(e){const s=this,i=e.fen1!==void 0;let n;i?n=`${e.fen1}/${e.fen2}/${e.fen3}/${e.fen4}/${e.fen5}/${e.fen6}/${e.fen7}/${e.fen8}`:n="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",this.seo=n,this.chess.load(n),this.parsePgn(this.chess.pgn());const a=this.chess.turn()=="w",h=a?"white":"black",f=a?"white":"black";this.player=e.color||(this.chess.turn()=="w"?D[0]:D[1]),this.engine=this.player=="white"?"black":"white",this.boardConfig={fen:this.chess.fen(),orientation:this.player,viewOnly:!1,turnColor:h,premovable:{enabled:!1},movable:{free:!1,color:h,dests:this.toDests(),showDests:c.configuration.highlightSquares,events:{after:(m,u,d)=>{this.afterMove(m,u)}}},highlight:{lastMove:!0,check:!0},draggable:{enabled:!0,autoDistance:!0,showGhost:!0},selectable:{enabled:!0}},window.addEventListener("resize",function(){s.resizeBoard()}),b.data("info",()=>({boardTheme:c.configuration.boardTheme,pieceTheme:c.configuration.pieceTheme,customFen:i,fen:n,parsedPgn:s.parsedPgn,move:f,ariaDescriptionFromIcon:We,chess:this.chess,init(){const m=document.querySelector(".gauge_top"),u=document.querySelector(".gauge_bottom");m.style.backgroundColor=s.player=="white"?"dimgray":"white",u.style.backgroundColor=s.player=="white"?"white":"dimgray",s.board=je(document.getElementById("__chessboard__"),s.boardConfig),requestAnimationFrame(()=>{s.resizeBoard()}),c.configuration.configurationChangedEmitter.addEventListener(d=>{switch(d.field){case"boardTheme":this.boardTheme=d.config.boardTheme;break;case"pieceTheme":this.pieceTheme=d.config.pieceTheme;break;case"highlightSquares":{s.boardConfig.movable&&s.board.set({movable:{showDests:d.config.highlightSquares}});break}case"stockfishMultiPV":s.updateStockfishMultiPV();break}})}})),this.updateStockfishMultiPV(),this.player=="black"&&this.getStockfishMove()}updateStockfishMultiPV(){_.postMessage(`setoption name MultiPV value ${c.configuration.stockfishMultiPV}`)}afterMove(e,s){var i;e=="a0"||s=="a0"||(((i=this.chess.get(e))==null?void 0:i.type)=="p"&&(s.charAt(1)=="8"||s.charAt(1)=="1")?B.openModal("promotion","promotion.html",U,!1,!0,this.player[0]).then(n=>{this.registerMove(e,s,n.piece)}):this.registerMove(e,s,void 0))}registerMove(e,s,i){this.chess.move({from:e,to:s,promotion:i}),i&&this.board.set({fen:this.chess.fen()}),console.log(this.chess.fen()),L.playAudio("move"),this.chess.game_over()?this.chess.in_checkmate()?this.chess.turn()=="w"?alert("negras ganan"):alert("blancas ganan"):alert("empate"):this.getStockfishMove()}getStockfishMove(){_.postMessage("position fen "+this.chess.fen()),this.listeningToStockfish=!0,this.stockfishMessageBuffer=[],_.postMessage(`go depth ${c.configuration.stockfishDepth}`)}stockfishMessage(e){if(!this.listeningToStockfish)return;let s;if(s=e.match(/^bestmove ([a-h][1-8])([a-h][1-8])([qrbn])?/)){this.listeningToStockfish=!1;let i;const n=this.stockfishMessageBuffer.filter(y=>y.score>=0),a=this.stockfishMessageBuffer.filter(y=>y.score<0);if(n.length>0){const y=Math.min(...n.map(k=>k.score)),S=n.filter(k=>k.score===y),V=Math.floor(Math.random()*S.length);i=S[V]}else if(a.length>0){const y=Math.max(...a.map(k=>k.score)),S=a.filter(k=>k.score===y),V=Math.floor(Math.random()*S.length);i=S[V]}else return;console.log(`selected: ${JSON.stringify(i)}`);const h=this.povChances(this.engine,void 0,i.score);console.log(`povChances: ${h}`);const f=document.querySelector(".gauge_top"),m=document.querySelector(".gauge_bottom"),u=100-(h+1)*50,d=100-u;f.style.height=`${this.player=="white"?u:d}%`,m.style.height=`${this.player=="white"?d:u}%`;const T=i.pv.substring(0,2),q=i.pv.substring(2,4),v=i.pv.length==5&&(i.pv[4]=="r"||i.pv[4]=="n"||i.pv[4]=="b"||i.pv[4]=="q")?i.pv[4]:void 0;this.chess.move({from:T,to:q,promotion:v});const C=this.chess.turn()==="w"?"white":"black";this.board.set({fen:this.chess.fen(),turnColor:C,movable:{color:C,dests:this.toDests()}}),console.log(this.chess.fen()),L.playAudio("move")}else if(s=e.match(/^info depth (\d+) .*score cp (-?\d+) .*pv (\w+\d\w+)/)){const i=parseInt(s[1]),n=parseInt(s[2]),a=s[3];i==c.configuration.stockfishDepth&&(this.stockfishMessageBuffer.push({score:n,pv:a}),console.log(`score: ${n}`))}}getSEOParams(){return{kind:this.seo}}run(e){}onExit(){_.postMessage("stop")}toPov(e,s){return e==="white"?s:-s}rawWinningChances(e){return 2/(1+Math.exp(-.00368208*e))-1}mateWinningChances(e){const i=(21-Math.min(10,Math.abs(e)))*100*(e>0?1:-1);return this.rawWinningChances(i)}cpWinningChances(e){return this.rawWinningChances(Math.min(Math.max(-1e3,e),1e3))}evalWinningChances(e,s){return typeof e<"u"?this.mateWinningChances(e):this.cpWinningChances(s)}povChances(e,s,i){return this.toPov(e,this.evalWinningChances(s,i))}}const F=new pt,vt={hash:!0,mainRoute:{path:"/equalizing-chess/",template:"app.html",tag:"ion-app",controller:mt,hasParams:!1},routes:[{path:"/",template:"home.html",tag:"ion-router-outlet",controller:x,hasParams:!1},{path:"/home",template:"home.html",tag:"ion-router-outlet",controller:x,hasParams:!1},{path:"/about",template:"about.html",tag:"ion-router-outlet",controller:lt,hasParams:!1},{path:"/settings",template:"settings.html",tag:"ion-router-outlet",controller:J,hasParams:!1},{path:"/game/:color",template:"position.html",tag:"ion-router-outlet",controller:F,hasParams:!0},{path:"/fen/:fen1/:fen2/:fen3/:fen4/:fen5/:fen6/:fen7/:fen8",template:"position.html",tag:"ion-router-outlet",controller:F,hasParams:!0},{path:"/promotion",template:"promotion.html",tag:"ion-router-outlet",controller:U,hasParams:!1}]};rt().then(()=>{B.init(vt)});
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=index-DGSrYq_K.js.map