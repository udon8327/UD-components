/* Vue組件目錄
Basic
  Layout 布局
  Container 布局容器
  Color 色彩
  Typography 字體
  Border 邊框
  Icon 圖標
  Button 按鈕 -------------------------> ud-button
  Link 文字鏈接

Form
  Radio 單選框 ------------------------> ud-radio
  Checkbox 多選框 ---------------------> ud-checkbox
  Input 輸入框 ------------------------> ud-input
  InputNumber 計數器
  Select 選擇器 -----------------------> ud-select
  Cascader 級聯選擇器
  Switch 開關 -------------------------> ud-switch
  Slider 滑塊
  TimePicker 時間選擇器
  DatePicker 日期選擇器
  DateTimePicker 日期時間選擇器
  Upload 上傳 -------------------------> ud-upload
  Rate 評分
  ColorPicker 顏色選擇器
  Transfer 穿梭框
  Form 表單 ---------------------------> ud-form

Data
  Table 表格 --------------------------> ud-table
  Tag 標簽
  Progress 進度條
  Tree 樹形控件
  Pagination 分頁 ---------------------> ud-table
  Badge 標記
  Avatar 頭像

Notice
  Alert 警告 --------------------------> ud-alert
  Loading 加載 ------------------------> ud-loading
  Message 消息提示 ---------------------> ud-message
  MessageBox 彈框 ---------------------> ud-messagebox
  Notification 通知 -------------------> ud-notification

Navigation
  NavMenu 導航菜單
  Tabs 標簽頁
  Breadcrumb 面包屑
  PageHeader 頁頭
  Dropdown 下拉菜單
  Steps 步驟條

Others
  Dialog 對話框 ------------------------> ud-dialog
  Tooltip 文字提示
  Popover 彈出框 -----------------------> ud-popover
  Popconfirm 氣泡確認框 -----------------> ud-popconfirm
  Card 卡片
  Carousel 走馬燈
  Collapse 折疊面板
  Timeline 時間線
  Divider 分割線
  Calendar 日歷
  Image 圖片
  Backtop 回到頂部 ----------------------> ud-backtop
  InfiniteScroll 無限滾動
  Drawer 抽屜

Personal
  Captcha 圖形驗證碼 ---------------------> ud-captcha
  Ellipsis 文字省略 ----------------------> ud-ellipsis
  Youtube 水管播放 -----------------------> ud-youtube
  YoutubeApi 水管播放(控制版) -------------> ud-youtube-api
  Scratch 刮刮樂 -------------------------> ud-scratch
  CountdownDeadline 倒數計時(有時限) ------> ud-countdown-deadline
  Countdown 倒數計時(無時限) --------------> ud-countdown
*/
//通用按鈕
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
//通用input表單
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
//通用textarea表單
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
//通用radio表單
Vue.component('ud-radio', {
    name: "UdRadio",
    template: "\n    <label class=\"ud-radio\">\n      <input\n        type=\"radio\"\n        :checked=\"checked\"\n        :value=\"label\"\n        @change=\"$emit('change', $event.target.checked)\"\n      >\n      <slot></slot>\n      <template v-if=\"!$slots.default\">{{ label }}</template>\n    </label>\n  ",
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: ['label', 'checked']
});
//通用radio表單
Vue.component('hm-radio', {
    template: "\n    <label class=\"hm-radio\" :class=\"{'is-checked': model === label}\">\n      <span class=\"hm-radio__input\">\n        <span class=\"hm-radio__inner\"></span>\n        <input\n          class=\"hm-radio__original\"\n          type=\"radio\"\n          :name=\"name\"\n          value=\"label\"\n          v-model=\"model\"\n        >\n      </span>\n      <span class=\"hm-radio__label\">\n        <slot></slot>\n        <template v-if=\"!$slots.default\">{{label}}</template>\n      </span>\n    </label>\n  ",
    model: {
        prop: 'checked',
        event: 'change'
    },
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
//通用checkbox表單
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
//播放Youtube影片(無控制版)
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
//播放Youtube影片(可控制版)
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
//回頂部
Vue.component('ud-backtop', {
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
//刮刮樂(引入套件：plugins/scratchcard/scratchcard.min.js)
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
//倒數計時(有期限)
// Vue.component('ud-countdown-deadline', {
//   template: `
//     <div>距離5月13號 15點0分0秒 還有</div>
//     <i></i>
//     <i></i>
//     <i></i>
//   `,
//   mounted() {
//     let aI = document.getElementsByTagName("i");
//     setInterval(function() {  // 設置倒數計時: 結束時間 - 當前時間
//       // 當前時間
//       let time = new Date();
//       let nowTime = time.getTime(); // 獲取當前毫秒數
//       // 設置結束時間 : 5月13號 15點0分0秒
//       time.setMonth(4); //   獲取當前 月份 (從 '0' 開始算)
//       time.setDate(13); //   獲取當前 日
//       time.setHours(15); //   獲取當前 時
//       time.setMinutes(0); //   獲取當前 分
//       time.setSeconds(0);
//       let endTime = time.getTime();
//       // 倒數計時: 差值
//       let offsetTime = (endTime - nowTime) / 1000; // ** 以秒為單位
//       let sec = parseInt(offsetTime % 60); // 秒
//       let min = parseInt((offsetTime / 60) % 60); // 分 ex: 90秒
//       let hr = parseInt(offsetTime / 60 / 60); // 時
//       aI[0].textContent = hr + "時";
//       aI[1].textContent = min + "分";
//       aI[2].textContent = sec + "秒";
//     }, 1000);
//   },
// })
//倒數計時(無期限)
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
Vue.component('ud-loading', {
    template: "\n    <transition name=\"loading\" >\n      <div class=\"mask\" @touchmove.stop.prevent v-show=\"visible\">\n        <div class=\"showContent\">\n          <i class=\"fas fa-spinner fa-pulse\" v-if=\"loading\"></i>\n          <image src=\"../static/img/loading1.gif\" class=\"loadingImg\"></image>\n          <text class=\"lable\">{{label}}</text>\n        </div>\n      </div>\n    </transition>\n  ",
    name: 'loading',
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
//# sourceMappingURL=components.js.map
//# sourceMappingURL=components.js.map