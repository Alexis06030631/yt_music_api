const gma = /^[\w.]*$/
const signatureTimestamp = 20017

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
		url = orgaCompose(m.XE,m.mI,m.s)
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
	a={FZ:!1,XE:"",mI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.FZ=!0;
a.XE=b.url;
a.mI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
NL.Qu(a,46);
NL.YV(a,2);
NL.sf(a,59);
NL.Qu(a,61);
NL.sf(a,80);
NL.YV(a,1);
return a.join("")
}

var NL={Qu:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
sf:function(a){a.reverse()},
YV:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
-1511053765,null,392078602,976943677,function(d){throw d;},
function(d){d.reverse()},
-1436235038,b,b,1025601170,-1911405140,-1666970371,-1897795763,null,-1666970371,-1608057137,"(]\u2295'",1910259526,-1693952408,-1503392787,-241345342,1759060997,-2031830194,779486807,721329155,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-367548907,-441059237,-265444511,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
1166726401,function(d,e,f,h,l){return e(f,h,l)},
1943728334,1864431570,100872143,600074577,"else",-1133575093,-434525890,b,-901678070,23576687,612229850,2129815537,275651636,583702332,546399577,-241345342,-434525890,function(d,e,f,h,l,m){return e(h,l,m)},
-1693952408,function(d,e){e.length!=0&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
1392521774,-1478299543,",{(]]([",359191537,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-673857251,-1705089394,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
1853490718,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
function(d,e,f,h,l,m,n,p,q,r){return e(l,m,n,p,q,r)},
2078476543,1715493245,-78116792,240396293,1910259526,-350009845,-743830776,597579584,function(d,e,f){var h=f.length;e.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},d.split(""))},
1745492307,"-",-1973142065,-1938453548,null,741810747,function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
function(d,e,f,h,l,m,n){return d(l,m,n)},
-1897795763,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e}];
c[2]=c;c[14]=c;c[78]=c;try{try{c[58]<=-8&&(c[76]>1&&(((((0,c[0])(c[2],c[70]),c[50])((0,c[0])(c[9],c[21]),c[new Date("1970-01-01T01:16:21.000+01:15")/1E3],(0,c[30])(c[8]),c[78],c[new Date("1969-12-31T16:00:03.000-08:00")/1E3]),c[32])((0,c[73])(c[75],c[9],(0,c[60])()),c[63],c[13],c[8]),c[82])(c[30],(0,c[0])(c[9],c[74]),(0,c[6])(c[2]),(0,c[0])(c[14],c[58]),c[14]),1)||(0,c[64])((0,c[52])(c[10],c[14]),c[32],((0,c[80])(c[8],c[27]),(0,c[32])((0,c[52])(c[76],c[2]),c[6],c[9]),c[81])(c[40],c[44])/(0,c[10])(c[8],
c[41]),(0,c[81])(c[78],c[67])%(0,c[45])(c[12],c[7]),(0,c[74])(c[33],c[9]),c[56],c[31],c[33])),c[51]!=1&&(0,c[78])(c[1],c[21]),c[11]!=-7&&(0,c[56])(c[36],c[7]),(0,c[8])(c[11]),(0,c[76])(c[78],c[12],(0,c[60])())}catch(d){c[46]!==-9&&(0,c[84])(c[11],c[38]),c[24]<=-8&&(c[75]>2&&((0,c[13])(c[43],c[27]),1)||(0,c[84])(c[5],c[50])),c[44]<6&&(((0,c[33])(c[5]),c[18])(c[63],c[73]),8)||(0,c[8])(c[44],c[72],(0,c[82])())!==(0,c[71])(c[3],c[80]),c[11]>9?(0,c[71])(c[41],c[22]):(0,c[71])(c[72],c[9]),c[9]>=-2&&(c[70]>
5&&((0,c[81])(c[41],c[45]),1)||(0,c[8])(c[44],c[41],(0,c[21])())),c[45]>-4&&(c[7]>6&&(((0,c[0])(c[67],c[52]),(0,c[52])(c[10],c[28]))*(0,c[33])(c[24],c[47])*(0,c[27])(c[25]),/,/)||((((0,c[new Date("1969-12-31T18:30:33.000-05:30")/1E3])(c[24],c[11]),c[45])(c[81],c[78],(0,c[34])()),c[23])(c[40],c[10]),c[45])(c[43],c[78],(0,c[7])()))}finally{c[64]<-4&&(c[11]===9&&((((0,c[1])((0,c[37])(c[78],c[39]),c[55],c[8],c[24]),c[23])(c[24],c[53]),(0,c[1])((0,c[45])(c[81],c[78],(0,c[58])()),c[33],c[31],c[14]),c[45])(c[81],
c[78],(0,c[7])()),1)||((((0,c[66])(c[73],c[25]),(0,c[33])(c[19],c[57]),c[27])(c[78]),(0,c[3])(c[19]),c[51])(c[new Date("1969-12-31T15:15:44.000-08:45")/1E3],c[5]),c[18])(c[34],c[65])),(c[10]!=2||((0,c[83])((0,c[61])(c[58],c[8]),c[18],c[22],c[53]),0))&&(0,c[83])((0,c[57])(c[65]),c[45],c[43],c[25],(0,c[new Date("1969-12-31T16:45:58.000-07:15")/1E3])()),c[2]!==4&&(0,c[55])(c[52],c[25])}try{c[76]>5&&((0,c[33])(c[19],c[13]),(0,c[1])((0,c[33])(c[31],c[24]),c[33],c[40],c[18]),c[3])(c[26])}catch(d){(0,c[3])(c[31])}try{c[57]===
-8?(0,c[1])((0,c[23])(c[26],c[2]),c[66],c[72],c[40]):((0,c[37])(c[40],c[22]),c[63])(c[15]),(((0,c[81])(c[5]),c[1])(c[31],c[68]),c[64])(c[28],c[83],(0,c[53])())}catch(d){}finally{c[71]>=-6&&(0,c[23])((0,c[23])((0,c[76])(c[5],c[80]),c[43],c[44],c[78]),c[54],c[45],c[78])}}catch(d){return"enhanced_except_sZwBzuP-_w8_"+a}return b.join("")};