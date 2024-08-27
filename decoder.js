const gma = /^[\w.]*$/
const signatureTimestamp = 19957

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
	const url = orgaCompose(m.IE,m.cI,m.s)
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
	a={uZ:!1,IE:"",cI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.uZ=!0;
a.IE=b.url;
a.cI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
WK.RW(a,59);
WK.RW(a,30);
WK.RW(a,8);
WK.ZG(a,37);
return a.join("")
}

var WK={RW:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
ZG:function(a){a.reverse()},
VG:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[-1330826921,function(d,e,f,h,l,m){return e(h,l,m)},
function(d,e,f,h,l,m,n,p,q,r,t,u){return h(n,p,q,r,t,u)},
b,-1338426673,b,null,-1063583561,1821915367,-1063583561,865678218,function(d){d.reverse()},
-2141789578,1350090049,-698008952,null,function(d,e){e.length!=0&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
382939292,1188210257,675389877,-553447621,-1293803898,610458100,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
-1832906235,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-993255127,-1207980708,-2029901916,1156273453,function(d,e){d.push(e)},
function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
102782499,1897779726,1607039846,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-171319793,function(d,e,f){var h=e.length;f.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},d.split(""))},
"CabN",function(d,e,f,h,l){return e(f,h,l)},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
",\\,}",29314066,-747417558,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-1867656733,null,-819884582,-1380572682,"PJQGvP","\"'[}],","ux-3KU",615283495,function(d,e,f,h,l,m,n){return d(l,m,n)},
2069840046,-1330826921,-1360496545,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1277416554,-1932985547,434842966,b,1192583645,-1251852651,1001996843,-1214797558,function(d,e){d.splice(d.length,0,e)},
147983964,function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
1802503263,1234332083,1035096356,41779472,-111120638,-130201659,-770377659,-341062750,-1518239896,-424409839,138042880,-1251008162,454758788,371285574,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
177047802,-1363446426,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
/,,\\\\';,,/,1325035082];c[6]=c;c[15]=c;c[47]=c;try{try{c[89]>=4&&(c[48]>=-4||(((0,c[new Date("1969-12-31T15:31:09.000-08:30")/1E3])(c[62],c[14]),c[69])(c[47],c[17]),""))&&((0,c[37])(c[50],(0,c[40])(),c[62]),c[37])(c[38],(0,c[45])(),c[62]),c[55]!==10?(((0,c[69])(c[15],c[82]),c[16])(c[32],c[6]),c[0])(c[15],c[19]):(0,c[84])((0,c[11])(c[15]),c[39],(0,c[23])(c[62],c[74]),c[23],c[6],c[80]),c[34]<=-7?(((((0,c[39])((0,c[1])((0,c[23])(c[-637+Math.pow(2,2)*171],c[59]),c[87],(0,c[23])(c[6],c[27]),c[62],c[78]),
c[87],c[5],c[-354+443%Math.pow(5,5)]),c[31])(c[6],c[12]),c[54])(c[37],(0,c[37])(c[209%Math.pow(5,3)+-15],(0,c[Math.pow(3,2)+-13482- -13508])(),c[3]),(0,c[23])(c[5],c[20]),((0,c[41])(c[7],c[47]),c[31])(c[62],c[83]),c[52],(0,c[45])(),c[3]),(0,c[23])(c[5],c[77]),(0,c[25])(c[47]),c[54])(c[23],(0,c[23])(c[3],c[75]),(0,c[23])(c[3],c[2]),(0,c[37])(c[Math.pow(2,5)%290+18],(0,c[45])(),c[5]),c[-2600+Math.pow(3,4)- -2522],c[43]),c[Math.pow(4,5)+79-1080])(c[5],c[13]):(0,c[39])((0,c[38])((((0,c[87])(c[5],c[85]),
c[39])((0,c[55+Math.pow(7,5)%55])(c[3],c[28]),c[87],c[62],c[73]),c[30])(c[6],c[64]),(0,c[1])((0,c[25])(c[62]),c[67],(0,c[1])((0,c[87])(c[15],c[49]),c[23],(0,c[25])(c[15]),c[28],c[24]),c[75],c[44]),(0,c[74])(c[54],c[43]),c[51],(0,c[3])(c[new Date("1970-01-01T10:31:24.000+10:30")/1E3],c[90]),(0,c[89])((0,c[49])(c[61],c[87]),c[67],(0,c[49])(c[11],c[43]),c[48],c[83]),(0,c[14])(c[1],(0,c[6])(),c[81]),c[10],c[78],c[36]),c[29],c[48])}catch(d){(0,c[Math.pow(2,5)%316+44])((0,c[74])(c[-23*Math.pow(1,4)- -110],
(0,c[72])(),c[7]),c[74],c[89],(0,c[72])(),c[40]),(0,c[53])(c[90],c[new Date("1970-01-01T10:15:07.000+10:15")/1E3])}try{(c[20]===10||((0,c[32])(c[43],c[Math.pow(5,1)+93-92]),void 0))&&(0,c[74])(c[89],(0,c[82])(),c[42]),(((0,c[78])(c[40],c[30]),c[68])(c[52],c[15]),c[60])(c[7],c[21])}catch(d){c[47]!==-1&&(c[86]!=-5&&((0,c[76])((0,c[32])(c[43],c[8]),c[450%Math.pow(5,4)-388],c[43]),1)||(0,c[15])((0,c[31])(c[48],c[6]),c[23],c[49],c[65])),c[47]===0&&((0,c[15])(((0,c[31])(c[84],c[46]),((0,c[31])(c[7],c[32]),
c[15])((0,c[43])(c[48]),c[59],c[49],c[30])%(0,c[17])(c[4],(0,c[14])(),c[84]),c[38])(c[28],c[39]),c[17],c[77],(0,c[19])(),c[51]),1)||(0,c[89])(((0,c[207%Math.pow(4,2)+-2])(c[10],c[48]),(0,c[39])(c[58]),(0,c[66])((0,c[58])(c[32],c[3]),c[43],c[7],c[89])),(0,c[68])(c[162+-76*Math.pow(1,5)],c[42]),c[63],(0,c[65])(c[77],c[30]),c[73+401%Math.pow(5,2)],c[76],c[63]),c[12]>=-6&&(((((((0,c[89])(c[28],c[0]),c[Math.pow(7,2)*250+-12245])((0,c[3])(c[35],(0,c[6])(),c[28]),c[81],c[63],c[62]),c[3])(c[35],(0,c[6])(),
c[61]),c[69])(c[13]),c[74])(c[52],c[13]),c[69])(c[63]),{})||(0,c[5])(((((0,c[53])(c[63],c[79]),c[7])(c[37],c[28]),c[33-Math.pow(1,1)-25])(c[57],c[61]),((0,c[81])(c[28],c[91]),c[3])(c[35],(0,c[6])(),c[63]),c[3])(c[18],(0,c[24])(),c[28]),c[7],c[68],c[63])}}catch(d){return"enhanced_except_9ZsBiuT-_w8_"+a}return b.join("")};