! function (e) {
    "use strict";
    var t = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? !0 : !1,
        i = 0,
        n = e(document),
        r = t && e.mobile ? "vmouseup.slider" : "mouseup.slider",
        o = t && e.mobile ? "vmousedown.slider" : "mousedown.slider",
        s = t && e.mobile ? "vmousemove.slider" : "mousemove.slider",
        a = function (t) {
            e(".container._" + t).off(r + t).off(o + t).remove()
        },
        u = function (u, l) {
            var u = e(u),
                d = 0,
                f = 0,
                c = l.maxvalue ? l.maxvalue : 100,
                v = "number" == typeof l.width ? l.width : u.outerWidth(),
                h = l.interval && c % l.interval == 0 ? l.interval : !1,
                g = l.progress ? '<div class="progress" style="position: absolute; top: 0; left: 0;"></div>' : "";
            if (l.destroy) return a(i), !1;
            u.each(function () {
                i = ++i, e(this).addClass("container _" + i).css({
                    width: v,
                    "min-height": "1px",
                    position: "relative",
                    cursor: "pointer"
                }).html('<div class="dragger" style="position: absolute; min-width: 10px; min-height: 10px; outline: none; cursor: pointer; text-align: center; z-index: 1;"><div>Hello</div></div>' + g)
            });
            var m = e(".container._" + i),
                p = e(".container._" + i + " .dragger"),
                x = l.progress ? e(".container._" + i + " .progress") : "",
                w = m.outerHeight(),
                b = l.output ? e(l.output) : p,
                M = l.firstvalue ? l.firstvalue : 0;
            b.text(M);
            var y = p.outerWidth(),
                C = p.outerHeight(),
                _ = Math.ceil((C - w) / 2);
            p.css({
                top: -_ + "px"
            }), g && x.css({
                height: w + "px"
            });
            var S = function (e, t, i) {
                var n = e.pageX - (i + t),
                    r = Math.round(n / (v - y) * c);
                if (!(r > c + 20 || -20 > r)) {
                    var o = Math.min(Math.max(parseInt(r), 0), c),
                        s = Math.min(Math.max(parseInt(n), 0), v - y),
                        a = Math.abs(f - o);
                    if (a > 0) {
                        if (f = o, h) {
                            if (o % h != 0) return o = d, !1;
                            d = o
                        }
                        b.text(o), o || b.text(M)
                    }
                    p.css({
                        left: s + "px"
                    }), g && x.css({
                        width: s + y / 2 + "px"
                    })
                }
            };
            m.on(o + i, function (e) {
                var o = m.offset().left;
                if (t) var a = y / 2;
                else var a = p.is(e.target) ? e.offsetX + 1 : y / 2;
                p.addClass("dragging"), S(e, a, o), n.delegate(m, s + i, function (e) {
                    return S(e, a, o), n.on("mousewheel.slider" + i, function (e) {
                        e.preventDefault()
                    }), !1
                }).on(r + i, function () {
                    p.hasClass("dragging") && (n.off(s + i), p.removeClass("dragging")), n.unbind("mousewheel.slider" + i)
                })
            }).on(r + i, function () {
                n.off(s + i), p.removeClass("dragging")
            })
        };
    e.fn.createSlide = function (t, i) {
        var n = e.extend({}, e.fn.createSlide.defaults, t, i);
        return this.each(function () {
            new u(e(this), n)
        })
    }, e.fn.createSlide.defaults = {
        width: !1,
        output: !1,
        firstvalue: !1,
        maxvalue: !1,
        interval: !1,
        progress: !1,
        destroy: !1
    }, e(function () {
        e("div[data-slider-box]").createSlide()
    })
}(jQuery);