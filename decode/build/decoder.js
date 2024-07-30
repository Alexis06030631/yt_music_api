const gma = /^[\w.]*$/
const signatureTimestamp = 19933

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
	const url = orgaCompose(m.pE,m.NH,m.s)
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
	a={cZ:!1,pE:"",NH:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.cZ=!0;
a.pE=b.url;
a.NH=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
dL.IY(a,59);
dL.IY(a,20);
dL.IY(a,22);
dL.ZI(a,2);
dL.IY(a,47);
dL.IY(a,69);
return a.join("")
}

var dL={IY:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
ZI:function(a,b){a.splice(0,b)},
pW:function(a){a.reverse()}};

function fastDownload(a){var b=String.prototype.split.call(a,""),c=[652979901,-1780475225,1711078E3,-249466182,b,-1446668274,-1198553717,b,-175720007,-1646023053,561476332,-753990754,275000702,function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
null,null,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
"join",function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
511644037,function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
null,-732490403,function(d,e){e.push(d)},
-1927300630,b,function(d,e,f,h,l,m,n,p,q,r,t,u,y){return d(l,m,n,p,q,r,t,u,y)},
-183297963,-1773586903,599294589,814911450,-1258560567,1062557317,985937827,-1458083121,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
343377025,"{(/},\\",378446692,"try",function(d,e,f,h,l){return e(f,h,l)},
762952957,1485958443,199860190,-899259244,-1526147868,-295804091,848576436,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
function(d,e,f){var h=f.length;e.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},d.split(""))},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
819322963,-2105625702,1374081403,1514623107,-256388535,-1514721548,-1878881612,-2126273573,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
1639991720,1049375924,-447095215,"join",function(d,e,f,h,l,m){return e(h,l,m)},
-1415176798,function(d){d.reverse()},
347436690,281740663,1711078E3,function(d,e,f,h,l,m,n){return d(l,m,n)},
-2020376740,-453585257,488973571,-477794109];c[14]=c;c[15]=c;c[21]=c;try{try{c[1]>9?((0,c[41])((0,c[50])(c[17],c[4],(0,c[Math.pow(5,5)-9-3067])()),c[51],c[new Date("1970-01-01T10:45:58.000+10:45")/1E3],c[7]),c[67])(c[7]):(0,c[41])((0,c[41])((0,c[Math.pow(3,1)- -4508-4498])(c[7],c[new Date("1969-12-31T14:00:42.000-10:00")/1E3]),c[51],c[0],c[7-350%Math.pow(1,4)]),c[13],c[25],c[22]),c[56]!==1&&(c[27]==-8?(0,c[41])((0,c[67])(c[14]),c[50],c[17],c[-43- -68*Math.pow(1,1)],(0,c[18])()):(0,c[41])((0,c[36])(c[28],
c[21]),c[52],c[31],c[54])),c[54]<=10&&(0,c[24])(c[69],(0,c[39])((0,c[21])(c[Math.pow(8,4)+100-4169],c[75*Math.pow(6,2)+-2688]),c[48],c[38],c[2],(0,c[16])())^(0,c[34])(c[52],c[12]),(0,c[51])(c[63],c[4]),(0,c[20])(c[47760+Math.pow(7,3)+-48088],c[0]),c[35],(0,c[35])(c[15],c[69]),(0,c[8])(c[64],c[34]),(0,c[6])(c[new Date("1969-12-31T21:15:29.000-02:45")/1E3],c[57]),c[46],c[-179+243%Math.pow(4,5)]),c[65]<=5&&(c[44]>=4?(0,c[48])((0,c[30])(c[10],c[221-199%Math.pow(8,4)])>>(0,c[42])(c[28],c[12]),c[45],c[59],
c[2],(0,c[11])()):(0,c[36])(((0,c[45])(c[258%Math.pow(5,3)- -27],c[Math.pow(3,4)+30-109],(0,c[11])()),c[46])(c[1],c[20]),c[30],c[10],c[57])),c[66]!==9&&(c[74]>9||((((((((0,c[36])((0,c[30])(c[10],c[3]),c[30],c[20],c[73]),c[15])(c[16],c[69]),c[45])(c[35],c[77],(0,c[44])()),c[60])((0,c[30])(c[20],c[25]),c[62],(0,c[67])(c[8],(0,c[55])(c[77]),(0,c[45])(c[12],c[20],(0,c[11])()),(0,c[46])(c[24],c[9]),c[9],c[43]),c[9]),c[36])((0,c[31])(c[48],c[9])-(0,c[46])(c[51],c[2]),c[62],c[20]),c[36])((0,c[55])(c[9]),
c[45],c[35],c[2],(0,c[11])()),(0,c[46])(c[7],c[2]),c[45])(c[12],c[20],(0,c[44])()),0))&&(((((((0,c[150+Math.pow(2,4)-111])(c[388-Math.pow(2,3)+-378]),c[8])(c[16],c[26]),(0,c[8])(c[0],c[61]),((0,c[36])((0,c[31])(c[new Date("1969-12-31T21:15:47.000-02:45")/1E3],c[56]),c[20],c[63]),c[74])(c[65],c[59]),c[20])(c[13],c[72]),c[60])(c[62],c[71]),c[5])(c[66],c[62]),c[0])(c[10],c[57]),(0,c[59])((0,c[38])(c[new Date("1970-01-01T01:00:43.000+01:00")/1E3],c[10]),c[69],c[-156198+Math.pow(5,5)*50],c[25]),(0,c[69])(c[77],
c[43]),c[12])(c[53],(0,c[31])(c[25],c[63]),(0,c[0])(c[22]),(0,c[69])(c[51],c[43]),c[33],c[29]),c[41]>-7&&(c[8]>-5||((((0,c[68])(c[69]),(0,c[59])(c[17],c[15]),(0,c[58])(c[72],c[12],(0,c[26])()),c[59])(c[63],c[29]),c[75])(c[33]),0))&&(((0,c[75])(c[15]),c[73])((0,c[43])(c[69],c[65]),c[26],(0,c[new Date("1970-01-01T09:45:42.000+09:45")/1E3])(c[4],c[21]),c[60],c[14]),c[18])(c[35],c[52])}catch(d){(0,c[8])((((((0,c[17])(c[7],c[49],(0,c[61])()),c[58])(c[new Date("1970-01-01T03:00:52.000+03:00")/1E3],c[40]),
c[27])(c[49]),c[18])(c[6],c[66]),c[17])(c[62],c[70],(0,c[16])()),c[65],c[70],c[10])}finally{(c[35]<=-5||((0,c[3])(c[47],c[70]),0))&&(0,c[17])(c[31],c[52],(0,c[61])())}}catch(d){return"enhanced_except_3ZsBouT-_w8_"+a}return b.join("")};