const gma = /^[\w.]*$/

function nA(a:string) {
    "?" == a.charAt(0) && (a = a.substr(1));
    return lA(a, "&")
}
function cma(a:string) {
    return a && a.match(gma) ? a : Ae(a)
}
function Ae(a:string) {
    return decodeURIComponent(a.replace(/\+/g, " "))
}

function lA(a:any, b:string) {
    b = a.split(b);
    let c:any, d, e;
    for (c = {}, d = 0, e = b.length; d < e; d++) {
        const f = b[d].split("=");
        if (1 == f.length && f[0] || 2 == f.length) {
            try {
                const h = cma(f[0] || "")
                const l = cma(f[1] || "");

                if (h in c) c[h] = [c[h], l]
                else c[h] = l
            } catch (q) {
                throw q
            }
        }
    }
    return c
}
function nJ(a:any) {
    let b = a.signatureCipher;
    a = {
        bW: !1,
        Dy: "",
        cB: "",
        s: ""
    };
    if (!b)
        return a;
    b = nA(b);
    a.bW = !0;
    a.Dy = b.url;
    a.cB = b.sp;
    a.s = b.s;
    return a
}

function pM(a:any, b:any, c:string) {
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
        c = Sya(decodeURIComponent(c))
        a.j[b] = encodeURIComponent(c)
    }
    return a
}

function Sya(a:any) {
    a = a.split("");
    EP.lW(a, 49);
    EP.Lh(a, 38);
    EP.lW(a, 61);
    EP.Lh(a, 45);
    EP.lW(a, 20);
    EP.qS(a, 2);
    return a.join("")
}

const EP = {
    qS: function(a:any, b:any) {
        a.splice(0, b)
    },
    Lh: function(a:any, b:any) {
        const c = a[0];
        a[0] = a[b % a.length];
        a[b % a.length] = c
    },
    lW: function(a:any, b:any) {
        a.reverse()
    }
};


function decode(format:any){
    const m = nJ(format)
    const url = pM(m.Dy, m.cB, m.s)
    // extract every params of url and add params to object
    const urlSplit = url.B.split('?')
    url.B = urlSplit[0]
    Object.assign(url.j, lA(urlSplit[1], '&'))

    url.j.n = Ula(url.j.n)
    return buildUrl(url.B, url.j)
}

function buildUrl(url:string, params:any){
    const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    return url + '?' + queryString;
}

