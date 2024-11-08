const gma = /^[\w.]*$/
const signatureTimestamp = 20033

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
	let m, url = {}
	if (!format.url) {
		m = mapDecompose(format)
		url = orgaCompose(m.PE,m.hI,m.s)
	} else {
		url.B = format.url
		url.j = {}
	}

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
	a={IZ:!1,PE:"",hI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.IZ=!0;
a.PE=b.url;
a.hI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
PL.hM(a,3);
PL.Ev(a,14);
PL.xz(a,47);
return a.join("")
}

var PL={hM:function(a,b){a.splice(0,b)},
Ev:function(a){a.reverse()},
xz:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[401328249,635286479,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1287902034,1304382400,-1152977491,null,92292119,function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
function(d,e,f,h,l){return e(f,h,l)},
-1468064625,-1272911349,1986295878,"2Hv9Gf",-503342131,-1792847434,82636827,function(d){d.reverse()},
function(d,e){e.push(d)},
464267383,1289647369,1481952802,-1526969993,-178232064,-1675411738,function(d,e,f){var h=e.length;f.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},d.split(""))},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-720886603,function(d,e,f){var h=e.length;f.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},d.split(""))},
function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
506758710,-2030910251,620839199,-1811841813,function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
-174673960,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
1144069118,",,,,",function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
null,1076497721,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
1075041466,609981373,-29088444,-590541232,549221751,1863031898,-2020382824,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
279537807,851223384,-1305775018,-1943672557,null,1732738017,function(d,e,f,h,l,m,n){return d(l,m,n)},
-1820594640,1980956053,2038206728,b,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
1075041466,932676095,-1054184697,-461645760,798675872,-1992893374,774290685,-810361549,1844645745,1018639637,1797322610,b,415393875,-790389015,1786230877,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
b,1507027694,function(d,e,f,h,l,m){return e(h,l,m)},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-202082495];c[6]=c;c[40]=c;c[55]=c;try{try{c[23]!==8&&((0,c[9])((0,c[34])(c[40],c[83]),c[8],c[61],c[33]),(0,c[50])(c[20],c[61]),c[25])(c[13],(0,c[78])(),c[79]),c[11]!=-7?(((((0,c[50])(c[12],c[6]),c[51])((0,c[76])(c[32],c[46]),c[76],c[37],c[63]),c[76])(c[32],c[23]),c[8])(c[79],c[48]),(0,c[46])(c[20],c[36])):(((0,c[46])(c[50]),c[46])(c[5]),((((0,c[38])(c[23],(0,c[12])(),c[0]),c[38])(c[23],(0,c[4])(),c[0]),c[38])(c[23],(0,c[12])(),c[71]),c[49])(c[45],c[65]))}catch(d){(0,c[49])(c[new Date("1969-12-31T14:15:17.000-09:45")/
1E3],c[5]),(0,c[49])(c[24],c[65])}finally{(c[77]===-10||(((0,c[19])((0,c[44])(c[0],c[54]),c[18],c[65],c[32])<(0,c[new Date("1969-12-31T20:30:44.000-03:30")/1E3])(c[5],c[51]))>>>(0,c[60])(c[33],c[71]),""))&&(0,c[19])((0,c[7])((0,c[49])(c[81],c[50]),c[44],(0,c[35])(c[23],(0,c[12])(),c[5]),c[16],c[10]),c[49],c[55],c[16]),c[3]<new Date("1970-01-01T04:30:05.000+04:30")/1E3&&(((0,c[18])(c[71],c[1]),c[38])(c[23],(0,c[12])(),c[5]),1)||((0,c[72])(c[69],c[16]),c[1])(c[33],c[0]),c[82]!=-3?((0,c[1])(c[24],c[new Date("1969-12-31T16:45:18.000-07:15")/
1E3]),c[41])(c[-2868- -80*Math.pow(new Date("1969-12-31T13:45:06.000-10:15")/1E3,2)],c[63]):(0,c[32])((0,c[48])(c[36],(0,c[17])(),c[0]),c[57],c[18],c[77]),c[24]===-1&&(((0,c[51])(c[36],(0,c[25])(),c[0]),c[31])(c[63],c[72]),1)||(0,c[32])((0,c[1])(c[34],c[29]),c[3],c[9],c[38]),c[16]===-3?(((0,c[19])(c[39],c[49]),c[8])(c[36],c[49]),(0,c[3])(c[24],c[57]),c[71])(c[Math.pow(2,new Date("1969-12-31T14:30:04.000-09:30")/1E3)+115+-71]):(0,c[83])((0,c[63])((0,c[52])(c[26]),c[32],c[73],c[9]),c[81],(0,c[50])(c[33],
c[42]),c[34],c[25],c[75]),(c[16]>new Date("1969-12-31T18:00:09.000-06:00")/1E3||((0,c[58])(c[38],c[52]),0))&&(0,c[29])(c[35],c[51])}try{c[68]<=7?(0,c[26])((0,c[34])(c[73],c[75]),c[31],(0,c[20])(c[8],(0,c[37])(),c[75]),c[52]):(0,c[4])(((0,c[13])(c[30],c[50]),c[58])(c[55],c[75]),c[29],c[57],c[42]),(c[7]===7||((0,c[70])(c[3],(0,c[29])(c[35],c[72]),(0,c[45])(c[43],c[1]),(0,c[56])(((0,c[11])(c[34],c[53]),c[50])(c[11],c[57]),c[19],c[58],c[82]),c[40],c[38]),0))&&(0,c[80])(((0,c[29])(c[84],(0,c[27])(),c[47]),
(0,c[24])(c[59],c[42]),c[16])((0,c[24])(c[53],c[65]),c[10],(0,c[19])(c[47],c[50]),c[84],(0,c[11])(),c[42]),c[24],c[43],c[42]),c[new Date("1969-12-31T12:31:03.000-11:30")/1E3]>=-5&&(c[2]!==-4?(0,c[16])((0,c[80])((0,c[new Date("1970-01-01T09:00:35.000+09:00")/1E3])(c[new Date("1970-01-01T09:00:37.000+09:00")/1E3],c[42]),c[35],c[56],c[42]),c[79],(0,c[81])(c[42]),c[42],c[67]):(((0,c[24])(c[66],c[42]),(0,c[24])(c[2],c[65]),c[24])(c[36],c[40]),c[21])(c[25]))}catch(d){(0,c[16])((0,c[35])(c[17],c[47]),c[0],
(0,c[68])(c[40]),c[12],c[47])}}catch(d){return"enhanced_except_wZwBvuP-_w8_"+a}return b.join("")};