const gma = /^[\w.]*$/
const signatureTimestamp = 20026

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
		url = orgaCompose(m.QE,m.hI,m.s)
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
	a={EZ:!1,QE:"",hI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.EZ=!0;
a.QE=b.url;
a.hI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
RL.vz(a,1);
RL.N3(a,45);
RL.N3(a,52);
RL.vz(a,3);
RL.Ys(a,31);
RL.vz(a,3);
RL.Ys(a,30);
return a.join("")
}

var RL={Ys:function(a){a.reverse()},
N3:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
vz:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
-2081002339,2051943908,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
77431391,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-1665076476,-905069865,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-77584436,null,function(d){d.reverse()},
-373870752,567199967,-1732348182,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-433355706,-438114930,b,b,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
2070868492,b,null,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
1966193249,2117333066,-226486515,"dcF1p",function(d,e){e.length!=0&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
1351334442,-346598915,1255477581,1753795232,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
-1341655039,"const",312387913,2122508990,"(,,][}/",function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-77584436,"forEach",function(d,e,f,h,l,m){return e(h,l,m)},
1118402060,-1980068027,function(d,e,f,h,l){return e(f,h,l)},
450471574,294481238,1559755110,2001154336,-186015268,-1919163602,245503339,-1353234439,-1394755194,-1877591835,574500037,1847613880,function(d,e,f){var h=e.length;d.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},f.split(""))},
1334376232,"CZnyab",null,-56166698,-1065761336,840504684,-239880899,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-1341529479,82293166,628541612,function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
-423372772,-40128020];c[10]=c;c[23]=c;c[62]=c;try{try{c[31]<-3&&(c[16]<3&&((0,c[20])(((((0,c[11])(c[23]),c[14])(c[51],(0,c[65])(),c[45]),c[39])(c[63],c[61]),c[39])(c[20],c[69]),(0,c[10])(c[18],c[16]),c[67],(0,c[42])(c[new Date("1969-12-31T19:30:21.000-04:30")/1E3],c[13]),c[28],c[51]),1)||(0,c[49])((0,c[49])((0,c[63])(c[24],c[57])>>((0,c[0])(c[22]),(0,c[0])(c[44])),c[6],(0,c[19])(c[52],(0,c[42])(),c[70]),c[19],c[56],(0,c[27])(),c[62]),c[6],(0,c[58])(c[53],c[41]),c[58],c[56],c[13])),c[38]!=new Date("1970-01-01T06:45:00.000+06:45")/
1E3&&(0,c[68])(c[22],c[35]),c[56]<3?((((0,c[63])(((((0,c[41])(c[39],c[33]),c[28])(c[39]),c[57])(c[36]),c[2])(c[39],(0,c[22])(),c[53]),c[46],c[50],c[27]),(((0,c[2])(c[39],(0,c[20])(),c[4]),c[46])(c[42],c[39]),c[41])(c[39],c[44]),c[2])(c[36],(0,c[25])(),c[53]),c[2])(c[35],(0,c[10])(),c[4]),c[41])(c[36],c[48]):(((((((0,c[60])((0,c[14])(c[5],c[15]),c[41],(0,c[63])((0,c[46])(c[19],c[36]),c[14],c[35],c[1]),c[35],c[64]),c[63])((0,c[46])(c[9],c[27]),c[57],c[27]),c[45])(c[38]),c[59])(c[46],c[18]),c[73])(c[38],
c[49]),c[16])(c[0]),c[41])(c[39],c[49]),c[70]==8?(((((0,c[51])(c[40],c[21]),c[41])(c[35],c[72]),c[14])(c[73],c[5]),(0,c[28])(c[35]),c[46])(c[23],c[39]),c[41])(c[27],c[65]):((((((0,c[0])(c[new Date("1969-12-31T19:00:27.000-05:00")/1E3],c[12]),c[32])(c[71],c[59]),c[37])(c[59],c[20]),c[60])(c[19],(0,c[68])(),c[62]),c[17])(c[20],c[53]),c[58])(c[57],c[55])}catch(d){(0,c[50])(c[29])<=(0,c[34])(c[29],c[1]),(0,c[56])((0,c[39])(c[59],c[20]),c[69],c[32],(0,c[3])(),c[52])}finally{c[24]<=new Date("1970-01-01T06:00:01.000+06:00")/
1E3&&(c[16]===-7||((0,c[50])(c[20]),0))&&(0,c[23])(c[53]),c[67]>1&&(0,c[47])(c[53],c[18]),c[15]!=-8?(((0,c[34])(c[28],c[53]),c[34])(c[12],c[53]),(0,c[29])(c[44],c[24]))&(0,c[17])((0,c[17])((0,c[17])((0,c[17])((0,c[52])(c[41]),c[6],c[53],c[3]),c[52],c[15],c[62]),c[22],c[62],(0,c[73])(),c[39]),c[22],c[63],(0,c[73])(),c[8+new Date("1969-12-31T18:30:17.000-05:30")/1E3%13+33]):(0,c[38])((((0,c[47])(c[71],c[31]),c[57])(c[63],c[8]),c[47])(c[59],c[44]),c[70],(0,c[57])(c[59],c[51]),c[58])!==(0,c[38])((0,c[22])(c[59],
(0,c[2])(),c[45]),c[70],(0,c[22])(c[59],(0,c[4])(),c[53]),c[25]),c[55]!=-2&&(0,c[38])((0,c[35])((0,c[70])(c[59]),c[47],c[63],c[40]),c[24],(0,c[57])(c[62],c[11]),c[59],c[67])}}catch(d){return"enhanced_except_upwBxeP-_w8_"+a}return b.join("")};