const gma = /^[\w.]*$/
const signatureTimestamp = 19794

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
	const url = orgaCompose(m.XC,m.fG,m.s)
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
	a={IX:!1,XC:"",fG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.IX=!0;
a.XC=b.url;
a.fG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
kP.xW(a,49);
kP.Xe(a,1);
kP.xW(a,34);
kP.Xe(a,3);
kP.xW(a,49);
kP.Xe(a,2);
kP.Bn(a,66);
kP.xW(a,56);
return a.join("")
}

var kP={xW:function(a){a.reverse()},
Xe:function(a,b){a.splice(0,b)},
Bn:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(""),c=[-230138309,-1854910817,656677418,2127356412,-617930748,-285819145,1278135494,814726697,-584509798,868947284,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
null,null,1776383126,1156910200,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
2127356412,1859363139,-338335620,-1021644135,function(d,e){e.push(d)},
-736478543,99057293,1068694829,function(d,e){0!=e.length&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
-1246080374,1614296291,-1170383022,-1321008406,"Pr2KylN",function(d,e,f,h,l,m){return e(h,l,m)},
-1504396381,-919741904,-1968426105,3776136,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
733516748,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
89050029,-834888125,function(d,e,f,h,l){return e(f,h,l)},
1517294644,146135947,b,-1522577258,161919937,1745116848,null,function(d,e,f,h,l,m,n){return d(l,m,n)},
56839493,-113602820,-1161915424,578375935,-1424257265,-632410541,-356585951,1941389730,-1424257265,-137464600,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1847555339,b,"Pr2KylN",function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-834888125,932326553,']"]},}',-1710547346,2021206261,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-1725667816,',,)"',function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
326336122,b,function(d){d.reverse()},
-336942416,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
-883285045,1241000140,476785589,1717190937,1150299224,635447825,1936904280,1766297734,-1020590594,-1711641212,-1858224216,191319090,function(d,e,f){var h=d.length;e.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},f.split(""))}];
c[11]=c;c[12]=c;c[49]=c;try{try{-10!=c[33]&&((0,c[25])(c[63],c[84]),/[{,;]/)||(0,c[79])(c[6],c[63]),(0,c[42])((0,c[92])((0,c[74])(),c[45],c[60]),c[24],c[0],c[Math.pow(7,2)-87- -114])}catch(d){c[7]>Math.pow(4,3)+10-76&&((((0,c[24])(c[85],c[45]),c[37])(c[12],c[80]),c[37])(c[45],c[82]),c[15])(c[11],c[23]),c[83]<Math.pow(3,2)+75+-93&&(7>c[16]&&((0,c[54])((0,c[65])((((0,c[60])(c[86],c[11]),c[22])((0,c[164+Math.pow(3,2)+-140])(),c[6],c[53]),c[38])(c[68],c[18]),c[22],(0,c[33])(),c[68],c[87]),c[60],((0,c[7])(c[86]),
c[47])(c[63],c[68]),c[34],c[-164*Math.pow(2,2)+682]),1)||(0,c[54])((0,c[65])((0,c[60])(c[68],c[25]),c[48],c[35],c[20]),c[9],((0,c[37])((0,c[80])(c[21],c[30]),c[50],(0,c[32])(c[56],c[57]),c[33],c[71],c[67]),c[32])(c[9],c[new Date("1970-01-01T09:01:11.000+09:00")/1E3]),c[20],c[64])),-3<=c[25]&&(0,c[50])(((0,c[32])(c[1],c[57]),c[23])(c[57],c[62]),c[86],c[60]),0<=c[0]?(0,c[1])(c[90],c[26]):(0,c[Math.pow(6,3)+16-192])(c[78],c[36]),-2<c[17]&&(0===c[8]?(((0,c[40])(c[78],c[61]),c[new Date("1969-12-31T16:45:01.000-07:15")/
1E3])(c[32],c[60]),c[57])((0,c[14])((0,c[54])(),c[91],c[79]),c[14],(0,c[25])(),c[78],c[45]):(0,c[57])((0,c[57])((0,c[52])(c[78],c[84])-(0,c[92])(c[60]),c[39],c[177-359%Math.pow(5,3)],c[64]),c[40],c[64],c[41])),0===c[2]&&((0,c[29])(c[57],c[88]),"false")||(0,c[29])(c[61],c[13])}finally{0<=c[17]&&(1<=c[3]&&((((0,c[29])(c[46],c[54]),c[58])(c[26],c[47]),c[85])((0,c[42])((0,c[24])(),c[88],c[14]),c[42],(0,c[24])(),c[26],c[-6324-Math.pow(2,5)- -6370]),[])||(0,c[79])((0,c[58])(c[13],c[76]),c[85],(0,c[85])((0,c[58])(c[54],
c[10]),c[69],c[52],c[56]),c[60],c[57],c[53]))}try{9==c[3]?(((0,c[5])(c[39],c[92]),c[69])(c[12],c[35]),c[32])((0,c[27])(c[35],c[60]),c[5],c[39],c[47]):(0,c[32])(((0,c[14])(c[24],c[35]),c[5])(c[39],c[33])/(0,c[85])(c[28+Math.pow(7,1)-1],c[82]),c[30],c[50],c[Math.pow(5,4)- -21700+-22243]),c[12]!=new Date("1969-12-31T19:59:55.000-04:00")/1E3&&(-9<c[90]||((0,c[85])(c[47],c[Math.pow(4,3)+13500+-13482]),0))&&(0,c[5])((0,c[16])(),c[51],c[36])}catch(d){((0,c[5])((0,c[91])(),c[69],c[70]),c[21])(c[51],c[89])}finally{-6>=
c[62]&&(c[65]===18+Math.pow(8,5)+-32789?(((0,c[5])((0,c[80])(),c[69],c[70]),c[85])(c[44],c[51]),(0,c[85])(c[11],c[17]),c[5])((0,c[16])(),c[51],c[70]):(((0,c[30])(c[58],c[18]),c[21])(c[17],c[67]),c[new Date("1969-12-31T15:45:04.000-08:15")/1E3])(c[21],c[89])-(0,c[8])(c[77],c[33]))}try{-6!=c[41]&&((0,c[92])(c[89],c[46]),c[5])(c[16],c[86]),5>c[34]&&(5<c[78]||((0,c[31])(c[89],(0,c[60])(c[32],c[57]),(0,c[90+119%Math.pow(1,4)])(c[Math.pow(1,3)%84- -56],c[10]),((0,c[89])(c[44],c[70]),c[18])(c[44],c[8]),
c[57],c[72]),0))&&(((0,c[new Date("1970-01-01T11:01:13.000+11:00")/1E3])((0,c[55])(),c[44],c[45]),((0,c[5])(c[53],c[30]),c[6])(c[new Date("1970-01-01T03:45:30.000+03:45")/1E3],c[48]),c[73])((0,c[66])(),c[57],c[45]),(0,c[89])(c[30],c[87]))}catch(d){(0,c[60])(c[28],c[30]),(0,c[60])(c[3],c[57])}}catch(d){return"enhanced_except_0poBreX-_w8_"+a}return b.join("")};