const gma = /^[\w.]*$/
const signatureTimestamp = 20048

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
		url = orgaCompose(m.SE,m.rI,m.s)
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
	a={VZ:!1,SE:"",rI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.VZ=!0;
a.SE=b.url;
a.rI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
VL.nu(a,17);
VL.nu(a,38);
VL.DJ(a,2);
VL.nu(a,8);
VL.cL(a,44);
return a.join("")
}

var VL={cL:function(a){a.reverse()},
DJ:function(a,b){a.splice(0,b)},
nu:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
1864739143,-953849394,2104449194,"[\\{,",-1050004432,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
431036389,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
"xjUn",-82053459,-97399767,function(d,e){e.length!=0&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
1131088092,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
b,977636883,function(d){d.reverse()},
221657337,-810092351,1843217140,-1681008995,1016013322,1040811683,578931453,-1404219974,-2021504153,1726538809,796799034,"v_pVtlx",1689046214,657482386,function(d,e,f,h,l,m){return e(h,l,m)},
null,1221405436,1757803289,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-1934240143,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
function(d,e){e.splice(e.length,0,d)},
1253908462,1950856087,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
'"";)',-2112306303,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1571338215,344934619,1683276778,444168079,-1057569771,-1683291345,-561484592,-1681008995,371860133,function(d,e,f){var h=d.length;e.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},f.split(""))},
-280455978,b,-46002453,-808193453,b,-446353407,723038719,1801100188,-1619203315,null,-1688824462,1855040648,1807348361,469568315,1757803289,-68532200,1542663203,function(d,e,f,h,l){return e(f,h,l)},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
null,function(d,e,f){var h=d.length;e.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},f.split(""))},
496713642,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
578931453,1785807855,/([,,)}]{);()\(/];c[33]=c;c[65]=c;c[75]=c;try{try{c[1]!=-8&&(c[35]>5?((0,c[32])((0,c[0])(c[62],c[65]),c[39],((0,c[new Date("1970-01-01T11:30:12.000+11:30")/1E3])(c[47],c[57]),c[-216*Math.pow(4,new Date("1969-12-31T14:00:05.000-10:00")/1E3)- -221226])(c[53],c[65]),c[34],c[18]),c[57])((0,c[37])(c[51],c[0]),c[21],(0,c[67])(c[1],c[18]),c[66],c[50]):((0,c[21])((((0,c[2])((0,c[22])(),c[5],c[30]),c[59])(c[33],c[23]),(0,c[68])(c[50],c[23])),c[47],c[13]),(0,c[68])(c[46],c[8]),c[47])(c[13])>=
(0,c[24])((0,c[44])(),c[8],c[30])),c[51]!=-6&&(((((0,c[42])(c[74],c[23]),c[47])(c[63]),c[56])(c[74],c[4]),c[10])(c[70],c[19])&(0,c[50])(c[9],c[13]))%(0,c[2])((0,c[4])(),c[18],c[22]),(c[44]===new Date("1969-12-31T17:00:09.000-07:00")/1E3||((0,c[37])(c[29],c[46]),void 0))&&(0,c[46])((0,c[78])(),c[62],c[40]),c[new Date("1970-01-01T03:45:43.000+03:45")/1E3]>5&&(c[69]<=-2||((0,c[49])((0,c[81])(c[30],c[7]),c[18],c[66],c[9]),0))&&((0,c[26])(c[20],c[55]),c[79])(c[33],c[55]),c[43]>0&&(c[74]===2&&((0,c[47])((0,c[9])(c[59],
c[new Date("1969-12-31T15:22:04.000-08:45")/1E3%216+-153]),c[44],(0,c[32])(),c[60],c[38]),5)||(0,c[47])((0,c[7])(c[23],c[57]),c[0],c[27],c[63]))}catch(d){(((0,c[47])((0,c[44])((0,c[32])(),c[60],c[64]),c[26],c[75],c[23]),c[66])((0,c[76])(),c[23],c[68]),c[7])(c[55],c[15]),(0,c[44])((0,c[32])(),c[60],c[38])}try{c[1]!==-8&&(0,c[47])((0,c[7])(c[45],c[40]),c[50],c[25],c[79])>>>((0,c[31])(c[79],c[9359-new Date("1970-01-01T10:34:47.000+08:00")/1E3]),c[74])(c[75],c[50])<<(0,c[59])((0,c[33])(c[35]),c[8],c[25],
c[67]),c[33]!=9&&(c[3]==-6?(0,c[0])((0,c[10])(),c[40],c[2]):(0,c[26])(c[4],c[62]))}catch(d){(0,c[26])(c[48],c[62]),(0,c[61])((0,c[41])(),c[40],c[new Date("1969-12-31T23:00:02.000-01:00")/1E3])}finally{c[3]<=-5&&((((0,c[26])(c[21],c[40]),c[64])((0,c[26])(c[31],c[62]),c[new Date("1970-01-01T03:45:38.000+03:45")/1E3],c[80]),c[24])(c[0],c[70]),c[8])((0,c[51])(c[27],c[63]),c[56],c[13],c[0])}try{c[12]>=-5&&(0,c[7])(c[40]),c[74]!==8&&((((0,c[62])((0,c[24])((0,c[56])(c[70],c[40]),c[3],c[26],c[40]),c[24],
(0,c[81])(c[0]),c[3],c[44],c[40]),(((0,c[69])(c[2],c[0]),c[69])(c[19],c[0]),c[21])((0,c[53])(),c[-169+new Date("1970-01-01T07:17:49.000+07:15")/1E3%243],c[15]),c[67])(c[0],c[20]),c[67])(c[40],c[49]),1)||(0,c[24])((0,c[60])(c[14],c[0]),c[60],c[29],c[0])>>>(0,c[new Date("1970-01-01T10:31:06.000+10:30")/1E3])((((0,c[67])(c[40],c[76]),(0,c[67])(c[37],c[46]),c[60])(c[63],c[40]),c[60])(c[68],c[37]),c[75],(0,c[24])((0,c[60])(c[42],c[37]),c[67],c[40],c[new Date("1970-01-01T01:30:31.000+01:30")/1E3]),(0,c[23])(),
c[37],c[15])}catch(d){((0,c[75])((0,c[23])(),c[37],c[new Date("1970-01-01T03:30:41.000+03:30")/1E3]),c[60])(c[71],c[40])}}catch(d){return"enhanced_except_0JwBr-P-_w8_"+a}return b.join("")};