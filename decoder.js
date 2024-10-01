const gma = /^[\w.]*$/
const signatureTimestamp = 19992

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
		url = orgaCompose(m.VE,m.oI,m.s)
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
	a={zZ:!1,VE:"",oI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.zZ=!0;
a.VE=b.url;
a.oI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
kL.vg(a,29);
kL.fB(a,53);
kL.vg(a,65);
kL.wy(a,1);
kL.vg(a,12);
kL.wy(a,3);
return a.join("")
}

var kL={wy:function(a,b){a.splice(0,b)},
vg:function(a){a.reverse()},
fB:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
function(d,e,f,h,l){return e(f,h,l)},
function(d){d.reverse()},
1995426982,-2100937911,null,-1618736658,"{]{\\",-1827349675,-1409184291,function(d){throw d;},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
1121648557,-753136153,-1506300932,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
1347877445,function(d,e){e.splice(e.length,0,d)},
441298896,function(d){throw d;},
-848434815,b,-1566775585,736324082,1746989400,2048063267,-1976450298,2037874296,function(d,e,f,h,l,m){return e(h,l,m)},
572106433,-1107663360,-1568059158,217264785,32387973,1799098254,-589355723,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-90188079,b,"while",/,,'(\\,)[;,((](,')}/,-1492892635,-241613697,1825547940,function(d,e,f,h,l,m,n){return d(l,m,n)},
1406170043,-1657772887,-1380020583,null,b,-953958940,-1181790196,-982299243,-1181958021,1881073567,756787394,-1356371679,-37009258,-807238639,285565762,null,1329302910,46433147,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
function(d,e,f,h,l,m,n,p,q,r,t){return d(f,h,l,m,n,p,q,r,t)},
function(d,e,f){var h=e.length;d.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},f.split(""))},
-1426823244,-1170121847,900009723,-1432141111,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
1504546316,-1266174546,1935086248,421119673,-849739952,-2032054061,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
2071042840,1974727625,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
1504546316,-780379462,function(d,e,f,h,l,m,n,p,q,r,t){return d(f,h,l,m,n,p,q,r,t)},
-2112252211,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)}];
c[5]=c;c[49]=c;c[61]=c;try{try{c[54]<=4&&(c[8]>=7||((0,c[2])(c[61]),0))&&(0,c[0])(c[37],c[12]),(0,c[69])(c[38],c[31]),(0,c[21])(c[37],(0,c[6])(),c[47])}catch(d){}try{c[32]>9&&(0,c[72])(((0,c[16])(c[61],c[26]),c[77])((0,c[19])(c[67],c[83]),c[24],(0,c[19])(c[56],c[50]),c[58],c[57]),c[17],(0,c[18])(c[84],c[27]),c[35],c[15],c[67]),c[87]!=-9&&(c[46]===4||((0,c[21])(c[61],(0,c[69])(c[57]),c[85],(0,c[85])(c[42],c[11]),(0,c[22])(c[44],c[2]),(0,c[5])(c[new Date("1969-12-31T18:30:30.000-05:30")/1E3],c[44]),
c[72],c[35]),""))&&(((0,c[23])((0,c[0])(c[44],(0,c[33])(),c[62]),c[0],c[61],(0,c[12])(),c[62]),(0,c[0])(c[44],(0,c[86])(),c[62]),c[new Date("1969-12-31T19:15:00.000-04:45")/1E3])(c[61],(0,c[12])(),c[62]),(0,c[21])(c[72],c[43])),c[28]<=8&&(((0,c[22])(c[71],c[46]),c[21])(c[61],c[53]),c[22])(c[44],c[1]),c[56]>=-10&&((0,c[5])(c[56],c[61]),1)||(0,c[21])(c[44],c[49]),(c[40]<-2||(((0,c[16])(c[68],c[71]),(0,c[16])(c[36],c[61]))|(0,c[38])(c[27],c[41]),0))&&(0,c[53])((0,c[75])(c[87]),c[39],(0,c[26])(c[0],(0,c[31])(),
c[78]),c[37],c[0],c[9]),c[6]>=-9&&(c[44]==7||((0,c[67])((0,c[32])(c[13],c[60]),c[75],(0,c[32])(c[73],c[11]),c[43]),0))&&((0,c[50])(c[57],c[79]),(0,c[66])(c[68],c[0]),c[61])(c[10],(0,c[73])(),c[9]),c[64]<8&&(c[1]>7&&(((0,c[61])(c[27],(0,c[59])(),c[9]),c[33])(c[44],c[67]),3)||(0,c[48])((0,c[33])(c[44],c[60]),c[12],c[51],c[16])),c[46]!=2&&(0,c[11])((0,c[18])(c[72],c[39]),c[10],c[61]),c[72]>=-9&&(c[25]<=-1||((0,c[11])(((0,c[24])(c[20],(0,c[22])(),c[60]),c[29])(c[0],c[78]),c[18],c[26],c[7]),0))&&(0,c[85])((0,c[10])(c[78]),
c[11],(0,c[13])(c[20],c[57]),c[13],c[61],c[62]),c[82]>2&&(c[87]<6||((0,c[13])(c[20],c[82]),0))&&(0,c[12])(c[51],c[83])}catch(d){((0,c[0])(c[78],c[38]),c[63])(c[61]),(0,c[12])(c[61],c[13]),(0,c[24])(c[20],(0,c[36])(),c[60])*(0,c[84])(c[20],c[48]),(0,c[0])(c[78],c[64]),(0,c[11])((0,c[24])(c[78],(0,c[1])(),c[60]),c[18],c[49],c[51]),(0,c[11])((0,c[18])(c[3],c[51]),c[24],c[78],(0,c[1])(),c[60])}try{c[23]<6&&(c[46]>=6||((0,c[29])(c[50],c[20])^(0,c[0])(c[78],c[14]),void 0))&&(0,c[11])((0,c[29])(c[27],c[39]),
c[24],c[61],(0,c[36])(),c[60]),c[37]>-6&&(c[52]>-4?(0,c[0])(c[20],c[67]):(0,c[29])(c[53],c[61])),(0,c[80])(c[51]),(0,c[24])(c[61],(0,c[1])(),c[60])}catch(d){c[16]!=7?(0,c[10])(c[20]):(0,c[24])(c[61],(0,c[36])(),c[60]),c[33]!==9?(0,c[18])(c[46],c[new Date("1969-12-31T15:45:20.000-08:15")/1E3]):(0,c[18])(c[47],c[61]),c[23]!=-27-new Date("1969-12-31T18:59:38.000-05:00")/1E3&&(c[66]<=-4?(0,c[0])(c[7],c[45]):(0,c[29])(c[43],c[39])),c[3]>=6&&(c[23]<=10?(0,c[52])((0,c[65])(c[61],(0,c[77])(),c[13]),c[65],
c[14],(0,c[77])(),c[13]):(0,c[52])((0,c[70])(c[75],c[48]),c[56],c[67],c[66]))}try{c[37]<-7&&(c[70]<-8?(((0,c[82])(c[14],c[52]),c[82])(c[33],c[50]),c[82])(c[72],c[2]):(0,c[5])(((0,c[23])(c[22],c[33]),c[24])(c[65]),c[61],c[66],c[5])),(0,c[71])(c[66]),(0,c[62])((0,c[63])(c[53]),c[49],c[12],(0,c[54])(),c[new Date("1970-01-01T06:30:13.000+06:30")/1E3])}catch(d){}}catch(d){return"enhanced_except_mJwB5-P-_w8_"+a}return b.join("")};