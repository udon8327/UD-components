/*
==================== TODO ====================
彈窗組件支援自定義top高度
彈窗組件支援自定義body固定
彈窗組件支援多重彈窗
彈窗組件支援多種動畫效果
表單組件樣式重整
表單組件支援disabled
編寫通用連動select
編寫日期連動select
編寫表格ud-table
編寫分頁ud-pagination
編寫表單通用驗證
*/
/*
==================== Vue組件庫目錄 ====================
Form
  Button 按鈕 -----> ud-button
  Input 輸入框 -----> ud-input
  Textarea 多行輸入框 -----> ud-textarea
  Radio 單選框 -----> ud-radio
  Checkbox 多選框 -----> ud-checkbox
  Select 下拉框 -----> ud-select
  Switch 開關 -----> ud-switch
  Upload 上傳 -----> ud-upload
  ImageUpload 圖片上傳預覽 -----> ud-image-upload
  ImageMultiUpload 圖片上傳預覽(多張) -----> ud-image-multi-upload
  Form 表單 -----> ud-form
  Captcha 圖形驗證碼 -----> ud-captcha

Validation
  VfItem 表單容器 -----> vf-item
  VfName 姓名驗證 -----> vf-name
  VfGender 性別驗證 -----> vf-gender
  VfPhone 電話驗證 -----> vf-phone
  VfMail 郵件驗證 -----> vf-mail
  VfIdcard 身分證驗證 -----> vf-idcard
  VfDate 日期驗證 -----> vf-date
  VfAccept 條款驗證 -----> vf-accept
  VfCaptcha 圖形驗證碼 -----> vf-captcha
  VfDateGroup 日期群組驗證 -----> vf-date-group
  VfAddressGroup 地址群組驗證 -----> vf-address-group

Data
  Table 表格 -----> ud-table
  Pagination 分頁 -----> ud-pagination

Layout
  Flex 通用排版容器 -----> ud-flex
  Arrow CSS箭頭 -----> ud-arrow

Notice
  Alert 警告彈窗 -----> ud-alert
  Confirm 確認彈窗 -----> ud-confirm
  AlertConfirm 警告確認彈窗(調用式) -----> ud-alertConfirm
  Modal 通用彈窗 -----> ud-modal
  Loading 加載中 -----> ud-loading
  Notify 通知訊息 -----> ud-notify
  Popover 氣泡框 -----> ud-popover

Tools
  Html 用戶自定義訊息 -----> ud-html
  Backtop 回到頂部 -----> ud-backtop
  Ellipsis 文字省略 -----> ud-ellipsis
  CountdownExpire 倒數計時(時限) -----> ud-countdown-expire
  Countdown 倒數計時 -----> ud-countdown
  QrCode 取得QRcode圖片 -----> ud-qrcode
  Ratio 等比例自適應容器 -----> ud-ratio

Application
  Carousel 走馬燈 -----> ud-carousel
  Youtube 水管播放 -----> ud-youtube
  YoutubeApi 水管播放(控制版) -----> ud-youtube-api
  GoogleMap 估狗地圖 -----> ud-google-map
  Select2 搜尋下拉框 -----> ud-select2
  Scratch 刮刮樂 -----> ud-scratch
  Editor 文字編輯器 -----> ud-editor
*/
/*
==================== 工具函數目錄 ====================
String
  將字串內換行符\n轉為<br> -----> nl2br
  取得隨機十六進制顏色 -----> randomHexColorCode
  取得隨機字串 -----> randomString
  金錢加入千分位逗號 -----> formatNumber
  複製文字至剪貼簿 -----> copyTextToClipboard
  轉義HTML(防XSS攻擊) -----> escapeHTML
  駝峰式轉換 -----> convertCamelCase
  將字串內URL轉為超連結 -----> replaceURLToLink

Number
  取得範圍內隨機數 -----> getRandom
  四捨五入到指定位數 -----> round

Image
  預載圖片 -----> imagePreload
  圖片戴入回調 -----> onImageLoaded

Array
  陣列是否有重複值 -----> isRepeat
  移除陣列中的重複元素 -----> uniqArray
  二維陣列扁平化(第二參數可指定深度) -----> flatArray
  返回陣列中某值的所有索引 -----> indexOfAll
  兩陣列的交集 -----> intersection
  洗牌陣列 -----> shuffle

Object
  精準型別判斷 -----> typeOf
  過濾物件鍵值 -----> filterObj
  刪除物件鍵值 -----> deleteObj
  深拷貝(簡易版) -----> deepCloneSimple
  深拷貝(完全版) -----> deepClone

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
  解析時間 -----> parseTime
  時間人性化 -----> formatTime

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
  網址跳轉 -----> toUrl
  CDN備援 -----> cdnBackup
  跳頁重整 -----> jumpReload
  Axios封裝 -----> axiosPackage

Device
  判斷是否移動裝置 -----> isMobileUserAgent
  判斷是否蘋果移動裝置 -----> isAppleMobileDevice
  判斷是否安卓移動裝置 -----> isAndroidMobileDevice

Animation
  RAF通用動畫函式 -----> animate
*/
// 初始化執行
cdnBackup();
Vue.use(VueFormulate);
jumpReload();
//-----------------------Form-----------------------
//Button 按鈕
Vue.component('ud-button', {
    name: 'UdButton',
    template: "\n    <button\n      class=\"ud-button\"\n      @click=\"handleClick\"\n      :disabled=\"disabled || loading\"\n      :type=\"nativeType\"\n      :class=\"[\n        type ? 'ud-button--' + type : '',\n        {\n          'is-disabled': disabled,\n          'is-loading': loading,\n          'is-plain': plain,\n          'is-round': round,\n          'is-circle': circle,\n          'is-block': block,\n        }\n      ]\"\n      :style=\"{\n        'border-radius': radius + 'px',\n        'min-width': minWidth + 'px',\n      }\"\n    >\n      <i class=\"fas fa-spinner fa-pulse\" v-if=\"loading\"></i>\n      <i :class=\"icon\" v-if=\"icon && !loading\"></i>\n      <span v-if=\"$slots.default\"><slot></slot></span>\n    </button>\n  ",
    props: {
        type: {
            type: String,
            default: 'default'
        },
        icon: {
            type: String,
            default: ''
        },
        nativeType: {
            type: String,
            default: 'button'
        },
        radius: {
            type: Number,
            default: 5,
        },
        minWidth: {
            type: Number,
            default: 0,
        },
        loading: Boolean,
        disabled: Boolean,
        plain: Boolean,
        round: Boolean,
        circle: Boolean,
        block: Boolean
    },
    methods: {
        handleClick: function (evt) {
            this.$emit('click', evt);
        }
    }
});
//Input 輸入框
Vue.component('ud-input', {
    name: 'UdInput',
    template: "\n    <div class=\"ud-input\">\n      <input\n        :type=\"type\"\n        v-model=\"inputVal\"\n        :placeholder=\"placeholder\"\n        :maxlength=\"maxlength\"\n      >\n    </div>\n  ",
    props: {
        value: null,
        type: {
            type: String,
            default: "text"
        },
        placeholder: {
            type: String,
            default: "請輸入此欄位"
        },
        maxlength: {
            type: null,
            default: "",
        }
    },
    computed: {
        inputVal: {
            get: function () {
                return this.value;
            },
            set: function (val) {
                this.$emit('input', val);
            }
        }
    },
});
//Textarea 多行輸入框
Vue.component('ud-textarea', {
    name: "UdTextarea",
    template: "\n    <div class=\"ud-textarea\">\n      <textarea\n        type=\"text\"\n        v-model=\"textareaVal\"\n        :cols=\"cols\"\n        :rows=\"rows\"\n        :placeholder=\"placeholder\"\n      >\n      </textarea>\n    </div>\n  ",
    props: {
        value: null,
        placeholder: {
            type: String,
            default: "請輸入此欄位"
        },
        rows: null,
        cols: null,
    },
    computed: {
        textareaVal: {
            get: function () {
                return this.value;
            },
            set: function (val) {
                this.$emit('input', val);
            }
        }
    },
});
//Radio 單選框
Vue.component('ud-radio', {
    name: "UdRadio",
    template: "\n    <div class=\"ud-radio\">\n      <label v-for=\"(value, key) in options\" :key=\"key\">\n        <input\n          type=\"radio\"\n          v-model=\"checkedValue\"\n          :value=\"key\"\n        > {{ value }}\n      </label>\n    </div>\n  ",
    props: {
        value: null,
        options: null
    },
    computed: {
        checkedValue: {
            get: function () {
                return this.value;
            },
            set: function (val) {
                this.$emit('input', val);
            }
        }
    },
});
//Checkbox 多選框
Vue.component('ud-checkbox', {
    name: "UdCheckbox",
    template: "\n    <div class=\"ud-checkbox\">\n      <label v-for=\"(value, key) in options\" :key=\"key\">\n        <input\n          type=\"checkbox\"\n          :value=\"key\"\n          v-model=\"checkedValue\"\n        > {{ value }}\n      </label>\n    </div>\n  ",
    props: {
        value: null,
        options: null,
    },
    computed: {
        checkedValue: {
            get: function () {
                return this.value;
            },
            set: function (val) {
                this.$emit('input', val);
            }
        }
    },
});
//Select 下拉框
Vue.component('ud-select', {
    name: "UdSelect",
    template: "\n    <div class=\"ud-select\">\n      <select class=\"ud-select\" v-model=\"selectedValue\" :data-placeholder-selected=\"selectedValue === ''\">\n        <option value=\"\" disabled selected>{{ placeholder }}</option>\n        <option v-for=\"(value, key) in options\" :value=\"key\" :key=\"key\">\n          {{ value }}\n        </option>\n      </select>\n    </div>\n  ",
    props: {
        value: null,
        options: null,
        placeholder: {
            type: String,
            default: "請選擇一項"
        }
    },
    computed: {
        selectedValue: {
            get: function () {
                return this.value;
            },
            set: function (val) {
                this.$emit('input', val);
            }
        }
    },
});
//Switch 開關
Vue.component('ud-switch', {
    name: "UdSwitch",
    template: "\n\n  ",
    props: {},
});
//Upload 上傳
Vue.component('ud-upload', {
    name: "UdUpload",
    template: "\n\n  ",
    props: {},
});
//ImageUpload 圖片上傳預覽
Vue.component("ud-image-upload", {
    name: "UdImageUpload",
    template: "\n    <div class=\"ud-image-upload\">\n      <input type=\"file\" accept=\"image/*\" ref=\"input\" @change=\"previewImage\">\n      <template v-if=\"preview\">\n        <div class=\"image-preview\">\n          <img :src=\"preview\" class=\"img-fluid\" />\n          <div class=\"image-info\">\n            <p>\u6A94\u6848\u540D\u7A31\uFF1A{{ image.name }}</p>\n            <p>\u6A94\u6848\u5927\u5C0F\uFF1A{{ parseInt(image.size/1024) }}KB</p>\n          </div>\n        </div>\n        <ud-button @click=\"reset\">\u522A\u9664\u5716\u7247</ud-button>\n      </template>\n    </div>\n  ",
    data: function () {
        return {
            preview: "",
            image: ""
        };
    },
    methods: {
        previewImage: function (event) {
            var _this = this;
            var input = event.target;
            if (input.files) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    _this.preview = e.target.result;
                };
                this.image = input.files[0];
                reader.readAsDataURL(input.files[0]);
            }
        },
        reset: function () {
            this.image = "";
            this.preview = "";
            this.$refs.input.value = "";
        }
    }
});
//ImageMultiUpload 圖片上傳預覽(多張)
Vue.component("ud-image-multi-upload", {
    name: "UdImageMultiUpload",
    template: "\n    <div class=\"ud-image-multi-upload\">\n      <input type=\"file\" accept=\"image/*\" multiple=\"multiple\" ref=\"input\" @change=\"previewMultiImage\">\n      <template v-if=\"preview_list.length\">\n        <div class=\"image-preview\">\n          <div v-for=\"item, index in preview_list\" :key=\"index\">\n            <img :src=\"item\"/>\n            <div class=\"image-info\">\n              <p>\u6A94\u6848\u540D\u7A31\uFF1A{{ image_list[index].name }}</p>\n              <p>\u6A94\u6848\u5927\u5C0F\uFF1A{{ parseInt(image_list[index].size/1024) }}KB</p>\n            </div>\n          </div>\n          <ud-button @click=\"reset\">\u522A\u9664\u5716\u7247</ud-button>\n        </div>\n      </template>\n    </div>\n  ",
    data: function () {
        return {
            preview_list: [],
            image_list: []
        };
    },
    methods: {
        previewMultiImage: function (event) {
            var _this = this;
            var input = event.target;
            var count = input.files.length;
            var index = 0;
            if (input.files) {
                while (count--) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        _this.preview_list.push(e.target.result);
                    };
                    this.image_list.push(input.files[index]);
                    reader.readAsDataURL(input.files[index]);
                    index++;
                }
            }
        },
        reset: function () {
            this.image_list = [];
            this.preview_list = [];
            this.$refs.input.value = "";
        }
    }
});
//Form 表單
Vue.component('ud-form', {
    name: "UdForm",
    template: "\n\n  ",
    props: {},
});
//Captcha 圖形驗證碼
Vue.component('ud-captcha', {
    name: "UdCaptcha",
    template: "\n    <div class=\"ud-captcha\">\n      <div class=\"canvas-area\" ref=\"canvasArea\">\n        <canvas id=\"verify-canvas\" width=\"100\" height=\"48\" style=\"display: none;\"></canvas>\n        <img ref=\"codeimg\" @click=\"refresh\">\n        <input type=\"hidden\" v-model=\"inputVal\">\n      </div>\n      <div class=\"refresh\" @click=\"refresh\" v-if=\"!noRefresh\">\n        <i class=\"fas fa-sync-alt\" id=\"refresh\"></i>\n      </div>\n    </div>\n  ",
    computed: {
        inputVal: {
            get: function () {
                return this.value;
            },
            set: function (val) {
                this.$emit('input', val);
            }
        }
    },
    props: {
        value: String,
        color: {
            type: String,
            default: "#333"
        },
        bgColor: {
            type: String,
            default: "#fff"
        },
        randomColor: {
            type: String,
            default: "#777"
        },
        font: {
            type: String,
            default: "25px Arial"
        },
        noLine: Boolean,
        noDots: Boolean,
        noRefresh: Boolean,
    },
    mounted: function () {
        this.drawCode();
    },
    methods: {
        // 繪製驗證碼
        drawCode: function () {
            var nums = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz".split("");
            var canvas = document.getElementById('verify-canvas'); // 獲取HTML端畫布
            var context = canvas.getContext("2d"); // 獲取畫布2D上下文
            context.fillStyle = this.bgColor; // 畫布填充色
            context.fillRect(0, 0, canvas.width, canvas.height); // 清空畫布
            context.fillStyle = this.color; // 設置字體顏色
            context.font = this.font; // 設置字體
            var rand = new Array();
            var x = new Array();
            var y = new Array();
            for (var i = 0; i < 4; i++) {
                rand[i] = nums[Math.floor(Math.random() * nums.length)];
                x[i] = i * 16 + 10;
                y[i] = Math.random() * 20 + 20;
                context.fillText(rand[i], x[i], y[i]);
            }
            var code = rand.join('');
            this.inputVal = code;
            // 畫3條隨機線
            if (!this.noLine) {
                for (var i = 0; i < 3; i++) {
                    this.drawline(canvas, context);
                }
            }
            // 畫30個隨機點
            if (!this.noDots) {
                for (var i = 0; i < 30; i++) {
                    this.drawDot(canvas, context);
                }
            }
            this.convertCanvasToImage(canvas);
        },
        // 隨機線
        drawline: function (canvas, context) {
            context.moveTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)); // 隨機線的起點x座標是畫布x座標0位置 y座標是畫布高度的隨機數
            context.lineTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)); // 隨機線的終點x座標是畫布寬度 y座標是畫布高度的隨機數
            context.lineWidth = 0.5; // 隨機線寬
            context.strokeStyle = this.randomColor; // 隨機線描邊屬性
            context.stroke(); // 描邊 即起點描到終點
        },
        // 隨機點(所謂畫點其實就是畫1px像素的線)
        drawDot: function (canvas, context) {
            var px = Math.floor(Math.random() * canvas.width);
            var py = Math.floor(Math.random() * canvas.height);
            context.moveTo(px, py);
            context.lineTo(px + 1, py + 1);
            context.lineWidth = 0.2;
            context.strokeStyle = this.randomColor;
            context.stroke();
        },
        // 繪製圖片
        convertCanvasToImage: function (canvas) {
            var image = this.$refs.codeimg;
            image.src = canvas.toDataURL("image/png");
            return image;
        },
        // 刷新驗證碼
        refresh: function () {
            document.getElementById('verify-canvas').remove();
            this.$refs.canvasArea.insertAdjacentHTML('afterbegin', '<canvas width="100" height="48" id="verify-canvas" style="display: none;"></canvas>');
            this.drawCode();
        }
    },
});
//-----------------------Validation-----------------------
//VfItem 表單容器
Vue.component("vf-item", {
    name: "VfItem",
    template: "\n    <div class=\"vf-item\">\n      <div class=\"vf-item-label\">{{ label }}</div>\n      <div class=\"vf-item-input\">\n        <slot></slot>\n      </div>\n    </div>\n  ",
    props: {
        label: {
            type: String,
            default: ""
        }
    }
});
//VfName 姓名驗證
Vue.component("vf-name", {
    name: "VfName",
    template: "\n    <formulate-input\n      type=\"text\"\n      name=\"name\"\n      placeholder=\"\u8ACB\u8F38\u5165\u59D3\u540D\"\n      validation=\"^required|^matches:/^[a-zA-Z0-9_\u4E00-\u9FA5]+$/\"\n      :validation-messages=\"{required: '\u59D3\u540D\u4E0D\u53EF\u70BA\u7A7A', matches: '\u59D3\u540D\u683C\u5F0F\u6709\u8AA4\uFF0C\u4E0D\u63A5\u53D7\u7279\u6B8A\u7B26\u865F'}\"\n    >\n    </formulate-input>\n  ",
});
//VfGender 性別驗證
Vue.component("vf-gender", {
    name: "VfGender",
    template: "\n    <formulate-input\n      type=\"select\"\n      name=\"gender\"\n      :options=\"options\"\n      placeholder=\"\u8ACB\u9078\u64C7\u6027\u5225\"\n      validation=\"^required\"\n      :validation-messages=\"{required: '\u6027\u5225\u4E0D\u53EF\u70BA\u7A7A'}\"\n    >\n    </formulate-input>\n  ",
    data: function () {
        return {
            options: {
                0: "男",
                1: "女"
            },
        };
    },
});
//VfPhone 電話驗證
Vue.component("vf-phone", {
    name: "VfPhone",
    template: "\n    <formulate-input\n      type=\"tel\"\n      name=\"phone\"\n      placeholder=\"\u8ACB\u8F38\u5165\u624B\u6A5F\u865F\u78BC\"\n      validation=\"^required|matches:/^09[0-9]{8}$/\"\n      :validation-messages=\"{required: '\u624B\u6A5F\u4E0D\u53EF\u70BA\u7A7A', matches: '\u624B\u6A5F\u683C\u5F0F\u6709\u8AA4\uFF0C\u4F8B\uFF1A0912345678'}\"\n      maxlength=\"10\"\n    >\n    </formulate-input>\n  ",
});
//VfMail 郵件驗證
Vue.component("vf-mail", {
    name: "VfMail",
    template: "\n    <formulate-input\n      type=\"text\"\n      name=\"email\"\n      placeholder=\"\u8ACB\u8F38\u5165E-mail\"\n      validation=\"^required|email\"\n      :validation-messages=\"{required: 'E-mail\u4E0D\u53EF\u70BA\u7A7A',email: 'E-mail\u683C\u5F0F\u6709\u8AA4\uFF0C\u9700\u5305\u542B@'}\"\n    >\n    </formulate-input>\n  ",
});
//VfIdcard 身分證驗證
Vue.component("vf-idcard", {
    name: "VfIdcard",
    template: "\n    <formulate-input\n      type=\"text\"\n      name=\"idcard\"\n      placeholder=\"\u8ACB\u8F38\u5165\u8EAB\u5206\u8B49\u865F\u78BC\"\n      validation=\"^required|matches:/^[A-Z]{1}[0-9]{9}$/\"\n      :validation-messages=\"{required: '\u8EAB\u5206\u8B49\u865F\u78BC\u4E0D\u53EF\u70BA\u7A7A', matches: '\u8EAB\u5206\u8B49\u865F\u78BC\u683C\u5F0F\u6709\u8AA4\uFF0C\u4F8B\uFF1AA123456789'}\"\n      maxlength=\"10\"\n    >\n    </formulate-input>\n  ",
});
//VfDate 日期驗證
Vue.component("vf-date", {
    name: "VfDate",
    template: "\n    <formulate-input\n      type=\"date\"\n      :name=\"name\"\n      placeholder=\"\u8ACB\u8F38\u5165\u65E5\u671F\"\n      validation=\"^required|^date:YYYY-MM-DD|exist\"\n      :validation-rules=\"{\n        exist: ({ value }) => {\n          let dateArr = value.split('-');\n          let limitInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];\n          let theYear = parseInt(dateArr[0]);\n          let theMonth = parseInt(dateArr[1]);\n          let theDay = parseInt(dateArr[2]);\n          let isLeap = new Date(theYear, 1, 29).getDate() === 29; \n          if (isLeap) limitInMonth[1] = 29;\n          return theDay > 0 && theDay <= limitInMonth[theMonth - 1];\n        }\n      }\"\n      :validation-messages=\"{required: '\u65E5\u671F\u4E0D\u53EF\u70BA\u7A7A', date: '\u65E5\u671F\u683C\u5F0F\u6709\u8AA4\uFF0C\u4F8B\uFF1A2020-01-31', exist: '\u65E5\u671F\u4E0D\u5B58\u5728\uFF0C\u8ACB\u91CD\u65B0\u9078\u64C7'}\"\n    >\n    </formulate-input>\n  ",
    props: {
        name: {
            type: String,
            defalt: "date"
        },
    }
});
//VfAccept 條款驗證
Vue.component("vf-accept", {
    name: "VfAccept",
    template: "\n    <label class=\"vf-accept\">\n      <formulate-input\n        type=\"checkbox\"\n        name=\"accept\"\n        validation=\"accepted\"\n        :validation-messages=\"{accepted: '\u8ACB\u5148\u540C\u610F\u4F7F\u7528\u8005\u689D\u6B3E'}\"\n      >\n      </formulate-input>\n      <p v-if=\"!$slots.default\">\u6211\u540C\u610F\u4F7F\u7528\u8005\u689D\u6B3E</p>\n      <slot></slot>\n    </label>\n  ",
});
//VfCaptcha 圖形驗證碼
Vue.component('vf-captcha', {
    name: "VfCaptcha",
    template: "\n    <div class=\"vf-captcha\">\n      <div class=\"canvas-area\" ref=\"canvasArea\">\n        <canvas id=\"verify-canvas\" width=\"100\" height=\"48\" style=\"display: none;\"></canvas>\n        <img ref=\"codeimg\" @click=\"refresh\">\n        <input type=\"hidden\" v-model=\"inputVal\">\n      </div>\n      <div class=\"refresh\" @click=\"refresh\" v-if=\"!noRefresh\">\n        <i class=\"fas fa-sync-alt\" id=\"refresh\"></i>\n      </div>\n    </div>\n  ",
    computed: {
        inputVal: {
            get: function () {
                return this.value;
            },
            set: function (val) {
                this.$emit('input', val);
            }
        }
    },
    props: {
        value: String,
        color: {
            type: String,
            default: "#333"
        },
        bgColor: {
            type: String,
            default: "#fff"
        },
        randomColor: {
            type: String,
            default: "#777"
        },
        font: {
            type: String,
            default: "25px Arial"
        },
        noLine: Boolean,
        noDots: Boolean,
        noRefresh: Boolean,
    },
    mounted: function () {
        this.drawCode();
    },
    methods: {
        // 繪製驗證碼
        drawCode: function () {
            var nums = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz".split("");
            var canvas = document.getElementById('verify-canvas'); // 獲取HTML端畫布
            var context = canvas.getContext("2d"); // 獲取畫布2D上下文
            context.fillStyle = this.bgColor; // 畫布填充色
            context.fillRect(0, 0, canvas.width, canvas.height); // 清空畫布
            context.fillStyle = this.color; // 設置字體顏色
            context.font = this.font; // 設置字體
            var rand = new Array();
            var x = new Array();
            var y = new Array();
            for (var i = 0; i < 4; i++) {
                rand[i] = nums[Math.floor(Math.random() * nums.length)];
                x[i] = i * 16 + 10;
                y[i] = Math.random() * 20 + 20;
                context.fillText(rand[i], x[i], y[i]);
            }
            var code = rand.join('');
            this.inputVal = code;
            // 畫3條隨機線
            if (!this.noLine) {
                for (var i = 0; i < 3; i++) {
                    this.drawline(canvas, context);
                }
            }
            // 畫30個隨機點
            if (!this.noDots) {
                for (var i = 0; i < 30; i++) {
                    this.drawDot(canvas, context);
                }
            }
            this.convertCanvasToImage(canvas);
        },
        // 隨機線
        drawline: function (canvas, context) {
            context.moveTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)); // 隨機線的起點x座標是畫布x座標0位置 y座標是畫布高度的隨機數
            context.lineTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)); // 隨機線的終點x座標是畫布寬度 y座標是畫布高度的隨機數
            context.lineWidth = 0.5; // 隨機線寬
            context.strokeStyle = this.randomColor; // 隨機線描邊屬性
            context.stroke(); // 描邊 即起點描到終點
        },
        // 隨機點(所謂畫點其實就是畫1px像素的線)
        drawDot: function (canvas, context) {
            var px = Math.floor(Math.random() * canvas.width);
            var py = Math.floor(Math.random() * canvas.height);
            context.moveTo(px, py);
            context.lineTo(px + 1, py + 1);
            context.lineWidth = 0.2;
            context.strokeStyle = this.randomColor;
            context.stroke();
        },
        // 繪製圖片
        convertCanvasToImage: function (canvas) {
            var image = this.$refs.codeimg;
            image.src = canvas.toDataURL("image/png");
            return image;
        },
        // 刷新驗證碼
        refresh: function () {
            document.getElementById('verify-canvas').remove();
            this.$refs.canvasArea.insertAdjacentHTML('afterbegin', '<canvas width="100" height="48" id="verify-canvas" style="display: none;"></canvas>');
            this.drawCode();
        }
    },
});
//DateGroup 日期群組驗證
Vue.component('vf-date-group', {
    name: "VfDateGroup",
    template: "\n    <div class=\"vf-date-select\">\n      <select name=\"year\" ref=\"year\"></select>\n      <p>\u5E74</p>\n      <select name=\"month\" ref=\"month\"></select>\n      <p>\u6708</p>\n      <select name=\"date\" ref=\"date\"></select>\n      <p>\u65E5</p>\n    </div>\n  ",
    props: {
        roc: Boolean
    },
    mounted: function () {
        this.dateSelect();
    },
    methods: {
        dateSelect: function () {
            var _this = this;
            var time = new Date();
            var year = time.getFullYear();
            var selectYear = this.$refs.year;
            var selectMonth = this.$refs.month;
            var selectDate = this.$refs.date;
            if (this.roc) {
                for (var i = 0; i < year - 1911; i++) {
                    selectYear.insertAdjacentHTML("beforeEnd", "<option value=" + (year - 1911 - i) + ">" + (year - 1911 - i) + "</option>");
                }
            }
            else {
                for (var i = 0; i <= 120; i++) {
                    selectYear.insertAdjacentHTML("beforeEnd", "<option value=" + (year - i) + ">" + (year - i) + "</option>");
                }
            }
            selectYear.insertAdjacentHTML("afterbegin", "<option value='' disabled selected></option>");
            for (var i = 1; i <= 12; i++) {
                selectMonth.insertAdjacentHTML("beforeEnd", "<option value=" + i + ">" + i + "</option>");
            }
            selectMonth.insertAdjacentHTML("afterbegin", "<option value='' disabled selected></option>");
            selectYear.addEventListener("change", function () {
                changeDate();
            });
            selectMonth.addEventListener("change", function () {
                changeDate();
            });
            function changeDate() {
                var year = parseInt(selectYear.value);
                var month = parseInt(selectMonth.value);
                var day = new Date(_this.roc ? year + 1911 : year, month, 0).getDate();
                dateOption(day);
                function dateOption(n) {
                    selectDate.innerHTML = "";
                    for (var i = 1; i <= n; i++) {
                        selectDate.insertAdjacentHTML("beforeEnd", "<option value=" + i + ">" + i + "</option>");
                    }
                    selectDate.insertAdjacentHTML("afterbegin", "<option value='' disabled selected></option>");
                }
            }
        }
    },
});
//VfAddressGroup 地址群組驗證
Vue.component('vf-address-group', {
    name: "VfAddressGroup",
    template: "\n    <div class=\"vf-address-group\">\n      <div class=\"flex-wrapper\" v-if=\"!inputOnly\">\n        <formulate-input \n          type=\"select\"\n          name=\"county\"\n          placeholder=\"\u7E23\u5E02\"\n          :options=\"countyOptions\"\n          validation=\"required\"\n          :validation-messages=\"{required: '\u7E23\u5E02\u4E0D\u53EF\u70BA\u7A7A'}\"\n          @input=\"getCounty\"\n        >\n        </formulate-input>\n        <formulate-input\n          type=\"select\"\n          name=\"area\"\n          placeholder=\"\u9109\u586B\u5E02\u5340\"\n          :options=\"areaOptions\"\n          validation=\"required\"\n          :validation-messages=\"{required: '\u9109\u93AE\u5E02\u5340\u4E0D\u53EF\u70BA\u7A7A'}\"\n          @input=\"getArea\"\n          ref=\"area\"\n        >\n        </formulate-input>\n      </div>\n      <div v-if=\"!selectOnly\">\n        <formulate-input\n          type=\"text\"\n          name=\"address\"\n          placeholder=\"\u8ACB\u8F38\u5165\u5730\u5740\"\n          validation=\"required\"\n          :validation-messages=\"{required: '\u5730\u5740\u4E0D\u53EF\u70BA\u7A7A'}\"\n          ref=\"address\"\n        >\n        </formulate-input>\n      </div>\n    </div>\n  ",
    data: function () {
        return {
            countyValue: "",
            areaValue: "",
            countyInit: 0,
            areaInit: 0,
            countyList: [
                { county: "台北市", areaList: ["中正區", "大同區", "中山區", "松山區", "大安區", "萬華區", "信義區", "士林區", "北投區", "內湖區", "南港區", "文山區"] },
                { county: "新北市", areaList: ["萬里區", "金山區", "板橋區", "汐止區", "深坑區", "石碇區", "瑞芳區", "平溪區", "雙溪區", "貢寮區", "新店區", "坪林區", "烏來區", "永和區", "中和區", "土城區", "三峽區", "樹林區", "鶯歌區", "三重區", "新莊區", "泰山區", "林口區", "蘆洲區", "五股區", "八里區", "淡水區", "三芝區", "石門區"] },
                { county: "宜蘭縣", areaList: ["宜蘭市", "頭城鎮", "礁溪鄉", "壯圍鄉", "員山鄉", "羅東鎮", "三星鄉", "大同鄉", "五結鄉", "冬山鄉", "蘇澳鎮", "南澳鄉", "釣魚台列嶼"] },
                { county: "桃園市", areaList: ["中壢區", "平鎮區", "龍潭區", "楊梅區", "新屋區", "觀音區", "桃園區", "龜山區", "八德區", "大溪區", "復興區", "大園區", "蘆竹區"] },
                { county: "新竹市", areaList: ["東區", "北區", "香山區"] },
                { county: "新竹縣", areaList: ["竹北市", "湖口鄉", "新豐鄉", "新埔鎮", "關西鎮", "芎林鄉", "寶山鄉", "竹東鎮", "五峰鄉", "橫山鄉", "尖石鄉", "北埔鄉", "峨眉鄉"] },
                { county: "苗栗縣", areaList: ["竹南鎮", "頭份市", "三灣鄉", "南庄鄉", "獅潭鄉", "後龍鎮", "通霄鎮", "苑裡鎮", "苗栗市", "造橋鄉", "頭屋鄉", "公館鄉", "大湖鄉", "泰安鄉", "銅鑼鄉", "三義鄉", "西湖鄉", "卓蘭鎮"] },
                { county: "台中市", areaList: ["中區", "東區", "南區", "西區", "北區", "北屯區", "西屯區", "南屯區", "太平區", "大里區", "霧峰區", "烏日區", "豐原區", "后里區", "石岡區", "東勢區", "和平區", "新社區", "潭子區", "大雅區", "神岡區", "大肚區", "沙鹿區", "龍井區", "梧棲區", "清水區", "大甲區", "外埔區", "大安區"] },
                { county: "彰化縣", areaList: ["彰化市", "芬園鄉", "花壇鄉", "秀水鄉", "鹿港鎮", "福興鄉", "線西鄉", "和美鎮", "伸港鄉", "員林市", "社頭鄉", "永靖鄉", "埔心鄉", "溪湖鎮", "大村鄉", "埔鹽鄉", "田中鎮", "北斗鎮", "田尾鄉", "埤頭鄉", "溪州鄉", "竹塘鄉", "二林鎮", "大城鄉", "芳苑鄉", "二水鄉"] },
                { county: "南投縣", areaList: ["南投市", "中寮鄉", "草屯鎮", "國姓鄉", "埔里鎮", "仁愛鄉", "名間鄉", "集集鎮", "水里鄉", "魚池鄉", "信義鄉", "竹山鎮", "鹿谷鄉"] },
                { county: "嘉義市", areaList: ["東區", "西區"] },
                { county: "嘉義縣", areaList: ["番路鄉", "梅山鄉", "竹崎鄉", "阿里山", "中埔鄉", "大埔鄉", "水上鄉", "鹿草鄉", "太保市", "朴子市", "東石鄉", "六腳鄉", "新港鄉", "民雄鄉", "大林鎮", "溪口鄉", "義竹鄉", "布袋鎮"] },
                { county: "雲林縣", areaList: ["斗南鎮", "大埤鄉", "虎尾鎮", "土庫鎮", "褒忠鄉", "東勢鄉", "台西鄉", "崙背鄉", "麥寮鄉", "斗六市", "林內鄉", "古坑鄉", "莿桐鄉", "西螺鎮", "二崙鄉", "北港鎮", "水林鄉", "口湖鄉", "四湖鄉", "元長鄉"] },
                { county: "台南市", areaList: ["中西區", "東區", "南區", "北區", "安平區", "安南區", "永康區", "歸仁區", "新化區", "左鎮區", "玉井區", "楠西區", "南化區", "仁德區", "關廟區", "龍崎區", "官田區", "麻豆區", "佳里區", "西港區", "七股區", "將軍區", "學甲區", "北門區", "新營區", "後壁區", "白河區", "東山區", "六甲區", "下營區", "柳營區", "鹽水區", "善化區", "大內區", "山上區", "新市區", "安定區"] },
                { county: "高雄市", areaList: ["新興區", "前金區", "苓雅區", "鹽埕區", "鼓山區", "旗津區", "前鎮區", "三民區", "楠梓區", "小港區", "左營區", "仁武區", "大社區", "東沙群島", "南沙群島", "岡山區", "路竹區", "阿蓮區", "田寮區", "燕巢區", "橋頭區", "梓官區", "彌陀區", "永安區", "湖內區", "鳳山區", "大寮區", "林園區", "鳥松區", "大樹區", "旗山區", "美濃區", "六龜區", "內門區", "杉林區", "甲仙區", "桃源區", "那瑪夏區", "茂林區", "茄萣區"] },
                { county: "澎湖縣", areaList: ["馬公市", "西嶼鄉", "望安鄉", "七美鄉", "白沙鄉", "湖西鄉"] },
                { county: "金門縣", areaList: ["金沙鎮", "金湖鎮", "金寧鄉", "金城鎮", "烈嶼鄉", "烏坵鄉"] },
                { county: "屏東縣", areaList: ["屏東市", "三地門鄉", "霧台鄉", "瑪家鄉", "九如鄉", "里港鄉", "高樹鄉", "鹽埔鄉", "長治鄉", "麟洛鄉", "竹田鄉", "內埔鄉", "萬丹鄉", "潮州鎮", "泰武鄉", "來義鄉", "萬巒鄉", "崁頂鄉", "新埤鄉", "南州鄉", "林邊鄉", "東港鎮", "琉球鄉", "佳冬鄉", "新園鄉", "枋寮鄉", "枋山鄉", "春日鄉", "獅子鄉", "車城鄉", "牡丹鄉", "恆春鎮", "滿州鄉"] },
                { county: "台東縣", areaList: ["台東市", "綠島鄉", "蘭嶼鄉", "延平鄉", "卑南鄉", "鹿野鄉", "關山鎮", "海端鄉", "池上鄉", "東河鄉", "成功鎮", "長濱鄉", "太麻里", "金峰鄉", "大武鄉", "達仁鄉"] },
                { county: "花蓮縣", areaList: ["花蓮市", "新城鄉", "秀林鄉", "吉安鄉", "壽豐鄉", "鳳林鎮", "光復鄉", "豐濱鄉", "瑞穗鄉", "萬榮鄉", "玉里鎮", "卓溪鄉", "富里鄉"] },
                { county: "連江縣", areaList: ["南竿鄉", "北竿鄉", "莒光鄉", "東引鄉"] }
            ],
        };
    },
    props: {
        addressLink: Boolean,
        selectOnly: Boolean,
        inputOnly: Boolean //只有地址輸入
    },
    computed: {
        countyOptions: function () {
            var tempObj = {};
            for (var _i = 0, _a = this.countyList; _i < _a.length; _i++) {
                var item = _a[_i];
                tempObj[item.county] = item.county;
            }
            return tempObj;
        },
        areaOptions: function () {
            var _this = this;
            if (!this.countyValue)
                return;
            var countyObj = this.countyList.find(function (item) { return item.county === _this.countyValue; });
            var tempObj = {};
            for (var _i = 0, _a = countyObj.areaList; _i < _a.length; _i++) {
                var item = _a[_i];
                tempObj[item] = item;
            }
            return tempObj;
        }
    },
    watch: {
        countyValue: function () {
            if (!this.countyInit) {
                this.countyInit = 1;
                return;
            }
            this.$refs.area.proxy = "";
            this.areaValue = "";
        },
        areaValue: function () {
            if (!this.addressLink)
                return;
            if (!this.areaInit) {
                this.areaInit = 1;
                return;
            }
            this.$refs.address.proxy = "" + this.countyValue + this.areaValue;
        }
    },
    methods: {
        getCounty: function (val) {
            this.countyValue = val;
        },
        getArea: function (val) {
            this.areaValue = val;
        },
    },
});
//-----------------------Data-----------------------
//Table 表格
Vue.component('ud-table', {
    name: "UdTable",
    template: "\n\n  ",
    props: {},
});
//Pagination 分頁
Vue.component('ud-pagination', {
    name: "UdPagination",
    template: "\n\n  ",
    props: {},
});
//-----------------------Layout-----------------------
// Flex 通用排版容器
Vue.component('ud-flex', {
    name: "UdFlex",
    template: "\n    <div class=\"ud-flex\">\n      <slot></slot>\n    </div>\n  ",
    props: {},
});
// Arrow CSS箭頭
Vue.component('ud-arrow', {
    template: "\n    <i \n      class=\"ud-arrow\"\n      :class=[direction]\n      :style=\"{\n        'border-color': bdColor,\n        'border-width': '0 ' + bdWidth + 'px ' + bdWidth + 'px 0',\n        padding: padding + 'px'\n      }\">\n    </i>\n  ",
    props: {
        bdColor: {
            default: "#333"
        },
        bdWidth: {
            default: "3"
        },
        padding: {
            default: "3"
        },
        direction: {
            default: "right"
        }
    }
});
//-----------------------Notice-----------------------
//Alert 警告彈窗
Vue.component("ud-alert", {
    name: "UdAlert",
    template: "\n    <transition name=\"fade\">\n      <div class=\"ud-alert\" v-if=\"value\" v-cloak>\n        <div class=\"modal-wrapper\" @click.self=\"maskCancel && $emit('input', 0)\">\n          <div class=\"modal-content\">\n            <div class=\"modal-close\" v-if=\"hasCancel\" @click=\"$emit('input', 0)\">\n              <i class=\"fas fa-times\"></i>\n            </div>\n            <div class=\"modal-header\">\n              <p>{{ title }}</p>\n            </div>\n            <div class=\"modal-body\">\n              <p>{{ message }}</p>\n              <slot></slot>\n            </div>\n            <div class=\"modal-footer\">\n              <div class=\"button-area\">\n                <ud-button @click=\"$emit('input', 0)\">OK</ud-button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </transition>\n  ",
    props: {
        title: {
            type: String,
            default: "警告彈窗標題"
        },
        message: {
            type: String,
            default: "警告彈窗訊息"
        },
        value: {
            type: null,
            default: false
        },
        maskCancel: Boolean,
        hasCancel: Boolean,
    },
});
//Confirm 確認彈窗
Vue.component("ud-confirm", {
    name: "UdConfirm",
    template: "\n    <transition name=\"fade\">\n      <div class=\"ud-confirm\" v-if=\"value\" v-cloak>\n        <div class=\"modal-wrapper\" @click.self=\"maskCancel && $emit('input', 0)\">\n          <div class=\"modal-content\">\n            <div class=\"modal-close\" v-if=\"hasCancel\" @click=\"$emit('input, 0')\">\n              <i class=\"fas fa-times\"></i>\n            </div>\n            <div class=\"modal-header\">\n              <p>{{ title }}</p>\n            </div>\n            <div class=\"modal-body\">\n              <p>{{ message }}</p>\n              <slot></slot>\n            </div>\n            <div class=\"modal-footer\">\n              <div class=\"button-area\">\n                <ud-button plain @click=\"$emit('input', 0)\">{{ cancelTxt }}</ud-button>\n                <ud-button @click=\"$emit('confirm')\">{{ confirmTxt }}</ud-button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </transition>\n  ",
    props: {
        title: {
            type: String,
            default: "確認彈窗標題"
        },
        message: {
            type: String,
            default: "確認彈窗訊息"
        },
        value: {
            type: null,
            default: false
        },
        cancelTxt: {
            type: String,
            default: "取消"
        },
        confirmTxt: {
            type: String,
            default: "確定"
        },
        maskCancel: Boolean,
        hasCancel: Boolean,
    },
});
//AlertConfirm 警告確認彈窗(調用式) ud-alertConfirm
var UdModalExtend = Vue.extend({
    template: "\n    <transition name=\"fade\">\n      <div class=\"ud-alert\" v-if=\"isShow\">\n        <div class=\"modal-wrapper\" @click.self=\"maskHandler\">\n          <div class=\"modal-content\">\n            <div class=\"modal-close\" v-if=\"btnClose\" @click=\"destroy\">\n              <i class=\"fas fa-times\"></i>\n            </div>\n            <div class=\"modal-header\" v-if=\"title || titleHtml\">\n              <ud-html :text=\"titleHtml\" v-if=\"titleHtml\"></ud-html>\n              <p v-else>{{ title }}</p>\n            </div>\n            <div class=\"modal-body\">\n              <ud-html :text=\"msgHtml\" v-if=\"msgHtml\"></ud-html>\n              <p v-else>{{ msg }}</p>\n            </div>\n            <div class=\"modal-footer\">\n              <div class=\"button-area flex-wrapper\">\n                <ud-button @click=\"cancelHandler\" plain v-if=\"isConfirm\">{{ cancelTxt }}</ud-button>\n                <ud-button @click=\"confirmHandler\">{{ confirmTxtAfter }}</ud-button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </transition>\n  ",
    data: function () {
        return {
            isShow: false,
            isConfirm: false,
            maskClose: false,
            btnClose: false,
            title: "",
            titleHtml: "",
            msg: "網路通信錯誤，請稍候再試",
            msgHtml: "",
            cancelTxt: "取消",
            cancel: function () { },
            confirmTxt: "",
            confirm: function () { },
        };
    },
    computed: {
        confirmTxtAfter: function () {
            if (this.confirmTxt)
                return this.confirmTxt;
            return this.isConfirm ? "確定" : "OK";
        }
    },
    mounted: function () {
        this.isShow = true;
    },
    methods: {
        confirmHandler: function () {
            if (typeof this.confirm === 'function')
                this.confirm();
            this.destroy();
        },
        cancelHandler: function () {
            if (typeof this.cancel === 'function')
                this.cancel();
            this.destroy();
        },
        maskHandler: function () {
            if (this.maskClose)
                this.destroy();
        },
        destroy: function () {
            var _this = this;
            this.isShow = false;
            setTimeout(function () {
                _this.$destroy(true);
                _this.$el.parentNode.removeChild(_this.$el);
            }, 200);
        },
    },
});
Vue.prototype.$alert = function (options) {
    var UdAlert = new UdModalExtend({
        el: document.createElement('div'),
        data: function () {
            return options;
        }
    });
    document.body.appendChild(UdAlert.$el);
};
Vue.prototype.$confirm = function (options) {
    options.isConfirm = true;
    var UdConfirm = new UdModalExtend({
        el: document.createElement('div'),
        data: function () {
            return options;
        }
    });
    document.body.appendChild(UdConfirm.$el);
};
//Modal 通用彈窗
Vue.component("ud-modal", {
    name: "UdModal",
    template: "\n    <transition name=\"fade\">\n      <div class=\"ud-modal\" v-if=\"isShow\" v-cloak>\n        <div class=\"modal-wrapper\" @click.self=\"onMaskClick\">\n          <div class=\"modal-content\">\n            <div class=\"modal-close\" v-if=\"hasCancel\" @click=\"isShow = 0\">\n              <i class=\"fas fa-times\"></i>\n            </div>\n            <div class=\"modal-header\" v-if=\"!$slots.default\">\n              <p>{{ title }}</p>\n            </div>\n            <div class=\"modal-body\">\n              <p v-if=\"!$slots.default\">{{ message }}</p>\n              <slot></slot>\n            </div>\n            <div class=\"modal-footer\" v-if=\"!$slots.default\">\n              <div class=\"button-area\">\n                <ud-button @click=\"isShow = 0\">OK</ud-button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </transition>\n  ",
    props: {
        title: {
            type: String,
            default: "通用彈窗標題"
        },
        message: {
            type: String,
            default: "通用彈窗訊息"
        },
        value: {
            default: 0
        },
        maskCancel: Boolean,
        hasCancel: Boolean,
    },
    computed: {
        isShow: {
            get: function () {
                return this.value;
            },
            set: function (val) {
                this.$emit('input', val);
            }
        }
    },
    methods: {
        onMaskClick: function () {
            if (this.maskCancel)
                this.isShow = 0;
        }
    },
});
//Loading 加載中
Vue.component('ud-loading', {
    name: "UdLoading",
    template: "\n    <transition name=\"loading\">\n      <div class=\"ud-loading\" v-if=\"isShow\" :class=\"{'theme-white': theme === 'white'}\">\n        <div class=\"modal-wrapper\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <i :class=\"icon\"></i>\n            </div>\n            <div class=\"modal-body\">\n              <ud-html :text=\"msgHtml\" v-if=\"msgHtml\"></ud-html>\n              <p v-else>{{ msg }}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </transition>\n  ",
    data: function () {
        return {
            isShow: false
        };
    },
    props: {
        label: {
            default: "加載中...",
            type: String
        }
    }
});
//Loading 載入中(調用式) ud-loading
var UdLoadingExtend = Vue.extend({
    template: "\n    <transition name=\"loading\">\n      <div class=\"ud-loading\" v-if=\"isShow\" :class=\"{'theme-white': theme === 'white'}\">\n        <div class=\"modal-wrapper\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <img v-if=\"customIcon\" class=\"cutsom-icon\" :src=\"customIcon\">\n              <i v-else :class=\"icon\"></i>\n            </div>\n            <div class=\"modal-body\">\n              <ud-html :text=\"msgHtml\" v-if=\"msgHtml\"></ud-html>\n              <p v-else>{{ msg }}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </transition>\n  ",
    data: function () {
        return {
            isShow: false,
            fixed: false,
            theme: "",
            icon: "fas fa-spinner fa-pulse",
            customIcon: "",
            msg: "",
            msgHtml: "",
        };
    },
    mounted: function () {
        this.isShow = true;
    },
    methods: {
        destroy: function () {
            var _this = this;
            this.isShow = false;
            document.body.style.overflowY = 'auto';
            setTimeout(function () {
                _this.$destroy(true);
                _this.$el.parentNode.removeChild(_this.$el);
            }, 200);
        },
    },
});
var UdLoading;
Vue.prototype.$loading = {
    open: function (options) {
        if (options === void 0) { options = {}; }
        UdLoading = new UdLoadingExtend({
            el: document.createElement("div"),
            data: function () {
                return options;
            }
        });
        if (UdLoading.fixed)
            document.body.style.overflowY = 'hidden';
        document.body.appendChild(UdLoading.$el);
    },
    close: function () {
        UdLoading.destroy();
    }
};
//Notify 通知訊息
Vue.component('ud-notify', {
    name: "UdNotify",
    template: "\n\n  ",
    props: {},
});
//Popover 氣泡框
Vue.component('ud-popover', {
    name: "UdPopover",
    template: "\n\n  ",
    props: {},
});
//-----------------------Tools-----------------------
//Html 用戶自定義訊息
Vue.component('ud-html', {
    template: "\n    <div class=\"ud-html\" v-html=\"nl2br(text)\"></div>\n  ",
    props: {
        text: {
            type: String,
            default: "<h1>H1 用戶自定義訊息</h1><h2>H2 用戶自定義訊息</h2><h3>H3 用戶自定義訊息</h3><h4>H4 用戶自定義訊息</h4><h5>H5 用戶自定義訊息</h5><h6>H6 用戶自定義訊息</h6>\n<p>p 用戶自定義訊息</p><span>span 用戶自定義訊息</span>"
        }
    },
    methods: {
        nl2br: function (str, is_xhtml) {
            if (typeof str === 'undefined' || str === null) {
                return '';
            }
            var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
            return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
        }
    }
});
//Backtop 回到頂部
Vue.component('ud-backtop', {
    name: "UdBacktop",
    template: "\n    <ud-button @click=\"scrollToTop\">\u56DE\u6700\u9802</ud-button>\n  ",
    methods: {
        scrollToTop: function () {
            var c = document.documentElement.scrollTop || document.body.scrollTop;
            if (c > 0) {
                window.requestAnimationFrame(this.scrollToTop);
                window.scrollTo(0, c - c / 6);
            }
        }
    },
});
//Ellipsis 文字省略
Vue.component('ud-ellipsis', {
    name: "UdEllipsis",
    template: '<p class="ud-ellipsis" :style="{webkitLineClamp: maxLine}"><slot></slot></p>',
    props: {
        maxLine: {
            type: Number,
            default: 1,
        }
    },
});
//CountdownExpire 倒數計時(時限)
Vue.component('ud-countdown-expire', {
    name: "UdCountdownExpire",
    template: "\n    <div>\u8DDD\u96E25\u670813\u865F 15\u9EDE0\u52060\u79D2 \u9084\u6709</div>\n    <i></i>\n    <i></i>\n    <i></i>\n  ",
    mounted: function () {
        var aI = document.getElementsByTagName("i");
        setInterval(function () {
            // 當前時間
            var time = new Date();
            var nowTime = time.getTime(); // 獲取當前毫秒數
            // 設置結束時間 : 5月13號 15點0分0秒
            time.setMonth(4); //   獲取當前 月份 (從 '0' 開始算)
            time.setDate(13); //   獲取當前 日
            time.setHours(15); //   獲取當前 時
            time.setMinutes(0); //   獲取當前 分
            time.setSeconds(0);
            var endTime = time.getTime();
            // 倒數計時: 差值
            var offsetTime = (endTime - nowTime) / 1000; // ** 以秒為單位
            var sec = parseInt(offsetTime % 60); // 秒
            var min = parseInt((offsetTime / 60) % 60); // 分 ex: 90秒
            var hr = parseInt(offsetTime / 60 / 60); // 時
            aI[0].textContent = hr + "時";
            aI[1].textContent = min + "分";
            aI[2].textContent = sec + "秒";
        }, 1000);
    },
});
//Countdown 倒數計時
Vue.component('ud-countdown', {
    name: "UdCountdown",
    template: "\n    <span class=\"ud-countdown\" ref=\"count\">{{cTime}}</span>\n  ",
    props: {
        time: {
            type: Number,
            default: 60
        },
        delay: Boolean
    },
    data: function () {
        return {
            cTime: this.time
        };
    },
    mounted: function () {
        if (!this.delay)
            this.countdown();
    },
    methods: {
        countdown: function () {
            var _this = this;
            var countdown = setInterval(function () {
                _this.cTime -= 1;
                if (_this.cTime <= 0) {
                    _this.$emit("timeup");
                    clearInterval(countdown);
                }
            }, 1000);
        },
        reset: function () {
            this.cTime = 10;
            this.countdown();
        }
    },
});
//QrCode 取得QRcode圖片
Vue.component('ud-qrcode', {
    template: "\n    <div class=\"ud-qrcode\">\n      <i v-if=\"!ready\" class=\"fas fa-spinner fa-pulse\"></i>\n      <img v-show=\"ready\" ref=\"img\" :src=\"QrCodeSrc\" :alt=\"url\">\n    </div>\n  ",
    mounted: function () {
        var _this = this;
        this.$refs.img.onload = function () {
            _this.ready = 1;
        };
    },
    data: function () {
        return {
            ready: 0,
        };
    },
    props: {
        url: {
            type: String,
            default: "https://www.google.com.tw/"
        },
        width: {
            type: null,
            default: "300"
        },
        height: {
            type: null,
            default: "300"
        },
    },
    computed: {
        QrCodeSrc: function () {
            return "http://chart.apis.google.com/chart?cht=qr&choe=UTF-8&chs=" + this.width + "x" + this.height + "&chl=" + this.url;
        }
    },
});
//Ratio 等比例自適應容器
Vue.component('ud-ratio', {
    template: "\n    <div class=\"ud-ratio\">\n      <div class=\"ratio-bg\" :style=\"{\n        backgroundImage: 'url(' + src + ')', \n        paddingBottom: height + '%', \n        borderRadius: radius + 'px',\n        backgroundSize: bgSize\n      }\">\n        <slot></slot>\n      </div>\n    </div>\n  ",
    props: {
        src: {
            default: "https://i.imgur.com/s3w1Sm3.jpg"
        },
        height: {
            default: 100
        },
        radius: {
            default: 0,
        },
        bgSize: {
            default: "cover"
        }
    },
});
//-----------------------Application-----------------------
//Carousel 走馬燈
Vue.component('ud-carousel', {
    name: "UdCarousel",
    template: "\n\n  ",
    props: {},
});
//Youtube 水管播放
Vue.component('ud-youtube', {
    name: "UdYoutube",
    template: "\n    <div class=\"ud-youtube\">\n      <div class=\"video-wrapper\">\n        <iframe width=\"560\" height=\"315\" :src=\"videoIdAfter\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n      </div>\n    </div>\n  ",
    props: {
        videoId: {
            type: String,
            default: "p6qjpdi8XuE"
        },
        start: {
            type: Number,
            default: 0
        },
        autoplay: Boolean,
        loop: Boolean,
        noControl: Boolean,
    },
    computed: {
        videoIdAfter: function () {
            var urlTemp = "https://www.youtube.com/embed/" + this.videoId + "?";
            if (this.start)
                urlTemp = urlTemp + "&start=" + this.start;
            if (this.autoplay)
                urlTemp = urlTemp + "&autoplay=1";
            if (this.loop)
                urlTemp = urlTemp + "&loop=1&playlist=" + this.videoId;
            if (this.noControl)
                urlTemp = urlTemp + "&controls=0";
            return urlTemp;
        }
    },
});
//YoutubeApi 水管播放(控制版)
Vue.component('ud-youtube-api', {
    name: "UdYoutubeApi",
    template: "\n    <div class=\"ud-youtube-api\">\n      <div class=\"video-wrapper\">\n        <div :id=\"videoId\" ref=\"player\"></div>\n      </div>\n    </div>\n  ",
    props: {
        videoId: {
            type: String,
            default: "KnWMMgEDva0"
        },
        start: {
            type: Number,
            default: 0
        },
        width: {
            type: Number,
            default: 560
        },
        height: {
            type: Number,
            default: 315
        },
        autoplay: Boolean,
        loop: Boolean,
        noControl: Boolean,
        mute: Boolean //開始時靜音
    },
    data: function () {
        return {
            player: {}
        };
    },
    computed: {
        control: function () {
            return this.noControl ? 0 : 1;
        }
    },
    mounted: function () {
        var _this = this;
        var tag = document.createElement('script');
        var player;
        var firstScriptTag = document.getElementsByTagName('script')[0];
        tag.src = "https://www.youtube.com/iframe_api";
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        window.onYouTubeIframeAPIReady = function () {
            player = new YT.Player(_this.videoId, {
                videoId: _this.videoId,
                width: _this.width,
                height: _this.height,
                playerVars: {
                    autoplay: _this.autoplay,
                    controls: _this.control,
                    start: _this.start //開始時間
                    // loop: _this.loop, //讓影片循環播放
                },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange,
                }
            });
        };
        function onPlayerReady(e) {
            if (_this.mute)
                e.target.mute();
        }
        ;
        function onPlayerStateChange(e) {
            if (e.data === YT.PlayerState.ENDED) {
                player.playVideo();
            }
        }
        ;
    },
    methods: {},
});
//GoogleMap 估狗地圖
Vue.component('ud-google-map', {
    name: "UdGoogleMap",
    template: "\n    <div class=\"ud-google-map\" :style=\"{'padding-bottom': ratio + '%'}\">\n      <iframe :src=\"src\" :width=\"width\" :height=\"height\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>\n    </div>\n  ",
    props: {
        src: {
            type: String,
            default: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1807.3065648309268!2d121.51520065825689!3d25.04719989599153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9727e339109%3A0xc34a31ce3a4abecb!2z6Ie65YyX6LuK56uZ!5e0!3m2!1szh-TW!2stw!4v1595920460513!5m2!1szh-TW!2stw"
        },
        width: {
            type: Number,
            default: 600
        },
        height: {
            type: Number,
            default: 450
        },
        ratio: {
            type: Number,
            default: 65.25
        }
    },
});
//Select2 搜尋下拉框套件
//dependencies:
//  "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
//  "https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css"
//  "https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js"
//reference:
//  https://select2.org
Vue.component('ud-select2', {
    name: "UdSelect2",
    template: "\n    <select2 :options=\"options\" v-model=\"selected\">\n      <option disabled value=\"0\">Select one</option>\n    </select2>\n  ",
    props: ["options", "value"],
    mounted: function () {
        var vm = this;
        $(this.$el)
            .select2({ data: this.options })
            .val(this.value)
            .trigger("change")
            .on("change", function () {
            vm.$emit("input", this.value);
        });
    },
    watch: {
        value: function (value) {
            $(this.$el)
                .val(value)
                .trigger("change");
        },
        options: function (options) {
            $(this.$el)
                .empty()
                .select2({ data: options });
        }
    },
    destroyed: function () {
        $(this.$el)
            .off()
            .select2("destroy");
    }
});
//Scratch 刮刮樂
//dependencies:"plugins/scratchcard/scratchcard.min.js"(https://github.com/Masth0/ScratchCard)
Vue.component('ud-scratch', {
    name: "UdScratch",
    template: "\n    <div class=\"ud-scratch\">\n      <div class=\"sc__wrapper\">\n        <div class=\"sc__container\" :id=\"id\"></div>\n      </div>\n    </div>\n  ",
    mounted: function () {
        this.initScratch();
    },
    props: {
        id: {
            type: String,
            default: "js--sud--container"
        },
        coverSrc: {
            type: String,
            default: "img/silver.jpg"
        },
        brushSrc: {
            type: String,
            default: "img/brush.png"
        },
        prizeSrc: {
            type: String,
            default: "img/prize_01.jpg"
        },
        aspectRatio: {
            type: Number,
            default: 1.65
        },
        percent: {
            type: Number,
            default: 10
        },
    },
    methods: {
        initScratch: function () {
            var _this = this;
            var scContainer = document.getElementById(this.id);
            var sc = new ScratchCard("#" + this.id, {
                scratchType: SCRATCH_TYPE.BRUSH,
                containerWidth: scContainer.offsetWidth,
                containerHeight: scContainer.offsetWidth / this.aspectRatio,
                brushSrc: this.brushSrc,
                imageForwardSrc: this.coverSrc,
                imageBackgroundSrc: this.prizeSrc,
                percentToFinish: this.percent,
                callback: function () {
                    _this.$emit("finish"); //刮完事件
                }
            });
            sc.init().then(function () {
                sc.canvas.addEventListener('scratch.move', function () {
                    _this.$emit("move", Math.floor(sc.getPercent())); //移動中事件(帶百分比)
                });
            }).catch(function (error) {
                alert(error.message);
            });
        }
    },
});
//Editor 文字編輯器
Vue.component('ud-editor', {
    name: "UdEditor",
    template: '<h1>文案編輯器</h1>'
});
//-----------------------String-----------------------
/**
 * 將字串內換行符\n轉為<br>
 * @param  {String} val 傳入值
 * @param  {Boolean} is_xhtml 是否為xhtml
 */
