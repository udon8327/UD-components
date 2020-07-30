//通用通知
Vue.component('ud-notify', {
    template: "\n    <div :class=\"type\" class=\"ud-notify\">\n      <i :class=\"iconClass\" class=\"icon fl\"/>\n      <span>{{ msg }}</span>\n      <span class=\"close fr eqf-no\" @click=\"close\"></span>\n    </div>\n  ",
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
        iconClass: function () {
            switch (this.type) {
                case 'success':
                    return 'eqf-info-f';
                case 'fail':
                    return 'eqf-no-f';
                case 'info':
                    return 'eqf-info-f';
                case 'warn':
                    return 'eqf-alert-f';
            }
        }
    },
    mounted: function () {
        var _this = this;
        setTimeout(function () { return _this.close(); }, 4000);
    },
    methods: {
        close: function () {
        }
    }
});
//modal彈窗
Vue.component('ud-modal', {
    template: "\n    <transition name=\"fade\">\n      <div class=\"ud-modal\">\n        <div class=\"modal-wrapper\">\n          <div class=\"modal-content\">\n            <slot></slot>\n          </div>\n        </div>\n      </div>\n    </transition>\n  ",
});
Vue.component('ud-modal-2', {
    template: "\n    <transition name=\"modal\">\n      <div class=\"modal-mask ud-modal-2\">\n        <div class=\"modal-wrapper\">\n          <div class=\"modal-container\">\n            <div class=\"modal-header\">\n              <slot name=\"header\">\n                default header\n              </slot>\n            </div>\n            <div class=\"modal-body\">\n              <slot name=\"body\">\n                default body\n              </slot>\n            </div>\n            <div class=\"modal-footer\">\n              <slot name=\"footer\">\n                default footer\n                <ud-button class=\"modal-default-button\" @click=\"$emit('close')\">\n                  OK\n                </ud-button>\n              </slot>\n            </div>\n          </div>\n        </div>\n      </div>\n    </transition>\n  ",
});
//圖片上傳預覽
Vue.component('ud-image-upload', {
    template: "\n    <div class=\"ud-image-upload\">\n      <input type=\"file\" accept=\"image/*\" ref=\"input\" @change=\"previewImage\">\n      <template v-if=\"preview\">\n        <div class=\"image-preview\">\n          <img :src=\"preview\" class=\"img-fluid\" />\n          <div class=\"image-info\">\n            <p>\u6A94\u6848\u540D\u7A31\uFF1A{{ image.name }}</p>\n            <p>\u6A94\u6848\u5927\u5C0F\uFF1A{{ parseInt(image.size/1024) }}KB</p>\n          </div>\n        </div>\n        <ud-button @click=\"reset\">\u522A\u9664\u5716\u7247</ud-button>\n      </template>\n    </div>\n  ",
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
Vue.component('ud-image-upload-multiple', {
    template: "\n    <div class=\"ud-image-upload-multiple\">\n      <input type=\"file\" accept=\"image/*\" multiple=\"multiple\" ref=\"input\" @change=\"previewMultiImage\">\n      <template v-if=\"preview_list.length\">\n        <div class=\"image-preview\">\n          <div v-for=\"item, index in preview_list\" :key=\"index\">\n            <img :src=\"item\"/>\n            <div class=\"image-info\">\n              <p>\u6A94\u6848\u540D\u7A31\uFF1A{{ image_list[index].name }}</p>\n              <p>\u6A94\u6848\u5927\u5C0F\uFF1A{{ parseInt(image_list[index].size/1024) }}KB</p>\n            </div>\n          </div>\n          <ud-button @click=\"reset\">\u522A\u9664\u5716\u7247</ud-button>\n        </div>\n      </template>\n    </div>\n  ",
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
//hm-radio
Vue.component('hm-radio', {
    template: "\n    <label class=\"hm-radio\" :class=\"{'is-checked': model === label}\">\n      <span class=\"hm-radio__input\">\n        <span class=\"hm-radio__inner\"></span>\n        <input\n          class=\"hm-radio__original\"\n          type=\"radio\"\n          :name=\"name\"\n          value=\"label\"\n          v-model=\"model\"\n        >\n      </span>\n      <span class=\"hm-radio__label\">\n        <slot></slot>\n        <template v-if=\"!$slots.default\">{{label}}</template>\n      </span>\n    </label>\n  ",
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
            get: function () {
                return this.value;
            },
            set: function (value) {
                this.$emit('input', value);
            }
        }
    },
});
Vue.component('ui-radio', {
    template: "\n    <label class=\"ui-radio\" :class=\"{'checked':model==value,'disabled':disabled}\">\n      <input type=\"radio\" ref=\"radio\" :value=\"value\" @click=\"updateVal\" :disabled=\"disabled\">\n    </label>\n  ",
    model: {
        prop: 'model',
        event: 'change'
    },
    props: {
        value: {
            type: [String, Number],
            require: true
        },
        model: {
            type: [String, Number],
            require: true
        },
        checked: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    mounted: function () {
        if (this.checked === true)
            this.updateVal();
    },
    methods: {
        updateVal: function () {
            this.$emit('change', this.$refs.radio.value);
        }
    }
});
//Checkbox 多選框
Vue.component('test-radio', {
    name: "TestRadio",
    template: "\n    <input\n      class=\"test-radio\"\n      type=\"radio\"\n      :value=\"value\"\n    >\n  ",
    props: ['value']
});
Vue.component('ud-radio-group', {
    props: ['name', 'value', 'options',],
    template: "\n    <div class=\"ud-radio-group\">\n      <label v-for=\"optionName, optionValue in options\" >\n        <input \n          type=\"radio\"\n          :name=\"name\"\n          :value=\"optionValue\"\n          :checked=\"value == optionValue\"\n          @change=\"$emit('input', $event.target.value)\"\n        >\n        {{ optionName }}\n      </label>\n    </div>\n  ",
});
Vue.component('ud-contenteditable', {
    name: "UdContenteditable",
    template: "\n    <div contenteditable=\"contenteditable\" @input=\"updateInput\" class=\"ud-contenteditable\">\n      {{ content }}\n    </div>\n  ",
    prop: ['value'],
    data: function () {
        return {
            content: ""
        };
    },
    methods: {
        updateInput: function () {
            this.$emit('input', this.content);
        }
    }
});
Vue.component('ud-vfinput', {
    template: "\n    <formulate-input\n      :type=\"type\"\n      :name=\"name\"\n      validation=\"^required|email\" \n      :validation-messages=\"{required: requiredMsg, email: '\u8ACB\u8F38\u5165\u6B63\u78BA\u7684email\u683C\u5F0F'}\">\n    </formulate-input>\n  ",
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
});
Vue.component('ud-vfform', {
    template: "\n    <formulate-form></formulate-form>\n  ",
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
});
//# sourceMappingURL=components_dev.js.map