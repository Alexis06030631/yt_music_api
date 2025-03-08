//potKey
const potGenerator=function(k,U){return k.Z.UC({qA:U,qM:{tO:U,RII:150,YS:!0,Yd:!0}})};
const k={Z:{}};
k.Z.UC=function(k){return Nz(this,IcR(k),!0)};
IcR=function(k){var U={qA:k.qA,Ww:k.Ww,iN:!0,Ct:!0};k.qM&&(k=k.qM,U.qM={tO:k.tO,YS:k.YS,Yd:k.Yd});return U};
Nz=function(k,U,D){return zwl(k,U,D)}
zwl=function(k,U,D){var b={stack:[],error:void 0,hasError:!1};try{return hY(DG(b,new U$(k.logger,k.N,k.state)),function(){return H6(k,U)},D)}catch(N){console.log(N);b.error=N,b.hasError=!0}finally{NR(b)}};
H6=function(k,U){return U.Ww?U.Ww:U.qA?oU(k.logger,function(){return U.Ww=kR(U.qA)},"c"):[]};
kR=function(k){return globalThis.TextEncoder?(new TextEncoder).encode(k):g.jB(k)};
U$=function(k,U,D){SC.call(this,k);this.W=U;this.clientState=D;this.Z="S";this.j="q"};
U$.prototype.dispose=function(){this.Uh||(this.Uh=!0,this.Sw())};
U$.prototype.w3=function(k){var U=k();if(U.length>118)throw new da(19,"DFO:Invalid");k=Math.floor(Date.now()/1E3);var D=[Math.random()*255,Math.random()*255],b=D.concat([this.W&255,this.clientState],[k>>24&255,k>>16&255,k>>8&255,k&255]);k=new Uint8Array(2+b.length+U.length);k[0]=34;k[1]=b.length+U.length;k.set(b,2);k.set(U,2+b.length);U=k.subarray(2);for(b=D=D.length;b<U.length;++b)U[b]^=U[b%D];return k};
SC=function(k){this.addOnDisposeCallback=function(k,U){this.Uh?U!==void 0?k.call(U):k():(this.Ij||(this.Ij=[]),U&&(k=k.bind(U)),this.Ij.push(k))};g.B.call(this);var U=this;this.logger=k;this.S=new g.MF;this[VuY]=this.dispose;this.addOnDisposeCallback(function(){Er(U.S.promise);U.S.reject()})};
U$.prototype.UC=function(k,U){var D=this.w3(k);U==null||U(D);return oU(this.logger,function(){return g.Vp(D,2)},this.j)};
const g={};g.B=function(){this.Uh=this.Uh;this.Ij=this.Ij};
g.Vp=function(k,U){U===void 0&&(U=0);cvv();U=Ecl[U];for(var D=Array(Math.floor(k.length/3)),b=U[64]||"",N=0,H=0;N<k.length-2;N+=3){var F=k[N],p=k[N+1],c=k[N+2],E=U[F>>2];F=U[(F&3)<<4|p>>4];p=U[(p&15)<<2|c>>6];c=U[c&63];D[H++]=""+E+F+p+c}E=0;c=b;switch(k.length-N){case 2:E=k[N+1],c=U[(E&15)<<2]||b;case 1:k=k[N],D[H]=""+U[k>>2]+U[(k&3)<<4|E>>4]+c+b}return D.join("")};

var Ecl={},nM=null;cvv=function(){if(!nM){nM={};for(var k="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),U=["+/=","+/","-_=","-_.","-_"],D=0;D<5;D++){var b=k.concat(U[D].split(""));Ecl[D]=b;for(var N=0;N<b.length;N++){var H=b[N];nM[H]===void 0&&(nM[H]=N)}}}};
g.MF=function(){var k=this;this.promise=new Promise(function(U,D){k.resolve=U;k.reject=D})};
VuY=Symbol.dispose;
DG=function(k,U){if(U!==null&&U!==void 0){if(typeof U!=="object"&&typeof U!=="function")throw new TypeError("Object expected.");if(D===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");var D=U[Symbol.dispose]}if(typeof D!=="function")throw new TypeError("Object not disposable.");k.stack.push({value:U,dispose:D,async:!1})}return U};
hY=function(k,U,D,b){return oU(k.logger,function(){return D?k.UC(U,b):k.w3(U,b)},k.Z)};
oU=function(k,U,D){var b=Ki();U=U();return U};
Ki=function(){return Date.now()};
NR=function(k){function U(H){k.error=k.hasError?new SuppressedError(H,k.error,"An error was suppressed during disposal."):H;k.hasError=!0}
	function D(){for(;b=k.stack.pop();)try{if(!b.async&&N===1)return N=0,k.stack.push(b),Promise.resolve().then(D);if(b.dispose){var H=b.dispose.call(b.value);if(b.async)return N|=2,Promise.resolve(H).then(D,function(F){U(F);return D()})}else N|=1}catch(F){U(F)}if(N===1)return k.hasError?Promise.reject(k.error):Promise.resolve();
		if(k.hasError)throw k.error;}
	var b,N=0;D()};

potGenerator(k,"CgttaUpaaVRYQXBBZyia7v28BjIiCgJGUhIcEhgSFhMLFBUWFwwYGRobHB0eHw4PIBAREiEgXA%3D%3D");
