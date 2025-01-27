const gma = /^[\w.]*$/
const signatureTimestamp = 20110

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
			c: "WEB_REMIX",
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
		url = orgaCompose(m.YW,m.Rf,m.s)
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
	let c = a.signatureCipher;
	
m={D6:!1,YW:"",Rf:"",s:""};
if(!c)return m;
c=urlDecode(c);
m.D6=!0;
m.YW=c.url;
m.Rf=c.sp;
m.s=c.s;
return m
}


function keyDecrypt(m) {
	m=m.split("");GF.Xh(m,3);GF.iJ(m,20);GF.iJ(m,20);GF.iJ(m,24);GF.fO(m,63);GF.Xh(m,3);return m.join("")
}


var GF={fO:function(m){m.reverse()},
iJ:function(m,c){var W=m[0];m[0]=m[c%m.length];m[c%m.length]=W},
Xh:function(m,c){m.splice(0,c)}};

function fastDownload(m){var c=m.split(m.slice(0,0)),W=[-661116293,function(){for(var A=64,p=[];++A-p.length-32;){switch(A){case 91:A=44;continue;case 123:A=65;break;case 65:A-=18;continue;case 58:A=96;continue;case 46:A=95}p.push(String.fromCharCode(A))}return p},
-326211952,1346378598,-71429762,568759378,"break",null,function(A,p){p=(p%A.length+A.length)%A.length;A.splice(-p).reverse().forEach(function(R){A.unshift(R)})},
852974138,/\\[}[;;][/,-17,/]/,function(){for(var A=64,p=[];++A-p.length-32;){switch(A){case 58:A-=14;case 91:case 92:case 93:continue;case 123:A=47;case 94:case 95:case 96:continue;case 46:A=95}p.push(String.fromCharCode(A))}return p},
1056860818,852974138,450744511,function(A,p){for(p=(p%A.length+A.length)%A.length;p--;)A.unshift(A.pop())},
-85494940,function(A,p,R,L,M,b,N,Z){return p(R,L,M,b,N,Z)},
1750039320,1043252765,228613146,1155022833,function(A,p){A.push(p)},
1376542118,c,-1166839837,function(A,p,R,L,M){return p(R,L,M)},
-1315107421,function(A,p){p=(p%A.length+A.length)%A.length;A.splice(-p).reverse().forEach(function(R){A.unshift(R)})},
980501942,function(A,p,R,L,M,b,N,Z,F){return R(N,Z,F)},
1089638599,-1519122159,-2132923971,1562033447,-1869301797,1977676616,-49252007,1485928931,function(A,p,R){var L=p.length;A.forEach(function(M,b,N){this.push(N[b]=p[(p.indexOf(M)-p.indexOf(this[b])+b+L--)%p.length])},R.split(""))},
687941065,null,c,1187428624,-448359829,function(A,p,R,L,M,b,N,Z,F){return R(L,M,b,N,Z,F)},
-1910237677,390907597,-1382528222,-868963220,1491157966,-262919709,87608710,863921257,-1298791361,"[)[\u00e8",-235517021,1415674298,null,c,1750039320,1149085521,1292890307,-623021534,1187428624,function(A,p,R,L,M,b){return p(L,M,b)},
1249790125,1151751921,-1168406224,-1795267119,')"\u00fa',-1143711006,1818908558,-1812353120,-1268695197,function(A){A.reverse()},
-1629745558,-935422557,-650277370,-1644434041,-866171500,function(){for(var A=64,p=[];++A-p.length-32;)switch(A){case 46:A=95;default:p.push(String.fromCharCode(A));case 94:case 95:case 96:break;case 123:A-=76;case 92:case 93:continue;case 58:A=44;case 91:}return p},
1362750426,function(A,p){A=(A%p.length+p.length)%p.length;p.splice(A,1)},
910802470,function(A){for(var p=A.length;p;)A.push(A.splice(--p,1)[0])},
function(A,p){if(p.length!=0){A=(A%p.length+p.length)%p.length;var R=p[0];p[0]=p[A];p[A]=R}},
function(A,p){p.length!=0&&(A=(A%p.length+p.length)%p.length,p.splice(0,1,p.splice(A,1,p[0])[0]))},
1346824834,function(A,p){p.splice(p.length,0,A)},
1124101047];W[7]=W;W[41]=W;W[58]=W;if(typeof KiF==="undefined")return m;try{try{W[32]<=-9&&(0,W[83])(W[49],W[59]),W[53]>6&&(0,W[86])(W[40],W[59]),W[3]!=6&&(0,W[65])((0,W[85])(W[58]),W[7],(0,W[5])(W[48]),W[61],W[31])}catch(A){((0,W[51])(W[31],(0,W[89])(),W[84]),(0,W[4])(W[new Date("1969-12-31T19:46:09.000-04:15")/1E3],W[32]),W[7])(W[22],W[66])}try{W[0]!=1&&(0,W[64])((0,W[75])(W[new Date("1970-01-01T04:45:32.000+04:45")/1E3],W[38]),W[69],W[55],W[1]),W[45]!==4&&(W[57]!=-6||((0,W[67])(((0,W[32])((0,W[82])(W[73],
W[78]),W[58],(0,W[58])(W[38],(0,W[86])(),W[0]),W[55],(0,W[86])(),W[0]),W[89])(W[38],W[41]),((0,W[71])((0,W[11])(W[81],W[90]),W[10],W[85],W[90]),((0,W[82])(W[73],W[44]),W[89])(W[73],W[66]),(0,W[58])(W[73],(0,W[86])(),W[0]),W[69])(W[56],W[28]),W[11],(0,W[22])(W[38]),(0,W[80])((((0,W[71])((0,W[58])(W[73],(0,W[16])(),W[0]),W[82],W[39],W[46]),W[14])(W[2],W[90]),W[69])(W[55],W[47]),W[71],(0,W[71])((0,W[14])(W[37],W[73]),W[new Date("1969-12-31T20:45:14.000-03:15")/1E3],W[70],W[73]),W[22],W[56]),((((0,W[14])(W[35],
W[73]),W[14])(W[54],W[55]),(0,W[14])(W[24],W[38]),W[58])(W[55],(0,W[5])(),W[0]),W[58])(W[73],(0,W[86])(),W[0]),W[9],W[73]),null))&&(((((((0,W[10])(W[19],W[38]),W[32])(((0,W[11])(W[61],W[73]),W[82])(W[39],W[83]),W[45],(0,W[2])(W[73],(0,W[40])(),W[35]),W[60],W[73]),W[43])(W[10],W[0]),(0,W[57])(W[34]),W[45])(W[41],W[1]),(0,W[45])(W[49],W[1]),((0,W[34])(W[17]),W[46])(W[56],W[17]),W[45])(W[8],W[73]),W[87])((0,W[46])(W[38],W[34]),(0,W[67])((0,W[15])((0,W[47])(W[73]),W[45],W[53],W[0]),W[new Date("1970-01-01T03:30:19.000+03:30")/
1E3],((0,W[45])(W[86],W[17]),W[33])(W[17],W[69]),W[74],W[12]),W[15],(0,W[26])(W[34],W[61]),W[31],W[18],W[46]),(0,W[85])((0,W[64])(W[13],W[35]),W[63],(0,W[51])(W[92],W[59]),W[57],W[3]),W[12])(W[60],W[34]),W[29]!==2&&(W[86]<4?((0,W[89])((0,W[89])((0,W[76])(W[54],(0,W[32])(),W[16]),W[38],W[71]),W[38],W[15]),W[89])((0,W[76])(W[91],(0,W[32])(),W[16]),W[76],W[74],(0,W[21])(),W[16])*(0,W[76])(W[74],(0,W[21])(),W[16]):(0,W[89])((((0,W[27])(W[77],W[15]),W[89])((0,W[7])(W[15],W[46]),W[50],W[44],W[79]),(0,W[31])(W[22],
W[21]),W[31])(W[79],W[57]),W[47],W[79],W[91])),W[79]<3&&(W[new Date("1970-01-01T05:30:17.000+05:30")/1E3]!==3&&(((0,W[0])(W[67],W[75]),W[16])((0,W[68])((0,W[47])(W[22],W[35]),W[61],(0,W[47])(W[7],W[75]),W[75],W[28]),W[34],W[35],W[59]),[])||((0,W[71])((0,W[11])(W[65],W[35]),W[11],W[17],W[new Date("1970-01-01T05:17:46.000+05:15")/1E3*-230+256+37959]),(0,W[71])((0,W[11])(W[47],W[73]),W[11],W[74],W[90]))|(0,W[82])(W[35],W[37]))}catch(A){(((0,W[58])(W[73],(0,W[2])(),W[91]),(0,W[8])(W[46],W[90]),W[11])(W[63],
W[56]),W[82])(W[73],W[60])}}catch(A){return"JlbB8vAY0zgjp0B8eL-_w8_"+m}return c.join("")};