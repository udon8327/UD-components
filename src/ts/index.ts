declare var $: (selector: string) => any;

let vm = new Vue({
  el: "#app",
  data: {
  },
  mounted() {
    this.getData();
  },
  computed: {
  },
  methods: {
    getData() {
      udAxios.get(`profile`)
        .then(res => {
        }).catch(err => {});
    },
    toDemo() {
      location.href = 'demo.html';
    }
  }
});