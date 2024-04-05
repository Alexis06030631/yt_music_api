const gma = /^[\w.]*$/
const signatureTimestamp = 19816

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
	const url = orgaCompose(m.PC,m.bG,m.s)
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
	a={EX:!1,PC:"",bG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.EX=!0;
a.PC=b.url;
a.bG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
hP.M9(a,23);
hP.fD(a,3);
hP.M9(a,60);
hP.tw(a,63);
hP.M9(a,24);
hP.tw(a,6);
hP.M9(a,21);
hP.M9(a,25);
hP.fD(a,1);
return a.join("")
}

var hP={fD:function(a,b){a.splice(0,b)},
M9:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
tw:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(""),c=[function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
null,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
function(d,e){0!=e.length&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
-704720961,-502996466,function(d,e,f,h,l,m){return e(h,l,m)},
-1035911814,b,function(d,e){d.splice(d.length,0,e)},
1141061285,function(d,e,f){var h=e.length;f.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},d.split(""))},
-141077613,-1581332008,533341471,"split",function(d){d.reverse()},
1211506413,-1096414988,2072985051,839751215,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-51832093,1292948330,'[,,,;"',null,76575839,-1226879919,1321755596,-443340302,172351117,-1633393827,-486792544,997057857,1412213394,b,"',{,(',",function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
2068259122,-372694839,201576619,b,function(d,e){e.push(d)},
-929708633,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
-424184559,1672692925,1426760856,1067185402,null,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
1342412767,'";]"(\u00ca',-1838378826,-806840452,-1706946219,-404516016,-1230635963,-322898664,-1235787513,1066961101,-40622783,-1203912778,-358443135,-2069425113,-1688413540,-441300525,-1003016077,868014752,1685846013,function(d,e,f,h,l){return e(f,h,l)},
602901752,1469807053,349365595,"Webw0"];c[1]=c;c[26]=c;c[53]=c;try{try{-10!=c[7]&&(-7>=c[4]||(((0,c[74])((0,c[2])(c[44])<<(0,c[11])(c[Math.pow(7,1)%166+8],(0,c[47])(),c[36]),c[0],c[53],c[4]),(0,c[11])(c[15],(0,c[54])(),c[44]))+(0,c[3])(c[60],c[44]),""))&&(0,c[6])(((0,c[0])(c[53],c[30]),c[2])(c[36]),c[21],(0,c[74])((0,c[35])(c[36],c[50]),c[45],c[68],c[53]),c[70],c[26]),((0,c[3])(c[61],c[40]),c[46])(c[50],(0,c[57])(),c[43])^(0,c[new Date("1969-12-31T14:30:37.000-09:30")/1E3])(c[61])}catch(d){0>=c[67]&&
(((0,c[29])((0,c[74])(c[36],c[49]),c[68],c[67]),(0,c[45])(c[26],c[-94*Math.pow(4,3)+6021]),c[54])(c[67],c[64]),c[6])(c[43],c[53])}try{1>c[59]&&(-5!==c[70]?(0,c[15])((0,c[78])(c[74],(0,c[49])(),c[1]),c[7],c[45]):(0,c[15])((0,c[78])(c[74],(0,c[35])(),c[45]),c[54],c[53],c[31])),(0,c[15])((0,c[73])(c[38]),c[73],c[1])}catch(d){}try{10===c[70]?(0,c[41])(c[61],c[1]):(0,c[50])(c[45],c[76]),-6!=c[27]&&(0===c[70]?((0,c[7])(c[45]),c[6])(c[69],c[36]):(0,c[15])((0,c[68])(c[2],c[8]),c[144074-60*Math.pow(7,4)],
c[4],c[9])),4<c[62]&&(0,c[74])((((0,c[38])((0,c[29])(c[57],c[76]),c[11],c[69],c[31]),c[5])((0,c[52])(c[55],c[19]),c[81*Math.pow(1,3)-29],(0,c[17])((0,c[9])(c[3]),c[8],c[6],c[3]),c[3],c[29]),c[52])(c[47],c[57]),c[5],(0,c[70])(c[20],c[55]),c[56],(0,c[43])(c[28],c[3]),c[55],c[34])}catch(d){(0,c[43])(c[Math.pow(4,5)-0+-984],c[38]),((0,c[43])(c[68],c[-18900+Math.pow(4,5)+17923]),c[0])(c[13],(0,c[69])(),c[55])}try{9!=c[16]&&(0,c[43])(c[1],c[55]),0>=c[58]&&(5>c[34]?(0,c[17])((0,c[2])(c[38],c[-188*Math.pow(8,
3)- -96306]),c[43],c[72],c[55]):(0,c[17])((0,c[70])(c[49],c[65]),c[43],c[25],c[97-Math.pow(3,2)+-23]))}catch(d){((0,c[9])(c[47]),c[43])(c[15],c[65])}try{(7===c[60]||(((0,c[0])(c[13],(0,c[44])(),c[55]),c[8])(c[64],c[55]),0))&&(0,c[17])((0,c[43])(c[27],c[55]),c[0],c[76],(0,c[44])(),c[3]),(6==c[59]||(((((0,c[8])(c[14],c[38]),c[52])(c[55],c[50]),(0,c[70])(c[58],c[65]),c[50])(c[51]),c[64])(c[55],c[27]),(0,c[31])(c[47],c[55]),(0,c[34])((0,c[22])((0,c[64])(c[29],c[41]),c[31],c[196*Math.pow(5,3)+-24454],
c[1]),c[68],(0,c[50])(c[23],c[55]),c[42],c[58]),0))&&((((((((0,c[72])(c[18],(0,c[75])(),c[65]),c[60])(c[28],c[5]),c[42])(c[70],c[21]),c[69])(c[13],c[65]),(0,c[69])(c[58],c[28]),c[69])(c[53],c[47]),c[69])(c[80],c[65]),(0,c[37])(c[74]),c[60])(c[74],c[1]),c[72])(c[18],(0,c[61])(),c[65])}catch(d){(0,c[14])((0,c[56])(c[47],c[20]),c[56],c[65],c[45])}}catch(d){return"enhanced_except_6JoBl-X-_w8_"+a}return b.join("")};