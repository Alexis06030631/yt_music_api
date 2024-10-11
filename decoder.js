const gma = /^[\w.]*$/
const signatureTimestamp = 20005

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
		url = orgaCompose(m.WE,m.qI,m.s)
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
	a={GZ:!1,WE:"",qI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.GZ=!0;
a.WE=b.url;
a.qI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
ML.OK(a,5);
ML.wH(a,3);
ML.fq(a,43);
ML.wH(a,2);
ML.fq(a,32);
return a.join("")
}

var ML={OK:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
fq:function(a){a.reverse()},
wH:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[363653379,"'[)',;\\",function(d,e,f,h,l){return e(f,h,l)},
1113367077,-409273730,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
null,441020070,-2007371991,function(d,e){e.splice(e.length,0,d)},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1216778448,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-329954933,1369451833,-329954933,-1191310578,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
b,-691101175,function(d,e,f){var h=d.length;e.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},f.split(""))},
-1273877184,1731258518,null,-929727343,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-1886034129,function(d,e,f,h,l,m){return e(h,l,m)},
2044646332,function(d){d.reverse()},
615450394,509724367,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
674759588,b,-2003818047,1504719107,459878597,function(d,e,f,h,l,m,n){return d(l,m,n)},
-163335612,941076619,-970528523,1626253493,1474351052,1525347369,-181705502,/([/,75,/]};)("[']{)/,-1422188636,function(d,e){e.push(d)},
313931005,108975782,1735927563,1242806146,-260711137,841444322,1430843716,function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
-1307690786,-1651949119,'/},",',847174944,1211393421,1525347369,-647324045,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
-562373322,510366485,-860306488,null,-1563515568,-1957409445,function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
-1820225748,-645540125,-863196528,"dBmlteE",1353592179,-902041632,-1477976442,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
-621929454,2016767166,362553760,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-1298930270,-260711137,b];c[6]=c;c[23]=c;c[68]=c;try{try{c[39]<=-2&&(c[82]!==-10?(0,c[64])(c[68],c[40]):(0,c[47])(c[52],c[2])),c[new Date("1969-12-31T17:46:14.000-06:15")/1E3]!=-10&&(c[8]==1&&(((0,c[47])(c[19],c[new Date("1970-01-01T07:46:13.000+07:45")/1E3]),c[75])((0,c[65])(),c[54],c[-5807+new Date("1969-12-31T21:07:30.000-04:30")/1E3]),1)||(0,c[57])((0,c[60])(c[73],c[13]),c[47],c[7],c[73])),c[8]>=6&&(c[34]==4?(((0,c[57])((0,c[75])((0,c[72])(),c[54],c[43]),c[Math.pow(4,new Date("1969-12-31T14:15:05.000-09:45")/
1E3)+2+-951],(0,c[72])(),c[2],c[43]),c[0])(c[73]),c[75])((0,c[51])(),c[2],c[43]):(0,c[6])(c[32],(0,c[80])(c[61]),(0,c[6])(c[50]),(0,c[60])(c[2],c[50]),c[73],c[41]))}catch(d){(0,c[57])(((0,c[32])(c[54],c[71]),c[32])(c[61],c[81]),c[75],(0,c[51])(),c[73],c[43])}try{(c[25]===6||((((0,c[82])((0,c[60])(c[73],c[22]),c[39],(0,c[32])(c[36],c[63]),c[12],c[62]),(0,c[15])(c[37],c[66]),c[67])(c[11],c[65])&(0,c[36])(c[37],c[2]),(0,c[59])((0,c[35])(),c[73],c[27]),c[16])(c[38],c[81]),(0,c[68])(c[38]),(0,c[23])(c[45],
c[24]),0))&&(((((0,c[59])((0,c[49])(),c[38],c[27]),c[31])(c[12],c[62]),c[68])(c[57]),(0,c[new Date("1970-01-01T11:30:59.000+11:30")/1E3])((0,c[51])(),c[73],c[27]),c[23])(c[62],c[26]),(0,c[31])(c[42],c[38]),(0,c[41])((0,c[59])((0,c[35])(),c[57],c[27]),c[68],c[20]),(0,c[59])((0,c[56])(),c[73],c[27]),c[59])((0,c[56])(),c[73],c[27]),c[77884-new Date("1970-01-01T09:15:19.000+09:15")/1E3*4096]!=-2&&(c[new Date("1970-01-01T10:15:42.000+10:15")/1E3]>=4&&((((0,c[48])(c[78],c[62]),c[44])(c[20],c[21]),c[79])(c[25],
c[35]),1)||((0,c[43])(c[40],c[6]),c[9])((0,c[27])((0,c[3])(),c[41],c[83]),c[39],c[13]))}catch(d){(0,c[27])((0,c[new Date("1970-01-01T01:45:03.000+01:45")/1E3])(),c[new Date("1970-01-01T07:45:41.000+07:45")/1E3],c[83]),(0,c[87])(c[73],c[25])}finally{c[81]!=2&&(c[80]===-4||((0,c[43])(c[69],c[25]),0))&&(0,c[27])((0,c[19])(),c[6],c[83]),c[28]==6?(0,c[45])(c[27],(0,c[43])(c[58],c[13]),(0,c[39])(c[76]),(0,c[87])(c[28],c[25]),(0,c[3])(),c[6],c[83]):(0,c[9])((0,c[9])((0,c[12])(c[13],c[21])&(0,c[69])(c[70],
c[34]),c[39],c[13]),c[50],c[51],c[20]),c[77]>=3&&(c[82]<=6&&((((0,c[19])(c[20],c[77]),c[1])((0,c[35])(c[78],c[5]),c[35],c[76],c[5]),(0,c[71])(c[5],c[80]),c[4])(c[5],c[3]),1)||((((0,c[33])((0,c[9])(),c[47],c[1]),c[45])(c[36]),(0,c[85])(c[47],c[41]),c[5])(c[54],c[87]),c[33])((0,c[23])(),c[31],c[1])),c[50]<=6&&(((0,c[5])(c[67],c[87]),c[5])(c[69],c[31]),"2")||((0,c[18])(c[87],c[66]),c[18])(c[31],c[3]),c[86]<new Date("1969-12-31T21:14:54.000-02:45")/1E3&&(c[50]==-4&&((0,c[15])(((0,c[15])((0,c[5])(c[43],
c[87]),c[5],c[35],c[87]),c[15])((0,c[78])(c[36],c[13]),c[5],c[84],c[31]),c[49],c[20],c[47]),"NaN")||(((0,c[85])(c[82],c[63]),(0,c[78])(c[19],c[24]),c[74])(c[62],c[35]),(0,c[31])((0,c[34])(c[63],c[5]),c[13],c[15],c[8]))),c[62]>-9&&(c[29]!==6||((((0,c[31])((0,c[49])((0,c[41])(),c[15],c[17]),c[49],(0,c[25])(),c[63],c[17]),c[65])(c[55],c[15]),c[21])(c[48],c[new Date("1969-12-31T20:15:15.000-03:45")/1E3]),0))&&(((0,c[65])(c[76],c[15]),c[65])(c[53],c[47]),(0,c[6])(c[47],c[72]),c[65])(c[23],c[47])}}catch(d){return"enhanced_except_pZwB2uP-_w8_"+
a}return b.join("")};