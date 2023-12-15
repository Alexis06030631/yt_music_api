const gma = /^[\w.]*$/
const signatureTimestamp = 19704

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
	const url = orgaCompose(m.TC,m.OF,m.s)
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
	a={VW:!1,TC:"",OF:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.VW=!0;
a.TC=b.url;
a.OF=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
vP.Z7(a,23);
vP.bR(a,66);
vP.EH(a,1);
vP.bR(a,45);
vP.Z7(a,43);
vP.EH(a,3);
return a.join("")
}

var vP={bR:function(a){a.reverse()},
Z7:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
EH:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(""),c=[function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
2086006903,1101575975,383164559,function(d,e,f,h,l){return e(f,h,l)},
40754524,1399882118,-1193628254,-45810263,-839255875,-717448059,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
1690617424,-794658971,-160428502,function(d){d.reverse()},
-583395979,1030149906,b,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
"\\\u22d0];",function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
601997640,-527165142,-902918091,-1626271874,-378959161,-1408399028,-880791147,35697782,-748897409,-1357881829,function(d,e,f,h,l,m){return e(h,l,m)},
"continue",-1377060301,-2128604949,1985490382,function(d,e,f,h,l){return e(f,h,l)},
586270283,2106776753,function(d,e){d.push(e)},
1316005391,1143294563,-270715319,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
-880791147,1570833720,-173005953,537568404,-1237546657,b,35697782,-1713733263,-972917737,-173005953,null,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
824594622,function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
-1193628254,-424939426,-1918651311,function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
null,function(d,e,f){var h=e.length;f.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},d.split(""))},
-2049610239,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
40754524,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
-371302662,484739840,function(d,e,f,h,l,m,n){return d(l,m,n)},
-1946629081,1944282968,1380990802,null,-282898578,-972917737,-708165152,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-322256035,-1146588727,-1918651311,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
b,-1822065725,1921979250,-2010025567,537568404,1445756129,1078707748,-664121735];c[55]=c;c[63]=c;c[75]=c;try{try{-7!=c[23]&&(-3!==c[17]?((0,c[32])(((0,c[62])(c[84],c[57]),c[56])(c[6],c[18]),c[19],((0,c[15])(c[84]),c[62])(c[55],c[10]),c[86],c[18]),c[58])(c[75],c[12]):((((0,c[15])(c[18]),c[68])(c[84],c[36]),c[79])(c[55]),(0,c[68])(c[63],c[42]),(0,c[new Date("1969-12-31T19:45:58.000-04:15")/1E3])(c[18],c[60]),c[15])(c[18])),(-6===c[27]||((0,c[64])(c[33],(0,c[11])(),c[18]),""))&&(0,c[68])(c[50],c[65]),
-9!==c[72]&&(0,c[0])(((0,c[58])(c[63],c[41]),c[19])(c[69],c[50]),c[19],(0,c[79])(c[18]),c[3],c[50])}catch(d){(0,c[37])((0,c[64])(c[33],(0,c[83])(),c[18]),c[15],c[84]),(0,c[68])(c[84],c[43])}try{3>=c[77]&&(5==c[45]||(((0,c[56])(c[46],c[84]),c[56])(c[5],c[84]),0))&&(0,c[37])((0,c[new Date("1970-01-01T08:46:02.000+08:45")/1E3])(c[63],c[85]),c[68],c[63],c[28]),0!==c[new Date("1970-01-01T05:15:17.000+05:15")/1E3]&&(c[13]==new Date("1969-12-31T15:14:50.000-08:45")/1E3&&((0,c[68])(c[18],c[4553+Math.pow(3,
3)+-4491]),1)||(0,c[40])(c[63],c[30])),-7===c[54]&&((0,c[79])(c[75]),"((,")||(0,c[15])(c[50]),(-6>c[65]||((0,c[4])((0,c[64])(c[33],(0,c[21])(),c[50]),c[64],c[new Date("1969-12-31T20:30:33.000-03:30")/1E3],(0,c[66])(),c[84]),(0,c[68])(c[18],c[38]),0))&&(0,c[37])((0,c[4])((0,c[58])(c[84],c[new Date("1969-12-31T14:15:26.000-09:45")/1E3]),c[19],c[80],c[63]),c[51],c[46],c[2]),10>c[206%Math.pow(4,4)-150]&&(6==c[62*Math.pow(8,5)+-2031615]||((((0,c[68])((0,c[33])(c[82],c[65]),c[29],c[46],c[22]),c[27])(c[24],
c[21]),c[68])((0,c[33])(c[34],c[87]),c[33],c[46],c[5]),0))&&((((0,c[2-Math.pow(8,5)+32801])(c[4],(0,c[75])(),c[21]),c[39])(c[82],c[new Date("1970-01-01T04:15:58.000+04:15")/1E3]),c[39])(c[55],c[59]),(0,c[79])(c[34]),c[35])(c[4],(0,c[37])(),c[82]),c[40]<=new Date("1970-01-01T01:29:50.000+01:30")/1E3&&(0,c[20])((0,c[83])(c[66],c[26]),c[4],(0,c[79])(c[37],c[30]),c[67],c[83],c[29]),2>=c[84]&&((0,c[43])((0,c[67])(c[83],c[24]),(0,c[3])((0,c[67])(c[17],c[71]),c[18],c[15],c[54]),c[32],(0,c[53])(c[45],c[76]),
c[14],c[17],c[45]),"NaN")||(0,c[92])(((0,c[34])((0,c[14])(c[8],c[58]),c[63],(0,c[74])(c[79]),c[58],c[85]),c[10])(c[58]),c[59],c[28],(0,c[16])(),c[45]),(c[84]<new Date("1970-01-01T10:44:50.000+10:45")/1E3||((0,c[32])((0,c[66])(c[14],(0,c[53])(c[50],c[22]),(0,c[14])(c[49],c[50]),(0,c[8])(c[48],c[52]),c[79],c[14]),c[82],c[83],c[44]),""))&&(0,c[57])((0,c[57])(((0,c[28-Math.pow(8,5)+32779])(c[81],c[75]),c[88])(c[38],c[5])!==(0,c[43*Math.pow(4,1)+-84])(c[70],c[72]),c[84],c[53],(0,c[10])(),c[70]),c[new Date("1970-01-01T04:00:35.000+04:00")/
1E3],c[11]),c[65]!=163*Math.pow(3,2)-1471&&(0!==c[5]&&((0,c[76])(c[3],c[83]),(0,c[17])(c[65]),(0,c[14783+-43*Math.pow(7,3)])(c[new Date("1970-01-01T04:16:20.000+04:15")/1E3],c[27]),1)||(0,c[2])((0,c[72])(c[71-84%Math.pow(1,new Date("1970-01-01T05:30:01.000+05:30")/1E3)],c[41]),c[70],(0,c[70])(c[8],(0,c[51])(),c[23]),c[8],(0,c[Math.pow(new Date("1969-12-31T13:15:06.000-10:45")/1E3,4)+160+-1388])(),c[84])),9!=c[35]&&(0,c[78])(c[new Date("1969-12-31T13:30:24.000-10:30")/1E3],c[79])}catch(d){(0,c[68])((0,c[411%
Math.pow(1,1)+39])(c[44],c[5]),c[92],(((0,c[28])(c[23]),c[39])(c[44],c[new Date("1970-01-01T08:30:16.000+08:30")/1E3]),c[39])(c[23],c[6]),c[57]),(0,c[68])((0,c[70])((0,c[45])(c[23],c[76]),c[88],c[75],c[52]),c[51],(0,c[70])((0,c[28])(c[44]),c[43],c[74],(0,c[86])(),c[89]),c[33],c[57])}}catch(d){return"enhanced_except_-JkBh-b-_w8_"+a}return b.join("")};