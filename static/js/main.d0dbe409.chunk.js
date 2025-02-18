(window["webpackJsonppwa-genicon"] =
  window["webpackJsonppwa-genicon"] || []).push([
  [0],
  {
    100: function (e, a, t) {
      e.exports = t(169);
    },
    106: function (e, a, t) {},
    107: function (e, a, t) {},
    169: function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(1),
        i = t.n(n),
        o = t(4),
        l = t.n(o),
        c = (t(105), t(106), t(87)),
        r = t(88),
        s = t(97),
        A = t(89),
        m = t(98),
        E = (t(107), t(174)),
        u = t(171),
        d = t(175),
        g = t(172),
        h = t(173),
        p = t(67),
        C = t.n(p),
        f = E.a.Group,
        v = u.a.Option,
        Q = (function (e) {
          function a(e) {
            var t;
            return (
              Object(c.a)(this, a),
              ((t = Object(s.a)(this, Object(A.a)(a).call(this, e))).state = {
                sizeOptions: [
                  { label: "128x128", value: "128" },
                  { label: "144x144", value: "144" },
                  { label: "192x192", value: "192" },
                  { label: "256x256", value: "256" },
                  { label: "512x512", value: "512" },
                ],
                size: [],
                downList: [],
                imgData: null,
                upSize: "",
                favDisable: !0,
                favSize: "32",
                downFav: [],
              }),
              t
            );
          }
          return (
            Object(m.a)(a, e),
            Object(r.a)(a, [
              {
                key: "handleFileFieldChange",
                value: function (e) {
                  var a = e.target.files[0],
                    t = new FormData();
                  if (
                    (t.append("img", a),
                    this.setState({ imgData: t }),
                    this.sizeImg)
                  ) {
                    this.sizeImg.src = URL.createObjectURL(a);
                    var n = this;
                    this.sizeImg.onload = function () {
                      n.setState({ upSize: this.width + " x " + this.height });
                    };
                  }
                },
              },
              {
                key: "handleCheckboxSizeClick",
                value: function (e) {
                  this.setState({ size: e });
                },
              },
              {
                key: "handleBtnGenClick",
                value: function () {
                  var e = this,
                    a = this.state,
                    t = a.imgData,
                    n = a.size,
                    i = a.upSize,
                    o = a.favDisable,
                    l = a.favSize;
                  return t instanceof FormData && t.get("img")
                    ? i && i.split(" x ")[0] != i.split(" x ")[1]
                      ? d.a.error(
                          "\u9009\u62e9\u7684\u56fe\u7247\u7684\u5206\u8fa8\u7387\u5bbd\u3001\u9ad8\u4e0d\u4e00\u81f4"
                        )
                      : o && !n.length
                      ? d.a.error("\u8fd8\u6ca1\u9009\u62e9\u5c3a\u5bf8")
                      : (d.a.loading("\u5f00\u59cb\u751f\u6210", 1.5),
                        void this.setState(
                          {
                            downList: n.map(function (e) {
                              return { size: e, loading: !0, url: "" };
                            }),
                            downFav: o
                              ? []
                              : [{ size: l, loading: !0, url: "" }],
                          },
                          function () {
                            n.map(function (a, n) {
                              fetch(
                                "https://apis.leping.fun/gen-image/?size=" + a,
                                { method: "POST", body: t }
                              )
                                .then(function (e) {
                                  return e.clone().blob();
                                })
                                .then(function (a) {
                                  var t = URL.createObjectURL(a),
                                    i = e.state.downList;
                                  (i[n].loading = !1),
                                    (i[n].url = t),
                                    e.setState({ downList: i });
                                });
                            }),
                              e.state.downFav.map(function (a, n) {
                                fetch(
                                  "https://apis.leping.fun/gen-image/?type=ico&size=" +
                                    a.size,
                                  { method: "POST", body: t }
                                )
                                  .then(function (e) {
                                    return e.clone().blob();
                                  })
                                  .then(function (a) {
                                    var t = URL.createObjectURL(a),
                                      n = e.state.downFav;
                                    (n[0].loading = !1),
                                      (n[0].url = t),
                                      e.setState({ downFav: n });
                                  });
                              });
                          }
                        ))
                    : d.a.error("\u8fd8\u6ca1\u4e0a\u4f20\u56fe\u7247");
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    a = this.state,
                    t = a.sizeOptions,
                    n = a.imgData,
                    o = a.upSize,
                    l = a.downList,
                    c = a.favDisable,
                    r = a.favSize,
                    s = a.downFav;
                  return i.a.createElement(
                    "div",
                    { className: "App" },
                    i.a.createElement(
                      "div",
                      { className: "App-header" },
                      "Manifest \u56fe\u6807\u751f\u6210\u5de5\u5177"
                    ),
                    i.a.createElement(
                      "div",
                      { className: "App-box" },
                      i.a.createElement(
                        "div",
                        {
                          style: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          },
                        },
                        i.a.createElement(
                          g.a,
                          {
                            placement: "rightTop",
                            title:
                              "\u8bf7\u4e0a\u4f20 .png \u683c\u5f0f\u7684\u56fe\u7247",
                          },
                          i.a.createElement(
                            h.a,
                            {
                              icon: "upload",
                              accept: ".png",
                              onClick: function () {
                                e.fieldImg && e.fieldImg.click();
                              },
                            },
                            "\u4e0a\u4f20\u56fe\u7247"
                          )
                        ),
                        i.a.createElement(
                          "a",
                          {
                            style: { fontSize: ".8em" },
                            href: "https://leping.blog.csdn.net/article/details/78911091",
                            target: "_blank",
                          },
                          "\u5982\u4f55\u914d\u7f6e\uff1f"
                        )
                      ),
                      n instanceof FormData &&
                        n.get("img") &&
                        i.a.createElement(
                          "div",
                          { className: "App-up-img" },
                          i.a.createElement("img", {
                            src: URL.createObjectURL(n.get("img")),
                          }),
                          i.a.createElement(
                            "div",
                            null,
                            i.a.createElement(
                              "div",
                              null,
                              i.a.createElement("b", null, n.get("img").name)
                            ),
                            i.a.createElement(
                              "div",
                              null,
                              i.a.createElement(
                                "small",
                                null,
                                o,
                                " \u50cf\u7d20"
                              )
                            )
                          )
                        ),
                      i.a.createElement(
                        "div",
                        { style: { margin: "15px 0" } },
                        i.a.createElement(f, {
                          options: t,
                          onChange: function (a) {
                            return e.handleCheckboxSizeClick(a);
                          },
                        })
                      ),
                      i.a.createElement(
                        "div",
                        { style: { margin: "15px 0" } },
                        i.a.createElement(
                          E.a,
                          {
                            onChange: function (a) {
                              e.setState({ favDisable: !a.target.checked });
                            },
                          },
                          "\u751f\u6210 favicon.ico"
                        ),
                        i.a.createElement(
                          u.a,
                          {
                            defaultValue: r,
                            style: { width: 100 },
                            disabled: c,
                            onChange: function (a) {
                              e.setState({ favSize: a });
                            },
                          },
                          i.a.createElement(v, { value: "16" }, "16x16"),
                          i.a.createElement(v, { value: "32" }, "32x32"),
                          i.a.createElement(v, { value: "48" }, "48x48"),
                          i.a.createElement(v, { value: "64" }, "64x64"),
                          i.a.createElement(v, { value: "128" }, "128x128")
                        )
                      ),
                      i.a.createElement(
                        "div",
                        { style: { textAlign: "center" } },
                        i.a.createElement(
                          h.a,
                          {
                            shape: "round",
                            type: "primary",
                            icon: "thunderbolt",
                            onClick: function () {
                              return e.handleBtnGenClick();
                            },
                          },
                          "\u751f\u6210"
                        )
                      ),
                      (!!l.length || !!s.length) &&
                        i.a.createElement("div", { className: "App-hr" }),
                      i.a.createElement(
                        "div",
                        { className: "App-down" },
                        Array.isArray(l) &&
                          l.map(function (a, t) {
                            return i.a.createElement(
                              "div",
                              { className: "App-up-img", key: t },
                              i.a.createElement("img", { src: a.url || C.a }),
                              i.a.createElement(
                                "div",
                                null,
                                i.a.createElement(
                                  "div",
                                  null,
                                  i.a.createElement(
                                    "span",
                                    null,
                                    a.size,
                                    " x ",
                                    a.size
                                  ),
                                  i.a.createElement(
                                    h.a,
                                    {
                                      loading: a.loading,
                                      icon: "download",
                                      onClick: function () {
                                        e.aDown &&
                                          ((e.aDown.href = a.url),
                                          (e.aDown.download = a.size + ".png"),
                                          e.aDown.click());
                                      },
                                    },
                                    a.loading
                                      ? "\u8f6c\u6362\u4e2d"
                                      : "\u4e0b\u8f7d"
                                  )
                                )
                              )
                            );
                          }),
                        Array.isArray(s) &&
                          s.map(function (a, t) {
                            return i.a.createElement(
                              "div",
                              { className: "App-up-img", key: t },
                              i.a.createElement("img", { src: a.url || C.a }),
                              i.a.createElement(
                                "div",
                                null,
                                i.a.createElement(
                                  "div",
                                  null,
                                  i.a.createElement(
                                    "span",
                                    null,
                                    a.size,
                                    " x ",
                                    a.size,
                                    " favicon.ico"
                                  ),
                                  i.a.createElement(
                                    h.a,
                                    {
                                      loading: a.loading,
                                      icon: "download",
                                      onClick: function () {
                                        e.aDown &&
                                          ((e.aDown.href = a.url),
                                          (e.aDown.download = "favicon.ico"),
                                          e.aDown.click());
                                      },
                                    },
                                    a.loading
                                      ? "\u8f6c\u6362\u4e2d"
                                      : "\u4e0b\u8f7d"
                                  )
                                )
                              )
                            );
                          })
                      ),
                      i.a.createElement(
                        "div",
                        { className: "App-copyright" },
                        " ",
                        " ",
                        i.a.createElement(
                          "a",
                          {
                            href: "https://github.com/gitmfq",
                            target: "_blank",
                          },
                          "gitMFQ"
                        )
                      )
                    ),
                    i.a.createElement(
                      "div",
                      { className: "App-hiden" },
                      i.a.createElement("input", {
                        className: "Add-file",
                        type: "file",
                        ref: function (a) {
                          return (e.fieldImg = a);
                        },
                        onChange: function (a) {
                          return e.handleFileFieldChange(a);
                        },
                        accept: "image/png",
                      }),
                      i.a.createElement("img", {
                        ref: function (a) {
                          return (e.sizeImg = a);
                        },
                      }),
                      i.a.createElement("a", {
                        href: "",
                        ref: function (a) {
                          return (e.aDown = a);
                        },
                      })
                    )
                  );
                },
              },
            ]),
            a
          );
        })(i.a.Component),
        I = Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      function w(e, a) {
        navigator.serviceWorker
          .register(e)
          .then(function (e) {
            e.onupdatefound = function () {
              var t = e.installing;
              null != t &&
                (t.onstatechange = function () {
                  "installed" === t.state &&
                    (navigator.serviceWorker.controller
                      ? (console.log(
                          "New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."
                        ),
                        a && a.onUpdate && a.onUpdate(e))
                      : (console.log("Content is cached for offline use."),
                        a && a.onSuccess && a.onSuccess(e)));
                });
            };
          })
          .catch(function (e) {
            console.error("Error during service worker registration:", e);
          });
      }
      l.a.render(i.a.createElement(Q, null), document.getElementById("root")),
        (function (e) {
          if ("serviceWorker" in navigator) {
            if (
              new URL(".", window.location.href).origin !==
              window.location.origin
            )
              return;
            window.addEventListener("load", function () {
              var a = "".concat(".", "/service-worker.js");
              I
                ? (!(function (e, a) {
                    fetch(e)
                      .then(function (t) {
                        var n = t.headers.get("content-type");
                        404 === t.status ||
                        (null != n && -1 === n.indexOf("javascript"))
                          ? navigator.serviceWorker.ready.then(function (e) {
                              e.unregister().then(function () {
                                window.location.reload();
                              });
                            })
                          : w(e, a);
                      })
                      .catch(function () {
                        console.log(
                          "No internet connection found. App is running in offline mode."
                        );
                      });
                  })(a, e),
                  navigator.serviceWorker.ready.then(function () {
                    console.log(
                      "This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA"
                    );
                  }))
                : w(a, e);
            });
          }
        })();
    },
    67: function (e, a) {
      e.exports =
        "data:image/png;base64,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";
    },
  },
  [[100, 1, 2]],
]);
