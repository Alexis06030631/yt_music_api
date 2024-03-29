const gma = /^[\w.]*$/
const signatureTimestamp = 19809

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
	const url = orgaCompose(m.ZC,m.mG,m.s)
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
	a={LX:!1,ZC:"",mG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.LX=!0;
a.ZC=b.url;
a.mG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
iP.dC(a,33);
iP.FY(a,3);
iP.dC(a,43);
iP.FY(a,3);
iP.dC(a,5);
return a.join("")
}

var iP={FY:function(a,b){a.splice(0,b)},
dC:function(a){a.reverse()},
Da:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(""),c=["snOF",133217485,-1748033959,1524983320,187113628,function(d,e,f){var h=e.length;f.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},d.split(""))},
";),}}",function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
162012354,1918435180,114020373,null,-1546907941,function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
113577414,function(d,e,f,h,l){return e(f,h,l)},
511868762,-40132440,function(d){d.reverse()},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
383304882,1524983320,1494983802,962453878,553167928,-1682473540,-1806640236,1944439817,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
-874704526,195268850,-1935715105,-1770262921,164759772,-690781649,null,-1617301691,-1546907941,1003347772,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
981797014,1667192563,b,301327496,function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
-137754384,1198770916,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
function(d,e,f,h,l,m){return e(h,l,m)},
-719511473,-1676211113,-1157544843,b,2062624150,-1358751873,-2042850366,1679285471,-1033043941,-1033043941,-1046526685,";),}}",-1263205592,59835041,-2110013344,"/;,)(",833705009,null,-2133128381,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
730738601,b,1636648544,-943862039,2060994280,2144075497,-418814055,-41671443,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
1591837333,-1957438582,function(){for(var d=[],e=64;++e-d.length-32;)switch(e){case 58:e=96;continue;case 91:e=44;break;case 65:e=47;continue;case 46:e=153;case 123:e-=58;default:d.push(String.fromCharCode(e))}return e},
1481293376,985531231,-1632248066];c[11]=c;c[35]=c;c[67]=c;try{try{-7>c[-5*Math.pow(6,1)- -114]&&(0,c[28])(c[53],c[62])}catch(d){(0,c[5])(c[0],(0,c[48])(),c[71])}finally{9!==c[60]&&(-4==c[38]?((0,c[-24*Math.pow(8,3)- -12337])((0,c[69])(c[67],c[8]),c[40],(0,c[69])(c[11],c[82]),c[75],c[Math.pow(new Date("1970-01-01T09:30:08.000+09:30")/1E3,5)%157-41]),c[45])(c[11],c[47]):(((0,c[15])((0,c[40])(c[34],c[53]),c[69],c[71],c[4]),c[28])(c[43],c[31]),(0,c[18])(c[43]))),c[9]!=Math.pow(7,3)+-16786- -16433&&(8>
c[80]||((((0,c[69])(c[53],c[84]),c[5])(c[0],(0,c[19])(),c[43]),((0,c[13])(c[71],c[80]),c[40])(c[22],c[35]),c[7])(c[67])%((0,c[13])(c[35],c[Math.pow(4,1)-22+38]),c[69])(c[11],c[66]),null))&&((((0,c[15])((0,c[14-Math.pow(1,1)%194])(c[67],c[16]),c[13],c[71],c[3]),c[15])((0,c[45])(c[43],c[24]),c[5],c[37],(0,c[78])(),c[43]),(0,c[45])(c[53],c[25]),c[13])(c[67],c[46]),c[28])(c[67],c[10])}try{-4==c[44]&&(((0,c[82])(c[56],c[45]),c[31])(c[66]),1)||(0,c[28])((0,c[41])(c[80],c[67]),c[13],c[21],c[70]),(0,c[68])((0,c[58])(c[5],
c[49],c[21]),c[66],c[11],c[18]),(0,c[58])(c[5],(0,c[106*Math.pow(4,5)-108498])(),c[21])}catch(d){(-7<c[77]||((((0,c[37])(c[21],c[19]),(0,c[71])(c[39]),c[58])(c[5],(0,c[Math.pow(6,3)+-23862- -23692])(),c[11]),c[17])((0,c[58])(c[5],(0,c[72])(),c[39]),c[37],(0,c[81])(c[64],c[76]),c[new Date("1970-01-01T02:45:39.000+02:45")/1E3],c[28]),NaN))&&((0,c[60])(c[11])-((0,c[68])((0,c[8])(c[80],c[21]),c[81],c[new Date("1969-12-31T18:15:11.000-05:45")/1E3],c[23]),(0,c[66])(c[39],c[55])),(0,c[37])(c[11],c[31]),
c[8])(c[12],c[39]),2>=c[27]&&(3!==c[73]||((0,c[68])((0,c[37])(c[11],c[51]),c[37],c[3],c[38]),0))&&((0,c[8])(c[36],c[3]),c[7])(c[25],c[10])}finally{10<c[30]&&((0,c[59])(c[34]),c[68])((0,c[4])(c[46],c[6]),c[4],(0,c[72])(c[64],c[31]),c[64],c[41]),3<=c[8]&&((0,c[68])((0,c[4])(c[82],c[44]),c[48],(0,c[48])(c[26],c[37]),c[40],c[16]),c[53])(c[64],c[58]),(7<=c[60]||((0,c[34])(c[70]),0))&&(0,c[77])(c[18],c[44]),-5!==c[78]&&(-7<c[70]||(((0,c[47])((((0,c[39])(c[18]),c[39])(c[0]),c[47])((0,c[37])(c[69],(0,c[71])(),
c[18]),c[40],c[18],c[84]),c[37],c[69],(0,c[25])(),c[18]),c[60])(c[75],c[19]),0))&&((0,c[47])(((0,c[60])(c[67],c[41]),c[15])(c[37],c[59]),c[15],c[13],c[32]),(0,c[15])(c[69],c[35]),c[47])(c[69],c[44])!==(0,c[42])(c[81],c[69])}try{4<c[80]&&(10<c[35]||((0,c[20])((0,c[13])(c[924-219*Math.pow(2,2)],c[43]),c[13],c[76],c[19]),0))&&(0,c[20])((0,c[45])(c[69],c[72]),c[84],c[6],c[45]),-7>=c[76]&&(-6<=c[33]||(((0,c[34])(c[51]),c[50])(c[1]),-81+Math.pow(3,4)%307))&&(0,c[21])(c[53],(0,c[35])(),c[new Date("1970-01-01T05:31:09.000+05:30")/
1E3])%(0,c[44])(c[59],c[52])}catch(d){((0,c[29])(c[51],c[57]),c[21])(c[new Date("1970-01-01T02:15:53.000+02:15")/1E3],(0,c[55])(),c[new Date("1970-01-01T01:01:09.000+01:00")/1E3])}}catch(d){return"enhanced_except_4ZoBnuX-_w8_"+a}return b.join("")};