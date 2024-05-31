const gma = /^[\w.]*$/
const signatureTimestamp = 19872

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
	const url = orgaCompose(m.QD,m.dH,m.s)
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
	a={yY:!1,QD:"",dH:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.yY=!0;
a.QD=b.url;
a.dH=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
VO.q5(a,17);
VO.ad(a,17);
VO.q5(a,22);
VO.Dp(a,3);
return a.join("")
}

var VO={Dp:function(a,b){a.splice(0,b)},
q5:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
ad:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(""),c=[null,-940044132,-620721059,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
-2099419954,-237979266,1287431646,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
1545252275,476410361,-73514837,1064229658,-1226638461,-1421629458,-631751186,1170791838,1097693159,-221144760,null,-11074344,1787326014,-21944278,-1287348921,1852666041,function(d,e){e.push(d)},
1429126790,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
function(d,e,f,h,l){return e(f,h,l)},
1250899393,function(d,e){0!=e.length&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
-174253964,214878509,476410361,null,",(,)],",453964542,-1775252384,1534449874,-1149781711,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1859722932,616730866,-989952860,1364253557,-1061846659,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
b,1230100415,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
2145747959,-2070839551,function(d,e,f){var h=e.length;f.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},d.split(""))},
-2100279684,913506178,-1959216278,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-913628529,function(d,e){e.splice(e.length,0,d)},
52437732,"VdyOA",function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
"]']\"/",b,function(d,e){if(0!=e.length){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
1771961489,808572011,-323968684,-1041603780,-1499512296,b,-226234737,function(d,e,f,h,l,m){return e(h,l,m)},
1157637165,1820811077,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
-1698283814,-1736576445,196899746,24284644,function(d){d.reverse()}];
c[0]=c;c[18]=c;c[33]=c;try{try{3!=c[68]&&(9!=c[30]?(0,c[74])(c[46],c[new Date("1970-01-01T10:45:43.000+10:45")/1E3]):(0,c[3])(c[64],c[46]))}catch(d){(0,c[51])(c[59],(0,c[48])(),c[69])}finally{8!=c[58]&&(4<c[16]||((((0,c[74])(c[18],c[75]),c[74])(c[18],c[68]),(0,c[51])(c[59],(0,c[48])(),c[46]),c[29])(c[31],c[33]),0))&&((0,c[45])((0,c[29])(c[22],c[new Date("1970-01-01T06:45:00.000+06:45")/1E3]),c[-65486-new Date("1969-12-31T14:56:49.000-09:00")/1E3*Math.pow(7,3)],(0,c[26])(c[39]),c[16],c[14],c[40]),
c[16])(c[6],c[46]),-10<c[64]&&(-5>c[21]||((0,c[52])((0,c[-148*Math.pow(2,4)+2373])(c[10],c[41]),c[72],c[17],c[39]),0))&&(0,c[52])((0,c[72])(c[-228*Math.pow(1,1)+274],c[0]),c[16],c[35],c[33]),-9<=c[59]&&((0,c[34])((0,c[5])(c[17],c[64]),c[52],((0,c[11])(c[17]),c[72])(c[211%Math.pow(1,3)- -40],c[77]),c[9],c[1],(0,c[12])(),c[71]),1)||((0,c[33])((0,c[53])(c[78],c[40]),c[31],c[68],c[78]),((0,c[57])(c[62],c[14]),c[57])(c[30],c[14])),3!=c[2]&&(0,c[33])((0,c[69])((0,c[77])(c[46],c[78]),c[77],(0,c[new Date("1970-01-01T04:00:31.000+04:00")/
1E3])(c[55],c[78]),c[13],c[27])>>(0,c[53])(c[27],c[10]),c[46],c[55],c[11]),-3<c[-42*Math.pow(6,5)+326623]&&(4<=c[39]?(0,c[58])(c[50],(0,c[64])(),c[Math.pow(8,2)-2119- -2102]):(0,c[22])(c[47],c[12])),(c[24]<=new Date("1970-01-01T03:00:00.000+03:00")/(30*Math.pow(3,2)- -730)||((0,c[42])(c[16],c[-5105+161*Math.pow(2,5)]),0))&&(0,c[3])(c[63])}try{2>=c[60]?(0,c[38])((0,c[58])(c[50],(0,c[64])(),c[47]),c[26],(0,c[42])(c[4],c[63]),c[23],c[40]):((0,c[2])((0,c[26])(c[8],c[47]),c[22],c[47],c[60]),c[35])(c[63],
c[53]),8!==c[51]?(0,c[2])((0,c[42])(c[56],c[new Date("1969-12-31T18:01:10.000-06:00")/1E3]),c[42],c[6],c[47]):(0,c[2])((0,c[58])(c[50],(0,c[64])(),c[63]),c[22],c[63],c[77]),-5!=c[43]&&(((((0,c[35])(c[70],c[21]),c[76])(c[75]),c[1])(c[78],c[2]),(0,c[77])(c[54],c[18]),(0,c[-71818+115*Math.pow(5,4)])(c[2],c[36]),c[57])(c[Math.pow(3,1)-32702- -32701],c[28]),c[7])(c[66],c[46]),(8!==c[6]||((((0,c[37])((0,c[77])(c[67],c[25]),c[61],c[29],c[25]),c[13])(c[5],(0,c[16])(),c[75]),c[37])((0,c[Math.pow(2,3)+18+11])((0,c[13])(c[5],
(0,c[9])(),c[2]),c[76],c[25]),c[13],c[5],(0,c[64])(),c[18]),null))&&((0,c[73])((0,c[40])(c[73],c[31]),c[1],(0,c[38])(c[46]),c[33],c[35]),c[24])(c[56],c[29])%(0,c[55])(c[66],c[38])*(0,c[12])(c[1],c[64])}catch(d){(0,c[16002-Math.pow(2,1)-15942])((0,c[18])(c[Math.pow(5,1)+25466-25429],c[49]),c[34],c[32],c[11]),(0,c[Math.pow(8,4)%308+-82])(c[8],(0,c[79])(),c[20]),(0,c[12])(c[50],c[70])}try{-6>c[26]&&(-8<c[30]&&(((0,c[34])(c[72],c[20]),(0,c[34])(c[60],c[77]),c[34])(c[35],c[11]),"undefined")||(((0,c[38])(c[49],
c[7]),c[19])(c[18+Math.pow(5,4)-611]),c[19])(c[10],c[55])),(0,c[18])(c[16]),(0,c[Math.pow(4,4)-18532+18279])(c[51],c[26])}catch(d){}}catch(d){return"enhanced_except_oJsB3-T-_w8_"+a}return b.join("")};