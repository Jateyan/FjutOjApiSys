webpackJsonp([7], {
    bz1T: function (t, a) {
    }, hdVW: function (t, a, e) {
        "use strict";
        Object.defineProperty(a, "__esModule", {value: !0});
        var l = {
            data: function () {
                return {
                    options: [{value: "G++ 11", label: "G++ 11"}, {
                        value: "GCC 11",
                        label: "GCC 11"
                    }, {value: "Pascal", label: "Pascal"}, {value: "C#", label: "C#"}, {
                        value: "GO 1.8",
                        label: "GO 1.8"
                    }, {value: "JAVA", label: "JAVA"}, {value: "Python3", label: "Python3"}, {
                        value: "JavaScript",
                        label: "JavaScript"
                    }], code: "", islogin: flase
                }
            }
        }, s = {
            render: function () {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", [t._m(0), t._v(" "), e("div", {staticClass: "card-div"}, [e("el-row", [e("el-col", {attrs: {span: 8}}, [e("el-card", {staticClass: "box-card"}, [e("div", {
                    staticClass: "clearfix",
                    attrs: {slot: "header"},
                    slot: "header"
                }, [e("span", {staticStyle: {float: "left"}}, [t._v("题目统计信息")]), t._v(" "), e("el-button", {
                    staticStyle: {
                        float: "right",
                        padding: "3px 0"
                    }, attrs: {type: "text"}
                }, [t._v("详细")])], 1), t._v(" "), t._l(5, function (a) {
                    return e("div", {
                        key: a,
                        staticClass: "text item"
                    }, [t._v("\n                        " + t._s("content " + a) + "\n                    ")])
                })], 2)], 1), t._v(" "), e("el-col", {attrs: {span: 8}}, [e("el-card", {staticClass: "box-card"}, [e("div", {
                    staticClass: "clearfix",
                    attrs: {slot: "header"},
                    slot: "header"
                }, [e("span", {staticStyle: {float: "left"}}, [t._v("标签---1000")])]), t._v(" "), e("div", {staticClass: "text item"}, [t._v("\n                        AC该题后可以添加标签\n                        贴完标签可以获得20ACB。\n                        并且可以获得本题所有提交代码查看权限。\n                        点击标题可以显示标签。\n                        如果你还没认真思考过这题，请不要查看标签\n                        如果您已经通过了该题，请务为该题贴上标签\n                    ")])])], 1), t._v(" "), e("el-col", {attrs: {span: 8}}, [e("el-card", {staticClass: "box-card"}, [e("div", {
                    staticClass: "clearfix",
                    attrs: {slot: "header"},
                    slot: "header"
                }, [e("span", {staticStyle: {float: "left"}}, [t._v("出处")])]), t._v(" "), e("div", {staticClass: "text item"}, [t._v("\n                        第一届FZU Code Carnival 校内选拔 报名转用(请在队名前注明年级)\n                    ")])])], 1)], 1)], 1), t._v(" "), e("div", {staticClass: "card-div"}, [e("div", {
                    staticStyle: {
                        display: "inline-flex",
                        float: "left"
                    }
                }, [e("h4", [t._v("未提交 |")]), t._m(1), e("h4", [t._v(" 已有" + t._s(t.collect_people) + "人收藏了本题")])]), t._v(" "), e("el-card", {staticClass: "list-div"}, [e("div", {staticClass: "clearfix"}, [e("span", {staticStyle: {float: "left"}}, [e("h4", [t._v("Description")])])]), t._v(" "), e("div", {staticClass: "text item"}, [e("span", {staticStyle: {float: "left"}}, [t._v("123" + t._s(t.title))])]), t._v(" "), e("div", {staticClass: "clearfix"}, [e("span", {staticStyle: {float: "left"}}, [e("h4", [t._v("Input")])])]), t._v(" "), e("div", {staticClass: "text item"}, [e("span", {staticStyle: {float: "left"}}, [t._v("123" + t._s(t.title))])]), t._v(" "), e("div", {staticClass: "clearfix"}, [e("span", {staticStyle: {float: "left"}}, [e("h4", [t._v("Output")])])]), t._v(" "), e("div", {staticClass: "text item"}, [e("span", {staticStyle: {float: "left"}}, [t._v("123" + t._s(t.title))])]), t._v(" "), e("div", {staticClass: "clearfix"}, [e("span", {staticStyle: {float: "left"}}, [e("h4", [t._v("SampleInput And SampleOutput")])])]), t._v(" "), e("div", {staticClass: "text item"}, [e("span", {staticStyle: {float: "left"}}, [t._v("123" + t._s(t.title))])])])], 1), t._v(" "), t.islogin ? e("div", {staticClass: "submitDiv"}, [e("el-row", [e("el-col", {attrs: {span: 2}}, [e("p", [t._v("pid")])]), t._v(" "), e("el-col", {attrs: {span: 4}}, [e("el-input", {
                    attrs: {disabled: t.ture},
                    model: {
                        value: t.pid, callback: function (a) {
                            t.pid = a
                        }, expression: "pid"
                    }
                })], 1), t._v(" "), e("el-col", {attrs: {span: 2}}, [e("p", [t._v("language")])]), t._v(" "), e("el-col", {attrs: {span: 4}}, [e("el-select", {
                    model: {
                        value: t.compileLanguage,
                        callback: function (a) {
                            t.compileLanguage = a
                        },
                        expression: "compileLanguage"
                    }
                }, t._l(t.options, function (t) {
                    return e("el-option", {key: t.value, attrs: {label: t.label, value: t.value}})
                }), 1)], 1)], 1), t._v(" "), e("el-row", [e("el-col", {attrs: {span: 24}}, [e("el-input", {
                    attrs: {
                        type: "textarea",
                        rows: "8",
                        placeholder: "code"
                    }, model: {
                        value: t.code, callback: function (a) {
                            t.code = a
                        }, expression: "code"
                    }
                })], 1)], 1)], 1) : t._e(), t._v(" "), e("div", {staticStyle: {padding: "0 0 2% 0"}}, [e("el-button", {attrs: {round: ""}}, [t._v("Submit")])], 1)])
            }, staticRenderFns: [function () {
                var t = this.$createElement, a = this._self._c || t;
                return a("div", [a("h1", [this._v("A + B Problem")]), this._v(" "), a("h4", [this._v("TimeLimit:1000MS  MemoryLimit:128MB")]), this._v(" "), a("h4", [this._v("64-bit integer IO format:%lld")])])
            }, function () {
                var t = this.$createElement, a = this._self._c || t;
                return a("h4", [a("i", {staticClass: "el-icon-star"}), this._v(" 登录后收藏 |")])
            }]
        };
        var i = e("VU/8")(l, s, !1, function (t) {
            e("bz1T")
        }, "data-v-3a3c408d", null);
        a.default = i.exports
    }
});
//# sourceMappingURL=7.ef752bac9daf29220809.js.map