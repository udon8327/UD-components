Vue.component('c-button', {
    template: "\n    <button \n      class=\"c-button\"\n      :class=\"{\n        'c-button--disabled': disabled,\n        'c-button--round': round,\n      }\"\n      :type=\"type\"\n      @click=\"handleClick\"\n      :disabled=\"disabled\"\n    >\n      <i class=\"fas fa-spinner fa-pulse\" v-if=\"loading\"></i>\n      <i :class=\"icon\" v-if=\"icon && !loading\"></i>\n      <span><slot>\u6309\u9215</slot></span>\n    </button>\n  ",
    props: {
        type: {
            type: String,
            default: "button"
        },
        icon: {
            type: String,
            default: ''
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
Vue.component('c-captcha', {
    template: "\n    <div id=\"random\" class=\"c-captcha\">\n      <canvas id=\"verify-canvas\" ref=\"verifyCanvas\" width=\"126\" height=\"48\"></canvas>\n      <img id=\"captcha-img\">\n      <input id=\"letify-hidden\" type=\"hidden\">\n      <div id=\"refresh\">\n        <i class=\"refresh fas fa-sync-alt\"></i>\n      </div>\n    </div>\n  ",
    mounted: function () {
        this.captchaInit();
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
            default: "#fff"
        },
        font: {
            type: String,
            default: "25px Arial"
        },
        hasLine: {
            type: Boolean,
            default: true
        },
        hasDots: {
            type: Boolean,
            default: true
        },
    },
    methods: {
        captchaInit: function () {
            var varifyValue;
            var nums = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz".split("");
            var vm = this;
            drawCode();
            //繪製驗證碼
            function drawCode() {
                var canvas = vm.$refs.verifyCanvas; //獲取HTML端畫布
                console.log('canvas: ', canvas);
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
                varifyValue = rand.join('').toLowerCase();
                //畫3條隨機線
                if (vm.hasLine) {
                    for (var i = 0; i < 3; i++) {
                        drawline(canvas, context);
                    }
                }
                //畫30個隨機點
                if (vm.hasDots) {
                    for (var i = 0; i < 30; i++) {
                        drawDot(canvas, context);
                    }
                }
                convertCanvasToImage(canvas);
            }
            // 随机线
            function drawline(canvas, context) {
                context.moveTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)); //随机线的起点x坐标是画布x坐标0位置，y坐标是画布高度的随机数
                context.lineTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)); //随机线的终点x坐标是画布宽度，y坐标是画布高度的随机数
                context.lineWidth = 0.5; //隨機線寬
                context.strokeStyle = 'rgba(100,100,100,1)'; //隨機線描邊屬性
                context.stroke(); //描邊，即起點描到終點
            }
            // 隨機點(所謂畫面其實就是畫1px像素的線)
            function drawDot(canvas, context) {
                var px = Math.floor(Math.random() * canvas.width);
                var py = Math.floor(Math.random() * canvas.height);
                context.moveTo(px, py);
                context.lineTo(px + 1, py + 1);
                context.lineWidth = 0.2;
                context.stroke();
            }
            // 繪製圖片
            function convertCanvasToImage(canvas) {
                document.getElementById("verify-canvas").style.display = "none";
                var image = document.getElementById("captcha-img");
                image.src = canvas.toDataURL("image/png");
                return image;
            }
            // 點擊圖片刷新
            document.getElementById('captcha-img').onclick = function () {
                $('#verify-canvas').remove();
                $('#verify').after('<canvas width="100" height="40" id="verify-canvas"></canvas>');
                drawCode();
            };
            document.getElementById('refresh').onclick = function () {
                $('#verify-canvas').remove();
                $('#verify').after('<canvas width="100" height="40" id="verify-canvas"></canvas>');
                drawCode();
            };
        }
    }
});
//# sourceMappingURL=components.js.map