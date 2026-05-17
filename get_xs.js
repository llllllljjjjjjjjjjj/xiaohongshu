function md5(data) {
    const cry = require('crypto')
    //创建hash对象
    const obj = cry.createHash('md5')
    let tow = obj.update(data)
    let hex = obj.digest('hex')
    return hex
}
function seccore_signv2(e, a) {
    var u = e;
    u += JSON.stringify(a)
    var m = md5(u)
        , w = md5(e)
        , C = window.mnsv2(u, m, w)
        , P = {
            x0: R.i8,
            x1: "xhs-pc-web",
            x2: window[R.mj] || "PC",
            x3: C,
            x4: a ? void 0 === a ? "undefined" : (0,
                et._)(a) : ""
        };
    return "XYS_" + (0,
        K.xE)((0,
            K.lz)(JSON.stringify(P)))
}
let data = {
    "cursor_score": "",
    "num": 27,
    "refresh_type": 1,
    "note_index": 15,
    "unread_begin_note_id": "",
    "unread_end_note_id": "",
    "unread_note_count": 0,
    "category": "homefeed.fashion_v3",
    "search_key": "",
    "need_num": 12,
    "image_formats": [
        "jpg",
        "webp",
        "avif"
    ],
    "need_filter_image": false
}
let url = "/api/sns/web/v1/homefeed"