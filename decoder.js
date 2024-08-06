const gma = /^[\w.]*$/
const signatureTimestamp = 19940

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
	const url = orgaCompose(m.AE,m.VH,m.s)
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
	a={pZ:!1,AE:"",VH:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.pZ=!0;
a.AE=b.url;
a.VH=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
KK.pU(a,4);
KK.pU(a,56);
KK.ND(a,3);
KK.CO(a,40);
KK.pU(a,4);
KK.ND(a,3);
KK.CO(a,78);
KK.ND(a,1);
KK.pU(a,20);
return a.join("")
}

var KK={CO:function(a){a.reverse()},
ND:function(a,b){a.splice(0,b)},
pU:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[1320573733,";\\/,/",1014352504,-2034557877,-1137274623,-1933288580,b,-301116633,1685604746,function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
1947582304,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
b,-2053088716,1380224325,b,null,-2017468187,-1939267799,1984792402,1971068973,235386878,"nisbzE",-1965850957,null,1685604746,42650333,-1093348808,-1161730148,-2084761610,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-10380541,9351948,-321346766,1536401993,512464245,-2100634666,2058598012,'}([;"]',1746282632,-264453957,-118269692,-2019825809,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
1554800141,-1197182765,351901870,-576501248,1753302742,-336634069,1898136476,-1356945151,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-1258346830,null,-10380541,function(d,e,f,h,l,m,n){return d(l,m,n)},
-1662196246,1898136476,function(d){d.reverse()},
function(d,e,f,h,l){return e(f,h,l)},
-196712202,769698828,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
-1622569915,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e,f){var h=f.length;e.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},d.split(""))},
-967388532,96554439,function(d,e){d.push(e)},
1679174076,846243240,543530532,450771594,241337821,1243641082,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
602070123,121098536,319979071,1265233502,1039169954,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
1223385479];c[17]=c;c[25]=c;c[55]=c;try{try{c[58]<=-10&&(c[83]>=Math.pow(6,5)+12840+-20609?(((0,c[10])(c[13],c[29]),c[9])(c[21],c[6]),c[44])(c[6],c[new Date("1970-01-01T03:30:14.000+03:30")/1E3]):((0,c[78])(c[35],c[16]),(0,c[65])(c[49],c[new Date("1969-12-31T12:30:16.000-11:30")/1E3]),c[65])(c[77],c[6])),c[46]>=3&&((0,c[23184+Math.pow(3,3)+-23143])(c[23],c[13],(0,c[67])())%(0,c[60])(c[13]),"false")||(0,c[61])((0,c[10])(c[13],c[3]),c[9],c[83],c[25]),c[77]>-5&&(c[5]!=-68*Math.pow(3,1)+211?(0,c[78])(c[58],
c[25]):(0,c[37])(c[60],c[71])),c[85]!=3&&(((0,c[68])(c[83],c[9]),((0,c[33])((0,c[50])(c[85],c[64]),c[40],c[81],c[64],(0,c[70])()),c[50])(c[13],c[new Date("1969-12-31T20:31:04.000-03:30")/1E3]),c[Math.pow(6,4)%329+-241])(c[83],c[2]),c[37])(c[34],c[new Date("1969-12-31T20:01:11.000-04:00")/1E3]),c[26]<7&&(c[61]<3||((0,c[-12402-Math.pow(4,3)+12469])(((0,c[40])(c[81],c[71],(0,c[39])()),c[50])(c[8],c[83]),c[33],(0,c[33])((0,c[56])(c[75]),c[40],c[Math.pow(5,2)%58+56],c[-127*Math.pow(2,4)- -2106],(0,c[70])()),
c[50],c[22],c[83]),0))&&((0,c[16])(c[74],c[66])^(0,c[68])(c[64],c[51]),((0,c[32])(c[83]),c[69])(c[58],c[75]),c[51])(c[38],c[74]),c[75]>=-9&&(c[58]>=1||((0,c[54])(c[48],c[new Date("1970-01-01T02:30:08.000+02:30")/1E3]),0))&&(0,c[84])(c[35],c[50]),c[52]>=-5&&(c[33]<=5?(0,c[53])(c[47],c[59]):(0,c[81])(c[40],c[50],(0,c[82])()))}catch(d){(0,c[3])(c[50]),(((0,c[3])(c[38]),c[81])(c[40],c[47],(0,c[85])()),c[81])(c[-40920- -10*Math.pow(8,4)],c[47],(0,c[51])()),(0,c[2])(((0,c[84])(c[80],c[57]),c[54])(c[29],
c[8]),c[54],c[76],c[38])}try{c[52]===-8&&((0,c[81])(c[40],c[50],(0,c[82])()),1)||(0,c[71])(c[30],c[50]),c[64]>=-1&&(0,c[54])(c[16],c[38]),c[9]<-4&&(0,c[Math.pow(4,4)%84- -74])(c[8],c[49]),c[69]!==10&&(c[14]>=3?((((0,c[53])(c[-2779-Math.pow(5,2)*-113],c[17]),c[19])(c[8],c[43]),c[51])(c[3],c[27]),(((0,c[64])(c[1],c[30]),c[70])(c[26]),c[52])(c[33],c[56]),c[41])(c[49]):(0,c[17])((0,c[13])(c[22],(0,c[22])(c[62],c[59]),(0,c[17])((0,c[25])(c[66],c[59],(0,c[55])()),c[22],c[23],c[56])|(0,c[Math.pow(3,1)%480-
-19])(c[37],c[59]),(0,c[0])(c[59],c[14]),c[new Date("1970-01-01T01:15:42.000+01:15")/1E3],c[49]),c[25],c[66],c[59],(0,c[55])())),(c[84]>=4||((0,c[52])(c[54],c[60]),""))&&(0,c[16])(c[56]),(0,c[25])(c[66],c[86],(0,c[9])()),(0,c[53])(c[49],c[67])}catch(d){c[14]!=5&&(c[33]===8&&(((0,c[52])(c[10],c[11]),c[25])(c[66],c[59],(0,c[24])()),1)||(0,c[17])((0,c[35])(c[86],c[59]),c[53],c[59],c[4])),c[1]<-5&&(c[63]>-1&&((0,c[17])((0,c[41])(c[56]),c[52],c[8],c[11]),1)||(0,c[52])(c[32],c[49])*(0,c[22])(c[61],c[56]))}finally{c[5]!==
10&&(c[new Date("1970-01-01T01:45:48.000+01:45")/1E3]>5?(0,c[13])(c[25],(0,c[22])(c[27],c[59]),(((0,c[22])(c[38],c[60]),c[52])(c[12],c[59]),c[43])(c[56],c[50]),((0,c[25])(c[66],c[49],(0,c[55])()),c[41])(c[49]),c[66],c[59],(0,c[55])()):(((0,c[17])((0,c[35])(c[57],c[59]),c[52],c[26],c[59]),c[52])(c[65],c[60]),(0,c[35])(c[0],c[11]),(0,c[37])(c[82],c[13]),c[37])(c[82],c[78])^(0,c[37])(c[82],c[15]))}}catch(d){return"enhanced_except_5JsBm-T-_w8_"+a}return b.join("")};