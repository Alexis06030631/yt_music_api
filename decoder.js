const gma = /^[\w.]*$/
const signatureTimestamp = 20059

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
		url = orgaCompose(m.SE,m.sI,m.s)
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
	a={a_:!1,SE:"",sI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.a_=!0;
a.SE=b.url;
a.sI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
ZL.AO(a,27);
ZL.Ab(a,2);
ZL.AO(a,24);
return a.join("")
}

var ZL={zn:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
AO:function(a){a.reverse()},
Ab:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[function(d,e){e.splice(e.length,0,d)},
1580533518,335912929,-2062757723,-207531114,-19434734,1978483705,null,1281474875,"[)\u00d6","unshift",function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
function(d,e,f){var h=e.length;f.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},d.split(""))},
-2107221209,-501967296,-1712892060,1948606580,b,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-543768665,496235521,b,306318187,-1828612495,-621163267,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
1746890538,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-1548787018,1044232233,-2052238918,1055797139,-1321691236,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e){d.push(e)},
2086313996,1845759677,function(d,e,f,h,l,m,n){return d(l,m,n)},
-228653057,298039605,function(d){d.reverse()},
624495995,-633737088,-178551769,-485417821,function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
1388084806,null,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
2142300629,-747740913,-1453840491,-428178141,-1527081870,2111131157,-650917145,400393157,null,-634210272,-634210272,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
831418938,-1287480745,1357172093,-797951655,b,function(d,e,f,h,l){return e(f,h,l)},
"\\{'\u2280",-2070440389,-228653057,797385239,function(d,e,f,h,l,m){return e(h,l,m)},
1055797139,-1939317546,-1262341077];c[7]=c;c[49]=c;c[60]=c;try{try{c[48]>=-4&&(((0,c[69])(((0,c[27])(c[17],c[66]),c[51])(c[37],c[68]),c[11],c[41],c[49]),c[28])(c[17]),[])||((0,c[51])(c[55],c[21]),(0,c[47])(c[49],c[5]),c[63])(c[60],c[13])*(0,c[27])(c[68],c[14]),c[3]<-5&&(c[52]!==-5?(0,c[27])(c[68],c[15]):(0,c[27])(c[49],c[43])),c[65]<10&&(0,c[69])((0,c[28])(c[68]),c[11],c[6],c[7]),c[38]>=5&&(c[41]>2||((0,c[69])((0,c[11])(c[73],c[21]),c[12],c[10],(0,c[35])(),c[21]),0))&&(0,c[69])((0,c[42])(c[49]),c[30],
c[17],c[23])}catch(d){((0,c[65])(c[67],(0,c[59])(),c[56]),(0,c[26])(c[20],c[17]),c[35])(c[56]),(0,c[65])(c[67],(0,c[42])(),c[56])}try{c[18]!==-3&&(c[46]==-1||(((0,c[50])(c[70],c[27]),c[55])((0,c[11])((0,c[35])(c[4],c[20]),c[29],c[36],c[59]),c[11],(0,c[53])(c[31],c[new Date("1969-12-31T16:31:17.000-07:30")/1E3]),c[49],c[22],c[0]),(0,c[32])(c[11]),0))&&(((0,c[65])(c[39],c[4]),(0,c[65])(c[7],c[37]),c[65])(c[78],c[76]),(0,c[13])((0,c[30])(c[28],(0,c[16])(),c[7]),c[29],(0,c[30])(c[28],(0,c[36])(),c[7]),
c[49],c[35])),c[70]<=0&&((0,c[57])(c[29],((((((0,c[46])(c[new Date("1970-01-01T01:00:35.000+01:00")/1E3]),(0,c[8])((0,c[69])(c[0],c[78]),c[45],c[7],c[3]),c[60])(c[35]),(0,c[30])(c[28],(0,c[36])(),c[39]),c[29])(c[11],c[39]),c[69])(c[47],c[7]),c[30])(c[28],(0,c[16])(),c[7]),c[46])(c[78]),(0,c[60])(c[67]),(0,c[8])(((0,c[30])(c[28],(0,c[16])(),c[78]),(0,c[30])(c[28],(0,c[53])(),c[39]),c[46])(c[67]),c[30],c[28],(0,c[52])(),c[39]),c[77],c[7]),1)||(((((((((0,c[45])(c[78],c[42]),c[8])((0,c[29])(c[10],c[67]),
c[54],c[67],c[46]),c[13])((0,c[45])(c[25],c[6]),c[70],(0,c[27])(c[60],c[25]),c[51],c[66]),c[24])(c[69]),c[33])(c[48],c[17]),c[4])(c[79],c[26])&(0,c[4])(c[7],c[8]),(0,c[53])(c[78]),c[75])(c[79],c[71]),c[54])((0,c[48])(c[71],c[36]),c[0],c[33],c[6]),c[34])(c[33])}catch(d){((0,c[65])(c[new Date("1970-01-01T04:31:03.000+04:30")/1E3],(0,c[8])(),c[74]),c[65])(c[63],(0,c[8])(),c[33])}finally{c[54]==10?(0,c[43])((0,c[65])(c[63],(0,c[71])(),c[42]),c[34],c[69]):((0,c[1])(c[74]),c[34])(c[74])}try{c[57]<=1&&(c[23]<
new Date("1970-01-01T08:14:57.000+08:15")/1E3||((0,c[43])((0,c[12])(c[65],(0,c[24])(c[28],c[33]),(0,c[24])(c[76],c[69]),(0,c[24])(c[21],c[42]),c[63],(0,c[51])(),c[33]),c[24],c[5],c[33]),0))&&((((0,c[65])(c[63],(0,c[71])(),c[74]),c[1])(c[42]),c[43])((0,c[0])(c[42],c[50]),c[24],c[75],c[33]),c[24])(c[29],c[74]),c[16]!=10&&(0,c[48])((0,c[37])(c[33],c[3]),c[new Date("1969-12-31T21:30:24.000-02:30")/1E3],(0,c[64])(c[54],c[42]),c[26],c[42])}catch(d){(0,c[20])(c[33],c[79]),(0,c[65])(c[63],(0,c[51])(),c[42])}}catch(d){return"enhanced_except_25wBpOP-_w8_"+
a}return b.join("")};