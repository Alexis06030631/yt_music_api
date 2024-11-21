const gma = /^[\w.]*$/
const signatureTimestamp = 20046

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
	let m, url = {}
	if (!format.url) {
		m = mapDecompose(format)
		url = orgaCompose(m.TE,m.pI,m.s)
	} else {
		url.B = format.url
		url.j = {}
	}

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
	a={OZ:!1,TE:"",pI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.OZ=!0;
a.TE=b.url;
a.pI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
VL.HN(a,59);
VL.Ig(a,3);
VL.HN(a,4);
VL.HN(a,66);
VL.Ig(a,1);
VL.mN(a,2);
return a.join("")
}

var VL={Ig:function(a,b){a.splice(0,b)},
HN:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
mN:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[1115809378,b,function(d,e,f,h,l){return e(f,h,l)},
714021790,-1366274860,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
"\\,\\,}'",function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1889979300,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
-1889979300,-457631484,-1097800760,1928968710,-1012172923,-970512755,function(d,e){d.push(e)},
null,-1432423580,function(d){throw d;},
2086439383,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
2068814543,1201384262,function(d,e,f,h,l,m,n){return d(l,m,n)},
function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
function(d,e){e.length!=0&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
-407382784,-1598922295,-554832655,1075101731,1632588514,-1116338296,18844134,-1225059682,function(d,e,f){var h=e.length;f.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},d.split(""))},
1034945034,2098327740,-233359847,1559721394,655939869,-953085764,"throw",657973945,914439883,function(d,e){e.splice(e.length,0,d)},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
1893686417,303145295,b,1989796627,"try",1427930130,function(d){throw d;},
null,-526474521,977801752,1911559058,-1912709922,function(d,e,f,h,l,m){return e(h,l,m)},
2134031471,")\"\\\\'",-516699978,637144458,function(d){d.reverse()},
-90086737,303145295,-346258769,-878911534,-93179459,733413176,1105840005,b,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
599235291,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
50447027,-527077840,1880390964,null,876399299,-526474521,255220964,"if",-567339101,-1441899E3];c[20]=c;c[57]=c;c[82]=c;try{try{c[16]!==1&&(c[47]!=-7&&((0,c[12])(c[55],c[20]),(0,c[80])(c[58],c[69]),"8")||(0,c[70])((0,c[new Date("1970-01-01T04:31:13.000+04:30")/1E3])(c[69]),c[17],c[24],(0,c[76])(),c[69])),(0,c[35])(c[31]),(0,c[17])(c[65],(0,c[78])(),c[69]),(0,c[28])(c[53],c[54])}catch(d){(c[new Date("1970-01-01T03:45:22.000+03:45")/1E3]!=-1||((0,c[70])((0,c[70])((0,c[70])((0,c[28])(c[59],c[31]),c[28],
c[13],c[new Date("1970-01-01T01:16:09.000+01:15")/1E3]),c[46],c[61]),c[17],c[33],(0,c[3])(),c[69]),0))&&(0,c[70])(((0,c[70])((0,c[74])(c[88],c[50]),c[30],c[17],c[47]),c[64])(c[5],c[new Date("1970-01-01T02:15:04.000+02:15")/1E3]),c[64],c[45],c[4]),c[54]<9&&(c[2]>=2||((0,c[38])((0,c[74])(c[81],(0,c[44])(),c[88]),c[85],c[61],c[22]),0))&&((0,c[14])(c[37]),c[64])(c[8],c[29]),c[6]<=-2?(((0,c[85])(c[77],c[37]),c[new Date("1970-01-01T02:46:25.000+02:45")/1E3])(c[69],c[22]),(0,c[74])(c[33],(0,c[44])(),c[37]),
c[74])(c[1],(0,c[46])(),c[22]):(0,c[38])((0,c[38])((0,c[38])((0,c[48])(c[83],c[56]),c[86],c[88],c[5]),c[new Date("1969-12-31T14:15:42.000-09:45")/1E3],c[1],(0,c[12])(),c[56]),c[16],c[41],c[24]),c[4]===-10&&((0,c[19])((0,c[48])((0,c[35])((0,c[19])((((0,c[84])(c[2],(0,c[70])(),c[32]),c[6])(c[40],c[14]),(0,c[84])(c[43],(0,c[56])(),c[9]),c[84])(c[11],(0,c[56])(),c[9]),c[6],((0,c[84])(c[43],(0,c[10])(),c[32]),c[6])(c[76],c[47]),c[3],c[9]),(0,c[52])(c[39],c[5]),c[48],((0,c[48])((0,c[51])(c[14]),c[6],c[34],
c[9]),c[74])(c[63],c[9]),c[84],c[11],(0,c[70])(),c[32]),c[51],c[66]),c[new Date("1969-12-31T15:00:51.000-09:00")/1E3],(0,c[52])(c[66],c[17])>>>(0,c[6])(c[72],c[47]),c[14]),"NaN")||(0,c[33])((0,c[73])(c[52],(0,c[84])(c[2],(0,c[70])(),c[9]),((0,c[48])(((0,c[58])(c[77],c[14]),c[70])(c[81],c[5]),c[54],c[60],c[35]),c[75])(c[70],c[72]),(0,c[71])(((0,c[74])(c[55]),c[81])(c[85],c[0]),c[51],c[13],c[87]),c[19],c[58]),c[20],(0,c[20])((((0,c[58])(c[83],c[15]),c[76])(c[24],c[33]),c[53])(c[15],c[79]),c[34],(0,c[72])(c[67],
c[8]),c[6],c[8]),c[33],(0,c[41])(c[15],c[67]),c[18],c[15])}try{(c[10]>1||((((0,c[24])((0,c[24])((0,c[72])(c[86],c[75]),c[72],c[5],c[8]),c[28],c[75],c[57]),(0,c[24])((0,c[72])(c[3],c[75]),c[50],c[14],c[8]),c[49])(c[72],(0,c[60])(c[68],(0,c[46])(),c[75]),(0,c[72])(c[26],c[8]),((0,c[34])(c[73],c[80]),c[27])(c[23]),c[43],c[23]),c[34])(c[22],c[75]),0))&&(0,c[9])((0,c[85])((0,c[28])(c[15],c[62]),c[70],(0,c[13])((0,c[71])(c[40],c[3]),c[71],((0,c[54])(c[16],c[28]),c[71])(c[86],c[3]),c[41],c[43]),c[22],c[28]),
c[44],(0,c[13])(((0,c[80])(c[5],(0,c[52])(),c[43]),c[70])(c[57],c[28]),c[54],(0,c[71])(c[78],c[3]),c[21],c[3]),c[47],c[28])}catch(d){(0,c[0])(c[38],c[28])}}catch(d){return"enhanced_except_zpwBseP-_w8_"+a}return b.join("")};