declare var $: (selector: string) => any;

/*
==================== Vue組件庫(Extra)目錄 ====================
Form
  Upload 上傳 -----> ud-upload
  ImageUpload 圖片上傳預覽 -----> ud-image-upload
  ImageMultiUpload 圖片上傳預覽(多張) -----> ud-image-multi-upload
  Captcha 圖形驗證碼 -----> ud-captcha
  SelectTwzip 台灣行政區連動下拉框 -----> ud-select-twzip

Validation
  VfCaptcha 圖形驗證碼 -----> vf-captcha

Data
  Table 表格 -----> ud-table
  Pagination 分頁 -----> ud-pagination

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
  template: `

  `,
  props: {
    
  },
})

// ImageUpload 圖片上傳預覽
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

// ImageMultiUpload 圖片上傳預覽(多張)
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

// Captcha 圖形驗證碼
Vue.component('ud-captcha', {
  name: "UdCaptcha",
  template: `
    <div class="ud-captcha">
      <div class="canvas-area" ref="canvasArea">
        <canvas id="verify-canvas" width="100" height="48" style="display: none;"></canvas>
        <img ref="codeimg" @click="refresh">
        <input type="hidden" v-model="inputVal">
      </div>
      <div class="refresh" @click="refresh" v-if="!noRefresh">
        <i class="fas fa-sync-alt" id="refresh"></i>
      </div>
    </div>
  `,
  computed: {
    inputVal: {
      get(){ return this.value },
      set(val){ this.$emit('input', val) }
    }
  },
  props: {
    value: String,
    color: { default: "#333" }, // 字體顏色
    bgColor: { default: "#fff" }, // 背景顏色
    randomColor: { default: "#777" }, // 隨機點線的顏色
    font: { default: "25px Arial" }, // 字體設定
    noLine: Boolean, // 無隨機線
    noDots: Boolean, // 無隨機點
    noRefresh: Boolean, //無刷新鈕
  },
  mounted() {
    this.drawCode();
  },
  methods: {
    // 繪製驗證碼
    drawCode() {
      let nums = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz".split("");
      let canvas = document.getElementById('verify-canvas'); // 取得HTML端畫布
      let context = canvas.getContext("2d"); // 取得畫布2D上下文
      context.fillStyle = this.bgColor; // 畫布填充色
      context.fillRect(0, 0, canvas.width, canvas.height); // 清空畫布
      context.fillStyle = this.color; // 設置字體顏色
      context.font = this.font; // 設置字體
      let rand = new Array();
      let x = new Array();
      let y = new Array();
      for (let i = 0; i < 4; i++) {
          rand[i] = nums[Math.floor(Math.random() * nums.length)]
          x[i] = i * 16 + 10;
          y[i] = Math.random() * 20 + 20;
          context.fillText(rand[i], x[i], y[i]);
      }
      let code = rand.join('');
      this.inputVal = code;
      
      // 畫3條隨機線
      if(!this.noLine){
        for (let i = 0; i < 3; i++) {
          this.drawline(canvas, context);
        }
      }
      // 畫30個隨機點
      if(!this.noDots){
        for (let i = 0; i < 30; i++) {
          this.drawDot(canvas, context);
        }
      }
      this.convertCanvasToImage(canvas);
    },
    // 隨機線
    drawline: function(canvas, context) {
      context.moveTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)); // 隨機線的起點x座標是畫布x座標0位置 y座標是畫布高度的隨機數
      context.lineTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)); // 隨機線的終點x座標是畫布寬度 y座標是畫布高度的隨機數
      context.lineWidth = 0.5; // 隨機線寬
      context.strokeStyle = this.randomColor; // 隨機線描邊屬性
      context.stroke(); // 描邊 即起點描到終點
    },
    // 隨機點(所謂畫點其實就是畫1px像素的線)
    drawDot: function(canvas, context) {
      let px = Math.floor(Math.random() * canvas.width);
      let py = Math.floor(Math.random() * canvas.height);
      context.moveTo(px, py);
      context.lineTo(px + 1, py + 1);
      context.lineWidth = 0.2;
      context.strokeStyle = this.randomColor;
      context.stroke();
    },
    // 繪製圖片
    convertCanvasToImage: function(canvas) {
      let image = this.$refs.codeimg;
      image.src = canvas.toDataURL("image/png");
      return image;
    },
    // 刷新驗證碼
    refresh: function() {
      document.getElementById('verify-canvas').remove();
      this.$refs.canvasArea.insertAdjacentHTML('afterbegin', '<canvas width="100" height="48" id="verify-canvas" style="display: none;"></canvas>')
      this.drawCode();
    }
  },
})

// SelectTwzip 台灣行政區連動下拉框
Vue.component('ud-select-twzip', {
  name: "UdSelectTwzip",
  template: `
    <div class="ud-select-twzip" :class="{'is-flex': flex}">
      <ud-select v-model="modelValue[0]" :options="firstArr" :placeholder="placeholder[0]" :combine="combine"></ud-select>
      <slot></slot>
      <ud-select v-model="modelValue[1]" :options="secondArr" :placeholder="placeholder[1]" :combine="combine"></ud-select>
      <slot name="second"></slot>
    </div>
  `,
  props: {
    value: null, // value值
    placeholder: { // placeholder值 [Array]
      default: () => {
        return ["請選擇縣市", "請選擇行政區"];
      }
    },
    flex: Boolean, // 是否並排
    combine: Boolean, // 是否label直接使用value值
  },
  data() {
    return {
      options: [
        { 
          label: "基隆市", value: "01",
          children: [{ label: "仁愛區", value: "200" },{ label: "信義區", value: "201" },{ label: "中正區", value: "202" },{ label: "中山區", value: "203" },{ label: "安樂區", value: "204" },{ label: "暖暖區", value: "205" },{ label: "七堵區", value: "206" }]
        },
        { 
          label: "台北市", value: "02", 
          children: [{ label: "中正區", value: "100" },{ label: "大同區", value: "103" },{ label: "中山區", value: "104" },{ label: "松山區", value: "105" },{ label: "大安區", value: "106" },{ label: "萬華區", value: "108" },{ label: "信義區", value: "110" },
          { label: "士林區", value: "111" },{ label: "北投區", value: "112" },{ label: "內湖區", value: "114" },{ label: "南港區", value: "115" },{ label: "文山區", value: "116" }]
        },
        { 
          label: "新北市", value: "03", 
          children: [{ label: "萬里區", value: "207" },{ label: "金山區", value: "208" },{ label: "板橋區", value: "220" },{ label: "汐止區", value: "221" },{ label: "深坑區", value: "222" },{ label: "石碇區", value: "223" },{ label: "瑞芳區", value: "224" },
          { label: "平溪區", value: "226" },{ label: "雙溪區", value: "227" },{ label: "貢寮區", value: "228" },{ label: "新店區", value: "231" },{ label: "坪林區", value: "232" },{ label: "烏來區", value: "233" },{ label: "永和區", value: "234" },
          { label: "中和區", value: "235" },{ label: "土城區", value: "236" },{ label: "三峽區", value: "237" },{ label: "樹林區", value: "238" },{ label: "鶯歌區", value: "239" },{ label: "三重區", value: "241" },{ label: "新莊區", value: "242" },
          { label: "泰山區", value: "243" },{ label: "林口區", value: "244" },{ label: "蘆洲區", value: "247" },{ label: "五股區", value: "248" },{ label: "八里區", value: "249" },{ label: "淡水區", value: "251" },{ label: "三芝區", value: "252" },
          { label: "石門區", value: "253" }]
        },
        { 
          label: "桃園縣", value: "04",
          children: [{ label: "中壢市", value: "320" },{ label: "平鎮市", value: "324" },{ label: "龍潭鄉", value: "325" },{ label: "楊梅市", value: "326" },{ label: "新屋鄉", value: "327" },{ label: "觀音鄉", value: "328" },{ label: "桃園市", value: "330" },
          { label: "龜山鄉", value: "333" },{ label: "八德市", value: "334" },{ label: "大溪鎮", value: "335" },{ label: "復興鄉", value: "336" },{ label: "大園鄉", value: "337" },{ label: "蘆竹鄉", value: "338" }]
        },
        {
          label: "新竹市", value: "05",
          children: [{ label: "東區", value: "300" },{ label: "北區", value: "300" },{ label: "香山區", value: "300" }]
        },
        {
          label: "新竹縣", value: "06",
          children: [{ label: "竹北市", value: "302" },{ label: "湖口鄉", value: "303" },{ label: "新豐鄉", value: "304" },{ label: "新埔鎮", value: "305" },{ label: "關西鎮", value: "306" },{ label: "芎林鄉", value: "307" },{ label: "寶山鄉", value: "308" },
          { label: "竹東鎮", value: "310" },{ label: "五峰鄉", value: "311" },{ label: "橫山鄉", value: "312" },{ label: "尖石鄉", value: "313" },{ label: "北埔鄉", value: "314" },{ label: "峨眉鄉", value: "315" }]
        },
        {
          label: "苗栗縣", value: "07",
          children: [{ label: "竹南鎮", value: "350" },{ label: "頭份鎮", value: "351" },{ label: "三灣鄉", value: "352" },{ label: "南庄鄉", value: "353" },{ label: "獅潭鄉", value: "354" },{ label: "後龍鎮", value: "356" },{ label: "通霄鎮", value: "357" },
          { label: "苑裡鎮", value: "358" },{ label: "苗栗市", value: "360" },{ label: "造橋鄉", value: "361" },{ label: "頭屋鄉", value: "362" },{ label: "公館鄉", value: "363" },{ label: "大湖鄉", value: "364" },{ label: "泰安鄉", value: "365" },
          { label: "銅鑼鄉", value: "366" },{ label: "三義鄉", value: "367" },{ label: "西湖鄉", value: "368" },{ label: "卓蘭鎮", value: "369" }]
        },
        {
          label: "台中市", value: "08",
          children: [{ label: "中區", value: "400" },{ label: "東區", value: "401" },{ label: "南區", value: "402" },{ label: "西區", value: "403" },{ label: "北區", value: "404" },{ label: "北屯區", value: "406" },{ label: "西屯區", value: "407" },
          { label: "南屯區", value: "408" },{ label: "太平區", value: "411" },{ label: "大里區", value: "412" },{ label: "霧峰區", value: "413" },{ label: "烏日區", value: "414" },{ label: "豐原區", value: "420" },{ label: "后里區", value: "421" },
          { label: "石岡區", value: "422" },{ label: "東勢區", value: "423" },{ label: "和平區", value: "424" },{ label: "新社區", value: "426" },{ label: "潭子區", value: "427" },{ label: "大雅區", value: "428" },{ label: "神岡區", value: "429" },
          { label: "大肚區", value: "432" },{ label: "沙鹿區", value: "433" },{ label: "龍井區", value: "434" },{ label: "梧棲區", value: "435" },{ label: "清水區", value: "436" },{ label: "大甲區", value: "437" },{ label: "外埔區", value: "438" },
          { label: "大安區", value: "439" }]
        },
        {
          label: "彰化縣", value: "09",
          children: [{ label: "彰化市", value: "500" },{ label: "芬園鄉", value: "502" },{ label: "花壇鄉", value: "503" },{ label: "秀水鄉", value: "504" },{ label: "鹿港鎮", value: "505" },{ label: "福興鄉", value: "506" },{ label: "線西鄉", value: "507" },
          { label: "和美鎮", value: "508" },{ label: "伸港鄉", value: "509" },{ label: "員林鎮", value: "510" },{ label: "社頭鄉", value: "511" },{ label: "永靖鄉", value: "512" },{ label: "埔心鄉", value: "513" },{ label: "溪湖鎮", value: "514" },
          { label: "大村鄉", value: "515" },{ label: "埔鹽鄉", value: "516" },{ label: "田中鎮", value: "520" },{ label: "北斗鎮", value: "521" },{ label: "田尾鄉", value: "522" },{ label: "埤頭鄉", value: "523" },{ label: "溪州鄉", value: "524" },
          { label: "竹塘鄉", value: "525" },{ label: "二林鎮", value: "526" },{ label: "大城鄉", value: "527" },{ label: "芳苑鄉", value: "528" },{ label: "二水鄉", value: "530" }]
        },
        {
          label: "南投縣", value: "10",
          children: [{ label: "南投市", value: "540" },{ label: "中寮鄉", value: "541" },{ label: "草屯鎮", value: "542" },{ label: "國姓鄉", value: "544" },{ label: "埔里鎮", value: "545" },{ label: "仁愛鄉", value: "546" },{ label: "名間鄉", value: "551" },
          { label: "集集鎮", value: "552" },{ label: "水里鄉", value: "553" },{ label: "魚池鄉", value: "555" },{ label: "信義鄉", value: "556" },{ label: "竹山鎮", value: "557" },{ label: "鹿谷鄉", value: "558" }]
        },
        {
          label: "雲林縣", value: "11",
          children: [{ label: "斗南鎮", value: "630" },{ label: "大埤鄉", value: "631" },{ label: "虎尾鎮", value: "632" },{ label: "土庫鎮", value: "633" },{ label: "褒忠鄉", value: "634" },{ label: "東勢鄉", value: "635" },{ label: "台西鄉", value: "636" },
          { label: "崙背鄉", value: "637" },{ label: "麥寮鄉", value: "638" },{ label: "斗六市", value: "640" },{ label: "林內鄉", value: "643" },{ label: "古坑鄉", value: "646" },{ label: "莿桐鄉", value: "647" },{ label: "西螺鎮", value: "648" },
          { label: "二崙鄉", value: "649" },{ label: "北港鎮", value: "651" },{ label: "水林鄉", value: "652" },{ label: "口湖鄉", value: "653" },{ label: "四湖鄉", value: "654" },{ label: "元長鄉", value: "655" }]
        },
        {
          label: "嘉義市", value: "12",
          children: [{ label: "東區", value: "600" },{ label: "西區", value: "600" }]
        },
        {
          label: "嘉義縣", value: "13",
          children: [{ label: "番路鄉", value: "602" },{ label: "梅山鄉", value: "603" },{ label: "竹崎鄉", value: "604" },{ label: "阿里山鄉", value: "605" },{ label: "中埔鄉", value: "606" },{ label: "大埔鄉", value: "607" },{ label: "水上鄉", value: "608" },
          { label: "鹿草鄉", value: "611" },{ label: "太保市", value: "612" },{ label: "朴子市", value: "613" },{ label: "東石鄉", value: "614" },{ label: "六腳鄉", value: "615" },{ label: "新港鄉", value: "616" },{ label: "民雄鄉", value: "621" },
          { label: "大林鎮", value: "622" },{ label: "溪口鄉", value: "623" },{ label: "義竹鄉", value: "624" },{ label: "布袋鎮", value: "625" }]
        },
        {
          label: "台南市", value: "14",
          children: [{ label: "中西區", value: "700" },{ label: "東區", value: "701" },{ label: "南區", value: "702" },{ label: "北區", value: "704" },{ label: "安平區", value: "708" },{ label: "安南區", value: "709" },{ label: "永康區", value: "710" },
          { label: "歸仁區", value: "711" },{ label: "新化區", value: "712" },{ label: "左鎮區", value: "713" },{ label: "玉井區", value: "714" },{ label: "楠西區", value: "715" },{ label: "南化區", value: "716" },{ label: "仁德區", value: "717" },
          { label: "關廟區", value: "718" },{ label: "龍崎區", value: "719" },{ label: "官田區", value: "720" },{ label: "麻豆區", value: "721" },{ label: "佳里區", value: "722" },{ label: "西港區", value: "723" },{ label: "七股區", value: "724" },
          { label: "將軍區", value: "725" },{ label: "學甲區", value: "726" },{ label: "北門區", value: "727" },{ label: "新營區", value: "730" },{ label: "後壁區", value: "731" },{ label: "白河區", value: "732" },{ label: "東山區", value: "733" },
          { label: "六甲區", value: "734" },{ label: "下營區", value: "735" },{ label: "柳營區", value: "736" },{ label: "鹽水區", value: "737" },{ label: "善化區", value: "741" },{ label: "大內區", value: "742" },{ label: "山上區", value: "743" },
          { label: "新市區", value: "744" },{ label: "安定區", value: "745" }]
        },
        {
          label: "高雄市", value: "15",
          children: [{ label: "新興區", value: "800" },{ label: "前金區", value: "801" },{ label: "苓雅區", value: "802" },{ label: "鹽埕區", value: "803" },{ label: "鼓山區", value: "804" },{ label: "旗津區", value: "805" },{ label: "前鎮區", value: "806" },
          { label: "三民區", value: "807" },{ label: "楠梓區", value: "811" },{ label: "小港區", value: "812" },{ label: "左營區", value: "813" },{ label: "仁武區", value: "814" },{ label: "大社區", value: "815" },{ label: "岡山區", value: "820" },
          { label: "路竹區", value: "821" },{ label: "阿蓮區", value: "822" },{ label: "田寮區", value: "823" },{ label: "燕巢區", value: "824" },{ label: "橋頭區", value: "825" },{ label: "梓官區", value: "826" },{ label: "彌陀區", value: "827" },
          { label: "永安區", value: "828" },{ label: "湖內區", value: "829" },{ label: "鳳山區", value: "830" },{ label: "大寮區", value: "831" },{ label: "林園區", value: "832" },{ label: "鳥松區", value: "833" },{ label: "大樹區", value: "840" },
          { label: "旗山區", value: "842" },{ label: "美濃區", value: "843" },{ label: "六龜區", value: "844" },{ label: "內門區", value: "845" },{ label: "杉林區", value: "846" },{ label: "甲仙區", value: "847" },{ label: "桃源區", value: "848" },
          { label: "那瑪夏區", value: "849" },{ label: "茂林區", value: "851" },{ label: "茄萣區", value: "852" }]
        },
        {
          label: "屏東縣", value: "16",
          children: [{ label: "屏東市", value: "900" },{ label: "三地門鄉", value: "901" },{ label: "霧台鄉", value: "902" },{ label: "瑪家鄉", value: "903" },{ label: "九如鄉", value: "904" },{ label: "里港鄉", value: "905" },{ label: "高樹鄉", value: "906" },
          { label: "鹽埔鄉", value: "907" },{ label: "長治鄉", value: "908" },{ label: "麟洛鄉", value: "909" },{ label: "竹田鄉", value: "911" },{ label: "內埔鄉", value: "912" },{ label: "萬丹鄉", value: "913" },{ label: "潮州鎮", value: "920" },
          { label: "泰武鄉", value: "921" },{ label: "來義鄉", value: "922" },{ label: "萬巒鄉", value: "923" },{ label: "崁頂鄉", value: "924" },{ label: "新埤鄉", value: "925" },{ label: "南州鄉", value: "926" },{ label: "林邊鄉", value: "927" },
          { label: "東港鎮", value: "928" },{ label: "琉球鄉", value: "929" },{ label: "佳冬鄉", value: "931" },{ label: "新園鄉", value: "932" },{ label: "枋寮鄉", value: "940" },{ label: "枋山鄉", value: "941" },{ label: "春日鄉", value: "942" },
          { label: "獅子鄉", value: "943" },{ label: "車城鄉", value: "944" },{ label: "牡丹鄉", value: "945" },{ label: "恆春鎮", value: "946" },{ label: "滿州鄉", value: "947" }]
        },
        {
          label: "台東縣", value: "17",
          children: [{ label: "台東市", value: "950" },{ label: "綠島鄉", value: "951" },{ label: "蘭嶼鄉", value: "952" },{ label: "延平鄉", value: "953" },{ label: "卑南鄉", value: "954" },{ label: "鹿野鄉", value: "955" },{ label: "關山鎮", value: "956" },
          { label: "海端鄉", value: "957" },{ label: "池上鄉", value: "958" },{ label: "東河鄉", value: "959" },{ label: "成功鎮", value: "961" },{ label: "長濱鄉", value: "962" },{ label: "太麻里鄉", value: "963" },{ label: "金峰鄉", value: "964" },
          { label: "大武鄉", value: "965" },{ label: "達仁鄉", value: "966" }]
        },
        {
          label: "花蓮縣", value: "18",
          children: [{ label: "花蓮市", value: "970" },{ label: "新城鄉", value: "971" },{ label: "秀林鄉", value: "972" },{ label: "吉安鄉", value: "973" },{ label: "壽豐鄉", value: "974" },{ label: "鳳林鎮", value: "975" },{ label: "光復鄉", value: "976" },
          { label: "豐濱鄉", value: "977" },{ label: "瑞穗鄉", value: "978" },{ label: "萬榮鄉", value: "979" },{ label: "玉里鎮", value: "981" },{ label: "卓溪鄉", value: "982" }]
        },
        {
          label: "宜蘭縣", value: "19",
          children: [{ label: "宜蘭市", value: "260" },{ label: "頭城鎮", value: "261" },{ label: "礁溪鄉", value: "262" },{ label: "壯圍鄉", value: "263" },{ label: "員山鄉", value: "264" },{ label: "羅東鎮", value: "265" },{ label: "三星鄉", value: "266" },
          { label: "大同鄉", value: "267" },{ label: "五結鄉", value: "268" },{ label: "冬山鄉", value: "269" },{ label: "蘇澳鎮", value: "270" },{ label: "南澳鄉", value: "272" }]
        },
        {
          label: "澎湖縣", value: "20",
          children: [{ label: "馬公市", value: "880" },{ label: "西嶼鄉", value: "881" },{ label: "望安鄉", value: "882" },{ label: "七美鄉", value: "883" },{ label: "白沙鄉", value: "884" },{ label: "湖西鄉", value: "885" }]
        },
        {
          label: "金門縣", value: "21",
          children: [{ label: "金沙鎮", value: "890" },{ label: "金湖鎮", value: "891" },{ label: "金寧鄉", value: "892" },{ label: "金城鎮", value: "893" },{ label: "烈嶼鄉", value: "894" },{ label: "烏坵鄉", value: "896" }]
        },
        {
          label: "連江縣", value: "22",
          children: [{ label: "南竿鄉", value: "209" },{ label: "北竿鄉", value: "210" },{ label: "莒光鄉", value: "211" },{ label: "東引鄉", value: "212" }]
        }
      ]
    }
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
  methods: {
    onChange: function(){
      this.$parent.$emit('validate'); // 通知FormItem校驗
    }
  },
  mounted() {
    this.$on('validate', () => {
      this.$nextTick(() => {
        this.$parent.$emit('validate'); // 通知FormItem校驗
      })
    })
  },
})

//-----------------------Validation-----------------------
// VfCaptcha 圖形驗證碼
Vue.component('vf-captcha', {
  name: "VfCaptcha",
  template: `
    <div class="vf-captcha">
      <div class="canvas-area" ref="canvasArea">
        <canvas id="verify-canvas" width="100" height="48" style="display: none;"></canvas>
        <img ref="codeimg" @click="refresh">
        <input type="hidden" v-model="inputVal">
      </div>
      <div class="refresh" @click="refresh" v-if="!noRefresh">
        <i class="fas fa-sync-alt" id="refresh"></i>
      </div>
    </div>
  `,
  computed: {
    inputVal: {
      get(){ return this.value },
      set(val){ this.$emit('input', val) }
    }
  },
  props: {
    value: String,
    color: { default: "#333" }, // 字體顏色
    bgColor: { default: "#fff" }, // 背景顏色
    randomColor: { default: "#777" }, // 隨機點線的顏色
    font: { default: "25px Arial" }, // 字體設定
    noLine: Boolean, // 無隨機線
    noDots: Boolean, // 無隨機點
    noRefresh: Boolean, //無刷新鈕
  },
  mounted() {
    this.drawCode();
  },
  methods: {
    // 繪製驗證碼
    drawCode() {
      let nums = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz".split("");
      let canvas = document.getElementById('verify-canvas'); // 取得HTML端畫布
      let context = canvas.getContext("2d"); // 取得畫布2D上下文
      context.fillStyle = this.bgColor; // 畫布填充色
      context.fillRect(0, 0, canvas.width, canvas.height); // 清空畫布
      context.fillStyle = this.color; // 設置字體顏色
      context.font = this.font; // 設置字體
      let rand = new Array();
      let x = new Array();
      let y = new Array();
      for (let i = 0; i < 4; i++) {
          rand[i] = nums[Math.floor(Math.random() * nums.length)]
          x[i] = i * 16 + 10;
          y[i] = Math.random() * 20 + 20;
          context.fillText(rand[i], x[i], y[i]);
      }
      let code = rand.join('');
      this.inputVal = code;
      
      // 畫3條隨機線
      if(!this.noLine){
        for (let i = 0; i < 3; i++) {
          this.drawline(canvas, context);
        }
      }
      // 畫30個隨機點
      if(!this.noDots){
        for (let i = 0; i < 30; i++) {
          this.drawDot(canvas, context);
        }
      }
      this.convertCanvasToImage(canvas);
    },
    // 隨機線
    drawline: function(canvas, context) {
      context.moveTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)); // 隨機線的起點x座標是畫布x座標0位置 y座標是畫布高度的隨機數
      context.lineTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)); // 隨機線的終點x座標是畫布寬度 y座標是畫布高度的隨機數
      context.lineWidth = 0.5; // 隨機線寬
      context.strokeStyle = this.randomColor; // 隨機線描邊屬性
      context.stroke(); // 描邊 即起點描到終點
    },
    // 隨機點(所謂畫點其實就是畫1px像素的線)
    drawDot: function(canvas, context) {
      let px = Math.floor(Math.random() * canvas.width);
      let py = Math.floor(Math.random() * canvas.height);
      context.moveTo(px, py);
      context.lineTo(px + 1, py + 1);
      context.lineWidth = 0.2;
      context.strokeStyle = this.randomColor;
      context.stroke();
    },
    // 繪製圖片
    convertCanvasToImage: function(canvas) {
      let image = this.$refs.codeimg;
      image.src = canvas.toDataURL("image/png");
      return image;
    },
    // 刷新驗證碼
    refresh: function() {
      document.getElementById('verify-canvas').remove();
      this.$refs.canvasArea.insertAdjacentHTML('afterbegin', '<canvas width="100" height="48" id="verify-canvas" style="display: none;"></canvas>')
      this.drawCode();
    }
  },
})

//-----------------------Data-----------------------
// Table 表格
Vue.component('ud-table', {
  name: "UdTable",
  template: `

  `,
  props: {
    
  },
})

// Pagination 分頁
Vue.component('ud-pagination', {
  name: "UdPagination",
  template: `

  `,
  props: {
    
  },
})

//-----------------------Notice-----------------------
// Notify 通知訊息
Vue.component('ud-notify', {
  name: "UdNotify",
  template: `

  `,
  props: {
    
  },
})

// Popover 氣泡框
Vue.component('ud-popover', {
  name: "UdPopover",
  template: `

  `,
  props: {
    
  },
})

//-----------------------Tools-----------------------
// CountdownExpire 倒數計時(時限)
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
    setInterval(function() { // 設置倒數計時: 結束時間 - 當前時間
      // 當前時間
      let time = new Date();
      let nowTime = time.getTime(); // 取得當前毫秒數
      // 設置結束時間 : 5月13號 15點0分0秒
      time.setMonth(4); // 取得當前 月份 (從 '0' 開始算)
      time.setDate(13); // 取得當前 日
      time.setHours(15); // 取得當前 時
      time.setMinutes(0); // 取得當前 分
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

// Countdown 倒數計時
Vue.component('ud-countdown', {
  name: "UdCountdown",
  template: `
    <span class="ud-countdown" ref="count">{{cTime}}</span>
  `,
  props: {
    time: { default: 60 }, // 時間
    delay: Boolean // 延遲
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

// QrCode 取得QRcode圖片
Vue.component('ud-qrcode', {
  template: `
    <div class="ud-qrcode">
      <div v-if="!ready" class="icon-css"></div>
      <img v-show="ready" ref="img" :src="QrCodeSrc" :alt="url">
    </div>
  `,
  mounted() {
    this.$refs.img.onload = () => {
      this.ready = 1;
    }
  },
  data() {
    return {
      ready: 0,
    }
  },
  props: {
    url: { default: "https://www.google.com.tw/" }, // 網址
    width: { default: "300" }, // 寬度
    height: { default: "300" }, // 高度
  },
  computed: {
    QrCodeSrc: function(){
      return `http://chart.apis.google.com/chart?cht=qr&choe=UTF-8&chs=${this.width}x${this.height}&chl=${this.url}`
    }
  },
})

//-----------------------Application-----------------------
//Carousel 圖片輪播
Vue.component('ud-carousel', {
  name: "udCarousel",
  template: `
    <div class="ud-carousel" ref="carousel"
      @mouseenter.stop="toggleTimer = false"
      @mouseleave.stop="toggleTimer = true"
      @touchstart.stop="touchStart"
      @touchmove.stop="touchMove"
      :style="'min-height:' + minHeight">
      <keep-alive>
        <transition :name="carouselName">
          <div class="item"
            v-for="(item, index) in carousels"
            v-if="show == index"
            :key="index"
          >
            <a :href="item.href"><img :src="item.img"/></a>
          </div>
        </transition>
      </keep-alive>

      <!-- arrows -->
      <div class="arrows-group" v-if="arrows">
        <a class="button-prev" href="#" @click.prevent="toPrev">
          <slot name="arrows-prev">
            <img src="//akveo.github.io/eva-icons/outline/png/128/arrow-ios-back-outline.png"/>
          </slot>
        </a>
        <a class="button-next" href="#" @click.prevent="toNext">
          <slot name="arrows-next">
            <img src="//akveo.github.io/eva-icons/outline/png/128/arrow-ios-forward-outline.png"/>
          </slot>
        </a>
      </div>

      <!-- dots -->
      <div class="dot-group" v-if="dots">
        <a v-for="(l, index) in len" href="#"
          :class="{ 'active': show == index }"
          @click.prevent="show = index"
        ></a>
      </div>

    </div>
  `,
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
  data: () => {
    return {
      carouselName: 'carousel-next',
      len: 0,
      show: 0,
      xDown: null, // for swiper
      yDown: null, // for swiper
      autoplay: false, // 是否自動輪播
      toggleTimer: true, // pause auto play
      minHeight: 0 // 抓最小高度
    }
  },
  methods: {
    toNext() {
      this.carouselName = 'carousel-next';
      this.show + 1 >= this.len ? this.show = 0 : this.show = this.show + 1;
    },
    toPrev() {
      this.carouselName = 'carousel-prev';
      this.show - 1 < 0 ? this.show = this.len - 1 : this.show = this.show - 1;
    },
    // swiper event(for mobile)
    touchStart(e) {
      this.xDown = e.touches[0].clientX;
      this.yDown = e.touches[0].clientY;
    },
    touchMove(e) {
      const _this = this;
      if(!this.xDown || !this.yDown) { return; }

      let xUp = e.touches[0].clientX;
      let yUp = e.touches[0].clientY;

      let xDiff = this.xDown - xUp;
      let yDiff = this.yDown - yUp;

      if(Math.abs(xDiff) > Math.abs(yDiff)) {
        xDiff > 0 ? _this.toNext() : _this.toPrev();
      }
      this.xDown = null;
      this.yDown = null;
    },
    // 自動輪播
    autoPlay() {
      setInterval(() => {
        if(this.toggleTimer) this.toNext();
      }, this.delay);
    }
  },
  mounted() {
    this.len = this.carousels.length;
    if(this.len <= 1) this.arrows = false;
    if(this.auto) this.autoPlay();
    window.addEventListener('load', () => {
      this.minHeight = this.$refs.carousel.offsetHeight + 'px';
    });
  }
})

// Youtube 水管播放
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
    videoId: { default: "p6qjpdi8XuE" }, // 影片ID
    start: { default: 0 }, // 開始時間
    autoplay: Boolean, // 自動播放
    loop: Boolean, // 自動循環
    noControl: Boolean, // 移除控制介面
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

// YoutubeApi 水管播放(控制版)
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
    videoId: { default: "KnWMMgEDva0" }, // 影片id
    start: { default: 0 }, // 開始時間
    width: { default: 560 }, // 寬度
    height: { default: 315 }, // 高度
    autoplay: Boolean, // 自動播放
    loop: Boolean, // 自動循環
    noControl: Boolean, // 移除控制介面
    mute: Boolean // 開始時靜音
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
        videoId: _this.videoId, // YouTube 影片ID
        width: _this.width, // 播放器寬度 (px)
        height: _this.height, // 播放器高度 (px)
        playerVars: {
          autoplay: _this.autoplay, // 在讀取時自動播放影片
          controls: _this.control, // 在播放器顯示暫停／播放按鈕
          start: _this.start // 開始時間
          // loop: _this.loop, // 讓影片循環播放
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

// GoogleMap 估狗地圖
Vue.component('ud-google-map', {
  name: "UdGoogleMap",
  template: `
    <div class="ud-google-map" :style="{'padding-bottom': ratio + '%'}">
      <iframe :src="src" :width="width" :height="height" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
  `,
  props: {
    src: { default: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1807.3065648309268!2d121.51520065825689!3d25.04719989599153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9727e339109%3A0xc34a31ce3a4abecb!2z6Ie65YyX6LuK56uZ!5e0!3m2!1szh-TW!2stw!4v1595920460513!5m2!1szh-TW!2stw" }, // 網址
    width: { default: 600 }, // 寬度
    height: { default: 450 }, // 高度
    ratio: { default: 65.25 } // 比例
  },
})

// Select2 搜尋下拉框套件
// dependencies:
//   "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
//   "https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css"
//   "https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js"
// reference:
//   https://select2.org
Vue.component('ud-select2', {
  name: "UdSelect2",
  template: `
    <select2 :options="options" v-model="selected">
      <option disabled value="0">Select one</option>
    </select2>
  `,
  props: {
    value: { default: null }, // value值
    options: { default: null } // 選項
  },
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

// Scratch 刮刮樂
// dependencies:
//   "plugins/scratchcard/scratchcard.min.js"
// reference:
//   https://github.com/Masth0/ScratchCard
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
    id: { default: "js--sud--container" }, // 刮刮樂id 區分複數刮刮樂
    coverSrc: { default: "img/silver.jpg" }, // 封面圖片
    brushSrc: { default: "img/brush.png" }, // 筆刷圖片
    prizeSrc: { default: "img/prize_01.jpg" }, // 獎品圖片
    aspectRatio: { default: 1.65 }, // 長寬比
    percent: { default: 10 }, // 完成所需%數
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
          _this.$emit("finish"); // 刮完事件
        }
      })
      sc.init().then(() => {
        sc.canvas.addEventListener('scratch.move', () => {
          _this.$emit("move", Math.floor(sc.getPercent())); // 移動中事件(帶百分比)
        })
      }).catch((error) => {
        alert(error.message);
      });
    }
  },
})

// Editor 文字編輯器
Vue.component('ud-editor', {
  name: "UdEditor",
  template: '<h1>文案編輯器</h1>'
})

//-----------------------開發區-----------------------
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



Vue.directive('focus', {
  inserted: function (el) {
    el.focus();
  }
})


// Vue.component('va-input', {
//   name: "VaInput",
//   template: `
//     <div class="va-input">
//       <input :value="value" @input="onInput" v-bind="$attrs">
//     </div>
//   `,
//   inheritAttrs: false,
//   props: {
//     value: {
//       type: String,
//       default: ''
//     }
//   },
//   methods: {
//     onInput(e) {
//       this.$emit('input', e.target.value);
//       this.$parent.$emit('validate', false); // 通知FormItem校驗
//     }
//   }
// })

