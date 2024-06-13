const gma = /^[\w.]*$/
const signatureTimestamp = 19886

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
	const url = orgaCompose(m.bE,m.qH,m.s)
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
	a={KY:!1,bE:"",qH:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.KY=!0;
a.bE=b.url;
a.qH=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
RO.WW(a,3);
RO.Qe(a,68);
RO.Qa(a,68);
RO.WW(a,3);
RO.Qe(a,32);
RO.Qa(a,42);
RO.Qe(a,70);
RO.Qa(a,34);
RO.WW(a,3);
return a.join("")
}

var RO={Qe:function(a){a.reverse()},
Qa:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
WW:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(""),c=[null,-871930896,-311004445,-1680208714,372407716,function(d,e){d.push(e)},
function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
function(d,e,f){var h=e.length;f.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},d.split(""))},
function(d,e,f,h,l,m,n,p){return d(m,n,p)},
-943143603,-780729038,function(d,e,f,h,l){return e(f,h,l)},
"this",-220563221,-1049844903,1818656544,-2064760276,-2027789241,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
673350726,-895540027,"split",1646888890,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
b,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-2084601676,-161167902,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
-693925473,1158368804,b,287943558,-557008288,820594618,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
-132059159,-2082098718,-1906131606,976810474,"}{],){/",729036634,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-1749141165,-136823761,1837729689,1151327007,761419102,-672174079,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
349576012,168540378,-1729485751,178115521,';";,',function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-896155547,168540378,-1299768865,1853759568,-1471407645,function(d){d.reverse()},
1517119069,698349830,function(d,e){e.splice(e.length,0,d)},
811595618,-1056766677,512734112,-1074567633,-1497625988,1547145945,-351289896,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
1547145945,1760186879,-705831859,-559073123,-52964829,';,}";',null,1580942591,-1592595645,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
1853759568,2091764581,2054276573,-1125540341,408941626,function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
-1519773558,-351289896,1639696975,function(d,e,f,h,l,m){return e(h,l,m)},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
1580942591,null,344547745,-1447000170,-559073123,836442565,836442565,1917645270,-1865586550,b,-1423332403];c[0]=c;c[79]=c;c[95]=c;try{try{c[68+56%Math.pow(3,2)]>=-10&&(c[62]===-4?(0,c[8])(c[55],((0,c[92])((0,c[6])(c[95],c[10]),c[new Date("1969-12-31T18:45:07.000-05:15")/1E3],(0,c[28])(c[38],c[24]),c[21],(0,c[42])(),c[new Date("1970-01-01T08:01:43.000+08:00")/1E3]),c[28])(c[77],c[31]),(0,c[55])(c[24]),(0,c[Math.pow(3,3)+56+-72])(((0,c[6])(c[24],c[30]),c[28])(c[99],c[24]),c[88],c[79],c[Math.pow(3,4)*
-37+3094]),((0,c[5622-156*Math.pow(6,2)])(c[31],c[13]),c[71-Math.pow(4,3)%351])(c[12],(0,c[18])(),c[31]),c[0]):(0,c[92])(((0,c[25])((0,c[25])((0,c[88])(c[0],c[91]),c[11],(0,c[6])(c[95],c[3]),c[5],c[79],c[-38728+Math.pow(6,4)+37479]),c[92],(0,c[35])(c[31],c[39]),c[88],(0,c[7])(c[12],(0,c[42])(),c[103]),c[70],c[9]),((0,c[35])(c[31],c[1]),c[64])(c[15],c[79]),c[88])(c[95],c[32]),c[6],(0,c[82])(c[56],c[70]),c[79],c[59])),(c[39]===-1||((0,c[90])(c[43],c[29]),0))&&(0,c[35])(c[22],c[3]),c[55]!==0&&(0,c[14])(c[28],
(0,c[30])(),c[new Date("1969-12-31T20:00:03.000-04:00")/1E3]),(c[44]!==-1||(((0,c[89])(c[55],c[3]),c[35])(c[1],c[3]),0))&&(0,c[18])((0,c[89])(c[58],c[86]),c[5],c[new Date("1969-12-31T16:00:35.000-08:00")/1E3],c[1])}catch(d){(0,c[69])(((0,c[5])(c[45],c[47]),c[5])(c[20],c[84]),c[12],(0,c[12])(c[1],c[8]),c[80],c[106])}try{(c[88]<5||(0,c[95])(((0,c[69])((0,c[90])(c[1071-Math.pow(4,4)*4],c[40]),c[65],(0,c[65])(c[84],c[new Date("1969-12-31T12:30:29.000-11:30")/1E3]),c[84],c[86]),c[12])(c[1],c[53]),c[5],
c[4],c[80])&&new Date("1970-01-01T02:15:00.000+02:15")/1E3)&&(0,c[95])(((0,c[95])((0,c[59])(c[104],c[1]),c[91],c[105],(0,c[19])(),c[80]),(0,c[5])(c[40205-Math.pow(3,3)+-40160],c[47]),(0,c[91])(c[105],(0,c[102])(),c[84])),c[91],c[96],(0,c[49])(),c[80]),c[88]>=1&&(0,c[65])(c[84],c[30]),c[61]>=0?(0,c[95])((0,c[90])(c[56],c[new Date("1970-01-01T11:45:43.000+11:45")/1E3]),c[90],c[80],c[46]):(0,c[95])((0,c[12])(c[56],c[11-Math.pow(5,1)- -55]),c[12],c[84],c[3]),(c[88]>0+Math.pow(6,2)-33||((0,c[95])((0,c[12])(c[56],
c[52]),c[5],c[11],c[1]),0))&&(0,c[95])((0,c[65])(c[-10512-Math.pow(7,5)+27391],c[79]),c[65],c[47],c[103])}catch(d){(0,c[69])((0,c[5])(c[100],c[0]),c[5],(0,c[5])(c[27],c[72]),c[new Date("1969-12-31T22:16:03.000-01:45")/1E3],c[1]),(0,c[70])(c[72])}try{c[21]<=4&&(c[60]<=-5||(((((0,c[65])(c[84],c[82]),c[70])(c[0]),(0,c[68])(c[22]),c[11])((0,c[11])((0,c[41])(c[106],c[42]),c[47],c[92],c[105]),c[41],c[50],c[25]),c[11])((0,c[11])((0,c[68])(c[22]),c[17],c[106],c[87]),c[16],c[new Date("1970-01-01T09:00:22.000+09:00")/
1E3],c[100]),""))&&(0,c[80])((0,c[37])((0,c[11])((0,c[101])(c[96],c[50]),c[15],c[10],(0,c[7])(),c[22]),c[16],(0,c[15])(c[10],(0,c[7])(),c[105]),c[22],c[40]),(((0,c[74])(c[22]),c[new Date("1970-01-01T11:46:41.000+11:45")/1E3])(c[67],c[26]),c[101])(c[59],c[105]),c[11],(0,c[15])(c[0],(0,c[4])(),c[105]),c[94],c[26],c[46])}catch(d){(0,c[68])(c[26])}try{c[83]<2&&((0,c[37])((0,c[15])(c[0],(0,c[87])(),c[22]),c[101],(0,c[16])(c[26],c[39]),c[44],c[105]),[])||(0,c[11])((0,c[11])((0,c[74])(c[26]),c[94],c[105],
c[64]),c[41],c[106],c[49])}catch(d){(0,c[15])(c[35],(0,c[57])(),c[26])}try{c[2]!==10&&(c[13]!=3&&((0,c[11])((0,c[41])(c[105],c[5]),c[16],c[105],c[83]),1)||(0,c[11])((0,c[47])(c[33],c[105]),c[15],c[10],(0,c[107])(),c[22])),(c[103]>=3||(((0,c[101])(c[55],c[22]),c[36])(c[50])!==(0,c[94])(c[106],c[85]),null))&&(((0,c[41])(c[34],c[93]),c[41])(c[106],c[84]),c[41])(c[34],c[62])}catch(d){(0,c[15])(c[35],(0,c[7])(),c[22]),(0,c[94])(c[105],c[8])}}catch(d){return"enhanced_except_rpsB0eT-_w8_"+a}return b.join("")};