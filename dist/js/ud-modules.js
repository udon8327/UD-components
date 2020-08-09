function convertNl(e){return e.replace(/([^>])\n/g,"$1<br/>\n")}function randomHexColorCode(){return"#"+(1048575*Math.random()*1e6).toString(16).slice(0,6)}function randomString(e){for(var t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",n=t.length,o="",i=0;i<e;i++)o+=t.charAt(Math.floor(Math.random()*n));return o}function formatNumber(e){for(var t=e.toString(),n=/(-?\d+)(\d{3})/;n.test(t);)t=t.replace(n,"$1,$2");return t}function copyTextToClipboard(e){var t=document.createRange();t.selectNode(document.getElementById(e));var n=window.getSelection();n.removeAllRanges(),n.addRange(t),document.execCommand("copy"),alert("複製成功")}function copyTxt(){document.getElementById("aa").select(),document.execCommand("Copy"),alert("已複製好，可貼粘。")}function escapeHTML(e){return e.replace(/[&<>'"]/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[e]||e})}function convertCamelCase(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()}function getRandom(e,t){return Math.floor(Math.random()*(t-e+1))+e}function round(e,t){return void 0===t&&(t=0),Number(Math.round(e+"e"+t)+"e-"+t)}function imagePreload(e){(new Image).src=e}function isRepeat(e){for(var t=JSON.stringify(e),n=0;n<e.length;n++)if(1<t.match(new RegExp(e[n],"g")).length)return!0;return!1}function uniqArray(e){return e.filter(function(e,t,n){return n.indexOf(e)===t})}function flatArray(e,n){return void 0===n&&(n=1),e.reduce(function(e,t){return e.concat(1<n&&Array.isArray(t)?flatArray(t,n-1):t)},[])}function indexOfAll(e,o){return e.reduce(function(e,t,n){return t===o?e.concat([n]):e},[])}function intersection(e,t){var n=new Set(t);return e.filter(function(e){return n.has(e)})}function shuffle(e){for(var t,n=e.slice(0),o=n.length;o;){var i=Math.floor(Math.random()*o--);t=[n[i],n[o]],n[o]=t[0],n[i]=t[1]}return n}function typeOf(e){return void 0===e?"undefined":null===e?"null":e.constructor.name.toLowerCase()}function filterObj(e,t){var n=JSON.parse(JSON.stringify(e));for(var o in n)-1===t.indexOf(o)&&delete n[o];return n}function deepCopy(e){var t,n=typeOf(e);if("array"===n)t=[];else{if("object"!==n)return e;t={}}if("array"===n)for(var o=0;o<e.length;o++)t.push(deepCopy(e[o]));else if("object"===n)for(var o in e)t[o]=deepCopy(e[o]);return t}function isLeapYear(e){return 29===new Date(e,1,29).getDate()}function isExistDate(e,t){void 0===t&&(t="/");var n=e.split(t),o=[31,28,31,30,31,30,31,31,30,31,30,31],i=parseInt(n[0]),a=parseInt(n[1]),r=parseInt(n[2]);return 29===new Date(i,1,29).getDate()&&(o[1]=29),0<r&&r<=o[a-1]}function getColonTimeFromDate(e){return e.toTimeString().slice(0,8)}function getDaysDiffBetweenDates(e,t){return(t-e)/864e5}function isAfterDate(e,t){return t<e}function isBeforeDate(e,t){return e<t}function getDiffDate(e){var t=new Date;return t.setDate(t.getDate()+e),t.toISOString().split("T")[0]}function timeFormat(e){var t,n=new Date(e),o=new Date,i=n.getFullYear(),a=n.getMonth()+10,r=n.getDate(),c=n.getHours(),d=n.getMinutes(),l=o.getFullYear(),s=o.getHours();if(i<l)t=i+"年"+a+"月"+r+"日 "+c+":"+d;else{var u=(o-n)/36e5;if(s<u)t=a+"月"+r+"日 "+c+":"+d;else if(1<=u)t="今天 "+c+":"+d+"分";else{var p=o.getMinutes()-d;t=1<p?p+"分鐘前":"剛剛"}}return t}function uniqueId(){return Number(new Date).toString()+parseInt(10*Math.random())+parseInt(10*Math.random())+parseInt(10*Math.random())}function anchorTop(){window.scrollTo(0,0)}function anchorElement(e){var t=document.getElementById(e);window.scrollTo(0,t.offsetTop)}function anchorBottom(){window.scrollTo(0,document.body.scrollHeight)}function scrollToTop(){var e=document.documentElement.scrollTop||document.body.scrollTop;0<e&&(window.requestAnimationFrame(scrollToTop),window.scrollTo(0,e-e/8))}function smoothScroll(e){document.querySelector(e).scrollIntoView({behavior:"smooth"})}function getScrollPosition(e){return void 0===e&&(e=window),{x:void 0!==e.pageXOffset?e.pageXOffset:e.scrollLeft,y:void 0!==e.pageYOffset?e.pageYOffset:e.scrollTop}}function getInitZoom(){if(!this._initZoom){var e=Math.min(screen.height,screen.width);this.isAndroidMobileDevice()&&!this.isNewChromeOnAndroid()&&(e/=window.devicePixelRatio),this._initZoom=e/document.body.offsetWidth}return this._initZoom}function getPageHeight(){var e=document,t=e.body,n=e.documentElement,o="BackCompat"==e.compatMode?t:e.documentElement;return Math.max(n.scrollHeight,t.scrollHeight,o.clientHeight)}function getPageScrollLeft(){var e=document;return e.documentElement.scrollLeft||e.body.scrollLeft}function getPageScrollTop(){var e=document;return e.documentElement.scrollTop||e.body.scrollTop}function getPageViewHeight(){var e=document;return("BackCompat"==e.compatMode?e.body:e.documentElement).clientHeight}function getPageViewWidth(){var e=document;return("BackCompat"==e.compatMode?e.body:e.documentElement).clientWidth}function getPageWidth(){var e=document,t=e.body,n=e.documentElement,o="BackCompat"==e.compatMode?t:e.documentElement;return Math.max(n.scrollWidth,t.scrollWidth,o.clientWidth)}function getScreenWidth(){var e=Math.min(screen.width,screen.height),t=rendererModel.runningExperiments.FixViewport||rendererModel.runningExperiments.fixviewport;t&&t.toLowerCase();return t&&this.isAndroidMobileDevice()&&!this.isNewChromeOnAndroid()&&(e/=window.devicePixelRatio),e}function getScrollXY(){return document.body.scrollTop?{x:document.body.scrollLeft,y:document.body.scrollTop}:{x:document.documentElement.scrollLeft,y:document.documentElement.scrollTop}}function getViewSize(){var e=document.documentElement,t=document.body,n=0==e.clientWidth?t.clientWidth:e.clientWidth,o=0==e.clientHeight?t.clientHeight:e.clientHeight;return Array(n,o)}function getZoom(){var e=90===Math.abs(window.orientation)?Math.max(screen.height,screen.width):Math.min(screen.height,screen.width);this.isAndroidMobileDevice()&&!this.isNewChromeOnAndroid()&&(e/=window.devicePixelRatio);var t=rendererModel.runningExperiments.FixViewport||rendererModel.runningExperiments.fixviewport;return t&&("New"===t||"new"===t)?e/window.innerWidth:e/document.body.offsetWidth}function validate(e,t,n){switch(e){case"name":return/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(t);case"phone":return/^09\d{8}$/.test(t);case"email":return/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(t);case"id":return/^[A-Z]\d{9}$/.test(t);case"date":return/^\d{4}-\d{2}-\d{2}$/.test(t);case"url":return/^(https:\/\/|http:\/\/|ftp:\/\/|rtsp:\/\/|mms:\/\/)?[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/.test(t);case"ip":return/^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])$/.test(t);case"ipv6":return Boolean(t.match(/:/g)?t.match(/:/g).length<=7:/^([\da-f]{1,4}:){7}[\da-f]{1,4}$/i.test(t));case"regex":return new RegExp(n).test(t)}}function loadStyle(t){try{document.createStyleSheet(t)}catch(e){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.href=t,document.getElementsByTagName("head")[0].appendChild(n)}}function getLocalStorage(e){return localStorage.getItem(e)}function setLocalStorage(e,t){localStorage.setItem(e,t)}function getCookie(e){var t=document.cookie.match(new RegExp("(^| )"+e+"=([^;]*)(;|$)"));return null!=t?unescape(t[2]):null}function setCookie(e,t,n){var o=new Date,i=o.getTime()+6e4*o.getTimezoneOffset(),a=new Date(i+288e5);a.setTime(a.getTime()+60*n*60*1e3),document.cookie=e+"="+escape(t)+";path=/;expires="+a.toGMTString()+";domain=360doc.com;"}function insertPlugin(e){var t=document.createElement("script");t.setAttribute("src",e),document.head.appendChild(t)}function pageReload(){window.onpageshow=function(e){e.persisted&&window.location.reload()}}function queryString(e){var t=location.href;if(-1!=t.indexOf("?"))for(var n=t.split("?")[1].split("&"),o=0;o<n.length;o++)if(n[o].split("=")[0]==e)return n[o].split("=")[1]}function httpsRedirect(){"https:"!==location.protocol&&location.replace("https://"+location.href.split("//")[1])}function getUrlState(e){var t=new ActiveXObject("microsoft.xmlhttp");t.Open("GET",e,!1);try{t.Send()}catch(e){}finally{return!!t.responseText&&200==t.Status}}function isMobileUserAgent(){return/iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase())}function isAppleMobileDevice(){return/iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase())}function isAndroidMobileDevice(){return/android/i.test(navigator.userAgent.toLowerCase())}Vue.component("ud-button",{name:"UdButton",template:"\n    <button\n      class=\"ud-button\"\n      @click=\"handleClick\"\n      :disabled=\"disabled || loading\"\n      :type=\"nativeType\"\n      :class=\"[\n        type ? 'ud-button--' + type : '',\n        {\n          'is-disabled': disabled,\n          'is-loading': loading,\n          'is-plain': plain,\n          'is-round': round,\n          'is-circle': circle,\n          'is-block': block,\n        }\n      ]\"\n      :style=\"{\n        'border-radius': radius + 'px',\n        'min-width': minWidth + 'px',\n      }\"\n    >\n      <i class=\"fas fa-spinner fa-pulse\" v-if=\"loading\"></i>\n      <i :class=\"icon\" v-if=\"icon && !loading\"></i>\n      <span v-if=\"$slots.default\"><slot></slot></span>\n    </button>\n  ",props:{type:{type:String,default:"default"},icon:{type:String,default:""},nativeType:{type:String,default:"button"},radius:{type:Number,default:5},minWidth:{type:Number,default:0},loading:Boolean,disabled:Boolean,plain:Boolean,round:Boolean,circle:Boolean,block:Boolean},methods:{handleClick:function(e){this.$emit("click",e)}}}),Vue.component("ud-radio",{name:"UdRadio",template:'\n    <label class="ud-radio">\n      <input\n        type="radio"\n        :checked="checked"\n        :value="label"\n        @change="handleChange"\n      >\n      <slot></slot>\n      <template v-if="!$slots.default">{{ label }}</template>\n    </label>\n  ',model:{prop:"checked",event:"change"},props:["label","checked"],methods:{handleChange:function(e){this.$emit("change",e.target.value)}}}),Vue.component("ud-checkbox",{name:"UdCheckbox",template:'\n    <input\n      class="ud-checkbox"\n      type="checkbox"\n      :checked="checked"\n      @change="$emit(\'change\', $event.target.checked)"\n    >\n  ',model:{prop:"checked",event:"change"},props:{checked:Boolean}}),Vue.component("ud-input",{name:"UdInput",template:'\n    <input\n      class="ud-input"\n      type="text"\n      :placeholder="placeholder"\n      :required="required"\n      :value="value"\n      :name="name"\n      @input="$emit(\'input\', $event.target.value)"\n    >\n  ',props:{placeholder:{type:String,default:"請輸入此欄位"},value:{type:[String,Number]},name:{type:String},required:Boolean},methods:{}}),Vue.component("ud-textarea",{name:"UdTextarea",template:'\n    <textarea\n      class="ud-textarea"\n      :cols="cols"\n      :rows="rows"\n      :placeholder="placeholder"\n      :required="required"\n      :value="value"\n      :name="name"\n      @input="$emit(\'input\', $event.target.value)"\n    >\n    </textarea>\n  ',props:{placeholder:{type:String,default:"請輸入此欄位"},value:{type:[String,Number]},rows:{type:Number},cols:{type:Number},name:{type:String},required:Boolean},methods:{}}),Vue.component("ud-select",{name:"UdSelect",template:'\n    <select\n      class="ud-select"\n      type="select"\n      :checked="checked"\n      :name="name"\n      @change="$emit(\'change\', $event.target.selected)"\n    >\n      <option value="A">選項A</option>\n      <option value="B">選項B</option>\n      <option value="C">選項C</option>\n    </select>\n  ',model:{prop:"checked",event:"change"},props:{name:{type:String},checked:Boolean}}),Vue.component("ud-switch",{name:"UdSwitch",template:"\n\n  ",props:{}}),Vue.component("ud-upload",{name:"UdUpload",template:"\n\n  ",props:{}}),Vue.component("ud-form",{name:"UdForm",template:"\n\n  ",props:{}}),Vue.component("ud-table",{name:"UdTable",template:"\n\n  ",props:{}}),Vue.component("ud-pagination",{name:"UdPagination",template:"\n\n  ",props:{}}),Vue.component("ud-alert",{name:"UdAlert",template:"\n\n  ",props:{}}),Vue.component("ud-loading",{name:"UdLoading",template:'\n    <transition name="loading" >\n      <div class="mask" @touchmove.stop.prevent v-show="visible">\n        <div class="showContent">\n          <i class="fas fa-spinner fa-pulse" v-if="loading"></i>\n          <image src="../static/img/loading1.gif" class="loadingImg"></image>\n          <text class="lable">{{label}}</text>\n        </div>\n      </div>\n    </transition>\n  ',data:function(){return{visible:!1}},props:{type:{},label:{default:"加載中...",type:String}}}),Vue.component("ud-message",{name:"UdMessage",template:"\n\n  ",props:{}}),Vue.component("ud-messagebox",{name:"UdMessage",template:"\n\n  ",props:{}}),Vue.component("ud-notification",{name:"UdNotification",template:"\n\n  ",props:{}}),Vue.component("ud-dialog",{name:"UdDialog",template:"\n\n  ",props:{}}),Vue.component("ud-popover",{name:"UdPopover",template:"\n\n  ",props:{}}),Vue.component("ud-popconfirm",{name:"Udpopconfirm",template:"\n\n  ",props:{}}),Vue.component("ud-carousel",{name:"UdCarousel",template:"\n\n  ",props:{}}),Vue.component("ud-backtop",{name:"UdBacktop",template:'\n    <ud-button @click="scrollToTop">回最頂</ud-button>\n  ',methods:{scrollToTop:function(){var e=document.documentElement.scrollTop||document.body.scrollTop;0<e&&(window.requestAnimationFrame(this.scrollToTop),window.scrollTo(0,e-e/6))}}}),Vue.component("ud-captcha",{name:"UdCaptcha",template:'\n    <div class="ud-captcha">\n      <canvas id="verify-canvas" ref="verifyCanvas" width="126" height="48"></canvas>\n      <img id="captcha-img" ref="captchaImg">\n      <input id="verify-hidden" ref="verifyHidden" type="hidden" v-model="verify">\n      <div id="refresh" ref="refresh" v-if="hasRefresh">\n        <i class="refresh fas fa-synud-alt"></i>\n      </div>\n    </div>\n  ',mounted:function(){this.captchaInit()},data:function(){return{verify:""}},props:{color:{type:String,default:"#333"},bgColor:{type:String,default:"#fff"},lineColor:{type:String,default:"#777"},font:{type:String,default:"25px Arial"},value:String,noLine:Boolean,noDots:Boolean,hasRefresh:Boolean},methods:{captchaInit:function(){function e(){var e=s.$refs.verifyCanvas,t=e.getContext("2d");t.fillStyle=s.bgColor,t.fillRect(0,0,e.width,e.height),t.fillStyle=s.color,t.font=s.font;for(var n=new Array,o=new Array,i=new Array,a=0;a<4;a++)n[a]=l[Math.floor(Math.random()*l.length)],o[a]=16*a+10,i[a]=20*Math.random()+20,t.fillText(n[a],o[a],i[a]);if(d=n.join("").toLowerCase(),s.verify=d,!s.noLine)for(a=0;a<3;a++)r(e,t);if(!s.noDots)for(a=0;a<30;a++)c(e,t);!function(e){s.$refs.verifyCanvas.style.display="none";var t=s.$refs.captchaImg;t.src=e.toDataURL("image/png")}(e)}function r(e,t){t.moveTo(Math.floor(Math.random()*e.width),Math.floor(Math.random()*e.height)),t.lineTo(Math.floor(Math.random()*e.width),Math.floor(Math.random()*e.height)),t.lineWidth=.5,t.strokeStyle=s.lineColor,t.stroke()}function c(e,t){var n=Math.floor(Math.random()*e.width),o=Math.floor(Math.random()*e.height);t.moveTo(n,o),t.lineTo(n+1,o+1),t.lineWidth=.2,t.stroke()}var d,l="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz".split(""),s=this;e(),s.$refs.captchaImg.onclick=function(){$("#verify-canvas").remove(),$("#verify").after('<canvas width="126" height="48" id="verify-canvas"></canvas>'),e()},s.$refs.refresh.onclick=function(){$("#verify-canvas").remove(),$("#verify").after('<canvas width="126" height="48" id="verify-canvas"></canvas>'),e()}}}}),Vue.component("ud-ellipsis",{name:"UdEllipsis",template:'<p class="ud-ellipsis" :style="{webkitLineClamp: maxLine }"><slot></slot></p>',props:{maxLine:{type:Number,default:1}}}),Vue.component("ud-youtube",{name:"UdYoutube",template:'\n    <div class="ud-youtube">\n      <div class="video-wrapper">\n        <iframe width="560" height="315" :src="videoIdAfter" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n      </div>\n    </div>\n  ',props:{videoId:{type:String,default:"p6qjpdi8XuE"},start:{type:Number,default:0},autoplay:Boolean,loop:Boolean,noControl:Boolean},computed:{videoIdAfter:function(){var e="https://www.youtube.com/embed/"+this.videoId+"?";return this.start&&(e=e+"&start="+this.start),this.autoplay&&(e+="&autoplay=1"),this.loop&&(e=e+"&loop=1&playlist="+this.videoId),this.noControl&&(e+="&controls=0"),e}}}),Vue.component("ud-youtube-api",{name:"UdYoutubeApi",template:'\n    <div class="ud-youtube-api">\n      <div class="video-wrapper">\n        <div :id="videoId" ref="player"></div>\n      </div>\n    </div>\n  ',props:{videoId:{type:String,default:"KnWMMgEDva0"},start:{type:Number,default:0},width:{type:Number,default:560},height:{type:Number,default:315},autoplay:Boolean,loop:Boolean,noControl:Boolean,mute:Boolean},data:function(){return{player:{}}},computed:{control:function(){return this.noControl?0:1}},mounted:function(){function e(e){o.mute&&e.target.mute()}function t(e){e.data===YT.PlayerState.ENDED&&n.playVideo()}var n,o=this,i=document.createElement("script"),a=document.getElementsByTagName("script")[0];i.src="https://www.youtube.com/iframe_api",a.parentNode.insertBefore(i,a),window.onYouTubeIframeAPIReady=function(){n=new YT.Player(o.videoId,{videoId:o.videoId,width:o.width,height:o.height,playerVars:{autoplay:o.autoplay,controls:o.control,start:o.start},events:{onReady:e,onStateChange:t}})}},methods:{}}),Vue.component("ud-scratch",{name:"UdScratch",template:'\n    <div class="ud-scratch">\n      <div class="sc__wrapper">\n        <div class="sc__container" :id="id"></div>\n      </div>\n    </div>\n  ',mounted:function(){this.initScratch()},props:{id:{type:String,default:"js--sud--container"},coverSrc:{type:String,default:"img/silver.jpg"},brushSrc:{type:String,default:"img/brush.png"},prizeSrc:{type:String,default:"img/prize_01.jpg"},aspectRatio:{type:Number,default:1.65},percent:{type:Number,default:10}},methods:{initScratch:function(){var e=this,t=document.getElementById(this.id),n=new ScratchCard("#"+this.id,{scratchType:SCRATCH_TYPE.BRUSH,containerWidth:t.offsetWidth,containerHeight:t.offsetWidth/this.aspectRatio,brushSrc:this.brushSrc,imageForwardSrc:this.coverSrc,imageBackgroundSrc:this.prizeSrc,percentToFinish:this.percent,callback:function(){e.$emit("finish")}});n.init().then(function(){n.canvas.addEventListener("scratch.move",function(){e.$emit("move",Math.floor(n.getPercent()))})}).catch(function(e){alert(e.message)})}}}),Vue.component("ud-countdown-deadline",{name:"UdCountDownDeadline",template:"\n    <div>距離5月13號 15點0分0秒 還有</div>\n    <i></i>\n    <i></i>\n    <i></i>\n  ",mounted:function(){var r=document.getElementsByTagName("i");setInterval(function(){var e=new Date,t=e.getTime();e.setMonth(4),e.setDate(13),e.setHours(15),e.setMinutes(0),e.setSeconds(0);var n=(e.getTime()-t)/1e3,o=parseInt(n%60),i=parseInt(n/60%60),a=parseInt(n/60/60);r[0].textContent=a+"時",r[1].textContent=i+"分",r[2].textContent=o+"秒"},1e3)}}),Vue.component("ud-countdown",{name:"UdCountDown",template:'\n    <span class="ud-countdown" ref="count">{{cTime}}</span>\n  ',props:{time:{type:Number,default:60},delay:Boolean},data:function(){return{cTime:this.time}},mounted:function(){this.delay||this.countdown()},methods:{countdown:function(){var e=this,t=setInterval(function(){e.cTime-=1,e.cTime<=0&&(e.$emit("timeup"),clearInterval(t))},1e3)},reset:function(){this.cTime=10,this.countdown()}}}),Vue.component("ud-date-select",{name:"UdDateSelect",template:'\n    <div class="ud-date-select">\n      <select name="year" ref="year"></select>\n      <p>年</p>\n      <select name="month" ref="month"></select>\n      <p>月</p>\n      <select name="date" ref="date"></select>\n      <p>日</p>\n    </div>\n  ',props:{roc:Boolean},mounted:function(){this.dateSelect()},methods:{dateSelect:function(){function e(){var e=parseInt(o.value),t=parseInt(i.value);!function(e){a.innerHTML="";for(var t=1;t<=e;t++)a.insertAdjacentHTML("beforeEnd","<option value="+t+">"+t+"</option>");a.insertAdjacentHTML("afterbegin","<option value='' disabled selected></option>")}(new Date(n.roc?e+1911:e,t,0).getDate())}var n=this,t=(new Date).getFullYear(),o=this.$refs.year,i=this.$refs.month,a=this.$refs.date;if(this.roc)for(var r=0;r<t-1911;r++)o.insertAdjacentHTML("beforeEnd","<option value="+(t-1911-r)+">"+(t-1911-r)+"</option>");else for(r=0;r<=120;r++)o.insertAdjacentHTML("beforeEnd","<option value="+(t-r)+">"+(t-r)+"</option>");o.insertAdjacentHTML("afterbegin","<option value='' disabled selected></option>");for(r=1;r<=12;r++)i.insertAdjacentHTML("beforeEnd","<option value="+r+">"+r+"</option>");i.insertAdjacentHTML("afterbegin","<option value='' disabled selected></option>"),o.addEventListener("change",function(){e()}),i.addEventListener("change",function(){e()})}}}),Vue.component("ud-address-select",{name:"UdAddressSelect",template:'\n    <div class="ud-address-select">\n      <p>縣市</p>\n      <select name="county" ref="county" v-model="currentCounty">\n        <option disabled selected value="">請選擇縣市</option>\n        <option v-for="county in countyList" :value="county" :key="county">{{ county }}</option>\n      </select>\n      <p>鄉填市區</p>\n      <select name="district" ref="district">\n        <option disabled selected value="">請選擇鄉填市區</option>\n        <option v-for="district in curretnDistrictList" :value="district" :key="district">{{ district }}</option>\n      </select>\n    </div>\n  ',data:function(){return{currentCounty:"",countyList:["台北市","基隆市","新北市","宜蘭縣","桃園市","新竹市","新竹縣","苗栗縣","台中市","彰化縣","南投縣","嘉義市","嘉義縣","雲林縣","台南市","高雄市","澎湖縣","金門縣","屏東縣","台東縣","花蓮縣","連江縣"],districtList:[["中正區","大同區","中山區","松山區","大安區","萬華區","信義區","士林區","北投區","內湖區","南港區","文山區"],["仁愛區","信義區","中正區","中山區","安樂區","暖暖區","七堵區"],["萬里區","金山區","板橋區","汐止區","深坑區","石碇區","瑞芳區","平溪區","雙溪區","貢寮區","新店區","坪林區","烏來區","永和區","中和區","土城區","三峽區","樹林區","鶯歌區","三重區","新莊區","泰山區","林口區","蘆洲區","五股區","八里區","淡水區","三芝區","石門區"],["宜蘭市","頭城鎮","礁溪鄉","壯圍鄉","員山鄉","羅東鎮","三星鄉","大同鄉","五結鄉","冬山鄉","蘇澳鎮","南澳鄉","釣魚台列嶼"],["中壢區","平鎮區","龍潭區","楊梅區","新屋區","觀音區","桃園區","龜山區","八德區","大溪區","復興區","大園區","蘆竹區"],["東區","北區","香山區"],["竹北市","湖口鄉","新豐鄉","新埔鎮","關西鎮","芎林鄉","寶山鄉","竹東鎮","五峰鄉","橫山鄉","尖石鄉","北埔鄉","峨眉鄉"],["竹南鎮","頭份市","三灣鄉","南庄鄉","獅潭鄉","後龍鎮","通霄鎮","苑裡鎮","苗栗市","造橋鄉","頭屋鄉","公館鄉","大湖鄉","泰安鄉","銅鑼鄉","三義鄉","西湖鄉","卓蘭鎮"],["中區","東區","南區","西區","北區","北屯區","西屯區","南屯區","太平區","大里區","霧峰區","烏日區","豐原區","后里區","石岡區","東勢區","和平區","新社區","潭子區","大雅區","神岡區","大肚區","沙鹿區","龍井區","梧棲區","清水區","大甲區","外埔區","大安區"],["彰化市","芬園鄉","花壇鄉","秀水鄉","鹿港鎮","福興鄉","線西鄉","和美鎮","伸港鄉","員林市","社頭鄉","永靖鄉","埔心鄉","溪湖鎮","大村鄉","埔鹽鄉","田中鎮","北斗鎮","田尾鄉","埤頭鄉","溪州鄉","竹塘鄉","二林鎮","大城鄉","芳苑鄉","二水鄉"],["南投市","中寮鄉","草屯鎮","國姓鄉","埔里鎮","仁愛鄉","名間鄉","集集鎮","水里鄉","魚池鄉","信義鄉","竹山鎮","鹿谷鄉"],["東區","西區"],["番路鄉","梅山鄉","竹崎鄉","阿里山","中埔鄉","大埔鄉","水上鄉","鹿草鄉","太保市","朴子市","東石鄉","六腳鄉","新港鄉","民雄鄉","大林鎮","溪口鄉","義竹鄉","布袋鎮"],["斗南鎮","大埤鄉","虎尾鎮","土庫鎮","褒忠鄉","東勢鄉","台西鄉","崙背鄉","麥寮鄉","斗六市","林內鄉","古坑鄉","莿桐鄉","西螺鎮","二崙鄉","北港鎮","水林鄉","口湖鄉","四湖鄉","元長鄉"],["中西區","東區","南區","北區","安平區","安南區","永康區","歸仁區","新化區","左鎮區","玉井區","楠西區","南化區","仁德區","關廟區","龍崎區","官田區","麻豆區","佳里區","西港區","七股區","將軍區","學甲區","北門區","新營區","後壁區","白河區","東山區","六甲區","下營區","柳營區","鹽水區","善化區","大內區","山上區","新市區","安定區"],["新興區","前金區","苓雅區","鹽埕區","鼓山區","旗津區","前鎮區","三民區","楠梓區","小港區","左營區","仁武區","大社區","東沙群島","南沙群島","岡山區","路竹區","阿蓮區","田寮區","燕巢區","橋頭區","梓官區","彌陀區","永安區","湖內區","鳳山區","大寮區","林園區","鳥松區","大樹區","旗山區","美濃區","六龜區","內門區","杉林區","甲仙區","桃源區","那瑪夏區","茂林區","茄萣區"],["馬公市","西嶼鄉","望安鄉","七美鄉","白沙鄉","湖西鄉"],["金沙鎮","金湖鎮","金寧鄉","金城鎮","烈嶼鄉","烏坵鄉"],["屏東市","三地門鄉","霧台鄉","瑪家鄉","九如鄉","里港鄉","高樹鄉","鹽埔鄉","長治鄉","麟洛鄉","竹田鄉","內埔鄉","萬丹鄉","潮州鎮","泰武鄉","來義鄉","萬巒鄉","崁頂鄉","新埤鄉","南州鄉","林邊鄉","東港鎮","琉球鄉","佳冬鄉","新園鄉","枋寮鄉","枋山鄉","春日鄉","獅子鄉","車城鄉","牡丹鄉","恆春鎮","滿州鄉"],["台東市","綠島鄉","蘭嶼鄉","延平鄉","卑南鄉","鹿野鄉","關山鎮","海端鄉","池上鄉","東河鄉","成功鎮","長濱鄉","太麻里","金峰鄉","大武鄉","達仁鄉"],["花蓮市","新城鄉","秀林鄉","吉安鄉","壽豐鄉","鳳林鎮","光復鄉","豐濱鄉","瑞穗鄉","萬榮鄉","玉里鎮","卓溪鄉","富里鄉"],["南竿鄉","北竿鄉","莒光鄉","東引鄉"]]}},computed:{curretnDistrictList:function(){var e=this.countyList.indexOf(this.currentCounty);return this.districtList[e]}},methods:{}}),Vue.component("ud-google-map",{name:"UdGoogleMap",template:'\n    <div class="ud-google-map" :style="{\'padding-bottom\': ratio + \'%\'}">\n      <iframe :src="src" :width="width" :height="height" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>\n    </div>\n  ',props:{src:{type:String,default:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1807.3065648309268!2d121.51520065825689!3d25.04719989599153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9727e339109%3A0xc34a31ce3a4abecb!2z6Ie65YyX6LuK56uZ!5e0!3m2!1szh-TW!2stw!4v1595920460513!5m2!1szh-TW!2stw"},width:{type:Number,default:600},height:{type:Number,default:450},ratio:{type:Number,default:65.25}}}),Vue.component("ud-select2",{name:"UdSelect2",template:'\n    <select2 :options="options" v-model="selected">\n      <option disabled value="0">Select one</option>\n    </select2>\n  ',props:["options","value"],mounted:function(){var e=this;$(this.$el).select2({data:this.options}).val(this.value).trigger("change").on("change",function(){e.$emit("input",this.value)})},watch:{value:function(e){$(this.$el).val(e).trigger("change")},options:function(e){$(this.$el).empty().select2({data:e})}},destroyed:function(){$(this.$el).off().select2("destroy")}});
//# sourceMappingURL=ud-modules.js.map