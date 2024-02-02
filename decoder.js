const gma = /^[\w.]*$/
const signatureTimestamp = 19753

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
	const url = orgaCompose(m.EC,m.IF,m.s)
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
	a={jX:!1,EC:"",IF:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.jX=!0;
a.EC=b.url;
a.IF=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
MP.An(a,48);
MP.An(a,13);
MP.xY(a,22);
MP.An(a,7);
MP.xY(a,1);
MP.BR(a,1);
MP.xY(a,4);
MP.BR(a,1);
return a.join("")
}

var MP={An:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
xY:function(a){a.reverse()},
BR:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(""),c=[function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
function(d){d.reverse()},
-199606995,-1431084974,-14811561,1741332235,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
-285404089,248022845,-825913713,899800572,-866856232,1080183831,1801607191,634724963,-783522532,-2026612278,443186038,469292436,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
"kl3EL",-37248917,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
function(d,e,f,h,l){return e(f,h,l)},
',,;]["(',-1752389959,-1714027780,-1782571074,-1025978513,916644481,-1504777610,1649297768,141962081,-150307296,-486482738,null,-1136333445,b,'}";[)',-1960420972,-1611077043,null,-752022603,-1501310119,1801298654,610434119,295586846,-1364935266,-469818867,-389056117,-1621429227,function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
b,712483859,function(d,e){0!=e.length&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
function(d,e,f,h,l,m){return e(h,l,m)},
400070862,-2121435666,141962081,1080183831,-1838811490,1551617885,-1397737297,-357389026,1791728276,function(d,e,f){var h=e.length;d.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},f.split(""))},
function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-2010194172,function(d,e){e.push(d)},
function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
-2042825859,b,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
-14811561,function(d,e,f,h,l,m,n){return d(l,m,n)},
-885216462,704747277,346080657,"-",309515085,function(d,e,f,h,l,m,n,p){return d(m,n,p)},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-1848881489,-1042224904,null,1679078778,"kl3EL",-285404089];c[35]=c;c[41]=c;c[87]=c;try{try{3!==c[50]&&(4==c[31]?((0,c[67])(c[37],c[27]),c[6])(c[35],c[36]):(0,c[23])((0,c[70])(c[44],c[87]),c[66],c[53],(0,c[68])(),c[81])),3!==c[42]&&(3>=c[11]?(((((0,c[75])(c[37],c[90]),c[6])(c[87],c[34]),c[-34720+Math.pow(4,1)- -34801])(c[67],c[79]),c[69])(c[60],c[9]),c[85])(c[67],c[83])>>>((((0,c[37])((((0,c[69])(c[2],c[51]),c[6])(c[9]),c[6])(c[82],c[32]),c[49],c[79],c[15]),c[56])(c[72],c[89]),c[9])(c[20],c[65]),
c[34])(c[3],c[24]):(0,c[55])(c[57],((0,c[34])(c[5],c[0]),c[66])(c[79],(0,c[80])(),c[43]),(((0,c[39])(c[79]),c[130-Math.pow(5,4)- -560])(c[5],c[70]),c[new Date("1969-12-31T20:46:06.000-03:15")/1E3])(c[79],(0,c[18])(),c[51]),((0,c[17])((((0,c[81])(c[59],c[7]),c[39])(c[3]),(0,c[66])(c[79],(0,c[21])(),c[43]),c[Math.pow(1,4)+-20976+21041])(c[-835- -149*Math.pow(6,1)],(0,c[21])(),c[43]),c[48],c[3]),c[39])(c[59]),c[91],c[68])),(7<=c[9]||((0,c[17])((0,c[66])(c[79],(0,c[80])(),c[51]),c[66],c[3],(0,c[80])(),
c[51]),0))&&(0,c[17])((0,c[86+Math.pow(3,1)-55])(c[45],c[50]),c[22],c[33],c[36])}catch(d){(0,c[54])((0,c[2])(c[Math.pow(3,5)-19-142],c[38])%(0,c[2])(c[82],c[-12615-Math.pow(5,3)+12770]),c[85],c[24])}finally{7>=c[51]&&(-3!==c[87]||((0,c[21])((((0,c[54])(((0,c[2])(c[82],c[1]),c[11])(c[4],(0,c[55])(),c[88]),c[2],c[24],c[0]),c[76])(c[40]),c[22])(c[405%Math.pow(8,1)- -14],c[Math.pow(5,1)+59925+-59848]),c[22],(0,c[54])((0,c[2])(c[40],c[34]),c[11],c[40],(0,c[Math.pow(2,4)%390- -9])(),c[88]),c[47],c[36])>>
(0,c[22])(c[29],c[82]),void 0))&&(((0,c[22])(c[90],c[36]),c[86])(c[22],(0,c[76])(c[4]),(0,c[26])(c[4],c[60]),(0,c[Math.pow(2,4)-13230+13290])(c[36]),(0,c[20])(c[49],c[25]),c[3],c[35]),(0,c[53])(c[35],c[11]),(0,c[80])(c[55],c[36]),c[37])(c[45],c[Math.pow(5,1)-249%(new Date("1969-12-31T22:36:00.000-01:30")/1E3)+279])}try{1>=c[40]&&(9<c[24]||(((0,c[75])(c[69])*(0,c[58])(c[22],c[2]),(0,c[38])(c[74],c[78]),(0,c[6])(c[24],c[67]),(0,c[2])(c[24],c[0]),c[54])((0,c[6])(c[36],c[74]),c[34],c[74]),((0,c[61])(c[74],
(0,c[16])(),c[15]),c[56])(c[86],c[26]),0))&&(0,c[56])(((((0,c[15])((0,c[55])(c[43],c[45]),c[59],c[1],c[Math.pow(1,3)- -20944-20935]),c[64])(c[21],(0,c[78])(),c[49]),c[63])(c[3],c[81]),c[64])(c[77],(0,c[19])(),c[41]),(0,c[15])((0,c[63])(c[43],c[26]),c[75],c[80],c[77]),c[15],(0,c[46])(c[3]),c[55],c[89],c[127289-53*Math.pow(7,4)]),-3>=c[36]&&(0,c[75])(c[30],c[3]),6!==c[0]&&(0,c[32])(c[21],c[69]),(7===c[76]||((0,c[63])(c[43],c[12]),(0,c[55])(c[1],c[73]),(0,c[37])(c[21]),0))&&(0,c[15])(((0,c[55])(c[1],
c[42]),c[64])(c[1],(0,c[38])(),c[Math.pow(4,5)+-12369- -11363]),c[55],c[89],c[33])}catch(d){(0,c[59])(c[89],c[0]),(0,c[37])(c[21]),(0,c[64])(c[21],(0,c[38])(),c[41]),(0,c[Math.pow(3,new Date("1970-01-01T05:45:03.000+05:45")/1E3)-26- -74])(c[44],c[77])}try{2!==c[87]&&(-8<c[36]||((0,c[59])(c[-21375-Math.pow(3,1)+21421],c[13]),0))&&(0,c[42])(c[48])}catch(d){(0,c[60])(c[6],c[63])}}catch(d){return"enhanced_except_qZoB1uX-_w8_"+a}return b.join("")};