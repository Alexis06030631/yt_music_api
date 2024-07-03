const gma = /^[\w.]*$/
const signatureTimestamp = 19905

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
	const url = orgaCompose(m.gE,m.xH,m.s)
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
	a={RY:!1,gE:"",xH:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.RY=!0;
a.gE=b.url;
a.xH=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
HO.kg(a,55);
HO.zw(a,1);
HO.kg(a,12);
HO.kZ(a,61);
HO.zw(a,2);
return a.join("")
}

var HO={zw:function(a,b){a.splice(0,b)},
kZ:function(a){a.reverse()},
kg:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(""),c=[-2027599719,515677141,function(d,e,f,h,l){return e(f,h,l)},
function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
-1619879853,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-1909077626,624518340,500744411,-1149674795,function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
33894446,-2047687360,-522335653,1392799145,1691322393,-1966690525,814826798,function(d){d.reverse()},
"push",1735362954,68466521,function(d,e,f,h,l,m){return e(h,l,m)},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
-1324415519,"const",-1459916656,-1149674795,-1488694823,-773061767,582271093,",55];c[50]=c;",function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
272725962,-107103296,732191940,-417763832,360245835,-636973757,1388245018,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-591043043,null,1260102186,-45575979,-1777554461,394477836,515677141,-856673478,null,-1055120374,-1158416704,1424857716,-1965462982,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
-739358189,720972198,b,-1456372354,-1785775549,-316566384,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
1925009118,276189654,b,b,-67909120,-1382105872,"\u22e9}}",2096136306,-537478536,430554174,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
function(d,e,f,h,l){return e(f,h,l)},
-708459269,null,959770111,672548992,772336903,405660605,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
",55];c[50]=c;",1172635021,function(d,e,f){var h=f.length;e.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},d.split(""))},
-527184002,99157511,1703001942,2143111292,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
function(d,e){d.splice(d.length,0,e)},
-1690200389,2103945982];c[43]=c;c[50]=c;c[76]=c;try{try{(c[56]!=9||(((0,c[84])(c[19],c[66],(0,c[41])()),c[23])(c[37],c[76]),(0,c[3])(c[58],c[35]),0))&&(0,c[22])((0,c[3])(c[76],c[13]),c[73],(0,c[23])(c[11],c[43]),c[10]),c[33]>=-7&&((0,c[0])(((0,c[34])(c[74],c[11]),c[7])(c[81],c[25]),(0,c[69])((0,c[59])((0,c[47])(c[20],c[0]),c[60],(0,c[60])(c[35],c[87]),c[54],c[19]),c[47],(0,c[42])(c[2],c[11]),c[48],c[-16377-Math.pow(4,3)- -16451],c[Math.pow(2,1)*123-159]),c[47],(0,c[68])(c[Math.pow(8,new Date("1969-12-31T15:30:01.000-08:30")/
1E3)+816-752],c[88]),c[62],c[1],c[new Date("1970-01-01T09:31:18.000+09:30")/1E3]),[])||((0,c[75])(c[86],c[9]),(0,c[74])(((0,c[48])(c[81],c[1]),c[43])(c[71],c[17],(0,c[93])()),c[32],(0,c[43])(c[71],c[17],(0,c[57])()),c[1]),c[0])(c[24])>>(0,c[74])((0,c[48])(c[91],c[25]),c[43],(0,c[55])(c[25],c[8]),c[71],c[17],(0,c[85])())}catch(d){(0,c[54])((0,c[21])(c[9],c[16]),c[43],c[77],c[24],(0,c[93])())}try{(c[new Date("1969-12-31T19:15:15.000-04:45")/1E3]<3||((0,c[14])((0,c[54])((0,c[21])(c[24],c[73]),c[62],
c[25],c[37-Math.pow(4,new Date("1969-12-31T18:45:05.000-05:15")/1E3)+990]),(0,c[54])((0,c[75])(c[26],c[25]),c[75],c[new Date("1969-12-31T23:00:04.000-01:00")/1E3],c[1]),c[48],(0,c[15])(c[32]),c[90],c[83],c[24]),0))&&((((0,c[93])(c[33],c[74],(0,c[41])()),c[18])(c[new Date("1969-12-31T15:46:14.000-08:15")/1E3],c[81]),(0,c[31])(c[86],c[59]),(0,c[4])(c[36],c[51]),c[82])(c[51]),c[18])(c[67],c[62])}catch(d){(0,c[93])(c[27],c[67],(0,c[41])())}finally{c[24]==-1?(0,c[4])(c[46],c[75]):(0,c[50])(c[75]),c[22]>=
new Date("1970-01-01T01:00:01.000+01:00")/1E3?(((0,c[40])((0,c[83])((0,c[93])(c[33],c[74],(0,c[13])()),c[71],c[51],c[8]),c[43],(0,c[43])((0,c[10])(c[14],c[9]),c[44],c[92],c[19]),c[44],c[84],c[40]),c[6])((0,c[51])(c[84],c[2]),c[10],c[14],c[23]),c[10])(c[32],c[8]):((0,c[63])((0,c[37])(c[42],c[14]),c[51],(0,c[0])(c[66],c[32],(0,c[29])()),c[27-Math.pow(1,1)-12],c[36]),c[44])(c[24],c[61])!==((0,c[43])(((0,c[0])(c[60],c[14],(0,c[74])()),c[0])(c[60],c[32],(0,c[46])()),c[21],c[14]),c[44])(c[13],c[55])}try{c[45]<
-5&&(0,c[44])(c[14],c[85])}catch(d){(0,c[0])(c[60],c[14],(0,c[29])())}try{c[75]>=7&&(c[71]==2?(((((0,c[37])(c[27],c[45%Math.pow(4,5)+-13]),c[44])(c[24],c[31]),c[37])(c[12],c[13]),c[37])(c[22],c[14]),(0,c[37])(c[93],c[84]),(0,c[37])(c[7],c[32]),c[43])((0,c[10])(c[92],c[56]),c[64],c[11],c[32]):(0,c[63])((0,c[0])(c[60],c[14],(0,c[46])())-(0,c[51])(c[14],c[79+Math.pow(5,5)+-3133])<=(0,c[10])(c[14],c[47])<(0,c[37])(c[45],c[32]),c[37],(0,c[Math.pow(6,5)-252+-7451])((0,c[64])(c[18],c[32]),c[6],(0,c[64])(c[81],
c[24]),c[new Date("1969-12-31T12:31:06.000-11:30")/1E3],c[6],c[34]),c[90],c[34])),(c[91]==7||((((0,c[45])((0,c[66])(c[28],c[86]),c[20],c[66],c[172+Math.pow(1,4)-99]),c[64])(c[44],c[25]),c[83])(c[87],c[27]),0))&&(0,c[42])((0,c[22])((0,c[62])(c[new Date("1970-01-01T03:01:27.000+03:00")/1E3]),c[new Date("1969-12-31T14:46:23.000-09:15")/1E3],c[63],c[37]),c[16],(0,c[16])(c[32],c[11]),c[14],c[86])}catch(d){(0,c[16])(c[13],c[Math.pow(1,2)+104-94]),(0,c[0])(c[11])}}catch(d){return"enhanced_except_wZsBvuT-_w8_"+
a}return b.join("")};