const gma = /^[\w.]*$/
const signatureTimestamp = 19787

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
	const url = orgaCompose(m.PC,m.WF,m.s)
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
	a={zX:!1,PC:"",WF:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.zX=!0;
a.PC=b.url;
a.WF=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
xP.Hp(a,2);
xP.RU(a,72);
xP.vX(a,32);
xP.Hp(a,1);
return a.join("")
}

var xP={vX:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
RU:function(a){a.reverse()},
Hp:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(""),c=[-982200560,-1010424790,-1942217753,function(d){d.reverse()},
function(d,e,f,h,l,m,n){return d(l,m,n)},
-54529729,550506504,function(d,e,f,h,l,m,n,p){return d(m,n,p)},
function(d,e,f,h,l){return e(f,h,l)},
-1382817043,2007791174,1122092461,1831924158,-2092162268,290051009,465043636,-982200560,-268649837,-621236801,null,-897658187,411820301,-237506617,1439322680,function(d,e,f,h,l,m,n,p,q,r,t){return d(f,h,l,m,n,p,q,r,t)},
-1640298868,809773541,1425188306,1886165812,-809457866,-14082338,648347062,-54529729,-517161816,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
1371766848,-742728069,function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
189320451,b,b,-243309904,'[]",',function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
function(d){d.reverse()},
"indexOf",-1432332709,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
1138101778,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
1662357009,null,-516429342,1218301180,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
1039985183,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
"[,\\'",function(d,e,f){var h=d.length;e.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},f.split(""))},
1401696304,b,function(d,e){0!=e.length&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
-829773321,905142843,'[]",',46926804,-621636830,2007791174,null,1236519926,-1997132466,function(d,e,f,h,l,m,n,p,q,r){return e(l,m,n,p,q,r)},
1687336459,-1945555577,1436039688,1566604914,-1784849601,1439322680,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
637998836,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-166147937,411820301,2078137652,-777560667,-1901195137,-1065523270,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-2045091700];c[19]=c;c[51]=c;c[69]=c;try{try{c[73]!==50*Math.pow(8,1)+-393&&(-1!=c[76]&&((0,c[24])(c[7],(0,c[37])(c[51],c[12]),c[79],(0,c[61])(c[12-Math.pow(2,3)- -55],c[40]),(0,c[181*Math.pow(6,3)+-39059])(c[51],c[26]),(0,c[58])((0,c[88])(),c[39],c[45]),(0,c[61])(c[356%Math.pow(2,2)-new Date("1969-12-31T19:58:40.000-04:00")/1E3],c[4731-Math.pow(2,4)+-4675]),c[48],c[69]),",")||(0,c[36])((((0,c[84])(c[45],c[67]),c[84])(c[42],c[67]),((0,c[86])((0,c[62])(),c[88],c[73]),c[89])(c[new Date("1970-01-01T06:00:01.000+06:00")/
1E3],c[79]),c[31])(c[47]),c[77],c[39],c[92-new Date("1969-12-31T19:35:56.000-04:30")/1E3%Math.pow(2,5)])),-8>=c[29]&&(-1>c[1]?(((((0,c[36])((0,c[77])(c[49],c[47]),c[88],c[52],c[78]),c[79-Math.pow(2,5)%122])((0,c[42])(c[78]),c[76],c[58],c[new Date("1969-12-31T15:45:15.000-08:15")/1E3]),(0,c[10])(c[34],c[9]),c[28])(c[23],c[18]),c[25])(c[62]),c[30])((0,c[30])((0,c[30])((0,c[59])(c[1],c[57]),c[11],c[-201682+84*Math.pow(7,4)],c[41]),c[new Date("1970-01-01T07:01:25.000+07:00")/1E3],c[67],c[4060+Math.pow(2,
2)-4015]),c[7],c[81],c[18]):(0,c[30])(((0,c[7])(c[8],c[18])===(0,c[39])(c[18]))-(0,c[16])((0,c[46])(),c[Math.pow(1,3)- -32767+-32680],c[9]),c[56],(0,c[12])((0,c[56])((0,c[16])((0,c[82])(),c[18],c[9]),c[16],(0,c[82])(),c[88],c[9]),c[56],(0,c[56])((0,c[39])(c[88]),c[26],c[22],c[-57828+Math.pow(6,1)+57910]),c[7],c[70],c[new Date("1969-12-31T14:31:07.000-09:30")/1E3]),(0,c[39])(c[87]),(0,c[51])(c[87]),c[37],c[10],c[3])),(10==c[31]||((0,c[56])((0,c[19])(c[31],c[3]),c[39],c[3]),0))&&((0,c[63])(c[78],c[1]),
c[63])(c[89],c[71]),7!==c[new Date("1969-12-31T21:45:44.000-02:15")/1E3]&&(((0,c[52])(c[54],c[1]),c[4])(c[22],c[21]),c[33])((0,c[82])(c[18],c[23-Math.pow(1,5)%211]),c[72],c[250%Math.pow(6,5)+-207],c[1]),-5<=c[59]?((0,c[53])((0,c[0])(c[36],c[21]),c[12],c[67],c[1]),(0,c[12])(c[33],c[16]),c[12])(c[61],c[82]):((0,c[53])((0,c[24])(c[16],c[51]),c[12],c[64],c[21]),c[70])(c[42])!==(0,c[6])(c[33],c[88]),c[1]!==Math.pow(3,5)+-2975- -2724?(0,c[6])(c[30],c[67]):(0,c[-5040-Math.pow(6,1)+5111])(c[68],c[34])}catch(d){(0,c[31])(c[7]),
(0,c[38612-Math.pow(1,1)-38605])(c[20],c[68]),(((0,c[65])(c[47],c[66]),c[6])(c[44],c[88]),(0,c[6])(c[64],c[47]),c[86])((0,c[62])(),c[67],c[79])}finally{2>=c[89]&&(0,c[0])((0,c[15])(c[37],c[47]),((0,c[31])(c[73]),c[53])((0,c[89])(c[65],c[42]),c[46],c[73],c[75]),c[16],(0,c[16])((0,c[77])(c[50-new Date("1969-12-31T17:20:25.000-06:45")/1E3%Math.pow(4,2)],c[59]),c[52],c[39],c[75]),c[33],c[74])}try{-9<=c[13]&&(9==c[50]?((((0,c[46])(c[84],c[5]),c[49-Math.pow(3,1)%11])(c[87],c[54]),c[46])(c[68],c[5]),c[56])((0,c[67])(),
c[54],c[63]):(0,c[20])(c[46],(0,c[46])(c[38],c[74]),(0,c[65])(c[9],c[74]),(0,c[537861-224*Math.pow(7,4)])(c[85],c[75]),c[47],c[75]))}catch(d){(0,c[65])(c[25],c[45])}}catch(d){return"enhanced_except_y5oBtOX-_w8_"+a}return b.join("")};