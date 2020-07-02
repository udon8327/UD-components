//通用按鈕
Vue.component('c-button', {
    template: "\n    <button \n      class=\"c-button\"\n      :class=\"{\n        'c-button--disabled': disabled,\n        'c-button--round': round,\n      }\"\n      :type=\"type\"\n      @click=\"handleClick\"\n      :disabled=\"disabled\"\n    >\n      <i class=\"fas fa-spinner fa-pulse\" v-if=\"loading\"></i>\n      <i :class=\"icon\" v-if=\"icon && !loading\"></i>\n      <span><slot>\u6309\u9215</slot></span>\n    </button>\n  ",
    props: {
        type: {
            type: String,
            default: "button"
        },
        icon: {
            type: String,
            default: ""
        },
        loading: Boolean,
        disabled: Boolean,
        round: Boolean,
    },
    methods: {
        handleClick: function (evt) {
            if (this.disabled)
                return;
            this.$emit('click', evt);
        }
    }
});
//通用input表單
Vue.component('c-input', {
    template: "\n    <input \n      type=\"text\" \n      :placeholder=\"placeholder\" \n      :required=\"required\" \n      :value=\"value\" \n      @input=\"$emit('input', $event.target.value)\"\n    >\n  ",
    props: {
        placeholder: {
            type: String,
            default: "請輸入此欄位"
        },
        value: String,
        required: Boolean
    },
    methods: {},
});
//通用checkbox表單
Vue.component('c-checkbox', {
    template: "\n    <input\n      class=\"c-checkbox\"\n      type=\"checkbox\"\n      :checked=\"checked\"\n      @change=\"$emit('change', $event.target.checked)\"\n    >\n  ",
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: Boolean
    },
});
//通用radio表單
Vue.component('c-radio', {
    template: "\n    <input\n      class=\"c-checkbox\"\n      type=\"radio\"\n      :checked=\"checked\"\n      @change=\"$emit('change', $event.target.checked)\"\n    >\n  ",
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: Boolean
    },
});
//圖形驗證碼
Vue.component('c-captcha', {
    template: "\n    <div class=\"c-captcha\">\n      <canvas id=\"verify-canvas\" ref=\"verifyCanvas\" width=\"126\" height=\"48\"></canvas>\n      <img id=\"captcha-img\" ref=\"captchaImg\">\n      <input id=\"verify-hidden\" ref=\"verifyHidden\" type=\"hidden\" v-model=\"verify\">\n      <div id=\"refresh\" ref=\"refresh\" v-if=\"hasRefresh\">\n        <i class=\"refresh fas fa-sync-alt\"></i>\n      </div>\n    </div>\n  ",
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
Vue.component('c-ellipsis', {
    template: '<p class="c-ellipsis" :style="{webkitLineClamp: maxLine }"><slot></slot></p>',
    props: {
        maxLine: {
            type: Number,
            default: 1,
        }
    },
});
//modal彈窗
Vue.component('c-modal', {
    template: "\n    <transition name=\"modal\">\n      <div class=\"modal-mask c-modal\">\n        <div class=\"modal-wrapper\">\n          <div class=\"modal-container\">\n            <div class=\"modal-header\">\n              <slot name=\"header\">\n                default header\n              </slot>\n            </div>\n            <div class=\"modal-body\">\n              <slot name=\"body\">\n                default body\n              </slot>\n            </div>\n            <div class=\"modal-footer\">\n              <slot name=\"footer\">\n                default footer\n                <c-button class=\"modal-default-button\" @click=\"$emit('close')\">\n                  OK\n                </c-button>\n              </slot>\n            </div>\n          </div>\n        </div>\n      </div>\n    </transition>\n  ",
});
//圖片上傳預覽
Vue.component('c-image-upload', {
    template: "\n    <div class=\"c-image-upload\">\n      <input type=\"file\" accept=\"image/*\" ref=\"input\" @change=\"previewImage\">\n      <template v-if=\"preview\">\n        <div class=\"image-preview\">\n          <img :src=\"preview\" class=\"img-fluid\" />\n          <div class=\"image-info\">\n            <p>\u6A94\u6848\u540D\u7A31\uFF1A{{ image.name }}</p>\n            <p>\u6A94\u6848\u5927\u5C0F\uFF1A{{ parseInt(image.size/1024) }}KB</p>\n          </div>\n        </div>\n        <c-button @click=\"reset\">\u522A\u9664\u5716\u7247</c-button>\n      </template>\n    </div>\n  ",
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
Vue.component('c-image-upload-multiple', {
    template: "\n    <div class=\"c-image-upload-multiple\">\n      <input type=\"file\" accept=\"image/*\" multiple=\"multiple\" ref=\"input\" @change=\"previewMultiImage\">\n      <template v-if=\"preview_list.length\">\n        <div class=\"image-preview\">\n          <div v-for=\"item, index in preview_list\" :key=\"index\">\n            <img :src=\"item\"/>\n            <div class=\"image-info\">\n              <p>\u6A94\u6848\u540D\u7A31\uFF1A{{ image_list[index].name }}</p>\n              <p>\u6A94\u6848\u5927\u5C0F\uFF1A{{ parseInt(image_list[index].size/1024) }}KB</p>\n            </div>\n          </div>\n          <c-button @click=\"reset\">\u522A\u9664\u5716\u7247</c-button>\n        </div>\n      </template>\n    </div>\n  ",
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
Vue.component('c-video-youtube', {
    template: "\n    <div class=\"c-video-youtube\">\n      <div class=\"video-wrapper\">\n        <iframe width=\"560\" height=\"315\" :src=\"videoIdAfter\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n      </div>\n    </div>\n  ",
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
Vue.component('c-video-yt', {
    template: "\n    <div class=\"c-video-yt\">\n      <div class=\"video-wrapper\">\n        <div ref=\"player\"></div>\n      </div>\n    </div>\n  ",
    props: {
        videoId: {
            type: String,
            default: "KnWMMgEDva0"
        },
        uniqId: {
            type: String,
            default: "YouTubeVideoPlayer"
        },
    },
    data: function () {
        return {
            player: {}
        };
    },
    mounted: function () {
        var _this = this;
        window.onYouTubeIframeAPIReady = function () {
            new YT.Player(_this.$refs.player, {
                videoId: _this.videoId,
                width: 560,
                height: 316,
                playerVars: {
                    autoplay: 1,
                    controls: 1,
                    showinfo: 0,
                    modestbranding: 1,
                    loop: 1,
                    fs: 0,
                    cc_load_policty: 0,
                    iv_load_policy: 3,
                    autohide: 0,
                },
                events: {
                    onReady: function (e) {
                        e.target.mute();
                    }
                }
            });
        };
    },
    methods: {},
});
//回頂部
Vue.component('c-backtop', {
    template: "\n    <c-button @click=\"scrollToTop\">\u56DE\u6700\u9802</c-button>\n  ",
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
Vue.component('c-scratch', {
    template: "\n    <div class=\"c-scratch\">\n      <div class=\"sc__wrapper\">\n        <div class=\"sc__container\" :id=\"id\"></div>\n      </div>\n    </div>\n  ",
    mounted: function () {
        this.initScratch();
    },
    props: {
        id: {
            type: String,
            default: "js--sc--container"
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
//# sourceMappingURL=components.js.map