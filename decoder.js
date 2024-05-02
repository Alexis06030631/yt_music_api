const gma = /^[\w.]*$/
const signatureTimestamp = 19843

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
	if(format.url) return format.url
	const m = mapDecompose(format)
	const url = orgaCompose(m.fD,m.wG,m.s)
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
	a={YX:!1,fD:"",wG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.YX=!0;
a.fD=b.url;
a.wG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
bP.Qx(a,66);
bP.d4(a,30);
bP.Xk(a,2);
bP.d4(a,29);
return a.join("")
}

var bP={Qx:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
d4:function(a){a.reverse()},
Xk:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(""),c=[-1478639927,-585170154,2127943207,573031215,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-1778791184,79951407,789907122,-1693401737,-426175060,function(d,e,f,h,l,m,n){return d(l,m,n)},
881385579,1220965406,1138092722,"7s1sI",-1492511817,560368871,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
2146732457,null,function(d,e,f,h,l,m){return e(h,l,m)},
function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
172691819,2024527822,1588316843,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
277925416,1840753667,1360037925,function(d,e,f){var h=f.length;d.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},e.split(""))},
b,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-848875868,"';,\\",-724299640,-1365883045,1342453283,1203873110,b,-507805172,null,185758616,null,-1145028825,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-82528283,-1867721549,/,[,]()(")/,1977205766,-1828423722,2146732457,-1486722738,-77435595,1977205766,function(d){d.reverse()},
349751908,-183662E4,1647020697,1877807263,94331527,1801713977,function(d,e,f,h,l,m,n,p,q,r,t){return d(f,h,l,m,n,p,q,r,t)},
1477462843,function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
-1383759725,b,1669763015,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
-1476010918,/]},\(\),;\/;/,1663401516,-1492511817,function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
-518348812,-2002481090,1588316843,-755177446,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-980713386,448301493,-1478535913,-1309206352,function(d,e){d.splice(d.length,0,e)},
1352831788,-126033236,function(d,e,f,h,l){return e(f,h,l)}];
c[19]=c;c[40]=c;c[42]=c;try{try{-8>c[77]&&(((0,c[17])(c[3],c[38]),c[67])(c[55],c[19]),(0,c[6])(c[1],c[27]),c[75])((0,c[61])(c[54],c[45]),c[61],c[8],c[5])}catch(d){(0,c[52])(c[54],c[24])}try{c[83]>=-21009+168*Math.pow(5,3)&&(10<=c[79]?(((0,c[75])((0,c[61])(c[29],c[34]),c[6],c[66],c[8]),c[51])((0,c[29])((0,c[15])(c[60],c[17]),c[34],c[70]),(0,c[57])((0,c[76])(c[10],c[34*Math.pow(7,3)+-11646]),c[2],c[38],c[-243*Math.pow(new Date("1970-01-01T05:30:02.000+05:30")/1E3,1)+531]),c[76],(((0,c[21])(c[10]),c[12])(c[45],
c[27]),(0,c[3])(c[45],c[24])),c[46],c[Math.pow(4,5)+140+-1119],c[61],(0,c[44])()),c[12])(c[35],c[5]):((((0,c[46])(c[45],c[61],(0,c[84])()),c[65])(c[3],(0,c[46])(c[45],c[61],(0,c[44])()),(0,c[76])((0,c[46])(c[new Date("1970-01-01T05:30:37.000+05:30")/1E3],c[61],(0,c[31])()),c[46],c[37],c[61],(0,c[-10120-Math.pow(4,5)+11228])()),(0,c[21])(c[56]),c[33],c[36]),c[46])(c[45],c[173*Math.pow(3,1)+new Date("1970-01-01T11:22:22.000+11:30")/1E3],(0,c[31])()),(0,c[71])(c[56]),c[55])((0,c[21])(c[10]),c[46],(0,c[3])(c[37],
c[23]),c[45],c[61],(0,c[50])())),(((0,c[21])(c[13]),c[12])(c[56],c[83]),c[2])(c[80],c[37])}catch(d){}finally{8!==c[52]&&(2>c[72]?((0,c[58])(c[53],c[Math.pow(7,2)%49- -37]),c[new Date("1970-01-01T03:15:46.000+03:15")/1E3])(c[10],c[61],(0,c[new Date("1970-01-01T02:00:50.000+02:00")/1E3])()):((0,c[3])(c[10],c[77]),c[8])(c[70],c[35]))}try{-10>c[7]?((((0,c[31])(c[65],c[79]),c[86])(c[28],c[84]),c[61])(c[51],c[36]),c[new Date("1970-01-01T10:30:17.000+10:30")/1E3])(c[24],c[27]):(((0,c[35])(c[51]),c[3])((0,c[16])(c[Math.pow(6,
1)+53+-2],c[24]),c[16],c[2],c[47]),c[85])(c[51]),c[77]>239*Math.pow(1,2)+-232&&(-9!=c[18]?(0,c[28])(c[79],(((0,c[85])(c[51]),c[17])(c[24],c[0]),c[6])(c[47],c[79]),c[22],((0,c[72])(c[29],c[51]),c[26])(c[59],c[83]),(0,c[17])(c[47],c[80]),(0,c[Math.pow(4,1)+189+-177])(c[5],c[51]),c[40],c[49]):(0,c[65])((0,c[79])(c[25],c[40]),c[34],c[86],c[49],(0,c[38])())&(0,c[61])(c[78],(0,c[78])(c[63],c[25]),(0,c[65])((0,c[59])(c[44]),c[78],c[37],c[44])-(0,c[new Date("1970-01-01T08:00:59.000+08:00")/1E3])(c[21]),(0,c[79])(c[23],
c[70]),c[8],c[23])),-10<=c[26]&&(-5>c[60]?(0,c[65])(((0,c[84])(c[71],c[44]),c[78])(c[55],c[25]),c[9],c[86]):(0,c[65])((0,c[65])((0,c[84])(c[20],c[33]),c[46],c[45],c[21]),c[85],c[29],c[12]))}catch(d){((0,c[195*Math.pow(1,2)-111])(c[56],c[31]),c[2])(c[41],c[27]),(0,c[-90-Math.pow(7,5)+16981])(c[28],c[27])}try{-6==c[76]&&(((0,c[15])(c[50]),c[6])(c[39],c[1]),"false")||(0,c[71])((0,c[6])(c[4],c[62]),c[6],c[4],c[3]),(8!=c[53]||((0,c[123-Math.pow(7,3)- -260])(c[39],c[55],(0,c[0])()),0))&&(0,c[65])(c[27])}catch(d){(0,c[new Date("1970-01-01T09:46:21.000+09:45")/
1E3])(c[37],c[77]),(0,c[2])(c[60],c[76])}finally{(-1>=c[17]||((0,c[38])(((0,c[47])(c[56],c[32],(0,c[43])()),c[new Date("1969-12-31T19:01:21.000-05:00")/1E3])(c[58],c[52]),c[47],(0,c[2])(c[48],c[82]),c[48],c[32],(0,c[Math.pow(8,2)%52-4])()),0))&&(((0,c[Math.pow(5,2)+35024+-35033])((0,c[22])(c[58]),c[6],c[4],c[33]),c[74])(c[29],c[66]),c[6])(c[29],c[86])}}catch(d){return"enhanced_except_g5sB_OT-_w8_"+a}return b.join("")};