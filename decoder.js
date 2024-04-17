const gma = /^[\w.]*$/
const signatureTimestamp = 19828

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
	const url = orgaCompose(m.eD,m.rG,m.s)
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
	a={LX:!1,eD:"",rG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.LX=!0;
a.eD=b.url;
a.rG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
eP.fU(a,24);
eP.Sq(a,3);
eP.fU(a,28);
eP.fU(a,63);
eP.Wc(a,7);
eP.Sq(a,1);
return a.join("")
}

var eP={Sq:function(a,b){a.splice(0,b)},
fU:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
Wc:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(""),c=[1107203754,function(d,e){e.push(d)},
b,1806027583,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
888895219,-2072470244,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
null,857189074,"(/,u",1946059045,-1182523160,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
211452770,-243643181,642644786,1680394501,394772562,2126104864,"tIMLI","{(){,(",-1751929498,-988948833,446046029,function(d){d.reverse()},
1933066561,606338749,-1295711672,-751908461,-561825133,259706940,2126104864,798830468,507177353,-801151411,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-369662246,180867347,null,-1670963511,function(d,e,f,h,l){return e(f,h,l)},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
360344502,-1011621494,1187882169,-420302676,653416087,function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
1895958055,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
b,-1076692228,/[/,3,/}"\\][,]}()/,-714760638,null,function(d,e,f){var h=e.length;f.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},d.split(""))},
1743913927,-1360436551,function(d,e,f,h,l,m,n){return d(l,m,n)},
392618430,-1664359187,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
1755665311,function(d,e,f,h,l,m){return e(h,l,m)},
-57432412,function(d,e){0!=e.length&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
b,-2047040324];c[9]=c;c[40]=c;c[56]=c;try{try{1!==c[45]&&(((0,c[4])(c[40],c[55]),(0,c[49])(c[67],c[34]),c[24])((0,c[24])(((0,c[49])(c[6],c[22]),(0,c[60])(c[6+Math.pow(6,5)+-7728],c[27])),c[25],c[50],c[44]),c[60],c[61],c[7]),(0,c[28])(c[11224+Math.pow(1,5)+-11182]),c[69])(c[47],c[55]),7>=c[23]&&(-10==c[56]||(((((0,c[41])(c[48],c[5]),c[59])(c[8],c[60]),c[35])(c[44],c[40]),c[0])(c[32],c[36]),(0,c[31])(c[65],c[36]),0))&&(0,c[29])((0,c[31])(c[64],c[20]),c[7],(0,c[6])((0,c[6])((0,c[111-Math.pow(6,5)%208])(c[54],
c[43]),c[7],c[new Date("1969-12-31T13:30:32.000-10:30")/1E3],c[23*Math.pow(5,4)-14370]),c[31],c[68],c[43]),c[16],c[66]),-5!=c[37]&&((((0,c[13])(c[159*Math.pow(2,2)+-632],c[25]),c[-867+97*Math.pow(new Date("1969-12-31T15:00:03.000-09:00")/1E3,2)])((0,c[29])((0,c[60])(c[32]),c[42],(0,c[42])(c[4],c[30]),c[2],c[67]),c[64],c[55],c[53]),c[57])(((0,c[8])(((0,c[12])(c[54],c[55]),c[19])(c[new Date("1969-12-31T17:01:07.000-07:00")/1E3],c[21]),c[10],((0,c[57])(((0,c[2])(c[6+Math.pow(2,5)+-2],(0,c[22])(),c[13]),
c[19])(c[67],c[65]),c[12],c[27],c[1]),c[52])(c[24]),c[17],(0,c[12])((0,c[46])(c[2],c[7]),c[57],c[66],c[2]),c[56]),c[64])(c[57],(0,c[5])(c[14],c[35]),(0,c[5])(c[new Date("1969-12-31T17:45:45.000-06:15")/1E3],c[65]),(0,c[50])(c[68],c[44]),c[40],c[28]),c[25],c[9],c[22]),c[26])((0,c[25])(c[9],c[32]),c[67],c[55],c[12])*(0,c[19])(c[9],c[51])*(0,c[19])(c[12],c[52]),10!==c[37]?(((0,c[26])((0,c[1])(c[39],c[9]),c[1],c[65],c[12]),(0,c[60])(c[23],c[63]),c[60])(c[28],c[69]),c[3])(c[19],c[7]):(0,c[13])((0,c[3])(c[5],
c[10])>(0,c[172+Math.pow(5,4)-776])(c[57],(0,c[64])(),c[5]),c[41],(0,c[36])((0,c[21])(c[57],(0,c[64])(),c[5]),c[21],c[57],(0,c[27])(),c[Math.pow(5,4)+159-751]),c[22])}catch(d){(0,c[36])(((0,c[29])(c[5],c[55]),c[21])(c[57],(0,c[0])(),c[33])*(0,c[35])(c[5],c[51]),c[21],c[57],(0,c[64])(),c[5])}}catch(d){return"enhanced_except_9JoBi-X-_w8_"+a}return b.join("")};