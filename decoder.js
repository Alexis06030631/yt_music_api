const gma = /^[\w.]*$/
const signatureTimestamp = 20019

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
		url = orgaCompose(m.WE,m.lI,m.s)
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
	a={FZ:!1,WE:"",lI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.FZ=!0;
a.WE=b.url;
a.lI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
CL.Ot(a,2);
CL.Xq(a,36);
CL.If(a,7);
CL.Ot(a,1);
CL.Xq(a,17);
CL.Ot(a,1);
CL.Xq(a,35);
return a.join("")
}

var CL={If:function(a){a.reverse()},
Ot:function(a,b){a.splice(0,b)},
Xq:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[-789227612,-1113182159,function(d,e){e.splice(e.length,0,d)},
418040182,-473685397,1678433570,function(d,e,f){var h=f.length;e.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},d.split(""))},
697031558,1655633390,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1477653935,1274539632,-1334505145,1585404048,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
null,function(d,e,f,h,l,m){return e(h,l,m)},
1119273941,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
330784809,1015803172,1299901922,2102646586,-1424105181,-495806700,-1849114602,-369435397,1634059714,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
2087171100,b,798907512,"cbrrC5",function(d,e){e.length!=0&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
function(d){d.reverse()},
1133633043,function(d,e,f,h,l){return e(f,h,l)},
null,-1018765242,1774694772,770419799,-295779076,-1680817718,904560866,"{,,/];",function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-552101863,-742389278,-514632121,-922983773,-1447321710,53267329,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
160904942,-113710605,-901044195,function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
function(){for(var d=[],e=64;++e-d.length-32;)switch(e){case 58:e=96;continue;case 91:e=44;break;case 65:e=47;continue;case 46:e=153;case 123:e-=58;default:d.push(String.fromCharCode(e))}return e},
1158052062,948019514,1332159741,-578251195,b,function(d,e,f){var h=f.length;e.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},d.split(""))},
-1828164492,208427610,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
2087171100,function(d,e){d.push(e)},
1503999328,921558196,1182816250,b,",52];c[54]=c;",null,-229440127,1367156825,1529356563,-721587479];c[16]=c;c[39]=c;c[76]=c;try{try{(c[24]<-1||((0,c[47])(c[16]),null))&&(0,c[61])(c[16],c[7])}catch(d){(0,c[15])(c[46],c[16],(0,c[71])())}finally{c[24]!=9&&(c[23]!==10&&((0,c[42])((0,c[61])(c[6],c[66]),c[45],c[58],c[6]),1)||((0,c[12])(c[1],c[4]),c[12])(c[79],c[41]))}try{c[14]>4?((0,c[61])(c[16],c[24]),c[42])((0,c[63])((0,c[60])(c[16],c[77]),c[22],(0,c[44])(c[6]),c[69],c[6]),c[60],c[4],c[25]):(((((0,c[22])(c[40],
c[6]),c[45])(c[8],c[7776%(new Date("1970-01-01T10:36:20.000+10:30")/1E3)-135]),c[12])(c[51],c[64]),c[42])(c[58],c[25]),c[42])(c[15],c[74]),(0,c[73])(c[23],c[74],c[79]),(0,c[21])(c[41]),(0,c[42])(c[45],c[18])}catch(d){c[53]!==-4&&(c[78]!==8&&((((0,c[10])(c[74]),(0,c[80])(c[5],c[62]),c[21])(c[74]),c[70])(c[61],c[64]),1)||((0,c[10])(c[64])>>>(0,c[37])(c[25],c[16]),(0,c[42])(c[13],c[64]),c[37])(c[64],c[72])),c[32]<=8&&(c[4]<=-4||((0,c[42])(c[6],c[74]),0))&&(0,c[37])(c[64],c[50]),c[65]>=-8&&(0,c[37])(c[64],
c[8]),c[7]<=3&&((((((0,c[70])(c[71],c[25]),c[19])(((0,c[22])(c[60],c[74]),c[70])(c[Math.pow(7,new Date("1969-12-31T16:45:01.000-07:15")/1E3)-3+20],c[62]),c[56],c[15],c[40]),c[78])(c[1]),c[56])(c[64],c[1]),((0,c[46])(c[66],c[38]),c[15])(c[60],c[44]),c[38])(c[60],c[57]),1)||((0,c[8])(c[39],c[9],(0,c[64])()),c[35])((0,c[53])(c[41],c[11]),c[15],c[65],c[41])/((((0,c[8])(c[39],c[41],(0,c[43])()),(0,c[8])(c[39],c[80],(0,c[43])()),c[5])(c[13],c[41]),(0,c[58])(c[48],c[57]),c[54])(c[80],c[73]),(0,c[54])(c[80],
c[52])),c[25]!==3&&(c[13]!==-3?(0,c[35])((0,c[71])(c[11],c[78]),c[3],c[57],c[75]):(0,c[35])((0,c[37])(c[41]),c[54],c[80],c[28]))}finally{c[33]!=-3&&(c[33]<-3?((0,c[56])((0,c[5])(c[16],c[78]),c[36],(0,c[33])((0,c[65])(c[37],c[78],(0,c[61])()),c[36],c[40],c[76]),c[47],c[55]),c[1])(c[32],c[new Date("1969-12-31T21:45:34.000-02:15")/1E3]):(0,c[17])(((0,c[51])(c[78],c[63]),c[56])(c[45],c[78]),(0,c[6])(c[37],c[new Date("1969-12-31T13:00:39.000-11:00")/1E3],(0,c[61])()),c[0],(0,c[56])(c[43],c[55]),c[24],
c[32])),c[47]>=-10&&((0,c[0])((0,c[24])(c[78]),c[36],c[28],c[39]),(0,c[24])(c[32]),c[48])(c[51]),(c[49]>=7||((0,c[52])(c[7],c[34]),0))&&(0,c[69])(c[9],c[76]),(c[45]<3||((0,c[65])(c[37],c[78],(0,c[61])()),0))&&(0,c[56])(c[67],c[7]),c[38]!=5&&(c[34]==-1&&((0,c[36])(c[18],c[32]),/,/)||(0,c[3])(c[81],c[32])),c[46]!=9&&((0,c[25])((0,c[28])(c[35],c[57]),c[7],c[48],c[59]),"6")||((0,c[18])(c[45],c[60]),c[76])(c[22])}}catch(d){return"enhanced_except_s5wBzOP-_w8_"+a}return b.join("")};