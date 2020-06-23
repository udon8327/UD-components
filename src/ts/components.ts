Vue.component('c-button', {
  template: `
    <button 
      class="c-button"
      :class="{
        'c-button--disabled': disabled,
        'c-button--round': round,
      }"
      :type="type"
      @click="handleClick"
      :disabled="disabled"
    >
      <i class="fas fa-spinner fa-pulse" v-if="loading"></i>
      <i :class="icon" v-if="icon && !loading"></i>
      <span><slot>按鈕</slot></span>
    </button>
  `,
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
    handleClick(evt) {
      if(this.disabled) return;
      this.$emit('click', evt);
    }
  }
})

Vue.component('c-input', {
  template: `
    <input 
      type="text" 
      :placeholder="placeholder" 
      :required="required" 
      :value="value" 
      @input="$emit('input', $event.target.value)"
    >
  `,
  props: {
    placeholder: {
      type: String,
      default: "請輸入此欄位"
    },
    value: String,
    required: Boolean
  },
  methods: {
  },
})

Vue.component('c-checkbox', {
  template: `
    <input
      class="c-checkbox"
      type="checkbox"
      :checked="checked"
      @change="$emit('change', $event.target.checked)"
    >
  `,
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
})

Vue.component('c-radio', {
  template: `
    <input
      class="c-checkbox"
      type="radio"
      :checked="checked"
      @change="$emit('change', $event.target.checked)"
    >
  `,
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
})

Vue.component('c-captcha', {
  template: `
    <div id="random" class="c-captcha">
      <canvas id="verify-canvas" ref="verifyCanvas" width="126" height="48"></canvas>
      <img id="captcha-img">
      <input id="letify-hidden" type="hidden">
      <div id="refresh">
        <i class="refresh fas fa-sync-alt"></i>
      </div>
    </div>
  `,
  mounted() {
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
    captchaInit: function(){
      let varifyValue;
      let nums = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz".split("");
      let vm = this;
      drawCode();
      //繪製驗證碼
      function drawCode() {
        let canvas = vm.$refs.verifyCanvas; //獲取HTML端畫布
        console.log('canvas: ', canvas);
        let context = canvas.getContext("2d"); //獲取畫布2D上下文
        context.fillStyle = vm.bgColor; //畫布填充色
        context.fillRect(0, 0, canvas.width, canvas.height); //清空畫布
        context.fillStyle = vm.color; //設置字體顏色
        context.font = vm.font; //設置字體
        let rand = new Array();
        let x = new Array();
        let y = new Array();
        for (let i = 0; i < 4; i++) {
            rand[i] = nums[Math.floor(Math.random() * nums.length)]
            x[i] = i * 16 + 10;
            y[i] = Math.random() * 20 + 20;
            context.fillText(rand[i], x[i], y[i]);
        }
        varifyValue = rand.join('').toLowerCase();
        
        //畫3條隨機線
        if(vm.hasLine){
          for (let i = 0; i < 3; i++) {
            drawline(canvas, context);
          }
        }

        //畫30個隨機點
        if(vm.hasDots){
          for (let i = 0; i < 30; i++) {
            drawDot(canvas, context);
          }
        }
        convertCanvasToImage(canvas)
      }
  
      // 随机线
      function drawline(canvas, context) {
        context.moveTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));             //随机线的起点x坐标是画布x坐标0位置，y坐标是画布高度的随机数
        context.lineTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));  //随机线的终点x坐标是画布宽度，y坐标是画布高度的随机数
        context.lineWidth = 0.5; //隨機線寬
        context.strokeStyle = 'rgba(100,100,100,1)'; //隨機線描邊屬性
        context.stroke(); //描邊，即起點描到終點
      }
      // 隨機點(所謂畫面其實就是畫1px像素的線)
      function drawDot(canvas, context) {
        let px = Math.floor(Math.random() * canvas.width);
        let py = Math.floor(Math.random() * canvas.height);
        context.moveTo(px, py);
        context.lineTo(px + 1, py + 1);
        context.lineWidth = 0.2;
        context.stroke();
      }
      // 繪製圖片
      function convertCanvasToImage(canvas) {
        document.getElementById("verify-canvas").style.display = "none";
        let image = document.getElementById("captcha-img");
        image.src = canvas.toDataURL("image/png");
        return image;
      }
      // 點擊圖片刷新
      document.getElementById('captcha-img').onclick = function () {
        $('#verify-canvas').remove();
        $('#verify').after('<canvas width="100" height="40" id="verify-canvas"></canvas>')
        drawCode();
      }
      document.getElementById('refresh').onclick = function () {
        $('#verify-canvas').remove();
        $('#verify').after('<canvas width="100" height="40" id="verify-canvas"></canvas>')
        drawCode();
      }
    }
  }
})