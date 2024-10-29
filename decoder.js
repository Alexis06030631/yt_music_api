const gma = /^[\w.]*$/
const signatureTimestamp = 20020

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
		url = orgaCompose(m.QE,m.gI,m.s)
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
	a={CZ:!1,QE:"",gI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.CZ=!0;
a.QE=b.url;
a.gI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
CL.GR(a,74);
CL.GH(a,3);
CL.sp(a,47);
CL.GR(a,54);
CL.sp(a,35);
CL.GR(a,59);
return a.join("")
}

var CL={GH:function(a,b){a.splice(0,b)},
sp:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
GR:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
1153954457,1425260647,b,-140969781,null,739523960,function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
1201465428,-648153884,",{'},{",518060575,-1118493868,1683823889,504971697,-1406999828,b,-746960463,950027418,-1627924874,-1817445171,-1130225017,-1662061473,562803536,function(d,e,f,h,l){return e(f,h,l)},
1689680979,1849450456,function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
1176285499,1088694377,-80891726,function(d,e){d.push(e)},
1788416266,-255196112,-87861645,-1078775557,-1025799493,-1429525623,926136929,1955785317,819952622,1756320400,466773431,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
-407669606,-1312802410,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
302722894,1847568565,757057680,1683823889,2126191728,function(d,e,f){var h=e.length;d.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},f.split(""))},
null,-1465033080,1241921359,-1552600585,-1526232108,function(d,e,f,h,l,m){return e(h,l,m)},
1430063252,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-1066270170,1166987922,1153954457,1570796184,-1215447682,1103894440,b,260078182,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
"if",1530558651,-469042108,function(d){d.reverse()},
1877311127,1807778321,null,148425139];c[5]=c;c[55]=c;c[79]=c;try{try{c[2]!=-7&&((0,c[25])((0,c[62])(c[79],c[13]),c[50],c[24],c[48]),((0,c[23])(c[33],c[79]),c[new Date("1970-01-01T08:45:44.000+08:45")/1E3])(c[61],c[new Date("1970-01-01T03:30:16.000+03:30")/1E3]),c[23])(c[12],c[80])}catch(d){(0,c[49])(c[12],(0,c[76])(),c[68])}finally{c[54]!=-9&&(c[5]>=1?(0,c[3])((0,c[20])((((0,c[67])(c[59],c[79]),c[67])(c[33],c[65]),(0,c[67])(c[62],c[79])),c[2],c[22],c[74]),c[20],(0,c[67])(c[34],c[65]),c[67],c[37],
c[79]):(((0,c[20])((0,c[23])(c[79],c[53]),c[57],c[12],c[18]),((0,c[57])(c[12],c[60]),c[2])(c[30],c[12]),c[23])(c[74],c[64]),c[23])(c[65],c[17])),c[19]!==-4&&(c[37]==-7?(0,c[3])((0,c[40])(c[74],c[78]),c[55],(0,c[49])(c[79],(0,c[58])(),c[new Date("1969-12-31T22:46:08.000-01:15")/1E3]),c[49],(0,c[40])(c[79],c[69]),c[79],(0,c[43])(),c[68]):(0,c[20])(((0,c[23])(c[79],c[39]),(0,c[24])(c[34]),c[23])(c[68],c[new Date("1969-12-31T21:45:07.000-02:15")/1E3]),c[78],c[44],c[46])),c[32]!=4&&(0,c[0])((((0,c[40])(c[68],
c[75]),c[40])(c[1],c[48]),c[13])(c[69],c[1]),c[23],c[30],c[8]),(c[79]>=8||((0,c[47])((0,c[60])(c[75],c[34])*(0,c[60])(c[45],c[53]),c[60],c[42],c[48]),0))&&(0,c[47])(((0,c[56])(c[48]),c[44])(c[19],c[77]),c[60],c[80],c[34])}try{c[16]<1&&((0,c[70])(c[62],c[25]),c[23])(c[12],c[20]),(c[new Date("1970-01-01T01:00:31.000+01:00")/1E3]==3||(((0,c[56])(c[34]),c[44])(c[76],c[77]),void 0))&&(0,c[56])(c[48])>(0,c[22])(c[34])}catch(d){(0,c[47])((0,c[60])(c[21],c[34]),c[60],c[50],c[48])}try{(c[41]===10||(((((0,c[44])(c[11],
c[34]),c[78])(c[62],(0,c[0])(),c[59]),c[56])(c[62]),c[70])(c[53],c[2]),0))&&(0,c[17])((0,c[52])(c[36],(0,c[55])(),c[33]),c[21],(0,c[21])((0,c[44])(c[22],c[26]),c[34],c[1],c[51]),c[34],c[56],c[8]),c[48]!=new Date("1970-01-01T04:29:50.000+04:30")/1E3&&(c[31]==2&&((((0,c[34])(c[45],c[22]),c[52])(c[22],(0,c[25])(),c[33]),c[78])(c[8],c[32]),1)||(((0,c[44])(c[67],c[6]),c[42])(c[31],c[49]),c[63])(c[27],c[72])),(c[9]>5||((((0,c[66])((0,c[16])(c[24],(0,c[70])(),c[new Date("1969-12-31T19:01:18.000-05:00")/
1E3]),c[42],c[67],c[2]),c[16])(c[24],(0,c[19])(),c[78]),(0,c[16])(c[53],(0,c[22])(),c[78]),(0,c[16])(c[24],(0,c[19])(),c[78]),c[41])(c[67]),(0,c[79])(c[11],c[53]),0))&&((0,c[66])((0,c[66])((0,c[63])(c[52],c[15]),c[8],c[15],c[17]),c[73],c[63],c[43]),(((0,c[60])(c[38],c[77]),c[5])(c[57],c[23]),c[48])(c[38],c[78]),c[40])(c[57],c[7])}catch(d){(0,c[56])(c[78],c[73]),(0,c[56])(c[81],c[44]),(0,c[74])(c[29],(0,c[47])(),c[55])}}catch(d){return"enhanced_except_tJwBy-P-_w8_"+a}return b.join("")};