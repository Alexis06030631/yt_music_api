const gma = /^[\w.]*$/
const signatureTimestamp = 19885

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
	const url = orgaCompose(m.WD,m.nH,m.s)
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
	a={LY:!1,WD:"",nH:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.LY=!0;
a.WD=b.url;
a.nH=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
SO.OP(a,63);
SO.IO(a,3);
SO.OP(a,65);
SO.IO(a,3);
return a.join("")
}

var SO={tE:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
IO:function(a,b){a.splice(0,b)},
OP:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(""),c=[function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
1594529943,function(d,e,f,h,l,m){return e(h,l,m)},
1493177903,1696127581,b,-855105117,-1842019799,-1814919270,-1333266034,function(d,e,f,h,l){return e(f,h,l)},
1555432788,1464940310,-549019400,-907073245,-282439903,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
2033555367,-1857845295,498042658,1292658468,-1488446462,242215408,367782436,1693866118,function(d,e,f){var h=e.length;d.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},f.split(""))},
null,b,-1136282900,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
2109267986,",\\;/\u00b9",2036148788,-1398195358,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
",\\;/\u00b9",1960652975,191949,-1488446462,-900941207,null,152575301,38707152,function(d,e){d.splice(d.length,0,e)},
-1196225301,2027618205,-1557444819,-1047452154,1218541745,-995177691,635945682,b,-1651956464,null,-2041436910,1338739868,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
478893630,"function",1139742449,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
-347161715,",(},,",-1579687852,555966390,536914218,1215282103,-701285573,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
1918332307,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
1709444144,function(d){d.reverse()},
function(d,e){if(d.length!=0){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}}];
c[26]=c;c[41]=c;c[54]=c;try{try{c[8]!==-3&&(0,c[10])((0,c[25])(c[27],(0,c[62])(),c[60]),c[71],c[50],c[54])}catch(d){(0,c[31])(c[3],c[36])}finally{c[62]!==-7&&(c[26]>=1?(0,c[41])((0,c[30])(c[36],c[62]),c[12],c[6]):((0,c[-134+190*Math.pow(1,4)])(c[6],(0,c[11])(),c[54-Math.pow(4,5)+984]),c[31])(c[73],c[6])),c[73]>=9&&((((0,c[25])(c[10],c[8]),(0,c[21])(c[62],c[22]),c[65])(c[61],c[9]),(0,c[new Date("1970-01-01T03:45:29.000+03:45")/1E3])(c[58],c[12]),c[50])(c[38],c[5]),[])||((0,c[65])(c[45],(0,c[20])(),
c[23]),c[50])((((0,c[40])(c[24],c[15]),c[36])(c[new Date("1969-12-31T17:45:35.000-06:15")/1E3],c[67]),c[65])(c[15],(0,c[56])(),c[23]),c[26],c[45],c[Math.pow(8,5)-230-32520]),(c[18]>=-8||((0,c[36])(c[47],c[67]),0))&&(0,c[39])(c[67],c[29]),c[2]!=9&&(0,c[34])(c[Math.pow(4,2)-26386+26422],c[15]),c[3]!=6&&(c[8]<=10&&((0,c[42])((0,c[34])(c[Math.pow(7,4)-10-2330],c[4]),c[62],((0,c[new Date("1969-12-31T13:31:12.000-10:30")/1E3])(c[42],c[4]),c[62])(c[4],c[17]),c[40],c[2]),"NaN")||(((0,c[9])((0,c[76])(c[69],
c[25]),c[76],c[46],c[51]),c[24])(c[Math.pow(7,2)-135-new Date("1969-12-31T16:13:08.000-07:45")/1E3],(0,c[15])(),c[59]),c[24])(c[51],(0,c[41])(),c[59])),c[73]!==-1&&(c[37]<=-6||((((0,c[62])(c[40],c[73])<<(((((0,c[new Date("1970-01-01T05:16:10.000+05:15")/1E3])(c[8],c[4]),c[70])(c[16],c[26]),c[62])(c[4],c[14]),c[75])(c[26],c[10]),c[57])(c[4]),(((0,c[43])(c[40],c[0]),c[-44*Math.pow(3,5)+10764])(c[19],c[53]),c[28])(c[Math.pow(2,4)-185+174],c[76]),c[46])(c[66],c[1]),c[63])(c[7],c[33]),void 0))&&(((0,c[43])((((0,c[43])((0,c[58])(c[7],
(0,c[12])(),c[15]),c[58],c[462%Math.pow(8,5)-455],(0,c[75])(),c[15]),c[58])(c[7],(0,c[12])(),c[15]),c[32])(c[52],c[7])&(0,c[18])(c[38],c[8]),c[32],c[71],c[60]),(0,c[18])(c[38],c[67]),(0,c[63])(c[new Date("1969-12-31T17:30:09.000-06:30")/1E3],c[37]),(0,c[18])(c[60],c[0]),c[28])(c[39],c[38]),c[58])(c[7],(0,c[450%Math.pow(4,2)- -10])(),c[15])}try{c[27]!=10?(0,c[30])(c[38]):(0,c[30])(c[7]),((0,c[32])(c[9],c[36]),c[30])(c[60])*(0,c[58])(c[38],(0,c[75])(),c[15])}catch(d){}try{(c[24]<=7||((0,c[43])(((0,c[30])(c[7]),
c[30])(c[60]),c[18],c[59],c[23]),void 0))&&(0,c[68])((0,c[58])(c[7],(0,c[17])(),c[15]),c[43],(0,c[32])(c[1],c[74]),c[-32752-Math.pow(8,3)- -33322],c[38],(0,c[75])(),c[15]),c[11]!=1&&(0,c[35])((0,c[43])((0,c[43])(((0,c[26])(c[73],c[74])*(0,c[5])(c[18],c[36]),(0,c[new Date("1970-01-01T08:15:58.000+08:15")/1E3])(c[69],c[17])),c[58],c[2],c[61]),c[26],c[2],c[14]),c[58],(0,c[38])((0,c[8])(c[2]),c[21],c[50],c[4]),c[62],c[45])}catch(d){(0,c[33])(c[6300-Math.pow(7,2)+-6238],(0,c[279%Math.pow(1,2)- -50])(),
c[68])<<(0,c[66])(c[49])}finally{c[26]>=-10&&((0,c[6])(c[34],c[77]),1)||(0,c[52])(c[49],c[18]),c[28]==4&&((0,c[71])(c[13],c[36]),1)||(0,c[3])(c[22],c[34])}}catch(d){return"enhanced_except_rZsB0uT-_w8_"+a}return b.join("")};