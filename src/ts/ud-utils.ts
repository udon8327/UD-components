declare var $: (selector: string) => any;

/*
==================== 工具函數目錄 ====================
String
  將字串內換行符\n轉為<br> -----> convertNl
  取得隨機十六進制顏色 -----> randomHexColorCode
  取得隨機字串 -----> randomString
  金錢加入千分位逗號 -----> formatNumber
  複製文字至剪貼簿 -----> copyTextToClipboard
  複製文字至剪貼簿2 -----> copyTxt
  轉義HTML(防XSS攻擊) -----> escapeHTML
  駝峰式轉換 -----> convertCamelCase

Number
  取得範圍內隨機數 -----> getRandom
  四捨五入到指定位數 -----> round

Image
  預載圖片 -----> imagePreload

Array
  陣列是否有重複值 -----> isRepeat
  移除陣列中的重複元素 -----> uniqArray
  二維陣列扁平化(第二參數可指定深度) -----> flatArray
  返回陣列中某值的所有索引 -----> indexOfAll
  兩陣列的交集 -----> intersection
  洗牌陣列 -----> shuffle

Object
  精準型別判斷 -----> typeOf
  深拷貝 -----> deepCopy

Time
  檢查是否為閏年 -----> isLeapYear
  檢查日期是否存在 -----> isExistDate
  返回當前24小時制時間的字符串 -----> getColonTimeFromDate
  返回日期間的天數 -----> getDaysDiffBetweenDates
  檢查是否在某日期後 -----> isAfterDate
  檢查是否在某日期前 -----> isBeforeDate
  返回幾天前後的日期 -----> getDiffDate
  時間個性化輸出功能 -----> timeFormat
  隨機數時間戳 -----> uniqueId

DOM
  瞬間滾動至頂部 -----> anchorTop
  瞬間滾動至指定元素 -----> anchorElement
  瞬間滾動至底部 -----> anchorBottom
  平滑滾動至頂部 -----> scrollToTop
  平滑滾動到指定元素區域 -----> smoothScroll
  返回當前的滾動位置 -----> getScrollPosition
  獲取移動設備初始化大小 -----> getInitZoom
  獲取頁面高度 -----> getPageHeight
  獲取頁面scrollLeft -----> getPageScrollLeft
  獲取頁面scrollTop -----> getPageScrollTop
  獲取頁面可視高度 -----> getPageViewHeight
  獲取頁面可視寬度 -----> getPageViewWidth
  獲取頁面寬度 -----> getPageWidth
  獲取移動設備螢幕寬度 -----> getScreenWidth
  獲取網頁被捲去的位置 -----> getScrollXY
  獲取窗體可見範圍的寬與高 -----> getViewSize
  獲取移動設備最大化大小 -----> getZoom

Verify
  各種校驗綜合函式 -----> validate

Browser
  動態加載css文件 -----> loadStyle
  取得LocalStorage的值 -----> getLocalStorage
  設定LocalStorage的值 -----> setLocalStorage
  取得Cookie的值 -----> getCookie
  設置cookie值 -----> setCookie
  動態載入插件 -----> insertPlugin

Web
  查詢網址所帶參數 -----> queryString
  HTTP跳轉HTTPS -----> httpsRedirect
  檢驗URL連接是否有效 -----> getUrlState
  跳頁後強制刷新 -----> pageReload
  網址跳轉 -----> toUrl
  CDN備援 -----> cdnBackup

Device
  判斷是否移動裝置 -----> isMobileUserAgent
  判斷是否蘋果移動裝置 -----> isAppleMobileDevice
  判斷是否安卓移動裝置 -----> isAndroidMobileDevice
*/

//初始化執行
cdnBackup();

