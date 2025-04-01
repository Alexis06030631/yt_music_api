//ExtractDecipher
null


//NTransform
null


//Composer
composeFunc=function(K){var G=K.signatureCipher;K={UL:!1,zI:EL[1],M0:EL[1],s:EL[1]};if(!G)return K;G=DY(G);K.UL=!0;K.zI=G.url;K.M0=G.sp;K.s=G.s;return K};
DY=function(K){K.charAt(0)==="?"&&(K=K.substring(1));return Oz(K,"&")};
Oz=function(K,G){G=K.split(G);for(var E={},L=0,O=G.length;L<O;L++){var y=G[L].split("=");if(y.length===1&&y[0]||y.length===2)try{var D=pbe(y[0]||""),S=pbe(y[1]||"");if(D in E){var M=E[D];Array.isArray(M)?g.Ot(M,S):E[D]=[M,S]}else E[D]=S}catch(I){var C=I,F=y[0],c=String(Oz);C.args=[{key:F,value:y[1],query:K,method:j8Y===c?"unchanged":c}];B88.hasOwnProperty(F)||LJ(C)}}return E};
const j8Y=String(Oz);
const B88={q:!0,search_query:!0};
const pbe=function(K){return K&&K.match(gGb)?K:yb(K)};
const gGb=/^[\w.]*$/;
const yb=function(K){return decodeURIComponent(K.replace(/\+/g," "))};
var g={};const orgaCompose=function(K,G,E){G=G===void 0?"":G;E=E===void 0?"":E;K=new g.A4(K,!0);K.set("alr","yes");E&&(E=Wzs(decodeURIComponent(E)),K.set(G,encodeURIComponent(E)));return K};
g.A4=function(K,G){this.C=K;this.U=G===void 0?!1:G;this.W=this.path=this.scheme=EL[1];this.T={};this.url=EL[1]};

g.A4.prototype.set=function(K,G){this.T[K]!==G&&(this.T[K]=G,this.url=EL[1])};
Wzs=function(K){K=K.split(EL[1]);Tt.bl(K,19);Tt.bK(K,2);Tt.g8(K,25);Tt.bl(K,13);Tt.g8(K,66);Tt.bK(K,1);Tt.g8(K,27);return K.join(EL[1])};
var Tt={g8:function(K){K.reverse()},
bK:function(K,G){K.splice(0,G)},
bl:function(K,G){var E=K[0];K[0]=K[G%K.length];K[G%K.length]=E}};
const COMPOSE_FUN_NAME_val = composeFunc(compArg);const COMPOSE_FUN_NAME_obj = Object.keys(COMPOSE_FUN_NAME_val).filter((key) => {return COMPOSE_FUN_NAME_val[key] !== true;});
		orgaCompose(COMPOSE_FUN_NAME_val[COMPOSE_FUN_NAME_obj[0]], COMPOSE_FUN_NAME_val[COMPOSE_FUN_NAME_obj[1]], COMPOSE_FUN_NAME_val[COMPOSE_FUN_NAME_obj[2]]);


