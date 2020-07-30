//通用通知
Vue.component('ud-notify', {
  template: `
    <div :class="type" class="ud-notify">
      <i :class="iconClass" class="icon fl"/>
      <span>{{ msg }}</span>
      <span class="close fr eqf-no" @click="close"></span>
    </div>
  `,
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
    iconClass() {
      switch (this.type) {
        case 'success':
          return 'eqf-info-f'
        case 'fail':
          return 'eqf-no-f'
        case 'info':
          return 'eqf-info-f'
        case 'warn':
          return 'eqf-alert-f'
      }
    }
  },
  mounted() {
    setTimeout(() => this.close(), 4000)
  },
  methods: {
    close() {
    }
  }
})

//modal彈窗
Vue.component('ud-modal', {
  template: `
    <transition name="fade">
      <div class="ud-modal">
        <div class="modal-wrapper">
          <div class="modal-content">
            <slot></slot>
          </div>
        </div>
      </div>
    </transition>
  `,

})
Vue.component('ud-modal-2', {
  template: `
    <transition name="modal">
      <div class="modal-mask ud-modal-2">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header">
                default header
              </slot>
            </div>
            <div class="modal-body">
              <slot name="body">
                default body
              </slot>
            </div>
            <div class="modal-footer">
              <slot name="footer">
                default footer
                <ud-button class="modal-default-button" @click="$emit('close')">
                  OK
                </ud-button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  `,
})

//圖片上傳預覽
Vue.component('ud-image-upload', {
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
  data: function() {
    return {
      preview: "",
      image: "",
    };
  },
  methods: {
    previewImage: function(event) {
      let input = event.target;
      if (input.files) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        }
        this.image=input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
    reset: function() {
      this.image = "";
      this.preview = "";
      this.$refs.input.value = "";
    }
  }
})

//圖片上傳預覽(多張)
Vue.component('ud-image-upload-multiple', {
  template: `
    <div class="ud-image-upload-multiple">
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
  data: function() {
    return {
      preview_list: [],
      image_list: []
    };
  },
  methods: {
    previewMultiImage: function(event) {
      let input = event.target;
      let count = input.files.length;
      let index = 0;
      if (input.files) {
        while(count --) {
          let reader = new FileReader();
          reader.onload = (e) => {
            this.preview_list.push(e.target.result);
          }
          this.image_list.push(input.files[index]);
          reader.readAsDataURL(input.files[index]);
          index ++;
        }
      }
    },
    reset: function() {
      this.image_list = [];
      this.preview_list = [];
      this.$refs.input.value = "";
    }
  }
})

//hm-radio
Vue.component('hm-radio', {
  template: `
    <label class="hm-radio" :class="{'is-checked': model === label}">
      <span class="hm-radio__input">
        <span class="hm-radio__inner"></span>
        <input
          class="hm-radio__original"
          type="radio"
          :name="name"
          value="label"
          v-model="model"
        >
      </span>
      <span class="hm-radio__label">
        <slot></slot>
        <template v-if="!$slots.default">{{label}}</template>
      </span>
    </label>
  `,
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
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  },
})

Vue.component('ui-radio', {
  template: `
    <label class="ui-radio" :class="{'checked':model==value,'disabled':disabled}">
      <input type="radio" ref="radio" :value="value" @click="updateVal" :disabled="disabled">
    </label>
  `,
  model: {//自定义 v-model的 prop和event,这个定义的意思就是使用change事件更新model的值,以此来实时更新v-model的值
    prop: 'model',
    event: 'change'
  },
  props:{
    value:{//radio的value属性
      type:[String,Number],
      require:true
    },
    model:{//这里的model指的是上面定义的v-model的prop
      type:[String,Number],
      require:true
    },
    checked:{//是否默认选中
      type:Boolean,
      default:false
    },
    disabled:{//是否禁用
      type:Boolean,
      default:false
    }
  },
  mounted:function(){//当dom渲染完成,判断组件是否默认选中
    if(this.checked===true)
      this.updateVal();
  },
  methods:{
    updateVal:function(){//当用户点击radio时,触发change事件更新v-model
      this.$emit('change',this.$refs.radio.value);
    }
  }
})

//Checkbox 多選框
Vue.component('test-radio', {
  name: "TestRadio",
  template: `
    <input
      class="test-radio"
      type="radio"
      :value="value"
    >
  `,
  props: ['value']
})

Vue.component('ud-radio-group', {
  props: ['name', 'value', 'options',],
  template: `
    <div class="ud-radio-group">
      <label v-for="optionName, optionValue in options" >
        <input 
          type="radio"
          :name="name"
          :value="optionValue"
          :checked="value == optionValue"
          @change="$emit('input', $event.target.value)"
        >
        {{ optionName }}
      </label>
    </div>
  `,
});

Vue.component('ud-contenteditable', {
  name: "UdContenteditable",
  template: `
    <div contenteditable="contenteditable" @input="updateInput" class="ud-contenteditable">
      {{ content }}
    </div>
  `,
  prop: ['value'],
  data () {
    return { 
      content: ""
    }
  },
  methods: {
    updateInput () {
      this.$emit('input', this.content);
    }
  }
})

Vue.component('ud-vfinput', {
  template: `
    <formulate-input
      :type="type"
      :name="name"
      validation="^required|email" 
      :validation-messages="{required: requiredMsg, email: '請輸入正確的email格式'}">
    </formulate-input>
  `,
  props: {
    requiredMsg: {
      type: String,
      default: '電子郵件不可為空'
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: "name"
    }
  }
})

Vue.component('ud-vfform', {
  template: `
    <formulate-form></formulate-form>
  `,
  props: {
    requiredMsg: {
      type: String,
      default: '電子郵件不可為空'
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: "name"
    }
  }
})