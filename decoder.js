const gma = /^[\w.]*$/
const signatureTimestamp = 19829

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
	const url = orgaCompose(m.dD,m.qG,m.s)
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
	a={JX:!1,dD:"",qG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.JX=!0;
a.dD=b.url;
a.qG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
fP.s7(a,42);
fP.kd(a,1);
fP.W7(a,2);
fP.s7(a,4);
return a.join("")
}

var fP={W7:function(a,b){a.splice(0,b)},
kd:function(a){a.reverse()},
s7:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(""),c=[1618699325,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
68447007,1754851383,-414283483,305853795,-361006653,1176848615,function(d){d.reverse()},
1850134604,/{(;,)()}()(,(),())/,null,"MQDtKGE",-493640024,-1811313257,-2087460374,2106518686,-1669710963,1856432525,791144866,-317939866,371984777,-352972335,null,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
function(d,e){d.push(e)},
1308762979,-376734941,function(d,e,f,h,l,m){return e(h,l,m)},
257915299,2125819420,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-528600536,-360410625,function(d,e){0!=e.length&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
-688001083,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-1708807347,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e){d.splice(d.length,0,e)},
"function",1494865607,1232320889,-919947696,function(d,e,f,h,l,m,n){return d(l,m,n)},
function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
1731749515,680748306,373624304,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
1645788432,-2090855935,784407838,-2012357806,-68592025,354336002,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
b,-627519048,68447007,b,-312467915,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
1757696249,-926092848,604413706,-928705069,-1883075210,1666888445,-2073164932,null,1435991673,-1402830546,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-988836930,468308076,function(d){throw d;},
484374608,function(d,e,f,h,l){return e(f,h,l)},
1526868078,-1491953651,1671989608,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-1761371788,-1411087764,b,936014651,function(d,e,f){var h=f.length;e.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},d.split(""))},
function(d,e){if(0!=e.length){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
-1083868101];c[11]=c;c[23]=c;c[71]=c;try{try{(-6==c[60]||((0,c[79])((0,c[89])(c[2],c[71]),c[1],c[49],c[58]),0))&&(0,c[79])((0,c[31])(c[42],c[86]),c[89],c[21],c[23]),(10<c[55]||((0,c[79])((0,c[8])(c[11]),c[new Date("1970-01-01T01:00:33.000+01:00")/1E3],c[4]),void 0))&&(0,c[new Date("1969-12-31T21:00:11.000-03:00")/1E3])((0,c[1])(c[86],c[4]),c[55],c[39],c[29]),(0,c[13])(c[19]),(0,c[58])(c[4]),(0,c[Math.pow(6,3)+113-327])(c[78],c[32],(0,c[66])())}catch(d){1!==c[43]&&((((0,c[45])(c[55],(0,c[2])(c[78],
c[4],(0,c[51])()),(0,c[11])((0,c[1])(c[34],c[32]),c[82],c[67]),(0,c[32])(c[23]),c[35],c[29]),c[59])(c[83],c[4]),c[82])(c[4]),/{/)||((((0,c[89])(c[61],c[19]),c[2])(c[78],c[4],(0,c[16])()),(0,c[55])(c[77],c[29]),c[11])((0,c[59])(c[31],c[4]),c[2],c[78],c[32],(0,c[51])()),c[11])((0,c[1])(c[14],c[32]),c[55],c[60],c[32])}try{2>=c[35-Math.pow(8,2)- -54]&&((0,c[1])(c[7],c[19]),"false")||(0,c[2])(c[49],c[29],(0,c[40])()),-5>=c[15]&&(-6>=c[68]?(0,c[44])((0,c[55])(c[Math.pow(7,4)+191+-2521],c[19]),(0,c[55])(c[73],
c[79]),c[62],(0,c[55])(c[20],c[19]),c[89],(0,c[59])(c[3],c[29]),c[6],c[4]):(0,c[11])((0,c[45])(c[59],(0,c[2])(c[Math.pow(8,4)+-10449+6431],c[29],(0,c[16])()),(0,c[59])(c[42],c[32]),(0,c[27])(c[32],c[26]),c[63],c[32]),c[59],c[46],c[67])),4>=c[73]&&(c[48]<=44*Math.pow(6,2)+-1575||((0,c[59])(c[87],c[32]),""))&&(0,c[82])(c[79]),0>c[68]&&(10>c[76]?(((0,c[55])(c[61],c[79]),c[45])(c[89],(0,c[27])(c[32],c[9])%(0,c[55])(c[12],c[4])%(0,c[33])(c[32]),(0,c[89])(c[Math.pow(5,3)+88+new Date("1970-01-01T09:56:44.000+10:00")/
1E3],c[32]),(0,c[11])((0,c[65])(c[67],c[41]),c[89],c[37],c[67]),c[78],c[1]),c[15-Math.pow(6,2)+21])(c[Math.pow(6,3)+13875-14051],c[73]):(((0,c[43])((0,c[40])(c[53],c[13]),c[75],(0,c[75])(c[30],c[10],(0,c[21])()),c[30],c[13],(0,c[21])()),c[40])(c[88],c[10])|(0,c[75])(c[59],c[77],(0,c[47])()))-(0,c[26])(c[75],(0,c[8])(c[10],c[28]),(0,c[70])(c[49],c[10]),(0,c[36])(c[51],c[13]),c[30],c[10],(0,c[21])())),9!==c[82]&&(((0,c[147%Math.pow(3,4)- -8])(c[3],c[13]),c[14])(c[10]),"NaN")||((0,c[40])(c[19],c[13]),
c[75])(c[30],c[13],(0,c[32])()),-5<=c[28]&&(9==c[80]?((((0,c[new Date("1969-12-31T13:15:43.000-10:45")/1E3])((0,c[75])(c[30],c[13],(0,c[373%Math.pow(1,3)- -47])()),c[40],(0,c[14])(c[13]),c[17],c[77]),c[34])((0,c[75])(c[30],c[77],(0,c[89])()),c[84],(0,c[75])(c[30],c[10],(0,c[89])()),c[63],c[48]),(0,c[75])(c[Math.pow(5,5)+new Date("1969-12-31T12:44:16.000-11:15")/1E3*55+-646],c[77],(0,c[89])()),c[36])(c[78],c[77]),c[75])(c[59],c[77],(0,c[89])())*(0,c[40])(c[55],c[0]):(((0,c[36])(c[5],c[10]),(0,c[70])(c[91],
c[60]),(0,c[49])(c[69],c[23]),c[49])(c[70],c[73]),((0,c[87])(c[79],c[175*Math.pow(4,2)+-2787]),c[44])(c[73],c[25]),((0,c[5])((0,c[87])(c[19],c[23]),c[88],c[43],c[90],(0,c[10])()),c[53])(c[75],c[26]),c[59])(c[61],c[46])),6>c[16]&&(-4==c[17]&&((0,c[52])(c[26]),1)||(0,c[21])(c[61],c[17])),3>=c[47]&&(4>c[47]?(0,c[6])(c[92],c[59]):(0,c[76])(c[26],c[62]))}catch(d){(0,c[88])((0,c[88])((0,c[76])(c[new Date("1970-01-01T04:45:39.000+04:45")/1E3],c[2]),c[42],c[67],c[15]),c[42],c[29-274%Math.pow(8,2)],c[Math.pow(8,
3)+163+-663]),(((0,c[42])(c[87],c[12]),c[42])(c[37],c[62]),c[72])(c[35],c[2]),(0,c[42])(c[4],c[15]),(0,c[77])(c[32],c[-19+Math.pow(4,4)%225],(0,c[23])())}}catch(d){return"enhanced_except_9ZoBiuX-_w8_"+a}return b.join("")};