const gma = /^[\w.]*$/
const signatureTimestamp = 19835

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
	const url = orgaCompose(m.cD,m.sG,m.s)
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
	a={MX:!1,cD:"",sG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.MX=!0;
a.cD=b.url;
a.sG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
cP.mm(a,2);
cP.qb(a,70);
cP.qb(a,24);
cP.vI(a,35);
cP.mm(a,1);
cP.qb(a,3);
return a.join("")
}

var cP={mm:function(a,b){a.splice(0,b)},
qb:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
vI:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(""),c=[1523261034,function(d,e){d.splice(d.length,0,e)},
function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
-876440102,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
547919705,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-622879457,-1897128337,795614891,-1573482172,function(d,e){e.push(d)},
1783644886,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
-603519627,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
462112361,-1502037325,-815211199,1973651084,-326140419,1485647395,-1798419438,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
391856076,-434869073,394598763,1926732625,1393378915,-687598898,930653715,b,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
1420334435,1222011515,-2061683512,698530456,-1084896633,-161826485,-1463466342,1442933721,637973005,686250780,-489364427,-1360592303,-955385949,-573687378,301497820,function(d,e){if(0!=e.length){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
null,"kF9zl",null,-1230659549,function(d,e,f){var h=e.length;d.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},f.split(""))},
1579489158,-1082329773,-1608187475,-1946406967,"'([\u22e2","this",null,851904481,-572462633,-1540277318,-1716927242,-958572758,b,1861683655,function(d,e,f,h,l,m,n,p){return d(m,n,p)},
';"),',-930677644,1894583779,-2053121102,-1112365970,1317279505,1559765686,-479358965,-298117172,function(d,e,f,h,l){return e(f,h,l)},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
785087419,1481790329,-479358965,-1451398432,1635654816,function(d){d.reverse()},
"h94_",function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
b,function(d,e,f,h,l,m){return e(h,l,m)},
-2003958506,-357901612,2074169207];c[50]=c;c[52]=c;c[61]=c;try{try{4<=c[28]&&(-7>=c[21]&&((0,c[2])(c[52],c[74])||new Date("1969-12-31T21:15:08.000-02:45")/1E3)||(0,c[24])(c[67],c[53])),-8>c[23]&&(8<=c[92]&&((0,c[79])(((0,c[79])((0,c[24])(c[50],c[8]),c[24],c[Math.pow(new Date("1970-01-01T10:00:02.000+10:00")/1E3,3)+131-72],c[83]),c[49])(c[30],c[50])|(0,c[24])(c[67],c[85]),c[5],c[52],c[71]),[])||(((0,c[9174-142*Math.pow(8,2)])(c[32]),((0,c[2])(c[61],c[43]),c[49])(c[56],c[61]))>=(0,c[5])(c[-12192+Math.pow(8,
1)+12234],c[78]),(0,c[28])(c[6],(0,c[54])(),c[34]))),0<=c[29]&&((0,c[53])((0,c[73])(c[35],c[2]),c[31],c[2],c[new Date("1970-01-01T02:31:13.000+02:30")/1E3]),c[31])(c[24],c[63]),-2>=c[54]?(0,c[14])((0,c[83])(c[2],(0,c[45])(),c[89]),c[83],c[2],(0,c[33])(),c[89]):((0,c[41])(c[92],c[81]),c[31])(c[81],c[16]),(-6<=c[76]||((((0,c[25])((0,c[31])(c[81],c[11]),c[36],(0,c[43])(c[71],c[79]),c[14])|(0,c[11])(c[3],c[14]),(0,c[33])(c[new Date("1970-01-01T01:31:02.000+01:30")/1E3],c[61]),c[33])(c[79+385%Math.pow(2,
2)],c[90]),(0,c[81])(c[9],c[78]),c[30])(c[80],c[72]),0))&&(0,c[2])((((0,c[2])((0,c[86])(c[3]),c[86],(0,c[39])(c[61],(0,c[60])(),c[5]),c[3]),(0,c[86])(c[43]),c[91])(c[61],c[83]),c[69])(c[61],c[78]),c[69],(0,c[69])(c[25],c[70]),c[25],c[71])}catch(d){(0,c[2])((0,c[69])(c[3],c[210*Math.pow(5,4)+-131194]),c[Math.pow(7,3)- -20516-20780],(0,c[13])((0,c[39])(c[3],(0,c[87+Math.pow(2,4)%7])(),c[33]),c[69],c[61],c[31]),c[30],c[3]),(0,c[69])(c[25],c[84])}finally{9<c[38]&&(-1==c[47]?(0,c[13])((0,c[69])(c[61],
c[new Date("1970-01-01T06:30:57.000+06:30")/1E3]),c[88],c[3],c[62]):(0,c[13])((0,c[91])(c[25],c[10]),c[88],c[43],c[75])),(-5!==c[1]||((0,c[88])((0,c[81])(c[23]),c[49],c[21],c[46]),-3800+152*Math.pow(5,2)))&&((0,c[59])(c[28],c[5]),c[Math.pow(6,3)+-528+331])(c[5],(0,c[40-107%Math.pow(1,4)])(),c[80]),(-10<c[31]||((0,c[88])(((0,c[66])(c[12]),c[-4212-Math.pow(3,4)+4312])(c[5],(0,c[57])(),c[22]),c[49],c[5],c[4524-Math.pow(1,5)-4514]),Math.pow(4,3)-25515- -25451))&&(0,c[59])(c[16],c[52*Math.pow(1,2)+-29])&
((0,c[51])(c[58],c[new Date("1970-01-01T11:15:05.000+11:15")/1E3]),c[48])(c[80],c[63])}try{(0>c[0]||((((0,c[48])(c[21],c[74]),c[4])(c[75],c[58]),c[51])(c[58],c[33]),NaN))&&(0,c[68])((0,c[68])((0,c[4])(c[73],c[21]),c[94],c[58],(0,c[67])(),c[88]),c[29],c[new Date("1969-12-31T13:00:58.000-11:00")/1E3],c[56])}catch(d){(0,c[29])(c[58],c[34])}try{-8!=c[45]&&((((0,c[78])(c[51],(0,c[68])((0,c[52])(c[87],c[47]),c[51],c[3],c[42]),(0,c[39])(c[471-152*Math.pow(3,1)],c[87]),(0,c[43])(c[46],c[40]),(0,c[78])(c[11],
c[1]),c[30],c[92]),c[90])(c[42],c[67]),(0,c[78])(c[51],c[1]),c[90])(c[1],c[53]),1)||((0,c[37])(c[23],(0,c[10])(),c[41]),(0,c[68])(c[23],c[45]),(0,c[90])(c[30],c[86]),(0,c[2])(((0,c[43])(c[79],c[42]),c[90])(c[42],c[36]),c[39],(0,c[43])(c[15],c[42]),c[37],c[1],(0,c[88])(),c[41]),c[39])((0,c[68])(c[40],c[94]),c[84+235%Math.pow(2,3)],c[30],c[75])}catch(d){(0,c[3228-65*Math.pow(7,2)])(c[24],c[40])}finally{-4!==c[69]&&(-4!=c[62]||(((0,c[39])((0,c[87])(c[23],c[89])&(0,c[37])(c[23],(0,c[76])(),c[41]),c[85],
c[23]),c[68])(c[60],c[93]),0))&&(0,c[39])((0,c[37])(c[23],(0,c[76])(),c[41])>>>((0,c[4])(c[23])<=(0,c[78])(c[63],c[23])),c[55+Math.pow(4,5)+-994],c[23])}}catch(d){return"enhanced_except_-5oBhOX-_w8_"+a}return b.join("")};