Vue.component('c-button', {
  template: `
    <button class="c-button" :type="type" @click="handleClick">
      <i class="fas fa-spinner fa-pulse" v-if="loading"></i>
      <span><slot>按鈕</slot></span>
    </button>
  `,
  props: {
    type: {
      type: String,
      default: "button"
    },
    loading: Boolean,
  },
  methods: {
    handleClick: function(){
      this.$emit('click');
    }
  },
})

Vue.component('c-input', {
  template: `
    <input type="text" :placeholder="placeholder" :required="required" :value="value" :input="handleInput">
    </input>
  `,
  props: {
    placeholder: {
      type: String,
      default: "請輸入此欄位"
    },
    required: Boolean
  },
  methods: {
    handleInput: function(e){
      this.$emit('input', e.target.value)
    }
  },
})