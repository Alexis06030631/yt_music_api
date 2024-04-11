const gma = /^[\w.]*$/
const signatureTimestamp = 19822

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
	const url = orgaCompose(m.bD,m.pG,m.s)
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
	a={XX:!1,bD:"",pG:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.XX=!0;
a.bD=b.url;
a.pG=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
hP.MM(a,67);
hP.jd(a,1);
hP.JF(a,21);
hP.MM(a,57);
hP.JF(a,13);
hP.JF(a,18);
hP.MM(a,65);
hP.JF(a,19);
return a.join("")
}

var hP={MM:function(a){a.reverse()},
JF:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
jd:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(""),c=[-1118877208,-1592215538,-2030078675,b,498417937,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
/,]{(),[,]]([)])/,817342502,-1849173311,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
-1651834945,1840859976,function(d,e,f,h,l){return e(f,h,l)},
function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
-1682326447,-1644276127,-370131604,106926885,1226981842,1889082537,b,-1690233957,1765118768,568852941,1189649742,1935589585,function(d,e){e.push(d)},
null,b,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
1454780462,function(d,e,f){var h=d.length;f.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},e.split(""))},
273293128,-1419598843,null,function(d,e){if(0!=e.length){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
function(d,e,f,h,l,m){return e(h,l,m)},
-1419598843,1295419373,-450784329,-233089335,-169455058,199105244,1474567562,-1865278801,"/[/}[",function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
1935589585,-823835483,"catch",null,-812500688,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
function(d){d.reverse()},
251896656,1680565274,1666733957,-206165888,-91322116,-736115801,"4qf3NQ",-54705168,-823835483,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-596759674,"}]))[},",558344752,-573199945,-827881765,418529767,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
148170753];c[27]=c;c[35]=c;c[51]=c;try{try{-8!==c[14]&&((0,c[36])(c[42],c[3]),-8)||(0,c[32])((0,c[29])(),c[61],c[103%Math.pow(4,4)-100]),3<c[42]?(((0,c[71])(c[27],c[45]),c[30])(c[51]),c[5])(c[2],c[3]):((0,c[36])(c[11],c[20]),c[36])(c[23],c[20])===(0,c[36])(c[14],c[51]),c[31]!==new Date("1970-01-01T09:29:56.000+09:30")/1E3&&(-8>c[4]?(0,c[32])((0,c[47])(),c[61],c[28])<((0,c[12])((0,c[30])(c[28]),c[71],c[27],c[1]),c[32])((0,c[47])(),c[494%Math.pow(2,3)- -55],c[20])>>(0,c[5])(c[70],c[28]):((0,c[37])((0,c[12])((0,c[30])(c[new Date("1970-01-01T03:35:09.000+03:30")/
1E3%28-Math.pow(5,3)+152]),c[71],c[3],c[7]),c[36],(0,c[30])(c[28]),c[15],c[51]),c[13])(c[51],c[55])),c[56]>=-1+5%Math.pow(8,4)&&(0,c[37])((0,c[37])((0,c[5])(c[72],c[20]),c[9],(0,c[9])(c[40],c[28])!==(0,c[71])(c[3],c[33]),c[49],c[27]),c[9],(0,c[Math.pow(5,2)+2+10])((0,c[5])(c[68],c[20]),c[26],(0,c[31])(c[27],c[39]),c[60],c[41]),c[34],c[25]),-1!=c[35]&&(7==c[49]?(0,c[2])((0,c[27])((0,c[20])(c[25]),c[68],(0,c[22])((0,c[54])(),c[51],c[10]),c[new Date("1970-01-01T07:46:03.000+07:45")/1E3],c[17]),c[-176*
Math.pow(5,3)- -22068],c[55],c[18]):(0,c[2])(((0,c[2])((0,c[21])(c[46740-Math.pow(1,5)+-46722],c[46]),c[27],c[50],c[18]),(0,c[43])(c[50],c[48])),c[38],c[40],c[7])),6!=c[49]&&(10<c[73]&&((0,c[67])((0,c[27])(c[65],c[51]),c[7],(0,c[29])(c[19]),c[43],c[34]),"),/")||(0,c[36])((0,c[3])(c[58],c[27]),c[7],(0,c[49*Math.pow(3,5)+-11837])(c[19],c[51]),c[37],c[26]))}catch(d){(0,c[36])(((0,c[31])((0,c[28])(),c[60],c[-3196-Math.pow(4,1)+3219]),c[31])((0,c[46])(),c[60],c[19]),c[31],(0,c[31])((0,c[28])(),c[60],c[310%
Math.pow(1,1)+19]),(0,c[28])(),c[49],c[19]),((0,c[7])(c[6],c[50]),c[53])(c[1])}finally{(-1>c[59]||(((0,c[31])((0,c[28])(),c[49],c[27]),(0,c[31])((0,c[28])(),c[49],c[new Date("1970-01-01T03:45:50.000+03:45")/1E3-Math.pow(7,2)%277]),c[31])((0,c[28])(),c[49],c[1]),0))&&(0,c[11])(((0,c[3])(c[57],c[-793- -164*Math.pow(5,1)]),(0,c[Math.pow(6,4)-94-1132])(c[34],c[16])),c[33],c[30])}try{-5>=c[36]&&(((0,c[12])(c[-8081+165*Math.pow(7,2)],c[0]),c[64])(c[43]),"null")||(0,c[65])((0,c[57])(c[56],c[73]),c[32],c[6],
c[39])}catch(d){(0,c[57])(c[27],c[7])}try{-1!==c[44]&&(1!=c[56]?(0,c[11])((0,c[182+Math.pow(6,2)+-164])(),c[29],c[7]):(0,c[11])((0,c[26])(),c[40],c[Math.pow(6,4)%337-230])),c[59]>Math.pow(3,1)- -20300+-20309&&((0,c[9])(c[6]),c[64])(c[67]),-5<c[71]&&(0,c[61])(c[46],c[30])>=(((0,c[10])(c[55],c[1]),c[37+348%Math.pow(6,2)])(c[22],c[14])>(0,c[61])(c[15],c[73]))}catch(d){(0,c[57])(c[3],c[55]),(0,c[new Date("1969-12-31T15:00:33.000-09:00")/1E3])(c[7]),(0,c[11])((0,c[54])(),c[29],c[73])}finally{-9>c[24]?
(0,c[33])(c[6])*(((0,c[new Date("1970-01-01T04:30:07.000+04:30")/1E3])(c[66],c[1]),c[12])(c[53],c[0]),c[62])((0,c[19])(),c[33],c[18]):(0,c[57])(((0,c[62])((0,c[65])(),c[44],c[66]),c[62])((0,c[65])(),c[33],c[18]),c[7],(0,c[62])((0,c[65])(),c[33],c[0]),c[18],c[25])}}catch(d){return"enhanced_except_7poBkeX-_w8_"+a}return b.join("")};