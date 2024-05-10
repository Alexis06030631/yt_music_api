const gma = /^[\w.]*$/
const signatureTimestamp = 19851

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
	const url = orgaCompose(m.kD,m.DG,m.s)
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
	a={YX:!1,kD:"",DG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.YX=!0;
a.kD=b.url;
a.DG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
XO.Mk(a,3);
XO.yA(a,17);
XO.h2(a,27);
XO.Mk(a,2);
XO.yA(a,2);
return a.join("")
}

var XO={h2:function(a){a.reverse()},
Mk:function(a,b){a.splice(0,b)},
yA:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(""),c=[-156717634,function(d,e){e.splice(e.length,0,d)},
-38772237,914450161,function(d,e,f,h,l){return e(f,h,l)},
-2122959672,function(d,e){0!=e.length&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
function(d){d.reverse()},
null,-13939473,-422970417,562108373,-468270890,1449401214,-684176901,-856394552,1385731772,-1766489151,-947534198,-1020465973,-2076419471,717066544,44524053,function(d,e){if(0!=e.length){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
658879667,537891203,null,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
1681721558,-1934090788,",52];c[51]=c;",1929992643,function(d,e,f){var h=d.length;e.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},f.split(""))},
1539611222,-1287140323,1519549866,-1221322956,-1654896781,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
904902003,1699691421,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-1056090721,-283908360,-86685299,994183712,1346056391,1129562520,b,-1233129180,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
861554819,-1495727193,307888722,650433386,1124057600,b,203835709,-2061342848,422771552,-81664816,-715871400,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
b,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
null,1673781422,100908084,-856394552,function(d,e,f,h,l,m){return e(h,l,m)},
-1359785970,100908084,-1748539887,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
-213476339,784657833,-629371014,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
"4Rxu",function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
109603907,-587452086];c[8]=c;c[26]=c;c[65]=c;try{try{-3!=c[3]?(0,c[4])((0,c[73])(c[65],c[72]),c[76],c[35]):((0,c[76])(c[44-305%Math.pow(8,1)]),c[19])((0,c[51])(),c[35],c[65]),6<=c[-8732-Math.pow(3,5)+new Date("1970-01-01T13:45:36.000+11:15")/1E3]&&(((0,c[56])((((0,c[76])(c[Math.pow(8,5)+91-32824]),c[64])(c[50],c[30]),c[10])(c[21],c[43]),c[64],(((0,c[73])((0,c[25])(c[new Date("1970-01-01T04:15:52.000+04:15")/1E3]),c[60],c[77],c[9]),c[64])(c[50],c[67]),c[19])((0,c[28])(),c[43],c[65]),c[35],c[4]),c[56])((0,c[10])(c[41],
c[52]),c[19],(0,c[76])(c[13]),(0,c[51])(),c[43],c[65]),1)||(((((0,c[Math.pow(4,1)-20880- -20951])(c[46],c[77]),c[75])(c[Math.pow(3,2)+23+-27],c[35]),((0,c[66])(c[57],c[35]),c[89-334%Math.pow(2,5)])(c[74],c[0]),c[76])(c[35]),c[73])((0,c[73])((0,c[66])(c[61],c[35]),c[75],c[36],c[43]),c[66],c[45],c[74]),c[22])((0,c[26])(c[43],c[13]),c[76],(0,c[35])((0,c[65])(),c[51],c[81]),c[66],c[new Date("1969-12-31T22:15:38.000-01:45")/1E3]),10!=c[24]&&((0,c[9])(c[58],c[66]),"null")||(0,c[80])(c[59],c[39]),-8!==c[58]&&
(2>c[56]?((((0,c[35])((0,c[53])(),c[66],c[81]),(0,c[10])(c[11]),c[35])((0,c[65])(),c[51],c[81]),(0,c[7])((0,c[0])(c[49],c[51]),c[35],(0,c[65])(),c[66],c[81]),(0,c[26])(c[5],c[29]),c[26])(c[64],c[59]),c[10])(c[51]):(0,c[30])(((0,c[41])(c[59]),(0,c[26])(c[34],c[29])),((0,c[26])(c[42],c[29]),(0,c[53])(c[48],c[59]),c[10])(c[11]),c[9],(0,c[55])(c[new Date("1970-01-01T05:18:20.000+05:15")/1E3*-47+Math.pow(2,2)- -9449],c[15]),c[51+Math.pow(2,2)%500],(0,c[72])(c[64],c[15]),c[7],c[73])),-3==c[26]&&(((0,c[46])((0,c[14])(),
c[15],c[32]),c[1])(c[15],c[21]),1)||((0,c[28])(c[75],c[22]),c[5])(c[30],c[27])}catch(d){((0,c[55])(c[68],c[15]),c[46])((0,c[58])(),c[22],c[32])>(0,c[46])((0,c[58])(),c[15],c[32]),(0,c[1])(c[73],c[67])>>>(0,c[55])(c[69],c[15])}try{7>=c[63]&&(0,c[Math.pow(2,2)+79+new Date("1969-12-31T13:13:46.000-10:45")/1E3])((0,c[74])((0,c[55])(c[38],c[30]),c[28],c[63],c[15]),c[5],(0,c[9])((0,c[5])(c[73],c[25]),c[31],(0,c[70])(c[78],c[72]),c[30]),c[48],c[40]),(c[58]!=Math.pow(7,1)+5-12||((0,c[57])((0,c[65])(c[78],
c[25]),c[11],(0,c[11])(c[9],c[51]),c[40],c[51]),0))&&(0,c[57])((0,c[76])(c[21],c[51]),c[Math.pow(6,1)+-46161- -46166],(0,c[76])(c[53],c[Math.pow(2,2)%494- -10]),c[Math.pow(2,5)%213- -22],c[14]),-8!==c[73]?(0,c[74])((0,c[38])(c[12],c[75]),c[52],c[69],c[26])|(((0,c[26])(c[40],c[64]),c[34])(c[34],c[59]),(0,c[39])(c[52],c[41])):(0,c[60])((0,c[40])(c[41]),((0,c[1])(c[49],c[14]),c[28])(c[7],c[10+Math.pow(2,3)+9]),c[37],(0,c[28])(c[38],c[33]),c[24],c[81],c[77]),(0,c[65])((0,c[13])(),c[7],c[8]),((0,c[1])(c[45],
c[7]),c[56])(c[32],c[14])}catch(d){(0===c[54]||((0,c[1])(c[61],c[41]),void 0))&&(0,c[71])(c[33067-153*Math.pow(6,3)],c[69])}}catch(d){return"enhanced_except_i5sB9OT-_w8_"+a}return b.join("")};