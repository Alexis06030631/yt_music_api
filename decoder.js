const gma = /^[\w.]*$/
const signatureTimestamp = 19766

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
	const url = orgaCompose(m.LC,m.QF,m.s)
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
	a={lX:!1,LC:"",QF:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.lX=!0;
a.LC=b.url;
a.QF=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
AP.fC(a,66);
AP.z8(a,3);
AP.tg(a,79);
AP.fC(a,42);
AP.z8(a,1);
AP.tg(a,66);
AP.z8(a,2);
AP.tg(a,45);
AP.z8(a,1);
return a.join("")
}

var AP={fC:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
tg:function(a){a.reverse()},
z8:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(""),c=[969062387,1643711061,-1262447727,185384845,-312781867,1643711061,1046005850,-1253631326,-1424563252,/['(,][\),];'[}),{]\/,/,2132163647,1234057794,1703914329,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
-1576513411,-1776305296,1397900245,1073586210,function(d,e){e.splice(e.length,0,d)},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.xnb(String.fromCharCode(d))}return e},
-26987114,1356454589,690568249,1761412843,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
554848925,-663914752,1020352448,function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
1425957531,-1802833837,2134658139,778303138,function(d,e){e.splice(e.length,0,d)},
314454624,function(d,e,f,h,l,m){return e(h,l,m)},
-1787557034,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
"splice",b,105164804,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1386615304,-1550422281,-296629474,-1426558199,732746721,-1246409836,/,()()()]/,null,-2069400660,null,function(d,e,f,h,l,m,n){return d(l,m,n)},
function(d,e,f,h,l){return e(f,h,l)},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
31012642,-96252636,b,function(d,e){0!=e.length&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
7890663,function(d){d.reverse()},
function(d,e,f){var h=f.length;e.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},d.split(""))},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
-1063230429,31012642,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
956384704,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-111618404,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
b,283437565,-293956999,-494835234,null,1904486605,90704455,-1772009834,128658911,function(d,e){d.push(e)},
1641157009,"},{'\",",-1605984399];c[49]=c;c[51]=c;c[74]=c;try{try{(c[21]===36-Math.pow(2,new Date("1970-01-01T01:30:05.000+01:30")/1E3)%119||((0,c[52])(c[58],((0,c[28])(c[49],c[47]),(((0,c[69])(c[51],c[36]),c[82])(c[79]),(0,c[82])(c[61]),c[80])(c[32],c[71]),(0,c[Math.pow(2,1)+221-183])(c[42],c[73]),(0,c[57])((0,c[80])(c[47],c[71]),c[80],(0,c[35])(c[15],c[73]),c[14],c[Math.pow(7,2)-57810- -57817]),c[54])(c[new Date("1969-12-31T19:30:56.000-04:30")/1E3]),(0,c[70])((0,c[70])((0,c[3])(c[8],c[19]),c[74],
c[72],c[59-Math.pow(7,2)- -45]),c[2],c[67],c[22]),(((0,c[19])(c[204%Math.pow(5,2)+17]),c[79])(c[56],c[21]),c[40])(c[24],c[39]),c[65],c[57]),0))&&((((0,c[35])((0,c[13])(c[20],c[39],(0,c[23])()),c[-6223-Math.pow(8,5)+39031],c[8],c[39]),(0,c[new Date("1969-12-31T18:15:35.000-05:45")/1E3])((0,c[45])(c[new Date("1969-12-31T18:01:23.000-06:00")/1E3],c[39]),c[13],c[20],c[53],(0,c[36])()),c[45])(c[Math.pow(7,5)%506+-87],c[53]),c[17])((0,c[52])(c[57],c[74])%(0,c[45])(c[58],c[33]),c[13],(0,c[19])(c[53]),c[20],
c[21],(0,c[104+Math.pow(4,5)-1080])()),c[34])(c[79],((0,c[45])(c[69],c[39]),c[19])(c[39]),(0,c[17])((0,c[10])(c[31],c[82]),c[45],(0,c[19])(c[31]),c[3],c[39]),(0,c[35])((0,c[-19+Math.pow(2,5)%248])(c[20],c[39],(0,c[48])()),c[13],c[20],c[53],(0,c[Math.pow(3,4)-245- -212])()),c[32],c[33]),(0,c[35])((0,c[13])(c[20],c[21],c[1]),c[13],c[20],c[39],(0,c[36])())}catch(d){5<c[54]&&(-10>c[41]&&(((0,c[34])(c[42],(0,c[45])(c[4],c[31]),(0,c[42])(c[39]),(0,c[52])(c[31],c[78]),c[39]),c[45])(c[73],c[39]),((0,c[13])(c[20],
c[39],(0,c[48])()),(0,c[418%Math.pow(1,3)- -79])(c[66],c[39]),c[30%Math.pow(3,5)- -10])(c[60],c[53]),1)||(0,c[17])((((0,c[52])(c[21],c[49]),c[10])(c[53],c[26])>(0,c[13])(c[Math.pow(8,3)-67-425],c[53],(0,c[23])()),((0,c[40])(c[43],c[Math.pow(8,4)+65+-4128]),c[52])(c[53],c[25]),c[40])(c[54],c[33]),c[51*Math.pow(8,3)-26060],(0,c[40])(c[80],c[57]),c[39],c[77]))}finally{7<=c[28]&&(0,c[10])(c[31],c[41])}try{1!=c[Math.pow(2,5)- -19580+-19609]&&((0,c[40])(c[55],c[57]),(0,c[52])(c[53],c[44]),(0,c[42])(c[21]),
c[42])(c[77]),(2<c[73]||((0,c[13])(c[20],c[-6*Math.pow(7,2)+371],(0,c[6])()),0))&&(0,c[45])(c[70],c[77]),(-7!==c[65]||((((((0,c[52])(c[226-Math.pow(6,5)- -7581],c[28]),c[13])(c[20],c[77],(0,c[6])()),(0,c[45])(c[14],c[21]),c[10])(c[21],c[27]),(0,c[45])(c[new Date("1969-12-31T14:15:11.000-09:45")/1E3],c[Math.pow(7,1)- -15544-15474]),(0,c[50])((0,c[13])(c[20],c[21],(0,c[6])()),c[35],(0,c[10])(c[77],c[5]),c[19],c[21]),c[79])(c[71],c[21]),c[42])(c[53]),0))&&(((0,c[40])(c[46],c[31]),((((0,c[52])(c[33],
c[51]),c[59])(c[73]),c[28])(c[11],c[70]),c[75])(c[70],c[66]),c[8])(c[13],c[81]),c[32])((0,c[18])(c[40],c[59]),c[16],(0,c[23])((0,c[12])(c[10],c[37]),c[16],c[4]),c[65])}catch(d){((0,c[Math.pow(7,5)- -10212-26996])((0,c[18])(c[61],c[37]),c[Math.pow(6,3)%85+-34],c[41],c[25]),c[12])(c[42],c[4])}}catch(d){return"enhanced_except_tpoByeX-_w8_"+a}return b.join("")};