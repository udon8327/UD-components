declare var $: (selector: string) => any;

Vue.use(VueFormulate);

let vm = new Vue({
  el: "#app",
  data: {
    title: "UDON",
    isAlertShow: 0,
    isConfirmShow: 0,
    isModalShow: 0,
    alertMessage: "這是alertMessage",
    confirmMessage: "這是confirmMessage",
    modalMessage: "這是modalMessage",
    value: 0,

    inputVal: "",
    textareaVal: "",
    radioVal: "",
    acceptVal: false,
    checkboxVal: [],
    selectVal: "",
    
    formObj: {
      nico: "妮可",
      maru: "花丸",
      pomu: "步夢",
      rin: "凜",
      kasumin: "阿霞"
    },
    // formObj: ["妮可","花丸","步夢","凜","阿霞"],

    form: {
      county: "台北市",
      area: "文山區",
      address: "台北市中正區金華街30-5號2樓"
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
    random: function(){
      console.log(getRandom());
    },
    showAlert: function(msg){
      this.isAlertShow = 1;
      this.alertMessage = msg;
    },
    showConfirm: function(msg){
      this.isConfirmShow = 1;
      this.confirmMessage = msg;
    },
    showModal: function(msg){
      this.isModalShow = 1;
      this.modalMessage = msg;
    }
  }
});