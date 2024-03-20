const gma = /^[\w.]*$/
const signatureTimestamp = 19800

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
	const url = orgaCompose(m.ZC,m.fG,m.s)
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
	a={KX:!1,ZC:"",fG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.KX=!0;
a.ZC=b.url;
a.fG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
jP.kQ(a,3);
jP.ju(a,30);
jP.ju(a,11);
jP.FV(a,42);
jP.ju(a,52);
jP.ju(a,19);
jP.FV(a,47);
return a.join("")
}

var jP={kQ:function(a,b){a.splice(0,b)},
ju:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
FV:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(""),c=[-611967718,-1240598555,197634253,function(d,e){e.splice(e.length,0,d)},
"CBeJzuN",function(d,e,f,h,l,m){return e(h,l,m)},
1878808706,-1242889355,1518177822,-1553572530,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1833273292,1712330731,933175767,function(d,e,f,h,l,m,n){return d(l,m,n)},
-647807391,function(d,e,f){var h=e.length;f.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},d.split(""))},
null,722828283,2040634059,594208396,-1787356797,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
"unshift",function(d){d.reverse()},
-1053911549,1282905655,/(;\/)[//\\][,]/,null,function(d,e,f,h,l){return e(f,h,l)},
2090724161,function(d,e,f,h,l,m,n,p,q,r){return e(l,m,n,p,q,r)},
function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
b,1104091685,b,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
1414953777,-2135712415,/\/(),;([;[]((")))/,"NRtz",-1363286528,-1934622080,383817596,2061381493,129503702,b,-273496343,",(,\\},\\",-32512524,795163760,null,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
function(d,e){d.push(e)},
1706268970,933763383,-1124556921,1211784336,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
-230282910,1612651595,-1753374575,1571974782,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
"unshift",function(d,e){e.splice(e.length,0,d)},
1752306407,1515468218,-2004152484,function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
-861679924,316568313,1253082995,-1217834639,1180972067,-1262267983,1808941676,-1790004519,-954012695,-1360010279,1650536636,1878808706,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])}];
c[17]=c;c[30]=c;c[53]=c;try{try{(-8<=c[74]||((0,c[23])(c[81],c[48]),0))&&(0,c[244*Math.pow(3,3)+-6528])(c[48],c[64]),c[2]>=30600-Math.pow(3,3)+-30578&&(-5>c[0]?(0,c[71])(c[37],c[Math.pow(5,2)-186- -236]):(0,c[85])(c[53])),4!=c[39]&&(7!==c[83]||((0,c[5])((0,c[Math.pow(1,1)-53+68])(c[4],(0,c[65])(),c[35]),c[23],(0,c[34])((0,c[66-Math.pow(1,3)+-34])((0,c[23])(c[9],c[48]),c[16],c[42],(0,c[54])(),c[35]),c[31],(0,c[85])(c[17]),c[38],c[35],c[77]),c[68],c[48]),0))&&((((0,c[84])(c[17],c[20]),c[80])(c[33],
c[52]),c[20])(c[13],c[8]),c[1])((0,c[80])(c[31],c[15]),c[17+Math.pow(4,5)+-1022],(0,c[20])(c[49],c[28]),c[35],c[44]),-5!=c[59]&&(4!==c[74]||(((0,c[80])(c[26],c[72]),c[34])(c[31],c[68]),0))&&(0,c[Math.pow(4,2)+-28215+28226])((0,c[19])(c[48],c[44]),c[20],c[33],c[74]),-3!=c[42]&&(c[47]>new Date("1970-01-01T10:29:59.000+10:30")/1E3&&((0,c[29])((0,c[22])(c[-34848+Math.pow(1,5)- -34873]),c[27],((0,c[1])((0,c[81])(c[33]),c[19],(0,c[12])(c[38],(0,c[6])(),c[31]),c[59],c[33]),c[19])(c[84],c[26]),(0,c[1])((0,c[12])(c[62],
(0,c[61])(),c[31]),c[56],(0,c[10])(c[12],(0,c[80])(c[49],c[70]),(0,c[81])(c[31]),(0,c[12])(c[39],(0,c[18])(),c[33]),c[21],(0,c[61])(),c[33]),c[13],c[79]),(0,c[34])(c[13],c[54]),c[81],c[13]),"null")||(((((((0,c[19])(c[69],c[33]),((0,c[81])(c[13]),(0,c[34])(c[72],c[24]),c[18])(c[72],c[45]),c[51])(c[72],c[10]),c[54])(c[36],c[-155+23*Math.pow(2,3)]),c[22])(c[83],(0,c[71])(),c[36]),(0,c[1])(c[83],c[72]),c[54])(c[72],c[43]),c[0])(c[8])>=(0,c[65])(c[5],(0,c[71])(),c[10])>=(0,c[22])(c[15],c[9]))*(0,c[73])(c[77],
c[62])),(-5!==c[52]||((0,c[78])(c[new Date("1970-01-01T06:30:46.000+06:30")/1E3]),0))&&(0,c[16])(c[46],c[new Date("1970-01-01T01:30:55.000+01:30")/1E3]),c[70]<new Date("1969-12-31T12:15:07.000-11:45")/1E3&&(7>=c[45]?(((0,c[23])((0,c[30])(c[46])&(0,c[8])(c[36],(0,c[47])(),c[41]),c[78],c[41]),c[53])(c[82],c[33]),c[-255*Math.pow(8,5)- -8355848])(c[36],(0,c[47])(),c[82]):((((0,c[53])(c[22],c[19]),c[83])(c[81],c[49]),c[43])(c[6],(0,c[49])(),c[29]),(0,c[65])(c[44]),(0,c[35])(c[53],c[14]))),-5!=c[8]&&(1<
c[52]||(((((0,c[64])(c[44],c[9]),(((0,c[54])(c[73],c[20]),c[14])(c[36],c[2]),c[14])(c[28*Math.pow(new Date("1970-01-01T05:30:08.000+05:30")/1E3,5)+-917496],c[31]),c[9])(c[8]),c[81])((0,c[73])(c[61],c[58]),c[23],c[10],c[33]),c[47])(c[52],c[43]),0))&&(0,c[81])(((0,c[79])(c[58]),(0,c[55])((0,c[73])(c[63],c[10]),c[66],(0,c[66])(c[29],(0,c[60])(),c[10]),c[5],(0,c[72])(),c[10]),(0,c[73])(c[24],c[58]),c[66])(c[4],(0,c[60])(),c[58])%(0,c[73])(c[112-Math.pow(6,3)+136],c[52]),c[73],c[21],c[10]),-5>c[13]&&(0,c[81])((0,c[73])(c[7],
c[58]),c[73],c[49],c[10])}catch(d){(0,c[73])(c[11],c[52]),(0,c[73])(c[71],c[80]),(0,c[64])(c[74],((((0,c[79])(c[56%Math.pow(1,4)+10]),c[new Date("1970-01-01T07:28:10.000+07:30")/1E3*82+Math.pow(8,5)+-23682])(c[4],(0,c[53])(),c[58]),c[23])(c[52],c[78]),c[66])(c[75],(0,c[16])(),c[52]),(0,c[73])(c[19],c[67]),(0,c[76])(c[15],c[50]),c[67],c[85])}}catch(d){return"enhanced_except_2JoBp-X-_w8_"+a}return b.join("")};