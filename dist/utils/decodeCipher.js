"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = void 0;
const gma = /^[\w.]*$/;
function nA(a) {
    "?" == a.charAt(0) && (a = a.substr(1));
    return lA(a, "&");
}
function cma(a) {
    return a && a.match(gma) ? a : Ae(a);
}
function Ae(a) {
    return decodeURIComponent(a.replace(/\+/g, " "));
}
function lA(a, b) {
    b = a.split(b);
    let c, d, e;
    for (c = {}, d = 0, e = b.length; d < e; d++) {
        const f = b[d].split("=");
        if (1 == f.length && f[0] || 2 == f.length) {
            try {
                const h = cma(f[0] || "");
                const l = cma(f[1] || "");
                if (h in c)
                    c[h] = [c[h], l];
                else
                    c[h] = l;
            }
            catch (q) {
                throw q;
            }
        }
    }
    return c;
}
function nJ(a) {
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
    return a;
}
function pM(a, b, c) {
    b = void 0 === b ? "" : b;
    c = void 0 === c ? "" : c;
    a = {
        B: a,
        j: {
            alr: "yes",
            c: "WEB_REMIX"
        }
    };
    if (c) {
        c = Sya(decodeURIComponent(c));
        a.j[b] = encodeURIComponent(c);
    }
    return a;
}
function Sya(a) {
    a = a.split("");
    XI.S1(a, 1);
    XI.Qt(a);
    XI.S1(a, 1);
    XI.Qt(a);
    XI.VO(a, 3);
    XI.Qt(a);
    XI.S1(a, 3);
    XI.Qt(a);
    XI.S1(a, 3);
    return a.join("");
}
const XI = {
    Qt(a) {
        a.reverse();
    },
    VO(a, b) {
        const c = a[0];
        a[0] = a[b % a.length];
        a[b % a.length] = c;
    },
    S1(a, b) {
        a.splice(0, b);
    }
};
function decode(format) {
    const m = nJ(format);
    const url = pM(m.Dy, m.cB, m.s);
    // extract every params of url and add params to object
    const urlSplit = url.B.split('?');
    url.B = urlSplit[0];
    Object.assign(url.j, lA(urlSplit[1], '&'));
    url.j.n = Ula(url.j.n);
    return buildUrl(url.B, url.j);
}
exports.decode = decode;
function buildUrl(url, params) {
    const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    return url + '?' + queryString;
}
function Ula(a) {
    var b = a.split(""), c = [-572808053, 1570750806, -759762889, 425644849, function (d, e, f, h, l) {
            return e(f, h, l);
        },
        1377428663, function (d, e, f) {
            var h = e.length;
            f.forEach(function (l, m, n) {
                this.push(n[m] = e[(e.indexOf(l) - e.indexOf(this[m]) + m + h--) % e.length]);
            }, d.split(""));
        },
        "continue", -654089369, 186576200, -1552778541, -542086212, -1305246054, -755410476, 735227564, -1142141139, -1789747499, 604000267, 90801446, function (d) {
            for (var e = d.length; e;)
                d.push(d.splice(--e, 1)[0]);
        },
        -665627445, -1531069327, -572808053, 2001516034, function (d) {
            d.reverse();
        },
        562338924, 921861718, function (d, e) {
            0 != e.length && (d = (d % e.length + e.length) % e.length,
                e.splice(0, 1, e.splice(d, 1, e[0])[0]));
        },
        function (d, e) {
            d = (d % e.length + e.length) % e.length;
            e.splice(d, 1);
        },
        function (d, e, f, h, l, m) {
            return e(h, l, m);
        },
        function () {
            for (var d = 64, e = []; ++d - e.length - 32;)
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
                        e.push(String.fromCharCode(d));
                }
            return e;
        },
        628377896, 351903272, 1847165907, -876466524, function (d, e) {
            if (0 != d.length) {
                e = (e % d.length + d.length) % d.length;
                var f = d[0];
                d[0] = d[e];
                d[e] = f;
            }
        },
        1568988749, function (d, e, f, h, l, m, n, p, q) {
            return f(h, l, m, n, p, q);
        },
        1264313961, b, 1437243201, 228369387, 158837733, b, -1429679028, 13147348, -461828838, -1142141139, 1222557174, -811642466, -1762897331, -1601424094, ")},,", -1694052193, 211760313, function (d, e) {
            e = (e % d.length + d.length) % d.length;
            d.splice(-e).reverse().forEach(function (f) {
                d.unshift(f);
            });
        },
        580546790, 1980808752, 1407991798, 1331836714, 500412256, function (d, e) {
            0 != e.length && (d = (d % e.length + e.length) % e.length,
                e.splice(0, 1, e.splice(d, 1, e[0])[0]));
        },
        null, function () {
            for (var d = 64, e = []; ++d - e.length - 32;) {
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
                        d = 95;
                }
                e.push(String.fromCharCode(d));
            }
            return e;
        },
        1886088960, function () {
            for (var d = 64, e = []; ++d - e.length - 32;)
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
            return e;
        },
        344293134, -1443629509, 1388800659, null, 604335048, b, function (d, e) {
            for (e = (e % d.length + d.length) % d.length; e--;)
                d.unshift(d.pop());
        },
        null, 2118218606, -1413427122, 110197633, function () {
            for (var d = 64, e = []; ++d - e.length - 32;) {
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
                        d = 95;
                }
                e.push(String.fromCharCode(d));
            }
            return e;
        }];
    c[62] = c;
    c[69] = c;
    c[73] = c;
    try {
        try {
            (-8 <= c[57] || ((0,
                c[28])(c[49], c[Number(new Date("1970-01-01T11:16:11.000+11:15")) / 1E3]),
                (0,
                    c[27])(c[41], c[69]),
                0)) && (0,
                c[4])((0,
                c[28])(c[34], c[39]), c[24], c[73]);
        }
        catch (d) {
            (0,
                c[42])(c[15], c[60]);
        }
        try {
            -2 <= c[59] && (8 >= c[74] && ((((0,
                c[49])(c[Number(new Date("1969-12-31T18:45:57.000-05:15")) / 1E3], c[34]),
                c[71])(c[70], (0,
                c[12])(), c[34]),
                (0,
                    c[16])(c[21], c[34]),
                c[42])(c[34], c[74]),
                -5) || ((0,
                c[73])((0,
                c[73])((0,
                c[71])(c[70], (0,
                c[12])(), c[38]), c[50], c[68], c[6]), c[16], c[52], c[15]),
                c[50])(c[59], c[8])),
                -2 <= c[1] && (0,
                    c[73])((0,
                    c[42])(c[6], c[Number(new Date("1969-12-31T19:15:23.000-04:45")) / 1E3]), c[42], c[6], c[35]),
                0 === c[56] ? (((0,
                    c[49])(c[3], c[Math.pow(7, 5) - 47672 - -30880]),
                    c[71])(c[70], (0,
                    c[47])(), c[34]),
                    (0,
                        c[58])(c[4]),
                    c[71])(c[70], (0,
                    c[12])(), c[38]) : (0,
                    c[48])((0,
                    c[42])(c[0], c[31]), c[5], (0,
                    c[22])(c[15], c[56]), c[41], c[72]) | (0,
                    c[6])(c[66], c[74]),
                9 !== c[53] && (c[29] >= Number(new Date("1969-12-31T16:29:57.000-07:30")) / 1E3 ? ((0,
                    c[39])(c[27], c[24]),
                    c[12])(c[72], c[65]) : ((0,
                    c[6])(c[16], c[Number(new Date("1969-12-31T17:30:00.000-06:30")) / 1E3]),
                    c[6])(c[35], c[27])),
                (-3 < c[42] || (((0,
                    c[72])(c[71], (0,
                    c[15])(), c[39]),
                    c[72])(c[71], (0,
                    c[13])(), c[Math.pow(1, 2) % 113 - -34]),
                    "")) && (0,
                    c[74])((0,
                    c[23])(c[5], c[18]), c[39], c[15]),
                c[55] > Number(new Date("1970-01-01T01:29:57.000+01:30")) / 1E3 && (4 == c[Number(new Date("1970-01-01T08:00:44.000+08:00")) / 1E3] || ((0,
                    c[Math.pow(1, 2) + -3404 + 3457])((0,
                    c[39])(c[-213 * Math.pow(1, 4) + 287]), c[54], c[58], c[69]),
                    0)) && (0,
                    c[23])((0,
                    c[25])(c[26], (0,
                    c[66])(), c[62]), c[13], c[Math.pow(4, 3) + 12 + -64], c[7]),
                -4 != c[40] && (0,
                    c[48])((0,
                    c[74])(c[60], c[8]), c[5], (((0,
                    c[7])((0,
                    c[67])(c[41]), (0,
                    c[52])((0,
                    c[Number(new Date("1969-12-31T20:00:05.000-04:00")) / 1E3])(c[41], c[59]), c[75], c[29], c[11]), c[0], (0,
                    c[25])(c[13], c[60]), c[42], c[11], c[18]),
                    (0,
                        c[72])((0,
                        c[77])(c[35], c[65]), c[77], c[7], c[0]),
                    c[61])(c[3]),
                    c[19])(c[35], c[55]), c[7], c[17]),
                -1 !== c[22] ? ((0,
                    c[70])(c[68], c[3]),
                    (0,
                        c[72])((0,
                        c[25])(c[2], c[37]), c[19], c[7], c[22]),
                    c[-50140 - -98 * Math.pow(8, 3)])(c[37], c[39]) : (((0,
                    c[35])(c[Number(new Date("1970-01-01T09:00:41.000+09:00")) / 1E3], c[76]),
                    c[35])(c[-61 * Math.pow(4, 5) - -62503], c[14]),
                    c[24])(c[71]) !== (0,
                    c[72])(c[-246 * Math.pow(3, 1) - -781], c[32]),
                8 <= c[1] && (-6 <= c[9] || ((0,
                    c[30])((0,
                    c[55])(c[62], c[8]), c[19], c[71]),
                    0)) && (0,
                    c[30])((0,
                    c[55])(c[62], c[57]), c[55], c[73], c[Number(new Date("1969-12-31T21:00:05.000-03:00")) / 1E3]),
                9 === c[31] ? ((0,
                    c[71])(c[72], (0,
                    c[34])(), c[Math.pow(2, 5) + -10112 - -10110]),
                    c[15])(c[51], c[26]) ^ ((0,
                    c[42])(c[58], c[32]),
                    c[42])(c[Math.pow(7, 1) - 58 + 81], c[3]) : (((0,
                    c[42])(c[28], c[18]),
                    c[12])(c[7 + Math.pow(2, 5)], c[47]),
                    (0,
                        c[38])(c[21], c[39]),
                    c[12])(c[54], c[46]);
        }
        catch (d) {
            (0,
                c[7])((0,
                c[74])(c[20]), c[74], c[Math.pow(6, 1) + Number(new Date("1970-01-01T09:48:46.000+09:45")) / 1E3 % 1 + 44]),
                (0,
                    c[6])((0,
                    c[1])(c[39]), c[61], (0,
                    c[5])(c[45], c[16]), c[62], (0,
                    c[13])(), c[48]),
                ((((0,
                    c[61])(c[62], (0,
                    c[59])(), c[16]),
                    c[5])(c[10], c[20]),
                    c[74])(c[50]),
                    (0,
                        c[61])(c[62], (0,
                        c[59])(), c[16]),
                    c[61])(c[62], (0,
                    c[59])(), c[20]);
        }
    }
    catch (d) {
        return "enhanced_except_jZkB8ub-_w8_" + a;
    }
    return b.join("");
}
