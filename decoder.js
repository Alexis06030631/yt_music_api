const gma = /^[\w.]*$/
const signatureTimestamp = 19732

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
	const url = orgaCompose(m.uC,m.xF,m.s)
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
	a={IW:!1,uC:"",xF:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.IW=!0;
a.uC=b.url;
a.xF=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
ULa.bn(a,37);
ULa.bn(a,50);
ULa.bn(a,64);
return a.join("")
}

var ULa={xP:function(a,b){a.splice(0,b)},
Yn:function(a){a.reverse()},
bn:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(""),c=[null,-1185985974,-322929366,8219557,function(d,e,f,h,l,m){return e(h,l,m)},
-470463305,39813769,-970015448,-99456862,-1620179882,-575124026,353763061,b,/(,{(;)[)])];/,939408680,-523705008,2038862224,function(d,e,f){var h=d.length;f.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},e.split(""))},
1790366588,136003135,-373207452,function(d,e){d.splice(d.length,0,e)},
-1170337110,-2129167474,-841786387,-460735973,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
498474480,1478421895,null,-110060293,b,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
798639422,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
"zIPBcUS","AT9Cz4-",1083582892,-381571333,743316478,-703188769,-1381070474,-97652410,-290236756,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
function(d,e){0!=e.length&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-587900602,-2129167474,-1163926560,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
-1944965070,null,-110060293,function(d,e){if(0!=e.length){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
1455975732,b,"indexOf",-13972997,function(d,e,f,h,l){return e(f,h,l)},
-970979608,function(d){d.reverse()},
940721970,"AT9Cz4-",183534902,-745306594,-647292870,2128078800,-1422259735,1519807805,-1454140160,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
1756532503,-1750969646,-1930270624,1207164382,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return d},
1095996860,2000627005];c[0]=c;c[29]=c;c[53]=c;try{try{-8!=c[72]&&((0,c[4])(((0,c[56])(c[57],c[29]),c[54])(c[56],c[50]),c[48],(0,c[54])(((0,c[-33*Math.pow(6,4)- -42816])(c[53],c[22]),c[10])((0,c[39])(),c[52],c[51]),c[49],c[72],c[22]),c[1446-Math.pow(5,1)-1407],c[28]),1)||(0,c[8])(((0,c[10])(c[57]),c[20])(c[28]),c[45],(0,c[74])(),c[64],c[new Date("1970-01-01T03:45:40.000+03:45")/1E3])<(0,c[32])((0,c[3])(c[65],c[59]),c[45],(0,c[45])((0,c[60])(),c[63],c[40]),(0,c[54])(),c[63],c[59])}catch(d){(0,c[173-
Math.pow(4,3)-37])(c[27],c[59])}try{-5!==c[33]&&(4>=c[46]&&(((0,c[32])((0,c[72])(c[37],c[1]),c[72],((0,c[72])(c[46],c[57]),c[72])(c[15],c[57]),c[51],c[59]),c[20])(c[1]),1)||(0,c[32])((0,c[2])(c[42],c[59]),c[2],(0,c[31959-Math.pow(5,4)-31331])(c[80],c[40]),c[16],c[59])===(0,c[8])((0,c[49])(c[28],c[12]),c[10],c[1]))}catch(d){(0,c[36])((0,c[7])(),c[75],c[76])}finally{-9!=c[13]&&(10<=c[66]||((0,c[2])(c[24],c[28]),(0,c[5])((0,c[72])(),c[38],c[10]),(0,c[48])(c[33],c[49]),0))&&(0,c[new Date("1970-01-01T04:00:42.000+04:00")/
1E3])((0,c[42])((0,c[5])((0,c[54])(),c[69],c[73]),c[60],c[28],c[73]),c[5],(0,c[72])(),c[69],c[73]),2!=c[new Date("1970-01-01T06:16:07.000+06:15")/1E3]&&(-2<=c[61]?(0,c[53])(c[22],c[37]):(0,c[59])(c[6],c[22]))}try{-2!==c[17]&&(((0,c[1])(c[22],c[70]),c[new Date("1970-01-01T02:15:59.000+02:15")/1E3])(c[27],c[22]),(0,c[59])(c[29],c[73]),c[13439-Math.pow(2,5)-13360])(c[61],c[73]),9<=c[15]&&(0,c[48])(c[19],c[75]),3>=c[74]?(0,c[47])(c[17],c[49]):(0,c[39])((0,c[9])(),c[69],c[44]),-5>=c[75]&&(0,c[81])(c[31],
c[87%Math.pow(2,2)+23]),-2!=c[3]&&(4<c[82]||((0,c[21])((0,c[26])(c[69],c[28]),c[17],c[2],c[45]),null))&&(0,c[46])((0,c[34])(c[77]),c[52],c[new Date("1970-01-01T07:15:19.000+07:15")/1E3],c[26]),(-5>c[47]||(((((0,c[57])(c[14],c[81]),(0,c[9])((0,c[74])(),c[48],c[77]),c[new Date("1969-12-31T17:15:51.000-06:45")/1E3])(c[70],c[77]),((0,c[64])(c[15],c[-606- -124*Math.pow(5,1)]),c[9])((0,c[76])(),c[73],c[14]),c[64])(c[30],c[49]),c[64])(c[68],c[79]),(0,c[9])((0,c[82])(),c[72],c[77]),0))&&(0,c[46])((((0,c[46])((0,c[46])((0,c[52])(c[59],
c[49]),c[9],(0,c[76])(),c[73],c[49]),c[52],c[42],c[new Date("1970-01-01T01:45:26.000+01:45")/1E3]),c[57])(c[77],c[7]),c[46])((0,c[46])((0,c[52])(c[43],c[53]),c[52],c[75],c[Math.pow(3,5)+32480+-32697]),c[63],c[35],c[new Date("1969-12-31T13:45:14.000-10:15")/1E3]),c[64],c[40],c[77]),(0,c[46])((0,c[53])(c[29],c[48],c[79]),c[53],(0,c[58])(),c[39],c[77])}catch(d){8!==c[9]&&(-7<=c[80]&&(((0,c[51])(c[66],c[49]),c[57])(c[14],c[67]),1)||(0,c[new Date("1969-12-31T16:15:46.000-07:45")/1E3])((0,c[53])((0,c[76])(),
c[72],c[77]),c[44],c[49])),-7>c[80]?((0,c[46])((0,c[46])((0,c[64])(c[25],c[14]),c[52],c[new Date("1970-01-01T03:15:24.000+03:15")/1E3],c[49]),c[57],c[79],c[16]),c[57])(c[77],c[6])!==(0,c[44])(c[14]):((0,c[46])((0,c[new Date("1969-12-31T17:01:04.000-07:00")/1E3])(c[80],c[-6996+Math.pow(4,2)- -7029])%(0,c[64])(c[18],c[14]),c[52],c[69],c[77]),(0,c[52])(c[45],c[14]),c[52])(c[78],c[14])}}catch(d){return"enhanced_except_lJoB6-X-_w8_"+a}return b.join("")};