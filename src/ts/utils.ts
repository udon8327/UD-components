//-----------------------字串相關-----------------------
//將字串內換行符\n轉為<br>
function nl2br(str) {
  return str.replace(/([^>])\n/g, "$1<br/>\n");
}

//取得隨機十六進制顏色
function randomHexColorCode(){
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

//取得隨機字串
function randomString(len) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  const maxPos = chars.length;
  let str = "";
  for (let i = 0; i < len; i++) {
    str += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return str;
}

//複製文字至剪貼簿
function copyTextToClipboard(id) {
  let textRange = document.createRange();
	textRange.selectNode(document.getElementById(id));
  let sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(textRange);
	document.execCommand("copy");
	alert('複製成功');
}

function copyTxt()
{
  let Url2=document.getElementById("aa");
  Url2.select(); // 選擇物件
  document.execCommand("Copy"); // 執行瀏覽器複製命令
  alert("已複製好，可貼粘。");
}

//轉義HTML(防XSS攻擊)
function escapeHTML(str){
  return str.replace(/[&<>'"]/g,tag =>({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
    }[tag] || tag)
  );
}
  // escapeHTML('<a href="#">Me & you</a>'); // '&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'

//-----------------------數字相關-----------------------
//取得範圍內隨機數
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//四捨五入到指定位數
function round(n, decimals = 0){
  return Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);
}
  // round(1.235, 2); // 1.24

//-----------------------圖片相關-----------------------
//預載圖片
function imagePreload(src) {
  let img = new Image();
  img.src = src;
}

//-----------------------陣列相關-----------------------
//陣列是否有重複值
function isRepeat(arr){
  let arrStr = JSON.stringify(arr);
  for (let i = 0; i < arr.length; i++) {
    if ((arrStr.match(new RegExp(arr[i],"g")).length)>1){
      return true;
    }
  };
  return false;
}

//移除陣列中的重複元素
function uniqArray(arr) {
  let newArr = arr.filter((el, i, arr) => arr.indexOf(el) === i);
  return newArr;
}

//二維陣列扁平化(第二參數可指定深度)
function flatArray(arr, depth = 1){
  return arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatArray(v, depth - 1) : v), []);
}
  // flatArray([1, [2], 3, 4]); // [1, 2, 3, 4]
  // flatArray([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]

//返回陣列中某值的所有索引
function indexOfAll(arr, val){
  return arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
}
  // indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
  // indexOfAll([1, 2, 3], 4); // []

//兩陣列的交集
function intersection(a, b){
  const s = new Set(b);
  return a.filter(x => s.has(x));
};
  // intersection([1, 2, 3], [4, 3, 2]); // [2, 3]

//洗牌陣列
function shuffle([...arr]){
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};
  // const foo = [1, 2, 3];
  // shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]

//-----------------------物件相關-----------------------
//精準型別判斷
function typeOf(v){
  return v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
}

//深拷貝deepCopy
function deepCopy(data) {
  const dataType = typeOf(data);
  let newData;
  if (dataType === "array") {
    newData = [];
  } else if (dataType === "object") {
    newData = {};
  } else {
    return data;
  }
  if (dataType === "array") {
    for (let i = 0; i < data.length; i++) {
      newData.push(deepCopy(data[i]));
    }
  } else if (dataType === "object") {
    for (let i in data) {
      newData[i] = deepCopy(data[i]);
    }
  }
  return newData;
}

//-----------------------時間相關-----------------------
//返回當前24小時制時間的字符串
function getColonTimeFromDate(date){
  return date.toTimeString().slice(0, 8);
}
  // getColonTimeFromDate(new Date()); // "08:38:00"

//返回日期間的天數
function getDaysDiffBetweenDates(dateInitial, dateFinal){
  return (dateFinal - dateInitial) / (1000 * 3600 * 24);
}
  // getDaysDiffBetweenDates(new Date('2019-01-01'), new Date('2019-10-14')); // 286

//檢查是否在某日期後
function isAfterDate(dateA, dateB){
  return dateA > dateB;
}
  // isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true

//檢查是否在某日期前
function isBeforeDate(dateA, dateB){
  return dateA < dateB;
}
  // isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true

//返回幾天前後的日期
function getDiffDate(days){
  let t = new Date();
  t.setDate(t.getDate() + days);
  return t.toISOString().split('T')[0];
};
  //getDiffDate(1) // "2020-07-01"
  //getDiffDate(0) // "2020-06-30"
  //getDiffDate(-2) // "2020-06-28"

