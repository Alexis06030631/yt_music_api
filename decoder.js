const gma = /^[\w.]*$/
const signatureTimestamp = 19808

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
	const url = orgaCompose(m.YC,m.kG,m.s)
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
	a={KX:!1,YC:"",kG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.KX=!0;
a.YC=b.url;
a.kG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
nNa.VA(a,19);
nNa.O7(a,1);
nNa.VA(a,14);
return a.join("")
}

var nNa={VA:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
O7:function(a,b){a.splice(0,b)},
ux:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(""),c=[-1218910451,1140489039,-37497222,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1990182565,-64606670,1128031930,-263823853,-2044342197,-1652846130,732236121,function(d,e){0!=e.length&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
-829129099,-201218313,1985463922,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
1479418341,1459248614,-1621266906,b,1966077638,-131558299,1395464835,-1182524275,-62198493,"while",null,-2072116181,-786840886,-970475897,1363905298,279845629,1163531941,"finally",381263328,-29812139,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
-751418778,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
1818953160,-250984930,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
-1620437908,-635840636,-1534322647,565608084,577226472,function(d,e){if(0!=e.length){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
-302367544,-1245432862,function(d,e){e.push(d)},
"{),(,",1008031351,null,-1312553669,-837147260,809230729,-551459325,",[),",-192229780,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
483767713,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-681734473,720829542,1185331555,696311558,null,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-1184398345,1890090853,2033491454,-29812139,function(d,e,f){var h=e.length;d.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},f.split(""))},
-1997251132,1117892358,-1559269768,-426891313,-1447793437,783283379,function(d,e,f,h,l,m){return e(h,l,m)},
1297774608,-1768994775,539347534,1960586930,539347534,869934043,/'"]\\\]\/\['};,{;/,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e,f,h,l){return e(f,h,l)},
576069720,1960797620,function(d){d.reverse()},
b,b,424918197];c[26]=c;c[54]=c;c[68]=c;try{try{c[14]>=252%(new Date("1970-01-01T08:21:19.000+08:15")/1E3)-Math.pow(1,1)-246&&((0,c[74])(c[19],(0,c[3])(),c[33]),"false")||(0,c[-129*Math.pow(1,2)- -170])(c[96],c[68]),c[75]<new Date("1970-01-01T07:45:00.000+07:45")/1E3&&((0,c[new Date("1969-12-31T20:00:11.000-04:00")/1E3])(c[34],c[54]),c[11])(c[49],c[19]),9>c[35]&&(4>=c[12]||((0,c[41])(c[65],c[19]),null))&&(0,c[42])(c[91],c[94]),-3!=c[64]&&(-8>c[46]||((0,c[11])(c[43],c[26]),0))&&(0,c[11])(c[28],c[95]),
c[1]<=183*Math.pow(4,5)-187402&&((0,c[74])(c[19],(0,c[89])(),c[33]),1)||(0,c[Math.pow(8,2)%282-22])(c[75],c[0]),6!=c[37]&&(6!=c[37]&&(((0,c[36])(c[52],c[56]),c[Math.pow(3,2)+3600-3573])(c[90],c[85]),/\//)||((0,c[24])(c[2940+Math.pow(6,1)-2934],c[14]),c[62])(c[7],(0,c[26])(),c[13])),-1<=c[68]&&(9>c[31]?(0,c[78])((0,c[78])((0,c[39])(c[5],c[14]),c[36],c[9],c[7]),c[62],c[82],(0,c[269%Math.pow(2,5)+44])(),c[13]):((0,c[62])(c[82],(0,c[88])(),c[21]),c[81])(c[0])>>(0,c[62])(c[82],(0,c[57])(),c[21])),(3==
c[18]||((0,c[24])(c[20],c[85]),0))&&(0,c[27])(c[51],c[96])}catch(d){(0,c[20])(c[6],c[73]),(0,c[92])(c[76]),(0,c[15])(c[32],c[47]),((0,c[15])(c[Math.pow(3,1)+8- -60],c[73]),c[53])(c[73],(0,c[48])(),c[4]),((0,c[20])(c[66],c[89]),c[21])(c[78],c[96]),(0,c[87])(c[24],c[76])}try{(4!=c[80]||(((0,c[20])(c[91],c[96]),c[20])(c[52],c[96]),void 0))&&(0,c[69])((0,c[87])(c[94],c[5]),c[15],c[84],c[5]),-6>=c[70]&&(-8<c[67]?(0,c[4])((0,c[86])(c[24],(0,c[14])(),c[37]),c[53],c[68],c[38]):(0,c[4])((0,c[54])(c[59],c[33]),
c[27],c[33])),c[55]<=Math.pow(2,new Date("1969-12-31T22:00:01.000-02:00")/1E3)-70+67?(0,c[75])((0,c[93])(((0,c[48])(c[78],c[8])|(0,c[60])(c[67],c[8]))^(0,c[54])(c[28],c[38]),c[73],(0,c[55])((0,c[73])(c[42],c[89]),c[new Date("1969-12-31T15:31:18.000-08:30")/1E3],c[84]),c[83],c[15+Math.pow(8,2)+5]),c[55],(0,c[6])(c[94],c[59]),c[73],c[45],c[75]):((((((0,c[13])(c[11],c[62]),c[55])((0,c[7])(c[4],c[59]),c[7],c[60],c[33]),c[6])(c[36],c[75]),c[13])(c[32],c[33]),c[55])((0,c[73])(c[19],c[62]),c[6],c[22],c[59]),
(0,c[7])(c[63],c[89])),-5!==c[25]&&(0,c[55])((0,c[13])(c[158+Math.pow(5,2)+-148],c[89]),c[13],c[27],c[62]),(-6!=c[77]||((0,c[6])(c[0],c[23]),""))&&(0,c[7])(c[92],c[84]),6<c[27]&&(9<c[69]||((0,c[55])((0,c[13])(c[Math.pow(8,3)-12876+12440],c[62]),c[1],c[66],c[62]),0))&&(0,c[4])(c[40],(0,c[30])(),c[53])|(0,c[121*Math.pow(2,4)-1932])(c[49],(0,c[30])(),c[53]),-4>=c[8]&&(2!==c[290%Math.pow(new Date("1969-12-31T20:15:03.000-03:45")/1E3,5)- -30]||(((0,c[64])(c[8],c[96]),c[69])(c[88],c[49]),0))&&(0,c[20])((0,c[64])(c[37],
c[-20+Math.pow(6,3)%133]),c[91],c[429+-95*Math.pow(4,1)],c[78]),(0<c[57]||((0,c[35])((0,c[38])(c[78]),c[84],c[73],c[78]),c[84])(c[65],c[64])&&new Date("1969-12-31T19:00:00.000-05:00")/1E3)&&(((0,c[38])(c[55]),c[79])(c[83],c[64]),c[91])(c[28],c[64]),(7==c[new Date("1970-01-01T01:16:25.000+01:15")/1E3]||((0,c[91])(c[87],c[78]),0))&&(0,c[38])(c[new Date("1969-12-31T15:16:04.000-08:45")/1E3]),-7>=c[86]&&(9==c[77]||((0,c[35])((0,c[91])(c[0],c[-4+Math.pow(7,1)%375]),c[24],c[21],c[13]),(0,c[26])(c[52]),
(0,c[12])(c[36],c[43]),0))&&(0,c[23])((0,c[67])(c[54],c[1]),c[7],c[52],(0,c[33])(),c[64])&((0,c[7])(c[89],(0,c[22])(),c[56]),c[67])(c[68],c[43])}catch(d){((0,c[7])(c[52],(0,c[69])(),c[64]),c[67])(c[18],c[66]),(0,c[14])(((0,c[7])(c[89],(0,c[69])(),c[64]),c[12])(c[49],c[43]),c[72],(0,c[72])(c[15],c[43]),c[81],c[52]),(0,c[72])(c[39],c[89]),(0,c[new Date("1970-01-01T08:45:07.000+08:45")/1E3])(c[52],(0,c[22])(),c[64]),(0,c[79])(c[19],c[1]),(0,c[26])(c[1])}}catch(d){return"enhanced_except_4JoBn-X-_w8_"+
a}return b.join("")};