//potKey
const potGenerator=function(K,G){return K.T.Dl({Zj:G,B2:{V5:G,k$P:150,Tk:!0,S6:!0}})};
const K={T:{}};
K.T.Dl=function(K){return Gx(this,yjE(K),!0)};
yjE=function(K){var G={Zj:K.Zj,Fh:K.Fh,A$:!0,SO:!0};K.B2&&(K=K.B2,G.B2={V5:K.V5,Tk:K.Tk,S6:K.S6});return G};
Gx=function(K,G,E){return m6L(K,G,E)}
m6L=function(K,G,E){var L={stack:[],error:void 0,hasError:!1};try{return BS(vYE(L,new NR(K.logger,K.L,K.state)),function(){return EW(K,G)},E)}catch(O){L.error=O,L.hasError=!0}finally{oYe(L)}};
EW=function(K,G){return G.Fh?G.Fh:G.Zj?fx(K.logger,function(){return G.Fh=xB(G.Zj)},"c"):[]};
xB=function(K){return globalThis.TextEncoder?(new TextEncoder).encode(K):g.q4(K)};
NR=function(K,G,E){px.call(this,K);this.U=G;this.clientState=E;this.T="S";this.W="q"};
NR.prototype.dispose=function(){this.NP||(this.NP=!0)};
NR.prototype.a8=function(K){var G=K();if(G.length>118)throw new yP(19,"DFO:Invalid");K=Math.floor(Date.now()/1E3);var E=[Math.random()*255,Math.random()*255],L=E.concat([this.U&255,this.clientState],[K>>24&255,K>>16&255,K>>8&255,K&255]);K=new Uint8Array(2+L.length+G.length);K[0]=34;K[1]=L.length+G.length;K.set(L,2);K.set(G,2+L.length);G=K.subarray(2);for(L=E=E.length;L<G.length;++L)G[L]^=G[L%E];return K};
px=function(K){this.addOnDisposeCallback=function(K,G){this.NP?G!==void 0?K.call(G):K():(this.vZ||(this.vZ=[]),G&&(K=K.bind(G)),this.vZ.push(K))};g.X.call(this);var G=this;this.logger=K;this.C=new g.tk;this[fIQ]=this.dispose;this.addOnDisposeCallback(function(){cX(G.C.promise);G.C.reject()})};
NR.prototype.Dl=function(K,G){var E=this.a8(K);G==null||G(E);return fx(this.logger,function(){return g.vq(E,2)},this.W)};
const g={};g.X=function(){this.NP=this.NP;this.vZ=this.vZ};
g.q4=function(K){for(var G=[],E=0,L=0;L<K.length;L++){var O=K.charCodeAt(L);O<128?G[E++]=O:(O<2048?G[E++]=O>>6|192:((O&64512)==55296&&L+1<K.length&&(K.charCodeAt(L+1)&64512)==56320?(O=65536+((O&1023)<<10)+(K.charCodeAt(++L)&1023),G[E++]=O>>18|240,G[E++]=O>>12&63|128):G[E++]=O>>12|224,G[E++]=O>>6&63|128),G[E++]=O&63|128)}return G};
g.vq=function(K,G){G===void 0&&(G=0);CJY();G=F6M[G];for(var E=Array(Math.floor(K.length/3)),L=G[64]||"",O=0,y=0;O<K.length-2;O+=3){var D=K[O],S=K[O+1],M=K[O+2],C=G[D>>2];D=G[(D&3)<<4|S>>4];S=G[(S&15)<<2|M>>6];M=G[M&63];E[y++]=""+C+D+S+M}C=0;M=L;switch(K.length-O){case 2:C=K[O+1],M=G[(C&15)<<2]||L;case 1:K=K[O],E[y]=""+G[K>>2]+G[(K&3)<<4|C>>4]+M+L}return E.join("")};

var F6M={},m7=null;CJY=function(){if(!m7){m7={};for(var K="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),G=["+/=","+/","-_=","-_.","-_"],E=0;E<5;E++){var L=K.concat(G[E].split(""));F6M[E]=L;for(var O=0;O<L.length;O++){var y=L[O];m7[y]===void 0&&(m7[y]=O)}}}};
g.tk=function(){var K=this;this.promise=new Promise(function(G,E){K.resolve=G;K.reject=E})};
fIQ=Symbol.dispose;
vYE=function(K,G){if(G!==null&&G!==void 0){if(typeof G!=="object"&&typeof G!=="function")throw new TypeError("Object expected.");if(E===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");var E=G[Symbol.dispose]}if(typeof E!=="function")throw new TypeError("Object not disposable.");K.stack.push({value:G,dispose:E,async:!1})}return G};
BS=function(K,G,E,L){return fx(K.logger,function(){return E?K.Dl(G,L):K.a8(G,L)},K.T)};
fx=function(K,G,E){var L=It();G=G();return G};
It=function(){return Date.now()};
oYe=function(K){function G(y){K.error=K.hasError?new SuppressedError(y,K.error,"An error was suppressed during disposal."):y;K.hasError=!0}
function E(){for(;L=K.stack.pop();)try{if(!L.async&&O===1)return O=0,K.stack.push(L),Promise.resolve().then(E);if(L.dispose){var y=L.dispose.call(L.value);if(L.async)return O|=2,Promise.resolve(y).then(E,function(D){G(D);return E()})}else O|=1}catch(D){G(D)}if(O===1)return K.hasError?Promise.reject(K.error):Promise.resolve();
if(K.hasError)throw K.error;}
var L,O=0;E()};
potGenerator(K,id);


//SignatureTimestamp
const signatureTimestamp=()=>{return 20174};signatureTimestamp()