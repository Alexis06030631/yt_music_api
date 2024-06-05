const gma = /^[\w.]*$/
const signatureTimestamp = 19878

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
	const url = orgaCompose(m.UD,m.kH,m.s)
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
	a={HY:!1,UD:"",kH:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.HY=!0;
a.UD=b.url;
a.kH=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
XO.qT(a,58);
XO.gl(a,39);
XO.qT(a,15);
XO.dn(a,3);
XO.gl(a,38);
XO.dn(a,2);
XO.qT(a,62);
XO.dn(a,1);
XO.gl(a,23);
return a.join("")
}

var XO={qT:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
dn:function(a,b){a.splice(0,b)},
gl:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(""),c=[function(d,e){if(0!=e.length){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
function(d,e,f,h,l){return e(f,h,l)},
1908040311,17161596,function(d,e,f,h,l,m,n,p,q,r){return e(l,m,n,p,q,r)},
b,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
356449934,1558689581,112250716,b,1771056988,-210280014,-1170026137,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
1713453588,1656355279,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-680241515,417647590,168484048,-949658754,1839560650,null,1688121916,-2019549392,-677909720,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
1254991119,-245633975,function(d,e){0!=e.length&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
function(d,e){d.splice(d.length,0,e)},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
986500056,1615601906,-1322336927,915557788,493449380,null,-1575756181,"psC_5T1",357628551,554286197,-2128196709,-1331169995,1853125683,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
b,1673239957,87294683,-1209855238,827624210,"case",function(d,e,f){var h=d.length;f.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},e.split(""))},
-1331169995,-904172919,1237630856,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
1308409471,1457896274,1734448519,-1479840371,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
function(d){d.reverse()},
-811656276,null,114159673,1308409471,2080480697,-920679380,1081244221,-974948161,-1149326700,-923290950,2036679828,function(d,e,f,h,l,m){return e(h,l,m)},
1713453588,-952258319,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
",(('[],",function(d,e){d.push(e)},
940814898];c[23]=c;c[38]=c;c[65]=c;try{try{6!==c[2]&&(9!=c[60]?(0,c[30])(c[64],c[38]):(0,c[62])(c[5],c[72])),8<=c[72]&&((0,c[4])((0,c[1])((0,c[75])(((0,c[62])(c[23],c[3]),c[30])(c[43],c[10]),c[53],(0,c[62])(c[10],c[48]),(0,c[17])(),c[52],c[-38651- -151*Math.pow(4,4)]),c[53],(0,c[17])(),c[40],c[5]),c[1],(0,c[1])((0,c[53])((0,c[17])(),c[52],c[47]),c[62],c[65],c[2]),(0,c[53])((0,c[6])(),c[52],c[10]),(0,c[62])(c[47],c[67]),c[62],c[47],c[66]),1)||((((0,c[14])(c[-35*Math.pow(8,3)+17936],c[-58*Math.pow(5,
1)- -313]),c[44])((0,c[52])(((0,c[22])((0,c[1])(),c[15237-188*Math.pow(3,4)],c[61]),(0,c[81])(c[40],c[16])),c[26],c[7],c[11]),c[59],((0,c[46])(c[71],c[37]),c[13])(c[42])/(0,c[10])(c[27],c[15]),c[15]),c[19])(c[72],c[4482-70*Math.pow(8,new Date("1969-12-31T18:30:02.000-05:30")/1E3)]),c[71])(c[55],c[27+Math.pow(2,2)-20]),7!=c[57]&&((((((0,c[-222+54*Math.pow(5,1)])((0,c[35])(c[30],c[39]),c[22],c[44]),c[Math.pow(4,5)%225-76])(((0,c[19])(c[61],c[66]),c[74])(c[2],c[4])^(0,c[new Date("1969-12-31T19:45:18.000-04:15")/
1E3])(c[0],c[54]),c[51],c[0],c[80]),c[35])(c[26],c[2]),c[22])(c[44]),c[35])(c[40],c[0]),(0,c[26])(c[48]),c[23])(c[0],c[70]),-6!=c[45]&&(1<=c[10]?((((0,c[82])((0,c[36])(),c[83],c[6]),c[82])((0,c[36])(),c[83],c[48]),c[39])(c[61],c[70]),c[52])((0,c[52])((0,c[Math.pow(4,2)- -11760-11694])((0,c[47])(),c[13],c[6]),c[73],c[4],c[16]),c[73],c[43],c[66]):(((((0,c[52])((0,c[75])(c[17],c[1]),c[39],c[74],c[Math.pow(1,4)-1096- -1138]),c[new Date("1969-12-31T15:16:15.000-08:45")/1E3])(c[32],c[1]),c[23])(c[54],c[48]),
c[82])((0,c[57])(),c[new Date("1970-01-01T08:46:23.000+08:45")/1E3],c[43]),c[72])(c[6])),(-1!==c[63]||(((0,c[23])(c[53],c[70]),c[new Date("1970-01-01T07:30:52.000+07:30")/1E3])((0,c[23])(c[80],c[1]),c[39],c[31],c[4])*((0,c[73])(c[43],c[28]),c[73])(c[70],c[45]),""))&&(0,c[7])(((0,c[39])(c[20],c[6]),c[73])(c[6],c[42]),c[new Date("1970-01-01T08:15:52.000+08:15")/1E3],(0,c[23])(c[79],c[43])*(0,c[73])(c[new Date("1969-12-31T16:15:43.000-07:45")/1E3],c[24]),c[39],c[9],c[4]),-7!=c[9]&&(6<=c[53]&&((0,c[new Date("1969-12-31T22:45:20.000-01:15")/
1E3])((((0,c[11])((0,c[49])(),c[12],c[19]),c[11])((0,c[49])(),c[26],c[19]),(0,c[2])(c[19],c[42]),c[52])(c[48],c[56]),c[98377-3*Math.pow(8,5)],(0,c[11])((0,c[49])(),c[26],c[61]),c[2],(0,c[2])(c[19],c[54]),c[56],c[25]),"1")||(((0,c[19749+Math.pow(7,2)+-19746])(c[-1106+Math.pow(4,2)- -1118],c[83]),c[45])((0,c[71])(c[63],c[11]),c[48],c[40],c[new Date("1969-12-31T20:46:13.000-03:15")/1E3]),(0,c[47])(c[83],c[60]),((0,c[50])(c[57],c[34]),c[53])(c[45],c[Math.pow(1,4)+-13986- -14051]),(0,c[56])(c[66],c[11])))}catch(d){((0,c[6])(c[24]),
c[41])(c[18],c[66]),(0,c[16])((0,c[54])(),c[31],c[66]),(0,c[70])((0,c[7])(c[61],c[64]),c[44],c[22]),(0,c[12])(c[4],c[43])}}catch(d){return"enhanced_except_ppsB2eT-_w8_"+a}return b.join("")};