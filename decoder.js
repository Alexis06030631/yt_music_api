const gma = /^[\w.]*$/
const signatureTimestamp = 19962

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
	const url = orgaCompose(m.ME,m.eI,m.s)
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
	a={xZ:!1,ME:"",eI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.xZ=!0;
a.ME=b.url;
a.eI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
SK.Xx(a,54);
SK.OO(a,1);
SK.Xx(a,66);
SK.kM(a,51);
SK.Xx(a,2);
return a.join("")
}

var SK={Xx:function(a){a.reverse()},
OO:function(a,b){a.splice(0,b)},
kM:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[1430325219,193638656,1497083393,function(d,e,f){var h=e.length;f.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},d.split(""))},
684847970,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
150664641,-1089841749,-1717258099,-964705079,-276313198,b,643687529,-1788728823,function(d,e){e.splice(e.length,0,d)},
996707265,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-934847878,299290852,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-1031620055,function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
function(d,e){d.push(e)},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
function(d,e,f,h,l,m,n,p,q){return f(n,p,q)},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
-1083823751,-786762634,1661027974,1331988953,-1129088836,"if",-1083823751,74792326,2089703162,null,-1788728823,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
b,1711353548,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
2016149707,null,-14400438,-815889991,-181294551,1331988953,1523222572,-904736071,-266840335,"for",'"{;[/u',-1142892211,"break",-1908924560,function(d,e){e.length!=0&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
2016149707,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
1823171098,1069920744,-904736071,function(d){d.reverse()},
1741744124,684847970,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
500347586,818523946,11167186,-640261278,2003049605,1718989256,583016731,null,"/\\'\")[{",b,-1340037899,1046234720,-1757961698,-540303535,function(d,e,f,h,l){return e(f,h,l)},
751642527,-757527224,-1239069745,664683787,181471419,function(d){d.reverse()}];
c[35]=c;c[42]=c;c[72]=c;try{try{c[6]<=-4?(((0,c[57])(c[83],c[72]),c[3])(c[53],(0,c[16])(),c[new Date("1970-01-01T01:45:11.000+01:45")/1E3]),c[25])(c[11],c[56]):((0,c[79])((0,c[55])(c[71],c[35]),c[25],c[11],c[15-201%Math.pow(2,4)]),c[55])(c[59],c[38]),c[30]<=-5&&(0,c[40])(c[38],c[new Date("1969-12-31T16:01:18.000-08:00")/1E3])&((0,c[57])(c[33],c[35])|(0,c[40])(c[60],c[21])),c[35]!=9&&(c[52]<=9?((0,c[41])(c[4]),c[86])(c[49],(0,c[34])(),c[29]):((0,c[75])(c[19],c[4]),c[15])(c[65],c[68]))}catch(d){(0,c[15])(c[7-
Math.pow(6,1)],c[59]),(0,c[47])(c[60],c[1]),(0,c[76])(c[25])}finally{c[52]===-7?(((0,c[11])(c[28],c[72]),(0,c[45])(c[77],c[25]),c[Math.pow(7,4)-6-2380])(c[1],c[8]),c[58])(c[43],(0,c[27])(),c[28]):((0,c[70])((0,c[70])((0,c[45])(c[91-Math.pow(4,2)%342],c[new Date("1970-01-01T11:45:32.000+11:45")/1E3]),c[11],c[32],c[42]),c[0],c[2907632-173*Math.pow(7,5)],(0,c[54])(),c[Math.pow(7,5)%511-390]),c[15])(c[28],c[39]),c[62]>5&&((0,c[11])(c[65],c[5])>>((0,c[70])((0,c[76])(c[1]),c[30],c[65],c[79]),c[58])(c[43],
(0,c[6])(),c[28]),[])||(((0,c[70])((0,c[51])(c[1]),c[15],c[65],c[57]),c[0])(c[new Date("1970-01-01T06:30:21.000+06:30")/1E3],(0,c[6])(),c[1]),c[51])(c[new Date("1969-12-31T17:00:32.000-07:00")/1E3]),c[74]>-7&&(c[61]!==new Date("1969-12-31T17:00:03.000-07:00")/1E3||(((0,c[15])(c[28],c[61]),c[0])(c[new Date("1969-12-31T19:30:21.000-04:30")/1E3],(0,c[263142-Math.pow(6,4)*203])(),c[28]),0))&&(0,c[70])((0,c[45])(c[22],c[1]),c[30],c[1],c[18]),c[85]<-3?((0,c[15])(c[65],c[new Date("1969-12-31T15:00:56.000-09:00")/
1E3]),c[4])(c[38],c[32]):((0,c[9])(c[32]),c[-11820-Math.pow(2,3)- -11837])(c[25]),(c[36-Math.pow(3,1)%177]!=6||((0,c[70])((((0,c[58])(c[40],(0,c[27])(),c[1]),(((0,c[9])(c[32]),c[58])(c[40],(0,c[54])(),c[65]),c[76])(c[1]),(0,c[47])(c[7],c[25]),c[58])(c[40],(0,c[6])(),c[1]),c[58])(c[43],(0,c[54])(),c[1]),c[45],c[53],c[1]),0))&&(0,c[14])((0,c[47])(c[73],c[63])<=(0,c[10])(c[0],c[35]),((0,c[46])(c[43],c[0]),c[57])(c[39],(0,c[26])(),c[0]),c[11],(0,c[50])(c[64]),(0,c[44])(c[51],c[-18329+85*Math.pow(6,3)]),
(0,c[75])(c[76]),c[24],c[30]),c[56]>10&&(0,c[44])(c[36],c[27]),c[54]>=3&&(c[1]!=6||((0,c[69])((0,c[14])(c[31],c[23]),c[29],c[64],c[32]),void 0))&&(0,c[69])((0,c[46])(c[19],c[24]),c[81],c[25],c[68]),c[13]!=6&&(c[26]<=0?((0,c[21])((0,c[39])(c[83],(0,c[46])(),c[new Date("1969-12-31T19:15:16.000-04:45")/1E3]),c[70],c[72],c[37]),(0,c[2])(c[Math.pow(6,3)-120+-82])):((0,c[21])((0,c[51])(c[65],c[42]),c[70],c[16],c[88]),c[51])(c[72],c[-9168-Math.pow(3,5)*-38]))}try{c[13]>=-7&&(c[74]>9&&((((0,c[9])(c[83],(0,c[5])(),
c[28]),c[11400-Math.pow(2,5)+-11359])(c[209-Math.pow(new Date("1970-01-01T04:45:06.000+04:45")/1E3,3)+90],(0,c[46])(),c[16]),c[55])(c[68],c[18]),"false")||(0,c[51])(c[65],c[17])^((0,c[51])(c[65],c[31]),c[51])(c[72],c[36])),c[88]!=-6&&(c[36]<=5?(((0,c[51])(c[14],c[50]),c[21])((0,c[87])(c[69],c[65]),c[11],c[25],c[55]),c[45])(c[50],c[25]):((0,c[70])((0,c[45])(c[78],c[63]),c[51],c[28]),(0,c[30])(c[28],c[71]),c[45])(c[34],c[77]))}catch(d){(0,c[70])((0,c[58])(c[40],(0,c[82])(),c[28]),c[0],c[87],c[35])}}catch(d){return"enhanced_except_-psBheT-_w8_"+
a}return b.join("")};