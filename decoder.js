const gma = /^[\w.]*$/
const signatureTimestamp = 19935

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
	const url = orgaCompose(m.rE,m.PH,m.s)
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
	a={aZ:!1,rE:"",PH:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.aZ=!0;
a.rE=b.url;
a.PH=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
XK.Ew(a,3);
XK.kK(a,60);
XK.PN(a,58);
XK.kK(a,54);
XK.PN(a,24);
XK.Ew(a,3);
XK.kK(a,27);
XK.PN(a,32);
XK.Ew(a,1);
return a.join("")
}

var XK={kK:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
PN:function(a){a.reverse()},
Ew:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=String.prototype.split.call(a,("","")),c=[-1495677280,-1520270422,72166128,-772555934,function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
-1771698821,985904198,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
null,1582623514,-284777091,1847869180,619017158,b,-1354947293,2061885690,902898937,-1648746587,797421461,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
null,706645971,b,1475181620,function(d,e,f,h,l,m){return e(h,l,m)},
-1040943805,-847643495,-2145812801,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-440620174,43612610,1089904135,619017158,355591197,"now",1243352632,-1481370793,"[/''",function(d,e){d.push(e)},
-993991444,-1449334351,1390143066,-1725408054,-814028965,function(d,e,f){var h=d.length;e.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},f.split(""))},
-1469933956,-1700124178,function(d,e,f,h,l,m,n){return d(l,m,n)},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-494542464,-910223302,-1946485887,-1987384734,1017133858,480209934,function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
function(d,e,f,h,l){return e(f,h,l)},
-1821688942,-1236667547,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
-1374392791,1658856574,1372624749,-154550761,-1963081034,-2012078360,-1862698684,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
227959215,null,-1504969217,-1909248399,260999742,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-1276699203,-313098115,b,function(d){d.reverse()}];
c[9]=c;c[21]=c;c[70]=c;try{try{c[12]>-8&&(0,c[56])(c[14],c[37]),(0,c[78])(c[34]),(0,c[5])(c[72],c[77]),(0,c[5])(c[59],c[70])}catch(d){}try{c[27]!=-5&&(c[0]==7&&((0,c[5])(c[36],c[77]),1)||(0,c[68])(c[27],c[23])),c[52]<new Date("1970-01-01T08:59:59.000+09:00")/1E3&&(c[17]===Math.pow(8,4)- -14238-18332&&((0,c[57])((0,c[new Date("1969-12-31T15:00:57.000-09:00")/1E3])((0,c[57])((0,c[45])((0,c[74])(),c[23],c[35]),c[20],c[77]),c[5],c[22],c[9]),c[5],c[24],c[23])|(0,c[5])(c[47],c[14]),"NaN")||(0,c[25])((0,c[20])(c[9]),
c[22],(0,c[new Date("1970-01-01T09:45:21.000+09:45")/1E3])((0,c[22])(c[64],c[72])|(0,c[18])(c[63],c[57]),c[14],c[13]),c[65],c[44])),(c[62]<-7||((0,c[22])(((0,c[49])(c[51],c[42]),c[49])(c[34],c[42]),c[33],c[19],c[67]),0))&&(0,c[22])((0,c[22])((0,c[4])(c[65],c[15]),c[-920+Math.pow(4,2)+937],c[new Date("1970-01-01T02:45:32.000+02:45")/1E3],c[65]),c[4],c[78],c[56]),(c[34]===-15357- -240*Math.pow(4,3)||((0,c[58])((0,c[40])(c[9],c[61]),c[69],c[59],c[78]),0))&&(0,c[58])((0,c[46])((0,c[50])(),c[23],c[52]),
c[5],c[16],c[78]),(c[41]!==7||((((0,c[49])(c[46],(0,c[5])(c[65],c[23]),(0,c[5])(c[35],c[14]),(0,c[5])(c[43],c[71]),(0,c[8])(),c[14],c[52]),c[5])(c[42],c[23]),c[61])(c[8855+Math.pow(1,3)-8792],c[21]),void 0))&&((((0,c[4])(c[21],c[12]),c[80])(c[63],c[21]),((0,c[40])(c[4],c[49]),c[3])(c[6]),c[64])(c[36],c[54]),c[65])(c[7])}catch(d){(0,c[36])((0,c[37])(c[4],c[58]),c[48],(0,c[5])(),c[80],c[42]),(0,c[new Date("1970-01-01T03:00:48.000+03:00")/1E3])((0,c[-3754+Math.pow(7,2)*77])(),c[71],c[42]),(0,c[9])(c[71],
c[12]),(0,c[8])(c[18],c[4])}try{c[84-Math.pow(1,5)-21]>=-4&&(0,c[69])((0,c[14])(c[77],c[4]),c[25],(0,c[47])(c[2],c[78]),c[Math.pow(7,2)-129- -82]),(c[10]!=-2||((0,c[34])((((0,c[61])(c[54],c[4]),(0,c[22])((0,c[5])(),c[6],c[28]),c[22])((0,c[51])(),c[6],c[28]),(0,c[22])((0,c[5])(),c[71],c[28]),c[22])((0,c[26])(),c[54],c[28])^(0,c[55])(c[78]),c[55],c[6]),NaN))&&(((0,c[1])((0,c[62])(c[38],c[54]),c[16],(0,c[34])((0,c[new Date("1970-01-01T02:30:33.000+02:30")/1E3])(c[new Date("1970-01-01T06:00:47.000+06:00")/
1E3],c[76]),c[56],c[59],c[66]),c[54],c[71]),c[65])(c[35]),c[59])((0,c[60])(c[39],c[76]),c[60],c[39],c[new Date("1970-01-01T02:46:13.000+02:45")/1E3])}catch(d){(0,c[71])((0,c[28])(),c[6],c[65]),(0,c[60])(c[22],c[33])}finally{c[54]!==-9&&((0,c[32])(c[22],c[70]),c[68])(c[60],(0,c[38])(c[27]),(0,c[49])(c[75],c[56]),(0,c[21])(c[42],c[77]),c[75],c[55])}try{c[34]!=new Date("1969-12-31T21:29:50.000-02:30")/1E3&&(c[19]>2&&((0,c[-42*Math.pow(6,4)- -54453])(c[54],c[79]),(0,c[21])(c[42],c[63]),1)||((0,c[49])(c[Math.pow(3,
2)+116-50],c[68]),c[50])(c[9],c[35]))}catch(d){(0,c[50])(c[76],c[75])}try{c[58]!==new Date("1970-01-01T09:44:57.000+09:45")/1E3&&((0,c[50])(c[78],c[42]),[])||(0,c[10])((0,c[53])(),c[75],c[16]),(c[81]!=-8||((0,c[22])((0,c[22])((0,c[50])(c[36],c[59]),c[50],c[41],c[36504+Math.pow(3,4)-36510]),c[10],(0,c[53])(),c[42],c[16])&(0,c[43])(c[66]),""))&&((((0,c[10])((0,c[53])(),c[75],c[16]),c[49])(c[75],c[38]),c[49])(c[75],c[18]),c[21])(c[59],c[31])}catch(d){((0,c[10])((0,c[53])(),c[59],c[16]),c[10])((0,c[14])(),
c[75],c[16])}}catch(d){return"enhanced_except_35sBoOT-_w8_"+a}return Array.prototype.join.call(b,("",""))};