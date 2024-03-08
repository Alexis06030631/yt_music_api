const gma = /^[\w.]*$/
const signatureTimestamp = 19788

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
	const url = orgaCompose(m.RC,m.ZF,m.s)
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
	a={DX:!1,RC:"",ZF:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.DX=!0;
a.RC=b.url;
a.ZF=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
oP.NW(a,43);
oP.wJ(a,53);
oP.ww(a,3);
oP.wJ(a,1);
oP.ww(a,3);
oP.wJ(a,68);
oP.NW(a,15);
oP.ww(a,2);
return a.join("")
}

var oP={wJ:function(a){a.reverse()},
NW:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
ww:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(""),c=[b,1570503852,-1567911479,653647677,null,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
78756329,711034976,905933145,631725727,1001513777,-1986790907,-1975832269,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
function(d,e){0!=e.length&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
-336788662,b,1912995566,-658973614,-1962687386,function(d,e){if(0!=e.length){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
2134058804,312072653,null,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
-1553193953,-1567911479,-2091749137,-650624554,1667125861,1875085766,-1543798665,-712611036,-1071433047,-242341565,2013535546,-2046639022,function(d,e){e.push(d)},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
491828204,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
b,-2112351620,"\\/\u2297[u","reverse",-495660025,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-295004379,654590411,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
65611864,424664747,",;;,)\\",function(d,e,f,h,l,m){return e(h,l,m)},
function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
-1172971467,-371031861,-371031861,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
null,-1569840169,function(d){d.reverse()},
function(d,e,f,h,l){return e(f,h,l)},
538939955,-1777334819,-99349242,67004610,422085909,function(d,e,f){var h=d.length;e.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},f.split(""))},
-1629389297,1596855673,1793125897,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
333379898];c[4]=c;c[23]=c;c[59]=c;try{try{c[35]!=new Date("1969-12-31T17:00:02.000-07:00")/1E3&&(-2<=c[new Date("1969-12-31T19:45:12.000-04:15")/1E3]&&((0,c[62])(((0,c[68])((0,c[new Date("1970-01-01T07:31:12.000+07:30")/1E3])(),c[16],c[44]),c[68])((0,c[72])(),c[41],c[44]),c[24],c[4],c[56]),1)||(0,c[13])((0,c[20])(c[64],c[41]),c[62],(0,c[54])(c[16],c[6]),c[37],c[47],c[Math.pow(3,4)-7991+7933]))}catch(d){(0,c[68])((0,c[58])(),c[0],c[44])}finally{5!=c[10]&&(3>c[70]?(((0,c[54])(c[16],c[12]),c[68])((0,c[58])(),
c[Math.pow(1,3)- -32536-32537],c[44]),c[68])((0,c[40])(),c[0],c[44]):(0,c[62])((0,c[49])(c[23],c[36]),c[16],c[9],c[53])^(0,c[16])(c[3],c[19]))}try{-5<=c[41]?(0,c[40])(((((0,c[Math.pow(4,3)%390-25])(c[19]),c[67])(c[47],c[57]),c[2])(c[53],c[13]),c[40])((0,c[27])(c[57],c[26]),c[50],c[12]),c[71],c[19],c[26]):(((0,c[47])(c[12],c[69]),(((0,c[5-Math.pow(2,1)+14])((0,c[45])(),c[10],c[41]),c[47])(c[new Date("1969-12-31T13:00:53.000-11:00")/1E3],c[69]),c[65])(c[25],c[69]),c[17])((0,c[5])(),c[10],c[41]),c[61])(c[6],
c[40]),(10!==c[8]||(((((((0,c[23])((0,c[-161*Math.pow(1,1)- -232])(c[18],c[69]),c[47],c[7],c[10]),c[47])(c[15],c[6]),c[23])((0,c[188+Math.pow(6,4)+-1413])(c[58],c[10]),c[17],(0,c[27])(),c[44],c[41]),c[61])(c[44],c[22]),c[17])((0,c[Math.pow(5,4)-46098+45518])(),c[69],c[41]),(0,c[-326+Math.pow(7,3)%352])((0,c[45])(),c[10],c[41]),c[23])((0,c[61])(c[26],c[51]),c[39],c[10]),0))&&(((((0,c[39])(c[69]),c[71])(c[30],c[6]),c[Math.pow(6,1)+16- -17])(c[10]),c[23])((0,c[113+Math.pow(3,5)+-317])(c[69]),c[31],c[26],
c[56]),(0,c[51])(c[41],c[8330-Math.pow(4,1)-8271]),c[9])((0,c[9])(((0,c[10])(c[12]),c[52])(c[19],c[25]),c[49],c[44]),c[49],c[26])}catch(d){((0,c[47])(c[12],c[38]),c[33])(c[56],c[55])}finally{-5!=c[16]&&(-8!==c[5]||((0,c[18])(((((0,c[3])((0,c[74])(),c[71],c[27]),c[57])(c[53],c[71]),c[3])((0,c[31])(),c[71],c[27]),c[3])((0,c[66])(),c[71],c[27]),c[3],(0,c[3])((0,c[31])(),c[30],c[27]),(0,c[66])(),c[71],c[135%Math.pow(1,3)- -27]),0))&&(0,c[9])((((0,c[9])((0,c[22])(c[48],c[6]),c[58],c[25]),(0,c[38])((0,c[50])(),
c[61],c[24-Math.pow(5,5)- -3115]),c[new Date("1969-12-31T13:31:09.000-10:30")/1E3])(c[68],c[12]),c[45])(c[46],c[25]),c[11],c[29])}try{2>=c[7]&&((0,c[71])((0,c[0])(c[8],c[30]),c[63],(0,c[25])(c[8],c[73]),c[26]),"true")||((0,c[42-Math.pow(5,3)+157])(c[9],c[26]),c[18])((0,c[22])(),c[66],c[69])&(0,c[18])((0,c[65])(),c[25],c[69]),6!=c[5]&&(9<=c[52]&&((0,c[3])(((0,c[3])((0,c[18])((0,c[8])(),c[66],c[69]),c[63],(0,c[63])(c[42],c[25]),c[34],c[new Date("1970-01-01T08:46:06.000+08:45")/1E3]),c[63])(c[50],c[25]),
c[71],((0,c[18])((0,c[65])(),c[66],c[69]),c[18])((0,c[8])(),c[41],c[69]),c[29]),1)||(0,c[3])((0,c[45])(c[21],c[25]),c[4],((0,c[12])(((0,c[12])((0,c[39])(c[27],c[48]),c[49],c[29],c[72]),c[66])(c[new Date("1970-01-01T08:45:10.000+08:45")/1E3],c[62]),c[70],c[69],c[new Date("1969-12-31T22:00:53.000-02:00")/1E3]),c[46])(c[13],c[8]),c[1],c[25]))}catch(d){(0,c[55])((0,c[17])(c[72],c[201-200%Math.pow(5,4)]),c[29+Math.pow(6,3)%214],c[14],c[9])}}catch(d){return"enhanced_except_zJoBs-X-_w8_"+a}return b.join("")};