function nl2br(val, is_xhtml) {
    if (typeof val === 'undefined' || val === null) {
        return '';
    }
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
    return (val + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}
/**
 * 取得隨機十六進制顏色碼
 */
function randomHexColorCode() {
    var temp = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + temp.slice(0, 6);
}
;
/**
 * 取得隨機字串
 * @param  {Number} length 指定字串長度
 */
function randomString(length) {
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    var temp = "";
    for (var i = 0; i < length; i++) {
        temp += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return temp;
}
/**
 * 數字加入千分位逗號
 * 例：formatNumber(99999) -> 99,999
 * @param  {Number} val 傳入值
 */
function formatNumber(val) {
    var temp = val.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(temp)) {
        temp = temp.replace(pattern, "$1,$2");
    }
    return temp;
}
/**
 * 複製文字至剪貼簿
 * @param  {String} id 要複製文字的元素id
 */
function copyTextToClipboard(id) {
    var textRange = document.createRange();
    textRange.selectNode(document.getElementById(id));
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(textRange);
    document.execCommand("copy");
    vm.$alert({ msg: '文字已複製到剪貼簿' });
}
function test() {
    vm.$alert({ msg: '文字已複製到剪貼簿' });
}
/**
 * 轉義HTML(防XSS攻擊)
 * @param  {String} str 代入值
 * escapeHTML('<a href="#">Me & you</a>'); -> '&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'
 */
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, function (tag) { return ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    }[tag] || tag); });
}
/**
 * 駝峰式轉換
 * @param  {String} str 代入值
 * convertCamelCase("camelCase"); -> camel-case
 */
