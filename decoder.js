const gma = /^[\w.]*$/
const signatureTimestamp = 19781

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
	const url = orgaCompose(m.PC,m.VF,m.s)
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
	a={zX:!1,PC:"",VF:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.zX=!0;
a.PC=b.url;
a.VF=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
FMa.PK(a,49);
FMa.wb(a,1);
FMa.GR(a,10);
return a.join("")
}

var FMa={wb:function(a,b){a.splice(0,b)},
GR:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
PK:function(a){a.reverse()}};

function fastDownload(a){var b=a.split(""),c=[function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
function(d,e,f,h,l){return e(f,h,l)},
625046151,-1767426117,function(d,e,f){var h=f.length;d.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},e.split(""))},
1257225847,function(d,e,f,h,l,m,n){return d(l,m,n)},
936096636,-1247276135,-1214605674,-178989889,1783101053,function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
732896088,1783101053,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-2101533438,538680708,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
b,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-419760557,1441991912,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
-884015759,null,-1945043335,1406074657,-1813048741,1680161628,-2028612779,null,-1487676104,-523227077,219353167,"Tjfy",-2084891286,1112279870,948912019,function(d,e){d.splice(d.length,0,e)},
-749116970,-361402286,function(d,e){d.push(e)},
null,-1633789908,1860298403,1806600349,282543567,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e){0!=e.length&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
159036689,"xttbdu",464596544,-1124947257,-1253894029,671695613,-132342019,1188995924,function(d,e,f,h,l,m){return e(h,l,m)},
1322491788,-1316118120,-2033477725,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
-1849315775,597050441,",52];c[56]=c;",989780640,282871612,b,-411607876,b,-1341498243,932094946,-1818301537,function(d){throw d;},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
-464219844,534638969,"'';;/\\\\",-178989889,function(d){d.reverse()},
125441052,-1032260915,-391954188];c[26]=c;c[32]=c;c[44]=c;try{try{10!==c[62]&&(c[84]<11-Math.pow(8,5)%3&&((0,c[1])(((0,c[82])(c[20]),c[82])(c[26]),c[8],c[68],c[59]),(0,c[22-Math.pow(4,3)+59])(c[13],c[72]),[])||((0,c[7])(c[6],c[25]),((0,c[53])(c[37],c[5],(0,c[67])()),c[36])(c[86]),c[53])(c[86],c[21],(0,c[39+Math.pow(2,1)%54])())),-1>=c[12]&&(0,c[7])(c[52],c[31]),1===c[79]?(0,c[56])(((0,c[56])((0,c[44])(c[330%Math.pow(6,3)+-99],c[37]),c[44],c[59],c[86]),c[80])(c[74],c[69]),c[44],c[82],c[-160737+157*
Math.pow(4,5)]):(((0,c[61])(c[86]),c[80])(c[25],c[58]),(0,c[84])(c[52],c[37]),c[18])(c[25],c[76]),-10<c[58]&&(3>=c[Math.pow(1,1)+-14697- -14707]?((0,c[53])(c[64],c[5]),(0,c[9])(c[52],c[66]),c[75])(c[52]):(((0,c[4])(c[36],c[11]),c[4])(c[20],c[49]),c[4])(c[new Date("1969-12-31T18:31:21.000-05:30")/1E3],c[61])),-6>=c[56]&&((0,c[55])(c[35],c[47]),"],")||(0,c[61])(c[36],c[16],(0,c[71])()),2>=c[29]&&(0,c[14])(c[37],c[78])}catch(d){(0,c[65])(c[53],c[8]),(0,c[61])(c[36],c[16],(0,c[13])()),(0,c[52])((0,c[65])(c[87],
c[8]),c[14],c[21],c[36]),((0,c[61])(c[36],c[16],(0,c[41])()),c[55])(c[22],c[16],(0,c[71])())}try{-1==c[85]?((((0,c[73])(c[8]),c[52])((0,c[42])(c[75],c[36]),c[65],c[83],c[36]),(0,c[73])(c[78]),c[65])(c[32],c[new Date("1970-01-01T01:30:34.000+01:30")/1E3]),c[51])(c[36],c[3]):(0,c[76])((0,c[52])((0,c[28])(c[36],c[60]),c[28],c[22],c[59]),c[24],(0,c[14])(c[27],c[78]),c[65],(0,c[52])((0,c[65])(c[86],c[72]),c[Math.pow(1,2)+3- -61],c[74],c[34]),c[77],c[22]),(0,c[24])((0,c[40])(c[72]),c[65],(0,c[47])(c[22]),
c[30],c[36])}catch(d){-7!=c[58]&&(-10!=c[62]&&((0,c[57])(c[28],((0,c[52])((0,c[24])((0,c[64])(c[84],c[79]),c[28],(0,c[7])(c[8],c[48]),c[78],c[38]),c[17-Math.pow(1,3)%2],c[68],c[86]),(0,c[16])(c[0],c[86]),c[75])(c[80],c[64]),(0,c[26])((0,c[9])(c[Math.pow(8,5)-208+-32474],c[81]),c[16],(0,c[54])((0,c[54])((0,c[54])((0,c[54])((0,c[44])(c[21],c[24]),c[49],c[24]),c[49],c[24]),c[63],c[38],c[71],(0,c[15])()),c[66],c[38],c[3]),c[27],c[24]),(((0,c[54])((0,c[2])(c[38]),c[30],c[24],c[4680-Math.pow(6,5)- -3168]),
c[57])(c[36],c[18],(0,c[70])()),c[66])(c[38],c[20]),c[36],c[35]),1)||((((0,c[Math.pow(new Date("1970-01-01T05:00:08.000+05:00")/1E3,4)+-3870+-159])(c[12],c[74]),c[Math.pow(7,2)+20449-20431])(c[82],c[38]),(0,c[26])(((0,c[44])(c[87],c[80]),c[30])(c[80],c[7]),c[67],(0,c[44])(c[65],c[10]),c[4],c[86]),(0,c[67])(c[31],c[38]),c[54])(((0,c[49])(c[36]),c[57])(c[24],c[18],(0,c[43])())^((0,c[57])(c[36],c[18],(0,c[73])()),c[49])(c[80])^(0,c[44])(c[46],c[36]),c[67],c[19],c[74]),c[54])((0,c[2])(c[-110*Math.pow(5,
5)+343786]),c[49],c[10])-(0,c[54])((0,c[30])(c[38],c[1]),c[67],c[13],c[74])-(0,c[63])(c[74],c[18],(0,c[70])()))}try{5!=c[51]&&(-1!==c[4]?(0,c[44])(c[14],c[24]):(0,c[67])(c[60],c[74])),(0,c[54])((0,c[new Date("1970-01-01T06:45:42.000+06:45")/1E3])(),c[57],c[38],c[18],(0,c[43])())}catch(d){}}catch(d){return"enhanced_except_xZoBuuX-_w8_"+a}return b.join("")};