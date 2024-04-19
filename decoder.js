const gma = /^[\w.]*$/
const signatureTimestamp = 19830

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
	const url = orgaCompose(m.dD,m.pG,m.s)
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
	a={MX:!1,dD:"",pG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.MX=!0;
a.dD=b.url;
a.pG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
dP.N6(a,3);
dP.iy(a,40);
dP.iy(a,26);
dP.iy(a,40);
dP.YQ(a,59);
dP.N6(a,2);
dP.iy(a,6);
dP.YQ(a,0);
dP.N6(a,3);
return a.join("")
}

var dP={iy:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
YQ:function(a){a.reverse()},
N6:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(""),c=[function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
"(,\u2200",1405251860,1124301580,382759318,57969129,-1615950552,800948625,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
757545541,-471297604,88957108,-370314776,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-889393154,-524023559,"KduYR",function(d){d.reverse()},
-753035376,978961960,function(d,e){d.splice(d.length,0,e)},
function(d,e,f){var h=e.length;f.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},d.split(""))},
function(d,e,f,h,l){return e(f,h,l)},
"const",b,function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
-1861545181,983226950,b,-763182012,function(d,e){e.push(d)},
-809706204,-1256757587,function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
-1550242590,-2007687405,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
857551927,null,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
942360645,1600441274,null,624692138,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
1846263079,1426998995,-157940508,null,410428424,2109275161,-1667363979,765886394,449271655,"}{'\"\"\\'",function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1918503221,132921528,"KduYR",-1274675302,b,-942766425,1325980008,-367762895,1778313020,1352104818,-597607557,-1778163163,543256045,-281217294,-1256757587,1555567753,-322877568];c[38]=c;c[42]=c;c[48]=c;try{try{-8<=c[53]&&(0==c[41]||(((0,c[22])((0,c[22])((0,c[44])(c[24],c[35]),c[20],c[38],c[11]),c[21],c[59],(0,c[56])(),c[61])|((((0,c[0])(c[7],c[38]),c[Math.pow(5,5)+63+-3149])(c[42],c[67]),c[43])(c[66],c[7]),c[43])(c[66],c[71]))&(0,c[40])((0,c[40])((0,c[51])(c[42],c[32]),c[18],c[37],c[60]),c[7854+Math.pow(2,
2)-7813],c[1]),NaN))&&(((0,c[21])(c[4],c[53]),(((0,c[25])(c[23],(0,c[10])(),c[18]),(0,c[33])(c[8]),c[25])(c[62],(0,c[65])(),c[60]),c[25])(c[62],(0,c[65])(),c[60]),c[13])(c[22],c[34]),c[Math.pow(8,2)+235-274])(c[23],(0,c[66])(),c[18])%((0,c[2])(c[60],c[56]),c[2])(c[60],c[43])<(0,c[25])(c[-1174- -133*Math.pow(3,2)],(0,c[new Date("1970-01-01T09:00:10.000+09:00")/1E3])(),c[60])}catch(d){(0,c[13])(c[22],c[1])}finally{9<c[56]&&(-8!=c[63]?(0,c[24])((0,c[13])(c[Math.pow(5,4)+43+-664],c[63]),c[21],c[18],c[-17253-
Math.pow(2,3)+17319])+(0,c[24])((0,c[13])(c[22],c[20]),c[7],c[60],c[new Date("1970-01-01T02:45:42.000+02:45")/1E3]):((0,c[46])(c[50],c[4]),(0,c[25])(c[30],(0,c[38])(),c[18]),c[29])(c[8])*(0,c[29])(c[4])),-8>=c[48]&&(((0,c[13])(c[18],c[31]),(0,c[2])(c[-177*Math.pow(5,3)+22185],c[37]),(0,c[46])(c[17],c[32+Math.pow(3,5)-202]),c[4])(c[56],c[-2558+97*Math.pow(3,3)]),c[12])((0,c[17])(c[48]),c[70],c[6],c[new Date("1969-12-31T17:30:28.000-06:30")/1E3]),-2>c[62]&&(0,c[9])(c[10],c[30618-Math.pow(2,1)+-30564]),
9<=c[68]&&(4>=c[0]||(0,c[9])(c[10],c[16])&&-7040+220*Math.pow(2,5))&&(0,c[70])(c[7-358%Math.pow(3,1)],c[43]),(1===c[22]||((0,c[34])(c[0],c[48]),0))&&(0,c[70])(c[6],c[36]),-6>=c[22]&&(c[40]>=228%Math.pow(5,2)+-2?((((0,c[34])(c[37],c[48]),c[9])(c[6],c[23]),(0,c[13])(c[11],(0,c[54])(),c[6]),c[70])(c[71],c[66]),(0,c[37])(c[34],c[24])):((((0,c[26])(c[57]),c[3])(c[4],c[48]),c[22])(c[20],(0,c[62])(),c[new Date("1969-12-31T15:45:15.000-08:15")/1E3]),c[21])((0,c[10])(c[4],c[67]),c[74],c[15],c[71])),-9<=c[2]&&
((0,c[43])(c[2],c[19]),"null")||(0,c[22])(c[27],(0,c[35])(),c[19])}try{(-10>=c[17]||((0,c[21])((0,c[10])(c[57],c[33]),c[22],c[59],(0,c[6])(),c[15]),0))&&(0,c[21])((0,c[74])(c[57],c[1]),c[43],c[69],c[19]),-5===c[68]&&(((((0,c[22])(c[20],(0,c[35])(),c[15]),c[22])(c[20],(0,c[35])(),c[15]),c[3])(c[0],c[38]),c[74])(c[19],c[68]),1)||(((0,c[26])(c[4]),c[72])(c[75],c[17]),c[31])(c[41],c[68])*(0,c[74])(c[45],c[41]),-9!==c[47]&&(9==c[39]&&((0,c[49])(c[51],(0,c[36])(),c[new Date("1969-12-31T20:15:56.000-03:45")/
1E3]),1)||(0,c[53])(c[67],c[19]))}catch(d){((0,c[new Date("1970-01-01T07:00:41.000+07:00")/1E3])(c[76-24%Math.pow(2,5)]),c[302%Math.pow(3,1)+71])(c[14],c[66]),(0,c[53])(c[52],c[10788+Math.pow(8,1)-10737])}finally{-9<c[30]&&(-5>c[15]||(((0,c[49])(c[12],(0,c[9])(),c[14]),c[53])(c[56],c[55]),""))&&(0,c[50])((0,c[28])(c[15],c[67]),c[12],c[38])}}catch(d){return"enhanced_except_9poBieX-_w8_"+a}return b.join("")};