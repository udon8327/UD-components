declare var $: (selector: string) => any;

const baseURL = "https://udon8327.synology.me/";
const officialAccountURL = "https://line.me/zh-hant/";

// Vue.use(VueAwesomeSwiper)

let vm = new Vue({
  el: "#app",
  data: {

    user: {
      name: "",
      phone: "",
      verify: "",
      code: "test"
    },
    rules: {
      // name: { required: "姓名不可為空", name: "不接受特殊符號" },
      // phone: { required: "電話不可為空", phone: "格式有誤" }
      // name: { rule: ['required','name'], message: ['姓名不可為空','格式有誤，不接受特殊符號'],
      // phone: { rule: "required|^09[0-9]{8}$", message: "電話不可為空|格式有誤"},
      name: [
        { type: "required" },
        { type: "name" },
      ],
      phone: [
        { type: "required" },
        { type: "phone", message: '幹你娘' }
      ],
      verify: [
        { type: "required" },
        { type: "equl", equlTo: "code" }
      ]
    },


    title: "UDON",
    switchVal: false,
    userData: {},
    captcha: "",
    isAlertShow: 0,
    isConfirmShow: 0,
    isModalShow: 0,
    alertMessage: "這是alertMessage",
    confirmMessage: "這是confirmMessage",
    modalMessage: "這是modalMessage",
    value: 0,
    carouselList: [
      {img: 'https://picsum.photos/900/506?image=508', href: '#'},
      {img: 'https://picsum.photos/900/506?image=1068', href: '#'},
      {img: 'https://picsum.photos/900/506?image=509', href: '#'}
    ],

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
    formArr: ["妮可", "花丸", "步夢", "凜", "阿霞"],
    form: {},
    scr: 0,
  },
  mounted: function () {

    this.init();
    this.getData();
    
    let io = new IntersectionObserver(entry => {
        entry.forEach(e => {
          if(e.isIntersecting){
            e.target.src = e.target.dataset.src;
            e.target.classList.remove('op-0');
            e.target.classList.add(e.target.dataset.animate);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: [1] }
    );
    let imgList = document.querySelectorAll('.test');
    imgList.forEach(img => io.observe(img));


    let mo = new MutationObserver(mutationRecords => {
      console.log(mutationRecords);
    },)
    mo.observe(document.querySelector('.mo'),{
      subtree: true,
      childList: true,
      attributes: true,
      characterData: true,
    });

    window.addEventListener('scroll', () => {
      this.test();
    })
    throttle(this.test, 2000);
  },
  methods: {
    formSubmit: function(){
      this.$refs.form.validate(() => {
        console.log('表單送出成功');
      });
    },
    test: function(){
      console.log(getRandom());
    },
    onFocus: function(){
      console.log('aa');
    },
    load: function () {
      console.log("加載!");
    },
    success: function () {
      this.$alert({ msg: "表單成功送出" });
    },
    random: function () {
      console.log(getRandom());
    },
    showAlert: function (msg) {
      this.isAlertShow = 1;
      this.alertMessage = msg;
    },
    showConfirm: function (msg) {
      this.isConfirmShow = 1;
      this.confirmMessage = msg;
    },
    showModal: function (msg) {
      this.isModalShow = 1;
      this.modalMessage = msg;
    },
    alert: function () {
      this.$alert({
        title: "警告",
        msg: `${this.title}您好，確定要送出嗎?`,
        btnClose: true,
        confirm: () => {
          this.$formulate.submit("my-form");
          this.$alert({
            maskClose: true,
            msg: "已成功送出!",
            confirm: () => {
              this.$alert();
            }
          });
        }
      });
    },
    confirm: function () {
      this.$confirm({
        msg: "真的要送出嗎?",
        confirm: () => {
          this.$formulate.submit("my-form");
          this.$alert({
            msg: "已送出，謝謝您的回答"
          });
        }
      });
    },
    submit() {
      this.$formulate.submit("my-form");
      this.isConfirmShow = 0;
    },
    //API
    init: function () {
      // putApi('https://private-80966-test21855.apiary-mock.com/message')
      // .then(res => console.log(res));
    },
    getData() {
      getApi(baseURL + `ajax/success.php`).then(res => {
        this.userData = res.userData;
      });
    },
    postData() {
      postApi(baseURL + `ajax/validate.php`, "123456").then(res => {
        console.log("res: ", res);
      });
    }
  }
});