function convertCamelCase(str) {
    return str.replace(/([A-Z])/g, '-$1').toLowerCase();
}
/**
 * 將字串內URL轉為超連結
 * @param  {String} text 代入值
 */
function replaceURLToLink(text) {
    text = text.replace(URL, function (url) {
        var urlText = url;
        if (!url.match('^https?://'))
            url = 'http://' + url;
        return '' + urlText + '';
    });
    return text;
}
;
//-----------------------Number-----------------------
/**
 * 取得範圍內隨機數
 * @param {Number} min 隨機數最小值 預設為0
 * @param {Number} max 隨機數最小值 預設為100
 */
function getRandom(min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * 四捨五入到指定位數
 * @param  {String} n 代入值
 * @param  {Number} decimals 指定位數 預設為0
 * round(1.235, 2); -> 1.24
 */
function round(n, decimals) {
    if (decimals === void 0) { decimals = 0; }
    return Number(Math.round(n + "e" + decimals) + "e-" + decimals);
}
//-----------------------Image-----------------------
/**
 * 預載圖片
 * @param  {String} src 圖片路徑
 */
function imagePreload(src) {
    var img = new Image();
    img.src = src;
}
/**
 * 圖片戴入回調
 * @param  {String} url 圖片路徑
 * @param  {Function} callback 回調函式
 */
function onImageLoaded(url, callback) {
    var image = new Image();
    image.src = url;
    if (image.complete) {
        callback(image);
    }
    else {
        image.onload = function () {
            callback(image);
        };
    }
}
//-----------------------Array-----------------------
/**
 * 陣列是否有重複值
 * @param  {Array} arr 代入值
 */
function isRepeat(arr) {
    var arrStr = JSON.stringify(arr);
    for (var i = 0; i < arr.length; i++) {
        if ((arrStr.match(new RegExp(arr[i], "g")).length) > 1) {
            return true;
        }
    }
    ;
    return false;
}
/**
 * 移除陣列中的重複元素
 * @param  {Array} arr 代入值
 */
function uniqArray(arr) {
    var newArr = arr.filter(function (el, i, arr) { return arr.indexOf(el) === i; });
    return newArr;
}
/**
 * 二維陣列扁平化(第二參數可指定深度)
 * @param  {Array} arr 代入值
 * @param  {Number} depth 指定深度
 * flatArray([1, [2], 3, 4]); -> [1, 2, 3, 4]
 * flatArray([1, [2, [3, [4, 5], 6], 7], 8], 2); -> [1, 2, 3, [4, 5], 6, 7, 8]
 */
function flatArray(arr, depth) {
    if (depth === void 0) { depth = 1; }
    return arr.reduce(function (a, v) { return a.concat(depth > 1 && Array.isArray(v) ? flatArray(v, depth - 1) : v); }, []);
}
/**
 * 返回陣列中某值的所有索引
 * @param  {Array} arr 代入值
 * @param  {Number} val 指定值
 * indexOfAll([1, 2, 3, 1, 2, 3], 1); -> [0,3]
 * indexOfAll([1, 2, 3], 4); -> []
 */
function indexOfAll(arr, val) {
    return arr.reduce(function (acc, el, i) { return (el === val ? acc.concat([i]) : acc); }, []);
}
/**
 * 兩陣列的交集
 * @param  {Array} a 陣列A
 * @param  {Array} b 陣列B
 * intersection([1, 2, 3], [4, 3, 2]); -> [2, 3]
 */
function intersection(a, b) {
    var s = new Set(b);
    return a.filter(function (x) { return s.has(x); });
}
;
/**
 * 洗牌陣列
 * @param  {Array} a 陣列A
 * @param  {Array} b 陣列B
 * shuffle([1, 2, 3]); -> [2, 3, 1];
 */
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
//-----------------------Object-----------------------
/**
 * 精準型別判斷
 * @param  {Any} v 代入值
 */
function typeOf(v) {
    return v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
}
/**
 * 過濾物件鍵值
 * @param  {Object} obj 代入值
 * @param  {Array} arr 過濾值的陣列
 * filterObj(obj,["name","gender"]);
 */
function filterObj(obj, arr) {
    var tempObj = JSON.parse(JSON.stringify(obj));
    for (var i in tempObj) {
        if (arr.indexOf(i) === -1)
            delete tempObj[i];
    }
    return tempObj;
}
/**
 * 刪除物件鍵值
 * @param  {Object} obj 代入值
 * @param  {Array} arr 刪除值的陣列
 * deleteObj(test,["name","gender"]);
 */
function deleteObj(obj, arr) {
    var tempObj = JSON.parse(JSON.stringify(obj));
    for (var i in tempObj) {
        if (arr.indexOf(i) !== -1)
            delete tempObj[i];
    }
    return tempObj;
}
/**
 * 深拷貝(簡易版)
 * @param  {Object} obj 代入值
 * 無法拷貝特殊類型值與funciton
 */
function deepCloneSimple(obj) {
    return JSON.parse(JSON.stringify(obj));
}
/**
 * 深拷貝(完全版)
 * @param  {Object} obj 代入值
 */
function deepClone(obj, hash) {
    if (hash === void 0) { hash = new WeakMap(); }
    if (obj == null) {
        return obj;
    }
    if (obj instanceof RegExp) {
        return new RegExp(obj);
    }
    if (obj instanceof Date) {
        return new Date(obj);
    }
    if (obj instanceof Error) {
        return new Error(obj);
    }
    if (typeof obj !== 'object') {
        return obj;
    }
    if (hash.get(obj))
        return hash.get(obj);
    var cloneObj = new obj.constructor;
    hash.set(obj, cloneObj);
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = deepClone(obj[key], hash);
        }
    }
    return cloneObj;
}
//-----------------------Time-----------------------
/**
 * 檢查是否為閏年
 * @param  {Number} year 年份
 */
