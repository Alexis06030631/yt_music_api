const gma = /^[\w.]*$/
const signatureTimestamp = 20010

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
		url = orgaCompose(m.ZE,m.rI,m.s)
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
	a={HZ:!1,ZE:"",rI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.HZ=!0;
a.ZE=b.url;
a.rI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
NL.sC(a,7);
NL.Nh(a,2);
NL.sC(a,4);
NL.sC(a,64);
NL.sC(a,44);
return a.join("")
}

var NL={sC:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
Nh:function(a,b){a.splice(0,b)},
DP:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[1848841218,-874912238,null,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
79825781,-79408577,150495247,1191710668,-1763182812,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-122138066,1918869536,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
null,1999517163,-1042849543,1775879186,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
265240597,-1428796516,-122138066,1547644485,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-350422976,b,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
b,-53940587,-166281811,1516554785,1083842025,-430473325,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
1527895038,-1696866937,"catch",-1717171495,-1622393632,b,1330398279,72001538,null,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1656542148,150495247,-2017745242,";,,,{",function(d,e,f,h,l,m){return e(h,l,m)},
function(d,e,f,h,l,m,n){return d(l,m,n)},
-1763182812,-1081112170,1000609853,774091175,667684678,1014178162,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-960483154,2106945136,-609604351,1032749170,function(d,e,f){var h=d.length;f.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},e.split(""))},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
function(d){d.reverse()},
function(d,e){e.length!=0&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
-507702933,function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
1488719308,859121672,755336994,120389004,-1998875686,530940666,679278761,-285911365,537919666,-538320350,-1138721121,-1310769415,function(d,e,f,h,l){return e(f,h,l)}];
c[2]=c;c[13]=c;c[41]=c;try{try{(c[1]!==6||((0,c[32])(c[24],c[43]),""))&&(0,c[63])(c[0],c[41])}catch(d){(0,c[32])(c[26],c[53])}finally{c[36]<-10&&(c[new Date("1969-12-31T16:16:11.000-07:45")/1E3]>6?(0,c[47])(((0,c[3])(c[69],c[24]),c[12])(c[2],c[27]),c[72],(0,c[72])(c[62],c[40]),c[18],c[new Date("1969-12-31T19:00:12.000-05:00")/1E3]):(((0,c[1])(c[44]),c[78])((0,c[60])(),c[53],c[44]),c[2])(c[70],c[31])>(0,c[30])(c[42],c[11])),(c[75]!=4||((0,c[17])(((0,c[17])((0,c[30])(c[20],c[7]),c[50],c[44],c[new Date("1969-12-31T20:15:16.000-03:45")/
1E3]),c[43])(c[56]),c[50],c[56],c[37]),0))&&(((0,c[17])((0,c[30])(c[44],c[10]),c[1],c[31]),c[74])(c[22],c[46]),c[74])(c[19],c[60]),(c[41]!=3||((0,c[61])((0,c[28])(c[22],c[69]),c[45],(0,c[78])(),c[25],c[36]),0))&&((0,c[76])(c[72],c[34]),c[76])(c[31],c[19]),c[new Date("1969-12-31T20:15:37.000-03:45")/1E3]!=-2&&(c[66]!=-4&&((((((0,c[76])(c[4],c[19]),c[76])(c[27],c[58]),c[76])(c[9],c[34]),c[48])(c[36],c[63]),c[48])(c[47],c[new Date("1969-12-31T22:15:32.000-01:45")/1E3]),(0,c[24])(c[32],c[51]),1)||((0,c[41])((0,c[39])(),
c[21],c[32]),(0,c[41])((0,c[74])(),c[21],c[18]),c[8])(c[41],(0,c[24])(c[32],c[60]),(0,c[24])(c[43],c[77]),(0,c[73])(c[32]),(0,c[74])(),c[21],c[32])),c[23]>-6&&(c[46]>9||((0,c[72])(c[62],c[30]),0))&&(0,c[24])(c[15],c[61]),c[77]<=-4&&((((0,c[44])(c[15],c[6]),c[43])((0,c[17])(c[4]),c[58],c[6],c[40]),c[39])(c[12],c[1])+((0,c[1])(c[40],c[32]),c[41])(c[new Date("1970-01-01T09:31:04.000+09:30")/1E3])>=(0,c[74])(c[14]),7)||(((0,c[3])(c[56],c[40]),c[51])((0,c[5])(),c[31],c[40]),(((0,c[51])((0,c[49])(),c[31],
c[28]),c[4])(c[25]),(0,c[51])((0,c[21])(),c[31],c[28]),c[51])((0,c[57])(),c[31],c[42]),c[41])(c[40]),c[9]!=1&&(c[48]===6||((0,c[new Date("1970-01-01T09:45:34.000+09:45")/1E3])(c[40],c[26]),0))&&(0,c[1])(c[42],c[12]),c[76]>=10&&(c[43]==2&&((((0,c[34])(c[40],c[0]),c[67])((0,c[51])((0,c[49])(),c[31],c[40]),c[34],c[42],c[9]),(0,c[51])((0,c[11])(),c[31],c[42]),(0,c[51])((0,c[11])(),c[31],c[42]),c[67])((0,c[51])((0,c[49])(),c[31],c[40]),c[34],c[64],c[55]),(0,c[34])(c[25],c[29]),6)||((((((0,c[3])(c[27],
c[53]),c[67])((0,c[3])(c[62],c[25]),c[63],c[24],c[53]),c[53])(c[52],c[47]),c[26])(c[20],c[57]),c[26])(c[20],c[78]),c[59])((0,c[55])(c[42],c[34]),c[75],c[20])),(c[31]==-9||((0,c[36])((0,c[55])(c[52],c[32]),c[11],(0,c[43])((0,c[76])(),c[23],c[34]),c[46],(0,c[74])(c[73],c[34]),c[20],c[37]),void 0))&&((0,c[43])((0,c[76])(),c[23],c[32]),(0,c[43])((0,c[76])(),c[23],c[34]),c[59])((0,c[26])(c[20],c[65]),c[43],(0,c[76])(),c[23],c[32]),c[42]>=9&&(c[new Date("1969-12-31T17:01:13.000-07:00")/1E3]>4&&((0,c[43])((0,c[13])(),
c[23],c[34]),1)||(0,c[46])(c[32],c[9]))}}catch(d){return"enhanced_except_qpwB1eP-_w8_"+a}return b.join("")};