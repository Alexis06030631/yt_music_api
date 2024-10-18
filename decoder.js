const gma = /^[\w.]*$/
const signatureTimestamp = 20012

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
		url = orgaCompose(m.TE,m.jI,m.s)
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
	a={BZ:!1,TE:"",jI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.BZ=!0;
a.TE=b.url;
a.jI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
NL.MM(a,3);
NL.x6(a,18);
NL.EB(a,52);
NL.EB(a,37);
NL.EB(a,11);
NL.EB(a,29);
return a.join("")
}

var NL={EB:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
MM:function(a,b){a.splice(0,b)},
x6:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[-887308459,-1781804826,-781207296,-1144989195,-1294330582,-1129039296,-1864493163,b,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
1968856957,-779898976,1730192811,-397172030,-601216764,-355481697,-1475269130,1837949897,-1781804826,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
-855430905,-1339403662,function(d){d.reverse()},
-1988979994,-802647208,-1284987007,-1452121604,-68131210,-312982223,b,-1449192580,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
158532445,1976926208,",51];c[56]=c;",1572188298,2092390308,function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
"else",-883305643,1596914721,function(d,e){d.push(e)},
-2130627225,-1997514831,144094072,324706570,1103721461,-359407835,651014498,1524743960,function(d,e,f,h,l,m){return e(h,l,m)},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
289819507,null,546752825,202819066,-1374859978,814094604,b,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
974520445,212969858,-2044332532,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
/'((()\\),)(),\//,81532711,function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
function(d,e,f){var h=e.length;d.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},f.split(""))},
function(d,e,f,h,l){return e(f,h,l)},
-1389791791,395991054,function(d,e,f,h,l,m,n){return d(l,m,n)},
-485923235,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
395991054,null,74956677,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
null,1081429112,189888673];c[52]=c;c[74]=c;c[78]=c;try{try{c[16]>=3?(0,c[49])(((0,c[40])(c[78],c[31]),(0,c[8])(c[57],c[12])),c[36],((0,c[65])(c[78],c[47]),(0,c[67])((0,c[8])(c[28],c[79]),c[76],c[28]),(0,c[40])(c[52],c[5]),(0,c[18])(c[74],c[80]),c[36])(c[23],c[20]),c[37],c[38]):(0,c[44])((0,c[58])(c[70],c[38]),(((0,c[53])((0,c[7])(c[76]),c[4],c[60],c[69]),c[53])((0,c[52])(c[14],(0,c[63])(),c[23]),c[58],c[15],c[60]),c[53])((0,c[52])(c[43],(0,c[48])(),c[23]),c[58],c[20],c[76]),c[53],(0,c[52])(c[14],
(0,c[48])(),c[23]),c[22],c[55],c[43]),c[11]===-5?((0,c[53])((0,c[52])(c[76],(0,c[48])(),c[23]),c[22],c[6],c[43]),c[77])(c[14],c[47]):((0,c[51])(c[43],c[8]),(0,c[77])(c[64],c[71]),c[new Date("1970-01-01T11:16:19.000+11:15")/1E3])(c[30],c[new Date("1970-01-01T04:46:04.000+04:45")/1E3]),c[39]!==1&&(c[4]>=4&&(((0,c[5])(c[80],c[73]),c[5])(c[72],c[23]),"null")||(0,c[0])((0,c[52])(c[41],c[73]),c[24],c[new Date("1970-01-01T09:30:11.000+09:30")/1E3],c[61])),c[7]!=2&&(c[8]>=9?((((0,c[75])(c[1],c[new Date("1970-01-01T07:00:34.000+07:00")/
1E3]),c[18])(c[1],c[8]),c[66])(c[76],c[20]),(0,c[14])((0,c[56])(c[43],c[71]),c[6],(0,c[42])(c[15],c[63]),c[64],c[71]),c[75])(c[26],c[61])>=((0,c[35])(c[79],c[70]),c[61])(c[47]):((((0,c[27])(c[23],(0,c[22])(c[35],c[81]),(0,c[48])(c[9],c[49]),(0,c[23])(c[68],(0,c[34])(),c[77]),c[68],(0,c[19])(),c[77]),c[29])(c[75],c[68]),(0,c[23])(c[47],(0,c[70])(),c[77]),c[33])(c[14]),c[24])((0,c[61])(c[35]),c[29],c[30],c[9])),c[56]<2?(0,c[24])((0,c[33])(c[47]),c[48],c[35],c[25]):(0,c[73])((0,c[78])(c[25],c[34]),c[78],
c[17],c[63]),c[37]>-8&&(c[35]===0?(0,c[55])((0,c[73])((0,c[27])(c[13]),c[78],c[59],c[1]),c[72],(0,c[14])(c[58],c[77]),c[13],(0,c[36])(),c[43]):((0,c[42])(c[54],c[58]),(0,c[42])(c[19],c[34]),(0,c[24])(c[58],c[44])>(0,c[77])(c[32],c[82]))),(0,c[72])((0,c[70])(c[43],c[57]),c[77],c[65],c[82]),(0,c[77])(c[49],c[62])}catch(d){c[46]<9&&(c[48]!==new Date("1970-01-01T11:45:05.000+11:45")/1E3&&((((0,c[41])(c[11],c[0]),c[81])(c[33]),c[13])(c[new Date("1969-12-31T13:16:19.000-10:45")/1E3],c[15]),1)||(((0,c[53])(c[16],
c[34]),c[54])(c[16],(0,c[78])(),c[25]),c[54])(c[15-new Date("1970-01-01T06:14:10.000+06:15")/1E3],(0,c[38])(),c[25])),c[76]!=-2&&(0,c[55])((0,c[54])(c[new Date("1969-12-31T14:45:16.000-09:15")/1E3],(0,c[38])(),c[25]),c[24],c[4],c[65]),c[36]==-5?(0,c[55])(((0,c[60])(c[76],c[40]),c[79])(c[66],c[14]),c[54],c[65],(0,c[50])(),c[25]):(0,c[37])((0,c[6])(c[16],c[30]),c[9],(0,c[new Date("1970-01-01T03:01:19.000+03:00")/1E3])(c[16],c[3]),c[45]),c[27]!==9&&(0,c[55])((0,c[79])(c[65],c[42]),c[79],c[16],c[20])}}catch(d){return"enhanced_except_rJwB0-P-_w8_"+
a}return b.join("")};