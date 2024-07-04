const gma = /^[\w.]*$/
const signatureTimestamp = 19906

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
	const url = orgaCompose(m.gE,m.yH,m.s)
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
	a={RY:!1,gE:"",yH:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.RY=!0;
a.gE=b.url;
a.yH=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
HO.fO(a,32);
HO.CK(a,1);
HO.fO(a,41);
HO.UE(a,13);
HO.fO(a,5);
HO.UE(a,69);
HO.fO(a,58);
HO.fO(a,39);
HO.UE(a,5);
return a.join("")
}

var HO={fO:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
CK:function(a,b){a.splice(0,b)},
UE:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(""),c=[771685065,function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
function(d,e,f,h,l,m,n,p){return d(m,n,p)},
681861069,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
384346542,-1253520218,1782005159,505586128,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
2114980323,610359211,-1957165875,517595611,516610562,1241581926,b,1954202610,null,953166951,-477952516,function(d){throw d;},
814545692,541634775,-1058919658,-2096313902,null,-699904547,-1192422650,-422515981,-1003476645,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
1188918900,-1848171469,"push",",,]\u2230",-931003285,function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
-1586457650,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
1437465916,-1248826821,597438890,",/[\u00f5",function(d){d.reverse()},
516610562,481193573,function(d,e,f,h,l,m){return e(h,l,m)},
1834135287,384346542,-1716687909,1495851464,"][/'\u00e5",-1929712143,function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
-638780821,1626587884,458152483,941508487,-1585187226,1702551298,2114980323,1954202610,-936499041,-1389268174,-1069819485,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
280506048,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
726846485,null,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
b,-189647125,function(d,e,f,h,l){return e(f,h,l)},
-1401901690,129524252,-1671293061,-301625270,-1106179056,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
b,807545882,-205880584,function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
function(d,e,f){var h=d.length;e.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},f.split(""))}];
c[18]=c;c[26]=c;c[71]=c;try{try{(c[70]!==-10||((0,c[75])((0,c[45])(c[82]),c[9],c[26],c[14]),0))&&(0,c[75])((0,c[55])(c[26],c[79]),c[9],c[16],c[80]),((0,c[21])(c[16]),c[205-Math.pow(8,2)-55])((0,c[4])(),c[73],c[35])}catch(d){c[59]<=5?(0,c[Math.pow(8,2)+32+-21])((0,c[9])(c[73],c[57]),c[9],c[73],c[24]):((0,c[45])(c[16]),c[9])(c[16],c[6])}finally{c[51]!=-4&&(0,c[38])(c[71],c[56])}try{c[42]!==2&&((0,c[55])(c[Math.pow(6,3)-153-45],c[34]),c[67])(c[13],c[26]),c[40]!=0&&((((0,c[61])((0,c[24])(c[2],c[5]),c[new Date("1970-01-01T03:31:22.000+03:30")/
1E3],c[68],c[69]),c[31])(c[2]),c[41])(c[-104- -106*Math.pow(1,2)],c[28]),c[53])(c[40],c[57]),(c[57]==9||((0,c[31])((0,c[23])(c[33],c[69]),c[45],c[26]),0))&&(0,c[11])((0,c[0])((0,c[14])(),c[13],c[51]),c[19],c[24],c[60]),c[29]<=new Date("1970-01-01T08:00:09.000+08:00")/1E3&&(((0,c[17])(c[56],c[4]),c[77])(c[4],c[71]),"undefined")||(0,c[11])((0,c[31])(c[68],c[57]),c[77],c[70],c[74]),c[40]>10&&(c[3]!=8?(0,c[19])(c[63],c[13]):(0,c[31])(c[60],c[53]))}catch(d){(0,c[77])(c[15],c[26]),((((0,c[0])(c[68]),c[0])(c[4]),
c[46])(c[60]),c[31])(c[15],c[86])}finally{c[57]<=-1?(0,c[11])(((0,c[38])((0,c[46])(c[60]),c[new Date("1970-01-01T05:46:07.000+05:45")/1E3],((0,c[86])(c[18]),c[19])(c[37],c[13]),c[36],c[13]),c[11])((0,c[48])(c[13],c[43]),c[46],c[13])<<(0,c[19])(c[66],c[60]),c[41],c[53],c[32]):(0,c[31])(((0,c[70])(c[6],c[28]),c[70])(c[63],c[68]),c[70],(0,c[77])(c[70],(0,c[new Date("1969-12-31T13:30:34.000-10:30")/1E3])((0,c[48])(),c[84],c[44]),(0,c[70])(c[63],c[14]),(0,c[24])(c[61],c[18]),(0,c[-4441+Math.pow(5,2)*179])((0,c[47])(),
c[63],c[44]),c[8],c[76]),c[0],c[40]),(c[53]>5||(((((0,c[4])((0,c[10])(c[69],c[61]),c[11],c[63],c[62]),c[61])((0,c[51])(c[57],c[78]),c[48],c[31],c[60]),c[4])((0,c[18])(),c[63],c[14]),c[69])(c[52],c[63]),0))&&(0,c[55])((0,c[81])(c[54],c[21]),(0,c[40])(c[33],c[12])&(0,c[4])((0,c[17])(),c[63],c[14]),c[61],((0,c[69])(c[72],c[new Date("1970-01-01T06:01:03.000+06:00")/1E3]),c[40])(c[54],c[41]),c[81],c[65],c[66]),c[35]<2&&((0,c[40])(c[Math.pow(8,4)-54+-3979],c[0]),6)||(0,c[48])(c[33],c[70]),c[38]!=10&&(0,c[69])(c[42],
c[65]),c[20]>=-2&&(c[15]>1?(0,c[54])((0,c[41])(c[47],c[25]),c[84],(0,c[11])(),c[26],c[7]):((0,c[62])(c[new Date("1969-12-31T22:45:15.000-01:15")/1E3],c[47]),c[74])(c[50],c[70])),c[75]<-2&&(c[5]>=3||(((0,c[33])(c[47],c[77]),c[60])(c[20],c[58]),0))&&((0,c[57])(c[38]),c[11])((0,c[52])(),c[70],c[new Date("1970-01-01T07:15:21.000+07:15")/1E3]),c[34]===5&&((0,c[47])(c[64],c[65]),1)||(0,c[74])(c[15],c[64])}}catch(d){return"enhanced_except_wpsBveT-_w8_"+a}return b.join("")};