declare var $: (selector: string) => any;

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
  SelectLink 連動下拉框 -----> ud-select-link
  SelectDate 日期連動下拉框 -----> ud-select-date
  Switch 開關 -----> ud-switch
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

Browser
  動態加載css文件 -----> loadStyle
  取得LocalStorage的值 -----> getLocalStorage
  設定LocalStorage的值 -----> setLocalStorage
  取得Cookie的值 -----> getCookie
  設置cookie值 -----> setCookie
  動態載入插件 -----> insertPlugin
  函式防抖 -----> debounce
  函式節流 -----> throttle

Web
  查詢網址所帶參數 -----> queryString
  HTTP跳轉HTTPS -----> httpsRedirect
  檢驗URL連接是否有效 -----> getUrlState
  網址跳轉 -----> toUrl
  跳頁重整 -----> jumpReload
  Axios封裝 -----> axiosPackage
  CDN備援 -----> cdnBackup

Device
  判斷是否移動裝置 -----> isMobileUserAgent
  判斷是否蘋果移動裝置 -----> isAppleMobileDevice
  判斷是否安卓移動裝置 -----> isAndroidMobileDevice

Animation
  RAF通用動畫函式 -----> animate
*/

// 初始化執行
// cdnBackup();
// Vue.use(VueFormulate);
jumpReload();


//-----------------------Form-----------------------
// Button 按鈕
Vue.component('ud-button', {
  name: 'UdButton',
  template: `
    <button
      class="ud-button"
      @click="handleClick"
      :disabled="disabled || loading"
      :type="type"
      :class="{
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
      }"
      :style="{
        'border-radius': radius,
        'width': width,
        'min-width': minWidth,
        'max-width': maxWidth,
      }"
    >
      <i class="fas fa-spinner fa-pulse" v-if="loading"></i>
      <i :class="icon" v-if="icon && !loading"></i>
      <span><slot>按鈕</slot></span>
    </button>
  `,
  props: {
    icon: { default: '' }, // icon
    type: { default: 'button' }, // 原始類型 (button, submit, reset)
    radius: { default: '5px' }, // 圓角
    width: { default: '100%' }, // 寬度
    minWidth: { default: '0px' }, // 最小寬度
    maxWidth: { default: '100%' }, // 最大寬度
    loading: Boolean, // 載入中
    disabled: Boolean, // 禁止點擊
    plain: Boolean, // 線條化
    round: Boolean, // 圓角
    circle: Boolean, // 圓型
    throttle: Boolean // 函式節流
  },
  methods: {
    handleClick(evt) {
      if(this.throttle) return;
      this.$emit('click', evt);
    }
  },
  mounted() {
    if(!this.throttle) return;
    this.$el.addEventListener('click', throttle(
        (evt) => {this.$emit('click', evt)}
      )
    );
  },
})

// Input 輸入框
Vue.component('ud-input', {
  name: 'UdInput',
  inheritAttrs: false,
  template: `
    <div class="ud-input">
      <input
        v-model="modelValue"
        v-bind="$attrs"
        @input="onInput"
      >
    </div>
  `,
  props: {
    value: null,
  },
  computed: {
    modelValue: {
      get(){ return this.value },
      set(val){ this.$emit('input', val) }
    }
  },
  methods: {
    onInput: function(){
      this.$parent.$emit('validate'); // 通知FormItem校驗
    }
  },
})

// Textarea 多行輸入框
Vue.component('ud-textarea', {
  name: "UdTextarea",
  inheritAttrs: false,
  template: `
    <div class="ud-textarea">
      <textarea
        type="text"
        v-model="modelValue"
        v-bind="$attrs"
        @input="onInput"
      >
      </textarea>
    </div>
  `,
  props: {
    value: null,
  },
  computed: {
    modelValue: {
      get(){ return this.value },
      set(val){ this.$emit('input', val) }
    }
  },
  methods: {
    onInput: function(){
      this.$parent.$emit('validate'); // 通知FormItem校驗
    }
  },
})

// Radio 單選框
Vue.component('ud-radio', {
  name: "UdRadio",
  inheritAttrs: false,
  template: `
    <div class="ud-radio" :class="{'is-flex': flex}">

      <label v-if="option">
        <input
          type="radio"
          v-model="modelValue"
          :value="option"
          v-bind="$attrs"
          @change="onChange"
        >
        <div class="radio-decorator"
          :style="{'border-radius': radius}"
        ></div>
        <p v-if="combine">{{ option }}</p>
      </label>

      <label v-for="option in options" :key="option.value" v-if="options">
        <input
          type="radio"
          v-model="modelValue"
          :value="option.value"
          v-bind="$attrs"
          @change="onChange"
        >
        <div class="radio-decorator"
          :style="{'border-radius': radius}"
        ></div>
        <p>{{ combine ? option.value : option.label }}</p>
      </label>

    </div>
  `,
  props: {
    value: null, // value值
    option: null, // 單選項[string, number]
    options: null, // 多選項[object]
    flex: Boolean, // 是否並排
    radius: { default: "1em" }, // 圓角
    combine: Boolean // 使用value做為label
  },
  computed: {
    modelValue: {
      get(){ return this.value },
      set(val){ this.$emit('input', val) }
    }
  },
  methods: {
    onChange: function(){
      this.$parent.$emit('validate'); // 通知FormItem校驗
    }
  },
})

// Checkbox 多選框
Vue.component('ud-checkbox', {
  name: "UdCheckbox",
  inheritAttrs: false,
  template: `
    <div class="ud-checkbox" :class="{'is-flex': flex}">
      <template v-if="option">
        <label>
          <input
            type="checkbox"
            v-model="modelValue"
            :value="option"
            v-bind="$attrs"
            @change="onChange"
          >
          <div class="checkbox-decorator"></div>
          <p v-if="!noLabel"><slot>{{ options }}</slot></p>
        </label>
      </template>
      <template v-else>
        <label v-for="option in options" :key="option.value">
          <input
            type="checkbox"
            :value="option.value"
            v-model="modelValue"
            v-bind="$attrs"
            @change="onChange"
          >
          <div class="checkbox-decorator"></div>
          <p v-if="!noLabel">{{ combine ? option.value : option.label }}</p>
        </label>
      </template>
    </div>
  `,
  props: {
    value: null, // value值 單個時綁定Boolean 多個時綁定Array
    option: null, // 單選項
    options: null, // 多選項
    flex: Boolean, // 是否並排
    combine: Boolean, // 使用value做為label
    noLabel: Boolean // 是否有label
  },
  computed: {
    modelValue: {
      get(){ return this.value },
      set(val){ this.$emit('input', val) }
    }
  },
  methods: {
    onChange: function(){
      this.$parent.$emit('validate'); // 通知FormItem校驗
    }
  },
})

