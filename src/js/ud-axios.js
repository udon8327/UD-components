/**
 * udAxios 額外config值
 * @param {Boolean} noAlert 關閉alert效果
 * @param {Boolean} noLoading 關閉loading效果
 * @param {Boolean} fullRes 成功時回傳完整res
 * @param {Object} alert 客製化alert效果
 * @param {Object} loading 客製化loading效果
 */

// 自定義axios實例預設值
const udAxios = axios.create({
  baseURL: "https://udon8327.synology.me:8000",
  timeout: 30000, // 請求超時時間
  // headers: {
  //   authorization: 'Bearer token',
  // },
  // auth: {}, // 設置Authorization頭
  // withCredentials: true, // 允許攜帶cookie
  // responseType: "json", // 指定回傳格式
})

// 計算ajax數量
let ajaxCount = 0;

// 請求攔截器
udAxios.interceptors.request.use(
  config => {
    if(vm.udLoading && !config.noLoading){
      if(ajaxCount === 0) vm.udLoading.open(config.loading);
      ajaxCount++;
    }
    // config.data = JSON.stringify(config.data);
    return config;
  },
  error => {
    udAlert ? udAlert({title: error.message, msg: "請求發送失敗"}) : alert("請求發送失敗");
  }
)

// 回應攔截器
udAxios.interceptors.response.use(
  // 狀態碼 2xx: 回應成功
  response => {
    if(vm.udLoading && !response.config.noLoading){
      ajaxCount--;
      if(ajaxCount === 0) vm.udLoading.close();
    }
    return Promise.resolve(response.config.fullRes ? response : response.data);
  },
  // 狀態碼 3xx: 重新導向, 4xx: 用戶端錯誤, 5xx: 伺服器錯誤
  error => {
    if(vm.udLoading && !error.config.noLoading) {
      ajaxCount--;
      if(ajaxCount === 0) vm.udLoading.close();
    }

    // 定義錯誤訊息
    let errorMsg = "";
    let errorUrl = "";
    // 請求已發出，有收到錯誤回應
    if(error.response) {
      errorMsg = statusMsg[error.response.status] ? statusMsg[error.response.status] : "發生未知的錯誤";
      // error帶入message可自定義錯誤訊息
      if(error.response.data && error.response.data.message) errorMsg = error.response.data.message;
      if(error.response.data && error.response.data.url) errorUrl = error.response.data.url;
    // 請求已發出，但没有收到回應
    }else if(error.request) {
      errorMsg = "伺服器沒有回應";
    // 請求被取消或發送請求時異常
    }else {
      errorMsg = "請求被取消或發送請求時異常";
    }

    return new Promise((resolve, reject) => {
      if(error.config.noAlert){
        reject(error);
        return;
      }
      if(udAlert) {
        let alertConfig = {
          // title: `${error.response.status} ${error.response.statusText}`,
          msg: errorMsg,
          onConfirm: () => reject(error)
        }
        if(errorUrl) alertConfig.onConfirm = () => location.href = errorUrl;

        // 客製化錯誤處理
        // if(error.response.status === 401) {
        //   location.href = '';
        //   return;
        // }
        // if (error.response.status === 400) {
        //     alertConfig.onConfirm = () => location.href = '';
        // }

        Object.assign(alertConfig, error.config.alert);
        udAlert(alertConfig);
      }else {
        alert(errorMsg);
        reject(error);
      }
    })

  }
);

const statusMsg = {
  300: '自行選擇重新導向',
  301: '要求的網頁已經永久改變網址',
  302: '暫時重新導向',
  303: '對應當前請求的回應可以在另一個URI上被找到',
  304: '資源未被修改',
  305: '請求的資源必須通過指定的代理才能被存取',
  307: '暫時重新導向',
  308: '永久重新導向',
  400: '錯誤的請求',
  401: '拒絕存取',
  402: '需要支付方式',
  403: '禁止使用',
  404: '找不到頁面',
  405: 'HTTP方法不受允許',
  406: '瀏覽器不接受要求頁面的MIME類型',
  407: '需要Proxy驗證',
  408: '請求逾時',
  409: '資源狀態衝突',
  410: '資源已不存在',
  411: '要求的Content-Length沒有定義',
  412: '指定條件失敗',
  413: '要求的實體太大',
  414: '要求的URI太長',
  415: '不支援的媒體類型',
  416: '無法滿足要求的範圍',
  417: '執行失敗',
  500: '內部伺服器錯誤',
  501: '標頭值指定未實作的設定',
  502: '無效的回應',
  503: '服務無法使用',
  504: '閘道逾時',
  505: '不支援的HTTP版本',
}