const gma = /^[\w.]*$/
const signatureTimestamp = 20004

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
		url = orgaCompose(m.WE,m.pI,m.s)
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
	a={GZ:!1,WE:"",pI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.GZ=!0;
a.WE=b.url;
a.pI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
ML.Gc(a,21);
ML.KT(a,67);
ML.n1(a,2);
ML.Gc(a,27);
ML.n1(a,1);
ML.KT(a,75);
ML.Gc(a,46);
ML.n1(a,2);
return a.join("")
}

var ML={KT:function(a){a.reverse()},
Gc:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
n1:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
673478556,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-848762712,36472354,function(d,e){d.push(e)},
702793004,1464458904,2054308165,null,-1452670311,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
1737442305,1660592438,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-537220075,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-1953639179,1909328730,1736629145,2062014756,-336655599,339739376,1845273721,-838768455,1087106938,function(d,e,f,h,l){return e(f,h,l)},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
-1264494286,502078483,702793004,"))[[),",1081613397,105568809,null,-949942251,606051121,517040767,function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
210662797,-1437329117,-76082208,function(d,e,f){var h=f.length;e.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},d.split(""))},
-1019407398,1814837683,"\u2240)",b,165612026,function(d,e,f,h,l,m){return e(h,l,m)},
1711620100,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
"_Yzx",b,";\u222f,,]",-1188255291,450360493,-1551464656,285219742,-386498243,134241633,560860691,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
583838911,function(d){d.reverse()},
1187555863,1837929023,1117959387,null,132630027,-2065050931,-502657925,928876560,-1969938868,b,1872321732,-306851473];c[10]=c;c[37]=c;c[70]=c;try{try{c[72]!=-10?((0,c[28])((0,c[41])(c[10],c[60]),c[3],c[76]),(0,c[3])(c[37]),c[77])(c[0],c[29]):(0,c[50])((0,c[75])(c[23]),c[37],c[41],c[43])>(0,c[14])(c[10],c[68])>(0,c[33])(c[24],c[2],(0,c[66])()),c[38]>-1&&((0,c[50])((0,c[75])(c[8]),c[41],c[37],c[13]),";")||(0,c[28])((0,c[0])(c[54],c[49],(0,c[38])()),c[1],c[58],c[49]),c[26]!=-2&&(((0,c[41])(c[55],c[9]),
c[64])(c[45],c[55]),c[51])((0,c[66])(c[55]),c[64],(0,c[66])(c[49]),c[62*Math.pow(new Date("1969-12-31T20:00:06.000-04:00")/1E3,3)+-13367],c[76]),c[59]!==-4&&(c[71]==7||((((0,c[3])(c[new Date("1969-12-31T12:46:10.000-11:15")/1E3]),c[14])(c[51],c[23]),c[12])(c[68]),(0,c[30])(c[76],c[11]),0))&&((0,c[1])(c[40],c[49])>>>(0,c[53])(c[37],c[73]),(0,c[66])(c[37]),c[1])(c[20],c[49]),c[22]>=-2&&((0,c[18])((0,c[28])((0,c[1])(c[39],c[55]),c[15],c[70],c[5]),c[38-new Date("1969-12-31T13:44:41.000-10:15")/1E3],(0,c[30])(c[52],
c[5]),c[32],c[78]),1)||(0,c[57])((((0,c[30])(c[43],c[66]),c[14])(c[2],c[78]),c[16])(c[5]),c[30],c[61],c[20]),(c[15]<-1||((0,c[57])((0,c[57])((0,c[14])(c[17],c[26]),c[44],c[20],c[71]),c[19],c[59],c[67]),0))&&(0,c[55])((0,c[-2444+new Date("1970-01-01T02:11:54.000+01:30")/1E3])(c[41]),c[70],(0,c[34])(c[1],c[37]),c[59]),(c[26]>=7||((0,c[57])(c[74],c[25]),0))&&(0,c[68])(c[0],c[74])}catch(d){(0,c[2])(c[58],c[new Date("1969-12-31T20:45:56.000-03:15")/1E3]),(0,c[1])(c[55],c[77],(0,c[17])()),(0,c[1])(c[55],
c[56],(0,c[39])()),(0,c[4])(c[56]),(0,c[2])(c[3],c[56]),((0,c[2])(c[45],c[38]),c[4])(c[38])}finally{c[46]<new Date("1969-12-31T18:14:52.000-05:45")/1E3&&(0,c[29])((((0,c[42])(c[11],c[48]),c[42])(c[56],c[37]),c[42])(c[77],c[60]),c[1],c[55],c[50],(0,c[39])())>(0,c[65])(c[72],c[0])}try{c[68]!==6&&(c[20]===4||((0,c[37])((0,c[50])(c[19],c[13]),c[39],c[58],c[4]),0))&&((0,c[9])(c[63],c[58],(0,c[25])()),c[10])(c[17],c[64]),c[14]>=-9&&(c[74]<1?(0,c[60])((0,c[37])((((((0,c[39])(c[8],c[78]),c[9])(c[63],c[64],
(0,c[38])()),c[39])(c[58],c[52]),c[9])(c[63],c[58],(0,c[47])()),c[9])(c[63],c[6],(0,c[new Date("1969-12-31T17:30:47.000-06:30")/1E3])()),c[10],c[59],c[6]),c[9],(0,c[10])(c[71],c[6]),c[63],c[58],(0,c[47])()):(0,c[27])(((0,c[60])((0,c[39])(c[6],c[74]),c[50],(0,c[73])(c[35],c[46]),c[68],c[14]),c[20])((0,c[56])(c[53],c[2]),c[36],c[5],c[78]),c[34],(0,c[34])((0,c[72])(c[5]),c[8],c[41],c[73]),c[23],c[11])),((0,c[74])(c[61],c[67]),c[53])(c[6],c[44])}catch(d){c[8]!=7&&(c[11]<-8&&((0,c[53])(c[66],c[38]),"undefined")||
(0,c[53])(c[13],c[67])),c[1]<-3?((0,c[10])(c[33]),c[70])(c[9],c[56]):(0,c[18])((0,c[45])(c[27],c[47]),c[43],c[36])}}catch(d){return"enhanced_except_pJwB2-P-_w8_"+a}return b.join("")};