function isLeapYear(year) {
    return new Date(year, 1, 29).getDate() === 29;
}
/**
 * 檢查日期是否存在
 * @param  {String} dateStr 日期字串
 * @param  {String} split 分割符 預設為"-"
 * isExistDate("2020-02-29"); -> true
 * isExistDate("2019/02/29","/"); -> false
 */
function isExistDate(dateStr, split) {
    if (split === void 0) { split = "-"; }
    var dateArr = dateStr.split(split);
    var limitInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var theYear = parseInt(dateArr[0]);
    var theMonth = parseInt(dateArr[1]);
    var theDay = parseInt(dateArr[2]);
    var isLeap = new Date(theYear, 1, 29).getDate() === 29;
    if (isLeap)
        limitInMonth[1] = 29;
    return theDay > 0 && theDay <= limitInMonth[theMonth - 1];
}
/**
 * 返回當前24小時制時間的字符串
 * @param  {Any} date 時間物件
 * getColonTimeFromDate(new Date()); -> "08:38:00"
 */
function getColonTimeFromDate(date) {
    return date.toTimeString().slice(0, 8);
}
/**
 * 返回日期間的天數
 * @param  {Any} dateInitial 開始時間物件
 * @param  {Any} dateFinal 結束時間物件
 * getDaysDiffBetweenDates(new Date('2019-01-01'), new Date('2019-10-14')); -> 286
 */
