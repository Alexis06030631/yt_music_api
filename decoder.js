const gma = /^[\w.]*$/
const signatureTimestamp = 19815

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
	const url = orgaCompose(m.RC,m.bG,m.s)
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
	a={HX:!1,RC:"",bG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.HX=!0;
a.RC=b.url;
a.bG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
gP.ZU(a,38);
gP.Fh(a,3);
gP.uO(a,37);
gP.ZU(a,10);
gP.Fh(a,3);
return a.join("")
}

var gP={uO:function(a){a.reverse()},
ZU:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
Fh:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(""),c=[1023391123,-1261176234,718038827,b,-208736032,-281319370,function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
null,-311283851,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
1235658568,2066503375,-104982008,-104982008,284725813,function(d,e){e.splice(e.length,0,d)},
-2090248559,function(d,e,f,h,l,m){return e(h,l,m)},
b,167518987,-1962826598,function(d,e){d.push(e)},
",49];c[54]=c;",-27874862,-773015417,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-595471854,22824427,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
-378561600,144647481,1686736028,-829510504,-1397712033,-1525989272,-1042176809,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
2045968666,1469679244,b,624057288,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-409954117,-909198564,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
1544540464,1606350747,-1960829034,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1511329818,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
5395607,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-200369598,function(d,e){if(0!=e.length){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
function(d,e,f,h,l){return e(f,h,l)},
1352717219,-27874862,224220817,-632805976,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
null,1947886811,1637756811,-1814940258,22593966,668276862,function(d){d.reverse()},
-1767455322,"NDnchJ",function(d,e,f){var h=e.length;f.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},d.split(""))},
1107790979,-824365245,-1438603233,1893690789,null,1012230497,-2036132808];c[7]=c;c[61]=c;c[75]=c;try{try{-10!==c[66]&&(0,c[54])(c[2],c[18])}catch(d){(0,c[36])(c[7],c[45])}finally{(0!==c[66]||((0,c[44])(((0,c[9])(c[3],c[62]),c[70])(c[69],(0,c[25])(),c[18])&(0,c[41])(c[44-Math.pow(2,2)-1]),c[55],(0,c[67])(c[7])*(0,c[9])(c[3],c[4]),c[67],c[7]),0))&&(0,c[17])((0,c[55])((0,c[54])(c[43],c[61]),c[9],c[39],c[5]),c[163-Math.pow(4,2)+-111],(0,c[54])(c[40],c[61]),c[7],c[66])^(0,c[61])((0,c[12])(c[24],c[43]),
c[22-Math.pow(2,4)%388],c[13],c[48]),-7<c[42]&&(c[Math.pow(8,3)+1980+-2440]>new Date("1969-12-31T15:14:57.000-08:45")/1E3||((((0,c[46])(c[44]),c[60])((((0,c[26])(c[66],c[17]),c[5])(c[23],c[13]),(0,c[72])(c[8]),c[14])(c[8],c[76]),c[20],c[65],c[12]),c[5])(c[8],c[Math.pow(3,3)-8200+8176]),0))&&(((0,c[14])(c[44],c[34]),c[60])((0,c[22])((0,c[11])(c[23],c[32]),c[33],(0,c[5])(c[66],c[64]),c[40],c[new Date("1969-12-31T12:30:44.000-11:30")/1E3]),c[14],c[23],c[6]),(0,c[75])(c[74],(0,c[55])(),c[23]),c[75])(c[Math.pow(2,
4)-5082- -5140],(0,c[55])(),c[8]),-2!==c[15]&&(0!==c[51]?((0,c[49])((0,c[60])((0,c[33])(c[new Date("1969-12-31T12:30:43.000-11:30")/1E3],c[8]),c[5],c[8],c[73]),c[60],(0,c[59])(c[70],c[44]),c[72],c[66]),c[39-Math.pow(7,3)+372])(c[67],c[78]):(0,c[26426-Math.pow(4,5)-25345])(((0,c[65])(c[35],c[17-Math.pow(2,4)+24]),c[65])(c[71],c[60]),c[2+Math.pow(5,1)%157],((0,c[65])(c[56],c[48]),c[4])(c[5],(0,c[49])(),c[35]),c[71])),c[58]<=153%Math.pow(4,5)-161&&(-2<=c[3]||(((0,c[Math.pow(6,2)+-5440- -5408])(c[5],
(0,c[49])(),c[35]),c[20])(c[79],c[67]),0))&&((0,c[20])(c[43],c[67]),c[65])(c[56],c[54]),c[9]>new Date("1969-12-31T14:45:09.000-09:15")/1E3&&(1>c[15]||((0,c[74])(c[71],c[23]),(0,c[46])(c[61],c[35]),0))&&(0,c[19])((0,c[20])(c[27],c[67]),c[-79*Math.pow(6,2)+2912],c[56],c[Math.pow(8,3)+24806+-25267]),-2===c[8]&&((0,c[65])(c[13],c[11])||new Date("1970-01-01T09:00:08.000+09:00")/1E3)||(0,c[74])(c[77],c[40]),4!==c[49]&&(((0,c[2])(c[43],c[26]),(0,c[76])(c[64],c[66]),c[28])(c[18],c[21]),c[15])(c[21])%(0,c[64])(c[15]),
c[20]!=Math.pow(1,3)-24766- -24756&&(((0,c[51])(c[30],c[new Date("1969-12-31T15:45:04.000-08:15")/1E3]),c[38])(c[47]),(0,c[51])(c[8],c[47])>=(0,c[177*Math.pow(3,1)-454])(c[4],c[55])),c[33]>new Date("1969-12-31T17:00:03.000-07:00")/(996+108%Math.pow(2,3))&&(2<c[63]||((0,c[58])((0,c[42])(c[-255+48*Math.pow(6,1)],c[11]),c[16],(0,c[47])(c[35-Math.pow(3,5)+256],c[40]),c[47],c[59],c[71]),0))&&(0,c[16])(((0,c[69])(c[29],c[38]),c[31])(c[30],(0,c[9])(),c[72]),c[31],c[30],(0,c[21])(),c[59]),-8!==c[25]?(((0,c[new Date("1969-12-31T18:00:31.000-06:00")/
1E3])(c[30],(0,c[66])(),c[11]),c[2])(c[72]),(0,c[15])(c[53],c[38]),c[47])(c[48],c[33]):(0,c[13])((0,c[41])(c[11],c[51]),c[503%Math.pow(4,5)+-445],(0,c[47])(c[59],c[73]),c[50],(0,c[Math.pow(5,new Date("1969-12-31T21:15:02.000-02:45")/1E3)-12- -37])(c[72],c[14]),c[11],c[65])}}catch(d){return"enhanced_except_55oBmOX-_w8_"+a}return b.join("")};