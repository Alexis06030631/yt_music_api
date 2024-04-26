const gma = /^[\w.]*$/
const signatureTimestamp = 19837

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
	const url = orgaCompose(m.aD,m.sG,m.s)
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
	a={MX:!1,aD:"",sG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.MX=!0;
a.aD=b.url;
a.sG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
dP.zd(a,54);
dP.je(a,2);
dP.Kz(a,14);
dP.je(a,2);
dP.zd(a,24);
dP.zd(a,36);
dP.Kz(a,20);
dP.je(a,2);
return a.join("")
}

var dP={je:function(a,b){a.splice(0,b)},
Kz:function(a){a.reverse()},
zd:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(""),c=[-1537908352,function(d,e,f,h,l){return e(f,h,l)},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-1666695271,-106837546,-250737978,1648531650,808540394,517445039,-675036924,-1332099025,-665355487,899990130,675569584,b,-1171266471,736444058,-1066236535,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
function(d,e){if(0!=e.length){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
function(d,e,f,h,l,m,n){return d(l,m,n)},
707235013,-275681566,588812369,777085846,-1788926088,-2077355140,1905647404,1442215677,2087986763,-827965801,113940777,function(d){d.reverse()},
422493608,1019436304,-1066236535,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
b,1743682167,-1972414822,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
"-",-1991316522,-827965801,-497986679,1870722699,-1490685784,374656762,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
885620659,-1493051542,-427055191,function(d,e){e.push(d)},
1950303240,1731264525,777085846,-1251865111,92237985,null,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
null,function(d,e,f,h,l,m,n){return d(l,m,n)},
"Lm6zt",function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
";,};{;",-935927685,function(d,e,f,h,l,m){return e(h,l,m)},
function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
517445039,b,2064122032,function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
482937094,function(d,e){d.splice(d.length,0,e)},
-41952308,function(d,e,f){var h=d.length;e.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},f.split(""))},
null,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
1328341802,-39699019,-69244645,336253318];c[59]=c;c[61]=c;c[77]=c;try{try{(c[16]<47-Math.pow(3,3)-18||((0,c[20])(c[40],c[77]),""))&&(0,c[60])(c[77],c[69])}catch(d){(0,c[76])((0,c[64])(),c[14],c[63])}try{6!==c[34]&&(0,c[49])((0,c[76])((0,c[78])(),c[14],c[42]),c[67],(0,c[1])((0,c[60])(c[70],c[21012-Math.pow(5,4)-20329]),c[72],c[70],c[80]),c[68],(0,c[20])(c[17],c[77]),c[75],c[Math.pow(6,5)%268+57]),5<c[64]&&(-8<c[78]?(0,c[8])((0,c[35])((0,c[37])(),c[80],c[1]),c[43],(0,c[43])((0,c[43])((0,c[35])((0,c[0])(),
c[29],c[1]),c[35],(0,c[44])(),c[29],c[1]),c[62],c[40],c[56]),c[31],c[20],c[new Date("1970-01-01T08:00:07.000+08:00")/1E3]):(0,c[61])(c[18])===((0,c[70])(c[2],c[new Date("1969-12-31T17:00:46.000-07:00")/1E3])!==(0,c[22])(c[62],c[80]))===(0,c[39*Math.pow(6,5)-303231])((0,c[64])(c[81],c[58]),c[1],c[40]))}catch(d){(0,c[35])(c[23],c[64]),(0,c[39])(c[4],c[65])}finally{-3!=c[22]&&(((0,c[113*Math.pow(6,3)+-24339])(c[26]),c[147758+-114*Math.pow(6,4)])(c[38],c[20]),c[45])(c[80],c[71])}try{-2!==c[10]&&(-2<c[3]?
((0,c[15])(c[47]),(0,c[45])(c[40],c[11]),c[57])(c[20],c[46]):(0,c[33])((0,c[33])((0,c[14])(c[Math.pow(2,4)%108- -11],c[77]),c[49],c[70],c[56]),c[61],c[11],c[50])),7>=c[51]?(0,c[49])((0,c[57])((0,c[48])(),c[36],c[6]),c[30],c[45],c[72]):(0,c[49])((0,c[61])(c[8],c[28]),c[65],c[26],c[72]),-4<c[-2*Math.pow(3,4)+207]&&((0,c[78])((0,c[9])(c[51],c[18]),c[28],c[42],c[19]),c[28])(c[62],c[56]),-5>=c[21]&&(-6>c[3]&&(((0,c[80])(c[19],c[51]),c[9])(c[61],c[35]),1)||(0,c[28])((0,c[52])(c[35],c[26]),c[36],(0,c[27])(),
c[72],c[49])),-7!==c[46]&&(8<=c[30]&&(((0,c[28])((0,c[38])(c[35],c[37]),c[52],c[72],c[60]),c[9])(c[84],c[35]),1)||(0,c[45])((0,c[40])(c[72],c[82]),c[52],(0,c[40])(c[51],c[80]),c[53],c[63])),-9===c[22]?((0,c[40])(c[72],c[62]),c[52])(c[310-257%Math.pow(8,5)],c[83]):(0,c[81])(c[75])+(0,c[59])(c[71],c[35]),c[46]!==376964-157*Math.pow(7,4)&&((0,c[50])(c[40],(0,c[52])(c[75],c[57]),(0,c[81])(c[72]),((0,c[9])(c[19],c[35]),c[81])(c[new Date("1969-12-31T21:31:15.000-02:30")/1E3]),c[35],c[17]),1)||((((0,c[44])(c[13],
c[75]),c[10])(c[75]),(0,c[2921+Math.pow(6,4)-new Date("1970-01-01T09:24:25.000+08:15")/1E3])(c[72],c[30]),c[52])(c[Math.pow(8,3)-12+-428],c[25]),c[10])(c[35])}catch(d){(0,c[28])((0,c[28])(((0,c[52])(c[15],c[20]),c[36])((0,c[79])(),c[15],c[49]),c[52],c[53],c[23]),c[81],c[72]),(0,c[28])((0,c[52])(c[35],c[74]),c[52],c[15],c[55]),(0,c[52])(c[42],c[39])}finally{3!==c[30]&&(0,c[36])((0,c[27])(),c[75],c[49])^((0,c[10])(c[75]),c[52])(c[42],c[18]),8>=c[85]&&(2<=c[65]||(((0,c[28])((0,c[9])(c[3],c[51]),c[40],
c[72],c[46]),c[11])(c[72],c[2]),NaN))&&(0,c[28])((0,c[36])((0,c[27])(),c[0],c[70]),c[new Date("1969-12-31T19:00:44.000-05:00")/1E3],c[16],c[42])<<(0,c[81])(c[51])}}catch(d){return"enhanced_except__ZoBguX-_w8_"+a}return b.join("")};