const gma = /^[\w.]*$/
const signatureTimestamp = 20060

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
		url = orgaCompose(m.UE,m.tI,m.s)
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
	a={d_:!1,UE:"",tI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.d_=!0;
a.UE=b.url;
a.tI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
ZL.FL(a,51);
ZL.zf(a,42);
ZL.FL(a,19);
ZL.zf(a,44);
ZL.zf(a,39);
ZL.FA(a,3);
ZL.FL(a,60);
return a.join("")
}

var ZL={FL:function(a){a.reverse()},
FA:function(a,b){a.splice(0,b)},
zf:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[-1762978610,224018618,372078021,-1584087523,1631548760,-1523401041,function(d,e){e.length!=0&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-1875214889,-1221130857,1929975707,-1762978610,-1987230004,1562453898,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-460348276,1141163327,-1209828986,642821393,1673505824,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
1562453898,1039712780,198668272,733991645,/[;]'([,/,59,/]){/,-1775324511,-1662739629,-331919071,-504717341,function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
-1514776029,-2107135749,function(d,e,f,h,l,m){return e(h,l,m)},
null,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
1994577881,function(d,e,f){var h=d.length;f.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},e.split(""))},
1581593411,-81352162,-393381805,-1818317157,1582095365,-1669922702,-1501675767,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
283239203,2026246890,"pop",438638805,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
1885980169,function(d,e,f,h,l){return e(f,h,l)},
-1325120929,1598665835,1852467764,null,-998626056,-1916462760,b,null,42490944,-367416562,-1334988290,1212718012,b,424069788,function(d){d.reverse()},
-331919071,1145271056,1410038943,-886548250,1791824832,-418171758,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
394991787,189178273,/(\)],);[\]]/,b,-861027642,938992366,1617953070,-1390903909,-2068775914,1776751202];c[34]=c;c[57]=c;c[61]=c;try{try{c[24]>10&&((((0,c[53])((0,c[6])(c[85],c[60]),c[6],c[44],c[79]),c[20])(c[61],c[82]),c[17])(c[16],c[44]),1)||((((0,c[52])(c[24],c[80]),c[82])(c[41],c[21]),c[82])(c[25],c[26]),c[82])(c[40],c[20]),c[new Date("1969-12-31T18:46:01.000-05:15")/1E3]!=-8&&(c[30]==4&&(((((0,c[84])((0,c[53])(),c[9],c[39]),c[13])((0,c[13])((0,c[66])(c[20],c[19]),c[84],(0,c[35])(),c[9],c[39]),
c[81],c[80],c[62]),((((0,c[82])(c[54],c[39]),c[28])(c[80]),(0,c[76])(c[70],c[21]),c[84])((0,c[11])(),c[9],c[20]),c[28])(c[21]),c[28])(c[39]),((0,c[82])(c[47],c[26]),c[84])((0,c[35])(),c[9],c[26]),c[82])(c[68],c[39]),[])||((((((0,c[13])(((0,c[81])(c[20],c[34]),c[76])(c[73],c[80]),c[82],c[49],c[39]),c[81])(c[new Date("1970-01-01T08:29:50.000+08:30")/1E3+49],c[75]),c[76])(c[14],c[39]),c[76])(c[83],c[80]),c[81])(c[39],c[224+new Date("1970-01-01T03:42:21.000+03:45")/1E3]),c[84])((0,c[60])(),c[9],c[26])<=
(0,c[79])((0,c[66])(c[26],c[37]),c[76],((0,c[13])((0,c[82])(c[50],c[39]),c[82],c[72],c[20]),c[76])(c[27],c[21]),c[77],c[80])),c[40]<-7&&(((0,c[76])(c[36],c[0]),(0,c[66])(c[17],c[44]),c[38])(c[75]),"null")||((0,c[62])((0,c[69])(c[55]),c[85],c[14],c[36]),c[79])(c[6],c[55]),c[48]!=-6&&(c[68]<=6&&(((0,c[79])(c[19],c[81]),c[85])(c[16],c[49]),1)||((0,c[47])(c[58]),c[0])(c[68],c[49])),c[new Date("1969-12-31T22:30:10.000-01:30")/1E3]!==0&&(c[47]!==9||(((((0,c[8])((0,c[63])(),c[19],c[36]),c[8])((0,c[63])(),
c[19],c[30]),(((0,c[6])(c[14],c[30]),c[6])(c[17],c[36]),c[6])(c[42],c[4]),c[8])((0,c[21])(),c[19],c[36]),c[16])(c[4]),0))&&(((((0,c[5])(c[27],c[22]),(0,c[59])(c[64],c[1]),(0,c[59])(c[50],c[33]),c[83])(c[17],c[72]),c[83])(c[25],c[1]),c[73])(c[27],c[85]),c[2])(c[72],c[37])}catch(d){(0,c[new Date("1970-01-01T06:15:39.000+06:15")/1E3])(c[59]),(0,c[46])((0,c[85])(c[66],c[59])*(0,c[85])(c[49],c[12]),c[28],c[53],c[38]),(0,c[29])(c[new Date("1970-01-01T06:00:11.000+06:00")/1E3],c[59])}try{c[17]!=-8?(0,c[46])((((0,c[28])(c[72],
c[45]),c[23])(c[48],c[50]),c[13])(c[27],c[56]),c[67],c[81],c[64]):((((0,c[61])(c[40],c[35]),c[85])(c[60],c[62]),c[7])((0,c[20])(),c[18],c[35]),c[7])((0,c[69])(),c[18],c[62]),c[23]<=4&&(((0,c[5])(c[10],c[62]),c[5])(c[83],c[35]),(0,c[61])(c[17],c[35]),c[61])(c[2],c[3]),c[19]<=-10?((0,c[new Date("1970-01-01T01:45:37.000+01:45")/1E3])(c[35]),c[7])((0,c[29])(),c[18],c[62]):(0,c[22])((0,c[61])(c[8],c[62]),c[75],c[3],c[57])}catch(d){(0,c[31])((0,c[58])(c[64],c[29]),c[4],(0,c[4])(c[2]),c[41])}}catch(d){return"enhanced_except_3JwBo-P-_w8_"+
a}return b.join("")};