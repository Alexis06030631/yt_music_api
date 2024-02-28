const gma = /^[\w.]*$/
const signatureTimestamp = 19779

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
	const url = orgaCompose(m.NC,m.UF,m.s)
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
	a={sX:!1,NC:"",UF:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.sX=!0;
a.NC=b.url;
a.UF=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
BP.f0(a,41);
BP.gM(a,2);
BP.rP(a,49);
BP.gM(a,3);
BP.f0(a,36);
return a.join("")
}

var BP={f0:function(a){a.reverse()},
gM:function(a,b){a.splice(0,b)},
rP:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(""),c=[-788011171,"continue",1867811443,function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
b,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
function(d){d.reverse()},
b,1116937766,176107491,function(d,e,f,h,l){return e(f,h,l)},
-1351852828,-345082766,1727047635,-424205639,-1912100659,-251821723,1043515294,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-1529394466,305378759,742825801,-1096954235,function(d,e,f){var h=f.length;d.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},e.split(""))},
-917323495,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
function(d,e,f,h,l,m){return e(h,l,m)},
-1441662772,-451982573,-556117834,1913296065,-2011922903,",54];c[50]=c;",-1162325735,"join",function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
"join",-822141109,79897057,760852781,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
2012867470,-735627782,2126342536,-1010145608,-520271907,1446357381,-1604592801,317810344,-835388795,-520271907,1548709431,-2139577137,2138304723,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e,f,h,l,m,n,p){return d(m,n,p)},
466946335,821071173,function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
-1678855608,-1328306875,21525311,-2139577137,821071173,117220183,null,366796657,b,2115603050,914777236,null,-1846864176,975394470,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
null,-1848309273];c[68]=c;c[73]=c;c[77]=c;try{try{6>=c[26]?(0,c[12])((0,c[76])(c[77],c[54]),c[49],c[76],c[30]):(0,c[0])((0,c[16])(c[24],c[58]),c[13],c[72],c[68],(0,c[45])()),-5<=c[51]?(0,c[17])((0,c[13])(c[72],c[68],(0,c[45])()),c[64],(0,c[0])((0,c[16])(c[3],c[65]),c[16],c[19],c[72]),c[72],c[51]):((0,c[0])((0,c[13])(c[58],c[68],(0,c[45])()),c[16],c[12],c[new Date("1969-12-31T12:15:58.000-11:45")/1E3]),c[70])(c[-2025+Math.pow(8,5)+-30678],c[18])%(0,c[49])(c[76],c[54]),5===c[3]?(0,c[16])(c[21],c[76])>=
(0,c[12])((0,c[16])(c[34],c[65])*(0,c[13])(c[Math.pow(5,1)+48- -23],c[42*Math.pow(5,2)-982],(0,c[71])()),c[Math.pow(3,2)%117+4],c[58],c[68],(0,c[15])()):(0,c[73])(c[61],c[5])-((0,c[64])(c[1],c[Math.pow(2,5)-22500- -22505]),c[64])(c[73],c[26])+(0,c[9])(c[12],c[13]),10>c[9568-Math.pow(2,1)-9532]&&(5<=c[75]?(0,c[27])(((0,c[41])(c[76],c[54]),c[7])((0,c[7])((0,c[21])(c[71],c[4]),c[44],c[56],c[39]),c[69],c[53]),c[44],c[60],c[28]):(0,c[12])((0,c[new Date("1969-12-31T21:00:07.000-03:00")/1E3])((0,c[7])((0,c[69])(c[53]),
c[44],c[56],c[15]),c[65],c[-29436+Math.pow(7,4)+27091],c[64]),c[21],(0,c[Math.pow(4,4)+21-208])(c[71]),c[60],c[62])),-7!=c[47]&&(3==c[16]&&((0,c[12])(((0,c[8])(c[71],c[20],(0,c[66])()),c[8])(c[53],c[22],(0,c[26])()),c[11],(((0,c[12])((0,c[11])(c[73],c[71]),c[69],(0,c[70])(c[71]),c[53]),c[70])(c[51]),c[8])(c[53],c[20],(0,c[66])()),c[54],c[53]),"undefined")||(((0,c[65])(c[60],c[61]),c[65])(c[53],c[new Date("1970-01-01T04:00:42.000+04:00")/1E3]),(0,c[65])(c[71],c[1]),(0,c[0])((0,c[11])(c[78],c[71]),
c[65],c[60],c[76]),(0,c[21])(c[60],c[55]),(0,c[32])((0,c[44])(c[28]),c[62],c[28],c[76],(0,c[1])()))),6>=c[53]&&(5==c[20]&&((0,c[65])(c[50],c[46]),"false")||(0,c[75])(c[28],c[33])),-2!==c[20]&&((0,c[32])((0,c[75])(c[31],c[56]),c[72],c[54]),"true")||(0,c[18])((0,c[67])(c[4],c[53],(0,c[9])()),c[67],c[8],c[239%Math.pow(5,1)+8],(0,c[72])())}catch(d){(0,c[67])(c[22],c[55],(0,c[65])()),(0,c[64])(c[70],c[8]),(0,c[new Date("1970-01-01T01:00:06.000+01:00")/1E3])(c[15]),(0,c[67])(c[22],c[53],(0,c[35])()),((0,c[18])((0,c[6])(c[8]),
c[10],c[15],c[52]),c[67])(c[22],c[55],(0,c[65])())}finally{6<=c[73]&&(1>=c[77]?(0,c[18])((0,c[18])((0,c[18])(((0,c[new Date("1970-01-01T03:01:04.000+03:00")/1E3])(c[51],c[Math.pow(3,5)+5E4+-50239]),c[64])(c[45],c[15]),c[5],c[8]),c[57],c[8],c[43]),c[67],c[28-Math.pow(6,new Date("1969-12-31T19:45:01.000-04:15")/1E3)%129],c[53],(0,c[35])()):(0,c[34])(c[10],(0,c[31])(c[24],c[28]),(0,c[new Date("1969-12-31T23:00:31.000-01:00")/1E3])(c[22],c[-9+Math.pow(7,2)%336]),(0,c[5])(c[24]),(0,c[68])(c[59],c[10]),
c[70],c[12])),0!==c[45]&&(((0,c[68])(c[0],c[51]),((0,c[60])((0,c[73])(c[56]),c[47],c[63],c[48]),c[228-413%Math.pow(4,4)])(c[-2621884- -156*Math.pow(7,5)],c[30])>(0,c[52])(c[75],c[41]),c[78])(c[61]),c[29])(c[68],c[4])<(0,c[25])(c[41],c[31]),-8>=c[26]&&(0,c[78])(c[32],c[60])}}catch(d){return"enhanced_except_w5oBvOX-_w8_"+a}return b.join("")};