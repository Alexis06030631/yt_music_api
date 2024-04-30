const gma = /^[\w.]*$/
const signatureTimestamp = 19838

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
	const url = orgaCompose(m.bD,m.tG,m.s)
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
	a={VX:!1,bD:"",tG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.VX=!0;
a.bD=b.url;
a.tG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
cP.gs(a,40);
cP.gs(a,23);
cP.V6(a,72);
cP.CL(a,2);
cP.gs(a,22);
cP.gs(a,39);
cP.gs(a,39);
return a.join("")
}

var cP={gs:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
V6:function(a){a.reverse()},
CL:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(""),c=["now",191301148,2046949073,-536754808,-1892384535,-32961157,1854242442,525388296,-516338339,1487493154,/('\/)[/,6,/[,]/,-1596766083,-1585285111,-2140379104,-716386730,-943183594,918094241,-1433335947,-1935177252,-581355106,null,-1388968535,-68591346,-930308969,-150638971,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
1201312982,1371030941,function(d,e,f,h,l,m){return e(h,l,m)},
function(d,e){0!=e.length&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
108405611,-626698574,-1738854771,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
2101541224,function(d,e){e.splice(e.length,0,d)},
/{\)]"\/,}",,/,-923230283,1681757741,b,453826732,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
124234970,function(d,e,f){var h=f.length;d.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},e.split(""))},
880285848,function(d,e){if(0!=e.length){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
-1629161453,-370102742,-1609265425,b,-415663507,",]''u",1464630771,455204988,function(d,e,f,h,l,m,n){return d(l,m,n)},
function(d,e,f,h,l){return e(f,h,l)},
null,239785516,1612123098,function(d){d.reverse()},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
1155332475,503624007,1924396796,-899942809,-2068158949,854681524,2092157003,function(d,e,f,h,l,m,n,p){return d(m,n,p)},
-693571288,-2047102071,1311769174,-521174201,-166216802,-1100035546,988406038,823841897,-1997923462,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
function(d,e,f,h,l,m,n,p,q,r,t){return d(f,h,l,m,n,p,q,r,t)},
152503180,-931540639,b,-181133050,979278544,null,-256392815,-152892416,-432375226,1386701522,500519371,-903654285,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])}];
c[20]=c;c[57]=c;c[87]=c;try{try{1>c[31]&&(-4===c[6]||((0,c[29])(c[89],c[84]),c[80])(c[84],c[new Date("1969-12-31T21:15:06.000-02:45")/1E3])*(0,c[46])(c[24],c[84])&&39524-Math.pow(5,5)+-36399)&&((0,c[80])(c[50],c[70]),c[80])(c[50],c[23])-(0,c[60])(c[57])}catch(d){(0,c[44])(c[40],c[0],(0,c[79])())}try{9>c[-4067+Math.pow(3,4)- -4071]&&(-7<c[9]||((0,c[80])(c[84],c[63])!==(0,c[80])(c[87],c[11])&(0,c[46])(c[31],c[87]),0))&&(0,c[56])((0,c[59-3*Math.pow(1,1)])((0,c[80])(c[84],c[54]),c[42],c[20],c[64]),c[61],
c[8],c[28]),-10>c[33-Math.pow(5,5)+3110]?(0,c[Math.pow(8,5)-2960-29748])(c[50]):(0,c[44])(c[40],c[new Date("1969-12-31T15:00:00.000-09:00")/1E3],(0,c[61])()),-10!=c[11]&&(-8<c[31]&&(((0,c[44])(c[40],c[0],(0,c[79])()),c[46])(c[48],c[40])<<((0,c[80])(c[57],c[8]),c[80])(c[40],c[13]),{})||(0,c[56])(((0,c[42])(c[87],c[62]),(0,c[74])(c[38],c[37]),c[70])(c[66],c[85]),c[74],c[new Date("1970-01-01T10:16:24.000+10:15")/1E3],c[65])),-4!=c[4]&&(-9<c[-3*Math.pow(5,5)+9442]||((0,c[31])(c[5],(((((0,c[87])(c[37],
c[24]),c[18])(c[5],c[33]),c[18])(c[76],c[-102332- -25*Math.pow(8,4)]),c[73])(c[77],c[75]),c[18])(c[78],c[80]),c[67],(0,c[69])(c[49],c[43]),((0,c[48])(c[64],c[3]),c[69])(c[41],c[80]),(0,c[65])(c[15],c[25]),c[1],c[56],(0,c[159*Math.pow(3,1)+-455])()),0))&&(((((0,c[11])((0,c[55])(c[45]),c[21],c[45]),c[5])(c[1],c[56],(0,c[90])()),c[7])(c[37],c[36]),c[41])(c[1],c[91]),(0,c[84])(((0,c[21])(c[48]),c[55])(c[48]),c[5],(0,c[5])(c[1],c[56],(0,c[89])()),c[36],c[56],(0,c[40])()),c[7])(c[12],c[36]),c[65]!==-15908+
Math.pow(4,1)+15902&&(-1==c[2]?(0,c[84])(((0,c[85])(c[14],c[48]),c[5])(c[45],c[56],(0,c[22])()),c[81],(0,c[-254+29*Math.pow(3,2)])(c[63],c[1]),c[78],c[76]):(((0,c[11])((0,c[85])(c[29],c[45]),c[3],c[new Date("1970-01-01T07:00:36.000+07:00")/1E3],c[17]),c[92])(c[54],c[76]),(0,c[new Date("1970-01-01T05:00:03.000+05:00")/1E3])(c[18],c[65]))),(-8===c[57]||((0,c[37])(c[52],c[54]),(0,c[31])(c[73],c[new Date("1969-12-31T19:31:20.000-04:30")/1E3])-(0,c[31])(c[8],c[47])>(0,c[93])(c[14],c[84]),null))&&((0,c[49])(c[53],
c[83]),((0,c[19])((0,c[13])(c[53],c[64],(0,c[1])()),c[13],c[53],c[64],(0,c[30])()),c[49])(c[9],c[47])),(8===c[8]||((((0,c[19])((0,c[11])(c[56],c[35]),c[56],c[93],c[68]),(0,c[52])(c[32],c[47]),((0,c[71])(c[75],c[5]),c[19])(c[87],c[66]),c[71])(c[75],c[7]),c[51])(c[10]),0))&&(0,c[35])(c[62],((0,c[new Date("1969-12-31T21:01:00.000-03:00")/1E3])(c[64],c[9],(0,c[72])()),c[80])(c[49],c[17]),(0,c[54])((0,c[24])(c[20],c[6]),c[62],c[85],c[89]),(0,c[76])(c[33],c[new Date("1969-12-31T20:46:04.000-03:15")/1E3]),
(0,c[24])(c[223-Math.pow(6,4)- -1137],c[14]),c[29],c[31]),8>c[57]&&(4<=c[92]?(0,c[-39342+Math.pow(4,1)+39362])(c[29],c[5]):(0,c[62])(c[17],c[57])),6<=c[21]&&(7!==c[69]||((((0,c[63])(c[39]),c[43])(c[48],c[85]),c[43])(c[66],c[14]),0))&&((0,c[3])(c[46],c[8]),c[22])(c[14],c[77])<=(0,c[26])(c[89],c[31])}catch(d){(0,c[70])(c[80]),((0,c[84])(c[89],c[78]),c[24])(c[80],c[69],(0,c[36])()),(0,c[18])((0,c[44])(c[42],c[new Date("1969-12-31T20:46:17.000-03:15")/1E3]),c[8],c[80]),(0,c[18])((0,c[new Date("1970-01-01T08:15:26.000+08:15")/
1E3])(c[28],c[25]),c[40],c[72],c[77]),((0,c[84])(c[77],c[39]),c[84])(c[80],c[19])}}catch(d){return"enhanced_except__poBgeX-_w8_"+a}return b.join("")};