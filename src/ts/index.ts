declare var $: (selector: string) => any;

const baseURL = "https://udon8327.synology.me/";

let vm = new Vue({
  el: "#app",
  data: {
    title: "UDON",
    userData: {},
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
    // formArr: ["妮可","花丸","步夢","凜","阿霞"],
    form: {
      county: "台北市",
      area: "中正區",
      address: "台北市中正區金華街30-5號2樓"
    },
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    success: function() {
      this.$alert({msg: '表單成功送出'});
    },
    random: function() {
      console.log(getRandom());
    },
    showAlert: function(msg) {
      this.isAlertShow = 1;
      this.alertMessage = msg;
    },
    showConfirm: function(msg) {
      this.isConfirmShow = 1;
      this.confirmMessage = msg;
    },
    showModal: function(msg) {
      this.isModalShow = 1;
      this.modalMessage = msg;
    },
    alert: function() {
      this.$alert(
        {
          title: "警告",
          msg: `${this.title}您好，確定要送出嗎?`,
          btnClose: true,
          confirm: () => {
            this.$formulate.submit('my-form');
            this.$alert(
              {
                maskClose: true,
                msg: "已成功送出!",
                confirm: () => {
                  this.$alert();
                }
              }
            )
          }
        }
      );
    },
    confirm: function(){
      this.$confirm({
        msg: "真的要送出嗎?",
        confirm: () => {
          this.$formulate.submit('my-form');
          this.$alert({
            msg: "已送出，謝謝您的回答",
          });
        },
      })
    },
    submit(){
      this.$formulate.submit('my-form');
      this.isConfirmShow = 0;
    },
    //API
    getData(){
      getApi(baseURL + `ajax/success.php`)
      .then(res => {
        this.userData = res.userData;
      })
    },
    postData(){
      postApi(baseURL + `ajax/validate.php`, "123456")
      .then(res => {
        console.log('res: ', res);
      })
    },
  }
});