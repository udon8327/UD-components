declare var $: (selector: string) => any;

/*
==================== TODO ====================
彈窗組件支援自定義top高度
彈窗組件支援自定義body固定
彈窗組件支援多重彈窗
彈窗組件支援多種動畫效果
表單組件樣式重整
表單組件支援disabled
封裝axios
編寫日期聯動組件
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

Validation
  VfItem 表單容器 -----> ud-vf-item
  VfName 姓名驗證 -----> ud-name
  VfGender 性別驗證 -----> ud-gender
  VfPhone 電話驗證 -----> ud-phone
  VfMail 郵件驗證 -----> ud-mail
  VfIdcard 身分證驗證 -----> ud-idcard
  VfDate 日期驗證 -----> ud-date
  VfAccept 條款驗證 -----> ud-accept
  VfCaptcha 圖形碼驗證 -----> ud-captcha
  VfDateGroup 日期群組驗證 -----> ud-date-group
  VfAddressGroup 地址群組驗證 -----> ud-address-group

Data
  Table 表格 -----> ud-table
  Pagination 分頁 -----> ud-pagination

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

Appication
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

Array
  陣列是否有重複值 -----> isRepeat
  移除陣列中的重複元素 -----> uniqArray
  二維陣列扁平化(第二參數可指定深度) -----> flatArray
  返回陣列中某值的所有索引 -----> indexOfAll
  兩陣列的交集 -----> intersection
  洗牌陣列 -----> shuffle

Object
  精準型別判斷 -----> typeOf
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
  跳頁後強制刷新 -----> pageReload
  網址跳轉 -----> toUrl
  CDN備援 -----> cdnBackup
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
window.onpageshow = event => {
  if(event.persisted) window.location.reload();
};

//-----------------------Form-----------------------
//Button 按鈕
Vue.component('ud-button', {
  name: 'UdButton',
  template: `
    <button
      class="ud-button"
      @click="handleClick"
      :disabled="disabled || loading"
      :type="nativeType"
      :class="[
        type ? 'ud-button--' + type : '',
        {
          'is-disabled': disabled,
          'is-loading': loading,
          'is-plain': plain,
          'is-round': round,
          'is-circle': circle,
          'is-block': block,
        }
      ]"
      :style="{
        'border-radius': radius + 'px',
        'min-width': minWidth + 'px',
      }"
    >
      <i class="fas fa-spinner fa-pulse" v-if="loading"></i>
      <i :class="icon" v-if="icon && !loading"></i>
      <span v-if="$slots.default"><slot></slot></span>
    </button>
  `,
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
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
})

//Input 輸入框
Vue.component('ud-input', {
  name: 'UdInput',
  template: `
    <div class="ud-input">
      <input
        :type="type"
        v-model="inputVal"
        :placeholder="placeholder"
      >
    </div>
  `,
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
  },
  computed: {
    inputVal: {
      get: function(){
        return this.value;
      },
      set: function(val){
        this.$emit('input', val)
      }
    }
  },
})

//Textarea 多行輸入框
Vue.component('ud-textarea', {
  name: "UdTextarea",
  template: `
    <div class="ud-textarea">
      <textarea
        type="text"
        v-model="textareaVal"
        :cols="cols"
        :rows="rows"
        :placeholder="placeholder"
      >
      </textarea>
    </div>
  `,
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
      get: function(){
        return this.value;
      },
      set: function(val){
        this.$emit('input', val);
      }
    }
  },
})

//Radio 單選框
Vue.component('ud-radio', {
  name: "UdRadio",
  template: `
    <div class="ud-radio">
      <label v-for="(value, key) in options" :key="key">
        <input
          type="radio"
          v-model="checkedValue"
          :value="key"
        > {{ value }}
      </label>
    </div>
  `,
  props: {
    value: null,
    options: null
  },
  computed: {
    checkedValue: {
      get: function(){
        return this.value;
      },
      set: function(val){
        this.$emit('input', val);
      }
    }
  },
})

//Checkbox 多選框
Vue.component('ud-checkbox', {
  name: "UdCheckbox",
  template: `
    <div class="ud-checkbox">
      <label v-for="(value, key) in options" :key="key">
        <input
          type="checkbox"
          :value="key"
          v-model="checkedValue"
        > {{ value }}
      </label>
    </div>
  `,
  props: {
    value: null,
    options: null,
  },
  computed: {
    checkedValue: {
      get: function(){
        return this.value;
      },
      set: function(val){
        this.$emit('input',val);
      }
    }
  },
})

//Select 下拉框
Vue.component('ud-select', {
  name: "UdSelect",
  template: `
    <div class="ud-select">
      <select class="ud-select" v-model="selectedValue" :data-placeholder-selected="selectedValue === ''">
        <option value="" disabled selected>{{ placeholder }}</option>
        <option v-for="(value, key) in options" :value="key" :key="key">
          {{ value }}
        </option>
      </select>
    </div>
  `,
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
      get: function() {
        return this.value;
      },
      set: function(val) {
        this.$emit('input', val)
      }
    }
  },
})

//Switch 開關
Vue.component('ud-switch', {
  name: "UdSwitch",
  template: `

  `,
  props: {
    
  },
})

//Upload 上傳
Vue.component('ud-upload', {
  name: "UdUpload",
  template: `

  `,
  props: {
    
  },
})

//ImageUpload 圖片上傳預覽
Vue.component("ud-image-upload", {
  name: "UdImageUpload",
  template: `
    <div class="ud-image-upload">
      <input type="file" accept="image/*" ref="input" @change="previewImage">
      <template v-if="preview">
        <div class="image-preview">
          <img :src="preview" class="img-fluid" />
          <div class="image-info">
            <p>檔案名稱：{{ image.name }}</p>
            <p>檔案大小：{{ parseInt(image.size/1024) }}KB</p>
          </div>
        </div>
        <ud-button @click="reset">刪除圖片</ud-button>
      </template>
    </div>
  `,
  data: function () {
    return {
      preview: "",
      image: ""
    };
  },
  methods: {
    previewImage: function (event) {
      let input = event.target;
      if (input.files) {
        let reader = new FileReader();
        reader.onload = e => {
          this.preview = e.target.result;
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
  template: `
    <div class="ud-image-multi-upload">
      <input type="file" accept="image/*" multiple="multiple" ref="input" @change="previewMultiImage">
      <template v-if="preview_list.length">
        <div class="image-preview">
          <div v-for="item, index in preview_list" :key="index">
            <img :src="item"/>
            <div class="image-info">
              <p>檔案名稱：{{ image_list[index].name }}</p>
              <p>檔案大小：{{ parseInt(image_list[index].size/1024) }}KB</p>
            </div>
          </div>
          <ud-button @click="reset">刪除圖片</ud-button>
        </div>
      </template>
    </div>
  `,
  data: function () {
    return {
      preview_list: [],
      image_list: []
    };
  },
  methods: {
    previewMultiImage: function (event) {
      let input = event.target;
      let count = input.files.length;
      let index = 0;
      if (input.files) {
        while (count--) {
          let reader = new FileReader();
          reader.onload = e => {
            this.preview_list.push(e.target.result);
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
  template: `

  `,
  props: {
    
  },
})

//-----------------------Validation-----------------------
//VfItem 表單容器
Vue.component("ud-vf-item", {
  name: "UdVfItem",
  template: `
    <div class="ud-vf-item">
      <div class="ud-vf-item__label">{{ label }}</div>
      <div class="ud-vf-item__input">
        <slot></slot>
      </div>
    </div>
  `,
  props: {
    label: {
      type: String,
      default: ""
    }
  }
});

//VfName 姓名驗證
Vue.component("ud-name", {
  name: "UdVfName",
  template: `
    <formulate-input
      type="text"
      name="name"
      placeholder="請輸入姓名"
      validation="^required|^matches:/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/"
      :validation-messages="{required: '姓名不可為空', matches: '姓名格式有誤，不接受特殊符號'}"
    >
    </formulate-input>
  `,
});

//VfGender 性別驗證
Vue.component("ud-gender", {
  name: "UdVfGender",
  template: `
    <formulate-input
      type="select"
      name="gender"
      :options="options"
      placeholder="請選擇性別"
      validation="^required"
      :validation-messages="{required: '性別不可為空'}"
    >
    </formulate-input>
  `,
  data() {
    return {
      options: {
        0: "男",
        1: "女"
      },
    }
  },
});

//VfPhone 電話驗證
Vue.component("ud-phone", {
  name: "UdVfPhone",
  template: `
    <formulate-input
      type="tel"
      name="phone"
      placeholder="請輸入手機號碼"
      validation="^required|matches:/^09[0-9]{8}$/"
      :validation-messages="{required: '手機不可為空', matches: '手機格式有誤，例：0912345678'}"
      maxlength="10"
    >
    </formulate-input>
  `,
});

//VfMail 郵件驗證
Vue.component("ud-mail", {
  name: "UdVfMail",
  template: `
    <formulate-input
      type="text"
      name="email"
      placeholder="請輸入E-mail"
      validation="^required|email"
      :validation-messages="{required: 'E-mail不可為空',email: 'E-mail格式有誤，需包含@'}"
    >
    </formulate-input>
  `,
});

//VfIdcard 身分證驗證
Vue.component("ud-idcard", {
  name: "UdVfIdcard",
  template: `
    <formulate-input
      type="text"
      name="idcard"
      placeholder="請輸入身分證號碼"
      validation="^required|matches:/^[A-Z]{1}[0-9]{9}$/"
      :validation-messages="{required: '身分證號碼不可為空', matches: '身分證號碼格式有誤，例：A123456789'}"
      maxlength="10"
    >
    </formulate-input>
  `,
});

//VfDate 日期驗證
Vue.component("ud-date", {
  name: "UdVfDate",
  template: `
    <formulate-input
      type="date"
      :name="name"
      placeholder="請輸入日期"
      validation="^required|^date:YYYY-MM-DD|exist"
      :validation-rules="{
        exist: ({ value }) => {
          let dateArr = value.split('-');
          let limitInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
          let theYear = parseInt(dateArr[0]);
          let theMonth = parseInt(dateArr[1]);
          let theDay = parseInt(dateArr[2]);
          let isLeap = new Date(theYear, 1, 29).getDate() === 29; 
          if (isLeap) limitInMonth[1] = 29;
          return theDay > 0 && theDay <= limitInMonth[theMonth - 1];
        }
      }"
      :validation-messages="{required: '日期不可為空', date: '日期格式有誤，例：2020-01-31', exist: '日期不存在，請重新選擇'}"
    >
    </formulate-input>
  `,
  props: {
    name: {
      type: String,
      defalt: "date"
    },
  }
});

//VfAccept 條款驗證
Vue.component("ud-accept", {
  name: "UdVfAccept",
  template: `
    <label class="ud-accept">
      <formulate-input
        type="checkbox"
        name="accept"
        validation="accepted"
        :validation-messages="{accepted: '請先同意使用者條款'}"
      >
      </formulate-input>
      <p v-if="!$slots.default">我同意使用者條款</p>
      <slot></slot>
    </label>
  `,
});

//VfCaptcha 圖形碼驗證
Vue.component('ud-captcha', {
  name: "UdCaptcha",
  template: `
    <div class="ud-captcha">
      <canvas id="verify-canvas" ref="verify" width="126" height="48"></canvas>
      <img id="captcha-img" ref="captchaImg">
      <input id="verify-hidden" ref="verifyHidden" type="hidden" v-model="verify">
      <div id="refresh" ref="refresh" v-if="hasRefresh">
        <i class="refresh fas fa-synud-alt"></i>
      </div>
    </div>
  `,
  mounted() {
    this.captchaInit();
  },
  data() {
    return {
      verify: "",
    }
  },
  props: {
    color: {
      type: String,
      default: "#333"
    },
    bgColor: {
      type: String,
      default: "#fff"
    },
    lineColor: {
      type: String,
      default: "#777"
    },
    font: {
      type: String,
      default: "25px Arial"
    },
    value: String,
    noLine: Boolean,
    noDots: Boolean,
    hasRefresh: Boolean,
  },
  methods: {
    captchaInit: function(){
      let verifyValue;
      let nums = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz".split("");
      let _this = this;
      drawCode();
      //繪製驗證碼
      function drawCode() {
        let canvas = _this.$refs.verify; //獲取HTML端畫布
        let context = canvas.getContext("2d"); //獲取畫布2D上下文
        context.fillStyle = _this.bgColor; //畫布填充色
        context.fillRect(0, 0, canvas.width, canvas.height); //清空畫布
        context.fillStyle = _this.color; //設置字體顏色
        context.font = _this.font; //設置字體
        let rand = [];
        let x = [];
        let y = [];
        for (let i = 0; i < 4; i++) {
          rand[i] = nums[Math.floor(Math.random() * nums.length)]
          x[i] = i * 16 + 10;
          y[i] = Math.random() * 20 + 20;
          context.fillText(rand[i], x[i], y[i]);
        }
        verifyValue = rand.join('').toLowerCase();
        _this.verify = verifyValue;
        
        //畫3條隨機線
        if(!_this.noLine){
          for (let i = 0; i < 3; i++) {
            drawline(canvas, context);
          }
        }
        //畫30個隨機點
        if(!_this.noDots){
          for (let i = 0; i < 30; i++) {
            drawDot(canvas, context);
          }
        }
        convertCanvasToImage(canvas);
      }
      //隨機線
      function drawline(canvas, context) {
        context.moveTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));             //随机线的起点x坐标是画布x坐标0位置，y坐标是画布高度的随机数
        context.lineTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));  //随机线的终点x坐标是画布宽度，y坐标是画布高度的随机数
        context.lineWidth = 0.5; //隨機線寬
        context.strokeStyle = _this.lineColor; //隨機線描邊屬性
        context.stroke(); //描邊，即起點描到終點
      }
      //隨機點(所謂畫面其實就是畫1px像素的線)
      function drawDot(canvas, context) {
        let px = Math.floor(Math.random() * canvas.width);
        let py = Math.floor(Math.random() * canvas.height);
        context.moveTo(px, py);
        context.lineTo(px + 1, py + 1);
        context.lineWidth = 0.2;
        context.stroke();
      }
      //繪製圖片
      function convertCanvasToImage(canvas) {
        _this.$refs.verify.style.display = "none";
        let image = _this.$refs.captchaImg;
        image.src = canvas.toDataURL("image/png");
        return image;
      }
      //點擊圖片刷新
      this.$refs.captchaImg.onclick = () => {
        this.$refs.verify.remove();
        // $('#verify').after('<canvas width="126" height="48" id="verify-canvas"></canvas>');
        let test = '<canvas width="126" height="48" id="verify-canvas"></canvas>'
        document.getElementById('verify').insertAdjacentElement('afterend', test);
        drawCode();
      }
      this.$refs.refresh.onclick = () => {
        this.$refs.verify.remove();
        // $('#verify').after('<canvas width="126" height="48" id="verify-canvas"></canvas>')
        document.getElementById('verify').insertAdjacentElement('afterend', '<canvas width="126" height="48" id="verify-canvas"></canvas>');
        drawCode();
      }
    }
  }
})


//DateGroup 日期群組驗證
Vue.component('ud-date-group', {
  name: "UdDateGroup",
  template: `
    <div class="ud-date-select">
      <select name="year" ref="year"></select>
      <p>年</p>
      <select name="month" ref="month"></select>
      <p>月</p>
      <select name="date" ref="date"></select>
      <p>日</p>
    </div>
  `,
  props: {
    roc: Boolean
  },
  mounted() {
    this.dateSelect();
  },
  methods: {
    dateSelect: function() {
      let _this = this;
      let time = new Date();
      let year = time.getFullYear();
      let selectYear = this.$refs.year;
      let selectMonth = this.$refs.month;
      let selectDate = this.$refs.date;
      if (this.roc) {
        for (let i = 0; i < year - 1911; i++) {
          selectYear.insertAdjacentHTML("beforeEnd",`<option value=${year - 1911 - i}>${year - 1911 - i}</option>`);
        }
      } else {
        for (let i = 0; i <= 120; i++) {
          selectYear.insertAdjacentHTML("beforeEnd",`<option value=${year - i}>${year - i}</option>`);
        }
      }
      selectYear.insertAdjacentHTML("afterbegin","<option value='' disabled selected></option>");
      for (let i = 1; i <= 12; i++) {
        selectMonth.insertAdjacentHTML("beforeEnd",`<option value=${i}>${i}</option>`);
      }
      selectMonth.insertAdjacentHTML("afterbegin","<option value='' disabled selected></option>");
      selectYear.addEventListener("change", () => {
        changeDate();
      });
      selectMonth.addEventListener("change", () => {
        changeDate();
      });
    
      function changeDate() {
        let year = parseInt(selectYear.value);
        let month = parseInt(selectMonth.value);
        let day = new Date(_this.roc?year + 1911:year,month,0).getDate();
        dateOption(day);
    
        function dateOption(n) {
          selectDate.innerHTML = "";
          for (let i = 1; i <= n; i++) {
            selectDate.insertAdjacentHTML("beforeEnd",`<option value=${i}>${i}</option>`);
          }
          selectDate.insertAdjacentHTML("afterbegin","<option value='' disabled selected></option>");
        }
      }
    }
  },
})

//VfAddressGroup 地址群組驗證
Vue.component('ud-address-group', {
  name: "UdAddressGroup",
  template: `
    <div class="ud-address-group">
      <div class="flex-wrapper" v-if="!inputOnly">
        <formulate-input 
          type="select"
          name="county"
          placeholder="請選擇縣市"
          :options="countyOptions"
          validation="required"
          :validation-messages="{required: '縣市不可為空'}"
          @input="getCounty"
        >
        </formulate-input>
        <formulate-input
          type="select"
          name="area"
          placeholder="請選擇鄉填市區"
          :options="areaOptions"
          validation="required"
          :validation-messages="{required: '鄉鎮市區不可為空'}"
          @input="getArea"
          ref="area"
        >
        </formulate-input>
      </div>
      <div v-if="!selectOnly">
        <formulate-input
          type="text"
          name="address"
          placeholder="請輸入地址"
          validation="required"
          :validation-messages="{required: '地址不可為空'}"
          ref="address"
        >
        </formulate-input>
      </div>
    </div>
  `,
  data() {
    return {
      countyValue: "",
      areaValue: "",
      countyInit: 0,
      areaInit: 0,
      countyList: [
        {county: "台北市", areaList: ["中正區","大同區","中山區","松山區","大安區","萬華區","信義區","士林區","北投區","內湖區","南港區","文山區"]},
        {county: "新北市", areaList: ["萬里區","金山區","板橋區","汐止區","深坑區","石碇區","瑞芳區","平溪區","雙溪區","貢寮區","新店區","坪林區","烏來區","永和區","中和區","土城區","三峽區","樹林區","鶯歌區","三重區","新莊區","泰山區","林口區","蘆洲區","五股區","八里區","淡水區","三芝區","石門區"]},
        {county: "宜蘭縣", areaList: ["宜蘭市","頭城鎮","礁溪鄉","壯圍鄉","員山鄉","羅東鎮","三星鄉","大同鄉","五結鄉","冬山鄉","蘇澳鎮","南澳鄉","釣魚台列嶼"]},
        {county: "桃園市", areaList: ["中壢區","平鎮區","龍潭區","楊梅區","新屋區","觀音區","桃園區","龜山區","八德區","大溪區","復興區","大園區","蘆竹區"]},
        {county: "新竹市", areaList: ["東區","北區","香山區"]},
        {county: "新竹縣", areaList: ["竹北市","湖口鄉","新豐鄉","新埔鎮","關西鎮","芎林鄉","寶山鄉","竹東鎮","五峰鄉","橫山鄉","尖石鄉","北埔鄉","峨眉鄉"]},
        {county: "苗栗縣", areaList: ["竹南鎮","頭份市","三灣鄉","南庄鄉","獅潭鄉","後龍鎮","通霄鎮","苑裡鎮","苗栗市","造橋鄉","頭屋鄉","公館鄉","大湖鄉","泰安鄉","銅鑼鄉","三義鄉","西湖鄉","卓蘭鎮"]},
        {county: "台中市", areaList: ["中區","東區","南區","西區","北區","北屯區","西屯區","南屯區","太平區","大里區","霧峰區","烏日區","豐原區","后里區","石岡區","東勢區","和平區","新社區","潭子區","大雅區","神岡區","大肚區","沙鹿區","龍井區","梧棲區","清水區","大甲區","外埔區","大安區"]},
        {county: "彰化縣", areaList: ["彰化市","芬園鄉","花壇鄉","秀水鄉","鹿港鎮","福興鄉","線西鄉","和美鎮","伸港鄉","員林市","社頭鄉","永靖鄉","埔心鄉","溪湖鎮","大村鄉","埔鹽鄉","田中鎮","北斗鎮","田尾鄉","埤頭鄉","溪州鄉","竹塘鄉","二林鎮","大城鄉","芳苑鄉","二水鄉"]},
        {county: "南投縣", areaList: ["南投市","中寮鄉","草屯鎮","國姓鄉","埔里鎮","仁愛鄉","名間鄉","集集鎮","水里鄉","魚池鄉","信義鄉","竹山鎮","鹿谷鄉"]},
        {county: "嘉義市", areaList: ["東區","西區"]},
        {county: "嘉義縣", areaList: ["番路鄉","梅山鄉","竹崎鄉","阿里山","中埔鄉","大埔鄉","水上鄉","鹿草鄉","太保市","朴子市","東石鄉","六腳鄉","新港鄉","民雄鄉","大林鎮","溪口鄉","義竹鄉","布袋鎮"]},
        {county: "雲林縣", areaList: ["斗南鎮","大埤鄉","虎尾鎮","土庫鎮","褒忠鄉","東勢鄉","台西鄉","崙背鄉","麥寮鄉","斗六市","林內鄉","古坑鄉","莿桐鄉","西螺鎮","二崙鄉","北港鎮","水林鄉","口湖鄉","四湖鄉","元長鄉"]},
        {county: "台南市", areaList: ["中西區","東區","南區","北區","安平區","安南區","永康區","歸仁區","新化區","左鎮區","玉井區","楠西區","南化區","仁德區","關廟區","龍崎區","官田區","麻豆區","佳里區","西港區","七股區","將軍區","學甲區","北門區","新營區","後壁區","白河區","東山區","六甲區","下營區","柳營區","鹽水區","善化區","大內區","山上區","新市區","安定區"]},
        {county: "高雄市", areaList: ["新興區","前金區","苓雅區","鹽埕區","鼓山區","旗津區","前鎮區","三民區","楠梓區","小港區","左營區","仁武區","大社區","東沙群島","南沙群島","岡山區","路竹區","阿蓮區","田寮區","燕巢區","橋頭區","梓官區","彌陀區","永安區","湖內區","鳳山區","大寮區","林園區","鳥松區","大樹區","旗山區","美濃區","六龜區","內門區","杉林區","甲仙區","桃源區","那瑪夏區","茂林區","茄萣區"]},
        {county: "澎湖縣", areaList: ["馬公市", "西嶼鄉", "望安鄉", "七美鄉", "白沙鄉", "湖西鄉"]},
        {county: "金門縣", areaList: ["金沙鎮", "金湖鎮", "金寧鄉", "金城鎮", "烈嶼鄉", "烏坵鄉"]},
        {county: "屏東縣", areaList: ["屏東市","三地門鄉","霧台鄉","瑪家鄉","九如鄉","里港鄉","高樹鄉","鹽埔鄉","長治鄉","麟洛鄉","竹田鄉","內埔鄉","萬丹鄉","潮州鎮","泰武鄉","來義鄉","萬巒鄉","崁頂鄉","新埤鄉","南州鄉","林邊鄉","東港鎮","琉球鄉","佳冬鄉","新園鄉","枋寮鄉","枋山鄉","春日鄉","獅子鄉","車城鄉","牡丹鄉","恆春鎮","滿州鄉"]},
        {county: "台東縣", areaList: ["台東市","綠島鄉","蘭嶼鄉","延平鄉","卑南鄉","鹿野鄉","關山鎮","海端鄉","池上鄉","東河鄉","成功鎮","長濱鄉","太麻里","金峰鄉","大武鄉","達仁鄉"]},
        {county: "花蓮縣", areaList: ["花蓮市","新城鄉","秀林鄉","吉安鄉","壽豐鄉","鳳林鎮","光復鄉","豐濱鄉","瑞穗鄉","萬榮鄉","玉里鎮","卓溪鄉","富里鄉"]},
        {county: "連江縣", areaList: ["南竿鄉", "北竿鄉", "莒光鄉", "東引鄉"]}
      ],
    }
  },
  props: {
    addressLink: Boolean, //開啟地區地址連動
    selectOnly: Boolean, //只有地區下拉
    inputOnly: Boolean //只有地址輸入
  },
  computed: {
    countyOptions: function(){
      let tempObj = {};
      for(let item of this.countyList){
        tempObj[item.county] = item.county;
      }
      return tempObj;
    },
    areaOptions: function(){
      let _this = this;
      if(!this.countyValue) return;
      let countyObj = this.countyList.find(item => item.county === _this.countyValue);
      let tempObj = {};
      for(let item of countyObj.areaList){
        tempObj[item] = item;
      }
      return tempObj;
    }
  },
  methods: {
    getCounty: function(val){
      this.countyValue = val;
    },
    getArea: function(val){
      this.areaValue = val;
    },
  },
  watch: {
    countyValue: function(){
      if(!this.countyInit){
        this.countyInit = 1;
        return;
      }
      this.$refs.area.proxy = "";
      this.areaValue = "";
    },
    areaValue: function(){
      if(!this.addressLink) return;
      if(!this.areaInit){
        this.areaInit = 1;
        return;
      }
      this.$refs.address.proxy = `${this.countyValue}${this.areaValue}`;
    }
  }
})

//-----------------------Data-----------------------
//Table 表格
Vue.component('ud-table', {
  name: "UdTable",
  template: `

  `,
  props: {
    
  },
})

//Pagination 分頁
Vue.component('ud-pagination', {
  name: "UdPagination",
  template: `

  `,
  props: {
    
  },
})

//-----------------------Notice-----------------------
//Alert 警告彈窗
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
                <ud-button plain @click="$emit('input', 0)">{{ cancelTxt }}</ud-button>
                <ud-button @click="$emit('confirm')">{{ confirmTxt }}</ud-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  `,
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
let UdModalExtend = Vue.extend({
  template: `
    <transition name="fade">
      <div class="ud-alert" v-if="isShow">
        <div class="modal-wrapper" @click.self="maskHandler">
          <div class="modal-content">
            <div class="modal-close" v-if="btnClose" @click="destroy">
              <i class="fas fa-times"></i>
            </div>
            <div class="modal-header" v-if="title || titleHtml">
              <ud-html :text="titleHtml" v-if="titleHtml"></ud-html>
              <p v-else>{{ title }}</p>
            </div>
            <div class="modal-body">
              <ud-html :text="msgHtml" v-if="msgHtml"></ud-html>
              <p v-else>{{ msg }}</p>
            </div>
            <div class="modal-footer">
              <div class="button-area flex-wrapper">
                <ud-button @click="cancelHandler" plain v-if="isConfirm">{{ cancelTxt }}</ud-button>
                <ud-button @click="confirmHandler">{{ confirmTxtAfter }}</ud-button>
              </div>
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
      maskClose: false, //有無點擊遮罩關閉
      btnClose: false, //有無右上關閉鈕
      title: "", //警告標題
      titleHtml: "", //警告標題HTML
      msg: "網路通信錯誤，請稍候再試", //警告訊息
      msgHtml: "", //警告訊息HTML
      cancelTxt: "取消", //取消鈕文字
      cancel: () => {}, //取消鈕動作
      confirmTxt: "", //確認鈕文字
      confirm: () => {}, //確認鈕動作
    }
  },
  computed: {
    confirmTxtAfter: function(){
      if(this.confirmTxt) return this.confirmTxt;
      return this.isConfirm ? "確定" : "OK";
    }
  },
  mounted() {
    this.isShow = true;
  },
  methods: {
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

Vue.prototype.$alert = options => {
  let UdAlert = new UdModalExtend({
    el: document.createElement('div'),
    data() {
      return options;
    }
  })
  document.body.appendChild(UdAlert.$el);
};

Vue.prototype.$confirm = options => {
  options.isConfirm = true;
  let UdConfirm = new UdModalExtend({
    el: document.createElement('div'),
    data() {
      return options;
    }
  })
  document.body.appendChild(UdConfirm.$el);
};

//Modal 通用彈窗
Vue.component("ud-modal", {
  name: "UdModal",
  template: `
    <transition name="fade">
      <div class="ud-modal" v-if="isShow" v-cloak>
        <div class="modal-wrapper" @click.self="maskCancel && $emit('cancel')">
          <div class="modal-content">
            <div class="modal-close" v-if="hasCancel" @click="$emit('cancel')">
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
                <ud-button @click="$emit('cancel')">OK</ud-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  `,
  props: {
    title: {
      type: String,
      default: "通用彈窗標題"
    },
    message: {
      type: String,
      default: "通用彈窗訊息"
    },
    isShow: {
      type: [Number,Boolean],
      default: 0
    },
    maskCancel: Boolean,
    hasCancel: Boolean,
  },
});

//Loading 加載中
Vue.component('ud-loading', {
  name: "UdLoading",
  template: `
    <transition name="loading">
      <div class="ud-loading" v-if="isShow" :class="{'theme-white': theme === 'white'}">
        <div class="modal-wrapper">
          <div class="modal-content">
            <div class="modal-header">
              <i :class="icon"></i>
            </div>
            <div class="modal-body">
              <ud-html :text="msgHtml" v-if="msgHtml"></ud-html>
              <p v-else>{{ msg }}</p>
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
    label:{
      default: "加載中...",
      type: String
    }
  }
})

//Loading 載入中(調用式) ud-loading
let UdLoadingExtend = Vue.extend({
  template: `
    <transition name="loading">
      <div class="ud-loading" v-if="isShow" :class="{'theme-white': theme === 'white'}">
        <div class="modal-wrapper">
          <div class="modal-content">
            <div class="modal-header">
              <img v-if="customIcon" class="cutsom-icon" :src="customIcon">
              <i v-else :class="icon"></i>
            </div>
            <div class="modal-body">
              <ud-html :text="msgHtml" v-if="msgHtml"></ud-html>
              <p v-else>{{ msg }}</p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  `,
  data() {
    return {
      isShow: false,
      fixed: false, //是否固定body
      theme: "", //戴入主題 [white]
      icon: "fas fa-spinner fa-pulse", //載入icon
      customIcon: "",
      msg: "", //載入訊息
      msgHtml: "", //載入訊息HTML
    }
  },
  mounted() {
    this.isShow = true;
  },
  methods: {
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
Vue.prototype.$loading = {
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

//Notify 通知訊息
Vue.component('ud-notify', {
  name: "UdNotify",
  template: `

  `,
  props: {
    
  },
})

//Popover 氣泡框
Vue.component('ud-popover', {
  name: "UdPopover",
  template: `

  `,
  props: {
    
  },
})

//-----------------------Tools-----------------------
//Html 用戶自定義訊息
Vue.component('ud-html', {
  template: `
    <div class="ud-html" v-html="nl2br(text)"></div>
  `,
  props: {
    text: {
      type: String,
      default: "<h1>H1 用戶自定義訊息</h1><h2>H2 用戶自定義訊息</h2><h3>H3 用戶自定義訊息</h3><h4>H4 用戶自定義訊息</h4><h5>H5 用戶自定義訊息</h5><h6>H6 用戶自定義訊息</h6>\n<p>p 用戶自定義訊息</p><span>span 用戶自定義訊息</span>"
    }
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

//Backtop 回到頂部
Vue.component('ud-backtop', {
  name: "UdBacktop",
  template: `
    <ud-button @click="scrollToTop">回最頂</ud-button>
  `,
  methods: {
    scrollToTop: function(){
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(this.scrollToTop);
        window.scrollTo(0, c - c / 6);
      }
    }
  },
})

//Ellipsis 文字省略
Vue.component('ud-ellipsis', {
  name: "UdEllipsis",
  template: '<p class="ud-ellipsis" :style="{webkitLineClamp: maxLine }"><slot></slot></p>',
  props: {
    maxLine: {
      type: Number,
      default: 1,
    }
  },
})

//CountdownExpire 倒數計時(時限)
Vue.component('ud-countdown-expire', {
  name: "UdCountdownExpire",
  template: `
    <div>距離5月13號 15點0分0秒 還有</div>
    <i></i>
    <i></i>
    <i></i>
  `,
  mounted() {
    let aI = document.getElementsByTagName("i");
    setInterval(function() {  // 設置倒數計時: 結束時間 - 當前時間
      // 當前時間
      let time = new Date();
      let nowTime = time.getTime(); // 獲取當前毫秒數
      // 設置結束時間 : 5月13號 15點0分0秒
      time.setMonth(4); //   獲取當前 月份 (從 '0' 開始算)
      time.setDate(13); //   獲取當前 日
      time.setHours(15); //   獲取當前 時
      time.setMinutes(0); //   獲取當前 分
      time.setSeconds(0);
      let endTime = time.getTime();
      // 倒數計時: 差值
      let offsetTime = (endTime - nowTime) / 1000; // ** 以秒為單位
      let sec = parseInt(offsetTime % 60); // 秒
      let min = parseInt((offsetTime / 60) % 60); // 分 ex: 90秒
      let hr = parseInt(offsetTime / 60 / 60); // 時

      aI[0].textContent = hr + "時";
      aI[1].textContent = min + "分";
      aI[2].textContent = sec + "秒";
    }, 1000);
  },
})

//Countdown 倒數計時
Vue.component('ud-countdown', {
  name: "UdCountdown",
  template: `
    <span class="ud-countdown" ref="count">{{cTime}}</span>
  `,
  props: {
    time: {
      type: Number,
      default: 60
    },
    delay: Boolean
  },
  data() {
    return {
      cTime: this.time
    }
  },
  mounted() {
    if(!this.delay) this.countdown();
  },
  methods: {
    countdown: function(){
      let _this = this;
      let countdown = setInterval(function(){
        _this.cTime -= 1;
        if(_this.cTime <= 0){
          _this.$emit("timeup");
          clearInterval(countdown);
        }
      }, 1000);
    },
    reset: function(){
      this.cTime = 10;
      this.countdown();
    }
  },
})

//-----------------------Application-----------------------
//Carousel 走馬燈
Vue.component('ud-carousel', {
  name: "UdCarousel",
  template: `

  `,
  props: {
    
  },
})

//Youtube 水管播放
Vue.component('ud-youtube', {
  name: "UdYoutube",
  template: `
    <div class="ud-youtube">
      <div class="video-wrapper">
        <iframe width="560" height="315" :src="videoIdAfter" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  `,
  props: {
    videoId: { //影片ID
      type: String,
      default: "p6qjpdi8XuE"
    },
    start: { //開始時間
      type: Number,
      default: 0
    },
    autoplay: Boolean, //自動播放
    loop: Boolean, //自動循環
    noControl: Boolean, //移除控制介面
  },
  computed: {
    videoIdAfter: function(){
      let urlTemp = `https://www.youtube.com/embed/${this.videoId}?`;
      if(this.start) urlTemp = `${urlTemp}&start=${this.start}`;
      if(this.autoplay) urlTemp = `${urlTemp}&autoplay=1`;
      if(this.loop) urlTemp = `${urlTemp}&loop=1&playlist=${this.videoId}`;
      if(this.noControl) urlTemp = `${urlTemp}&controls=0`;
      return urlTemp;
    }
  },
})

//YoutubeApi 水管播放(控制版)
Vue.component('ud-youtube-api', {
  name: "UdYoutubeApi",
  template: `
    <div class="ud-youtube-api">
      <div class="video-wrapper">
        <div :id="videoId" ref="player"></div>
      </div>
    </div>
  `,
  props: {
    videoId: { //影片id
      type: String,
      default: "KnWMMgEDva0"
    },
    start: { //開始時間
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
    autoplay: Boolean, //自動播放
    loop: Boolean, //自動循環
    noControl: Boolean, //移除控制介面
    mute: Boolean //開始時靜音
  },
  data() {
    return {
      player: {}
    }
  },
  computed: {
    control: function(){
      return this.noControl ? 0 : 1;
    }
  },
  mounted() {
    let _this = this;
    let tag = document.createElement('script');
    let player;
    let firstScriptTag = document.getElementsByTagName('script')[0];
    tag.src = "https://www.youtube.com/iframe_api";
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    window.onYouTubeIframeAPIReady = function(){
      player = new YT.Player(_this.videoId, {
        videoId: _this.videoId, //YouTube 影片ID
        width: _this.width, //播放器寬度 (px)
        height: _this.height, //播放器高度 (px)
        playerVars: {
          autoplay: _this.autoplay, //在讀取時自動播放影片
          controls: _this.control, //在播放器顯示暫停／播放按鈕
          start: _this.start //開始時間
          // loop: _this.loop, //讓影片循環播放
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange,
        }
      });
    }
    function onPlayerReady(e) {
      if(_this.mute) e.target.mute();
    };
    function onPlayerStateChange(e) {
      if (e.data === YT.PlayerState.ENDED) {
        player.playVideo(); 
      }
    };
  },
  methods: {

  },
})

//GoogleMap 估狗地圖
Vue.component('ud-google-map', {
  name: "UdGoogleMap",
  template: `
    <div class="ud-google-map" :style="{'padding-bottom': ratio + '%'}">
      <iframe :src="src" :width="width" :height="height" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
  `,
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
})

//Select2 搜尋下拉框套件
//dependencies:
//  "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
//  "https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css"
//  "https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js"
//reference:
//  https://select2.org
Vue.component('ud-select2', {
  name: "UdSelect2",
  template: `
    <select2 :options="options" v-model="selected">
      <option disabled value="0">Select one</option>
    </select2>
  `,
  props: ["options", "value"],
  mounted: function() {
    var vm = this;
    $(this.$el)
      .select2({ data: this.options })
      .val(this.value)
      .trigger("change")
      .on("change", function() {
        vm.$emit("input", this.value);
      });
  },
  watch: {
    value: function(value) {
      $(this.$el)
        .val(value)
        .trigger("change");
    },
    options: function(options) {
      $(this.$el)
        .empty()
        .select2({ data: options });
    }
  },
  destroyed: function() {
    $(this.$el)
      .off()
      .select2("destroy");
  }
})

//Scratch 刮刮樂
//dependencies:"plugins/scratchcard/scratchcard.min.js"(https://github.com/Masth0/ScratchCard)
Vue.component('ud-scratch', {
  name: "UdScratch",
  template: `
    <div class="ud-scratch">
      <div class="sc__wrapper">
        <div class="sc__container" :id="id"></div>
      </div>
    </div>
  `,
  mounted() {
    this.initScratch();
  },
  props: {
    id: { //刮刮樂id 區分複數刮刮樂
      type: String,
      default: "js--sud--container"
    },
    coverSrc: { //封面圖片
      type: String,
      default: "img/silver.jpg"
    },
    brushSrc: { //筆刷圖片
      type: String,
      default: "img/brush.png"
    },
    prizeSrc: { //獎品圖片
      type: String,
      default: "img/prize_01.jpg"
    },
    aspectRatio: { //長寬比
      type: Number,
      default: 1.65
    },
    percent: { //完成所需%數
      type: Number,
      default: 10
    },
  },
  methods: {
    initScratch: function(){
      let _this = this;
      const scContainer = document.getElementById(this.id);
      const sc = new ScratchCard(`#${this.id}`, {
        scratchType: SCRATCH_TYPE.BRUSH,
        containerWidth: scContainer.offsetWidth,
        containerHeight: scContainer.offsetWidth/this.aspectRatio,
        brushSrc: this.brushSrc,
        imageForwardSrc: this.coverSrc,
        imageBackgroundSrc: this.prizeSrc,
        percentToFinish: this.percent,
        callback: function () {
          _this.$emit("finish"); //刮完事件
        }
      })
      sc.init().then(() => {
        sc.canvas.addEventListener('scratch.move', () => {
          _this.$emit("move", Math.floor(sc.getPercent())); //移動中事件(帶百分比)
        })
      }).catch((error) => {
        alert(error.message);
      });
    }
  },
})

//Editor 文字編輯器
Vue.component('ud-editor', {
  name: "UdEditor",
  template: '<h1>文案編輯器</h1>'
})


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
  vm.$alert({msg: '文字已複製到剪貼簿'});
}

function test(){
  vm.$alert({msg: '文字已複製到剪貼簿'});
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

//深拷貝(簡易版)
  //無法拷貝特殊類型值與funciton
function deepCloneSimple(obj){
  return JSON.parse(JSON.stringify(obj));
}

//深拷貝(完全版)
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

//解析時間
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

//時間人性化
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

//CDN備援
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

//Axios封装
//axiosPackage
const service = axios.create({
  // baseURL: baseURL, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
})

// if (process.env.NODE_ENV == 'development') {
//   axios.defaults.baseURL = '/api';
// } else {
//   axios.defaults.baseURL = 'http://api.123dailu.com/';
// }

// post請求頭
// service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 請求攔截器
service.interceptors.request.use(
  config => {
    vm.$loading.open();
    config.data = JSON.stringify(config.data);

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
    vm.$loading.close();
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    vm.$loading.close();
    if (error && error.response) {
      switch (error.response.status) {
        case 404:
          vm.$alert({title: error.message, msg: "找不到該頁面，請稍候再試"});
          break;
        case 500:
          vm.$alert({title: error.message, msg: "伺服器出錯，請稍候再試"});
          break;
        case 503:
          vm.$alert({title: error.message, msg: "服務失效，請稍候再試"});
          break;
        default:
          vm.$alert({title: error.message, msg: `連接錯誤：${error.response.status}，請稍候再試`});
      }
    } else {
      vm.$alert({title: error.message, msg: "連接到伺服器失敗，請稍候再試"});
    }
    return Promise.reject(error)
  }
);

/** 
 * getApi方法，對應get請求
 * @param  {String} url 請求的url地址
 * @param  {Object} params 請求時攜帶的參數
 */