//-----------------------String-----------------------
//將字串內換行符\n轉為<br>
function nl2br(str, is_xhtml) {
  if (typeof str === 'undefined' || str === null) {
      return '';
  }
  let breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
  return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
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

//金錢加入千分位逗號
  //formatNumber(99999); -> 99,999
function formatNumber(val){
  let num = val.toString();
  let pattern = /(-?\d+)(\d{3})/;
  while(pattern.test(num)){
    num = num.replace(pattern, "$1,$2");
  }
  return num;
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

//複製文字至剪貼簿2
function copyTxt()
{
  let Url2=document.getElementById("aa");
  Url2.select(); // 選擇物件
  document.execCommand("Copy"); // 執行瀏覽器複製命令
  alert("已複製好，可貼粘。");
}

//轉義HTML(防XSS攻擊)
  //escapeHTML('<a href="#">Me & you</a>'); -> '&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'
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

//駝峰式轉換
  //convertCamelCase("camelCase"); -> camel-case
function convertCamelCase(str){
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
}

//-----------------------Number-----------------------
//取得範圍內隨機數
function getRandom(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//四捨五入到指定位數
  //round(1.235, 2); -> 1.24
function round(n, decimals = 0){
  return Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);
}

//-----------------------Image-----------------------
//預載圖片
function imagePreload(src) {
  let img = new Image();
  img.src = src;
}

//-----------------------Array-----------------------
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
  //flatArray([1, [2], 3, 4]); -> [1, 2, 3, 4]
  //flatArray([1, [2, [3, [4, 5], 6], 7], 8], 2); -> [1, 2, 3, [4, 5], 6, 7, 8]
function flatArray(arr, depth = 1){
  return arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatArray(v, depth - 1) : v), []);
}

//返回陣列中某值的所有索引
  //indexOfAll([1, 2, 3, 1, 2, 3], 1); -> [0,3]
  //indexOfAll([1, 2, 3], 4); -> []
function indexOfAll(arr, val){
  return arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
}

//兩陣列的交集
  //intersection([1, 2, 3], [4, 3, 2]); -> [2, 3]
