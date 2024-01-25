const gma = /^[\w.]*$/
const signatureTimestamp = 19745

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
	const url = orgaCompose(m.zC,m.FF,m.s)
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
	a={ZW:!1,zC:"",FF:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.ZW=!0;
a.zC=b.url;
a.FF=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
QP.rb(a,60);
QP.UV(a,1);
QP.SE(a,17);
QP.UV(a,3);
QP.SE(a,0);
QP.rb(a,5);
QP.SE(a,75);
QP.UV(a,3);
return a.join("")
}

var QP={UV:function(a,b){a.splice(0,b)},
rb:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
SE:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(""),c=[969830267,-1064223757,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
60435517,613980870,515099195,b,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
905165406,"/,)};",-1064223757,null,792846863,1925710081,-1411730935,192094972,868034284,function(d,e,f,h,l,m){return e(h,l,m)},
443109525,806663486,-1970905735,-22325417,b,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-1503367854,1620260404,1028691315,42860647,function(d,e,f,h,l){return e(f,h,l)},
function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
function(d,e){e.push(d)},
1976305213,"/}}'",-1894407359,34023286,311595090,-775149980,1779378318,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
184997359,function(d,e,f){var h=d.length;f.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},e.split(""))},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
1418307627,1307673292,1941588896,'\'"/"(,',null,-1589471364,698674406,171819214,null,"case",-1389811366,-875807932,-1332417600,1325178451,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
1914690791,-1009233368,-1290828196,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
888209661,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1258521258,function(d){d.reverse()},
-1589471364,-449011893,-838397855,'\'"/"(,',973816613,1028691315,-361842601,-1906675849,function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
1818036548,-4499648,1465581804,950736507,372419866,133779620,1981703547,-1941434781,1158132836,-854232230,b,1533143334,1127579618,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-527341799,-878460892];c[11]=c;c[47]=c;c[51]=c;try{try{-3<=c[81]&&(0>c[53]?(((0,c[74])(c[11],c[26]),c[Math.pow(8,3)+165-589])(c[51]),c[16])(c[43],c[56]):(((0,c[88])(c[12],c[68]),c[16])(c[43],c[9]),c[88])(c[71],c[39])),0!=c[-50544+Math.pow(5,3)- -50436]&&(0,c[61])(c[5],c[40]),4==c[Math.pow(4,5)-1188+204]&&((((0,c[62])((0,c[50])((0,c[49])(),c[38],c[5]),c[50],(0,c[27])(),c[38],c[68]),(0,c[50])((0,c[27])(),c[38],c[5]),c[50])((0,c[27])(),c[38],c[84]),c[88])(c[32],c[68]),1)||((0,c[83])(c[68],c[70]),((0,c[16])(c[84],
c[135-57%Math.pow(6,3)]),c[88])(c[30],c[37471+-109*Math.pow(7,3)]),(0,c[61])(c[5],c[8]),c[25])(c[5])}catch(d){(0,c[88])(c[66],c[68]),(0,c[25])(c[79]),(0,c[61])(c[39],c[36])}try{7===c[new Date("1970-01-01T06:30:45.000+06:30")/1E3]?((((((0,c[50])((0,c[29])(),c[38],c[84]),(0,c[61])(c[84],c[31]),c[50])((0,c[49])(),c[38],c[68]),c[50])((0,c[27])(),c[38],c[68]),c[33])(c[new Date("1969-12-31T20:45:39.000-03:15")/1E3],c[55]),(0,c[88])(c[86],c[84]),c[88])(c[20],c[39]),c[50])((0,c[29])(),c[38],c[84])<<(0,c[50])((0,c[49])(),
c[38],c[5]):((((((0,c[25])(c[68]),c[33])(c[39],c[4]),(0,c[56])(c[0],c[86]),c[28])(c[34],c[77]),c[41])(c[Math.pow(2,1)-22386+22426],c[52]),c[31])((0,c[19])(c[1],c[84]),c[51],(0,c[82])(c[11+Math.pow(7,4)+new Date("1969-12-31T19:20:42.000-04:00")/1E3],c[15]),c[37]),c[8])(c[2],c[67])}catch(d){(0,c[371%Math.pow(1,1)- -79])(c[77],c[83])}try{c[63]>-166+170%Math.pow(6,4)&&(-1!==c[73]&&(((0,c[43])(c[33],c[69]),(0,c[57])(c[79],c[Math.pow(8,2)+41+-101]),c[11])(c[75],c[65]),1)||(0,c[51])((0,c[1318-161*Math.pow(8,
1)])(c[31],c[50]),c[56],(0,c[11])(c[75],c[26]),c[30],c[3],c[81])),-3<c[83]&&((0,c[56])(((((0,c[56])((0,c[2])(c[75]),c[35],c[22],c[67]),c[30])(c[0],c[50]),c[68])((0,c[69])(),c[80],c[22]),c[30])(c[5],c[75]),c[30],c[64],c[50]),1)||(0,c[56])((((((0,c[11])(c[50],c[10]),c[58])(c[52],c[39]),c[68])((0,c[69])(),c[80],c[195%Math.pow(8,3)+-114]),c[35])(c[81],c[76]),c[30])(c[55],c[50]),c[11],c[50],c[42]),3!==c[7]&&((0,c[11])(c[39],c[16]),[])||(0,c[30])(c[1],c[81]),c[42]<-4-Math.pow(6,3)%213?((((((((0,c[35])(c[81],
c[77]),c[57])(c[79],c[73]),c[56])((0,c[70])(c[50]),c[85],c[50],c[46]),(0,c[56])((0,c[11])(c[50],c[71]),c[11],c[75],c[29]),c[12])(c[81]),c[new Date("1969-12-31T14:00:25.000-10:00")/1E3])(c[79]),c[80])(c[41],c[50]),(0,c[34])(c[16],c[74]),(0,c[6])(c[16],c[91]),c[19])(c[83],c[38]),c[65])(c[83],c[16]):((((0,c[66])((0,c[54])((0,c[53])(),c[42],c[8]),c[55],c[9],c[41]),c[10+Math.pow(1,4)- -55])(((0,c[54])((0,c[56])(),c[42],c[41]),c[37])(c[43],c[79]),c[54],(0,c[53])(),c[42],c[8]),c[77])((0,c[55])(c[17],c[72]),
c[54],(0,c[66])((0,c[66])((0,c[55])(c[50],c[8]),c[55],c[73],c[43]),c[65],c[8],c[63]),(0,c[88])(),c[42],c[41]),c[66])(((0,c[54])((0,c[88])(),c[42],c[8]),c[65])(c[-261+38*Math.pow(2,3)],c[89]),c[87],c[8],c[32])}catch(d){((0,c[19])(c[83],c[21]),c[18])(c[83])|(0,c[52])(c[47]),(0,c[54])((0,c[33])(),c[42],c[8])}}catch(d){return"enhanced_except_oZoB3uX-_w8_"+a}return b.join("")};