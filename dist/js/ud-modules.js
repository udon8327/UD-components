/*
==================== TODO ====================
寫說明文件
彈窗組件支援自定義top高度
彈窗組件支援自定義body固定
彈窗組件支援多重彈窗
彈窗組件支援多種動畫效果
表單組件樣式重整
表單組件支援disabled
編寫表格ud-table
編寫分頁ud-pagination
Alert,Confirm,Modal統一修改樣式

==================== Vue組件庫(Basic)目錄 ====================
Form
  Button 按鈕 -----> ud-button
  Input 輸入框 -----> ud-input
  Textarea 多行輸入框 -----> ud-textarea
  Radio 單選框 -----> ud-radio
  Checkbox 多選框 -----> ud-checkbox
  Select 下拉框 -----> ud-select
  SelectMultiple 下拉多選框 -----> ud-select-multiple
  SelectLinkUniq 連動獨立下拉框 -----> ud-select-link-uniq
  SelectLink 連動下拉框 -----> ud-select-link
  SelectDate 日期連動下拉框 -----> ud-select-date
  SelectTwzip 台灣行政區連動下拉框 -----> ud-select-twzip
  Switch 開關 -----> ud-switch
  DatePicker 日期選擇器 -----> ud-date-picker
  Captcha 圖形驗證碼 -----> ud-captcha
  FormItem 表單驗證容器 -----> ud-form-item
  Form 表單驗證 -----> ud-form

Layout
  Flex 通用排版容器 -----> ud-flex
  Arrow CSS箭頭 -----> ud-arrow
  Collapse 摺疊容器 -----> ud-collapse
  Ratio 等比例自適應容器 -----> ud-ratio

Notice
  Alert 警告彈窗 -----> ud-alert
  Confirm 確認彈窗 -----> ud-confirm
  AlertConfirm 警告確認彈窗(調用式) -----> ud-alertConfirm
  Modal 通用彈窗 -----> ud-modal
  Loading 載入中 -----> ud-loading

Tools
  Html 用戶自定義訊息 -----> ud-html
  Backtop 回到頂部 -----> ud-backtop
  Ellipsis 文字省略 -----> ud-ellipsis
  Phone 撥打電話 -----> ud-phone
  Countdown 倒數計時 -----> ud-countdown
  QrCode 取得QRcode圖片 -----> ud-qrcode

==================== 工具函數目錄 ====================
String
  將字串內換行符\n轉為<br> -----> nl2br
  取得隨機字串 -----> randomString
  金錢加入千分位逗號 -----> formatNumber
  複製文字至剪貼簿 -----> copyTextToClipboard

Number
  取得範圍內隨機整數 -----> getRandom
  四捨五入到指定位數 -----> round

Image
  預載單張圖片 -----> imageLoaded
  預載多張圖片 -----> imageAllLoaded

Array
  陣列是否有重複值(不分型別) -----> isRepeat
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
  隨機數時間戳 -----> uniqueId
  時間格式化 -----> Date.prototype.format

DOM
  滾動至指定位置 -----> scrollTo
  取得頁面當前捲動高度(寬度) -----> getPageScroll
  取得頁面總高度(寬度) -----> getPage
  取得頁面可視高度(寬度) -----> getPageView

Verify
  各式驗證函式 -----> isRegex
  精準數字驗證 -----> isNumber
  未填入驗證 -----> isEmpty
  身分證驗證 -----> isIdCard

Browser
  取得LocalStorage的值 -----> getLocalStorage
  設定LocalStorage的值 -----> setLocalStorage
  取得Cookie的值 -----> getCookie
  設置cookie值 -----> setCookie
  函式防抖 -----> debounce
  函式節流 -----> throttle

Web
  查詢網址所帶參數 -----> queryString
  解析網址 -----> parseUrl
  網址跳轉 -----> toUrl
  跳頁重整 -----> jumpReload

Device
  判斷是否移動裝置 -----> isMobileUserAgent
  判斷是否蘋果移動裝置 -----> isAppleMobileDevice
  判斷是否安卓移動裝置 -----> isAndroidMobileDevice

*/
// 初始化執行
// cdnBackup();
// Vue.use(VueFormulate);
jumpReload();
//-----------------------Form-----------------------
// Button 按鈕
Vue.component('ud-button', {
    name: 'UdButton',
    template: "\n    <button\n      class=\"ud-button\"\n      @click=\"handleClick\"\n      :disabled=\"disabled || loading\"\n      :type=\"type\"\n      :class=\"{\n        'is-disabled': disabled,\n        'is-loading': loading,\n        'is-plain': plain,\n        'is-round': round,\n        'is-circle': circle,\n      }\"\n      :style=\"{\n        'border-radius': radius,\n        'width': width,\n        'min-width': minWidth,\n        'max-width': maxWidth,\n      }\"\n    >\n      <i class=\"fas fa-spinner fa-pulse\" v-if=\"loading\"></i>\n      <i :class=\"icon\" v-if=\"icon && !loading\"></i>\n      <span><slot>\u6309\u9215</slot></span>\n    </button>\n  ",
    props: {
        icon: { default: '' },
        type: { default: 'button' },
        radius: { default: '5px' },
        width: { default: '100%' },
        minWidth: { default: '0px' },
        maxWidth: { default: '100%' },
        loading: Boolean,
        disabled: Boolean,
        plain: Boolean,
        round: Boolean,
        circle: Boolean,
        throttle: Boolean // 函式節流
    },
    methods: {
        handleClick: function (evt) {
            if (this.throttle)
                return;
            this.$emit('click', evt);
        }
    },
    mounted: function () {
        var _this = this;
        if (!this.throttle)
            return;
        this.$el.addEventListener('click', throttle(function (evt) { _this.$emit('click', evt); }));
    },
});
// Input 輸入框
Vue.component('ud-input', {
    name: 'UdInput',
    template: "\n    <div class=\"ud-input\">\n      <input\n        v-model=\"modelValue\"\n        v-bind=\"$attrs\"\n        @input=\"onInput\"\n        ref=\"input\"\n      >\n    </div>\n  ",
    inheritAttrs: false,
    props: {
        value: null,
        center: Boolean // 是否置中
    },
    computed: {
        modelValue: {
            get: function () { return this.value; },
            set: function (val) { this.$emit('input', val); }
        },
    },
    mounted: function () {
        if (this.center)
            this.$refs.input.style.textAlign = 'center';
    },
    methods: {
        onInput: function () {
            this.$parent.$emit('validate'); // 通知FormItem校驗
        },
        focus: function () {
            this.$refs.input.focus();
        }
    },
});
// Textarea 多行輸入框
Vue.component('ud-textarea', {
    name: "UdTextarea",
    template: "\n    <div class=\"ud-textarea\">\n      <textarea\n        type=\"text\"\n        v-model=\"modelValue\"\n        v-bind=\"$attrs\"\n        @input=\"onInput\"\n      >\n      </textarea>\n    </div>\n  ",
    inheritAttrs: false,
    props: {
        value: null,
    },
    computed: {
        modelValue: {
            get: function () { return this.value; },
            set: function (val) { this.$emit('input', val); }
        }
    },
    methods: {
        onInput: function () {
            this.$parent.$emit('validate'); // 通知FormItem校驗
        }
    },
});
// Radio 單選框
Vue.component('ud-radio', {
    name: "UdRadio",
    template: "\n    <div class=\"ud-radio\" :class=\"{'is-flex': flex}\">\n\n      <label v-if=\"option\">\n        <input\n          type=\"radio\"\n          v-model=\"modelValue\"\n          :value=\"option\"\n          v-bind=\"$attrs\"\n          @change=\"onChange\"\n          ref=\"radio\"\n        >\n        <div class=\"radio-decorator\"\n          :style=\"{'border-radius': radius}\"\n        ></div>\n        <p v-if=\"combine\">{{ option }}</p>\n      </label>\n\n      <label v-for=\"option in options\" :key=\"option.value\" v-if=\"options\">\n        <input\n          type=\"radio\"\n          v-model=\"modelValue\"\n          :value=\"option.value\"\n          v-bind=\"$attrs\"\n          @change=\"onChange\"\n          ref=\"radio\"\n        >\n        <div class=\"radio-decorator\"\n          :style=\"{'border-radius': radius}\"\n        ></div>\n        <p>{{ combine ? option.value : option.label }}</p>\n      </label>\n\n    </div>\n  ",
    inheritAttrs: false,
    props: {
        value: null,
        option: null,
        options: null,
        flex: Boolean,
        radius: { default: "1em" },
        combine: Boolean // 使用value做為label
    },
    computed: {
        modelValue: {
            get: function () { return this.value; },
            set: function (val) { this.$emit('input', val); }
        }
    },
    methods: {
        onChange: function () {
            this.$parent.$emit('validate'); // 通知FormItem校驗
            this.$emit('change', this.$refs.radio.value);
        }
    },
});
// Checkbox 多選框
Vue.component('ud-checkbox', {
    name: "UdCheckbox",
    template: "\n    <div class=\"ud-checkbox\" :class=\"{'is-flex': flex}\">\n      <template v-if=\"option\">\n        <label>\n          <input\n            type=\"checkbox\"\n            v-model=\"modelValue\"\n            :value=\"option\"\n            v-bind=\"$attrs\"\n            @change=\"onChange\"\n            ref=\"checkbox\"\n          >\n          <div class=\"checkbox-decorator\"></div>\n          <p v-if=\"!noLabel\"><slot>{{ options }}</slot></p>\n        </label>\n      </template>\n      <template v-else>\n        <label v-for=\"option in options\" :key=\"option.value\">\n          <input\n            type=\"checkbox\"\n            :value=\"option.value\"\n            v-model=\"modelValue\"\n            v-bind=\"$attrs\"\n            @change=\"onChange\"\n            ref=\"checkbox\"\n          >\n          <div class=\"checkbox-decorator\"></div>\n          <p v-if=\"!noLabel\">{{ combine ? option.value : option.label }}</p>\n        </label>\n      </template>\n    </div>\n  ",
    inheritAttrs: false,
    props: {
        value: null,
        option: null,
        options: null,
        flex: Boolean,
        combine: Boolean,
        noLabel: Boolean,
    },
    computed: {
        modelValue: {
            get: function () { return this.value; },
            set: function (val) { this.$emit('input', val); }
        }
    },
    methods: {
        onChange: function () {
            this.$parent.$emit('validate'); // 通知FormItem校驗
            this.$emit('change', this.$refs.checkbox.value);
        }
    },
});
// Select 下拉框
Vue.component('ud-select', {
    name: "UdSelect",
    template: "\n    <div class=\"ud-select\">\n      <select \n        v-model=\"modelValue\" \n        :data-placeholder-selected=\"modelValue.length === 0\"\n        v-bind=\"$attrs\"\n        @change=\"onChange\"\n        ref=\"select\"\n      >\n        <option value=\"\" disabled selected>{{ placeholder }}</option>\n        <option v-for=\"option in options\" :value=\"option.value\" :key=\"option.value\" :disabled=\"option.disabled\">\n          {{ combine ? option.value : option.label }}\n        </option>\n      </select>\n    </div>\n  ",
    inheritAttrs: false,
    props: {
        value: { default: "" },
        options: {
            default: function () {
                return { label: "", value: "", disabled: true };
            }
        },
        placeholder: { default: "請選擇一項" },
        combine: Boolean,
        center: Boolean,
    },
    computed: {
        modelValue: {
            get: function () { return this.value; },
            set: function (val) { this.$emit('input', val); }
        },
    },
    mounted: function () {
        if (this.center)
            this.centerSelect();
        if (this.center)
            window.addEventListener("resize", this.centerSelect);
    },
    destroyed: function () {
        if (this.center)
            window.removeEventListener("resize", this.centerSelect);
    },
    methods: {
        onChange: function () {
            if (this.center)
                this.centerSelect();
            this.$parent.$emit('validate'); // 通知FormItem校驗
            this.$emit('change', this.$refs.select.value);
        },
        getTextWidth: function (text, target) {
            var el = document.createElement('span');
            var fontSize = window.getComputedStyle(target).fontSize || '14px';
            el.textContent = text;
            el.style.display = 'inline-block';
            el.style.fontSize = fontSize;
            document.body.appendChild(el);
            var elmWidth = el.offsetWidth;
            el.remove();
            return elmWidth;
        },
        centerSelect: function () {
            var el = this.$refs.select;
            var text = "";
            el.value ? text = this.options.find(function (item) { return item.value == el.value; }).label : text = this.placeholder;
            var emptySpace = el.offsetWidth - this.getTextWidth(text, el);
            el.style.textIndent = (emptySpace / 2) - 10 + "px";
        }
    },
});
// SelectMultiple 下拉複選框 (依賴：element-ui)
Vue.component('ud-select-multiple', {
    name: "UdSelectMultiple",
    template: "\n    <div class=\"ud-select-multiple\">\n      <el-select\n        v-model=\"modelValue\"\n        multiple\n        collapse-tags\n        :placeholder=\"placeholder\"\n        ref=\"select\"\n      >\n        <el-option\n          v-for=\"item in options\"\n          :key=\"item.value\"\n          :label=\"item.label\"\n          :value=\"item.value\">\n        </el-option>\n      </el-select>\n    </div>\n  ",
    inheritAttrs: false,
    props: {
        value: null,
        options: null,
        placeholder: { default: "請選擇一項" },
    },
    computed: {
        modelValue: {
            get: function () { return this.value; },
            set: function (val) { this.$emit('input', val); }
        },
    },
    methods: {
        onChange: function () {
            this.$parent.$emit('validate'); // 通知FormItem校驗
            this.$emit('change', this.$refs.select.value);
        },
    },
});
// SelectLinkUniq 連動獨立下拉框
Vue.component('ud-select-link-uniq', {
    name: "UdSelectLinkUniq",
    template: "\n    <div class=\"ud-select-link\">\n      <ud-select v-model=\"modelValue[num - 1]\" :options=\"optionsUniq\" :placeholder=\"placeholder\" :combine=\"combine\"></ud-select>\n    </div>\n  ",
    props: {
        num: null,
        value: null,
        options: null,
        placeholder: { default: "請選擇一項" },
        combine: Boolean,
    },
    computed: {
        modelValue: {
            get: function () { return this.value; },
            set: function (val) { this.$emit('input', val); }
        },
        uniqValue: function () {
            return this.modelValue[this.num - 1];
        },
        optionsUniq: function () {
            var _this = this;
            var temp = [];
            if (this.num - 1 === 0) {
                temp = this.options;
            }
            else if (this.num - 1 === 1) {
                temp = this.options.find(function (option) { return option.value === _this.modelValue[0]; }).children;
            }
            else {
                temp = this.options.find(function (option) { return option.value === _this.modelValue[0]; }).children;
            }
            return temp;
        },
    },
    watch: {
        uniqValue: function () {
            this.modelValue.splice(1, 1, "");
        },
        secondValue: function () {
            if (this.third)
                this.modelValue.splice(2, 1, "");
        },
    },
    mounted: function () {
        var _this = this;
        this.$on('validate', function () {
            _this.$nextTick(function () {
                _this.$parent.$emit('validate'); // 通知FormItem校驗
            });
        });
    },
});
// SelectLink 連動下拉框
Vue.component('ud-select-link', {
    name: "UdSelectLink",
    template: "\n    <div class=\"ud-select-link\" :class=\"{'is-flex': flex}\">\n      <ud-select v-model=\"modelValue[0]\" :options=\"firstArr\" :placeholder=\"placeholder[0]\" :combine=\"combine\"></ud-select>\n      <slot></slot>\n      <ud-select v-model=\"modelValue[1]\" :options=\"secondArr\" :placeholder=\"placeholder[1]\" :combine=\"combine\"></ud-select>\n      <slot name=\"second\"></slot>\n      <ud-select v-model=\"modelValue[2]\" :options=\"thirdArr\" :placeholder=\"placeholder[2]\" :combine=\"combine\" v-if=\"third\"></ud-select>\n      <slot name=\"third\"></slot>\n    </div>\n  ",
    props: {
        value: null,
        options: null,
        placeholder: {
            default: function () {
                return ["請選擇一項", "請選擇一項", "請選擇一項"];
            }
        },
        third: Boolean,
        flex: Boolean,
        combine: Boolean,
    },
    computed: {
        modelValue: {
            get: function () { return this.value; },
            set: function (val) { this.$emit('input', val); }
        },
        firstValue: function () {
            return this.modelValue[0];
        },
        secondValue: function () {
            return this.modelValue[1];
        },
        thirdValue: function () {
            return this.modelValue[2];
        },
        firstArr: function () {
            var temp = this.options;
            return temp;
        },
        secondArr: function () {
            var _this = this;
            var temp = [];
            if (this.modelValue[0]) {
                temp = this.options.find(function (option) { return option.value === _this.modelValue[0]; }).children;
            }
            return temp;
        },
        thirdArr: function () {
            var _this = this;
            var temp = [];
            if (this.modelValue[1]) {
                temp = this.secondArr.find(function (option) { return option.value === _this.modelValue[1]; }).children;
            }
            return temp;
        },
    },
    watch: {
        firstValue: function () {
            this.modelValue.splice(1, 1, "");
        },
        secondValue: function () {
            if (this.third)
                this.modelValue.splice(2, 1, "");
        },
    },
    mounted: function () {
        var _this = this;
        this.$on('validate', function () {
            _this.$nextTick(function () {
                _this.$parent.$emit('validate'); // 通知FormItem校驗
            });
        });
    },
});
// SelectDate 日期連動下拉框
Vue.component('ud-select-date', {
    name: "UdSelectDate",
    template: "\n    <div class=\"ud-select-date\" :class=\"{'is-flex': flex}\">\n      <ud-select v-model=\"modelValue[0]\" :options=\"firstArr\" :placeholder=\"placeholder[0]\" combine></ud-select>\n      <slot></slot>\n      <ud-select v-model=\"modelValue[1]\" :options=\"secondArr\" :placeholder=\"placeholder[1]\" combine></ud-select>\n      <slot name=\"second\"></slot>\n      <ud-select v-model=\"modelValue[2]\" :options=\"thirdArr\" :placeholder=\"placeholder[2]\" combine v-if=\"third\"></ud-select>\n      <slot name=\"third\"></slot>\n    </div>\n  ",
    props: {
        value: null,
        placeholder: {
            default: function () {
                return ["年", "月", "日"];
            }
        },
        third: Boolean,
        flex: Boolean,
        roc: Boolean // 是否為民國年
    },
    computed: {
        modelValue: {
            get: function () { return this.value; },
            set: function (val) { this.$emit('input', val); }
        },
        firstValue: function () {
            return this.modelValue[0];
        },
        secondValue: function () {
            return this.modelValue[1];
        },
        thirdValue: function () {
            return this.modelValue[2];
        },
        firstArr: function () {
            var temp = [];
            var time = new Date();
            var year = time.getFullYear();
            if (this.roc)
                year = year - 1911;
            var yearAfter = year - 120;
            if (this.roc && yearAfter <= 0)
                yearAfter = 1;
            for (var i = year; i >= yearAfter; i--) {
                temp.push({ value: i });
            }
            return temp;
        },
        secondArr: function () {
            var temp = [];
            if (this.firstValue) {
                for (var i = 1; i <= 12; i++) {
                    temp.push({ value: i });
                }
            }
            return temp;
        },
        thirdArr: function () {
            var temp = [];
            if (this.firstValue && this.secondValue) {
                var year = parseInt(this.firstValue);
                if (this.roc)
                    year = year + 1911;
                var date = new Date(year, this.secondValue, 0).getDate();
                for (var i = 1; i <= date; i++) {
                    temp.push({ value: i });
                }
            }
            return temp;
        },
    },
    watch: {
        firstValue: function () {
            this.modelValue.splice(1, 1, "");
        },
        secondValue: function () {
            if (this.third)
                this.modelValue.splice(2, 1, "");
        },
    },
    mounted: function () {
        var _this = this;
        this.$on('validate', function () {
            _this.$nextTick(function () {
                _this.$parent.$emit('validate'); // 通知FormItem校驗
            });
        });
    },
});
// SelectTwzip 台灣行政區連動下拉框
Vue.component('ud-select-twzip', {
    name: "UdSelectTwzip",
    template: "\n    <div class=\"ud-select-twzip\" :class=\"{'is-flex': flex}\">\n      <ud-select v-model=\"modelValue[0]\" :options=\"firstArr\" :placeholder=\"placeholder[0]\" :combine=\"combine\"></ud-select>\n      <slot></slot>\n      <ud-select v-model=\"modelValue[1]\" :options=\"secondArr\" :placeholder=\"placeholder[1]\" :combine=\"combine\"></ud-select>\n      <slot name=\"second\"></slot>\n    </div>\n  ",
    props: {
        value: null,
        placeholder: {
            default: function () {
                return ["請選擇縣市", "請選擇行政區"];
            }
        },
        flex: Boolean,
        combine: Boolean,
    },
    data: function () {
        return {
            options: [
                {
                    label: "基隆市", value: "01",
                    children: [{ label: "仁愛區", value: "200" }, { label: "信義區", value: "201" }, { label: "中正區", value: "202" }, { label: "中山區", value: "203" }, { label: "安樂區", value: "204" }, { label: "暖暖區", value: "205" }, { label: "七堵區", value: "206" }]
                },
                {
                    label: "台北市", value: "02",
                    children: [{ label: "中正區", value: "100" }, { label: "大同區", value: "103" }, { label: "中山區", value: "104" }, { label: "松山區", value: "105" }, { label: "大安區", value: "106" }, { label: "萬華區", value: "108" }, { label: "信義區", value: "110" },
                        { label: "士林區", value: "111" }, { label: "北投區", value: "112" }, { label: "內湖區", value: "114" }, { label: "南港區", value: "115" }, { label: "文山區", value: "116" }]
                },
                {
                    label: "新北市", value: "03",
                    children: [{ label: "萬里區", value: "207" }, { label: "金山區", value: "208" }, { label: "板橋區", value: "220" }, { label: "汐止區", value: "221" }, { label: "深坑區", value: "222" }, { label: "石碇區", value: "223" }, { label: "瑞芳區", value: "224" },
                        { label: "平溪區", value: "226" }, { label: "雙溪區", value: "227" }, { label: "貢寮區", value: "228" }, { label: "新店區", value: "231" }, { label: "坪林區", value: "232" }, { label: "烏來區", value: "233" }, { label: "永和區", value: "234" },
                        { label: "中和區", value: "235" }, { label: "土城區", value: "236" }, { label: "三峽區", value: "237" }, { label: "樹林區", value: "238" }, { label: "鶯歌區", value: "239" }, { label: "三重區", value: "241" }, { label: "新莊區", value: "242" },
                        { label: "泰山區", value: "243" }, { label: "林口區", value: "244" }, { label: "蘆洲區", value: "247" }, { label: "五股區", value: "248" }, { label: "八里區", value: "249" }, { label: "淡水區", value: "251" }, { label: "三芝區", value: "252" },
                        { label: "石門區", value: "253" }]
                },
                {
                    label: "桃園縣", value: "04",
                    children: [{ label: "中壢市", value: "320" }, { label: "平鎮市", value: "324" }, { label: "龍潭鄉", value: "325" }, { label: "楊梅市", value: "326" }, { label: "新屋鄉", value: "327" }, { label: "觀音鄉", value: "328" }, { label: "桃園市", value: "330" },
                        { label: "龜山鄉", value: "333" }, { label: "八德市", value: "334" }, { label: "大溪鎮", value: "335" }, { label: "復興鄉", value: "336" }, { label: "大園鄉", value: "337" }, { label: "蘆竹鄉", value: "338" }]
                },
                {
                    label: "新竹市", value: "05",
                    children: [{ label: "東區", value: "300" }, { label: "北區", value: "300" }, { label: "香山區", value: "300" }]
                },
                {
                    label: "新竹縣", value: "06",
                    children: [{ label: "竹北市", value: "302" }, { label: "湖口鄉", value: "303" }, { label: "新豐鄉", value: "304" }, { label: "新埔鎮", value: "305" }, { label: "關西鎮", value: "306" }, { label: "芎林鄉", value: "307" }, { label: "寶山鄉", value: "308" },
                        { label: "竹東鎮", value: "310" }, { label: "五峰鄉", value: "311" }, { label: "橫山鄉", value: "312" }, { label: "尖石鄉", value: "313" }, { label: "北埔鄉", value: "314" }, { label: "峨眉鄉", value: "315" }]
                },
                {
                    label: "苗栗縣", value: "07",
                    children: [{ label: "竹南鎮", value: "350" }, { label: "頭份鎮", value: "351" }, { label: "三灣鄉", value: "352" }, { label: "南庄鄉", value: "353" }, { label: "獅潭鄉", value: "354" }, { label: "後龍鎮", value: "356" }, { label: "通霄鎮", value: "357" },
                        { label: "苑裡鎮", value: "358" }, { label: "苗栗市", value: "360" }, { label: "造橋鄉", value: "361" }, { label: "頭屋鄉", value: "362" }, { label: "公館鄉", value: "363" }, { label: "大湖鄉", value: "364" }, { label: "泰安鄉", value: "365" },
                        { label: "銅鑼鄉", value: "366" }, { label: "三義鄉", value: "367" }, { label: "西湖鄉", value: "368" }, { label: "卓蘭鎮", value: "369" }]
                },
                {
                    label: "台中市", value: "08",
                    children: [{ label: "中區", value: "400" }, { label: "東區", value: "401" }, { label: "南區", value: "402" }, { label: "西區", value: "403" }, { label: "北區", value: "404" }, { label: "北屯區", value: "406" }, { label: "西屯區", value: "407" },
                        { label: "南屯區", value: "408" }, { label: "太平區", value: "411" }, { label: "大里區", value: "412" }, { label: "霧峰區", value: "413" }, { label: "烏日區", value: "414" }, { label: "豐原區", value: "420" }, { label: "后里區", value: "421" },
                        { label: "石岡區", value: "422" }, { label: "東勢區", value: "423" }, { label: "和平區", value: "424" }, { label: "新社區", value: "426" }, { label: "潭子區", value: "427" }, { label: "大雅區", value: "428" }, { label: "神岡區", value: "429" },
                        { label: "大肚區", value: "432" }, { label: "沙鹿區", value: "433" }, { label: "龍井區", value: "434" }, { label: "梧棲區", value: "435" }, { label: "清水區", value: "436" }, { label: "大甲區", value: "437" }, { label: "外埔區", value: "438" },
                        { label: "大安區", value: "439" }]
                },
                {
                    label: "彰化縣", value: "09",
                    children: [{ label: "彰化市", value: "500" }, { label: "芬園鄉", value: "502" }, { label: "花壇鄉", value: "503" }, { label: "秀水鄉", value: "504" }, { label: "鹿港鎮", value: "505" }, { label: "福興鄉", value: "506" }, { label: "線西鄉", value: "507" },
                        { label: "和美鎮", value: "508" }, { label: "伸港鄉", value: "509" }, { label: "員林鎮", value: "510" }, { label: "社頭鄉", value: "511" }, { label: "永靖鄉", value: "512" }, { label: "埔心鄉", value: "513" }, { label: "溪湖鎮", value: "514" },
                        { label: "大村鄉", value: "515" }, { label: "埔鹽鄉", value: "516" }, { label: "田中鎮", value: "520" }, { label: "北斗鎮", value: "521" }, { label: "田尾鄉", value: "522" }, { label: "埤頭鄉", value: "523" }, { label: "溪州鄉", value: "524" },
                        { label: "竹塘鄉", value: "525" }, { label: "二林鎮", value: "526" }, { label: "大城鄉", value: "527" }, { label: "芳苑鄉", value: "528" }, { label: "二水鄉", value: "530" }]
                },
                {
                    label: "南投縣", value: "10",
                    children: [{ label: "南投市", value: "540" }, { label: "中寮鄉", value: "541" }, { label: "草屯鎮", value: "542" }, { label: "國姓鄉", value: "544" }, { label: "埔里鎮", value: "545" }, { label: "仁愛鄉", value: "546" }, { label: "名間鄉", value: "551" },
                        { label: "集集鎮", value: "552" }, { label: "水里鄉", value: "553" }, { label: "魚池鄉", value: "555" }, { label: "信義鄉", value: "556" }, { label: "竹山鎮", value: "557" }, { label: "鹿谷鄉", value: "558" }]
                },
                {
                    label: "雲林縣", value: "11",
                    children: [{ label: "斗南鎮", value: "630" }, { label: "大埤鄉", value: "631" }, { label: "虎尾鎮", value: "632" }, { label: "土庫鎮", value: "633" }, { label: "褒忠鄉", value: "634" }, { label: "東勢鄉", value: "635" }, { label: "台西鄉", value: "636" },
                        { label: "崙背鄉", value: "637" }, { label: "麥寮鄉", value: "638" }, { label: "斗六市", value: "640" }, { label: "林內鄉", value: "643" }, { label: "古坑鄉", value: "646" }, { label: "莿桐鄉", value: "647" }, { label: "西螺鎮", value: "648" },
                        { label: "二崙鄉", value: "649" }, { label: "北港鎮", value: "651" }, { label: "水林鄉", value: "652" }, { label: "口湖鄉", value: "653" }, { label: "四湖鄉", value: "654" }, { label: "元長鄉", value: "655" }]
                },
                {
                    label: "嘉義市", value: "12",
                    children: [{ label: "東區", value: "600" }, { label: "西區", value: "600" }]
                },
                {
                    label: "嘉義縣", value: "13",
                    children: [{ label: "番路鄉", value: "602" }, { label: "梅山鄉", value: "603" }, { label: "竹崎鄉", value: "604" }, { label: "阿里山鄉", value: "605" }, { label: "中埔鄉", value: "606" }, { label: "大埔鄉", value: "607" }, { label: "水上鄉", value: "608" },
                        { label: "鹿草鄉", value: "611" }, { label: "太保市", value: "612" }, { label: "朴子市", value: "613" }, { label: "東石鄉", value: "614" }, { label: "六腳鄉", value: "615" }, { label: "新港鄉", value: "616" }, { label: "民雄鄉", value: "621" },
                        { label: "大林鎮", value: "622" }, { label: "溪口鄉", value: "623" }, { label: "義竹鄉", value: "624" }, { label: "布袋鎮", value: "625" }]
                },
                {
                    label: "台南市", value: "14",
                    children: [{ label: "中西區", value: "700" }, { label: "東區", value: "701" }, { label: "南區", value: "702" }, { label: "北區", value: "704" }, { label: "安平區", value: "708" }, { label: "安南區", value: "709" }, { label: "永康區", value: "710" },
                        { label: "歸仁區", value: "711" }, { label: "新化區", value: "712" }, { label: "左鎮區", value: "713" }, { label: "玉井區", value: "714" }, { label: "楠西區", value: "715" }, { label: "南化區", value: "716" }, { label: "仁德區", value: "717" },
                        { label: "關廟區", value: "718" }, { label: "龍崎區", value: "719" }, { label: "官田區", value: "720" }, { label: "麻豆區", value: "721" }, { label: "佳里區", value: "722" }, { label: "西港區", value: "723" }, { label: "七股區", value: "724" },
                        { label: "將軍區", value: "725" }, { label: "學甲區", value: "726" }, { label: "北門區", value: "727" }, { label: "新營區", value: "730" }, { label: "後壁區", value: "731" }, { label: "白河區", value: "732" }, { label: "東山區", value: "733" },
                        { label: "六甲區", value: "734" }, { label: "下營區", value: "735" }, { label: "柳營區", value: "736" }, { label: "鹽水區", value: "737" }, { label: "善化區", value: "741" }, { label: "大內區", value: "742" }, { label: "山上區", value: "743" },
                        { label: "新市區", value: "744" }, { label: "安定區", value: "745" }]
                },
                {
                    label: "高雄市", value: "15",
                    children: [{ label: "新興區", value: "800" }, { label: "前金區", value: "801" }, { label: "苓雅區", value: "802" }, { label: "鹽埕區", value: "803" }, { label: "鼓山區", value: "804" }, { label: "旗津區", value: "805" }, { label: "前鎮區", value: "806" },
                        { label: "三民區", value: "807" }, { label: "楠梓區", value: "811" }, { label: "小港區", value: "812" }, { label: "左營區", value: "813" }, { label: "仁武區", value: "814" }, { label: "大社區", value: "815" }, { label: "岡山區", value: "820" },
                        { label: "路竹區", value: "821" }, { label: "阿蓮區", value: "822" }, { label: "田寮區", value: "823" }, { label: "燕巢區", value: "824" }, { label: "橋頭區", value: "825" }, { label: "梓官區", value: "826" }, { label: "彌陀區", value: "827" },
                        { label: "永安區", value: "828" }, { label: "湖內區", value: "829" }, { label: "鳳山區", value: "830" }, { label: "大寮區", value: "831" }, { label: "林園區", value: "832" }, { label: "鳥松區", value: "833" }, { label: "大樹區", value: "840" },
                        { label: "旗山區", value: "842" }, { label: "美濃區", value: "843" }, { label: "六龜區", value: "844" }, { label: "內門區", value: "845" }, { label: "杉林區", value: "846" }, { label: "甲仙區", value: "847" }, { label: "桃源區", value: "848" },
                        { label: "那瑪夏區", value: "849" }, { label: "茂林區", value: "851" }, { label: "茄萣區", value: "852" }]
                },
                {
                    label: "屏東縣", value: "16",
                    children: [{ label: "屏東市", value: "900" }, { label: "三地門鄉", value: "901" }, { label: "霧台鄉", value: "902" }, { label: "瑪家鄉", value: "903" }, { label: "九如鄉", value: "904" }, { label: "里港鄉", value: "905" }, { label: "高樹鄉", value: "906" },
                        { label: "鹽埔鄉", value: "907" }, { label: "長治鄉", value: "908" }, { label: "麟洛鄉", value: "909" }, { label: "竹田鄉", value: "911" }, { label: "內埔鄉", value: "912" }, { label: "萬丹鄉", value: "913" }, { label: "潮州鎮", value: "920" },
                        { label: "泰武鄉", value: "921" }, { label: "來義鄉", value: "922" }, { label: "萬巒鄉", value: "923" }, { label: "崁頂鄉", value: "924" }, { label: "新埤鄉", value: "925" }, { label: "南州鄉", value: "926" }, { label: "林邊鄉", value: "927" },
                        { label: "東港鎮", value: "928" }, { label: "琉球鄉", value: "929" }, { label: "佳冬鄉", value: "931" }, { label: "新園鄉", value: "932" }, { label: "枋寮鄉", value: "940" }, { label: "枋山鄉", value: "941" }, { label: "春日鄉", value: "942" },
                        { label: "獅子鄉", value: "943" }, { label: "車城鄉", value: "944" }, { label: "牡丹鄉", value: "945" }, { label: "恆春鎮", value: "946" }, { label: "滿州鄉", value: "947" }]
                },
                {
                    label: "台東縣", value: "17",
                    children: [{ label: "台東市", value: "950" }, { label: "綠島鄉", value: "951" }, { label: "蘭嶼鄉", value: "952" }, { label: "延平鄉", value: "953" }, { label: "卑南鄉", value: "954" }, { label: "鹿野鄉", value: "955" }, { label: "關山鎮", value: "956" },
                        { label: "海端鄉", value: "957" }, { label: "池上鄉", value: "958" }, { label: "東河鄉", value: "959" }, { label: "成功鎮", value: "961" }, { label: "長濱鄉", value: "962" }, { label: "太麻里鄉", value: "963" }, { label: "金峰鄉", value: "964" },
                        { label: "大武鄉", value: "965" }, { label: "達仁鄉", value: "966" }]
                },
                {
                    label: "花蓮縣", value: "18",
                    children: [{ label: "花蓮市", value: "970" }, { label: "新城鄉", value: "971" }, { label: "秀林鄉", value: "972" }, { label: "吉安鄉", value: "973" }, { label: "壽豐鄉", value: "974" }, { label: "鳳林鎮", value: "975" }, { label: "光復鄉", value: "976" },
                        { label: "豐濱鄉", value: "977" }, { label: "瑞穗鄉", value: "978" }, { label: "萬榮鄉", value: "979" }, { label: "玉里鎮", value: "981" }, { label: "卓溪鄉", value: "982" }]
                },
                {
                    label: "宜蘭縣", value: "19",
                    children: [{ label: "宜蘭市", value: "260" }, { label: "頭城鎮", value: "261" }, { label: "礁溪鄉", value: "262" }, { label: "壯圍鄉", value: "263" }, { label: "員山鄉", value: "264" }, { label: "羅東鎮", value: "265" }, { label: "三星鄉", value: "266" },
                        { label: "大同鄉", value: "267" }, { label: "五結鄉", value: "268" }, { label: "冬山鄉", value: "269" }, { label: "蘇澳鎮", value: "270" }, { label: "南澳鄉", value: "272" }]
                },
                {
                    label: "澎湖縣", value: "20",
                    children: [{ label: "馬公市", value: "880" }, { label: "西嶼鄉", value: "881" }, { label: "望安鄉", value: "882" }, { label: "七美鄉", value: "883" }, { label: "白沙鄉", value: "884" }, { label: "湖西鄉", value: "885" }]
                },
                {
                    label: "金門縣", value: "21",
                    children: [{ label: "金沙鎮", value: "890" }, { label: "金湖鎮", value: "891" }, { label: "金寧鄉", value: "892" }, { label: "金城鎮", value: "893" }, { label: "烈嶼鄉", value: "894" }, { label: "烏坵鄉", value: "896" }]
                },
                {
                    label: "連江縣", value: "22",
                    children: [{ label: "南竿鄉", value: "209" }, { label: "北竿鄉", value: "210" }, { label: "莒光鄉", value: "211" }, { label: "東引鄉", value: "212" }]
                }
            ]
        };
    },
    computed: {
        modelValue: {
            get: function () { return this.value; },
            set: function (val) { this.$emit('input', val); }
        },
        firstValue: function () {
            return this.modelValue[0];
        },
        secondValue: function () {
            return this.modelValue[1];
        },
        thirdValue: function () {
            return this.modelValue[2];
        },
        firstArr: function () {
            var temp = this.options;
            return temp;
        },
        secondArr: function () {
            var _this = this;
            var temp = [];
            if (this.modelValue[0]) {
                temp = this.options.find(function (option) { return option.value === _this.modelValue[0]; }).children;
            }
            return temp;
        },
        thirdArr: function () {
            var _this = this;
            var temp = [];
            if (this.modelValue[1]) {
                temp = this.secondArr.find(function (option) { return option.value === _this.modelValue[1]; }).children;
            }
            return temp;
        },
    },
    watch: {
        firstValue: function () {
            this.modelValue.splice(1, 1, "");
        },
        secondValue: function () {
            if (this.third)
                this.modelValue.splice(2, 1, "");
        },
    },
    methods: {
        onChange: function () {
            this.$parent.$emit('validate'); // 通知FormItem校驗
        }
    },
    mounted: function () {
        var _this = this;
        this.$on('validate', function () {
            _this.$nextTick(function () {
                _this.$parent.$emit('validate'); // 通知FormItem校驗
            });
        });
    },
});
// Switch 開關
Vue.component('ud-switch', {
    name: "UdSwitch",
    template: "\n    <div class=\"ud-switch\">\n      <label>\n        <input \n          type=\"checkbox\"\n          v-model=\"modelValue\"\n          v-bind=\"$attrs\"\n        >\n        <div class=\"switch-decorator\">\n          <div class=\"circle\"></div>\n        </div>\n        <p><slot>\u958B\u95DC</slot></p>\n      </label>\n    </div>\n  ",
    inheritAttrs: false,
    props: {
        value: { default: false },
    },
    computed: {
        modelValue: {
            get: function () { return this.value; },
            set: function (val) { this.$emit('input', val); }
        }
    },
});
// DatePicker 日期選擇器 (依賴：element-ui)
Vue.component('ud-date-picker', {
    name: 'UdDatePicker',
    inheritAttrs: false,
    template: "\n    <div class=\"ud-date-picker\">\n      <el-date-picker\n        class=\"ud-select\"\n        v-model=\"modelValue\"\n        v-bind=\"$attrs\"\n        type=\"date\"\n        :value-format=\"valueFormat\"\n        :align=\"align\"\n        :placeholder=\"placeholder\"\n        :editable=\"editable\"\n        ref=\"date\"\n        @change=\"onChange\"\n      >\n      </el-date-picker>\n    </div>\n  ",
    props: {
        value: null,
        center: Boolean,
        valueFormat: {
            default: "yyyy-MM-dd"
        },
        align: {
            default: "center"
        },
        placeholder: {
            default: "請選擇日期"
        },
        editable: {
            default: false
        }
    },
    computed: {
        modelValue: {
            get: function () { return this.value; },
            set: function (val) { this.$emit('input', val); }
        },
    },
    mounted: function () {
        if (this.center)
            this.centerSelect();
        window.addEventListener("resize", this.centerSelect);
    },
    destroyed: function () {
        window.removeEventListener("resize", this.centerSelect);
    },
    methods: {
        onChange: function () {
            if (this.center)
                this.centerSelect();
            this.$parent.$emit('validate'); // 通知FormItem校驗
            this.$emit('change', this.$refs.date.$el.querySelector('.el-input__inner').value);
        },
        getTextWidth: function (text, target) {
            var el = document.createElement('span');
            var fontSize = window.getComputedStyle(target).fontSize || '14px';
            el.textContent = text;
            el.style.display = 'inline-block';
            el.style.fontSize = fontSize;
            document.body.appendChild(el);
            var elmWidth = el.offsetWidth;
            el.remove();
            return elmWidth;
        },
        centerSelect: function () {
            var el = this.$refs.date.$el.querySelector('.el-input__inner');
            var elValue = this.$refs.date.value;
            var text = "";
            elValue ? text = elValue : text = this.placeholder;
            var emptySpace = el.offsetWidth - this.getTextWidth(text, el);
            el.style.textIndent = (emptySpace / 2) + "px";
        }
    },
});
// Captcha 圖形驗證碼
Vue.component('ud-captcha', {
    name: "UdCaptcha",
    template: "\n    <div class=\"ud-captcha\">\n      <div class=\"canvas-area\" ref=\"canvasArea\">\n        <canvas id=\"verify-canvas\" width=\"100\" height=\"38\" style=\"display: none;\"></canvas>\n        <img ref=\"codeimg\" @click=\"refresh\">\n        <input type=\"hidden\" v-model=\"inputVal\">\n      </div>\n      <div class=\"refresh\" @click=\"refresh\" v-if=\"!noRefresh\">\n        <img src=\"img/icon_04.png\">\n      </div>\n    </div>\n  ",
    computed: {
        inputVal: {
            get: function () { return this.value; },
            set: function (val) { this.$emit('input', val); }
        }
    },
    props: {
        value: String,
        color: { default: "#989799" },
        bgColor: { default: "#000" },
        randomColor: { default: "#777" },
        font: { default: "20px Arial" },
        noLine: Boolean,
        noDots: Boolean,
        noRefresh: Boolean,
    },
    mounted: function () {
        this.drawCode();
    },
    methods: {
        drawCode: function () {
            var nums = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz".split("");
            var canvas = document.getElementById('verify-canvas'); // 取得HTML端畫布
            var context = canvas.getContext("2d"); // 取得畫布2D上下文
            context.fillStyle = this.bgColor; // 畫布填充色
            context.fillRect(0, 0, canvas.width, canvas.height); // 清空畫布
            context.fillStyle = this.color; // 設置字體顏色
            context.font = this.font; // 設置字體
            var rand = new Array();
            var x = new Array();
            var y = new Array();
            for (var i = 0; i < 4; i++) {
                rand[i] = nums[Math.floor(Math.random() * nums.length)];
                x[i] = i * 16 + 16;
                y[i] = Math.random() * 20 + 15;
                context.fillText(rand[i], x[i], y[i]);
            }
            var code = rand.join('');
            this.inputVal = code;
            if (!this.noLine) {
                for (var i = 0; i < 3; i++) {
                    this.drawline(canvas, context);
                }
            }
            if (!this.noDots) {
                for (var i = 0; i < 30; i++) {
                    this.drawDot(canvas, context);
                }
            }
            this.convertCanvasToImage(canvas);
        },
        drawline: function (canvas, context) {
            context.moveTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)); // 隨機線的起點x座標是畫布x座標0位置 y座標是畫布高度的隨機數
            context.lineTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)); // 隨機線的終點x座標是畫布寬度 y座標是畫布高度的隨機數
            context.lineWidth = 0.5; // 隨機線寬
            context.strokeStyle = this.randomColor; // 隨機線描邊屬性
            context.stroke(); // 描邊 即起點描到終點
        },
        drawDot: function (canvas, context) {
            var px = Math.floor(Math.random() * canvas.width);
            var py = Math.floor(Math.random() * canvas.height);
            context.moveTo(px, py);
            context.lineTo(px + 1, py + 1);
            context.lineWidth = 0.2;
            context.strokeStyle = this.randomColor;
            context.stroke();
        },
        convertCanvasToImage: function (canvas) {
            var image = this.$refs.codeimg;
            image.src = canvas.toDataURL("image/png");
            return image;
        },
        refresh: function () {
            document.getElementById('verify-canvas').remove();
            this.$refs.canvasArea.insertAdjacentHTML('afterbegin', '<canvas width="100" height="38" id="verify-canvas" style="display: none;"></canvas>');
            this.drawCode();
        }
    },
});
// FormItem 表單驗證容器
Vue.component('ud-form-item', {
    name: "UdFormItem",
    template: "\n    <div class=\"ud-form-item\" :class=\"{'is-error': errorMessage, 'is-flex': flex}\">\n      <div class=\"ud-form-item-left\" :style=\"{ 'flex-basis': labelWidth, 'text-align': labelAlign }\">  \n        <label v-if=\"label\">{{ label }}</label>\n      </div>\n      <div class=\"ud-form-item-right\">  \n        <slot></slot>\n        <p class=\"error-message\" v-if=\"errorMessage\">{{ errorMessage }}</p>\n      </div>\n    </div>\n  ",
    data: function () {
        return {
            errorMessage: '',
            lock: false,
        };
    },
    inject: ["form"],
    props: {
        label: {
            type: String,
        },
        prop: {
            type: String
        },
        flex: {
            type: Boolean
        },
        labelWidth: {
            type: String,
            default: "30%"
        },
        labelAlign: {
            type: String,
        }
    },
    mounted: function () {
        var _this = this;
        this.$on('validate', function () {
            if (!_this.prop)
                return;
            _this.validate(false);
        });
    },
    methods: {
        validate: function (submit) {
            var _this = this;
            if (this.form.submitLock)
                return;
            var rules = this.form.rules[this.prop]; // 獲取校驗規則
            var value = this.form.model[this.prop]; // 獲取數據
            for (var _i = 0, rules_1 = rules; _i < rules_1.length; _i++) {
                var rule = rules_1[_i];
                this.errorMessage = "";
                switch (rule.type) {
                    case "required":// 必填驗證
                        if (Array.isArray(value) && value.length != 0) {
                            if (value.some(function (i) { return i.length === 0; }))
                                this.errorMessage = rule.message || "此欄位為必填項目";
                        }
                        else if (value === null) {
                            this.errorMessage = rule.message || "此欄位為必填項目";
                        }
                        else {
                            if (value.length === 0 || value === false)
                                this.errorMessage = rule.message || "此欄位為必填項目";
                        }
                        break;
                    case "name":// 姓名驗證
                        if (value && !new RegExp('^[a-zA-Z0-9_\u4e00-\u9fa5]+$').test(value))
                            this.errorMessage = rule.message || "姓名格式有誤，不接受特殊符號";
                        break;
                    case "phone":// 電話驗證
                        if (value && !new RegExp('^09[0-9]{8}$').test(value))
                            this.errorMessage = rule.message || "電話格式有誤，例: 0929123456";
                        break;
                    case "email":// 電子郵件驗證
                        if (value && !new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$').test(value))
                            this.errorMessage = rule.message || "Email格式有誤，需包含'@'符號";
                        break;
                    case "idcard":// 身分證字號驗證
                        if (value && !new RegExp('^[A-Z](1|2)[0-9]{8}$').test(value))
                            this.errorMessage = rule.message || "身分證字號格式有誤，例: A123456789";
                        break;
                    case "date":// 日期驗證
                        if (value && !new RegExp('^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$').test(value))
                            this.errorMessage = rule.message || "日期格式有誤或不存在，例: 2020-03-04";
                        break;
                    case "number":// 數字驗證
                        if (value && !new RegExp('^[0-9]+$').test(value))
                            this.errorMessage = rule.message || "格式有誤，只接受數字";
                        break;
                    case "url":// 網址驗證
                        if (value && !new RegExp('^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$').test(value))
                            this.errorMessage = rule.message || "網址格式有誤，例: https://www.google.com";
                        break;
                    case "ip":// IP地址驗證
                        if (value && !new RegExp('^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$').test(value))
                            this.errorMessage = rule.message || "IP地址格式有誤，例: 115.28.47.26";
                        break;
                    case "hex":// Hex色碼驗證
                        if (value && !new RegExp('^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$').test(value))
                            this.errorMessage = rule.message || "Hex色碼格式有誤，例: #ff0000";
                        break;
                    case "equal":// 相等驗證
                        if (rule.caseIgnore) {
                            if (value && value.toLowerCase() !== this.form.model[rule.equalTo].toLowerCase())
                                this.errorMessage = rule.message || "驗證碼錯誤";
                        }
                        else {
                            if (value && value !== this.form.model[rule.equalTo])
                                this.errorMessage = rule.message || "驗證碼錯誤";
                        }
                        break;
                    default:
                        if (!new RegExp(rule.type).test(value))
                            this.errorMessage = rule.message || "格式有誤，請重新輸入";
                        break;
                }
                if (this.errorMessage)
                    break;
            }
            if (!submit)
                return;
            return new Promise(function (resolve, reject) {
                _this.errorMessage ? reject() : resolve();
            });
        }
    }
});
// Form 表單驗證
Vue.component('ud-form', {
    name: "UdForm",
    template: "\n    <div class=\"ud-form\" :class=\"{'is-no-error-msg': noErrorMsg}\">\n      <form v-bind=\"$attrs\">\n        <slot></slot>\n      </form>\n    </div>\n  ",
    inheritAttrs: false,
    provide: function () {
        return {
            form: this // 傳遞Form實例给後代，比如FormItem用來校驗
        };
    },
    data: function () {
        return {
            submitLock: true
        };
    },
    props: {
        model: {
            type: Object,
            required: true
        },
        rules: {
            type: Object
        },
        noErrorMsg: {
            type: Boolean // 有無錯誤提示
        }
    },
    methods: {
        validate: function (successCb, failedCb) {
            if (successCb === void 0) { successCb = function () { console.log('驗證成功'); }; }
            if (failedCb === void 0) { failedCb = function () { console.log('驗證失敗'); }; }
            this.submitLock = false;
            var tasks = this.$children.filter(function (item) { return item.prop; }).map(function (item) { return item.validate(true); });
            // console.log('tasks: ', tasks);
            Promise.all(tasks)
                .then(function () { return successCb(); })
                .catch(function () { return failedCb(); });
        }
    }
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
        bdColor: { default: "#333" },
        bdWidth: { default: "3" },
        padding: { default: "3" },
        direction: { default: "right" } //方向
    }
});
// Collapse 摺疊容器
Vue.component('ud-collapse', {
    name: "UdCollapse",
    template: "\n    <div class=\"ud-collapse\" :style=\"{'transition-duration': durationSecond}\">\n      <div class=\"ud-collapse-wrapper\">\n        <slot></slot>\n      </div>\n    </div>\n  ",
    props: {
        value: {
            default: false
        },
        duration: {
            default: 0.2
        }
    },
    computed: {
        durationSecond: function () {
            return this.duration + "s";
        }
    },
    watch: {
        value: {
            immediate: true,
            handler: function () {
                var _this = this;
                this.$nextTick(function () {
                    _this.collapse();
                });
            }
        }
    },
    methods: {
        collapse: function () {
            var el = this.$el;
            if (this.value) {
                el.style.height = el.querySelector('.ud-collapse-wrapper').clientHeight + "px";
            }
            else {
                el.style.height = 0;
            }
        }
    },
});
// Ratio 等比例自適應容器
Vue.component('ud-ratio', {
    template: "\n    <div class=\"ud-ratio\">\n      <div class=\"ud-ratio-bg\" :style=\"{\n        backgroundImage: 'url(' + src + ')', \n        paddingBottom: height + '%', \n        borderRadius: radius,\n        backgroundSize: bgSize\n      }\">\n        <slot></slot>\n      </div>\n    </div>\n  ",
    props: {
        src: { default: "https://i.imgur.com/s3w1Sm3.jpg" },
        height: { default: 100 },
        radius: { default: '0px' },
        bgSize: { default: "cover" } // 背景尺寸 (cover, contain, 100%...等)
    },
});
//-----------------------Notice-----------------------
// Alert 警告彈窗
var UdAlert = {
    name: "UdAlert",
    template: "\n    <transition name=\"fade\">\n      <div class=\"ud-alert\" v-if=\"isShow\" @click.self=\"maskHandler\">\n        <div class=\"modal-wrapper\">\n          <div class=\"modal-close\" v-if=\"btnClose\" @click=\"destroy\">\n            <i class=\"icon-close\"></i>\n          </div>\n          <div class=\"modal-header\" v-if=\"title\">\n            <p v-html=\"nl2br(title)\"></p>\n          </div>\n          <div class=\"modal-body\">\n            <p v-html=\"nl2br(msg)\"></p>\n          </div>\n          <div class=\"modal-footer\">\n            <ud-flex>\n              <ud-button @click=\"cancelHandler\" plain v-if=\"confirm\">{{ cancelText }}</ud-button>\n              <ud-button @click=\"confirmHandler\">{{ confirmText }}</ud-button>\n            </ud-flex>\n          </div>\n        </div>\n      </div>\n    </transition>\n  ",
    data: function () {
        return {
            isShow: false,
            confirm: false,
            maskClose: false,
            btnClose: false,
            scrollLock: true,
            title: '',
            msg: "網路通信錯誤，請稍候再試",
            cancelText: "取消",
            onCancel: function () { },
            confirmText: "確定",
            onConfirm: function () { },
            resolve: '',
            reject: '',
        };
    },
    mounted: function () {
        if (this.scrollLock)
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        if (this.scrollLock)
            document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    },
    methods: {
        show: function () {
            var _this = this;
            this.isShow = true;
            return new Promise(function (resolve, reject) {
                _this.resolve = resolve;
                _this.reject = reject;
            });
        },
        nl2br: function (val) {
            return nl2br(val);
        },
        confirmHandler: function () {
            this.onConfirm();
            this.resolve('confirm');
            this.destroy();
        },
        cancelHandler: function () {
            this.onCancel();
            this.reject('cancel');
            this.destroy();
        },
        maskHandler: function () {
            if (this.maskClose)
                this.destroy();
        },
        destroy: function () {
            var _this = this;
            this.isShow = false;
            if (this.scrollLock)
                document.getElementsByTagName('body')[0].style.overflow = 'auto';
            setTimeout(function () {
                _this.$destroy(true);
                _this.$el.parentNode.removeChild(_this.$el);
            }, 200);
        },
    },
};
var udAlertExtend = Vue.extend(UdAlert);
var udAlert = function (options) {
    var udAlertInstance = new udAlertExtend();
    typeof options === 'string' ? udAlertInstance.msg = options : Object.assign(udAlertInstance, options);
    document.body.appendChild(udAlertInstance.$mount().$el);
    return udAlertInstance.show();
};
Vue.prototype.udAlert = udAlert;
// Modal 通用彈窗
Vue.component("ud-modal", {
    name: "UdModal",
    template: "\n    <transition name=\"fade\">\n      <div class=\"ud-modal\" v-show=\"isShow\" v-cloak>\n        <div class=\"modal-wrapper\" @click.self=\"onMaskClick\">\n          <div class=\"modal-content\">\n            <div class=\"modal-close\" v-if=\"hasCancel\" @click=\"isShow = 0\">\n              <i class=\"fas fa-times\"></i>\n            </div>\n            <div class=\"modal-header\" v-if=\"!$slots.default\">\n              <p>{{ title }}</p>\n            </div>\n            <div class=\"modal-body\">\n              <p v-if=\"!$slots.default\">{{ message }}</p>\n              <slot></slot>\n            </div>\n            <div class=\"modal-footer\" v-if=\"!$slots.default\">\n              <div class=\"button-area\">\n                <ud-button @click=\"isShow = 0\">OK</ud-button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </transition>\n  ",
    props: {
        title: { default: "通用標題" },
        message: { default: "通用訊息" },
        value: { default: 0 },
        maskCancel: Boolean,
        hasCancel: Boolean,
    },
    computed: {
        isShow: {
            get: function () { return this.value; },
            set: function (val) { this.$emit('input', val); }
        }
    },
    methods: {
        onMaskClick: function () {
            if (this.maskCancel)
                this.isShow = 0;
        }
    },
});
// Loading 載入中
Vue.component('ud-loading', {
    name: "UdLoading",
    template: "\n    <transition name=\"loading\">\n      <div class=\"ud-loading\" v-show=\"isShow\" :class=\"{'theme-white': theme === 'white'}\">\n        <div class=\"modal-wrapper\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <i :class=\"icon\"></i>\n            </div>\n            <div class=\"modal-body\">\n              <p v-html=\"nl2br(msg)\"></p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </transition>\n  ",
    data: function () {
        return {
            isShow: false
        };
    },
    props: {
        label: { default: "載入中..." } // 載入中文字
    },
    methods: {
        nl2br: function (val) {
            return nl2br(val);
        },
    },
});
// Loading 載入中(調用式) ud-loading
var UdLoadingExtend = Vue.extend({
    template: "\n    <transition name=\"loading\">\n      <div class=\"ud-loading\" v-show=\"isShow\" :class=\"{'theme-white': theme === 'white'}\">\n        <div class=\"modal-wrapper\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <div v-if=\"iconType === 'css'\" class=\"icon-css\"></div>\n              <i v-else-if=\"iconType === 'font'\" class=\"icon-font\" :class=\"iconFont\"></i>\n              <img v-else class=\"icon-img\" :src=\"iconImg\">\n            </div>\n            <div class=\"modal-body\">\n              <p v-html=\"nl2br(msg)\"></p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </transition>\n  ",
    data: function () {
        return {
            isShow: false,
            fixed: false,
            theme: "",
            iconType: "css",
            iconFont: "fas fa-spinner fa-pulse",
            iconImg: "https://image.flaticon.com/icons/svg/553/553265.svg",
            msg: "",
        };
    },
    mounted: function () {
        this.isShow = true;
    },
    methods: {
        nl2br: function (val) {
            return nl2br(val);
        },
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
Vue.prototype.udLoading = {
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
//-----------------------Tools-----------------------
// Html 用戶自定義訊息
Vue.component('ud-html', {
    template: "\n    <div class=\"ud-html\" v-html=\"nl2br(text)\"></div>\n  ",
    props: {
        text: { default: "<h1>H1 用戶自定義訊息</h1><h2>H2 用戶自定義訊息</h2><h3>H3 用戶自定義訊息</h3><h4>H4 用戶自定義訊息</h4><h5>H5 用戶自定義訊息</h5><h6>H6 用戶自定義訊息</h6>\n<p>p 用戶自定義訊息</p><span>span 用戶自定義訊息</span>" } // 文字
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
// Backtop 回到頂部
Vue.component('ud-backtop', {
    name: "UdBacktop",
    template: "\n    <ud-button @click=\"scrollToTop\">\u56DE\u6700\u9802</ud-button>\n  ",
    methods: {
        scrollToTop: function () {
            scrollTo();
        }
    },
});
// Ellipsis 文字省略
Vue.component('ud-ellipsis', {
    name: "UdEllipsis",
    template: '<p class="ud-ellipsis" :style="{webkitLineClamp: maxLine}"><slot></slot></p>',
    props: {
        maxLine: { default: 1, } // 指定省略行數
    },
});
// Phone 撥打電話
Vue.component('ud-phone', {
    name: "UdPhone",
    template: "\n    <div class=\"ud-phone\">\n      <a :href=\"phoneHref\">\n        <slot>{{ number }}</slot>\n      </a>\n    </div>\n  ",
    props: {
        number: { default: "0912345678" } // 電話號碼
    },
    computed: {
        phoneHref: function () {
            return "tel:" + this.number;
        }
    },
});
// Countdown 倒數計時
Vue.component('ud-countdown', {
    name: "UdCountdown",
    template: "\n    <span class=\"ud-countdown\" ref=\"count\">{{countTime}}</span>\n  ",
    props: {
        time: { default: 60 },
        delay: Boolean // 不馬上開始倒數
    },
    data: function () {
        return {
            countTime: this.time
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
                _this.countTime -= 1;
                if (_this.countTime <= 0) {
                    _this.$emit("timeup");
                    clearInterval(countdown);
                }
            }, 1000);
        },
        reset: function () {
            this.countTime = this.time;
            this.countdown();
        }
    },
});
// QrCode 取得QRcode圖片
Vue.component('ud-qrcode', {
    name: "UdQrcode",
    template: "\n    <div class=\"ud-qrcode\">\n      <div v-if=\"!ready\" class=\"icon-css\"></div>\n      <img v-show=\"ready\" ref=\"img\" :src=\"QrCodeSrc\" :alt=\"url\">\n    </div>\n  ",
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
        url: { default: "https://www.google.com.tw/" },
        width: { default: "300" },
        height: { default: "300" },
    },
    computed: {
        QrCodeSrc: function () {
            return "http://chart.apis.google.com/chart?cht=qr&choe=UTF-8&chs=" + this.width + "x" + this.height + "&chl=" + this.url;
        }
    },
});
//-----------------------String-----------------------
/**
 * 將字串內換行符\n轉為<br>
 * @param  {String} val 傳入值
 * @param  {Boolean} is_xhtml 是否為xhtml
 */
function nl2br(val, is_xhtml) {
    if (is_xhtml === void 0) { is_xhtml = false; }
    if (typeof val === 'undefined' || val === null) {
        return '';
    }
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
    return (val + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}
/**
 * 取得隨機字串
 * @param  {Number} length 指定字串長度
 */
function randomString(length) {
    if (length === void 0) { length = 10; }
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
    if (val === void 0) { val = 0; }
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
    vm.udAlert({ msg: '文字已複製到剪貼簿' });
}
//-----------------------Number-----------------------
/**
 * 取得範圍內隨機整數
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
 * @param  {String} n 代入值 預設為0
 * @param  {Number} decimals 指定位數 預設為0
 * round(1.235, 2); -> 1.24
 */
function round(n, decimals) {
    if (n === void 0) { n = 0; }
    if (decimals === void 0) { decimals = 0; }
    return Number(Math.round(n + "e" + decimals) + "e-" + decimals);
}
//-----------------------Image-----------------------
/**
 * 預載單張圖片
 * @param  {String} url 圖片路徑
 * imageLoaded('imgUrl').then(...);
 * 圖片讀取完成時返回Image物件
 */
function imageLoaded(url) {
    var img = new Image();
    img.src = url;
    return new Promise(function (resolve, reject) {
        if (img.complete) {
            resolve(img);
        }
        else {
            img.onload = function () { return resolve(img); };
            img.onerror = function (e) { return reject(e); };
        }
    });
}
/**
 * 預載多張圖片
 * @param  {Array} arr 多張圖片路徑陣列
 * imageAllLoaded(['imgUrl1','imgUrl2']).then(...);
 * 全部圖片都讀取完成時返回Image物件組成的陣列
 */
function imageAllLoaded(arr) {
    var result = [];
    arr.forEach(function (item) {
        result.push(imageLoaded(item));
    });
    return new Promise(function (resolve, reject) {
        Promise.all(result)
            .then(function (res) { return resolve(res); })
            .catch(function (err) { return reject(err); });
    });
}
//-----------------------Array-----------------------
/**
 * 陣列是否有重複值(不分型別)
 * @param  {Array} arr 代入值
 */
function isRepeat(arr) {
    var obj = {};
    for (var i in arr) {
        if (obj[arr[i]])
            return true;
        obj[arr[i]] = true;
    }
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
 * 隨機數時間戳
 */
function uniqueId() {
    return (Number(new Date()).toString() + parseInt(10 * Math.random()) + parseInt(10 * Math.random()) + parseInt(10 * Math.random()));
}
/**
 * 時間格式化
 * @param  {Any} format 轉換格式
 * new Date().format('yyyyMMdd') -> "20200921"
 * new Date().format('yyyy-MM-dd') -> "2020-09-21"
 * new Date().format('yyyy-MM-dd hh:mm:ss') -> "2020-09-21 16:07:59"
 */
// function parseTime(date = new Date(), format = "yyyy-MM-dd hh:mm:ss"){
Date.prototype.format = function (format) {
    if (format === void 0) { format = "yyyy-MM-dd hh:mm:ss"; }
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "H+": this.getHours(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
};
//-----------------------DOM-----------------------
/**
 * 滾動至指定位置
 * @param  {String, Number} el 滾動位置(預設為'top',可選：'top', 'bottom', '.foobar', 300)
 * @param  {Number} speed 滾動時間(預設為5,瞬移為1)
 * @param  {Number} offset 自定偏移(可接受正負數字)
 * @param  {Function} callback 回調函式
 * scrollTo();
 * scrollTo('top', 1);
 * scrollTo('.foobar', 10, -30, () => {console.log('滾動完成')});
 */
function scrollTo(el, speed, offset, callback) {
    if (el === void 0) { el = "top"; }
    if (speed === void 0) { speed = 5; }
    if (offset === void 0) { offset = 0; }
    if (callback === void 0) { callback = function () { }; }
    var scrollTop = document.scrollingElement.scrollTop;
    var top = 0;
    if (typeof el === 'number') {
        top = el + offset;
    }
    else {
        if (el === 'top') {
            top = 0 + offset;
        }
        else if (el === 'bottom') {
            top = document.body.scrollHeight - document.body.clientHeight + offset;
        }
        else {
            top = document.querySelector(el).offsetTop + offset;
        }
    }
    function scroll() {
        scrollTop = scrollTop + (top - scrollTop) / speed;
        if (Math.abs(scrollTop - top) <= 1) {
            document.scrollingElement.scrollTop = top;
            callback && callback();
            return;
        }
        document.scrollingElement.scrollTop = scrollTop;
        requestAnimationFrame(scroll);
    }
    ;
    scroll();
}
;
/**
 * 取得頁面當前捲動高度(寬度)
 * @param  {Any} direction 改取寬度
 */
function getPageScroll(direction) {
    if (direction) {
        return document.documentElement.scrollLeft || document.body.scrollLeft;
    }
    else {
        var bodyTop = 0;
        if (typeof window.pageYOffset != "undefined") {
            bodyTop = window.pageYOffset;
        }
        else if (typeof document.compatMode != "undefined"
            && document.compatMode != "BackCompat") {
            bodyTop = document.documentElement.scrollTop;
        }
        else if (typeof document.body != "undefined") {
            bodyTop = document.body.scrollTop;
        }
        return bodyTop;
    }
}
/**
 * 取得頁面總高度(寬度)
 * @param  {Any} direction 改取寬度
 */
function getPage(direction) {
    var el = document.compatMode == "BackCompat" ? document.body : document.documentElement;
    if (direction) {
        return Math.max(document.documentElement.scrollWidth, document.body.scrollWidth, el.clientWidth);
    }
    else {
        return Math.max(document.documentElement.scrollHeight, document.body.scrollHeight, el.clientHeight);
    }
}
/**
 * 取得頁面可視高度(寬度)
 * @param  {Any} direction 改取寬度
 */
function getPageView(direction) {
    var el = document.compatMode == "BackCompat" ? document.body : document.documentElement;
    if (direction) {
        return el.clientWidth;
    }
    else {
        return el.clientHeight;
    }
}
//-----------------------Verify-----------------------
/**
 * 各式驗證函式
 * @param  {String} type 驗證類型
 * @param  {Any} val 要驗證的值
 * @param  {String} regex 指定正則表達式
 */
function isRegex(type, val, regex) {
    switch (type) {
        // 姓名驗證
        case "name":
            return /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(val);
            break;
        // 電話驗證
        case "phone":
            return /^09[0-9]{8}$/.test(val);
            break;
        // 電子郵件驗證
        case "email":
            return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(val);
            break;
        // 身分證字號驗證
        case "idcard":
            return /^[A-Z](1|2)[0-9]{8}$/.test(val);
            break;
        // 日期驗證(1988-05-27)
        case "date":
            return /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/.test(val);
            break;
        // 數字驗證
        case "number":
            return !isNaN(val);
            break;
        // 網址驗證
        case "url":
            return /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(val);
            break;
        // IP地址驗證
        case "ip":
            return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(val);
            break;
        // Hex色碼驗證
        case "hex":
            return /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(val);
            break;
        //校驗是否為指定正則表達式
        case "regex":
            var regexMode = new RegExp(regex);
            return regexMode.test(val);
            break;
    }
}
/**
 * 精準數字驗證
 * @param  {Any} val 要驗證的值
 */
function isNumber(val) {
    if (typeOf(val) !== "number") {
        return false;
    }
    else {
        return !isNaN(val);
    }
}
/**
 * 未填入驗證
 * @param  {Any} val 要驗證的值
 */
function isEmpty(val) {
    switch (typeOf(val)) {
        case "string":
            if (val.trim().length === 0)
                return true;
            break;
        case "number":
            break;
        case "boolean":
            if (!val)
                return true;
            break;
        case "array":
            if (val.length === 0)
                return true;
            if (val.some(function (i) { return i.length === 0; }))
                return true;
            break;
        case "object":
            break;
        case "null":
            return true;
            break;
        case "undefined":
            return true;
            break;
    }
    return false;
}
// 身分證驗證
function isIdCard(idStr) {
    // 依照字母的編號排列，存入陣列備用。
    var letters = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'W', 'Z', 'I', 'O');
    // 儲存各個乘數
    var multiply = new Array(1, 9, 8, 7, 6, 5, 4, 3, 2, 1);
    var nums = new Array(2);
    var firstChar;
    var firstNum;
    var lastNum;
    var total = 0;
    // 撰寫「正規表達式」。第一個字為英文字母，
    // 第二個字為1或2，後面跟著8個數字，不分大小寫。
    var regExpID = /^[a-z](1|2)\d{8}$/i;
    // 使用「正規表達式」檢驗格式
    if (idStr.search(regExpID) == -1) {
        // 基本格式錯誤
        // alert("請仔細填寫身份證號碼");
        return false;
    }
    else {
        // 取出第一個字元和最後一個數字。
        firstChar = idStr.charAt(0).toUpperCase();
        lastNum = idStr.charAt(9);
    }
    // 找出第一個字母對應的數字，並轉換成兩位數數字。
    for (var i = 0; i < 26; i++) {
        if (firstChar == letters[i]) {
            firstNum = i + 10;
            nums[0] = Math.floor(firstNum / 10);
            nums[1] = firstNum - (nums[0] * 10);
            break;
        }
    }
    // 執行加總計算
    for (var i = 0; i < multiply.length; i++) {
        if (i < 2) {
            total += nums[i] * multiply[i];
        }
        else {
            total += parseInt(idStr.charAt(i - 1)) * multiply[i];
        }
    }
    // 和最後一個數字比對
    if ((10 - (total % 10)) != lastNum) {
        // alert("身份證號碼寫錯了！");
        return false;
    }
    return true;
}
//-----------------------Browser-----------------------
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
 * 函式防抖
 * @description 將幾次操作合併為一次操作進行
 * @param  {Function} fn 處理函式
 * @param  {Number} wait 停止後等待時間 預設為200ms
 * window.addEventListener('scroll', debounce(() => console.log(getRandom), 500));
 */
function debounce(fn, wait) {
    if (wait === void 0) { wait = 200; }
    var timeout = null;
    return function () {
        if (timeout !== null)
            clearTimeout(timeout);
        timeout = setTimeout(fn, wait);
    };
}
/**
 * 函式節流
 * @description 一定時間內只觸發一次函式
 * @param  {Function} fn 處理函式
 * @param  {Number} delay 處理間隔時間 預設為1000ms
 * window.addEventListener('scroll', throttle(() => console.log(getRandom), 2000));
 */
function throttle(fn, delay) {
    var _this = this;
    if (delay === void 0) { delay = 1000; }
    var prev = Date.now();
    return function () {
        var context = _this;
        var args = arguments;
        var now = Date.now();
        if (now - prev >= delay) {
            fn.apply(context, args);
            prev = Date.now();
        }
    };
}
function throttle2(fn, delay) {
    var _this = this;
    var timer;
    var prevTime;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var currTime = Date.now();
        var context = _this;
        if (!prevTime)
            prevTime = currTime;
        clearTimeout(timer);
        if (currTime - prevTime > delay) {
            prevTime = currTime;
            fn.apply(context, args);
            clearTimeout(timer);
            return;
        }
        timer = setTimeout(function () {
            prevTime = Date.now();
            timer = null;
            fn.apply(context, args);
        }, delay);
    };
}
//-----------------------Web-----------------------
/**
 * 查詢網址所帶參數
 * @param  {String} key 鍵值
 * @param  {String} url 網址
 */
function queryString(key, url) {
    if (key === void 0) { key = ""; }
    if (url === void 0) { url = location.href; }
    var parseUrl = new URL(url);
    return parseUrl.searchParams.get(key);
}
/**
 * 解析網址
 * @param  {String} url 網址
 */
function parseUrl(url) {
    if (url === void 0) { url = location.href; }
    var parseUrl = new URL(url);
    return parseUrl;
}
/**
 * 網址跳轉
 * @param  {String} url 欲跳轉的網址
 */
function toUrl(url) {
    window.location.href = url;
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
//# sourceMappingURL=ud-modules.js.map