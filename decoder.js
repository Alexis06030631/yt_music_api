const gma = /^[\w.]*$/
const signatureTimestamp = 19821

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
	const url = orgaCompose(m.aD,m.mG,m.s)
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
	a={XX:!1,aD:"",mG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.XX=!0;
a.aD=b.url;
a.mG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
iP.Nk(a,12);
iP.oK(a,3);
iP.XO(a,13);
iP.Nk(a,40);
iP.oK(a,2);
iP.XO(a,13);
iP.oK(a,1);
iP.XO(a,55);
iP.oK(a,1);
return a.join("")
}

var iP={XO:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
Nk:function(a){a.reverse()},
oK:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(""),c=[575143500,-877739666,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
54556614,-1650637141,531831005,function(d,e,f,h,l){return e(f,h,l)},
484959982,1286119025,1977907499,-1689861374,-2056761252,-868535251,220223512,-917372642,1226885691,522063802,1009904296,-1952616684,-510326169,-53314841,-1381658496,823537420,-1100073198,2130235351,-1776762060,"{\u22cf,[{","unshift",null,1921065942,-869306697,-888854838,-86875625,948805936,-211678818,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
function(d,e,f,h,l,m){return e(h,l,m)},
function(d,e,f,h,l,m,n){return d(l,m,n)},
984439849,-1321752328,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
583460559,-2041924654,1543398996,-823297659,220223512,-387685704,-1213309387,-639692355,754035160,b,b,1977907499,-2111759E3,-610662579,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
null,b,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-1082634772,function(d,e,f){var h=d.length;f.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},e.split(""))},
1246155901,-1344631911,604569045,-683398088,function(d){d.reverse()},
593763800,142558112,1330316507,1675116181,-2115479016,-1123051777,-347999899,-1426507124,function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
-1249884248,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
168563306,null,-15138331,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-387685704,1940866610,function(d){throw d;},
102819277,49396662,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-808405185,-683980380,-510326169,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1317611717,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
366557583,-487304912];c[28]=c;c[57]=c;c[79]=c;try{try{-5<c[53]&&(0,c[new Date("1969-12-31T14:30:41.000-09:30")/1E3])(c[85],c[58])%(0,c[38])(c[66],((0,c[35])(c[51]),c[93])(c[92],c[57]),(0,c[70])(c[53],c[8]),(0,c[88])(c[43],c[47]),c[46]),(0,c[79])(c[46]),(0,c[36])(c[11],c[47])}catch(d){}try{-1!==c[59]?(0,c[88])(c[68],c[46]):(0,c[56])((0,c[76])(),c[22],c[46]),9!==c[19]&&(1==c[71]||(((0,c[51])(c[17],c[47]),((0,c[70])(c[23],c[40]),c[31])(c[74],c[58]),c[36])(c[50],c[53]),0))&&((0,c[51])(c[73],c[46]),c[1])(((0,c[new Date("1970-01-01T11:30:31.000+11:30")/
1E3])(c[52],c[107*Math.pow(7,2)+-5223]),(0,c[56])((0,c[86])(),c[22],c[46])),c[51],c[67],c[52])}catch(d){((0,c[51])(c[37],c[47]),c[31])(c[new Date("1970-01-01T08:30:23.000+08:30")/1E3],c[60])}try{-3!=c[9]&&(1!=c[63]||((0,c[88])(c[71],c[46]),null))&&(0,c[70])(c[46],c[84])}catch(d){(0,c[31])(c[53],c[95])}try{4!==c[89]&&(((0,c[31])(c[new Date("1969-12-31T19:30:46.000-04:30")/1E3],c[9]),c[36])(c[38],c[47]),c[70])(c[46],c[63]),-9!==c[92]&&(5>=c[90]?(0,c[56])((0,c[new Date("1969-12-31T20:01:16.000-04:00")/
1E3])(),c[22],c[53]):(0,c[51])(c[10],c[46])),-2<c[28]&&(0,c[31])(c[47],c[28]),c[89]>=68119-109*Math.pow(5,4)&&(6>=c[16]||((0,c[70])(c[52],c[59]),(0,c[88])(c[85],c[23]),0))&&((0,c[88])(c[19],c[46]),c[61])(c[46]),(-8<=c[26]||((0,c[1])((0,c[88])(c[13],c[46]),c[36],c[49],c[-12*Math.pow(3,5)- -2962]),0))&&(0,c[1])((0,c[88])(c[4],c[23]),c[36],c[25],c[52]),-5<=c[17]&&(5==c[63]||(((0,c[51])(c[81],c[47]),c[70])(c[23],c[12+475%Math.pow(4,1)]),""))&&(0,c[1])((0,c[56])((0,c[86])(),c[22],c[46]),c[51],c[90],c[53]),
-10===c[64]?((0,c[51])(c[27],c[52]),c[61])(c[53]):((0,c[31])(c[23],c[2]),c[31])(c[23],c[7]),-10!=c[9]&&(8>=c[64]?(0,c[93])(((((0,c[56])((0,c[72])(),c[22],c[61]),c[30])(c[new Date("1970-01-01T10:45:53.000+10:45")/1E3]),c[56])((0,c[76])(),c[22],c[61]),c[0])(c[53]),c[1],(0,c[56])((0,c[86])(),c[22],c[47]),c[215%Math.pow(1,4)- -70],c[74],c[91]):(((0,c[88])(c[15801+new Date("1969-12-31T13:40:54.000-10:15")/1E3*Math.pow(8,2)],c[23]),c[50])(c[33],c[55]),(((0,c[68])(c[46],c[3]),c[92])(c[28],c[78]),c[50])(c[63],
c[14]),c[92])(c[70])),(3>c[8]||(((0,c[68])(c[76],c[73]),c[29])(c[25],c[81]),0))&&((0,c[new Date("1969-12-31T14:15:43.000-09:45")/1E3])((0,c[23])(),c[77],c[new Date("1969-12-31T21:30:38.000-02:30")/1E3]),c[48])(c[60],c[38]),-10!=c[40]&&(((0,c[2])((((0,c[11])(c[83],c[25]),c[168-100%Math.pow(6,5)])(c[47],c[87]),c[3])(c[76]),c[32],c[60],c[70]),c[56])((0,c[91])(c[14],c[33]),c[73],c[77],c[9]),"null")||((0,c[512%Math.pow(1,3)+54])(c[95],c[50]),c[4])((0,c[54])(c[72],c[56]),c[34],c[26],c[65])<<(((0,c[34])(c[64],
c[81]),c[new Date("1969-12-31T13:00:54.000-11:00")/1E3])(c[48],c[56]),c[59])((0,c[89])(),c[new Date("1970-01-01T09:30:25.000+09:30")/1E3],c[64]),-1!=c[83]?(0,c[39])(c[37],c[55]):(0,c[50])(c[27],c[69])}catch(d){(0,c[12])((0,c[31])(c[24],c[27]),c[68],(0,c[31])(c[63],c[27]),c[45],c[32])===(0,c[31])(c[Math.pow(7,3)+-39098- -38764],c[32]),(0,c[77])((0,c[11])(c[41],c[15]),c[31],c[222%Math.pow(3,new Date("1970-01-01T02:45:01.000+02:45")/1E3)+57],c[new Date("1970-01-01T11:45:27.000+11:45")/1E3]),((0,c[77])((0,c[16])(c[73],
c[41]),c[76],c[41]),c[50])(c[32],c[74]),(0,c[68])(c[26],c[6278-Math.pow(8,3)-5725]),(0,c[36])((0,c[56])(),c[2658+-83*Math.pow(2,5)],c[41])}}catch(d){return"enhanced_except_7ZoBkuX-_w8_"+a}return b.join("")};