function getApi(url, params = {}){
  return new Promise((resolve, reject) =>{
    service.get(url, {
      params: params
    })
    .then(res => {
      resolve(res.data);
    })
    .catch(err => {
      reject(err.data);
    })
  });
}

/** 
 * postApi方法，對應post請求
 * @param  {String} url 請求的url地址
 * @param  {Object} data 請求時攜帶的資料
 * @param  {Object} params 請求時攜帶的參數
 */
function postApi(url, data = {}, params = {}) {
  return new Promise((resolve, reject) => {
    service.post(url, data, {
      params: params
    })
    .then(res => {
      resolve(res.data);
    })
    .catch(err => {
      reject(err.data);
    })
  });
}

/** 
 * putApi方法，對應put請求
 * @param  {String} url 請求的url地址
 * @param  {Object} data 請求時攜帶的資料
 * @param  {Object} params 請求時攜帶的參數
 */
function putApi(url, data = {}, params = {}) {
  return new Promise((resolve, reject) => {
    service.put(url, data, {
      params: params
    })
    .then(res => {
      resolve(res.data);
    })
    .catch(err => {
      reject(err.data);
    })
  });
}

/** 
 * deleteApi方法，對應delete請求
 * @param  {String} url 請求的url地址
 * @param  {Object} data 請求時攜帶的資料
 * @param  {Object} params 請求時攜帶的參數
 */
