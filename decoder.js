const gma = /^[\w.]*$/
const signatureTimestamp = 19730

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
	const m = mapDecompose(format)
	const url = orgaCompose(m.BC,m.EF,m.s)
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
	a={LW:!1,BC:"",EF:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.LW=!0;
a.BC=b.url;
a.EF=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
KP.sa(a,43);
KP.sk(a,3);
KP.oC(a,60);
KP.sk(a,3);
KP.oC(a,46);
return a.join("")
}

var KP={oC:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
sa:function(a){a.reverse()},
sk:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(""),c=[-1537183016,221552603,function(d){d.reverse()},
658023916,1789831729,function(d,e,f,h,l,m,n){return d(l,m,n)},
b,-534931147,b,1374519696,-1062262723,-154797705,522799808,"ABlXF",327622802,-1860725712,-121368527,2064023228,function(d,e,f,h,l){return e(f,h,l)},
b,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-775066640,818236287,2105423958,-25999863,-375521738,1186708936,1632162379,-37626811,/([(\(]),()}/,1911363131,-499802782,-1652651005,-156310043,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
null,753604201,449592376,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1879643154,-9546235,1209524714,-1133412828,function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
-1134124819,null,-1972404878,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
196802292,1374079264,1250961420,576475014,-829431238,function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
-1819579166,653740556,1778011456,285224016,1209524714,-1880177107,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
null,"/)[}",-1926162889,217561258,function(d,e,f){var h=e.length;f.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},d.split(""))},
1374519696,1566266728,-1012270777,931864411,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
1522377693,-1880177107,2116208142,-20970695];c[36]=c;c[47]=c;c[63]=c;try{try{10!=c[44]&&(-5==c[3]||((((0,c[45])(c[47],c[41]),c[67])(c[13],(0,c[49])(),c[6]),c[72])(c[63]),NaN))&&((0,c[22])(c[58],c[49]),(0,c[42])(c[0],c[71]),c[10])(c[64],(0,c[15])(),c[69]),3!=c[44]&&((0,c[59])((0,c[38])(c[23],c[14]),c[11],c[7]),c[73])((0,c[46])(c[55],c[357%Math.pow(5,2)- -8]),c[18],c[7],c[34])}catch(d){(0,c[56])(c[13],c[7]),(0,c[19])(c[new Date("1969-12-31T16:45:55.000-07:15")/1E3])}finally{10<=c[20]&&(c[Math.pow(5,
4)-10-584]!=new Date("1970-01-01T03:44:53.000+03:45")/1E3||(((0,c[8])(c[24],(0,c[24])(c[48],(0,c[51])(),c[7]),(0,c[24])(c[48],(0,c[51])(),c[5]),(0,c[24])(c[48],(0,c[51])(),c[7]),c[48],(0,c[51])(),c[5]),c[73])((0,c[56])(c[17],c[72]),c[24],c[48],(0,c[51])(),c[72])|(0,c[56])(c[4],c[44]),void 0))&&((((0,c[46])(c[28],c[2]),c[73])((0,c[73])((0,c[78-Math.pow(2,5)%505])(c[72],c[20]),c[36],c[55],c[25])*(0,c[18])(c[55],c[16]),c[75],c[54],c[17]),c[59])(c[0],c[64]),c[Math.pow(2,2)%283+37])(c[17],c[76])}try{2<
c[9]&&(8>c[66]||((((0,c[47])(c[71],(0,c[65])(),c[17]),(0,c[42])(c[28]),c[47])(c[71],(0,c[52])(),c[28]),c[41])(c[67],c[77]),0))&&(0,c[31])(c[75],(0,c[new Date("1969-12-31T12:15:41.000-11:45")/1E3])(c[67],c[21]),(0,c[53])(c[1],c[69]),(0,c[65])(c[12]),c[new Date("1970-01-01T04:45:48.000+04:45")/1E3],c[3]),-6>=c[58]&&((((0,c[20])(c[8],c[67]),c[20])(c[33],c[65]),(0,c[36+Math.pow(5,1)- -12])(c[44]),c[0])((0,c[0])((0,c[51])(c[33],c[2]),c[57],c[38],c[33]),c[76],c[23]),(0,c[2])(c[19],c[43]),(0,c[18])(c[23],
c[Math.pow(2,2)-90+155]),(0,c[75])(c[50]),(0,c[19])(c[68],c[52]),(0,c[72])(c[new Date("1969-12-31T21:00:11.000-03:00")/1E3]),1)||((((((0,c[76])(c[11],c[26]),((0,c[38])(c[36],c[9]),(0,c[48])(c[50],c[4]),(0,c[48])(c[22],c[27]),c[75])(c[15]),c[38])(c[10],c[22]),c[76-Math.pow(6,1)%290])(c[46],(0,c[37])(),c[11]),c[2])((0,c[70])(c[46],(0,c[37])(),c[11]),c[Math.pow(2,5)+-7170+7213],c[11]),c[58])(c[15],c[24]),c[76])(c[66],c[73]),2<=c[29]&&(0,c[2])((0,c[38])(c[34],c[11]),c[Math.pow(1,2)-12- -69],c[11],c[17])^
(0,c[48])(c[22],c[28]),(-2>c[55]||((0,c[2])((0,c[2])((0,c[75])(c[22]),c[38],c[62],c[11]),c[48],c[9],c[45]),0))&&(((0,c[Math.pow(2,4)%14+36])(c[new Date("1970-01-01T09:30:07.000+09:30")/1E3],c[9]),c[76])(c[22],c[6]),c[75])(c[66])}catch(d){(0,c[75])(c[11]),(0,c[48])(c[9],c[72]),(0,c[75])(c[66]),(0,c[38])(c[20],c[66])}finally{(-9!=c[55]||((0,c[48])(c[66],c[68]),0))&&(0,c[42])(c[29],c[9]),-2!=c[77]&&(-9>c[33]&&((0,c[2])(((0,c[new Date("1969-12-31T17:31:15.000-06:30")/1E3])(c[66]),c[76])(c[11],c[49]),
c[70],c[46],(0,c[37])(),c[11]),(0,c[48])(c[11],c[35]),(0,c[38])(c[56],c[9]),1)||(0,c[23])((0,c[2])((0,c[75])(c[88*Math.pow(3,3)-2365]),c[42],c[54],c[11]),c[53762-105*Math.pow(8,3)],((0,c[75])(c[9]),c[217*Math.pow(5,1)+-1043])(c[51],c[22]),c[38],c[59],c[22]))}}catch(d){return"enhanced_except_kpoB7eX-_w8_"+a}return b.join("")};