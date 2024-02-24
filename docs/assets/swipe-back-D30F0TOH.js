import{ab as h,ac as D,ad as M}from"./vendor-D-c0f6XP.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const k=(n,m,g,p,X)=>{const c=n.ownerDocument.defaultView;let s=h(n);const w=t=>{const{startX:e}=t;return s?e>=c.innerWidth-50:e<=50},i=t=>s?-t.deltaX:t.deltaX,v=t=>s?-t.velocityX:t.velocityX;return D({el:n,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:t=>(s=h(n),w(t)&&m()),onStart:g,onMove:t=>{const e=i(t)/c.innerWidth;p(e)},onEnd:t=>{const o=i(t),e=c.innerWidth,r=o/e,a=v(t),y=e/2,l=a>=0&&(a>.2||o>y),d=(l?1-r:r)*e;let u=0;if(d>5){const f=d/Math.abs(a);u=Math.min(f,540)}X(l,r<=0?.01:M(0,r,.9999),u)}})};export{k as createSwipeBackGesture};
//# sourceMappingURL=swipe-back-D30F0TOH.js.map
