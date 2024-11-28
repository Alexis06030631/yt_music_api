const gma = /^[\w.]*$/
const signatureTimestamp = 20052

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
		url = orgaCompose(m.SE,m.sI,m.s)
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
	a={XZ:!1,SE:"",sI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.XZ=!0;
a.SE=b.url;
a.sI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
ZL.fF(a,65);
ZL.fF(a,11);
ZL.O6(a,3);
ZL.nt(a,37);
ZL.O6(a,1);
ZL.nt(a,60);
ZL.O6(a,3);
return a.join("")
}

var ZL={fF:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
nt:function(a){a.reverse()},
O6:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[875576311,-1448069693,1234525672,-1697493665,1147492575,function(d,e,f,h,l,m){return e(h,l,m)},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
-969157608,1926765600,-184134170,1560964015,1565571926,1630248730,-48586663,-1194372602,1873564385,function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
-968940889,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
"pdENIJ6",function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e,f,h,l){return e(f,h,l)},
-184134170,-380699245,function(d,e){e.splice(e.length,0,d)},
116896007,b,-319812E3,-1289796474,null,975278790,954254387,1341586107,b,-1626360168,208997371,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e,f,h,l,m,n){return d(l,m,n)},
646462554,1376495635,-1775443033,1495571988,729559305,724889257,function(d,e,f,h,l,m,n,p,q,r){return e(l,m,n,p,q,r)},
-1249976948,-178777603,1240056351,2112306133,1565571926,114404980,-21308859,588241660,function(d,e){e.splice(e.length,0,d)},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
function(d,e){e.length!=0&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
-1720755332,111440256,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-1500687417,function(d){d.reverse()},
1893846259,null,80266834,489453997,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
1905910744,1548845030,1679394580,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-814935586,null,-233806251,function(d,e,f){var h=e.length;d.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},f.split(""))},
"\u22ab\\['/",b,-21308859,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())}];
c[29]=c;c[63]=c;c[72]=c;try{try{c[42]>=-9&&(c[47]!==-3||((0,c[74])(c[33],(0,c[55])(),c[19]),0))&&(0,c[56])(c[43],c[76]),c[71]!==-1&&(0,c[6])(c[77],c[72]),c[15]<7&&(c[76]!=-8||((0,c[new Date("1969-12-31T21:15:28.000-02:45")/1E3])(((0,c[35])(c[62],c[45]),c[69])((0,c[43])(c[74],(0,c[68])(),c[67]),c[-6510-Math.pow(new Date("1969-12-31T14:45:07.000-09:15")/1E3,4)+8954],c[45],(0,c[24])(),c[67])*(0,c[43])(c[2],(0,c[68])(),c[67]),c[69],(0,c[53])((0,c[43])(c[74],(0,c[68])(),c[67]),c[43],(0,c[35])(c[51],c[45]),
c[45],(0,c[24])(),c[67]),c[35],c[71],c[2]),0))&&((((0,c[64])(c[48],c[2]),c[69])((0,c[30])(c[74]),c[25],c[20],c[32]),c[25])(c[57],c[45]),c[new Date("1969-12-31T13:00:53.000-11:00")/1E3])(((0,c[47])(c[58],c[41]),c[60])(c[28],c[54]),c[37],(0,c[59])(c[23],c[14]),c[29],c[44])}catch(d){((0,c[0])(c[34],c[7]),c[47])(c[54],c[14]),(0,c[51])(c[14])}try{c[50]==1?(0,c[55])(c[7],(0,c[18])(),c[66]):(0,c[37])(c[62],c[44]),c[30]!==5&&(c[72]!=2?(((((((0,c[65])((0,c[42])(c[14]),c[78],(0,c[76])(c[39],c[57]),c[7]),(0,c[37])(c[49],
c[44])^(0,c[78])(c[10]),c[2])(c[48],c[21]),c[76])((0,c[31])(c[14],c[21]),c[31],c[67],c[64]),c[27])(c[34]),c[55])(c[14],(0,c[12])(),c[66]),c[51])(c[44]),c[59])(c[50],c[21]):((((0,c[55])(c[31],(0,c[76])((0,c[76])((0,c[36])(c[64]),c[23],c[64],(0,c[66])(),c[12]),c[36],c[68]),((0,c[31])(c[58],c[34]),c[23])(c[71],(0,c[66])(),c[12]),(0,c[41])(c[47],c[68]),c[1],c[25]),(0,c[new Date("1970-01-01T03:45:23.000+03:45")/1E3])(c[21],(0,c[66])(),c[12]),c[31])(c[6],c[64]),c[31])(c[32],c[71]),c[23])(c[21],(0,c[66])(),
c[12])*(0,c[27])(c[71])),c[54]>=-3&&((0,c[52])((0,c[19])(c[53],c[71]),c[76],(0,c[19])(c[56],c[64]),(((0,c[31])(c[28],c[21]),c[36])(c[new Date("1970-01-01T11:00:21.000+11:00")/1E3]),c[19])(c[5],c[34])&(0,c[77])(c[6],c[21]),(0,c[72])((0,c[72])((0,c[0])(c[78],c[64]),c[15],c[59],c[60]),c[32],c[64]),c[23],c[71],c[48]),1)||(0,c[4])(((((((0,c[60])(c[71]),(0,c[73])(c[25],(0,c[19])(),c[5]),c[23])(c[63],c[25]),c[65])(c[59],c[32]),c[23])(c[39],c[75]),c[37])(c[70],c[71]),(0,c[23])(c[31],c[28])),c[73],(0,c[20])((0,c[65])(c[66],
c[25]),c[65],c[34],c[62]),c[75],(0,c[35])(),c[5]),c[15]!==-2&&((0,c[20])((0,c[65])(c[27],c[75]),c[77],c[436-410%Math.pow(new Date("1970-01-01T10:15:08.000+10:15")/1E3,4)],c[62])>>>(0,c[52])(c[43],c[12]))*(0,c[42])(c[48],c[15])*(0,c[47])(c[49]),c[52]==-2?((0,c[26])(c[12],c[29]),(0,c[54])(c[67],c[16])):((0,c[38])(c[13],c[29]),c[41-new Date("1970-01-01T06:00:10.000+06:00")/1E3])(c[29])}catch(d){(0,c[53])(c[42],c[50])%(0,c[48])(c[13]),((0,c[61])(c[13],(0,c[7])(),c[72]),c[5])(c[50]),(0,c[61])(c[13],(0,c[24])(),
c[72])}}catch(d){return"enhanced_except_1JwBq-P-_w8_"+a}return b.join("")};