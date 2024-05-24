const gma = /^[\w.]*$/
const signatureTimestamp = 19865

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
	const url = orgaCompose(m.GD,m.ZG,m.s)
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
	a={yY:!1,GD:"",ZG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.yY=!0;
a.GD=b.url;
a.ZG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
XO.yN(a,50);
XO.oA(a,80);
XO.yN(a,37);
XO.yN(a,49);
XO.oA(a,40);
return a.join("")
}

var XO={z4:function(a,b){a.splice(0,b)},
oA:function(a){a.reverse()},
yN:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(""),c=[1108863906,-1733561243,"kfkEqg",419327910,-1669764341,1510289788,-1982361624,1453057359,1975367196,b,1808155305,function(d,e){if(0!=e.length){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
1974202921,432395717,1208277640,647605133,974189700,1644629684,function(d,e,f,h,l,m,n,p,q,r,t){return n(q,r,t)},
function(d){d.reverse()},
396656389,-1502260868,-1619570854,b,689417321,-2012720271,778028377,1976642935,975808692,-710721658,-1746452985,959009269,259970681,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-465645301,-228843156,1808155305,b,1974202921,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
-668920461,-1037521427,-1823117068,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
function(d,e){e.push(d)},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-1083594912,function(d,e,f){var h=e.length;f.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},d.split(""))},
null,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
1262023867,1774683801,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1777523327,896423707,136943258,null,1213613657,"}\\[,(",-818245785,1180931815,null,function(d,e){d.splice(d.length,0,e)},
-2126224382,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
-1789872076,2041690433,function(d,e,f,h,l,m){return e(h,l,m)},
-355225255,function(d,e,f,h,l){return e(f,h,l)},
function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
-1763314859,515524458,1488409602,-2072820881,-1951651119,-994101297,-1949797096,-743428033,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
"',;)",-1176448360,-1865183696];c[48]=c;c[56]=c;c[61]=c;try{try{-10<=c[22]?(0,c[70])(c[56],c[16]):(0,c[64])(c[76],c[56]),(0,c[39])(c[18],c[9]),(0,c[64])((0,c[6])(c[24],c[51]),c[14],c[4])}catch(d){7<=c[16]?(0,c[64])(((0,c[14])(c[18]),c[65])(c[32],c[12]),c[40],c[43]):((0,c[Math.pow(6,2)%8- -60])((0,c[65])(c[56],c[50]),c[59],c[-52*Math.pow(1,5)+93],c[56]),c[65])(c[0]),-3<=c[new Date("1969-12-31T15:30:53.000-08:30")/1E3]&&(((0,c[10])(c[48],(0,c[6])(),c[69]),c[27])(c[20],c[11]),"NaN")||((0,c[34])(c[72],
(0,c[39])(),c[79]),c[36])(c[14],c[10]),-1!=c[70]&&(8!=c[8]&&((0,c[24-Math.pow(6,2)+87])(((0,c[75])((0,c[81])(c[19],c[43]),c[57],c[43],c[15]),(0,c[57])(c[43],c[18])),c[32],c[24]),(0,c[57])(c[-230*Math.pow(2,1)+470],c[9]),1)||(((0,c[36])(c[50],c[10]),c[36])(c[74],c[24]),(0,c[34])(c[72],(0,c[20])(),c[10]),(0,c[81])(c[29],c[24]),c[32])(c[43])),(1===c[-7611- -212*Math.pow(6,2)]||((0,c[51])(c[12],c[10]),0))&&(0,c[36])(c[62],c[24]),(-8>c[74]||((0,c[75])(((0,c[81])(c[65],c[Math.pow(1,2)+26676+-26653]),c[34])(c[72],
(0,c[39])(),c[79]),c[34],c[72],(0,c[53+317%Math.pow(2,4)])(),c[10]),null))&&(0,c[75])((0,c[75])((0,c[57])(c[79],c[76]),c[26],c[19],c[43]),c[15],c[51],c[16])}finally{(-2<=c[4]||(((0,c[77])(c[43],c[37]),c[66+Math.pow(1,3)%76])(c[10],c[76]),NaN))&&(0,c[49])((0,c[8])(c[46],(0,c[Math.pow(4,5)-0-1020])(),c[67]),c[25],c[20],c[67])}try{0>c[2]&&(7<=c[36]?(0,c[49])((0,c[49])((0,c[25])(c[12],c[22]),c[8],c[46],(0,c[40])(),c[53]),c[0],c[43],c[81]):(0,c[49])((0,c[49])((0,c[5])(c[23],c[7-Math.pow(7,5)+new Date("1970-01-01T07:55:22.000+03:15")/
1E3]),c[63],c[17]),c[28],c[Math.pow(4,5)+-32800+31830],c[66]))}catch(d){(0,c[73])(c[72],c[74])}finally{-1>=c[38]?((0,c[58])(c[36],c[18-Math.pow(2,4)%469]),c[58])(c[18],c[61]):(0,c[38])((0,c[79])(c[41],(0,c[83])(),c[6]),c[79],c[41],(0,c[new Date("1969-12-31T13:16:23.000-10:45")/1E3])(),c[20])}try{9>=c[1]&&(6>c[67]||((((0,c[38])((0,c[38])(((0,c[79])(c[41],(0,c[47])(),c[6]),c[79])(c[41],(0,c[74])(),c[6]),c[32],c[2],c[20]),c[77],c[35],c[20])<=(0,c[3])(c[8],c[34]),(0,c[3])(c[31],c[6]))>(0,c[59])((0,c[62])(c[66],
c[34]),c[79],(0,c[59])(((0,c[79])(c[41],(0,c[Math.pow(1,4)+new Date("1969-12-31T19:44:59.000-04:15")/1E3*197- -206])(),c[20]),c[79])(c[41],(0,c[83])(),c[6]),c[32],((0,c[38])((0,c[32])(c[53],c[70]),c[77],c[60],c[65]),(0,c[77])(c[29],c[20]),c[56])(c[20],c[45]),c[9],c[70]),c[41],(0,c[Math.pow(3,new Date("1969-12-31T17:15:01.000-06:45")/1E3)+250-179])(),c[20]),(0,c[24])(c[6]),c[Math.pow(4,4)+53+-306])(c[36],c[70]),0))&&(0,c[25])((0,c[3])(c[49],c[20]),(((0,c[32])(c[1],c[34]),c[24])(c[70]),c[80])(c[64],
c[63]),(0,c[51])(c[60],c[13]),(0,c[6])(c[29],c[77])<=(0,c[80])(c[11],c[13]),(((0,c[63])(c[33],c[1]),c[61])((0,c[9+Math.pow(2,2)+new Date("1969-12-31T14:29:58.000-09:30")/1E3])(c[65]),c[12],c[47],c[65]),c[43])(c[65],c[Math.pow(2,new Date("1970-01-01T10:00:04.000+10:00")/1E3)+107-121]),(((0,c[43])(c[Math.pow(4,5)-15+-975],c[26]),c[18])(c[21],c[77]),(0,c[22])(c[57],c[65]),c[75])(c[79]),c[67],(0,c[43])(c[65],c[82]),c[56],c[65])}catch(d){(0,c[22])(c[Math.pow(7,5)%77+21],c[Math.pow(1,4)-176+254])}}catch(d){return"enhanced_except_mZsB5uT-_w8_"+
a}return b.join("")};