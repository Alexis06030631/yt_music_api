const gma = /^[\w.]*$/
const signatureTimestamp = 19859

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
	const url = orgaCompose(m.uD,m.LG,m.s)
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
	a={fY:!1,uD:"",LG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.fY=!0;
a.uD=b.url;
a.LG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
XO.CI(a,38);
XO.xc(a,1);
XO.CI(a,66);
XO.Mw(a,37);
XO.Mw(a,53);
return a.join("")
}

var XO={Mw:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
xc:function(a,b){a.splice(0,b)},
CI:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(""),c=[-1478908525,466300594,"throw",1558298077,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
b,-1392102993,-311217677,893860531,-1436636030,",56];c[57]=c;",-337880028,function(d,e,f,h,l,m,n,p,q,r){return e(l,m,n,p,q,r)},
1341294773,-1901228761,function(d,e,f,h,l,m,n,p){return d(m,n,p)},
-1144700680,-915449431,function(d){d.reverse()},
function(d,e,f,h,l,m){return e(h,l,m)},
1858680403,28891328,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-1844125681,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
65021231,-1649305153,161837622,-485714629,762542461,-913283389,1185680844,function(d,e,f){var h=f.length;d.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},e.split(""))},
-1214067657,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
1170738947,null,2008926723,-913283389,1271273832,-1608756346,-1384479784,b,1799665916,-642163467,1553425646,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
-349691185,-1853358805,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
198223239,null,-1442917655,-450600856,1199569898,804472052,1439549475,-1296466545,function(d,e,f,h,l){return e(f,h,l)},
function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
1090195318,function(d,e){e.splice(e.length,0,d)},
-556136137,1625304659,-1271609271,/(;)(,,)[,']/,-1290460613,-1442917655,1087066660,1140041558,b,1024998685,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
812552430,-1342262E3,-1397616641,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
194033615,null,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
286451175,-208660452,-562138370,1428881632,-342644350];c[36]=c;c[51]=c;c[79]=c;try{try{c[84]<=2-Math.pow(3,2)-1&&(0,c[59])(c[79],c[27]),6!=c[69]?(((0,c[59])(c[51],c[41]),c[73])(c[40],c[5]),c[34])(c[5],c[64]):((0,c[32])(c[-54+125*Math.pow(1,5)],c[2],(0,c[-27125-Math.pow(1,1)+27148])()),c[58])((0,c[73])(c[3],c[71]),c[73],c[74],c[264%Math.pow(4,4)+34]),10===c[84]&&(((0,c[73])(c[19*Math.pow(1,3)-13],c[51]),c[32])(c[42],c[2],(0,c[80])()),[])||((0,c[46])(c[42],c[50]),c[46])(c[79],c[82]),-1!==c[61]&&(-9===
c[29]&&((0,c[40])((0,c[7])(c[54],c[13]),c[7],(0,c[96-336%Math.pow(4,3)])(c[72],c[-13746+Math.pow(4,5)+12750]),c[32],c[63]),"NaN")||((0,c[79])((0,c[70])(c[26]),c[15],c[13],c[50]),c[39])(c[72])),7<=c[40]&&(1>c[0]?(0,c[50])(c[61],((0,c[71])(c[29],c[48]),c[6])(c[29],c[80]),(0,c[0])((0,c[31])(c[73],c[2]),c[37],c[39],c[65]),(0,c[12])((0,c[72])(c[39],c[34]),c[22],(0,c[22])(c[17],c[59]),c[5],c[41]),(0,c[76])(((0,c[22])(c[82],c[24]),c[77])(c[24]),c[49],(0,c[33])(c[83],c[new Date("1970-01-01T11:45:44.000+11:45")/
1E3]),c[59],c[0]),c[47]):((((((0,c[48])(c[40],c[new Date("1970-01-01T03:45:03.000+03:45")/1E3]),(0,c[21])(c[Math.pow(4,5)-1584- -641],c[78],(0,c[46-Math.pow(1,1)+24])()),c[21])(c[81],c[78],(0,c[69])()),((0,c[22+Math.pow(1,3)%437])(c[81],c[72]),c[21])(c[60],c[78],(0,c[13])()),c[54])((0,c[54])((0,c[23])(c[68],c[19]),c[62],c[5],c[60]),c[21],c[60],c[78],(0,c[49])()),c[35])(c[new Date("1969-12-31T20:32:46.000-03:30")/1E3*188-Math.pow(5,3)-31043],c[76]),(0,c[21])(c[60],c[78],(0,c[11])()),c[7])(c[Math.pow(3,
3)-15688+15742]),c[70])(c[81],c[26])),2!=c[39]&&(-9!=c[58]?(0,c[54])((0,c[48])(c[31],c[36]),c[70],c[31],c[43]):(0,c[54])((0,c[38])(c[31]),c[62],c[75],c[31])),(-8!==c[22]||((0,c[54])((0,c[21])(c[60],c[78],(0,c[13])()),c[62],c[24],c[60])|(0,c[62])(c[Math.pow(7,2)+-15774+15771],c[81]),0))&&(((0,c[35])(c[81+15%Math.pow(5,1)],c[241-Math.pow(4,2)-215]),c[-18+Math.pow(5,2)%349])(c[81]),c[48])(c[40],c[67]),-9!=c[50]&&((0,c[62])(c[Math.pow(8,4)%262+-121],c[31]),c[35])(c[81],c[58]),-10!=c[33]&&(0!==c[71]&&
((((0,c[35])(c[25],c[9308+Math.pow(4,4)+-9536]),c[30])(c[0],c[10]),(0,c[22])(c[16],c[41]),c[69])(c[79],c[38],(0,c[59])())*(0,c[22])(c[85],c[41]),[])||(0,c[45])((0,c[22])(c[57],c[41]),c[0],(0,c[71])(c[14],c[7]),(0,c[69])(c[41],c[38],(0,c[29])()),(0,c[69])(c[20],c[38],(0,c[59])()),c[22],c[60],c[41])),(9>=c[58]||(((((0,c[8])(c[20],c[19]),((0,c[55])(c[new Date("1969-12-31T23:00:14.000-01:00")/1E3]),c[79])(c[8],c[6]),c[32])(c[14]),c[71])(c[79],c[65]),c[22])(c[1],c[79]),0))&&(0,c[56])((0,c[22])(c[68],c[41]),
c[22],((((0,c[22])(c[25],c[20]),c[71])(c[73],c[12159-189*Math.pow(8,2)]),c[Math.pow(5,1)+63-60])(c[20],c[Math.pow(4,3)+161-163]),c[69])(c[41],c[38],(0,c[59])()),c[37],c[Math.pow(4,4)+168-383])}catch(d){(0,c[-78*Math.pow(new Date("1970-01-01T02:45:05.000+02:45")/1E3,3)- -9805])(c[79]),(0,c[56])(((0,c[69])(c[41],c[38],(0,c[59])()),c[17*Math.pow(2,2)-46])(c[24],c[14]),c[69],(0,c[69])(c[41],c[38],(0,c[29])()),c[79],c[38],(0,c[59])()),(0,c[69])(c[Math.pow(7,5)-new Date("1970-01-01T09:18:30.000+09:15")/
1E3%461+-16556],c[38],(0,c[9])()),(((0,c[22])(c[82],c[79]),c[22])(c[15],c[41]),c[22])(c[34],c[20]),(0,c[Math.pow(1,2)-96- -164])(c[20],c[38],(0,c[9])())}}catch(d){return"enhanced_except_k5sB7OT-_w8_"+a}return b.join("")};