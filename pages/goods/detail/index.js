var t, e, a = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../@babel/runtime/helpers/defineProperty")), i = getApp(), o = i.requirejs("core"), s = (i.requirejs("icons"), 
i.requirejs("foxui")), n = i.requirejs("biz/diypage"), r = i.requirejs("biz/diyform"), d = i.requirejs("biz/goodspicker"), c = i.requirejs("jquery"), l = i.requirejs("wxParse/wxParse"), u = 0, g = i.requirejs("biz/selectdate");

Page((e = {
    data: (t = {
        diypages: {},
        usediypage: !1,
        specs: [],
        options: [],
        icons: i.requirejs("icons"),
        goods: {},
        indicatorDots: !0,
        autoplay: !0,
        interval: 5e3,
        duration: 500,
        circular: !0,
        play: "/static/images/video_play.png",
        mute: "/static/images/icon/mute.png",
        voice: "/static/images/icon/voice.png",
        active: "",
        slider: "",
        tempname: "",
        info: "active",
        preselltimeend: "",
        presellsendstatrttime: "",
        advWidth: 0,
        dispatchpriceObj: 0,
        now: parseInt(Date.now() / 1e3),
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
        timer: 0,
        discountTitle: "",
        istime: 1,
        istimeTitle: "",
        istimeTitleEnd: "",
        isSelected: !1,
        params: {},
        total: 1,
        optionid: 0,
        audios: {},
        audiosObj: {},
        defaults: {
            id: 0,
            merchid: 0
        },
        buyType: "",
        pickerOption: {},
        specsData: [],
        specsTitle: "",
        canBuy: "",
        diyform: {},
        showPicker: !1,
        showcoupon: !1,
        pvalOld: [ 0, 0, 0 ],
        pval: [ 0, 0, 0 ],
        areas: [],
        noArea: !0,
        commentObj: {},
        commentObjTab: 1,
        loading: !1,
        commentEmpty: !1,
        commentPage: 1,
        commentTotal: 1,
        commentLevel: "all",
        commentList: [],
        closeBtn: !1,
        soundpic: !0,
        animationData: {},
        uid: "",
        stararr: [ "all", "good", "normal", "bad", "pic" ],
        nav_mask: !1,
        nav_mask2: !1,
        nav: 0,
        giftid: "",
        limits: !0,
        modelShow: !1,
        showgoods: !0
    }, (0, a.default)(t, "timer", 0), (0, a.default)(t, "lasttime", 0), (0, a.default)(t, "hour", "-"), 
    (0, a.default)(t, "min", "-"), (0, a.default)(t, "sec", "-"), (0, a.default)(t, "currentDate", ""), 
    (0, a.default)(t, "dayList", ""), (0, a.default)(t, "currentDayList", ""), (0, a.default)(t, "currentObj", ""), 
    (0, a.default)(t, "currentDay", ""), (0, a.default)(t, "checkedDate", ""), (0, a.default)(t, "showDate", ""), 
    (0, a.default)(t, "scope", ""), (0, a.default)(t, "goods_hint_show", !1), (0, a.default)(t, "presellisstart", 0), 
    (0, a.default)(t, "advHeight", 1), (0, a.default)(t, "show_goods", !0), (0, a.default)(t, "goodscircle", {
        can_share_goodscircle: !1
    }), t),
    imageLoad: function(t) {
        var e = t.detail.height, a = t.detail.width, i = Math.floor(750 * e / a);
        e == a ? this.setData({
            advHeight: 750
        }) : this.setData({
            advHeight: i
        });
    },
    favorite: function(t) {
        i.checkAuth();
        var e = this;
        if (e.data.limits) {
            var a = t.currentTarget.dataset.isfavorite ? 0 : 1;
            o.get("member/favorite/toggle", {
                id: e.data.options.id,
                isfavorite: a
            }, function(t) {
                t.isfavorite ? e.setData({
                    "goods.isfavorite": 1
                }) : e.setData({
                    "goods.isfavorite": 0
                });
            });
        }
    },
    goodsTab: function(t) {
        var e = this, a = t.currentTarget.dataset.tap;
        if ("info" == a) this.setData({
            info: "active",
            para: "",
            comment: ""
        }); else if ("para" == a) this.setData({
            info: "",
            para: "active",
            comment: ""
        }); else if ("comment" == a) {
            if (e.setData({
                info: "",
                para: "",
                comment: "active"
            }), e.data.commentList.length > 0) return void e.setData({
                loading: !1
            });
            e.setData({
                loading: !0
            }), o.get("goods/get_comment_list", {
                id: e.data.options.id,
                level: e.data.commentLevel,
                page: e.data.commentPage
            }, function(t) {
                t.list.length > 0 ? e.setData({
                    loading: !1,
                    commentList: t.list,
                    commentTotal: t.total,
                    commentPage: t.page
                }) : e.setData({
                    loading: !1,
                    commentEmpty: !0
                });
            });
        }
    },
    onReachBottom: function() {
        var t = this;
        if (t.data.commentTotal <= 10) return !1;
        var e = t.data.commentObjTab, a = "";
        1 == e ? a = "all" : 2 == e ? a = "good" : 3 == e ? a = "normal" : 4 == e ? a = "bad" : 5 == e && (a = "pic"), 
        t.setData({
            loading: !0
        }), o.get("goods/get_comment_list", {
            id: t.data.options.id,
            level: a,
            page: t.data.commentPage
        }, function(e) {
            0 == e.error && (t.setData({
                loading: !1
            }), e.list.length > 0 && t.setData({
                commentPage: t.data.commentPage + 1,
                commentTotal: e.total,
                commentList: t.data.commentList.concat(e.list)
            }));
        });
    },
    comentTap: function(t) {
        var e = this, a = t.currentTarget.dataset.type, i = "";
        1 == a ? (i = "all", e.data.commentPage = 1) : 2 == a ? (e.data.commentPage = 1, 
        i = "good") : 3 == a ? (e.data.commentPage = 1, i = "normal") : 4 == a ? (e.data.commentPage = 1, 
        i = "bad") : 5 == a && (e.data.commentPage = 1, i = "pic"), a != e.data.commentObjTab && o.get("goods/get_comment_list", {
            id: e.data.options.id,
            level: i,
            page: e.data.commentPage
        }, function(t) {
            t.list.length > 0 && e.setData({
                loading: !1,
                commentList: t.list,
                commentTotal: t.total,
                commentPage: t.page,
                commentObjTab: a,
                commentEmpty: !1
            });
        });
    },
    preview: function(t) {
        wx.previewImage({
            current: t.currentTarget.dataset.src,
            urls: t.currentTarget.dataset.urls
        });
    },
    getDetail: function(t) {
        var e = this, a = parseInt(Date.now() / 1e3);
        e.setData({
            loading: !0
        }), o.get("goods/get_detail", {
            id: t.id
        }, function(t) {
            if (0 != t.error) return e.setData({
                show: !0,
                showgoods: !1
            }), s.toast(e, t.message), void setTimeout(function() {
                wx.navigateBack();
            }, 1500);
            [ "marketprice", "productprice" ].forEach(function(e) {
                void 0 !== t.goods[e] && (t.goods[e] = parseFloat(t.goods[e]));
            });
            var i = t.goods.coupons, n = t.goods.thumbMaxHeight, r = (t.goods.thumbMaxWidth, 
            t.goods.goodscircle);
            if (e.setData({
                coupon: i,
                coupon_l: i.length,
                packagegoods: t.goods.packagegoods,
                packagegoodsid: t.goods.packagegoods.goodsid || 0,
                credittext: t.goods.credittext,
                activity: t.goods.activity,
                bottomFixedImageUrls: t.goods.bottomFixedImageUrls,
                phonenumber: t.goods.phonenumber || "",
                showDate: t.goods.showDate || "",
                scope: t.goods.scope || "",
                show_goods: t.goods.show_goods,
                goodscircle: r
            }), t.goods.packagegoods && e.package(), l.wxParse("wxParseData", "html", t.goods.content, e, "0"), 
            l.wxParse("wxParseData_buycontent", "html", t.goods.buycontent, e, "0"), e.setData({
                show: !0,
                goods: t.goods,
                minprice: t.goods.minprice,
                maxprice: t.goods.maxprice,
                preselltimeend: t.goods.preselltimeend,
                style: t.goods.labelstyle.style || "",
                navbar: t.goods.navbar,
                labels: t.goods.labels
            }), t.goods.gifts && 1 == t.goods.gifts.length && e.setData({
                giftid: t.goods.gifts[0].id
            }), wx.setNavigationBarTitle({
                title: t.goods.title || "????????????"
            }), u = t.goods.hasoption, c.isEmptyObject(t.goods.dispatchprice) || "string" == typeof t.goods.dispatchprice ? e.setData({
                dispatchpriceObj: 0
            }) : e.setData({
                dispatchpriceObj: 1
            }), t.goods.isdiscount > 0 && t.goods.isdiscount_time >= a) {
                clearInterval(e.data.timer);
                var d = setInterval(function() {
                    e.countDown(0, t.goods.isdiscount_time);
                }, 1e3);
                e.setData({
                    timer: d
                });
            }
            if (t.goods.istime > 0) {
                clearInterval(e.data.timer);
                d = setInterval(function() {
                    e.countDown(t.goods.timestart, t.goods.timeend, "istime");
                }, 1e3);
                e.setData({
                    timer: d,
                    istimeTitle: t.sysset.trade
                });
            }
            if (t.goods.ispresell > 0) {
                d = setInterval(function() {
                    0 == t.goods.canbuy ? e.countDown(a, t.goods.preselltimestart, "istime") : 1 == t.goods.canbuy && e.countDown(a, t.goods.preselltimeend, "istime");
                }, 1e3);
                e.setData({
                    timer: d,
                    presellisstart: t.goods.presellisstart
                }), e.setData({
                    preselltimeend: t.goods.preselltimeend || t.goods.preselltimeend.getMonth() + "???" + t.goods.preselltimeend || t.goods.preselltimeend.getDate() + "??? " + t.goods.preselltimeend || t.goods.preselltimeend.getHours() + ":" + t.goods.preselltimeend || t.goods.preselltimeend.getMinutes() + ":" + t.goods.preselltimeend || t.goods.preselltimeend.getSeconds(),
                    presellsendstatrttime: t.goods.presellsendstatrttime || t.goods.presellsendstatrttime.getMonth() + "???" + t.goods.presellsendstatrttime || t.goods.presellsendstatrttime.getDate() + "???"
                });
            }
            t.goods.getComments > 0 && o.get("goods/get_comments", {
                id: e.data.options.id
            }, function(t) {
                e.setData({
                    commentObj: t
                });
            }), t.goods.fullbackgoods && e.setData({
                fullbackgoods: t.goods.fullbackgoods
            });
            var g = e.data.fullbackgoods;
            if (null != g) {
                var m = g.maxfullbackratio, h = g.maxallfullbackallratio;
                m = Math.round(m), h = Math.round(h);
                e.setData({
                    maxfullbackratio: m,
                    maxallfullbackallratio: h
                });
            }
            9 == t.goods.type && (e.setData({
                checkedDate: t.goods.nowDate
            }), e.show_cycelbuydate()), t.goods.seckillinfo && e.initSeckill(t.goods);
        });
    },
    initSeckill: function(t) {
        var e = this, a = parseInt(t.seckillinfo.status), o = t.seckillinfo.starttime, s = t.seckillinfo.endtime;
        if (-1 != a) {
            var n = 0, r = 0, d = i.globalData.approot;
            wx.request({
                url: d + "map.json",
                success: function(i) {
                    var d = new Date(i.header.Date) / 1e3;
                    n = 0 == a ? s - d : o - d, e.setData({
                        lasttime: n
                    }), clearInterval(e.data.timer), e.setTimer(t.seckillinfo), r = e.setTimerInterval(t.seckillinfo), 
                    e.setData({
                        timer: r
                    });
                }
            });
        }
    },
    setTimer: function(t) {
        var e = this, a = 0;
        if (-1 != t.status && parseInt(e.data.lasttime) % 10 == 0) {
            var o = parseInt(t.status), s = t.starttime, n = t.endtime;
            if (-1 != o) {
                var r = i.globalData.approot;
                wx.request({
                    url: r + "map.json",
                    success: function(t) {
                        var i = new Date(t.header.Date) / 1e3;
                        a = 0 == o ? n - i : s - i, e.setData({
                            lasttime: a
                        });
                    }
                });
            }
        }
        a = parseInt(e.data.lasttime) - 1;
        var d = e.formatSeconds(a);
        e.setData({
            lasttime: a,
            hour: d.hour,
            min: d.min,
            sec: d.sec
        }), a <= 0 && e.onLoad();
    },
    setTimerInterval: function(t) {
        var e = this;
        return setInterval(function() {
            e.setTimer(t);
        }, 1e3);
    },
    formatSeconds: function(t) {
        var e = parseInt(t), a = 0, i = 0;
        return e > 60 && (a = parseInt(e / 60), e = parseInt(e % 60), a > 60 && (i = parseInt(a / 60), 
        a = parseInt(a % 60))), {
            hour: i < 10 ? "0" + i : i,
            min: a < 10 ? "0" + a : a,
            sec: e < 10 ? "0" + e : e
        };
    },
    countDown: function(t, e, a) {
        var i = parseInt(Date.now() / 1e3), o = parseInt((t > i ? t : e) - i), s = Math.floor(o / 86400), n = Math.floor((o - 24 * s * 60 * 60) / 3600), r = Math.floor((o - 24 * s * 60 * 60 - 3600 * n) / 60), d = [ s, n, r, Math.floor(o - 24 * s * 60 * 60 - 3600 * n - 60 * r) ];
        this.setData({
            time: d
        }), "istime" && (t > i ? this.setData({
            istimeTitleEnd: 0
        }) : t <= i && e > i ? this.setData({
            istimeTitleEnd: 1
        }) : this.setData({
            istime: 0,
            istimeTitleEnd: 2
        }));
    },
    cityPicker: function(t) {
        t.currentTarget.dataset.tap;
        wx.navigateTo({
            url: "/pages/goods/region/index?id=" + this.data.goods.id + "&region=" + this.data.goods.citys.citys + "&onlysent=" + this.data.goods.citys.onlysent
        });
    },
    giftPicker: function() {
        this.setData({
            active: "active",
            gift: !0
        });
    },
    couponPicker: function() {
        this.setData({
            active: "active",
            showcoupon: !0
        });
    },
    couponrecived: function(t) {
        var e = t.currentTarget.dataset.id, a = this;
        o.post("goods.pay_coupon", {
            id: e
        }, function(t) {
            0 == t.error ? (a.setData({
                showcoupon: !1,
                active: ""
            }), s.toast(a, "?????????")) : s.toast(a, t.message);
        });
    },
    selectPicker: function(t) {
        i.checkAuth();
        var e = t.currentTarget.dataset.time, a = t.currentTarget.dataset.timeout;
        if (this.data.limits) {
            if ("timeout" == e || "access_time" == e) {
                if ("false" == a) return void this.setData({
                    goods_hint_show: !0
                });
                if ("true" == a) {
                    if ("access_time" == e) {
                        this.setData({
                            goods_hint_show: !1
                        });
                        var o = "goodsdetail";
                        return void d.selectpicker(t, this, o);
                    }
                    if ("timeout" == e) return void this.setData({
                        goods_hint_show: !1
                    });
                }
            }
            o = "goodsdetail";
            d.selectpicker(t, this, o);
        }
    },
    specsTap: function(t) {
        d.specsTap(t, this);
    },
    emptyActive: function() {
        this.setData({
            active: "",
            slider: "out",
            tempname: "",
            showcoupon: !1,
            gift: !1,
            cycledate: !1
        });
    },
    buyNow: function(t) {
        d.buyNow(t, this, "goods_detail");
    },
    getCart: function(t) {
        d.getCart(t, this);
    },
    select: function() {
        var t = this.data.optionid;
        this.data.diyform;
        u > 0 && 0 == t ? s.toast(this, "???????????????") : this.setData({
            active: "",
            slider: "out",
            isSelected: !0,
            tempname: ""
        });
    },
    inputNumber: function(t) {
        d.inputNumber(t, this);
    },
    number: function(t) {
        d.number(t, this);
    },
    onLoad: function(t) {
        i.checkAuth();
        var e = wx.getStorageSync("livemid");
        console.log(e, "66666666666666"), "" != e && null != e && (t.mid = e, wx.removeStorageSync("livemid"));
        var a = this;
        a.setData({
            imgUrl: i.globalData.approot
        }), o.get("black", {}, function(t) {
            t.isblack && wx.showModal({
                title: "????????????",
                content: "?????????????????????????????????????????????",
                success: function(t) {
                    t.confirm && this.close(), t.cancel && this.close();
                }
            });
        }), n.get(this, "goodsdetail", function(t) {
            var e = t.diypage.items;
            for (var i in e) "copyright" == e[i].id && a.setData({
                copyright: e[i]
            });
        }), t = t || {};
        var s = decodeURIComponent(t.scene);
        if (!t.id && s) {
            var r = o.str2Obj(s);
            t.id = r.id, r.mid && (t.mid = r.mid);
        }
        this.setData({
            id: t.id
        }), i.url(t), wx.getSystemInfo({
            success: function(t) {
                a.setData({
                    windowWidth: t.windowWidth,
                    windowHeight: t.windowHeight
                });
            }
        }), a.getDetail(t), a.setData({
            uid: t.id,
            options: t,
            success: !0,
            cover: !0,
            showvideo: !0
        }), wx.getSystemInfo({
            success: function(t) {
                a.setData({
                    advWidth: t.windowWidth
                });
            }
        }), setTimeout(function() {
            a.setData({
                areas: i.getCache("cacheset").areas
            });
        }, 3e3);
    },
    show_cycelbuydate: function() {
        var t = g.getCurrentDayString(this, this.data.showDate);
        this.setData({
            currentObj: t,
            currentDate: t.getFullYear() + "???" + (t.getMonth() + 1) + "???" + t.getDate() + "??? " + [ "??????", "??????", "??????", "??????", "??????", "??????", "??????" ][t.getDay()],
            currentYear: t.getFullYear(),
            currentMonth: t.getMonth() + 1,
            currentDay: t.getDate(),
            initDate: Date.parse(t.getFullYear() + "/" + (t.getMonth() + 1) + "/" + t.getDate()),
            checkedDate: Date.parse(t.getFullYear() + "/" + (t.getMonth() + 1) + "/" + t.getDate()),
            maxday: this.data.scope
        });
    },
    package: function() {
        var t = this;
        o.get("package.get_list", {
            goodsid: this.data.packagegoodsid
        }, function(e) {
            t.setData({
                packageList: e.list[0]
            });
        });
    },
    onShow: function() {
        this.setData({
            isgoods: i.globalData.isgoods
        });
        var t = this;
        i.getCache("isIpx") ? t.setData({
            isIpx: !0,
            iphonexnavbar: "fui-iphonex-navbar"
        }) : t.setData({
            isIpx: !1,
            iphonexnavbar: ""
        }), wx.getStorage({
            key: "mydata",
            success: function(e) {
                wx.removeStorage({
                    key: "mydata",
                    success: function(t) {}
                }), t.getDetail(e.data), wx.pageScrollTo({
                    scrollTop: 0
                });
            }
        }), wx.getSetting({
            success: function(e) {
                var a = e.authSetting["scope.userInfo"];
                t.setData({
                    limits: a
                });
            }
        });
    },
    onChange: function(t) {
        return r.onChange(this, t);
    },
    DiyFormHandler: function(t) {
        return r.DiyFormHandler(this, t);
    },
    selectArea: function(t) {
        return r.selectArea(this, t);
    },
    bindChange: function(t) {
        return r.bindChange(this, t);
    },
    onCancel: function(t) {
        return r.onCancel(this, t);
    },
    onConfirm: function(t) {
        return r.onConfirm(this, t);
    },
    getIndex: function(t, e) {
        return r.getIndex(t, e);
    },
    onShareAppMessage: function() {
        return this.setData({
            closeBtn: !1
        }), o.onShareAppMessage("/pages/goods/detail/index?id=" + this.data.options.id, this.data.goods.title);
    },
    showpic: function() {
        this.setData({
            showpic: !0,
            cover: !1,
            showvideo: !1
        }), this.videoContext = wx.createVideoContext("myVideo"), this.videoContext.pause();
    },
    showvideo: function() {
        this.setData({
            showpic: !1,
            showvideo: !0
        }), this.videoContext = wx.createVideoContext("myVideo"), this.videoContext.play();
    },
    startplay: function() {
        this.setData({
            cover: !1
        }), this.videoContext = wx.createVideoContext("myVideo"), this.videoContext.play();
    },
    bindfullscreenchange: function(t) {
        1 == t.detail.fullScreen ? this.setData({
            success: !1
        }) : this.setData({
            success: !0
        });
    },
    phone: function() {
        var t = this.data.phonenumber + "";
        wx.makePhoneCall({
            phoneNumber: t
        });
    },
    sharePoster: function() {
        wx.navigateTo({
            url: "/pages/goods/poster/poster?id=" + this.data.uid
        });
    },
    closeBtn: function() {
        this.setData({
            closeBtn: !1
        });
    },
    onHide: function() {
        this.setData({
            closeBtn: !1
        });
    },
    showshade: function() {
        i.checkAuth(), this.setData({
            closeBtn: !0
        });
    },
    nav: function() {
        this.setData({
            nav_mask: !this.data.nav_mask
        });
    },
    nav2: function() {
        this.setData({
            nav_mask2: !this.data.nav_mask2
        });
    },
    changevoice: function() {
        this.data.sound ? this.setData({
            sound: !1,
            soundpic: !0
        }) : this.setData({
            sound: !0,
            soundpic: !1
        });
    },
    radioChange: function(t) {
        this.setData({
            giftid: t.currentTarget.dataset.giftgoodsid,
            gift_title: t.currentTarget.dataset.title
        });
    },
    activityPicker: function() {
        this.setData({
            fadein: "in"
        });
    },
    actOutPicker: function() {
        this.setData({
            fadein: ""
        });
    },
    hintclick: function() {
        wx.openSetting({
            success: function(t) {}
        });
    },
    cancelclick: function() {
        this.setData({
            modelShow: !1
        });
    },
    confirmclick: function() {
        this.setData({
            modelShow: !1
        }), wx.openSetting({
            success: function(t) {}
        });
    },
    sendclick: function() {
        wx.navigateTo({
            url: "/pages/map/index"
        });
    },
    syclecancle: function() {
        this.setData({
            cycledate: !1
        });
    },
    sycleconfirm: function() {
        this.setData({
            cycledate: !1
        });
    },
    editdate: function(t) {
        g.setSchedule(this), this.setData({
            cycledate: !0
        });
    },
    doDay: function(t) {
        g.doDay(t, this);
    },
    selectDay: function(t) {
        g.selectDay(t, this), g.setSchedule(this);
    },
    play: function(t) {
        var e = t.target.dataset.id, a = this.data.audiosObj[e] || !1;
        if (!a) {
            a = wx.createInnerAudioContext("audio_" + e);
            var i = this.data.audiosObj;
            i[e] = a, this.setData({
                audiosObj: i
            });
        }
        var o = this;
        a.onPlay(function() {
            var t = setInterval(function() {
                var i = a.currentTime / a.duration * 100 + "%", s = Math.floor(Math.ceil(a.currentTime) / 60), n = (Math.ceil(a.currentTime) % 60 / 100).toFixed(2).slice(-2), r = Math.ceil(a.currentTime);
                s < 10 && (s = "0" + s);
                var d = s + ":" + n, c = o.data.audios;
                c[e].audiowidth = i, c[e].Time = t, c[e].audiotime = d, c[e].seconds = r, o.setData({
                    audios: c
                });
            }, 1e3);
        });
        var s = t.currentTarget.dataset.audio, n = t.currentTarget.dataset.time, r = t.currentTarget.dataset.pausestop, d = t.currentTarget.dataset.loopplay;
        0 == d && a.onEnded(function(t) {
            c[e].status = !1, o.setData({
                audios: c
            });
        });
        var c = o.data.audios;
        c[e] || (c[e] = {}), a.paused && 0 == n ? (a.src = s, a.play(), 1 == d && (a.loop = !0), 
        c[e].status = !0, o.pauseOther(e)) : a.paused && n > 0 ? (a.play(), 0 == r ? a.seek(n) : a.seek(0), 
        c[e].status = !0, o.pauseOther(e)) : (a.pause(), c[e].status = !1), o.setData({
            audios: c
        });
    },
    pauseOther: function(t) {
        var e = this;
        c.each(this.data.audiosObj, function(a, i) {
            if (a != t) {
                i.pause();
                var o = e.data.audios;
                o[a] && (o[a].status = !1, e.setData({
                    audios: o
                }));
            }
        });
    }
}, (0, a.default)(e, "onHide", function() {
    this.pauseOther();
}), (0, a.default)(e, "onUnload", function() {
    this.pauseOther();
}), (0, a.default)(e, "navigate", function(t) {
    var e = t.currentTarget.dataset.url, a = t.currentTarget.dataset.phone, i = t.currentTarget.dataset.appid, o = t.currentTarget.dataset.appurl;
    e && wx.navigateTo({
        url: e,
        fail: function() {
            wx.switchTab({
                url: e
            });
        }
    }), a && wx.makePhoneCall({
        phoneNumber: a
    }), i && wx.navigateToMiniProgram({
        appId: i,
        path: o
    });
}), (0, a.default)(e, "close", function() {
    i.globalData.flag = !0, wx.reLaunch({
        url: "../index/index"
    });
}), (0, a.default)(e, "showtextarea", function(t) {
    var e = t.currentTarget.dataset.index;
    this.data.diyform.fields[e].texthide = !0, this.data.diyform.fields[e].textareashow = !0, 
    this.data.diyform.fields[e].black = "", this.setData({
        diyform: this.data.diyform
    });
}), (0, a.default)(e, "bindTextAreaBlur", function(t) {
    var e = t.detail.value, a = t.currentTarget.dataset.index;
    this.data.diyform.fields[a].texthide = !1, this.data.diyform.fields[a].textareashow = !1, 
    this.data.diyform.fields[a].placeholder = e, this.data.diyform.fields[a].black = "color: #000", 
    this.setData({
        diyform: this.data.diyform
    });
}), e));