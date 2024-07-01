const gma = /^[\w.]*$/
const signatureTimestamp = 19901

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
	const url = orgaCompose(m.gE,m.wH,m.s)
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
	a={WY:!1,gE:"",wH:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.WY=!0;
a.gE=b.url;
a.wH=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
FO.Hv(a,26);
FO.ha(a,13);
FO.YJ(a,2);
FO.ha(a,35);
return a.join("")
}

var FO={Hv:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
YJ:function(a,b){a.splice(0,b)},
ha:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(""),c=[-542533395,-771117771,1016999168,-301465319,-1362827142,-1817610536,1786041697,null,function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
-18914977,288423506,-1989234714,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
1879943009,-1944756307,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-313144901,-234012944,-1115150575,1016999168,-1498412849,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
1052705603,function(d,e,f,h,l,m,n){return d(l,m,n)},
-777221238,-1042397785,function(d){d.reverse()},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
601555291,-1153377453,369583148,-2111133859,776568447,-628846445,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
1077758732,"[{\\\u22e4)",function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
-777221238,-1334704284,-1077443604,953488966,964855866,98280701,1974332640,1555432628,"LyTy",263889424,function(d,e,f,h,l){return e(f,h,l)},
-645379945,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
null,-846825498,166316351,null,-772581835,-1284890373,836425180,function(d,e,f){var h=e.length;d.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},f.split(""))},
b,816422094,915184703,-442572218,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
2103784330,b,function(d,e,f,h,l,m){return e(h,l,m)},
function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
-111280959,-1948271023,1737904475,-2015087146,function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
1499986567,-1878489595,function(d,e,f,h,l,m,n,p,q,r,t){return d(f,h,l,m,n,p,q,r,t)},
405076445,-128365212,1483665664,-1311348896,1797404629,73184536,b,-854770996,405700613,-1497753361,-78209994];c[7]=c;c[52]=c;c[55]=c;try{try{c[73]!=4&&(c[71]>-1?(0,c[68])(((0,c[27])(c[66]),(0,c[69])(c[76],c[66]),c[35])(c[2],c[7]),c[67],(0,c[69])(c[11],c[55]),c[8],(0,c[69])(c[5],c[84]),c[7],c[61])%((0,c[8])(c[52],c[58]),c[8])(c[52],c[new Date("1969-12-31T20:01:25.000-04:00")/1E3]):(0,c[77])(c[24],(0,c[59])(c[60],(0,c[12])(),c[47]),c[38],((0,c[74])(c[7],c[81]),c[8])(c[new Date("1970-01-01T04:00:52.000+04:00")/
1E3],c[25]),(0,c[Math.pow(5,4)+17+-593])((0,c[38])(c[80],c[7]),c[3],c[73]),(0,c[Math.pow(4,1)-53- -98])(c[59],c[63]),c[37],c[35])!==(0,c[49])(c[30],c[53])),c[45]==new Date("1969-12-31T14:30:05.000-09:30")/1E3&&((0,c[3])(c[35]),1)||(0,c[49])(c[30],c[23]),c[32]<=-9&&(0,c[24])((((0,c[24])((0,c[13])(c[87],c[59]),c[2],c[73]),c[new Date("1970-01-01T01:30:24.000+01:30")/1E3])((0,c[3])(c[27]),c[75],c[68],c[61]),c[8+Math.pow(1,1)+49])(c[64],c[87]),c[58],c[82],c[44]),(c[45]===1||(((0,c[6])((0,c[-237562+Math.pow(8,
4)*58])((0,c[6])((0,c[47])(c[48],c[88]),c[47],c[48],c[19]),c[75],c[25],c[46]),c[28],c[46]),c[60])(c[71],c[3]),void 0))&&(0,c[66])(c[31],(0,c[6])(c[47],c[55]),(0,c[62])(c[30]),((0,c[21])(c[50],c[30]),c[21])(c[80],c[35]),c[81],(0,c[26])(),c[43])}catch(d){(0,c[21])(c[8],c[35]),(0,c[16])(c[83],c[56])*(0,c[82])(c[38],c[61]),(0,c[21])(c[48],c[81])}try{c[87]<2&&(0,c[41])((0,c[41])(((0,c[16])(c[55],c[33]),c[16])(c[55],c[87]),c[82],c[55],c[49]),c[52],c[44],c[83]),c[46]!==6&&(c[66]!==1?((0,c[78])((0,c[50])((0,c[50])((0,c[61])(c[79],
c[44]),c[25],c[3],c[17]),c[30],c[86],c[44])|(0,c[25])(c[3],c[20]),((0,c[25])(c[3],c[34]),(0,c[32])((0,c[50])((0,c[30])(c[36],c[39]),c[25],c[64],c[33]),c[25],(0,c[15])(c[27],c[39]),c[47],c[12]),c[71])(c[1]),c[50],(((0,c[30])(c[83],c[1]),c[61])(c[45],c[1]),c[2])(c[39],c[10]),c[30],c[66],c[39]),c[61])(c[28],c[44]):((((((0,c[72])(c[39]),c[32])((0,c[40])(c[39],(0,c[87])(),c[52]),c[30],(0,c[40])(c[1],(0,c[87])(),c[52]),c[new Date("1970-01-01T10:30:00.000+10:30")/1E3],c[1])>=(0,c[61])(c[82],c[1]),((((0,c[15])(c[73],
c[64]),c[30])(c[22],c[39]),c[25])(c[44],c[29]),c[40])(c[1],(0,c[35])(),c[52]),c[50])((0,c[71])(c[64]),c[61],c[24],c[39]),c[40])(c[44],(0,c[77])(),c[52]),c[2])(c[47],c[11]),(0,c[30])(c[4],c[64]))^(0,c[40])(c[44],(0,c[77])(),c[52])),c[42]==10&&((0,c[50])((0,c[2])(c[44],c[Math.pow(6,3)*7+-1444]),c[-182- -222*Math.pow(1,2)],c[44],(0,c[84])(),c[52]),3)||(0,c[50])((0,c[30])(c[6],c[1]),c[25],c[1],c[46])}catch(d){(0,c[30])(c[81],c[39]),(0,c[50])((0,c[40])(c[44],(0,c[77])(),c[52]),c[30],c[14],c[3])}}catch(d){return"enhanced_except_vZsBwuT-_w8_"+
a}return b.join("")};