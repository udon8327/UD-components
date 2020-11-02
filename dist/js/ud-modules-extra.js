Vue.component("ud-upload",{name:"UdUpload",template:"\n\n  ",props:{}}),Vue.component("ud-image-upload",{name:"UdImageUpload",template:'\n    <div class="ud-image-upload">\n      <input type="file" accept="image/*" ref="input" @change="previewImage">\n      <template v-if="preview">\n        <div class="image-preview">\n          <img :src="preview" class="img-fluid" />\n          <div class="image-info">\n            <p>檔案名稱：{{ image.name }}</p>\n            <p>檔案大小：{{ parseInt(image.size/1024) }}KB</p>\n          </div>\n        </div>\n        <ud-button @click="reset">刪除圖片</ud-button>\n      </template>\n    </div>\n  ',data:function(){return{preview:"",image:""}},methods:{previewImage:function(e){var t=this,n=e.target;if(n.files){var a=new FileReader;a.onload=function(e){t.preview=e.target.result},this.image=n.files[0],a.readAsDataURL(n.files[0])}},reset:function(){this.image="",this.preview="",this.$refs.input.value=""}}}),Vue.component("ud-image-multi-upload",{name:"UdImageMultiUpload",template:'\n    <div class="ud-image-multi-upload">\n      <input type="file" accept="image/*" multiple="multiple" ref="input" @change="previewMultiImage">\n      <template v-if="preview_list.length">\n        <div class="image-preview">\n          <div v-for="item, index in preview_list" :key="index">\n            <img :src="item"/>\n            <div class="image-info">\n              <p>檔案名稱：{{ image_list[index].name }}</p>\n              <p>檔案大小：{{ parseInt(image_list[index].size/1024) }}KB</p>\n            </div>\n          </div>\n          <ud-button @click="reset">刪除圖片</ud-button>\n        </div>\n      </template>\n    </div>\n  ',data:function(){return{preview_list:[],image_list:[]}},methods:{previewMultiImage:function(e){var t=this,n=e.target,a=n.files.length,o=0;if(n.files)for(;a--;){var i=new FileReader;i.onload=function(e){t.preview_list.push(e.target.result)},this.image_list.push(n.files[o]),i.readAsDataURL(n.files[o]),o++}},reset:function(){this.image_list=[],this.preview_list=[],this.$refs.input.value=""}}}),Vue.component("ud-form",{name:"UdForm",template:"\n\n  ",props:{}}),Vue.component("ud-captcha",{name:"UdCaptcha",template:'\n    <div class="ud-captcha">\n      <div class="canvas-area" ref="canvasArea">\n        <canvas id="verify-canvas" width="100" height="48" style="display: none;"></canvas>\n        <img ref="codeimg" @click="refresh">\n        <input type="hidden" v-model="inputVal">\n      </div>\n      <div class="refresh" @click="refresh" v-if="!noRefresh">\n        <i class="fas fa-sync-alt" id="refresh"></i>\n      </div>\n    </div>\n  ',computed:{inputVal:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},props:{value:String,color:{default:"#333"},bgColor:{default:"#fff"},randomColor:{default:"#777"},font:{default:"25px Arial"},noLine:Boolean,noDots:Boolean,noRefresh:Boolean},mounted:function(){this.drawCode()},methods:{drawCode:function(){var e="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz".split(""),t=document.getElementById("verify-canvas"),n=t.getContext("2d");n.fillStyle=this.bgColor,n.fillRect(0,0,t.width,t.height),n.fillStyle=this.color,n.font=this.font;for(var a=new Array,o=new Array,i=new Array,r=0;r<4;r++)a[r]=e[Math.floor(Math.random()*e.length)],o[r]=16*r+10,i[r]=20*Math.random()+20,n.fillText(a[r],o[r],i[r]);var s=a.join("");if(this.inputVal=s,!this.noLine)for(r=0;r<3;r++)this.drawline(t,n);if(!this.noDots)for(r=0;r<30;r++)this.drawDot(t,n);this.convertCanvasToImage(t)},drawline:function(e,t){t.moveTo(Math.floor(Math.random()*e.width),Math.floor(Math.random()*e.height)),t.lineTo(Math.floor(Math.random()*e.width),Math.floor(Math.random()*e.height)),t.lineWidth=.5,t.strokeStyle=this.randomColor,t.stroke()},drawDot:function(e,t){var n=Math.floor(Math.random()*e.width),a=Math.floor(Math.random()*e.height);t.moveTo(n,a),t.lineTo(n+1,a+1),t.lineWidth=.2,t.strokeStyle=this.randomColor,t.stroke()},convertCanvasToImage:function(e){var t=this.$refs.codeimg;return t.src=e.toDataURL("image/png"),t},refresh:function(){document.getElementById("verify-canvas").remove(),this.$refs.canvasArea.insertAdjacentHTML("afterbegin",'<canvas width="100" height="48" id="verify-canvas" style="display: none;"></canvas>'),this.drawCode()}}}),Vue.component("vf-captcha",{name:"VfCaptcha",template:'\n    <div class="vf-captcha">\n      <div class="canvas-area" ref="canvasArea">\n        <canvas id="verify-canvas" width="100" height="48" style="display: none;"></canvas>\n        <img ref="codeimg" @click="refresh">\n        <input type="hidden" v-model="inputVal">\n      </div>\n      <div class="refresh" @click="refresh" v-if="!noRefresh">\n        <i class="fas fa-sync-alt" id="refresh"></i>\n      </div>\n    </div>\n  ',computed:{inputVal:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},props:{value:String,color:{default:"#333"},bgColor:{default:"#fff"},randomColor:{default:"#777"},font:{default:"25px Arial"},noLine:Boolean,noDots:Boolean,noRefresh:Boolean},mounted:function(){this.drawCode()},methods:{drawCode:function(){var e="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz".split(""),t=document.getElementById("verify-canvas"),n=t.getContext("2d");n.fillStyle=this.bgColor,n.fillRect(0,0,t.width,t.height),n.fillStyle=this.color,n.font=this.font;for(var a=new Array,o=new Array,i=new Array,r=0;r<4;r++)a[r]=e[Math.floor(Math.random()*e.length)],o[r]=16*r+10,i[r]=20*Math.random()+20,n.fillText(a[r],o[r],i[r]);var s=a.join("");if(this.inputVal=s,!this.noLine)for(r=0;r<3;r++)this.drawline(t,n);if(!this.noDots)for(r=0;r<30;r++)this.drawDot(t,n);this.convertCanvasToImage(t)},drawline:function(e,t){t.moveTo(Math.floor(Math.random()*e.width),Math.floor(Math.random()*e.height)),t.lineTo(Math.floor(Math.random()*e.width),Math.floor(Math.random()*e.height)),t.lineWidth=.5,t.strokeStyle=this.randomColor,t.stroke()},drawDot:function(e,t){var n=Math.floor(Math.random()*e.width),a=Math.floor(Math.random()*e.height);t.moveTo(n,a),t.lineTo(n+1,a+1),t.lineWidth=.2,t.strokeStyle=this.randomColor,t.stroke()},convertCanvasToImage:function(e){var t=this.$refs.codeimg;return t.src=e.toDataURL("image/png"),t},refresh:function(){document.getElementById("verify-canvas").remove(),this.$refs.canvasArea.insertAdjacentHTML("afterbegin",'<canvas width="100" height="48" id="verify-canvas" style="display: none;"></canvas>'),this.drawCode()}}}),Vue.component("vf-date-group",{name:"VfDateGroup",template:'\n    <div class="vf-date-select">\n      <select name="year" ref="year"></select>\n      <p>年</p>\n      <select name="month" ref="month"></select>\n      <p>月</p>\n      <select name="date" ref="date"></select>\n      <p>日</p>\n    </div>\n  ',props:{roc:Boolean},mounted:function(){this.dateSelect()},methods:{dateSelect:function(){function e(){var e=parseInt(a.value),t=parseInt(o.value);!function(e){i.innerHTML="";for(var t=1;t<=e;t++)i.insertAdjacentHTML("beforeEnd","<option value="+t+">"+t+"</option>");i.insertAdjacentHTML("afterbegin","<option value='' disabled selected></option>")}(new Date(n.roc?e+1911:e,t,0).getDate())}var n=this,t=(new Date).getFullYear(),a=this.$refs.year,o=this.$refs.month,i=this.$refs.date;if(this.roc)for(var r=0;r<t-1911;r++)a.insertAdjacentHTML("beforeEnd","<option value="+(t-1911-r)+">"+(t-1911-r)+"</option>");else for(r=0;r<=120;r++)a.insertAdjacentHTML("beforeEnd","<option value="+(t-r)+">"+(t-r)+"</option>");a.insertAdjacentHTML("afterbegin","<option value='' disabled selected></option>");for(r=1;r<=12;r++)o.insertAdjacentHTML("beforeEnd","<option value="+r+">"+r+"</option>");o.insertAdjacentHTML("afterbegin","<option value='' disabled selected></option>"),a.addEventListener("change",function(){e()}),o.addEventListener("change",function(){e()})}}}),Vue.component("vf-address-group",{name:"VfAddressGroup",template:'\n    <div class="vf-address-group">\n      <ud-flex v-if="!inputOnly">\n        <formulate-input \n          type="select"\n          name="county"\n          placeholder="縣市"\n          :options="countyOptions"\n          validation="required"\n          :validation-messages="{required: \'縣市不可為空\'}"\n          @input="getCounty"\n        >\n        </formulate-input>\n        <formulate-input\n          type="select"\n          name="area"\n          placeholder="鄉填市區"\n          :options="areaOptions"\n          validation="required"\n          :validation-messages="{required: \'鄉鎮市區不可為空\'}"\n          @input="getArea"\n          ref="area"\n        >\n        </formulate-input>\n      </ud-flex>\n      <div v-if="!selectOnly">\n        <formulate-input\n          type="text"\n          name="address"\n          placeholder="請輸入地址"\n          validation="required"\n          :validation-messages="{required: \'地址不可為空\'}"\n          ref="address"\n        >\n        </formulate-input>\n      </div>\n    </div>\n  ',data:function(){return{countyValue:"",areaValue:"",countyInit:0,areaInit:0,countyList:[{county:"台北市",areaList:["中正區","大同區","中山區","松山區","大安區","萬華區","信義區","士林區","北投區","內湖區","南港區","文山區"]},{county:"新北市",areaList:["萬里區","金山區","板橋區","汐止區","深坑區","石碇區","瑞芳區","平溪區","雙溪區","貢寮區","新店區","坪林區","烏來區","永和區","中和區","土城區","三峽區","樹林區","鶯歌區","三重區","新莊區","泰山區","林口區","蘆洲區","五股區","八里區","淡水區","三芝區","石門區"]},{county:"宜蘭縣",areaList:["宜蘭市","頭城鎮","礁溪鄉","壯圍鄉","員山鄉","羅東鎮","三星鄉","大同鄉","五結鄉","冬山鄉","蘇澳鎮","南澳鄉","釣魚台列嶼"]},{county:"桃園市",areaList:["中壢區","平鎮區","龍潭區","楊梅區","新屋區","觀音區","桃園區","龜山區","八德區","大溪區","復興區","大園區","蘆竹區"]},{county:"新竹市",areaList:["東區","北區","香山區"]},{county:"新竹縣",areaList:["竹北市","湖口鄉","新豐鄉","新埔鎮","關西鎮","芎林鄉","寶山鄉","竹東鎮","五峰鄉","橫山鄉","尖石鄉","北埔鄉","峨眉鄉"]},{county:"苗栗縣",areaList:["竹南鎮","頭份市","三灣鄉","南庄鄉","獅潭鄉","後龍鎮","通霄鎮","苑裡鎮","苗栗市","造橋鄉","頭屋鄉","公館鄉","大湖鄉","泰安鄉","銅鑼鄉","三義鄉","西湖鄉","卓蘭鎮"]},{county:"台中市",areaList:["中區","東區","南區","西區","北區","北屯區","西屯區","南屯區","太平區","大里區","霧峰區","烏日區","豐原區","后里區","石岡區","東勢區","和平區","新社區","潭子區","大雅區","神岡區","大肚區","沙鹿區","龍井區","梧棲區","清水區","大甲區","外埔區","大安區"]},{county:"彰化縣",areaList:["彰化市","芬園鄉","花壇鄉","秀水鄉","鹿港鎮","福興鄉","線西鄉","和美鎮","伸港鄉","員林市","社頭鄉","永靖鄉","埔心鄉","溪湖鎮","大村鄉","埔鹽鄉","田中鎮","北斗鎮","田尾鄉","埤頭鄉","溪州鄉","竹塘鄉","二林鎮","大城鄉","芳苑鄉","二水鄉"]},{county:"南投縣",areaList:["南投市","中寮鄉","草屯鎮","國姓鄉","埔里鎮","仁愛鄉","名間鄉","集集鎮","水里鄉","魚池鄉","信義鄉","竹山鎮","鹿谷鄉"]},{county:"嘉義市",areaList:["東區","西區"]},{county:"嘉義縣",areaList:["番路鄉","梅山鄉","竹崎鄉","阿里山","中埔鄉","大埔鄉","水上鄉","鹿草鄉","太保市","朴子市","東石鄉","六腳鄉","新港鄉","民雄鄉","大林鎮","溪口鄉","義竹鄉","布袋鎮"]},{county:"雲林縣",areaList:["斗南鎮","大埤鄉","虎尾鎮","土庫鎮","褒忠鄉","東勢鄉","台西鄉","崙背鄉","麥寮鄉","斗六市","林內鄉","古坑鄉","莿桐鄉","西螺鎮","二崙鄉","北港鎮","水林鄉","口湖鄉","四湖鄉","元長鄉"]},{county:"台南市",areaList:["中西區","東區","南區","北區","安平區","安南區","永康區","歸仁區","新化區","左鎮區","玉井區","楠西區","南化區","仁德區","關廟區","龍崎區","官田區","麻豆區","佳里區","西港區","七股區","將軍區","學甲區","北門區","新營區","後壁區","白河區","東山區","六甲區","下營區","柳營區","鹽水區","善化區","大內區","山上區","新市區","安定區"]},{county:"高雄市",areaList:["新興區","前金區","苓雅區","鹽埕區","鼓山區","旗津區","前鎮區","三民區","楠梓區","小港區","左營區","仁武區","大社區","東沙群島","南沙群島","岡山區","路竹區","阿蓮區","田寮區","燕巢區","橋頭區","梓官區","彌陀區","永安區","湖內區","鳳山區","大寮區","林園區","鳥松區","大樹區","旗山區","美濃區","六龜區","內門區","杉林區","甲仙區","桃源區","那瑪夏區","茂林區","茄萣區"]},{county:"澎湖縣",areaList:["馬公市","西嶼鄉","望安鄉","七美鄉","白沙鄉","湖西鄉"]},{county:"金門縣",areaList:["金沙鎮","金湖鎮","金寧鄉","金城鎮","烈嶼鄉","烏坵鄉"]},{county:"屏東縣",areaList:["屏東市","三地門鄉","霧台鄉","瑪家鄉","九如鄉","里港鄉","高樹鄉","鹽埔鄉","長治鄉","麟洛鄉","竹田鄉","內埔鄉","萬丹鄉","潮州鎮","泰武鄉","來義鄉","萬巒鄉","崁頂鄉","新埤鄉","南州鄉","林邊鄉","東港鎮","琉球鄉","佳冬鄉","新園鄉","枋寮鄉","枋山鄉","春日鄉","獅子鄉","車城鄉","牡丹鄉","恆春鎮","滿州鄉"]},{county:"台東縣",areaList:["台東市","綠島鄉","蘭嶼鄉","延平鄉","卑南鄉","鹿野鄉","關山鎮","海端鄉","池上鄉","東河鄉","成功鎮","長濱鄉","太麻里","金峰鄉","大武鄉","達仁鄉"]},{county:"花蓮縣",areaList:["花蓮市","新城鄉","秀林鄉","吉安鄉","壽豐鄉","鳳林鎮","光復鄉","豐濱鄉","瑞穗鄉","萬榮鄉","玉里鎮","卓溪鄉","富里鄉"]},{county:"連江縣",areaList:["南竿鄉","北竿鄉","莒光鄉","東引鄉"]}]}},props:{addressLink:Boolean,selectOnly:Boolean,inputOnly:Boolean},computed:{countyOptions:function(){for(var e={},t=0,n=this.countyList;t<n.length;t++){var a=n[t];e[a.county]=a.county}return e},areaOptions:function(){var t=this;if(this.countyValue){for(var e={},n=0,a=this.countyList.find(function(e){return e.county===t.countyValue}).areaList;n<a.length;n++){var o=a[n];e[o]=o}return e}}},watch:{countyValue:function(){this.countyInit?(this.$refs.area.proxy="",this.areaValue=""):this.countyInit=1},areaValue:function(){this.addressLink&&(this.areaInit?this.$refs.address.proxy=""+this.countyValue+this.areaValue:this.areaInit=1)}},methods:{getCounty:function(e){this.countyValue=e},getArea:function(e){this.areaValue=e}}}),Vue.component("ud-table",{name:"UdTable",template:"\n\n  ",props:{}}),Vue.component("ud-pagination",{name:"UdPagination",template:"\n\n  ",props:{}}),Vue.component("ud-notify",{name:"UdNotify",template:"\n\n  ",props:{}}),Vue.component("ud-popover",{name:"UdPopover",template:"\n\n  ",props:{}}),Vue.component("ud-countdown-expire",{name:"UdCountdownExpire",template:"\n    <div>距離5月13號 15點0分0秒 還有</div>\n    <i></i>\n    <i></i>\n    <i></i>\n  ",mounted:function(){var r=document.getElementsByTagName("i");setInterval(function(){var e=new Date,t=e.getTime();e.setMonth(4),e.setDate(13),e.setHours(15),e.setMinutes(0),e.setSeconds(0);var n=(e.getTime()-t)/1e3,a=parseInt(n%60),o=parseInt(n/60%60),i=parseInt(n/60/60);r[0].textContent=i+"時",r[1].textContent=o+"分",r[2].textContent=a+"秒"},1e3)}}),Vue.component("ud-countdown",{name:"UdCountdown",template:'\n    <span class="ud-countdown" ref="count">{{cTime}}</span>\n  ',props:{time:{default:60},delay:Boolean},data:function(){return{cTime:this.time}},mounted:function(){this.delay||this.countdown()},methods:{countdown:function(){var e=this,t=setInterval(function(){e.cTime-=1,e.cTime<=0&&(e.$emit("timeup"),clearInterval(t))},1e3)},reset:function(){this.cTime=10,this.countdown()}}}),Vue.component("ud-qrcode",{template:'\n    <div class="ud-qrcode">\n      <div v-if="!ready" class="icon-css"></div>\n      <img v-show="ready" ref="img" :src="QrCodeSrc" :alt="url">\n    </div>\n  ',mounted:function(){var e=this;this.$refs.img.onload=function(){e.ready=1}},data:function(){return{ready:0}},props:{url:{default:"https://www.google.com.tw/"},width:{default:"300"},height:{default:"300"}},computed:{QrCodeSrc:function(){return"http://chart.apis.google.com/chart?cht=qr&choe=UTF-8&chs="+this.width+"x"+this.height+"&chl="+this.url}}}),Vue.component("ud-carousel",{name:"udCarousel",template:'\n    <div class="ud-carousel" ref="carousel"\n      @mouseenter.stop="toggleTimer = false"\n      @mouseleave.stop="toggleTimer = true"\n      @touchstart.stop="touchStart"\n      @touchmove.stop="touchMove"\n      :style="\'min-height:\' + minHeight">\n      <keep-alive>\n        <transition :name="carouselName">\n          <div class="item"\n            v-for="(item, index) in carousels"\n            v-if="show == index"\n            :key="index"\n          >\n            <a :href="item.href"><img :src="item.img"/></a>\n          </div>\n        </transition>\n      </keep-alive>\n\n      <!-- arrows -->\n      <div class="arrows-group" v-if="arrows">\n        <a class="button-prev" href="#" @click.prevent="toPrev">\n          <slot name="arrows-prev">\n            <img src="//akveo.github.io/eva-icons/outline/png/128/arrow-ios-back-outline.png"/>\n          </slot>\n        </a>\n        <a class="button-next" href="#" @click.prevent="toNext">\n          <slot name="arrows-next">\n            <img src="//akveo.github.io/eva-icons/outline/png/128/arrow-ios-forward-outline.png"/>\n          </slot>\n        </a>\n      </div>\n\n      <!-- dots -->\n      <div class="dot-group" v-if="dots">\n        <a v-for="(l, index) in len" href="#"\n          :class="{ \'active\': show == index }"\n          @click.prevent="show = index"\n        ></a>\n      </div>\n\n    </div>\n  ',props:{carousels:{type:Array},auto:{type:Boolean,default:!1},delay:{type:Number,default:3e3},dots:{type:Boolean,default:!0},arrows:{type:Boolean,default:!0}},data:function(){return{carouselName:"carousel-next",len:0,show:0,xDown:null,yDown:null,autoplay:!1,toggleTimer:!0,minHeight:0}},methods:{toNext:function(){this.carouselName="carousel-next",this.show+1>=this.len?this.show=0:this.show=this.show+1},toPrev:function(){this.carouselName="carousel-prev",this.show-1<0?this.show=this.len-1:this.show=this.show-1},touchStart:function(e){this.xDown=e.touches[0].clientX,this.yDown=e.touches[0].clientY},touchMove:function(e){if(this.xDown&&this.yDown){var t=e.touches[0].clientX,n=e.touches[0].clientY,a=this.xDown-t,o=this.yDown-n;Math.abs(a)>Math.abs(o)&&(0<a?this.toNext():this.toPrev()),this.xDown=null,this.yDown=null}},autoPlay:function(){var e=this;setInterval(function(){e.toggleTimer&&e.toNext()},this.delay)}},mounted:function(){var e=this;this.len=this.carousels.length,this.len<=1&&(this.arrows=!1),this.auto&&this.autoPlay(),window.addEventListener("load",function(){e.minHeight=e.$refs.carousel.offsetHeight+"px"})}}),Vue.component("ud-youtube",{name:"UdYoutube",template:'\n    <div class="ud-youtube">\n      <div class="video-wrapper">\n        <iframe width="560" height="315" :src="videoIdAfter" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n      </div>\n    </div>\n  ',props:{videoId:{default:"p6qjpdi8XuE"},start:{default:0},autoplay:Boolean,loop:Boolean,noControl:Boolean},computed:{videoIdAfter:function(){var e="https://www.youtube.com/embed/"+this.videoId+"?";return this.start&&(e=e+"&start="+this.start),this.autoplay&&(e+="&autoplay=1"),this.loop&&(e=e+"&loop=1&playlist="+this.videoId),this.noControl&&(e+="&controls=0"),e}}}),Vue.component("ud-youtube-api",{name:"UdYoutubeApi",template:'\n    <div class="ud-youtube-api">\n      <div class="video-wrapper">\n        <div :id="videoId" ref="player"></div>\n      </div>\n    </div>\n  ',props:{videoId:{default:"KnWMMgEDva0"},start:{default:0},width:{default:560},height:{default:315},autoplay:Boolean,loop:Boolean,noControl:Boolean,mute:Boolean},data:function(){return{player:{}}},computed:{control:function(){return this.noControl?0:1}},mounted:function(){function e(e){a.mute&&e.target.mute()}function t(e){e.data===YT.PlayerState.ENDED&&n.playVideo()}var n,a=this,o=document.createElement("script"),i=document.getElementsByTagName("script")[0];o.src="https://www.youtube.com/iframe_api",i.parentNode.insertBefore(o,i),window.onYouTubeIframeAPIReady=function(){n=new YT.Player(a.videoId,{videoId:a.videoId,width:a.width,height:a.height,playerVars:{autoplay:a.autoplay,controls:a.control,start:a.start},events:{onReady:e,onStateChange:t}})}},methods:{}}),Vue.component("ud-google-map",{name:"UdGoogleMap",template:'\n    <div class="ud-google-map" :style="{\'padding-bottom\': ratio + \'%\'}">\n      <iframe :src="src" :width="width" :height="height" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>\n    </div>\n  ',props:{src:{default:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1807.3065648309268!2d121.51520065825689!3d25.04719989599153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9727e339109%3A0xc34a31ce3a4abecb!2z6Ie65YyX6LuK56uZ!5e0!3m2!1szh-TW!2stw!4v1595920460513!5m2!1szh-TW!2stw"},width:{default:600},height:{default:450},ratio:{default:65.25}}}),Vue.component("ud-select2",{name:"UdSelect2",template:'\n    <select2 :options="options" v-model="selected">\n      <option disabled value="0">Select one</option>\n    </select2>\n  ',props:{value:{default:null},options:{default:null}},mounted:function(){var e=this;$(this.$el).select2({data:this.options}).val(this.value).trigger("change").on("change",function(){e.$emit("input",this.value)})},watch:{value:function(e){$(this.$el).val(e).trigger("change")},options:function(e){$(this.$el).empty().select2({data:e})}},destroyed:function(){$(this.$el).off().select2("destroy")}}),Vue.component("ud-scratch",{name:"UdScratch",template:'\n    <div class="ud-scratch">\n      <div class="sc__wrapper">\n        <div class="sc__container" :id="id"></div>\n      </div>\n    </div>\n  ',mounted:function(){this.initScratch()},props:{id:{default:"js--sud--container"},coverSrc:{default:"img/silver.jpg"},brushSrc:{default:"img/brush.png"},prizeSrc:{default:"img/prize_01.jpg"},aspectRatio:{default:1.65},percent:{default:10}},methods:{initScratch:function(){var e=this,t=document.getElementById(this.id),n=new ScratchCard("#"+this.id,{scratchType:SCRATCH_TYPE.BRUSH,containerWidth:t.offsetWidth,containerHeight:t.offsetWidth/this.aspectRatio,brushSrc:this.brushSrc,imageForwardSrc:this.coverSrc,imageBackgroundSrc:this.prizeSrc,percentToFinish:this.percent,callback:function(){e.$emit("finish")}});n.init().then(function(){n.canvas.addEventListener("scratch.move",function(){e.$emit("move",Math.floor(n.getPercent()))})}).catch(function(e){alert(e.message)})}}}),Vue.component("ud-editor",{name:"UdEditor",template:"<h1>文案編輯器</h1>"}),Vue.component("ud-contenteditable",{name:"UdContenteditable",template:'\n    <div contenteditable="contenteditable" @input="updateInput" class="ud-contenteditable">\n      {{ content }}\n    </div>\n  ',prop:["value"],data:function(){return{content:""}},methods:{updateInput:function(){this.$emit("input",this.content)}}}),Vue.directive("focus",{inserted:function(e){e.focus()}}),Vue.component("va-input",{template:'\n    <div class="va-input">\n      <input :value="value" @input="onInput" v-bind="$attrs">\n    </div>\n  ',inheritAttrs:!1,props:{value:{type:String,default:""}},methods:{onInput:function(e){this.$emit("input",e.target.value),this.$parent.$emit("validate")}}}),Vue.component("va-form-item",{template:'\n    <div class="va-form-item">\n      <label v-if="label">{{ label }}</label>\n      <slot></slot>\n      <p v-if="errorMessage">{{ errorMessage }}</p>\n    </div>\n  ',data:function(){return{errorMessage:""}},inject:["form"],props:{label:{type:String,default:""},prop:{type:String}},mounted:function(){var e=this;this.$on("validate",function(){e.validate()})},methods:{validate:function(){console.log("va-form-item: "+getRandom());var e=this.form.rules[this.prop];console.log("rules: ",e);var t=this.form.model[this.prop];console.log("value: ",t)}}}),Vue.component("va-form",{template:'\n    <div class="va-form">\n      <slot></slot>\n    </div>\n  ',provide:function(){return{form:this}},props:{model:{type:Object,required:!0},rules:{type:Object}},methods:{validate:function(e){console.log("va-form: "+getRandom());var t=this.$children.filter(function(e){return e.prop}).map(function(e){return e.validate()});Promise.all(t).then(function(){return e(!0)}).then(function(){return e(!1)})}}});
//# sourceMappingURL=ud-modules-extra.js.map