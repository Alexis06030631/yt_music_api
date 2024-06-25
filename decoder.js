const gma = /^[\w.]*$/
const signatureTimestamp = 19898

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
	const url = orgaCompose(m.cE,m.vH,m.s)
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
	a={SY:!1,cE:"",vH:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.SY=!0;
a.cE=b.url;
a.vH=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
WPa.ru(a,67);
WPa.gk(a,33);
WPa.gk(a,36);
return a.join("")
}

var WPa={ru:function(a){a.reverse()},
XG:function(a,b){a.splice(0,b)},
gk:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(""),c=[-1807110549,663929656,null,-788225549,739146354,2091762463,-451778046,1035070969,611580635,719958256,function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
733387039,function(d){d.reverse()},
-844656086,373285033,-1324820891,-1972118963,299183630,-1062099906,1543614105,-540439858,function(d,e,f,h,l,m,n){return d(l,m,n)},
function(d,e,f){var h=d.length;e.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},f.split(""))},
55949541,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
467629678,null,';\'";]"',-1098370898,"},/(",function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
-1945773814,928320718,-530434247,-1466740190,-1865531765,1641333224,2133149081,function(d,e,f,h,l,m,n,p,q,r,t){return d(f,h,l,m,n,p,q,r,t)},
-273545372,-1848279678,function(d,e,f,h,l,m){return e(h,l,m)},
function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
function(d,e,f,h,l){return e(f,h,l)},
2008496028,1285101884,b,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
null,550068604,749437984,1172342790,-566348376,function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
223808685,-932954084,121354367,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
2117820467,-2139842173,323822818,"debugger",-600332111,b,705104742,"EPnA",-1675683845,373285033,1064517780,b,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-1980193008,-716859876,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-600332111,-52892147,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1218955153,-703997727,-1302476300];c[2]=c;c[26]=c;c[48]=c;try{try{c[62-Math.pow(2,3)%254]!=5&&((0,c[41])((0,c[22])((0,c[71])(),c[Math.pow(3,3)+29646+-29627],c[61]),c[57],(0,c[57])(c[36],c[63]),c[54],c[63]),{})||(((0,c[57])(c[80],c[new Date("1970-01-01T11:15:46.000+11:15")/1E3]),c[22])((0,c[71])(),c[69],c[65]),c[22])((0,c[71])(),c[63],c[65]),c[56]>7&&(0,c[43])((((0,c[42])(c[48],c[45]),c[5])(c[20],c[11]),c[72])((0,c[59])(c[17],c[27]),c[41],c[17]),c[1],c[77],c[23]),c[38]!==-1&&((((0,c[1])(c[55],c[0]),
c[1])(c[31],c[69]),c[70])((0,c[22])(c[21*Math.pow(6,3)+-4461]),c[39],(0,c[5])(c[40],c[75]),c[55],c[78]),1)||(0,c[76])((0,c[70])((0,c[59])(c[31],c[Math.pow(8,2)%353+-61]),c[51],(0,c[39])(c[11],c[52]),(0,c[53])(),c[75],c[13]),c[72],(0,c[5])(c[6],c[77]),c[5],c[48],c[30])}catch(d){(0,c[51])((0,c[18])(),c[-53+Math.pow(4,3)%463],c[9]),(0,c[71])(c[31],c[64]),(0,c[5])(c[36],c[30])}finally{c[80]!=-10?(0,c[39])(c[30],c[66]):(0,c[22])(c[30]),c[3]<=7&&(0,c[72])((0,c[22])(c[-40492+Math.pow(2,2)+40518]),c[59],
c[11],c[62])}try{(c[37]>-8||((0,c[51])((0,c[53])(),c[11],c[13]),0))&&(0,c[Math.pow(4,3)-19+6])((0,c[new Date("1969-12-31T15:00:19.000-09:00")/1E3])(),c[11],c[13]),(c[2]>-1||((0,c[39])(c[11],c[44]),0))&&(0,c[1])(c[55],c[42]),c[48]!=1&&(0,c[72])((0,c[71])(c[31],c[49]),c[58],c[76],c[11]),c[75]==-4?((0,c[35])((0,c[37])(),c[76],c[78]),(0,c[35])((0,c[2])(),c[76],c[74]),c[35])((0,c[9])(),c[59],c[78]):((0,c[55])(c[76],c[21]),c[56])((0,c[66])(c[61],c[22]),c[55],c[14],c[38]),c[71]!=-4&&(c[32]===-7?(0,c[56])((0,c[56])(((0,c[6])(c[59]),
c[35])((0,c[3])(),c[14],c[74]),c[66],c[15],c[44]),c[55],c[59],c[52]):(0,c[60])((0,c[120-Math.pow(8,2)%507])((0,c[60-Math.pow(4,3)- -74])(c[73],c[76]),c[66],c[39],c[16]),c[56],(0,c[31])(c[61],c[69]),c[11],c[0])),c[6]>=-5&&(c[21]>0||((((0,c[60+144%Math.pow(1,5)])(c[19],c[46]),c[28])(c[64],c[18]),c[new Date("1969-12-31T21:01:11.000-03:00")/1E3])(c[0],c[69]),0))&&(0,c[61])((0,c[11])(c[20]),c[40],(0,c[8])(),c[19],c[2])^(0,c[30])(c[0])}catch(d){(0,c[61])((0,c[30])(c[19]),c[36],c[20],c[new Date("1970-01-01T11:45:13.000+11:45")/
1E3]),(0,c[71])(c[64],c[Math.pow(new Date("1969-12-31T15:00:03.000-09:00")/1E3,5)- -9360+-9569]),((0,c[40])((0,c[14])(),c[64],c[2]),c[28])(c[Math.pow(2,1)*-205- -410],c[77]),(0,c[75])(c[23],c[64])}try{c[37]>=0&&((0,c[61])((0,c[60])(c[44],c[15]),c[32],c[16],c[6]),c[73])(c[68],c[50])}catch(d){(0,c[13])(c[2])}finally{c[40]<8&&(c[64]!=-1&&(((0,c[58])(c[41],(0,c[63])((0,c[38])(c[21],c[26]),c[30],c[46],c[72]),c[new Date("1969-12-31T22:46:13.000-01:15")/1E3],(0,c[30])(c[46],c[24]),(0,c[30])(c[68],c[54]),
(0,c[62])(c[22],c[6]),c[-1*Math.pow(5,2)+28],c[5]),c[46])(c[62],c[53]),1)||((0,c[79])((0,c[-5280-Math.pow(7,2)*-108])(c[23],c[3]),c[12],c[80],c[38]),((0,c[67])(c[48]),c[29])(c[37]),(0,c[78])(c[48],c[68]),c[79])((0,c[58])((0,c[26])(),c[37],c[20]),c[12],c[21],c[62]))}}catch(d){return"enhanced_except_upsBxeT-_w8_"+a}return b.join("")};