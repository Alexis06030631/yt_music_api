const gma = /^[\w.]*$/
const signatureTimestamp = 20011

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
		url = orgaCompose(m.YE,m.oI,m.s)
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
	a={EZ:!1,YE:"",oI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.EZ=!0;
a.YE=b.url;
a.oI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
NL.BY(a,51);
NL.Ek(a,80);
NL.Gh(a,2);
return a.join("")
}

var NL={Gh:function(a,b){a.splice(0,b)},
Ek:function(a){a.reverse()},
BY:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[97569226,-1048227574,1182824511,-1583998409,function(d){d.reverse()},
function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
1423861242,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
698353399,function(d,e,f){var h=e.length;f.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},d.split(""))},
-1846148549,515706375,-778935655,function(d,e,f,h,l){return e(f,h,l)},
257998083,882345988,511928128,function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
b,-564485778,null,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
null,function(d){throw d;},
-521550657,-1071007549,-1239738403,-2111566245,6417168,-374856876,-123818450,680128441,380376714,-18305543,"K8iEut1",-1976932130,function(d,e,f,h,l,m,n){return d(l,m,n)},
1205576120,378473785,-1534903144,1404445164,-1043678670,1270982983,2094035365,-1846148549,698353399,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
-948815797,850114719,-489995598,-1446996758,b,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
function(d,e,f,h,l){return e(f,h,l)},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(){for(var d=[],e=64;++e-d.length-32;){switch(e){case 58:e-=14;case 91:case 92:case 93:continue;case 123:e=47;case 94:case 95:case 96:continue;case 46:e=95}d.push(String.fromCharCode(e))}return e},
1011209391,/((,))\/((,))"/,1210116908,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
function(d,e,f,h,l,m){return e(h,l,m)},
-1418151754,656150441,function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
function(d,e){d.push(e)},
-1650375383,-1048227574,-1450164701,1056585716,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-1730742819,-71573892,-862437919,6417168,1322291920,function(d,e){d.splice(d.length,0,e)},
1182824511,b,1285225672,286625209,-1797381002,null,820148780];c[20]=c;c[23]=c;c[82]=c;try{try{(c[15]>=3||(((0,c[9])(c[35],(0,c[70])(),c[52])<(((0,c[47])(c[78],c[72]),c[17])(c[20],c[80]),c[5])(c[23],c[19]),(0,c[9])(c[35],(0,c[7])(),c[18]),c[4])(c[23]),NaN))&&(0,c[54])((0,c[13])((0,c[17])(c[78],c[67]),c[17],c[52],c[15]),c[53],c[52],c[34])-(((0,c[64])(c[59],c[52]),c[5])(c[18],c[77])^(0,c[5])(c[82],c[75])),(0,c[10])((0,c[49])(c[75],c[12],c[60]),c[49],c[75],(0,c[47])(),c[58])}catch(d){c[80]<0&&(c[37]===
-8&&((0,c[61])(c[34]),1)||(0,c[44])(c[8]))}try{c[33]!==4&&(((0,c[16])((0,c[77])(c[57],(0,c[9])(c[34],c[18]),(0,c[45])(c[38],c[25]),(0,c[35])(c[6],c[36]),c[70],c[69]),c[42],(((0,c[81])(c[23],(0,c[58])(),c[6]),(0,c[41])(c[8],c[10]),c[34])(c[52],c[29]),c[55])(c[83],c[41]),c[32],c[61],c[7]),(((0,c[58])(c[32],c[17]),(0,c[59])(c[13],c[43]),(0,c[10])(c[11],c[21]),c[10])(c[17],c[85]),(0,c[83])(c[11],c[19]),c[58])(c[30],c[76]),c[41])(c[72],c[27]),1)||(0,c[31])(c[47],(0,c[48])((0,c[6])((0,c[83])(c[76],c[7]),
c[2],c[29],(0,c[49])(),c[11]),c[41],c[72],c[36]),(((0,c[2])(c[29],(0,c[40])(),c[72]),c[48])((0,c[2])(c[29],(0,c[40])(),c[11]),c[2],c[29],(0,c[40])(),c[72]),(0,c[6])((0,c[47])(c[76],c[84]),c[82],c[13]),(0,c[2])(c[29],(0,c[-18067+Math.pow(2,new Date("1969-12-31T19:15:03.000-04:45")/1E3)+18108])(),c[72]),c[10])(c[76],c[new Date("1969-12-31T19:16:08.000-04:45")/1E3]),(0,c[6])((0,c[41])(c[46],c[60]),c[2],c[29],(0,c[40])(),c[46]),c[76],c[77])>>(0,c[55])((0,c[41])(c[72],c[26]),c[2],(0,c[41])(c[76],c[37]),
c[29],(0,c[5])(),c[72]),(0,c[6])((0,c[82])(c[35]),c[15],c[46])}catch(d){c[45]!=-3&&((((0,c[15])(c[17]),c[75])(c[13],c[12]),c[38])(c[9],c[50]),c[64])(c[71],c[new Date("1970-01-01T10:00:17.000+10:00")/1E3])}try{c[37]>=5&&(c[49]<=-9?(0,c[0])(c[30],c[65]):(0,c[31])(c[28],c[70])),(0,c[79])((0,c[23])(),c[69],c[46],c[51])}catch(d){}try{c[67]==2&&((0,c[35])((0,c[79])((0,c[69])(c[8],c[28]),c[39],c[12],(0,c[78])(),c[81]),c[25],c[81],c[7]),"false")||((0,c[35])((0,c[16807-422%(new Date("1970-01-01T07:16:04.000+07:15")/
1E3)-16725])(c[30],c[32]),c[31],c[81],c[82]),c[31])(c[28],c[new Date("1969-12-31T23:01:16.000-01:00")/1E3]),c[40]>-3&&(c[67]!==-10||((((0,c[39])(c[12],(0,c[0])(),c[30]),(0,c[39])(c[12],(0,c[0])(),c[30]),c[80])(c[24],c[21]),c[80])(c[28],c[37]),0))&&((((0,c[44])(c[28],c[new Date("1969-12-31T17:00:52.000-07:00")/1E3]),c[25])(c[55],c[69]),c[6])(c[35]),c[49])(c[83],c[61]),c[22]>2&&(0,c[15])((0,c[60])(c[4],c[42]),c[68],c[74])}catch(d){(0,c[69])((0,c[17])(c[67]),c[23],c[50],(0,c[26])(),c[67]),(0,c[68])(c[32],
c[59])}finally{c[42]<7&&(c[15]!=-6||(((0,c[23])(c[50],(0,c[26])(),c[32]),c[18])(c[7],c[46]),0))&&((0,c[36])(c[67]),c[68])(c[67],c[2])}}catch(d){return"enhanced_except_q5wB1OP-_w8_"+a}return b.join("")};