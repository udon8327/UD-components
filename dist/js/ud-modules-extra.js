/*
==================== Vue組件庫(Extra)目錄 ====================
Form
  Upload 上傳 -----> ud-upload
  ImageUpload 圖片上傳預覽 -----> ud-image-upload
  ImageMultiUpload 圖片上傳預覽(多張) -----> ud-image-multi-upload
  Form 表單 -----> ud-form
  Captcha 圖形驗證碼 -----> ud-captcha

Validation
  VfCaptcha 圖形驗證碼 -----> vf-captcha
  VfDateGroup 日期群組驗證 -----> vf-date-group
  VfAddressGroup 地址群組驗證 -----> vf-address-group

Data
  Table 表格 -----> ud-table
  Pagination 分頁 -----> ud-pagination

Layout

Notice
  Notify 通知訊息 -----> ud-notify
  Popover 氣泡框 -----> ud-popover

Tools
  CountdownExpire 倒數計時(時限) -----> ud-countdown-expire
  Countdown 倒數計時 -----> ud-countdown
  QrCode 取得QRcode圖片 -----> ud-qrcode

Application
  Carousel 圖片輪播 -----> ud-carousel
  Youtube 水管播放 -----> ud-youtube
  YoutubeApi 水管播放(控制版) -----> ud-youtube-api
  GoogleMap 估狗地圖 -----> ud-google-map
  Select2 搜尋下拉框 -----> ud-select2
  Scratch 刮刮樂 -----> ud-scratch
  Editor 文字編輯器 -----> ud-editor
*/
//-----------------------Form-----------------------
// Upload 上傳
Vue.component('ud-upload', {
    name: "UdUpload",
    template: "\n\n  ",
    props: {},
});
// ImageUpload 圖片上傳預覽
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
// ImageMultiUpload 圖片上傳預覽(多張)
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
// Form 表單
Vue.component('ud-form', {
    name: "UdForm",
    template: "\n\n  ",
    props: {},
});
// Captcha 圖形驗證碼
Vue.component('ud-captcha', {
    name: "UdCaptcha",
    template: "\n    <div class=\"ud-captcha\">\n      <div class=\"canvas-area\" ref=\"canvasArea\">\n        <canvas id=\"verify-canvas\" width=\"100\" height=\"48\" style=\"display: none;\"></canvas>\n        <img ref=\"codeimg\" @click=\"refresh\">\n        <input type=\"hidden\" v-model=\"inputVal\">\n      </div>\n      <div class=\"refresh\" @click=\"refresh\" v-if=\"!noRefresh\">\n        <i class=\"fas fa-sync-alt\" id=\"refresh\"></i>\n      </div>\n    </div>\n  ",
    computed: {
        inputVal: {
            get: function () { return this.value; },
            set: function (val) { this.$emit('input', val); }
        }
    },
    props: {
        value: String,
        color: { default: "#333" },
        bgColor: { default: "#fff" },
        randomColor: { default: "#777" },
        font: { default: "25px Arial" },
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
// VfCaptcha 圖形驗證碼
Vue.component('vf-captcha', {
    name: "VfCaptcha",
    template: "\n    <div class=\"vf-captcha\">\n      <div class=\"canvas-area\" ref=\"canvasArea\">\n        <canvas id=\"verify-canvas\" width=\"100\" height=\"48\" style=\"display: none;\"></canvas>\n        <img ref=\"codeimg\" @click=\"refresh\">\n        <input type=\"hidden\" v-model=\"inputVal\">\n      </div>\n      <div class=\"refresh\" @click=\"refresh\" v-if=\"!noRefresh\">\n        <i class=\"fas fa-sync-alt\" id=\"refresh\"></i>\n      </div>\n    </div>\n  ",
    computed: {
        inputVal: {
            get: function () { return this.value; },
            set: function (val) { this.$emit('input', val); }
        }
    },
    props: {
        value: String,
        color: { default: "#333" },
        bgColor: { default: "#fff" },
        randomColor: { default: "#777" },
        font: { default: "25px Arial" },
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
// DateGroup 日期群組驗證
Vue.component('vf-date-group', {
    name: "VfDateGroup",
    template: "\n    <div class=\"vf-date-select\">\n      <select name=\"year\" ref=\"year\"></select>\n      <p>\u5E74</p>\n      <select name=\"month\" ref=\"month\"></select>\n      <p>\u6708</p>\n      <select name=\"date\" ref=\"date\"></select>\n      <p>\u65E5</p>\n    </div>\n  ",
    props: {
        roc: Boolean //民國
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
// VfAddressGroup 地址群組驗證
Vue.component('vf-address-group', {
    name: "VfAddressGroup",
    template: "\n    <div class=\"vf-address-group\">\n      <ud-flex v-if=\"!inputOnly\">\n        <formulate-input \n          type=\"select\"\n          name=\"county\"\n          placeholder=\"\u7E23\u5E02\"\n          :options=\"countyOptions\"\n          validation=\"required\"\n          :validation-messages=\"{required: '\u7E23\u5E02\u4E0D\u53EF\u70BA\u7A7A'}\"\n          @input=\"getCounty\"\n        >\n        </formulate-input>\n        <formulate-input\n          type=\"select\"\n          name=\"area\"\n          placeholder=\"\u9109\u586B\u5E02\u5340\"\n          :options=\"areaOptions\"\n          validation=\"required\"\n          :validation-messages=\"{required: '\u9109\u93AE\u5E02\u5340\u4E0D\u53EF\u70BA\u7A7A'}\"\n          @input=\"getArea\"\n          ref=\"area\"\n        >\n        </formulate-input>\n      </ud-flex>\n      <div v-if=\"!selectOnly\">\n        <formulate-input\n          type=\"text\"\n          name=\"address\"\n          placeholder=\"\u8ACB\u8F38\u5165\u5730\u5740\"\n          validation=\"required\"\n          :validation-messages=\"{required: '\u5730\u5740\u4E0D\u53EF\u70BA\u7A7A'}\"\n          ref=\"address\"\n        >\n        </formulate-input>\n      </div>\n    </div>\n  ",
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
// Table 表格
Vue.component('ud-table', {
    name: "UdTable",
    template: "\n\n  ",
    props: {},
});
// Pagination 分頁
Vue.component('ud-pagination', {
    name: "UdPagination",
    template: "\n\n  ",
    props: {},
});
//-----------------------Layout-----------------------
//-----------------------Notice-----------------------
// Notify 通知訊息
Vue.component('ud-notify', {
    name: "UdNotify",
    template: "\n\n  ",
    props: {},
});
// Popover 氣泡框
Vue.component('ud-popover', {
    name: "UdPopover",
    template: "\n\n  ",
    props: {},
});
//-----------------------Tools-----------------------
// CountdownExpire 倒數計時(時限)
Vue.component('ud-countdown-expire', {
    name: "UdCountdownExpire",
    template: "\n    <div>\u8DDD\u96E25\u670813\u865F 15\u9EDE0\u52060\u79D2 \u9084\u6709</div>\n    <i></i>\n    <i></i>\n    <i></i>\n  ",
    mounted: function () {
        var aI = document.getElementsByTagName("i");
        setInterval(function () {
            // 當前時間
            var time = new Date();
            var nowTime = time.getTime(); // 取得當前毫秒數
            // 設置結束時間 : 5月13號 15點0分0秒
            time.setMonth(4); // 取得當前 月份 (從 '0' 開始算)
            time.setDate(13); // 取得當前 日
            time.setHours(15); // 取得當前 時
            time.setMinutes(0); // 取得當前 分
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
// Countdown 倒數計時
Vue.component('ud-countdown', {
    name: "UdCountdown",
    template: "\n    <span class=\"ud-countdown\" ref=\"count\">{{cTime}}</span>\n  ",
    props: {
        time: { default: 60 },
        delay: Boolean // 延遲
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
// QrCode 取得QRcode圖片
Vue.component('ud-qrcode', {
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
//-----------------------Application-----------------------
//Carousel 圖片輪播
Vue.component('ud-carousel', {
    name: "udCarousel",
    template: "\n    <div class=\"ud-carousel\" ref=\"carousel\"\n      @mouseenter.stop=\"toggleTimer = false\"\n      @mouseleave.stop=\"toggleTimer = true\"\n      @touchstart.stop=\"touchStart\"\n      @touchmove.stop=\"touchMove\"\n      :style=\"'min-height:' + minHeight\">\n      <keep-alive>\n        <transition :name=\"carouselName\">\n          <div class=\"item\"\n            v-for=\"(item, index) in carousels\"\n            v-if=\"show == index\"\n            :key=\"index\"\n          >\n            <a :href=\"item.href\"><img :src=\"item.img\"/></a>\n          </div>\n        </transition>\n      </keep-alive>\n\n      <!-- arrows -->\n      <div class=\"arrows-group\" v-if=\"arrows\">\n        <a class=\"button-prev\" href=\"#\" @click.prevent=\"toPrev\">\n          <slot name=\"arrows-prev\">\n            <img src=\"//akveo.github.io/eva-icons/outline/png/128/arrow-ios-back-outline.png\"/>\n          </slot>\n        </a>\n        <a class=\"button-next\" href=\"#\" @click.prevent=\"toNext\">\n          <slot name=\"arrows-next\">\n            <img src=\"//akveo.github.io/eva-icons/outline/png/128/arrow-ios-forward-outline.png\"/>\n          </slot>\n        </a>\n      </div>\n\n      <!-- dots -->\n      <div class=\"dot-group\" v-if=\"dots\">\n        <a v-for=\"(l, index) in len\" href=\"#\"\n          :class=\"{ 'active': show == index }\"\n          @click.prevent=\"show = index\"\n        ></a>\n      </div>\n\n    </div>\n  ",
    props: {
        carousels: {
            type: Array
        },
        auto: {
            type: Boolean,
            default: false
        },
        delay: {
            type: Number,
            default: 3000
        },
        dots: {
            type: Boolean,
            default: true
        },
        arrows: {
            type: Boolean,
            default: true
        }
    },
    data: function () {
        return {
            carouselName: 'carousel-next',
            len: 0,
            show: 0,
            xDown: null,
            yDown: null,
            autoplay: false,
            toggleTimer: true,
            minHeight: 0 // 抓最小高度
        };
    },
    methods: {
        toNext: function () {
            this.carouselName = 'carousel-next';
            this.show + 1 >= this.len ? this.show = 0 : this.show = this.show + 1;
        },
        toPrev: function () {
            this.carouselName = 'carousel-prev';
            this.show - 1 < 0 ? this.show = this.len - 1 : this.show = this.show - 1;
        },
        // swiper event(for mobile)
        touchStart: function (e) {
            this.xDown = e.touches[0].clientX;
            this.yDown = e.touches[0].clientY;
        },
        touchMove: function (e) {
            var _this = this;
            if (!this.xDown || !this.yDown) {
                return;
            }
            var xUp = e.touches[0].clientX;
            var yUp = e.touches[0].clientY;
            var xDiff = this.xDown - xUp;
            var yDiff = this.yDown - yUp;
            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                xDiff > 0 ? _this.toNext() : _this.toPrev();
            }
            this.xDown = null;
            this.yDown = null;
        },
        // 自動輪播
        autoPlay: function () {
            var _this = this;
            setInterval(function () {
                if (_this.toggleTimer)
                    _this.toNext();
            }, this.delay);
        }
    },
    mounted: function () {
        var _this = this;
        this.len = this.carousels.length;
        if (this.len <= 1)
            this.arrows = false;
        if (this.auto)
            this.autoPlay();
        window.addEventListener('load', function () {
            _this.minHeight = _this.$refs.carousel.offsetHeight + 'px';
        });
    }
});
// Youtube 水管播放
Vue.component('ud-youtube', {
    name: "UdYoutube",
    template: "\n    <div class=\"ud-youtube\">\n      <div class=\"video-wrapper\">\n        <iframe width=\"560\" height=\"315\" :src=\"videoIdAfter\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n      </div>\n    </div>\n  ",
    props: {
        videoId: { default: "p6qjpdi8XuE" },
        start: { default: 0 },
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
// YoutubeApi 水管播放(控制版)
Vue.component('ud-youtube-api', {
    name: "UdYoutubeApi",
    template: "\n    <div class=\"ud-youtube-api\">\n      <div class=\"video-wrapper\">\n        <div :id=\"videoId\" ref=\"player\"></div>\n      </div>\n    </div>\n  ",
    props: {
        videoId: { default: "KnWMMgEDva0" },
        start: { default: 0 },
        width: { default: 560 },
        height: { default: 315 },
        autoplay: Boolean,
        loop: Boolean,
        noControl: Boolean,
        mute: Boolean // 開始時靜音
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
                    start: _this.start // 開始時間
                    // loop: _this.loop, // 讓影片循環播放
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
// GoogleMap 估狗地圖
Vue.component('ud-google-map', {
    name: "UdGoogleMap",
    template: "\n    <div class=\"ud-google-map\" :style=\"{'padding-bottom': ratio + '%'}\">\n      <iframe :src=\"src\" :width=\"width\" :height=\"height\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>\n    </div>\n  ",
    props: {
        src: { default: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1807.3065648309268!2d121.51520065825689!3d25.04719989599153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9727e339109%3A0xc34a31ce3a4abecb!2z6Ie65YyX6LuK56uZ!5e0!3m2!1szh-TW!2stw!4v1595920460513!5m2!1szh-TW!2stw" },
        width: { default: 600 },
        height: { default: 450 },
        ratio: { default: 65.25 } // 比例
    },
});
// Select2 搜尋下拉框套件
// dependencies:
//   "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
//   "https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css"
//   "https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js"
// reference:
//   https://select2.org
Vue.component('ud-select2', {
    name: "UdSelect2",
    template: "\n    <select2 :options=\"options\" v-model=\"selected\">\n      <option disabled value=\"0\">Select one</option>\n    </select2>\n  ",
    props: {
        value: { default: null },
        options: { default: null } // 選項
    },
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
// Scratch 刮刮樂
// dependencies:
//   "plugins/scratchcard/scratchcard.min.js"
// reference:
//   https://github.com/Masth0/ScratchCard
Vue.component('ud-scratch', {
    name: "UdScratch",
    template: "\n    <div class=\"ud-scratch\">\n      <div class=\"sc__wrapper\">\n        <div class=\"sc__container\" :id=\"id\"></div>\n      </div>\n    </div>\n  ",
    mounted: function () {
        this.initScratch();
    },
    props: {
        id: { default: "js--sud--container" },
        coverSrc: { default: "img/silver.jpg" },
        brushSrc: { default: "img/brush.png" },
        prizeSrc: { default: "img/prize_01.jpg" },
        aspectRatio: { default: 1.65 },
        percent: { default: 10 },
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
                    _this.$emit("finish"); // 刮完事件
                }
            });
            sc.init().then(function () {
                sc.canvas.addEventListener('scratch.move', function () {
                    _this.$emit("move", Math.floor(sc.getPercent())); // 移動中事件(帶百分比)
                });
            }).catch(function (error) {
                alert(error.message);
            });
        }
    },
});
// Editor 文字編輯器
Vue.component('ud-editor', {
    name: "UdEditor",
    template: '<h1>文案編輯器</h1>'
});
//-----------------------開發區-----------------------
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
Vue.directive('focus', {
    inserted: function (el) {
        el.focus();
    }
});
// ================= 表單驗證組件開發 =================
Vue.component('va-input', {
    template: "\n    <div class=\"va-input\">\n      <input :value=\"value\" @input=\"onInput\" v-bind=\"$attrs\">\n    </div>\n  ",
    inheritAttrs: false,
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    methods: {
        onInput: function (e) {
            this.$emit('input', e.target.value);
            // 通知FormItem校验
            this.$parent.$emit('validate');
        }
    }
});
Vue.component('va-form-item', {
    template: "\n    <div class=\"va-form-item\">\n      <label v-if=\"label\">{{ label }}</label>\n      <slot></slot>\n      <p v-if=\"errorMessage\">{{ errorMessage }}</p>\n    </div>\n  ",
    data: function () {
        return {
            errorMessage: ''
        };
    },
    inject: ["form"],
    props: {
        label: {
            type: String,
            default: ''
        },
        prop: {
            type: String
        }
    },
    mounted: function () {
        var _this = this;
        this.$on('validate', function () {
            _this.validate();
        });
    },
    methods: {
        validate: function () {
            //执行组件校验
            //1.获取校验规则
            var rules = this.form.rules[this.prop];
            //2.获取数据
            var value = this.form.model[this.prop];
            //3.执行校验 参数2是校验错误对象数组
            //   返回的Promise<boolean>
            var desc = (_a = {},
                _a[this.prop] = rules,
                _a);
            var _a;
            // if(errors){
            //   this.errorMessage = errors[0].message;
            // }else{
            //   this.errorMessage = "";
            // }
            // const schema = new Schema(desc);
            // //参数1是值
            // schema.validate({[this.prop]:value}, errors => {
            //   if (errors) {
            //     //有错
            //     this.errorMessage = errors[0].message;
            //   } else {
            //     //没错，清除错误信息
            //     this.errorMessage = "";
            //   }
            // })
        }
    }
});
Vue.component('va-form', {
    template: "\n    <div class=\"va-form\">\n      <slot></slot>\n    </div>\n  ",
    provide: function () {
        return {
            form: this //传递Form实例给后代，比如FormItem用来校验
        };
    },
    props: {
        model: {
            type: Object,
            required: true
        },
        rules: {
            type: Object
        }
    },
    methods: {
        validate: function (cb) {
            var tasks = this.$children.filter(function (item) { return item.prop; }).map(function (item) { return item.validate(); });
            Promise.all(tasks)
                .then(function () { return cb(true); })
                .then(function () { return cb(false); });
        }
    }
});
//# sourceMappingURL=ud-modules-extra.js.map