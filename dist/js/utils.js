//將字串內換行符\n轉為<br>
function nl2br(str) {
    return str.replace(/([^>])\n/g, "$1<br/>\n");
}
//取得範圍內隨機數
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//取得隨機十六進制顏色
function randomHexColorCode() {
    var n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
}
;
//取得隨機字串
function randomString(len) {
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    var maxPos = chars.length;
    var str = "";
    for (var i = 0; i < len; i++) {
        str += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return str;
}
//複製文字至剪貼簿
function copyTextToClipboard(id) {
    var textRange = document.createRange();
    textRange.selectNode(document.getElementById(id));
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(textRange);
    document.execCommand("copy");
    alert('複製成功');
}
function copyTxt() {
    var Url2 = document.getElementById("aa");
    Url2.select(); // 選擇物件
    document.execCommand("Copy"); // 執行瀏覽器複製命令
    alert("已複製好，可貼粘。");
}
//查詢網址所帶參數
function queryString(key) {
    var url = location.href;
    if (url.indexOf("?") != -1) {
        var arr = url.split("?")[1].split("&");
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].split("=")[0] == key)
                return arr[i].split("=")[1];
        }
    }
}
//預載圖片
function imagePreload(src) {
    var img = new Image();
    img.src = src;
}
//判斷是否移動裝置訪問
function isMobileUserAgent() {
    return /iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase());
}
//判斷是否蘋果移動裝置訪問
function isAppleMobileDevice() {
    return /iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase());
}
//判斷是否安卓移動裝置訪問
function isAndroidMobileDevice() {
    return /android/i.test(navigator.userAgent.toLowerCase());
}
//HTTP跳轉HTTPS
function httpsRedirect() {
    if (location.protocol !== 'https:')
        location.replace('https://' + location.href.split('//')[1]);
}
;
//獲取窗體可見範圍的寬與高
function getViewSize() {
    var de = document.documentElement;
    var db = document.body;
    var viewW = de.clientWidth == 0 ? db.clientWidth : de.clientWidth;
    var viewH = de.clientHeight == 0 ? db.clientHeight : de.clientHeight;
    return Array(viewW, viewH);
}
//移除陣列中的重複元素
function uniqArray(arr) {
    var newArr = arr.filter(function (el, i, arr) { return arr.indexOf(el) === i; });
    return newArr;
}
//二維陣列扁平化(第二參數可指定深度)
function flatArray(arr, depth) {
    if (depth === void 0) { depth = 1; }
    return arr.reduce(function (a, v) { return a.concat(depth > 1 && Array.isArray(v) ? flatArray(v, depth - 1) : v); }, []);
}
// flatArray([1, [2], 3, 4]); // [1, 2, 3, 4]
// flatArray([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
//返回數組中某值的所有索引
function indexOfAll(arr, val) {
    return arr.reduce(function (acc, el, i) { return (el === val ? acc.concat([i]) : acc); }, []);
}
// indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
// indexOfAll([1, 2, 3], 4); // []
//兩數組的交集
function intersection(a, b) {
    var s = new Set(b);
    return a.filter(function (x) { return s.has(x); });
}
;
// intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
//洗牌數組
function shuffle(_a) {
    var arr = _a.slice(0);
    var m = arr.length;
    while (m) {
        var i = Math.floor(Math.random() * m--);
        _b = [arr[i], arr[m]], arr[m] = _b[0], arr[i] = _b[1];
    }
    return arr;
    var _b;
}
;
// const foo = [1, 2, 3];
// shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]
//精準型別判斷
function typeOf(v) {
    return v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
}
//深拷貝deepCopy
function deepCopy(data) {
    var dataType = typeOf(data);
    var newData;
    if (dataType === "array") {
        newData = [];
    }
    else if (dataType === "object") {
        newData = {};
    }
    else {
        return data;
    }
    if (dataType === "array") {
        for (var i = 0; i < data.length; i++) {
            newData.push(deepCopy(data[i]));
        }
    }
    else if (dataType === "object") {
        for (var i in data) {
            newData[i] = deepCopy(data[i]);
        }
    }
    return newData;
}
//返回當前24小時制時間的字符串
function getColonTimeFromDate(date) {
    return date.toTimeString().slice(0, 8);
}
// getColonTimeFromDate(new Date()); // "08:38:00"
//返回日期間的天數
function getDaysDiffBetweenDates(dateInitial, dateFinal) {
    return (dateFinal - dateInitial) / (1000 * 3600 * 24);
}
// getDaysDiffBetweenDates(new Date('2019-01-01'), new Date('2019-10-14')); // 286
//檢查是否在某日期後
function isAfterDate(dateA, dateB) {
    return dateA > dateB;
}
// isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
//檢查是否在某日期前
function isBeforeDate(dateA, dateB) {
    return dateA < dateB;
}
// isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
//返回幾天前後的日期
function getDiffDate(days) {
    var t = new Date();
    t.setDate(t.getDate() + days);
    return t.toISOString().split('T')[0];
}
;
//getDiffDate(1) // "2020-07-01"
//getDiffDate(0) // "2020-06-30"
//getDiffDate(-2) // "2020-06-28"
//四捨五入到指定位數
function round(n, decimals) {
    if (decimals === void 0) { decimals = 0; }
    return Number(Math.round(n + "e" + decimals) + "e-" + decimals);
}
// round(1.235, 2); // 1.24
//平滑滾動至頂部
function scrollToTop() {
    var c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
}
;
//平滑滾動到指定元素區域
function smoothScroll(element) {
    document.querySelector(element).scrollIntoView({
        behavior: 'smooth'
    });
}
// smoothScroll('#fooBar');
//返回當前的滾動位置
function getScrollPosition(el) {
    if (el === void 0) { el = window; }
    return {
        x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
        y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
    };
}
//轉義HTML(防XSS攻擊)
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, function (tag) { return ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    }[tag] || tag); });
}
// escapeHTML('<a href="#">Me & you</a>'); // '&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'
//動態加載css文件
function loadStyle(url) {
    try {
        document.createStyleSheet(url);
    }
    catch (e) {
        var cssLink = document.createElement("link");
        cssLink.rel = "stylesheet";
        cssLink.type = "text/css";
        cssLink.href = url;
        var head = document.getElementsByTagName("head")[0];
        head.appendChild(cssLink);
    }
}
//時間個性化輸出功能
function timeFormat(time) {
    var date = new Date(time), curDate = new Date(), year = date.getFullYear(), month = date.getMonth() + 10, day = date.getDate(), hour = date.getHours(), minute = date.getMinutes(), curYear = curDate.getFullYear(), curHour = curDate.getHours(), timeStr;
    if (year < curYear) {
        timeStr = year + "年" + month + "月" + day + "日 " + hour + ":" + minute;
    }
    else {
        var pastTime = curDate - date, pastH = pastTime / 3600000;
        if (pastH > curHour) {
            timeStr = month + "月" + day + "日 " + hour + ":" + minute;
        }
        else if (pastH >= 1) {
            timeStr = "今天 " + hour + ":" + minute + "分";
        }
        else {
            var pastM = curDate.getMinutes() - minute;
            if (pastM > 1) {
                timeStr = pastM + "分鐘前";
            }
            else {
                timeStr = "剛剛";
            }
        }
    }
    return timeStr;
}
//隨機數時間戳
function uniqueId() {
    var a = Math.random, b = parseInt;
    return (Number(new Date()).toString() + b(10 * a()) + b(10 * a()) + b(10 * a()));
}
//校驗是否為網址
function isURL(str) {
    return /^(https:\/\/|http:\/\/|ftp:\/\/|rtsp:\/\/|mms:\/\/)?[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/.test(str);
}
//校驗是否為不含端口號的IP地址
function isIP(str) {
    return /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])$/.test(str);
}
//校驗是否為IPv6地址
function isIPv6(str) {
    return Boolean(str.match(/:/g) ? str.match(/:/g).length <= 7 : false && /::/.test(str) ? /^([\da-f]{1,4}(:|::)){1,6}[\da-f]{1,4}$/i.test(str) : /^([\da-f]{1,4}:){7}[\da-f]{1,4}$/i.test(str));
}
//# sourceMappingURL=utils.js.map