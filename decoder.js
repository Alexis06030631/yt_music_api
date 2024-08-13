const gma = /^[\w.]*$/
const signatureTimestamp = 19947

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
	const url = orgaCompose(m.CE,m.WH,m.s)
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
	a={pZ:!1,CE:"",WH:"",s:""};
if(!b)return a;
b=urlDecode(b);
a.pZ=!0;
a.CE=b.url;
a.WH=b.sp;
a.s=b.s;
return a
}

function keyDecrypt(a) {
	a=a.split("");
RK.MJ(a,33);
RK.ma(a,3);
RK.MJ(a,16);
return a.join("")
}

var RK={MJ:function(a){a.reverse()},
ma:function(a,b){a.splice(0,b)},
f3:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};

function fastDownload(a){var b=a.split(a.slice(0,0)),c=[-508521829,1125270001,2121765631,1011729732,-2063454561,-712918683,",(,u",function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
9985353,1695769362,943922570,1033719908,37289038,-844664894,1886056048,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-40991700,-719602415,1733764080,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
function(d,e,f,h,l,m){return e(h,l,m)},
1532417946,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(d,1)},
-143236861,-1981926810,-2063120894,-532676372,-299298207,function(d,e){d.splice(d.length,0,e)},
772651631,233053398,1011729732,-1001727259,520669700,",[\\}\\{[",function(d,e){d.length!=0&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
null,1735688799,null,function(d){d.reverse()},
-952013384,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
1383043147,1221111605,1876323585,900112890,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
299284668,638708230,1379613031,1808356379,function(d){throw d;},
-452202935,-1674559914,function(d,e,f,h,l){return e(f,h,l)},
function(d,e,f,h,l,m,n,p,q){return f(n,p,q)},
-1072840357,b,-580447638,function(d,e,f){var h=f.length;e.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},d.split(""))},
-1953779634,961691926,"reverse",-329454831,-2071985216,2096290038,1766545589,-1560946861,707614262,1357219498,938148406,879102905,-1609178606,function(d,e,f,h,l,m,n,p,q,r,t){return d(f,h,l,m,n,p,q,r,t)},
-44088822,1919355891,-819558351,-784768742,null,1397769593,function(d,e){if(e.length!=0){d=(d%e.length+e.length)%e.length;var f=e[0];e[0]=e[d];e[d]=f}},
b,b,function(d,e,f,h,l,m,n){return d(l,m,n)},
-1397914097,-2073855113,72364713,-1782495754,614579882,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])}];
c[37]=c;c[39]=c;c[79]=c;try{try{(c[80]<=-3||((((0,c[36])(c[39],c[2]),((0,c[21])(c[67],c[77]),c[66])(c[26],c[24]),c[40])((0,c[32])(c[67],c[-168- -21*Math.pow(2,3)]),c[20],c[67],c[17]),c[20])(c[22],c[70]),void 0))&&(0,c[40])(((0,c[7])(c[14],c[67]),c[40])((0,c[40])((0,c[7])(c[38],c[new Date("1970-01-01T07:01:07.000+07:00")/1E3]),c[7],c[53],c[24]),c[32],c[24],c[-7298-Math.pow(8,3)+7865]),c[7],c[new Date("1969-12-31T22:16:29.000-01:45")/1E3],c[74-Math.pow(6,1)%220])-(0,c[7])(c[33],c[68])}catch(d){(0,c[7])(c[79],
c[-36E3+Math.pow(6,3)+35806])}try{c[74]<8&&(((((0,c[32])(c[68],c[39]),(0,c[66])(c[Math.pow(1,2)+138-68],c[43]),c[7])(c[76],c[22]),c[66])(c[23],c[64]),(0,c[45])(c[66608+-130*Math.pow(8,3)],c[67],(0,c[42])()),c[7])(c[90],c[68]),1)||(0,c[69])(c[66],((0,c[75])(c[24]),(0,c[70])(c[66],c[9]),c[24])(c[81],c[58+Math.pow(8,1)%140]),(0,c[-57+140%Math.pow(8,3)])(c[62],c[47]),(0,c[77])(c[new Date("1970-01-01T07:45:26.000+07:45")/1E3],c[50]),c[54],c[66]),c[57]>=-1&&(c[40]==8&&((0,c[45])(c[-678- -90*Math.pow(2,
3)],c[23],(0,c[63])()),"undefined")||(0,c[45])(c[42],c[23],(0,c[Math.pow(5,2)*-56+1448])()))}catch(d){(0,c[70])(c[23],c[90]),(0,c[46])(c[47],c[32])}finally{(c[38]!==-1||((((0,c[83])(c[36],c[47]),c[45])(c[42],c[47],(0,c[63])()),c[46])(c[66],c[39]),NaN))&&(0,c[91])((0,c[50])((0,c[46])(c[Math.pow(7,5)%198-149],c[38]),c[69],c[37],c[81-Math.pow(3,2)+-51]),c[69],c[73],c[21])}try{c[58]>=8?(0,c[2])((0,c[69])(c[89],c[68]),(0,c[23])(c[71],c[48]),c[11],(0,c[11])(c[21],c[5]),(0,c[21])(c[70]),(0,c[2])(c[24],c[16]),
c[31],c[9]):(0,c[8])((0,c[Math.pow(6,2)%453-6])(c[0],(0,c[67])(c[75],c[50]),((0,c[0])(c[87],c[32]),c[54])(c[-14950+Math.pow(4,5)- -13977],c[38],(0,c[72])()),(0,c[54])(c[51],c[31],(0,c[225-Math.pow(3,3)+-126])()),c[39],c[31]),c[54],c[51],c[38],(0,c[16])()),c[28]!=7&&(0,c[40])(c[30],(((0,c[55])(c[38],c[25]),(((0,c[67])(c[31],c[4]),c[33])(c[89],c[32]),c[55])(c[31],c[34]),c[67])(c[38],c[91]),c[86])(c[77],c[51]),c[79],(0,c[74])(c[75]),(0,c[37])(c[61],c[24]),(0,c[59])(c[27],c[15]),c[17],c[73]),(0,c[30])(c[60]),
(0,c[38])(c[40],c[54],(0,c[89])())}catch(d){c[19]<new Date("1969-12-31T19:45:00.000-04:15")/1E3&&(c[55]==-6&&((0,c[84])(((0,c[25])(c[57],c[87]),(0,c[92])(c[8],c[61]),c[92])(c[4],c[60]),c[new Date("1969-12-31T14:00:38.000-10:00")/1E3],c[41],c[54],(0,c[35])()),[])||(0,c[84])((0,c[90])((0,c[37])(c[17],c[new Date("1970-01-01T04:15:56.000+04:15")/1E3]),c[53],(0,c[77])(c[57],c[76]),c[41],c[65]),c[9],c[44],c[88]))}try{c[62]!=-2?(0,c[68])((0,c[43])(c[63],c[44]),c[43],c[12],c[44]):(0,c[17])((0,c[22])(c[25],
c[38],(0,c[4])()),c[2],c[1]),(0,c[14])(c[45]),((0,c[-120*Math.pow(2,4)- -1996])(c[61],c[45]),c[43])(c[49],c[44])}catch(d){c[37]>4050+Math.pow(3,4)+-4131&&(c[51]===6?(0,c[new Date("1970-01-01T09:31:08.000+09:30")/1E3])((0,c[76])(c[6],c[45]),c[76],c[33],c[45]):(0,c[68])((0,c[21])(c[44],c[62]),c[9],c[44],c[27])),c[75]>=-7?(0,c[43])(c[70],c[45]):(0,c[9])(c[41],c[50])}}catch(d){return"enhanced_except_65sBlOT-_w8_"+a}return b.join("")};