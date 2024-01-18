const gma = /^[\w.]*$/
const signatureTimestamp = 19738

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
	const url = orgaCompose(m.vC,m.zF,m.s)
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
	a={NW:!1,vC:"",zF:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.NW=!0;
a.vC=b.url;
a.zF=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
ULa.L5(a,66);
ULa.KL(a,51);
ULa.KL(a,25);
return a.join("")
}

var ULa={L5:function(a){a.reverse()},
ey:function(a,b){a.splice(0,b)},
KL:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(""),c=[-1272929752,226910061,-1708891002,-526410555,-2109448617,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-756985888,-1031168600,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-1814740280,-165651034,989695811,986939171,function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
-1617870817,1043579169,-822582057,1720504031,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
868155348,129871898,-1844318123,1720504031,-1767366074,-1430970193,264815062,function(d){d.reverse()},
function(d,e,f){var h=d.length;f.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},e.split(""))},
1435786830,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
-1336230418,-2079783225,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
function(d,e){if(0!=e.length){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
1807811080,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
1833164930,-1600561790,-919291915,206346094,function(d,e,f,h,l){return e(f,h,l)},
-1336230418,1807811080,-55219911,-1335400205,"split",null,b,function(d,e,f,h,l,m){return e(h,l,m)},
720827588,null,b,-784978504,720827588,1875750405,272714736,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-1067907571,67152217,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
function(d,e,f,h,l,m,n){return d(l,m,n)},
-1461876494,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
function(d,e){d.splice(d.length,0,e)},
1924078350,1141913453,-210314101,438681141,-1906983100,1608649475,1209802716,1079032001,836334587,1702149167,2066702104,b,'[\\("',-481824967,null,836334587,1331193666,-934874034];c[47]=c;c[51]=c;c[79]=c;try{try{-1!==c[32]&&(9<=c[66]?(0,c[41])((((0,c[34])(c[4],c[51]),c[36])(c[73],c[47]),c[46])(c[42],c[78]),c[23],c[new Date("1969-12-31T19:15:32.000-04:45")/1E3],c[38]):((0,c[15])(c[64],c[31]),c[20])((0,c[20])((0,c[39])(c[55],c[41]),c[76],c[31],c[3]),c[7],(0,c[70])(),c[25],c[55])),(0!=c[16]||((0,c[7])((0,c[Math.pow(8,
4)-3%(new Date("1970-01-01T11:30:54.000+11:30")/1E3)+-4022])(),c[25],c[27]),""))&&(0,c[15])(c[1],c[31])}catch(d){(0,c[-9072+Math.pow(5,3)- -8967])((0,c[39])(c[58],c[29]),c[7],(0,c[71])(),c[25],c[-30044+Math.pow(3,5)+29856])}try{-5<=c[19]&&(0,c[20])((0,c[28])((0,c[39])(c[31],c[49]),c[81],(0,c[81])(c[51],c[58]),c[9],c[72]),c[75],c[40],c[3]),-8>c[74]&&(-1===c[81]?(((0,c[10])((0,c[29])(c[16],c[58]),c[26],c[16]),c[3])(c[44],c[45]),c[29])(c[45],c[9]):((0,c[3])(c[50],c[17]),c[32])(c[75],c[17])%(0,c[10])((0,c[Math.pow(2,
3)%19+-5])(c[37],c[16]),c[3],c[7],c[45]))}catch(d){(0,c[10])((0,c[29])(c[48],c[62]),c[29],c[17],c[73])}finally{10<=c[44]&&(2!==c[76]||((0,c[80])((0,c[61])(),c[15],c[17]),null))&&(0,c[66])(c[45],c[55]),(c[64]<Math.pow(5,4)-160+-470||((0,c[66])(c[45],c[40]),""))&&(0,c[0])(c[48])}try{2!==c[8]&&(((0,c[10])((0,c[10])((0,c[10])((0,c[5])(c[249*Math.pow(5,2)+-6203],c[21]),c[3],c[81],c[48]),c[80],(0,c[2])(),c[15],c[45]),c[66],c[20],c[8]),c[33])(c[16],c[20]),(0,c[10])((0,c[3])(c[65],c[83]),c[3],c[1],c[16])-
(0,c[26])(c[16]),c[51])(c[5],c[0]),c[111*Math.pow(8,2)+-7068]!==new Date("1969-12-31T20:44:58.000-03:15")/1E3&&(0,c[11])((0,c[3])((0,c[18])(c[70],c[1]),c[-5625+Math.pow(4,5)- -4619],(0,c[16])(c[Math.pow(3,4)+17596-17615],c[57]),c[5],c[48]),c[63],c[34],c[51])}catch(d){(0,c[42])(c[23]),(0,c[39])(c[52],c[55])}try{-10!==c[47]&&(4===c[1]?(0,c[39])(c[69],c[75]):(0,c[81])(c[20],c[43])),-5!=c[25]&&(-6==c[9]||((0,c[58])((0,c[58])((0,c[58])((0,c[58])((0,c[26])(c[51]),c[35],c[52],c[74]),c[81],c[69],c[4]),c[42],
c[51]),c[39],c[28],c[44]),0))&&(0,c[70])((0,c[72])((0,c[7])(),c[53],c[141292+-109*Math.pow(6,4)])%(0,c[65])(c[9],c[52]),(0,c[72])((0,c[0])(),c[53],c[51]),c[58],(0,c[81])(c[23],c[80]),c[39],c[51],c[62]),(0,c[35])(c[5],c[48]),(0,c[72])((0,c[66])(),c[53],c[97-Math.pow(5,5)- -3079]),(0,c[26])(c[20])}catch(d){2>=c[1]&&(0,c[58])((0,c[63])(c[73],c[23]),c[65],c[21],c[23]),c[61]<=new Date("1969-12-31T17:45:03.000-06:15")/1E3&&(c[74]!=289%Math.pow(5,2)+new Date("1970-01-01T10:44:51.000+10:45")/1E3||((0,c[38])(c[72],
((0,c[81])(c[51],c[17]),c[63])(c[84],c[23]),(0,c[58])((0,c[36])(c[83],c[51]),c[72],(0,c[0])(),c[53],c[28]),(0,c[72])((0,c[66])(),c[53],c[28]),(0,c[66])(),c[53],c[28]),null))&&(0,c[58])(((((0,c[39])(c[51],c[64]),c[65])(c[30],c[51]),c[77])(c[56],c[51]),c[65])(c[40],c[51])|(0,c[42])(c[23]),c[65],c[41],c[23])}}catch(d){return"enhanced_except_mpoB5eX-_w8_"+a}return b.join("")};