function intersection(a, b){
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

//洗牌陣列
  //const foo = [1, 2, 3];
  //shuffle(foo); -> [2, 3, 1];
  //foo = [1, 2, 3];
function shuffle([...arr]){
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

//-----------------------Object-----------------------
//精準型別判斷
function typeOf(v){
  return v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
}

//過濾物件鍵值
  //filterObj(test,["name","gender"]);
function filterObj(obj,arr){
  let tempObj = JSON.parse(JSON.stringify(obj));
  for(let i in tempObj){
    if(arr.indexOf(i) === -1) delete tempObj[i];
  }
  return tempObj;
}

//刪除物件鍵值
  //deleteObj(test,["name","gender"]);
function deleteObj(obj,arr){
  let tempObj = JSON.parse(JSON.stringify(obj));
  for(let i in tempObj){
    if(arr.indexOf(i) !== -1) delete tempObj[i];
  }
  return tempObj;
}

//深拷貝
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

//-----------------------Time-----------------------
//檢查是否為閏年
function isLeapYear(year){
  return new Date(year, 1, 29).getDate() === 29;
}

//檢查日期是否存在
  //isExistDate("2020-02-29"); -> true
  //isExistDate("2019/02/29","/"); -> false
function isExistDate(dateStr, split = "-") {
  let dateArr = dateStr.split(split);
  let limitInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let theYear = parseInt(dateArr[0]);
  let theMonth = parseInt(dateArr[1]);
  let theDay = parseInt(dateArr[2]);
  let isLeap = new Date(theYear, 1, 29).getDate() === 29; 
  if (isLeap) limitInMonth[1] = 29;
  return theDay > 0 && theDay <= limitInMonth[theMonth - 1];
}

//返回當前24小時制時間的字符串
  //getColonTimeFromDate(new Date()); -> "08:38:00"
function getColonTimeFromDate(date){
  return date.toTimeString().slice(0, 8);
}

//返回日期間的天數
  //getDaysDiffBetweenDates(new Date('2019-01-01'), new Date('2019-10-14')); -> 286
function getDaysDiffBetweenDates(dateInitial, dateFinal){
  return (dateFinal - dateInitial) / (1000 * 3600 * 24);
}

//檢查是否在某日期後
  //isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); -> true
function isAfterDate(dateA, dateB){
  return dateA > dateB;
}

//檢查是否在某日期前
  //isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); -> true
function isBeforeDate(dateA, dateB){
  return dateA < dateB;
}

//返回幾天前後的日期
  //getDiffDate(1); -> "2020-07-01"
  //getDiffDate(0); -> "2020-06-30"
  //getDiffDate(-2); -> "2020-06-28"
function getDiffDate(days){
  let t = new Date();
  t.setDate(t.getDate() + days);
  return t.toISOString().split('T')[0];
};

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

//-----------------------DOM-----------------------
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

//-----------------------Verify-----------------------
//各種校驗綜合函式
function validate(type, str, regex){
  switch (type) {
    //校驗是否為姓名(不含符號)
    case "name":
      return /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(str);
      break;
    //校驗是否為手機號碼
    case "phone":
      return /^09\d{8}$/.test(str);
      break;
    //校驗是否為電子郵件
    case "email":
      return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(str);
      break;
    //校驗是否為身分證字號
    case "id":
      return /^[A-Z]\d{9}$/.test(str);
      break;
    //校驗是否為西元日期格式(1996-08-06)
    case "date":
      return /^\d{4}-\d{2}-\d{2}$/.test(str);
      break;
    //校驗是否為網址
    case "url":
      return /^(https:\/\/|http:\/\/|ftp:\/\/|rtsp:\/\/|mms:\/\/)?[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/.test(str);
      break;
    //校驗是否為不含端口號的IP地址
    case "ip":
      return /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])$/.test(str);
      break;
    //校驗是否為IPv6地址
    case "ipv6":
      return Boolean(str.match(/:/g)?str.match(/:/g).length<=7:false && /::/.test(str)?/^([\da-f]{1,4}(:|::)){1,6}[\da-f]{1,4}$/i.test(str):/^([\da-f]{1,4}:){7}[\da-f]{1,4}$/i.test(str));
      break;
    //校驗是否為指定正則表達式
    case "regex":
      let regexMode = new RegExp(regex);
      return regexMode.test(str);
      break;
  }
}

//-----------------------Browser-----------------------
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

//-----------------------Web-----------------------
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

//跳頁後強制刷新
function pageReload(){
  window.onpageshow = function(event) {
    if (event.persisted) {
      window.location.reload() 
    }
  };
}

//網址跳轉
function toUrl(url){
  window.location.href = url;
}

//CDN備援機制
function cdnBackup(){
  if(!window.Vue){
    document.write(`
      <link href="https://pro.fontawesome.com/releases/v5.13.1/css/fontawesome.css" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/npm/animate.css@3.7.2/animate.min.css" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/npm/element-ui@2.13.2/lib/theme-chalk/index.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js"><\/script>
      <script src="https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js"><\/script>
      <script src="https://cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js"><\/script>
      <script src="https://cdn.jsdelivr.net/npm/@braid/vue-formulate@2.4.3/dist/formulate.min.js"><\/script>
      <script src="https://cdn.jsdelivr.net/npm/element-ui@2.13.2/lib/index.js"><\/script>
    `);
    console.log("CDN出現問題!!");
  }
}

//-----------------------Device-----------------------
//判斷是否移動裝置
function isMobileUserAgent() {
  return /iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(
    window.navigator.userAgent.toLowerCase()
  );
}

//判斷是否蘋果移動裝置
function isAppleMobileDevice() {
  return /iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase());
}

//判斷是否安卓移動裝置
function isAndroidMobileDevice() {
  return /android/i.test(navigator.userAgent.toLowerCase());
}