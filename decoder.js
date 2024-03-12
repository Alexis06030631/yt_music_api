const gma = /^[\w.]*$/
const signatureTimestamp = 19793

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
	const url = orgaCompose(m.TC,m.bG,m.s)
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
	a={HX:!1,TC:"",bG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.HX=!0;
a.TC=b.url;
a.bG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
lP.wO(a,3);
lP.EA(a,18);
lP.Xb(a,52);
lP.EA(a,46);
lP.wO(a,2);
lP.Xb(a,24);
lP.Xb(a,64);
lP.Xb(a,24);
lP.wO(a,1);
return a.join("")
}

var lP={wO:function(a,b){a.splice(0,b)},
Xb:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
EA:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(""),c=[460010310,498347907,-1563224800,-1615041636,"ZnQGjOU",-1842643552,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e,f,h,l,m,n,p,q,r,t){return f(m,n,p,q,r,t)},
-529441369,null,601150421,-527241677,875956090,-990693302,-1142036610,function(d,e,f,h,l,m){return e(h,l,m)},
1554318801,function(d){d.reverse()},
-1877220322,-392182146,1917427555,-1113886692,b,-1086168903,-1551887791,293736702,null,-969526528,134811742,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
1124466541,1894792545,-1380627591,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-680270635,95349949,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
-2135551576,127182862,-1489935436,1309794442,-1160763,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-1736814578,1427044769,-648957372,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
1090582479,b,-380001831,-1111052345,-1427827644,"(]'\"'/",552689151,",54];c[53]=c;",function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e){0!=e.length&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
607965841,1023618648,-1898931885,-1160763,1554318801,-1709081626,1210657617,-441527794,-173621714,-1945696535,941044307,null,-380001831,1318831565,function(d,e,f,h,l,m,n,p,q){return f(n,p,q)},
function(d,e){d.splice(d.length,0,e)},
1942894226,-668004885,function(d,e,f,h,l){return e(f,h,l)},
function(d,e,f){var h=d.length;f.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},e.split(""))},
b,480864288,1620711719,471687084,717963211,134811742,590258989,742137803,function(d,e){if(0!=e.length){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
function(d,e,f,h,l,m,n,p){return d(m,n,p)},
-384283643];c[9]=c;c[26]=c;c[69]=c;try{try{7!==c[37]&&(0,c[57])(c[26],c[31]),0!==c[5]&&(0,c[11])(c[18],c[71]),3!=c[-180*Math.pow(6,2)- -6514]&&(9<c[75]&&((((((0,c[12])(c[129-Math.pow(3,1)-102],c[13]),c[13])(c[72],c[54]),c[Math.pow(3,1)-185- -185])(c[15],c[20]),c[24])(c[36],c[34]),c[78])(c[72],c[10])>>(0,c[8])((0,c[58])(c[70],c[67]),c[5],c[48],c[64])^((0,c[51])(c[57],c[44]),c[-7803+Math.pow(7,5)+-8953])(c[24],c[70]),[])||(((0,c[78])(c[52],c[44]),c[37])(((0,c[58])(c[10],c[11]),c[51])(c[56],c[70]),c[51],
((0,c[51])(c[16],c[44]),c[78])(c[7],c[31]),c[71],c[1]),c[8])((0,c[58])(c[48],c[54]),c[58],c[10],c[33])%(0,c[58])(c[1],c[27])),0<c[11]&&(0,c[Math.pow(4,2)+95-82])(((0,c[39])(c[1]),c[39])(c[25],c[59]),(0,c[38])((0,c[86])(c[5],c[15]),c[3],c[31],c[new Date("1969-12-31T13:30:10.000-10:30")/1E3]),c[46],(0,c[17])((0,c[67])(c[54],c[6]),c[87],(0,c[250+Math.pow(6,2)-240])((0,c[66])(c[new Date("1970-01-01T07:45:23.000+07:45")/1E3],c[8]),c[16],c[7]),c[79],c[52]),(0,c[44])((0,c[8])(),c[61],c[79]),(0,c[53])(c[84],
c[83]),c[23],c[14],c[80]),-8>c[29]&&(5>c[19]?(0,c[55])(c[2],(0,c[2])(c[36+Math.pow(6,4)%143],c[332-68*Math.pow(4,1)]),(0,c[Math.pow(2,3)+4050-4015])(((0,c[44])((0,c[34])(),c[61],c[45]),c[44])((0,c[90])(),c[61],c[45]),c[44],(0,c[12])(),c[61],c[79]),(0,c[72])((0,c[54])(c[new Date("1970-01-01T10:16:23.000+10:15")/1E3]),c[44],(0,c[new Date("1970-01-01T04:45:02.000+04:45")/1E3])(c[14],c[5]),(0,c[8])(),c[new Date("1970-01-01T05:01:01.000+05:00")/1E3],c[45]),(0,c[2])(c[45],c[82]),c[14],c[25]):(0,c[39])((0,c[74])(c[79]),
(0,c[72])((0,c[54])(c[36]),c[36],(0,c[68])(c[41],c[24]),c[45]),c[37],(0,c[51-Math.pow(4,1)%506])((0,c[67])(c[7],c[64]),c[56],c[44],c[26]),(0,c[5])(c[54],c[22]),(0,c[5])(c[20],c[70]),c[76],c[66]))}catch(d){(0,c[5])(c[45],c[83]),(0,c[77])(((0,c[56])(c[44],c[78]),c[new Date("1969-12-31T14:15:00.000-09:45")/1E3])(c[22],c[72]),c[14],(0,c[0])(c[70],c[41]),(0,c[50])(),c[88],c[70])}try{6<c[48]&&(6!==c[25]?(0,c[63])(c[58],c[44]):(0,c[14])((0,c[50])(),c[88],c[70])),9<c[68]?(0,c[0])(c[44],c[1]):(0,c[0])(c[83],
c[-13375- -166*Math.pow(3,4)]),7!=c[65]&&(0,c[6])((0,c[6])(((0,c[82])(c[13],c[1]),c[46])(c[5],c[54]),c[41],c[85],c[24]),c[41],c[20],c[58]),-2>c[68]&&(4>=c[69]||(((0,c[6])(c[33],c[32]),c[6])(c[33],c[49])^(0,c[6])(c[20],c[72])|(0,c[55])((0,c[78])(),c[38],c[20]),""))&&(0,c[27])(((0,c[77])(c[76],c[5-Math.pow(5,2)- -40]),c[46])(c[43],c[54]),c[13],(0,c[41])(c[54],c[68]),c[89],c[54])}catch(d){(0,c[77])(c[52],c[85]),(0,c[77])(c[2],c[63]),(0,c[25])(c[33]),(0,c[6])(c[85],c[30])}}catch(d){return"enhanced_except_0ZoBruX-_w8_"+
a}return b.join("")};