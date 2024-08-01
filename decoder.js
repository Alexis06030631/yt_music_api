const gma = /^[\w.]*$/
const signatureTimestamp = 19934

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
	const url = orgaCompose(m.sE,m.QH,m.s)
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
	a={cZ:!1,sE:"",QH:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.cZ=!0;
a.sE=b.url;
a.QH=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
cL.un(a,2);
cL.jl(a,22);
cL.Ju(a,61);
cL.un(a,1);
cL.jl(a,42);
cL.Ju(a,27);
cL.jl(a,33);
return a.join("")
}

var cL={jl:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
un:function(a,b){a.splice(0,b)},
Ju:function(a){a.reverse()}};

function fastDownload(a){var b=String.prototype.split.call(a,("","")),c=[null,751517552,b,-1948453924,1446521307,function(d,e,f,h,l,m){return e(h,l,m)},
-983129749,758757471,676113508,89834046,function(d,e,f,h,l,m,n,p){return d(m,n,p)},
function(d,e){e.splice(e.length,0,d)},
function(d){d.reverse()},
159461875,null,"b0UoSqI",-96967647,1997706769,-1220991220,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
function(d,e,f,h,l){return e(f,h,l)},
function(d,e,f){var h=f.length;e.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},d.split(""))},
"forEach",1508854408,function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
-950917212,-1443480581,function(d,e){e.push(d)},
1456674309,1731505963,-789230033,452148864,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
112271652,1301041401,755322889,1956703702,"forEach",282624564,1170327566,452148864,b,-1345381752,556282425,function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-2079232220,-1531655968,-248720599,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
null,-624168412,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
159461875,-764480147,",52];c[50]=c;",282624564,1723322882,1877349714,-1507210088,356865361,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
932007700,"HTvr2",685600370,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
-275700682,77389846,-738482184,-1971818253,b,function(d,e,f,h,l,m,n,p,q){return f(n,p,q)},
68883214,1936019375,function(d,e,f,h,l,m,n){return d(l,m,n)},
-537806910];c[0]=c;c[14]=c;c[50]=c;try{try{c[18]!==-10&&(c[7]!=6&&((((0,c[24])(c[14],c[6]),c[19])(c[26],c[41]),c[32])(c[14],c[43]),1)||((0,c[26])((0,c[72])(c[47],c[64]),c[27],c[69],c[8],(0,c[51])()),c[21+Math.pow(1,2)+8])(c[56],c[457-443%Math.pow(7,5)]))}catch(d){(0,c[27])(c[69],c[8],(0,c[71])())}finally{c[48]<-8&&(0,c[26])((0,c[38])(c[6],c[3]),c[new Date("1970-01-01T07:30:12.000+07:30")/1E3],c[38],c[Math.pow(2,3)-40144+40197])}try{c[27]!=-3?(0,c[8])((0,c[9])(c[3],c[59],(0,c[new Date("1969-12-31T12:45:49.000-11:15")/
1E3])()),c[32],c[48],c[67]):(0,c[8])((0,c[7])(c[27],c[29]),c[9],c[25],c[29],(0,c[49])()),(c[30]!==-2||(((((((0,c[9])(c[3],c[59],(0,c[37])()),c[15])(c[59]),c[54])(c[29],c[64]),c[7])(c[Math.pow(7,3)*194-66506],c[2]),c[54])(c[2],c[17]),c[9])(c[10],c[29],(0,c[53])()),void 0))&&(0,c[70])((0,c[8])((0,c[15])(c[29]),c[40],c[67]),c[26%Math.pow(8,3)+-14],((0,c[32])(c[66],c[2]),(0,c[12])(c[65],c[45]),c[20])(c[59],c[0]),c[2],c[39]),c[23]<=2&&((0,c[60])((0,c[63])(c[9],(0,c[9])(c[3],c[59],(0,c[Math.pow(6,5)- -760-
8487])()),(0,c[8])((0,c[40])(c[38]),c[9],c[10],c[67],(0,c[49])()),(0,c[7])(c[34],c[29]),c[25],c[29],(0,c[53])()),(0,c[32])(c[21],c[65]),c[40],(((((0,c[54])(c[67],c[11]),(0,c[9])(c[51],c[29],(0,c[33])()),c[new Date("1969-12-31T15:15:54.000-08:45")/1E3])(c[65],c[41]),c[12])(c[29],c[50]),((0,c[9])(c[51],c[29],(0,c[49])()),c[9])(c[3],c[new Date("1969-12-31T13:31:07.000-10:30")/1E3],(0,c[33])()),c[15])(c[59]),c[54])(c[29],c[47]),(0,c[8])((0,c[54])(c[29],c[0]),c[54],c[67],c[23]),(0,c[9])(c[3],c[67],(0,c[33])()),
c[29]),1)||(0,c[8])((0,c[75])(c[16],(((0,c[9])(c[51],c[29],(0,c[37])()),c[7])(c[22],c[65]),c[37])((0,c[51])(c[Math.pow(4,1)*209+-779],c[26]),c[11700+Math.pow(1,4)-11694],(0,c[new Date("1970-01-01T11:01:00.000+11:00")/1E3])(c[60],c[46]),c[73]),((((0,c[52])((0,c[52])((0,c[56])(c[46],c[39]),c[51],c[24],c[5]),c[35],c[59]),c[2])(c[75],c[14]),(0,c[50])(c[31],c[55]),c[4])(c[16]),c[25])(c[43],c[9]),(0,c[39])((0,c[new Date("1969-12-31T17:30:39.000-06:30")/1E3])((0,c[40])(c[69],c[65]),c[17-26%Math.pow(6,1)],
c[42],c[45]),c[6],c[new Date("1970-01-01T01:30:57.000+01:30")/1E3]),(0,c[38])(c[37],c[57],(0,c[9])()),c[19],c[45]),c[15],c[55],c[18])}catch(d){(0,c[39])((0,c[Math.pow(new Date("1969-12-31T14:15:02.000-09:45")/1E3,3)+0+30])(c[73],c[57],(0,c[22])()),c[70],c[57],c[28]),(0,c[70])(c[Math.pow(2,2)+new Date("1970-01-01T04:16:34.000+04:15")/1E3*-61- -5789],c[29])}finally{c[47]>Math.pow(6,new Date("1969-12-31T19:15:03.000-04:45")/1E3)%379-217&&(c[10]<2||((0,c[54])((0,c[35])(c[59],c[72]),c[38],(0,c[38])(c[44],
c[57],(0,c[71])()),c[13],c[57],(0,c[9])()),null))&&(0,c[39])((0,c[39])((0,c[new Date("1969-12-31T13:45:40.000-10:15")/1E3])(c[66],c[57]),c[70],c[new Date("1969-12-31T21:31:05.000-02:30")/1E3],c[23]),c[32],c[65]),c[21]>=-10&&(0,c[61])(c[35],(0,c[40])(c[56],c[8]),(0,c[76])(((0,c[57])(c[8],c[-192*Math.pow(2,1)+456]),c[54])(c[30]),c[24],(0,c[17])((0,c[29])(c[11],c[15]),c[36],c[34],c[43]),c[73]),(0,c[3])(c[33],c[43]),c[33],c[8])}}catch(d){return"enhanced_except_3psBoeT-_w8_"+a}return Array.prototype.join.call(b,
("",""))};