const gma = /^[\w.]*$/
const signatureTimestamp = 19831

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
	const url = orgaCompose(m.cD,m.oG,m.s)
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
	a={LX:!1,cD:"",oG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.LX=!0;
a.cD=b.url;
a.oG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
dP.Nm(a,10);
dP.Nm(a,4);
dP.Wo(a,3);
dP.lN(a,48);
dP.Wo(a,3);
return a.join("")
}

var dP={Nm:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
lN:function(a){a.reverse()},
Wo:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(""),c=[-557804599,-981208953,778313617,403925055,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
666008814,-1930682345,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
446107415,"if",-225724330,720732661,-699658943,-1565563932,-1087382741,function(d,e){e.push(d)},
1727935474,function(d){d.reverse()},
",),;}\\",-1048525852,b,228049585,";'{'\\",null,1205548266,-149747469,-2115534184,1894804867,-1674845737,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
861100740,1880446859,function(d,e,f,h,l,m,n){return d(l,m,n)},
222497694,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-2010996658,-74261842,-822189400,-958444986,2116241355,-113560819,function(d){throw d;},
function(d,e){d.splice(d.length,0,e)},
728899111,-887504920,-1618947078,function(d,e,f,h,l){return e(f,h,l)},
-431156679,-1003975899,446107415,function(d,e,f){var h=d.length;e.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},f.split(""))},
10908457,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
-442618298,-755650558,764848301,function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
637097229,-2024704513,function(d,e,f,h,l,m){return e(h,l,m)},
1873552970,-2115534184,function(d,e,f,h,l,m,n,p){return d(m,n,p)},
815322986,"[]}/",function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
1959518515,null,1275365784,-1692133783,-1520283923,787129047,null,403925055,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
1256426241,b,1292760148,b,1727935474,"now",1971096802,-324166559,function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
-773387074,-684628624,-1674774468];c[23]=c;c[68]=c;c[73]=c;try{try{-4>=c[85]&&(0,c[32])(c[42],(0,c[46])((0,c[66])(c[77],c[19]),c[84],c[20],c[70])<=((0,c[53])(c[31],c[77]),c[66])(c[68],c[28]),(0,c[73])(c[86],c[17]),(0,c[59])(c[10],c[86]),c[30],c[69]),(0,c[48])(c[84]),(0,c[57])((0,c[new Date("1970-01-01T01:00:11.000+01:00")/1E3])(),c[27],c[0])}catch(d){2!==c[83]&&((0,c[3])(c[75],c[79]),c[-85+158*Math.pow(1,2)])(c[80],c[2]),-1<=c[6]&&(0,c[83])(c[37],c[81]),-1>c[65]&&((0,c[13])(c[40],c[53]),(0,c[34])(c[40])),
-2!=c[69]&&((0,c[5])(c[87],c[47]),1)||(0,c[30])(c[29],c[6]),-3<c[72]&&((0,c[-166-Math.pow(1,3)- -168])((0,c[1])((0,c[31])(c[24],c[15]),c[41],(0,c[62])(),c[71],c[Math.pow(5,1)+2+75]),c[25],c[23],c[80]),[])||((0,c[249+Math.pow(3,5)+-413])((0,c[19])(c[72],c[84]),c[38],c[49]),c[1- -9*Math.pow(2,1)])(c[21],c[82]),-6>=c[75]&&(0,c[19])(c[7260-Math.pow(5,3)-7088],c[52]),10!=c[72]&&(2==c[70]?(0,c[19])(c[24],c[84]):(0,c[22])((0,c[86])(),c[52],c[26]))}finally{(c[78]!==Math.pow(3,new Date("1970-01-01T07:00:02.000+07:00")/
1E3)- -30080-30088||((0,c[79])((0,c[79])((((0,c[22])((0,c[86])(),c[84],c[63]),c[19])(c[5],c[49]),c[new Date("1969-12-31T12:30:15.000-11:30")/1E3])(c[49],c[11]),c[22],(0,c[65])(),c[84],c[26]),c[19],c[17],c[82]),0))&&((((0,c[79])((0,c[30])(c[88],c[57*Math.pow(7,4)+-136787]),c[20],c[27],c[82]),c[20])(c[37],c[88]),c[68])(c[Math.pow(1,1)+1430-1365],c[30]),c[41])(c[46],c[73])}try{-5>c[373-316%Math.pow(4,5)]&&(10==c[39]?(((((0,c[43])((0,c[64])(),c[15],c[84]),c[43])((0,c[86])(),c[12+Math.pow(1,3)%408],c[84]),
(0,c[59])(c[13]),c[new Date("1969-12-31T16:45:10.000-07:15")/1E3])((0,c[43])((0,c[17])(),c[15],c[47]),c[-246*Math.pow(7,4)+590686],c[5],c[25]),c[22- -2*Math.pow(3,2)])(c[4],c[73]),c[40])(c[16],c[15]):(0,c[61])(c[124-Math.pow(5,5)%338],(0,c[Math.pow(3,2)-198- -199])((0,c[36])(c[25],c[20]),c[41],c[50],c[19]),(0,c[34])((0,c[42])(c[68],c[20]),c[57],(0,c[45])(c[39],c[76]),c[37],c[39]),(0,c[3])(c[40],c[79]),c[22],c[70]))}catch(d){(0,c[8])(c[27],c[72])}try{-5!==c[59]&&(-4===c[Math.pow(1,4)%449+62]?(0,c[3])(c[76],
c[54]):(0,c[3])(c[76],c[55])),(0,c[43])(c[49]),(0,c[26])(c[40])}catch(d){5==c[62]&&(((((0,c[57])(c[40],c[47]),c[7])(c[11],c[40]),c[67])((0,c[7])(c[48],c[76]),c[7],c[71],c[40]),c[10])((0,c[31])(),c[72],c[new Date("1970-01-01T11:15:14.000+11:15")/1E3]),(0,c[10])((0,c[53])(),c[70],c[14]),1)||(0,c[134*Math.pow(8,2)+-8489])(c[7],(0,c[67])((0,c[3])(c[70],c[66]),c[84],c[82],c[0]),(0,c[236-Math.pow(1,4)+-170])(c[53],c[83]),(0,c[55])(c[43],c[4]),(0,c[28])(c[11],c[34]),c[66],c[11]),(5>c[57]||((0,c[38])((0,c[69])(c[40],
c[43]),c[70],c[30],c[43]),0))&&((0,c[72])((0,c[45])(),c[41],c[76]),c[69])(c[82],c[43])}try{-6>c[84]&&((0,c[38])((0,c[55])(c[43],c[1]),c[70],c[64],c[11]),"false")||(0,c[38])((0,c[70])(c[85],c[53]),c[Math.pow(5,1)+234-167],(0,c[27])(),c[43],c[22])}catch(d){(0,c[69])(c[52],c[11])}}catch(d){return"enhanced_except_95oBiOX-_w8_"+a}return b.join("")};