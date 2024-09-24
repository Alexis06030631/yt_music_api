const gma = /^[\w.]*$/
const signatureTimestamp = 19985

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
		url = orgaCompose(m.OE,m.iI,m.s)
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
	a={vZ:!1,OE:"",iI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.vZ=!0;
a.OE=b.url;
a.iI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
hL.CH(a,17);
hL.no(a,28);
hL.DR(a,2);
hL.CH(a,51);
hL.DR(a,3);
hL.CH(a,64);
hL.no(a,5);
return a.join("")
}

var hL={no:function(a){a.reverse()},
DR:function(a,b){a.splice(0,b)},
CH:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[function(d,e,f,h,l,m,n){return d(l,m,n)},
function(d,e){e.push(d)},
1490608520,903297373,1802777251,-1946125773,1294286948,function(d){d.reverse()},
1805637271,function(d,e,f,h,l,m){return e(h,l,m)},
function(d,e,f){var h=d.length;f.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},e.split(""))},
496798913,1429950795,1827785236,654152877,b,-1546172008,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
141086866,-1543278529,-1956998713,1316597274,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
860511564,1783710728,658101427,1277405570,941427730,2050080288,-172424247,null,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
64863800,-135243071,1236802702,-595549881,-1144908478,-1335874070,function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
1900559750,-623220209,'{"(;;',function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-268728445,-1082845174,-1752650183,function(d,e){e.splice(e.length,0,d)},
',,["("\'',1950763958,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
902494700,2132053240,"[\"\u22ea}'",function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
b,1954543277,-68902686,-1088481535,-1072070125,-762486630,698769387,-707258896,-1832539996,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
function(d,e,f,h,l,m,n){return d(l,m,n)},
function(d,e){e.length!=0&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
1098606362,244681959,970778258,1559720429,-925687706,165731583,null,"let",function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
128201361,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
2111252602,-257673722,-1144908478,-1070832821,-108900591,b,null,2046916684,-1621849511,712616123,860511564,-2000117917,function(d,e,f,h,l){return e(f,h,l)},
-1361747195];c[30]=c;c[73]=c;c[84]=c;try{try{c[2]>=-10&&(c[29]===-6?(0,c[17])(c[new Date("1970-01-01T04:15:51.000+04:15")/1E3],c[83]):(0,c[22])(c[30],c[71])),c[69]!=-10&&(c[22]!=2?(0,c[10])(c[76],(0,c[76])(c[6],c[40]),(0,c[74])(c[new Date("1970-01-01T08:16:17.000+08:15")/1E3],c[25]),(0,c[87])(c[2]),c[60],c[90]):((0,c[72])((0,c[43])(c[8],c[67]),c[74],(0,c[4])(c[8]),c[51]),c[15])(c[52],c[26])),c[new Date("1970-01-01T09:30:58.000+09:30")/1E3]>7&&(c[30]>=3?((0,c[35])(c[5],c[89]),c[43])(c[8],c[54]):(0,c[83])((0,c[64])(c[1],
c[26]),c[71],(0,c[31])(),c[7],c[66])),c[20]>=-9&&(c[23]<8?(((((((0,c[27])(c[29],c[90]),(0,c[27])(c[new Date("1970-01-01T04:00:38.000+04:00")/1E3],c[90]),c[15])(c[2],c[89]),c[17])(c[88],c[89]),((0,c[26])(c[49],c[new Date("1969-12-31T13:27:36.000-10:30")/1E3*3125- -450048]),c[66])((0,c[18])(c[30],c[34]),c[42],c[73],c[20]),c[26])(c[9],c[58]),c[26])(c[49],c[45]),c[42])(c[9],c[31]),c[42])(c[73],c[87]):(((((0,c[91])(c[6],c[72]),c[57])(c[49]),c[42])(c[49],c[65]),(0,c[42])(c[34],c[46]),c[92])(c[91],(0,c[66])((0,c[42])(c[73],
c[29]),c[54],(0,c[82])(),c[83],c[73]),(0,c[54])((0,c[82])(),c[83],c[73]),(0,c[57])(c[new Date("1969-12-31T13:16:12.000-10:45")/1E3]),c[40],c[72]),c[66])((0,c[47])(c[27],c[73]),c[91],c[76],c[73])),(c[20]>=0||(((((0,c[91])(c[70],c[73]),c[66])((0,c[66])((0,c[26])(c[49],c[7]),c[91],c[4],c[84]),c[47],c[39],c[73]),c[47])(c[19],c[9]),c[18])(c[26],c[34]),0))&&((0,c[15])((0,c[66])((0,c[66])((0,c[47])(c[24],c[49]),c[new Date("1969-12-31T22:30:47.000-01:30")/1E3],c[1],c[72]),c[91],c[38],c[49]),c[66],(0,c[54])((0,c[82])(),
c[83],c[9]),c[42],c[73],c[69]),c[91])(c[56],c[73]),(c[89]<=7||(((0,c[42])(c[49],c[60]),c[47])(c[53],c[49]),(0,c[54])((0,c[14])(),c[83],c[49]),0))&&((0,c[91])(c[2],c[9]),(0,c[42])(c[73],c[30]),c[47])(c[89],c[73]),c[45]<=3&&(c[86]!=10?((0,c[80])(c[49]),c[42])(c[73],c[8]):((0,c[80])(c[9]),c[47])(c[5],c[9])),c[58]>=-9&&(c[56]===-5||((0,c[42])(c[84],c[16]),(0,c[42])(c[20],c[27]),(0,c[11])(c[36],c[32]),((0,c[53])(c[10],c[77]),c[13])(c[85]),0))&&(0,c[47])(c[48],(0,c[85])((0,c[65])(),c[56],c[91]),(0,c[93])(c[89],
c[66]),(0,c[44])(c[30],c[67]),c[72],c[new Date("1969-12-31T17:45:10.000-06:15")/1E3])*(0,c[45])(c[35],c[19])}catch(d){(0,c[85])((0,c[87])(),c[56],c[66]),(0,c[85])((0,c[57])(),c[56],c[35]),(0,c[85])((0,c[57])(),c[56],c[66]),((0,c[59])(c[55]),(0,c[93])(c[51],c[66]),c[93])(c[0],c[91]),((0,c[82])(c[66]),c[93])(c[12],c[35])}finally{c[14]>2&&(c[6]>0?((0,c[45])(c[new Date("1970-01-01T01:01:07.000+01:00")/1E3],c[58]),c[84])((0,c[48])(c[41],c[55]),c[18],(0,c[73])((0,c[48])(c[78],c[10]),c[45],c[55],c[54]),
c[55],c[80]):(0,c[29])((((0,c[85])((0,c[57])(),c[56],c[91]),c[93])(c[22],c[35]),c[93])(c[8],c[67]),c[73],(0,c[59])(c[10]),c[85],(0,c[11])(),c[56],c[66]))}}catch(d){return"enhanced_except_kZwB7uP-_w8_"+a}return b.join("")};