const gma = /^[\w.]*$/
const signatureTimestamp = 19976

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
	const url = orgaCompose(m.KE,m.dI,m.s)
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
	a={rZ:!1,KE:"",dI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.rZ=!0;
a.KE=b.url;
a.dI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
fL.wL(a,67);
fL.Zd(a,53);
fL.wL(a,34);
fL.U9(a,1);
fL.wL(a,58);
return a.join("")
}

var fL={U9:function(a,b){a.splice(0,b)},
wL:function(a){a.reverse()},
Zd:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[234517955,-2100589212,-1197161710,73384071,function(d,e,f){var h=f.length;e.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},d.split(""))},
-1133252618,-960489037,-1349560312,-1740752618,734632469,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e){d.splice(d.length,0,e)},
"[/)(;",-1262825449,null,null,"finally",function(d){throw d;},
-1483328789,1112973038,346458446,1344827031,-986020686,-1834543262,-1701905507,-52193060,b,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
b,-2067401727,1679295569,386525279,"\u22d8{](,",function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
1314882701,-608762157,1471004172,-1649151920,2013575281,function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
-692434994,439486457,1367404854,-709851608,486057762,-1319561834,1577643756,-562597451,function(d){d.reverse()},
1100636521,function(d,e,f,h,l,m,n){return d(l,m,n)},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
1819755132,b,1459244813,705956325,function(d,e,f,h,l,m,n,p,q,r,t){return f(m,n,p,q,r,t)},
function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
-1785956171,function(d,e,f,h,l){return e(f,h,l)},
-1361449174,-969660764,-1213561164,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1241889807,472327793,547823319,null,1384020762,function(d,e,f,h,l,m){return e(h,l,m)},
-886051128,1497006821,829900580,-1730106887,-567236345,function(d,e,f,h,l,m,n,p,q,r,t){return d(f,h,l,m,n,p,q,r,t)},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
1314882701,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
-494496122,"finally",-145901651,-1163167217];c[14]=c;c[15]=c;c[70]=c;try{try{c[3]!==-7&&((0,c[72])((0,c[63])(c[14],c[52]),c[13],(0,c[4])((0,c[11])(c[62],c[15]),((0,c[29])(c[48],c[33]),c[80])(c[1],c[23]),c[61],((0,c[65])(c[30],c[57]),c[6])(c[18],c[30],(0,c[53])()),(0,c[83])(c[16],c[21]),(0,c[61])(c[68],c[75]),c[22],c[71],c[54]),c[73]),"6")||(((0,c[37])(c[9],(0,c[22])(c[59],c[52]),c[22],(0,c[78])(c[12],c[0]),((0,c[18])((0,c[78])(c[73],c[67]),c[49],c[42],c[71],(0,c[25])()),c[78])(c[71],c[74]),(0,c[49])(c[42],
c[71],(0,c[25])()),c[29],c[34]),c[18])((0,c[49])(c[42],c[71],(0,c[55])()),c[16],c[29],c[35]),c[78])(c[71],c[76]),(0,c[62])(),(0,c[49])(c[42],c[71],(0,c[10])())}catch(d){(c[46]<1||((0,c[40])(c[73],c[28]),0))&&(0,c[new Date("1969-12-31T14:46:24.000-09:15")/1E3])(c[59],c[17]),c[69]<4&&(c[82]>=4&&((0,c[72])((0,c[84])(c[71],c[66]),(0,c[78])(c[73],c[39])&(0,c[78])(c[59],c[68]),c[18],(0,c[40])(c[73],c[43]),c[84],c[73],c[47]),[])||(0,c[23])((0,c[84])(c[59],c[33])/(0,c[24])(c[29]),c[67],((0,c[61])(c[14]),
c[1])(c[14],c[84]),c[45],c[73],c[32]))}try{c[49]<9&&(0,c[62])((((0,c[45])(c[73],c[15]),c[61])(c[12]),c[63])(c[73],c[82])>(((0,c[63])(c[14],c[81]),c[new Date("1970-01-01T08:45:45.000+08:45")/1E3])(c[26],c[40]),c[75])(c[53]),c[21],(0,c[1])(c[76],c[22]),c[81],c[74],c[35])}catch(d){(0,c[52])(c[45],c[74],(0,c[28])())}try{c[57]>=-9&&(c[17]>=-2&&(((0,c[43])(c[32],c[9]),(0,c[10])(c[5],c[7]),c[58])(c[78],c[59]),1)||(0,c[44])((0,c[44])((0,c[75])(c[1],c[11],(0,c[51])()),c[18],c[38],c[26]),c[18],c[13],c[23])),
c[27]!==-5?(0,c[44])((0,c[44])((0,c[33])(c[13]),c[66],c[13],c[9]),c[50],c[13]):(0,c[44])((0,c[44])((0,c[18])(c[13],c[20]),c[48],c[85],c[56]),c[18],c[85],c[84])}catch(d){((0,c[18])(c[38],c[5]),c[24])(c[55],c[21])}finally{(c[84]!==-4||((0,c[18])(c[13],c[46]),0))&&(0,c[66])(c[0],c[47]),c[4]!=4&&((0,c[20])(c[71],c[61]),((0,c[82])(c[27],c[25]),c[54])(c[58],c[26]),c[20])(c[57],c[46]),c[79]!=10&&((0,c[44])(c[63],c[2]),"3")||(0,c[60])(c[53],c[82],(0,c[36])())}try{c[68]!=6&&(c[24]>=4?(0,c[42])((0,c[33])(c[40],
c[68]),c[18],(0,c[61])(c[81],c[16]),c[33],c[50]):(0,c[22])((0,c[22])((0,c[1])(c[75],c[17]),c[82],c[75],c[12]),c[53],c[46],c[77],(0,c[42])())),c[25]!==-9&&(0,c[26])(c[63],c[54])}catch(d){((0,c[39])(c[51],c[61],(0,c[28])()),c[39])(c[51],c[61],(0,c[15])())}}catch(d){return"enhanced_except_iJwB9-P-_w8_"+a}return b.join("")};