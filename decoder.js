const gma = /^[\w.]*$/
const signatureTimestamp = 19856

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
	const url = orgaCompose(m.lD,m.EG,m.s)
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
	a={ZX:!1,lD:"",EG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.ZX=!0;
a.lD=b.url;
a.EG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
XO.Ru(a,43);
XO.Ru(a,57);
XO.Bs(a,2);
XO.Uz(a,61);
XO.Ru(a,24);
XO.Bs(a,3);
XO.Ru(a,63);
XO.Bs(a,2);
XO.Uz(a,78);
return a.join("")
}

var XO={Bs:function(a,b){a.splice(0,b)},
Uz:function(a){a.reverse()},
Ru:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(""),c=[-29992185,function(d,e,f,h,l,m,n){return d(l,m,n)},
-924380108,1990093686,null,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
781331478,"mwljwlf",function(d,e,f,h,l,m){return e(h,l,m)},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
92500855,-222409081,1440203760,1302649554,1640981776,-1253443424,-1362196371,1915588566,1563255594,-568854728,-6630441,-553987186,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
-1255933014,1983046908,-364359922,b,566776712,function(d,e,f){var h=e.length;d.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},f.split(""))},
1326048898,b,-1921176715,-420267508,1089355533,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
"\\,;,",-726626008,function(d,e){if(0!=e.length){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
b,-1206726805,null,1550748537,function(d,e,f,h,l,m,n,p,q,r,t,v){return h(n,p,q,r,t,v)},
654612659,2141601126,-342262626,function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
-29992185,1774541233,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
null,1550748537,1292964467,-870713664,417463103,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
")['['",function(d,e,f,h,l){return e(f,h,l)},
1962869336,563611251,1089355533,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-899868074,94026879,1667095553,1075183261,function(d){d.reverse()},
1483393719,-120667911,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-613313294];c[4]=c;c[41]=c;c[51]=c;try{try{8!==c[17]&&(10<c[52]||((((0,c[67])(c[51]),(0,c[28])(c[30],(0,c[62])(),c[7]),c[35])(c[48],c[new Date("1969-12-31T14:00:41.000-10:00")/1E3]),c[28])(c[1304+-142*Math.pow(3,new Date("1970-01-01T10:45:02.000+10:45")/1E3)],(0,c[50])(),c[7]),void 0))&&((((0,c[35])(c[64],c[41]),c[26])(c[56],c[32]),c[19])(c[44],c[25]),c[34])(c[28],c[14]),(-4<=c[18]||(((0,c[57])(c[28]),c[62])(c[53],c[43]),NaN))&&(0,c[31])((0,c[42])(c[13],c[14]),c[67],c[new Date("1970-01-01T11:15:35.000+11:15")/
1E3],c[-5317+168*Math.pow(2,5)])}catch(d){(0,c[8])(c[38],c[21]),(0,c[61])(c[63],(0,c[27])(),c[10])}finally{(-3>=c[1]||(((0,c[8])(c[13],c[23]),(0,c[54])(c[new Date("1970-01-01T04:00:06.000+04:00")/1E3],c[13]),c[61])(c[50],(0,c[39])(),c[10]),0))&&(0,c[9])((0,c[54])(c[65],c[13]),c[31],(0,c[7])(c[4],c[60]),c[26]),-5>=c[25]&&(((0,c[2])(c[8]),((0,c[20])(c[37],c[61]),c[45])(c[4],c[53*Math.pow(7,5)+-890734]),(0,c[new Date("1970-01-01T01:15:32.000+01:15")/1E3])(c[30],c[16]),c[37])(c[52],c[34]),c[17])(((0,c[53])(c[35],
c[36]),(0,c[8])(c[34]),c[31])(c[67],c[47]),c[49],c[58])}try{(0!=c[62]||((0,c[46])((0,c[14])(c[59],c[Math.pow(5,5)-95+new Date("1969-12-31T13:10:06.000-10:00")/1E3]),(0,c[258%Math.pow(2,3)+7])((0,c[61])(c[50],(0,c[27])(),c[10]),c[61],(0,c[61])(c[63],(0,c[55])(),c[10]),c[63],(0,c[12])(),c[10]),(0,c[61])(c[63],(0,c[51-Math.pow(6,5)+7780])(),c[10]),c[55-new Date("1970-01-01T04:15:49.000+04:15")/1E3%Math.pow(5,2)],(0,c[54])(c[2],c[63]),(0,c[42])(c[50],c[30]),(0,c[31])((0,c[61])(c[63],(0,c[39])(),c[10]),
c[51],c[69],c[50]),c[14],c[50],c[1]),null))&&(((0,c[16])(c[54],((0,c[51])(c[7],c[59]),c[54])(c[40],c[59]),(0,c[14])(c[63],c[47]),(0,c[31])((0,c[31])((0,c[51])(c[56],c[48]),c[67],c[20],c[38]),c[48],c[new Date("1969-12-31T20:16:02.000-03:45")/1E3],c[53]),c[69],c[new Date("1969-12-31T13:00:53.000-11:00")/1E3]),c[71-458%Math.pow(4,3)])(c[51],c[53]),(0,c[48])(c[28],c[53])-(0,c[61])(c[54],c[42])),4>c[48]&&(-3!==c[49]?(0,c[13])((0,c[34])(c[5015+Math.pow(4,2)-4980],c[18])/(0,c[40])(c[new Date("1969-12-31T13:00:57.000-11:00")/
1E3],c[13]),c[7],(0,c[12])(c[48],c[41]),c[12],(0,c[65])(c[68],c[11]),c[53],c[67]):(0,c[23])((0,c[51])(c[53],(0,c[2])(),c[0])^(0,c[12])(c[49]),c[71],(0,c[51])(c[40],(0,c[29])(),c[0]),c[51],(0,c[51])(c[49],(0,c[new Date("1970-01-01T01:00:45.000+01:00")/1E3])(),c[0]),c[40],(0,c[17])(),c[0])),-1<c[19]&&(0,c[71])((0,c[21])((0,c[41])(c[144%Math.pow(3,5)+-109],c[Math.pow(5,5)+23998+-27070]),c[12],c[49]),c[41],(0,c[21])((0,c[9])(c[Math.pow(3,3)- -44115-44102]),c[51],c[53],(0,c[45])(),c[0]),c[34],c[53]),-2>=
c[20]?(0,c[51])(c[40],(0,c[45])(),c[0]):(0,c[4])(c[53],c[59])}catch(d){(0,c[51])(c[40],(0,c[2])(),c[0]),(0,c[51])(c[40],(0,c[29])(),c[0])>=(0,c[57])(c[66],c[40])>=(0,c[51])(c[40],(0,c[29])(),c[0])}}catch(d){return"enhanced_except_kJsB7-T-_w8_"+a}return b.join("")};