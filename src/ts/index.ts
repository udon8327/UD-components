declare var $: (selector: string) => any;

Vue.use(VueFormulate);

let vm = new Vue({
  el: "#app",
  data: {
    title: "UDON",
    value: 0,
    test: [],
    form: {
    },
    testOptions: {
      nico: "妮可",
      maru: "花丸",
      pomu: "步夢",
      rin: "凜",
      kasukasu: "阿霞",
    },
  },
  computed: {
    testFilter: function(){
      return deleteObj(this.testOptions,['maru','rin']);
    }
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
      alert('表單成功送出');
    },
    reset: function(){
      this.$formulate.reset('my-form');
    },
    random(){
      console.log(getRandom());
    }
  }
});