const gma = /^[\w.]*$/
const signatureTimestamp = 19978

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
		url = orgaCompose(m.KE,m.fI,m.s)
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
	a={xZ:!1,KE:"",fI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.xZ=!0;
a.KE=b.url;
a.fI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
gL.VI(a,3);
gL.r2(a,40);
gL.VI(a,2);
gL.zh(a,14);
gL.VI(a,3);
gL.r2(a,65);
return a.join("")
}

var gL={VI:function(a,b){a.splice(0,b)},
r2:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
zh:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[1163442297,function(d,e,f,h,l,m,n){return d(l,m,n)},
2092935453,1357283586,null,function(d,e,f,h,l,m){return e(h,l,m)},
1498899281,2064911749,508129653,b,-275059536,-412040312,547610663,function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
1216246489,b,-319570115,-2140417344,function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
function(d,e){d.splice(d.length,0,e)},
-878659395,-1827876016,null,-1224698495,-1791322379,null,function(d,e,f){var h=d.length;e.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},f.split(""))},
-2138422920,767654984,2060245639,270730533,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
1634793038,44961247,b,1203748421,1474531175,-754863963,886612488,949863396,-1264913219,313115296,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-245179891,177607820,1767088903,-1443890667,1164078116,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
1605862565,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
"ScS6g6",function(d,e){d.splice(d.length,0,e)},
-1119879192,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
1480868989,-1850592075,-1284445851,-1411667241,-840846415,1327259003,-1055197657,function(d,e,f,h,l){return e(f,h,l)},
1906798541,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
2045752748,494784797,483599294,-611608036,1023324632,-396249057,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
1561448444,',"),',function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d){d.reverse()},
-1211491301,1976442112,-325590137,-2138422920,23796649,2020163520,-1096800584,function(d,e){e.push(d)},
704588326];c[4]=c;c[22]=c;c[25]=c;try{try{c[47]!==9&&(c[41]===10&&((((0,c[63])((0,c[31])(c[15],c[67]),c[55],c[9]),c[76])(c[34]),c[5])((0,c[13])(c[4],c[68]),c[26],(0,c[26])((0,c[49])(),c[9],c[52]),(0,c[49])(),c[9],c[52]),1)||(((0,c[76])(c[9]),((0,c[18])(c[15],c[69]),c[65])(c[15],c[85]),c[26])((0,c[72])(),c[15],c[52]),c[63])((0,c[18])(c[25],c[44]),c[51],c[79],c[34])),c[60]<=-9&&((0,c[31])(c[15],c[58]),{})||(0,c[65])(c[4],c[23]),c[70]==-1?(0,c[63])((0,c[13])(c[22],c[60]),c[31],c[34],c[62]):((0,c[65])(c[4],
c[77]),c[18])(c[21],c[3]),c[10]==8?(((0,c[78])((0,c[13])((0,c[29])(),c[82],c[39]),c[13],(0,c[13])((0,c[59])(),c[82],c[39]),(0,c[59])(),c[2],c[39]),c[78])((0,c[new Date("1970-01-01T10:30:52.000+10:30")/1E3])(c[77],c[20]),c[5],(0,c[18])(c[21],c[14]),c[82],c[28]),c[13])((0,c[62])(),c[21],c[39]):((0,c[74])(c[0],(0,c[0])(c[21],c[83]),((0,c[38])(c[26],c[2]),c[52])(c[82],c[65]),(0,c[0])(c[12],c[8]),c[2],c[48]),c[50])((0,c[38])(c[69],c[77]),c[8],c[38],c[35]),(c[14]<1||((0,c[6])((0,c[6])((0,c[18])(c[51],c[61]),
c[8],c[33],c[74]),c[new Date("1970-01-01T03:45:55.000+03:45")/1E3],(0,c[71])(),c[63],c[81]),""))&&(0,c[47])(c[63],c[26])*((0,c[80])(c[59],c[44]),c[8])(c[33],c[83]),c[79]>-9&&(c[new Date("1970-01-01T10:15:33.000+10:15")/1E3]>8&&((0,c[28])(((0,c[12])(c[45],c[23]),(0,c[54])(c[57],c[69]),c[2])(c[27],c[63]),c[74],(0,c[41])(c[57],c[70]),c[26],c[48]),1)||((0,c[2])(c[27],c[71]),c[6])(c[61],c[55])^(0,c[4])((0,c[45])(c[61],c[12]),c[78],c[14],c[42])&(0,c[58])(c[42],c[84])),c[57]===1?((0,c[53])((0,c[69])(),c[61],
c[79]),(0,c[78])(c[41],c[49]),c[53])((0,c[13])(),c[36],c[79]):(0,c[4])((0,c[4])((0,c[16])(c[31],c[44]),c[82],c[new Date("1970-01-01T05:30:36.000+05:30")/1E3]),c[17],c[49]),c[2]>-4&&(c[26]!=-8?(0,c[15])((0,c[81])((0,c[5])(c[36],c[7]),c[69],c[36],c[29]),c[53],(0,c[7])(c[8],c[new Date("1970-01-01T11:00:54.000+11:00")/1E3]),c[16],(0,c[42])(c[11],c[2]),c[63]):((0,c[83])((0,c[9])(c[44]),c[45],(0,c[32])(),c[new Date("1970-01-01T01:00:34.000+01:00")/1E3],c[71]),(0,c[50])(c[34],c[75]),(0,c[45])((0,c[new Date("1970-01-01T01:31:01.000+01:30")/
1E3])(),c[53],c[71]),c[37])(c[53],c[54])),c[49]!==-6&&(c[81]>=0&&((0,c[83])((0,c[8])(c[44],c[26]),c[85],c[41],c[12]),1)||(0,c[62])((0,c[75])(c[2]),c[64],c[20],c[34]))}catch(d){(0,c[62])(((0,c[74])(c[13],c[63]),c[24])((0,c[11])(),c[13],c[50]),c[24],(0,c[40])(),c[32],c[50]),((0,c[57])(c[35],c[32]),c[29])(c[32],c[22]),((0,c[53])(c[32]),c[74])(c[2],c[65]),(0,c[29])(c[13],c[10]),(0,c[16])(c[2],c[36])}finally{c[56]<-4?(0,c[3])((0,c[62])((0,c[74])(c[23],c[18]),c[74],c[2],c[69]),c[64],(0,c[83])(c[26],c[2]),
c[23],c[6]):(((0,c[18])(c[85]),c[77])((0,c[5])(),c[85],c[15])<=(0,c[69])(c[66],c[28]))*(0,c[82])(c[73],c[62])}}catch(d){return"enhanced_except_ipwB9eP-_w8_"+a}return b.join("")};