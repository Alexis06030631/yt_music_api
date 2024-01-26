const gma = /^[\w.]*$/
const signatureTimestamp = 19746

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
	const url = orgaCompose(m.AC,m.GF,m.s)
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
	a={YW:!1,AC:"",GF:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.YW=!0;
a.AC=b.url;
a.GF=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
PP.ng(a,57);
PP.mM(a,2);
PP.U0(a,24);
PP.U0(a,44);
PP.mM(a,1);
PP.ng(a,32);
PP.U0(a,6);
return a.join("")
}

var PP={U0:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
ng:function(a){a.reverse()},
mM:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(""),c=["}/[[",-375534585,-915383941,-482970084,"case",1507028370,1885233569,-862023892,-1801733836,-805979984,null,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
1834150349,-1682155807,1123628751,-336708705,-1575724088,-313192964,-1347194279,-1315768022,-2049043153,1549583179,818403129,-1336823276,null,-357630226,-1581194439,-677987845,1648974322,1670758109,function(d,e){e.splice(e.length,0,d)},
-87112206,394319262,1804834239,-634596190,function(d,e,f,h,l){return e(f,h,l)},
34644705,function(d){d.reverse()},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
1540480256,b,function(d){throw d;},
-2070771823,1744752690,function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
"-",845457844,-871611886,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
null,1239196368,-1580925764,-2003256182,-357630226,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
610672839,-2084047030,b,626041784,"}/[[",-625698701,b,function(d,e){d.push(e)},
1646337435,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e,f,h,l,m,n){return d(l,m,n)},
1366179462,-1402373796,1835003179,-972934889,-378346823,function(d,e,f){var h=d.length;f.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},e.split(""))},
function(d,e,f,h,l,m,n,p,q,r){return e(l,m,n,p,q,r)},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
function(d,e,f,h,l,m){return e(h,l,m)},
function(d,e){if(0!=e.length){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
39141421,-1754916915,1473596420,1496131854,-2049043153];c[10]=c;c[24]=c;c[50]=c;try{try{6==c[Math.pow(6,4)+-7360- -6100]?((0,c[35])((0,c[35])((0,c[72])((0,c[48])(),c[4],c[62]),c[37],c[40]),c[74],c[58],c[68]),(0,c[72])((0,c[65])(),c[4],c[62])):(0,c[76])((0,c[35])((0,c[49])(c[24],c[39]),c[51],c[31],c[68]),c[44],(0,c[1])(c[59],c[57]),c[31]),-3<c[11]&&(0,c[40])((0,c[31])(c[65],c[41]),c[31],c[51],c[44]),7>c[73]&&(1>c[28]?(((((((0,c[38])(c[13]),(0,c[31])(c[17],c[55]),c[26])(c[25],c[18]),(0,c[8])(c[21]),
c[31])(c[45],c[61]),c[999505+-244*Math.pow(8,4)])(c[47],c[60]),c[17])(c[47],c[29]),c[31])(c[30],c[Math.pow(7,5)-64-16739]),c[0])(c[16],c[73]):((((0,c[81])(c[77],c[70]),(((0,c[26])((0,c[75])(),c[82],c[77]),(0,c[0])(c[61],c[1]),c[48])(c[16]),c[26])((0,c[19])(),c[41],c[77]),c[3])(c[-115+Math.pow(2,4)+111],c[-336087+140*Math.pow(7,4)]),c[3])(c[16],c[14+Math.pow(2,5)+-25]),(0,c[74])(c[77]),(0,c[0])(c[61],c[43]))),(0,c[78])(c[-155*Math.pow(6,4)- -200884]),(0,c[26])((0,c[9])(),c[41],c[77])}catch(d){5!==
c[40]?(0,c[31])(c[65-Math.pow(1,2)%45],c[4]):(0,c[11])(c[12],c[5]),-9!=c[30]&&(-4!=c[-648-Math.pow(6,4)+2006]?(0,c[79-Math.pow(2,1)+-66])(c[77],c[28])-(0,c[3])(c[47],c[56]):(0,c[70])((0,c[1])(c[14],c[61]),c[24],(0,c[73])(),c[80],c[75]))}try{-1>c[Math.pow(2,5)+7-35]&&(((0,c[79])(c[2],c[38]),(0,c[29])(c[16],c[2]),c[79])(c[89-Math.pow(7,2)- -35],c[56]),c[79])(c[46400-Math.pow(8,new Date("1970-01-01T04:15:02.000+04:15")/1E3)+-46326],c[21]),(0,c[76])(),(0,c[24])((0,c[73])(),c[39],c[10])}catch(d){}try{3!=
c[19]&&(-8==c[16]||((0,c[25])((0,c[1])(c[75],c[30]),c[70],((0,c[9])(c[75],c[48])<(0,c[1])(c[10],c[23]),(0,c[1])(c[14],c[63]),c[192*Math.pow(5,3)-23971])(c[47],c[59]),(0,c[70])((0,c[33])(c[8],c[59]),c[64],c[77],c[10]),((0,c[25])(c[54]),c[8])(c[31],c[14-Math.pow(5,4)- -676])-(0,c[12])(c[60],c[new Date("1969-12-31T14:00:54.000-10:00")/1E3]),c[44],c[37],c[24]),0))&&(((0,c[28-Math.pow(8,2)+39])((0,c[63])(),c[18],c[54]),(0,c[49])((0,c[25])(c[38]),c[-195*Math.pow(4,4)- -49992],c[65],c[23]),(0,c[72])(c[77],
c[29]),c[81])(c[72],(0,c[3])((0,c[-211*Math.pow(2,5)- -6822])(),c[18],c[77]),(0,c[51])(c[38]),(0,c[72])(c[65],c[0]),c[54],c[21]),c[3])((0,c[52])(),c[18],c[54])<((0,c[25])(c[77]),(0,c[25])(c[24])),5!=c[31]&&(-4==c[69]||(((0,c[64])(c[73],c[56]),c[49])((0,c[3])((0,c[63])(),c[18],c[54]),c[8],c[Math.pow(4,3)- -272+-290],c[73]),""))&&((0,c[51])(c[77]),(0,c[12])(c[11],c[65]),c[72])(c[38],c[1]),2<=c[71]&&(-4!==c[20]?((0,c[49])(((0,c[12])(c[36],c[77]),c[64])(c[54],c[57]),c[3],(0,c[63])(),c[59],c[54]),(0,c[25])(c[73])):
(((0,c[72])(c[147+Math.pow(6,2)-106],c[74]),(0,c[64])(c[77],c[39]),c[64])(c[54],c[19404-Math.pow(1,4)-new Date("1969-12-31T23:23:04.000-06:00")/1E3]),c[72])(c[54],c[15])),0!=c[48]&&(0,c[12])(c[16],c[73])}catch(d){(0,c[49])((0,c[49])(((0,c[3])((0,c[52])(),c[18],c[73]),c[new Date("1969-12-31T16:01:12.000-08:00")/1E3])(c[73],c[68]),c[72],c[65],c[32]),c[new Date("1969-12-31T13:45:03.000-10:15")/1E3],(0,c[70])(),c[59],c[73])}}catch(d){return"enhanced_except_opoB3eX-_w8_"+a}return b.join("")};