const gma = /^[\w.]*$/
const signatureTimestamp = 19759

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
	const url = orgaCompose(m.FC,m.LF,m.s)
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
	a={cX:!1,FC:"",LF:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.cX=!0;
a.FC=b.url;
a.LF=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
FP.Pq(a,3);
FP.aO(a,9);
FP.aO(a,62);
FP.Pq(a,2);
FP.aO(a,62);
FP.aO(a,10);
FP.aO(a,3);
return a.join("")
}

var FP={Pq:function(a,b){a.splice(0,b)},
kD:function(a){a.reverse()},
aO:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(""),c=[function(d,e,f){var h=d.length;f.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},e.split(""))},
null,-1181589782,-977629947,1179056157,-2079210845,-1134642763,-1285569569,null,-827476917,1962180986,-1799160216,-1289652870,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
1150980243,",57];c[55]=c;",-1448003157,387899714,-1885026148,-56580705,1047774318,2057489503,-93589104,956489921,b,1939896990,-1223114251,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
b,-1069011407,1958286339,-1885026148,55647786,function(d){d.reverse()},
-460653431,-951057097,-246012446,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
-409430742,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1775795321,function(d,e,f,h,l,m){return e(h,l,m)},
-777659428,1231542136,749353949,1420700395,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
"vMf6U",776466105,-122066590,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
1544472580,598219380,472386576,465868705,1767821264,function(d,e,f,h,l,m,n){return d(l,m,n)},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
function(d,e){if(0!=e.length){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
-274681180,-1069011407,function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
1966021613,",57];c[51]=c;",function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
";)\u2234",-1556946486,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
1076318764,1259977158,-376806222,-406023199,1337995664,1540847833,-1285569569,-670040696,759397691,function(d,e){d.push(e)},
null,function(d,e,f,h,l){return e(f,h,l)},
465868705,469938750,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
1644522896,1062648652,-448265902,-1507447144,-61439661,-1649495660,956489921,1525225729,-1389878336,b,-390298041,2100295545,1987471476,function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))}];
c[1]=c;c[8]=c;c[79]=c;try{try{-9==c[22]?((0,c[62])(c[1],c[88]),(0,c[13])(c[45],c[28])):(0,c[80])((0,c[59])(c[75],c[93]),c[13],c[96],c[28])}catch(d){(0,c[0])((0,c[51])(),c[48],c[24])}finally{3>c[81]?(0,c[80])((0,c[80])((0,c[80])((0,c[13])(c[328%Math.pow(7,4)+-307],c[93]),c[13],c[29],c[24]),c[59],c[76],c[8]),c[182-85%Math.pow(6,4)],c[1],c[94]):(0,c[Math.pow(6,1)%498- -59])((0,c[68])(c[19],c[-237*Math.pow(4,5)- -242781]),c[42],(0,c[37])(c[93],c[49]),c[78],(0,c[58])(c[24]),c[1],c[new Date("1970-01-01T06:31:54.000+06:30")/
1E3-108*Math.pow(1,1)]),c[43]<-360441- -11*Math.pow(8,5)&&(6<=c[67]?(0,c[97])(c[93],c[69]):(0,c[59])(c[77],c[79])),-10>c[36]&&(1===c[52]?(0,c[37])(c[24],c[91]):(0,c[68])(c[34],c[1]))}try{-6!==c[25]&&(-8===c[9]?((0,c[17])(c[71],c[28]),c[78])((0,c[44])(),c[52],c[28]):((0,c[17])(c[4],c[28]),c[41])(c[83],c[58])),7!=c[87]&&(-8!==c[33]||((0,c[21])(c[8],c[89]),null))&&(0,c[94])(c[85])}catch(d){(0,c[42])((0,c[new Date("1970-01-01T08:30:36.000+08:30")/1E3])((0,c[13])(),c[10],c[89]),c[36],(0,c[88])(),c[10],
c[89])}finally{-2<c[86]?(((0,c[24])(c[89],c[57]),c[30])(c[65],c[69]),c[35])(c[56]):(((0,c[63])(c[28]),c[9])(c[32],c[28]),c[24+Math.pow(8,2)%226])(c[97])}try{c[35]<new Date("1969-12-31T22:30:06.000-01:30")/1E3&&(-3!==c[61]&&((0,c[63])(c[93]),"6")||(0,c[9])(c[35],c[97])),8!==c[96]&&(-3!==c[72]||(((0,c[62])(c[6],c[14]),(((0,c[9])(c[50],c[93]),(0,c[88])(c[28]),c[84])(c[93],c[48]),c[47])((0,c[38])(),c[73],c[97]),c[new Date("1969-12-31T17:00:47.000-07:00")/1E3])((0,c[94])(),c[73],c[97]),0))&&(((0,c[41])((0,c[84])(c[42],
c[80]),c[15],c[60],c[46]),c[93])((0,c[37])(c[66],c[63]),c[83],c[94]),c[42])((0,c[85])(c[43],c[70]),c[98],c[56],c[75])}catch(d){(0,c[18])((0,c[24])((0,c[15])(),c[50],c[70]),c[85],c[66],c[new Date("1969-12-31T20:16:10.000-03:45")/1E3])}finally{-6!=c[52]&&(4>=c[62]&&((0,c[18])((0,c[61])(c[19],c[13]),c[38],c[51],c[32])*(0,c[16])(c[12],c[new Date("1969-12-31T14:01:21.000-10:00")/1E3]),[])||(0,c[new Date("1969-12-31T20:45:10.000-03:15")/1E3])((0,c[16])(c[65],c[95]),c[94],(0,c[16])(c[87],c[47]),c[1],(0,c[24])(),
c[27],c[47])),2!==c[79]&&(c[-87*Math.pow(2,3)+757]<new Date("1970-01-01T06:14:59.000+06:15")/1E3?(0,c[28])((((0,c[18])(c[17],(0,c[7])(c[45],c[95]),(0,c[62])(c[55],c[47])+(0,c[62])(c[37],c[81]),(0,c[62])(c[40],c[71*Math.pow(3,3)-1822]),c[67]),(0,c[13])(c[95],c[72]),c[62])(c[82],c[47]),c[16])(c[3],c[81]),(0,c[62])(c[49],c[47]),c[94],(0,c[1])((0,c[48])(),c[27],c[47]),c[13],c[47],c[53]):(0,c[10])((0,c[33])((0,c[1])((0,c[35])(),c[27],c[81]),c[17],((((0,c[94])((0,c[16])(c[90],c[51]),c[38],c[95],c[63]),
c[28])((0,c[71])(c[8],c[4]),c[74],c[63],c[47-Math.pow(new Date("1969-12-31T13:45:07.000-10:15")/1E3,1)%201]),c[21])(c[35],c[40]),c[75])(c[6]),c[40]),c[91],(0,c[96])(c[10],c[97]),c[36],(0,c[55])(c[26],c[87]),c[26],c[9])),-9>=c[98]&&(-2<=c[39]||((((0,c[74])(c[new Date("1969-12-31T22:16:23.000-01:45")/1E3],c[33]),c[71])(c[54],c[17]),c[36])(c[26],c[new Date("1970-01-01T07:30:32.000+07:30")/1E3]),null))&&((0,c[21])(c[51],c[6])&(0,c[36])(c[54],c[16]))>>>(0,c[21])(c[89],c[40]),(0===c[80]||(((0,c[65])(c[43],
c[26]),(0,c[86])(c[98],c[54]),c[86])(c[39]),NaN))&&((0,c[78])(c[Math.pow(3,new Date("1970-01-01T10:45:05.000+10:45")/1E3)-59+-176],c[24-Math.pow(2,4)+81]),(0,c[43])(c[8],c[36]),c[78])(c[74],c[34])}}catch(d){return"enhanced_except_r5oB0OX-_w8_"+a}return b.join("")};