function getDaysDiffBetweenDates(dateInitial, dateFinal) {
    return (dateFinal - dateInitial) / (1000 * 3600 * 24);
}
/**
 * 檢查是否在某日期後
 * @param  {Any} dateA 時間物件A
 * @param  {Any} dateB 時間物件B
 * isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); -> true
 */
function isAfterDate(dateA, dateB) {
    return dateA > dateB;
}
/**
 * 檢查是否在某日期前
 * @param  {Any} dateA 時間物件A
 * @param  {Any} dateB 時間物件B
 * isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); -> true
 */
function isBeforeDate(dateA, dateB) {
    return dateA < dateB;
}
/**
 * 返回幾天前後的日期
 * @param  {Number} days 指定天數 可為負值
 * getDiffDate(1); -> "2020-07-01"
 * getDiffDate(0); -> "2020-06-30"
 * getDiffDate(-2); -> "2020-06-28"
 */
function getDiffDate(days) {
    var t = new Date();
    t.setDate(t.getDate() + days);
    return t.toISOString().split('T')[0];
}
;
/**
 * 時間個性化輸出功能
 * @param  {Any} time 時間物件
 */
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
/**
 * 隨機數時間戳
 */
function uniqueId() {
    return (Number(new Date()).toString() + parseInt(10 * Math.random()) + parseInt(10 * Math.random()) + parseInt(10 * Math.random()));
}
/**
 * 解析時間
 * @param  {Any} time 時間物件
 * @param  {Any} cFormat 轉換格式
 */
