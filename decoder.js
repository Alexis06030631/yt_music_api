const gma = /^[\w.]*$/
const signatureTimestamp = 19948

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
	const url = orgaCompose(m.BE,m.WH,m.s)
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
	a={rZ:!1,BE:"",WH:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.rZ=!0;
a.BE=b.url;
a.WH=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
XK.di(a,20);
XK.X3(a,1);
XK.di(a,12);
XK.JK(a,37);
XK.X3(a,2);
XK.JK(a,29);
XK.X3(a,1);
XK.JK(a,7);
XK.di(a,63);
return a.join("")
}

var XK={di:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
X3:function(a,b){a.splice(0,b)},
JK:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
915977480,-475998156,function(d,e,f,h,l){return e(f,h,l)},
function(d,e,f){var h=d.length;e.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},f.split(""))},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-211522088,-2005565825,-989912048,null,392969794,720257786,1418947842,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
-15212579,1811650730,-1822400254,b,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-961437954,function(d,e){e.splice(e.length,0,d)},
3920069,-1630695402,392092692,846426116,1556710033,function(d,e,f,h,l,m){return e(h,l,m)},
1159289205,603433350,1286905955,"{;,(",1516223330,2069899377,-349700548,-793214707,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-545423745,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
1440953430,-1165589029,1161599215,1520963691,303538111,98059791,931812281,function(d,e,f,h,l,m,n){return d(l,m,n)},
-1192201330,16219511,1146273816,1425732724,b,1135285685,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
-188034910,1562293795,/[{/,[],\/(\\(),\/)}/,-1691111879,null,-1666606386,-1973734865,546789038,function(d){d.reverse()},
3474969,-437362750,1653500525,1402286810,-1143243492,-2063142984,-240285028,"loT3",function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-608924766,-1995901839,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-2005565825,function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
448081354,-710181112,876878214,-1150722489,-1715352093,926139993,2146208387,28322406,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
b,1344373752,1146987962,1301386953,-1138774966,function(d,e){e.push(d)},
-1259544986,1669112781,-1014519859,null,1293172915,666265034,1937632608];c[9]=c;c[57]=c;c[95]=c;try{try{c[43]>=-1&&((0,c[73])(c[12],c[86]),c[73])(c[64],c[9]),c[30]!==-1?(((((0,c[63])(c[37],c[Math.pow(8,4)*-69+282690]),c[Math.pow(7,new Date("1969-12-31T19:45:01.000-04:15")/1E3)- -9633+-9613])(c[19],c[67]),c[24])(c[4],c[8]),c[24])((0,c[11])(c[93],c[82]),c[62],(0,c[88])(c[6],c[71]),c[76],c[Math.pow(2,3)+-6069- -6100]),c[88])(c[97],c[83]):(0,c[26])((0,c[41])(c[84],c[51]),((0,c[15])((0,c[7])(c[75]),c[92],
(0,c[41])(c[75],c[72]),(0,c[59])(),c[75],c[58]),c[41])(c[6],c[78]),c[91],(0,c[41])(c[6],c[54]),c[41],c[39],c[61]),c[54]<=2?((((0,c[41])(c[46],c[22]),c[0])(c[94],c[6]),c[91])((0,c[62])(c[85],c[39]),c[41],c[6],c[45])|(0,c[92])((0,c[74])(),c[6],c[58]))%(0,c[91])((0,c[41])(c[75],c[25]),c[41],c[46],c[68])>>>(0,c[41])(c[6],c[65])^(0,c[92])((0,c[59])(),c[75],c[58]):(0,c[34])(c[88],(0,c[15])((0,c[62])(c[4],c[84]),c[21],(0,c[34])(c[78],c[96]),c[6],c[22]),(0,c[66])(c[83],c[6]),(0,c[81])((0,c[29])(c[63],c[42]),
c[68],(0,c[55])(c[6],c[27]),c[42],c[145%Math.pow(1,4)+76])|(0,c[8])(c[new Date("1969-12-31T22:16:12.000-01:45")/1E3],c[95]),c[42],c[94]),(c[80]<6||((((0,c[29])(c[36],c[42]),c[29])(c[23],c[13]),(0,c[95])(c[93],c[91]),(0,c[61])(c[30]),c[56])(c[1],c[81]),0))&&(0,c[61])(((((0,c[62])((0,c[44])(),c[45],c[28]),c[62])((0,c[29])(),c[9],c[28]),c[11])(c[45],c[6]),c[62])((0,c[44])(),c[75],c[28]),c[11],c[45],c[18]),(c[42]>1||((((0,c[61])((0,c[71])(c[new Date("1969-12-31T18:01:07.000-06:00")/1E3],c[89]),c[62],
(0,c[29])(),c[75],c[28]),c[11])(c[75],c[0]),c[11])(c[16],c[68]),(0,c[62])((0,c[44])(),c[75],c[28]),0))&&((0,c[69])(c[52],c[54]),(0,c[61])(((0,c[71])(c[75],c[59]),c[11])(c[75],c[new Date("1970-01-01T08:36:09.000+09:00")/1E3+179*Math.pow(2,3)]),c[71],c[16],c[3]),c[97])(c[42],c[39]),(c[56]!=new Date("1969-12-31T19:29:58.000-04:30")/1E3||((0,c[77])(c[82],c[88]),NaN))&&(0,c[98])(c[74],c[12]),c[Math.pow(2,1)+10+11]>=Math.pow(1,2)+193-196&&(c[31]!=0||((0,c[28])((0,c[77])(c[21],c[new Date("1970-01-01T01:00:52.000+01:00")/
1E3]),c[36],c[71],c[12]),(0,c[77])(c[12],c[18]),(0,c[77])(c[75],c[54]),0))&&((((0,c[36])(c[39],c[42]),c[36])(c[59],c[34]),c[45])(c[46],c[34]),c[29])((0,c[30])(),c[12],c[94]),c[2]<-10&&(((0,c[36+79%Math.pow(1,4)])(c[49],c[42]),c[956-153*Math.pow(6,1)])(c[21],c[44]),"undefined")||(0,c[28])((0,c[86])(c[12]),c[38],c[21],c[83])}catch(d){((0,c[91])(c[89],c[90]),(0,c[91])(c[26],c[62]),c[0])(c[96])===(0,c[43])((0,c[9])(),c[56],c[8]),(0,c[65])((0,c[91])(c[35],c[30]),c[91],(0,c[42])((0,c[12])(c[61],c[35]),
c[43],(0,c[9])(),c[89],c[8]),c[89],c[17])}try{c[82]!=-1&&((0,c[42])(((((0,c[52])(c[96],c[28]),c[93])(c[85],c[58]),(0,c[12])(c[83],c[new Date("1970-01-01T11:46:37.000+11:45")/1E3]),c[1])(c[10],c[44]),c[74])(c[33],c[58]),c[25],c[34],c[15]),1)||(0,c[51])(((0,c[new Date("1970-01-01T11:01:26.000+11:00")/1E3])(c[20]),c[36])(c[Math.pow(8,3)+122+-549],c[75]),c[29],((0,c[36])(c[100],c[42]),c[28])((0,c[86])(c[11]),c[77],c[75],c[50]),(0,c[22])(),c[42],c[94]),c[84]==9?(0,c[77])(c[11],c[0]):(0,c[16])(c[16],c[20])}catch(d){((0,c[98])(c[3],
c[11+279%Math.pow(4,3)]),c[86])(c[20])}}catch(d){return"enhanced_except_7JsBk-T-_w8_"+a}return b.join("")};