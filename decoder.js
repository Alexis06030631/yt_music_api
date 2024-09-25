const gma = /^[\w.]*$/
const signatureTimestamp = 19989

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
		url = orgaCompose(m.QE,m.jI,m.s)
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
	a={tZ:!1,QE:"",jI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.tZ=!0;
a.QE=b.url;
a.jI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
iL.h5(a,0);
iL.Z2(a,3);
iL.YZ(a,4);
iL.YZ(a,25);
iL.h5(a,21);
iL.Z2(a,2);
iL.YZ(a,17);
iL.YZ(a,29);
return a.join("")
}

var iL={Z2:function(a,b){a.splice(0,b)},
h5:function(a){a.reverse()},
YZ:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
2132624499,1156192195,-443668219,-1401478829,function(d,e,f,h,l,m){return e(h,l,m)},
1586484914,-1679594478,null,-1138324936,1954026263,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-1721427674,-2027128488,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
b,function(d,e){d.splice(d.length,0,e)},
2115209877,474510643,1056237912,1808146790,-767502891,function(d,e){d.push(e)},
701624983,360469679,1334225028,-192670216,-68143261,170285883,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
-1251351710,b,1981833724,-187536725,2112662980,1902702275,295165801,1565984073,-1096983329,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
1305298887,1546269205,1798760540,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1915294750,1950659214,1137779184,-797534251,function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
220498674,669247297,347813554,function(d,e,f,h,l){return e(f,h,l)},
1761108794,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
867719718,"while",b,function(d,e,f,h,l){return e(f,h,l)},
-340955518,function(d,e,f){var h=e.length;f.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},d.split(""))},
null,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-1110265996,-1955450791,/(,,)[/,3,//,})][};]/,1700890442,function(d){d.reverse()},
2076676239,null,920524211,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)}];
c[8]=c;c[62]=c;c[70]=c;try{try{c[1]!=1&&((0,c[29])(c[62],c[67]),c[45])(c[63],c[46])}catch(d){(0,c[45])(c[2],c[51])}try{c[56]>new Date("1969-12-31T17:59:57.000-06:00")/1E3&&(c[65]>1?(0,c[4])(((0,c[66])(c[62],(0,c[16])(),c[36]),(0,c[66])(c[62],(0,c[16])(),c[63]),c[45])(c[67],c[23]),c[58],(0,c[34])(c[67],c[8]),c[44],c[67],c[28]):(0,c[4])((((0,c[34])(c[36],c[29]),c[54])(c[13],c[47]),c[19])(c[63],c[6]),c[64],(0,c[34])(c[67],c[11]),c[49],c[24],c[42]))}catch(d){(0,c[49])(c[67],c[26])}try{(c[42]!=2||((0,c[23])(c[40],
c[29]),null))&&(0,c[49])(c[40],c[21]),c[52]<=-2&&(((0,c[48])(c[24],c[60]),c[70])(c[66],(0,c[4])(),c[67]),"NaN")||((0,c[58])(c[71],c[28]),c[58])(c[17],c[41]),c[16]<=-4&&(c[63]!=9&&((0,c[58])(c[new Date("1970-01-01T03:15:17.000+03:15")/1E3],c[13]),1)||(0,c[0])(c[67],c[36]))}catch(d){((0,c[72])(c[new Date("1969-12-31T21:31:07.000-02:30")/1E3]),c[72])(c[40]),(0,c[48])(c[67],c[37])}finally{c[63]!=-10&&((((((0,c[48])(c[24],c[57])*(0,c[38])(c[24],c[1]),((0,c[23])(c[17],c[16]),c[34])(c[40],c[17]),c[34])(c[28],
c[13]),c[9])(c[58],c[41]),c[19])(c[40],c[22]),c[29])((0,c[23])((0,c[9])(c[1],c[5]),c[19],c[58],c[6]),c[19],c[1],c[7]),((0,c[48])((0,c[19])(c[58],c[8])>(0,c[59])(c[40],c[38]),c[34],(0,c[43])(c[58]),c[40],c[53]),(0,c[57])(c[32],c[64]),c[56])(c[7]),c[6])(c[55],c[43])}try{c[13]!=new Date("1969-12-31T22:30:00.000-01:30")/1E3&&(c[55]>-10?(0,c[40])(c[36],(0,c[34])(),c[67]):(0,c[7])(c[49],c[65])),c[45]<8&&(c[72]!=-4?(0,c[65])(c[51],c[23]):(0,c[26])(c[25]))}catch(d){((0,c[65])(c[68],c[61]),c[26])(c[33])}try{c[34]==
-9?(0,c[2])(c[44],c[3]):(0,c[52])(c[25],c[8]),(0,c[2])(c[new Date("1969-12-31T18:45:11.000-05:15")/1E3],c[44])<(0,c[36])(c[33])>(0,c[26])(c[25])}catch(d){c[14]>6&&(c[11]<-7&&((((0,c[67])((0,c[12])(c[21],c[74]),c[50],c[25],c[17]),c[46])(c[37],c[1]),c[new Date("1969-12-31T19:15:27.000-04:45")/1E3])(c[2],c[58]),/()(;)/)||(((0,c[3488-Math.pow(2,new Date("1969-12-31T22:30:05.000-01:30")/1E3)+-3385])(c[37],c[31]),c[36])((0,c[68])(c[64],(0,c[51])(),c[65]),c[46],c[65],c[40]),c[68])(c[64],(0,c[16])(),c[65])),
c[74]>4&&(c[74]>=0?((0,c[34])(c[69],c[63]),c[49])(c[47],c[31]):((0,c[46])(c[42],(0,c[54])(),c[43]),c[73])(c[56],c[61]))}finally{c[66]!==-1&&(c[22]<=2||((0,c[46])(c[42],(0,c[0])(),c[74]),void 0))&&(0,c[73])(c[56],c[68])}}catch(d){return"enhanced_except_lZwB6uP-_w8_"+a}return b.join("")};