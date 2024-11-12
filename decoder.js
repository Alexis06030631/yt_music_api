const gma = /^[\w.]*$/
const signatureTimestamp = 20034

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
		url = orgaCompose(m.PE,m.hI,m.s)
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
	a={HZ:!1,PE:"",hI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.HZ=!0;
a.PE=b.url;
a.hI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
PL.VM(a,3);
PL.cW(a,77);
PL.b6(a,35);
PL.VM(a,3);
return a.join("")
}

var PL={VM:function(a,b){a.splice(0,b)},
b6:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
cW:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[1898951252,461789197,1736598469,-347375159,-1699488302,b,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-797759988,function(d,e,f,h,l){return e(f,h,l)},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-84031199,-1477834396,-1020373102,-84031199,1762658619,-2147339412,506280757,-637274632,-1493057410,-1399161167,-32345701,2119365576,-1927289684,1766960517,2025676041,null,-640655844,-1185479256,535598050,-267839368,-922116009,-1601471967,-295682849,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
927620460,"\u2245(,;\\",1140673181,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
null,-1791033435,1098118537,32621764,b,1968240427,function(d,e){e.splice(e.length,0,d)},
function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-1704225876,-218808670,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
2025059395,-347375159,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-769778561,-567545334,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
function(d){d.reverse()},
-1591281661,1735451531,869281988,1793629140,367080755,"cvQYq_",b,1631865562,function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
function(d,e,f,h,l,m){return e(h,l,m)},
204641608,461789197,null,-72341316,664752398,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
1745316872,-492652971,-407032485,19602281,function(d,e,f){var h=e.length;d.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},f.split(""))},
-686439167,1634134109,19602281,-1188189220,-769778561,-483506543,"while"];c[25]=c;c[38]=c;c[68]=c;try{try{(c[50]!==4||((0,c[54])(c[13],c[42]),NaN))&&(0,c[55])(c[38]),c[81]<4&&(c[52]<=10||((0,c[39])((0,c[29])(c[59]),c[19],(0,c[7])(c[79],(0,c[47])(),c[0]),c[7],(0,c[51])(c[57],c[46]),c[42],(0,c[33])(),c[23]),0))&&((0,c[13])(c[63],c[46]),c[47])((0,c[68])(c[30],c[51]),c[1],c[61],c[78])>=(0,c[22])(c[57],c[78]),(c[74]>=1||((((0,c[63])(c[13],(0,c[18])(),c[79]),c[1])(c[21],c[13]),c[76])(c[17],c[25]),((0,c[1])(c[38],
c[50]),(0,c[76])(c[72],c[43]),c[22])(c[12],c[17]),0))&&((0,c[47])((0,c[22])(c[6],c[30]),c[6],c[32],c[59]),((0,c[6])(c[45],c[4]),c[83])(c[0],c[63]),c[62])((0,c[37])(c[12],c[65]),c[83],c[8],c[46]),c[15]!=-7&&(c[new Date("1970-01-01T02:45:24.000+02:45")/1E3]!=10&&((0,c[62])((0,c[new Date("1969-12-31T17:45:37.000-06:15")/1E3])(c[24],c[2]),c[67],c[16],c[83]),1)||((0,c[62])(c[49],(0,c[48])(),c[78]),c[67])(c[49],c[61])),c[76]!==5&&(0,c[46])((0,c[46])(((0,c[62])(c[49],(0,c[3])(),c[55]),c[21])(c[1],c[71]),
c[18],c[71],c[83]),c[27],c[29],c[75]),c[29]==-4&&(((0,c[15])((0,c[68])(c[83],(0,c[9])(),c[84]),c[52],(0,c[68])(c[55],(0,c[12])(),c[61]),c[30],c[32],c[55]),c[68])(c[55],(0,c[23])(),c[84]),1)||(0,c[18])(c[60],c[83])>(((0,c[68])(c[55],(0,c[9])(),c[84]),c[18])(c[28],c[35]),c[39])(c[40],c[43]),c[28]!=3&&(c[74]>-3?(0,c[43])(c[58],(0,c[29])(),c[36]):(0,c[78])(c[new Date("1970-01-01T04:46:00.000+04:45")/1E3],c[50])),c[67]!=7?((0,c[55])((0,c[56])(c[82],c[13]),c[5],(0,c[48])(c[52],c[19]),c[39],c[50]),c[27])((0,c[26])(c[30]),
c[48],c[30],c[65]):(0,c[43])(c[50],(0,c[72])(),c[59])>>((0,c[43])(c[50],(0,c[83])(),c[36]),(0,c[27])((0,c[5])(c[17],c[50]),c[43],c[58],(0,c[69])(),c[36]),c[26])(c[30]),c[6]!=-6&&(c[17]<3&&(((0,c[27])((0,c[5])(c[21],c[82]),c[26],c[10]),(0,c[26])(c[82]),c[48])(c[52],c[32]),1)||((((0,c[56])(c[50],c[0]),c[2])(c[44],c[58]),c[78])(c[33],c[58]),c[78])(c[73],c[50])),c[42]!==-1&&(c[18]==5||(((((0,c[5])(c[57],c[30]),(0,c[26])(c[58]),c[78])(c[16],c[52]),c[59])(c[30]),c[73])(c[41]),0))&&(0,c[60])((0,c[60])((0,c[3])((0,c[76])(c[83],
(0,c[20])(),c[7]),c[76],(0,c[76])(c[6],(0,c[31])(),c[69]),c[83],(0,c[31])(),c[7]),c[76],c[83],(0,c[31])(),c[7]),c[26],c[80],c[43]),c[45]===-7&&((0,c[60])((0,c[4])(c[63],c[1]),c[76],c[6],(0,c[31])(),c[69]),/,\//)||((0,c[24])(c[65],c[0]),c[26])(c[48],c[30]),(c[67]===3||((((0,c[43])(c[15],c[14]),c[43])(c[33],c[60]),c[34])((0,c[55])(c[60],c[16]),c[9],c[13],c[4]),0))&&(0,c[41])((0,c[12])((0,c[42])(c[38],c[83]),c[28],c[15],(0,c[14])(),c[45]),c[73],(0,c[49])(c[35]),c[34],c[15])}catch(d){((0,c[28])(c[44],
(0,c[14])(),c[21]),c[28])(c[35],(0,c[14])(),c[21]),(0,c[new Date("1970-01-01T05:45:49.000+05:45")/1E3])(c[38]),((((0,c[49])(c[38]),(0,c[28])(c[35],(0,c[58])(),c[21]),c[11])(c[38]),c[76])(c[70],c[15]),c[76])(c[67],c[35]),(0,c[12])((0,c[33])(c[68],c[5]),c[16],c[30],c[new Date("1969-12-31T22:30:44.000-01:30")/1E3]),((0,c[76])(c[66],c[35]),c[49])(c[15])}}catch(d){return"enhanced_except_wpwBveP-_w8_"+a}return b.join("")};