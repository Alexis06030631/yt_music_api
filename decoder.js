const gma = /^[\w.]*$/
const signatureTimestamp = 19780

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
	const url = orgaCompose(m.PC,m.WF,m.s)
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
	a={AX:!1,PC:"",WF:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.AX=!0;
a.PC=b.url;
a.WF=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
zP.rU(a,47);
zP.kV(a,31);
zP.yi(a,1);
zP.rU(a,27);
zP.yi(a,3);
zP.kV(a,56);
zP.kV(a,26);
zP.yi(a,3);
zP.kV(a,4);
return a.join("")
}

var zP={yi:function(a,b){a.splice(0,b)},
kV:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
rU:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(""),c=[function(d,e,f,h,l,m){return e(h,l,m)},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
-1089174012,-517668644,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
248171641,function(d,e){if(0!=e.length){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
function(d,e){d.push(e)},
-474163001,-1443577594,"debugger",-342844539,")'};\"/",null,null,1985813706,245097526,function(d,e,f){var h=d.length;e.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},f.split(""))},
-714032304,501391395,-715345097,function(d){d.reverse()},
function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
-996266847,-232771246,1236518859,529853085,b,2035541517,1446053603,-1741813277,-1605653301,-1299383301,1539596840,148714170,1405660291,1539596840,function(d,e,f,h,l,m,n,p,q,r){return e(l,m,n,p,q,r)},
-530780166,-1301928666,-78303144,1774754592,-1511573018,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-1345003390,-962072750,-463356010,-1423673252,"{/,,",-1975937864,function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
-232771246,988991566,-57000304,-819688454,712301907,-2037945629,-428344346,-479727471,1247820388,1762969861,-1443577594,-479727471,172003661,1919426138,null,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-848116851,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
33852211,function(d,e,f,h,l,m,n){return d(l,m,n)},
-962072750,'[",}{})',function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
1223278466,-522771777,b,function(d,e){e.splice(e.length,0,d)},
-647889257,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
1690243226,-1616221543,function(d,e,f,h,l){return e(f,h,l)},
-1301928666,b,-1573724773];c[14]=c;c[15]=c;c[66]=c;try{try{(-10==c[46]||((0,c[84])(((0,c[2])(c[14],c[45]),(0,c[57])(c[20],c[65]),c[41])(c[29],c[64]),c[13],c[64],c[17]),0))&&(((0,c[37])(c[78],c[22]),c[46])((0,c[68])((0,c[43])(),c[40],c[61]),c[68],(0,c[51])(),c[48],c[61]),c[new Date("1969-12-31T22:30:37.000-01:30")/1E3])(c[48],c[19]),7>c[33]&&(-3===c[59]?(0,c[54])(((0,c[new Date("1969-12-31T13:31:13.000-10:30")/1E3])(c[13*Math.pow(7,2)+-597],c[29+Math.pow(1,5)-27]),c[57])(c[26],c[new Date("1969-12-31T16:31:05.000-07:30")/
1E3])>=((((0,c[73])(c[78],c[194-Math.pow(1,3)-177]),c[68])((0,c[6])(),c[48],c[61]),(0,c[68])((0,c[43])(),c[78],c[61]),c[37])(c[64],c[71]),(0,c[72])(c[40]),c[13])(c[48],c[70]),c[50],(0,c[88])(c[new Date("1969-12-31T14:15:28.000-09:45")/1E3]),((0,c[68])((0,c[6])(),c[40],c[61]),c[37])(c[78],c[32]),(0,c[68])((0,c[43])(),c[40],c[61]),c[73],(0,c[50])((0,c[73])(c[48],c[56]),c[37],(0,c[73])(c[78],c[44]),c[48],c[21]),c[48],c[23]):(((((0,c[new Date("1970-01-01T01:15:37.000+01:15")/1E3])(c[40],c[4]),(((0,c[55])(c[64],
c[59]),c[43])(c[Math.pow(2,3)+-3726+3767],c[79]),c[58])(c[454%Math.pow(1,5)- -50],c[Math.pow(7,4)+8037+-10374]),c[37])(c[new Date("1970-01-01T10:45:47.000+10:45")/1E3],c[new Date("1969-12-31T13:46:25.000-10:15")/1E3]),c[39])(c[84],c[64]),((((((0,c[8])(c[34],c[38]),c[29])(c[20],c[79]),c[24])(c[36],c[76]),c[Math.pow(7,4)-5-2334])((0,c[25])(),c[72],c[55]),c[6])(c[22],c[61]),c[67])(c[59],c[68]),c[84])(c[new Date("1970-01-01T01:16:09.000+01:15")/1E3],c[Math.pow(6,5)- -21312+-29013]),c[56])(c[67])>=(0,c[82])(c[1],
c[72])-(0,c[Math.pow(5,4)-65+-491])(c[78],c[15])),8!==c[50]&&(6<c[47]||((((0,c[6])(c[36]),c[9])(c[33]),c[24])(c[28],c[Math.pow(7,3)%427-310]),0))&&((0,c[8])(c[17],c[43]),(0,c[24])(c[81],c[33]),c[44])(c[17],c[1]),(7!=c[4]||((0,c[13])((0,c[38])(),c[33],c[20]),0))&&(0,c[83])(c[41])}catch(d){(0,c[35])(((0,c[35])((0,c[13])((0,c[76])(),c[41],c[20]),c[13],(0,c[30])(),c[33],c[20]),c[-54*Math.pow(4,4)- -13868])(c[16],c[new Date("1969-12-31T20:45:32.000-03:15")/1E3]),c[13],(0,c[50])(),c[3],c[20])}finally{2!==
c[49+424%Math.pow(1,3)]&&(0,c[35])((0,c[29])(c[16],c[45-Math.pow(6,3)%171])%(0,c[42])(c[29],c[60]),c[1],c[26],c[80]),-10!=c[30]&&(-3<c[52]&&(((0,c[75])(c[76],(0,c[22])(c[86],c[35]),(0,c[Math.pow(1,3)+-15795+new Date("1969-12-31T19:23:52.000-09:00")/1E3])((0,c[17])(c[Math.pow(8,3)-33896- -33434],c[9]),c[24],(0,c[1])(c[26],c[78]),c[45],(0,c[28])((0,c[1])(c[0],c[65]),c[22],c[46],c[-144*Math.pow(7,5)+2420264]),c[1]),(0,c[59])(c[83]),c[57]),((0,c[58])(c[83],c[69]),(0,c[4])(c[57],c[14]),c[245%(new Date("1970-01-01T07:01:58.000+07:00")/
1E3)+Math.pow(8,3)+-445])(c[57],c[26]),c[76])(c[57],c[30]),/(),/)||(((((((((0,c[85])((0,c[63])((0,c[10])(),c[new Date("1970-01-01T06:45:57.000+06:45")/1E3],c[70]),c[74],c[65],c[67]),c[29])(c[66],c[46]),c[59])(c[66]),c[63])((0,c[88])(),c[1],c[70]),(0,c[43])(c[67]),c[Math.pow(3,1)-14040+14041])(c[83],c[48]),c[59])(c[67]),c[4])(c[1],c[55]),c[85])((0,c[4])(c[66],c[54]),c[new Date("1970-01-01T06:16:14.000+06:15")/1E3],c[11],c[13]),c[63])((0,c[10])(),c[83],c[70])),-6!==c[62]&&(3==c[-138*Math.pow(6,4)- -178897]?
(0,c[12])(c[Math.pow(3,3)%484+-14]):(0,c[74])(c[62],c[83]))}}catch(d){return"enhanced_except_xJoBu-X-_w8_"+a}return b.join("")};