function parseTime(time, cFormat) {
    if (arguments.length === 0 || !time) {
        return null;
    }
    var format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
    var date;
    if (typeof time === 'object') {
        date = time;
    }
    else {
        if ((typeof time === 'string')) {
            if ((/^[0-9]+$/.test(time))) {
                // support "1548221490638"
                time = parseInt(time);
            }
            else {
                // support safari
                // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
                time = time.replace(new RegExp(/-/gm), '/');
            }
        }
        if ((typeof time === 'number') && (time.toString().length === 10)) {
            time = time * 1000;
        }
        date = new Date(time);
    }
    var formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    };
    var time_str = format.replace(/{([ymdhisa])+}/g, function (result, key) {
        var value = formatObj[key];
        // Note: getDay() returns 0 on Sunday
        if (key === 'a') {
            return ['日', '一', '二', '三', '四', '五', '六'][value];
        }
        return value.toString().padStart(2, '0');
    });
    return time_str;
}
/**
 * 時間人性化
 * @param  {Any} time 時間物件
 * @param  {Any} option 轉換格式
 */
function formatTime(time, option) {
    if (('' + time).length === 10) {
        time = parseInt(time) * 1000;
    }
    else {
        time = +time;
    }
    var d = new Date(time);
    var now = Date.now();
    var diff = (now - d) / 1000;
    if (diff < 30) {
        return '剛剛';
    }
    else if (diff < 3600) {
        // less 1 hour
        return Math.ceil(diff / 60) + '分鐘前';
    }
    else if (diff < 3600 * 24) {
        return Math.ceil(diff / 3600) + '小時前';
    }
    else if (diff < 3600 * 24 * 2) {
        return '1天前';
    }
    if (option) {
        return parseTime(time, option);
    }
    else {
        return (d.getMonth() +
            1 +
            '月' +
            d.getDate() +
            '日' +
            d.getHours() +
            '時' +
            d.getMinutes() +
            '分');
    }
}
//-----------------------DOM-----------------------
/**
 * 瞬間滾動至頂部
 */
