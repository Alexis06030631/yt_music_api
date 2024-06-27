const gma = /^[\w.]*$/
const signatureTimestamp = 19899

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
	const url = orgaCompose(m.aE,m.rH,m.s)
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
	a={SY:!1,aE:"",rH:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.SY=!0;
a.aE=b.url;
a.rH=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
xO.d2(a,28);
xO.d2(a,58);
xO.d2(a,65);
xO.ER(a,33);
xO.d2(a,36);
xO.tI(a,3);
xO.ER(a,73);
xO.tI(a,1);
return a.join("")
}

var xO={d2:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
ER:function(a){a.reverse()},
tI:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(""),c=[271893936,-1218996897,-340457370,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
1477310978,2083000260,-1484855591,640224551,"for",function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
null,1749097551,1790529741,-1373880,function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
null,-1771077248,function(d,e,f,h,l,m){return e(h,l,m)},
-1218996897,835526737,-1105211937,-1823135788,1446119526,1496803936,-865667624,-856399148,b,-2074022609,function(d){d.reverse()},
800465035,687427724,b,-778601203,-992567434,1496803936,-1777878829,-644797756,function(d,e,f){var h=d.length;e.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},f.split(""))},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-509643056,"},{}",492844010,-79138617,2036074231,775240647,1460154719,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
-1206246030,-551298036,2045210528,555032480,-631434017,b,-1555451458,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
835875255,1305031923,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1098196603,function(d,e,f,h,l){return e(f,h,l)},
-148795203,1475718830,function(d,e){e.length!=0&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
527609855,null,-1543914003,-148839330,-1205078614,-19165040,1752591950,-427662769,-1126159522,"En9nYeL",function(d,e){e.splice(e.length,0,d)}];
c[11]=c;c[16]=c;c[66]=c;try{try{(c[Math.pow(5,2)%254- -37]<=3||((0,c[29])(c[32]),0))&&(0,c[64])(c[44],c[66]),(c[20]===-9||(((0,c[61])((0,c[15])(c[46],c[27]),c[3],c[1],c[66]),((0,c[29])((0,c[14])(c[59],c[22]),c[74],(0,c[4])(c[11],c[21]),c[0],c[65]),c[40])(c[31],c[27]),c[54])(((((0,c[72])(c[30],c[20]),c[57])(c[51],c[20]),c[32])(c[25]),c[2])(c[59],c[50]),c[69],c[17])/((0,c[55])(c[73],c[72]),(0,c[55])(c[61],c[72]),c[new Date("1970-01-01T03:30:28.000+03:30")/1E3])(c[26],c[56]),""))&&((((((0,c[new Date("1969-12-31T22:00:25.000-02:00")/
1E3])((0,c[2])((0,c[20])(),c[67],c[38]),c[49],c[30],c[37]),c[2])((0,c[23])(),c[72],c[48]),c[58])(((((0,c[11])(c[51],c[31]),c[3])(c[30]),(0,c[2])((0,c[19])(),c[72],c[48]),c[11])(c[72],c[74]),c[55])(c[44],c[72]),c[11],(0,c[2])((0,c[19])(),c[67],c[new Date("1970-01-01T08:15:38.000+08:15")/1E3]),c[63+Math.pow(2,2)%(new Date("1969-12-31T13:20:40.000-10:45")/1E3)],c[45]),c[11])(c[67],c[9]),c[2])((0,c[20])(),c[17],c[48]),c[new Date("1970-01-01T07:15:43.000+07:15")/1E3])(c[6],c[Math.pow(7,2)+13650-13669])<
(0,c[3])(c[67])}catch(d){(0,c[25])((0,c[2])((0,c[20])(),c[17],c[48]),c[2],(0,c[19])(),c[17],c[38])}finally{c[65]!==5&&((0,c[3561-Math.pow(4,2)*221])(((0,c[49])(c[51],c[47]),(0,c[30])(c[10],c[33])),c[74],c[8],c[49]),c[62])(c[26],c[10]),c[23]<=-10&&((0,c[68])(c[15],c[72]),c[Math.pow(5,1)+84-67])(c[15])}try{c[2]!=new Date("1970-01-01T11:44:50.000+11:45")/1E3&&(c[19]>=7?(((0,c[47])(c[457%Math.pow(8,5)-414],c[70]),c[47])(c[34],c[49]),c[47])(c[Math.pow(7,3)*124-42497],c[49]):((0,c[21])((0,c[new Date("1970-01-01T03:30:38.000+03:30")/
1E3])(),c[36],c[57]),c[44])((0,c[21])((0,c[38])(),c[36],c[57]),c[68],c[15],c[37])),c[11]!==5?((0,c[74])(c[61],c[36]),c[62])(c[65],c[49]):(0,c[Math.pow(2,3)+-28842+28835])((0,c[25])(c[27],c[12]),c[54],(0,c[72])(),c[69],c[24]),c[18]<=-9&&(c[61]!=10||((0,c[Math.pow(1,1)- -39592+-39539])((0,c[75])(),c[48],c[24]),void 0))&&(0,c[45])(c[43])}catch(d){((0,c[31])(c[33],c[27]),c[228*Math.pow(4,5)+-233447])(c[48],c[3]),(0,c[45])(c[6])}finally{c[16]!==6&&(0,c[1])((0,c[34])((0,c[31])(c[46],c[27]),c[54],(0,c[25])(c[-50668-
Math.pow(3,4)+50755],c[42]),(0,c[8])(),c[5],c[26]),c[16],c[51],c[5]),c[6]!=new Date("1970-01-01T11:45:09.000+11:45")/(Math.pow(1,5)-26- -1025)&&(c[23]>9||((0,c[13])((0,c[13])((0,c[66])((0,c[38])(),c[9-Math.pow(2,2)%369],c[36]),c[66],(0,c[8])(),c[60],c[36]),c[37],c[5],c[48]),void 0))&&(((0,c[43])(c[new Date("1970-01-01T03:45:23.000+03:45")/1E3],c[18]),c[66])((0,c[11])(),c[60],c[36]),c[43])(c[17],c[39]),c[22]>3&&((0,c[43])(c[42],c[5])||new Date("1969-12-31T13:15:09.000-10:45")/1E3)||(0,c[75])(c[55],
c[68]),(c[34]>=-8||((0,c[13])((0,c[-23153+Math.pow(1,5)- -23165])((0,c[75])(c[55],c[21]),c[43],c[393-353%Math.pow(6,5)],c[55]),c[37],c[0],c[64]),0))&&(0,c[41])((0,c[52])(c[new Date("1969-12-31T16:30:55.000-07:30")/1E3]),c[61],(0,c[38])(c[51],c[50]),(0,c[188%Math.pow(6,4)-185])(),c[55],c[31]),c[27]!=new Date("1969-12-31T21:29:51.000-02:30")/1E3&&(c[68]===-3||((0,c[new Date("1969-12-31T21:00:32.000-03:00")/1E3])(c[71],c[54]),NaN))&&(0,c[10])(c[56],c[23])}try{c[3]<=9&&(c[26]<0&&(((0,c[36])(c[73]),c[69])(c[48],
c[52]),1)||((0,c[21])(c[15],c[11]),c[39])(c[52]))}catch(d){(0,c[53])(c[8],c[15])}}catch(d){return"enhanced_except_u5sBxOT-_w8_"+a}return b.join("")};