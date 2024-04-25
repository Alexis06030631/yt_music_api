const gma = /^[\w.]*$/
const signatureTimestamp = 19836

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
	const url = orgaCompose(m.XC,m.oG,m.s)
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
	a={LX:!1,XC:"",oG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.LX=!0;
a.XC=b.url;
a.oG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
dP.gv(a,56);
dP.gv(a,45);
dP.eO(a,1);
dP.TO(a,77);
return a.join("")
}

var dP={TO:function(a){a.reverse()},
gv:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
eO:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(""),c=[function(d,e){d.splice(d.length,0,e)},
function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
444330575,732083108,1808295797,1504682851,",,{,,u",164636197,-297830796,function(d){d.reverse()},
-898841784,456536566,1693107292,-604897094,-1505386856,-1741095484,null,b,837235499,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
1553162144,-1263852638,-859656924,-1357982051,1648345226,function(d,e){0!=e.length&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
null,1789167763,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
1027256324,27217903,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
1027124708,-1217522411,function(d,e,f,h,l,m,n,p,q,r,t){return f(m,n,p,q,r,t)},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-1281714369,-657211176,1045448714,-254045128,function(d,e,f,h,l){return e(f,h,l)},
1638792699,-1597947087,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
"SM-_",null,b,1816308820,1711793825,function(d,e,f,h,l,m){return e(h,l,m)},
-370454131,-1211461180,1566566068,-1406124016,",,{,,u",-1128614382,1896979162,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
358521328,-726006793,function(d,e){e.push(d)},
-306861784,-2041186556,")\\};",505631109,1502056169,-730324393,"},',[},",b,1339444816,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
1282059508,-1864466591,-628386588,function(d,e,f){var h=f.length;d.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},e.split(""))},
-2063085947,801856739,536362281,-484252295,-1652654103];c[16]=c;c[26]=c;c[45]=c;try{try{-6>=c[55]?(0,c[25])(c[20],c[45]):(0,c[28])(c[16],c[14]),8!=c[74]&&(((0,c[40])((0,c[1])(c[46],c[10]),c[43],c[69],c[7]),(0,c[43])(c[17],c[21]),c[49])((0,c[9])(c[45]),c[79],(0,c[31])((0,c[37])(c[35],c[17]),c[50],(0,c[77])(c[52],c[26]),c[52],c[46]),c[28],c[33]),(((0,c[34])((0,c[Math.pow(5,2)%136- -24])(c[45],c[48]),c[65],c[5]),c[49])(c[15],c[48]),c[49])(c[77],c[29]),8)||((((((((0,c[43])(c[29]),c[65])(c[5]),c[0])(c[48],
c[74]),c[1-Math.pow(7,4)+2449])(c[63],c[28]),(0,c[3])(c[56],c[28]),c[80])(c[57],c[30],(0,c[17])()),c[65])(c[57]),c[80])(c[57],c[54-Math.pow(6,2)+12],(0,c[39])()),c[25])((0,c[34])((0,c[80])(c[5],c[30],(0,c[17])()),c[43],c[28]),c[80],(0,c[3])(c[37],c[5]),c[5],c[30],(0,c[55])()),-8<=c[44]&&(-8==c[63]||((0,c[31])(c[58],c[41]),0))&&(0,c[10])(c[39],c[57]),6>c[2]&&(-9!==c[25]&&(((0,c[10])(c[15],c[76]),c[41])(c[58],c[80]),1)||(0,c[1])((0,c[51])(c[52],c[new Date("1970-01-01T08:01:16.000+08:00")/1E3]),c[47],
c[76],c[78],(0,c[6])())),-5>=c[62]&&(4>c[2]||(((((((0,c[Math.pow(2,4)+222-237])(((0,c[51])(c[50],c[76]),(0,c[51])(c[39],c[77]))<(0,c[51])(c[69],c[24]),c[47],c[24],c[78],(0,c[6])()),(0,c[47])(c[53],c[78],(0,c[22])()),c[51])(c[46],c[24]),(0,c[73])((0,c[13])(c[15],c[5])>=(0,c[10])(c[25]),c[47],(0,c[13])(c[24],c[49]),c[24],c[78],(0,c[64])()),c[1])((((0,c[13])(c[77],c[36]),(0,c[new Date("1970-01-01T04:45:32.000+04:45")/1E3])(c[76]),c[47])(c[53],c[78],(0,c[65])()),c[51])(c[60],c[15]),c[47],c[53],c[78],
(0,c[65])()),c[13])(c[53],c[75]),(0,c[48])(c[15],c[29]),(0,c[47])(c[53],c[78],(0,c[64])()),c[73])((0,c[47])(c[76],c[78],(0,c[65])()),c[10],(0,c[51])(c[43-Math.pow(1,1)%14],c[new Date("1969-12-31T15:31:17.000-08:30")/1E3]),c[25]),c[1])((0,c[47])(c[76],c[79-Math.pow(1,1)%269],(0,c[6])()),c[47],c[24],c[78],(0,c[Math.pow(3,2)-27+24])()),0))&&(((0,c[7])(((0,c[1])(((0,c[1])((0,c[18])(c[77],c[55]),c[10],c[53]),c[48])(c[77],c[3]),c[48],c[15],c[66]),c[Math.pow(3,3)- -2450+-2416])(c[35],c[77]),((0,c[16])(c[17],
c[77]),(0,c[48])(c[24],c[55])),c[1],(0,c[1])((0,c[1])((0,c[16])(c[57],c[24]),c[48],c[77],c[26]),c[51],c[62],c[76]),(((0,c[73])((0,c[16])(c[40],c[15]),c[10],(0,c[79])(c[76],c[71]),c[24]),c[197*Math.pow(6,4)-255264])(c[76],c[74]),c[3])(c[15],c[4]),(0,c[79])(c[76],c[82]),c[13],c[53],c[2]),((0,c[16])(c[19],c[53]),c[16])(c[11],c[15]),(0,c[1])((0,c[47])(c[174+Math.pow(6,4)-1394],c[78],(0,c[6])()),c[51],c[45],c[53]))*(0,c[13])(c[53],c[56]),(0,c[16])(c[80],c[53]))}catch(d){(0,c[73])((0,c[51])(c[72],c[Math.pow(8,
2)%4+24]),c[32],(0,c[79])(c[77],c[43]),c[24]),((0,c[48])(c[77],c[38]),c[13])(c[11%Math.pow(6,4)- -66],c[28])}}catch(d){return"enhanced_except__JoBg-X-_w8_"+a}return b.join("")};