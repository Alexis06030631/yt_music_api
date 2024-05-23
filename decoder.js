const gma = /^[\w.]*$/
const signatureTimestamp = 19864

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
	const url = orgaCompose(m.GD,m.ZG,m.s)
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
	a={zY:!1,GD:"",ZG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.zY=!0;
a.GD=b.url;
a.ZG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
WO.FQ(a,3);
WO.mD(a,5);
WO.Wm(a,31);
WO.FQ(a,1);
return a.join("")
}

var WO={mD:function(a){a.reverse()},
Wm:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
FQ:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(""),c=[1648446838,822615768,null,-208482682,-1988322339,2001141950,-870262603,355235806,652023346,b,function(d,e){if(0!=e.length){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
298686940,"Qm3iIXG",434511922,b,function(d,e,f,h,l,m,n){return d(l,m,n)},
-2078188209,function(d,e,f,h,l,m,n,p,q,r,t,v,w){return d(l,m,n,p,q,r,t,v,w)},
function(d,e,f,h,l,m){return e(h,l,m)},
null,-1898254277,-187288466,776130817,-1723590387,1715573971,-942881529,function(d,e,f,h,l){return e(f,h,l)},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-1024719170,1697927674,",50];c[48]=c;",1410324628,-573764202,function(d,e){0!=e.length&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
-1909131782,1858722194,-1480427745,"split",-1044233992,function(d){d.reverse()},
2055607090,1069643943,1348569125,1727182015,-111072958,-1186366008,-1183278226,1315794252,923955712,-1734711092,-915175471,2078412301,-1172835939,-1161752629,-1018806098,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
-90710447,function(d,e,f){var h=f.length;e.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},d.split(""))},
-967254550,-662420470,-967254550,-80051017,function(d,e,f,h,l,m,n,p){return d(m,n,p)},
1639419959,']}],("',-582187326,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
477822635,-1348812906,null,-1076589740,1920889645,1573712798,b,-1417486177,1783291214,1584277416,1858722194,1403810043,-2134550888,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e}];
c[2]=c;c[19]=c;c[72]=c;try{try{-10!=c[77]&&(3===c[75]||(((0,c[84])(c[9],c[203-41*Math.pow(2,2)]),(0,c[58])(c[-14440-Math.pow(4,2)- -14532],c[82]),c[84])(c[9],c[31]),(0,c[42])(c[9]),0))&&(0,c[30])((0,c[58])(c[72],c[5]),c[18],(0,c[58])(c[9],c[Math.pow(8,4)+-19656+15563]),c[60],(0,c[36])(c[54],c[14]),c[12],c[14],(0,c[69])()),-1===c[43]&&(((((0,c[83])(c[9],c[-141- -148*Math.pow(1,2)]),c[26])((0,c[60])(c[40],c[14],(0,c[28])()),c[60],c[40],c[76],(0,c[85])()),c[83])(c[19],c[47]),(0,c[60])(c[40],c[new Date("1970-01-01T01:31:16.000+01:30")/
1E3],(0,c[28])()),c[58])(c[72],c[8]),{})||(0,c[30])((((0,c[84])(c[14],c[51]),c[36])(c[34],c[14]),c[10])(c[79],c[19])<=(0,c[84])(c[9],c[64]),c[26],(0,c[0])(c[16],c[72]),c[60],c[12],c[14],(0,c[69])()),(-10>=c[66]||((0,c[83])(c[76],c[48]),null))&&(0,c[83])(c[76],c[81]),(7!==c[66]||(((0,c[new Date("1970-01-01T04:45:26.000+04:45")/1E3])((0,c[new Date("1970-01-01T07:15:26.000+07:15")/1E3])((0,c[60])(c[40],c[76],(0,c[27])()),c[83],c[9],c[50]),c[29],c[72]),((0,c[26])((0,c[64458+-103*Math.pow(5,4)])(c[9],
c[35]),c[60],c[12],c[76],(0,c[27])()),(0,c[83])(c[14],c[24]),(0,c[60])(c[12],c[9],(0,c[27])()),c[71])(c[70],c[19]),c[60])(c[40],c[76],(0,c[27])()),0))&&(0,c[17])(c[15],(0,c[71])(c[20],c[14]),(0,c[84])(c[76],c[44]),(((0,c[71])(c[23],c[2]),c[10])(c[22],c[19]),c[10])(c[21],c[72]),c[84],(0,c[84])(c[76],c[61]),(0,c[58])(c[9],c[36]),(0,c[58])(c[2],c[27]),c[19],c[74])}catch(d){(0,c[69])(c[9],c[85],(0,c[78])())===(0,c[51])(c[28]),(0,c[69])(c[9],c[23],(0,c[8])()),(0,c[38])(c[18])}finally{c[10]===new Date("1970-01-01T08:15:08.000+08:15")/
1E3?(0,c[6])(c[new Date("1969-12-31T14:31:21.000-09:30")/1E3],c[41]):(0,c[19])(c[50],c[18])}try{(7===c[new Date("1970-01-01T05:00:56.000+05:00")/1E3]||(((0,c[67])(c[81],c[54]),c[80])(c[28]),((0,c[36])(c[28],c[63]),c[36])(c[52],c[14]),(0,c[53])(c[36],(0,c[48])(c[44],c[24]),(0,c[36])(c[40],c[75]),(0,c[43])(c[29],c[44]),c[60],c[69]),""))&&((((((0,c[16])(c[68],c[6]),c[3240-Math.pow(8,3)+-2718])(c[56]),c[16])(c[44],c[46]),c[28])(c[8],c[68],(0,c[37])()),c[28])(c[8],c[63],(0,c[37])()),c[80])((0,c[16])(c[40],
c[41]),c[10],c[63])|(0,c[28])(c[8],c[68],(0,c[36])()),0!=c[70]&&(-6>c[58]||((((((0,c[16])(c[40],c[43]),c[16])(c[63],c[55]),(0,c[28])(c[54],c[63],(0,c[49])()),c[28])(c[8],c[63],(0,c[49])()),c[80])((0,c[39])(c[34],c[40]),c[26],c[40],c[27]),c[39])(c[11],c[Math.pow(7,1)+2394+-2333]),void 0))&&(0,c[33])(c[83],(0,c[39])(c[82],c[68]),(0,c[80])((0,c[64])(c[17],c[68]),c[39],c[9682-Math.pow(3,3)-9632],c[73]),(0,c[39])(c[24],c[73]),((0,c[26])(c[68],c[21]),c[28])(c[8],c[63],(0,c[36])()),c[73]),-10<c[26]&&(0,c[5])(((0,c[5])((0,c[21])(c[27],
c[45]),c[59],c[12],c[40]),c[11])(c[69],c[63]),c[24],c[63],c[30])}catch(d){((0,c[4])(c[24],c[55],(0,c[65])()),(0,c[4])(c[64],c[74],(0,c[82])()),c[54])(c[18],c[331%Math.pow(2,5)- -39])}}catch(d){return"enhanced_except_mJsB5-T-_w8_"+a}return b.join("")};