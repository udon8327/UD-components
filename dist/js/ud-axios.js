// 自定義axios實例預設值
var udAxios = axios.create({
    baseURL: "https://udon8327.synology.me/ajax",
    timeout: 10000,
});
// 計算ajax數量
var ajaxCount = 0;
// 請求攔截器
udAxios.interceptors.request.use(function (config) {
    if (vm.udLoading) {
        if (ajaxCount === 0)
            vm.udLoading.open();
        ajaxCount++;
    }
    // config.data = JSON.stringify(config.data);
    return config;
}, function (error) {
    return new Promise(function (reject) {
        vm.udAlert ? vm.udAlert({ title: error.message, msg: "請求發送失敗，請稍候再試", confirm: function () { return reject(error); } }) : alert("請求發送失敗，請稍候再試");
    });
});
// 回應攔截器
udAxios.interceptors.response.use(
// 狀態碼 2xx: 回應成功
function (response) {
    if (vm.udLoading) {
        ajaxCount--;
        if (ajaxCount === 0)
            vm.udLoading.close();
    }
    return Promise.resolve(response.data);
}, 
// 狀態碼 3xx: 重新導向, 4xx: 用戶端錯誤, 5xx: 伺服器錯誤
function (error) {
    if (vm.udLoading) {
        ajaxCount--;
        if (ajaxCount === 0)
            vm.udLoading.close();
    }
    return new Promise(function (resolve, reject) {
        // 請求已發出，有收到錯誤回應
        if (error.response) {
            var errorMsg = "";
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
                    errorMsg = "\u767C\u751F\u932F\u8AA4\uFF1A" + error.response.status + "\uFF0C\u8ACB\u7A0D\u5019\u518D\u8A66";
            }
            // 自定義錯誤訊息
            if (error.response.data.message)
                errorMsg = error.response.data.message;
            vm.udAlert ? vm.udAlert({ title: error.message, msg: errorMsg, confirm: function () { return reject(error); } }) : alert(errorMsg);
            // 請求已發出，但没有收到回應
        }
        else if (error.request) {
            vm.udAlert ? vm.udAlert({ title: error.message, msg: "伺服器沒有回應\n，請稍候再試", confirm: function () { return reject(error); } }) : alert("伺服器沒有回應，請稍候再試");
            // 請求被取消或發送請求時異常
        }
        else {
            vm.udAlert ? vm.udAlert({ title: error.message, msg: "請求被取消或發送請求時異常，請稍候再試", confirm: function () { return reject(error); } }) : alert("請求被取消或發送請求時異常，請稍候再試");
        }
    });
    // return Promise.reject(error)
});
//# sourceMappingURL=ud-axios.js.map
//# sourceMappingURL=ud-axios.js.map