// Select 下拉框
Vue.component('ud-select', {
  name: "UdSelect",
  inheritAttrs: false,
  template: `
    <div class="ud-select">
      <select 
        v-model="modelValue" 
        :data-placeholder-selected="modelValue.length === 0"
        v-bind="$attrs"
        @change="onChange"
      >
        <option value="" disabled selected>{{ placeholder }}</option>
        <option v-for="option in options" :value="option.value" :key="option.value">
          {{ combine ? option.value : option.label }}
        </option>
      </select>
    </div>
  `,
  props: {
    value: null, // value值
    options: null, // 選項
    placeholder: { default: "請選擇一項" }, // 取代文字
    combine: Boolean // 使用value做為label
  },
  computed: {
    modelValue: {
      get(){ return this.value },
      set(val){ this.$emit('input', val) }
    }
  },
  methods: {
    onChange: function(){
      this.$parent.$emit('validate'); // 通知FormItem校驗
    }
  },
})

// SelectLink 連動下拉框
Vue.component('ud-select-link', {
  name: "UdSelectLink",
  template: `
    <div class="ud-select-link" :class="{'is-flex': flex}">
      <ud-select v-model="modelValue[0]" :options="firstArr" :placeholder="placeholder[0]" :combine="combine"></ud-select>
      <slot></slot>
      <ud-select v-model="modelValue[1]" :options="secondArr" :placeholder="placeholder[1]" :combine="combine"></ud-select>
      <slot name="second"></slot>
      <ud-select v-model="modelValue[2]" :options="thirdArr" :placeholder="placeholder[2]" :combine="combine" v-if="third"></ud-select>
      <slot name="third"></slot>
    </div>
  `,
  props: {
    value: null, // value值
    options: null, // 選項 [Array]
    placeholder: { // placeholder值 [Array]
      default: () => {
        return ["請選擇一項", "請選擇一項", "請選擇一項"];
      }
    },
    third: Boolean, // 是否有第三項
    flex: Boolean, // 是否並排
    combine: Boolean, // 是否label直接使用value值
  },
  computed: {
    modelValue: {
      get(){ return this.value },
      set(val){ this.$emit('input', val) }
    },
    firstValue: function(){
      return this.modelValue[0];
    },
    secondValue: function(){
      return this.modelValue[1];
    },
    thirdValue: function(){
      return this.modelValue[2];
    },
    firstArr: function(){
      let temp = this.options;
      return temp;
    },
    secondArr: function(){
      let temp = [];
      if(this.modelValue[0]){
        temp = this.options.find(option => option.value === this.modelValue[0]).children;
      }
      return temp;
    },
    thirdArr: function(){
      let temp = [];
      if(this.modelValue[1]){
        temp = this.secondArr.find(option => option.value === this.modelValue[1]).children;
      }
      return temp;
    },
  },
  watch: {
    firstValue: function(){
      this.modelValue.splice(1, 1, "");
    },
    secondValue: function(){
      if(this.third) this.modelValue.splice(2, 1, "");
    },
  },
  mounted() {
    this.$on('validate', () => {
      this.$nextTick(() => {
        this.$parent.$emit('validate'); // 通知FormItem校驗
      })
    })
  },
})

// SelectDate 日期連動下拉框
Vue.component('ud-select-date', {
  name: "UdSelectDate",
  template: `
    <div class="ud-select-date" :class="{'is-flex': flex}">
      <ud-select v-model="modelValue[0]" :options="firstArr" :placeholder="placeholder[0]" combine></ud-select>
      <slot></slot>
      <ud-select v-model="modelValue[1]" :options="secondArr" :placeholder="placeholder[1]" combine></ud-select>
      <slot name="second"></slot>
      <ud-select v-model="modelValue[2]" :options="thirdArr" :placeholder="placeholder[2]" combine v-if="third"></ud-select>
      <slot name="third"></slot>
    </div>
  `,
  props: {
    value: null, // value值
    placeholder: { // placeholder值 [Array]
      default: () => {
        return ["年", "月", "日"];
      }
    },
    third: Boolean, // 是否有第三項
    flex: Boolean, // 是否並排
    roc: Boolean // 是否為民國年
  },
  computed: {
    modelValue: {
      get(){ return this.value },
      set(val){ this.$emit('input', val) }
    },
    firstValue: function(){
      return this.modelValue[0];
    },
    secondValue: function(){
      return this.modelValue[1];
    },
    thirdValue: function(){
      return this.modelValue[2];
    },
    firstArr: function(){
      let temp = [];
      let time = new Date();
      let year = time.getFullYear();
      if(this.roc) year = year - 1911;
      let yearAfter = year - 120;
      if(this.roc && yearAfter <= 0) yearAfter = 1;
      for(let i = year; i >= yearAfter; i--){
        temp.push({value: i});
      }
      return temp;
    },
    secondArr: function(){
      let temp = [];
      if(this.firstValue){
        for(let i = 1; i <= 12; i++){
          temp.push({value: i});
        }
      }
      return temp;
    },
    thirdArr: function(){
      let temp = [];
      if(this.firstValue && this.secondValue){
        let year = parseInt(this.firstValue);
        if(this.roc) year = year + 1911;
        let date = new Date(year, this.secondValue, 0).getDate();
        for(let i = 1; i <= date; i++){
          temp.push({value: i});
        }
      }
      return temp;
    },
  },
  watch: {
    firstValue: function(){
      this.modelValue.splice(1, 1, "");
    },
    secondValue: function(){
      if(this.third) this.modelValue.splice(2, 1, "");
    },
  },
  mounted() {
    this.$on('validate', () => {
      this.$nextTick(() => {
        this.$parent.$emit('validate'); // 通知FormItem校驗
      })
    })
  },
})

// Switch 開關
Vue.component('ud-switch', {
  name: "UdSwitch",
  inheritAttrs: false,
  template: `
    <div class="ud-switch">
      <label>
        <input 
          type="checkbox"
          v-model="modelValue"
          v-bind="$attrs"
        >
        <div class="switch-decorator">
          <div class="circle"></div>
        </div>
        <p><slot>開關</slot></p>
      </label>
    </div>
  `,
  props: {
    value: { default: false }, // value值
  },
  computed: {
    modelValue: {
      get(){ return this.value },
      set(val){ this.$emit('input', val) }
    }
  },
})

