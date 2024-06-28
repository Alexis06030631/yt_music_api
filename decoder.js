const gma = /^[\w.]*$/
const signatureTimestamp = 19900

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
	const url = orgaCompose(m.fE,m.wH,m.s)
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
	a={TY:!1,fE:"",wH:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.TY=!0;
a.fE=b.url;
a.wH=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
xO.SQ(a,12);
xO.K0(a,16);
xO.SQ(a,12);
xO.K0(a,79);
xO.SQ(a,37);
xO.Hb(a,1);
xO.SQ(a,46);
return a.join("")
}

var xO={SQ:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
Hb:function(a,b){a.splice(0,b)},
K0:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(""),c=[function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
b,1237045444,null,-1865685197,-1050635585,1717415059,function(d,e){d.push(e)},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
46282013,912950215,1626413856,641120168,-1014179932,2129462292,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
b,-1902853504,function(d,e,f,h,l){return e(f,h,l)},
1013097261,1237045444,function(d){d.reverse()},
function(d,e,f,h,l,m,n){return d(l,m,n)},
-1451069955,"join",-1660789290,null,994474639,1351881026,-571958850,b,-270943054,"[',\\",function(d,e,f){var h=e.length;f.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},d.split(""))},
function(d,e,f,h,l,m,n,p,q,r,t){return d(f,h,l,m,n,p,q,r,t)},
669244434,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
100200858,-1792722203,function(d,e){e.splice(e.length,0,d)},
1787787585,1626413856,function(d){throw d;},
1454746581,350945309,-460485539,-742050352,496305438,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-225379510,function(d,e,f,h,l,m){return e(h,l,m)},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
null,419900561,730601543,-1702250745,-1089256915,-483298302,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
function(d,e,f,h,l,m,n,p){return d(m,n,p)},
-1625855834,641120168,"Gja5",947167953,-328260630];c[3]=c;c[26]=c;c[56]=c;try{try{c[17]<-2&&(0,c[18])((0,c[52])((0,c[21])(c[16]),c[54],(0,c[18])((0,c[7])(c[26],c[29]),c[48],c[30],c[47]),c[1],c[17]),c[53],c[35],c[3]),c[31]===3&&((0,c[46])(c[-11135-Math.pow(4,2)- -11206]),"true")||(0,c[32])(c[55],c[11]),(0,c[26])(c[55]),(0,c[37])(c[3],c[57])+(0,c[33])(c[0],c[12])}catch(d){c[49]>=-1385+51*Math.pow(3,3)&&(c[22]>-3?(0,c[2])((0,c[54])((0,c[17])(c[50],(0,c[20])(),c[55]),c[2],((0,c[38])(c[14],c[221*Math.pow(6,
5)-1718461]),c[32])(c[57],c[new Date("1970-01-01T06:46:03.000+06:45")/1E3]),c[17],c[8],(0,c[62])(),c[55]),c[17],c[50],(0,c[62])(),c[0]):(0,c[6])(c[46],(0,c[Math.pow(8,2)*69-4384])(c[0],c[25]),(0,c[2])((0,c[33])(c[55],c[45]),c[46],c[new Date("1970-01-01T06:15:14.000+06:15")/1E3]),(0,c[17])(c[8],(0,c[62])(),c[55]),c[14])),(c[58-224%Math.pow(1,5)]!==-7||((0,c[2])((0,c[5])(c[55]),c[17],c[50],(0,c[69])(),c[14]),NaN))&&(0,c[2])((0,c[39])(c[10],c[9]),c[5330-Math.pow(2,4)+-5268],c[14]),c[22]<9&&(0,c[47])(c[39],
(0,c[36])((0,c[33])(c[14],c[64])===(0,c[new Date("1969-12-31T17:30:46.000-06:30")/1E3])(c[40]),c[64],(0,c[23])(c[19]),c[19]),(0,c[67])((0,c[64])(c[59]),c[37],c[41],c[55]),(0,c[32])(c[55],c[new Date("1970-01-01T07:16:08.000+07:15")/1E3]),((((0,c[37])(c[56],c[50]),c[39])(c[10],c[15]),c[17])(c[66],(0,c[69])(),c[55]),((0,c[39])(c[55],c[27]),c[184+Math.pow(5,4)+-772])(c[67],c[10])/(0,c[56])(c[32],c[39]),c[55])(c[47],c[58]),c[16],c[57])}finally{c[57]!=-1&&(c[8]==0?(0,c[62])(c[14],c[2])^(0,c[62])(c[43],
c[Math.pow(1,4)-14399+14408]):(0,c[31])((0,c[68])(c[-23285- -68*Math.pow(7,3)],c[36]),c[66],c[-40470+Math.pow(3,new Date("1969-12-31T13:30:05.000-10:30")/1E3)+40245],c[16]))}try{c[68]>=-2&&(c[41]<=-7&&(((0,c[Math.pow(1,2)+0+5])(c[14],c[16]),c[60])(c[21],c[47])<(0,c[69])(c[24],c[61]),"true")||(0,c[58])((0,c[64])(c[12],c[38]),c[27],(0,c[new Date("1970-01-01T05:00:59.000+05:00")/1E3])(c[10],c[13]),c[59],c[10],c[7]))}catch(d){(0,c[42])(c[21],(0,c[17])(),c[10])}try{c[36]!=0&&(c[55]===3?(0,c[42])(c[33],
(0,c[60])(),c[10]):(0,c[65])(c[35],c[3]))}catch(d){(0,c[63])(c[Math.pow(4,5)-2-1007],c[39])}finally{c[68]>7&&(0,c[43])(c[31],(0,c[165-108%Math.pow(5,5)])(c[66],c[0]),c[31],(0,c[31])(c[1],c[13]),(0,c[30])(c[49],c[0]),((0,c[14])(c[58],c[32]),c[38])(c[49]),c[39],c[50])}}catch(d){return"enhanced_except_vJsBw-T-_w8_"+a}return b.join("")};