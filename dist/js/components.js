Vue.component('c-button', {
    template: "\n    <button class=\"c-button\" :type=\"type\" @click=\"handleClick\">\n      <i class=\"fas fa-spinner fa-pulse\" v-if=\"loading\"></i>\n      <span><slot>\u6309\u9215</slot></span>\n    </button>\n  ",
    props: {
        type: {
            type: String,
            default: "button"
        },
        loading: Boolean,
    },
    methods: {
        handleClick: function () {
            this.$emit('click');
        }
    },
});
Vue.component('c-input', {
    template: "\n    <input type=\"text\" :placeholder=\"placeholder\" :required=\"required\" :value=\"value\" :input=\"handleInput\">\n    </input>\n  ",
    props: {
        placeholder: {
            type: String,
            default: "請輸入此欄位"
        },
        required: Boolean
    },
    methods: {
        handleInput: function (e) {
            this.$emit('input', e.target.value);
        }
    },
});
//# sourceMappingURL=components.js.map