function httpsRedirect(){"https:"!==location.protocol&&location.replace("https://"+location.href.split("//")[1])}function getUrlState(e){var t=new ActiveXObject("microsoft.xmlhttp");t.Open("GET",e,!1);try{t.Send()}catch(e){}finally{return!!t.responseText&&200==t.Status}}function cdnBackup(){window.Vue||(document.write('\n      <link href="https://pro.fontawesome.com/releases/v5.13.1/css/fontawesome.css" rel="stylesheet">\n      <link href="https://cdn.jsdelivr.net/npm/animate.css@3.7.2/animate.min.css" rel="stylesheet">\n      <link href="https://cdn.jsdelivr.net/npm/element-ui@2.13.2/lib/theme-chalk/index.css" rel="stylesheet">\n      <script src="https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js"></script>\n      <script src="https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js"></script>\n      <script src="https://cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js"></script>\n      <script src="https://cdn.jsdelivr.net/npm/@braid/vue-formulate@2.4.3/dist/formulate.min.js"></script>\n      <script src="https://cdn.jsdelivr.net/npm/element-ui@2.13.2/lib/index.js"></script>\n      <script src="js/ud-modules.js"></script>\n    '),console.log("CDN Error!!"))}function animate(e){var o=e.timing,a=e.draw,s=e.duration,r=performance.now();requestAnimationFrame(function e(t){var n=(t-r)/s;1<n&&(n=1);var i=o(n);a(i),n<1&&requestAnimationFrame(e)})}Vue.component("ud-upload",{name:"UdUpload",template:"\n\n  ",props:{}}),Vue.component("ud-image-upload",{name:"UdImageUpload",template:'\n    <div class="ud-image-upload">\n      <div class="preview-area">\n        <img :src="preview" ref="preview">\n      </div>\n      <div class="info-area">\n        <div class="info-left">\n          <p v-if="!image">未選擇檔案</p>\n          <p v-if="image" ref="fileName">檔案名稱：{{ image.name }}</p>\n          <p v-if="image" ref="fileSize">檔案大小：{{ parseInt(image.size/1024) }}KB</p>\n        </div>\n        <div class="info-right">\n          <input type="file" accept="image/*" ref="file" @change="previewImage">\n          <ud-button @click="clickInput">上傳圖片</ud-button>\n        </div>\n      </div>\n    </div>\n  ',data:function(){return{preview:"",image:""}},mounted:function(){var e=this.$refs.preview;e.addEventListener("dragenter",this.onDrag,!1),e.addEventListener("dragover",this.onDrag,!1),e.addEventListener("drop",this.onDrop,!1)},methods:{clickInput:function(){this.$refs.file.click()},onDrag:function(e){e.stopPropagation(),e.preventDefault()},onDrop:function(e){e.stopPropagation(),e.preventDefault(),console.log("drop");var t=e.dataTransfer;this.pre=this.$refs.file.files[0].name;var n=new FileReader;n.readAsDataURL(t.files[0]),n.onload=function(){document.querySelector("img").src=this.result},this.file=e.target.files},uploadImg:function(e){var t=this.$refs.img,n=new FileReader;n.readAsDataURL(t.files[0]),document.querySelector(".imgName").innerHTML=t.files[0].name,n.onload=function(){document.querySelector("img").src=this.result},this.file=e.target.files},previewImage:function(e){var t=this,n=e.target;if(n.files){var i=new FileReader;i.onload=function(e){t.preview=e.target.result},this.image=n.files[0],i.readAsDataURL(n.files[0])}},reset:function(){this.image="",this.preview="",this.$refs.input.value=""}}}),Vue.component("ud-image-multi-upload",{name:"UdImageMultiUpload",template:'\n    <div class="ud-image-multi-upload">\n      <input type="file" accept="image/*" multiple="multiple" ref="input" @change="previewMultiImage">\n      <template v-if="preview_list.length">\n        <div class="image-preview">\n          <div v-for="item, index in preview_list" :key="index">\n            <img :src="item"/>\n            <div class="image-info">\n              <p>檔案名稱：{{ image_list[index].name }}</p>\n              <p>檔案大小：{{ parseInt(image_list[index].size/1024) }}KB</p>\n            </div>\n          </div>\n          <ud-button @click="reset">刪除圖片</ud-button>\n        </div>\n      </template>\n    </div>\n  ',data:function(){return{preview_list:[],image_list:[]}},methods:{previewMultiImage:function(e){var t=this,n=e.target,i=n.files.length,o=0;if(n.files)for(;i--;){var a=new FileReader;a.onload=function(e){t.preview_list.push(e.target.result)},this.image_list.push(n.files[o]),a.readAsDataURL(n.files[o]),o++}},reset:function(){this.image_list=[],this.preview_list=[],this.$refs.input.value=""}}}),Vue.component("ud-table",{name:"UdTable",template:"\n\n  ",props:{}}),Vue.component("ud-pagination",{name:"UdPagination",template:"\n\n  ",props:{}}),Vue.component("ud-notify",{name:"UdNotify",template:"\n\n  ",props:{}}),Vue.component("ud-popover",{name:"UdPopover",template:"\n\n  ",props:{}}),Vue.component("ud-countdown-expire",{name:"UdCountdownExpire",template:"\n    <div>距離5月13號 15點0分0秒 還有</div>\n    <i></i>\n    <i></i>\n    <i></i>\n  ",mounted:function(){var s=document.getElementsByTagName("i");setInterval(function(){var e=new Date,t=e.getTime();e.setMonth(4),e.setDate(13),e.setHours(15),e.setMinutes(0),e.setSeconds(0);var n=(e.getTime()-t)/1e3,i=parseInt(n%60),o=parseInt(n/60%60),a=parseInt(n/60/60);s[0].textContent=a+"時",s[1].textContent=o+"分",s[2].textContent=i+"秒"},1e3)}}),Vue.component("ud-carousel",{name:"udCarousel",template:'\n    <div class="ud-carousel" ref="carousel"\n      @mouseenter.stop="toggleTimer = false"\n      @mouseleave.stop="toggleTimer = true"\n      @touchstart.stop="touchStart"\n      @touchmove.stop="touchMove"\n      :style="\'min-height:\' + minHeight">\n      <keep-alive>\n        <transition :name="carouselName">\n          <div class="item"\n            v-for="(item, index) in carousels"\n            v-if="show == index"\n            :key="index"\n          >\n            <a :href="item.href"><img :src="item.img"/></a>\n          </div>\n        </transition>\n      </keep-alive>\n\n      <!-- arrows -->\n      <div class="arrows-group" v-if="arrows">\n        <a class="button-prev" href="#" @click.prevent="toPrev">\n          <slot name="arrows-prev">\n            <img src="//akveo.github.io/eva-icons/outline/png/128/arrow-ios-back-outline.png"/>\n          </slot>\n        </a>\n        <a class="button-next" href="#" @click.prevent="toNext">\n          <slot name="arrows-next">\n            <img src="//akveo.github.io/eva-icons/outline/png/128/arrow-ios-forward-outline.png"/>\n          </slot>\n        </a>\n      </div>\n\n      <!-- dots -->\n      <div class="dot-group" v-if="dots">\n        <a v-for="(l, index) in len" href="#"\n          :class="{ \'active\': show == index }"\n          @click.prevent="show = index"\n        ></a>\n      </div>\n\n    </div>\n  ',props:{carousels:{type:Array},auto:{type:Boolean,default:!1},delay:{type:Number,default:3e3},dots:{type:Boolean,default:!0},arrows:{type:Boolean,default:!0}},data:function(){return{carouselName:"carousel-next",len:0,show:0,xDown:null,yDown:null,autoplay:!1,toggleTimer:!0,minHeight:0}},methods:{toNext:function(){this.carouselName="carousel-next",this.show+1>=this.len?this.show=0:this.show=this.show+1},toPrev:function(){this.carouselName="carousel-prev",this.show-1<0?this.show=this.len-1:this.show=this.show-1},touchStart:function(e){this.xDown=e.touches[0].clientX,this.yDown=e.touches[0].clientY},touchMove:function(e){if(this.xDown&&this.yDown){var t=e.touches[0].clientX,n=e.touches[0].clientY,i=this.xDown-t,o=this.yDown-n;Math.abs(i)>Math.abs(o)&&(0<i?this.toNext():this.toPrev()),this.xDown=null,this.yDown=null}},autoPlay:function(){var e=this;setInterval(function(){e.toggleTimer&&e.toNext()},this.delay)}},mounted:function(){var e=this;this.len=this.carousels.length,this.len<=1&&(this.arrows=!1),this.auto&&this.autoPlay(),window.addEventListener("load",function(){e.minHeight=e.$refs.carousel.offsetHeight+"px"})}}),Vue.component("ud-youtube",{name:"UdYoutube",template:'\n    <div class="ud-youtube">\n      <div class="video-wrapper">\n        <iframe width="560" height="315" :src="videoIdAfter" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n      </div>\n    </div>\n  ',props:{videoId:{default:"p6qjpdi8XuE"},start:{default:0},autoplay:Boolean,loop:Boolean,noControl:Boolean},computed:{videoIdAfter:function(){var e="https://www.youtube.com/embed/"+this.videoId+"?";return this.start&&(e=e+"&start="+this.start),this.autoplay&&(e+="&autoplay=1"),this.loop&&(e=e+"&loop=1&playlist="+this.videoId),this.noControl&&(e+="&controls=0"),e}}}),Vue.component("ud-youtube-api",{name:"UdYoutubeApi",template:'\n    <div class="ud-youtube-api">\n      <div class="video-wrapper">\n        <div :id="videoId" ref="player"></div>\n      </div>\n    </div>\n  ',props:{videoId:{default:"KnWMMgEDva0"},start:{default:0},width:{default:560},height:{default:315},autoplay:Boolean,loop:Boolean,noControl:Boolean,mute:Boolean},data:function(){return{player:{}}},computed:{control:function(){return this.noControl?0:1}},mounted:function(){function e(e){i.mute&&e.target.mute()}function t(e){e.data===YT.PlayerState.ENDED&&n.playVideo()}var n,i=this,o=document.createElement("script"),a=document.getElementsByTagName("script")[0];o.src="https://www.youtube.com/iframe_api",a.parentNode.insertBefore(o,a),window.onYouTubeIframeAPIReady=function(){n=new YT.Player(i.videoId,{videoId:i.videoId,width:i.width,height:i.height,playerVars:{autoplay:i.autoplay,controls:i.control,start:i.start},events:{onReady:e,onStateChange:t}})}},methods:{}}),Vue.component("ud-google-map",{name:"UdGoogleMap",template:'\n    <div class="ud-google-map" :style="{\'padding-bottom\': ratio + \'%\'}">\n      <iframe :src="src" :width="width" :height="height" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>\n    </div>\n  ',props:{src:{default:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1807.3065648309268!2d121.51520065825689!3d25.04719989599153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9727e339109%3A0xc34a31ce3a4abecb!2z6Ie65YyX6LuK56uZ!5e0!3m2!1szh-TW!2stw!4v1595920460513!5m2!1szh-TW!2stw"},width:{default:600},height:{default:450},ratio:{default:65.25}}}),Vue.component("ud-select2",{name:"UdSelect2",template:'\n    <select2 :options="options" v-model="selected">\n      <option disabled value="0">Select one</option>\n    </select2>\n  ',props:{value:{default:null},options:{default:null}},mounted:function(){var e=this;$(this.$el).select2({data:this.options}).val(this.value).trigger("change").on("change",function(){e.$emit("input",this.value)})},watch:{value:function(e){$(this.$el).val(e).trigger("change")},options:function(e){$(this.$el).empty().select2({data:e})}},destroyed:function(){$(this.$el).off().select2("destroy")}}),Vue.component("ud-scratch",{name:"UdScratch",template:'\n    <div class="ud-scratch">\n      <div class="sc__wrapper">\n        <div class="sc__container" :id="id"></div>\n      </div>\n    </div>\n  ',mounted:function(){this.initScratch()},props:{id:{default:"js--sud--container"},coverSrc:{default:"img/silver.jpg"},brushSrc:{default:"img/brush.png"},prizeSrc:{default:"img/prize_01.jpg"},aspectRatio:{default:1.65},percent:{default:10}},methods:{initScratch:function(){var e=this,t=document.getElementById(this.id),n=new ScratchCard("#"+this.id,{scratchType:SCRATCH_TYPE.BRUSH,containerWidth:t.offsetWidth,containerHeight:t.offsetWidth/this.aspectRatio,brushSrc:this.brushSrc,imageForwardSrc:this.coverSrc,imageBackgroundSrc:this.prizeSrc,percentToFinish:this.percent,callback:function(){e.$emit("finish")}});n.init().then(function(){n.canvas.addEventListener("scratch.move",function(){e.$emit("move",Math.floor(n.getPercent()))})}).catch(function(e){alert(e.message)})}}}),Vue.component("ud-editor",{name:"UdEditor",template:"<h1>文案編輯器</h1>"}),Vue.component("ud-contenteditable",{name:"UdContenteditable",template:'\n    <div contenteditable="contenteditable" @input="updateInput" class="ud-contenteditable">\n      {{ content }}\n    </div>\n  ',prop:["value"],data:function(){return{content:""}},methods:{updateInput:function(){this.$emit("input",this.content)}}}),Vue.directive("focus",{inserted:function(e){e.focus()}});
//# sourceMappingURL=ud-modules-extra.js.map