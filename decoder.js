const gma = /^[\w.]*$/
const signatureTimestamp = 20039

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
		url = orgaCompose(m.PE,m.mI,m.s)
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
	a={JZ:!1,PE:"",mI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.JZ=!0;
a.PE=b.url;
a.mI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
TL.Se(a,12);
TL.KQ(a,30);
TL.Se(a,17);
TL.db(a,1);
return a.join("")
}

var TL={Se:function(a){a.reverse()},
db:function(a,b){a.splice(0,b)},
KQ:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[1983003159,1997391345,1224880577,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
795403680,-212335285,758333334,function(d,e,f,h,l,m,n,p){return d(m,n,p)},
1651697625,function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
function(d,e,f){var h=f.length;d.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},e.split(""))},
function(d,e,f,h,l,m){return e(h,l,m)},
-42116660,1279870923,-1946238613,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
-1176027146,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
1655729028,1662504631,function(d,e,f,h,l,m,n,p,q,r){return e(l,m,n,p,q,r)},
b,-2043156335,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
236955916,1245611338,-1318132532,function(d,e,f,h,l){return e(f,h,l)},
292499865,"pQxpI",871424880,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
1843067118,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
860911637,-125092676,76130544,704396832,1874349067,-794982885,-1931670984,782895011,2084267934,-1120504155,-2041692921,1289737903,1651697625,837439872,",48];c[56]=c;",-1993549291,-165040124,-1675336360,-1967925048,-1782251924,-42116660,-1727771038,2105213869,993118931,1091115304,-1709058361,-804605067,b,null,1179411544,null,function(d){d.reverse()},
function(d,e){d.push(e)},
172594345,-243227151,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-305910485,1548455584,2094321320,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-1644401529,null,1960666279,-1533951407,-2043156335,-1477465546,-2117103901,function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
b,-1396244342,1270284537,977554076,function(d,e,f,h,l){return e(f,h,l)}];
c[63]=c;c[65]=c;c[76]=c;try{try{c[84]!=new Date("1970-01-01T06:59:58.000+07:00")/1E3&&(c[18]<=-9&&((0,c[66])(c[65]),1)||(0,c[67])(c[76],c[30])),c[42]<=-2?(0,c[11])((0,c[31])(c[83],c[55]),c[31],(0,c[new Date("1970-01-01T06:01:27.000+06:00")/1E3])((0,c[31])(c[21],c[new Date("1969-12-31T17:00:51.000-07:00")/1E3]),c[15],c[54],c[76]),c[76],c[171+Math.pow(2,new Date("1970-01-01T09:45:01.000+09:45")/1E3)+-130]):((0,c[27])(((0,c[23])(c[28],c[62]),c[15])(c[77],c[76]),c[32],c[17],c[79]),c[40])(c[12],c[82]),
c[41]!=2&&((0,c[39])(c[33],c[15]),c[79])(c[22])<<(0,c[27])(c[38],c[21]),c[86]>=5?(0,c[32])(c[48],c[13],(0,c[57])()):(0,c[33])(c[36],c[69]),c[29]!=6&&(c[3]===10?(((0,c[44])((0,c[19])(c[56],c[66]),c[32],c[69],c[13],(0,c[61])()),c[15])((0,c[11])(c[21],c[78]),c[32],c[48],c[13],(0,c[25])()),c[15])((0,c[65])(c[68]),c[27],c[37],c[68]):(((0,c[49])(c[66],c[63]),c[33])(c[2],c[21])*((0,c[19])(c[7],c[21]),c[33])(c[67],c[55])^(0,c[0])(c[68]),(0,c[69])(c[26],c[40]))),(c[86]!=1||((0,c[57])((0,c[56])(c[40],c[75],
(0,c[31])()),c[39],(0,c[77])(c[40],c[64]),c[40],c[85]),void 0))&&((0,c[44])((0,c[55])(c[70],c[19]),c[77],c[40],c[68]),c[69])(c[new Date("1970-01-01T09:30:13.000+09:30")/1E3],c[19]),c[4]>=8&&(((0,c[44])((0,c[new Date("1970-01-01T10:30:39.000+10:30")/1E3])(c[33],c[2]),c[79],c[42],c[19]),c[79])(c[17],c[40]),c[88])(c[22]),c[24]!==-6&&(c[12]==9&&(((((((0,c[11])(c[68],c[87]),c[9])(c[5],c[66]),(0,c[new Date("1970-01-01T02:45:11.000+02:45")/1E3])(c[21],c[58]),c[39])((0,c[33])(c[23],c[21]),c[44],(0,c[35])(c[11],
(((0,c[32])(c[48],c[13],(0,c[25])()),c[65])(c[55]),c[19])(c[72],c[66]),(0,c[11])(c[66],c[88]),(0,c[15])((0,c[11])(c[68],c[51]),c[32],c[69],c[13],(0,c[8])()),(0,c[19])(c[4],c[68]),c[55],c[41]),c[32],c[21],c[13],(0,c[8])()),c[44])((0,c[65])(c[66]),c[11],c[69],c[6]),c[11])(c[66],c[40]),c[11])(c[48],c[34]),1)||(0,c[31])((0,c[22])((0,c[49])(c[69],c[45]),c[44],((0,c[44])((0,c[new Date("1970-01-01T01:00:49.000+01:00")/1E3])(c[21],c[29]),c[65],c[68]),(0,c[79])(c[3],c[19]),c[73])((0,c[39])(c[22],c[38]),c[56],
c[67],c[75],(0,c[31])()),(0,c[73])(((0,c[39])(c[19],c[61]),c[55])(c[72],c[20]),c[69],c[7],c[20]),(0,c[48])(c[new Date("1970-01-01T02:30:55.000+02:30")/1E3],c[87]),c[58],c[57],c[46]),c[67],(((0,c[48])(c[7],c[88]),c[11])((0,c[17])(c[41],c[49]),c[30],c[37],c[new Date("1969-12-31T12:15:08.000-11:45")/1E3]),c[48])((0,c[14])(c[8],c[73]),c[new Date("1970-01-01T10:45:54.000+10:45")/1E3],c[4],c[86]),c[39]))}catch(d){(0,c[5])(c[49],c[77]),(0,c[9])((0,c[26])(c[15],c[7],(0,c[51])()),c[5],c[15],c[64]),(0,c[3])(c[84],
c[60])*(0,c[13])(c[11],c[42])|(0,c[59])(c[62]),(0,c[13])(c[47],c[60]),(0,c[83])(c[15])}}catch(d){return"enhanced_except_x5wBuOP-_w8_"+a}return b.join("")};