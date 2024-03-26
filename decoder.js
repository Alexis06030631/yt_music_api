const gma = /^[\w.]*$/
const signatureTimestamp = 19803

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
	const url = orgaCompose(m.XC,m.fG,m.s)
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
	a={KX:!1,XC:"",fG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.KX=!0;
a.XC=b.url;
a.fG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
jP.ZJ(a,76);
jP.Pn(a,37);
jP.Pn(a,14);
jP.ju(a,3);
jP.ZJ(a,59);
return a.join("")
}

var jP={ZJ:function(a){a.reverse()},
ju:function(a,b){a.splice(0,b)},
Pn:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(""),c=[1509566858,1425445201,-1094870925,-750563487,1366679702,function(d,e,f,h,l,m,n,p){return d(m,n,p)},
-1134338793,333701903,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
1017793556,2121320540,1433487280,222773939,function(d){throw d;},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-2029286334,-911596253,",49];c[53]=c;",882665502,-65500582,1151830800,-1083170509,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e,f,h,l){return e(f,h,l)},
1565479492,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
function(d,e,f){var h=f.length;e.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},d.split(""))},
1797101224,-1578077884,-558029587,1394684043,1731662680,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-1327142225,398953416,function(d,e){0!=e.length&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
311607705,277469909,1471329432,159563338,557463600,2066466619,-161649058,799538768,1806888400,function(d,e){if(0!=e.length){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
8598121,626654534,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
1017793556,function(d,e,f,h,l,m){return e(h,l,m)},
498101660,1134464773,1509566858,-1312343945,717877768,b,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
null,-915776225,534035754,682470109,-1707900100,1276805259,-1295193229,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
1615184463,function(d,e,f,h,l,m,n,p){return d(m,n,p)},
65845318,b,1798788620,-684411816,"roiBmmi",null,-4413481,486677197,-1169327544,'\u22f6)"',1720405088,b,-825130825,87290911,-1294256077,1056345732,function(d,e,f,h,l,m,n){return d(l,m,n)},
function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
-1584530487,null,-1374930116,",49];c[53]=c;",-1406127116,-684411816,1572333293,-2142059297,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-1707900100,2005572295,1959865331,1935222860,-222016814,function(d){d.reverse()},
-1374930116,-1054242282];c[58]=c;c[73]=c;c[87]=c;try{try{4>=c[21]?(0,c[50])((0,c[48])(c[new Date("1969-12-31T22:45:07.000-01:15")/1E3],c[69]),c[48],(0,c[94])(c[58]),c[69],c[23]):((0,c[79])((0,c[54])(c[72],c[23]),c[94],c[84],c[29]),c[54])(c[new Date("1969-12-31T20:30:38.000-03:30")/1E3],c[23])}catch(d){(0,c[54])(c[3],c[23])}try{9<c[84]&&(-1!==c[100]&&((0,c[-3196+Math.pow(4,3)+3149])(c[6],c[23]),1)||(0,c[67])(c[42],c[15])),(-9>=c[87]||(0,c[67])(c[96],c[46])&&Math.pow(7,3)- -12567+new Date("1970-01-01T02:39:50.000+06:15")/
1E3)&&(0,c[67])(c[100],c[29]),c[69]!==new Date("1970-01-01T01:44:57.000+01:45")/1E3&&((0,c[2])(c[44]),c[35])(c[63],c[69])}catch(d){(0,c[26])(c[72],c[79],(0,c[14])()),(0,c[Math.pow(7,2)%254-26])((0,c[48])(c[27],c[73]),c[48],c[31],c[79])}finally{-5>c[95]&&(8==c[64]?(0,c[85])(c[40],c[87]):(0,c[Math.pow(1,5)-7E3- -7007])(c[37],c[69])),2>c[54]&&(9>=c[74]||((0,c[84])(c[48],(0,c[48])(c[Math.pow(6,3)%337-182],c[79]),(0,c[84])(c[48],(0,c[48])(c[11],c[56]),(0,c[26])(c[72],c[69],(0,c[32])()),(0,c[94])(c[73]),
c[10],c[new Date("1970-01-01T06:46:27.000+06:45")/1E3]),(0,c[48])(c[93],c[79]),c[49],c[56]),0))&&(((0,c[23])((0,c[45])(c[97],c[73]),c[100],c[79]),((0,c[new Date("1969-12-31T18:45:45.000-05:15")/1E3])(c[83],c[79]),c[8])(c[20],c[56]),c[45])(c[24],c[87]),c[23])((0,c[85])(c[82],c[56]),c[35],c[51],c[58])}try{0!=c[10]&&(-1>=c[59]?((((0,c[45])(c[86],c[69]),c[26])(c[72],c[69],(0,c[14])()),c[23])(((0,c[48])(c[12],c[56]),c[85])(c[78],c[79]),c[8],c[41],c[73]),c[96])((0,c[81])(c[13],c[39]),c[5],c[51],c[39]):
((0,c[81])(c[92],c[28]),c[96])((0,c[37])(c[18],(0,c[99])(c[42],c[26],(0,c[35])()),(0,c[15])(c[40],c[43]),(0,c[5])(c[72],c[226*Math.pow(5,3)+-28211]),(0,c[81])(c[101],c[Math.pow(2,4)%116+23]),c[8],c[39]),c[18],c[44],c[28])),(0,c[86])(c[28]),(0,c[5])(c[68],c[39])}catch(d){}try{3!==c[56]&&(1==c[91]||((0,c[20])((0,c[55])(c[9],c[new Date("1969-12-31T19:45:26.000-04:15")/1E3])&(0,c[81])(c[73],c[49]),c[15],(((((0,c[18])(c[62],c[26]),c[123-Math.pow(6,4)+new Date("1969-12-31T13:05:54.000-11:15")/1E3])(c[50],
c[57]),c[67])(c[86],c[69]),c[46])(c[67],c[48])>>>(0,c[31])(c[78],c[25]))%(0,c[57])(c[91],c[4]),c[83],c[new Date("1970-01-01T11:00:38.000+11:00")/1E3*Math.pow(1,3)+35]),0))&&((0,c[72])((0,c[50])(c[7],c[84]),c[65],(0,c[23])(c[86],c[71]),c[100],(0,c[60])(c[70],c[73]),c[69],c[73]),c[20])(c[60],(0,c[63])(c[98-Math.pow(8,5)%98],c[102]),(0,c[Math.pow(4,5)+74-1035])(c[76],c[94]),(0,c[41])(c[87],c[84],(0,c[29])()),(0,c[41])(c[87],c[84],(0,c[29])()),c[2],c[71]),8!==c[56]&&(-5===c[79]&&((0,c[65])((0,c[99])(c[63],
(0,c[63])(c[74],c[94]),(0,c[50])(c[30],c[84]),(0,c[63])(c[-9435+Math.pow(3,1)+9483],c[84]),c[19],c[84]),c[41],(0,c[63])(c[91],c[102]),c[87],c[94],(0,c[37])())||new Date("1970-01-01T05:45:01.000+05:45")/1E3)||((0,c[99])(c[6],(0,c[38])((0,c[12])(c[102]),c[2],c[12],c[14]),(0,c[76])(c[100],c[52]),(0,c[10])(c[55],c[48]),c[17]),c[9])(c[80],c[11])),1!=c[71]&&(0,c[41])((0,c[26])(c[70],c[2]),c[73],c[72],c[101])}catch(d){(0,c[51])((0,c[76])(c[Math.pow(7,1)- -32745-32708],c[97]),c[76],c[26],c[84]),(0,c[54])(c[100],
c[84],(0,c[42])())}}catch(d){return"enhanced_except_25oBpOX-_w8_"+a}return b.join("")};