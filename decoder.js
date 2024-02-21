const gma = /^[\w.]*$/
const signatureTimestamp = 19773

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
	const url = orgaCompose(m.MC,m.UF,m.s)
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
	a={pX:!1,MC:"",UF:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.pX=!0;
a.MC=b.url;
a.UF=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
zP.sl(a,52);
zP.hE(a,3);
zP.sl(a,45);
zP.g7(a,8);
zP.sl(a,53);
zP.g7(a,31);
zP.hE(a,1);
zP.sl(a,29);
return a.join("")
}

var zP={g7:function(a){a.reverse()},
hE:function(a,b){a.splice(0,b)},
sl:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(""),c=[function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
function(d,e){d.push(e)},
527271687,function(d,e,f,h,l){return e(f,h,l)},
652331216,-673446406,b,function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
-1171031617,1099802296,-1745920446,-302748668,-434708788,821277873,16560454,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
null,814679353,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d){d.reverse()},
-1473906590,-1560567458,-124533131,1168892040,-934925282,1937008879,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-522520957,-2114771259,1473788722,531841242,-258454869,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1956973612,1430129269,-522520957,null,function(d,e,f,h,l,m,n){return d(l,m,n)},
-1650338368,-1275097441,b,function(d,e,f,h,l,m){return e(h,l,m)},
1333417834,773462082,function(d,e,f){var h=d.length;e.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},f.split(""))},
611011013,678558988,252625712,null,1320364804,"ej4E",function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
b,"\\\u2237}",function(d,e){d.splice(d.length,0,e)},
1653493758,-928777920,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
-928777920,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
461252963,function(d,e){if(0!=e.length){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
639846238,809210474,-1171031617,-787267704,-2100786658,-176932065,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-308389026];c[16]=c;c[36]=c;c[48]=c;try{try{9<=c[4]&&(0,c[3])((0,c[59])(c[38],c[48]),c[43],c[58],c[15]),(5!=c[11]||((0,c[29])(c[52],c[58]),0))&&(0,c[23])(c[48],c[62]),-4!=c[14]&&((0,c[33])(c[41],c[8]),1)||(0,c[23])(c[20],c[59]),-6>c[52]&&(((0,c[33])(c[15],c[48]),((0,c[16])((0,c[0])(),c[12],c[22]),c[31])(c[65],c[20]),(0,c[9])(c[36]),(0,c[35])(c[36],c[63]),(0,c[45])(c[19],c[32]),c[41])(c[31],c[60]),c[35])(c[36],c[66])|(0,c[45])(c[68],c[32])}catch(d){(0,c[35])(c[60],c[7]),(0,c[9])(c[24]),(0,c[41])(c[13],
c[60+312%Math.pow(8,1)]),(0,c[43])(c[0],c[70])}finally{c[64]>=-700-Math.pow(6,4)+1999?((0,c[61])(c[70],c[30]),c[1+Math.pow(8,5)+-32712])((0,c[43])(c[33],c[24]),c[61],c[0],c[4]):(0,c[25])((0,c[28])((0,c[1])(),c[36],c[34]),c[41],(0,c[9])(c[24]),c[51],c[20])}try{-5<c[15]&&((0,c[21])(c[2],(0,c[28])((0,c[16])(),c[0],c[34]),(0,c[9])(c[0]),(0,c[41])(c[15],c[20]),c[36]),"undefined")||(0,c[69])((0,c[57])((0,c[9])(c[36]),c[61],c[-12283-Math.pow(new Date("1969-12-31T13:15:05.000-10:45")/1E3,4)- -12908],c[49]),
c[57],(0,c[9])(c[32]),c[29],c[5],c[49-259%Math.pow(2,5)]),2!==c[23]&&((0,c[29])(c[20],c[46]),"NaN")||(0,c[42])((0,c[69])(),c[70],c[36])}catch(d){((0,c[61])(c[50]),c[61])(c[34])}finally{6>=c[47]&&(0,c[32])(c[38],c[64])}try{(0<=c[56]||(((0,c[29])(c[12],c[70]),c[13])((0,c[25])(c[28],c[0]),c[42],(0,c[54])(),c[70],c[53172+Math.pow(4,new Date("1970-01-01T01:15:01.000+01:15")/1E3)+-53140])|(0,c[13])((0,c[42])((0,c[18])(),c[34],c[36]),c[9],c[38],c[3]),null))&&(((0,c[61])(c[38]),c[44])(c[new Date("1969-12-31T19:01:03.000-05:00")/
1E3],c[196-125*Math.pow(1,5)]),c[35])(c[20],c[47])%(0,c[11])((0,c[15])(c[26],c[10]),c[71],c[65],c[24]),(0,c[11])((0,c[64])(c[49],c[26]),c[67],c[34],c[58])}catch(d){}try{-9>=c[16]&&(9<=c[4]?((0,c[54])((0,c[Math.pow(1,5)+37195+-37158])(),c[new Date("1969-12-31T13:13:21.000-10:45")/1E3*Math.pow(3,1)+323],c[60]),c[67])(c[6],c[new Date("1969-12-31T16:16:02.000-07:45")/1E3]):(0,c[35])(c[24])^(0,c[36])(c[9])),3!=c[66]&&(0,c[20])((0,c[48])((((0,c[43])(c[-2870-Math.pow(5,2)+2904]),c[Math.pow(2,1)+-140- -140])(c[63],
c[13]),c[71])(c[28],c[23%(new Date("1970-01-01T02:51:44.000+02:45")/1E3)+Math.pow(2,3)- -11]),c[17],(0,c[49-Math.pow(6,2)+20])(c[6]),c[69],(0,c[57])((0,c[71])(c[-180+Math.pow(5,4)%213],c[22]),c[27],c[33],c[18]),c[48],c[33]),c[56],((0,c[0])(c[47],c[29]),c[8])((0,c[20])(c[39],c[41]),c[30],c[67],c[60]),c[11])}catch(d){((0,c[138+Math.pow(7,3)-411])(c[58],c[53]),c[21])(c[0],c[61])}}catch(d){return"enhanced_except_vZoBwuX-_w8_"+a}return b.join("")};