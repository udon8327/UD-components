// @prepros-prepend ud-utils.ts

/* Vue組件目錄
Basic
  Layout 布局
  Container 布局容器
  Color 色彩
  Typography 字體
  Border 邊框
  Icon 圖標
  Button 按鈕 -----> ud-button
  Link 文字鏈接

Form
  Radio 單選框 -----> ud-radio
  Checkbox 多選框 -----> ud-checkbox
  Input 輸入框 -----> ud-input
  Textarea 多行輸入框 -----> ud-textarea
  InputNumber 計數器
  Select 選擇器 -----> ud-select
  Cascader 級聯選擇器
  Switch 開關 -----> ud-switch
  Slider 滑塊
  TimePicker 時間選擇器
  DatePicker 日期選擇器
  DateTimePicker 日期時間選擇器
  Upload 上傳 -----> ud-upload
  Rate 評分
  ColorPicker 顏色選擇器
  Transfer 穿梭框
  Form 表單 -----> ud-form

Data
  Table 表格 -----> ud-table
  Tag 標簽
  Progress 進度條
  Tree 樹形控件
  Pagination 分頁 -----> ud-pagination
  Badge 標記
  Avatar 頭像

Notice
  Alert 警告 -----> ud-alert
  Loading 加載 -----> ud-loading
  Message 消息提示 -----> ud-message
  MessageBox 彈框 -----> ud-messagebox
  Notification 通知 -----> ud-notification

Navigation
  NavMenu 導航菜單
  Tabs 標簽頁
  Breadcrumb 面包屑
  PageHeader 頁頭
  Dropdown 下拉菜單
  Steps 步驟條

Others
  Dialog 對話框 -----> ud-dialog
  Tooltip 文字提示
  Popover 彈出框 -----> ud-popover
  Popconfirm 氣泡確認框 -----> ud-popconfirm
  Card 卡片
  Carousel 走馬燈 -----> ud-carousel
  Collapse 折疊面板
  Timeline 時間線
  Divider 分割線
  Calendar 日歷
  Image 圖片
  Backtop 回到頂部 -----> ud-backtop
  InfiniteScroll 無限滾動
  Drawer 抽屜

Personal
  Captcha 圖形驗證碼 -----> ud-captcha
  Ellipsis 文字省略 -----> ud-ellipsis
  Youtube 水管播放 -----> ud-youtube
  YoutubeApi 水管播放(控制版) -----> ud-youtube-api
  Scratch *刮刮樂 -----> ud-scratch
  CountdownDeadline 倒數計時(有時限) -----> ud-countdown-deadline
  Countdown 倒數計時(無時限) -----> ud-countdown
  DateSelect 日期下拉選擇 -----> ud-date-select
  AddressSelect 地址下拉選擇 -----> ud-address-select
  GoogleMap 估狗地圖 -----> ud-google-map
  Select2 *搜尋下拉框 -----> ud-select2
*/

//-----------------------Basic-----------------------
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

//-----------------------Form-----------------------
//Radio 單選框
Vue.component('ud-radio', {
  name: "UdRadio",
  template: `
    <label class="ud-radio">
      <input
        type="radio"
        :checked="checked"
        :value="label"
        @change="handleChange"
      >
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </label>
  `,
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: ['label', 'checked'],
  methods: {
    handleChange: function(e){
      this.$emit('change', e.target.value)
    }
  },
})

//Checkbox 多選框
Vue.component('ud-checkbox', {
  name: "UdCheckbox",
  template: `
    <input
      class="ud-checkbox"
      type="checkbox"
      :checked="checked"
      @change="$emit('change', $event.target.checked)"
    >
  `,
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
})

//Input 輸入框
Vue.component('ud-input', {
  name: 'UdInput',
  template: `
    <input
      class="ud-input"
      type="text"
      :placeholder="placeholder"
      :required="required"
      :value="value"
      :name="name"
      @input="$emit('input', $event.target.value)"
    >
  `,
  props: {
    placeholder: {
      type: String,
      default: "請輸入此欄位"
    },
    value: {
      type: [String, Number],
    },
    name: {
      type: String
    },
    required: Boolean
  },
  methods: {
  },
})

