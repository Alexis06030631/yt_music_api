const gma = /^[\w.]*$/
const signatureTimestamp = 20041

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
		url = orgaCompose(m.RE,m.mI,m.s)
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
	a={IZ:!1,RE:"",mI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.IZ=!0;
a.RE=b.url;
a.mI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
UL.oP(a,1);
UL.Wj(a,31);
UL.Wj(a,58);
UL.kI(a,44);
UL.oP(a,2);
UL.Wj(a,11);
UL.kI(a,39);
UL.Wj(a,5);
return a.join("")
}

var UL={oP:function(a,b){a.splice(0,b)},
Wj:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
kI:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[1725833647,"bAEmi",1178028506,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d){d.reverse()},
function(d,e){e.splice(e.length,0,d)},
-1778854875,b,-1553519264,252383716,-2052154507,-856080184,-1798450313,b,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
b,-1054541486,function(d,e,f,h,l,m){return e(h,l,m)},
null,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
null,484527317,function(d,e,f,h,l){return e(f,h,l)},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
function(d,e,f){var h=d.length;f.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},e.split(""))},
function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
1416825181,433822610,-639438614,-1441899530,343566068,629371331,"\u22db,}",660253792,1088407830,533229507,1207155655,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
676981485,531380896,844866183,701335150,-1609168461,836836316,1425647269,1389439333,-1099193187,-2139278567,1228055390,-1970744596,1389439333,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
1282517832,1888127297,1711825785,-1159532949,-12261631,function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
-1259688,-1124383901,-1592827160,-131904266,function(d,e){e.push(d)},
null];c[18]=c;c[20]=c;c[63]=c;try{try{c[new Date("1969-12-31T15:00:43.000-09:00")/1E3]>=6?(((((0,c[51])(c[13]),c[62])(c[43],c[20]),c[25])(c[7],c[21]),c[14])(c[7],c[42]),c[14])(c[7],c[31]):(0,c[22])(((0,c[19])(c[39],c[7]),(0,c[22])((0,c[24])((0,c[37])(),c[1],c[13]),c[24],(0,c[3])(),c[1],c[7]),(0,c[19])(c[55],c[15])),c[57],c[15],c[45]),c[48]>8?(0,c[25])(c[15],c[47]):(0,c[4])(c[18]),c[33]!=2&&(((0,c[19])(c[27],c[15])>>>(((((0,c[14])(c[15],c[8]),c[4])(c[13]),c[51])(c[15]),c[19])(c[40],c[13]),(0,c[25])(c[18],
c[10]),c[25])(c[18],c[new Date("1970-01-01T04:45:44.000+04:45")/1E3]))*((0,c[22])((0,c[14])(c[63],c[33]),c[0],c[57],c[30]),(0,c[2])(c[40],c[38]),(0,c[61])(c[44],c[36])),(0,c[64])((0,c[1])((0,c[14])(),c[43],c[49]),c[28],c[57]),c[47])(c[0],c[40]),(c[38]!==-5||((0,c[28])(c[49]),0))&&(0,c[39])(c[62],c[11]),c[6]!==-3&&(c[26]<9&&(((0,c[10])(c[39]),c[10])(c[22])+(0,c[28])(c[31]),"true")||(0,c[41])((0,c[21])(c[39],c[17]),c[16],(0,c[50])(c[42],c[51]),c[42],c[7])),c[52]!=-3&&(c[9]>=-4?(0,c[16])(c[31],c[5]):
(0,c[38])(c[31],c[8])),c[9]>new Date("1969-12-31T18:29:54.000-05:30")/1E3&&(c[59]!=10||((0,c[46])((0,c[16])(c[39],c[61]),c[49],(0,c[62])(),c[25],c[31]),""))&&(0,c[46])((0,c[16])(c[31],c[19]),c[10],c[31])}catch(d){(0,c[43])(c[35],c[39]),(((0,c[43])(c[11],c[44]),c[38])(c[18],c[54]),c[43])(c[53],c[39]),(0,c[46])((0,c[49])((0,c[62])(),c[25],c[31])&(0,c[38])(c[44],c[56]),c[16],c[18],c[15])}try{c[7]>-8&&(c[60]===9&&((0,c[28])(c[18]),2)||(0,c[10])(c[44]))}catch(d){(0,c[22])(c[2],c[21])}finally{c[51]<=8&&
(c[1]!=3?(0,c[27])(c[34],c[29]):(0,c[16])((0,c[38])(),c[40],c[34])),c[41]!==-4&&(((((0,c[49])(c[23],c[10]),c[49])(c[43],c[0]),(0,c[19])((0,c[44])(c[47],c[41]),c[27],c[21],c[5]),c[24])(c[40],c[32]),c[7])(c[47],c[10]),(0,c[60])(c[11],c[47])),(c[20]!==-8||(((0,c[61])(c[45]),c[40])((0,c[27])(),c[64],c[50]),(0,c[61])(c[50]),0))&&((0,c[39])(c[47],c[49]),c[43])((0,c[new Date("1970-01-01T01:00:02.000+01:00")/1E3])(c[45],c[10]),c[2],c[65],c[3])}}catch(d){return"enhanced_except_yZwBtuP-_w8_"+a}return b.join("")};