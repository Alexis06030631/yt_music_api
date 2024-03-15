const gma = /^[\w.]*$/
const signatureTimestamp = 19795

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
	const url = orgaCompose(m.VC,m.eG,m.s)
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
	a={IX:!1,VC:"",eG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.IX=!0;
a.VC=b.url;
a.eG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
kP.bg(a,2);
kP.CV(a,69);
kP.qD(a,14);
kP.bg(a,1);
kP.CV(a,69);
kP.qD(a,29);
kP.CV(a,20);
return a.join("")
}

var kP={bg:function(a,b){a.splice(0,b)},
qD:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
CV:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(""),c=["(\"']\u22c5",1805813597,111055091,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-496344789,1706542759,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
-1064003792,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-1607923262,-1156538622,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1501170068,1461644125,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
53853370,595937758,294274185,652889302,1013034686,function(d,e){d.splice(d.length,0,e)},
-1226552037,-272686419,782100347,-2031728996,function(d,e,f,h,l,m,n){return d(l,m,n)},
490200019,631776684,function(d,e,f){var h=f.length;e.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},d.split(""))},
"2ExFCHo",function(d){d.reverse()},
function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
1146394047,2037593004,null,978042057,-1873580617,96027507,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
490445223,1655692191,function(d,e,f,h,l,m){return e(h,l,m)},
-1041310078,-1561517191,-1016222278,"finally",-169411003,null,-526959029,-538340808,-129249498,1876424669,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
1382813731,-1015291001,null,-1632277230,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-635607689,function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
b,-850053320,function(d,e,f,h,l){return e(f,h,l)},
403283989,-1936642892,-1619839756,890653766,b,-42495439,-295996764,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
"17BUocB",705187307,b,-2072191741,988580840];c[34]=c;c[47]=c;c[55]=c;try{try{(-4==c[40]||((0,c[62])((0,c[62])(((0,c[8])(c[67]),c[41])((0,c[6])(c[55],c[58]),c[59],(0,c[59])(c[31],c[63]),c[2],c[22])&(0,c[7])(c[Math.pow(8,4)-171-3870],c[3]),c[33],c[60],c[90+Math.pow(3,4)+-112]),c[41],c[8],c[10],(0,c[24])()),0))&&(0,c[7])(c[53],c[73])<<((((0,c[44])(c[68],c[30]),(0,c[75])((0,c[7])(c[62],c[60]),c[7],c[40],c[3]),c[65])(c[68],c[56]),c[7])(c[36],c[10])^(0,c[41])(c[42],c[73],(0,c[27])())),(-5===c[39]||((0,c[75])((0,c[7])(c[18],
c[10]),c[72],c[73],c[48]),0))&&(0,c[75])((0,c[7])(c[49],c[60]),c[7],c[25],c[-17*Math.pow(1,3)- -27])}catch(d){(0,c[75])((0,c[41])(c[8],c[10],(0,c[6])()),c[144-103%Math.pow(6,4)],c[58],c[3],(0,c[6])())}finally{2<c[11]&&((0,c[54])(((0,c[-1008+21*Math.pow(7,2)])(c[3]),c[7])(c[34],c[10])*(0,c[7])(c[57],c[68]),c[19],(0,c[7])(c[50],c[10]),c[47],c[1605652+-49*Math.pow(8,5)]),1)||(0,c[51])((0,c[19])(c[60],c[1]),c[47],(0,c[47])(((0,c[16])(c[40],c[76]),c[57])(c[52],c[60]),c[5],c[0],c[52]),c[44],c[45],c[18870-
Math.pow(2,new Date("1970-01-01T01:30:05.000+01:30")/1E3)-18819]),-3<c[new Date("1969-12-31T12:31:15.000-11:30")/1E3]?(0,c[47])((0,c[37])(c[45],c[11]),c[71],c[60]):(0,c[37])(c[60],c[55])|(0,c[37])(c[40],c[50]),-6>=c[44]&&(7>=c[69]?(((0,c[14])(c[15],c[46],(0,c[-35427-Math.pow(7,4)- -37885])()),c[27])((0,c[17])(c[46],c[32])^(0,c[38])(c[46],c[42]),c[14],(0,c[14])(c[59],c[new Date("1969-12-31T12:45:46.000-11:15")/1E3],(0,c[75])()),c[59],c[54],(0,c[432%Math.pow(3,1)+43])()),c[14])(c[59],c[46],(0,c[57])())>>>
(0,c[58])(c[68],c[41]):((0,c[38])(c[46],c[2]),c[27])((0,c[38])(c[new Date("1969-12-31T19:00:41.000-05:00")/1E3],c[47]),c[144+Math.pow(4,3)+-186],(((0,c[0])((0,c[45])(c[62],c[6],(0,c[30])()),c[47],c[77]),c[45])(c[46],c[77],(0,c[74])()),c[76])(c[72],c[38640-Math.pow(new Date("1969-12-31T18:30:05.000-05:30")/1E3,3)-38474]),c[64],c[12])),-3!==c[39]&&(0,c[new Date("1970-01-01T06:00:04.000+06:00")/1E3])(((((0,c[38])(c[61],c[37]),(0,c[new Date("1969-12-31T20:30:04.000-03:30")/1E3])((0,c[17])(c[54],c[34]),
c[6],c[41],c[78]),c[11])(c[72],(0,c[new Date("1970-01-01T04:45:38.000+04:45")/1E3])(c[33],c[55]),(0,c[18])(c[42],c[66]),(0,c[Math.pow(5,1)+-13664+13698])(c[47],c[67]),c[55])-(0,c[39])(c[178%(new Date("1970-01-01T04:03:20.000+04:00")/1E3)-Math.pow(7,2)+new Date("1970-01-01T05:58:46.000+06:00")/1E3],c[58*Math.pow(4,5)+-59373]))*(0,c[59])(c[26],c[62]),(0,c[new Date("1969-12-31T13:00:46.000-11:00")/1E3])(c[2],c[9]),c[71])(c[55],c[63])<=((0,c[46])(c[47],c[74]),c[39])(c[47],c[3600-Math.pow(4,3)-3487]),
c[87079-170*Math.pow(8,new Date("1969-12-31T19:00:03.000-05:00")/1E3)],c[34],c[20])}try{9<=c[20]?(((0,c[35])(c[26],c[1]),c[10])(c[6],c[50]),c[41%(new Date("1969-12-31T20:47:16.000-03:15")/1E3)+Math.pow(4,5)+-1006])(c[24],c[11],(0,c[8])()):((0,c[49])((0,c[10])(c[6],c[14]),c[61],c[78]),c[69])(c[73],c[75]),(0,c[30])((0,c[18])(c[54]),c[76],c[1],c[0])}catch(d){}}catch(d){return"enhanced_except_05oBrOX-_w8_"+a}return b.join("")};