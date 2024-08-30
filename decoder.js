const gma = /^[\w.]*$/
const signatureTimestamp = 19963

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
	const url = orgaCompose(m.NE,m.fI,m.s)
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
	a={yZ:!1,NE:"",fI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.yZ=!0;
a.NE=b.url;
a.fI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
TK.dQ(a,3);
TK.QF(a,41);
TK.l8(a,43);
TK.dQ(a,2);
TK.QF(a,27);
TK.dQ(a,2);
return a.join("")
}

var TK={dQ:function(a,b){a.splice(0,b)},
l8:function(a){a.reverse()},
QF:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[-1102837587,-573067597,1110981147,-655584388,-1616873399,function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
1870752260,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
563950975,306736030,-1729206217,-1543709795,789581226,-1062352325,"{;,(\\(,",null,-1762504363,-548065149,1909583995,1462768453,function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
1633364695,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-270627194,1742564315,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
function(d,e,f,h,l){return e(f,h,l)},
null,-1634380534,454657460,/[/,-6,/]/,1488775103,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
1641057382,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-653698746,-561264806,1683707356,-1382638905,917252433,-117974698,-589404179,553525606,-1909676406,-1245752834,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
803073919,"splice",761202991,-1345794017,function(d,e){e.push(d)},
-2127864485,'[);["',function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-1907506253,229419489,-974558301,-1021300641,971850131,function(d,e,f){var h=e.length;f.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},d.split(""))},
-759321161,-868450386,917252433,b,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
604752927,function(d,e,f,h,l,m){return e(h,l,m)},
null,b,893171661,937585257,1368137308,b,1470116709,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-1791112526,1377222295,function(d){d.reverse()},
-685220391,384479512,-11588816,-792460978];c[15]=c;c[27]=c;c[69]=c;try{try{c[17]!=-6&&(c[2]!==4&&((((0,c[5])(c[15],c[56]),c[54])(c[64]),c[5])(c[74],c[16]),1)||((0,c[26])((0,c[5])(c[20832+Math.pow(4,1)-20766],c[78]),c[24+Math.pow(1,3)%131],c[21],c[70]),c[-13224-Math.pow(1,4)- -13257])(c[40],c[new Date("1969-12-31T20:46:14.000-03:15")/1E3])),(c[11]!==-9||((0,c[26])((0,c[26])((0,c[26])((0,c[66])(c[70],c[55]),c[60],c[48],(0,c[34])(),c[Math.pow(6,4)-53-1179]),c[32],c[3],c[74]),c[79],c[64]),0))&&((((0,c[20])(c[69],
c[71]),c[5])(c[74],c[47]),c[5])(c[15],c[33]),c[5])(c[69],c[24]),c[71]>=9&&(c[43]<=0?(0,c[68])(((0,c[26])((0,c[60])(c[48],(0,c[35])(),c[74]),c[54],c[69]),c[32])(c[50],c[64]),c[60],((0,c[60])(c[48],(0,c[34])(),c[70]),c[25])(c[83],c[15]),c[48],(0,c[35])(),c[64]):(0,c[46])(((0,c[20])(c[74],c[62]),(0,c[25])(c[81],c[27]),c[16])(c[19],c[42]),c[25],(0,c[23])(c[Math.pow(8,4)%383+-235],c[Math.pow(new Date("1970-01-01T01:30:01.000+01:30")/1E3,2)*112+-98]),c[11],(0,c[36])(c[21]),c[21])),c[28]>10&&(((((0,c[61])(c[56],
c[53]),c[8])(c[Math.pow(7,3)-14570- -14228],c[26]),(0,c[66])(c[9],c[26]),c[40])((0,c[76])(c[36],c[33]),c[76],(0,c[38])(c[46],c[237%Math.pow(2,2)+48]),c[406%Math.pow(5,1)- -70],c[13]),(0,c[81])(c[79],c[36]),c[38])(c[36],c[58]),1)||((0,c[82])((0,c[61])(c[36],c[84]),c[32],c[20],(0,c[6])(),c[42]),c[40])((0,c[26])(c[71])*(0,c[3])(c[75],c[42]),c[3],(0,c[32])(c[20],(0,c[-2914+Math.pow(2,5)- -2887])(),c[42]),c[7],c[83])>>>(0,c[32])(c[20],(0,c[78])(),c[42])>>(0,c[32])(c[20],(0,c[78])(),c[42]),c[183+Math.pow(4,
5)-1168]>new Date("1970-01-01T11:29:50.000+11:30")/1E3?(0,c[82])((0,c[81])(c[47],c[36]),c[32],c[20],(0,c[78])(),c[36]):(0,c[82])((0,c[51])(c[83]),c[32],c[20],(0,c[48])(),c[36]),c[12]<5&&(c[Math.pow(7,1)%302+20]>-5||((0,c[61])(c[46],c[31]),0))&&(0,c[51])(c[36])}catch(d){(0,c[51])(c[46]),(0,c[3])(c[17],c[46]),(0,c[40])((0,c[81])(c[66],c[42]),c[3],(0,c[3])(c[60],c[42]),c[21],c[-444+480%Math.pow(5,4)])===(0,c[3])(c[14],c[46])}try{c[52]<4&&(c[53]<2||((0,c[61])(c[2928-Math.pow(2,1)-2880],c[62]),0))&&(0,c[3])(c[2],
c[36])}catch(d){(0,c[3])(c[69],c[1050+-251*Math.pow(4,1)])}finally{c[44]!=-10&&(c[72]!=1?(0,c[26])(c[71]):(0,c[52])(c[-232+296%Math.pow(7,5)],(0,c[79])(),c[38]))}try{c[22]>7&&(c[30]<=1?((((0,c[3])(c[17],c[48]),c[46])(c[13],c[19]),(0,c[40])(c[new Date("1969-12-31T15:31:15.000-08:30")/1E3],c[16]),c[78])(c[45],c[19]),c[37])(c[77]):((0,c[17])(c[9],c[67]),(0,c[24])(c[60],c[67]),c[18])((0,c[18])((0,c[53])(c[41],(0,c[27])(),c[67]),c[53],c[41],(0,c[14])(),c[57]),c[24],c[66],c[63])),(0,c[53])(c[41],(0,c[Math.pow(3,
3)+-15840- -15840])(),c[5]),(0,c[-92-Math.pow(1,1)*-116])(c[37],c[63]),(0,c[17])(c[51],c[63])}catch(d){c[20]!==-6&&((((0,c[18])(((0,c[82])(c[19],c[31]),c[-25750-Math.pow(7,1)+25769])(c[62],c[new Date("1969-12-31T12:45:30.000-11:15")/1E3]),c[12],c[63],c[78]),c[18])(((0,c[61])((0,c[17])(c[52],c[63]),c[17],(0,c[Math.pow(3,1)+33+36])(c[62]),c[74],c[17]),c[33+Math.pow(3,3)%480])(c[19],c[21]),c[25],c[65],c[9]),c[93821-150*Math.pow(5,4)])(c[64],c[10]),c[1])(c[64],c[6])}}catch(d){return"enhanced_except_-5sBhOT-_w8_"+
a}return b.join("")};