//時間個性化輸出功能
function timeFormat(time) {
  let date = new Date(time),
    curDate = new Date(),
    year = date.getFullYear(),
    month = date.getMonth() + 10,
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    curYear = curDate.getFullYear(),
    curHour = curDate.getHours(),
    timeStr;
  if (year < curYear) {
    timeStr = year + "年" + month + "月" + day + "日 " + hour + ":" + minute;
  } else {
    let pastTime = curDate - date,
      pastH = pastTime / 3600000;
    if (pastH > curHour) {
      timeStr = month + "月" + day + "日 " + hour + ":" + minute;
    } else if (pastH >= 1) {
      timeStr = "今天 " + hour + ":" + minute + "分";
    } else {
      let pastM = curDate.getMinutes() - minute;
      if (pastM > 1) {
        timeStr = pastM + "分鐘前";
      } else {
        timeStr = "剛剛";
      }
    }
  }
  return timeStr;
}

//隨機數時間戳
function uniqueId() {
  return (
    Number(new Date()).toString() + parseInt(10 * Math.random()) + parseInt(10 * Math.random()) + parseInt(10 * Math.random())
  );
}

//-----------------------DOM相關-----------------------
//瞬間滾動至頂部
function anchorTop(){
  window.scrollTo(0,0);
}

//瞬間滾動至指定元素
function anchorElement(targetId){
  let target = document.getElementById(targetId);
  window.scrollTo(0,target.offsetTop);
}

//瞬間滾動至底部
function anchorBottom(){
  window.scrollTo(0,document.body.scrollHeight);
}

//平滑滾動至頂部
function scrollToTop(){
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

//平滑滾動到指定元素區域
function smoothScroll(element){
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
}
  // smoothScroll('#fooBar');

//返回當前的滾動位置
function getScrollPosition(el = window){
  return {
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
  }
}

//獲取移動設備初始化大小
function getInitZoom() {
  if (!this._initZoom) {
    let screenWidth = Math.min(screen.height, screen.width);
    if (this.isAndroidMobileDevice() && !this.isNewChromeOnAndroid()) {
      screenWidth = screenWidth / window.devicePixelRatio;
    }
    this._initZoom = screenWidth / document.body.offsetWidth;
  }
  return this._initZoom;
}

//獲取頁面高度
function getPageHeight() {
  let g = document,
    a = g.body,
    f = g.documentElement,
    d = g.compatMode == "BackCompat" ? a : g.documentElement;
  return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight);
}

//獲取頁面scrollLeft
function getPageScrollLeft() {
  let a = document;
  return a.documentElement.scrollLeft || a.body.scrollLeft;
}

//獲取頁面scrollTop
function getPageScrollTop() {
  let a = document;
  return a.documentElement.scrollTop || a.body.scrollTop;
}

//獲取頁面可視高度
function getPageViewHeight() {
  let d = document,
    a = d.compatMode == "BackCompat" ? d.body : d.documentElement;
  return a.clientHeight;
}

//獲取頁面可視寬度
function getPageViewWidth() {
  let d = document,
    a = d.compatMode == "BackCompat" ? d.body : d.documentElement;
  return a.clientWidth;
}

//獲取頁面寬度
function getPageWidth() {
  let g = document,
    a = g.body,
    f = g.documentElement,
    d = g.compatMode == "BackCompat" ? a : g.documentElement;
  return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);
}

//獲取移動設備螢幕寬度
function getScreenWidth() {
  let smallerSide = Math.min(screen.width, screen.height);
  let fixViewPortsExperiment =
    rendererModel.runningExperiments.FixViewport ||
    rendererModel.runningExperiments.fixviewport;
  let fixViewPortsExperimentRunning =
    fixViewPortsExperiment && fixViewPortsExperiment.toLowerCase() === "new";
  if (fixViewPortsExperiment) {
    if (this.isAndroidMobileDevice() && !this.isNewChromeOnAndroid()) {
      smallerSide = smallerSide / window.devicePixelRatio;
    }
  }
  return smallerSide;
}

//獲取網頁被捲去的位置
function getScrollXY() {
  return document.body.scrollTop
    ? {
        x: document.body.scrollLeft,
        y: document.body.scrollTop
      }
    : {
        x: document.documentElement.scrollLeft,
        y: document.documentElement.scrollTop
      };
}

