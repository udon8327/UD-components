//將字串內換行符\n轉為<br>
function nl2br(str) {
  return str.replace(/([^>])\n/g, "$1<br/>\n");
}

//查詢網址所帶參數
function queryString(key) {
  let url = location.href;
  if(url.indexOf('?') != -1) {
    let arr = url.split('?')[1].split('&');
    for(let i = 0; i < arr.length; i++) {
      if(arr[i].split('=')[0] == key)
        return arr[i].split('=')[1];
    }
  }
}