function Ula(a:any) {
    var b = a.split("")
        , c = [-178439619, -2058879042, function(d, e, f) {
        var h = f.length;
        e.forEach(function(l, m, n) {
            this.push(n[m] = f[(f.indexOf(l) - f.indexOf(this[m]) + m + h--) % f.length])
        }, d.split(""))
    }
        , -686944322, 244250327, 1451353817, -501162409, 1924902761, -1537174670, -1164585575, 85549290, 362333872, -1491723089, 111283699, b, function(d, e, f, h, l) {
            return e(f, h, l)
        }
        , 1456586726, 1152940468, 191971039, 1704163862, null, 132870426, "RjeNrq", function() {
            for (var d = [], e = 64; ++e - d.length - 32; ) {
                switch (e) {
                    case 58:
                        e -= 14;
                    case 91:
                    case 92:
                    case 93:
                        continue;
                    case 123:
                        e = 47;
                    case 94:
                    case 95:
                    case 96:
                        continue;
                    case 46:
                        e = 95
                }
                d.push(String.fromCharCode(e))
            }
            return e
        }
        , function(d) {
            d.reverse()
        }
        , function() {
            for (var d = 64, e = []; ++d - e.length - 32; )
                switch (d) {
                    case 58:
                        d = 96;
                        continue;
                    case 91:
                        d = 44;
                        break;
                    case 65:
                        d = 47;
                        continue;
                    case 46:
                        d = 153;
                    case 123:
                        d -= 58;
                    default:
                        e.push(String.fromCharCode(d))
                }
            return e
        }
        , 1158098855, function(d, e, f, h, l) {
            return e(f, h, l)
        }
        , 741093622, 724109048, function() {
            for (var d = 64, e = []; ++d - e.length - 32; )
                switch (d) {
                    case 46:
                        d = 95;
                    default:
                        e.push(String.fromCharCode(d));
                    case 94:
                    case 95:
                    case 96:
                        break;
                    case 123:
                        d -= 76;
                    case 92:
                    case 93:
                        continue;
                    case 58:
                        d = 44;
                    case 91:
                }
            return e
        }
        , -1594667861, 582182218, 641846685, 2066197477, 1456586726, -296500599, function(d, e) {
            for (d = (d % e.length + e.length) % e.length; d--; )
                e.unshift(e.pop())
        }
        , 897496929, -388646947, -1069260167, function(d, e) {
            0 != d.length && (e = (e % d.length + d.length) % d.length,
                d.splice(0, 1, d.splice(e, 1, d[0])[0]))
        }
        , 1048850636, -869977577, -1675143026, -1059879354, 1662117477, -320854097, function(d) {
            for (var e = d.length; e; )
                d.push(d.splice(--e, 1)[0])
        }
        , -357778468, -1137957893, 2076683195, null, "U04Ovyp", -1341527759, 1428426900, -1878045694, -777657370, function(d, e) {
            if (0 != d.length) {
                e = (e % d.length + d.length) % d.length;
                var f = d[0];
                d[0] = d[e];
                d[e] = f
            }
        }
        , 757483593, function() {
            for (var d = 64, e = []; ++d - e.length - 32; ) {
                switch (d) {
                    case 91:
                        d = 44;
                        continue;
                    case 123:
                        d = 65;
                        break;
                    case 65:
                        d -= 18;
                        continue;
                    case 58:
                        d = 96;
                        continue;
                    case 46:
                        d = 95
                }
                e.push(String.fromCharCode(d))
            }
            return e
        }
        , 885892884, 1844604684, 510590148, function(d, e, f, h, l, m, n, p) {
            return d(m, n, p)
        }
        , 857277025, function(d, e) {
            e = (e % d.length + d.length) % d.length;
            d.splice(-e).reverse().forEach(function(f) {
                d.unshift(f)
            })
        }
        , 1382415714, /\/,,,\);\[\[]{,\\/, 185409395, -1594667861, /\/,,,\);\[\[]{,\\/, ",53];c[54]=c;", 1998688167, null, -1969579696, -317220431, 1998905949, b, function(d, e) {
            d = (d % e.length + e.length) % e.length;
            e.splice(d, 1)
        }
        , b, 1372093048, -704241226, 996235723, -1894692344, -728315187, function() {
            for (var d = 64, e = []; ++d - e.length - 32; ) {
                switch (d) {
                    case 58:
                        d -= 14;
                    case 91:
                    case 92:
                    case 93:
                        continue;
                    case 123:
                        d = 47;
                    case 94:
                    case 95:
                    case 96:
                        continue;
                    case 46:
                        d = 95
                }
                e.push(String.fromCharCode(d))
            }
            return e
        }
        , -1750772371, 1939774070, function(d, e, f, h, l, m) {
            return e(h, l, m)
        }
    ];
    c[20] = c;
    c[52] = c;
    c[74] = c;
    try {
        try {
            6 <= c[18] && ((0,
                c[15])((0,
                c[37])(c[43], c[80]), c[-1526 - -99 * Math.pow(2, 4)], c[20], c[35]),
                c[37])(c[86], c[Math.pow(1, 1) % 107 - -51]),
            (-2 !== c[36] || (((0,
                c[53])(c[14], c[41], (0,
                c[81])()),
                (0,
                    c[88])(c[38], c[71]),
                c[50])((0,
                c[66])((0,
                c[19])(c[13], c[6]), c[88], c[18], c[65]), c[19], (0,
                c[40])(c[48], c[39]), c[65], c[10]),
                0)) && ((((0,
                c[88])(c[87], c[66 - Math.pow(7, 3) + 312]),
                c[83])(c[26], c[86]),
                c[41])((0,
                c[Math.pow(1, 4) % 357 + 30])(c[21], c[Math.pow(7, 3) + 33417 - 33728]), c[10], (0,
                c[1175 + Math.pow(8, 4) - 5207])(c[62]), c[59], c[72]),
                c[Number(new Date("1969-12-31T23:00:06.000-01:00")) / 1E3])(c[63], c[49])
        } catch (d) {
            (0,
                c[0])((0,
                c[23])(c[57]), c[10], c[52], c[85])
        } finally {
            -2 <= c[15] && ((0,
                c[25])(c[57]),
                c[58])(c[16], c[57]),
            7 > c[31] && (((0,
                c[23])(c[85]),
                c[45])(c[84], c[59], (0,
                c[17])()),
                []) || (0,
                c[0])((0,
                c[71])(c[27], c[9]), c[19], c[14], c[36]),
                c[46] < -224 * Math.pow(8, 2) - -14333 ? (0,
                    c[Math.pow(6, 3) - -47400 - 47611])(((0,
                    c[15])(c[75], c[38]),
                    (0,
                        c[15])(c[59], c[32]),
                    c[78])((0,
                    c[67])(c[51], c[30]), c[84], c[200 - 179 * Math.pow(1, 3)], c[6]), c[67], c[45], c[71]) : (((0,
                    c[78])((0,
                    c[11])(c[15]), c[11], c[73]),
                    (0,
                        c[46])(c[74], c[21]),
                    c[88])(c[16], c[15]),
                    c[59])(c[21], c[50]),
            6 >= c[6] && (((0,
                c[33])(c[72], c[0], (0,
                c[10])()),
                c[88])(c[41], c[0]),
                "NaN") || ((0,
                c[13])(c[51]),
                c[302 % Math.pow(3, 1) - -3])(c[68], c[60])
        }
        try {
            5 !== c[-107 * Math.pow(5, 3) - -13439] && (8 <= c[45] && (((((0,
                c[78])(c[74]),
                c[67])(c[73], c[43]),
                c[67])(c[51], c[7]),
                ((0,
                    c[11])(c[15]),
                    c[22])(c[38], c[89]),
                (0,
                    c[30])(c[38], c[40]),
                (0,
                    c[71])(c[87], c[69]),
                c[28])(((0,
                c[79])(c[87], c[Number(new Date("1970-01-01T08:45:20.000+08:45")) / 1E3]),
                c[22])(c[45], c[-1090 - Math.pow(4, 3) + 1220]), c[5], c[16], c[Math.pow(4, 1) - 3472 + 3540]) & (0,
                c[1])(c[25], c[74]),
                {}) || (0,
                c[52])(c[80], (0,
                c[80])(c[41], c[68], (0,
                c[48])()), (0,
                c[54])(c[69], c[21]), ((0,
                c[80])(c[36], c[69], (0,
                c[Math.pow(4, 5) + 108 - 1114])()),
                c[80])(c[41], c[68], (0,
                c[48])()), ((0,
                c[35])((0,
                c[46])(c[2], c[Math.pow(7, 1) + -24444 + 24516]), c[25], c[50], c[62]),
                c[3])((0,
                c[54])(c[8], c[38]), c[54], c[69], c[73]) & (0,
                c[7344 + Math.pow(2, 3) + -7317])((0,
                c[67])(c[47], c[68]), c[67], c[27], c[62]), c[41], c[2], (0,
                c[18])())),
                (0,
                    c[80])(c[41], c[40], c[11]),
                (0,
                    c[25])(c[89], c[40])
        } catch (d) {
            -9 != c[30] && ((0,
                c[80])(c[41], c[68], (0,
                c[48])()),
                1) || (0,
                c[67])(c[5], c[68]),
            6 != c[51] && (0,
                c[35])((0,
                c[29])(c[68], c[88]), c[54], c[68], c[87])
        }
        try {
            -1 != c[83] && (((0,
                c[54])(c[69], c[15]),
                c[54])(c[69], c[Math.pow(5, 2) - -10106 - 10050]),
                "null") || ((0,
                c[46])(c[68], c[82]),
                c[46])(c[69], c[28]),
            -7 == c[51] && (((0,
                c[80])(c[41], c[2], (0,
                c[18])()),
                c[3])((0,
                c[25])(c[61], c[2]), c[80], c[41], c[69], (0,
                c[18])()),
                "}") || (((0,
                c[25])(c[20], c[2]),
                c[80])(c[36], c[68], (0,
                c[78])()),
                c[25])(c[34], c[68]),
            -4 > c[75] && (0,
                c[25])(c[9], c[69])
        } catch (d) {
            (0,
                c[67])(c[86], c[40]) & (0,
                c[67])(c[43], c[68]),
                (0,
                    c[67])(c[22], c[Number(new Date("1969-12-31T14:01:08.000-10:00")) / 1E3])
        } finally {
            10 >= c[79] ? (0,
                c[46])(c[68], c[1]) : (0,
                c[67])(c[14], c[69])
        }
    } catch (d) {
        return "enhanced_except_spkBzeb-_w8_" + a
    }
    return b.join("")
}

export {
    decode
}