//獲取窗體可見範圍的寬與高
function getViewSize() {
  let de = document.documentElement;
  let db = document.body;
  let viewW = de.clientWidth == 0 ? db.clientWidth : de.clientWidth;
  let viewH = de.clientHeight == 0 ? db.clientHeight : de.clientHeight;
  return Array(viewW, viewH);
}

//獲取移動設備最大化大小
function getZoom() {
  let screenWidth =
    Math.abs(window.orientation) === 90
      ? Math.max(screen.height, screen.width)
      : Math.min(screen.height, screen.width);
  if (this.isAndroidMobileDevice() && !this.isNewChromeOnAndroid()) {
    screenWidth = screenWidth / window.devicePixelRatio;
  }
  let FixViewPortsExperiment =
    rendererModel.runningExperiments.FixViewport ||
    rendererModel.runningExperiments.fixviewport;
  let FixViewPortsExperimentRunning =
    FixViewPortsExperiment &&
    (FixViewPortsExperiment === "New" || FixViewPortsExperiment === "new");
  if (FixViewPortsExperimentRunning) {
    return screenWidth / window.innerWidth;
  } else {
    return screenWidth / document.body.offsetWidth;
  }
}

//-----------------------校驗相關-----------------------
//校驗是否為網址
function isURL(str) {
  return /^(https:\/\/|http:\/\/|ftp:\/\/|rtsp:\/\/|mms:\/\/)?[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/.test(str);
}

//校驗是否為不含端口號的IP地址
function isIP(str) {
  return /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])$/.test(str);
}

//校驗是否為IPv6地址
function isIPv6(str){
  return Boolean(str.match(/:/g)?str.match(/:/g).length<=7:false && /::/.test(str)?/^([\da-f]{1,4}(:|::)){1,6}[\da-f]{1,4}$/i.test(str):/^([\da-f]{1,4}:){7}[\da-f]{1,4}$/i.test(str));
}

//-----------------------瀏覽器相關-----------------------
//動態加載css文件
function loadStyle(url) {
  try {
    document.createStyleSheet(url);
  } catch (e) {
    let cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.type = "text/css";
    cssLink.href = url;
    let head = document.getElementsByTagName("head")[0];
    head.appendChild(cssLink);
  }
}

//取得LocalStorage的值
function getLocalStorage(key) {
  return localStorage.getItem(key);
}

//設定LocalStorage的值
function setLocalStorage(key, val) {
  localStorage.setItem(key, val);
}

//取得Cookie的值
function getCookie(name) {
  let arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
  if (arr != null) return unescape(arr[2]);
  return null;
}

//設置cookie值
function setCookie(name, value, Hours) {
  var d = new Date();
  var offset = 8;
  var utc = d.getTime() + d.getTimezoneOffset() * 60000;
  var nd = utc + 3600000 * offset;
  var exp = new Date(nd);
  exp.setTime(exp.getTime() + Hours * 60 * 60 * 1000);
  document.cookie =
    name +
    "=" +
    escape(value) +
    ";path=/;expires=" +
    exp.toGMTString() +
    ";domain=360doc.com;";
}

//動態載入插件
function insertPlugin(src){
  let script = document.createElement('script');
  script.setAttribute('src', src);
  document.head.appendChild(script);
}

//-----------------------網路相關-----------------------
//查詢網址所帶參數
function queryString(key) {
  let url = location.href;
  if (url.indexOf("?") != -1) {
    let arr = url.split("?")[1].split("&");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].split("=")[0] == key) return arr[i].split("=")[1];
    }
  }
}

//HTTP跳轉HTTPS
function httpsRedirect(){
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

//檢驗URL連接是否有效
function getUrlState(URL) {
  var xmlhttp = new ActiveXObject("microsoft.xmlhttp");
  xmlhttp.Open("GET", URL, false);
  try {
    xmlhttp.Send();
  } catch (e) {
  } finally {
    var result = xmlhttp.responseText;
    if (result) {
      if (xmlhttp.Status == 200) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

//-----------------------裝置相關-----------------------
//判斷是否移動裝置訪問
function isMobileUserAgent() {
  return /iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(
    window.navigator.userAgent.toLowerCase()
  );
}

//判斷是否蘋果移動裝置訪問
function isAppleMobileDevice() {
  return /iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase());
}

//判斷是否安卓移動裝置訪問
function isAndroidMobileDevice() {
  return /android/i.test(navigator.userAgent.toLowerCase());
}