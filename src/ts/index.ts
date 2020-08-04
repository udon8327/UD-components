declare var $: (selector: string) => any;

Vue.use(VueFormulate);

let vm = new Vue({
  el: "#app",
  data: {
    title: "",
    value: 0,
    test: [],
    form: {
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
  watch: {},
  mounted: function () {

  },
  methods: {
    alert: function(){
      alert('ok');
    },
    reset: function(){
      this.$formulate.reset('my-form');
    }
  }
});