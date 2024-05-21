const gma = /^[\w.]*$/
const signatureTimestamp = 19863

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
	const url = orgaCompose(m.zD,m.SG,m.s)
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
	a={mY:!1,zD:"",SG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.mY=!0;
a.zD=b.url;
a.SG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
COa.GC(a,50);
COa.Xt(a,1);
COa.GC(a,38);
return a.join("")
}

var COa={GC:function(a){a.reverse()},
Xt:function(a,b){a.splice(0,b)},
Qt:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(""),c=[b,function(d,e,f,h,l,m){return e(h,l,m)},
function(d,e,f,h,l){return e(f,h,l)},
-1779753039,178346732,-1972988249,758074503,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-581944301,-1567571085,-459750710,null,-1987551529,-1799817986,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
1446025250,1537437472,-1507633294,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1263769886,564208965,285809110,-1971591783,-966278792,-1714336201,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
1794668E3,708238102,1786083260,b,-1002009326,-1987551529,370300298,null,function(d,e){if(0!=e.length){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
function(d,e,f){var h=e.length;f.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},d.split(""))},
function(d,e){0!=e.length&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
function(d){d.reverse()},
function(d,e){d.splice(d.length,0,e)},
548609673,2099094549,-1273625667,-1927169918,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-1787654598,1052070404,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-693312780,313033255,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
674851617,1364032108,452694665,-1753479828,1174578467,-574128372,';"\\;',-1478744117,-1773296581,-1333864901,-198625965,"Q_MO",-1936636216,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
1368862779,1712591092,-966278792,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
function(d,e,f,h,l,m,n){return d(l,m,n)},
1262722651,1178445604,b,-1569874261,-287467241,-1948675419,function(d,e,f,h,l,m,n,p){return d(m,n,p)},
-2006447885,1680399484,-1199499572,-616692657,1981855133,null];c[11]=c;c[33]=c;c[82]=c;try{try{5!=c[26]?((0,c[2])((((0,c[34])(c[3],c[82]),c[190-497%Math.pow(7,3)])(c[23],c[33]),(0,c[-950+Math.pow(4,2)- -968])(c[59],c[11]),c[49])(c[17],c[29]),c[36],c[9],c[72]),c[2])((0,c[68])(c[66],c[-331+57*Math.pow(6,1)]),c[36],c[56],c[1]):(((((0,c[23])(c[50],(0,c[38])(),c[13]),c[34])(c[24544+Math.pow(8,2)+-24587]),c[56])(c[1],c[17]),c[72])((0,c[58])(c[69],c[21]),c[23],(0,c[24])(c[18],c[70]),c[50],(0,c[31])(),c[13]),
c[23])(c[50],(0,c[-142*Math.pow(2,1)- -322])(),c[17]),3>=c[new Date("1969-12-31T15:30:01.000-08:30")/1E3]&&(0,c[56])(c[29],c[70]),-10<c[5]?(0,c[27])((0,c[12])(c[0],c[54]),c[60],c[4],(0,c[new Date("1969-12-31T18:00:43.000-06:00")/1E3])(),c[14]):(0,c[27])((0,c[59])(c[53],c[58]),c[61],c[37],c[54])}catch(d){((0,c[60])(c[4],(0,c[32])(),c[14]),c[60])(c[137+Math.pow(4,3)-197],(0,c[68])(),c[54]),(0,c[61])(c[80],c[36])}finally{-6!=c[22]&&(-10>c[29]?(((0,c[59])(c[33],c[36]),(0,c[60])(c[new Date("1970-01-01T09:15:04.000+09:15")/
1E3],(0,c[32])(),c[54]),c[71])(c[36]),c[27])((0,c[60])(c[4],(0,c[43])(),c[14]),c[60%Math.pow(5,3)+-48],c[78],c[50])<=(0,c[27])((((0,c[74])(c[29],c[14]),c[62])(c[50]),c[59])(c[77],c[24]),c[Math.pow(3,5)%378-183],c[4],(0,c[32])(),c[54]):(((0,c[60])(c[4],(0,c[68])(),c[54]),c[27])((0,c[new Date("1969-12-31T16:30:11.000-07:30")/1E3])(c[12],(0,c[61])(c[20],c[50]),(0,c[59])(c[Math.pow(8,1)+11088-11089],c[54]),(0,c[61])(c[57],c[50]),c[67],c[58]),c[37],c[68],c[Math.pow(8,5)+-17568-15159]),c[53])((0,c[5])(c[43],
c[Math.pow(2,4)-new Date("1969-12-31T20:46:45.000-03:15")/1E3*20+2165]),c[5],(0,c[5])(c[20],c[41]),c[46],c[41])),6!=c[21]&&((0,c[54])((0,c[3])(c[9],c[2]),c[5],c[30],c[51]),c[53])((0,c[new Date("1969-12-31T17:15:37.000-06:45")/1E3])(c[27],c[81]),c[0],(0,c[39])(c[71],c[2]),c[34],c[5]),c[47]!==new Date("1970-01-01T01:45:08.000+01:45")/1E3&&(-4===c[73]||(((0,c[16])((0,c[71])(c[27],c[24]),(0,c[37])((0,c[20])(c[25],c[46]),c[Math.pow(2,3)-49+65],c[9]),c[71],(((0,c[23])(c[1],c[44]),c[37])(c[-237*Math.pow(4,
1)- -1015],c[48]),(0,c[42])(c[40],c[64]),c[27])(c[44]),c[4],c[34],c[new Date("1969-12-31T20:30:48.000-03:30")/1E3]),c[71])((0,c[2])(c[16],c[new Date("1970-01-01T08:00:44.000+08:00")/1E3]),c[4],c[46],c[0]),""))&&(((0,c[38])(c[10],(0,c[30])(),c[48]),(0,c[23])(c[-104*Math.pow(7,5)+1747937],c[74]),c[23])(c[53],c[44]),c[38])(c[10],(0,c[66])(),c[44])-(0,c[80])(c[59],(0,c[38])(c[10],(0,c[66])(),c[48]),(0,c[71])((0,c[38])(c[10],(0,c[55])(),c[48]),c[38],c[10],(0,c[30])(),c[61*Math.pow(1,3)-13]),(0,c[38])(c[10],
(0,c[22])(),c[48]),(0,c[23])(c[28],c[62]),c[222%Math.pow(6,1)])}try{-10!==c[21]&&(-9!=c[70]?(0,c[72])((0,c[2])(c[51],c[74])&(0,c[1])(c[9],c[47]),c[83],(0,c[33])((0,c[33])((0,c[new Date("1969-12-31T18:15:33.000-05:45")/1E3])((0,c[84])(c[59],c[36]),c[1],c[14],c[2]),c[1],c[11],c[36]),c[1],c[39],c[24]),c[6]):(0,c[34])((((0,c[70])(c[38],c[47]),c[49])(c[71],c[36]),c[361%Math.pow(1,1)- -1])(c[76],c[47]),c[0],(0,c[34])((0,c[84])(c[65],c[69]),c[64],(0,c[0])(c[20],c[-1378- -202*Math.pow(7,1)]),c[57],(0,c[77])(),
c[47]),c[73],c[47]))}catch(d){(0,c[1])(c[35],c[6])}}catch(d){return"enhanced_except_l5sB6OT-_w8_"+a}return b.join("")};