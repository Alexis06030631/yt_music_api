const gma = /^[\w.]*$/
const signatureTimestamp = 19891

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
	const url = orgaCompose(m.dE,m.vH,m.s)
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
	a={QY:!1,dE:"",vH:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.QY=!0;
a.dE=b.url;
a.vH=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
LO.HI(a,2);
LO.kf(a,56);
LO.HI(a,3);
LO.Gl(a,10);
LO.HI(a,2);
LO.Gl(a,41);
LO.Gl(a,37);
return a.join("")
}

var LO={Gl:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
kf:function(a){a.reverse()},
HI:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(""),c=[null,775990598,function(d,e,f,h,l){return e(f,h,l)},
730013208,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
494103526,-2063096278,79346715,-249299433,-554122009,"case",-1396506150,function(d,e,f){var h=e.length;d.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},f.split(""))},
function(d,e,f,h,l,m,n,p,q){return f(n,p,q)},
673272690,-1410418784,1265222998,1282944890,2104418871,function(d,e,f,h,l,m,n,p,q,r,t){return d(f,h,l,m,n,p,q,r,t)},
396669172,1044584280,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
513557015,1866980277,function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
null,-2022201079,-1954734837,1011440152,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
-991174233,-342633103,-723827817,-365149742,1092311025,941498413,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
87125131,-1503311552,b,1469039612,function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
-337885662,-308778230,null,1838022413,-1528308417,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1281127463,1363135918,-103022415,1757855060,-1878320200,-1330597527,-1805008276,-1789505722,1964738955,-828201709,-2025925576,598017913,function(d,e,f,h,l,m){return e(h,l,m)},
/,;("()(\/))\\[(]/,-918712895,function(d){d.reverse()},
501152815,b,1011440152,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
1334677278,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-963629536,298861163,-789544620,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e,f,h,l,m,n){return d(l,m,n)},
b,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
-1403332399,"split",76942792,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-1907713492,-789544620,function(d,e){d.push(e)},
-1330597527,-801768568,640152877,-271146512,471716878,1709809067,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e}];
c[0]=c;c[26]=c;c[45]=c;try{try{c[29]>=7&&(c[89]==-10?(0,c[4])((0,c[2])(((0,c[37])(c[51],c[26]),c[12])(c[40],(0,c[Math.pow(2,1)+-28122- -28211])(),c[79]),c[25],c[45],c[49]),c[61],((0,c[2])((0,c[2])((0,c[new Date("1970-01-01T06:30:12.000+06:30")/1E3])(c[40],(0,c[70])(),c[79]),c[new Date("1970-01-01T07:15:30.000+07:15")/1E3],c[26],c[73]),c[25],c[Math.pow(2,3)*87+-696],c[9]),c[12])(c[40],(0,c[48])(),c[10]),c[37],(0,c[30])(c[40],c[46]),c[31],c[76]):(0,c[19])(c[75],((0,c[2])((0,c[42])(c[45],c[86]),c[12],
c[40],(0,c[91])(),c[79]),c[30])(c[-10816+Math.pow(7,3)- -10497],c[55])%(0,c[52])(c[29],c[77])*(0,c[71-216%Math.pow(4,3)])(c[67],c[80]),c[90],(0,c[7])(c[85],c[46]),(0,c[89])(c[31],c[20]),(0,c[25])(c[0],c[2]),c[73],c[83])),c[57]!==-8&&(c[79]<=-3||((0,c[34])(c[32],c[15]),0))&&(0,c[4])(c[68],(0,c[83])(),c[2])}catch(d){(0,c[4])(c[32],(0,c[83])(),c[71]),(0,c[4])(c[32],(0,c[83])(),c[71])}try{c[52]!==4&&(c[28]<-8?(0,c[86])(((0,c[22])(c[16],c[9]),c[29])(c[77],c[36]),c[29],c[52],c[58]):(0,c[1040437-Math.pow(8,
4)*254])((0,c[60])(c[58],c[89]),c[34],(0,c[62])(c[32],c[81]),c[58],c[481%Math.pow(1,2)- -48])),c[89]!=-6&&(c[91]>=-1&&((0,c[88])((0,c[86])((0,c[86])((0,c[56])(c[36]),c[31],c[23],c[4]),c[57],c[55],c[81]),c[5],(0,c[5])((0,c[57])(c[73],c[1]),c[62],c[19],c[59]),c[62],c[0],c[23]),1)||(((0,c[5])((0,c[5])((0,c[87])(c[23],(0,c[74])(),c[89]),c[18],c[55]),c[87],c[23],(0,c[51])(),c[20]),c[18])(c[55])&(0,c[Math.pow(7,1)-new Date("1969-12-31T21:01:42.000-03:00")/1E3%420- -157])(c[-3666- -150*Math.pow(5,2)],c[75]),
(0,c[35])(c[59]))),c[39]!=1&&(c[13]==-4&&((0,c[3])(((0,c[5])((0,c[87])(c[59],(0,c[51])(),c[21-111%Math.pow(5,1)]),c[57],c[73],c[30]),c[87])(c[33],(0,c[25])(),c[20]),c[30532+-89*Math.pow(7,3)],(0,c[69])(c[55],c[71]),c[18],c[55]),[])||(0,c[3])((0,c[5])((0,c[29])(c[75],c[66]),c[69],c[73],c[54]),c[87],(0,c[47])(c[45],c[73]),c[25],c[49])<=(0,c[47])(c[130%Math.pow(3,4)],c[50])),(c[73]<-1||((0,c[12])(c[new Date("1969-12-31T14:31:29.000-09:30")/1E3],c[23])&(0,c[77])(c[49],(0,c[41])(),c[79]),NaN))&&(0,c[87])((0,c[19+
Math.pow(5,4)%74])(c[30],c[23]),c[52],c[37],c[49]),c[30]<Math.pow(2,5)-160- -120&&(c[34]==8?(((((0,c[47])(c[23],c[7]),c[25])(c[49]),c[19])(c[161%Math.pow(4,4)-96],c[18]),c[28])((0,c[52])(c[5],c[63]),c[52],(0,c[77])(c[13],(0,c[15])(),c[10]),c[78],c[13]),(0,c[52])(c[81],c[23]),c[8])(c[49]):((((0,c[25])(c[23]),c[12])(c[69],c[13]),(0,c[52])(c[55],c[13]),(0,c[59])(c[45],c[-380+Math.pow(8,4)%456]),c[15])(c[45],c[53]),c[48])(c[50],c[19])/((0,c[43])(c[41],c[32]),(0,c[21])(c[-72+Math.pow(3,4)%235]))),c[76]==
-10?(0,c[72])((0,c[73])(c[45],(0,c[63])(),c[6]),(0,c[-12960-Math.pow(1,1)- -13009])(c[58],c[9]),c[48],(0,c[4])(c[45]),(0,c[43])(c[59],c[90]),(0,c[21])(c[41]),c[71],c[59]):((0,c[81])((0,c[83])((0,c[55])(c[59],c[35]),c[70],c[22],c[19]),c[Math.pow(1,1)+31652-31604],(0,c[21])(c[7],c[22]),c[45],c[89],c[72]),c[21])((0,c[45])(c[71],c[-6419+203*Math.pow(2,5)]),c[58],c[71],c[73])}catch(d){(0,c[78])(c[0],c[49]),(0,c[11])(c[75],(0,c[51%Math.pow(4,4)-27])(),c[13]),((((0,c[78])(c[25],c[89]),c[45])(c[49],c[1412+
-55*Math.pow(5,2)]),c[30])(c[9486+Math.pow(2,2)+-9447],c[39]),c[51])(c[91])}}catch(d){return"enhanced_except_s5sBzOT-_w8_"+a}return b.join("")};