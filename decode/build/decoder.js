const gma = /^[\w.]*$/
const signatureTimestamp = 19695

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
	const m = mapDecompose(format)
	const url = orgaCompose(m.VC,m.PF,m.s)
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
	a={dX:!1,VC:"",PF:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.dX=!0;
a.VC=b.url;
a.PF=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
zP.G6(a,3);
zP.Co(a,6);
zP.G6(a,1);
zP.W3(a,59);
zP.Co(a,39);
zP.W3(a,25);
zP.Co(a,38);
zP.W3(a,17);
return a.join("")
}

var zP={Co:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
G6:function(a,b){a.splice(0,b)},
W3:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(""),c=[1063696225,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-1436561523,1547336766,";}[(",1888656506,function(d,e,f,h,l,m){return e(h,l,m)},
null,b,1985365841,923331184,-470527510,null,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
659958807,1857702889,-1989294921,813223724,-804876399,767527071,b,"1kLFcj",931073672,-53098127,875482203,1111755394,-1937017705,982332774,859861901,1707433081,function(d,e){e.splice(e.length,0,d)},
-1660576764,-439510230,2098984208,-566840661,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
1978259104,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
272911237,-1813644871,-504672739,-82397682,-1918160122,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1782725806,373054637,-1016023431,-1079507743,function(d,e,f){var h=e.length;f.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},d.split(""))},
function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
1792314736,-1477143138,-1374281890,-1431868730,-956713190,456498970,function(d,e,f,h,l){return e(f,h,l)},
-477635699,-1769610511,-1057601379,function(d){d.reverse()},
1610466136,1625636181,-1894642637,-1079507743,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
659958807,-348604493,1434160921,1220566877,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
573327081,-202508960,b,-1409389182,-871683047,function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
null,42650211,"rO77yat"];c[7]=c;c[12]=c;c[79]=c;try{try{6<=c[23]&&((0,c[58])((0,c[39])(c[20],c[10]),c[62],c[75]),[])||(0,c[58])((0,c[30])(c[9],c[7]),c[35],c[0],c[7]),0<=c[47]&&(0,c[119-92*Math.pow(1,1)])(c[34],c[29]),(-6>c[68]||((0,c[20])((0,c[51])(c[21]),c[64],(0,c[65])(c[26],c[8]),c[12],(0,c[new Date("1970-01-01T06:15:59.000+06:15")/1E3])(),c[22])*(0,c[49])(c[25],c[21])/(0,c[new Date("1969-12-31T19:00:20.000-05:00")/1E3])((0,c[49])(c[47],c[22]),c[64],((0,c[76])(c[26]),c[65])(c[34],c[5]),c[Math.pow(8,
1)%38- -27],(0,c[15])(),c[34]),0))&&(((((0,c[9])(c[22],c[40]),c[9])(c[21],c[61]),c[53])(c[22],c[74]),c[49])(c[39],c[6]),(0,c[9])(c[26],c[43]),c[72])((0,c[76])(c[Math.pow(6,5)-201+-7569]),c[65],c[21],c[70])>(0,c[9])(c[34],c[11])}catch(d){((0,c[76])(c[21]),c[51])(c[22]),(0,c[447%Math.pow(3,2)+43])(c[23],c[6])}finally{8>c[0]&&(-7===c[32]&&(((0,c[64])(c[35],(0,c[75])(),c[6]),c[64])(c[12],(0,c[75])(),c[34]),"undefined")||(0,c[72])((0,c[65])(c[34],c[38]),c[77-3*Math.pow(2,2)],c[6],c[48])),7!==c[58]&&((((0,c[49])(c[new Date("1969-12-31T15:00:46.000-09:00")/
1E3],c[21]),c[67])(c[23],c[new Date("1970-01-01T02:15:34.000+02:15")/1E3]),c[67])(c[36],c[4]),(0,c[66])(c[37],(0,c[54])(),c[36]),c[11])(c[23],c[47]),-7!=c[9]?(0,c[29])(c[12],c[58]):(0,c[18])(c[16%Math.pow(8,3)- -66],c[25]),(-6==c[62]||((0,c[37])((0,c[57])(c[70],c[33]),c[30],c[69],c[43]),0))&&((0,c[18])(c[74],c[49]),c[16])(c[74]),(-4<=c[80]||((0,c[14])(c[67],c[82]),0))&&(0,c[18])(c[new Date("1970-01-01T02:15:54.000+02:15")/1E3],c[20]),-5>c[32]&&(0>=c[77]?(0,c[37])((0,c[37])((0,c[37])((0,c[29])(c[60],
(0,c[40])(),c[70]),c[75],c[54],c[1]),c[41],c[69]),c[75],c[17+Math.pow(6,4)-1255],c[53]):(0,c[68])((0,c[16])(c[58])&(0,c[68])(c[80],c[12]),c[new Date("1970-01-01T04:15:07.000+04:15")/1E3],(0,c[68])(c[35],c[8]),c[6],c[57])),-4<c[0]&&(-9==c[37]||(((0,c[1])(c[18],c[76]),c[41])(c[80],c[7]),0))&&((0,c[79])(c[13],c[37]),c[53])(c[new Date("1970-01-01T11:30:01.000+11:30")/1E3],c[8]),-1<=c[63]&&((0,c[53])(c[34776-Math.pow(7,5)+-17897],c[39]),1)||(0,c[42])(c[11],(0,c[26])(),c[17]),6>=c[76]&&(-9===c[76]||((0,c[79])(c[1],
c[49]),0))&&(0,c[14])(c[1],c[16]),3>c[58]&&(0>=c[51]||((0,c[42])(c[64],(0,c[47])(),c[72]),NaN))&&(0,c[79])(c[72],c[new Date("1970-01-01T10:45:25.000+10:45")/1E3]),2>=c[48]&&((0,c[34])((0,c[14])(c[1],c[new Date("1969-12-31T14:30:19.000-09:30")/1E3]),c[55],c[2]),"}('")||(0,c[48])((0,c[25])(c[6],c[65]),c[40],c[71],(0,c[56])(),c[65]),5>c[45]&&((0,c[48])((0,c[40])(c[71],(0,c[56])(),c[10]),c[3],c[69],c[26]),1)||(0,c[51])((0,c[71])(c[0],c[50]),c[28],c[58],c[18-Math.pow(1,3)+-16]),-4!==c[39]?((0,c[51])((0,c[6])(c[0],
c[20]),c[13],c[41],c[10]),c[51])((0,c[13])(c[52],c[25]),c[13],(0,c[58])(c[41],c[62]),c[68],c[22]):(((0,c[50])((0,c[56])(c[69],c[80]),c[36],(0,c[17])(c[new Date("1969-12-31T15:46:09.000-08:15")/1E3],c[64]),c[28],c[6],(0,c[new Date("1970-01-01T10:45:23.000+10:45")/1E3])(),c[69]),c[56])(c[57],c[new Date("1970-01-01T11:45:37.000+11:45")/1E3]),c[17])(c[53],c[30])}}catch(d){return"enhanced_except_75kBkOb-_w8_"+a}return b.join("")};