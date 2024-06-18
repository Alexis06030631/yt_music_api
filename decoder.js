const gma = /^[\w.]*$/
const signatureTimestamp = 19887

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
	const url = orgaCompose(m.bE,m.sH,m.s)
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
	a={OY:!1,bE:"",sH:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.OY=!0;
a.bE=b.url;
a.sH=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
QO.YE(a,70);
QO.CA(a,35);
QO.GC(a,2);
QO.YE(a,32);
QO.YE(a,58);
QO.YE(a,31);
return a.join("")
}

var QO={GC:function(a,b){a.splice(0,b)},
YE:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
CA:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(""),c=[481196748,function(d,e){d.splice(d.length,0,e)},
-1184122307,-1844585791,-1517999176,-1838315746,-391786256,function(d,e,f,h,l){return e(f,h,l)},
311082973,777402095,-513835569,-1517999176,b,777402095,b,function(d,e){e.length!=0&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
"/([\\/,[",function(d,e){d.push(e)},
1836568272,",54];c[51]=c;",-132471649,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
2099923865,-1844585791,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-1177328935,1637869400,1340863434,1591384456,function(d){throw d;},
-893696909,-1785346148,186785386,512500232,976315399,55621845,function(d,e,f,h,l,m,n){return d(l,m,n)},
1968846220,-120562974,1415280244,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1617495598,null,function(d){d.reverse()},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
-439060673,2108931577,function(d,e,f){var h=d.length;e.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},f.split(""))},
-206894781,"o6LTxqq",-530102236,-785373294,function(d,e,f,h,l,m){return e(h,l,m)},
null,null,1096979497,"\u2210]}(/",1867530696,196808569,-1759560780,-120562974,-939717184,1123017595,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
976315399,886367998,1481614131,-1632737085,1506052226,-1259426209,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
-963596628,1599531971,1653761992,193670587,-565480227,b,-1733454587,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-147499041,-414478713,444508829,302113098,2140193951,714051216,1812860928,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
-949341690,-2000214115,2049985941];c[42]=c;c[53]=c;c[54]=c;try{try{c[84]<6?((0,c[44])(c[new Date("1969-12-31T14:45:53.000-09:15")/1E3],c[62]),c[71])(c[Math.pow(2,2)+7600-7592],c[new Date("1970-01-01T09:01:20.000+09:00")/1E3]):((0,c[88])(c[42],c[0]),(0,c[88])(c[0],c[28])),(0,c[7])(((0,c[29])(c[77]),c[47])((0,c[63])(),c[14],c[49]),c[11+Math.pow(6,new Date("1970-01-01T05:15:02.000+05:15")/1E3)-3],c[76],c[26])}catch(d){c[54]>new Date("1970-01-01T07:00:00.000+07:00")/1E3&&(c[51]>-9||((0,c[52])((0,c[43])(c[12]),
c[15],(0,c[89])(c[86],c[53]),c[22],c[66]),(0,c[71])((0,c[10])(),c[8],c[73]),0))&&(((0,c[31])((0,c[71])((0,c[10])(),c[36],c[73]),c[1],c[77]),c[19])(c[66],c[57]),c[71])((0,c[18])(),c[8],c[73]),c[72]===7?(0,c[48])(((0,c[68])(c[8],c[79]),c[68])(c[38],c[62]),c[76],(0,c[68])(c[8],c[4]),c[20],(0,c[71])((0,c[18])(),c[38],c[73]),c[44],c[Math.pow(1,1)-7200+7235]):(0,c[76])((0,c[68])(c[38],c[3])+(0,c[1])(c[8]),c[20],(0,c[31])((0,c[19])(c[7],c[42]),c[20],c[63],c[8]),c[29],c[66]),c[72]>=9?(0,c[70])(c[10],c[83]):
(0,c[188%Math.pow(4,4)-118])(c[10],c[25]),c[14]>9?((0,c[70])(c[40],c[30+Math.pow(6,1)- -31]),c[73])((0,c[2])(),c[10],c[75]):(0,c[33])((0,c[4])(c[68],c[89]),c[40],c[29],c[70]),c[79]==-1?(0,c[52])((0,c[40])(c[57],c[33]),c[22-Math.pow(7,1)- -74],c[57],c[72]):((0,c[60])(c[53],c[Math.pow(6,2)-69+38]),c[88])(c[59])}finally{c[55]===-8+Math.pow(4,3)%17?((((0,c[52])((0,c[41])(c[45],c[28]),c[89],c[57],c[79]),c[-503+105*Math.pow(5,1)])(c[new Date("1970-01-01T05:16:27.000+05:15")/1E3]),c[40])(c[29],c[26]),c[92])((0,c[31])(),
c[29],c[1]):(0,c[52])(((0,c[4])((0,c[41])(c[new Date("1969-12-31T21:16:17.000-02:45")/1E3],c[59]),c[Math.pow(3,4)+-31725- -31704],(0,c[88])(c[5]),c[56],c[35]),c[70])(c[64]),c[40],c[28],c[67])}try{c[3]==-5&&((0,c[89])(c[29],c[35]),"NaN")||(0,c[88])(c[28]),c[42]<5&&(c[73]<=0||(((0,c[51])(c[82],c[63]),c[52])(c[87],c[2]),""))&&(0,c[40])((0,c[32])(c[new Date("1970-01-01T05:01:05.000+05:00")/1E3],c[64]),c[3],c[63],c[41]),(0,c[18])(c[87]),(0,c[40])((0,c[53])(),c[63],c[91]),(0,c[40])((0,c[53])(),c[35],c[91])}catch(d){c[57]!==
8&&(c[60-196%Math.pow(1,4)]>=59-Math.pow(1,2)+-50||((0,c[26])((0,c[0])((0,c[69])(c[33],c[58])|(0,c[0])((0,c[69])(c[87],c[62]),c[64],c[5],c[88]),c[38],c[69]),(0,c[85])(c[22],c[5]),c[57],(0,c[19])(c[72],c[32]),c[0],(0,c[19])(c[2],c[33]),c[46],c[6]),0))&&((((0,c[new Date("1970-01-01T06:30:13.000+06:30")/1E3])((0,c[26])(),c[6],c[65]),c[24])(c[17],c[38]),((0,c[13])((0,c[74])(),c[37],c[65]),c[25])(c[38],c[47]),c[62])((0,c[70])(c[6],c[64]),c[43],(0,c[13])((0,c[74])(),c[37],c[65]),c[6],c[16]),c[13])((0,c[74])(),
c[37],c[65]),c[57]!=4&&(c[51]==-7&&((0,c[24])(c[10],c[72]),1)||(0,c[24])(c[83],c[37]))}finally{c[49]>=4&&(c[22]!==-9?((0,c[78])(c[5],(0,c[25])(c[6],c[66]),(0,c[5])(c[28],c[8]),(0,c[44])(c[37]),c[53],c[38]),c[67])((0,c[-62-Math.pow(7,1)*-19])(c[6]),c[70],c[6],c[Math.pow(5,5)+-65280- -62178]):((0,c[67])(((((0,c[35-Math.pow(8,2)+42])((0,c[74])(),c[8],c[65]),c[70])(c[37],c[64]),c[70])(c[38],c[84]),c[25])(c[Math.pow(4,1)-16+73],c[48]),c[13],(0,c[45])(),c[6],c[65]),c[70])(c[37],c[63]))}try{c[68]!=9&&(c[29]==
-9||(((0,c[67])((0,c[19])(c[61],c[75]),c[24],c[68],c[38]),c[48])(c[38]),null))&&(((0,c[73])(c[Math.pow(8,1)*-149+1237]),c[47])(c[20-308%Math.pow(4,2)],c[68]),c[47])(c[80],c[38])}catch(d){(0,c[46])(c[16])}}catch(d){return"enhanced_except_r5sB0OT-_w8_"+a}return b.join("")};