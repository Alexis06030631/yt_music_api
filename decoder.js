const gma = /^[\w.]*$/
const signatureTimestamp = 19744

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
	const url = orgaCompose(m.yC,m.EF,m.s)
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
	a={bX:!1,yC:"",EF:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.bX=!0;
a.yC=b.url;
a.EF=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
PP.q8(a,47);
PP.q8(a,10);
PP.q8(a,35);
PP.ZG(a,1);
PP.q8(a,39);
PP.ZG(a,2);
PP.q8(a,18);
return a.join("")
}

var PP={q8:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
j2:function(a){a.reverse()},
ZG:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(""),c=[function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
2061768128,402926294,1864395940,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
587456983,269945884,function(d,e){0!=e.length&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-1871641881,null,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
739717720,-1217976156,function(d,e,f){var h=e.length;f.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},d.split(""))},
-1982832513,"{\\\u229f",458099807,1800008077,-836737435,-1523208916,497095581,-1245318846,-1969322782,2060876861,1176698255,b,/({])([,],(,)\\)/,760172127,-449630188,977193290,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
232080487,function(d,e){e.push(d)},
function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
function(d,e,f,h,l){return e(f,h,l)},
2143934295,b,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
218933070,null,-1262966235,47899881,-1542353707,-191243623,949885637,"9JrMAiF",-1772233353,b,-1871641881,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
977193290,-766075842,1522765699,-1158958526,1677857130,-1262966235,function(d){d.reverse()},
1045123790,106403613,function(d,e,f,h,l,m){return e(h,l,m)},
187213133,447658232,-1625659521,"{\\\u229f",1078200458,-1904410151,-949451064,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
-1982832513,-1316507339,null,-1216240360,-1251376032,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
614175620,988606984,-785508927,1456859461,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
-1131852600,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1291388334,-587931830,-1972995534,1373761364,"(,{\u2216",1264159589];c[10]=c;c[40]=c;c[71]=c;try{try{0>=c[66]&&(2===c[45]||((0,c[35])((0,c[42-Math.pow(7,5)%70])((0,c[0])(c[10],c[36]),c[71],c[15]),c[33],c[64],c[28])===(0,c[17])(c[39],c[72])^(((0,c[33])(c[41],c[32]),(0,c[45])((0,c[46])(c[54],c[39]),c[23],c[54]),c[73])(c[55],c[43]),c[12])(c[79],c[32]),(0,c[23])(c[32]),new Date("1969-12-31T12:15:00.000-11:45")/1E3))&&((((((0,c[66])(c[34],(0,c[87])(),c[54]),(0,c[12])(c[74],c[43]),c[12])(c[5],c[new Date("1969-12-31T16:01:18.000-08:00")/
1E3%426-Math.pow(4,2)+-8]),c[12])(c[86],c[54]),c[-2624-Math.pow(4,5)+3671])(c[70]),c[45])((0,c[66])(c[34],(0,c[6])(),c[54]),c[73],c[62],c[56]),((0,c[66])(c[34],(0,c[6])(),c[54]),c[12])(c[18],c[9]),c[80])(c[32],c[22])}catch(d){(0,c[23])(c[54])}finally{-6>c[62]&&((0,c[45])((0,c[46])(c[9],c[37]),c[-213*Math.pow(8,1)+1777],c[71],c[54]),new Date("1969-12-31T20:30:04.000-03:30")/1E3)||(0,c[45])((0,c[80])(c[56],c[59]),c[29],c[19],c[0])}try{9===c[85]&&((0,c[53])(c[49],c[73]),[])||(0,c[64])(c[73]),-6!=c[37]&&
(((0,c[86])(((0,c[87])(c[84],c[74]),c[42])(c[23],c[30]),c[86],c[51],c[18]),c[42])((0,c[77])(c[51],c[37]),c[86],c[51],c[57]),"{)\\")||((((0,c[42])((0,c[63])(c[31],(0,c[3])(),c[29]),c[77],c[40],c[12]),c[63])(c[31],(0,c[27])(),c[29]),c[63])(c[31],(0,c[27])(),c[40]),c[20])(c[29]),-4!=c[59]&&(0<=c[23]?(((((0,c[42])((0,c[63])(c[31],(0,c[84])(),c[40]),c[77],c[29],c[87]),c[9])(c[75],c[67]),c[63])(c[31],(0,c[3])(),c[40]),((0,c[69])(c[53]),c[Math.pow(4,3)+94-95])(c[31],(0,c[27])(),c[40]),c[42])((0,c[63])(c[31],
(0,c[-122*Math.pow(8,4)+499796])(),c[29]),c[9],c[47],c[40]),c[63])(c[31],(0,c[66])(),c[51]):(0,c[46])((((0,c[70])(c[35],c[67]),c[77])(c[53],c[16]),c[40])(c[50],c[70]),c[39],(0,c[14])((0,c[36])(c[37]),c[40],(0,c[40])(c[50],c[19]),c[64],c[4]),c[67],c[8],c[3])>>>((0,c[6])(c[51],c[29]),c[67])(c[35],c[3])),(-7===c[52]||(((((0,c[74])(c[57-Math.pow(8,4)- -4089],c[52]),c[81])((0,c[5952-Math.pow(2,1)+-5869])((((0,c[28])(c[18],c[0]),(0,c[49])(c[38],c[30]),c[83])(c[59],c[71]),c[66])(c[79],c[28]),c[61],c[1]),
c[59%Math.pow(1,3)- -3],c[35],(0,c[46])(),c[15]),(0,c[24])(((0,c[23])(c[26],c[33]),c[57])(c[43],c[34]),c[23],c[34],c[82]),c[24])((0,c[27])(c[34]),c[84],c[14],c[26]),c[new Date("1969-12-31T20:01:08.000-04:00")/1E3])(c[15],c[74]),0))&&((((((0,c[Math.pow(8,4)+3450-7480])((0,c[68])(c[13],c[2]),(0,c[57])(c[76],c[15]),c[24],(0,c[3])(c[35],(0,c[46])(),c[14+Math.pow(4,4)%15]),c[85],c[87]),((0,c[37])(c[26]),c[57])(c[8],c[26]),c[3])(c[35],(0,c[46])(),c[15]),c[68])(c[15],c[56]),c[3])(c[35],(0,c[39])(),c[26]),
c[68])(c[13],c[21]),c[57])(c[new Date("1969-12-31T13:15:06.000-10:45")/1E3],c[15])*((0,c[68])(c[15],c[52]),c[77])(c[15],c[65])}catch(d){(0,c[24])((0,c[85])(c[13]),c[68],c[87],c[58]),(0,c[57])(c[72],c[15]),(0,c[57])(c[41],c[26])}}catch(d){return"enhanced_except_oJoB3-X-_w8_"+a}return b.join("")};