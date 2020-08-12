//modal彈窗
Vue.component("ud-modal", {
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
  `
});

Vue.component("ud-modal-2", {
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
  `
});

//圖片上傳預覽
Vue.component("ud-image-upload", {
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
  data: function () {
    return {
      preview: "",
      image: ""
    };
  },
  methods: {
    previewImage: function (event) {
      let input = event.target;
      if (input.files) {
        let reader = new FileReader();
        reader.onload = e => {
          this.preview = e.target.result;
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
Vue.component("ud-image-upload-multiple", {
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
  data: function () {
    return {
      preview_list: [],
      image_list: []
    };
  },
  methods: {
    previewMultiImage: function (event) {
      let input = event.target;
      let count = input.files.length;
      let index = 0;
      if (input.files) {
        while (count--) {
          let reader = new FileReader();
          reader.onload = e => {
            this.preview_list.push(e.target.result);
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

//可編輯div
Vue.component("ud-contenteditable", {
  name: "UdContenteditable",
  template: `
    <div contenteditable="contenteditable" @input="updateInput" class="ud-contenteditable">
      {{ content }}
    </div>
  `,
  prop: ["value"],
  data() {
    return {
      content: ""
    };
  },
  methods: {
    updateInput() {
      this.$emit("input", this.content);
    }
  }
});

Vue.component("el-button", {
  template: `
    <button 
      class="el-button"
      :class="[
        type ? 'el-button--' + type : '',
        size ? 'el-button--' + size : '',
        {
          'is-plain': plain,
          'is-round': round,
          'is-circle': circle,
          'is-disabled': disabled,
          'is-loading': loading,
        }
      ]"
      :autofocus="autofocus"
      :disabled="disabled || loading"
      @click="handleClick"
    >
      <el-i class="el-icon-loading" v-if="loading"></el-i>
      <el-i :class="icon" v-if="icon && !loading"></el-i>
      <span v-if="$slots.default"><slot></slot></span>
    </button>
  `,
  name: "Button",
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: String,
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    icon: {
      type: String,
      default: ""
    },
    autofocus: Boolean,
    disabled: Boolean,
    loading: Boolean
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
});

Vue.component('el-button-group', {
  template: `
    <div class="el-button-group">
      <slot></slot>
    </div>
  `
})

Vue.component('el-i', {
  template: `
    <i :class="'el-icon-' + name"></i>
  `,
  name: 'ElIcon',
  props: {
    name: String
  }
})

//==================Vue Formulate==================
Vue.component("ud-vf-item", {
  template: `
    <div class="ud-vf-item">
      <div class="ud-vf-item--label">{{ label }}</div>
      <div class="ud-vf-item--input">
        <slot></slot>
      </div>
    </div>
  `,
  props: {
    label: {
      type: String,
      default: ""
    }
  }
});

Vue.component("ud-vf-name", {
  template: `
    <formulate-input
      type="text"
      name="name"
      placeholder="請輸入姓名"
      validation="^required|matches:/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/"
      :validation-messages="{required: '姓名不可為空', matches: '姓名格式有誤，不接受特殊符號'}"
    >
    </formulate-input>
  `,
});

Vue.component("ud-vf-gender", {
  template: `
    <formulate-input
      type="select"
      name="gender"
      :options="options"
      placeholder="請選擇性別"
      validation="^required"
      :validation-messages="{required: '性別不可為空'}"
    >
    </formulate-input>
  `,
  data() {
    return {
      options: {
        0: "男",
        1: "女"
      }
    }
  },
});

Vue.component("ud-vf-phone", {
  template: `
    <formulate-input
      type="tel"
      name="phone"
      placeholder="請輸入手機號碼"
      validation="^required|matches:/^09[0-9]{8}$/"
      :validation-messages="{required: '手機不可為空', matches: '手機格式有誤，例：0912345678'}"
    >
    </formulate-input>
  `,
});

Vue.component("ud-vf-email", {
  template: `
    <formulate-input
      type="text"
      name="email"
      placeholder="請輸入E-mail"
      validation="^required|email"
      :validation-messages="{required: 'E-mail不可為空',email: 'E-mail格式有誤，需包含@'}"
    >
    </formulate-input>
  `,
});

Vue.component("ud-vf-idcard", {
  template: `
    <formulate-input
      type="text"
      name="idcard"
      placeholder="請輸入身分證號碼"
      validation="^required|matches:/^[A-Z]{1}[0-9]{9}$/"
      :validation-messages="{required: '身分證號碼不可為空', matches: '身分證號碼格式有誤，例：A123456789'}"
    >
    </formulate-input>
  `,
});

Vue.component("ud-vf-date", {
  template: `
    <formulate-input
      type="date"
      :name="name"
      placeholder="請輸入日期"
      validation="^required|matches:/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/"
      :validation-messages="{required: '日期不可為空', matches: '日期格式有誤，例：2020-01-31'}"
    >
    </formulate-input>
  `,
  props: {
    name: {
      type: String,
      defalt: "date"
    },
  }
});

Vue.component("ud-vf-accept", {
  template: `
    <label class="ud-vf-accept">
      <formulate-input
        type="checkbox"
        name="accept"
        validation="required"
        :validation-messages="{required: '請先同意使用者條款'}"
      >
      </formulate-input>
      <p v-if="!$slots.default">我同意使用者條款</p>
      <slot></slot>
    </label>
  `,
});