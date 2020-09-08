declare var $: (selector: string) => any;

const baseURL = "https://udon8327.synology.me/";
const officialAccountURL = "https://line.me/zh-hant/";
Vue.use(VueAwesomeSwiper)
let vm = new Vue({
  el: "#app",
  data: {
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
    swiperOptions: {
      speed: 200,
      slidesPerView: 2,
      spaceBetween: 8,
      pagination: {
        el: '.swiper-pagination'
      },
      paginationClickable: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    },
    swiperOptionTop: {
      loopedSlides: 5, // looped slides should be the same
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    },
    swiperOptionThumbs: {
      loopedSlides: 5, // looped slides should be the same
      spaceBetween: 5,
      centeredSlides: true,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true
    }
  },
  mounted: function () {
    this.init();
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper
      const swiperThumbs = this.$refs.swiperThumbs.$swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
    // this.getData();
    window.addEventListener(
      "scroll",
      throttle(() => {
        this.scr = `${getScrollTop()}, ${getPageViewHeight()}, ${getPageHeight()}`;
        if (getPageHeight() - (getScrollTop() + getPageViewHeight()) < 10) {
          console.log("loadMore " + getRandom());
        }
      }, 0)
    );
  },
  methods: {
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