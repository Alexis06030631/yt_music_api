const gma = /^[\w.]*$/
const signatureTimestamp = 19725

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
	const m = mapDecompose(format)
	const url = orgaCompose(m.LC,m.PF,m.s)
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
	a={WW:!1,LC:"",PF:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.WW=!0;
a.LC=b.url;
a.PF=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
KP.lF(a,2);
KP.TP(a,58);
KP.YR(a,14);
KP.lF(a,2);
KP.YR(a,3);
KP.YR(a,55);
KP.YR(a,70);
KP.lF(a,2);
return a.join("")
}

var KP={YR:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
TP:function(a){a.reverse()},
lF:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(""),c=[932565286,66158039,-1373828741,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
286210096,-1679508988,137106810,614028473,function(d){d.reverse()},
2130182156,-1869376399,null,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
b,1785168438,-1438469443,",57];c[53]=c;",404255122,-1546115578,-594312782,-1590402225,/()"}((),),()]"();/,-518423895,"),,\\",-1217035157,-1740484801,-1054733963,425840074,2130182156,-286155250,b,-1161844198,function(d,e){0!=e.length&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
-1283533346,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
857444760,1165100835,function(d,e,f,h,l,m){return e(h,l,m)},
null,-1712338456,867495325,b,474938893,369441354,2114501703,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
function(d,e){e.push(d)},
function(d,e,f,h,l,m,n,p,q,r,t,v){return h(n,p,q,r,t,v)},
-1592235132,-321029264,932565286,-170596686,-1943542937,1255108449,-2113329500,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-679754222,-2097585136,function(d,e,f,h,l){return e(f,h,l)},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
function(d,e,f,h,l,m,n,p){return d(m,n,p)},
-709581284,-641118584,"unshift",function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
function(d,e,f){var h=d.length;f.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},e.split(""))},
1714192113,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-1407251825,729891597,null,-1161844198,-1198534628,-1372605577,434931667,function(d,e){if(0!=e.length){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
567704338,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
640449481,-1961459422,-1419952130,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())}];
c[11]=c;c[38]=c;c[70]=c;try{try{-10<c[17]&&(((0,c[59])(c[30],c[33]),c[32])(c[39],c[11]),1)||(0,c[0])((0,c[81])(c[38],c[20]),c[59],c[13],c[19]),6<c[61]&&((0,c[new Date("1969-12-31T16:29:45.000-07:30")/1E3*Math.pow(2,4)+305])((0,c[12])(),c[63],c[41])||new Date("1969-12-31T17:30:01.000-06:30")/1E3)||(0,c[75])(c[71],c[41])}catch(d){(0,c[70*Math.pow(3,4)-5606])(c[30]),(0,c[59])(c[38],c[54])}finally{-10!=c[68]&&(-9<=c[49]&&((0,c[128-Math.pow(6,4)%(new Date("1969-12-31T16:01:23.000-08:00")/1E3)])((((0,c[0])((((0,c[34])(c[38],
c[52]),(0,c[0])((0,c[-121*Math.pow(4,4)- -31041])((0,c[12])(),c[63],c[13]),c[59],c[13],c[18]),(0,c[65])((0,c[12])(),c[63],c[13]),c[65])((0,c[3])(),c[63],c[30]),(0,c[34])(c[41],c[22]),c[65])((0,c[55])(),c[63],c[30]),c[65],(0,c[55])(),c[63],c[30]),c[37])((0,c[65])((0,c[3])(),c[63],c[30]),c[34],(0,c[0])((0,c[59])(c[30],c[61]),c[34],c[70],c[4]),c[70],c[53]),c[59])(c[Math.pow(2,4)-new Date("1970-01-01T11:03:07.000+11:00")/1E3*-127-23754],c[6])%(0,c[59])(c[13],c[141+Math.pow(5,2)+new Date("1969-12-31T15:57:43.000-08:00")/
1E3])%(0,c[65])((0,c[12])(),c[63],c[30]),(((0,c[59])(c[11],c[40]),(0,c[8])(c[246-Math.pow(new Date("1970-01-01T06:15:06.000+06:15")/1E3,3)%318]),c[59])(c[13],c[24]),c[65])((0,c[12])(),c[63],c[30]),c[0],(0,c[-250*Math.pow(2,4)- -4060])(c[65],(0,c[75])(c[26],c[41]),(0,c[32])(c[62],c[new Date("1969-12-31T15:01:10.000-09:00")/1E3]),(0,c[65])((0,c[12])(),c[63],c[30]),((0,c[81])(c[38],c[72]),c[65])((0,c[12])(),c[63],c[41]),(0,c[67])(),c[63],c[13]),c[65],(0,c[55])(),c[63],c[13]),"5")||(0,c[47])((0,c[0])((0,c[34])(c[70],
c[74]),c[52],c[19],c[47]),(0,c[14])(((0,c[67])(c[7]),c[58])(c[7],c[5]),c[9],(((0,c[14])((0,c[0])((0,c[new Date("1969-12-31T19:15:11.000-04:45")/1E3])(c[47],c[34]),c[8],c[20],c[28]),c[8],(0,c[14])(c[56],c[59]),c[new Date("1970-01-01T11:15:51.000+11:15")/1E3],c[26]),c[79])(c[28]),c[8])(c[64],c[53]),c[25],c[28]),(0,c[Math.pow(7,1)%448- -31])((0,c[74])(c[45],c[16]),c[49],c[3],c[80]),c[70],((((0,c[79])(c[44],c[77]),c[40])(c[0],c[35]),c[70])((0,c[70])(((0,c[79])(c[21],c[35]),c[29])(c[Math.pow(4,4)+44-240]),
c[24],c[6],c[49]),c[24-474%Math.pow(1,3)],c[60],c[54]),c[24])(c[6],c[74]),(0,c[70])((0,c[10])((0,c[81])(c[6],c[15]),c[70],(0,c[55])(c[60]),c[40],c[43],c[3]),c[32],(0,c[59])(),c[Math.pow(2,1)-141+167],c[new Date("1970-01-01T07:01:00.000+07:00")/1E3]),(0,c[81])(c[60],c[Math.pow(7,3)+76-386]),c[55],c[77])),(-10<c[4]||((0,c[55])(c[60]),0))&&(0,c[24])(c[35],c[38])}try{-1!=c[Math.pow(3,3)+-23912- -23924]&&(((0,c[40])(c[61],c[3]),c[88*Math.pow(1,1)-18])((0,c[81])(c[3],c[8]),c[59],c[33]),c[63])((0,c[63])((0,c[40])(c[62],
c[75]),c[5],c[48],c[21]),c[26],c[61],c[20]),(0,c[35])((0,c[50])(c[65]),c[82],c[17],c[33])}catch(d){(-1>c[36]||(((0,c[26])(c[34875+Math.pow(2,3)-34808],c[20]),c[82])(c[45+228%Math.pow(1,1)],c[7]),0))&&((0,c[66])(c[41],c[71]),(0,c[77])(c[47])),-6==c[52]?(0,c[61])((0,c[8])((0,c[26])(),c[4],c[65]),c[8],(0,c[8])((0,c[36])(),c[4],c[37]),(0,c[26])(),c[4],c[65]):(((0,c[16])(c[17],c[35]),c[32])(c[62]),c[26])(c[43],c[71])}}catch(d){return"enhanced_except_jZoB8uX-_w8_"+a}return b.join("")};