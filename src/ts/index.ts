declare var $: (selector: string) => any;

Vue.use(VueFormulate);

Vue.component('ud-submit', {
  template: `
    <button @click="submit">送出</button>
  `,
  methods: {
    submit(){
      this.$emit('submit');
    }
  }
})

let vm = new Vue({
  el: "#app",
  data: {
    text: "<span>111</span>\n<span>222</span>",
    title: "UDON",
    value: 0,
    test: [],
    form: {
    },
    testArr: {
      a: {
        aa: "aaa",
        bb: "bbb",
        cc: "ccc"
      }
    },
    testOptions: {
      // "1": "妮可",
      // "2": "花丸",
      // "0": "步夢",
      // "3": "凜",
      // "5": "阿霞",
      "nico": "妮可",
      "maru": "花丸",
      "pomu": "步夢",
      "rin": "凜",
      "kasukasu": "阿霞",
    },
  },
  computed: {
  },
  watch: {
    "testArr.a": {
      deep: true,
      handler: function(newValue, oldValue){
        alert(`改變!${newValue}，${oldValue}`);
      }
    }
  },
  mounted: function () {

  },
  methods: {
    alert: function(){
      alert('ok');
    },
    reset: function(){
      this.$formulate.reset('my-form');
    },
    console(){
      console.log(getRandom());
    }
  }
});