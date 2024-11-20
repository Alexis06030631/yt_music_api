const gma = /^[\w.]*$/
const signatureTimestamp = 20045

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
		url = orgaCompose(m.TE,m.oI,m.s)
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
	a={LZ:!1,TE:"",oI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.LZ=!0;
a.TE=b.url;
a.oI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
UL.bC(a,77);
UL.Wa(a,63);
UL.Wa(a,30);
UL.bC(a,78);
return a.join("")
}

var UL={Wa:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
bC:function(a){a.reverse()},
bw:function(a,b){a.splice(0,b)}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[-1229003347,-1576777967,563270643,1400331699,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return d},
1446677913,-654952775,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-763128904,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
655630690,-288597532,-409494858,830434692,"'',))",212596390,null,1210408107,-1520315716,-258160689,function(d,e,f){var h=d.length;f.forEach(function(l,m,n){this.push(n[m]=d[(d.indexOf(l)-d.indexOf(this[m])+m+h--)%d.length])},e.split(""))},
450293869,68882776,-1412723456,-1873699771,-1076933044,1526743135,-1274244768,1596522803,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
function(d,e,f,h,l){return e(f,h,l)},
function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
null,569125724,function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
-258160689,null,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
363925328,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-1060345479,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
"ipjysa",1552643068,68882776,b,-451222790,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
function(d,e,f,h,l,m){return e(h,l,m)},
-539132971,-1736618408,b,-940912096,857456399,-1576777967,-830965256,b,function(d,e){e.push(d)},
1416872255,-409494858,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-811816107,1229138156,function(d){d.reverse()},
function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())}];
c[16]=c;c[32]=c;c[37]=c;try{try{c[56]!==4?(0,c[30])((0,c[42])(c[16],c[52]),c[16],c[34]):(0,c[18])((0,c[28])((0,c[8])(),c[5],c[2]),c[28],(0,c[53])(),c[5],c[2])}catch(d){(0,c[13])(c[25],c[32])}finally{c[22]!=-6&&(((0,c[18])((0,c[18])((0,c[14])(c[16],c[43]),c[19],c[62],c[36]),c[39],c[32]),c[27])(c[4]),c[new Date("1970-01-01T01:00:48.000+01:00")/1E3])((0,c[52])(c[64],c[51]),c[47],c[64],c[62]),c[14]<-5&&(0,c[38])((0,c[13])(),c[new Date("1970-01-01T07:16:01.000+07:15")/1E3],c[9]),c[31]>=-8?(((0,c[52])(c[4],
c[59]),c[48])(((0,c[17])(c[50],c[18]),c[58])(c[28]),c[47],c[28]),c[47])(c[40]):((0,c[2])((0,c[56])(),c[25],c[40]),c[11])(c[40],c[6])*(0,c[16])(c[14],c[64])%(0,c[17])(c[8],c[40])|(0,c[16])(c[40],c[66])}try{c[61]!=-6?((((0,c[17])(c[52],c[19]),c[58])(c[19]),c[18])(c[47],c[9]),(0,c[43])(c[62]),(0,c[32])(c[4]),c[8])((0,c[0])(c[57],c[50]),c[66],(0,c[66])(c[48]),c[48]):(0,c[21])((0,c[66])(c[36])^((0,c[25])(c[0],c[36]),c[new Date("1969-12-31T19:16:06.000-04:45")/1E3])(c[22]),c[20],(0,c[19])(c[48],c[41]),
c[10],(0,c[52])(),c[33],c[43])>>>(0,c[new Date("1969-12-31T14:00:20.000-10:00")/1E3])((0,c[20])((0,c[19])(c[6],c[44]),c[10],(0,c[28])(),c[33],c[36]),c[19],c[48],c[47]),c[41]<-10&&(c[58]<=-2?(((0,c[55])(c[36]),c[55])(c[36]),c[40])((0,c[25])(c[29],c[27]),c[19],(0,c[56])(c[43],c[54]),c[36],c[16]):(((0,c[25])(c[18],c[27]),c[20])(((0,c[55])(c[48]),(0,c[66])(c[22])),c[10],(0,c[39])(),c[33],c[48]),c[19])(c[43],c[37]))}catch(d){(0,c[10])((0,c[39])(),c[33],c[36]),(0,c[25])(c[9],c[48])}try{c[3]!==4&&((((0,c[61])((((0,c[20])((0,c[56])(c[27],
c[45]),c[46],c[2]),c[30])(c[13],c[40]),(0,c[20])(c[4],c[56]),c[63])(c[16],c[2]),c[32],(0,c[32])((0,c[64])(c[9]),c[20],c[4],c[49]),c[28],c[46],c[41]),c[3])(c[32],c[46]),c[32])((0,c[new Date("1970-01-01T01:31:03.000+01:30")/1E3])(c[9],c[35]),c[53],c[30]),c[4])(c[21],c[16])}catch(d){(0,c[1])((0,c[42])(),c[24],c[27])}try{c[37]!=-5&&(c[52]<1&&((0,c[44])((0,c[10])(c[39],c[51]),c[58],c[27]),"null")||(0,c[11])((0,c[47])(c[13]),c[52],c[54],c[22])),(0,c[66])(c[38],c[43],c[49]),(0,c[44])(c[40],c[41])}catch(d){}}catch(d){return"enhanced_except_zZwBsuP-_w8_"+
a}return b.join("")};