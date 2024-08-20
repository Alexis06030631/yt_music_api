const gma = /^[\w.]*$/
const signatureTimestamp = 19950

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
	const url = orgaCompose(m.EE,m.XH,m.s)
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
	a={qZ:!1,EE:"",XH:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.qZ=!0;
a.EE=b.url;
a.XH=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
ZK.Wp(a,68);
ZK.gl(a,1);
ZK.A9(a,42);
ZK.gl(a,1);
ZK.A9(a,8);
return a.join("")
}

var ZK={Wp:function(a){a.reverse()},
gl:function(a,b){a.splice(0,b)},
A9:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[1832496663,b,-1040627328,-989811845,-1619497477,-1505806805,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
-1505806805,-786412503,-2062315867,335149682,953704356,function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
null,1865495772,b,null,-478948307,-1278326843,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
207706584,function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
297701191,-1000213796,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
"{{,';(\\",-977590487,84332772,642487735,b,-328748131,-1084799472,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
-786412503,-1585953944,568967486,-1810009861,-161518012,681735767,2001900620,-1873367075,-1048561662,function(d,e,f,h,l,m){return e(h,l,m)},
function(d,e,f){var h=f.length;e.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},d.split(""))},
706548342,478258586,1383007402,87196298,-1232104980,777177602,-1880789147,353529930,-1403027611,";,\\/}",null,-1997652563,406519354,-1407069250,191085158,-1275813884,-2015127417,-958180146,function(d){d.reverse()},
-817084587,-865672933,-1390737915,536631615,35300782,63415374,-809249797,1229585845,"[}](",1831788259,-504114355,642487735,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e,f,h,l){return e(f,h,l)},
"join",-1885301127,-1541140506,2117866321,2093608169,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-368049117,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
-1760051415];c[13]=c;c[16]=c;c[55]=c;try{try{c[2%Math.pow(8,5)- -33]!=-5&&(0,c[21])(c[Math.pow(4,4)%97+3],c[13]),c[28]!=-1&&((0,c[63])(c[15]),",;")||(0,c[5+Math.pow(1,2)%121])(c[Math.pow(8,1)+0-new Date("1969-12-31T16:58:58.000-07:00")/1E3],c[13]),c[40]<10?(((0,c[63])(c[new Date("1970-01-01T02:45:13.000+02:45")/1E3])>((0,c[63])(c[Math.pow(6,5)*193-1500752]),c[6])(c[81],c[55]))+(0,c[44])(c[78],c[1],(0,c[25])())<(0,c[21])(c[-1856+Math.pow(3,1)+1937],c[30]))*(0,c[63])(c[1]):(((0,c[85])(c[1],c[81+Math.pow(7,
5)+-16847]),c[77])((0,c[12])(c[13],c[86]),c[21],c[73],c[15]),c[43])((0,c[21])(c[14938-Math.pow(1,5)-14880],c[55]),c[319-307%Math.pow(5,5)],(0,c[85])(c[16],c[23]),c[80],c[25]),c[85]!=-3&&(((((0,c[79])(c[35],c[44]),(0,c[79])(c[82],c[36]),c[13])(c[81-Math.pow(6,2)+1],c[82]),c[63])((0,c[67])(c[82]),c[57],(0,c[79])(c[10],c[Math.pow(5,4)+37230-37813]),c[13],c[93*Math.pow(1,3)+-53],c[83]),c[44])(c[33],c[71]),1)||(0,c[28])((0,c[38])(c[42],c[33]),c[22],(0,c[8])(c[33]),c[53],c[84],c[47])%(((0,c[22])((0,c[44])(c[62],
c[81]),c[65],c[79],c[62]),c[38])(c[85],c[62]),c[38])(c[6],c[47]),c[19]!=9&&(c[84]<new Date("1970-01-01T02:00:07.000+02:00")/1E3&&((((0,c[22])(((0,c[38])(c[68],c[48]),c[76])(c[131-Math.pow(3,3)-81],c[33],(0,c[Math.pow(6,4)*38-49197])()),c[32],c[47]),c[Math.pow(2,4)+79+-73])((0,c[38])(c[Math.pow(8,5)*-17- -557069],c[45]),c[32],c[0]),c[22])((0,c[38])(c[19],c[62]),c[38],c[12],c[47]),"null")||(0,c[28])(((((0,c[30])(c[0],c[64]),c[5])((0,c[27])(c[70],c[18]),c[27],c[16],c[46]),c[36])(c[35],c[70]),c[574+Math.pow(2,
1)*-248])(c[28]),c[81],(0,c[50])(c[33],c[41]),c[50],c[79],c[41])),c[31]!=-2&&(0,c[73])(c[16],c[63]),c[6]>3&&(c[62]==-121*Math.pow(8,3)+61954||(((((0,c[new Date("1970-01-01T09:30:58.000+09:30")/1E3])(c[23],c[5])>>>(0,c[39])(c[38],c[56]),(((0,c[39])(c[18],c[79]),c[53])(c[21],c[16]),c[7])(c[60],c[50],(0,c[11])()),c[45])(c[80],c[36]),c[45])(c[22],c[36]),c[45])(c[54],c[36]),0))&&(((0,c[new Date("1970-01-01T04:00:55.000+04:00")/1E3])((0,c[66])(c[37],c[38]),c[61],(0,c[61])((0,c[61])((0,c[61])((0,c[7])(c[60],
c[new Date("1970-01-01T09:15:36.000+09:15")/1E3],(0,c[32])()),c[7],c[60],c[21],(0,c[32])()),c[53],c[50],c[9]),c[75],c[18]),c[7],c[60],c[36],(0,c[11])()),c[45])(c[49],c[21]),c[30])(c[0],c[50])}catch(d){(0,c[7])(c[60],c[21],(0,c[32])())>>(0,c[75])(c[18]),(0,c[8])((0,c[61])((0,c[75])(c[21]),c[53],c[38],c[27]),c[45],(0,c[66])(c[274%Math.pow(7,3)-269],c[5942+-164*Math.pow(6,2)]),c[69],c[36]),(0,c[70-Math.pow(5,2)%221])(c[34],c[36])}try{c[19]!==5&&(c[85]===-9?(0,c[55])((0,c[7])(c[60],c[21],(0,c[new Date("1970-01-01T01:00:32.000+01:00")/
1E3])()),c[61],(0,c[7])(c[60],c[50],(0,c[26])()),c[new Date("1970-01-01T03:00:07.000+03:00")/1E3],c[60],c[21],(0,c[32])()):(0,c[33+Math.pow(7,5)+-16779])((0,c[35+90%Math.pow(4,3)])((0,c[66])(c[44],c[21]),c[45],c[33],c[21]),c[53],c[83],c[0-Math.pow(7,3)+383]))}catch(d){(0,c[56])(c[53],c[50])}try{c[84]!==4750+Math.pow(2,2)-4756&&(c[22]!=-7&&((0,c[77+Math.pow(4,5)+-1090])((0,c[48])(c[61],c[24]),c[42],((0,c[69])(c[6],c[21]),c[59])(c[9],c[67]),c[25],c[30]),1)||(0,c[3])((0,c[37])((0,c[74])(c[52],c[Math.pow(4,
1)-15136- -15211]),c[82],(0,c[17])(c[25]),c[65],c[53]),c[74],c[71],c[65]))}catch(d){(0,c[74])(c[43],c[50])}}catch(d){return"enhanced_except_7psBkeT-_w8_"+a}return b.join("")};