const gma = /^[\w.]*$/
const signatureTimestamp = 19709

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
	const m = mapDecompose(format)
	const url = orgaCompose(m.QC,m.QF,m.s)
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
	a={QW:!1,QC:"",QF:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.QW=!0;
a.QC=b.url;
a.QF=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
JP.Pf(a,3);
JP.oC(a,38);
JP.Pf(a,2);
JP.sC(a,60);
JP.oC(a,6);
return a.join("")
}

var JP={Pf:function(a,b){a.splice(0,b)},
oC:function(a){a.reverse()},
sC:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(""),c=[473637274,1157956536,1945331957,-1623365984,1118948002,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-1815406119,1788021310,-1049278741,-1385428494,b,211610085,1905622034,1293526151,-1339364302,null,";)\u228a,",function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
1398414898,-1009228005,-1894685742,function(d,e){e.splice(e.length,0,d)},
1945331957,-620476020,-1846722739,-1109147833,-1049278741,b,b,-422875694,function(d,e,f,h,l,m,n){return d(l,m,n)},
-934953714,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
862395635,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(){for(var d=[],e=64;++e-d.length-32;)switch(e){case 58:e=96;continue;case 91:e=44;break;case 65:e=47;continue;case 46:e=153;case 123:e-=58;default:d.push(String.fromCharCode(e))}return e},
-390729627,-1748343171,function(d,e){if(0!=e.length){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
777275913,-593710499,-1986792782,-1157285015,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
1783262551,"is7N12k",-1984234554,924633505,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
1016671588,-144468082,-515077338,null,function(d){d.reverse()},
-1097527858,function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
2124687337,-576664080,function(d,e,f,h,l,m){return e(h,l,m)},
function(d,e,f,h,l){return e(f,h,l)},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
function(d,e,f){var h=d.length;f.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},e.split(""))},
1379938254,1564698599,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
2098750430,2080517703,function(d,e,f,h,l){return e(f,h,l)},
892858932,1755412994,null,-279369353,-925338845,-1238604070,824900843,function(d,e,f,h,l,m,n){return d(l,m,n)},
877495123,679279181,1889134949,-936540168,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)}];
c[15]=c;c[52]=c;c[70]=c;try{try{8<=c[63]?(0,c[74+Math.pow(1,4)%164])(c[38],(0,c[38])(c[13],c[52]),(0,c[48])(c[25],c[52]),((0,c[54])(c[72],c[18]),c[54])(c[2],c[0]),c[69],c[17]):(0,c[48])((0,c[51])((0,c[-136*Math.pow(7,1)- -976])(),c[35],c[Math.pow(1,5)-23- -39]),c[70],((0,c[71])(c[17]),c[57])((0,c[33])(c[5]),c[new Date("1969-12-31T22:00:38.000-02:00")/1E3],c[39],c[5]),c[0],c[36]),-6!=c[29]?(((0,c[54])(c[16],c[60]),c[2])(c[80],c[37]),c[28])(c[56]):(((0,c[66])(c[75],c[55]),c[198-171%Math.pow(6,5)])(c[56],
c[48]),c[2])(c[38],c[10]),((0,c[-18100+Math.pow(5,4)+17477])(c[1],c[17]),c[28])(c[55])<(0,c[8])((0,c[64+Math.pow(5,2)+-56])(),c[73],c[38])}catch(d){5!=c[68]?((0,c[27])(c[-218*Math.pow(5,4)- -136305],c[Math.pow(6,1)+54E3+-53937]),(0,c[11])(c[31],c[17]),c[60])((0,c[59])(),c[44],c[9]):(((0,c[47])(c[77],c[14]),c[79])(c[26],c[52]),c[47])(c[17],c[9])}try{-5!==c[61]&&(-7>=c[Math.pow(4,4)-2054+1871]&&((0,c[57])((0,c[37])(c[28],c[27]),c[60],(0,c[54])(c[51],c[49]),(0,c[59])(),c[44],c[27]),"9")||(((0,c[63])(c[Math.pow(6,
5)+165+-7906],c[51]),c[78])(c[24]),c[-79*Math.pow(8,3)+40526])(c[52],c[74])),7===c[28]?(0,c[48])(c[new Date("1970-01-01T07:45:20.000+07:45")/1E3],c[10]):(0,c[73])(c[58],c[77]),-10<=c[46]&&(-5<c[35]||(((0,c[47])(c[32]),(0,c[48])(c[19],c[218-387%Math.pow(3,5)]),c[80])(c[36],c[19]),""))&&(((0,c[9])(c[66],c[37]),c[73])(c[37],c[60]),c[26])(c[29],c[32]),6!=c[57]?(((0,c[64])(c[24],c[19]),(0,c[64])(c[72],c[37]),((0,c[47])(c[32]),c[1])(c[78],c[23]),c[31])(c[28],c[71]),c[40])(c[47],c[67]):(0,c[43])(((0,c[37])((0,c[new Date("1969-12-31T21:01:14.000-03:00")/
1E3])(),c[20],c[3]),(0,c[37])((0,c[74])(),c[20],c[3]),c[35])((0,c[40])(c[81],c[3])*(0,c[37])((0,c[74])(),c[20],c[2]),c[57],c[230%Math.pow(7,4)-227]),c[37],(0,c[36])(),c[20],c[2]),c[6]<=new Date("1970-01-01T03:44:51.000+03:45")/1E3&&(6>c[69]?(0,c[56])(c[3],c[53]):(0,c[13])(c[6],c[72])),(0,c[37])(c[10],c[20],c[3]),((0,c[56])(c[3],c[64]),c[26304-Math.pow(6,2)-26231])((0,c[0])(),c[20],c[67])}catch(d){10!=c[53]&&(0,c[7])(((((0,c[41+326%Math.pow(6,1)])((0,c[13])(c[42],c[245+Math.pow(7,2)+-222]),c[24],c[41],
c[28]),(0,c[49])(c[15],c[40-481%Math.pow(3,1)]),c[67])(c[39],c[53]),(0,c[60])(c[69],c[21]),c[54])(c[0]),c[32])(c[30],c[17]),c[2],(0,c[11])((0,c[2])((0,c[14])(c[55],c[79]),c[21],c[78],c[43]),c[77],(0,c[14])(c[42],c[37]),c[51],c[-7339972- -224*Math.pow(8,5)]),c[14],c[60],c[64]),-5<c[48]&&(-1!==c[48]?(0,c[27])(c[42]):(0,c[14])(c[81],c[5])),3!=c[47]&&(7>c[52]?(0,c[71])(c[42],c[68])>(0,c[-247*Math.pow(2,1)+502])((0,c[36])(),c[25],c[60]):((0,c[32])(c[31],c[42]),c[32])(c[75],c[60]))}}catch(d){return"enhanced_except__ZkBgub-_w8_"+
a}return b.join("")};