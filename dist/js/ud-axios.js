/**
 * udAxios 額外config值
 * @param {Boolean} noAlert 關閉alert效果
 * @param {Boolean} noLoading 關閉loading效果
 * @param {Boolean} fullRes 成功時回傳完整res
 * @param {Object} alert 客製化alert效果
 * @param {Object} loading 客製化loading效果
 */
// 自定義axios實例預設值
var udAxios = axios.create({
    baseURL: "https://udon8327.synology.me/ajax",
    timeout: 10000,
});
// 計算ajax數量
var ajaxCount = 0;
// 請求攔截器
udAxios.interceptors.request.use(function (config) {
    if (vm.udLoading && !config.noLoading) {
        if (ajaxCount === 0)
            vm.udLoading.open(config.loading);
        ajaxCount++;
    }
    // config.data = JSON.stringify(config.data);
    return config;
}, function (error) {
    vm.udAlert ? vm.udAlert({ title: error.message, msg: "請求發送失敗，請稍候再試" }) : alert("請求發送失敗，請稍候再試");
});
// 回應攔截器
udAxios.interceptors.response.use(
// 狀態碼 2xx: 回應成功
function (response) {
    if (vm.udLoading && !response.config.noLoading) {
        ajaxCount--;
        if (ajaxCount === 0)
            vm.udLoading.close();
    }
    return Promise.resolve(response.config.fullRes ? response : response.data);
}, 
// 狀態碼 3xx: 重新導向, 4xx: 用戶端錯誤, 5xx: 伺服器錯誤
function (error) {
    if (vm.udLoading && !error.config.noLoading) {
        ajaxCount--;
        if (ajaxCount === 0)
            vm.udLoading.close();
    }
    var errorMsg = "";
    // 請求已發出，有收到錯誤回應
    if (error.response) {
        switch (error.response.status) {
            case 400:
                errorMsg = "錯誤的請求，請稍候再試";
                break;
            case 401:
                errorMsg = "拒絕存取，請稍候再試";
                break;
            case 403:
                errorMsg = "禁止使用，請稍候再試";
                break;
            case 404:
                errorMsg = "找不到該頁面，請稍候再試";
                break;
            case 500:
                errorMsg = "伺服器出錯，請稍候再試";
                break;
            case 503:
                errorMsg = "服務失效，請稍候再試";
                break;
            default:
                errorMsg = "發生錯誤，請稍候再試";
        }
        // 自定義錯誤訊息
        if (error.response.data)
            errorMsg = error.response.data.message || "發生錯誤，請稍候再試";
        // 請求已發出，但没有收到回應
    }
    else if (error.request) {
        errorMsg = "伺服器沒有回應，請稍候再試";
        // 請求被取消或發送請求時異常
    }
    else {
        errorMsg = "請求被取消或發送請求時異常，請稍候再試";
    }
    return new Promise(function (resolve, reject) {
        if (error.config.noAlert) {
            reject(error);
            return;
        }
        if (vm.udAlert) {
            var alertConfig = {
                title: error.message,
                msg: errorMsg,
                confirm: function () { return reject(error); }
            };
            Object.assign(alertConfig, error.config.alert);
            vm.udAlert(alertConfig);
        }
        else {
            alert(errorMsg);
            reject(error);
        }
    });
});
//# sourceMappingURL=ud-axios.js.map
//# sourceMappingURL=ud-axios.js.map