function nl2br(e,t){if(void 0===t&&(t=!1),null==e)return"";var n=t||void 0===t?"<br />":"<br>";return(e+"").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,"$1"+n+"$2")}function randomHexColorCode(){return"#"+(1048575*Math.random()*1e6).toString(16).slice(0,6)}function randomString(e){for(var t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",n="",o=0;o<e;o++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}function formatNumber(e){for(var t=e.toString(),n=/(-?\d+)(\d{3})/;n.test(t);)t=t.replace(n,"$1,$2");return t}function copyTextToClipboard(e){var t=document.createRange();t.selectNode(document.getElementById(e));var n=window.getSelection();n.removeAllRanges(),n.addRange(t),document.execCommand("copy"),vm.udAlert({msg:"文字已複製到剪貼簿"})}function escapeHTML(e){return e.replace(/[&<>'"]/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[e]||e})}function convertCamelCase(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()}function replaceURLToLink(e){return e=e.replace(URL,function(e){var t=e;return e.match("^https?://")||(e="http://"+e),""+t})}function getRandom(e,t){return void 0===e&&(e=0),void 0===t&&(t=100),Math.floor(Math.random()*(t-e+1))+e}function round(e,t){return void 0===t&&(t=0),Number(Math.round(e+"e"+t)+"e-"+t)}function imagePreload(e){(new Image).src=e}function onImageLoaded(e,t){var n=new Image;n.src=e,n.complete?t(n):n.onload=function(){t(n)}}function isRepeat(e){for(var t=JSON.stringify(e),n=0;n<e.length;n++)if(1<t.match(new RegExp(e[n],"g")).length)return!0;return!1}function uniqArray(e){return e.filter(function(e,t,n){return n.indexOf(e)===t})}function flatArray(e,n){return void 0===n&&(n=1),e.reduce(function(e,t){return e.concat(1<n&&Array.isArray(t)?flatArray(t,n-1):t)},[])}function indexOfAll(e,o){return e.reduce(function(e,t,n){return t===o?e.concat([n]):e},[])}function intersection(e,t){var n=new Set(t);return e.filter(function(e){return n.has(e)})}function shuffle(e){for(var t,n=e.slice(0),o=n.length;o;){var i=Math.floor(Math.random()*o--);t=[n[i],n[o]],n[o]=t[0],n[i]=t[1]}return n}function typeOf(e){return void 0===e?"undefined":null===e?"null":e.constructor.name.toLowerCase()}function filterObj(e,t){var n=JSON.parse(JSON.stringify(e));for(var o in n)-1===t.indexOf(o)&&delete n[o];return n}function deleteObj(e,t){var n=JSON.parse(JSON.stringify(e));for(var o in n)-1!==t.indexOf(o)&&delete n[o];return n}function deepCloneSimple(e){return JSON.parse(JSON.stringify(e))}function deepClone(e,t){if(void 0===t&&(t=new WeakMap),null==e)return e;if(e instanceof RegExp)return new RegExp(e);if(e instanceof Date)return new Date(e);if(e instanceof Error)return new Error(e);if("object"!=typeof e)return e;if(t.get(e))return t.get(e);var n=new e.constructor;for(var o in t.set(e,n),e)e.hasOwnProperty(o)&&(n[o]=deepClone(e[o],t));return n}function isLeapYear(e){return 29===new Date(e,1,29).getDate()}function isExistDate(e,t){void 0===t&&(t="-");var n=e.split(t),o=[31,28,31,30,31,30,31,31,30,31,30,31],i=parseInt(n[0]),a=parseInt(n[1]),r=parseInt(n[2]);return 29===new Date(i,1,29).getDate()&&(o[1]=29),0<r&&r<=o[a-1]}function getColonTimeFromDate(e){return e.toTimeString().slice(0,8)}function getDaysDiffBetweenDates(e,t){return(t-e)/864e5}function isAfterDate(e,t){return t<e}function isBeforeDate(e,t){return e<t}function getDiffDate(e){var t=new Date;return t.setDate(t.getDate()+e),t.toISOString().split("T")[0]}function timeFormat(e){var t,n=new Date(e),o=new Date,i=n.getFullYear(),a=n.getMonth()+10,r=n.getDate(),s=n.getHours(),l=n.getMinutes(),d=o.getFullYear(),c=o.getHours();if(i<d)t=i+"年"+a+"月"+r+"日 "+s+":"+l;else{var u=(o-n)/36e5;if(c<u)t=a+"月"+r+"日 "+s+":"+l;else if(1<=u)t="今天 "+s+":"+l+"分";else{var m=o.getMinutes()-l;t=1<m?m+"分鐘前":"剛剛"}}return t}function uniqueId(){return Number(new Date).toString()+parseInt(10*Math.random())+parseInt(10*Math.random())+parseInt(10*Math.random())}function parseTime(e,t){if(0===arguments.length||!e)return null;var n,o=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"==typeof e?n=e:("string"==typeof e&&(e=/^[0-9]+$/.test(e)?parseInt(e):e.replace(new RegExp(/-/gm),"/")),"number"==typeof e&&10===e.toString().length&&(e*=1e3),n=new Date(e));var i={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()};return o.replace(/{([ymdhisa])+}/g,function(e,t){var n=i[t];return"a"===t?["日","一","二","三","四","五","六"][n]:n.toString().padStart(2,"0")})}function formatTime(e,t){e=10===(""+e).length?1e3*parseInt(e):+e;var n=new Date(e),o=(Date.now()-n)/1e3;return o<30?"剛剛":o<3600?Math.ceil(o/60)+"分鐘前":o<86400?Math.ceil(o/3600)+"小時前":o<172800?"1天前":t?parseTime(e,t):n.getMonth()+1+"月"+n.getDate()+"日"+n.getHours()+"時"+n.getMinutes()+"分"}function scrollTo(e,t,n,o){void 0===e&&(e="top"),void 0===t&&(t=5),void 0===n&&(n=0),void 0===o&&(o=function(){});var i=document.scrollingElement.scrollTop,a=0;a="number"==typeof e?e+n:"top"===e?0+n:"bottom"===e?document.body.scrollHeight-document.body.clientHeight+n:document.querySelector(e).offsetTop+n,function e(){if(i+=(a-i)/t,Math.abs(i-a)<=1)return document.scrollingElement.scrollTop=a,void(o&&o());document.scrollingElement.scrollTop=i,requestAnimationFrame(e)}()}function getPageScroll(e){if(e)return document.documentElement.scrollLeft||document.body.scrollLeft;var t=0;return void 0!==window.pageYOffset?t=window.pageYOffset:void 0!==document.compatMode&&"BackCompat"!=document.compatMode?t=document.documentElement.scrollTop:void 0!==document.body&&(t=document.body.scrollTop),t}function getPage(e){var t="BackCompat"==document.compatMode?document.body:document.documentElement;return e?Math.max(document.documentElement.scrollWidth,document.body.scrollWidth,t.clientWidth):Math.max(document.documentElement.scrollHeight,document.body.scrollHeight,t.clientHeight)}function getPageView(e){var t="BackCompat"==document.compatMode?document.body:document.documentElement;return e?t.clientWidth:t.clientHeight}function isRegex(e,t,n){switch(e){case"name":return/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(t);case"phone":return/^09[0-9]{8}$/.test(t);case"email":return/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(t);case"idcard":return/^[A-Z](1|2)[0-9]{8}$/.test(t);case"date":return/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/.test(t);case"number":return!isNaN(t);case"url":return/^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(t);case"ip":return/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(t);case"hex":return/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(t);case"regex":return new RegExp(n).test(t)}}function isNumber(e){return"number"===typeOf(e)&&!isNaN(e)}function isEmpty(e){switch(typeOf(e)){case"string":if(0===e.trim().length)return!0;break;case"number":break;case"boolean":if(!e)return!0;break;case"array":if(0===e.length)return!0;if(e.some(function(e){return 0===e.length}))return!0;break;case"object":break;case"null":case"undefined":return!0}return!1}function isIdCard(e){var t,n,o,i=new Array("A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","U","V","X","Y","W","Z","I","O"),a=new Array(1,9,8,7,6,5,4,3,2,1),r=new Array(2),s=0;if(-1==e.search(/^[a-z](1|2)\d{8}$/i))return!1;t=e.charAt(0).toUpperCase(),o=e.charAt(9);for(var l=0;l<26;l++)if(t==i[l]){n=l+10,r[0]=Math.floor(n/10),r[1]=n-10*r[0];break}for(l=0;l<a.length;l++)s+=l<2?r[l]*a[l]:parseInt(e.charAt(l-1))*a[l];return 10-s%10==o}function loadStyle(t){try{document.createStyleSheet(t)}catch(e){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.href=t,document.getElementsByTagName("head")[0].appendChild(n)}}function getLocalStorage(e){return localStorage.getItem(e)}function setLocalStorage(e,t){localStorage.setItem(e,t)}function getCookie(e){var t=document.cookie.match(new RegExp("(^| )"+e+"=([^;]*)(;|$)"));return null!=t?unescape(t[2]):null}function setCookie(e,t,n){var o=new Date,i=o.getTime()+6e4*o.getTimezoneOffset(),a=new Date(i+288e5);a.setTime(a.getTime()+60*n*60*1e3),document.cookie=e+"="+escape(t)+";path=/;expires="+a.toGMTString()+";domain=360doc.com;"}function insertPlugin(e){var t=document.createElement("script");t.setAttribute("src",e),document.head.appendChild(t)}function debounce(e,t){void 0===t&&(t=200);var n=null;return function(){null!==n&&clearTimeout(n),n=setTimeout(e,t)}}function throttle(n,o){void 0===o&&(o=1e3);var i=Date.now();return function(){var e=arguments,t=Date.now();o<=t-i&&(n.apply(this,e),i=Date.now())}}function throttle2(i,a){var r,s;return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Date.now(),o=this;if(s||(s=n),clearTimeout(r),a<n-s)return s=n,i.apply(o,e),void clearTimeout(r);r=setTimeout(function(){s=Date.now(),r=null,i.apply(o,e)},a)}}function queryString(e){var t=location.href;if(-1!=t.indexOf("?"))for(var n=t.split("?")[1].split("&"),o=0;o<n.length;o++)if(n[o].split("=")[0]==e)return n[o].split("=")[1]}function httpsRedirect(){"https:"!==location.protocol&&location.replace("https://"+location.href.split("//")[1])}function getUrlState(e){var t=new ActiveXObject("microsoft.xmlhttp");t.Open("GET",e,!1);try{t.Send()}catch(e){}finally{return!!t.responseText&&200==t.Status}}function toUrl(e){window.location.href=e}function jumpReload(){window.onpageshow=function(e){e.persisted&&window.location.reload()}}function cdnBackup(){window.Vue||(document.write('\n      <link href="https://pro.fontawesome.com/releases/v5.13.1/css/fontawesome.css" rel="stylesheet">\n      <link href="https://cdn.jsdelivr.net/npm/animate.css@3.7.2/animate.min.css" rel="stylesheet">\n      <link href="https://cdn.jsdelivr.net/npm/element-ui@2.13.2/lib/theme-chalk/index.css" rel="stylesheet">\n      <script src="https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js"></script>\n      <script src="https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js"></script>\n      <script src="https://cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js"></script>\n      <script src="https://cdn.jsdelivr.net/npm/@braid/vue-formulate@2.4.3/dist/formulate.min.js"></script>\n      <script src="https://cdn.jsdelivr.net/npm/element-ui@2.13.2/lib/index.js"></script>\n      <script src="js/ud-modules.js"></script>\n    '),console.log("CDN Error!!"))}function isMobileUserAgent(){return/iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase())}function isAppleMobileDevice(){return/iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase())}function isAndroidMobileDevice(){return/android/i.test(navigator.userAgent.toLowerCase())}function animate(e){var i=e.timing,a=e.draw,r=e.duration,s=performance.now();requestAnimationFrame(function e(t){var n=(t-s)/r;1<n&&(n=1);var o=i(n);a(o),n<1&&requestAnimationFrame(e)})}jumpReload(),Vue.component("ud-button",{name:"UdButton",template:"\n    <button\n      class=\"ud-button\"\n      @click=\"handleClick\"\n      ref=\"btn\"\n      :disabled=\"disabled || loading\"\n      :type=\"nativeType\"\n      :class=\"[\n        type ? 'ud-button--' + type : '',\n        {\n          'is-disabled': disabled,\n          'is-loading': loading,\n          'is-plain': plain,\n          'is-round': round,\n          'is-circle': circle,\n          'is-block': block,\n        }\n      ]\"\n      :style=\"{\n        'border-radius': radius,\n        'width': width,\n        'min-width': minWidth,\n        'max-width': maxWidth,\n      }\"\n    >\n      <i class=\"fas fa-spinner fa-pulse\" v-if=\"loading\"></i>\n      <i :class=\"icon\" v-if=\"icon && !loading\"></i>\n      <span v-if=\"$slots.default\"><slot></slot></span>\n    </button>\n  ",props:{type:{default:"default"},icon:{default:""},nativeType:{default:"button"},radius:{default:"5px"},width:{default:"100%"},minWidth:{default:"0px"},maxWidth:{default:"100%"},loading:Boolean,disabled:Boolean,plain:Boolean,round:Boolean,circle:Boolean,block:Boolean,throttle:Boolean},methods:{handleClick:function(e){this.throttle||this.$emit("click",e)}},mounted:function(){var t=this;this.throttle&&this.$refs.btn.addEventListener("click",throttle(function(e){t.$emit("click",e)}))}}),Vue.component("ud-input",{name:"UdInput",template:'\n    <div class="ud-input">\n      <input\n        v-model="modelValue"\n        v-bind="$attrs"\n        @input="onInput"\n      >\n    </div>\n  ',inheritAttrs:!1,props:{value:null},computed:{modelValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{onInput:function(){this.$parent.$emit("validate")}}}),Vue.component("ud-textarea",{name:"UdTextarea",inheritAttrs:!1,template:'\n    <div class="ud-textarea">\n      <textarea\n        type="text"\n        v-model="modelValue"\n        v-bind="$attrs"\n        @input="onInput"\n      >\n      </textarea>\n    </div>\n  ',props:{value:null},computed:{modelValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{onInput:function(){this.$parent.$emit("validate")}}}),Vue.component("ud-radio",{name:"UdRadio",inheritAttrs:!1,template:'\n    <div class="ud-radio" :class="{\'is-flex\': flex}">\n\n      <label v-if="option">\n        <input\n          type="radio"\n          v-model="modelValue"\n          :value="option"\n          v-bind="$attrs"\n          @change="onChange"\n        >\n        <div class="radio-decorator"\n          :style="{\'border-radius\': radius}"\n        ></div>\n        <p v-if="combine">{{ option }}</p>\n      </label>\n\n      <label v-for="option in options" :key="option.value" v-if="options">\n        <input\n          type="radio"\n          v-model="modelValue"\n          :value="option.value"\n          v-bind="$attrs"\n          @change="onChange"\n        >\n        <div class="radio-decorator"\n          :style="{\'border-radius\': radius}"\n        ></div>\n        <p>{{ combine ? option.value : option.label }}</p>\n      </label>\n\n    </div>\n  ',props:{value:null,option:null,options:null,flex:Boolean,radius:{default:"1em"},combine:Boolean},computed:{modelValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{onChange:function(){this.$parent.$emit("validate")}}}),Vue.component("ud-checkbox",{name:"UdCheckbox",inheritAttrs:!1,template:'\n    <div class="ud-checkbox" :class="{\'is-flex\': flex}">\n      <template v-if="typeof options === \'string\'">\n        <label>\n          <input\n            type="checkbox"\n            v-model="modelValue"\n            v-bind="$attrs"\n            @change="onChange"\n          >\n          <div class="checkbox-decorator"></div>\n          <p><slot>{{ options }}</slot></p>\n        </label>\n      </template>\n      <template v-else>\n        <label v-for="option in options" :key="option.value">\n          <input\n            type="checkbox"\n            :value="option.value"\n            v-model="modelValue"\n            v-bind="$attrs"\n            @change="onChange"\n          >\n          <div class="checkbox-decorator"></div>\n          <p>{{ combine ? option.value : option.label }}</p>\n        </label>\n      </template>\n    </div>\n  ',props:{value:null,options:null,flex:Boolean,combine:Boolean},computed:{modelValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{onChange:function(){this.$parent.$emit("validate")}}}),Vue.component("ud-select",{name:"UdSelect",inheritAttrs:!1,template:'\n    <div class="ud-select">\n      <select \n        v-model="modelValue" \n        :data-placeholder-selected="modelValue.length === 0"\n        v-bind="$attrs"\n        @change="onChange"\n      >\n        <option value="" disabled selected>{{ placeholder }}</option>\n        <option v-for="option in options" :value="option.value" :key="option.value">\n          {{ combine ? option.value : option.label }}\n        </option>\n      </select>\n    </div>\n  ',props:{value:null,options:null,placeholder:{default:"請選擇一項"},combine:Boolean},computed:{modelValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{onChange:function(){this.$parent.$emit("validate")}}}),Vue.component("ud-select-link",{name:"UdSelectLink",template:'\n    <div class="ud-select-link" :class="{\'is-flex\': flex}">\n      <ud-select v-model="modelValue[0]" :options="firstArr" :placeholder="placeholder[0]" :combine="combine"></ud-select>\n      <slot></slot>\n      <ud-select v-model="modelValue[1]" :options="secondArr" :placeholder="placeholder[1]" :combine="combine"></ud-select>\n      <slot name="second"></slot>\n      <ud-select v-model="modelValue[2]" :options="thirdArr" :placeholder="placeholder[2]" :combine="combine" v-if="third"></ud-select>\n      <slot name="third"></slot>\n    </div>\n  ',props:{value:null,options:null,placeholder:{default:function(){return["請選擇一項","請選擇一項","請選擇一項"]}},third:Boolean,flex:Boolean,combine:Boolean},computed:{modelValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}},firstValue:function(){return this.modelValue[0]},secondValue:function(){return this.modelValue[1]},thirdValue:function(){return this.modelValue[2]},firstArr:function(){return this.options},secondArr:function(){var t=this,e=[];return this.modelValue[0]&&(e=this.options.find(function(e){return e.value===t.modelValue[0]}).children),e},thirdArr:function(){var t=this,e=[];return this.modelValue[1]&&(e=this.secondArr.find(function(e){return e.value===t.modelValue[1]}).children),e}},watch:{firstValue:function(){this.modelValue.splice(1,1,"")},secondValue:function(){this.third&&this.modelValue.splice(2,1,"")}},mounted:function(){var e=this;this.$on("validate",function(){e.$nextTick(function(){e.$parent.$emit("validate")})})}}),Vue.component("ud-select-date",{name:"UdSelectDate",template:'\n    <div class="ud-select-date" :class="{\'is-flex\': flex}">\n      <ud-select v-model="modelValue[0]" :options="firstArr" :placeholder="placeholder[0]" combine></ud-select>\n      <slot></slot>\n      <ud-select v-model="modelValue[1]" :options="secondArr" :placeholder="placeholder[1]" combine></ud-select>\n      <slot name="second"></slot>\n      <ud-select v-model="modelValue[2]" :options="thirdArr" :placeholder="placeholder[2]" combine v-if="third"></ud-select>\n      <slot name="third"></slot>\n    </div>\n  ',props:{value:null,placeholder:{default:function(){return["年","月","日"]}},third:Boolean,flex:Boolean,roc:Boolean},computed:{modelValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}},firstValue:function(){return this.modelValue[0]},secondValue:function(){return this.modelValue[1]},thirdValue:function(){return this.modelValue[2]},firstArr:function(){var e=[],t=(new Date).getFullYear();this.roc&&(t-=1911);var n=t-120;this.roc&&n<=0&&(n=1);for(var o=t;n<=o;o--)e.push({value:o});return e},secondArr:function(){var e=[];if(this.firstValue)for(var t=1;t<=12;t++)e.push({value:t});return e},thirdArr:function(){var e=[];if(this.firstValue&&this.secondValue){var t=parseInt(this.firstValue);this.roc&&(t+=1911);for(var n=new Date(t,this.secondValue,0).getDate(),o=1;o<=n;o++)e.push({value:o})}return e}},watch:{firstValue:function(){this.modelValue.splice(1,1,"")},secondValue:function(){this.third&&this.modelValue.splice(2,1,"")}},mounted:function(){var e=this;this.$on("validate",function(){e.$nextTick(function(){e.$parent.$emit("validate")})})}}),Vue.component("ud-switch",{name:"UdSwitch",inheritAttrs:!1,template:'\n    <div class="ud-switch">\n      <label>\n        <input \n          type="checkbox"\n          v-model="modelValue"\n          v-bind="$attrs"\n        >\n        <div class="switch-decorator">\n          <div class="circle"></div>\n        </div>\n        <p><slot>開關</slot></p>\n      </label>\n    </div>\n  ',props:{value:{default:!1}},computed:{modelValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}}),Vue.component("ud-form-item",{name:"UdFormItem",template:'\n    <div class="ud-form-item" :class="{\'is-error\': errorMessage, \'is-flex\': flex}">\n      <div class="ud-form-item-left" :style="{ \'flex-basis\': labelWidth, \'text-align\': labelAlign }">  \n        <label v-if="label">{{ label }}</label>\n      </div>\n      <div class="ud-form-item-right">  \n        <slot></slot>\n        <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>\n      </div>\n    </div>\n  ',data:function(){return{errorMessage:"",lock:!1}},inject:["form"],props:{label:{type:String},prop:{type:String},flex:{type:Boolean},labelWidth:{type:String,default:"30%"},labelAlign:{type:String}},mounted:function(){var e=this;this.$on("validate",function(){e.validate(!1)})},methods:{validate:function(e){var n=this;if(!this.form.submitLock){for(var t=this.form.rules[this.prop],o=this.form.model[this.prop],i=0,a=t;i<a.length;i++){var r=a[i];switch(this.errorMessage="",r.type){case"required":Array.isArray(o)&&0!=o.length?o.some(function(e){return 0===e.length})&&(this.errorMessage=r.message||"此欄位為必填項目"):null===o?this.errorMessage=r.message||"此欄位為必填項目":0!==o.length&&!1!==o||(this.errorMessage=r.message||"此欄位為必填項目");break;case"name":o&&!new RegExp("^[a-zA-Z0-9_一-龥]+$").test(o)&&(this.errorMessage=r.message||"姓名格式有誤，不接受特殊符號");break;case"phone":o&&!new RegExp("^09[0-9]{8}$").test(o)&&(this.errorMessage=r.message||"電話格式有誤，例: 0929123456");break;case"email":o&&!new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$").test(o)&&(this.errorMessage=r.message||"Email格式有誤，需包含'@'符號");break;case"idcard":o&&!new RegExp("^[A-Z](1|2)[0-9]{8}$").test(o)&&(this.errorMessage=r.message||"身分證字號格式有誤，例: A123456789");break;case"date":o&&!new RegExp("^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$").test(o)&&(this.errorMessage=r.message||"日期格式有誤或不存在，例: 2020-03-04");break;case"number":o&&!new RegExp("^[0-9]+$").test(o)&&(this.errorMessage=r.message||"格式有誤，只接受數字");break;case"url":o&&!new RegExp("^((https?|ftp|file)://)?([da-z.-]+).([a-z.]{2,6})([/w .-]*)*/?$").test(o)&&(this.errorMessage=r.message||"網址格式有誤，例: https://www.google.com");break;case"ip":o&&!new RegExp("^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$").test(o)&&(this.errorMessage=r.message||"IP地址格式有誤，例: 115.28.47.26");break;case"hex":o&&!new RegExp("^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$").test(o)&&(this.errorMessage=r.message||"Hex色碼格式有誤，例: #ff0000");break;case"equl":r.caseIgnore?o&&o.toLowerCase()!==this.form.model[r.equlTo].toLowerCase()&&(this.errorMessage=r.message||"驗證碼錯誤"):o&&o!==this.form.model[r.equlTo]&&(this.errorMessage=r.message||"驗證碼錯誤");break;default:new RegExp(r.type).test(o)||(this.errorMessage=r.message||"格式有誤，請重新輸入")}if(this.errorMessage)break}if(e)return new Promise(function(e,t){n.errorMessage?t():e()})}}}}),Vue.component("ud-form",{name:"UdForm",template:'\n    <div class="ud-form" :class="{\'is-no-error-msg\': noErrorMsg}">\n      <slot></slot>\n    </div>\n  ',provide:function(){return{form:this}},data:function(){return{submitLock:!0}},props:{model:{type:Object,required:!0},rules:{type:Object},noErrorMsg:{type:Boolean}},methods:{validate:function(e,t){void 0===e&&(e=function(){console.log("驗證成功")}),void 0===t&&(t=function(){console.log("驗證失敗")}),this.submitLock=!1;var n=this.$children.filter(function(e){return e.prop}).map(function(e){return e.validate(!0)});Promise.all(n).then(function(){return e()}).catch(function(){return t()})}}}),Vue.component("ud-flex",{name:"UdFlex",template:'\n    <div class="ud-flex">\n      <slot></slot>\n    </div>\n  ',props:{}}),Vue.component("ud-arrow",{template:"\n    <i \n      class=\"ud-arrow\"\n      :class=[direction]\n      :style=\"{\n        'border-color': bdColor,\n        'border-width': '0 ' + bdWidth + 'px ' + bdWidth + 'px 0',\n        padding: padding + 'px'\n      }\">\n    </i>\n  ",props:{bdColor:{default:"#333"},bdWidth:{default:"3"},padding:{default:"3"},direction:{default:"right"}}}),Vue.component("ud-collapse",{name:"UdCollapse",template:'\n    <div class="ud-collapse" :style="{\'transition-duration\': durationSecond}">\n      <div class="ud-collapse-wrapper">\n        <slot></slot>\n      </div>\n    </div>\n  ',props:{value:{default:!1},duration:{default:.2}},computed:{durationSecond:function(){return this.duration+"s"}},watch:{value:{immediate:!0,handler:function(){var e=this;this.$nextTick(function(){e.collapse()})}}},methods:{collapse:function(){var e=this.$el;this.value?e.style.height=e.querySelector(".ud-collapse-wrapper").clientHeight+"px":e.style.height=0}}}),Vue.component("ud-ratio",{template:"\n    <div class=\"ud-ratio\">\n      <div class=\"ud-ratio-bg\" :style=\"{\n        backgroundImage: 'url(' + src + ')', \n        paddingBottom: height + '%', \n        borderRadius: radius,\n        backgroundSize: bgSize\n      }\">\n        <slot></slot>\n      </div>\n    </div>\n  ",props:{src:{default:"https://i.imgur.com/s3w1Sm3.jpg"},height:{default:100},radius:{default:"0px"},bgSize:{default:"cover"}}}),Vue.component("ud-alert",{name:"UdAlert",template:'\n    <transition name="fade">\n      <div class="ud-alert" v-if="value" v-cloak>\n        <div class="modal-wrapper" @click.self="maskCancel && $emit(\'input\', 0)">\n          <div class="modal-content">\n            <div class="modal-close" v-if="hasCancel" @click="$emit(\'input\', 0)">\n              <i class="fas fa-times"></i>\n            </div>\n            <div class="modal-header">\n              <p>{{ title }}</p>\n            </div>\n            <div class="modal-body">\n              <p>{{ message }}</p>\n              <slot></slot>\n            </div>\n            <div class="modal-footer">\n              <div class="button-area">\n                <ud-button @click="$emit(\'input\', 0)">OK</ud-button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </transition>\n  ',props:{title:{default:"警告標題"},message:{default:"警告訊息"},value:{default:!1},maskCancel:Boolean,hasCancel:Boolean}}),Vue.component("ud-confirm",{name:"UdConfirm",template:'\n    <transition name="fade">\n      <div class="ud-confirm" v-if="value" v-cloak>\n        <div class="modal-wrapper" @click.self="maskCancel && $emit(\'input\', 0)">\n          <div class="modal-content">\n            <div class="modal-close" v-if="hasCancel" @click="$emit(\'input, 0\')">\n              <i class="fas fa-times"></i>\n            </div>\n            <div class="modal-header">\n              <p>{{ title }}</p>\n            </div>\n            <div class="modal-body">\n              <p>{{ message }}</p>\n              <slot></slot>\n            </div>\n            <div class="modal-footer">\n              <div class="button-area">\n                <ud-button plain @click="$emit(\'input\', 0)">{{ cancelText }}</ud-button>\n                <ud-button @click="$emit(\'confirm\')">{{ confirmText }}</ud-button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </transition>\n  ',props:{title:{default:"確認標題"},message:{default:"確認訊息"},value:{default:!1},cancelText:{default:"取消"},confirmText:{default:"確定"},maskCancel:Boolean,hasCancel:Boolean}});var UdModalExtend=Vue.extend({template:'\n    <transition name="fade">\n      <div class="ud-alert" v-if="isShow">\n        <div class="modal-wrapper" @click.self="maskHandler">\n          <div class="modal-content">\n            <div class="modal-close" v-if="btnClose" @click="destroy">\n              <i class="fas fa-times"></i>\n            </div>\n            <div class="modal-header" v-if="title">\n              <p v-html="nl2br(title)"></p>\n            </div>\n            <div class="modal-body">\n              <p v-html="nl2br(msg)"></p>\n            </div>\n            <div class="modal-footer">\n              <ud-flex>\n                <ud-button @click="cancelHandler" plain v-if="isConfirm">{{ cancelText }}</ud-button>\n                <ud-button @click="confirmHandler">{{ confirmTextAfter }}</ud-button>\n              </ud-flex>\n            </div>\n          </div>\n        </div>\n      </div>\n    </transition>\n  ',data:function(){return{isShow:!1,isConfirm:!1,maskClose:!1,btnClose:!1,title:"",msg:"網路通信錯誤，請稍候再試",cancelText:"取消",cancel:function(){},confirmText:"",confirm:function(){}}},computed:{confirmTextAfter:function(){return this.confirmText?this.confirmText:this.isConfirm?"確定":"OK"}},mounted:function(){this.isShow=!0},methods:{nl2br:function(e){return nl2br(e)},confirmHandler:function(){"function"==typeof this.confirm&&this.confirm(),this.destroy()},cancelHandler:function(){"function"==typeof this.cancel&&this.cancel(),this.destroy()},maskHandler:function(){this.maskClose&&this.destroy()},destroy:function(){var e=this;this.isShow=!1,setTimeout(function(){e.$destroy(!0),e.$el.parentNode.removeChild(e.$el)},200)}}});Vue.prototype.udAlert=function(e){var t=new UdModalExtend({el:document.createElement("div"),data:function(){return e}});document.body.appendChild(t.$el)},Vue.prototype.$confirm=function(e){e.isConfirm=!0;var t=new UdModalExtend({el:document.createElement("div"),data:function(){return e}});document.body.appendChild(t.$el)},Vue.component("ud-modal",{name:"UdModal",template:'\n    <transition name="fade">\n      <div class="ud-modal" v-show="isShow" v-cloak>\n        <div class="modal-wrapper" @click.self="onMaskClick">\n          <div class="modal-content">\n            <div class="modal-close" v-if="hasCancel" @click="isShow = 0">\n              <i class="fas fa-times"></i>\n            </div>\n            <div class="modal-header" v-if="!$slots.default">\n              <p>{{ title }}</p>\n            </div>\n            <div class="modal-body">\n              <p v-if="!$slots.default">{{ message }}</p>\n              <slot></slot>\n            </div>\n            <div class="modal-footer" v-if="!$slots.default">\n              <div class="button-area">\n                <ud-button @click="isShow = 0">OK</ud-button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </transition>\n  ',props:{title:{default:"通用標題"},message:{default:"通用訊息"},value:{default:0},maskCancel:Boolean,hasCancel:Boolean},computed:{isShow:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{onMaskClick:function(){this.maskCancel&&(this.isShow=0)}}}),Vue.component("ud-loading",{name:"UdLoading",template:'\n    <transition name="loading">\n      <div class="ud-loading" v-show="isShow" :class="{\'theme-white\': theme === \'white\'}">\n        <div class="modal-wrapper">\n          <div class="modal-content">\n            <div class="modal-header">\n              <i :class="icon"></i>\n            </div>\n            <div class="modal-body">\n              <p v-html="nl2br(msg)"></p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </transition>\n  ',data:function(){return{isShow:!1}},props:{label:{default:"載入中..."}},methods:{nl2br:function(e){return nl2br(e)}}});var UdLoading,UdLoadingExtend=Vue.extend({template:'\n    <transition name="loading">\n      <div class="ud-loading" v-show="isShow" :class="{\'theme-white\': theme === \'white\'}">\n        <div class="modal-wrapper">\n          <div class="modal-content">\n            <div class="modal-header">\n              <div v-if="iconType === \'css\'" class="icon-css"></div>\n              <i v-else-if="iconType === \'font\'" class="icon-font" :class="iconFont"></i>\n              <img v-else class="icon-img" :src="iconImg">\n            </div>\n            <div class="modal-body">\n              <p v-html="nl2br(msg)"></p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </transition>\n  ',data:function(){return{isShow:!1,fixed:!1,theme:"",iconType:"css",iconFont:"fas fa-spinner fa-pulse",iconImg:"https://image.flaticon.com/icons/svg/553/553265.svg",msg:""}},mounted:function(){this.isShow=!0},methods:{nl2br:function(e){return nl2br(e)},destroy:function(){var e=this;this.isShow=!1,document.body.style.overflowY="auto",setTimeout(function(){e.$destroy(!0),e.$el.parentNode.removeChild(e.$el)},200)}}});Vue.prototype.udLoading={open:function(e){void 0===e&&(e={}),(UdLoading=new UdLoadingExtend({el:document.createElement("div"),data:function(){return e}})).fixed&&(document.body.style.overflowY="hidden"),document.body.appendChild(UdLoading.$el)},close:function(){UdLoading.destroy()}},Vue.component("ud-html",{template:'\n    <div class="ud-html" v-html="nl2br(text)"></div>\n  ',props:{text:{default:"<h1>H1 用戶自定義訊息</h1><h2>H2 用戶自定義訊息</h2><h3>H3 用戶自定義訊息</h3><h4>H4 用戶自定義訊息</h4><h5>H5 用戶自定義訊息</h5><h6>H6 用戶自定義訊息</h6>\n<p>p 用戶自定義訊息</p><span>span 用戶自定義訊息</span>"}},methods:{nl2br:function(e,t){if(null==e)return"";var n=t||void 0===t?"<br />":"<br>";return(e+"").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,"$1"+n+"$2")}}}),Vue.component("ud-backtop",{name:"UdBacktop",template:'\n    <ud-button @click="scrollToTop">回最頂</ud-button>\n  ',methods:{scrollToTop:function(){scrollTo()}}}),Vue.component("ud-ellipsis",{name:"UdEllipsis",template:'<p class="ud-ellipsis" :style="{webkitLineClamp: maxLine}"><slot></slot></p>',props:{maxLine:{default:1}}}),Vue.component("ud-phone",{name:"UdPhone",template:'\n    <div class="ud-phone">\n      <a :href="phoneHref">\n        <slot>{{ number }}</slot>\n      </a>\n    </div>\n  ',props:{number:{default:"0912345678"}},computed:{phoneHref:function(){return"tel:"+this.number}}}),Date.prototype.format=function(e){e||(e="yyyy-MM-dd hh:mm:ss");var t={"M+":this.getMonth()+1,"d+":this.getDate(),"H+":this.getHours(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var n in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),t)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[n]:("00"+t[n]).substr((""+t[n]).length)));return e};var service=axios.create({timeout:5e3});service.interceptors.request.use(function(e){return vm.udLoading.open(),e},function(e){return console.log(e),Promise.reject(e)}),service.interceptors.response.use(function(e){return vm.udLoading.close(),e.data.errorMsg&&(e.data.errorAct?"reload"===e.data.errorAct?vm.udAlert({msg:e.data.errorMsg,title:e.data.errorTitle,confirm:function(){return location.reload()}}):vm.udAlert({msg:e.data.errorMsg,title:e.data.errorTitle,confirm:function(){return toUrl(e.data.errorAct)}}):vm.udAlert({msg:e.data.errorMsg,title:e.data.errorTitle})),Promise.resolve(e)},function(e){if(vm.udLoading.close(),console.log("error",e),e&&e.response)switch(e.response.status){case 404:vm.udAlert({title:e.message,msg:"找不到該頁面，請稍候再試"});break;case 500:vm.udAlert({title:e.message,msg:"伺服器出錯，請稍候再試"});break;case 503:vm.udAlert({title:e.message,msg:"服務失效，請稍候再試"});break;default:vm.udAlert({title:e.message,msg:"連接錯誤："+e.response.status+"，請稍候再試"})}else vm.udAlert({title:e.message,msg:"連接到伺服器失敗，請稍候再試"});return Promise.reject(e)});var udApi={get:function(e,o,i,a){return void 0===o&&(o={}),void 0===i&&(i=!1),void 0===a&&(a=!1),new Promise(function(t,n){service.get(e,o).then(function(e){e.data.errorMsg&&!i||t(a?e:e.data)}).catch(function(e){n(a?e:e.data)})})},post:function(e,o,i,a,r){return void 0===o&&(o={}),void 0===i&&(i={}),void 0===a&&(a=!1),void 0===r&&(r=!1),new Promise(function(t,n){service.post(e,o,i).then(function(e){e.data.errorMsg&&!a||t(r?e:e.data)}).catch(function(e){n(r?e:e.data)})})},put:function(e,o,i,a,r){return void 0===o&&(o={}),void 0===i&&(i={}),void 0===a&&(a=!1),void 0===r&&(r=!1),new Promise(function(t,n){service.put(e,o,i).then(function(e){e.data.errorMsg&&!a||t(r?e:e.data)}).catch(function(e){n(r?e:e.data)})})},delete:function(e,o,i,a){return void 0===o&&(o={}),void 0===i&&(i=!1),void 0===a&&(a=!1),new Promise(function(t,n){service.delete(e,o).then(function(e){e.data.errorMsg&&!i||t(a?e:e.data)}).catch(function(e){n(a?e:e.data)})})}};
//# sourceMappingURL=ud-modules.js.map