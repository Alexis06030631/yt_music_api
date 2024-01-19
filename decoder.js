const gma = /^[\w.]*$/
const signatureTimestamp = 19739

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
	const url = orgaCompose(m.yC,m.BF,m.s)
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
	a={RW:!1,yC:"",BF:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.RW=!0;
a.yC=b.url;
a.BF=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
OP.GR(a,44);
OP.Fo(a,1);
OP.SK(a,75);
OP.GR(a,58);
OP.GR(a,20);
OP.Fo(a,2);
return a.join("")
}

var OP={GR:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
Fo:function(a,b){a.splice(0,b)},
SK:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(""),c=[662175290,function(d,e){d.splice(d.length,0,e)},
function(d,e){if(0!=e.length){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
-597374455,644758032,1623755725,-1637938112,1513996949,-136273392,917333024,-1206949439,295420797,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-156351387,null,-1994338937,1451996411,-85171400,"jUtJ",function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
-1130062725,-1644895,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-1062930175,-1653127929,-807007423,1692808193,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
-1314178114,function(d,e,f,h,l){return e(f,h,l)},
1725658211,-381131054,null,-1381122627,-1401562176,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-1800298874,function(d,e,f){var h=d.length;e.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},f.split(""))},
-128707419,b,-271360840,-715323139,-677491414,-1880111947,-204213621,1337251356,-1566185243,-36525965,function(d,e,f,h,l,m,n,p,q){return f(n,p,q)},
-1058836112,-1132404654,-505362847,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
2064662653,-2015952484,1456125398,-1062930175,-1197139968,-139501143,-160033754,"UETPyq2",1275278645,-36525965,function(d){throw d;},
null,b,function(d,e,f,h,l,m){return e(h,l,m)},
989858731,-1552550920,1954244896,-1099965262,1214233001,-677491414,-2118620769,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
606274792,-704361368,-1667355476,-1686310041,b,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
/(}(}'))(\/"(\/,))/,-2000044499,1156695368,-1796242797,-1923606789,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
733936790,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
432187599,"if",2059528489,/{,,{(,());/,function(d){d.reverse()},
70991209];c[14]=c;c[32]=c;c[64]=c;try{try{9!==c[25]&&(c[70]===new Date("1970-01-01T03:29:52.000+03:30")/1E3&&((0,c[48])((((0,c[37])((0,c[80])(),c[79],c[18]),c[86])(c[32]),c[27+Math.pow(8,4)%512])(c[79],c[87]),((0,c[29])((0,c[27])(c[65],c[77]),c[2],c[68],c[64]),(0,c[37])((0,c[88])(),c[65],c[60]),c[27])(c[79],c[58])/(0,c[86])(c[64]),c[27],(0,c[2])(c[34],c[65]),(0,c[66])((0,c[27])(c[14],c[46]),c[27],(0,c[27])(c[65],c[44])%(0,c[27])(c[39],c[13]),c[79],c[82]),(0,c[2])(c[84],c[79]),c[65],c[89]),1)||((((((0,c[29])((0,c[52])(c[39],
c[23]),c[93],c[64]),c[57])((0,c[14])(),c[29],c[34]),c[92])(c[16],c[80]),c[75])(c[15],c[9]),c[20])(c[Math.pow(6,2)-48608- -48587],c[51]),c[65])((0,c[75])(c[30],c[11]),c[42],c[80],c[74])>>>(0,c[18])((((0,c[82])(c[30],c[70]),c[10])(c[20],c[81]),c[90])(c[4],c[45])-(0,c[42])(c[30],c[54]),c[17],(0,c[50])(c[4],c[8]),c[110597+-108*Math.pow(4,5)],c[63])<<(0,c[13])(c[200*Math.pow(6,2)-7127],c[34])),(0,c[32])(c[16]),(0,c[66])((0,c[43])(c[56],c[69]),c[21],c[new Date("1970-01-01T11:30:56.000+11:30")/1E3],c[88])}catch(d){6==
c[4]&&((((0,c[66])(((0,c[68])(c[63],c[67]),c[68])(c[16],c[70]),c[76],c[63],c[38]),c[58])((0,c[15])(),c[56],c[35]),c[2])(c[30]),"null")||(((0,c[93])(c[54],c[new Date("1970-01-01T09:45:31.000+09:45")/1E3]),c[76])(c[168%Math.pow(6,4)-87],c[64]),(0,c[58])((0,c[73])(),c[0],c[Math.pow(2,5)- -17550-17505]),c[66])((0,c[94])(c[81],c[42]),c[68],c[30],c[71]),2>=c[17]&&(0,c[60])(((0,c[21])(c[0],c[1]),c[43])(c[56],c[new Date("1969-12-31T16:31:35.000-07:30")/1E3%Math.pow(7,3)+-50]),c[66],(0,c[9])(c[0]),c[new Date("1970-01-01T05:45:21.000+05:45")/
1E3],c[31],c[46]),9>=c[94]&&(-3>=c[-171*Math.pow(1,1)+173]&&(((0,c[92])(c[79],c[6]),((0,c[13])(c[44],c[47]),c[59])(c[47],c[74-Math.pow(5,5)%183]))*(0,c[43])((0,c[68])(),c[41],c[86]),(0,c[78])(c[72],c[15]),(0,c[78])(c[40],c[66]),1)||(((((0,c[51])((0,c[43])((0,c[68])(),c[81],c[20]),c[53],c[66],c[50]),c[43])((0,c[88])(),c[81],c[62]),c[53])(c[15],c[38]),c[78])(c[4],c[15]),c[53])(c[48],c[7]))}finally{-2===c[22]&&((((0,c[6])(c[81],c[9]),c[90])(c[81]),c[43])((0,c[58])(),c[41],c[86]),1)||((0,c[51])((0,c[61])(c[66],
c[11]),c[78],c[0],c[48]),c[61])(c[48],c[76])}try{-1!==c[-6270+Math.pow(7,3)- -5986]?(0,c[6])(c[41],c[10]):(0,c[43])((0,c[68])(),c[81],c[20]),-2<c[40]&&(((0,c[51])((0,c[14])((0,c[6])(c[0],c[75]),c[23-Math.pow(8,3)- -542],((0,c[43])((0,c[88])(),c[15],c[62]),c[53])(c[15],c[35]),c[new Date("1970-01-01T03:00:41.000+03:00")/1E3],c[70]),c[78],c[63],c[0]),((0,c[53])(c[15],c[85]),c[61])(c[16],c[44]),c[43])((0,c[68])(),c[41],c[62]),"false")||(0,c[51])(((((0,c[61])(c[0],c[25]),c[53])(c[15],c[42])<(0,c[53])(c[15],
c[92]),(0,c[78])(c[69],c[41]),c[51])((0,c[61])(c[86],c[new Date("1969-12-31T15:15:05.000-08:45")/1E3]),c[6],c[41],c[48]),c[78])(c[21],c[81]),c[83],c[81])}catch(d){(0,c[51])((0,c[Math.pow(7,2)%127+-6])((0,c[56])(),c[15],c[40]),c[53],c[41],c[18])}}catch(d){return"enhanced_except_m5oB5OX-_w8_"+a}return b.join("")};