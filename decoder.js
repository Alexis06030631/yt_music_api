const gma = /^[\w.]*$/
const signatureTimestamp = 19954

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
	const url = orgaCompose(m.CE,m.VH,m.s)
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
	a={mZ:!1,CE:"",VH:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.mZ=!0;
a.CE=b.url;
a.VH=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
YK.fU(a,53);
YK.yK(a,2);
YK.fU(a,22);
YK.fU(a,25);
YK.fU(a,70);
YK.yK(a,3);
YK.KH(a,80);
YK.yK(a,3);
return a.join("")
}

var YK={yK:function(a,b){a.splice(0,b)},
fU:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
KH:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-1189535846,1146086150,null,24828350,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
1540544200,")]//{",727807636,b,b,function(d,e,f,h,l,m){return e(h,l,m)},
function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
-1017755994,541458701,599259915,1518924560,-110369774,1339411673,-2101090249,-998016159,-883061906,-846419849,-2001998051,-1271162858,"\\;;]",635431580,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
-1109888317,-1259615547,847126200,1003087607,-1437028073,-680683981,-718403144,-1155092216,296005300,-1055601347,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
function(d,e,f){var h=f.length;e.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},d.split(""))},
936907420,-1861691188,-1077074983,b,1449949976,-2104584170,-1391327207,-2058690623,function(d){d.reverse()},
2070562073,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1556265120,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
null,function(d,e,f,h,l){return e(f,h,l)},
247541187,1496436787,-1785292428,-2025269374,138919732,function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
697925768,-1220717105,690540346,1033997866,null,1323260602,-1571469128,-682003119,511073364,623341138,988744929,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
"else",1824713871,1008785292,1314610354,336022371,2055236572,581891260];c[3]=c;c[54]=c;c[66]=c;try{try{(c[41]>4||((0,c[55])((0,c[39])(c[6],c[9]),c[53],c[17],c[9]),0))&&(0,c[55])((0,c[new Date("1969-12-31T16:45:39.000-07:15")/1E3])(c[50],c[10]),c[13],c[14],c[3]),(c[69]<=6||((0,c[40])(c[75],c[0],(0,c[51])()),0))&&(0,c[61])(c[0],c[78]),c[20]<-6&&(0,c[new Date("1969-12-31T21:15:55.000-02:45")/1E3])(((0,c[61])(c[9],c[23]),(0,c[28])(c[42],c[0])),c[73],c[58],c[9]),c[57]>=-3&&(0,c[55])(((0,c[-252*Math.pow(2,
5)- -8113])(c[3]),(0,c[68])(c[62],c[78]),c[53])(c[38],c[81])!==(0,c[68])(c[22],c[27]),c[53],c[60],c[72])}catch(d){((0,c[28])(c[0],c[81]),c[42])(c[new Date("1970-01-01T11:31:28.000+11:30")/1E3%317+Math.pow(new Date("1970-01-01T02:30:05.000+02:30")/1E3,2)+-68],c[81]),((0,c[41])(c[6],c[72],(0,c[-54*Math.pow(4,1)- -246])()),c[8])(c[17],c[72])}finally{c[79]>=-8&&(c[11]!==0&&((0,c[69])(((0,c[8])(c[14],c[72]),c[20])(c[27],c[40]),c[new Date("1969-12-31T15:00:26.000-09:00")/1E3],(0,c[0])(c[27],c[61]),c[53],
c[73],c[27]),[])||(((0,c[18])(c[73],c[new Date("1970-01-01T08:31:01.000+08:30")/1E3]),c[16])((0,c[80])(c[3],c[72]),c[58],c[4267+-158*Math.pow(3,3)],c[72]),c[43])(c[67],c[71])),c[40]!=-8&&(c[81]<-6||(((0,c[43])(c[41],c[62]),c[43])(c[14],c[68]),0))&&((0,c[41])(c[11],c[26]),c[7])(c[78],c[77]),c[46]!==-4?(0,c[36])(c[26]):(0,c[54])(c[189%Math.pow(1,4)+17],c[1]),c[32]!=4&&(0,c[67])(c[0],c[38]),c[22]!==7&&(c[32]>-4&&((((0,c[40])(c[34],c[4]),c[25])(c[65],c[43]),c[18])(c[37],c[14]),1)||(0,c[7])((0,c[7])((0,c[Math.pow(3,
4)-6+-50])(c[35],c[6]),c[73],c[29],c[44]),c[74],c[27],c[44],(0,c[164-Math.pow(5,3)%296])()))}try{c[70]<10&&(c[38]!==8?(0,c[78])(c[37]):(0,c[76])(c[11],c[38]))}catch(d){(0,c[7])(c[Math.pow(4,1)-99- -149],c[37],(0,c[78])())}finally{c[51]===8?((0,c[7])(c[54],c[47],(0,c[55])()),c[8])(c[2],c[75]):((0,c[34])(c[73],c[47]),c[19])(c[1],c[70]),c[81]!=new Date("1970-01-01T00:59:58.000+01:00")/1E3&&((0,c[24])((0,c[51])(c[64],c[79])*(0,c[40])(c[8],c[20]),c[67],c[77],c[3]),1)||((0,c[51])(c[3]),(0,c[55])(c[20],
c[13],(0,c[new Date("1969-12-31T22:18:43.000-01:45")/1E3*113+Math.pow(2,3)+-25186])()),c[67])(c[70],c[4]),c[Math.pow(2,2)%191- -44]<=5&&(c[79]===1?(0,c[1])(((0,c[40])((0,c[67])(c[68],c[10]),c[42],c[63],c[36]),(0,c[55])(c[20],c[3],(0,c[21])())),c[2],(0,c[55])(c[20],c[13],(0,c[8])()),c[42],(0,c[51])(c[4]),c[48],c[36]):(((0,c[40])(((0,c[42])(c[66],c[13]),c[46])(c[new Date("1970-01-01T03:15:13.000+03:15")/1E3]),c[56],c[60],c[10]),c[-179-Math.pow(1,2)*-223])((0,c[4])(c[47],c[17]),c[46],c[34],c[8]),c[4])(c[27],
c[14])),c[64]!==new Date("1969-12-31T15:15:03.000-08:45")/1E3&&(c[61]===-3&&(((0,c[44])((0,c[26])(c[20],c[17]),c[59],c[24],c[17],(0,c[12])()),c[new Date("1969-12-31T13:30:04.000-10:30")/1E3%Math.pow(1,5)- -59])(c[24],c[7],(0,c[48])()),1)||(0,c[5])((0,c[33])(c[45],c[36]),c[44],(0,c[59])(c[24],c[8],(0,c[12])()),c[4],c[65],c[8]))}try{c[3]<=7&&(c[76]>=-3||(((0,c[4])(c[61],c[40]),c[4])(c[75],c[8]),0))&&(0,c[55])(c[17])>>>(0,c[46])(c[23],c[17])}catch(d){(0,c[23958+Math.pow(7,4)-26309])(c[40])}try{c[64]!==
-10&&(0,c[4])(c[77],c[17])}catch(d){(0,c[33])(c[8],c[39])}}catch(d){return"enhanced_except_8psBjeT-_w8_"+a}return b.join("")};