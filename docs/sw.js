if(!self.define){let s,e={};const a=(a,i)=>(a=new URL(a+".js",i).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(i,c)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let b={};const f=s=>a(s,r),d={module:{uri:r},exports:b,require:f};e[r]=Promise.all(i.map((s=>d[s]||f(s)))).then((s=>(c(...s),b)))}}define(["./workbox-cd63daf5"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"about.html",revision:"9014e29ed3e468ad6834ca8bae780c32"},{url:"app.html",revision:"12f8aa106f58cb513100c4331c678d6d"},{url:"assets/arrow-back-D-orv5c1.js",revision:null},{url:"assets/arrow-forward-Bnj_Gn2j.js",revision:null},{url:"assets/arrow-undo-C-1zIByy.js",revision:null},{url:"assets/bulb-BQBTeG-f.js",revision:null},{url:"assets/caret-down-CgdCcEJE.js",revision:null},{url:"assets/caret-forward-D90KpvAo.js",revision:null},{url:"assets/caret-up-D9Gp9sHm.js",revision:null},{url:"assets/close-Da1lKQrP.js",revision:null},{url:"assets/color-wand-BHrDbzBV.js",revision:null},{url:"assets/flag-DD7xd5JK.js",revision:null},{url:"assets/focus-visible-supuXXMI.js",revision:null},{url:"assets/home-sharp-MT0ovGxc.js",revision:null},{url:"assets/index-D40oqfIn.css",revision:null},{url:"assets/index-DGSrYq_K.js",revision:null},{url:"assets/index9-Dsb2Q0gm.js",revision:null},{url:"assets/information-circle-BFRZsY_T.js",revision:null},{url:"assets/input-shims-BVbfhy-k.js",revision:null},{url:"assets/power-6A_yMQ7H.js",revision:null},{url:"assets/save-6TErxtDE.js",revision:null},{url:"assets/settings-sharp-b5VK1TDx.js",revision:null},{url:"assets/status-tap-pzWCl_h8.js",revision:null},{url:"assets/stockfish/stockfish-nnue-16-no-simd.js",revision:null},{url:"assets/stockfish/stockfish-nnue-16-no-Worker.js",revision:null},{url:"assets/stockfish/stockfish-nnue-16-single.js",revision:null},{url:"assets/stockfish/stockfish-nnue-16.js",revision:null},{url:"assets/swap-vertical-CwZ8QMVW.js",revision:null},{url:"assets/swipe-back-D30F0TOH.js",revision:null},{url:"assets/vendor-D-c0f6XP.js",revision:null},{url:"coi-serviceworker.min.js",revision:"7257e40445f71916db5acd8c6f6fba40"},{url:"home.html",revision:"f612ca7427eda7bec710c976c1a2fe32"},{url:"index.html",revision:"0fc1290be633e68a054a5e76f8b8b1e1"},{url:"position.html",revision:"b9f37d7a5c12a343f03a2d14c92ecde0"},{url:"promotion.html",revision:"c5acc62914c24cd818b48b99b834bcc8"},{url:"registerSW.js",revision:"301e43f4a96627f8cce62ed0dbf730cd"},{url:"settings.html",revision:"238f9aac4ed2fe0f832b8cf7d98e4c01"},{url:"assets/icons/pwa-192x192.png",revision:"3f6dd5f9b4144532337c9b75dfad4314"},{url:"assets/icons/pwa-512x512.png",revision:"ac37855694f7cee3219ca2ea5b790a0b"},{url:"about.html",revision:"9014e29ed3e468ad6834ca8bae780c32"},{url:"app.html",revision:"12f8aa106f58cb513100c4331c678d6d"},{url:"coi-serviceworker.min.js",revision:"7257e40445f71916db5acd8c6f6fba40"},{url:"home.html",revision:"f612ca7427eda7bec710c976c1a2fe32"},{url:"position.html",revision:"b9f37d7a5c12a343f03a2d14c92ecde0"},{url:"promotion.html",revision:"c5acc62914c24cd818b48b99b834bcc8"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"settings.html",revision:"238f9aac4ed2fe0f832b8cf7d98e4c01"},{url:"assets/audio/capture.mp3",revision:"deba59ab3fb0c4a26ba4d1fd7baf9090"},{url:"assets/audio/fail.mp3",revision:"3434379e22e02e7c451d5e478edfcc92"},{url:"assets/audio/move.mp3",revision:"37df98594d1062fea9c7e484c357ec65"},{url:"assets/audio/success.mp3",revision:"938be6ed42c09de39698add6a9181f92"},{url:"assets/icons/apple-touch-icon.png",revision:"b95483a95f41a51b2d6ec06c1f410acf"},{url:"assets/icons/favicon-192.png",revision:"996219f418a92ad247fc9088cd98cf24"},{url:"assets/icons/favicon.ico",revision:"6831ea93812f273b22ee3d836bab2b10"},{url:"assets/icons/favicon.png",revision:"b985239fb2cfb5c3c65fb4efbbb2b23a"},{url:"assets/icons/favicon.svg",revision:"12cebd4ab1d1057d71f8ccd3e8358dae"},{url:"assets/fonts/RussoOne-Regular.woff2",revision:"91b1826f1fc68477ee633a81f335e3ac"},{url:"assets/fonts/lichess.chess.woff2",revision:"00a67d3947d808f205701374b8af5e75"},{url:"assets/board/black-white.png",revision:"c418710d867b9731ff3c08a22156230d"},{url:"assets/board/black-white.svg",revision:"d469985abc5f2448ee1ea948eaf1fafe"},{url:"assets/board/blue.png",revision:"540d2165557f82930fab0e32e8d184cf"},{url:"assets/board/blue.svg",revision:"94a904c249f9d2500e0e9fe594c24006"},{url:"assets/board/brown.png",revision:"0007bea827f13dcb4efa1a13be30cb75"},{url:"assets/board/brown.svg",revision:"3cdb6cd599c0dd9773f0abb7bc2885ff"},{url:"assets/board/dark-green.png",revision:"89197628b4d89f6d262e43e2737cfadc"},{url:"assets/board/dark-green.svg",revision:"6830efc7655bc76bafafd3182b853a01"},{url:"assets/board/green.png",revision:"05a134035f539915d81686675fae0479"},{url:"assets/board/green.svg",revision:"99c320ce6215340dfae393060ce081f4"},{url:"assets/board/grey.png",revision:"025aa942c21855c57ebda9a8260b63b9"},{url:"assets/board/grey.svg",revision:"ec83a30e5dbd532e72c2b45fd5881715"},{url:"assets/board/navy.png",revision:"532b1a00bd0e078f609fb837c82069ed"},{url:"assets/board/navy.svg",revision:"bfab037dd63ae6d08865b4fdbba40f3b"},{url:"assets/board/pink.png",revision:"e0da97c75716d1f14dbd73eb0d43266c"},{url:"assets/board/pink.svg",revision:"c2d9afef3b8fff7c712f760d470a0435"},{url:"assets/stockfish/nn-5af11540bbfe.nnue",revision:"af175cce8a8e5a12fb84f2218adcf61f"},{url:"assets/pieces/alpha/bB.svg",revision:"46754cd6b18dc4c3d78828da855f38fb"},{url:"assets/pieces/alpha/bK.svg",revision:"bf02f4f1b9720cd652a1ed80f7c5eea3"},{url:"assets/pieces/alpha/bN.svg",revision:"527c93c6488503d33ede6ad49189a0e2"},{url:"assets/pieces/alpha/bP.svg",revision:"68848ac29484690b7f6b0105c9ffb0ab"},{url:"assets/pieces/alpha/bQ.svg",revision:"30ee5315e00ee84d05fdc8f240760dec"},{url:"assets/pieces/alpha/bR.svg",revision:"60516104025745cca086d48e4522b324"},{url:"assets/pieces/alpha/wB.svg",revision:"6ed79094edbdc6e032f81ea4c3e1084c"},{url:"assets/pieces/alpha/wK.svg",revision:"7b6c94c4cf76e0723876edbb686abbff"},{url:"assets/pieces/alpha/wN.svg",revision:"9512cac63e0fc589c852a235e0ed4e71"},{url:"assets/pieces/alpha/wP.svg",revision:"020d384735a37c5a40e41a9fd3250851"},{url:"assets/pieces/alpha/wQ.svg",revision:"24c53d9112aaad5194ce2fc004e1d512"},{url:"assets/pieces/alpha/wR.svg",revision:"318a04e0ab7ed5489c5c17ff17c50b7c"},{url:"assets/pieces/california/bB.svg",revision:"32f97ac64cfcb22fa10e0ee7f05aad0e"},{url:"assets/pieces/california/bK.svg",revision:"22711f92ad87da0a0dd05c86a95411e5"},{url:"assets/pieces/california/bN.svg",revision:"5eddb74472d3a28b9eed22ccb70b31ef"},{url:"assets/pieces/california/bP.svg",revision:"c07e3fd4d7fc0898c9538ac7e82d5215"},{url:"assets/pieces/california/bQ.svg",revision:"816e7cc96d6481ebd98acba2e3a7093a"},{url:"assets/pieces/california/bR.svg",revision:"5681224f3ff31525d5e6bc6097c2cfe2"},{url:"assets/pieces/california/wB.svg",revision:"e31f2f5c8a557ee662e8bf4aaff10060"},{url:"assets/pieces/california/wK.svg",revision:"3711eafb96aafbc1cb0f9b115d38382d"},{url:"assets/pieces/california/wN.svg",revision:"dd4f6ed78e4cf64e318a43ef7754a736"},{url:"assets/pieces/california/wP.svg",revision:"33361105ac8af428ebe49977dde95806"},{url:"assets/pieces/california/wQ.svg",revision:"21e7b6e0ab629505ba126c523a8e3926"},{url:"assets/pieces/california/wR.svg",revision:"d0463a0a2b52cc82be88115b8ebcc61c"},{url:"assets/pieces/cburnett/bB.svg",revision:"f946ab0fdef72e666bafed730b4737b0"},{url:"assets/pieces/cburnett/bK-full.svg",revision:"bbd2f9dda4065025bea59c06eebe0137"},{url:"assets/pieces/cburnett/bK.svg",revision:"9f31a235d18ae77db54013f9a16d2389"},{url:"assets/pieces/cburnett/bN.svg",revision:"fb2d93ca1cc4abe3a00af2c2bd517413"},{url:"assets/pieces/cburnett/bP.svg",revision:"053eab1175ecb045e5a135b814b96fcb"},{url:"assets/pieces/cburnett/bQ.svg",revision:"b82cb46bff8a91043eecc525a0758585"},{url:"assets/pieces/cburnett/bR.svg",revision:"99ee46bd7099bc35827d1ce736b00947"},{url:"assets/pieces/cburnett/wB.svg",revision:"f05c993ba26f227735e93b4ed7467290"},{url:"assets/pieces/cburnett/wK-full.svg",revision:"23ceadd14aa104c7c52a401d9f189ad4"},{url:"assets/pieces/cburnett/wK.svg",revision:"b29ef0fef10b62a4e858ac5b5a988c69"},{url:"assets/pieces/cburnett/wN.svg",revision:"9dd40b39cd7656d0be3af7bfa2ae839a"},{url:"assets/pieces/cburnett/wP.svg",revision:"8d6b4a5af9b36845fa752d792eee65d5"},{url:"assets/pieces/cburnett/wQ.svg",revision:"89024b4aeae01c9d5bebfbbf3f5f4b0b"},{url:"assets/pieces/cburnett/wR.svg",revision:"5df38bd99eb8485c1d458d393563734e"},{url:"assets/pieces/cburnett/wbK.svg",revision:"c271f93b08372b3ec83cd21ec972ae13"},{url:"assets/pieces/chess7/bB.svg",revision:"5d9e57c02d7449e5a274f5727bc427cb"},{url:"assets/pieces/chess7/bK.svg",revision:"083df52ba384e455a7567c16628c72e1"},{url:"assets/pieces/chess7/bN.svg",revision:"70537194f7296e8565ceee111ba5d8c7"},{url:"assets/pieces/chess7/bP.svg",revision:"8d8affbb399cc8cf3eccef43c46bf65e"},{url:"assets/pieces/chess7/bQ.svg",revision:"cb4a997eba49af347ead7fecd6c2ded7"},{url:"assets/pieces/chess7/bR.svg",revision:"56863205d6bdcade0b2a7a8035c05373"},{url:"assets/pieces/chess7/wB.svg",revision:"59df0feac8a48d9f76aa40d09aa49134"},{url:"assets/pieces/chess7/wK.svg",revision:"4722983a7ab5f05bb001a2eb07537cb5"},{url:"assets/pieces/chess7/wN.svg",revision:"1c519b48d7e60883be337f88cb13e7ec"},{url:"assets/pieces/chess7/wP.svg",revision:"10b51b5a4c18022b3bcc733ca8659e01"},{url:"assets/pieces/chess7/wQ.svg",revision:"4b8aa6fbf78ce21aa74683272e2ebf97"},{url:"assets/pieces/chess7/wR.svg",revision:"53678966a8e420cf2ca6a43c98fec451"},{url:"assets/pieces/chessnut/COPYRIGHT.txt",revision:"f6ef722e76fd72190da65bbc06441b0d"},{url:"assets/pieces/chessnut/LICENSE.txt",revision:"3b83ef96387f14655fc854ddc3c6bd57"},{url:"assets/pieces/chessnut/bB.svg",revision:"dc046e2817015251fbc2156bdedee0c4"},{url:"assets/pieces/chessnut/bK.svg",revision:"1df1c52a1c8d82595634aec1668da624"},{url:"assets/pieces/chessnut/bN.svg",revision:"44f98d9e63a6c4b7c65641c79c87c8f8"},{url:"assets/pieces/chessnut/bP.svg",revision:"eba0a43924d3baf66c2b144531870778"},{url:"assets/pieces/chessnut/bQ.svg",revision:"03ecac3156ec531a62e47f53863d4752"},{url:"assets/pieces/chessnut/bR.svg",revision:"b0d360f896e15bb204baef393a788de8"},{url:"assets/pieces/chessnut/wB.svg",revision:"f745db361247478bdcc73c6ac8800a37"},{url:"assets/pieces/chessnut/wK.svg",revision:"9c94852f0f6d23cc92b070a761efc534"},{url:"assets/pieces/chessnut/wN.svg",revision:"0b9cdede195f70dd4bf7b99480e0828f"},{url:"assets/pieces/chessnut/wP.svg",revision:"2adb69e39150f8ab7a71373d5d443764"},{url:"assets/pieces/chessnut/wQ.svg",revision:"65d930952b1964398484f4ed0b1d9a8e"},{url:"assets/pieces/chessnut/wR.svg",revision:"5027a1c2b53a1bf78e6ccc34ef507744"},{url:"assets/pieces/chicago/bB.svg",revision:"2ee202cf4721d1b46f74ec4030b1eff5"},{url:"assets/pieces/chicago/bK.svg",revision:"553d52e346c22f33300f2d0e79ae77b2"},{url:"assets/pieces/chicago/bN.svg",revision:"d07b3af5ee2420ace5007901bbacaea0"},{url:"assets/pieces/chicago/bP.svg",revision:"410e42725fea72ae268f0176d2dc8eb1"},{url:"assets/pieces/chicago/bQ.svg",revision:"dc608b6345383aa0c3c0fb81bebe81e3"},{url:"assets/pieces/chicago/bR.svg",revision:"f2b8e836d7110184815c8b629b7e0172"},{url:"assets/pieces/chicago/wB.svg",revision:"4db47b5d5bcbba9d72463213bd1629ba"},{url:"assets/pieces/chicago/wK.svg",revision:"09038069052378ac278e4f38304f452a"},{url:"assets/pieces/chicago/wN.svg",revision:"fb9133820c00af52cb0d2299ae3e0a67"},{url:"assets/pieces/chicago/wP.svg",revision:"5b9c8fd20c01815b8426d7428bdb9434"},{url:"assets/pieces/chicago/wQ.svg",revision:"ca046aceaee774b31282802752af29b0"},{url:"assets/pieces/chicago/wR.svg",revision:"0dc136e13e7a6818ac87c022711b6d7e"},{url:"assets/pieces/companion/bB.svg",revision:"54f9c22648aaa826a3601cadc522d8de"},{url:"assets/pieces/companion/bK.svg",revision:"089a453e2aa36ff9adbdbed5f403c7e1"},{url:"assets/pieces/companion/bN.svg",revision:"d27b166a6e0bb307ff99db2893f8a888"},{url:"assets/pieces/companion/bP.svg",revision:"0a8e223ff6b9dfc3e6eaade7d833f8eb"},{url:"assets/pieces/companion/bQ.svg",revision:"7f57c07cae25fe9507e3b5b99f83158b"},{url:"assets/pieces/companion/bR.svg",revision:"91a39171e7ca91d067bf424d65c2c53b"},{url:"assets/pieces/companion/wB.svg",revision:"bd8a5a3d53aa42a81fc38565d1b35566"},{url:"assets/pieces/companion/wK.svg",revision:"98b8b90a4e0864f87be477cb89867f19"},{url:"assets/pieces/companion/wN.svg",revision:"471a0aab62aee35d348acc3a8c8ac948"},{url:"assets/pieces/companion/wP.svg",revision:"521e59ced5c508553bead14e495b00bb"},{url:"assets/pieces/companion/wQ.svg",revision:"c830ca03e1b2749a26413be3bdd9bd9d"},{url:"assets/pieces/companion/wR.svg",revision:"9e3c4412df961705a6248c128630e247"},{url:"assets/pieces/fantasy/bB.svg",revision:"6bb0e8295cd01e41dc5986707ed2585b"},{url:"assets/pieces/fantasy/bK.svg",revision:"85b5bebbe579ebb9f71065efe8eb5bdc"},{url:"assets/pieces/fantasy/bN.svg",revision:"1a69e815e57b1572f14a3bda3f46769f"},{url:"assets/pieces/fantasy/bP.svg",revision:"6293e4b310173945e349ba6a303a739b"},{url:"assets/pieces/fantasy/bQ.svg",revision:"3327ef3fc895bb28f268e57109dfc622"},{url:"assets/pieces/fantasy/bR.svg",revision:"7b084bffeb34907b3aac0bdbedae70c7"},{url:"assets/pieces/fantasy/wB.svg",revision:"9ca426f034c4ba04d5929119a960565f"},{url:"assets/pieces/fantasy/wK.svg",revision:"e2436369bb126841486697188f11957a"},{url:"assets/pieces/fantasy/wN.svg",revision:"c517639c86529364ae478fecd592bf64"},{url:"assets/pieces/fantasy/wP.svg",revision:"3f5f1e9820561bf6a0452f541aedcf41"},{url:"assets/pieces/fantasy/wQ.svg",revision:"4b3e013ba304c9711063c65e81807f29"},{url:"assets/pieces/fantasy/wR.svg",revision:"5bffd58b4d55edce286b4c0284a79dc2"},{url:"assets/pieces/iowa/bB.svg",revision:"340a5da344cdc7326ed3de89d746785d"},{url:"assets/pieces/iowa/bK.svg",revision:"bf6b8b19b7d30a2c066b2dbcfd305d61"},{url:"assets/pieces/iowa/bN.svg",revision:"86baffe1976079105962d385a0292371"},{url:"assets/pieces/iowa/bP.svg",revision:"bfd7f4e2d5c9218acfbe335aec8623d7"},{url:"assets/pieces/iowa/bQ.svg",revision:"4c309b64a214d5a57e6fa16c594a60c8"},{url:"assets/pieces/iowa/bR.svg",revision:"2d70fdc92b5857e1960b823b87f9f948"},{url:"assets/pieces/iowa/wB.svg",revision:"20d31984cdfb4776fa8ed3f011f3b4df"},{url:"assets/pieces/iowa/wK.svg",revision:"5083a2ef766cf9d204a881c8fc063c9e"},{url:"assets/pieces/iowa/wN.svg",revision:"f864ecaa2a132975852f9a8aa799411a"},{url:"assets/pieces/iowa/wP.svg",revision:"9595401d6b2f16e89808ffa11a85635b"},{url:"assets/pieces/iowa/wQ.svg",revision:"be4a28046758591ca5acff11040a4b62"},{url:"assets/pieces/iowa/wR.svg",revision:"5fa48c54a397b24104b9b33824ca0018"},{url:"assets/pieces/kosal/bB.svg",revision:"9f965200fd54e262f65ae6f979f83d66"},{url:"assets/pieces/kosal/bK.svg",revision:"4a602ffbd4b14a985e3ad32ec89be712"},{url:"assets/pieces/kosal/bN.svg",revision:"99831c99c7de72cf18c99cc99961f7d0"},{url:"assets/pieces/kosal/bP.svg",revision:"ecaa7e0dac3ec6a96a82abd0a8a38fa7"},{url:"assets/pieces/kosal/bQ.svg",revision:"f094bddaa7f98d2ac97eda68dcf0871a"},{url:"assets/pieces/kosal/bR.svg",revision:"0c4158581029ea9af3cc87f40af0f3d0"},{url:"assets/pieces/kosal/wB.svg",revision:"562814256dfafb12e349b1ef768d3a4b"},{url:"assets/pieces/kosal/wK.svg",revision:"66485cb838e6223a82e03a3ebb06e067"},{url:"assets/pieces/kosal/wN.svg",revision:"e31fef4f5042028bb377a520b50b4fa4"},{url:"assets/pieces/kosal/wP.svg",revision:"08bf49d81c6c0f2872b4a5ec3b72ddc8"},{url:"assets/pieces/kosal/wQ.svg",revision:"f9c9a1eb12f823d2c93d1553fa7fb903"},{url:"assets/pieces/kosal/wR.svg",revision:"d8f8f2380c6c9fc8af350f8137e96e02"},{url:"assets/pieces/leipzig/bB.svg",revision:"b454e44a3c7a702a491e42b456e00a1e"},{url:"assets/pieces/leipzig/bK.svg",revision:"09f15689218c5aa55832856389216dc9"},{url:"assets/pieces/leipzig/bN.svg",revision:"d2f768bf4540700b7a46cff3ab5aaa2e"},{url:"assets/pieces/leipzig/bP.svg",revision:"5bb93a74fc0b1035b6cdaa15b3cfa2bc"},{url:"assets/pieces/leipzig/bQ.svg",revision:"eee6d088f7f94d9cece4959fe1f1474d"},{url:"assets/pieces/leipzig/bR.svg",revision:"ce05d8974f3d8cf01b98d97ad7178b6e"},{url:"assets/pieces/leipzig/wB.svg",revision:"2e1b157e9bec5babb419140f8b022c90"},{url:"assets/pieces/leipzig/wK.svg",revision:"4c70616952bf841aac45474690cef5dc"},{url:"assets/pieces/leipzig/wN.svg",revision:"06ef8faac32a7cd83f0b20fe23c34b89"},{url:"assets/pieces/leipzig/wP.svg",revision:"00b37e7bc971594f34cc31f196dcd24a"},{url:"assets/pieces/leipzig/wQ.svg",revision:"6a8737bd5197cdf80399f0538cc47294"},{url:"assets/pieces/leipzig/wR.svg",revision:"c337ae3febf4e82cc46c75c257ed8bae"},{url:"assets/pieces/letter/bB.svg",revision:"e7da138d6a7a3785902c27015fdf85c7"},{url:"assets/pieces/letter/bK.svg",revision:"38cd562210e209fe5db0d76bd62bff0c"},{url:"assets/pieces/letter/bN.svg",revision:"5e1772c6ebd5b62acd26b44cfe08446e"},{url:"assets/pieces/letter/bP.svg",revision:"c5ac8f3c6d9250d2aa89c4b1512f974a"},{url:"assets/pieces/letter/bQ.svg",revision:"035eebf28563c49cc439d973f39817f4"},{url:"assets/pieces/letter/bR.svg",revision:"69cdde1e43477e12140fa0ad1d852030"},{url:"assets/pieces/letter/wB.svg",revision:"0fe92f684397fd3142a732226ea6b082"},{url:"assets/pieces/letter/wK.svg",revision:"c503e56b65ba1d52f09a82ff2fd91dd3"},{url:"assets/pieces/letter/wN.svg",revision:"bd6fc36d006a05fd30af7d33e885de08"},{url:"assets/pieces/letter/wP.svg",revision:"240a5f5f598a796567c4e34af8972663"},{url:"assets/pieces/letter/wQ.svg",revision:"d7f1fc5026712e982364ee626f54df5c"},{url:"assets/pieces/letter/wR.svg",revision:"545903409ac0c0916dcde35a9b2e698c"},{url:"assets/pieces/merida/bB.svg",revision:"8a6bd56a8d71b44673a36c25e1ca66aa"},{url:"assets/pieces/merida/bK.svg",revision:"47af274b8a88eec771681b9ac53dc6d2"},{url:"assets/pieces/merida/bN.svg",revision:"0026f14668177f7dd0d4bab167b1a1cf"},{url:"assets/pieces/merida/bP.svg",revision:"344e161b311ce904cc0e3be7d7d61090"},{url:"assets/pieces/merida/bQ.svg",revision:"aed026d0021b7ebfc2164946c0136010"},{url:"assets/pieces/merida/bR.svg",revision:"027332a07c4f25930a0e527a85965aa4"},{url:"assets/pieces/merida/wB.svg",revision:"e0eb761a13389f391cf3e6f643597644"},{url:"assets/pieces/merida/wK.svg",revision:"bb430c603fae05171bfcc6760efda928"},{url:"assets/pieces/merida/wN.svg",revision:"f9c6e522d506c7c3a555e412d34630df"},{url:"assets/pieces/merida/wP.svg",revision:"4ff1ce7c9541a77b98582a3329e920ed"},{url:"assets/pieces/merida/wQ.svg",revision:"4e4432a6b0dfce093177db46dc9bff48"},{url:"assets/pieces/merida/wR.svg",revision:"573501233a407695e7b5d5b8e6efc7aa"},{url:"assets/pieces/mono/bB.svg",revision:"dba60e0f66dfb78a6dc1bd74dee6a875"},{url:"assets/pieces/mono/bK.svg",revision:"127aac71b619a646aaadc6d465def5b8"},{url:"assets/pieces/mono/bN.svg",revision:"af46fda372c868ecfaf30c523484d8a6"},{url:"assets/pieces/mono/bP.svg",revision:"ffc4630c77c5c2346fb1e1588a659c55"},{url:"assets/pieces/mono/bQ.svg",revision:"9f2cbf373a4469a9db5b6ee30f327df0"},{url:"assets/pieces/mono/bR.svg",revision:"cdcee93affd5fc377e4257efac4f5dbb"},{url:"assets/pieces/mono/wB.svg",revision:"5d4c5de390a413c884c15d322efffa76"},{url:"assets/pieces/mono/wK.svg",revision:"9cb324b8aefb7614ecb00eba0d310069"},{url:"assets/pieces/mono/wN.svg",revision:"22722c7899580cf58fa292a54000fa6b"},{url:"assets/pieces/mono/wP.svg",revision:"533325fd45032a8dbdaf6c9af41aec9f"},{url:"assets/pieces/mono/wQ.svg",revision:"8d1c076f4b965cae2bd425ba8f3997a5"},{url:"assets/pieces/mono/wR.svg",revision:"b1ef53eb9af89285decd8074b3db0051"},{url:"assets/pieces/oslo/bB.svg",revision:"fc0b630ddc334c4290584ef0af18571d"},{url:"assets/pieces/oslo/bK.svg",revision:"abd4394626ae92a56ce73832be2cda69"},{url:"assets/pieces/oslo/bN.svg",revision:"901721d7705788881bf9c3b7f7646436"},{url:"assets/pieces/oslo/bP.svg",revision:"0716aa67f0af062be0468162f81cd8ae"},{url:"assets/pieces/oslo/bQ.svg",revision:"0bab56949f140a29920cb597572667fc"},{url:"assets/pieces/oslo/bR.svg",revision:"26a40550c42eddb2b43321d02ee6ab92"},{url:"assets/pieces/oslo/wB.svg",revision:"37608523ed33fab7ecb8783a229f7c58"},{url:"assets/pieces/oslo/wK.svg",revision:"57d9576b53da356c0efa1f71e70629d0"},{url:"assets/pieces/oslo/wN.svg",revision:"87c973304fb03d34c55dbc91fcfead2c"},{url:"assets/pieces/oslo/wP.svg",revision:"4cb6758435e70505ba56f938191017a0"},{url:"assets/pieces/oslo/wQ.svg",revision:"8fdebee9329e88e1bb2732d079f26ca3"},{url:"assets/pieces/oslo/wR.svg",revision:"5e3401596d7bae129beccc87811f4e86"},{url:"assets/pieces/pirouetti/bB.svg",revision:"2d1cfea86e6a1101eee66ffb003113a7"},{url:"assets/pieces/pirouetti/bK.svg",revision:"9bfca387ab7de31749ece0b9855a20f0"},{url:"assets/pieces/pirouetti/bN.svg",revision:"fd32e4dddc7e3e845b1f436dd733bb55"},{url:"assets/pieces/pirouetti/bP.svg",revision:"6343eb387d286e5020c9f613e3198bc0"},{url:"assets/pieces/pirouetti/bQ.svg",revision:"0899834db2d4b05ffce39ab8e1862df2"},{url:"assets/pieces/pirouetti/bR.svg",revision:"f2031e21feae06db880f98bff07404fb"},{url:"assets/pieces/pirouetti/wB.svg",revision:"9c79baab6ddfb21ea77105aab29d6553"},{url:"assets/pieces/pirouetti/wK.svg",revision:"dd80504806b67b8baa81d090579020c1"},{url:"assets/pieces/pirouetti/wN.svg",revision:"f41d409f442356d34d657cd12afc4587"},{url:"assets/pieces/pirouetti/wP.svg",revision:"102f9b20c2c14034fe239c02b1330949"},{url:"assets/pieces/pirouetti/wQ.svg",revision:"6f7691a1b2f5c2cdce3fc370c99599bc"},{url:"assets/pieces/pirouetti/wR.svg",revision:"96150dd7f177b588c5a6dac75aa93fba"},{url:"assets/pieces/pixel/bB.svg",revision:"397e3fc0c23c2478afe332f35aeb5d87"},{url:"assets/pieces/pixel/bK.svg",revision:"70c27c63e1419c16fbf046ecefbd2d33"},{url:"assets/pieces/pixel/bN.svg",revision:"f9f1f26a2f991eb6571deca442c9182a"},{url:"assets/pieces/pixel/bP.svg",revision:"c8cf5e3ab73303e720c8f0c91e716460"},{url:"assets/pieces/pixel/bQ.svg",revision:"939eba30dcfa0d0fe750f34553a51819"},{url:"assets/pieces/pixel/bR.svg",revision:"ae99ad8165f1c0ce174f126dadacbd7d"},{url:"assets/pieces/pixel/wB.svg",revision:"4638ab00356a158a75fc5d13a495e6f2"},{url:"assets/pieces/pixel/wK.svg",revision:"6df0ce96042916170d94b187f6938dbe"},{url:"assets/pieces/pixel/wN.svg",revision:"10af8c7991be5b786cd23f4fa84cbc3b"},{url:"assets/pieces/pixel/wP.svg",revision:"e99e3e4d966a41272eb2e32151cdc5f5"},{url:"assets/pieces/pixel/wQ.svg",revision:"8cb222ff9f734e3a7b774d403e374149"},{url:"assets/pieces/pixel/wR.svg",revision:"7827b1fe00094f86aa53406c9cc31c61"},{url:"assets/pieces/reilly/bB.svg",revision:"083d2fecd2067d4507f9dde2c1193eb3"},{url:"assets/pieces/reilly/bK.svg",revision:"7c7048913ee511051cc29231924c29c3"},{url:"assets/pieces/reilly/bN.svg",revision:"5935ef6a7f43949fb9f85c54851b9f6c"},{url:"assets/pieces/reilly/bP.svg",revision:"fd28eaf306a3063d89274e8af4f39131"},{url:"assets/pieces/reilly/bQ.svg",revision:"aa1c39037104cb15d871ea9ecba1c493"},{url:"assets/pieces/reilly/bR.svg",revision:"b6298e6943bd7eff24aec042a4291975"},{url:"assets/pieces/reilly/wB.svg",revision:"726b0c92243fce4c313e50114a0b3249"},{url:"assets/pieces/reilly/wK.svg",revision:"05ffb099a009e13919aecfe03a55a241"},{url:"assets/pieces/reilly/wN.svg",revision:"834ee72aa6227371b205f47f71ac3642"},{url:"assets/pieces/reilly/wP.svg",revision:"c23da1d958b3062a196f5bc5c819d0bc"},{url:"assets/pieces/reilly/wQ.svg",revision:"8724765a2ca9bfe2a6c404b461b06285"},{url:"assets/pieces/reilly/wR.svg",revision:"d276f2ba3f3f2894570c007e157a34a7"},{url:"assets/pieces/riohacha/bB.svg",revision:"00d0069e1f766cab71ffb81637692c9e"},{url:"assets/pieces/riohacha/bK.svg",revision:"321b3c92a5f278521bbd6b280a31bcf7"},{url:"assets/pieces/riohacha/bN.svg",revision:"e210c2cacf69ada93071ce17ff7fc03c"},{url:"assets/pieces/riohacha/bP.svg",revision:"379b4e12f4034617b50909651af67954"},{url:"assets/pieces/riohacha/bQ.svg",revision:"3e801a854e397f7047b9a9c16731a06d"},{url:"assets/pieces/riohacha/bR.svg",revision:"f7b34af3f8758adc9b83747f727d73b5"},{url:"assets/pieces/riohacha/wB.svg",revision:"7ee61a24a27c40783279dd4020ed9495"},{url:"assets/pieces/riohacha/wK.svg",revision:"0ce6a53f6abc9db2c53c284eb3efa55a"},{url:"assets/pieces/riohacha/wN.svg",revision:"952bec780c5955915846fa988366fa29"},{url:"assets/pieces/riohacha/wP.svg",revision:"07aed2a28d665ff3d9c96d7ded417b6b"},{url:"assets/pieces/riohacha/wQ.svg",revision:"983e5a3409b368465c66cb03553bb490"},{url:"assets/pieces/riohacha/wR.svg",revision:"dedb7fcaf8c1c806921383f4d49006f9"},{url:"assets/pieces/shapes/bB.svg",revision:"22d16487c8aee7e867f8b11e014a97b7"},{url:"assets/pieces/shapes/bK.svg",revision:"23f70bbfbae22b5a5fb47cc50bb9673d"},{url:"assets/pieces/shapes/bN.svg",revision:"50ab293e8751d7b2584ae6616f9a5fd9"},{url:"assets/pieces/shapes/bP.svg",revision:"cd1946518337e1a551fae2e9a41ea0f1"},{url:"assets/pieces/shapes/bQ.svg",revision:"b6018d9e49ec22a3f6d5e1666bf6cf40"},{url:"assets/pieces/shapes/bR.svg",revision:"4ddf0523512a0eea992d11aa6fc1fd8c"},{url:"assets/pieces/shapes/wB.svg",revision:"bb87ed2702cacb8ae00969414779130f"},{url:"assets/pieces/shapes/wK.svg",revision:"12abefdc41275bd6cb245e8cb29aa803"},{url:"assets/pieces/shapes/wN.svg",revision:"e096c28a9092a260a94f332ab713c23e"},{url:"assets/pieces/shapes/wP.svg",revision:"dd91f15d609163eddfb269119409ed68"},{url:"assets/pieces/shapes/wQ.svg",revision:"b47ec208b56f135e15f78259708c7ee0"},{url:"assets/pieces/shapes/wR.svg",revision:"f29a293a0f7a1c86cabfb8ce1bb4fc49"},{url:"assets/pieces/spatial/all.svg",revision:"90e57c5d97f93157ba817be88e80b6a5"},{url:"assets/pieces/spatial/bB.svg",revision:"21bcf02ec483b24593ff6ba96a9354a5"},{url:"assets/pieces/spatial/bK.svg",revision:"20e956ea1d110607c171c0bca95eb746"},{url:"assets/pieces/spatial/bN.svg",revision:"2a1565dce468a0cb7c46da6d82e959fd"},{url:"assets/pieces/spatial/bP.svg",revision:"77774fb131c3bb29d5830fa775305b54"},{url:"assets/pieces/spatial/bQ.svg",revision:"29b68a383f0365df890de5598d58267d"},{url:"assets/pieces/spatial/bR.svg",revision:"d358217ad5127a8ab2bbd05d9048a474"},{url:"assets/pieces/spatial/wB.svg",revision:"6c59caff37c66cbca5d1bc401eb14c72"},{url:"assets/pieces/spatial/wK.svg",revision:"19739f906740e972e910d503db063e9c"},{url:"assets/pieces/spatial/wN.svg",revision:"6456f67f8bbc875ea98405de343cfae8"},{url:"assets/pieces/spatial/wP.svg",revision:"69ed5980908b92948b871d3f8480d060"},{url:"assets/pieces/spatial/wQ.svg",revision:"fd156c3b19304eaabeaf820555bff4ad"},{url:"assets/pieces/spatial/wR.svg",revision:"9564540dcfa48fb36a5f11427532cff2"},{url:"assets/pieces/symmetric/bB.svg",revision:"91e275f3796fe30f936d3a181933a569"},{url:"assets/pieces/symmetric/bK.svg",revision:"36872c73c09da071495c1aae91e9bdb4"},{url:"assets/pieces/symmetric/bN.svg",revision:"989d2d0a842f7831de67d0e22078b90e"},{url:"assets/pieces/symmetric/bP.svg",revision:"3e141345975a5dbdd48a43ab89302753"},{url:"assets/pieces/symmetric/bQ.svg",revision:"c1c017a6eb3d33eca3a6b016327d86b9"},{url:"assets/pieces/symmetric/bR.svg",revision:"c6ce7ef2efa963f11ac62849dea670ee"},{url:"assets/pieces/symmetric/wB.svg",revision:"c5fab8e1b32ad975e38d6d4a1bded13e"},{url:"assets/pieces/symmetric/wK.svg",revision:"ebe1ce2761b88131d7dc5259e1c8f5f0"},{url:"assets/pieces/symmetric/wN.svg",revision:"78212a32a04ad433e494da0b254e1ca2"},{url:"assets/pieces/symmetric/wP.svg",revision:"ad7b3ce956ecbb2c28dff1d1168ea608"},{url:"assets/pieces/symmetric/wQ.svg",revision:"21d8ecc9c31579e1892230c669d843b5"},{url:"assets/pieces/symmetric/wR.svg",revision:"3a6e59e53c2af12a8614dac686be2c0c"},{url:"manifest.json",revision:"93fe0e08ba44da66f807bac0c1f94264"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
