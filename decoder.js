const gma = /^[\w.]*$/
const signatureTimestamp = 19796

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
	const url = orgaCompose(m.WC,m.dG,m.s)
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
	a={FX:!1,WC:"",dG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.FX=!0;
a.WC=b.url;
a.dG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
jP.Ef(a,35);
jP.NL(a,75);
jP.Ef(a,20);
jP.F1(a,2);
return a.join("")
}

var jP={F1:function(a,b){a.splice(0,b)},
NL:function(a){a.reverse()},
Ef:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(""),c=[152180510,function(d,e,f,h,l,m,n){return d(l,m,n)},
function(d,e,f,h,l,m){return e(h,l,m)},
null,-1908853121,function(d,e,f,h,l,m,n,p,q,r,t){return f(m,n,p,q,r,t)},
508832783,1775402829,function(d,e,f){var h=f.length;d.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},e.split(""))},
function(d,e,f,h,l){return e(f,h,l)},
-1930068139,-238327465,function(d){d.reverse()},
-677559934,1425262920,1886153490,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
b,-2096040045,-1525324256,function(d,e,f,h,l,m,n){return d(l,m,n)},
-2096040045,-821219817,396305306,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
1017154262,695955887,"[,),{",-1232793047,-1631497951,function(d,e){d.push(e)},
1930219654,b,968111810,"O3U-k",function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
"O3U-k","debugger","now",-567377193,476789152,-1435096154,function(d,e){0!=e.length&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
554676969,-180596792,function(d,e){d.splice(d.length,0,e)},
-1252326005,null,function(d){d.reverse()},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
-181746374,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
b,514629999,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
9174680,1963604611,-1878723725,-1723614624,-1124374115,946792868,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
1558815293,363934663,-842647625,586059061,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-752596864,-1081943828,693063831,-1962653804,-2057021097,null,-1037314614,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-1738872660,-737301653,220060528,504097556,2069535448,-205490260];c[3]=c;c[48]=c;c[73]=c;try{try{(5!==c[60]||(((0,c[50])(c[15],c[53]),c[8])(c[32],c[new Date("1970-01-01T02:00:39.000+02:00")/1E3],(0,c[62])()),0))&&((0,c[8])(c[17],c[39],(0,c[67])()),c[24])(c[54],c[3])}catch(d){(0,c[3])(c[15])}finally{(-10!==c[53]||(((0,c[58])((0,c[17])(c[30],c[66]),c[65],c[15],c[new Date("1970-01-01T04:45:39.000+04:45")/1E3]),c[69])(c[3],(0,c[17])(c[27],c[20]),(0,c[57])(c[81],c[6],(0,c[34])()),(0,c[17])(c[46],c[81]),
c[52]),""))&&((((0,c[Math.pow(4,5)+79-1101])(c[81],c[75]),c[17])(c[49],c[20]),c[2])(c[20],c[55]),(0,c[79])(c[40],c[2]),(0,c[2])(c[40],c[77]),c[10])(c[37],c[52]),-10<c[28]?(((((0,c[57])(c[66],c[1],(0,c[29])()),c[69])(c[3],(0,c[73])(c[70],c[66]),(0,c[82])(c[20],c[0]),(0,c[13])(c[-1592- -102*Math.pow(2,4)],c[-6650+210*Math.pow(2,5)]),c[-5504+Math.pow(6,5)-2191]),c[17])(c[44],c[81]),(0,c[61])(c[81]),c[65])(c[new Date("1969-12-31T12:45:52.000-11:15")/1E3],c[9]),c[71])(c[30],c[38])-(0,c[27])((0,c[51])(c[73],
c[37]),c[30],c[35]):(0,c[23])((0,c[27])(((0,c[70])(c[10],c[21]),c[34])(c[73],c[32]),c[26],c[73],c[59],(0,c[72])()),(0,c[70])(c[16],c[68]),c[27],(0,c[26])(c[50],c[59],(0,c[82])()),(0,c[27])((0,c[34])(c[21],c[28]),c[56],c[500%Math.pow(7,4)-432]),(0,c[70])(c[65],c[35]),c[70],c[29],c[73])*((0,c[42])(c[78],c[99%Math.pow(6,4)+-49]),c[70])(c[12],c[73]),-7!==c[49]&&((0,c[new Date("1969-12-31T18:15:55.000-05:45")/1E3])(c[21],c[61]),c[27])((0,c[63])(c[41],c[21]),c[55],c[50],c[71]),0>c[78]&&(c[60]>=-69*Math.pow(2,
1)- -144&&(((0,c[38])(c[69],(0,c[56])(c[73]),(0,c[0])(c[50],c[54],(0,c[72])()),(0,c[70])(c[79],c[73]),c[68]),c[34])(c[193*Math.pow(2,2)+-751],c[7]),1)||(0,c[27])((0,c[27])((((0,c[69])(c[73]),c[-8+Math.pow(8,4)%168])(c[9]),c[20])(c[2],c[Math.pow(1,3)%13- -9]),c[41],c[81],c[33]),c[14],c[62])),0<c[46]?((((((0,c[42])(c[17],c[35]),c[27])(((0,c[30])(c[73]),c[42])(c[14],c[50]),c[56],c[73]),c[0])(c[Math.pow(5,1)+-35495+35563],c[57],(0,c[75])()),(0,c[69])(c[9]),c[0])(c[73],c[54],(0,c[3])()),c[70])(c[28],c[Math.pow(8,
3)-16714- -16211]),c[42])(c[40],c[9]):(((((0,c[63])(c[25],c[68]),c[42])(c[5],c[9]),(0,c[70])(c[71],c[78]),(0,c[62])(c[49],c[50]),c[Math.pow(4,5)-4726- -3750])(c[40],c[25],(0,c[49])()),c[Math.pow(5,new Date("1970-01-01T11:30:04.000+11:30")/1E3)+6+-601])(c[14],c[60]),c[78])((0,c[9])(c[27],c[35]),c[52],c[39],c[22])%(0,c[33])(c[71],c[27]),2!==c[new Date("1969-12-31T20:46:02.000-03:15")/1E3]&&(0,c[82])(((0,c[41])(c[54],c[83]),c[20])(c[42],c[71]),c[33],(0,c[10])((0,c[62])(c[66],c[34]),c[26],(0,c[41])(c[30],
c[8]),c[79],c[60]),c[75],c[530-16*Math.pow(2,5)])}}catch(d){return"enhanced_except_1JoBq-X-_w8_"+a}return b.join("")};