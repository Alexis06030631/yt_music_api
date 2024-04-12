const gma = /^[\w.]*$/
const signatureTimestamp = 19823

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
	const url = orgaCompose(m.bD,m.nG,m.s)
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
	a={WX:!1,bD:"",nG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.WX=!0;
a.bD=b.url;
a.nG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
hP.wM(a,60);
hP.mx(a,1);
hP.wM(a,10);
hP.wM(a,9);
hP.wM(a,59);
return a.join("")
}

var hP={mx:function(a,b){a.splice(0,b)},
wM:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
A2:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(""),c=[-1782596423,-188138835,"}\\'/[",1188143745,445539614,-1059271332,303101518,1078661979,b,null,-134746168,-2017881833,-929856050,912068901,-1949784789,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
94836395,2032215960,-775847112,-1936913770,844872560,function(d,e,f,h,l){return e(f,h,l)},
null,1774133890,1256678688,function(d,e,f,h,l,m){return e(h,l,m)},
-1113168085,911830409,function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
function(d,e){0!=e.length&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
-1585513246,/\)\[',\[,\),/,-1949784789,function(d,e,f){var h=f.length;d.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},e.split(""))},
917117797,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
-657185519,-277500943,-875693276,-179857899,-180890921,null,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
function(d){d.reverse()},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-90024573,-1914423898,1681005841,855714269,346265480,1944581399,-915870410,1394597280,94836395,193760022,999095721,744250532,362480229,-713135952,1692698332,552949921,-1914423898,-1893885001,834032007,-677849363,b,function(d,e){d.push(e)},
function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
-18422023,2116198406,1060243859,b,-631401264,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
"let",1558682083,897218193,function(d,e){d.splice(d.length,0,e)},
-1673679821,855714269,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])}];
c[9]=c;c[22]=c;c[42]=c;try{try{9<c[71]&&(-1<c[55]&&((0,c[29])(c[39],c[22]),"NaN")||(0,c[68])(c[80],c[72]))}catch(d){(0,c[15])(c[66],c[new Date("1969-12-31T22:45:05.000-01:15")/1E3])}finally{(-10!=c[Math.pow(1,1)+157+-152]||((0,c[43])((0,c[28])(c[110%Math.pow(6,2)+6],c[57]),c[21],(0,c[81])(c[22]),c[Math.pow(5,5)%54+-32],c[9],c[new Date("1970-01-01T05:30:20.000+05:30")/1E3]),0))&&(0,c[43])((0,c[28])(c[66],c[26]),c[21],(0,c[new Date("1969-12-31T12:30:33.000-11:30")/1E3])(c[8],c[75],(0,c[35])()),c[29],
c[38],c[8]),(c[0]==-10416+Math.pow(7,4)+8017||(((0,c[43])(((0,c[44])(c[72]),c[21])((0,c[-5742-Math.pow(4,3)- -5874])(c[79],c[new Date("1970-01-01T10:00:09.000+10:00")/1E3]),c[25],c[11],c[29]),c[60],(0,c[54])(c[23],c[58]),c[68],c[46],c[23]),c[1])(c[23]),0))&&((((((0,c[54])(c[23],c[17]),c[Math.pow(8,3)+0-444])(c[28],c[47]),c[72])(c[104-Math.pow(3,4)%368],c[32],(0,c[2])()),c[Math.pow(5,4)-79+-474])(c[47],c[32],(0,c[2])()),c[Math.pow(5,3)+3400-new Date("1969-12-31T15:58:20.000-09:00")/1E3])(c[19],c[81]),
c[72])(c[29],c[32],(0,c[31])()),6<c[66]&&(0,c[38])(c[23]),3<c[12]&&(-8===c[4]&&((0,c[75])(c[51],c[81]),"null")||(0,c[25])(c[43],c[29])),-5!==c[30]&&(6==c[59]||(((((((0,c[64])((0,c[75])(c[45],c[48]),c[73],(0,c[new Date("1970-01-01T04:15:50.000+04:15")/1E3*Math.pow(8,1)-364])(c[46]),c[34],c[22]),c[62])(c[2],c[-7995+Math.pow(4,3)+7989]),c[12])(c[69],c[26]),c[79])(c[65],c[1]),c[71])(c[55],c[17]),(0,c[71])(c[14],c[3]),c[1])((0,c[60])(c[38]),c[68],c[54],c[32]),""))&&(0,c[67])(((((0,c[60])(c[62]),(0,c[419-
Math.pow(7,3)%432])(c[0],c[56]),c[1])((0,c[76])(c[62],c[48]),c[Math.pow(2,3)+11+-12],c[32],c[27]),c[7])(c[13],c[53]),c[67])((0,c[76])(c[0],c[46]),c[71],(0,c[7])(c[14],c[81]),c[14],c[29],(0,c[69])()),c[75],(0,c[7])(c[14],c[10-Math.pow(1,3)%119]),c[19],c[32]),(3===c[43]||(((0,c[1])(((((((0,c[76])(c[38],c[39]),c[75])(c[28],c[14]),c[36])(c[4],c[14]),c[7])(c[32],c[41]),c[36])(c[40],c[233*Math.pow(3,2)+-2084]),(0,c[39])(c[8],c[3])),c[86+Math.pow(7,5)+-16858],c[41],c[36]),c[34])(c[4],c[41]),(0,c[27])(c[75],
c[55]),0))&&(((((0,c[30])(c[55],c[70],(0,c[18])()),c[42])((0,c[48])(c[Math.pow(6,2)-new Date("1969-12-31T13:50:45.000-10:15")/1E3%212- -170],c[76]),c[30],c[55],c[70],(0,c[18])()),c[26])((0,c[new Date("1970-01-01T06:30:30.000+06:30")/1E3])(c[79],c[70],(0,c[71])()),c[30],(0,c[19])(c[73]),c[79],c[70],(0,c[71])()),(0,c[48])(c[55],c[33]),c[34])(c[10],c[54]),c[30])(c[79],c[70],(0,c[28])()),-2===c[56]&&(((((0,c[19])(c[79]),c[48])(c[79],c[31]),c[19])(c[21]),c[48])(c[21],c[62]),(0,c[26])((0,c[35])(c[54],c[22]),
c[48],(0,c[30])(c[73],c[70],(0,c[28])()),c[79],c[23]),1)||((((((0,c[42])((0,c[27])(c[38],c[79]),c[78],c[85*Math.pow(2,1)+-116],c[71]),c[34])(c[0],c[21]),c[Math.pow(8,4)- -3E3+-7062])(c[29],c[21]),c[67])(c[41],c[34]),c[64])(c[54]),c[48])(c[62],c[20]),-10<=c[20]&&(0,c[56])(c[11],c[42])}}catch(d){return"enhanced_except_75oBkOX-_w8_"+a}return b.join("")};