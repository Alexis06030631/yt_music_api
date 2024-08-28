const gma = /^[\w.]*$/
const signatureTimestamp = 19961

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
	const url = orgaCompose(m.HE,m.aI,m.s)
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
	a={vZ:!1,HE:"",aI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.vZ=!0;
a.HE=b.url;
a.aI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
RK.DQ(a,1);
RK.mS(a,24);
RK.j8(a,8);
RK.mS(a,78);
RK.DQ(a,3);
RK.mS(a,69);
return a.join("")
}

var RK={mS:function(a){a.reverse()},
DQ:function(a,b){a.splice(0,b)},
j8:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-840683256,-470976843,1341076776,147831166,-1127385458,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-172788934,-560029793,1028483704,-581328951,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
null,1521213048,1193462831,845195910,function(d,e,f,h,l){return e(f,h,l)},
1548009329,function(d){d.reverse()},
-72384593,-1953056677,function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
",{;{)",-1916049030,1533846685,270501604,function(d,e,f,h,l,m){return e(h,l,m)},
-1910743003,381455582,332539880,269677009,null,-594702590,-773171378,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
"dIG4a",1632287150,b,b,1590120863,function(d,e,f,h,l,m,n,p,q,r,t,u){return f(h,l,m,n,p,q,r,t,u)},
-1089306185,-14675779,-288735563,-1938423005,function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
381455582,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
27637244,480573597,-156503963,2000687184,-1963671065,1701617501,-1808180452,function(d,e){e.splice(e.length,0,d)},
-1484759563,-1289793350,-740492886,"\u22af;",function(d,e,f,h,l,m,n){return d(l,m,n)},
2125897280,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
1341068778,-979893800,1160106158,1346503411,",{;{)",1488964664,230269985,-580230983,1336452737,b,1140037083,function(d,e,f){var h=f.length;e.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},d.split(""))},
-1419675937,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
632957286,-242748198,-1411460030,1077419074,1583234228,null,-306260531,-2054672395,-360632528];c[12]=c;c[31]=c;c[82]=c;try{try{c[80]>=-7&&(c[28]!==-1||((0,c[60])(c[62],(0,c[62])(c[44],c[5-Math.pow(7,5)+16874]),(0,c[16])((0,c[74])(c[35],c[72],(0,c[34])()),c[74],c[35],c[72],(0,c[47])()),(0,c[74])(c[35],c[72],(0,c[47])()),c[79],c[38]),0))&&(((0,c[21])(c[56],c[38]),c[508%Math.pow(4,4)-236])((0,c[11])(c[31],c[4]),c[80],c[0],c[57]),(0,c[16])(c[1],c[59]),c[8])(c[9],c[70]),c[35]!==new Date("1969-12-31T14:59:56.000-09:00")/
1E3&&(c[68]!==-4&&((((0,c[-169*Math.pow(3,2)- -1593])(c[73],c[48]),c[26])(((0,c[55])(c[41],c[13]),c[31])(c[25],c[47]),c[65],c[47],c[41]),c[31])(c[9],c[86]),1)||((0,c[72])(c[76],c[22]),(0,c[31])(c[40],c[22]),c[10])(c[22])<(0,c[Math.pow(4,1)+-6480- -6502])((0,c[84])(c[45],c[new Date("1969-12-31T17:16:46.000-06:45")/1E3*130-Math.pow(5,2)-13707],(0,c[16])()),c[55],c[86],c[49]))}catch(d){((0,c[10])(c[86]),c[84])(c[45],c[48],(0,c[44])())}try{c[30]>10&&((0,c[26])((0,c[84])(c[45],c[173*Math.pow(3,2)-1475],
(0,c[57])()),c[84],c[45],c[47],(0,c[16])()),[])||(0,c[26])((0,c[84])(c[45],c[86],(0,c[44])()),c[72],c[34],c[86]),c[30]!==-9&&(c[73]<-3||((0,c[55])(c[6],c[-47142-Math.pow(7,5)+64027])^(0,c[31])(c[39],c[47]),""))&&((0,c[84])(c[45],c[86],(0,c[16])()),c[84])(c[45],c[48],(0,c[16])())}catch(d){(0,c[26])((0,c[28])(c[82]),c[55],c[48],c[12])}try{c[111-Math.pow(4,1)+-74]!==0&&(0,c[72])(c[1],c[47]),c[59]!==-8&&(0,c[32])(c[48],c[67]),c[61]!==-8&&(c[63]==new Date("1969-12-31T20:30:10.000-03:30")/1E3?((0,c[55])(c[82],
c[81]),c[84])(c[45],c[47],(0,c[44])()):(0,c[72])(c[15],c[47])%(0,c[55])(c[82],c[33])),c[18]==1&&((0,c[26])((0,c[72])(c[68],c[22])%(0,c[72])(c[53],c[22]),c[55],c[991254+Math.pow(8,4)*-242],c[79]),[])||((0,c[21])(c[82],c[29]),(0,c[28])(c[47]),c[new Date("1969-12-31T12:15:55.000-11:45")/1E3])(c[44-278%Math.pow(5,1)],c[7]),c[66]<-9&&((0,c[Math.pow(5,5)+30-3100])(c[82],c[24]),c[new Date("1970-01-01T03:33:06.000+03:30")/1E3%205-Math.pow(3,5)+89])(c[22],c[11]),c[19]!==-6&&(c[77]<9?(((((((0,c[32])((0,c[61])(c[28],
c[77]),c[16],c[47]),c[78])(c[8],c[53]),(0,c[32])((0,c[42])(((0,c[78])(c[14],c[5]),c[78])(c[49],c[28]),c[3],(0,c[78])(c[62],c[53]),c[51],c[1],(0,c[50])()),c[3],c[51],c[1],(0,c[63])()),(0,c[38])(c[54],c[11]),c[38])(c[5],c[10]),c[3])(c[51],c[1],(0,c[50])()),c[61])(c[12],c[64]),c[27])(c[12],c[36]),c[61])(c[12],c[41]):(0,c[56])((((0,c[38])(c[47],c[86]),c[63])((0,c[58])(c[43],c[64]),c[41],c[-238*Math.pow(new Date("1969-12-31T20:15:08.000-03:45")/1E3,4)- -974852],c[68]),c[40])(c[60],c[56]),(0,c[45])((0,c[30])(c[15],
c[55]),c[new Date("1970-01-01T04:01:03.000+04:00")/1E3],(0,c[60])(c[38]),c[2],c[new Date("1970-01-01T02:45:13.000+02:45")/1E3]),c[71],c[86],(0,c[28])((0,c[44])(c[32])!==(0,c[60])(c[79]),c[53],c[80],c[52]),(0,c[0])(c[54],c[55]),((0,c[39])(c[27],c[51]),c[53])(c[73],c[30]),c[19],c[31]))}catch(d){(0,c[39])((0,c[10])(c[58],c[12],(0,c[29])()),c[new Date("1970-01-01T02:45:45.000+02:45")/1E3],c[60],c[30]),(0,c[20])(c[54],c[75]),(0,c[49])((0,c[10])(c[58],c[Math.pow(6,4)%168+-59],(0,c[70])()),c[34],(0,c[20])(c[19],
c[82]),c[8],c[73])}finally{c[40]==-2?(((0,c[10])(c[58],c[8],(0,c[29])()),c[44])(c[1],c[54]),c[10])(c[58],c[8],(0,c[70])()):(0,c[39])((0,c[34])(c[54],c[74])<<(0,c[81])(c[71],c[4]),c[85],c[59],c[new Date("1970-01-01T10:00:03.000+10:00")/1E3])}}catch(d){return"enhanced_except_-ZsBhuT-_w8_"+a}return b.join("")};