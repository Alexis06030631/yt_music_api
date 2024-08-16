const gma = /^[\w.]*$/
const signatureTimestamp = 19949

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
	const url = orgaCompose(m.EE,m.XH,m.s)
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
	a={sZ:!1,EE:"",XH:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.sZ=!0;
a.EE=b.url;
a.XH=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
YK.aI(a,73);
YK.lW(a,60);
YK.YA(a,1);
YK.lW(a,10);
YK.YA(a,2);
YK.lW(a,32);
YK.aI(a,4);
YK.lW(a,24);
return a.join("")
}

var YK={aI:function(a){a.reverse()},
YA:function(a,b){a.splice(0,b)},
lW:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[-363327187,1765430904,-1791642114,";,;[{",function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
-1805104505,1951725985,1621930333,1833897155,1498352168,2028782203,-436188129,function(d,e){d.push(e)},
/;()}([//,6,/,])',/,1193991113,-1371832205,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
1097773545,-1752945421,function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
-150194157,-365381851,510116632,function(d,e,f,h,l){return e(f,h,l)},
-1248941457,-1599756407,-1064853718,function(d,e,f){var h=e.length;d.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},f.split(""))},
1922582951,892349574,function(d,e,f){var h=e.length;d.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},f.split(""))},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
function(d,e){e.length!=0&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
1312728385,-353235424,1453352403,-772787384,null,280535757,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
"now",-2104195120,1083447136,-1432259411,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
-71192916,-34675363,371707013,b,null,-1383427256,-921787320,1723367814,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
985005963,function(d,e,f,h,l,m){return e(h,l,m)},
null,-1700676034,-1524114299,-2010305679,b,-392091742,-908249431,-1677595926,1880210575,-772787384,-440344081,-763959709,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
1756051056,1316093913,439119853,692752426,"'\\)[/u",-124173707,1264683380,-711740001,function(d){d.reverse()},
2024246481,-1660056558,b,-1302884704,-71192916,-178768854,1312728385,820456312,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
1628658727,2020804118,1471500643];c[38]=c;c[50]=c;c[58]=c;try{try{c[6]>=8&&(0,c[23])((0,c[33])(c[59],c[38]),c[33],c[90],c[58])}catch(d){(0,c[30])(c[82],(0,c[16])(),c[41])}try{c[69]!==-5?(0,c[23])(((0,c[19])(c[Math.pow(1,5)%118+72],c[58])/(0,c[45])(c[49],c[35])<=(0,c[23])((0,c[33])(c[17],c[49]),c[45],c[82],c[9]),((((0,c[23])((0,c[95-Math.pow(4,2)%37])(c[82]),c[12],c[58],c[80]),c[45])(c[Math.pow(6,5)+-18795+11101],c[69]),c[70])(c[67],c[62]),c[4])(c[50],c[1]),c[33])(c[51],c[49]),c[45],c[82],c[76]):(((0,c[79])(c[82]),
(0,c[70])(c[30-Math.pow(2,5)+10],c[58]),c[88])((0,c[4])(c[58],c[Math.pow(4,5)%130+-33])<=(0,c[55])(c[62]),c[23],(0,c[23])((0,c[70])(c[84],c[62]),c[70],c[15],c[49]),c[70],c[92],c[50]),(0,c[23])((0,c[30])(c[62],(0,c[31])(),c[41]),c[79],c[50])^(0,c[19])(c[5],c[62]),c[33])(c[65],c[166%Math.pow(7,4)-84]),(c[0]===6||((0,c[23])((0,c[57])((0,c[4])(c[50],c[53])!==(0,c[6])(c[41],c[55]),c[70],(0,c[70])(c[55],c[36]),c[31],c[58]),c[42],c[47],c[69]),0))&&(((((0,c[43])(c[28],c[33]),c[25])(c[89]),c[66])(c[28],(0,c[55])(),
c[80]),c[16])(c[2],c[8]),c[16])(c[23],c[88])}catch(d){((0,c[16])(c[37],c[88]),c[16])(c[7],c[28])}finally{c[20]!==-5&&(c[15]===-8&&((0,c[new Date("1970-01-01T11:45:03.000+11:45")/1E3])((0,c[84])(c[8],c[91]),c[84],(0,c[62])((0,c[69])(c[8],(0,c[71])(),c[80]),c[16],c[24],c[8]),c[4],c[63]),1)||(((0,c[58])(c[46],c[77]),c[43])(c[28],c[61]),(0,c[25])(c[8]),c[25])(c[4])),c[83]!=-7&&(0,c[new Date("1970-01-01T02:30:08.000+02:30")/1E3])(c[64],c[60])}try{c[53]!==-10&&(c[68]===1?(((((0,c[Math.pow(3,5)-122-72])(c[4],
c[42]),((0,c[76])(c[57],c[4]),c[76])(c[17],c[4]),c[67])(c[84]),c[30])((0,c[20])(c[27],c[15]),c[67],c[4]),c[30])((0,c[23])(c[64],(0,c[22])(),c[12]),c[76],c[10],c[15]),(0,c[76])(c[11],c[64])):(0,c[82])((((0,c[8])(c[4],c[72]),c[76])(c[43],c[64]),c[89])(((0,c[8])(c[84],c[53]),c[20])(c[-92+245%Math.pow(5,3)],c[88]),c[8],(0,c[34])(c[0],c[3]),c[64],c[32]),(0,c[34])(c[25],c[88]),c[30],(0,c[76])(c[5],c[64]),c[67],c[64]))}catch(d){(0,c[23])(c[84],(0,c[22])(),c[12])}try{c[63]<=8&&(c[10]!=-9&&((0,c[8])(c[88],
c[75]),1)||(0,c[88])(c[42],c[74])),c[38]<new Date("1970-01-01T06:15:09.000+06:15")/1E3?(0,c[69])((0,c[new Date("1970-01-01T01:31:09.000+01:30")/1E3])((0,c[69])((((0,c[62])(c[30],(0,c[61])(),c[51]),(0,c[69])((0,c[88])(c[54],c[63]),c[79],c[27]),c[39])(c[new Date("1969-12-31T20:01:25.000-04:00")/1E3],c[35]),c[60])(c[47],c[65]),c[31],c[65],c[-29704+Math.pow(5,5)- -26612]),c[15],c[37],c[17]),c[30],c[43],c[45]):(((((0,c[51])(c[61]),c[51%Math.pow(2,2)+24])(c[78],c[77]),c[65])(c[38],c[77]),c[107-Math.pow(3,
1)*30])(((0,c[17])((0,c[65])(c[33],c[43]),c[21],c[77],(0,c[34])(),c[35]),c[65])(c[44],c[77]),c[39],c[61],c[48]),c[24])(c[56],(0,c[26])(),c[35])}catch(d){(0,c[65])(c[90],c[56])!==(0,c[21])(c[56],(0,c[26])(),c[35])}}catch(d){return"enhanced_except_7ZsBkuT-_w8_"+a}return b.join("")};