const gma = /^[\w.]*$/
const signatureTimestamp = 19999

/**
 * Decode the string with the given separator
 * @param a
 * @return {*}
 */
function urlDecode(a) {
	"?" == a.charAt(0) && (a = a.substr(1));
	return separate_data_url(a, "&")
}

/**
 * Decode the string if match the regex
 * @param a
 * @return {*|string}
 */
function decodeURI_isRequire(a) {
	return a && a.match(gma) ? a : decodeURIComponent(a)
}


function decodeURI_YT(a) {
	return decodeURIComponent(a.replace(/\+/g, " "))
}

/**
 * Decompose the string with the given separator
 * @param a
 * @param b
 * @return {*}
 */
function separate_data_url(a, b) {
	b = a.split(b);
	let c, d, e;
	for (c = {}, d = 0, e = b.length; d < e; d++) {
		const f = b[d].split("=");
		if (1 == f.length && f[0] || 2 == f.length) {
			try {
				const h = decodeURI_isRequire(f[0] || "")
				const l = decodeURI_isRequire(f[1] || "");

				if (h in c) c[h] = [c[h], l]
				else c[h] = l
			} catch (q) {
				throw q
			}
		}
	}
	return c
}

function orgaCompose(a, b, c) {
	b = void 0 === b ? "" : b;
	c = void 0 === c ? "" : c;
	a = {
		B:a,
		j:{
			alr: "yes",
			c: "WEB_REMIX"
		}
	};
	if(c) {
		c = keyDecrypt(decodeURIComponent(c))
		a.j[b] = encodeURIComponent(c)
	}
	return a
}

function decode(format){
	let m, url = {}
	if (!format.url) {
		m = mapDecompose(format)
		url = orgaCompose(m.VE,m.pI,m.s)
	} else {
		url.B = format.url
		url.j = {}
	}

	// extract every params of url and add params to object
	const urlSplit = url.B.split('?')
	url.B = urlSplit[0]
	Object.assign(url.j, separate_data_url(urlSplit[1], '&'))

	url.j.n = fastDownload(url.j.n)
	return buildUrl(url.B, url.j)
}

function buildUrl(url, params){
	const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
	return url + '?' + queryString;
}

module.exports = {
	decode,
	signatureTimestamp
}


