// axios 全局預設值
// axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL; // API基礎路徑
// axios.defaults.timeout = 30000; // 請求超時時間
// axios.defaults.withCredentials = true; // 允許攜帶cookie
/**
 * udAxios 額外config值
 * @param {Boolean} fullRes 成功時回傳完整response
 * @param {Boolean} default 直接返回錯誤不作任何處理
 * @param {Boolean} noAlert 關閉自動alert
 * @param {Array} noAlertCode 關閉自動alert的錯誤code名單
 * @param {Object} alert 客製化alert效果
 * @param {Boolean} noLoading 關閉loading效果
 * @param {Object} loading 客製化loading效果
 */
// udAxios 自定義預設值
var udAxios = axios.create({
    baseURL: "https://private-anon-b20c11c638-e26.apiary-mock.com",
    timeout: 30000,
});
var ajaxCount = 0; // 計算ajax數量
// 請求攔截器
udAxios.interceptors.request.use(function (config) {
    if (!config.noLoading) {
        if (ajaxCount === 0)
            vm.udLoading.open(config.loading);
        ajaxCount++;
    }
    return config;
}, function (error) {
    vm.udAlert("請求發送失敗/n請稍候再試");
    return Promise.reject(error);
});
// 回應攔截器
udAxios.interceptors.response.use(
// 狀態碼 2xx: 回應成功
function (response) {
    if (!response.config.noLoading) {
        ajaxCount--;
        if (ajaxCount === 0)
            vm.udLoading.close();
    }
    return response.config.fullRes ? response : response.data;
}, 
// 狀態碼 3xx: 重新導向, 4xx: 用戶端錯誤, 5xx: 伺服器錯誤
function (error) {
    if (!error.config.noLoading) {
        ajaxCount--;
        if (ajaxCount === 0)
            vm.udLoading.close();
    }
    if (error.config.default)
        return Promise.reject(error);
    // 定義錯誤訊息
    var errorMsg = "";
    if (error.response) {
        errorMsg = statusMsg[error.response.status] ? statusMsg[error.response.status] : "發生未知的錯誤";
        if (error.response.data && error.response.data.message)
            errorMsg = error.response.data.message;
    }
    else if (error.request) {
        errorMsg = "請求逾時或伺服器沒有回應";
    }
    else {
        errorMsg = "請求被取消或發送請求時異常";
    }
    // 定義警告彈窗
    var alertConfig = { msg: errorMsg };
    Object.assign(alertConfig, error.config.alert);
    // 定義錯誤處理
    var code = error.response && error.response.data && error.response.data.code;
    if (code) {
        switch (code) {
            // case '984': // LINE 尚未登入，前台使用
            //   udAxios.get(`/api/line/login/verify?url=${ encodeURIComponent(window.location) }`, {
            //     default: true
            //   })
            //     .then(res => console.log('已登入'))
            //     .catch(err => location.href = err.response.data.data.url);
            //   break;
            default:
                if (!(error.config.noAlertCode && error.config.noAlertCode.some(function (error) { return error == code; }))) {
                    if (!error.config.noAlert)
                        vm.udAlert(alertConfig);
                }
        }
    }
    else {
        if (!error.config.noAlert)
            vm.udAlert(alertConfig);
    }
    // 拋回錯誤
    console.log("errorCode: " + code + ", errorMsg: " + errorMsg);
    return Promise.reject(error);
});
var statusMsg = {
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
};
//# sourceMappingURL=ud-axios.js.map