function anchorTop() {
    window.scrollTo(0, 0);
}
/**
 * 瞬間滾動至指定元素
 * @param  {String} targetId 指定元素id
 */
function anchorElement(targetId) {
    var target = document.getElementById(targetId);
    window.scrollTo(0, target.offsetTop);
}
/**
 * 瞬間滾動至底部
 */
function anchorBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}
/**
 * 平滑滾動至頂部
 */
function scrollToTop() {
    var c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
}
;
/**
 * 平滑滾動到指定元素區域
 * @param  {String} element 指定元素
 * smoothScroll('#fooBar');
 */
function smoothScroll(element) {
    document.querySelector(element).scrollIntoView({
        behavior: 'smooth'
    });
}
/**
 * 返回當前的滾動位置
 * @param  {String} el 指定元素 預設為window
 */
function getScrollPosition(el) {
    if (el === void 0) { el = window; }
    return {
        x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
        y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
    };
}
/**
 * 獲取移動設備初始化大小
 */
function getInitZoom() {
    if (!this._initZoom) {
        var screenWidth = Math.min(screen.height, screen.width);
        if (this.isAndroidMobileDevice() && !this.isNewChromeOnAndroid()) {
            screenWidth = screenWidth / window.devicePixelRatio;
        }
        this._initZoom = screenWidth / document.body.offsetWidth;
    }
    return this._initZoom;
}
/**
 * 獲取頁面高度
 */
function getPageHeight() {
    var g = document, a = g.body, f = g.documentElement, d = g.compatMode == "BackCompat" ? a : g.documentElement;
    return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight);
}
/**
 * 獲取頁面scrollLeft
 */
function getPageScrollLeft() {
    var a = document;
    return a.documentElement.scrollLeft || a.body.scrollLeft;
}
/**
 * 獲取頁面scrollTop
 */
function getPageScrollTop() {
    var a = document;
    return a.documentElement.scrollTop || a.body.scrollTop;
}
/**
 * 獲取頁面可視高度
 */
function getPageViewHeight() {
    var d = document, a = d.compatMode == "BackCompat" ? d.body : d.documentElement;
    return a.clientHeight;
}
/**
 * 獲取頁面可視寬度
 */
function getPageViewWidth() {
    var d = document, a = d.compatMode == "BackCompat" ? d.body : d.documentElement;
    return a.clientWidth;
}
/**
 * 獲取頁面寬度
 */
function getPageWidth() {
    var g = document, a = g.body, f = g.documentElement, d = g.compatMode == "BackCompat" ? a : g.documentElement;
    return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);
}
/**
 * 獲取移動設備螢幕寬度
 */
function getScreenWidth() {
    var smallerSide = Math.min(screen.width, screen.height);
    var fixViewPortsExperiment = rendererModel.runningExperiments.FixViewport ||
        rendererModel.runningExperiments.fixviewport;
    var fixViewPortsExperimentRunning = fixViewPortsExperiment && fixViewPortsExperiment.toLowerCase() === "new";
    if (fixViewPortsExperiment) {
        if (this.isAndroidMobileDevice() && !this.isNewChromeOnAndroid()) {
            smallerSide = smallerSide / window.devicePixelRatio;
        }
    }
    return smallerSide;
}
/**
 * 獲取網頁被捲去的位置
 */
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
/**
 * 獲取窗體可見範圍的寬與高
 */
function getViewSize() {
    var de = document.documentElement;
    var db = document.body;
    var viewW = de.clientWidth == 0 ? db.clientWidth : de.clientWidth;
    var viewH = de.clientHeight == 0 ? db.clientHeight : de.clientHeight;
    return Array(viewW, viewH);
}
/**
 * 獲取移動設備最大化大小
 */
function getZoom() {
    var screenWidth = Math.abs(window.orientation) === 90
        ? Math.max(screen.height, screen.width)
        : Math.min(screen.height, screen.width);
    if (this.isAndroidMobileDevice() && !this.isNewChromeOnAndroid()) {
        screenWidth = screenWidth / window.devicePixelRatio;
    }
    var FixViewPortsExperiment = rendererModel.runningExperiments.FixViewport ||
        rendererModel.runningExperiments.fixviewport;
    var FixViewPortsExperimentRunning = FixViewPortsExperiment &&
        (FixViewPortsExperiment === "New" || FixViewPortsExperiment === "new");
    if (FixViewPortsExperimentRunning) {
        return screenWidth / window.innerWidth;
    }
    else {
        return screenWidth / document.body.offsetWidth;
    }
}
//-----------------------Verify-----------------------
/**
 * 各種校驗綜合函式
 * @param  {String} type 校驗類型
 * @param  {String} str 正則表達式
 * @param  {String} regex 指定正則表達式
 */
