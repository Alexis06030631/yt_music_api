const gma = /^[\w.]*$/
const signatureTimestamp = 19956

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
	const url = orgaCompose(m.KE,m.bI,m.s)
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
	a={uZ:!1,KE:"",bI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.uZ=!0;
a.KE=b.url;
a.bI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
WK.qf(a,1);
WK.YL(a,43);
WK.qf(a,3);
WK.YL(a,23);
WK.KY(a,60);
WK.YL(a,3);
WK.KY(a,11);
WK.YL(a,22);
return a.join("")
}

var WK={YL:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
KY:function(a){a.reverse()},
qf:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[1343422029,-454796400,2044079383,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
470037687,function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
123827700,1058227640,-1130300915,669640320,1425742850,-1428952708,null,-815452443,-44198417,370087246,-1872307286,-664894664,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
559420687,262208560,-1531451169,-565328283,-573647078,function(d,e,f){var h=f.length;e.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},d.split(""))},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1217513626,-202359378,653817897,b,1689075648,-1299600320,function(d,e,f,h,l){return e(f,h,l)},
-795490194,null,-248176276,-565328283,"\u2225,",-2089742779,237235090,909307730,1208032336,b,1944996071,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1045890452,-238083778,321465851,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
741571595,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
null,1550400113,b,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
-58127711,-473877740,2134364966,function(d,e,f,h,l,m){return e(h,l,m)},
-65209966,1343422029,-866862363,-1127634838,444348082,2044642008,-756971127,1487823780,519771960,function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
-1218065091,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
"Pggjj",function(d,e,f,h,l,m,n){return d(l,m,n)},
"now",-573647078,function(d){d.reverse()},
2134364966,-1330319595];c[12]=c;c[34]=c;c[51]=c;try{try{c[23]<-73879- -57*Math.pow(6,4)&&(c[69]===8%Math.pow(8,5)+1&&((0,c[3])(c[42],c[19]),"null")||(0,c[50])(c[42],c[14]))}catch(d){(0,c[24])(c[71],c[29],(0,c[25])())}finally{c[15]!==6&&(c[9]==79-Math.pow(8,3)+438&&((0,c[50])(c[34],c[38]),1)||(0,c[24])(c[new Date("1969-12-31T23:01:11.000-01:00")/1E3],c[42],(0,c[70])()))}try{c[39]!==5&&(c[27]===-1?((0,c[32])((0,c[75])(c[29]),c[50],c[53],c[13]),(0,c[50])(c[51],c[9])/(0,c[48])(c[51]),c[24])(c[73],c[53],
(0,c[70])())*(0,c[32])((0,c[68])(c[59],c[12]),c[68],c[26],c[29])|(((0,c[50])(c[42],c[30]),(0,c[24])(c[73],c[29],(0,c[44])()),c[72])(c[24],(0,c[75])(c[34]),(0,c[-14384-Math.pow(1,2)- -14460])(c[29]),(0,c[68])(c[4],c[53]),c[71],c[29],(0,c[25])()),(0,c[5])(c[51],c[17]),c[48])(c[42]):(0,c[72])(c[48],(0,c[32])((0,c[32])((0,c[24])(c[73],c[42],(0,c[44])()),c[54],c[40],c[12]),c[37],c[74],c[40]),(0,c[8])(c[42],c[66]),(0,c[50])((0,c[17554-Math.pow(3,1)+-17527])((0,c[24])((0,c[24])(((0,c[40])(c[34]),c[67])(c[34]),
c[46],c[61],c[21]),c[40],c[Math.pow(4,2)+52+-64]),c[31],c[50],c[34]),c[72],(0,c[17])((0,c[43])((0,c[7])(c[new Date("1969-12-31T22:30:44.000-01:30")/1E3],c[41]),c[7],c[36],c[41]),c[34],(0,c[21])(c[42],c[new Date("1969-12-31T13:01:03.000-11:00")/1E3]),c[15]),c[6],c[56]),c[39]))}catch(d){(0,c[67])(c[68])}try{c[40]<=-8&&(c[64]!=-2?((0,c[58])((0,c[16])(c[11],c[77]),c[2],c[25],c[60]),c[34])(c[44]):((0,c[new Date("1969-12-31T16:00:03.000-08:00")/1E3])(c[42],c[38]),c[30])(c[68],c[33])*(0,c[60])(c[11],c[55],
(0,c[66])())),c[22]!==0&&((0,c[30])(c[37],c[50]),c[48])(c[new Date("1969-12-31T19:00:36.000-05:00")/1E3]),(c[25]<-8||((0,c[57])(((0,c[57])((0,c[6])(c[55],c[27]),c[21],c[32],c[38]),c[32])(c[77],c[28]),c[3],c[52],c[58]),0))&&(0,c[54])((0,c[28])((0,c[45])(c[0]),c[36],(0,c[38])(c[52]),c[33],c[2]),c[45],c[33])}catch(d){(0,c[28])((0,c[36])(c[0],c[43]),c[62],(0,c[36])(c[52],c[65]),c[15],c[0],(0,c[16])())}finally{c[66]>=1&&(c[57+256%Math.pow(4,1)]!=-9||((((0,c[54])((0,c[62])(c[13],c[44],(0,c[61])())+(((0,c[3])(c[35],
c[12]),c[62])(c[15],c[33],(0,c[61])()),c[62])(c[13],c[33],(0,c[223*Math.pow(8,5)+-7307248])()),c[3],c[52],c[6]),c[62])(c[13],c[Math.pow(6,2)+27360+-27396],(0,c[61])()),c[18])(c[22+Math.pow(4,1)+5],c[0]),0))&&(((0,c[18])(c[51],c[35]),c[3])(c[35],c[22])>(0,c[54])((0,c[18])(c[19],c[74]),c[32],c[37],c[4]))*((0,c[29])(c[4],c[1]),c[3])(c[4],c[66])>=(0,c[18])(c[20],c[new Date("1970-01-01T06:00:44.000+06:00")/1E3]),(c[66]>=new Date("1970-01-01T04:59:56.000+05:00")/1E3||(((0,c[54])((0,c[38])(c[35]),c[18],
c[59],c[4]),(0,c[62])(c[15],c[40-295%Math.pow(2,5)],(0,c[61])()),c[28])((0,c[36])(c[33],c[41]),c[62],((0,c[62])(c[15],c[44],(0,c[68])()),c[36])(c[44],c[5]),c[15],c[44],(0,c[68])()),null))&&(0,c[54])(((0,c[54])((0,c[32])(c[71],c[4]),c[18],c[34],c[33]),((0,c[54])((0,c[36])(c[4],c[26]),c[45],c[33]),c[18])(c[50],c[new Date("1969-12-31T20:45:04.000-03:15")/1E3]),c[3])(c[33],c[30]),c[18],c[21],c[33])}}catch(d){return"enhanced_except_9JsBi-T-_w8_"+a}return b.join("")};