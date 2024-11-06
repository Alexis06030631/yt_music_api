const gma = /^[\w.]*$/
const signatureTimestamp = 20031

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
	a={HZ:!1,NE:"",dI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.HZ=!0;
a.NE=b.url;
a.dI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
SL.K9(a,2);
SL.k6(a,36);
SL.hR(a,42);
return a.join("")
}

var SL={hR:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
k6:function(a){a.reverse()},
K9:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-1646750266,205095617,null,-552000204,"oA-8Fu",-1138238467,-1375213103,1603012011,-1041695649,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
function(d,e){e.length!=0&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
-1860254261,-280201868,-1110826877,-796205464,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
1876720395,function(d){d.reverse()},
-2049381711,function(d,e,f){var h=d.length;e.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},f.split(""))},
-959247782,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
473574103,212707435,function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
179537969,1595141961,337335874,-374895331,1785443463,1323806337,-290264246,"var",function(d,e,f,h,l){return e(f,h,l)},
288838435,1955448682,-117256602,1193841137,b,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-1455376874,null,/[)'\(,,]'/,308918831,b,-2136053295,-406946196,-689980940,1085207950,-1157308046,128662844,-1450743562,-73468562,b,-957032142,null,-221371012,1131492157,/\/,,{\/[[\\][[""/]\//,-59686438,1317073930,-71265744,202785280,-2069206094,',}\\}[,"',1260534801,-1041695649,454095680,326036423,221633703,1357226582,-1187982265,function(d,e){d.splice(d.length,0,e)},
1676096769,-1907539902,-267137802,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-620912280,function(d,e,f,h,l,m){return e(h,l,m)}];
c[4]=c;c[43]=c;c[57]=c;try{try{c[18]>-9&&(c[5]==1?(0,c[35])((0,c[12])(c[37],c[43]),c[11],c[55],c[50]):(0,c[35])((0,c[0])(c[55],c[61]),c[12],c[31],c[43])),c[73]<=-1&&((((0,c[35])((0,c[12])(c[15],c[new Date("1970-01-01T11:15:43.000+11:15")/1E3]),c[26],c[new Date("1969-12-31T14:15:43.000-09:45")/1E3],c[51]),(0,c[11])(c[46],c[49]),(((0,c[35])((0,c[21])((0,c[41])(),c[40],c[34]),c[26],c[40],c[new Date("1969-12-31T12:45:56.000-11:15")/1E3]),c[19])(c[43]),c[new Date("1969-12-31T17:00:45.000-07:00")/1E3])((0,c[61])(c[40]),
c[61],c[76]),c[11])(c[46],c[20]),c[17])(c[76],c[57]),1)||(0,c[58])(((((0,c[13])((0,c[78])(c[18]),c[71],c[66],c[63]),(0,c[80])((0,c[19])(),c[33],c[12]),c[71])(c[2],c[21]),c[4])(c[35],c[48]),(0,c[13])((0,c[50])(c[24],c[36]),c[80],(0,c[1])(),c[33],c[12])),c[new Date("1970-01-01T10:31:10.000+10:30")/1E3],(0,c[13])((0,c[56])(c[18]),c[50],c[new Date("1969-12-31T18:30:33.000-05:30")/1E3],c[32]),c[21],c[17]),c[74]===9&&(((0,c[80])((0,c[19])(),c[24],c[65]),c[70])(c[24],c[47]),[])||(0,c[13])((0,c[52])(c[21],
c[26]),c[71],c[77],c[35]),c[new Date("1969-12-31T20:46:15.000-03:15")/1E3]!=10&&(c[39]<new Date("1969-12-31T17:44:56.000-06:15")/1E3||(((0,c[13])((0,c[70])(c[35],c[new Date("1969-12-31T14:00:08.000-10:00")/1E3]),c[new Date("1969-12-31T17:15:50.000-06:45")/1E3],c[24],c[61]),c[70])(c[33],c[30]),void 0))&&(0,c[13])((0,c[13])((0,c[76])(c[68],c[33]),c[71],c[40],c[21]),c[4],c[21],c[41]),c[59]===8?(((0,c[50])(c[new Date("1970-01-01T08:30:18.000+08:30")/1E3],c[59]),c[80])((0,c[60])(),c[18],c[12]),c[50])(c[24],
c[new Date("1969-12-31T15:30:43.000-08:30")/1E3]):(((0,c[4])(c[18],c[51]),c[4])(c[63],c[5]),c[52])(c[63],c[72])}catch(d){(0,c[58])((0,c[50])(c[33],c[14]),c[71],(0,c[50])(c[24],c[23]),c[72],c[18]),(0,c[13])((0,c[71])(c[62],c[24]),c[50],c[0],c[25])}finally{c[81]!==-6&&((0,c[13])((0,c[70])(c[0],c[42]),c[68],c[36]),(0,c[16])(c[30],c[79]),1)||(0,c[25])((0,c[25])((0,c[62])(c[75],c[18]),c[9],(0,c[72])(),c[30],c[24]),c[82],c[12],c[65]),c[78]<3&&(c[60]!==-3||((0,c[62])(c[75],c[69]),0))&&(0,c[7])(c[45]),c[67]!=
-7&&((0,c[25])((0,c[82])(c[30],c[28]),c[16],c[45],c[57]),3)||(0,c[25])((0,c[5])(c[15],c[45]),c[7],c[12]),c[41]<=-5&&(((((0,c[25])((0,c[16])(c[33],c[10]),c[82],c[33],c[19]),c[9])((0,c[72])(c[31],c[14]),c[72],c[27],c[59]),(0,c[66])(c[9]),c[7])(c[new Date("1969-12-31T21:57:27.000-02:00")/1E3*13+27- -1973],c[19]),c[36])((0,c[41])(c[1],c[73]),c[78],(0,c[18])(c[48],c[new Date("1969-12-31T14:46:13.000-09:15")/1E3]),c[19],c[62]),c[32])(c[49],c[27]),c[43]!==-1&&(c[55]!=0?(0,c[69])((0,c[29])(c[45],c[49])*(0,c[4])(c[64]),
c[2],(0,c[22])(),c[64],c[17]):(0,c[69])((0,c[69])((0,c[4])(c[58]),c[2],(0,c[63])(),c[58],c[70]),c[26],c[19])),c[36]<8&&(((0,c[29])(c[9],c[64]),c[12])(c[64],c[78]),[])||(0,c[12])(c[19],c[18])%(0,c[32])(c[64],c[33])}}catch(d){return"enhanced_except_v5wBwOP-_w8_"+a}return b.join("")};