function validate(type, str, regex) {
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
            return Boolean(str.match(/:/g) ? str.match(/:/g).length <= 7 : false && /::/.test(str) ? /^([\da-f]{1,4}(:|::)){1,6}[\da-f]{1,4}$/i.test(str) : /^([\da-f]{1,4}:){7}[\da-f]{1,4}$/i.test(str));
            break;
        //校驗是否為指定正則表達式
        case "regex":
            var regexMode = new RegExp(regex);
            return regexMode.test(str);
            break;
    }
}
//-----------------------Browser-----------------------
/**
 * 動態加載css文件
 * @param  {String} url 文件路徑
 */
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
/**
 * 取得LocalStorage的值
 * @param  {String} key 鍵值
 */
function getLocalStorage(key) {
    return localStorage.getItem(key);
}
/**
 * 設定LocalStorage的值
 * @param  {String} key 鍵值
 * @param  {String} val 屬性值
 */
function setLocalStorage(key, val) {
    localStorage.setItem(key, val);
}
/**
 * 取得Cookie的值
 * @param  {String} name 名稱值
 */
function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null)
        return unescape(arr[2]);
    return null;
}
/**
 * 設置cookie值
 * @param  {String} name 名稱值
 * @param  {String} value 屬性值
 * @param  {String} Hours 過期時間
 */
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
/**
 * 動態載入插件
 * @param  {String} src 路徑
 */
function insertPlugin(src) {
    var script = document.createElement('script');
    script.setAttribute('src', src);
    document.head.appendChild(script);
}
//-----------------------Web-----------------------
/**
 * 查詢網址所帶參數
 * @param  {String} key 鍵值
 */
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
/**
 * HTTP跳轉HTTPS
 */
function httpsRedirect() {
    if (location.protocol !== 'https:')
        location.replace('https://' + location.href.split('//')[1]);
}
;
/**
 * 檢驗URL連接是否有效
 * @param  {String} URL 網址
 */
function getUrlState(URL) {
    var xmlhttp = new ActiveXObject("microsoft.xmlhttp");
    xmlhttp.Open("GET", URL, false);
    try {
        xmlhttp.Send();
    }
    catch (e) {
    }
    finally {
        var result = xmlhttp.responseText;
        if (result) {
            if (xmlhttp.Status == 200) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
}
/**
 * 網址跳轉
 * @param  {String} url 欲跳轉的網址
 */
function toUrl(url) {
    window.location.href = url;
}
/**
 * CDN備援
 */
function cdnBackup() {
    if (!window.Vue) {
        document.write("\n      <link href=\"https://pro.fontawesome.com/releases/v5.13.1/css/fontawesome.css\" rel=\"stylesheet\">\n      <link href=\"https://cdn.jsdelivr.net/npm/animate.css@3.7.2/animate.min.css\" rel=\"stylesheet\">\n      <link href=\"https://cdn.jsdelivr.net/npm/element-ui@2.13.2/lib/theme-chalk/index.css\" rel=\"stylesheet\">\n      <script src=\"https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js\"></script>\n      <script src=\"https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js\"></script>\n      <script src=\"https://cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js\"></script>\n      <script src=\"https://cdn.jsdelivr.net/npm/@braid/vue-formulate@2.4.3/dist/formulate.min.js\"></script>\n      <script src=\"https://cdn.jsdelivr.net/npm/element-ui@2.13.2/lib/index.js\"></script>\n      <script src=\"js/ud-modules.js\"></script>\n    ");
        console.log("CDN Error!!");
    }
}
/**
 * 跳頁重整
 */
function jumpReload() {
    window.onpageshow = function (event) {
        if (event.persisted)
            window.location.reload();
    };
}
/**
 * Axios封装
 * axiosPackage
 */
var service = axios.create({
    // baseURL: baseURL, // url = base url + request url
    timeout: 5000,
});
// service.defaults.xsrfCookieName = "CSRF-TOKEN";
// service.defaults.xsrfHeaderName = "X-CSRF-Token";
// if (process.env.NODE_ENV == 'development') {
//   axios.defaults.baseURL = '/api';
// } else {
//   axios.defaults.baseURL = 'http://api.123dailu.com/';
// }
// 請求攔截器
service.interceptors.request.use(function (config) {
    vm.$loading.open();
    config.data = JSON.stringify(config.data);
    // 每次發送請求之前判斷是否存在token，如果存在，則統一在http請求的header都加上token，不用每次請求都手動添加了
    // 即使本地存在token，也有可能token是過期的，所以在響應攔截器中要對返回狀態進行判斷
    // if(token) config.headers.Authorization = "This is token";
    // 讓每個請求攜帶token--['X-Token']為自定義key 請根據實際情況自行修改
    // if (store.getters.token) config.headers['X-Token'] = getToken();
    return config;
}, function (error) {
    console.log(error);
    return Promise.reject(error);
});
// 響應攔截器
service.interceptors.response.use(function (response) {
    vm.$loading.close();
    if (response.status === 200) {
        return Promise.resolve(response);
    }
    else {
        return Promise.reject(response);
    }
}, function (error) {
    vm.$loading.close();
    if (error && error.response) {
        switch (error.response.status) {
            case 404:
                vm.$alert({ title: error.message, msg: "找不到該頁面，請稍候再試" });
                break;
            case 500:
                vm.$alert({ title: error.message, msg: "伺服器出錯，請稍候再試" });
                break;
            case 503:
                vm.$alert({ title: error.message, msg: "服務失效，請稍候再試" });
                break;
            default:
                vm.$alert({ title: error.message, msg: "\u9023\u63A5\u932F\u8AA4\uFF1A" + error.response.status + "\uFF0C\u8ACB\u7A0D\u5019\u518D\u8A66" });
        }
    }
    else {
        vm.$alert({ title: error.message, msg: "連接到伺服器失敗，請稍候再試" });
    }
    return Promise.reject(error);
});
/**
 * getApi方法，對應get請求
 * @param  {String} url 請求的url地址
 * @param  {Object} params 請求時攜帶的參數
 */
function getApi(url, params) {
    if (params === void 0) { params = {}; }
    return new Promise(function (resolve, reject) {
        service.get(url, {
            params: params
        })
            .then(function (res) {
            resolve(res.data);
        })
            .catch(function (err) {
            reject(err.data);
        });
    });
}
/**
 * postApi方法，對應post請求
 * @param  {String} url 請求的url地址
 * @param  {Object} data 請求時攜帶的資料
 * @param  {Object} params 請求時攜帶的參數
 */
function postApi(url, data, params) {
    if (data === void 0) { data = {}; }
    if (params === void 0) { params = {}; }
    return new Promise(function (resolve, reject) {
        service.post(url, data, {
            params: params
        })
            .then(function (res) {
            resolve(res.data);
        })
            .catch(function (err) {
            reject(err.data);
        });
    });
}
/**
 * putApi方法，對應put請求
 * @param  {String} url 請求的url地址
 * @param  {Object} data 請求時攜帶的資料
 * @param  {Object} params 請求時攜帶的參數
 */
function putApi(url, data, params) {
    if (data === void 0) { data = {}; }
    if (params === void 0) { params = {}; }
    return new Promise(function (resolve, reject) {
        service.put(url, data, {
            params: params
        })
            .then(function (res) {
            resolve(res.data);
        })
            .catch(function (err) {
            reject(err.data);
        });
    });
}
/**
 * deleteApi方法，對應delete請求
 * @param  {String} url 請求的url地址
 * @param  {Object} data 請求時攜帶的資料
 * @param  {Object} params 請求時攜帶的參數
 */
function deleteApi(url, data, params) {
    if (data === void 0) { data = {}; }
    if (params === void 0) { params = {}; }
    return new Promise(function (resolve, reject) {
        service.delete(url, data, {
            params: params
        })
            .then(function (res) {
            resolve(res.data);
        })
            .catch(function (err) {
            reject(err.data);
        });
    });
}
//-----------------------Device-----------------------
/**
 * 判斷是否移動裝置
 */
function isMobileUserAgent() {
    return /iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase());
}
/**
 * 判斷是否蘋果移動裝置
 */
function isAppleMobileDevice() {
    return /iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase());
}
/**
 * 判斷是否安卓移動裝置
 */
function isAndroidMobileDevice() {
    return /android/i.test(navigator.userAgent.toLowerCase());
}
//-----------------------Animation-----------------------
/**
 * RAF通用動畫函式
 * @param  {String} timing 指定時間
 * @param  {Object} draw 繪製
 * @param  {Object} duration 持續時間
 * animate({
 *   duration: 1000,
 *   timing(timeFraction) {
 *     return timeFraction;
 *   },
 *   draw(progress) {
 *     elem.style.width = progress * 100 + '%';
 *   }
 * });
 * progress = 0 表示開始動畫狀態，progress = 1 表示結束狀態。
 */
function animate(_a) {
    var timing = _a.timing, draw = _a.draw, duration = _a.duration;
    var start = performance.now();
    requestAnimationFrame(function animate(time) {
        // timeFraction 從 0 增加到 1
        var timeFraction = (time - start) / duration;
        if (timeFraction > 1)
            timeFraction = 1;
        // 計算當前動畫狀態
        var progress = timing(timeFraction);
        draw(progress); // 繪製
        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}
//-----------------------開發暫放區-----------------------
//可編輯div
Vue.component("ud-contenteditable", {
    name: "UdContenteditable",
    template: "\n    <div contenteditable=\"contenteditable\" @input=\"updateInput\" class=\"ud-contenteditable\">\n      {{ content }}\n    </div>\n  ",
    prop: ["value"],
    data: function () {
        return {
            content: ""
        };
    },
    methods: {
        updateInput: function () {
            this.$emit("input", this.content);
        }
    }
});
Vue.component("el-button", {
    template: "\n    <button \n      class=\"el-button\"\n      :class=\"[\n        type ? 'el-button--' + type : '',\n        size ? 'el-button--' + size : '',\n        {\n          'is-plain': plain,\n          'is-round': round,\n          'is-circle': circle,\n          'is-disabled': disabled,\n          'is-loading': loading,\n        }\n      ]\"\n      :autofocus=\"autofocus\"\n      :disabled=\"disabled || loading\"\n      @click=\"handleClick\"\n    >\n      <el-i class=\"el-icon-loading\" v-if=\"loading\"></el-i>\n      <el-i :class=\"icon\" v-if=\"icon && !loading\"></el-i>\n      <span v-if=\"$slots.default\"><slot></slot></span>\n    </button>\n  ",
    name: "Button",
    props: {
        type: {
            type: String,
            default: "default"
        },
        size: String,
        plain: Boolean,
        round: Boolean,
        circle: Boolean,
        icon: {
            type: String,
            default: ""
        },
        autofocus: Boolean,
        disabled: Boolean,
        loading: Boolean
    },
    methods: {
        handleClick: function (evt) {
            this.$emit("click", evt);
        }
    }
});
//# sourceMappingURL=ud-modules.js.map