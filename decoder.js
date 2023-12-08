const gma = /^[\w.]*$/
const signatureTimestamp = 19697

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
	const url = orgaCompose(m.XC,m.PF,m.s)
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
	a={eX:!1,XC:"",PF:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.eX=!0;
a.XC=b.url;
a.PF=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
vP.s2(a,33);
vP.OK(a,62);
vP.LU(a,3);
vP.s2(a,29);
vP.OK(a,11);
vP.OK(a,31);
return a.join("")
}

var vP={OK:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
LU:function(a,b){a.splice(0,b)},
s2:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(""),c=[function(d,e){if(0!=e.length){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
-1977582718,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
function(d){throw d;},
";([('",null,1105167325,1540504744,542535014,-1794445066,2064123929,function(d,e,f){var h=f.length;e.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},d.split(""))},
-1470956984,-1690335299,"UIFJNTd",-160431415,b,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
335969325,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
1879781500,function(d){d.reverse()},
/(({)(\)()(\/())))/,-1378780783,-316810675,1436331068,-1936430264,null,1125496048,1885134159,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
1448556446,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
-1745666209,-518802575,1358161902,999188334,-1547774843,751512964,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
-2103441656,"\"[';/",1885596181,-1040595134,-440519166,1252729921,1358161902,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
b,2102938198,751400724,function(d,e){e.splice(e.length,0,d)},
-936657548,"zp2m1",b,-1561465089,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1324563520,-760064978,1237764032,-658182461,-408029676,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
966451001,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-767953731,-1235343342,1540504744,-1615595456,-46049419,function(d,e,f,h,l){return e(f,h,l)},
-1151417821,840038479,-1794445066,350286750,1134830233,59391080,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-573490500,function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
2064123929,-358306057,null,-1361706939,function(d,e,f,h,l,m){return e(h,l,m)},
-1281606035];c[5]=c;c[27]=c;c[82]=c;try{try{-2>=c[73-Math.pow(4,3)+15]&&(-9==c[72]||((0,c[79])(c[5],c[45]),null))&&(0,c[11])(c[14],c[16],(0,c[17])()),-10!==c[61]&&(-3<=c[76]||(0,c[70])((0,c[79])(c[54],c[74]),c[32],c[76],c[16])&&Math.pow(7,1)+42+-49)&&(0,c[70])((0,c[79])(c[82],c[8]),c[47],c[54],c[40])}catch(d){(0,c[70])((0,c[11])(c[53],c[48],(0,c[77])()),c[32],c[57],c[16])}try{(0<c[71]||((0,c[47])(c[82],c[43]),0))&&(0,c[82])(c[68],c[18]),8>=c[74]&&(4==c[0]||((0,c[3])(c[16],c[Math.pow(6,5)-28188+new Date("1970-01-01T13:26:29.000+07:45")/
1E3]),0))&&(0,c[75])(c[new Date("1970-01-01T07:45:31.000+07:45")/1E3],c[26],(0,c[81])()),10<=c[52]&&(((0,c[8])(c[43],c[26]),c[48])((0,c[8])(c[6],c[69]),c[7],c[63],c[4])|(0,c[140%Math.pow(4,1)+55])(c[46-47%Math.pow(5,2)],c[46]))>>>(0,c[6])((0,c[47])(c[33],c[24]),c[40],(0,c[40])(c[17],c[24]),c[44],c[56]),10!=c[76]&&(1<c[67]&&((0,c[61254+Math.pow(8,3)-61760])((0,c[1])(c[4],c[68]),c[1],(0,c[19])(c[61],c[24],(0,c[25])()),c[62],c[42]),"undefined")||((0,c[55])(c[62],c[5]),(0,c[29])(c[13]),c[40])(c[20525+
-253*Math.pow(3,4)],c[24])),c[31]<new Date("1969-12-31T14:44:56.000-09:15")/1E3?((0,c[55])(c[4],c[54]),c[77])(c[46],c[50]):(0,c[Math.pow(3,1)+new Date("1970-01-01T03:11:04.000+03:15")/1E3*241- -56887])((0,c[62])(c[71],c[78]),c[41],c[44],c[46],(0,c[49])()),9<c[12]?(((0,c[41])(c[83],c[46],(0,c[21])()),c[41])(c[44],c[84],(0,c[49])()),c[14])((0,c[41])(c[44],c[46],(0,c[49])()),c[29],c[7],c[46]):((0,c[23])(c[26],c[43]),(0,c[14])((0,c[23])(c[57],c[15]),c[81],c[177*Math.pow(2,1)-291],c[26]),c[206*Math.pow(4,
new Date("1969-12-31T21:00:03.000-03:00")/1E3)-13161])(c[46],c[36])}catch(d){(0,c[Math.pow(4,4)-104+-90])(c[30],c[78]),((0,c[14])((0,c[41])(c[44],c[84],(0,c[49])()),c[29],c[67],c[35]),c[62])(c[10],c[35]),(0,c[14])((0,c[62])(c[19],c[84]),c[41],c[44],c[84],(0,c[33])())}finally{(10==c[74]||((0,c[69])(c[Math.pow(7,3)- -52430+-52770],c[26]),""))&&(0,c[37-Math.pow(5,2)- -10])(c[25],c[65],(0,c[2])())}try{2==c[70]&&((0,c[82])((0,c[22])(c[25],c[59],(0,c[30])()),c[58],c[413-375%Math.pow(7,4)],c[37]),"NaN")||
(0,c[10])(c[26],c[38])/(0,c[10])(c[61+Math.pow(8,3)+-513],c[7]),(0,c[40])(c[59]),(0,c[22])(c[25],c[27],(0,c[30])()),(0,c[32])(c[59])}catch(d){}try{(-5>c[60]||((0,c[82])((0,c[4])(c[59],c[5]),c[50],c[61],c[49-Math.pow(7,5)- -16796]),NaN))&&(0,c[13056+Math.pow(6,1)+-12986])((0,c[16])(c[19],c[53],(0,c[24])()),c[16],c[58],c[31],(0,c[24])()),-7!==c[12]&&(0,c[3])((0,c[new Date("1969-12-31T17:46:25.000-06:15")/1E3])(c[32],c[6]),c[85],(0,c[4])(c[78],c[32]),c[1],c[14]),-8!=c[25]&&((0,c[52])(c[1],c[67]),c[66])((0,c[67])(c[23],
c[84]),c[new Date("1970-01-01T05:30:02.000+05:30")/1E3],(0,c[67])(c[Math.pow(8,4)+-13770+9700],c[84]),c[29]),4>c[15]&&(-10<=c[6]?(0,c[52])((0,c[46])(c[84]),c[13],c[80],c[7]):((0,c[20])(c[new Date("1970-01-01T06:15:40.000+06:15")/1E3],c[84]),c[79])(c[34],c[7],(0,c[59])())),-7!=c[new Date("1969-12-31T13:01:17.000-11:00")/1E3]&&(10==c[83]?(0,c[70])((0,c[79])(c[82],c[29],(0,c[0])()),c[52],(0,c[66])((0,c[13])(c[4],c[7]),c[13],(0,c[79])(c[34],c[84],(0,c[59])()),c[50],c[29]),c[46],c[29]):((((0,c[79])(c[82],
c[29],(0,c[0])()),c[61])(c[Math.pow(3,2)+-1792+1867],c[38]),c[52])((0,c[46])(c[84]),c[67],c[75],c[7]),c[61])(c[new Date("1970-01-01T01:16:24.000+01:15")/1E3],c[25]))}catch(d){(0,c[79])(c[82],c[84],(0,c[0])()),(0,c[52])((0,c[239-Math.pow(1,new Date("1970-01-01T11:45:05.000+11:45")/1E3)+-210])(c[73],c[51]),c[79],c[34],c[7],(0,c[85])()),(0,c[28])(c[64],c[12]),(0,c[79])(c[34],c[29],(0,c[85])())}}catch(d){return"enhanced_except_8ZkBjub-_w8_"+a}return b.join("")};