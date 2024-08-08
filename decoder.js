const gma = /^[\w.]*$/
const signatureTimestamp = 19941

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
	const url = orgaCompose(m.DE,m.YH,m.s)
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
	a={pZ:!1,DE:"",YH:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.pZ=!0;
a.DE=b.url;
a.YH=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
MK.Ya(a,51);
MK.Ax(a,3);
MK.OK(a,79);
MK.Ax(a,2);
MK.Ya(a,11);
MK.Ya(a,52);
MK.OK(a,57);
return a.join("")
}

var MK={Ax:function(a,b){a.splice(0,b)},
Ya:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
OK:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[1373349251,1868262161,1203198887,-1079861692,911364270,1222600682,-88004577,1253513741,-1951457110,-900875497,function(d){d.reverse()},
function(d,e,f,h,l){return e(f,h,l)},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
-2109376538,function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
-1371657132,function(d,e,f,h,l,m,n,p){return d(m,n,p)},
",55];c[52]=c;",489207262,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
582567162,-312023389,-214559828,-742423431,"(,{[],[",function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
b,-320118835,-2109376538,483209759,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-1160423989,2005674010,-1585367434,function(d,e,f){var h=d.length;e.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},f.split(""))},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
2083756106,-1135856183,-1497305394,1270681907,1946414065,-1482955384,660263863,-1006581798,-728057185,function(d,e,f,h,l,m){return e(h,l,m)},
"break",-1511214802,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
1505069436,1460479136,-1388892946,1253513741,198797879,-1896950286,782518E3,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
function(d,e){e.length!=0&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
1829265276,-2029365855,b,b,null,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
1572679751,-434165898,-743206005,-803986827,function(d,e){e.push(d)},
-1145515792,-1414917800,815736770,-143164452,1193224654,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-1296911390,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
null,-738427018,-28401812,922453447,174134708,-2081428730,1785106321,2020064462,729652802,-927111436,-1348055653,1815110599,null,-2010523544,-430636439,function(d,e){e.splice(e.length,0,d)},
874825496,1521386718];c[63]=c;c[78]=c;c[90]=c;try{try{(c[37]===6||((0,c[58])(c[29],c[62]),0))&&(0,c[31])(c[61]),c[8]==8?(0,c[11])((0,c[26])(c[56],c[27]),c[10],c[63])>>>(0,c[11])((0,c[10])(c[27]),c[13],c[61],c[23])>>>((0,c[13])(c[61],c[60]),c[49])(c[62],c[37]):(0,c[11])(((((0,c[15])(c[22],c[61]),c[13])(c[27],c[Math.pow(3,1)+56E3-new Date("1970-01-01T09:02:04.000-06:30")/1E3]),(0,c[26])(c[0],c[62]),c[15])(c[39],c[63]),c[35])((0,c[77])(),c[27],c[47]),c[31],c[62])}catch(d){(0,c[13])(c[new Date("1969-12-31T21:45:00.000-02:15")/
1E3],c[40])%(0,c[58])(c[34],c[27])}try{(c[50]>0||((0,c[46])((0,c[11])((0,c[10])(c[27]),c[10],c[90]),c[36],(0,c[31])(c[61]),c[5],c[103-Math.pow(6,3)%203]),new Date("1969-12-31T14:45:00.000-09:15")/1E3))&&(((0,c[11])((0,c[36])(c[66],c[61]),c[58],c[67],c[27]),c[58])(c[59],c[-133*Math.pow(1,4)+133]),c[49])(c[62],c[9]),c[29]<=new Date("1969-12-31T20:30:01.000-03:30")/1E3&&(c[Math.pow(4,4)+100-335]===-9||((0,c[11])((0,c[11])((0,c[15])(c[42],c[61]),c[58],c[70],c[62]),c[58],c[88],c[60]),0))&&((0,c[11])((0,c[35])((0,c[12])(),
c[61],c[47]),c[26],c[91],c[60]),c[35])((0,c[57])(),c[27],c[47]),c[7]==-8?(0,c[46])(((0,c[11])((0,c[13])(c[63],c[87]),c[26],c[68],c[27]),c[11])((0,c[46])((0,c[26])(c[19],c[27]),c[13],(0,c[15498-Math.pow(5,1)-15482])((0,c[49])(c[61],c[82]),c[31],c[27]),c[61],c[80]),c[13],c[62],c[74]),c[58],(0,c[15])(c[44],c[62]),c[84],c[63]):(((((0,c[36])(c[41],c[63]),c[75])(c[50],c[76]),(0,c[14%Math.pow(6,1)+9])(c[1],c[13]),(0,c[75])(c[4],c[43]),(0,c[0])(c[39],c[47]),c[43])(c[37],c[75]),c[34])(c[47],c[50]),c[14])(c[79],
c[75])&(0,c[16])(c[75])}catch(d){((0,c[4])(c[63]),c[74])(c[95],c[20]),(0,c[84])(c[8],c[48])}try{c[80]>=3&&(0,c[64])((0,c[4])(c[48]),c[52],(0,c[13392-Math.pow(4,5)+-12365])((0,c[84])(c[10],c[50]),c[23],c[70],c[2]),c[76],c[2])}catch(d){(0,c[63])(c[68],c[30])}try{c[53]!==-9&&(c[51]!=-9||((0,c[-15360+Math.pow(8,3)- -14876])(((0,c[17])((0,c[57])((0,c[35])(),c[65],c[31]),c[81],(0,c[63])(c[7],c[30]),c[79],c[30],c[9]),(((0,c[66])(c[19],c[45]),c[81])((0,c[61])(c[2]),c[57],(0,c[0])(),c[30],c[31]),c[56])(c[16],
c[65]),(0,c[57])((0,c[15])(),c[30],c[31])),((0,c[81])((0,c[43])(c[65],c[60]),c[79],c[30],c[62]),(0,c[57])((0,c[72])(),c[65],c[31])),c[46],(0,c[82])(c[65]),c[56],(0,c[43])(c[65],c[47]),c[11],c[219-Math.pow(1,2)-173]),""))&&(((((((0,c[34])(c[3],c[65]),c[75])(c[79],(0,c[43])(c[30],c[93]),(0,c[56])(c[85],c[45]),(0,c[66])(c[37],c[2]),(0,c[6])(c[21],c[79]),c[80],c[42]),c[34])((0,c[19])(c[43],c[-185+203%Math.pow(7,5)]),c[84],c[70],c[82]),c[34])((0,c[32])(c[18],c[17]),c[9],c[92],c[new Date("1969-12-31T14:46:22.000-09:15")/
1E3]),c[10])((0,c[24])(c[95],c[55]),c[92],c[85],c[55]),c[26])(c[9],c[90]),c[51])(c[49],c[24]),c[84]!==-2&&(c[Math.pow(4,2)-19968+20021]===-3?(0,c[17])(c[19],c[55]):(0,c[30])(c[59],c[3]))}catch(d){(0,c[88])(c[53],c[14]),(0,c[65])((0,c[8])(),c[38],c[39])}}catch(d){return"enhanced_except_5ZsBmuT-_w8_"+a}return b.join("")};