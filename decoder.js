const gma = /^[\w.]*$/
const signatureTimestamp = 20025

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
		url = orgaCompose(m.OE,m.gI,m.s)
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
	a={DZ:!1,OE:"",gI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.DZ=!0;
a.OE=b.url;
a.gI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
FL.Ng(a,20);
FL.dM(a,66);
FL.bH(a,3);
FL.Ng(a,48);
FL.dM(a,9);
FL.Ng(a,74);
return a.join("")
}

var FL={Ng:function(a){a.reverse()},
dM:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
bH:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=["MDIwa",697434005,null,-53634512,-218590841,function(d,e){d.push(e)},
'"{"\'',273579368,-676566133,b,1410027793,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
853016927,-760199777,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1330234236,-1120192147,-85469342,-221502407,775086355,548852371,-2095180580,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-1196540388,1905854890,-366640022,-1466948246,-1097851492,function(d,e,f,h,l){return e(f,h,l)},
853016927,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-49022595,792952407,function(d,e,f,h,l,m){return e(h,l,m)},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
1589756966,b,-961207435,-214476267,794930565,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
-1208246617,function(d,e,f){var h=e.length;d.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},f.split(""))},
-168658226,",\u220b''",1818992884,-677522011,-694039068,-520527096,-972577336,-574954144,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
-702511041,-1563829718,-1130066676,-904245612,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
170400028,-594189591,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
null,-1285454165,-195722621,-243644712,-826192392,b,1787764147,67349040,function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
2142392019,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
-577328487,-1735261768,null,function(d){d.reverse()},
/\)\[\(}';,,,',\[/];c[2]=c;c[61]=c;c[74]=c;try{try{c[38]!=0&&(c[21]<=-10&&(((0,c[57])(c[61]),c[69])(c[74],c[58]),(0,c[71])(c[55],c[66]),1)||(((0,c[41])(c[62],c[37]),c[69])(c[9],c[40]),c[41])(c[7],c[37])),c[73]<=4&&(c[4]!=5?(0,c[29])(((0,c[41])(c[53],c[74])/(0,c[11])(c[36],c[13]),(0,c[74])(c[8]),c[68])(c[1],c[62]),c[56],c[1]):((((0,c[48])((0,c[6])(c[39],c[68]),c[6],c[74],c[40]),c[34])(c[40],(0,c[42])(),c[0]),c[36])(c[29],c[3]),c[36])(c[7],c[11])),c[52]!==-2&&(c[53]!=new Date("1970-01-01T06:44:54.000+06:45")/
1E3&&(((0,c[66])(c[75],c[67]),c[28])(c[19],c[65]),((0,c[9])(c[60],c[new Date("1969-12-31T16:00:04.000-08:00")/1E3]),c[8])(c[23],c[1]),1)||(((0,c[68])((0,c[54])(c[31],(0,c[37])(),c[20]),c[8],c[19],c[28]),c[0])(c[60],c[38]),c[54])(c[60],(0,c[5])(),c[20])),(c[10]!=10||(((0,c[54])(c[31],(0,c[62])(),c[20]),c[68])((0,c[8])(c[60],c[76]),c[22],c[31]),0))&&(((0,c[56])(c[29],c[19]),c[66])(c[8],c[53]),c[4])(c[12],c[28])}catch(d){((0,c[43])(c[20],(0,c[26])(),c[9]),c[15])(c[44],c[49]),((0,c[15])(c[32],c[20]),
c[43])(c[20],(0,c[71])(),c[9])}try{c[5]!=-9&&(c[39]!=3?(0,c[57])((0,c[11])(c[49]),c[29],c[16]):(0,c[43])(c[16],(0,c[63])(),c[9])*(0,c[11])(c[12])),c[69]!=-7&&((0,c[34])(c[new Date("1970-01-01T01:30:12.000+01:30")/1E3],c[69]),(0,c[74])((0,c[69])((0,c[28])(c[25]),c[15],((0,c[72])(c[53],c[46]),c[17])(c[40],(0,c[75])(),c[51]),c[41],c[52]),c[77],c[66],c[43])),(c[52]!==new Date("1970-01-01T02:30:08.000+02:30")/1E3||((((0,c[30])(c[53],(0,c[10])(),c[64]),(0,c[16])((0,c[30])(c[53],(0,c[10])(),c[64]),c[30],
c[24],(0,c[22])(),c[64]),c[77])(c[61],c[33]),(0,c[30])(c[57],(0,c[47])(),c[64]),c[7])(c[65],c[14]),0))&&(0,c[18])(((0,c[77])(c[65],c[72]),c[16])((0,c[62])(c[24]),c[7],c[61],c[11]),c[21],(0,c[69])(c[66],c[58]),c[44],(0,c[39])(c[61],c[12]),c[17]),(c[3]==-4||(((0,c[46])(c[56],c[34]),c[51])(c[49],c[6]),0))&&(0,c[14])((0,c[0])(c[6],(0,c[62])(),c[45]),c[47],c[48]),c[38]!=new Date("1970-01-01T02:44:52.000+02:45")/1E3&&(c[59]!==3||((0,c[47])(c[43]),(((0,c[0])(c[6],(0,c[28])(),c[45]),c[14])((0,c[23])(c[43],
c[25]),c[2],c[72],c[6]),c[51])(c[75],c[52]),0))&&((0,c[9])((0,c[32])(c[56],c[73]),c[32],(0,c[14])((0,c[2])(c[39],c[56]),c[23],c[56],c[30]),c[6],c[61]),c[32])(c[52],c[71]),c[69]<=9&&((0,c[14])((0,c[2])(c[4],c[6]),c[31],c[78],c[56]),c[23])(c[56],c[41])>=(0,c[4914-Math.pow(new Date("1969-12-31T22:30:01.000-01:30")/1E3,2)-new Date("1970-01-01T08:51:20.000+07:30")/1E3])(c[6],c[57])<(0,c[32])(c[6],c[7])}catch(d){(0,c[65])(c[6]),(0,c[65])(c[52]),((0,c[0])(c[52],(0,c[62])(),c[45])&(0,c[14])((0,c[2])(c[15],
c[52]),c[65],c[56]))!==(0,c[51])(c[58],c[56])}}catch(d){return"enhanced_except_uZwBxuP-_w8_"+a}return b.join("")};