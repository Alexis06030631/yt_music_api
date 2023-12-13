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
383726182,';,/"};',-580657931,b,-1089517021,null,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1588376018,b,function(d){throw d;},
-716371626,-1720259398,-2047690001,"d10h",571309409,function(d){d.reverse()},
-937394147,-1720259398,-2139455656,1278669789,-221209008,function(d,e,f){var h=e.length;f.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},d.split(""))},
2060666403,-466241943,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-1464511291,1896170849,"split"];c[16]=c;c[34]=c;c[68]=c;try{try{(10!==c[19]||((((0,c[6])(c[71]),c[3])((0,c[62])(c[9],c[28]),c[84],c[90],(0,c[69])(),c[71]),c[25])((0,c[84])(c[76],(0,c[54])(),c[28]),c[62],(0,c[62])(c[29],c[28]),c[10],c[28]),0))&&(0,c[3])(((0,c[3])((0,c[4-Math.pow(1,2)%230])((0,c[3])((0,c[Math.pow(2,5)+17-32])(c[82],c[68]),c[20],c[61]),c[90],c[69],c[67]),c[38],c[58]),(0,c[77])(c[86],c[73])),c[84],c[76],c[Math.pow(1,4)%401- -13]),-9!=c[65]&&(-3<=c[11]?(0,c[82])(c[58],c[32]):(0,c[31])(c[25],
c[14])),-10!==c[44]&&(-9!=c[8]||(((0,c[31])((0,c[63])(c[69],c[54]),c[17],c[60],c[54]),c[41])(c[35],(0,c[83])(),c[59])<=(0,c[38])(c[0]),""))&&((0,c[68])(c[42],c[59]),c[68])(c[12],c[57])*(0,c[22])(c[83],c[75])-(0,c[Math.pow(8,1)-59+59])(c[19],c[83]),7!=c[55]&&(-1>=c[19]||(((0,c[70])(c[78],(0,c[85])(),c[88]),c[1])(c[16],c[88]),(0,c[6])(c[61],c[88]),0))&&(((0,c[46])(c[17],c[47]),c[45])(c[39],(0,c[87])(),c[63]),c[67])(c[11],c[189-Math.pow(8,1)+-123]),7>=c[52]?((((0,c[35])((0,c[67])(c[38],c[63]),c[88],
c[61],c[52]),c[45])(c[39],(0,c[87])(),c[58]),c[81])(((0,c[45])(c[39],(0,c[87])(),c[63]),c[67])(c[79],c[10]),c[35],(0,c[45])(c[39],(0,c[87])(),c[-642+175*Math.pow(4,1)]),c[51],c[22]),c[35])((0,c[45])(c[39],(0,c[60])(),c[63]),c[67],c[153+Math.pow(6,3)+-292],c[63]):(((0,c[88])(c[58],c[33]),c[88])(c[58],c[89]),c[145-Math.pow(3,3)+-101])((0,c[88])(c[58],c[49]),(0,c[20])(c[61],c[34]),c[67],(0,c[88])(c[22],c[86]),((0,c[-13320-Math.pow(5,4)+13970])(c[47],c[61]),c[21])(c[43],c[4]),(0,c[0])(c[35],c[1]),c[Math.pow(6,
5)+7630-15403],c[69]),(7===c[86]||(((0,c[80])(c[new Date("1969-12-31T12:45:12.000-11:15")/1E3],c[64]),c[41])((0,c[73])(c[46],c[64]),c[6],c[28],c[50]),0))&&(((0,c[78])(c[68],c[16]),c[27])(c[77],c[10]),c[27])(c[25],c[69]),-10!==c[54]&&((0,c[51])(c[59],(0,c[66])(),c[69]),(0,c[6])(c[28],c[11]),1)||((0,c[51])(c[59],(0,c[76])(),c[64]),c[48])(c[67]),(4<c[72]||((((0,c[51])(c[59],(0,c[24])(),c[64]),c[41])((0,c[27])(c[43],c[64]),c[73],c[13],c[69]),(0,c[73])(c[37],c[64]),c[6])(c[16],c[30]),0))&&((0,c[80])(c[36],
c[67]),(0,c[78])(c[7],c[64]),(0,c[73])(c[0],c[16]),c[6])(c[64],c[new Date("1970-01-01T04:01:26.000+04:00")/1E3])&(0,c[80])(c[75],c[10]),((0,c[63])(c[69]),c[6])(c[69],c[1])}catch(d){8>=c[71]&&(-9<=c[32]&&((0,c[41])(((0,c[6])(c[10],c[65]),(0,c[27])(c[18],c[67])),c[7],c[65],c[48]),"null")||(((0,c[49])(c[70]),c[74])(c[61],c[65]),c[7])(c[68],c[30])),1>=c[16]&&(2<c[3]?(0,c[7])(c[70],c[10]):(0,c[52])(c[46],(0,c[77])(),c[70])),-5<c[87]&&(4==c[3]?(0,c[42])(((0,c[52])(c[60],(0,c[25])(),c[17]),(0,c[52])(c[60],
(0,c[67])(),c[65]),c[52])(c[60],(0,c[67])(),c[17]),c[28],c[5],c[11]):(0,c[42])((0,c[156*Math.pow(6,5)+-1213014])((0,c[42])((0,c[28])(c[91],c[new Date("1970-01-01T11:00:29.000+11:00")/1E3]),c[23],c[64],c[73]),c[24],c[29],c[25]),c[7],c[54],c[90]))}}catch(d){return"enhanced_except_9pkBieb-_w8_"+a}return b.join("")};