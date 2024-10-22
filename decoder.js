const gma = /^[\w.]*$/
const signatureTimestamp = 20013

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
		url = orgaCompose(m.TE,m.iI,m.s)
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
	a={BZ:!1,TE:"",iI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.BZ=!0;
a.TE=b.url;
a.iI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
OL.P9(a,13);
OL.FY(a,61);
OL.FY(a,66);
OL.YN(a,1);
OL.P9(a,31);
return a.join("")
}

var OL={YN:function(a,b){a.splice(0,b)},
P9:function(a){a.reverse()},
FY:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[null,1628721662,"[{{,{;}",-1683102142,function(d,e){e.splice(e.length,0,d)},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
function(d,e,f,h,l){return e(f,h,l)},
656540096,-1359727092,822902517,null,function(d){d.reverse()},
null,656540096,-1517754685,function(d,e,f,h,l,m){return e(h,l,m)},
-778035352,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-828004569,-954834418,1983147250,260733816,1857268019,-1333156485,-1088013945,-1983614429,1163338147,-1643525365,"34FLA",878555846,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
b,1952795489,"[{{,{;}",-1137363465,/(\/)}()\\/,1687753384,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
-395339969,2140109036,-1038488399,-186023822,2032864111,-1768956890,1152263250,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
-828004569,function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
-913590489,b,function(d,e){e.length!=0&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
"break",2140505803,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
b,function(d,e){d.push(e)},
function(d,e,f){var h=d.length;f.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},e.split(""))},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
1357867161,-387523141,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-397802647,-1848079010,-713882828];c[0]=c;c[11]=c;c[13]=c;try{try{c[33]>=-10&&(c[26]!=-8?(0,c[5])(c[3],c[11]):(0,c[17])((0,c[19])(),c[12],c[58])),c[new Date("1969-12-31T20:46:05.000-03:15")/1E3]!==0&&((((0,c[33])((0,c[31])(c[45],c[15]),c[8],c[58],c[36]),c[8])(c[26],c[35]),(0,c[8])(c[10],c[21]),c[64])(c[15],c[61]),c[16])(c[39],c[45])+((0,c[64])(c[26],c[49]),c[19])(c[4],c[15]),c[48]!==4&&(((((0,c[19])(c[4],c[26]),c[55])((0,c[31])(c[4],c[64]),c[24],(0,c[51])(c[50]),c[1],c[16]),c[23])(c[32],c[14]),c[20])(((0,c[45])(c[new Date("1969-12-31T12:45:27.000-11:15")/
1E3],c[44]),c[47])(c[27],c[10]),c[67],c[27],c[60])%(((0,c[64])((0,c[59])(c[3]),c[36],c[10],c[66]),(0,c[new Date("1969-12-31T14:30:29.000-09:30")/1E3])(c[63],c[23]),c[50])(c[new Date("1970-01-01T07:30:28.000+07:30")/1E3],c[10]),c[new Date("1969-12-31T16:45:55.000-07:15")/1E3])(c[8],c[3])&((0,c[55])(c[65],c[11]),c[45])(c[8],c[11])|(0,c[47])((0,c[19])(c[2],c[62]),c[19],c[51],c[31])*(0,c[22])(c[60],c[53]),(0,c[44])(c[30],c[51]),c[17])(c[37],c[34]),c[67]>=-7&&(c[35]>0&&((((0,c[62])(c[9],c[68]),c[64])((0,c[new Date("1970-01-01T03:16:04.000+03:15")/
1E3])((0,c[64])((0,c[45])((0,c[47])(),c[10],c[38]),c[46],c[19],c[0]),c[58],c[19]),c[45],(0,c[60])(),c[15],c[38]),c[34])(c[54],c[52])>>(0,c[58])(c[19]),7)||((((0,c[45])((0,c[new Date("1969-12-31T12:30:50.000-11:30")/1E3])(),c[10],c[38]),((0,c[36])(c[38],c[32]),c[62])(c[14],c[38]),c[62])(c[26],c[43]),c[new Date("1970-01-01T02:15:45.000+02:15")/1E3])((0,c[3])(),c[15],c[38]),c[64])((0,c[62])(c[29],c[38]),c[39],c[20],c[19]))}catch(d){(0,c[63])(c[38]),(0,c[46])(c[43],c[6]),(0,c[62])(c[31],c[70]),(0,c[45])((0,c[3])(),
c[10],c[43])}try{c[41]!==2&&(0,c[42])((0,c[64])((0,c[39])(c[24],c[43]),c[62],c[30],c[19]),c[64],(0,c[39])(c[53],c[19]),c[63],c[19])}catch(d){(0,c[62])(c[33],c[68])}}catch(d){return"enhanced_except_rZwB0uP-_w8_"+a}return b.join("")};