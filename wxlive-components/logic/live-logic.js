Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("config.js"));

exports.default = {
    getSystemTriggerBarrage: function(e) {
        var s = e.roomDynamicInfo, t = e.systemTriggerBarrageMsgIdList;
        if (!s || !s.barrages) return {
            systemTriggerBarrageList: [],
            systemTriggerBarrageMsgIdList: []
        };
        var r = [], u = t || [];
        return (s.barrages.list || []).forEach(function(e) {
            if (e.msg_content && !u.includes(e.msg_id)) {
                var s = JSON.parse(e.msg_content);
                r.push({
                    avatar: s.avatar,
                    nickname: s.nickname,
                    openid: s.openid,
                    content: s.content,
                    type: s.type
                }), u.push(e.msg_id);
            }
        }), {
            systemTriggerBarrageList: r,
            systemTriggerBarrageMsgIdList: u
        };
    },
    getComment: function(e) {
        var s = e.roomDynamicInfo, t = e.commentMsgIdList, r = e.globalSysMsgVersion, u = e.roomSysMsgVersion, n = [], o = t || [], a = s.global_msg && s.global_msg.version || r;
        if (s.global_msg && s.global_msg.msg && a !== r) {
            var i = JSON.parse(s.global_msg.msg);
            n.push({
                avatar: i.avatar,
                nickname: i.nickname,
                content: i.content,
                official: !0
            });
        }
        var m = s.system_msg && s.system_msg.list && s.system_msg.list.length > 0 && s.system_msg.list[0].msg_id || u;
        s.system_msg && s.system_msg.list && s.system_msg.list.length > 0 && m !== u && (s.system_msg && s.system_msg.list || []).forEach(function(e) {
            if (e.msg_content && !o.includes(e.msg_id)) {
                var s = JSON.parse(e.msg_content);
                n.push({
                    avatar: s.avatar,
                    nickname: s.nickname,
                    content: s.content,
                    official: !0
                }), o.push(e.msg_id);
            }
        });
        var d = 0, c = [];
        return (s.comments && s.comments.list || []).forEach(function(e) {
            if (e.msg_content && !o.includes(e.msg_id)) {
                var s = JSON.parse(e.msg_content);
                c.push({
                    avatar: s.avatar,
                    nickname: s.nickname,
                    openid: s.openid,
                    content: s.content,
                    msgId: e.msg_id,
                    userUin: e.user_uin,
                    role: s.role || null
                }), o.push(e.msg_id), d++;
            }
        }), c.sort(function(e, s) {
            return e.msgId - s.msgId;
        }), n = n.concat(c), {
            commentList: n,
            commentMsgIdList: o,
            showCommentsCount: d,
            globalSysMsgVersion: a,
            roomSysMsgVersion: m
        };
    },
    getStoreInfo: function(s) {
        var t = s.roomDynamicInfo, r = s.appid, u = s.roomId, n = s.openid, o = s.shareOpenid, a = s.type, i = s.customParams, m = t.push_msg && t.push_msg.list || [], d = t.goods && t.goods.goods || [];
        d.forEach(function(e) {
            e.url && (e.url = "/" + e.url.replace(/(.html|.htm)/i, ""), e.url.includes("?") ? e.url = o ? e.url + "&room_id=" + u + "&openid=" + n + "&share_openid=" + o + "&type=" + a + "&custom_params=" + i : e.url + "&room_id=" + u + "&openid=" + n + "&type=" + a + "&custom_params=" + i : e.url = o ? e.url + "?room_id=" + u + "&openid=" + n + "&share_openid=" + o + "&type=" + a + "&custom_params=" + i : e.url + "?room_id=" + u + "&openid=" + n + "&type=" + a + "&custom_params=" + i), 
            e.price = e.price % 100 == 0 ? e.price / 100 : (e.price / 100).toFixed(2), e.price2 = e.price2 % 100 == 0 ? e.price2 / 100 : (e.price2 / 100).toFixed(2);
        }), d = d.filter(function(s) {
            return !s.flag || s.flag === e.default.GOODS_FLAG.GOODS_FLAG_NORMAL;
        });
        var c = 0, g = 0, l = void 0;
        return m.length > 0 && m[0].msg_content && (c = JSON.parse(m[0].msg_content).goods_id, 
        g = m[0].msg_id, l = m[0].timestamp), g > 0 && (wx.setStorageSync("storePushGoodsId-" + r + "-" + u, c), 
        wx.setStorageSync("storePushVersion-" + r + "-" + u, g), wx.setStorageSync("storePushTimestamp-" + r + "-" + u, l)), 
        {
            storeList: d
        };
    },
    getLotteryInfo: function(e) {
        var s = e.roomDynamicInfo, t = s.lottery_msg && s.lottery_msg.list || [], r = 0, u = 0;
        if (t.length > 0 && t[0].msg_content) {
            var n = JSON.parse(t[0].msg_content);
            r = +t[0].msg_id, u = +n.id;
        }
        return {
            lotteryVersion: r,
            lotteryId: u
        };
    },
    encryptNickname: function(e) {
        var s = "";
        return 1 === (e = e.replace(/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g, "")).length ? s = e : 2 === e.length ? s = e[0] + "*" : 3 === e.length ? s = e[0] + "*" + e[2] : e.length >= 4 && (s = e[0] + "**" + e[e.length - 1]), 
        s;
    }
};