const gma = /^[\w.]*$/
const signatureTimestamp = 19997

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
		url = orgaCompose(m.VE,m.oI,m.s)
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
	a={yZ:!1,VE:"",oI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.yZ=!0;
a.VE=b.url;
a.oI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
zL.n7(a,1);
zL.Ns(a,43);
zL.n7(a,3);
zL.Ns(a,53);
zL.xd(a,49);
zL.n7(a,1);
zL.Ns(a,31);
return a.join("")
}

var zL={xd:function(a){a.reverse()},
n7:function(a,b){a.splice(0,b)},
Ns:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
1378981519,function(d,e,f,h,l,m,n,p){return d(m,n,p)},
904917111,527724688,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
null,1075524373,-1119464128,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
-274538865,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
-1079321746,-339653540,-1959148706,function(d,e){e.push(d)},
1476689368,-444809108,b,-1785337709,"(),[",-597792464,-462746063,-363547586,81351172,',/"\u00b8',function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-821392602,-329281293,function(d){d.reverse()},
null,1000415092,370334089,-561100102,-720412855,766329291,"LeGG",-1585930228,-1877946094,null,function(d,e){e.splice(e.length,0,d)},
-1914713294,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
function(d,e,f,h,l,m){return e(h,l,m)},
-166163111,253759609,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
b,-490852315,-1127614817,-812949216,function(d,e,f,h,l){return e(f,h,l)},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
-1845420074,function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
1384658315,-561004415,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
1178018173,-339653540,-1468612687,-1683642895,"QJ1i",function(d,e,f){var h=f.length;d.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},e.split(""))},
b,"\u2220,'",-1795379263,-1944288361,-390119788,-1297280814,1476689368,-626632337,766573102,-1446092926,function(d,e){e.length!=0&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-1944288361,-115189741,-1808157989,-2012540457];c[6]=c;c[30]=c;c[39]=c;try{try{c[28]<=6&&((0,c[42])(c[39],c[56])<(0,c[48])(c[49],c[21],(0,c[11])()))-(0,c[67])(c[37],(0,c[37])(c[63],c[32]),(0,c[37])(c[6],c[71]),(0,c[41])(c[64],c[7]),(0,c[75])(c[60],c[7]),c[51],c[48]),c[2]!=7&&(c[45]==3?(0,c[43])(c[40],c[38]):(0,c[6])(c[19])),c[25]>6?(0,c[53])(c[46],c[31]):(0,c[49])(c[13],c[14]),c[13]!==0&&(c[73]>=-1||((0,c[27])(c[64],c[22]),NaN))&&(0,c[4])(c[39]),c[20]!==-1&&((((0,c[29])(c[30],c[39]),c[27])(c[3],c[5]),
c[17])(c[4],c[62]),1)||(((0,c[53])(c[36],c[2]),c[5])(c[2],c[58]),c[26])(c[62],c[80],(0,c[38])()),c[40]!==3&&(c[77]==2||((0,c[5])(c[74],c[76]),0))&&(0,c[56])(c[66]),c[72]>=-10&&(c[6]>9||(((0,c[32])(c[10]),c[20])(c[23],c[57]),void 0))&&(0,c[78])((0,c[25])(c[74],c[8],(0,c[27])()),c[36],c[44],c[45])}catch(d){(0,c[36])(c[13],c[45]),(0,c[70])((0,c[25])(c[10],c[8],(0,c[53])()),c[56],((0,c[35])(c[75],c[10]),c[69])(c[33],c[17]),c[10]),(0,c[9])(c[45],c[63],(0,c[3])()),(0,c[69])(c[45],c[37])}try{c[34]>-10&&
(0,c[new Date("1970-01-01T07:31:10.000+07:30")/1E3])((0,c[35])(c[30],c[10]),c[69],(0,c[20])(c[12],c[33]),c[33],c[61])===(0,c[31])(c[42],c[44])!==((0,c[43])(c[11]),c[9])(c[62],c[68])}catch(d){(0,c[46])(c[47],c[12])}try{c[50]!==-2&&(0,c[45])((0,c[80])(c[58]),c[36],c[48],c[29]),c[11]<=9&&(c[28]<=-1?(((((0,c[46])(c[54],c[33]),(0,c[1])(c[76],c[47]),c[60])(c[35],c[72]),c[23])(c[18],c[14]),c[50])(c[new Date("1969-12-31T17:01:12.000-07:00")/1E3],c[15]),c[60])(c[77],c[62]):(((0,c[60])(c[31],c[62]),c[17])(c[52],
c[47]),(0,c[1])(c[41],c[72]),c[17])(c[24],c[62])-((0,c[71])(c[0],c[70],(0,c[34])()),c[13])(c[14]))}catch(d){(0,c[71])(c[0],c[44],(0,c[2])()),(0,c[60])(c[39],c[72])}finally{c[11]>-5&&(c[25]!=1?(0,c[54])(((0,c[16])(c[30],c[47]),c[new Date("1969-12-31T18:01:00.000-06:00")/1E3])(c[7],c[38]),((0,c[46])(c[77],c[0]),c[6])(c[31]),c[28],(0,c[52])(c[38],c[65]),c[68],c[51],c[31]):((((0,c[68])(c[26],c[78]),((0,c[64])(c[31]),c[40])(c[78],c[39],(0,c[53])()),c[40])(c[41],c[13],(0,c[59])()),c[52])(c[49],c[31]),(0,c[6])(c[65]))),
c[32]!=4&&(c[81]!=-1||((0,c[28])((0,c[40])(c[41],c[39],(0,c[59])()),c[68],c[35],c[41]),NaN))&&(0,c[28])((0,c[40])(c[31],c[39],(0,c[59])()),c[29],c[71],c[78])}}catch(d){return"enhanced_except_nZwB4uP-_w8_"+a}return b.join("")};