const gma = /^[\w.]*$/
const signatureTimestamp = 19814

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
	const url = orgaCompose(m.RC,m.cG,m.s)
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
	a={FX:!1,RC:"",cG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.FX=!0;
a.RC=b.url;
a.cG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
hP.jU(a,70);
hP.ce(a,3);
hP.jU(a,17);
hP.ce(a,2);
hP.gr(a,28);
hP.ce(a,1);
hP.jU(a,5);
hP.gr(a,25);
hP.ce(a,1);
return a.join("")
}

var hP={jU:function(a){a.reverse()},
gr:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
ce:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(""),c=[-609520799,-1795387473,-816234561,574034616,"};[,",-1246887309,1174831532,-1349873554,-1939889154,111764569,2085281360,-1674354312,function(d,e){0!=e.length&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
null,-722504277,-759411591,878158660,1011881694,307519640,101072664,69243646,b,",[]}\\,;",101072664,1424859524,-682744171,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
-1119149717,1187111237,/(;;[\\])\/,/,function(d,e,f,h,l,m){return e(h,l,m)},
b,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e){d.splice(d.length,0,e)},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
1521449581,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e,f,h,l,m,n,p,q,r){return e(l,m,n,p,q,r)},
-828029980,"split",-44527981,-1060565708,-1989809390,-2101047065,-1291524554,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-526600346,1926381900,2010754965,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
-2098482696,null,295741821,-1301331962,function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
1921720514,function(d,e,f){var h=f.length;e.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},d.split(""))},
224216785,function(d){d.reverse()},
-1083380787,function(d,e,f,h,l){return e(f,h,l)},
-343622938,723859524,352952269,2090592401,-228208175,-1292567173,-280012186,-115008198,1062232679,b,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-1750466823,-1256521232,-2075159065,-881144841,null,1782175362,1645169014];c[13]=c;c[53]=c;c[78]=c;try{try{6<=c[10]&&(0,c[-181+Math.pow(3,5)%285])((0,c[51])(c[31],c[49]),c[56],c[21],c[6])&(0,c[35])(c[31]),2==c[75]?(0,c[62])((0,c[51])(c[72],c[24]),c[58],c[40],c[72],(0,c[32])()):((0,c[12])(c[42],c[72]),c[26])(c[13],c[41]),-3==c[58]?(0,c[80])(c[63],c[65]):(0,c[38])(c[18],c[77]),-10>c[32]?(0,c[49])((0,c[80])(c[66],c[59]),c[13],c[59],c[new Date("1970-01-01T06:30:41.000+06:30")/1E3]):(0,c[49])((0,c[45])(c[27],
c[17+Math.pow(4,4)+-214],(0,c[33])()),c[47],c[18]),-10>c[61]?(0,c[49])((0,c[13])(c[Math.pow(1,2)- -40887-40823],c[48]),c[44],c[26],c[63]):(0,c[Math.pow(3,3)-112+129])(c[32],c[4])<(0,c[9])(c[72],c[23],(0,c[Math.pow(5,2)+-3280- -3319])()),-10!==c[56]&&(-2>c[76]?(0,c[13])(((0,c[13])((0,c[58])(c[53],c[new Date("1969-12-31T14:30:18.000-09:30")/1E3]),c[58],c[53],c[46]),((0,c[44])(c[48],c[63]),c[9])(c[72],c[23],(0,c[64])()),c[65])(c[45],c[50]),c[2],c[29],c[Math.pow(6,4)+new Date("1969-12-31T22:17:35.000-01:45")/
1E3*195+-31518]):(((0,c[57])(c[21],c[65]),c[34])(c[new Date("1969-12-31T13:15:31.000-10:45")/1E3],c[81]),c[-178*Math.pow(2,3)- -1458])(c[21],c[70])&((0,c[34])(c[21],c[48]),c[new Date("1970-01-01T03:00:34.000+03:00")/1E3])(c[54],c[8])&(0,c[34])(c[21],c[67]))}catch(d){(0,c[34])(c[73],c[36]),((((0,c[59])(c[40],c[21],(0,c[74])()),c[59])(c[40],c[31],(0,c[46])()),(0,c[34])(c[31],c[43]),c[52])(c[31],c[25]),c[34])(c[54],c[7])}finally{3!==c[41]&&(0,c[61])(c[79]),9==c[75]&&((0,c[20])(c[2]),{})||(0,c[55])(c[68],
c[6]),-7!==c[76]&&(7<c[41]?(0,c[69])((0,c[71])(c[59]),c[80],c[19],c[74]):((0,c[16])(c[59],c[60]),c[24])(c[29],c[33])),-9!==c[55]&&(10>c[new Date("1969-12-31T21:30:32.000-02:30")/1E3]?((0,c[16])(c[53],c[32]),c[92-337%Math.pow(4,3)])(c[53],c[3]):(0,c[69])((0,c[71])(c[59]),c[71],c[19])),-4==c[2]&&((0,c[12])((0,c[69])((0,c[38])(c[61],c[19]),c[73],c[10],c[19],(0,c[18])()),c[455%Math.pow(1,3)- -20],(0,c[15])(c[59]),(0,c[81])((0,c[69])((0,c[16])(c[29],c[6]),c[73],c[10],c[59],(0,c[Math.pow(new Date("1969-12-31T18:30:03.000-05:30")/
1E3,new Date("1969-12-31T18:00:03.000-06:00")/1E3)-16- -2])()),c[69],(0,c[73])(c[10],c[59],(0,c[4])()),c[73],c[10],c[59],(0,c[18])()),(0,c[new Date("1969-12-31T20:30:16.000-03:30")/1E3])(c[29],c[40]),c[16],(0,c[75])(c[59],c[48]),c[59],c[45]),3)||((0,c[81])((0,c[20])((0,c[75])(c[78],c[11]),c[71],(0,c[75])(c[29],c[23]),c[37]),c[61],(0,c[12])((0,c[43])(c[15],c[3]),c[6],c[3],c[5]),c[6],(0,c[10])(c[62]),c[44],c[27]),c[12])((0,c[12])((0,c[1])(c[28],c[42]),c[63],c[50],c[57]),c[41],c[49],c[1]),c[35]>=-209*
Math.pow(4,5)+214014&&(c[18]>=Math.pow(3,1)-118+116||((0,c[4])(c[42],c[16]),0))&&(0,c[55])(c[Math.pow(1,4)-107+107],c[7]),-2!==c[29]&&((0,c[81])(c[1],c[44]),c[44])(c[33],c[45]),-9>c[12]&&((0,c[44])(c[14],c[4]),(0,c[2])(c[4],c[77]),(0,c[48])(c[9],c[-12700-Math.pow(4,1)+12723]),7)||(0,c[64])((0,c[11])(c[74],c[55],(0,c[26])()),c[32],(0,c[60])(c[55],c[37]),c[31])}}catch(d){return"enhanced_except_5poBmeX-_w8_"+a}return b.join("")};