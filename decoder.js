const gma = /^[\w.]*$/
const signatureTimestamp = 19844

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
	const url = orgaCompose(m.fD,m.xG,m.s)
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
	a={WX:!1,fD:"",xG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.WX=!0;
a.fD=b.url;
a.xG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
aP.uy(a,10);
aP.L9(a,27);
aP.L9(a,36);
aP.KA(a,1);
aP.uy(a,76);
aP.KA(a,3);
return a.join("")
}

var aP={uy:function(a){a.reverse()},
L9:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
KA:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(""),c=[1840414365,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-395101661,-1958814997,1175680798,187186373,1048472403,function(d,e,f,h,l,m,n){return d(l,m,n)},
-1156288707,b,124252086,24392097,1722263577,802856671,1551691475,-915115677,-892042629,-727956870,-1341945521,function(d,e,f){var h=d.length;e.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},f.split(""))},
function(d){d.reverse()},
-1134927724,null,1514617093,-1020237062,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
b,-663871206,";(,[",-822089743,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-2104342472,1813764527,427519442,1813484287,"else",-1347234983,function(d,e,f,h,l,m){return e(h,l,m)},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
108707548,-1211350484,null,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
2035921465,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
function(d,e,f,h,l,m,n,p,q,r,t){return d(f,h,l,m,n,p,q,r,t)},
-1740119113,-1701622625,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
-308102321,-1419545281,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
1048472403,-1592081010,-1836723141,function(d,e,f,h,l,m,n,p,q,r,t,v){return f(h,l,m,n,p,q,r,t,v)},
b,-762723149,-943985273,-1029498694,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
-163884686,function(d,e,f,h,l){return e(f,h,l)},
-1937013630,"NQSHr9",-1534352175,-501060629,"\u2252,'",1705427124,-1652507104,1808929358,-144899784,1558425692,328758329,807778479,-1056559474,function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
-1991778233,1671484107,1661768049,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
727958561,1825070379,52216408,753685206,null,"(,;u"];c[22]=c;c[41]=c;c[87]=c;try{try{-4<c[80]&&(-4==c[3]&&((0,c[56])((0,c[63])((0,c[25])(c[22],c[69]),c[19],(0,c[new Date("1969-12-31T15:30:45.000-08:30")/1E3])(),c[57],c[65]),(0,c[77])(c[87],c[73]),c[7],c[82],(0,c[82])(c[9]),(0,c[61])(c[57],c[34]),(0,c[61])(c[87],c[58]),c[9]),1)||((0,c[37])((0,c[164-115*Math.pow(1,5)])(c[41],c[11]),c[33],(0,c[70])(c[86],c[74]),c[98%Math.pow(2,5)- -5],c[4]),(0,c[72])((0,c[58])(c[50],c[42]),c[79],c[71],c[-116*Math.pow(4,
3)+7485]),c[Math.pow(1,5)%186+53])((0,c[11])(c[32]),c[78],(0,c[16])(),c[Math.pow(7,3)-474+202],c[32])),-8!==c[14]&&(-2<c[Math.pow(4,5)+8-995]||(((0,c[new Date("1970-01-01T03:46:18.000+03:45")/1E3])((0,c[52])(),c[88],c[-3664+138*Math.pow(3,3)]),c[15])(c[40]),0))&&((0,c[36])(c[56],c[23]),c[36])(c[75],c[Math.pow(7,1)-136- -187]),(9>c[11]||(((((0,c[59])(c[75],c[84]),c[9476-Math.pow(7,2)-9420])(c[28],c[189%Math.pow(6,2)- -79]),c[30])(c[24]),c[78])(c[82],c[84]),0))&&(0,c[new Date("1970-01-01T05:15:13.000+05:15")/
1E3])((0,c[7])(c[41],c[3]),c[31],((0,c[78])(c[82],c[297%Math.pow(6,2)-3]),c[78])(c[82],c[67]),(0,c[49])(),c[82],c[74]),2<c[16]&&(3>c[54]&&((0,c[87])((0,c[31])((0,c[5])(),c[82],c[74]),c[76],(0,c[78])(c[82],c[Math.pow(5,3)-4992- -4911]),c[31],(0,c[49])(),c[82],c[74]),1)||(0,c[76])((0,c[76])((0,c[12])(c[28],c[81]),c[35],c[34],c[66]),c[17],c[34],c[70])),-1<c[28]&&(1<c[73]?((((0,c[86])((0,c[88])(c[new Date("1970-01-01T01:16:02.000+01:15")/1E3],c[6])-(0,c[35])(c[3],c[71]),c[new Date("1970-01-01T03:45:41.000+03:45")/
1E3],(0,c[30])(),c[3],c[84]),c[86])((0,c[35])(c[51],c[78]),c[72],c[new Date("1970-01-01T09:00:38.000+09:00")/1E3],c[48]),c[41])((0,c[30])(),c[51],c[84]),c[67])(c[34])+(0,c[40])(c[Math.pow(1,3)+17- -20]):(0,c[86])((0,c[86])((0,c[14])(c[53],(0,c[67])(c[34]),c[44- -11*Math.pow(2,2)],(0,c[35])(c[62],c[45]),(0,c[51])(c[7],c[8]),(0,c[31])((0,c[51])(c[37],c[2]),c[69],c[37],c[9]),c[85],c[Math.pow(2,2)-68+134]),c[51],c[7],c[32]),c[new Date("1969-12-31T14:03:35.000-10:00")/1E3*Math.pow(8,2)+-13691],c[53],c[34]))}catch(d){(((0,c[28])(c[80],
c[73]),c[70])((0,c[44])(),c[80],c[24]),c[70])((0,c[59])(),c[32],c[new Date("1969-12-31T19:00:24.000-05:00")/1E3]),(0,c[46])(c[80],c[23]),(0,c[28])(c[67],c[81])}try{c[11]!==new Date("1970-01-01T04:29:57.000+04:30")/1E3&&(-7>c[77]||((0,c[26])(((0,c[26])((0,c[26])((0,c[51])(c[32],c[87]),c[46],c[32],c[22]),c[12],c[32],c[39]),c[28])(c[80],c[71]),c[46],c[-25265-Math.pow(1,5)+25268],c[14]),0))&&(0,c[47])((0,c[70])((0,c[44])(),c[32],c[24]),(0,c[70])((0,c[88])(),c[63],c[54]),c[52],(0,c[69])(c[2]),c[28],(0,c[70])((0,c[8])(),
c[63],c[24]),c[32],c[30]),(0,c[70])((0,c[8])(),c[22],c[24]),(0,c[26])((0,c[new Date("1969-12-31T15:31:10.000-08:30")/1E3])((0,c[88])(),c[80],c[24]),c[28],c[63],c[25])}catch(d){7==c[49]?((0,c[51])(c[2],c[84]),c[82])(c[70],(0,c[28])(c[80],c[134-Math.pow(3,4)%464]),((((0,c[70])((0,c[59])(),c[63],c[24]),c[70])((0,c[8])(),c[80],c[54]),c[70])((0,c[59])(),c[63],c[381+-119*Math.pow(3,1)]),c[28])(c[80],c[61]),(0,c[-210*Math.pow(6,2)- -7588])(c[67],c[new Date("1970-01-01T10:16:06.000+10:15")/1E3]),(0,c[8])(),
c[80],c[Math.pow(2,5)+44454+-44462]):(0,c[37])(((((0,c[69])(c[63]),c[40])(c[80],c[41]),c[Math.pow(5,5)-160+-2937])(c[63],c[85]),c[12])(c[67],c[79]),c[52],(0,c[26])((0,c[64])(c[48],c[new Date("1969-12-31T18:45:57.000-05:15")/1E3]),c[38],c[37],c[36]),c[20],(0,c[25])(c[41],c[46]),c[51],c[71])}try{-2!=c[14]&&(-3<=c[25]&&(((0,c[31])(c[83],c[22]),c[15])(c[35],c[-4443- -13*Math.pow(7,3)]),1)||((0,c[67])(c[70],c[52]),c[1])(c[41],c[25]))}catch(d){(0,c[79])(c[58])}}catch(d){return"enhanced_except_hJsB--T-_w8_"+
a}return b.join("")};