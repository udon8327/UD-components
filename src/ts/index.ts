declare var $: (selector: string) => any;

let vm = new Vue({
  el: "#app",
  data: {
    title: "標題",
    agree: true,
    data: [],
    checkList: ["选中且禁用", "复选框 A"],
    go: false,
    disabled: false,
    showModal: false,
    percent: 0
  },
  computed: {},
  watch: {},
  mounted: function () {
    // insertPlugin('https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/8.11.8/sweetalert2.all.min.js')
    this.sa();
  },
  methods: {
    timeup: function(){
      console.log('時間到!!');
    },
    timereset: function(){
      this.$refs.count.reset();
    },
    sa: function(){
      Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
  }
});