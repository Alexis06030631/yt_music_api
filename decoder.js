const gma = /^[\w.]*$/
const signatureTimestamp = 19774

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
	const url = orgaCompose(m.NC,m.UF,m.s)
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
	a={qX:!1,NC:"",UF:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.qX=!0;
a.NC=b.url;
a.UF=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
zP.W3(a,3);
zP.VT(a,40);
zP.ws(a,36);
zP.W3(a,3);
zP.VT(a,32);
zP.W3(a,2);
zP.ws(a,46);
zP.W3(a,1);
zP.VT(a,75);
return a.join("")
}

var zP={W3:function(a,b){a.splice(0,b)},
ws:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
VT:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(""),c=[1975164600,1181721961,1798520046,-1557670069,-2033449353,b,null,-508211218,1477088808,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
b,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
1809316041,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-982550789,-88820923,-188063832,1951231350,-976061883,"UrDNrY",function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
-399978356,-2095123417,function(d,e){if(0!=e.length){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
1372040645,1892029759,1179430931,-1969941134,"\u22b2/",function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
102703836,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
-1043033466,function(d,e,f,h,l,m,n){return d(l,m,n)},
1465792875,-1062824190,1524233271,1455935843,-468649979,null,-1360969732,1861937161,16171114,function(d,e,f,h,l){return e(f,h,l)},
-2043552577,1485991550,function(d,e){0!=e.length&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
-1818792868,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-1747234913,-1918438866,-2027489150,-584111290,function(){for(var d=[],e=64;++e-d.length-32;)switch(e){case 58:e=96;continue;case 91:e=44;break;case 65:e=47;continue;case 46:e=153;case 123:e-=58;default:d.push(String.fromCharCode(e))}return e},
16171114,function(d,e,f,h,l,m){return e(h,l,m)},
753685765,b,-82701502,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
function(d){d.reverse()},
1978516859,function(d,e,f){var h=e.length;f.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},d.split(""))},
null,1861937161,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
-41722110,1951231350,-1048399675,function(d,e){d.splice(d.length,0,e)},
125111368,-2049501012,-485298333,1552821111,-1261843215,-983376330,function(d,e){e.push(d)},
253327465,861874371];c[6]=c;c[40]=c;c[64]=c;try{try{7==c[33]&&((0,c[11])((0,c[61])(c[6]),c[56],(0,c[44])((0,c[56])((0,c[29])(c[5]),c[32],(0,c[60])(c[40],c[22]),c[64],c[71]),c[63],c[19],(0,c[13])(),c[10]),c[63],(0,c[61])(c[10]),c[19],(0,c[9])(),c[5]),1)||(0,c[56])((0,c[44])((0,c[44])((0,c[47])(c[73],c[6]),c[23],c[57],c[64]),c[47],c[2],c[6]),c[168+-37*Math.pow(4,1)],(((0,c[60])(c[64],c[35]),c[42])(c[Math.pow(3,5)-14-165],c[17400-Math.pow(4,1)+-17395]),c[15])(c[1],c[38]),c[74],c[61]),(0,c[52])(c[8],
c[43],c[new Date("1970-01-01T11:00:47.000+11:00")/1E3]),(0,c[52])(c[8],(0,c[19])(),c[-89*Math.pow(4,4)- -22831])}catch(d){1!==c[76]&&(8>=c[24]||((((((((0,c[0])((0,c[55])((0,c[45])((0,c[21])(c[35],c[63]),c[12],(0,c[12])(c[new Date("1969-12-31T21:31:16.000-02:30")/1E3],c[75]),c[16],c[new Date("1970-01-01T08:30:29.000+08:30")/1E3]),((0,c[33])((0,c[59])(c[29],c[10]),c[49],c[47],c[77]),(((0,c[49])(c[23+Math.pow(5,1)- -46],c[40]),c[36])(c[Math.pow(4,4)+22+-208],c[53]),c[9])(c[29],c[27]))+(0,c[18])(c[55],
(0,c[44])(),c[13]),c[80-Math.pow(8,4)%64],(0,c[59])(c[new Date("1969-12-31T12:29:26.000-11:30")/1E3+Math.pow(5,4)%259],c[19]),c[65],c[41]),c[0],(0,c[65])(c[61],c[18]),c[77],c[64],c[36]),c[77])(c[75],c[36]),c[56])((0,c[68])(c[42],c[5]),c[71],c[54]),(0,c[53])(c[61],c[36]),c[40])(c[54],c[24]),c[64])(c[19],c[60]),c[77])(c[16],c[14]),c[66])(c[39],(0,c[39])(c[36]),(0,c[1])(c[45],c[77]),(0,c[42])(c[67],c[13]),c[28]),null))&&((((0,c[38])(((((0,c[26])((0,c[45])(c[25],(0,c[new Date("1970-01-01T07:46:11.000+07:45")/
1E3])(),c[40]),c[2],c[28],c[81]),(0,c[14])(c[40],c[3]),c[42])(c[68],c[41]),c[45])(c[25],(0,c[31])(),c[67]),c[26])((0,c[45])(c[25],(0,c[71])(),c[40]),c[43],c[22]),c[45],(((0,c[26])(((0,c[26])((0,c[14])(c[28],c[44]),c[29],c[30],c[22]),c[45])(c[25],(0,c[76])(),c[28])/(0,c[14])(c[40],c[57]),c[29],c[60],c[46]),c[26])(((0,c[14])(c[67],c[50]),c[2])(c[22],c[62]),c[45],c[25],(0,c[12])(),c[new Date("1969-12-31T20:45:40.000-03:15")/1E3]),c[42])(c[67],c[27]),c[Math.pow(4,5)-3+-996],(0,c[31])(),c[67]),c[2])(c[40],
c[35]),c[43])(c[40]),((((0,c[14])(c[40],c[6]),c[45])(c[25],(0,c[76])(),c[40]),c[45])(c[25],(0,c[71])(),c[28]),c[14])(c[40],c[32]),c[2])(c[28],c[24]),-3>c[30]&&(0,c[38])((0,c[5])(c[74],c[28]),c[29],(((0,c[11])(c[28]),c[26])((0,c[2])(c[67],c[79])<(0,c[42])(c[28],c[23]),c[43],c[28]),c[14])(c[28],c[65]),c[61],c[40]),4!==c[69]?((0,c[5])(c[72],c[67]),c[2])(c[28],c[49]):((0,c[42])(c[40],c[15]),c[14])(c[28],c[34])}}catch(d){return"enhanced_except_vpoBweX-_w8_"+a}return b.join("")};