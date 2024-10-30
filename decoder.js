const gma = /^[\w.]*$/
const signatureTimestamp = 20024

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
	let m, url = {}
	if (!format.url) {
		m = mapDecompose(format)
		url = orgaCompose(m.NE,m.dI,m.s)
	} else {
		url.B = format.url
		url.j = {}
	}

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
	a={zZ:!1,NE:"",dI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.zZ=!0;
a.NE=b.url;
a.dI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
EL.Q8(a,2);
EL.Ht(a,57);
EL.Q8(a,2);
return a.join("")
}

var EL={FU:function(a){a.reverse()},
Ht:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
Q8:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[853972562,2087335506,function(d,e,f,h,l){return e(f,h,l)},
-1486097519,-1592825535,1792586212,-59444662,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
-1488459545,-975741018,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e,f,h,l,m){return e(h,l,m)},
'[\\",',b,130013382,-1595548170,-1796421495,function(d,e,f){var h=d.length;f.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},e.split(""))},
-263655066,-673726741,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-905184088,function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
/[,,]\/[;,/,-94,/,]\/\//,-1796421495,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-40878635,function(d,e,f,h,l,m,n,p){return d(m,n,p)},
function(d){d.reverse()},
function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-1815948282,function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
2048459158,-806013897,-1599492865,null,-1792639862,function(d,e,f,h,l,m,n,p,q,r,t,u,y){return d(l,m,n,p,q,r,t,u,y)},
1497246377,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
2130172966,666888819,1349916477,-1543006952,1770405823,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
-1892653159,"shift",-1013052435,1245006035,580597552,b,-188689204,-644263084,423712333,212043505,285988166,2003649484,-283727138,1226503219,";/}\u223b,",-13450594,405650683,-1783602844,1302443108,"TTSbf",1928366882,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
705858631,658180349,null,1245006035,null,-1712194065,309538322,function(d,e){e.splice(e.length,0,d)},
212043505,b,-2064017235,904901664,function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
-1215423595];c[35]=c;c[71]=c;c[73]=c;try{try{c[41]!=7&&(c[69]!=4?(0,c[2])((0,c[31])(c[51],c[53]),c[81],c[54],c[73]):(0,c[2])((0,c[-11125-new Date("1969-12-31T11:08:14.000-09:45")/1E3])(c[63],c[78]),c[17],(0,c[25])(),c[65],c[51])),c[41]!=-6&&(c[74]<9||((((((0,c[2])((0,c[2])((0,c[82])(c[51],c[4]),c[17],(0,c[25])(),c[65],c[78]),c[28],c[51]),c[39])(c[13],c[52]),c[81])(c[32],c[35]),c[39])(c[51],c[44]),c[11])((0,c[17])((0,c[20])(),c[47],c[13]),c[68],(0,c[31])(c[35],c[59]),c[13]),(0,c[27])(c[81],(0,c[68])(c[51]),
(0,c[39])(c[13],c[50]),(0,c[39])(c[71],c[74]),(0,c[82])(c[71],c[62]),c[40],c[71]),0))&&(0,c[29])((((0,c[0])(c[27],(0,c[7])(c[73],c[6]),(0,c[55])((0,c[48])(),c[19],c[51]),(0,c[22])(c[5]),c[36],((0,c[45])(c[51],c[81]),(0,c[22])(c[5]),c[55])((0,c[63])(),c[1],c[32]),(0,c[35])(c[53],c[51]),(0,c[66])(c[51]),(0,c[36])(c[27],c[43]),c[29],c[50]),c[82])(c[59],c[74]),c[23])(c[39],c[72]),c[3],(0,c[83])(c[72],c[10]),c[41],c[32],c[23]),c[57]<=7&&((0,c[43])(c[14],c[2]),c[19])(c[28],c[40]),c[56]!==3?((0,c[80])(((0,c[49])(c[64],
c[69]),c[79])(c[45]),c[53],(0,c[43])(c[56],c[2]),c[79],c[45]),(0,c[58])(c[40],c[47])%(0,c[81])(c[72],c[56]),c[51])(c[80]):(0,c[78])((0,c[78])(((0,c[9])(c[61]),c[74])(c[56],c[29]),c[84],(0,c[84-new Date("1969-12-31T17:45:00.000-06:15")/1E3])((0,c[50])(),c[14],c[80]),(0,c[1])(),c[48],c[34]),c[35],(0,c[84])((0,c[50])(),c[48],c[80])+(0,c[74])(c[56],c[17]),c[55],c[54])}catch(d){((0,c[22])(c[54],c[2]),c[65])(c[54],c[70]),(0,c[22])(c[80],c[64])*(0,c[22])(c[80],c[62])}try{c[68]>=2&&((((0,c[28])(((0,c[65])(c[18],
c[68]),c[82])(c[2],c[32]),(0,c[73])(c[26],c[33]),c[10],(0,c[6])(c[45],c[18]),c[48],c[78],c[26]),c[82])(c[11],c[48]),c[0])((0,c[82])(c[51],c[37]),c[5],c[71],c[66]),c[5])(c[73],c[46]),c[50]!==5&&((0,c[5])(c[27],c[0]),(0,c[62])((0,c[62])((0,c[28])(c[32],c[27]),c[67],c[47],c[4]),c[31],c[80],c[38]),(0,c[31])(c[53],c[19]),1)||(0,c[29])((0,c[41])(c[80],c[57]),c[11],((0,c[28])(c[75]),(0,c[17])((0,c[20])(),c[33],c[13])),c[41],(0,c[41])(c[13],c[77]),c[80],c[14])}catch(d){(0,c[2])((0,c[84])(c[73],c[16]),c[17],
(0,c[20])(),c[67],c[53])}}catch(d){return"enhanced_except_uJwBx-P-_w8_"+a}return b.join("")};