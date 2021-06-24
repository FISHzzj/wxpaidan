Object.defineProperty(exports, "__esModule", {
    value: !0
});

var E = {
    SYSTEM_ERROR: -1,
    TIMEOUT: -2,
    NO_CONCENT: -3
}, _ = {
    ROOM_FLAG_NORMAL: 1,
    ROOM_FLAG_BAN_COMMENT: 2
}, T = {
    LIVE_STATUS_LIVE: 101,
    LIVE_STATUS_NOT_START: 102,
    LIVE_STATUS_END: 103,
    LIVE_STATUS_FORBID: 104,
    LIVE_STATUS_PAUSE: 105,
    LIVE_STATUS_ERROR: 106,
    LIVE_STATUS_EXPIRE: 107,
    LIVE_STATUS_REPLAY: 108
}, O = {
    LIVE_STATUS_FORBID: "因涉嫌违规，直播将禁播20分钟",
    LIVE_STATUS_PAUSE: "直播暂停，请稍后...",
    LIVE_STATUS_ERROR: "直播异常，请稍后..."
}, R = {
    RTMP: 1,
    HTTP_FLV: 2,
    HTTPS_FLV: 3,
    HTTP_HLS: 4,
    HTTPS_HLS: 5
}, S = {
    ROOM_MM_ERR_PEOPLE_LIMIT: 11009,
    ROOM_MM_ERR_DELETE: 11006,
    ROOM_MM_ERR_BIZ_INVALID_SCOPE: -12001,
    ROOM_MM_ERR_ROOMID: 11001,
    ROOM_MM_ERR_END_LOTTERY: 22007,
    ROOM_MM_ERR_EXPIRE: -9999901
}, I = {
    SHOW_LIMIT_NUMBER: 100,
    SHOW_NEWMSG_LIMIT_NUMBER: 300,
    SHOW_NEWMSG_NUMBER: 99,
    FRESH_TIME: 700,
    SHOW_SECOND_NUMBER: 20,
    PUSH_COMMENT_HIT_FREQ_LIMIT: 20
}, M = {
    ERR_COMMENT_PUSH: 13e3,
    ERR_COMMENT_HIT_KEYWORD_INTERCEPT: 13001,
    ERR_COMMENT_HIT_FREQ_LIMIT: 13002
}, A = {
    LOADING: "loading",
    NORMAL: "normal",
    ERROR: "error"
}, L = {
    PRICE_TYPE_FIXED_PRICE: 1,
    PRICE_TYPE_RANGE: 2,
    PRICE_TYPE_DISCOUNT: 3
}, P = {
    GOODS_FLAG_NORMAL: 1,
    GOODS_FLAG_DELETE_BY_USER: 2,
    GOODS_FLAG_DELETE_BY_AUDIT: 3
}, N = {
    LOTTERY_NOT_PUSH: 1,
    LOTTERY_PUSHED: 2,
    LOTTERY_RUNNING: 3,
    LOTTERY_FINISHED: 4,
    LOTTERY_ERROR: 5
}, D = {
    LOTTERY_COMMENT: 0,
    LOTTERY_LIKE: 1
}, Y = {
    LOTTERY_OBTAIN_ADDRESS: 0,
    LOTTERY_OBTAIN: 1
}, G = {
    SHARE: 1,
    SUBSCRIBE: 2,
    PREVIEW: 3,
    SEARCH: 4,
    RECOMMEND: 5,
    FOLLOW: 6,
    WECHAT_PRO: 7,
    ADDRESS: 8,
    QRCODE: 9,
    CARD: 10
}, U = {
    MESSAGE_TYPE_COMMENT_TEXT: 1,
    MESSAGE_TYPE_GOODS_PUSH: 2,
    MESSAGE_TYPE_SYSTEM: 3,
    MESSAGE_TYPE_VIEW_GOODS: 4,
    MESSAGE_TYPE_ENTER_ROOM: 5,
    MESSAGE_TYPE_SHARE_ROOM: 6,
    MESSAGE_TYPE_SUBSCRIBE_LIVE: 7,
    MESSAGE_TYPE_UPDATE_GOODS: 8,
    MESSAGE_TYPE_ADD_GOODS: 9,
    MESSAGE_TYPE_DELETE_GOODS: 10,
    MESSAGE_TYPE_TOP_GOODS: 11,
    MESSAGE_TYPE_REPORT_COMMENT: 12,
    MESSAGE_TYPE_REPORT_LIVE_ROOM: 13,
    MESSAGE_TYPE_WARNING: 14,
    MESSAGE_TYPE_ANCHOR: 15,
    MESSAGE_TYPE_AUDIENCE: 16,
    MESSAGE_TYPE_LOTTERY: 17,
    MESSAGE_TYPE_START_LOTTERY: 18,
    MESSAGE_TYPE_PUSH_LOTTERY: 19,
    MESSAGE_TYPE_COUPON: 20,
    MESSAGE_TYPE_PUSH_COUPON: 21
}, C = {
    VIDEO_BITRATE: 101005,
    AUDIO_BITRATE: 101006,
    VIDEO_FPS: 101007,
    NET_SPEED: 101008,
    NET_JITTER: 101009,
    HAS_NET_JITTER: 101011,
    VIDEO_CATON: 101012,
    SLOW_SPEED: 101013,
    SETDATA_TIME: 102010,
    LOTTIE_LIKE_ANIMATION_FPS: 102014,
    LIVE_PLAYER_INIT_SUCC: 102017,
    LIVE_PLAYER_INIT_ERROR: 102018,
    LIVE_PLAYER_DECODE_ERROR: 102019,
    LIVE_PLAYER_ERROR: 102020,
    STATICINFO_COST: 101021,
    DYNAMICINFO_COST: 101022
}, H = {
    ANCHOR: 1,
    ROOM_HELPER: 2,
    NORMAL_USER: 3
};

exports.default = {
    PLUGIN_APPID: "wx2b03c6e691cd7370",
    LIVE_ROOM_FLAG: _,
    LIVE_STATUS_CODE: T,
    LIVE_STATUS_WORDING: O,
    PLAY_URL_TYPE: R,
    ROOM_ERROR_CODE: S,
    COUNT_DOWN_TIME: 1e3,
    LONG_POLLING_TIME: 5e3,
    REQUEST_DEFAULT_TIMEOUT: 1e4,
    LIKE_GATHER_REQUEST_TIME: 2e3,
    REPLAY_LIMIT: 4999,
    COMMENT: I,
    COMMENT_ERROR_CODE: M,
    STORE_LIST_STATUS: A,
    GOODS_PRICE_TYPE: L,
    GOODS_FLAG: P,
    LOTTERY_STATUS: N,
    LOTTERY_PARTIPATE_TYPE: D,
    LOTTERY_OBTAIN_TYPE: Y,
    SCENE_TYPE: G,
    MESSAGE_TYPE: U,
    TEST_SPEED_REPORT_ID: C,
    OPERATEWXDATA_CODE: E,
    USER_TYPE: H
};