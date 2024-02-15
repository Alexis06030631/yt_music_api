const gma = /^[\w.]*$/
const signatureTimestamp = 19767

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
	const url = orgaCompose(m.KC,m.QF,m.s)
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
	a={nX:!1,KC:"",QF:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.nX=!0;
a.KC=b.url;
a.QF=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
zP.Mp(a,1);
zP.TD(a,59);
zP.Mp(a,1);
zP.TD(a,19);
zP.TD(a,28);
zP.Mp(a,1);
zP.TD(a,15);
zP.Mp(a,3);
zP.bX(a,71);
return a.join("")
}

var zP={TD:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
Mp:function(a,b){a.splice(0,b)},
bX:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(""),c=[b,632835762,-449813908,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
function(d,e,f,h,l,m){return e(h,l,m)},
1125543072,-334005754,-1096779287,b,1961611091,-1664218790,function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
-2100169782,2145654451,1263681193,function(d,e,f,h,l){return e(f,h,l)},
574794291,"IMl2IvA",1878897570,1766283984,501792822,977199539,function(d,e){e.splice(e.length,0,d)},
580003429,915733400,1989668685,")/})/","IMl2IvA",function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
882816862,1412446653,454188523,984180205,";/[,/{;",-1861258856,null,718583674,function(d,e,f){var h=d.length;e.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},f.split(""))},
null,2002668393,function(d){d.reverse()},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
null,function(d){throw d;},
808451447,-1118355574,1381874668,1757157631,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
148709493,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
"R1AJ",-1105451387,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-786896478,-506698983,-644787157,-2090491153,-1664218790,1277963748,-1992754396,453019939,759089382,-2061397954,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
-727016307,function(d,e){d.push(e)},
-986775797,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
1565490972,1807340498,1609054539,1072881887,970958180,-720278725,2108134050,b,-880491888,"pop",",,,,[["];c[36]=c;c[39]=c;c[43]=c;try{try{4!=c[74]&&(-4>=c[60]?(0,c[38])((0,c[-7740+Math.pow(7,1)+7775])(),c[78],c[80])&(0,c[70])(c[55],c[39]):((0,c[51])(c[78]),c[66])(c[39],c[19])),10<c[50]&&(-10!=c[6]&&((0,c[11])(c[39],c[Math.pow(2,new Date("1969-12-31T19:00:01.000-05:00")/1E3)+6880+-6850]),"{")||(0,c[12])(c[21],c[8])),-8<c[47]&&(-6!=c[31]?(0,c[41])(c[35]):(0,c[12])(c[73],c[35])),0!=c[26]&&(1<=c[55]?(((((((0,c[12])(c[64],
c[36]),c[12])(c[0],c[8]),c[12])(c[46],c[35]),(((((0,c[38])((0,c[49])(),c[35],c[52]),c[38])((0,c[49])(),c[35],c[52]),c[66])(c[35],c[20]),c[12])(c[31],c[43]),c[16])((0,c[3])(c[39],c[77]),c[38],(0,c[54])(),c[8],c[80]),c[38])((0,c[54])(),c[35],c[52])-(0,c[new Date("1969-12-31T20:00:12.000-04:00")/1E3])(c[14],c[8]))*(((0,c[12])(c[33],c[43]),c[38])((0,c[54])(),c[8],c[52]),c[12])(c[2],c[35]),(0,c[12])(c[61],c[39]),c[38])((0,c[54])(),c[-27548-Math.pow(1,5)- -27627],c[80]),c[52-Math.pow(6,2)%366])((0,c[41])(c[8]),
c[70],c[5],c[35]):(0,c[4])((0,c[4])((((0,c[38])((0,c[65])(),c[35],c[80]),(((((0,c[23])(c[64],c[36]),c[3])(c[43],c[69]),c[39])(c[41]),c[18])(c[41],c[47])|(0,c[14])(c[75],c[6]),(0,c[46])((0,c[30])(),c[6],c[66]),c[72])(c[31],c[49]),c[33])(c[6]),c[68])((0,c[73])(c[45],c[34]),c[81],c[76],c[28]),c[14],(0,c[55])((0,c[18])(c[48],c[13]),c[68],((0,c[73])(c[49],c[new Date("1969-12-31T13:15:24.000-10:45")/1E3]),c[43])(c[6]),c[new Date("1969-12-31T16:15:18.000-07:45")/1E3],c[6],c[71]),c[78],c[45]),c[42],(0,c[42])(c[30],
c[1]),c[72],c[33]))}catch(d){(0,c[21])(((0,c[38])(c[45],c[27+255%Math.pow(3,2)]),c[13])(c[8],c[30]),c[186%Math.pow(5,1)+13],(0,c[14])(c[72],c[51]),c[17],c[18])}finally{-5!=c[36]&&(0,c[9])((0,c[21])((0,c[40])(c[new Date("1969-12-31T21:01:05.000-03:00")/1E3],c[7]),c[2],(0,c[42])(c[22-Math.pow(1,2)+48],c[27]),c[66],c[65]),c[14],c[30],c[82]),-4!=c[new Date("1970-01-01T09:00:19.000+09:00")/1E3]&&(7==c[62]||((0,c[67])(c[17]),(0,c[38])(c[32],c[Math.pow(4,3)+5478+-5477]),(0,c[17-Math.pow(1,1)-8])(c[31],c[43]),
""))&&((0,c[40])((0,c[24])(),c[0],c[26]),c[64])((0,c[40])((0,c[Math.pow(2,1)-15+67])(),c[0],c[26]),c[new Date("1970-01-01T06:00:12.000+06:00")/1E3],c[72],c[46]),(-7!=c[28]||((0,c[64])((0,c[77])(c[43],c[16]),c[40],(0,c[54])(),c[72],c[53]),0))&&(0,c[64])((0,c[12])(c[42],c[38]),c[69],c[43],c[33]),0!==c[65]&&(-10!==c[22]||((0,c[40])((0,c[13])(),c[43],c[26]),0))&&(0,c[8])(c[70],c[53]),4<c[41]&&(0,c[40])((0,c[24])(),c[53],c[26])}try{3!==c[41]&&(6>c[41]?(((0,c[69])(c[35],c[84]),(0,c[68])(c[4],c[43]),(0,c[68])(c[58],
c[72]),c[69])(c[42],c[48]),c[69])(c[25132+Math.pow(2,4)-25095],c[Math.pow(8,1)+28-16]):((0,c[69])(c[117+Math.pow(6,3)+-298],c[65]),(0,c[76])((0,c[27])(c[35]),c[76],(0,c[47])(c[42]),c[11],c[72]),(0,c[12])(c[35],c[6]))),((0,c[34])(),c[69])(c[42],c[30])}catch(d){}}catch(d){return"enhanced_except_t5oByOX-_w8_"+a}return b.join("")};