//Textarea 多行輸入框
Vue.component('ud-textarea', {
  name: "UdTextarea",
  template: `
    <textarea
      class="ud-textarea"
      :cols="cols"
      :rows="rows"
      :placeholder="placeholder"
      :required="required"
      :value="value"
      :name="name"
      @input="$emit('input', $event.target.value)"
    >
    </textarea>
  `,
  props: {
    placeholder: {
      type: String,
      default: "請輸入此欄位"
    },
    value: {
      type: [String, Number],
    },
    rows: {
      type: Number,
    },
    cols: {
      type: Number,
    },
    name: {
      type: String
    },
    required: Boolean
  },
  methods: {
  },
})

//通用select表單
Vue.component('ud-select', {
  name: "UdSelect",
  template: `
    <select
      class="ud-select"
      type="select"
      :checked="checked"
      :name="name"
      @change="$emit('change', $event.target.selected)"
    >
      <option value="A">選項A</option>
      <option value="B">選項B</option>
      <option value="C">選項C</option>
    </select>
  `,
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    name: {
      type: String
    },
    checked: Boolean
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

//Form 表單
Vue.component('ud-form', {
  name: "UdForm",
  template: `

  `,
  props: {
    
  },
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
//Alert 警告
Vue.component('ud-alert', {
  name: "UdAlert",
  template: `

  `,
  props: {
    
  },
})

//Loading 加載
Vue.component('ud-loading', {
  name: "UdLoading",
  template: `
    <transition name="loading" >
      <div class="mask" @touchmove.stop.prevent v-show="visible">
        <div class="showContent">
          <i class="fas fa-spinner fa-pulse" v-if="loading"></i>
          <image src="../static/img/loading1.gif" class="loadingImg"></image>
          <text class="lable">{{label}}</text>
        </div>
      </div>
    </transition>
  `,
  data() {
    return {
      visible:false
    }
  },
  props: {
    type:{

    },
    label:{
      default: "加載中...",
      type: String
    }
  }
})

//Message 消息提示
Vue.component('ud-message', {
  name: "UdMessage",
  template: `

  `,
  props: {
    
  },
})

//MessageBox 彈框
Vue.component('ud-messagebox', {
  name: "UdMessage",
  template: `

  `,
  props: {
    
  },
})

//Notification 通知
Vue.component('ud-notification', {
  name: "UdNotification",
  template: `

  `,
  props: {
    
  },
})

//-----------------------Navigation-----------------------

//-----------------------Others-----------------------
//Dialog 對話框
Vue.component('ud-dialog', {
  name: "UdDialog",
  template: `

  `,
  props: {
    
  },
})

//Popover 彈出框
Vue.component('ud-popover', {
  name: "UdPopover",
  template: `

  `,
  props: {
    
  },
})

//Popconfirm 氣泡確認框
Vue.component('ud-popconfirm', {
  name: "Udpopconfirm",
  template: `

  `,
  props: {
    
  },
})

//Carousel 走馬燈
Vue.component('ud-carousel', {
  name: "UdCarousel",
  template: `

  `,
  props: {
    
  },
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

//-----------------------Personal-----------------------

//圖形驗證碼
Vue.component('ud-captcha', {
  name: "UdCaptcha",
  template: `
    <div class="ud-captcha">
      <canvas id="verify-canvas" ref="verifyCanvas" width="126" height="48"></canvas>
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
      let vm = this;
      drawCode();
      //繪製驗證碼
      function drawCode() {
        let canvas = vm.$refs.verifyCanvas; //獲取HTML端畫布
        let context = canvas.getContext("2d"); //獲取畫布2D上下文
        context.fillStyle = vm.bgColor; //畫布填充色
        context.fillRect(0, 0, canvas.width, canvas.height); //清空畫布
        context.fillStyle = vm.color; //設置字體顏色
        context.font = vm.font; //設置字體
        let rand = new Array();
        let x = new Array();
        let y = new Array();
        for (let i = 0; i < 4; i++) {
            rand[i] = nums[Math.floor(Math.random() * nums.length)]
            x[i] = i * 16 + 10;
            y[i] = Math.random() * 20 + 20;
            context.fillText(rand[i], x[i], y[i]);
        }
        verifyValue = rand.join('').toLowerCase();
        vm.verify = verifyValue;
        
        //畫3條隨機線
        if(!vm.noLine){
          for (let i = 0; i < 3; i++) {
            drawline(canvas, context);
          }
        }
        //畫30個隨機點
        if(!vm.noDots){
          for (let i = 0; i < 30; i++) {
            drawDot(canvas, context);
          }
        }
        convertCanvasToImage(canvas)
      }
      //隨機線
      function drawline(canvas, context) {
        context.moveTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));             //随机线的起点x坐标是画布x坐标0位置，y坐标是画布高度的随机数
        context.lineTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));  //随机线的终点x坐标是画布宽度，y坐标是画布高度的随机数
        context.lineWidth = 0.5; //隨機線寬
        context.strokeStyle = vm.lineColor; //隨機線描邊屬性
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
        vm.$refs.verifyCanvas.style.display = "none";
        let image = vm.$refs.captchaImg;
        image.src = canvas.toDataURL("image/png");
        return image;
      }
      //點擊圖片刷新
      vm.$refs.captchaImg.onclick = function () {
        $('#verify-canvas').remove();
        $('#verify').after('<canvas width="126" height="48" id="verify-canvas"></canvas>')
        drawCode();
      }
      vm.$refs.refresh.onclick = function () {
        $('#verify-canvas').remove();
        $('#verify').after('<canvas width="126" height="48" id="verify-canvas"></canvas>')
        drawCode();
      }
    }
  }
})

//文字省略
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

//CountdownDeadline 倒數計時(有時限)
Vue.component('ud-countdown-deadline', {
  name: "UdCountDownDeadline",
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

//Countdown 倒數計時(無時限)
Vue.component('ud-countdown', {
  name: "UdCountDown",
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

//DateSelect 日期下拉選擇
Vue.component('ud-date-select', {
  name: "UdDateSelect",
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

//AddressSelect 地址下拉選擇
Vue.component('ud-address-select', {
  name: "UdAddressSelect",
  template: `
    <div class="ud-address-select">
      <p>縣市</p>
      <select name="county" ref="county" v-model="currentCounty">
        <option disabled selected value="">請選擇縣市</option>
        <option v-for="county in countyList" :value="county" :key="county">{{ county }}</option>
      </select>
      <p>鄉填市區</p>
      <select name="district" ref="district">
        <option disabled selected value="">請選擇鄉填市區</option>
        <option v-for="district in curretnDistrictList" :value="district" :key="district">{{ district }}</option>
      </select>
    </div>
  `,
  data() {
    return {
      currentCounty: "",
      countyList: ["台北市","基隆市","新北市","宜蘭縣","桃園市","新竹市","新竹縣","苗栗縣","台中市","彰化縣","南投縣","嘉義市","嘉義縣","雲林縣","台南市","高雄市","澎湖縣","金門縣","屏東縣","台東縣","花蓮縣","連江縣"],
      districtList: [
        ["中正區","大同區","中山區","松山區","大安區","萬華區","信義區","士林區","北投區","內湖區","南港區","文山區",],
        ["仁愛區","信義區","中正區","中山區","安樂區","暖暖區","七堵區",],
        ["萬里區","金山區","板橋區","汐止區","深坑區","石碇區","瑞芳區","平溪區","雙溪區","貢寮區","新店區","坪林區","烏來區","永和區","中和區","土城區","三峽區","樹林區","鶯歌區","三重區","新莊區","泰山區","林口區","蘆洲區","五股區","八里區","淡水區","三芝區","石門區",],
        ["宜蘭市","頭城鎮","礁溪鄉","壯圍鄉","員山鄉","羅東鎮","三星鄉","大同鄉","五結鄉","冬山鄉","蘇澳鎮","南澳鄉","釣魚台列嶼",],
        ["中壢區","平鎮區","龍潭區","楊梅區","新屋區","觀音區","桃園區","龜山區","八德區","大溪區","復興區","大園區","蘆竹區",],
        ["東區","北區","香山區",],
        ["竹北市","湖口鄉","新豐鄉","新埔鎮","關西鎮","芎林鄉","寶山鄉","竹東鎮","五峰鄉","橫山鄉","尖石鄉","北埔鄉","峨眉鄉",],
        ["竹南鎮","頭份市","三灣鄉","南庄鄉","獅潭鄉","後龍鎮","通霄鎮","苑裡鎮","苗栗市","造橋鄉","頭屋鄉","公館鄉","大湖鄉","泰安鄉","銅鑼鄉","三義鄉","西湖鄉","卓蘭鎮",],
        ["中區","東區","南區","西區","北區","北屯區","西屯區","南屯區","太平區","大里區","霧峰區","烏日區","豐原區","后里區","石岡區","東勢區","和平區","新社區","潭子區","大雅區","神岡區","大肚區","沙鹿區","龍井區","梧棲區","清水區","大甲區","外埔區","大安區",],
        ["彰化市","芬園鄉","花壇鄉","秀水鄉","鹿港鎮","福興鄉","線西鄉","和美鎮","伸港鄉","員林市","社頭鄉","永靖鄉","埔心鄉","溪湖鎮","大村鄉","埔鹽鄉","田中鎮","北斗鎮","田尾鄉","埤頭鄉","溪州鄉","竹塘鄉","二林鎮","大城鄉","芳苑鄉","二水鄉",],
        ["南投市","中寮鄉","草屯鎮","國姓鄉","埔里鎮","仁愛鄉","名間鄉","集集鎮","水里鄉","魚池鄉","信義鄉","竹山鎮","鹿谷鄉",],
        ["東區","西區",],
        ["番路鄉","梅山鄉","竹崎鄉","阿里山","中埔鄉","大埔鄉","水上鄉","鹿草鄉","太保市","朴子市","東石鄉","六腳鄉","新港鄉","民雄鄉","大林鎮","溪口鄉","義竹鄉","布袋鎮",],
        ["斗南鎮","大埤鄉","虎尾鎮","土庫鎮","褒忠鄉","東勢鄉","台西鄉","崙背鄉","麥寮鄉","斗六市","林內鄉","古坑鄉","莿桐鄉","西螺鎮","二崙鄉","北港鎮","水林鄉","口湖鄉","四湖鄉","元長鄉",],
        ["中西區","東區","南區","北區","安平區","安南區","永康區","歸仁區","新化區","左鎮區","玉井區","楠西區","南化區","仁德區","關廟區","龍崎區","官田區","麻豆區","佳里區","西港區","七股區","將軍區","學甲區","北門區","新營區","後壁區","白河區","東山區","六甲區","下營區","柳營區","鹽水區","善化區","大內區","山上區","新市區","安定區",],
        ["新興區","前金區","苓雅區","鹽埕區","鼓山區","旗津區","前鎮區","三民區","楠梓區","小港區","左營區","仁武區","大社區","東沙群島","南沙群島","岡山區","路竹區","阿蓮區","田寮區","燕巢區","橋頭區","梓官區","彌陀區","永安區","湖內區","鳳山區","大寮區","林園區","鳥松區","大樹區","旗山區","美濃區","六龜區","內門區","杉林區","甲仙區","桃源區","那瑪夏區","茂林區","茄萣區",],
        ["馬公市", "西嶼鄉", "望安鄉", "七美鄉", "白沙鄉", "湖西鄉",],
        ["金沙鎮", "金湖鎮", "金寧鄉", "金城鎮", "烈嶼鄉", "烏坵鄉",],
        ["屏東市","三地門鄉","霧台鄉","瑪家鄉","九如鄉","里港鄉","高樹鄉","鹽埔鄉","長治鄉","麟洛鄉","竹田鄉","內埔鄉","萬丹鄉","潮州鎮","泰武鄉","來義鄉","萬巒鄉","崁頂鄉","新埤鄉","南州鄉","林邊鄉","東港鎮","琉球鄉","佳冬鄉","新園鄉","枋寮鄉","枋山鄉","春日鄉","獅子鄉","車城鄉","牡丹鄉","恆春鎮","滿州鄉",],
        ["台東市","綠島鄉","蘭嶼鄉","延平鄉","卑南鄉","鹿野鄉","關山鎮","海端鄉","池上鄉","東河鄉","成功鎮","長濱鄉","太麻里","金峰鄉","大武鄉","達仁鄉",],
        ["花蓮市","新城鄉","秀林鄉","吉安鄉","壽豐鄉","鳳林鎮","光復鄉","豐濱鄉","瑞穗鄉","萬榮鄉","玉里鎮","卓溪鄉","富里鄉",],
        ["南竿鄉", "北竿鄉", "莒光鄉", "東引鄉",]
      ]
    }
  },
  computed: {
    curretnDistrictList: function(){
      let countyIndex = this.countyList.indexOf(this.currentCounty);
      return this.districtList[countyIndex];
    }
  },
  methods: {

  },
})

//GoogleMap 嵌入估狗地圖
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