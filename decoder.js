const gma = /^[\w.]*$/
const signatureTimestamp = 20047

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
		url = orgaCompose(m.SE,m.pI,m.s)
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
	a={QZ:!1,SE:"",pI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.QZ=!0;
a.SE=b.url;
a.pI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
VL.n5(a,28);
VL.n5(a,67);
VL.n5(a,24);
VL.n5(a,49);
VL.n5(a,60);
VL.ja(a,80);
VL.Ml(a,2);
return a.join("")
}

var VL={n5:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
Ml:function(a,b){a.splice(0,b)},
ja:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[-1614988551,-2139053744,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-91405766,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
"9Yffwj",-17732902,-673454557,function(d,e){e.splice(e.length,0,d)},
1492909084,-1035852163,-1338657014,496939893,-824291800,783746612,null,1585701464,1830312833,-1732436409,629105432,379068400,63993740,b,1533253051,952218567,-1642056652,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
b,-2141723665,845928211,-1207045913,1589144293,-1035852163,function(d,e,f,h,l,m,n){return d(l,m,n)},
function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
-1124636874,815365789,1990697952,1180514209,-340826029,553869947,-998419564,783746612,1478936867,-1182807621,445581403,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
"BcjOao",1999470219,-1718337164,function(d,e,f){var h=f.length;e.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},d.split(""))},
function(d,e,f,h,l,m){return e(h,l,m)},
1990697952,313145776,function(d,e){e.length!=0&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
"YAxRS",1544329323,-484003532,1443476112,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
"{(\\{",function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-221001210,-1448163487,-1478461397,250574558,379068400,-757461417,1852872379,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
1061172850,388103811,function(d){d.reverse()},
1374433754,-1332127361,b,-2050140944,30038153,null,1622122382,356167500,function(d,e,f,h,l){return e(f,h,l)},
-698249787,2140126109,739009070,-551450025,-802846756,null,-1031386588,-2007073147];c[15]=c;c[80]=c;c[89]=c;try{try{c[78]<5&&(0,c[83])((0,c[4])(c[23],c[77]),c[69],c[0],c[80]),c[76]>=2&&((0,c[48])((0,c[19])(c[9],c[54]),c[91],c[45],c[41]),1)||(0,c[48])((0,c[11])(c[79],c[82]),c[11],c[42],c[85]),c[76]!==-2&&((0,c[48])(((0,c[61])(c[38],c[79]),(0,c[61])(c[73],c[45]),c[13])(c[49],c[new Date("1969-12-31T22:15:06.000-01:45")/1E3]),c[14],c[11],c[83],(0,c[58])()),1)||((0,c[47])((0,c[10])(c[71],c[91]),c[10],
c[41],c[36]),c[10])(c[41],c[46])*(0,c[14])(c[19],c[83],(0,c[35])()),c[26]!=2?(0,c[64])(c[11],c[71]):(0,c[10])(c[71],c[54]),(c[84]>-8||((0,c[47])((0,c[60])(c[27],c[53]),c[53],c[41],c[36]),0))&&(0,c[10])((0,c[66])(c[46],c[32]),c[66],c[16],c[65]),c[5]!==-6&&((0,c[23])(c[15],c[7]),c[40])(c[1],c[58]),(c[61]>=4||((0,c[13])(c[18],c[51]),""))&&(0,c[49])(c[23],c[87]),c[61]>=4&&(c[54]>=-3||((0,c[30])(c[77],c[1],(0,c[39])()),0))&&(0,c[86])(c[1]),c[84]>=-8&&(c[85]<9||((0,c[63])((0,c[49])(c[3],c[60]),c[30],c[77],
c[1],(0,c[39])()),0))&&((0,c[13])(c[57],c[0]),c[34])(c[58],c[1]),c[43]<-4848+194*Math.pow(new Date("1969-12-31T17:30:05.000-06:30")/1E3,2)&&(0,c[13])(c[57],c[8]),c[33]!=-5&&(((0,c[49])(c[82],c[1]),c[31])((0,c[34])(c[47],c[69]),c[34],(0,c[76])(c[33],c[69]),c[50],c[49]),(0,c[2])(c[46],c[21]),(0,c[38])(c[7],c[88]),(0,c[new Date("1969-12-31T16:30:39.000-07:30")/1E3])(c[88]),c[39])(c[58]),c[new Date("1969-12-31T13:15:48.000-10:45")/1E3]==0&&((((0,c[new Date("1969-12-31T12:16:17.000-11:45")/1E3])(c[46],
c[44]),c[77])(c[46],c[new Date("1969-12-31T21:16:07.000-02:45")/1E3]),c[27])(c[37],c[9]),{})||((0,c[69])(c[32],c[16]),c[90])(c[46],c[87])&(0,c[69])(c[48],c[46]),c[74]<=-3&&(c[36]!=-1?(((0,c[69])(c[65],c[34]),((0,c[40])((0,c[90])(c[9],c[36]),c[73],c[68],c[9],(0,c[5])()),c[54])(c[22],c[34]),c[26])((0,c[39])(c[83]),c[55],c[41],c[20]),c[26])((0,c[40])(c[5],c[32]),c[40],c[43],c[2]):((((0,c[54])((0,c[91])(c[30],c[26910-Math.pow(new Date("1969-12-31T16:00:02.000-08:00")/1E3,3)+-26887]),c[91],c[23],c[75]),
(0,c[31])(c[30]),c[67])(c[23]),c[54])((0,c[54])((0,c[68])(c[53],c[48]),c[67],c[60]),c[91],c[60],c[38]),c[67])(c[48])),c[74]!==10&&(c[53]>8?(0,c[76])((0,c[31])(c[18]),c[54],(0,c[31])(c[30]),c[83],c[88],c[18]):(((0,c[11])(c[48],c[52]),c[68])(c[26],c[30]),c[91])(c[29],c[5]))}catch(d){((0,c[89])(c[76]),c[56])(c[76],c[38]),(0,c[33])(c[54],c[88]),(0,c[33])(c[4],c[22]),(0,c[56])(c[25],c[61]),((0,c[52])(c[5],c[25],(0,c[77])()),c[33])(c[7],c[22]),(0,c[48])(c[63],c[13]),(0,c[70])(c[56],(0,c[48])(c[92],c[76]),
(0,c[89])(c[76]),(0,c[56])(c[76],c[8])===(0,c[6])(c[9],c[22]),c[81],c[85]),(0,c[32])(c[13])}}catch(d){return"enhanced_except_z5wBsOP-_w8_"+a}return b.join("")};