const gma = /^[\w.]*$/
const signatureTimestamp = 19984

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
		url = orgaCompose(m.NE,m.hI,m.s)
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
	a={uZ:!1,NE:"",hI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.uZ=!0;
a.NE=b.url;
a.hI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
lL.GK(a,57);
lL.se(a,15);
lL.GK(a,56);
lL.dA(a,3);
lL.se(a,16);
lL.se(a,10);
lL.dA(a,3);
lL.se(a,26);
lL.GK(a,1);
return a.join("")
}

var lL={dA:function(a,b){a.splice(0,b)},
se:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
GK:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[606138958,-116097679,-721758836,-574866802,-410606707,536568761,-116507671,1608143383,-984096693,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
536568761,-1446470352,-1221927030,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
-72143555,-1799172936,"}{]])",778344821,-670213426,876455571,1228733183,-871643470,-349553636,-500166192,b,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
194614600,-1173184766,null,-1711602260,2036602428,"forEach","/;;[\u00d5",1708046767,1096632370,null,function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
-1786672081,null,905585666,-647507720,function(d,e,f){var h=e.length;d.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},f.split(""))},
-498589968,function(d,e){d.splice(d.length,0,e)},
-86032564,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-1176399617,b,-1982371393,940868974,-1049108031,function(d,e,f,h,l,m,n){return d(l,m,n)},
-1871950721,-72143555,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
1569568540,-1914045047,1999651665,1455218409,1866201453,-1403571380,-1158872463,-697463249,function(d,e,f,h,l,m){return e(h,l,m)},
1681984600,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-1619050149,66040741,-529347247,1359405057,function(d,e,f,h,l){return e(f,h,l)},
b,-1376234494,function(d){d.reverse()},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
1743331147,1894892843,"this"];c[31]=c;c[38]=c;c[41]=c;try{try{c[6]!=5&&(0,c[74])((0,c[74])((0,c[74])((0,c[77])(c[31]),c[42],c[31],c[81]),c[72],c[31],c[2]),c[13],c[34],c[40]),c[61]>-6&&(0,c[74])(c[72],c[49])!==(0,c[16])(c[63],c[53])}catch(d){(0,c[74])(c[81],c[48]),(0,c[69])(c[5],(0,c[18])(),c[79])}try{c[54]!=new Date("1969-12-31T12:30:08.000-11:30")/1E3&&(c[0]!=2||((0,c[74])(c[75],c[37]),null))&&(0,c[16])(c[38],c[19])}catch(d){(0,c[22])(c[5],c[77])}try{c[53]!==-8&&(c[8]!==7?(0,c[39])((0,c[45])(c[2],
c[5]),c[16],c[75],c[14]):(0,c[69])(c[63],(0,c[3])(),c[79])+(0,c[45])(c[28],c[75])),c[27]!=-3&&(c[28]>=3||((0,c[74])(c[5],c[8]),0))&&(0,c[69])(c[63],(0,c[56])(),c[79]),c[68]!=9&&(c[29]<=-4&&((0,c[4])(c[51],c[38]),1)||(0,c[45])(c[80],c[72]))}catch(d){(0,c[69])(c[38],(0,c[35])(),c[79]),((0,c[69])(c[5],(0,c[18])(),c[32]),c[new Date("1969-12-31T22:00:22.000-02:00")/1E3])(c[75],c[71])}try{c[31]!=7&&(((0,c[67])(c[81],c[80]),c[45])(c[9],c[81]),c[57])(c[1])|(0,c[57])(c[13]),c[8]!==1&&(0,c[22])((0,c[14])((0,c[70])(c[63],
c[28]),c[45],(0,c[16])(c[19],c[72]),c[37],c[52]),c[64],c[63],c[28])}catch(d){(0,c[68])(c[46],c[22]),(0,c[48])(c[21])}finally{c[23]>-6&&(c[57]!==-7&&((0,c[45])((0,c[37])((0,c[10])(c[9],c[16]),c[10],(0,c[68])(c[9],c[73]),c[9],c[27262+new Date("1969-12-31T23:26:38.000+07:00")/1E3]),c[19],c[12]),1)||((0,c[2])(c[21],c[79]),(0,c[37])((0,c[37])((0,c[20])(c[36],c[38]),c[72],c[36],c[50]),c[43],c[3],c[45]))),c[59]!=-4&&(c[59]<-1?(0,c[37])((0,c[37])((0,c[20])(c[61],c[27]),c[14],c[61],c[41]),c[20],c[45],c[71]):
((0,c[14])(c[36],c[53]),c[37])((0,c[43])(c[68],c[45]),c[2],c[10],c[45]))}try{c[39]<-1&&(c[3]==-10&&((((0,c[20])(c[61],c[19]),c[20])(c[45],c[56]),(0,c[37])((0,c[34])(c[79]),c[20],c[79],c[8])+(0,c[14])(c[45],c[24]),c[67])(c[45],(0,c[33])(),c[77]),"null")||(0,c[15])((((0,c[2])(c[52],c[36]),(0,c[2])(c[28],c[79]),c[54])(c[55],c[7]),c[25])(c[69],c[52]),c[44],(0,c[50])(c[30],c[80]),c[37],c[78],c[8])),c[8]!=-10&&(c[58]>3||((0,c[54])((0,c[59])((0,c[54])((0,c[31])(c[62],c[75]),c[19],c[56],c[78]),c[51],(0,c[1])(c[78],
(0,c[18])(),c[11])>>>(0,c[1])(c[53],(0,c[18])(),c[47]),c[53]),c[37],c[53],c[65]),0))&&((0,c[1])(c[78],(0,c[18])(),c[47]),c[74])(c[1],((0,c[1])(c[78],(0,c[16])(),c[11]),c[60])(c[22],c[53]),(0,c[60])(c[76],c[7]),(0,c[37])(c[53],c[55]),c[53],(0,c[new Date("1970-01-01T04:45:16.000+04:45")/1E3])(),c[11])}catch(d){(0,c[6])(c[53],c[15]),(0,c[1])(c[78],(0,c[18])(),c[11])}}catch(d){return"enhanced_except_kJwB7-P-_w8_"+a}return b.join("")};