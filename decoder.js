const gma = /^[\w.]*$/
const signatureTimestamp = 19991

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
		url = orgaCompose(m.UE,m.nI,m.s)
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
	a={yZ:!1,UE:"",nI:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.yZ=!0;
a.UE=b.url;
a.nI=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
kL.Wq(a,30);
kL.nx(a,3);
kL.Wq(a,4);
kL.nx(a,3);
kL.FT(a,29);
kL.nx(a,1);
kL.FT(a,8);
kL.FT(a,66);
kL.nx(a,2);
return a.join("")
}

var kL={nx:function(a,b){a.splice(0,b)},
Wq:function(a){a.reverse()},
FT:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[-1535958301,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
function(d,e){e.length!=0&&(d=(d%e.length+e.length)%e.length,e.splice(0,1,e.splice(d,1,e[0])[0]))},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
1660403845,null,2022623660,b,function(d,e,f,h,l){return e(f,h,l)},
-461685690,-1527244567,-649370537,-727797053,",\\,\\\\",561672322,function(d,e,f,h,l,m,n,p,q,r,t,u){return f(h,l,m,n,p,q,r,t,u)},
1597278956,"else",2098809031,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
75118619,1611583689,null,-1891493032,function(d,e){e.splice(e.length,0,d)},
1408732064,1516877319,340011122,1834885017,1686691575,667856973,b,1069567890,40330561,200755828,1685001231,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e,f,h,l,m,n){return d(l,m,n)},
1288547254,-280535633,37455449,",57];c[53]=c;",b,1454574468,1897120407,-768998257,-1090566061,-2034809219,function(d){d.reverse()},
1132692005,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e,f,h,l,m){return e(h,l,m)},
-1947699919,null,-1897318956,-669375289,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-853015927,1004824973,1546871362,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
1655804319,-728056597,function(d,e,f,h,l,m,n){return d(l,m,n)},
-1891493032,1802589311,1207294965,221501407,310020051,function(d,e,f){var h=e.length;f.forEach(function(l,m,n){this.push(n[m]=e[(e.indexOf(l)-e.indexOf(this[m])+m+h--)%e.length])},d.split(""))},
-417735717,function(d,e,f,h,l){return e(f,h,l)},
-282332864,"UYF3aKm",1666724829,368901063,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
-791474364,94762363,function(d,e){e.splice(e.length,0,d)},
-472681239,1369373016,-885507607];c[5]=c;c[23]=c;c[54]=c;try{try{(c[50]<=2||((0,c[8])((0,c[2])(c[66],c[23]),c[new Date("1970-01-01T07:15:49.000+07:15")/1E3],c[7]),0))&&(0,c[78])(c[43],c[48])*(0,c[20])(c[9],c[54]),c[77]!==0&&(c[41]===-10&&((0,c[52])((0,c[2])(c[46],c[43]),c[49],(0,c[71])(c[17],(0,c[57])(),c[7]),c[5]),1)||(0,c[52])((0,c[1])(c[31],c[32]),c[2],(0,c[62])(c[56],c[32]),c[45],c[43])),c[69]>7&&(c[36]>new Date("1969-12-31T22:15:06.000-01:45")/1E3?(0,c[19])((0,c[73])((0,c[62])(c[59],c[32]),c[1],
c[16],c[23]),c[19],(0,c[84])((0,c[13])(c[46],c[65]),c[4],c[34],c[3]),c[new Date("1970-01-01T10:15:56.000+10:15")/1E3],c[16],c[61]):((0,c[55])(c[33],c[1]),(0,c[21])((0,c[40])(c[71],(0,c[26])(),c[61]),c[31],(0,c[57])(c[61]),c[51],c[12]),c[55])(c[84],c[23]))}catch(d){(0,c[21])((0,c[31])(c[48],c[61]),c[31],(0,c[57])(c[61]),c[58],c[23])}finally{c[10]!==-4&&(c[82]!=-2||(((0,c[74])(c[80],c[23]),c[74])(c[19],c[77]),(0,c[31])(c[9],c[12]),0))&&(0,c[74])(c[37],c[59])*(0,c[42])((0,c[31])(c[65],c[61]),c[74],c[82],
c[12]),c[46]>new Date("1969-12-31T17:00:03.000-07:00")/1E3&&((0,c[55])(c[new Date("1970-01-01T11:01:15.000+11:00")/1E3],c[61])!==(0,c[47])(c[12],c[27]),(0,c[57])(c[77]),c[28])(c[16],c[72]),c[56]<-5?(((((0,c[53])(c[18],c[72]),c[10])(c[35],c[23])|(0,c[44])(c[new Date("1970-01-01T03:30:40.000+03:30")/1E3],(0,c[54])(),c[72]))^(0,c[44])(c[40],(0,c[58])(),c[83]),((0,c[22])((0,c[44])(c[13],(0,c[58])(),c[23]),c[44],c[13],(0,c[58])(),c[23]),c[53])(c[46],c[23]),c[66])(c[83]),c[53])(c[41],c[61]):(0,c[15])((((0,c[29])(c[20],
c[23]),c[44])(c[40],(0,c[54])(),c[83]),c[10])(c[new Date("1970-01-01T02:30:01.000+02:30")/1E3],c[25]),(0,c[37])(c[83],c[74]),c[50],c[10],(0,c[10])(c[60],c[new Date("1970-01-01T04:16:44.000+04:15")/1E3%510-27+-54]),(0,c[10])(c[31],c[61]),(0,c[22])((0,c[37])(c[61],c[3]),c[72],c[4],c[42]),c[21],c[20])}try{c[34]<=1&&(c[64]!=5?(0,c[1])((0,c[72])(c[38],c[31]),c[3],c[57],(0,c[23])(),c[31]):(0,c[1])((0,c[12])(c[7],c[20]),c[3],c[57],(0,c[37])(),c[31])),(c[2]>=-2||((0,c[81])(c[67],c[30]),0))&&(0,c[81])(c[42],
c[40]),c[5]!=-4&&((0,c[73])(c[2],c[67]),c[1])((0,c[54])(c[83],c[51]),c[71],c[51]),c[20]<=-3&&(c[20]==-1?(0,c[81])(c[27],(0,c[67])(),c[17])>>((0,c[13])(c[53]),c[81])(c[0],(0,c[67])(),c[42]):(0,c[29])((0,c[3])(c[15],c[43]),c[73],(0,c[67])(c[83],c[3]),c[61],c[11],c[70])),c[77]<=-4&&(0,c[53])((0,c[73])((0,c[66])(c[65],c[70]),c[27],c[32],c[50])-(0,c[8])(c[70],c[30]),c[32],c[79],c[11])}catch(d){(0,c[7])(c[4],c[61]),(0,c[69])(c[26],c[39]),(0,c[56])(c[50]),((0,c[85])(c[39],c[29]),c[22])(c[46],c[11])}}catch(d){return"enhanced_except_l5wB6OP-_w8_"+
a}return b.join("")};