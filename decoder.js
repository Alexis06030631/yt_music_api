const gma = /^[\w.]*$/
const signatureTimestamp = 19969

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
	const url = orgaCompose(m.NE,m.eI,m.s)
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
	a={vZ:!1,NE:"",eI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.vZ=!0;
a.NE=b.url;
a.eI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
ZK.GE(a,52);
ZK.Lw(a,3);
ZK.jB(a,74);
ZK.GE(a,22);
ZK.Lw(a,3);
ZK.jB(a,51);
ZK.GE(a,23);
ZK.jB(a,9);
ZK.Lw(a,3);
return a.join("")
}

var ZK={jB:function(a){a.reverse()},
Lw:function(a,b){a.splice(0,b)},
GE:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[626463411,function(d,e,f,h,l){return e(f,h,l)},
-16099523,733969150,-2039150172,1837530620,-533974817,-1651971871,function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
836577134,1801767410,-885315719,1576184246,1555643173,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
1998518150,1766959024,-2115295701,442669813,-2039150172,null,-1006720250,-743620452,-1581351739,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
915686009,/(,,["]')/,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
533022534,null,-1988475068,1643036292,null,1029271896,1964781344,";/'[,;;",61851598,")[)';{]",293035399,-1419642716,1709662782,1409798151,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
1882343367,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
function(d,e,f){var h=f.length;e.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},d.split(""))},
function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
b,148756479,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-96399220,function(d,e,f,h,l,m){return e(h,l,m)},
"xudCmQ",-710487821,-1664112018,b,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
b,-1920244405,61851598,905170568,962350325,-124188723,function(d){d.reverse()},
-1542007621,-1744635310,-1690835913,function(d,e,f,h,l,m,n){return d(l,m,n)},
-1936400145,-712032076,627987553,1189137468,1225148703,1555643173,-723538128,1468550438,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
-383064703,477685148,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
-2115295701,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})}];
c[20]=c;c[29]=c;c[32]=c;try{try{c[65]!=3&&((((0,c[1])((0,c[8])(c[23],c[32]),c[27],c[47],c[11]),c[8])(c[10],c[20]),c[46])(c[32],c[22]),c[46])(c[55],c[Math.pow(8,1)- -43472+-43439]),(c[65]>=-2||((((0,c[1])((0,c[1])((0,c[8])(c[-3213-Math.pow(2,5)- -3305],c[20]),c[42],c[55]),c[24],c[47],c[40]),c[80])(c[39],c[32]),(0,c[75])((0,c[37])(c[46],c[80]),c[55],c[23]),c[45])(c[59],c[48])-((0,c[62])(c[32],c[71])>=(0,c[27])(c[44]))>=(0,c[11])(c[57],c[20]),NaN))&&(0,c[42])((0,c[18])(c[41],(0,c[62])(c[28+180%Math.pow(2,
1)],c[58])>=(0,c[41])(c[34],c[39],(0,c[30])()),(0,c[40])(c[15],c[77]),(0,c[41])(c[34],c[28],(0,c[29])()),c[34],c[39],(0,c[72])()),((0,c[57])(c[11],c[28]),c[22])(c[31]),c[35],(0,c[41])(c[34],c[57%Math.pow(3,5)-29],(0,c[72])()),c[new Date("1969-12-31T16:30:41.000-07:30")/1E3],(0,c[41])(c[34],c[28],(0,c[72])()),c[34],c[31],(0,c[37])()),c[78]>-5&&((0,c[2])((0,c[22])(c[54]),c[20],c[54],c[-34*Math.pow(6,4)- -44123]),"NaN")||(0,c[80])((0,c[38])(c[67]),c[21175+Math.pow(8,3)-21667],c[43],c[Math.pow(4,5)-10-
942])}catch(d){(0,c[20])(c[51],c[70]),(0,c[76])(c[49],c[43]),(0,c[41])(c[48],c[51],(0,c[52])())}finally{c[68+450%Math.pow(1,3)]>=6?((0,c[78])(c[16],c[66]),(0,c[19])(c[8],c[20]),c[34])(c[41],c[47],(0,c[38])()):((0,c[16])(c[36],c[14]),(0,c[34])(c[41],c[44],(0,c[38])()),c[53])(c[9]),(c[30]>Math.pow(2,3)%313+-5||((0,c[13])(c[36],c[27]),""))&&(0,c[13])(c[44],c[26]),c[61]!==6&&(((0,c[31])(c[21]),c[11])(c[46],c[21]),(0,c[13])(c[43],c[61]),1)||(0,c[60])((0,c[60])((0,c[62])(c[6],c[49]),c[64],c[new Date("1969-12-31T22:45:45.000-01:15")/
1E3],c[41]),c[new Date("1970-01-01T07:46:04.000+07:45")/1E3],c[65],c[14])}try{c[54]!==0&&(c[27]>0?(0,c[62])(c[6],c[57]):(0,c[37])(c[47+Math.pow(1,5)+-42],c[13])),c[69]!=7?(((0,c[64])(c[46],c[73]),(0,c[56])(c[80],c[71]),c[56])(c[8],c[69]),c[58])(c[76],c[8]):((0,c[4])((0,c[74])(c[8]),c[new Date("1970-01-01T03:15:09.000+03:15")/1E3],(0,c[10])(c[Math.pow(8,5)*-148- -4849667],c[8],(0,c[82])()),c[67],c[34]),c[31])(c[80],c[24]),c[60]<9&&(((0,c[26])(c[53],c[35]),((((0,c[0])(c[9],(0,c[58])(c[50],c[8]),(0,c[26])(c[52],
c[70]),(0,c[13])(c[35]),c[15],c[57]),c[24])(c[17],c[47]),c[52])(c[77],c[14]),(0,c[52])(c[Math.pow(3,4)%355+-7],c[13]),c[48])(c[new Date("1969-12-31T20:46:14.000-03:15")/1E3]),c[35])(c[60],c[64])!==(0,c[3])(c[39],c[74]),[])||(((((((0,c[51])(c[58],c[64],(0,c[67])()),c[30])(c[53],c[1]),c[7])((0,c[48])(c[64]),c[48],c[64]),c[7])((0,c[51])(c[58],c[53],(0,c[63])()),c[70],c[74-Math.pow(5,4)+604]),c[5])(c[77],c[72]),c[51])(c[new Date("1969-12-31T17:15:58.000-06:45")/1E3],c[53],(0,c[63])()),(0,c[7])((0,c[33])(c[77],
c[24]),c[30],c[64],c[71]),c[48])(c[74])}catch(d){((0,c[48])(c[26]),c[30])(c[77],c[62]),(0,c[48])(c[64])}}catch(d){return"enhanced_except_gZwB_uP-_w8_"+a}return b.join("")};