function mapDecompose(a) {
	let b = a.signatureCipher;
	a={FZ:!1,VE:"",pI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.FZ=!0;
a.VE=b.url;
a.pI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
JL.Hv(a,55);
JL.rF(a,47);
JL.pU(a,3);
JL.Hv(a,67);
JL.pU(a,1);
JL.Hv(a,37);
JL.rF(a,53);
return a.join("")
}

var JL={rF:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
Hv:function(a){a.reverse()},
pU:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[2135834249,890973030,b,2061846653,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
-969759812,-793157585,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.j(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
b,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
1140645298,88701584,174153184,410540397,139361489,function(d,e,f,h,l){return e(f,h,l)},
"debugger",null,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
"UYJKgF",894411871,572285546,";\u22e5/",2001380852,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
b,-952281125,174153184,1639901190,1726878439,-1577593346,function(d,e,f,h,l,m,n){return d(l,m,n)},
-359410019,1959065944,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
"\u22d3\"'[",1628583387,359414292,725888586,function(d,e){d.splice(d.length,0,e)},
-1422647411,-535568691,-1977199732,-1451787583,"WL953",1237691493,-346418174,1917682625,function(d,e,f,h,l,m){return e(h,l,m)},
/\\,\);',\((;),\//,-790186973,1756857464,1880080064,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-1547738364,1393675482,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-800372964,2041425390,function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
function(d,e,f){var h=f.length;d.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},e.split(""))},
null,-441609494,1049101386,1639053323,979186050,-1620251775,function(d){d.reverse()},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
-248383766,null,-986631169,92159057,-993469412,1295926798,1665930158,317802835];c[17]=c;c[62]=c;c[72]=c;try{try{c[55]!==-6&&(0,c[60])(c[17],c[32])%((0,c[68])(c[2])^(0,c[59])(c[45],c[72])),c[55]!==-4&&((((((0,c[59])(c[29],c[8]),c[60])(c[72],c[21]),c[4])(c[25],c[6]),(0,c[68])(c[2]),c[34])(c[25],c[57]),c[34])(c[62],c[30]),[])||(0,c[29])(c[66],(0,c[2])(c[6],c[24]),(0,c[59])(c[0],c[17],(0,c[22])()),(0,c[58])(c[0],c[9]),c[6])<<(0,c[57])(c[78],c[15])>>>(0,c[2])(c[0],c[77])}catch(d){(0,c[13])((0,c[59])(c[6],
c[14],(0,c[22])()),c[59],c[23],c[17],(0,c[54])())}finally{c[35]!==7&&((((((0,c[58])(c[23],c[72]),c[57])(c[3],c[23]),c[68])(c[70],c[50]),c[23])(c[56],c[31]),c[54])(c[46],c[new Date("1969-12-31T12:15:59.000-11:45")/1E3]),c[2])(c[37],c[52]),c[10]!=-8&&((0,c[71])(c[76],c[74]),(0,c[2])(c[19],c[58])<(0,c[2])(c[29],c[78]),/()"()/)||((0,c[57])(c[44]),c[31])((0,c[23])(c[68],c[76]),c[46],c[35],c[21])}try{c[40]!==-6?(0,c[31])(((0,c[22])(c[45],c[68]),c[23])(c[25],c[56]),c[22],c[4],c[60]):((0,c[31])((0,c[46])(c[25],
c[13]),c[24],c[68],c[59],(0,c[19])()),(0,c[23])(c[44],c[41])),c[45]==-9?(0,c[31])((0,c[31])((0,c[57])(c[68]),c[24],c[50],c[59],(0,c[61])()),c[33],c[35],c[17]):(0,c[31])((0,c[31])((0,c[33])(c[60],c[26]),c[23],c[6],c[12]),c[31],c[33],c[16]),c[16]>-2&&(c[12]===-3||((0,c[71])((0,c[37])(c[75],c[12]),c[2],c[22],c[65],(0,c[45])()),0))&&(0,c[9])((0,c[10])(c[28]),c[55],c[13],c[63]),c[30]!=-6&&(c[20]==7&&((0,c[29])((0,c[24])(c[46],c[49]),c[69],(0,c[2])(c[22],c[40],(0,c[74])()),c[24],(0,c[2])(c[28],c[40],(0,c[39])()),
c[22],c[72]),1)||((((0,c[60])(c[3],c[19]),c[10])(c[46]),c[0])(c[59],c[28]),c[55])(c[13],c[17])),c[37]>=-3&&(0,c[77])(c[44],c[63]),c[69]<2&&(c[75]!=3||(((0,c[31])((0,c[23])(c[60],c[49]),c[46],c[35],c[5]),c[46])(c[44],c[79]),0))&&((0,c[46])(c[68],c[9]),c[33])(c[50],c[30])>=(0,c[24])(c[68],c[62],(0,c[61])()),(c[79]>=-6||((0,c[31])((0,c[33])(c[44],c[54]),c[Math.pow(8,new Date("1969-12-31T16:15:02.000-07:45")/1E3)*-145- -9304],c[50],c[59],(0,c[18])()),new Date("1970-01-01T01:15:00.000+01:15")/1E3))&&((0,c[23])(c[35],
c[28]),c[24])(c[44],c[59],(0,c[67])()),c[38]!=5?(0,c[23])(c[68],c[40]):(0,c[32])(c[25]),(0,c[31])(((0,c[24])(c[68],c[59],c[36]),(0,c[32])(c[60])),c[33],c[68],c[29])}catch(d){c[76]!==0&&(c[4]==5&&((0,c[24])(c[50],c[6],(0,c[61])()),(0,c[33])(c[35],c[34]),"9")||((0,c[32])(c[35]),(0,c[58])(c[25],c[45])))}}catch(d){return"enhanced_except_n5wB4OP-_w8_"+a}return b.join("")};