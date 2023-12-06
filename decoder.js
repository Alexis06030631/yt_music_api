const gma = /^[\w.]*$/
const signatureTimestamp = 19691

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
	const url = orgaCompose(m.TC,m.NF,m.s)
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
	a={fX:!1,TC:"",NF:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.fX=!0;
a.TC=b.url;
a.NF=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
yP.QI(a,30);
yP.QI(a,64);
yP.Cr(a,3);
yP.QI(a,27);
yP.F3(a,37);
return a.join("")
}

var yP={QI:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
Cr:function(a,b){a.splice(0,b)},
F3:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(""),c=[null,604063082,b,b,1482453006,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
-687645971,-1489127657,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
182756630,-1874611829,842189152,-853147957,function(d,e,f){var h=f.length;d.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},e.split(""))},
"dCpBK4j",-1840725398,-706545653,-1525567134,function(d){d.reverse()},
-398398842,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-1010156242,1603394296,-1244474774,75686736,1601558988,701477265,874717939,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
553613554,1727304757,-267311566,-1774753613,-1380617865,-548962132,1140946933,618024286,-1248830068,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
122736512,123461634,function(d,e){e.splice(e.length,0,d)},
function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
1630497501,function(d,e,f,h,l,m,n){return d(l,m,n)},
1419645608,-1840725398,-865244538,-598759052,null,292970501,444122001,-557767735,function(d){d.reverse()},
-929004002,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
1315784010,679555492,/,([\\,(])/,-1516217059,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
null,30072524,function(d,e,f,h,l){return e(f,h,l)},
-412851037,-2107490153,1821739498,50827525,701477265,-1673892540,-180914354,b,function(d,e,f,h,l,m){return e(h,l,m)},
-1519530063,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
171333463,-831858105,"-",921881595,-582077006];c[0]=c;c[51]=c;c[64]=c;try{try{(-10===c[50]||((0,c[57])(c[42],c[64]),(0,c[41])(c[47],c[5]),(0,c[21])(c[51],c[26]),(0,c[34])(c[1],c[41]),0))&&((0,c[68])(c[53],c[55])>>>(0,c[76])(c[53],c[77],(0,c[71])()),(0,c[76])(c[53],c[59],(0,c[67])()),c[76])(c[64],c[59],(0,c[42])()),(-4===c[10]||((((((((((0,c[0])(c[62]),c[26])(c[39],c[9])&(0,c[new Date("1970-01-01T02:45:52.000+02:45")/1E3])(c[65],c[new Date("1969-12-31T17:45:38.000-06:15")/1E3]),((0,c[26])(c[322-285%
Math.pow(7,5)],c[43],(0,c[10])()),c[new Date("1969-12-31T22:45:21.000-01:15")/1E3])(c[49]),(0,c[79])(c[37],c[70]),c[Math.pow(7,5)-46+-16695])(c[55],c[72]),c[77])(c[80],c[24]),((0,c[13])(c[7],c[59]),c[27])(c[7],c[75]),c[27])(c[new Date("1969-12-31T16:00:20.000-08:00")/1E3],c[58]),c[77])(c[68],c[53]),c[65])(c[68],c[38]),c[5])((0,c[77])(c[7],c[26]),c[45],c[86+Math.pow(6,2)-45],c[37]),(0,c[31])(c[1],c[2]),(0,c[30])(c[5],c[6]),c[31])(c[62],c[37]),null))&&(0,c[78])(c[47],(0,c[34])(c[50],c[5]),((((((0,c[26])(c[38],
c[44],(0,c[22])()),c[47])(c[38],c[65]),c[11])((0,c[58])((0,c[34])(c[39],c[12]),c[47],c[73],c[15]),c[58],((0,c[58])((0,c[58])((0,c[new Date("1970-01-01T11:01:20.000+11:00")/1E3])(c[50],c[33]),c[Math.pow(6,3)+new Date("1969-12-31T22:15:54.000-01:45")/1E3%413-244],c[39],c[44],(0,c[61])()),c[26],c[39],c[25],(0,c[new Date("1970-01-01T04:45:10.000+04:45")/1E3])()),c[19])(c[73]),c[80],c[38],c[new Date("1970-01-01T07:00:20.000+07:00")/1E3]),(0,c[66])(c[73],c[46]),c[58])((0,c[26])(c[50],c[25],(0,c[31])()),
c[34],c[38],c[8]),c[47])(c[60],c[17]),c[26])(c[39],c[25],(0,c[31])()),(0,c[58])((0,c[26])(c[50],c[44],(0,c[61])()),c[26],c[Math.pow(7,1)-95+138],c[25],(0,c[22])()),c[73],c[76]),-10!==c[56]&&(0,c[21])(c[73])}catch(d){(0,c[17])(c[33],c[11]),(0,c[25])((0,c[49])(c[44],c[60]),c[57],c[33],c[39],(0,c[61])())}try{0!=c[4]&&(-8<c[28]?((0,c[36])(c[23],c[24]),(0,c[56])(c[30],c[60])):((0,c[28])(c[56],c[9]),c[75])(c[53]))}catch(d){(0,c[68])(c[44],c[69],(0,c[63])())}finally{2<=c[39]&&((0,c[28])(c[34],c[54]),1)||
(0,c[75])(c[53]),10===c[38-Math.pow(3,3)%307]&&((0,c[36])(((0,c[73])(c[34]),c[60])(c[53],c[39]),c[60],c[21],c[42]),new Date("1969-12-31T22:45:09.000-01:15")/1E3)||(0,c[83])((0,c[75])(c[44]),c[36],(0,c[0])(c[53],c[40]),c[60],c[56],c[43]),0<c[29]&&((0,c[45])(c[56]),(0,c[49])(c[56],c[30]))}try{-1>=c[37]&&(8<c[80]&&((((0,c[36])((0,c[27])(c[32],c[56]),c[28],c[56],c[1]),((0,c[68])(c[44],c[69],(0,c[14])()),c[28])(c[44],c[261%Math.pow(3,2)- -7]),c[28])(c[56],c[64]),c[36])(((0,c[73])(c[Math.pow(8,5)-57+-32656]),
c[60])(c[55],c[20]),c[60],c[44],c[8]),"undefined")||(((0,c[10])((0,c[68])(c[44],c[69],(0,c[14])()),(0,c[60])(c[56],c[76]),c[36],(0,c[41])((0,c[60])(c[21],c[25]),c[60],(0,c[new Date("1969-12-31T21:01:00.000-03:00")/1E3])(c[55],c[37]),c[34],c[26]),c[73],c[53]),c[60])(c[new Date("1970-01-01T03:43:33.000+03:45")/1E3- -142*Math.pow(1,1)],c[6]),c[68])(c[55],c[50],(0,c[63])())),-9>=c[48]&&((0,c[75])(c[34]),1)||(0,c[73])(c[56])}catch(d){(0,c[36])((0,c[47])(c[44],c[24]),c[27],c[4],c[21])}}catch(d){return"enhanced_except_65kBlOb-_w8_"+
a}return b.join("")};