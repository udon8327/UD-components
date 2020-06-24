//將字串內換行符\n轉為<br>
function nl2br(str) {
  return str.replace(/([^>])\n/g, "$1<br/>\n");
}

//取得範圍內隨機數
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

//預載圖片
function imagePreload(src) {
  let img = new Image();
  img.src = src;
}

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

//獲取窗體可見範圍的寬與高
function getViewSize() {
  let de = document.documentElement;
  let db = document.body;
  let viewW = de.clientWidth == 0 ? db.clientWidth : de.clientWidth;
  let viewH = de.clientHeight == 0 ? db.clientHeight : de.clientHeight;
  return Array(viewW, viewH);
}

//移除陣列中的重複元素
function uniqArray(arr) {
  let newArr = arr.filter((el, i, arr) => arr.indexOf(el) === i);
  return newArr;
}

//二維陣列扁平化
function flatArray(arr) {
  let newArr = [].concat.apply([], arr);
  return newArr;
}

//精準型別判斷
function typeOf(obj) {
  const toString = Object.prototype.toString;
  const map = {
    "[object Boolean]": "boolean",
    "[object Number]": "number",
    "[object String]": "string",
    "[object Function]": "function",
    "[object Array]": "array",
    "[object Date]": "date",
    "[object RegExp]": "regExp",
    "[object Undefined]": "undefined",
    "[object Null]": "null",
    "[object Object]": "object"
  };
  return map[toString.call(obj)];
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

