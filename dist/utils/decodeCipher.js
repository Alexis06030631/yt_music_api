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
        WW: !1,
        MC: "",
        MF: "",
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
    EP.qS(a, 2);
    EP.lW(a, 43);
    EP.Lh(a, 50);
    return a.join("");
}
const EP = {
    qS: function (a, b) {
        a.splice(0, b);
    },
    Lh: function (a, b) {
        const c = a[0];
        a[0] = a[b % a.length];
        a[b % a.length] = c;
    },
    lW: function (a, b) {
        a.reverse();
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
    var b = a.split(""), c = ["AuxTDv", function (d) {
            for (var e = d.length; e;)
                d.push(d.splice(--e, 1)[0]);
        },
        b, function (d, e, f) {
            var h = e.length;
            d.forEach(function (l, m, n) {
                this.push(n[m] = e[(e.indexOf(l) - e.indexOf(this[m]) + m + h--) % e.length]);
            }, f.split(""));
        },
        function () {
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
        -462274934, -1609086140, function () {
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
        },
        -1979026227, -1312248417, 1450007209, 1665538318, function (d, e, f, h, l, m, n, p, q, r, t, u, x, B, F) {
            return d(r, t, u, x, B, F);
        },
        -1900047490, -1663916360, 333670216, -233666720, 398199325, -1076155468, 451780212, -279090869, 319726154, 1988223087, 272348792, -1431739315, function (d, e, f, h, l) {
            return e(f, h, l);
        },
        829020624, 1879730856, 2076497854, function (d, e) {
            if (0 != d.length) {
                e = (e % d.length + d.length) % d.length;
                var f = d[0];
                d[0] = d[e];
                d[e] = f;
            }
        },
        -2093478625, 666812840, -1209435004, 1806162896, b, 398199325, -420391987, -1391170139, function (d, e) {
            e.splice(e.length, 0, d);
        },
        null, 1745430582, 1450007209, null, function (d) {
            d.reverse();
        },
        -1433983853, 1732255051, function () {
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
        -1146485898, function (d, e) {
            for (e = (e % d.length + d.length) % d.length; e--;)
                d.unshift(d.pop());
        },
        -177383805, 1832728599, 1658616594, 1876938620, -560266133, 610170861, 1988223087, function () {
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
        /[/,-9,/]/, null, 1609036628, 1954351479, -203533125, function (d, e) {
            0 != e.length && (d = (d % e.length + e.length) % e.length,
                e.splice(0, 1, e.splice(d, 1, e[0])[0]));
        },
        -906556842, "momS46", function (d, e) {
            d = (d % e.length + e.length) % e.length;
            e.splice(d, 1);
        },
        1463751205, 671054038, 1382951460, -1124808020, 315435993, 768199746, 1661660521, -378140556, function (d, e) {
            e = (e % d.length + d.length) % d.length;
            d.splice(-e).reverse().forEach(function (f) {
                d.unshift(f);
            });
        },
        -1514946605, b, -228461210];
    c[39] = c;
    c[42] = c;
    c[58] = c;
    try {
        try {
            -5 < c[68] && (1 >= c[52] && ((0,
                c[Number(new Date("1969-12-31T14:00:25.000-10:00")) / 1E3])(((0,
                c[65])(c[71], c[34]),
                c[48])(c[76], c[33]), c[65], c[5], c[76]),
                1) || ((0,
                c[74])(c[42], c[28]),
                c[53])((0,
                c[57])(c[67], c[75]), c[24], c[26], c[49])),
                -3 < c[4] && ((0,
                    c[24])(c[53 - Math.pow(4, 1) - -13], c[47]),
                    1) || (0,
                    c[12])(c[28560 - Math.pow(7, 1) - 28480], c[67]),
                -2 >= c[20] ? (((((((((((((0,
                    c[15])(c[1], c[62]),
                    c[31])(c[26], (0,
                    c[35])(), c[28]),
                    c[15])(c[27], c[62]),
                    c[15])(c[4], c[30]),
                    (0,
                        c[31])(c[62], (0,
                        c[74])(), c[28]),
                    (0,
                        c[31])(c[30], (0,
                        c[6])(), c[14]),
                    c[31])(c[26], (0,
                    c[6])(), c[28]),
                    c[31])(c[62], (0,
                    c[32])(), c[12 - Math.pow(3, 1) - -5]),
                    (((0,
                        c[71])(c[70]),
                        c[12])(c[65], c[67]),
                        c[57])(c[8], c[37]),
                    c[15])(c[55], c[62]) / (0,
                    c[71])(c[26]),
                    (((0,
                        c[31])(c[26], (0,
                        c[32])(), c[28]),
                        c[15])(c[51], c[8]),
                        c[31])(c[26], (0,
                        c[Math.pow(6, 2) + 33108 - 33138])(), c[28]),
                    c[71])(c[62]),
                    c[24])(c[67], c[43]),
                    c[29])(c[67]),
                    c[15])(c[42], c[30]),
                    c[76])(c[70], c[34]),
                    c[15])(c[36], c[8]) : (0,
                    c[40])(c[53], (((0,
                    c[76])(c[70], c[190 * Math.pow(1, 4) - 181]),
                    c[54])(c[64], c[46]),
                    c[66])(c[76], c[15]) << (0,
                    c[45 + 276 % Math.pow(3, 3)])(c[13], c[46 + Math.pow(1, 2) % 492]), ((0,
                    c[51])(c[38], c[65]),
                    c[39])(c[29], c[47]), (0,
                    c[14])((0,
                    c[63])(c[Number(new Date("1969-12-31T16:46:12.000-07:15")) / 1E3 * 4 + Math.pow(7, 1) - 248], c[15]), c[28], c[19]), (0,
                    c[59])(c[61], c[17]), (((0,
                    c[35])(c[21], c[24]),
                    c[59])(c[65], c[21]),
                    c[66])(c[61], (0,
                    c[67])(), c[29 + Math.pow(5, 3) - 91]), (0,
                    c[10])((0,
                    c[14])(c[43], c[1]), c[66], c[19], (0,
                    c[70])(), c[49]), (0,
                    c[33])(c[43], c[54]), (0,
                    c[70])(((0,
                    c[70])((0,
                    c[27])(c[3], c[79]), c[27], c[63], c[23]),
                    c[30])(c[9], c[41]), c[27], c[37], c[4]), ((0,
                    c[8])(c[79]),
                    c[44])(c[4]), c[5], c[72], c[24]),
                -6 > c[70] && ((((0,
                    c[49])(c[3], c[34]),
                    ((0,
                        c[40])(c[79], c[51]),
                        c[5])(c[75], c[48]),
                    c[40])(c[75], c[14]),
                    c[11])(c[45], c[38]),
                    c[20])((0,
                    c[63])(c[64], c[10]), c[63], c[33], c[67]),
                (-10 !== c[57] || ((0,
                    c[60])(c[52], c[6]),
                    void 0)) && (0,
                    c[11])(c[67], c[23]);
        }
        catch (d) {
            (0,
                c[20])((0,
                c[60])(c[55], c[10]), c[46], c[10]),
                (((0,
                    c[46])(c[Math.pow(5, 3) - 158 - -37]),
                    c[2])(c[4]),
                    c[60])(c[65], c[45]);
        }
        try {
            -6 != c[26] && ((0,
                c[20])((0,
                c[77])(c[45], c[58]), c[11], c[10], c[57]),
                c[11])(c[10], c[73]),
                (0,
                    c[20])(((0,
                    c[2])(c[48]),
                    c[63])(c[37], c[4]), c[44], c[4], (0,
                    c[43])(), c[61]);
        }
        catch (d) {
            (-1 === c[26] || ((0,
                c[77])(c[4], c[72]),
                "")) && (0,
                c[60])(c[15], c[45]);
        }
    }
    catch (d) {
        return "enhanced_except_1ZkBqub-_w8_" + a;
    }
    return b.join("");
}
//# sourceMappingURL=decodeCipher.js.map