function deleteApi(url, data = {}, params = {}) {
  return new Promise((resolve, reject) => {
    service.delete(url, data, {
      params: params
    })
    .then(res => {
      resolve(res.data);
    })
    .catch(err => {
      reject(err.data);
    })
  });
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

//-----------------------Animation-----------------------
//RAF通用動畫函式
  // animate({
  //   duration: 1000,
  //   timing(timeFraction) {
  //     return timeFraction;
  //   },
  //   draw(progress) {
  //     elem.style.width = progress * 100 + '%';
  //   }
  // });
  // progress = 0 表示開始動畫狀態，progress = 1 表示結束狀態。
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


//-----------------------開發暫放區-----------------------
//可編輯div
Vue.component("ud-contenteditable", {
  name: "UdContenteditable",
  template: `
    <div contenteditable="contenteditable" @input="updateInput" class="ud-contenteditable">
      {{ content }}
    </div>
  `,
  prop: ["value"],
  data() {
    return {
      content: ""
    };
  },
  methods: {
    updateInput() {
      this.$emit("input", this.content);
    }
  }
});

Vue.component("el-button", {
  template: `
    <button 
      class="el-button"
      :class="[
        type ? 'el-button--' + type : '',
        size ? 'el-button--' + size : '',
        {
          'is-plain': plain,
          'is-round': round,
          'is-circle': circle,
          'is-disabled': disabled,
          'is-loading': loading,
        }
      ]"
      :autofocus="autofocus"
      :disabled="disabled || loading"
      @click="handleClick"
    >
      <el-i class="el-icon-loading" v-if="loading"></el-i>
      <el-i :class="icon" v-if="icon && !loading"></el-i>
      <span v-if="$slots.default"><slot></slot></span>
    </button>
  `,
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
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
});



//VfCaptcha 圖形碼驗證
Vue.component('ud-captcha-dev', {
  name: "UdCaptcha",
  template: `
    <div class="ud-captcha-dev">
      <div id="random">
        <canvas id="verify-canvas" width="100" height="48"></canvas>
        <img ref="codeimg" @click="refresh">
        <input id="varifyhidden" type="hidden" v-model="inputVal">
      </div>
      <div class="refresh" @click="refresh">
        <i class="fas fa-sync-alt" id="refresh"></i>
      </div>
    </div>
  `,
  computed: {
    inputVal: {
      get: function(){
        return this.value;
      },
      set: function(val){
        this.$emit('input', val)
      }
    }
  },
  props: {
    value: null,
  },
  mounted() {
    this.drawCode();
  },
  methods: {
    // 绘制验证码
    drawCode() {
      let nums = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz".split("");
      let canvas = document.getElementById('verify-canvas');  //获取HTML端画布
      let context = canvas.getContext("2d");                 //获取画布2D上下文
      context.fillStyle = "#fff";                  //画布填充色
      context.fillRect(0, 0, canvas.width, canvas.height);   //清空画布
      context.fillStyle = "#000";                           //设置字体颜色
      context.font = "25px Arial";                           //设置字体
      let rand = new Array();
      let x = new Array();
      let y = new Array();
      for (let i = 0; i < 4; i++) {
          rand[i] = nums[Math.floor(Math.random() * nums.length)]
          x[i] = i * 16 + 10;
          y[i] = Math.random() * 20 + 20;
          context.fillText(rand[i], x[i], y[i]);
      }
      let temp = rand.join('');
      // $('#varifyhidden').val(temp);
      this.inputVal = temp;
      
      //画3条随机线
      for (let i = 0; i < 3; i++) {
        this.drawline(canvas, context);
      }
      // 画30个随机点
      for (let i = 0; i < 30; i++) {
        this.drawDot(canvas, context);
      }
      this.convertCanvasToImage(canvas);
    },
    // 随机线
    drawline: function(canvas, context) {
      context.moveTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));             //随机线的起点x坐标是画布x坐标0位置，y坐标是画布高度的随机数
      context.lineTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));  //随机线的终点x坐标是画布宽度，y坐标是画布高度的随机数
      context.lineWidth = 0.5;                                                  //随机线宽
      context.strokeStyle = 'rgba(100,100,100,1)';                            //随机线描边属性
      context.stroke();                                                         //描边，即起点描到终点
    },
    // 随机点(所谓画点其实就是画1px像素的线，方法不再赘述)
    drawDot: function(canvas, context) {
      let px = Math.floor(Math.random() * canvas.width);
      let py = Math.floor(Math.random() * canvas.height);
      context.moveTo(px, py);
      context.lineTo(px + 1, py + 1);
      context.lineWidth = 0.2;
      context.stroke();
    },
    // 绘制图片
    convertCanvasToImage: function(canvas) {
      document.getElementById('verify-canvas').style.display = "none";
      let image = this.$refs.codeimg;
      image.src = canvas.toDataURL("image/png");
      return image;
    },
    refresh: function() {
      document.getElementById('verify-canvas').remove();
      $('#random').after('<canvas width="100" height="48" id="verify-canvas"></canvas>')
      this.drawCode();
    }
  },
})