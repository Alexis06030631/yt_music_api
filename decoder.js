const gma = /^[\w.]*$/
const signatureTimestamp = 19870

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
	const url = orgaCompose(m.RD,m.fH,m.s)
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
	a={CY:!1,RD:"",fH:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.CY=!0;
a.RD=b.url;
a.fH=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
VO.ns(a,33);
VO.ns(a,50);
VO.xg(a,3);
VO.Ue(a,44);
VO.xg(a,2);
VO.Ue(a,33);
VO.ns(a,55);
return a.join("")
}

var VO={ns:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
Ue:function(a){a.reverse()},
xg:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(""),c=[1159008879,158199577,-234917738,"break",-1386767171,-93753458,1264068733,-355337827,"(),;{(,",-2022585842,-1072016444,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
-2009514290,852060713,-865861246,-1980608546,1346745281,function(d,e,f,h,l,m){return e(h,l,m)},
-2121565539,1165510167,"xUmw3",782401719,1320257834,-1775711381,null,b,"],)]\\\\",-1681738385,-1596679066,-1693196385,1423103578,1649054709,-1244654627,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-1681738385,-1322447863,function(d){d.reverse()},
-923346950,2049613971,function(d,e){0!=e.length&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
-1539707279,1247788229,-1539707279,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-295327615,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-1264030237,-1261509045,-2009615E3,-1582539656,function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
-1162162858,/"{('(;}))}\)\\/,function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
function(d,e,f){var h=e.length;f.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},d.split(""))},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
1898717537,1159008879,631808574,1175679618,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
null,-11477233,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
-600579946,-2076573655,1805749077,-10459786,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
b,function(d,e,f,h,l,m,n){return d(l,m,n)},
1047912896,2042140231,null,-2055576960,b,-523995543,-828952005,-500273061,-1920102993,function(d,e,f,h,l){return e(f,h,l)},
775307777,2134045026,537713116,-1076789957];c[24]=c;c[62]=c;c[74]=c;try{try{5!=c[65]&&(-1==c[21]&&((0,c[54])(c[62],c[85]),((0,c[61])(c[120+Math.pow(3,1)-85],c[74]),c[55])(c[20],(0,c[56])(),c[70]),[])||(0,c[81])((0,c[51])(c[24],c[13])-(0,c[Math.pow(4,5)+31+-1044])(c[25],c[10]),c[40],c[18],c[70])),3===c[36]&&((0,c[64])(c[58],c[-56840-Math.pow(5,1)+56921]),1)||(0,c[64])(c[31],c[76]),(7!=c[77]||((0,c[64])(c[36],c[25]),0))&&(0,c[64])(c[32],c[74])}catch(d){(0,c[84])((0,c[36])(c[1],(0,c[25])(),c[57]),c[78],
(0,c[36])(c[70],(0,c[25])(),c[6]),c[55],c[53])}finally{9!=c[9]?(((0,c[62])((0,c[21])(c[41],c[5]),c[-7840-Math.pow(8,2)+7949],c[4],c[5]),c[39])(c[76]),c[Math.pow(7,3)-43855- -43541])(c[13],c[10]):(0,c[2])(((0,c[83])(c[1],c[59]),(0,c[new Date("1970-01-01T02:46:12.000+02:45")/1E3])(c[13],c[3]),c[32])(c[13],c[74]),c[43],c[0],c[7]),-7!=c[79]&&(0==c[15]||((0,c[37])(((0,c[66])((0,c[72])(c[7],c[6]),c[32],(0,c[46])(c[13]),c[Math.pow(7,3)%366+-322],c[15]),c[32])(c[59],c[33+Math.pow(5,4)-634]),c[66],(0,c[0])(c[80],
(0,c[27])(),c[7]),c[new Date("1970-01-01T07:16:12.000+07:15")/1E3],(0,c[2])((0,c[43])(c[64],c[9]),c[46],c[9]),c[26],c[16]),0))&&(((((0,c[81])((0,c[32])(c[3],(0,c[69])(),c[25]),c[64],c[16],c[74]),c[0])(c[7],c[25]),c[11])(c[25],c[29]),(0,c[0])(c[66],c[70]),c[81])((0,c[32])(c[20],(0,c[34])(),c[25]),c[11],c[76],c[27]),c[new Date("1970-01-01T11:15:00.000+11:15")/1E3])(c[28],c[24]),5>c[31]&&(((((((0,c[32])(c[3],(0,c[new Date("1969-12-31T22:30:56.000-01:30")/1E3])(),c[70]),c[17])((0,c[32])(c[20],(0,c[69])(),
c[119-Math.pow(1,2)-93]),c[32],(0,c[0])(c[65],c[25]),c[20],(0,c[69])(),c[25]),c[51])(c[62],c[45]),c[0])(c[67],c[70]),c[54])(c[74],c[47]),c[32])(c[3],(0,c[34])(),c[76])||new Date("1970-01-01T01:15:06.000+01:15")/1E3)||((0,c[64])(c[5],c[62]),(0,c[29])(c[55],(0,c[39])((0,c[22])(c[46],c[32]),c[47],c[17]),((0,c[32])(c[34],c[66]),c[46])(c[68],c[71]),(0,c[3])(c[54],c[7]),c[60],c[4]),c[22])(c[43]),c[Math.pow(3,3)-58- -99]!==new Date("1970-01-01T03:44:52.000+03:45")/1E3?((0,c[7])(c[83],c[41]),c[new Date("1970-01-01T03:30:48.000+03:30")/
1E3])((0,c[18])(c[77],c[15]),c[64],c[37],c[45]):((0,c[48])((0,c[7])(c[16],c[41]),c[21],c[29],c[57]),c[53])(c[51],c[37]),0===c[12]?(0,c[48])((0,c[new Date("1970-01-01T06:01:25.000+06:00")/1E3])(c[56],(0,c[11])(),c[37]),c[85],c[56],(0,c[23])(),c[37]):(0,c[48])((0,c[22])(c[78]),c[21],c[41],c[65])}try{-8>c[40]&&((0,c[4])(c[37]),1)||(0,c[18])(c[41],c[10]),8!=c[84]&&(-1!==c[68]?(((0,c[48])((0,c[48])((0,c[64])(c[77],c[19]),c[1],c[40],c[71]),c[52],c[77],c[51]),(((0,c[56])(c[71]),c[56])(c[77]),c[65])(c[22],
c[26]),c[38])(c[77]),c[34])(c[21],(0,c[57])(),c[77]):(0,c[72])(c[65],(((0,c[1])(c[23],c[26]),c[34])(c[21],(0,c[57])(),c[26]),(0,c[56])(c[26]),c[34])(c[21],(0,c[57])(),c[71]),(0,c[12])(c[63],c[64]),((0,c[56])(c[626759+-153*Math.pow(8,4)]),c[12])(c[71],c[76]),c[58],c[25]))}catch(d){(0,c[82])((0,c[56])(c[71]),c[65],c[2],c[290-219%Math.pow(4,5)])}}catch(d){return"enhanced_except_npsB4eT-_w8_"+a}return b.join("")};