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
      udAxios.get(`coin`)
        .then(res => {
          console.log('res: ', res);
        })
        .catch(err => {});
    },
  }
});