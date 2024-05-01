const gma = /^[\w.]*$/
const signatureTimestamp = 19842

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
	const url = orgaCompose(m.bD,m.tG,m.s)
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
	a={WX:!1,bD:"",tG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.WX=!0;
a.bD=b.url;
a.tG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
bP.e2(a,39);
bP.e2(a,32);
bP.i8(a,3);
bP.EY(a,36);
bP.i8(a,3);
bP.e2(a,4);
bP.i8(a,3);
bP.EY(a,55);
return a.join("")
}

var bP={EY:function(a){a.reverse()},
i8:function(a,b){a.splice(0,b)},
e2:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(""),c=[-781301619,null,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
1462615054,559607805,-91817978,1462615054,function(d,e,f){var h=f.length;e.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},d.split(""))},
null,1441569159,-218641296,440680273,66856159,652227174,-1654442430,713295516,-1596686646,b,b,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-214296990,477028876,"oC5j9H",-1596173102,function(d,e){if(0!=e.length){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
function(d,e){d.splice(d.length,0,e)},
"oC5j9H",-720201623,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-424707453,1480179046,-1206147510,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
-789722486,-1744282361,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
794992010,-1897604543,1798864861,-1834536667,-440948499,function(d){d.reverse()},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
1654199050,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.j(d))}return e},
1202867086,1555486335,-442316722,927655683,-1167830533,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-889209156,835591390,-1557350808,-1932134711,-703666530,-384168707,-1076021127,1412242593,-691069272,b,-1735864048,1480179046,-1537848048,"reverse",function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
664969650,-1019707316,function(d,e,f,h,l){return e(f,h,l)},
143183948,1630024927,-781802653,858148942,847686127,2057328269,1950146252,function(d,e,f,h,l,m){return e(h,l,m)},
2056692509,-1541099029,890412102,function(d,e){0!=e.length&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
988403431,"if",-1868477121,-920713825,-96421515,"else",1137880924,null,"[,{})/",-1916763122,-1094219185,1323343584];c[1]=c;c[9]=c;c[89]=c;try{try{10!==c[48]&&(4>c[79]&&(((0,c[69])((0,c[81])(c[40],c[61]),c[42],c[19]),c[33])(c[19],c[16]),1)||(((0,c[8])(c[87],c[61],(0,c[29])()),c[42])(c[-618-Math.pow(5,4)- -1252]),c[8])(c[65],c[61],(0,c[51])())),-1>c[54]&&(6>=c[40]?((0,c[69])((0,c[66])(c[78],c[89]),c[23],c[37],c[60]),c[39])(c[46],c[181+Math.pow(4,5)+-1137]):(0,c[48])((0,c[48])((0,c[12])(c[40],c[9]),
c[81],c[66],c[new Date("1969-12-31T15:45:40.000-08:15")/1E3],(0,c[75])()),c[4],c[new Date("1970-01-01T06:15:50.000+06:15")/1E3],c[91])),3<c[38]?(0,c[12])(c[74],c[27])-((0,c[1])(c[Math.pow(6,5)+-48260+new Date("1970-01-01T22:45:48.000+11:30")/1E3],c[46]),c[72])(c[88],c[13]):(0,c[44])((0,c[77])(c[40],c[88],(0,c[7+Math.pow(2,2)%268])()),c[41],c[32],c[78])<=(0,c[41])(c[10],c[new Date("1970-01-01T10:46:10.000+10:45")/1E3])}catch(d){((0,c[0])(c[68+Math.pow(1,2)%72],c[70]),c[0])(c[90],c[70]),(0,c[77])(c[58],
c[36],(0,c[26])())}finally{10!==c[47]&&(0==c[46]?(((0,c[72])(c[87],c[-204+238%Math.pow(5,4)]),c[56])(c[39],c[1213092+-156*Math.pow(6,5)]),c[8])(c[88],c[-561+102*Math.pow(6,1)]):((0,c[44])((0,c[77])(c[92],c[88],(0,c[71])()),c[56],c[75],c[70]),c[92])(c[19],c[36]))}try{-9>=c[60]&&(-2!==c[75]||(((0,c[Math.pow(4,3)-78- -86])(c[64],c[61]),c[8])(c[78],c[6]),0))&&(0,c[44])((0,c[41])(c[50],c[70]),c[1],c[11],c[91]),(0,c[81])(c[62],c[39],(0,c[15])()),(0,c[Math.pow(3,5)+9540-9771])(c[82],c[31])}catch(d){-5!==
c[18]&&((0,c[56])((0,c[48])(((0,c[60])(c[78],c[40]),c[76])(c[92],c[7]),c[21],c[92]),c[45],(0,c[60])(c[16],c[74]),c[29],c[68]),"true")||(0,c[50])((((0,c[78])(c[42],c[22]),c[50])((0,c[62])(c[4],c[94]),c[78],c[94],c[69]),c[78])(c[94],c[2]),c[78],c[42],c[74]),-9!==c[69]&&(c[73]>=Math.pow(4,2)-20295+20285||((0,c[50])((0,c[7])(c[84],c[36]),c[3],c[66],c[84]),""))&&((0,c[62])(c[49],c[94]),c[23])(c[70])}finally{c[54]>=new Date("1970-01-01T06:15:01.000+06:15")/1E3&&(5!==c[66]||((0,c[83])(c[64],c[93],(0,c[77])()),
0))&&(0,c[78])(c[42],c[37]),c[90]<new Date("1969-12-31T20:30:00.000-03:30")/1E3&&(((0,c[50])((0,c[24])(c[336%Math.pow(7,4)+-260]),c[33],c[68],c[19]),(((0,c[12])(c[27],c[53],(0,c[18])()),c[48])(c[65],c[1]),c[33])(c[new Date("1969-12-31T17:46:20.000-06:15")/1E3],c[1]),c[12])(c[31],c[2],(0,c[63])()),/\)/)||(0,c[37])(((0,c[48])(c[13],c[53]),(0,c[45])((0,c[72])(c[25]),c[17],c[53],c[3]),c[17])(c[53],c[59]),c[71],(0,c[17])(c[new Date("1970-01-01T10:15:25.000+10:15")/1E3],c[52]),c[11]),(5===c[57]||((0,c[88])(c[Math.pow(8,
3)+39123+-39624],c[94]),null))&&(0,c[92])(c[54],c[53]),c[0]<=new Date("1970-01-01T11:00:01.000+11:00")/1E3&&(((0,c[45])((0,c[17])(c[1],c[30]),c[71],c[Math.pow(4,4)+94-325]),(0,c[63])(c[61],c[77]),c[84])(c[47],c[95],(0,c[11])()),1)||(((0,c[48])(c[40],c[95]),c[79])(c[95],c[36]),c[79])(c[85],c[91])*(0,c[79])(c[43],c[87])}try{9>c[12]&&(-3==c[31]&&(((0,c[48])(c[21],c[95]),(0,c[79])(c[71],c[new Date("1969-12-31T21:46:30.000-02:15")/1E3]),c[84])(c[new Date("1969-12-31T18:30:47.000-05:30")/1E3],c[95],(0,c[78])()),
1)||((0,c[51])((0,c[4])(c[29],c[85]),c[24],c[77]),c[71])(c[19])),c[64]!==new Date("1970-01-01T06:30:07.000+06:30")/1E3?(0,c[51])(((0,c[51])((0,c[48])(c[49],c[71]),c[25],c[13],c[64]),c[25])(c[94],c[18]),c[45],c[92]):(0,c[25])(((0,c[88])(c[6],c[77],(0,c[-6686+54*Math.pow(5,3)])()),c[88])(c[28],c[-1075+18*Math.pow(8,2)],(0,c[42])()),c[24],(0,c[12])(c[22-Math.pow(4,1)+-7],c[32]),c[Math.pow(4,1)+49+35],c[10],c[116-Math.pow(6,4)- -1257],(0,c[57])()),(0,c[88])(c[10],c[Math.pow(7,2)+246%(new Date("1970-01-01T10:15:59.000+10:15")/
1E3)- -36],c[48]),((0,c[71])(c[40],c[32]),c[93])(c[4],c[23])}catch(d){c[35]<-12545+49*Math.pow(4,4)&&(2===c[82]?(0,c[60])(c[Math.pow(3,1)-45- -74],c[1]):(0,c[12])(c[21],c[78]))}try{-9!==c[5]&&(8!==c[9]||((0,c[93])(c[95],c[25*Math.pow(6,3)+-5314]),""))&&(0,c[27])(c[19],c[32])}catch(d){(0,c[93])(c[Math.pow(4,1)- -5300+-5217],c[84])}}catch(d){return"enhanced_except_gpsB_eT-_w8_"+a}return b.join("")};