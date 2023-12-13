const gma = /^[\w.]*$/
const signatureTimestamp = 19702

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
	const url = orgaCompose(m.YC,m.RF,m.s)
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
	a={dX:!1,YC:"",RF:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.dX=!0;
a.YC=b.url;
a.RF=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
wP.J2(a,2);
wP.Nl(a,65);
wP.qR(a,48);
wP.Nl(a,66);
return a.join("")
}

var wP={qR:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
Nl:function(a){a.reverse()},
J2:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(""),c=[554402273,-580464378,-620154570,function(d,e,f,h,l){return e(f,h,l)},
-271051191,-1268641244,function(d){d.reverse()},
1020412645,177807725,1361148677,963725178,-1655011340,184353065,function(d,e){e.splice(e.length,0,d)},
-1655011340,-1639058034,null,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
function(d,e){d.push(e)},
-1512023736,-271060316,function(d,e,f,h,l,m,n,p,q){return f(n,p,q)},
-218076557,545582296,'}"\u00d8',function(d,e,f,h,l,m){return e(h,l,m)},
1702155658,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
b,-300392185,",,/)",1515495830,-2040337724,-1229990470,null,-1360517483,-382928810,-397209172,-624939881,-880992294,283924275,function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-1649725144,-188143157,-588017056,3423759,1984131602,-1618282389,1431559792,1472294973,-382928810,1596563876,687382300,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e){if(0!=e.length){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
989747916,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
-130022384,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-1854773143,-427952621,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
383726182,';,/"};