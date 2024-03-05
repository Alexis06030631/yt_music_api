const gma = /^[\w.]*$/
const signatureTimestamp = 19786

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
	const url = orgaCompose(m.PC,m.WF,m.s)
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
	a={xX:!1,PC:"",WF:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.xX=!0;
a.PC=b.url;
a.WF=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
xP.w9(a,18);
xP.ww(a,76);
xP.w9(a,26);
xP.C4(a,3);
xP.ww(a,78);
return a.join("")
}

var xP={C4:function(a,b){a.splice(0,b)},
ww:function(a){a.reverse()},
w9:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(""),c=[1026915809,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d){d.reverse()},
-1442414780,676332455,505464554,function(d,e){if(0!=e.length){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
1678175694,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
818516463,function(d,e,f,h,l,m,n,p){return d(m,n,p)},
-1212958439,-85275218,417808255,1198667555,null,function(d,e,f){var h=d.length;e.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},f.split(""))},
-1166615638,-1398287490,1975729278,"ZprwTR",334193740,b,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
-20614166,885074593,-1871982983,-1712534074,-1058049719,-1682515072,-197585817,668449703,-427742967,653510514,-115898695,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
1678175694,-1314246558,685389465,function(d,e,f,h,l,m){return e(h,l,m)},
1547764815,-1431856939,403898832,b,-1594653545,-1703145642,"};{,{;;",function(d,e){d.push(e)},
-918055205,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-575977755,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-146180350,1098743843,626036312,-1725892310,-841459860,1412213998,-1199879867,null,function(d,e,f,h,l,m){return e(h,l,m)},
-128979983,function(d,e,f,h,l){return e(f,h,l)},
-993955822,null,-1037341704,function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
-1314246558,615078525,b,",48];c[51]=c;",1538897138,1983874633,-2122213733,1067605325,-1825508477,296187923,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
861559316,1943468148,-950741878,358849098,1105331932,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})}];
c[15]=c;c[61]=c;c[66]=c;try{try{-8!=c[59]&&((0,c[6])(c[26],c[44]),/,,/)||(0,c[24])(c[44],c[78]),(7===c[41]||((((0,c[33222+Math.pow(3,new Date("1969-12-31T14:30:03.000-09:30")/1E3)+-33243])(c[43],c[44]),c[6])(c[42],c[61]),c[2])(c[15]),0))&&(((0,c[69])((0,c[84])(),c[14],c[65]),c[79])(c[72],c[Math.pow(8,5)+5+-32759]),c[Math.pow(8,2)+188-235])(c[85],c[1])}catch(d){((0,c[83])(c[70]),c[69])((0,c[6])(),c[63],c[65])}try{(6!==c[78]||((0,c[23])((0,c[69])((0,c[84])(),c[9*Math.pow(7,1)],c[65]),c[17],(0,c[61])(c[63],
c[58]),c[-741306- -181*Math.pow(8,4)],c[66]),0))&&(0,c[79])(c[new Date("1970-01-01T08:01:14.000+08:00")/1E3],c[19])|((0,c[9])(c[33],c[41]),c[77])(c[14],c[11]),(5<c[36]||((0,c[9])(c[52],c[70]),0))&&(0,c[66])(c[63],c[69]),c[75]!==new Date("1969-12-31T16:15:00.000-07:45")/1E3&&(-2>c[34]?((0,c[70])((0,c[24])(c[63],c[75]),c[46],c[33]),c[24])(c[63],c[new Date("1969-12-31T15:31:20.000-08:30")/1E3]):(0,c[70])((0,c[70])((0,c[42])(c[77],c[26]),c[66],c[63],c[61]),c[42],c[73],c[48]))}catch(d){((0,c[58])(c[36],
c[-213*Math.pow(6,2)+7672]),c[32])((0,c[25])(),c[26],c[28])-(0,c[24])(c[26],c[53])}finally{-4===c[39]&&(((0,c[70])((0,c[32])((0,c[25])(),c[63],c[28])+(0,c[70])((0,c[new Date("1969-12-31T23:00:58.000-01:00")/1E3])(c[0],c[68]),c[24],c[68],c[9]),c[32],(0,c[55])(),c[Math.pow(2,3)-14784+14802],c[28]),c[24])(c[63],c[79]),((((0,c[24])(c[63],c[59]),c[66])(c[68],c[44]),c[32])((0,c[47])(),c[26],c[28]),c[Math.pow(7,3)-98-164])(c[4]),1)||((0,c[70])((((0,c[58])(c[10],c[26]),c[40])(c[33],c[34]),c[55])(((0,c[55])((0,c[55])((0,c[28])(c[18],
c[39]),c[31],c[48]),c[43],c[84],c[48]),c[17])((0,c[10])(),c[75],c[13]),c[51],c[11],c[12]),c[9],c[75],c[1]),c[51])(c[11],c[24]),(10<=c[70]||((0,c[83])((0,c[43])(c[18400-Math.pow(4,4)-18108],c[75]),(0,c[27])(c[25302+-117*Math.pow(6,3)],c[75]),c[55],(0,c[27])(c[new Date("1969-12-31T15:00:59.000-09:00")/1E3],c[48]),c[27],c[61],c[11]),0))&&((((0,c[9])(c[53],c[15]),c[9])(c[53],c[4]),c[17])((0,c[10])(),c[48],c[13]),c[9])(c[48],c[74])}try{c[29]!=-193*Math.pow(6,1)- -1165&&(10>c[64]&&(((0,c[51])(c[11],c[73]),
(0,c[9])(c[-148*Math.pow(8,1)+1237],c[52]),c[17])((0,c[32])(),c[75],c[13]),"NaN")||(0,c[69])((0,c[51])(c[Math.pow(4,4)-60+-143],c[70]),c[55],(0,c[43])(c[8],c[new Date("1970-01-01T09:00:18.000+09:00")/1E3]),c[58],c[10],c[52])),-6!==c[68]&&(7<c[4]&&((0,c[17])(((((0,c[41])((0,c[58])(c[37],c[48]),c[66],((0,c[66])((0,c[2])(),c[37],c[62]),c[66])((0,c[2])(),c[37],c[62]),(0,c[30])(),c[37],c[62]),c[new Date("1970-01-01T06:01:06.000+06:00")/1E3])((0,c[22+Math.pow(2,3)%481])(),c[37],c[62]),c[66])((0,c[30])(),
c[10],c[62]),c[28])(c[67]),c[58],c[60],c[83]),1)||(0,c[136947-219*Math.pow(5,4)])(c[28],(0,c[Math.pow(6,4)+-18612+17321])(c[47],c[82]),(0,c[85])(c[8],c[46]),((((0,c[22])(c[24],c[74]),c[83])(c[76],c[63]),c[24])(c[39],c[30]),c[40])(c[86],c[15]),(0,c[79])(c[0],c[23]),c[25])),((0,c[62])((0,c[39])(),c[68],c[63]),(0,c[13])(c[4]),c[62])((0,c[47])(),c[4],c[66])}catch(d){-5<c[33]&&(9==c[76]?(0,c[24])((0,c[70])(c[61],c[16]),c[70],c[4],c[1]):((0,c[54])(c[61],c[53]),c[10])(c[2950+Math.pow(3,3)-2969],c[12]))}try{7!=
c[63]?(0,c[82])(c[43]):(0,c[42])((0,c[6])(),c[36],c[38])}catch(d){(0,c[4])(c[-3555-Math.pow(6,1)- -3634])}}catch(d){return"enhanced_except_ypoBteX-_w8_"+a}return b.join("")};