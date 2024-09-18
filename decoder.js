const gma = /^[\w.]*$/
const signatureTimestamp = 19982

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
		url = orgaCompose(m.ME,m.hI,m.s)
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
	a={vZ:!1,ME:"",hI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.vZ=!0;
a.ME=b.url;
a.hI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
jL.O3(a,3);
jL.PO(a,8);
jL.Az(a,7);
jL.O3(a,3);
return a.join("")
}

var jL={PO:function(a){a.reverse()},
O3:function(a,b){a.splice(0,b)},
Az:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[1438187490,-1023486264,1438187490,null,-1401338461,112622395,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-936129052,39507378,function(d,e,f){var h=d.length;f.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},e.split(""))},
b,944721024,1691639697,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
312903292,function(d){d.reverse()},
function(d,e,f,h,l,m,n){return d(l,m,n)},
b,424462001,195862821,-1769840024,-1746690228,709945108,1921731287,-944539555,1242894989,-1166748856,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
-890579184,"]\u224e'}",function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-673853571,1191207956,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
"Lw16lw",-1998592914,-1187802796,function(d,e,f,h,l,m,n,p,q,r,t){return f(m,n,p,q,r,t)},
-1616409698,-2038333972,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
"[]}']}u",-2032909487,1930545012,1048127826,function(d,e){e.length!=0&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
function(d,e,f,h,l,m){return e(h,l,m)},
-169650631,-844665954,-1252202761,1931747536,null,-1322062021,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
289479129,null,812481645,944882194,-1331219738,1742290521,710050956,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e,f,h,l){return e(f,h,l)},
1931822798,631701991,1194136799,b,785058387,function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
1441346258,-1510028418,657726520,-2037428683,944882194,-1441380666,-1598937351,-1311941200,1953762573,-1568719202,-547574167,-212702850];c[3]=c;c[51]=c;c[56]=c;try{try{c[73]!==-4?((0,c[46])((0,c[45])(c[12],c[67]),c[45],(0,c[45])(c[20],c[51]),c[39+Math.pow(6,new Date("1970-01-01T02:45:05.000+02:45")/1E3)%486],c[56]),(0,c[40])(c[10],c[24]),(0,c[63])((0,c[27])(c[10],c[77]),c[15],c[67]),c[9])((0,c[13])(),c[34],c[10])-(0,c[63])((0,c[40])(c[51],c[76]),c[41],c[4],c[23])<((((0,c[48])(c[12],c[71]),c[50])(c[8],
c[34]),c[44])(c[2],c[3]),c[4])(c[34],c[49]):(((0,c[44])(c[27],c[new Date("1970-01-01T11:30:21.000+11:30")/1E3]),c[70])(((0,c[32])(c[68]),c[26])((0,c[69])(),c[51],c[2])<(0,c[26])((0,c[79])(),c[51],c[2]),(0,c[32])(c[73]),c[80],(0,c[62])(c[77],c[2]),c[44],c[34],c[15]),c[33])(c[26],(0,c[63])((0,c[26])((0,c[47])(),c[51],c[34]),c[26],(0,c[32])(c[34]),(0,c[69])(),c[51],c[27]),(0,c[44])(c[73],c[7]),(0,c[50])(c[31],c[68]),(0,c[47])(),c[51],c[27]),c[7]<10&&((0,c[63])((0,c[50])(c[19],c[2]),c[50],(0,c[4])(c[27],
c[16]),c[5],c[2]),"true")||((0,c[50])(c[22],c[20]),c[44])(c[60],c[68])^(0,c[17])(c[72],c[23]),(c[22]==-7||((0,c[9])((0,c[35])((0,c[35])((0,c[17])(c[29],c[0]),c[12],c[23],c[27]),c[35],c[51],c[16]),(((0,c[30])((0,c[0])(c[17],c[34]),c[0],c[50],c[34]),c[12])(c[49],c[18]),c[12])(c[74],c[34]),c[30],((0,c[64])(c[34]),c[35])(c[10],c[34]),(0,c[12])(c[57],c[18]),(0,c[64])(c[34]),c[12],c[38],c[23]),0))&&(0,c[13])(((0,c[30])((0,c[58])((0,c[19])(),c[1],c[59]),c[76],c[59],c[72]),((0,c[12])(c[33],c[34]),c[76])(c[59],
c[32]),(0,c[58])((0,c[29])(),c[1],c[34]),c[30])((0,c[35])(c[15],c[77]),c[7],c[77],c[5])>=(0,c[58])((0,c[79])(),c[1],c[59]),c[58],(0,c[30])(((0,c[21])(c[34]),c[76])(c[77],c[28]),c[new Date("1970-01-01T11:45:21.000+11:45")/1E3],c[34]),(0,c[79])(),c[1],c[59]),c[54]!=9&&(c[57]===-10?(0,c[76])(c[34],c[66]):(0,c[36])(c[77],c[9])),c[27]>0&&(0,c[30])((0,c[30])((0,c[7])(c[77],c[26]),c[7],c[77],c[56]),c[35],c[2],c[77]),c[38]!=-2&&(c[24]<5?(0,c[58])((0,c[29])(),c[1],c[77]):(0,c[35])(c[42],c[18]))}catch(d){(0,c[30])((0,c[36])(c[59],
c[14]),c[58],(0,c[19])(),c[1],c[59]),(0,c[36])(c[59],c[60]),(0,c[30])((0,c[76])(c[18],c[75]),c[35],c[3],c[23]),(0,c[76])(c[59],c[25])}try{c[66]<=-10&&(((0,c[30])(((0,c[7])(c[52],c[11]),c[61])(c[72],c[40]),c[7],c[71],c[69]),c[1])((0,c[35])(c[71]),c[75],c[81],c[10]),c[35])(c[19],c[26]),((0,c[13])((0,c[73])(),c[80],c[12]),c[7])(c[12])}catch(d){}}catch(d){return"enhanced_except_jpwB8eP-_w8_"+a}return b.join("")};