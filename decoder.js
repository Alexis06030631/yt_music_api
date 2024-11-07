const gma = /^[\w.]*$/
const signatureTimestamp = 20032

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
		url = orgaCompose(m.OE,m.hI,m.s)
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
	a={HZ:!1,OE:"",hI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.HZ=!0;
a.OE=b.url;
a.hI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
SL.K6(a,3);
SL.BP(a,67);
SL.K6(a,5);
return a.join("")
}

var SL={BP:function(a){a.reverse()},
K6:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
iG:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
-841660883,"HdboI",-539635800,1913338519,-1402582390,1913338519,null,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-355671546,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
1358995058,2024602933,967125466,453822028,-355671546,875782776,198098274,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
-407558942,function(d,e,f){var h=d.length;f.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},e.split(""))},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
610290847,-418185823,-454939441,function(d,e,f,h,l,m){return e(h,l,m)},
1937569117,-1754080423,2036481348,1714995586,-1915002994,-77425365,-418185823,-1656752948,function(d,e,f,h,l,m,n){return d(l,m,n)},
-1961324572,-917851342,591665619,405423839,-1483142975,1775195406,930801726,function(d,e,f,h,l){return e(f,h,l)},
930801726,1249117913,"indexOf",1179291603,"/{,\\",function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
112868209,function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
-784441176,-760326719,1272897328,b,-1153724514,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
1515972712,-1439532777,function(d){d.reverse()},
function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
125253184,-823937693,1675471925,2103243532,function(d,e){d.push(e)},
null,1962069659,function(d,e,f,h,l,m,n,p){return d(m,n,p)},
-1640257355,1197352970,-2024135891,-1616548013,b,function(d,e,f,h,l,m,n,p,q,r,t){return d(f,h,l,m,n,p,q,r,t)},
191405259,875782776,1264984316,715231298,null,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
125253184,-1030962111,-1818059064,b,568969176,853404445,-1833772462,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())}];
c[7]=c;c[67]=c;c[80]=c;try{try{(c[68]>-8||(((0,c[10])(c[67]),(0,c[18])(c[55],c[38]),c[21])(c[7],c[71])+(0,c[20])((0,c[81])(),c[46],c[85]),null))&&(((0,c[61])(c[78],c[85]),c[61])(c[30],c[7]),c[43])((0,c[31])(c[74],c[87]),c[90],c[80],c[27]),c[46]<=new Date("1970-01-01T02:14:58.000+02:15")/1E3?(0,c[72])((0,c[72])((0,c[80])(c[18],c[30]),c[49],(0,c[19])(),c[31],c[84]),c[50],c[36],c[62]):(((0,c[50])(c[36],c[24]),c[47])(c[38],c[53]),c[52])(c[66],c[37])}catch(d){((0,c[4])(c[60],c[45]),c[4])(c[84],c[22])}finally{(c[49]>=
10||((0,c[47])(c[2],c[new Date("1969-12-31T14:31:24.000-09:30")/1E3]),""))&&(0,c[4])(c[60],c[59]),c[65]>3&&(c[86]>=-7||((((0,c[55])(c[new Date("1969-12-31T18:31:16.000-05:30")/1E3],((0,c[76])(c[41],c[3]),c[47])(c[50],c[60])<(0,c[47])(c[44],c[53]),(0,c[7])(c[66],c[1]),(0,c[85])(c[35],c[30]),(0,c[41])(c[25],c[47]),c[78],c[63]),c[32])(((0,c[49])(c[87]),c[51])(c[17],c[18])|(0,c[41])(c[77],c[35]),c[41],c[34],c[17]),c[51])(c[22],c[11]),0))&&(0,c[76])(((0,c[67])(c[89],(0,c[84])(c[17],c[65]),(0,c[42])(c[4]),
(0,c[1])(c[17]),c[17],c[64]),(0,c[84])(c[28],c[8]),c[76])((0,c[25])((0,c[45])(),c[9],c[28]),c[25],(0,c[41])(c[26],c[22]),(0,c[3])(),c[56],c[28]),c[25],(0,c[25])((0,c[3])(),c[9],c[47])*((0,c[84])(c[22],c[79]),c[25])((0,c[3])(),c[9],c[28]),(0,c[21])(),c[9],c[47]),c[44]!==3&&(0,c[80])((0,c[12])(c[28],c[63]),c[59],(0,c[new Date("1969-12-31T19:29:57.000+05:30")/1E3- -36015])(c[22],c[74]),c[82],c[17],c[63]),c[89]!=-9&&(c[28]!==-6||((0,c[66])((0,c[44])(),c[5],c[58]),void 0))&&(0,c[72])(c[45],c[9]),c[22]===
-9?(0,c[2])((0,c[8])((0,c[30])(c[88],c[89]),c[38],c[88],c[55]),(0,c[33])(c[58],c[73]),c[25],(0,c[8])((0,c[83])(c[63]),c[20],c[76],c[87]),c[33],(((0,c[66])((0,c[62])(),c[50],c[58]),c[8])((0,c[66])((0,c[44])(),c[5],c[69]),c[33],c[58],c[4]),c[33])(c[88],c[10]),c[76],c[19])>=(0,c[8])((0,c[8])((0,c[33])(c[69],c[22]),c[66],(0,c[86])(),c[50],c[69]),c[66],(0,c[54])(),c[5],c[58]):(0,c[16])(c[66],(0,c[72])(c[63],c[40]),(0,c[68])(c[74],((0,c[30])(c[63],c[78]),c[29])(c[45],c[15]),c[42],((0,c[76])((0,c[58])(c[66],
c[64]),c[6],c[39],c[new Date("1970-01-01T02:30:57.000+02:30")/1E3]),c[27])(c[32]),(0,c[56])(c[20],c[84]),(0,c[59])(c[45],c[47]),(0,c[-3413+new Date("1970-01-01T10:57:08.000+10:00")/1E3])(c[51],c[85]),(0,c[68])(),c[79],c[40]),((0,c[15])(c[51],c[14]),c[24])(c[40]),(0,c[26])(),c[32],c[70])}try{c[67]!==-3&&(c[80]>=-1?(0,c[82])(((0,c[12])(c[40],c[29]),(0,c[15])(c[51],c[23])),c[24],c[40]):((0,c[48])((0,c[44])(),c[32],c[70]),(0,c[15])(c[27],c[46]),c[2])(c[40],c[62]))}catch(d){(0,c[15])(c[40],c[Math.pow(8,
new Date("1969-12-31T21:45:01.000-02:15")/1E3)-1472+1517])}}catch(d){return"enhanced_except_wJwBv-P-_w8_"+a}return b.join("")};