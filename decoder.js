const gma = /^[\w.]*$/
const signatureTimestamp = 19879

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
	const url = orgaCompose(m.YD,m.lH,m.s)
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
	a={JY:!1,YD:"",lH:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.JY=!0;
a.YD=b.url;
a.lH=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
WO.xX(a,62);
WO.lp(a,2);
WO.FW(a,50);
WO.xX(a,1);
WO.FW(a,26);
WO.xX(a,11);
return a.join("")
}

var WO={lp:function(a,b){a.splice(0,b)},
FW:function(a){a.reverse()},
xX:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(""),c=[2063592428,-911426402,function(d){throw d;},
null,-1340480006,1276946775,69823558,-500886799,1101842885,90880787,function(d,e,f){var h=e.length;d.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},f.split(""))},
176662878,1101842885,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
292623238,b,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
838972600,878656882,-527326783,415050091,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
1569237686,1035282233,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.hda(String.fromCharCode(d))}return e},
1767715570,/()(),(',,}(){)/,-268619132,-207017061,function(d,e,f,h,l,m,n){return d(l,m,n)},
-1168327559,1639552774,",]([/",-2021491486,-1325331653,-1163411673,1111473968,-734976664,1729240662,function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
null,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
1125291886,-1817395559,function(d,e){0!=e.length&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
-1163768507,function(d,e,f,h,l){return e(f,h,l)},
-1677128229,1780742529,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
function(d){d.reverse()},
function(d,e){e.push(d)},
function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
function(d,e,f,h,l,m){return e(h,l,m)},
1496491918,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.hda(String.fromCharCode(d))}return e},
function(d,e){e.splice(e.length,0,d)},
-901640303,-824813761,-2001350305,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-654190082,2035003142,",48];c[57]=c;",b,-2133292827,815535850,1117466687,1255446190,-363371863,-440713710,"for",-1439308866,-973764705,b,-166690373,-1085888369,1519457494,null,function(d,e,f,h,l,m,n,p,q,r){return e(l,m,n,p,q,r)},
function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)}];
c[3]=c;c[41]=c;c[81]=c;try{try{c[37]!==new Date("1970-01-01T10:00:04.000+10:00")/1E3&&(-9===c[79]?(0,c[48])((0,c[82])((0,c[10])(c[77],(0,c[Math.pow(8,5)-39-32666])(),c[74]),c[new Date("1970-01-01T02:45:48.000+02:45")/1E3],(0,c[238+Math.pow(3,2)+-237])(c[15],(0,c[63])(),c[74]),((0,c[21])(c[3]),c[16])(c[3],c[9]),(0,c[46])(c[76],c[new Date("1969-12-31T17:15:15.000-06:45")/1E3]),c[10],c[67],(0,c[13])(),c[74]),c[10],c[15],(0,c[57])(),c[74]):(((((((0,c[46])(c[Math.pow(6,1)+-24973- -24975],c[81]),c[46])(c[-196*
Math.pow(6,2)- -7074],c[67]),c[46])(c[50-Math.pow(1,4)- -16],c[81]),c[53])(c[Math.pow(7,1)+33-27],c[81]),c[-35526-Math.pow(2,2)+35570])(c[81],c[-21983+Math.pow(2,5)- -21971]),c[46])(c[45],c[67]),c[42])(c[3],c[26])),(0,c[35])((0,c[67])(c[75+Math.pow(4,5)+-1042]),c[75],(0,c[75])(c[57],(0,c[43])(),c[1]),c[57],(0,c[23])(),c[1])}catch(d){}try{-8<c[50]&&(-5<=c[3]&&((0,c[28])(((0,c[35])((0,c[39])(c[9],c[21]),c[22],(0,c[4])(c[Math.pow(new Date("1969-12-31T22:30:01.000-01:30")/1E3,2)-37- -116],c[Math.pow(3,
3)%117- -25]),c[47],c[53]),c[22])(c[47],c[55])|((0,c[26])(c[29],c[61]),c[32])(c[68]),c[63],c[28],c[35]),1)||(0,c[22])((0,c[10])(c[5],(0,c[62])(),c[84]),(0,c[10])(c[5],(0,c[42])(),c[84]),c[57],(((0,c[81])(c[5],c[19]),c[81])(c[Math.pow(2,1)- -16456+-16441],c[16]),c[81])(c[5],c[83]),c[81],c[38],c[37])*(0,c[59])(c[41],c[17])),0!==c[55]&&(9!==c[2]&&((((0,c[50])((0,c[81])(c[38],c[6]),c[52],(0,c[-113*Math.pow(6,4)+146507])(c[74],c[28]),c[40],c[64]),c[51])(c[17],c[0]),c[26])(c[53],c[62]),1)||((0,c[58])(c[76],
(0,c[23])(),c[45]),c[58])(c[86],(0,c[55])(),c[45])/(0,c[42])(c[new Date("1970-01-01T06:16:26.000+06:15")/1E3],c[10])|(0,c[18])((0,c[24])(c[new Date("1970-01-01T11:00:25.000+11:00")/1E3],c[32]),c[42],c[25],c[43])),5!==c[6]&&(-4!==c[17]?(0,c[15])((0,c[18])((0,c[12])(c[65],c[61]),c[61],c[29],c[7]),c[59],(((0,c[12])(c[40],(0,c[new Date("1970-01-01T06:45:23.000+06:45")/1E3])(),c[86]),c[61])(c[69],c[7]),c[67])(c[30],c[45]),c[83],c[7],c[72]):(0,c[59])((0,c[52])((0,c[83])(c[-38626+Math.pow(6,2)+38620],c[47]),
c[53],(0,c[59])(((0,c[12])(c[30],(0,c[23])(),c[86]),c[12])(c[30],(0,c[44])(),c[86]),c[67],c[30],c[60]),c[7],c[63]),c[12],c[30],(0,c[44])(),c[Math.pow(7,3)-75+-182])),4<c[0]&&((0,c[61])(c[71],c[40]),c[77])(c[48+Math.pow(8,4)-4079],(0,c[48])(c[76],c[26]),(0,c[48])(c[new Date("1969-12-31T12:16:17.000-11:45")/1E3],c[26]),(0,c[61])(c[68],c[86-Math.pow(1,4)+-55]),c[26],c[27]),(0,c[22])(c[17],c[59],c[7]),(0,c[22])(c[17],(0,c[74])(),c[7])}catch(d){6<c[78]&&(0,c[58])(c[22],c[76]),3<=c[185%Math.pow(2,1)- -47]&&
(3>=c[85]||((0,c[62])((0,c[65])(c[17]),c[75],(0,c[65])(c[29]),c[72],c[43]),0))&&((0,c[20])((0,c[73])(c[60],c[9]),c[67],c[-256+328%Math.pow(6,5)],(0,c[56])(),c[82]),c[67])(c[72],(0,c[29])(),c[82]),-3<=c[9]&&(0,c[new Date("1970-01-01T06:45:20.000+06:45")/1E3])(((0,c[12])(c[60],c[-18*Math.pow(1,2)+107]),c[14])(c[39],c[33]),c[24],c[49]),c[87]>=-19720-Math.pow(7,1)+19733?(0,c[20])((0,c[26])(c[13],c[46]),c[82],c[29],c[48]):(0,c[84])(c[40],c[54])>=(0,c[68])(c[52],(0,c[9])(),c[62])}finally{3==c[55]&&(((0,c[65])(c[52],
c[417-Math.pow(7,new Date("1970-01-01T04:00:03.000+04:00")/1E3)%(new Date("1970-01-01T06:38:09.000+06:30")/1E3)]),c[88])(c[56],c[19]),(0,c[Math.pow(7,2)%217- -16])(c[40],c[31]),1)||((0,c[0])((0,c[53])(c[40],c[21]),c[34],c[33],c[42]),c[12])(c[42],c[1])}}catch(d){return"enhanced_except_p5sB2OT-_w8_"+a}return b.join("")};