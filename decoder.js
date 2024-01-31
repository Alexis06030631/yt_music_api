const gma = /^[\w.]*$/
const signatureTimestamp = 19751

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
	const url = orgaCompose(m.DC,m.HF,m.s)
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
	a={cX:!1,DC:"",HF:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.cX=!0;
a.DC=b.url;
a.HF=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
MP.wC(a,3);
MP.iO(a,16);
MP.iO(a,44);
MP.iO(a,34);
MP.iO(a,37);
MP.wC(a,3);
return a.join("")
}

var MP={wC:function(a,b){a.splice(0,b)},
f6:function(a){a.reverse()},
iO:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(""),c=[-18011151,-867106888,null,1956506915,-1419821027,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
1986727169,function(d,e){d.push(e)},
null,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
184954810,552562407,function(d,e,f,h,l,m){return e(h,l,m)},
b,1027285133,-121365808,function(d,e){e.splice(e.length,0,d)},
-147025185,-1718116011,function(d,e,f,h,l){return e(f,h,l)},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e,f,h,l,m,n,p,q,r,t){return d(f,h,l,m,n,p,q,r,t)},
-89950125,"aIke",function(d){d.reverse()},
function(d,e,f,h,l,m,n,p){return d(m,n,p)},
function(d,e,f,h,l){return e(f,h,l)},
function(d,e,f,h,l,m,n){return d(l,m,n)},
"'\\/,",1840586785,-607908825,1729812647,-673500370,1563145623,1969711156,-186234637,702131779,function(d,e,f){var h=d.length;f.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},e.split(""))},
395325974,"-",-1748340476,71361703,-699325308,109259099,-1415035584,97374085,function(d,e){0!=e.length&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
-80814761,1840586785,1198034434,-130881771,960763195,-176758691,null,-876258039,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
-886241268,-1354147271,829068098,b,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-1851075266,1983672471,b,829068098,function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
-1395326800,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-1850002363,-2051515789,-352179876,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})}];
c[2]=c;c[8]=c;c[54]=c;try{try{3!==c[52]&&(0===c[65]||((0,c[19])((0,c[47])(c[13],c[33]),c[47],c[8],c[11]),0))&&(0,c[22])((0,c[59])(c[3],c[16]),c[49],c[44],c[63]),-7<=c[51]&&((0,c[15])((0,c[40])((0,c[8])(),c[26],c[-981- -116*Math.pow(3,2)]),c[59],(0,c[22])(((0,c[69])(c[67],c[68]),c[Math.pow(3,5)+-8010+7807])((0,c[8])(),c[26],c[63]),c[59],c[41],c[63]),c[25],c[63]),1)||((0,c[2])(c[34],c[63]),((0,c[29])((0,c[12])(c[16]),c[27],c[67]),c[19])(c[Math.pow(5,5)%306+-49],c[57]),c[12])(c[67]),2!==c[55]&&(0,c[24])(c[30],
(0,c[29])((0,c[49])(c[70],c[63]),c[27],c[73]),c[50],((0,c[19])(c[61],c[57]),c[69])(c[57],c[60]),(0,c[2])(c[43],c[11]),(0,c[3])((0,c[24])(c[60],c[32]),c[4],c[10],c[63]),c[10],c[7])}catch(d){(0,c[19])((0,c[37])((0,c[68])(),c[39],c[13]),c[93-Math.pow(8,1)-29],c[53],c[4176+Math.pow(5,3)+-4299]),(0,c[37])((0,c[20])(),c[23],c[13])}finally{-2<c[43]&&(0,c[47])(c[8*Math.pow(3,5)+-1874],c[new Date("1969-12-31T18:45:17.000-05:15")/1E3]),c[42*Math.pow(4,5)+-42954]!=4500+Math.pow(3,4)-4573&&(-7==c[34]&&(((0,c[26])((0,c[61])((0,c[56])(c[Math.pow(6,
2)-48- -44],c[70]),c[12],(0,c[46])(c[15],c[72])<(0,c[56])(c[10],c[60]),c[46],(0,c[9])(c[64]),c[21],c[72]),c[37],(0,c[68])(),c[39],c[13]),c[12])((0,c[37])((0,c[20])(),c[39],c[70]),c[24],(0,c[37])((0,c[68])(),c[23],c[70]),c[64]),1)||(0,c[12])(((0,c[19])(((0,c[56])(c[14],c[64]),c[46])(c[28+Math.pow(2,3)%170],c[64]),c[74],c[1],c[72]),c[34])(c[59],c[5]),c[17],((0,c[73])(c[11],c[29]),c[25])(c[71],c[23])!==(0,c[73])((0,c[56])(),c[59],c[21])|(0,c[7])(c[5],c[new Date("1969-12-31T21:45:21.000-02:15")/1E3]),
c[44],c[66])),-9!=c[69]&&(0,c[27])(c[25],c[24])+(0,c[17])(c[10],c[49]),-6<=c[16]?(0,c[62])((0,c[Math.pow(4,1)+1650-1647])(c[42],c[44]),c[27],c[31],c[34]):(0,c[55])((0,c[45+Math.pow(3,1)-40])(c[31],c[19]),c[35],c[3],c[44]),-9>=c[7]&&((0,c[65])(c[28],(0,c[40])((0,c[8])(),c[42],c[16]),c[19],(0,c[49])(c[37],c[11]),(0,c[2])(c[55],c[5]),(0,c[64])(c[58],c[33]),(0,c[5])(c[26],c[19]),c[45],c[6]),c[17])((0,c[45])(c[6],c[46]),c[37],c[31],c[25]),-5>=c[11]&&(8!=c[63]?(0,c[74])((0,c[17])(c[52],c[35]),c[17],c[14],
c[new Date("1970-01-01T08:30:50.000+08:30")/1E3]):((0,c[27])(c[22],c[31]),c[8])((0,c[68])(),c[10],c[41]))}}catch(d){return"enhanced_except_p5oB2OX-_w8_"+a}return b.join("")};