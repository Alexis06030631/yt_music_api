const gma = /^[\w.]*$/
const signatureTimestamp = 19857

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
	const url = orgaCompose(m.jD,m.DG,m.s)
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
	a={ZX:!1,jD:"",DG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.ZX=!0;
a.jD=b.url;
a.DG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
XO.AO(a,1);
XO.v4(a,6);
XO.v4(a,12);
XO.v4(a,46);
XO.v4(a,52);
XO.v4(a,6);
XO.v4(a,42);
return a.join("")
}

var XO={JU:function(a){a.reverse()},
v4:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
AO:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(""),c=[-1037020419,666698288,1112932538,function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
1485794188,-527591577,-250320379,1515086534,-1292133903,422929062,960213741,function(d,e,f,h,l,m,n){return d(l,m,n)},
null,550259941,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
737484616,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
1359677610,-1631907137,function(d,e,f){var h=f.length;e.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},d.split(""))},
-286467728,-2143015706,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
"),[/[",979956427,-1758864084,782782001,-902345187,-1285779411,-1532631998,-1881009765,"throw",1757799805,-982377160,1473520125,null,-1722780956,-1239926247,1927537739,b,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
1451478125,function(d,e,f,h,l){return e(f,h,l)},
"),[/[",function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
-1239926247,null,function(d,e){d.push(e)},
422006254,function(d,e,f,h,l,m){return e(h,l,m)},
-445326995,1927537739,b,function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
1472411670,function(d){d.reverse()},
-680628708,488584811,-1350688868,-1028486657,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-616975523,function(d,e){d.splice(d.length,0,e)},
-1053922582,-1191908579,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
b,-2108915187,909967272,-168437575,-2108915187,function(d,e){d.push(e)}];
c[12]=c;c[36]=c;c[48]=c;try{try{4<=c[25]&&(3!=c[65]?(0,c[44])(((0,c[17])(c[48],c[5]),c[Math.pow(8,1)%125+8])(c[43],c[36]),c[39],c[51],c[13],(0,c[61])()):(0,c[63])((0,c[63])((0,c[35])(c[23],c[new Date("1970-01-01T11:15:13.000+11:15")/1E3]),c[60],c[17],c[13]),c[65],c[13],c[8])),-9<c[23]&&(-3>c[16]?(0,c[22])(c[67],c[25]):(0,c[60])(c[66],c[0])),8!==c[20]?(0,c[12])(((((0,c[2])(c[55]),c[37])(c[14],c[23]),c[5])(c[42],c[52]),c[37])(c[18],c[36]),c[3],(0,c[64])(c[42],c[6]),c[64],(0,c[38])(c[62],c[73]),c[75],
c[208-Math.pow(6,4)%218]):((0,c[0])(c[75],c[53]),(((0,c[34])(c[22],c[14],(0,c[40])()),c[-3982+251*Math.pow(4,2)])(c[Math.pow(2,3)-137+151],c[73],(0,c[40])()),((0,c[34])(c[22],c[14],(0,c[31])()),c[8])(c[42],c[58]),(0,c[13])(c[28],c[60]),c[8])(c[6],c[27])),2>=c[21]?(0,c[8])(c[99+Math.pow(8,5)-32849],c[15]):(0,c[71])(c[6]),-2<c[7]&&(3==c[13]?((((0,c[66])((0,c[63])(c[43],c[62]),c[39],c[3],c[8]),c[10])(c[34]),c[76])(c[34],c[0]),c[42])(c[54],c[3],(0,c[36])()):(0,c[66])(((0,c[12])(c[58],c[26]),(0,c[63])(c[2],
c[3])),c[39],c[62],c[35])===((0,c[76])(c[58],c[47]),c[25])(c[34],c[57]))}catch(d){(0,c[-164-Math.pow(1,2)+231])((0,c[-44958+72*Math.pow(5,4)])(c[54],c[16],(0,c[36])()),c[68],c[3],c[37]),(0,c[5])(c[34]),(0,c[66])((0,c[42])(c[54],c[62],(0,c[64])()),c[42],c[54],c[62],(0,c[36])())}finally{-5<c[65]&&(((0,c[66])(((0,c[39])(c[62],c[4]),c[63])(c[9],c[new Date("1970-01-01T04:00:16.000+04:00")/1E3]),c[39],c[34],c[7]),((0,c[697-23*Math.pow(3,3)])(c[1],c[56]),c[38])(c[72],c[3]),c[66])((0,c[63])(c[new Date("1970-01-01T07:45:31.000+07:45")/
1E3],c[184-Math.pow(7,4)+2279]),c[68],c[62],c[30]),(0,c[5])(c[3]),c[-26*Math.pow(5,2)+718])(c[16],c[50])/(0,c[38])(c[29],c[58])%(0,c[72])(c[36],c[39])!==(0,c[18])(c[77],c[67])}try{-10!==c[64]&&(((0,c[73])((0,c[12])(c[10]),c[45],c[20],c[65]),c[42])(c[48],(0,c[77])(c[25],c[64]),((0,c[60])((0,c[47])(c[50],c[12]),c[47],(0,c[48])(c[67],c[61]),c[41],c[10]),c[47])(c[-190*Math.pow(7,2)+9344],c[40])>=(0,c[59])(c[70]),(0,c[44])(c[38],c[35]),c[38],c[41]),c[44])(c[57],c[73])}catch(d){(0,c[15])(c[38],c[76])}}catch(d){return"enhanced_except_kZsB7uT-_w8_"+
a}return b.join("")};