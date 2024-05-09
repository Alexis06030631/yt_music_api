const gma = /^[\w.]*$/
const signatureTimestamp = 19850

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
	const url = orgaCompose(m.hD,m.AG,m.s)
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
	a={XX:!1,hD:"",AG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.XX=!0;
a.hD=b.url;
a.AG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
XO.Af(a,3);
XO.KY(a,62);
XO.Af(a,2);
XO.qc(a,60);
return a.join("")
}

var XO={KY:function(a){a.reverse()},
Af:function(a,b){a.splice(0,b)},
qc:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(""),c=[397309780,-1361794048,-1349004802,784816421,893119243,null,1521123900,-1534090526,b,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
1136885615,1787332309,-861961374,null,977055318,"-7YQI",1852907552,-1364222976,function(d,e){0!=e.length&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
function(d){d.reverse()},
b,function(d,e,f,h,l,m){return e(h,l,m)},
-1962329781,-235571590,745990351,-1444039204,-82929061,function(d,e){e.push(d)},
function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
function(d,e){d.splice(d.length,0,e)},
312011898,function(d){d.reverse()},
-1622284764,-1376014532,function(d,e,f,h,l){return e(f,h,l)},
719382471,-1622284764,function(d,e,f){var h=f.length;d.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},e.split(""))},
-827482554,-1800276982,1060283126,2108529143,1742708527,-348918977,498952667,1495245975,-806299766,-2117979804,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
881311561,-92800436,1705671699,-1146555227,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
b,1770062352,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-1298549498,-413639788,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
"/)/;'{)",450804608,null,393788776,483524221];c[5]=c;c[13]=c;c[64]=c;try{try{1<c[66]&&(((((0,c[19])(c[13]),c[58-497%Math.pow(4,1)])(c[58]),(0,c[Math.pow(3,1)+31622+-31580])((0,c[48])(c[13],c[53]),c[47],(0,c[48])(c[15],c[58]),c[46]),c[39])(c[Math.pow(2,2)%426- -2],c[2]),c[5])(c[58],c[19]),c[5])(c[10],c[20]),-5>=c[27]&&(-3<c[new Date("1969-12-31T15:45:00.000-08:15")/1E3]&&((0,c[32])((0,c[32])((0,c[47])(c[18*Math.pow(3,4)+-1448]),c[5],c[46],c[56]),c[Math.pow(6,1)+14- -37],c[-228*Math.pow(1,4)- -289]),
(0,c[32])((0,c[5])(c[10],c[33]),c[29],c[58],c[51],(0,c[16-Math.pow(8,1)%124])()),1)||((((0,c[38])(c[53],c[63]),c[38])(c[2],c[42]),c[35])(c[53]),(0,c[19])(c[51],c[65]),c[49])(c[6],c[64])),8!=c[new Date("1970-01-01T04:00:19.000+04:00")/1E3]&&((0,c[46])(c[25]),(0,c[46])(c[25]),c[55])(c[60],c[33])}catch(d){(0,c[3])((0,c[3])((0,c[62])(c[50]),c[56],c[25]),c[6],c[25],c[205+-153*Math.pow(new Date("1969-12-31T12:30:01.000-11:30")/1E3,3)],(0,c[18])())}try{-2<=c[43]&&(((((0,c[65])(c[50],c[67]),(0,c[30])(c[36],
c[7]),c[46])(c[25]),c[3])((0,c[30])(c[25],c[49]),c[6],c[57],c[52],(0,c[27])()),c[23])(c[25],c[8]),"null")||((((0,c[30])(c[36],c[59]),c[23])(c[36],c[54]),c[3])((0,c[6])(c[25],c[52],(0,c[0])()),c[30],c[25],c[34]),(0,c[-8+462%Math.pow(2,5)])(c[57],c[Math.pow(4,5)+-10578+9606],(0,c[27])()),(0,c[62])(c[57])),-2!=c[61]&&(-1<c[32]?(0,c[58])((0,c[65])(c[42],c[14]),c[17],((0,c[23])(c[57],c[9]),c[17])(c[42],c[13]),c[40],c[10]):(0,c[18])(((0,c[2])(c[33],c[48]),c[21])(c[4],c[67],(0,c[42])())^(0,c[38])(c[51],
c[63]),c[38],c[51],c[new Date("1970-01-01T06:00:53.000+06:00")/1E3])),-8===c[Math.pow(1,3)-142+165]?(0,c[18])((0,c[18])(((0,c[18])((0,c[32])(c[4],c[345-Math.pow(7,4)%302]),c[21],c[-138*Math.pow(2,5)+4420],c[67],(0,c[42])()),(0,c[45])(c[502-498%Math.pow(7,4)],c[new Date("1969-12-31T16:00:50.000-08:00")/1E3])),c[38],c[65],c[43]),c[9],c[4]):(0,c[39])((0,c[12])(c[51],c[25]),c[5],(0,c[61])(c[100-Math.pow(4,5)%232]),c[2],((0,c[13])(c[48],c[35]),c[38])(c[65],c[41]),c[36],c[18]),c[47]!==-693746+222*Math.pow(5,
5)&&((0,c[41])(c[24],c[18])+(0,c[8453-Math.pow(2,4)-8380])((0,c[31])(c[35]),c[66],c[47],c[9])-(0,c[17])(c[493-460%Math.pow(4,5)],c[42]),(0,c[60])(c[50],c[2]),c[43])(c[51],c[19])}catch(d){(0,c[37])(((0,c[10])(c[4],c[11]),c[-207+217%Math.pow(5,5)])(c[7],c[26]),c[10],c[7],c[29]),(0,c[34])(c[51],c[new Date("1970-01-01T01:45:57.000+01:45")/1E3],(0,c[40])())}try{6<c[21]&&(-9!==c[20]&&(((0,c[63])(c[15]),c[63])(c[67]),1)||(0,c[31])((0,c[58])(c[17],c[13]),c[58],c[64],c[65]))}catch(d){(0,c[51])(c[53],c[3])}}catch(d){return"enhanced_except_ipsB9eT-_w8_"+
a}return b.join("")};