// FormItem 表單驗證容器
Vue.component('ud-form-item', {
  name: "UdFormItem",
  template: `
    <div class="ud-form-item" :class="{'is-error': errorMessage, 'is-flex': flex}">
      <div class="ud-form-item-left" :style="{ 'flex-basis': labelWidth, 'text-align': labelAlign }">  
        <label v-if="label">{{ label }}</label>
      </div>
      <div class="ud-form-item-right">  
        <slot></slot>
        <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
      </div>
    </div>
  `,
  data() {
    return {
      errorMessage: '',
      lock: false,
    }
  },
  inject: ["form"],
  props: {
    label: { // 標籤內容
      type: String,
    },
    prop: { // 驗證名稱
      type: String
    },
    flex: { // 是否並排
      type: Boolean
    },
    labelWidth: { // 標籤寬度
      type: String,
      default: "30%"
    },
    labelAlign: { // 標籤對齊
      type: String,
    }
  },
  mounted() {
    this.$on('validate', () => {
      this.validate(false);
    })
  },
  methods: {
    validate(submit) {
      if(this.form.submitLock) return;
      const rules = this.form.rules[this.prop]; // 獲取校驗規則
      const value = this.form.model[this.prop]; // 獲取數據

      for(let rule of rules){
        this.errorMessage = "";
        switch (rule.type) {
          case "required": // 必填驗證
            if(Array.isArray(value) && value.length != 0){
              if(value.some(i => i.length === 0)) this.errorMessage = rule.message || "此欄位為必填項目";
            }else if(value === null){
              this.errorMessage = rule.message || "此欄位為必填項目";
            }else{
              if(value.length === 0 || value === false) this.errorMessage = rule.message || "此欄位為必填項目";
            }
            break;
          case "name": // 姓名驗證
            if(value && !new RegExp('^[a-zA-Z0-9_\u4e00-\u9fa5]+$').test(value)) this.errorMessage = rule.message || "姓名格式有誤，不接受特殊符號";
            break;
          case "phone": // 電話驗證
            if(value && !new RegExp('^09[0-9]{8}$').test(value)) this.errorMessage = rule.message || "電話格式有誤，例: 0929123456";
            break;
          case "email": // 電子郵件驗證
            if(value && !new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$').test(value)) this.errorMessage = rule.message || "Email格式有誤，需包含'@'符號";
            break;
          case "idcard": // 身分證字號驗證
            if(value && !new RegExp('^[A-Z](1|2)[0-9]{8}$').test(value)) this.errorMessage = rule.message || "身分證字號格式有誤，例: A123456789";
            break;
          case "date": // 日期驗證
            if(value && !new RegExp('^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$').test(value)) this.errorMessage = rule.message || "日期格式有誤或不存在，例: 2020-03-04";
            break;
          case "number": // 數字驗證
            if(value && !new RegExp('^[0-9]+$').test(value)) this.errorMessage = rule.message || "格式有誤，只接受數字";
            break;
          case "url": // 網址驗證
            if(value && !new RegExp('^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$').test(value)) this.errorMessage = rule.message || "網址格式有誤，例: https://www.google.com";
            break;
          case "ip": // IP地址驗證
            if(value && !new RegExp('^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$').test(value)) this.errorMessage = rule.message || "IP地址格式有誤，例: 115.28.47.26";
            break;
          case "hex": // Hex色碼驗證
            if(value && !new RegExp('^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$').test(value)) this.errorMessage = rule.message || "Hex色碼格式有誤，例: #ff0000";
            break;
          case "equal": // 相等驗證
            if(rule.caseIgnore){ // 不區分大小寫
              if(value && value.toLowerCase() !== this.form.model[rule.equalTo].toLowerCase()) this.errorMessage = rule.message || "驗證碼錯誤";
            }else{ // 區分大小寫
              if(value && value !== this.form.model[rule.equalTo]) this.errorMessage = rule.message || "驗證碼錯誤";
            }
            break;
          default:
            if(!new RegExp(rule.type).test(value)) this.errorMessage = rule.message || "格式有誤，請重新輸入";
            break;
        }
        if(this.errorMessage) break;
      }

      if(!submit) return;
      return new Promise((resolve, reject) => {
        this.errorMessage ? reject() : resolve();
      })
    }
  }
})

// Form 表單驗證
Vue.component('ud-form', {
  name: "UdForm",
  inheritAttrs: false,
  template: `
    <div class="ud-form" :class="{'is-no-error-msg': noErrorMsg}">
      <form v-bind="$attrs">
        <slot></slot>
      </form>
    </div>
  `,
  provide() {
    return {
      form: this  // 傳遞Form實例给後代，比如FormItem用來校驗
    }
  },
  data() {
    return {
      submitLock: true
    }
  },
  props: {
    model: { // 驗證資料
      type: Object,
      required: true
    },
    rules: { // 驗證規則
      type: Object
    },
    noErrorMsg: {
      type: Boolean // 有無錯誤提示
    }
  },
  methods: {
    validate(successCb = () => {console.log('驗證成功')}, failedCb = () => {console.log('驗證失敗')}) {
      this.submitLock = false;
      const tasks = this.$children.filter(item => item.prop).map(item => item.validate(true));
      // console.log('tasks: ', tasks);
      Promise.all(tasks)
        .then(() => successCb())
        .catch(() => failedCb())
    }
  }
})

//-----------------------Layout-----------------------
// Flex 通用排版容器
Vue.component('ud-flex', {
  name: "UdFlex",
  template: `
    <div class="ud-flex">
      <slot></slot>
    </div>
  `,
  props: {

  },
})

// Arrow CSS箭頭
Vue.component('ud-arrow', {
  template: `
    <i 
      class="ud-arrow"
      :class=[direction]
      :style="{
        'border-color': bdColor,
        'border-width': '0 ' + bdWidth + 'px ' + bdWidth + 'px 0',
        padding: padding + 'px'
      }">
    </i>
  `,
  props: {
    bdColor: { default: "#333" }, // 顏色
    bdWidth: { default: "3" }, // 寬度
    padding: { default: "3" }, // 大小
    direction: { default: "right" } //方向
  }
})

// Collapse 摺疊容器
Vue.component('ud-collapse', {
  name: "UdCollapse",
  template: `
    <div class="ud-collapse" :style="{'transition-duration': durationSecond}">
      <div class="ud-collapse-wrapper">
        <slot></slot>
      </div>
    </div>
  `,
  props: {
    value: {
      default: false
    },
    duration: {
      default: 0.2
    }
  },
  computed: {
    durationSecond: function(){
      return `${this.duration}s`
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(){
        this.$nextTick(() => {
          this.collapse();
        })
      }
    }
  },
  methods: {
    collapse: function(){
      let el = this.$el;
      if (this.value) {
        el.style.height = el.querySelector('.ud-collapse-wrapper').clientHeight + "px";
      } else {
        el.style.height = 0;
      }
    }
  },
})

// Ratio 等比例自適應容器
Vue.component('ud-ratio', {
  template: `
    <div class="ud-ratio">
      <div class="ud-ratio-bg" :style="{
        backgroundImage: 'url(' + src + ')', 
        paddingBottom: height + '%', 
        borderRadius: radius,
        backgroundSize: bgSize
      }">
        <slot></slot>
      </div>
    </div>
  `,
  props: {
    src: { default: "https://i.imgur.com/s3w1Sm3.jpg" }, // 背景圖片
    height: { default: 100 }, // 高度比例
    radius: { default: '0px' }, // 圓角
    bgSize: { default: "cover" } // 背景尺寸 (cover, contain, 100%...等)
  },
})


//-----------------------Notice-----------------------
// Alert 警告彈窗
Vue.component("ud-alert", {
  name: "UdAlert",
  template: `
    <transition name="fade">
      <div class="ud-alert" v-if="value" v-cloak>
        <div class="modal-wrapper" @click.self="maskCancel && $emit('input', 0)">
          <div class="modal-content">
            <div class="modal-close" v-if="hasCancel" @click="$emit('input', 0)">
              <i class="fas fa-times"></i>
            </div>
            <div class="modal-header">
              <p>{{ title }}</p>
            </div>
            <div class="modal-body">
              <p>{{ message }}</p>
              <slot></slot>
            </div>
            <div class="modal-footer">
              <div class="button-area">
                <ud-button @click="$emit('input', 0)">OK</ud-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  `,
  props: {
    title: { default: "警告標題" }, // 警告標題
    message: { default: "警告訊息" }, // 警告訊息
    value: { default: false }, // 開關值
    maskCancel: Boolean, // 遮罩關閉
    hasCancel: Boolean, // 按鈕關閉
  },
});

// Confirm 確認彈窗
Vue.component("ud-confirm", {
  name: "UdConfirm",
  template: `
    <transition name="fade">
      <div class="ud-confirm" v-if="value" v-cloak>
        <div class="modal-wrapper" @click.self="maskCancel && $emit('input', 0)">
          <div class="modal-content">
            <div class="modal-close" v-if="hasCancel" @click="$emit('input, 0')">
              <i class="fas fa-times"></i>
            </div>
            <div class="modal-header">
              <p>{{ title }}</p>
            </div>
            <div class="modal-body">
              <p>{{ message }}</p>
              <slot></slot>
            </div>
            <div class="modal-footer">
              <div class="button-area">
                <ud-button plain @click="$emit('input', 0)">{{ cancelText }}</ud-button>
                <ud-button @click="$emit('confirm')">{{ confirmText }}</ud-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  `,
  props: {
    title: { default: "確認標題" }, // 確認標題
    message: { default: "確認訊息" }, // 確認訊息
    value: { default: false }, // 開關值
    cancelText: { default: "取消" }, // 取消鈕文字
    confirmText: { default: "確定" }, // 確定鈕文字
    maskCancel: Boolean, // 遮罩關閉
    hasCancel: Boolean, // 按鈕關閉
  },
});

// AlertConfirm 警告確認彈窗(調用式) ud-alertConfirm
let UdModalExtend = Vue.extend({
  template: `
    <transition name="fade">
      <div class="ud-alert" v-if="isShow">
        <div class="modal-wrapper" @click.self="maskHandler">
          <div class="modal-content">
            <div class="modal-close" v-if="btnClose" @click="destroy">
              <i class="fas fa-times"></i>
            </div>
            <div class="modal-header" v-if="title">
              <p v-html="nl2br(title)"></p>
            </div>
            <div class="modal-body">
              <p v-html="nl2br(msg)"></p>
            </div>
            <div class="modal-footer">
              <ud-flex>
                <ud-button @click="cancelHandler" plain v-if="isConfirm">{{ cancelText }}</ud-button>
                <ud-button @click="confirmHandler">{{ confirmTextAfter }}</ud-button>
              </ud-flex>
            </div>
          </div>
        </div>
      </div>
    </transition>
  `,
  data() {
    return {
      isShow: false,
      isConfirm: false,
      maskClose: false, // 遮罩關閉
      btnClose: false, // 按鈕關閉
      title: "", // 警告標題
      msg: "網路通信錯誤，請稍候再試", // 警告訊息
      cancelText: "取消", // 取消鈕文字
      cancel: () => {}, // 取消鈕動作
      confirmText: "", // 確認鈕文字
      confirm: () => {}, // 確認鈕動作
    }
  },
  computed: {
    confirmTextAfter: function(){
      if(this.confirmText) return this.confirmText;
      return this.isConfirm ? "確定" : "OK";
    }
  },
  mounted() {
    this.isShow = true;
  },
  methods: {
    nl2br: function(val){
      return nl2br(val);
    },
    confirmHandler: function() {
      if(typeof this.confirm === 'function') this.confirm();
      this.destroy();
    },
    cancelHandler: function() {
      if(typeof this.cancel === 'function') this.cancel();
      this.destroy();
    },
    maskHandler: function() {
      if(this.maskClose) this.destroy();
    },
    destroy: function() {
      this.isShow = false;
      setTimeout(() => {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      }, 200);
    },
  },
});

Vue.prototype.udAlert = options => { // 加到vue原型方法
  let UdAlert = new UdModalExtend({
    el: document.createElement('div'),
    data() {
      return options;
    }
  })
  document.body.appendChild(UdAlert.$el);
};

Vue.prototype.$confirm = options => { // 加到vue原型方法
  options.isConfirm = true;
  let UdConfirm = new UdModalExtend({
    el: document.createElement('div'),
    data() {
      return options;
    }
  })
  document.body.appendChild(UdConfirm.$el);
};

// Modal 通用彈窗
Vue.component("ud-modal", {
  name: "UdModal",
  template: `
    <transition name="fade">
      <div class="ud-modal" v-show="isShow" v-cloak>
        <div class="modal-wrapper" @click.self="onMaskClick">
          <div class="modal-content">
            <div class="modal-close" v-if="hasCancel" @click="isShow = 0">
              <i class="fas fa-times"></i>
            </div>
            <div class="modal-header" v-if="!$slots.default">
              <p>{{ title }}</p>
            </div>
            <div class="modal-body">
              <p v-if="!$slots.default">{{ message }}</p>
              <slot></slot>
            </div>
            <div class="modal-footer" v-if="!$slots.default">
              <div class="button-area">
                <ud-button @click="isShow = 0">OK</ud-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  `,
  props: {
    title: { default: "通用標題" }, // 通用標題
    message: { default: "通用訊息" }, // 通用訊息
    value: { default: 0 }, // 開關值
    maskCancel: Boolean, // 遮罩關閉
    hasCancel: Boolean, // 按鈕關閉
  },
  computed: {
    isShow: {
      get(){ return this.value },
      set(val){ this.$emit('input', val) }
    }
  },
  methods: {
    onMaskClick: function(){
      if(this.maskCancel) this.isShow = 0;
    }
  },
});

// Loading 載入中
Vue.component('ud-loading', {
  name: "UdLoading",
  template: `
    <transition name="loading">
      <div class="ud-loading" v-show="isShow" :class="{'theme-white': theme === 'white'}">
        <div class="modal-wrapper">
          <div class="modal-content">
            <div class="modal-header">
              <i :class="icon"></i>
            </div>
            <div class="modal-body">
              <p v-html="nl2br(msg)"></p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  `,
  data() {
    return {
      isShow: false
    }
  },
  props: {
    label:{ default: "載入中..." } // 載入中文字
  },
  methods: {
    nl2br: function(val){
      return nl2br(val);
    },
  },
})

// Loading 載入中(調用式) ud-loading
let UdLoadingExtend = Vue.extend({
  template: `
    <transition name="loading">
      <div class="ud-loading" v-show="isShow" :class="{'theme-white': theme === 'white'}">
        <div class="modal-wrapper">
          <div class="modal-content">
            <div class="modal-header">
              <div v-if="iconType === 'css'" class="icon-css"></div>
              <i v-else-if="iconType === 'font'" class="icon-font" :class="iconFont"></i>
              <img v-else class="icon-img" :src="iconImg">
            </div>
            <div class="modal-body">
              <p v-html="nl2br(msg)"></p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  `,
  data() {
    return {
      isShow: false,
      fixed: false, // 是否固定body
      theme: "", // 戴入主題 [white]
      iconType: "css", // icon類型 [css:CSS, font:字型, img:圖片]
      iconFont: "fas fa-spinner fa-pulse", // 字型icon的class
      iconImg: "https://image.flaticon.com/icons/svg/553/553265.svg", // 圖片icon的路徑
      msg: "", // 載入訊息
    }
  },
  mounted() {
    this.isShow = true;
  },
  methods: {
    nl2br: function(val){
      return nl2br(val);
    },
    destroy: function() {
      this.isShow = false;
      document.body.style.overflowY = 'auto';
      setTimeout(() => {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      }, 200);
    },
  },
});

let UdLoading;
Vue.prototype.udLoading = { // 加至vue原型方法
  open: (options = {}) => {
    UdLoading = new UdLoadingExtend({
      el: document.createElement("div"),
      data() {
        return options;
      }
    })
    if(UdLoading.fixed) document.body.style.overflowY = 'hidden';
    document.body.appendChild(UdLoading.$el);
  },
  close: () => {
    UdLoading.destroy();
  }
};


//-----------------------Tools-----------------------
// Html 用戶自定義訊息
Vue.component('ud-html', {
  template: `
    <div class="ud-html" v-html="nl2br(text)"></div>
  `,
  props: {
    text: { default: "<h1>H1 用戶自定義訊息</h1><h2>H2 用戶自定義訊息</h2><h3>H3 用戶自定義訊息</h3><h4>H4 用戶自定義訊息</h4><h5>H5 用戶自定義訊息</h5><h6>H6 用戶自定義訊息</h6>\n<p>p 用戶自定義訊息</p><span>span 用戶自定義訊息</span>" } // 文字
  },
  methods: {
    nl2br: function(str, is_xhtml) {
      if (typeof str === 'undefined' || str === null) {
          return '';
      }
      let breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
      return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
    }
  }
})

// Backtop 回到頂部
Vue.component('ud-backtop', {
  name: "UdBacktop",
  template: `
    <ud-button @click="scrollToTop">回最頂</ud-button>
  `,
  methods: {
    scrollToTop: function(){
      scrollTo();
    }
  },
})

// Ellipsis 文字省略
Vue.component('ud-ellipsis', {
  name: "UdEllipsis",
  template: '<p class="ud-ellipsis" :style="{webkitLineClamp: maxLine}"><slot></slot></p>',
  props: {
    maxLine: { default: 1, } // 指定省略行數
  },
})

// Phone 撥打電話
Vue.component('ud-phone', {
  name: "UdPhone",
  template: `
    <div class="ud-phone">
      <a :href="phoneHref">
        <slot>{{ number }}</slot>
      </a>
    </div>
  `,
  props: {
    number: { default: "0912345678" } // 電話號碼
  },
  computed: {
    phoneHref: function(){
      return `tel:${this.number}`
    }
  },
})


//-----------------------String-----------------------
/**
 * 將字串內換行符\n轉為<br>
 * @param  {String} val 傳入值
 * @param  {Boolean} is_xhtml 是否為xhtml
 */
function nl2br(val, is_xhtml = false) {
  if (typeof val === 'undefined' || val === null) {
      return '';
  }
  let breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
  return (val + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}

/**
 * 取得隨機十六進制顏色碼
 */
function randomHexColorCode(){
  let temp = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + temp.slice(0, 6);
};

/**
 * 取得隨機字串
 * @param  {Number} length 指定字串長度
 */
function randomString(length) {
  let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let temp = "";
  for (let i = 0; i < length; i++) {
    temp += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return temp;
}

/**
 * 數字加入千分位逗號
 * 例：formatNumber(99999) -> 99,999
 * @param  {Number} val 傳入值
 */
function formatNumber(val){
  let temp = val.toString();
  let pattern = /(-?\d+)(\d{3})/;
  while(pattern.test(temp)){
    temp = temp.replace(pattern, "$1,$2");
  }
  return temp;
}

/**
 * 複製文字至剪貼簿
 * @param  {String} id 要複製文字的元素id
 */
function copyTextToClipboard(id) {
  let textRange = document.createRange();
  textRange.selectNode(document.getElementById(id));
  let sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(textRange);
  document.execCommand("copy");
  vm.udAlert({msg: '文字已複製到剪貼簿'});
}

/**
 * 轉義HTML(防XSS攻擊)
 * @param  {String} str 代入值
 * escapeHTML('<a href="#">Me & you</a>'); -> '&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'
 */
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

/**
 * 駝峰式轉換
 * @param  {String} str 代入值
 * convertCamelCase("camelCase"); -> camel-case
 */
function convertCamelCase(str){
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
}

/**
 * 將字串內URL轉為超連結
 * @param  {String} text 代入值
 */
function replaceURLToLink(text) {
  text = text.replace(URL, function (url) {
    let urlText = url;
    if (!url.match('^https?://')) url = 'http://' + url;
    return '' + urlText + '';
  });
  return text;
};

//-----------------------Number-----------------------
/**
 * 取得範圍內隨機數
 * @param {Number} min 隨機數最小值 預設為0
 * @param {Number} max 隨機數最小值 預設為100
 */
function getRandom(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 四捨五入到指定位數
 * @param  {String} n 代入值
 * @param  {Number} decimals 指定位數 預設為0
 * round(1.235, 2); -> 1.24
 */
function round(n, decimals = 0){
  return Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);
}

//-----------------------Image-----------------------
/**
 * 預載圖片
 * @param  {String} src 圖片路徑
 */
function imagePreload(src) {
  let img = new Image();
  img.src = src;
}

/**
 * 圖片戴入回調
 * @param  {String} url 圖片路徑
 * @param  {Function} callback 回調函式
 */
function onImageLoaded(url, callback) {
  let image = new Image()
  image.src = url
  if (image.complete) {
    callback(image)
  } else {
    image.onload = function () {
      callback(image)
    }
  }
}

//-----------------------Array-----------------------
/**
 * 陣列是否有重複值
 * @param  {Array} arr 代入值
 */
function isRepeat(arr){
  let arrStr = JSON.stringify(arr);
  for (let i = 0; i < arr.length; i++) {
    if ((arrStr.match(new RegExp(arr[i],"g")).length)>1){
      return true;
    }
  };
  return false;
}

/**
 * 移除陣列中的重複元素
 * @param  {Array} arr 代入值
 */
function uniqArray(arr) {
  let newArr = arr.filter((el, i, arr) => arr.indexOf(el) === i);
  return newArr;
}

/**
 * 二維陣列扁平化(第二參數可指定深度)
 * @param  {Array} arr 代入值
 * @param  {Number} depth 指定深度
 * flatArray([1, [2], 3, 4]); -> [1, 2, 3, 4]
 * flatArray([1, [2, [3, [4, 5], 6], 7], 8], 2); -> [1, 2, 3, [4, 5], 6, 7, 8]
 */
function flatArray(arr, depth = 1){
  return arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatArray(v, depth - 1) : v), []);
}

/**
 * 返回陣列中某值的所有索引
 * @param  {Array} arr 代入值
 * @param  {Number} val 指定值
 * indexOfAll([1, 2, 3, 1, 2, 3], 1); -> [0,3]
 * indexOfAll([1, 2, 3], 4); -> []
 */
function indexOfAll(arr, val){
  return arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
}

/**
 * 兩陣列的交集
 * @param  {Array} a 陣列A
 * @param  {Array} b 陣列B
 * intersection([1, 2, 3], [4, 3, 2]); -> [2, 3]
 */
function intersection(a, b){
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

/**
 * 洗牌陣列
 * @param  {Array} a 陣列A
 * @param  {Array} b 陣列B
 * shuffle([1, 2, 3]); -> [2, 3, 1];
 */
function shuffle([...arr]){
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

//-----------------------Object-----------------------
/**
 * 精準型別判斷
 * @param  {Any} v 代入值
 */
function typeOf(v){
  return v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
}

/**
 * 過濾物件鍵值
 * @param  {Object} obj 代入值
 * @param  {Array} arr 過濾值的陣列
 * filterObj(obj,["name","gender"]);
 */
function filterObj(obj, arr){
  let tempObj = JSON.parse(JSON.stringify(obj));
  for(let i in tempObj){
    if(arr.indexOf(i) === -1) delete tempObj[i];
  }
  return tempObj;
}

/**
 * 刪除物件鍵值
 * @param  {Object} obj 代入值
 * @param  {Array} arr 刪除值的陣列
 * deleteObj(test,["name","gender"]);
 */
function deleteObj(obj, arr){
  let tempObj = JSON.parse(JSON.stringify(obj));
  for(let i in tempObj){
    if(arr.indexOf(i) !== -1) delete tempObj[i];
  }
  return tempObj;
}

/**
 * 深拷貝(簡易版)
 * @param  {Object} obj 代入值
 * 無法拷貝特殊類型值與funciton
 */
function deepCloneSimple(obj){
  return JSON.parse(JSON.stringify(obj));
}

/**
 * 深拷貝(完全版)
 * @param  {Object} obj 代入值
 */
function deepClone(obj, hash = new WeakMap()) {
  if(obj == null){
    return obj;
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if(obj instanceof Error) {
    return new Error(obj);
  }
  if(typeof obj !== 'object'){
    return obj;
  }
  if(hash.get(obj)) return hash.get(obj); 
  let cloneObj = new obj.constructor;
  hash.set(obj, cloneObj);
  for(let key in obj) {
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
function isLeapYear(year){
  return new Date(year, 1, 29).getDate() === 29;
}

/**
 * 檢查日期是否存在
 * @param  {String} dateStr 日期字串
 * @param  {String} split 分割符 預設為"-"
 * isExistDate("2020-02-29"); -> true
 * isExistDate("2019/02/29","/"); -> false
 */
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

/**
 * 返回當前24小時制時間的字符串
 * @param  {Any} date 時間物件
 * getColonTimeFromDate(new Date()); -> "08:38:00"
 */
function getColonTimeFromDate(date){
  return date.toTimeString().slice(0, 8);
}

/**
 * 返回日期間的天數
 * @param  {Any} dateInitial 開始時間物件
 * @param  {Any} dateFinal 結束時間物件
 * getDaysDiffBetweenDates(new Date('2019-01-01'), new Date('2019-10-14')); -> 286
 */
function getDaysDiffBetweenDates(dateInitial, dateFinal){
  return (dateFinal - dateInitial) / (1000 * 3600 * 24);
}

/**
 * 檢查是否在某日期後
 * @param  {Any} dateA 時間物件A
 * @param  {Any} dateB 時間物件B
 * isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); -> true
 */
function isAfterDate(dateA, dateB){
  return dateA > dateB;
}

/**
 * 檢查是否在某日期前
 * @param  {Any} dateA 時間物件A
 * @param  {Any} dateB 時間物件B
 * isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); -> true
 */
function isBeforeDate(dateA, dateB){
  return dateA < dateB;
}

/**
 * 返回幾天前後的日期
 * @param  {Number} days 指定天數 可為負值
 * getDiffDate(1); -> "2020-07-01"
 * getDiffDate(0); -> "2020-06-30"
 * getDiffDate(-2); -> "2020-06-28"
 */
function getDiffDate(days){
  let t = new Date();
  t.setDate(t.getDate() + days);
  return t.toISOString().split('T')[0];
};

/**
 * 時間個性化輸出功能
 * @param  {Any} time 時間物件
 */
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

/**
 * 隨機數時間戳
 */
function uniqueId() {
  return (
    Number(new Date()).toString() + parseInt(10 * Math.random()) + parseInt(10 * Math.random()) + parseInt(10 * Math.random())
  );
}

/**
 * 解析時間
 * @param  {Any} time 時間物件
 * @param  {Any} cFormat 轉換格式
 */
function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        // support "1548221490638"
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 * 時間人性化
 * @param  {Any} time 時間物件
 * @param  {Any} option 轉換格式
 */
function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '剛剛'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分鐘前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小時前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '時' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * 時間格式化
 * @param  {Any} format 轉換格式
 * new Date().format('yyyyMMdd') -> "20200921"
 * new Date().format('yyyy-MM-dd') -> "2020-09-21"
 * new Date().format('yyyy-MM-dd hh:mm:ss') -> "2020-09-21 16:07:59"
 */
Date.prototype.format = function (format) {
  if(!format){
    format = "yyyy-MM-dd hh:mm:ss";
  }
  let o = {
    "M+": this.getMonth() + 1, // 月份
    "d+": this.getDate(), // 日
    "H+": this.getHours(), // 小時
    "h+": this.getHours(), // 小時
    "m+": this.getMinutes(), // 分
    "s+": this.getSeconds(), // 秒
    "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
    "S": this.getMilliseconds() // 毫秒
  };
  if(/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if(new RegExp("(" + k + ")").test(format)) {
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
function scrollTo(el = "top", speed = 5, offset = 0, callback = () => {}) {
  let scrollTop = document.scrollingElement.scrollTop;
  let top = 0;
  if(typeof el === 'number'){
    top = el + offset;
  }else{
    if(el === 'top'){
      top = 0 + offset;
    }else if(el === 'bottom'){
      top = document.body.scrollHeight - document.body.clientHeight + offset;
    }else{
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
  };
  scroll();
};

/**
 * 取得頁面當前捲動高度(寬度)
 * @param  {Any} direction 改取寬度
 */
function getPageScroll(direction){
  if(direction){
    return document.documentElement.scrollLeft || document.body.scrollLeft;
  }else{
    let bodyTop = 0;
    if(typeof window.pageYOffset != "undefined") {
      bodyTop = window.pageYOffset;
    }else if(typeof document.compatMode != "undefined"
        && document.compatMode != "BackCompat") {
      bodyTop = document.documentElement.scrollTop;
    }else if(typeof document.body != "undefined") {
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
  let el = document.compatMode == "BackCompat" ? document.body : document.documentElement;
  if(direction){
    return Math.max(document.documentElement.scrollWidth, document.body.scrollWidth, el.clientWidth);
  }else{
    return Math.max(document.documentElement.scrollHeight, document.body.scrollHeight, el.clientHeight);
  }
}

/**
 * 取得頁面可視高度(寬度)
 * @param  {Any} direction 改取寬度
 */
function getPageView(direction) {
  let el = document.compatMode == "BackCompat" ? document.body : document.documentElement;
  if(direction){
    return el.clientWidth;
  }else{
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
function isRegex(type, val, regex){
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
      let regexMode = new RegExp(regex);
      return regexMode.test(val);
      break;
  }
}

/**
 * 精準數字驗證
 * @param  {Any} val 要驗證的值
 */
function isNumber(val){
  if(typeOf(val) !== "number"){
    return false;
  }else{
    return !isNaN(val);
  }
}

/**
 * 未填入驗證
 * @param  {Any} val 要驗證的值
 */
function isEmpty(val){
  switch(typeOf(val)){
    case "string":
      if(val.trim().length === 0) return true;
      break;
    case "number":
      break;
    case "boolean":
      if(!val) return true;
      break;
    case "array":
      if(val.length === 0) return true;
      if(val.some(i => i.length === 0)) return true;
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
function isIdCard(idStr){
  // 依照字母的編號排列，存入陣列備用。
  let letters = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'W', 'Z', 'I', 'O');
  // 儲存各個乘數
  let multiply = new Array(1, 9, 8, 7, 6, 5, 4, 3, 2, 1);
  let nums = new Array(2);
  let firstChar;
  let firstNum;
  let lastNum;
  let total = 0;
  // 撰寫「正規表達式」。第一個字為英文字母，
  // 第二個字為1或2，後面跟著8個數字，不分大小寫。
  let regExpID=/^[a-z](1|2)\d{8}$/i; 
  // 使用「正規表達式」檢驗格式
  if(idStr.search(regExpID)==-1) {
    // 基本格式錯誤
    // alert("請仔細填寫身份證號碼");
    return false;
  }else {
    // 取出第一個字元和最後一個數字。
    firstChar = idStr.charAt(0).toUpperCase();
    lastNum = idStr.charAt(9);
  }
  // 找出第一個字母對應的數字，並轉換成兩位數數字。
  for(var i=0; i<26; i++) {
    if(firstChar == letters[i]) {
      firstNum = i + 10;
      nums[0] = Math.floor(firstNum / 10);
      nums[1] = firstNum - (nums[0] * 10);
      break;
    } 
  }
  // 執行加總計算
  for(var i=0; i<multiply.length; i++){
    if(i<2) {
      total += nums[i] * multiply[i];
    }else {
      total += parseInt(idStr.charAt(i-1)) * multiply[i];
    }
  }
  // 和最後一個數字比對
  if((10 - (total % 10))!= lastNum) {
    // alert("身份證號碼寫錯了！");
    return false;
  } 
  return true;
}

//-----------------------Browser-----------------------
/**
 * 動態加載css文件
 * @param  {String} url 文件路徑
 */
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
  let arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
  if (arr != null) return unescape(arr[2]);
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
function insertPlugin(src){
  let script = document.createElement('script');
  script.setAttribute('src', src);
  document.head.appendChild(script);
}

/**
 * 函式防抖
 * @description 將幾次操作合併為一次操作進行
 * @param  {Function} fn 處理函式
 * @param  {Number} wait 停止後等待時間 預設為200ms
 * window.addEventListener('scroll', debounce(() => console.log(getRandom), 500));
 */
function debounce(fn, wait = 200) {
  let timeout = null;
  return function() {
    if(timeout !== null)
      clearTimeout(timeout);
    timeout = setTimeout(fn, wait);
  }
}

/**
 * 函式節流
 * @description 一定時間內只觸發一次函式
 * @param  {Function} fn 處理函式
 * @param  {Number} delay 處理間隔時間 預設為1000ms
 * window.addEventListener('scroll', throttle(() => console.log(getRandom), 2000));
 */
function throttle(fn, delay = 1000) {
  let prev = Date.now();
  return function() {
    let context = this;
    let args = arguments;
    let now = Date.now();
    if (now - prev >= delay) {
      fn.apply(context, args);
      prev = Date.now();
    }
  }
}

function throttle2(fn, delay){
  let timer; 
  let prevTime;
  return function(...args){
    let currTime = Date.now();
    let context = this;
    if(!prevTime) prevTime = currTime;
    clearTimeout(timer);
    
    if(currTime - prevTime > delay){
        prevTime = currTime;
        fn.apply(context,args);
        clearTimeout(timer);
        return;
    }

    timer = setTimeout(function(){
        prevTime = Date.now();
        timer = null;
        fn.apply(context,args);
    },delay);
  }
}

//-----------------------Web-----------------------
/**
 * 查詢網址所帶參數
 * @param  {String} key 鍵值
 */
function queryString(key) {
  let url = location.href;
  if (url.indexOf("?") != -1) {
    let arr = url.split("?")[1].split("&");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].split("=")[0] == key) return arr[i].split("=")[1];
    }
  }
}

/**
 * HTTP跳轉HTTPS
 */
function httpsRedirect(){
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

/**
 * 檢驗URL連接是否有效
 * @param  {String} URL 網址
 */
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

/**
 * 網址跳轉
 * @param  {String} url 欲跳轉的網址
 */
function toUrl(url){
  window.location.href = url;
}

/**
 * 跳頁重整
 */
function jumpReload(){
  window.onpageshow = event => {
    if(event.persisted) window.location.reload();
  };
}

/**
 * Axios封裝
 * axiosPackage
 */
const service = axios.create({
  // baseURL: baseURL,
  timeout: 5000, // 請求超時時間
  // withCredentials: true, // 充許攜帶cookie
  // headers: {"Content-Type": "application/x-www-form-urlencoded"}, //改用formdata格式發送
})

// 請求攔截器
service.interceptors.request.use(
  config => {
    vm.udLoading.open();
    // config.data = JSON.stringify(config.data);

    // 每次發送請求之前判斷是否存在token，如果存在，則統一在http請求的header都加上token，不用每次請求都手動添加了
    // 即使本地存在token，也有可能token是過期的，所以在響應攔截器中要對返回狀態進行判斷
    // if(token) config.headers.Authorization = "This is token";
  
    // 讓每個請求攜帶token--['X-Token']為自定義key 請根據實際情況自行修改
    // if (store.getters.token) config.headers['X-Token'] = getToken();

    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
)

// 響應攔截器
service.interceptors.response.use(
  response => {
    vm.udLoading.close();
    // errorMsg處理
    // 後端可回傳errorMsg, errorTitle, errorAct("reload": 重整頁面, "url": 跳轉至url)
    if(response.data.errorMsg){
      if(response.data.errorAct){
        if(response.data.errorAct === 'reload'){
          vm.udAlert({ msg: response.data.errorMsg, title: response.data.errorTitle, confirm: () => location.reload() });
        }else{
          vm.udAlert({ msg: response.data.errorMsg, title: response.data.errorTitle, confirm: () => toUrl(response.data.errorAct) });
        }
      }else{
        vm.udAlert({msg: response.data.errorMsg, title: response.data.errorTitle});
      }
    }

    return Promise.resolve(response);

    // if (response.status === 200) { // 200
    //   return Promise.resolve(response);
    // } else { // 2xx
    //   return Promise.reject(response);
    // }
  },
  error => {
    vm.udLoading.close();
    console.log('error', error);
    if (error && error.response) {
      switch (error.response.status) {
        case 404:
          vm.udAlert({title: error.message, msg: "找不到該頁面，請稍候再試"});
          break;
        case 500:
          vm.udAlert({title: error.message, msg: "伺服器出錯，請稍候再試"});
          break;
        case 503:
          vm.udAlert({title: error.message, msg: "服務失效，請稍候再試"});
          break;
        default:
          vm.udAlert({title: error.message, msg: `連接錯誤：${error.response.status}，請稍候再試`});
      }
    } else {
      vm.udAlert({title: error.message, msg: "連接到伺服器失敗，請稍候再試"});
    }
    return Promise.reject(error)
  }
);

let udApi = {
  /** 
   * get方法，對應GET請求
   * @param  {String} url 請求的url地址
   * @param  {Object} config 請求的config
   * @param  {Boolean} next 有errorMsg時是否繼續執行
   * @param  {Boolean} detail 是否回傳完整response
   */
  get(url, config = {}, next = false, detail = false){
    return new Promise((resolve, reject) =>{
      service.get(url, config)
      .then(res => {
        if(res.data.errorMsg){
          if(!next) return;
        }
        detail ? resolve(res) : resolve(res.data);
      })
      .catch(err => {
        detail ? reject(err) : reject(err.data);
      })
    });
  },
  /** 
   * post方法，對應POST請求
   * @param  {String} url 請求的url地址
   * @param  {Object} data 請求時攜帶的資料
   * @param  {Object} config 請求的config
   * @param  {Boolean} next 有errorMsg時是否繼續執行
   * @param  {Boolean} detail 是否回傳完整response
   */
  post(url, data = {}, config = {}, next = false, detail = false) {
    return new Promise((resolve, reject) => {
      service.post(url, data, config)
      .then(res => {
        if(res.data.errorMsg){
          if(!next) return;
        }
        detail ? resolve(res) : resolve(res.data);
      })
      .catch(err => {
        detail ? reject(err) : reject(err.data);
      })
    });
  },
  /** 
   * put方法，對應PUT請求
   * @param  {String} url 請求的url地址
   * @param  {Object} data 請求時攜帶的資料
   * @param  {Object} config 請求的config
   * @param  {Boolean} next 有errorMsg時是否繼續執行
   * @param  {Boolean} detail 是否回傳完整response
   */
  put(url, data = {}, config = {}, next = false, detail = false) {
    return new Promise((resolve, reject) => {
      service.put(url, data, config)
      .then(res => {
        if(res.data.errorMsg){
          if(!next) return;
        }
        detail ? resolve(res) : resolve(res.data);
      })
      .catch(err => {
        detail ? reject(err) : reject(err.data);
      })
    });
  },
  /** 
   * delete方法，對應DELETE請求
   * @param  {String} url 請求的url地址
   * @param  {Object} config 請求的config
   * @param  {Boolean} next 有errorMsg時是否繼續執行
   * @param  {Boolean} detail 是否回傳完整response
   */
  delete(url, config = {}, next = false, detail = false) {
    return new Promise((resolve, reject) => {
      service.delete(url, config)
      .then(res => {
        if(res.data.errorMsg){
          if(!next) return;
        }
        detail ? resolve(res) : resolve(res.data);
      })
      .catch(err => {
        detail ? reject(err) : reject(err.data);
      })
    });
  }
}

// 掛載到Vue原型上
Vue.prototype.udApi = udApi;

/**
 * CDN備援
 */
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
      <script src="js/ud-modules.js"><\/script>
    `);
    console.log("CDN Error!!");
  }
}

//-----------------------Device-----------------------
/**
 * 判斷是否移動裝置
 */
function isMobileUserAgent() {
  return /iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(
    window.navigator.userAgent.toLowerCase()
  );
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
function animate({timing, draw, duration}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction 從 0 增加到 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // 計算當前動畫狀態
    let progress = timing(timeFraction);

    draw(progress); // 繪製

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}