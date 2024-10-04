const gma = /^[\w.]*$/
const signatureTimestamp = 19998

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
		url = orgaCompose(m.UE,m.mI,m.s)
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
	a={yZ:!1,UE:"",mI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.yZ=!0;
a.UE=b.url;
a.mI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
yL.oj(a,1);
yL.oe(a,1);
yL.oj(a,42);
yL.oe(a,2);
yL.fP(a,32);
yL.oj(a,54);
yL.oe(a,2);
return a.join("")
}

var yL={oj:function(a){a.reverse()},
fP:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
oe:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
b,14322510,null,-408503610,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-1566976823,-2021448628,-488122969,b,2033778442,-1384280641,function(d,e,f,h,l,m){return e(h,l,m)},
1702553989,function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
-341567211,-948634313,function(d,e,f,h,l,m,n){return d(l,m,n)},
1380495687,"function",2005293294,-560959052,-1280878193,1222490988,-2040021170,1870311882,function(d,e,f){var h=f.length;d.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},e.split(""))},
-109333007,-2023105210,-887344857,-1916881864,-329642752,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
1858910514,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
null,1549056868,b,-1900214276,function(d,e,f,h,l){return e(f,h,l)},
null,-1532262074,function(d){d.reverse()},
-1326821122,49398475,-223285438,1659906560,-1855616763,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
-887285632,-1274534799,-1550605131,1575578922,-56980978,-2071087546,-805894125,1237242172,function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
-947596582,790063621,-329642752,1543377400,1473482595,"(],{\\,",-1916881864,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-887344857,-460267486,434098443,-2023105210,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
1760071434,-697904568,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
/,][/,-4,/\];](),/,-1806330030,function(d,e,f,h,l,m,n,p,q,r,t){return f(m,n,p,q,r,t)},
-1400450794,1533072968,198558981,1708738333,2793156,-1049779919,-1106578213,2097360624,-50256892,-819043579,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
942958808,1328603917];c[3]=c;c[35]=c;c[40]=c;try{try{c[81]==-10&&((0,c[26])(c[1],c[19],(0,c[32])()),1)||(0,c[58])(c[59],c[3]),c[85]===1&&(((((((0,c[75])(c[35],c[4]),c[0])(c[3],c[68]),c[42])(c[9]),c[49])(c[41],c[37]),c[34])(c[35],c[31]),c[26])(c[37],c[19],(0,c[48])()),new Date("1970-01-01T02:30:03.000+02:30")/1E3)||(0,c[89])((0,c[12])((0,c[14])(c[1],c[69]),c[34],(0,c[49])(c[18],c[3])&(0,c[40])(c[24],c[26]),c[0],c[49]),c[73],(0,c[0])(c[84],c[43]),c[34],c[71],c[78]),(0,c[73])((0,c[60])(c[78],c[53],(0,c[66])()),
c[68],c[37],c[50])}catch(d){c[new Date("1969-12-31T18:16:30.000-05:45")/1E3]>7&&((0,c[20])(((0,c[51])(c[48],(0,c[60])(c[35],c[53],(0,c[14])()),(0,c[17])(c[74],c[40]),((0,c[34])(c[43],c[33]),c[48])(c[35],c[16]),c[71],c[89]),c[17])(c[35],c[41]),(0,c[60])(c[35],c[53],(0,c[82])()),c[73],((0,c[68])(c[43],c[55]),c[83])(c[2],c[35])===(0,c[34])(c[69],c[59]),(0,c[17])(c[74],c[85]),(0,c[68])(c[37],c[49]),c[83],c[77],c[71]),1)||(((0,c[73])((0,c[17])(c[43],c[72]),c[34],c[37],c[24]),((0,c[83])(c[30],c[37]),c[21])(c[37]),
((0,c[77])(c[22],c[11]),c[78])(c[new Date("1969-12-31T19:30:17.000-04:30")/1E3],c[90]),c[68])((0,c[73])(c[67],c[34]),c[32],c[28]),((0,c[90])(((0,c[37])(c[34],c[43]),c[2])(c[14],c[8]),c[37],c[8],c[48]),c[37])(c[34],c[29]),c[37])(c[71],c[67]),c[22]===0&&((0,c[58])(((0,c[2])(c[13],c[8]),c[3])(c[8],c[26]),(0,c[11])(c[0],c[18],(0,c[63])()),c[90],(0,c[90])((0,c[2])(c[83],c[8]),c[87],c[8]),c[3],c[34],c[52]),[])||((0,c[90])((0,c[37])(c[89],c[50]),c[3],c[36],c[84]),(0,c[2])(c[17],c[71]),c[3])(c[70],c[82])*
(0,c[80])(c[49],c[71])&(0,c[59])(c[34],c[37])}try{(c[5]!==1||((0,c[67])(c[0],c[74],(0,c[21])()),0))&&(0,c[58])(c[65],c[90]),c[69]!==new Date("1970-01-01T06:45:09.000+06:45")/1E3&&(0,c[1])(c[34],c[66]),c[52]<=5&&(((0,c[44])(c[39],c[35]),c[68])(c[22],c[90]),c[2])(c[78],c[85]),c[72]>-9&&(((0,c[64])(((0,c[77])(c[8],c[84],(0,c[71])()),c[77])(c[74],c[84],(0,c[31])()),c[61],c[45]),(0,c[77])(c[44],c[84],(0,c[31])()),c[69])(c[10],c[25]),{})||(((0,c[64])((0,c[6])(c[44]),c[6],c[10]),c[85])(c[83]),(0,c[22])(c[17],
c[1]),c[80])(c[81],c[73]),c[44]<=-3&&(0,c[22])(c[81],c[90])}catch(d){(0,c[68])(c[29]),(0,c[65])((0,c[52])(c[55],c[45],(0,c[6])()),c[9],c[84],c[18]),(0,c[9])(c[27],c[83]),(0,c[52])(c[55],c[45],(0,c[6])())}finally{c[11]<7&&(((0,c[65])((0,c[68])(c[55]),c[68],c[55]),c[40])(c[29],c[28]),1)||(((0,c[40])(c[85],c[21]),c[68])(c[55]),c[31])(c[29]),(c[39]<10||(((0,c[61])(c[62],c[55]),c[52])(c[85],c[45],(0,c[74])()),NaN))&&(0,c[65])((0,c[9])(c[55],c[89]),c[75],c[17],c[66])}}catch(d){return"enhanced_except_npwB4eP-_w8_"+
a}return b.join("")};