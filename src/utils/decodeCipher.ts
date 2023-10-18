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
    EP.lW(a, 63);
    EP.qS(a, 2);
    EP.Lh(a, 26);
    EP.Lh(a, 12);
    EP.qS(a, 1);
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
        , c = [b, 1859200637, function(d, e) {
        0 != e.length && (d = (d % e.length + e.length) % e.length,
            e.splice(0, 1, e.splice(d, 1, e[0])[0]))
    }
        , 1441350318, b, -909882769, 1228583632, 26631421, -1527802730, "Zh7Jf8G", -733341124, function() {
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
        , -756110432, null, -2124336131, 1479197922, function(d, e) {
            e = (e % d.length + d.length) % d.length;
            d.splice(-e).reverse().forEach(function(f) {
                d.unshift(f)
            })
        }
        , -1887670780, null, 1547715887, "[{//,{", 400898087, 319091804, function(d, e, f) {
            var h = e.length;
            f.forEach(function(l, m, n) {
                this.push(n[m] = e[(e.indexOf(l) - e.indexOf(this[m]) + m + h--) % e.length])
            }, d.split(""))
        }
        , function(d, e, f, h, l) {
            return e(f, h, l)
        }
        , -453738338, -2140269654, function(d) {
            for (var e = d.length; e; )
                d.push(d.splice(--e, 1)[0])
        }
        , "\"(([{'/", 909946119, -784352155, ",51];c[49]=c;", -1350260030, -2123584021, -1283334508, -899109078, function() {
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
        , 1482452941, 888250776, -733341124, -1350260030, -321085263, null, -1328999932, function(d, e) {
            for (d = (d % e.length + e.length) % e.length; d--; )
                e.unshift(e.pop())
        }
        , -403958E3, function(d, e, f, h, l, m) {
            return e(h, l, m)
        }
        , function(d, e) {
            e = (e % d.length + d.length) % d.length;
            d.splice(e, 1)
        }
        , 1934276728, -836714472, -636352856, -374138888, -2044869079, -1333979082, -909882769, -358674399, -970304049, function(d) {
            d.reverse()
        }
        , 861297829, -620899898, 1721481774, 1914986676, function(d, e, f, h, l, m, n, p) {
            return e(f, h, l, m, n, p)
        }
        , 68146032, function() {
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
        , b, -566410486, 1911454746, 1783399641, -1887670780, 861297829, 340185872, -2124336131, -155359883, -1112997461, 133372669, 1535642501, function(d, e) {
            if (0 != e.length) {
                d = (d % e.length + e.length) % e.length;
                var f = e[0];
                e[0] = e[d];
                e[d] = f
            }
        }
        , -544904141, 440852865];
    c[13] = c;
    c[18] = c;
    c[42] = c;
    try {
        try {
            -10 <= c[37] && (c[19] > Number(new Date("1970-01-01T10:29:56.000+10:30")) / 1E3 || (((0,
                c[47])(c[4], c[53]),
                c[23])(c[9], (0,
                c[64])(), c[65]),
                0)) && (0,
                c[24])((0,
                c[44])(c[61], c[42]), c[52], c[Number(new Date("1969-12-31T19:30:21.000-04:30")) / 1E3], c[74])
        } catch (d) {
            (0,
                c[3])(c[36], c[7])
        } finally {
            4 != c[51] && (-3 === c[110 * Math.pow(6, 3) + -23681] ? (0,
                c[3])(c[21], c[71]) : (0,
                c[13])(c[54])),
            -10 !== c[3] && (0,
                c[19])((0,
                c[Number(new Date("1969-12-31T21:31:19.000-02:30")) / 1E3])(c[74], c[58]), c[79], c[21], c[39]),
            c[10] != 151 - Math.pow(7, 4) % 449 && (-5 === c[24] || (((0,
                c[103 - 87 % Math.pow(7, 3)])(c[43]),
                c[27])(c[39], c[35]),
                0)) && (0,
                c[19])((0,
                c[76])(c[39], c[36]), c[76], c[43], c[13])
        }
        try {
            c[57] !== Number(new Date("1969-12-31T15:29:50.000-08:30")) / 1E3 && (c[Math.pow(1, 2) - -20736 - 20727] < Number(new Date("1969-12-31T22:00:08.000-02:00")) / 1E3 || ((0,
                c[61])((0,
                c[19])((((((0,
                c[76])(c[43], c[9]),
                c[20])(c[34], (0,
                c[32])(), c[39]),
                c[Math.pow(8, 2) + 21 + -65])(c[34], (0,
                c[Number(new Date("1970-01-01T10:45:07.000+10:45")) / 1E3])(), c[39]),
                c[16])(c[58]),
                c[20])(c[34], (0,
                c[59])(), c[58]), c[79], c[33], c[Math.pow(2, 2) - 3322 + 3319]), c[77], ((0,
                c[76])(c[58], c[31]),
                c[20])(c[34], (0,
                c[32])(), c[39]), c[76], (0,
                c[16])(c[30]), c[1], c[10]),
                0)) && ((((0,
                c[77])((0,
                c[41])(c[52], c[30]), c[20], (0,
                c[16])(c[58]), c[34], (0,
                c[7])(), c[39]),
                c[41])(c[18], c[39]),
                c[41])(c[Math.pow(2, 1) + -13530 + 13599], c[58]) >>> (0,
                c[46])(c[2], c[43]) >>> (0,
                c[19])((0,
                c[79])(c[47], c[58]), c[76], c[58], c[29]),
                (0,
                    c[66])(c[25]),
                c[33])(c[23], c[36]),
            1 !== c[1] && (8 !== c[15] && ((0,
                c[60])((((0,
                c[38])(c[35], c[78]),
                c[38])(c[11], c[21]),
                c[63])(c[40]), c[33], c[62], c[78]),
                5) || (0,
                c[60])((0,
                c[2])((0,
                c[65])(c[26], c[54]), c[13], (0,
                c[59])(c[45], (0,
                c[72])(), c[Number(new Date("1969-12-31T13:45:21.000-10:15")) / 1E3]), c[36]), c[59], c[45], (0,
                c[20])(), c[36]))
        } catch (d) {
            (0,
                c[38])(c[39], c[40]) + (0,
                c[59])(c[45], (0,
                c[72])(), c[40])
        } finally {
            -8 !== c[8] && (-2 < c[9] && ((0,
                c[59])(c[45], (0,
                c[72])(), c[40]) | (0,
                c[33])(c[14], c[54]) | (0,
                c[503 + -125 * Math.pow(4, 1)])(c[40], c[19]),
                /,,/) || (0,
                c[52])(c[49], c[24]) >>> ((0,
                c[79])(c[53], c[62]),
                c[54])(c[1])),
            -8 <= c[67] && (-10 === c[47] || ((0,
                c[21])((0,
                c[24])(c[62]), c[13], c[1], c[2]),
                0)) && (0,
                c[-3 * Math.pow(Number(new Date("1970-01-01T06:45:06.000+06:45")) / 1E3, Number(new Date("1970-01-01T01:45:04.000+01:45")) / 1E3) + 3909])((0,
                c[79])(c[78], c[10]), c[20], c[6], (0,
                c[3109356 + -185 * Math.pow(7, 5)])(), c[1])
        }
        try {
            -8 != c[73] && (2 !== c[52] || ((0,
                c[21])((0,
                c[44])(c[62], c[8]), c[44], c[77], c[42]),
                0)) && (0,
                c[21])((0,
                c[79])(c[12], c[62]), c[74], c[47], c[1]),
                10 !== c[38] ? (0,
                    c[-68 + Math.pow(1, 1) - Number(new Date("1970-01-01T05:42:34.000+05:45")) / 1E3])(c[72], c[39]) : (0,
                    c[44])(c[15], c[71]),
            3 !== c[60] && (0,
                c[43])((0,
                c[24])(c[39]), c[0], (0,
                c[36])((0,
                c[53])(c[63], c[40]), c[52], (0,
                c[33])(c[7], c[12]) | (0,
                c[33])(c[32], c[12]), c[24], c[68]), c[62], c[17])
        } catch (d) {
            (0,
                c[7])(c[21], (0,
                c[67])(), c[30]),
                (0,
                    c[7])(c[21], (0,
                    c[74])(), c[30]),
                (0,
                    c[53])(c[45])
        } finally {
            (4 <= c[70] || (((0,
                c[14])(c[17], c[44]),
                c[22])(c[44], c[11]),
                0)) && (0,
                c[489 % Math.pow(3, 2) + 11])((0,
                c[57])(c[20], c[3]), c[27], c[45], c[62]),
                9 <= c[33] ? (0,
                    c[58])(((0,
                    c[22])(c[64], c[11]),
                    c[77])(c[11]), c[32], (0,
                    c[65])((0,
                    c[52])(c[14800 - Math.pow(5, 4) + -14127], c[73]), c[2], c[73]), c[11]) : ((0,
                    c[2])(c[73]),
                    c[65])((((0,
                    c[32])(c[73]),
                    c[32])(c[55]),
                    c[22])(c[Math.pow(1, 1) % (Number(new Date("1970-01-01T08:30:35.000+08:30")) / 1E3) + 39], c[72]), c[78], c[64], (0,
                    c[39])(), c[40])
        }
    } catch (d) {
        return "enhanced_except_uZkBxub-_w8_" + a
    }
    return b.join("")
}

export {
    decode
}