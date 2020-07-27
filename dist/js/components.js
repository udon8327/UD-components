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
  Scratch 刮刮樂 -----> ud-scratch
  CountdownDeadline 倒數計時(有時限) -----> ud-countdown-deadline
  Countdown 倒數計時(無時限) -----> ud-countdown
  DateSelect 日期下拉選擇 -----> ud-date-select
  AddressSelect 地址下拉選擇 -----> ud-address-select
*/
//-----------------------Basic-----------------------
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
//-----------------------Form-----------------------
//Radio 單選框
Vue.component('ud-radio', {
    name: "UdRadio",
    template: "\n    <label class=\"ud-radio\">\n      <input\n        type=\"radio\"\n        :checked=\"checked\"\n        :value=\"label\"\n        @change=\"$emit('change', $event.target.checked)\"\n      >\n      <slot></slot>\n      <template v-if=\"!$slots.default\">{{ label }}</template>\n    </label>\n  ",
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: ['label', 'checked']
});
//Checkbox 多選框
Vue.component('ud-checkbox', {
    name: "UdCheckbox",
    template: "\n    <input\n      class=\"ud-checkbox\"\n      type=\"checkbox\"\n      :checked=\"checked\"\n      :name=\"name\"\n      @change=\"$emit('change', $event.target.checked)\"\n    >\n  ",
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
});
//Input 輸入框
Vue.component('ud-input', {
    name: 'UdInput',
    template: "\n    <input\n      class=\"ud-input\"\n      type=\"text\"\n      :placeholder=\"placeholder\"\n      :required=\"required\"\n      :value=\"value\"\n      :name=\"name\"\n      @input=\"$emit('input', $event.target.value)\"\n    >\n  ",
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
    methods: {},
});
//Textarea 多行輸入框
Vue.component('ud-textarea', {
    name: "UdTextarea",
    template: "\n    <textarea\n      class=\"ud-textarea\"\n      :cols=\"cols\"\n      :rows=\"rows\"\n      :placeholder=\"placeholder\"\n      :required=\"required\"\n      :value=\"value\"\n      :name=\"name\"\n      @input=\"$emit('input', $event.target.value)\"\n    >\n    </textarea>\n  ",
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
    methods: {},
});
//通用select表單
Vue.component('ud-select', {
    name: "UdSelect",
    template: "\n    <select\n      class=\"ud-select\"\n      type=\"select\"\n      :checked=\"checked\"\n      :name=\"name\"\n      @change=\"$emit('change', $event.target.selected)\"\n    >\n      <option value=\"A\">\u9078\u9805A</option>\n      <option value=\"B\">\u9078\u9805B</option>\n      <option value=\"C\">\u9078\u9805C</option>\n    </select>\n  ",
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
});
//Switch 開關
Vue.component('ud-switch', {
    name: "UdSwitch",
    template: "\n\n  ",
    props: {},
});
//Upload 上傳
Vue.component('ud-upload', {
    name: "UdLoad",
    template: "\n\n  ",
    props: {},
});
//Form 表單
Vue.component('ud-form', {
    name: "UdForm",
    template: "\n\n  ",
    props: {},
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
//-----------------------Notice-----------------------
//Alert 警告
Vue.component('ud-alert', {
    name: "UdAlert",
    template: "\n\n  ",
    props: {},
});
//Loading 加載
Vue.component('ud-loading', {
    name: "UdLoading",
    template: "\n    <transition name=\"loading\" >\n      <div class=\"mask\" @touchmove.stop.prevent v-show=\"visible\">\n        <div class=\"showContent\">\n          <i class=\"fas fa-spinner fa-pulse\" v-if=\"loading\"></i>\n          <image src=\"../static/img/loading1.gif\" class=\"loadingImg\"></image>\n          <text class=\"lable\">{{label}}</text>\n        </div>\n      </div>\n    </transition>\n  ",
    data: function () {
        return {
            visible: false
        };
    },
    props: {
        type: {},
        label: {
            default: "加載中...",
            type: String
        }
    }
});
//Message 消息提示
Vue.component('ud-message', {
    name: "UdMessage",
    template: "\n\n  ",
    props: {},
});
//MessageBox 彈框
Vue.component('ud-messagebox', {
    name: "UdMessage",
    template: "\n\n  ",
    props: {},
});
//Notification 通知
Vue.component('ud-notification', {
    name: "UdNotification",
    template: "\n\n  ",
    props: {},
});
//-----------------------Navigation-----------------------
//-----------------------Others-----------------------
//Dialog 對話框
Vue.component('ud-dialog', {
    name: "UdDialog",
    template: "\n\n  ",
    props: {},
});
//Popover 彈出框
Vue.component('ud-popover', {
    name: "UdPopover",
    template: "\n\n  ",
    props: {},
});
//Popconfirm 氣泡確認框
Vue.component('ud-popconfirm', {
    name: "Udpopconfirm",
    template: "\n\n  ",
    props: {},
});
//Carousel 走馬燈
Vue.component('ud-carousel', {
    name: "UdCarousel",
    template: "\n\n  ",
    props: {},
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
//-----------------------Personal-----------------------
//圖形驗證碼
Vue.component('ud-captcha', {
    template: "\n    <div class=\"ud-captcha\">\n      <canvas id=\"verify-canvas\" ref=\"verifyCanvas\" width=\"126\" height=\"48\"></canvas>\n      <img id=\"captcha-img\" ref=\"captchaImg\">\n      <input id=\"verify-hidden\" ref=\"verifyHidden\" type=\"hidden\" v-model=\"verify\">\n      <div id=\"refresh\" ref=\"refresh\" v-if=\"hasRefresh\">\n        <i class=\"refresh fas fa-synud-alt\"></i>\n      </div>\n    </div>\n  ",
    mounted: function () {
        this.captchaInit();
    },
    data: function () {
        return {
            verify: "",
        };
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
        captchaInit: function () {
            var verifyValue;
            var nums = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz".split("");
            var vm = this;
            drawCode();
            //繪製驗證碼
            function drawCode() {
                var canvas = vm.$refs.verifyCanvas; //獲取HTML端畫布
                var context = canvas.getContext("2d"); //獲取畫布2D上下文
                context.fillStyle = vm.bgColor; //畫布填充色
                context.fillRect(0, 0, canvas.width, canvas.height); //清空畫布
                context.fillStyle = vm.color; //設置字體顏色
                context.font = vm.font; //設置字體
                var rand = new Array();
                var x = new Array();
                var y = new Array();
                for (var i = 0; i < 4; i++) {
                    rand[i] = nums[Math.floor(Math.random() * nums.length)];
                    x[i] = i * 16 + 10;
                    y[i] = Math.random() * 20 + 20;
                    context.fillText(rand[i], x[i], y[i]);
                }
                verifyValue = rand.join('').toLowerCase();
                vm.verify = verifyValue;
                //畫3條隨機線
                if (!vm.noLine) {
                    for (var i = 0; i < 3; i++) {
                        drawline(canvas, context);
                    }
                }
                //畫30個隨機點
                if (!vm.noDots) {
                    for (var i = 0; i < 30; i++) {
                        drawDot(canvas, context);
                    }
                }
                convertCanvasToImage(canvas);
            }
            //隨機線
            function drawline(canvas, context) {
                context.moveTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)); //随机线的起点x坐标是画布x坐标0位置，y坐标是画布高度的随机数
                context.lineTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)); //随机线的终点x坐标是画布宽度，y坐标是画布高度的随机数
                context.lineWidth = 0.5; //隨機線寬
                context.strokeStyle = vm.lineColor; //隨機線描邊屬性
                context.stroke(); //描邊，即起點描到終點
            }
            //隨機點(所謂畫面其實就是畫1px像素的線)
            function drawDot(canvas, context) {
                var px = Math.floor(Math.random() * canvas.width);
                var py = Math.floor(Math.random() * canvas.height);
                context.moveTo(px, py);
                context.lineTo(px + 1, py + 1);
                context.lineWidth = 0.2;
                context.stroke();
            }
            //繪製圖片
            function convertCanvasToImage(canvas) {
                vm.$refs.verifyCanvas.style.display = "none";
                var image = vm.$refs.captchaImg;
                image.src = canvas.toDataURL("image/png");
                return image;
            }
            //點擊圖片刷新
            vm.$refs.captchaImg.onclick = function () {
                $('#verify-canvas').remove();
                $('#verify').after('<canvas width="126" height="48" id="verify-canvas"></canvas>');
                drawCode();
            };
            vm.$refs.refresh.onclick = function () {
                $('#verify-canvas').remove();
                $('#verify').after('<canvas width="126" height="48" id="verify-canvas"></canvas>');
                drawCode();
            };
        }
    }
});
//文字省略
Vue.component('ud-ellipsis', {
    template: '<p class="ud-ellipsis" :style="{webkitLineClamp: maxLine }"><slot></slot></p>',
    props: {
        maxLine: {
            type: Number,
            default: 1,
        }
    },
});
//Youtube 水管播放
Vue.component('ud-youtube', {
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
//Scratch 刮刮樂
//dependencies："plugins/scratchcard/scratchcard.min.js"(https://github.com/Masth0/ScratchCard)
Vue.component('ud-scratch', {
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
//CountdownDeadline 倒數計時(有時限)
Vue.component('ud-countdown-deadline', {
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
//Countdown 倒數計時(無時限)
Vue.component('ud-countdown', {
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
//DateSelect 日期下拉選擇
Vue.component('ud-date-select', {
    name: "UdDateSelect",
    template: "\n    <div class=\"ud-date-select\">\n      <select name=\"year\" ref=\"year\"></select>\n      <p>\u5E74</p>\n      <select name=\"month\" ref=\"month\"></select>\n      <p>\u6708</p>\n      <select name=\"date\" ref=\"date\"></select>\n      <p>\u65E5</p>\n    </div>\n  ",
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
//AddressSelect 地址下拉選擇
Vue.component('ud-address-select', {
    template: "\n    <div class=\"ud-address-select\">\n      <p>\u7E23\u5E02</p>\n      <select name=\"county\" ref=\"county\" v-model=\"currentCounty\">\n        <option disabled selected value=\"\">\u8ACB\u9078\u64C7\u7E23\u5E02</option>\n        <option v-for=\"county in countyList\" :value=\"county\" :key=\"county\">{{ county }}</option>\n      </select>\n      <p>\u9109\u586B\u5E02\u5340</p>\n      <select name=\"district\" ref=\"district\">\n        <option disabled selected value=\"\">\u8ACB\u9078\u64C7\u9109\u586B\u5E02\u5340</option>\n        <option v-for=\"district in curretnDistrictList\" :value=\"district\" :key=\"district\">{{ district }}</option>\n      </select>\n    </div>\n  ",
    data: function () {
        return {
            currentCounty: "",
            countyList: ["台北市", "基隆市", "新北市", "宜蘭縣", "桃園市", "新竹市", "新竹縣", "苗栗縣", "台中市", "彰化縣", "南投縣", "嘉義市", "嘉義縣", "雲林縣", "台南市", "高雄市", "澎湖縣", "金門縣", "屏東縣", "台東縣", "花蓮縣", "連江縣"],
            districtList: [
                ["中正區", "大同區", "中山區", "松山區", "大安區", "萬華區", "信義區", "士林區", "北投區", "內湖區", "南港區", "文山區",],
                ["仁愛區", "信義區", "中正區", "中山區", "安樂區", "暖暖區", "七堵區",],
                ["萬里區", "金山區", "板橋區", "汐止區", "深坑區", "石碇區", "瑞芳區", "平溪區", "雙溪區", "貢寮區", "新店區", "坪林區", "烏來區", "永和區", "中和區", "土城區", "三峽區", "樹林區", "鶯歌區", "三重區", "新莊區", "泰山區", "林口區", "蘆洲區", "五股區", "八里區", "淡水區", "三芝區", "石門區",],
                ["宜蘭市", "頭城鎮", "礁溪鄉", "壯圍鄉", "員山鄉", "羅東鎮", "三星鄉", "大同鄉", "五結鄉", "冬山鄉", "蘇澳鎮", "南澳鄉", "釣魚台列嶼",],
                ["中壢區", "平鎮區", "龍潭區", "楊梅區", "新屋區", "觀音區", "桃園區", "龜山區", "八德區", "大溪區", "復興區", "大園區", "蘆竹區",],
                ["東區", "北區", "香山區",],
                ["竹北市", "湖口鄉", "新豐鄉", "新埔鎮", "關西鎮", "芎林鄉", "寶山鄉", "竹東鎮", "五峰鄉", "橫山鄉", "尖石鄉", "北埔鄉", "峨眉鄉",],
                ["竹南鎮", "頭份市", "三灣鄉", "南庄鄉", "獅潭鄉", "後龍鎮", "通霄鎮", "苑裡鎮", "苗栗市", "造橋鄉", "頭屋鄉", "公館鄉", "大湖鄉", "泰安鄉", "銅鑼鄉", "三義鄉", "西湖鄉", "卓蘭鎮",],
                ["中區", "東區", "南區", "西區", "北區", "北屯區", "西屯區", "南屯區", "太平區", "大里區", "霧峰區", "烏日區", "豐原區", "后里區", "石岡區", "東勢區", "和平區", "新社區", "潭子區", "大雅區", "神岡區", "大肚區", "沙鹿區", "龍井區", "梧棲區", "清水區", "大甲區", "外埔區", "大安區",],
                ["彰化市", "芬園鄉", "花壇鄉", "秀水鄉", "鹿港鎮", "福興鄉", "線西鄉", "和美鎮", "伸港鄉", "員林市", "社頭鄉", "永靖鄉", "埔心鄉", "溪湖鎮", "大村鄉", "埔鹽鄉", "田中鎮", "北斗鎮", "田尾鄉", "埤頭鄉", "溪州鄉", "竹塘鄉", "二林鎮", "大城鄉", "芳苑鄉", "二水鄉",],
                ["南投市", "中寮鄉", "草屯鎮", "國姓鄉", "埔里鎮", "仁愛鄉", "名間鄉", "集集鎮", "水里鄉", "魚池鄉", "信義鄉", "竹山鎮", "鹿谷鄉",],
                ["東區", "西區",],
                ["番路鄉", "梅山鄉", "竹崎鄉", "阿里山", "中埔鄉", "大埔鄉", "水上鄉", "鹿草鄉", "太保市", "朴子市", "東石鄉", "六腳鄉", "新港鄉", "民雄鄉", "大林鎮", "溪口鄉", "義竹鄉", "布袋鎮",],
                ["斗南鎮", "大埤鄉", "虎尾鎮", "土庫鎮", "褒忠鄉", "東勢鄉", "台西鄉", "崙背鄉", "麥寮鄉", "斗六市", "林內鄉", "古坑鄉", "莿桐鄉", "西螺鎮", "二崙鄉", "北港鎮", "水林鄉", "口湖鄉", "四湖鄉", "元長鄉",],
                ["中西區", "東區", "南區", "北區", "安平區", "安南區", "永康區", "歸仁區", "新化區", "左鎮區", "玉井區", "楠西區", "南化區", "仁德區", "關廟區", "龍崎區", "官田區", "麻豆區", "佳里區", "西港區", "七股區", "將軍區", "學甲區", "北門區", "新營區", "後壁區", "白河區", "東山區", "六甲區", "下營區", "柳營區", "鹽水區", "善化區", "大內區", "山上區", "新市區", "安定區",],
                ["新興區", "前金區", "苓雅區", "鹽埕區", "鼓山區", "旗津區", "前鎮區", "三民區", "楠梓區", "小港區", "左營區", "仁武區", "大社區", "東沙群島", "南沙群島", "岡山區", "路竹區", "阿蓮區", "田寮區", "燕巢區", "橋頭區", "梓官區", "彌陀區", "永安區", "湖內區", "鳳山區", "大寮區", "林園區", "鳥松區", "大樹區", "旗山區", "美濃區", "六龜區", "內門區", "杉林區", "甲仙區", "桃源區", "那瑪夏區", "茂林區", "茄萣區",],
                ["馬公市", "西嶼鄉", "望安鄉", "七美鄉", "白沙鄉", "湖西鄉",],
                ["金沙鎮", "金湖鎮", "金寧鄉", "金城鎮", "烈嶼鄉", "烏坵鄉",],
                ["屏東市", "三地門鄉", "霧台鄉", "瑪家鄉", "九如鄉", "里港鄉", "高樹鄉", "鹽埔鄉", "長治鄉", "麟洛鄉", "竹田鄉", "內埔鄉", "萬丹鄉", "潮州鎮", "泰武鄉", "來義鄉", "萬巒鄉", "崁頂鄉", "新埤鄉", "南州鄉", "林邊鄉", "東港鎮", "琉球鄉", "佳冬鄉", "新園鄉", "枋寮鄉", "枋山鄉", "春日鄉", "獅子鄉", "車城鄉", "牡丹鄉", "恆春鎮", "滿州鄉",],
                ["台東市", "綠島鄉", "蘭嶼鄉", "延平鄉", "卑南鄉", "鹿野鄉", "關山鎮", "海端鄉", "池上鄉", "東河鄉", "成功鎮", "長濱鄉", "太麻里", "金峰鄉", "大武鄉", "達仁鄉",],
                ["花蓮市", "新城鄉", "秀林鄉", "吉安鄉", "壽豐鄉", "鳳林鎮", "光復鄉", "豐濱鄉", "瑞穗鄉", "萬榮鄉", "玉里鎮", "卓溪鄉", "富里鄉",],
                ["南竿鄉", "北竿鄉", "莒光鄉", "東引鄉",]
            ]
        };
    },
    computed: {
        curretnDistrictList: function () {
            var countyIndex = this.countyList.indexOf(this.currentCounty);
            return this.districtList[countyIndex];
        }
    },
    methods: {},
});
//-----------------------開發區-----------------------
//通用通知
Vue.component('ud-notify', {
    template: "\n    <div :class=\"type\" class=\"ud-notify\">\n      <i :class=\"iconClass\" class=\"icon fl\"/>\n      <span>{{ msg }}</span>\n      <span class=\"close fr eqf-no\" @click=\"close\"></span>\n    </div>\n  ",
    props: {
        type: {
            type: String,
            default: ''
        },
        msg: {
            type: String,
            default: ''
        }
    },
    computed: {
        iconClass: function () {
            switch (this.type) {
                case 'success':
                    return 'eqf-info-f';
                case 'fail':
                    return 'eqf-no-f';
                case 'info':
                    return 'eqf-info-f';
                case 'warn':
                    return 'eqf-alert-f';
            }
        }
    },
    mounted: function () {
        var _this = this;
        setTimeout(function () { return _this.close(); }, 4000);
    },
    methods: {
        close: function () {
        }
    }
});
//modal彈窗
Vue.component('ud-modal', {
    template: "\n    <transition name=\"fade\">\n      <div class=\"ud-modal\">\n        <div class=\"modal-wrapper\">\n          <div class=\"modal-content\">\n            <slot></slot>\n          </div>\n        </div>\n      </div>\n    </transition>\n  ",
});
Vue.component('ud-modal-2', {
    template: "\n    <transition name=\"modal\">\n      <div class=\"modal-mask ud-modal-2\">\n        <div class=\"modal-wrapper\">\n          <div class=\"modal-container\">\n            <div class=\"modal-header\">\n              <slot name=\"header\">\n                default header\n              </slot>\n            </div>\n            <div class=\"modal-body\">\n              <slot name=\"body\">\n                default body\n              </slot>\n            </div>\n            <div class=\"modal-footer\">\n              <slot name=\"footer\">\n                default footer\n                <ud-button class=\"modal-default-button\" @click=\"$emit('close')\">\n                  OK\n                </ud-button>\n              </slot>\n            </div>\n          </div>\n        </div>\n      </div>\n    </transition>\n  ",
});
//圖片上傳預覽
Vue.component('ud-image-upload', {
    template: "\n    <div class=\"ud-image-upload\">\n      <input type=\"file\" accept=\"image/*\" ref=\"input\" @change=\"previewImage\">\n      <template v-if=\"preview\">\n        <div class=\"image-preview\">\n          <img :src=\"preview\" class=\"img-fluid\" />\n          <div class=\"image-info\">\n            <p>\u6A94\u6848\u540D\u7A31\uFF1A{{ image.name }}</p>\n            <p>\u6A94\u6848\u5927\u5C0F\uFF1A{{ parseInt(image.size/1024) }}KB</p>\n          </div>\n        </div>\n        <ud-button @click=\"reset\">\u522A\u9664\u5716\u7247</ud-button>\n      </template>\n    </div>\n  ",
    data: function () {
        return {
            preview: "",
            image: "",
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
//圖片上傳預覽(多張)
Vue.component('ud-image-upload-multiple', {
    template: "\n    <div class=\"ud-image-upload-multiple\">\n      <input type=\"file\" accept=\"image/*\" multiple=\"multiple\" ref=\"input\" @change=\"previewMultiImage\">\n      <template v-if=\"preview_list.length\">\n        <div class=\"image-preview\">\n          <div v-for=\"item, index in preview_list\" :key=\"index\">\n            <img :src=\"item\"/>\n            <div class=\"image-info\">\n              <p>\u6A94\u6848\u540D\u7A31\uFF1A{{ image_list[index].name }}</p>\n              <p>\u6A94\u6848\u5927\u5C0F\uFF1A{{ parseInt(image_list[index].size/1024) }}KB</p>\n            </div>\n          </div>\n          <ud-button @click=\"reset\">\u522A\u9664\u5716\u7247</ud-button>\n        </div>\n      </template>\n    </div>\n  ",
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
//hm-radio
Vue.component('hm-radio', {
    template: "\n    <label class=\"hm-radio\" :class=\"{'is-checked': model === label}\">\n      <span class=\"hm-radio__input\">\n        <span class=\"hm-radio__inner\"></span>\n        <input\n          class=\"hm-radio__original\"\n          type=\"radio\"\n          :name=\"name\"\n          value=\"label\"\n          v-model=\"model\"\n        >\n      </span>\n      <span class=\"hm-radio__label\">\n        <slot></slot>\n        <template v-if=\"!$slots.default\">{{label}}</template>\n      </span>\n    </label>\n  ",
    props: {
        label: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        value: {
            type: [String, Boolean, Number],
            default: ''
        }
    },
    computed: {
        model: {
            get: function () {
                return this.value;
            },
            set: function (value) {
                this.$emit('input', value);
            }
        }
    },
});
Vue.component('ui-radio', {
    template: "\n    <label class=\"ui-radio\" :class=\"{'checked':model==value,'disabled':disabled}\">\n      <input type=\"radio\" ref=\"radio\" :value=\"value\" @click=\"updateVal\" :disabled=\"disabled\">\n    </label>\n  ",
    model: {
        prop: 'model',
        event: 'change'
    },
    props: {
        value: {
            type: [String, Number],
            require: true
        },
        model: {
            type: [String, Number],
            require: true
        },
        checked: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    mounted: function () {
        if (this.checked === true)
            this.updateVal();
    },
    methods: {
        updateVal: function () {
            this.$emit('change', this.$refs.radio.value);
        }
    }
});
//# sourceMappingURL=components.js.map
//# sourceMappingURL=components.js.map