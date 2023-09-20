"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = void 0;
const gma = /^[\w.]*$/;
const g = {};
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
            c: "WEB",
            range: "0-199999999"
        }
    };
    c && (c = Sya(decodeURIComponent(c)),
        a.j[b] = encodeURIComponent(c));
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
    return buildUrl(url.B, url.j);
}
exports.decode = decode;
function buildUrl(url, params) {
    const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    return url + '?' + queryString;
}
