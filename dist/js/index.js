var baseURL = "https://udon8327.synology.me/";
var officialAccountURL = "https://line.me/zh-hant/";
// Vue.use(VueAwesomeSwiper)
var vm = new Vue({
    el: "#app",
    data: {
        user: {
            name: "",
            birthday: "",
            age: "",
            verify: "",
            code: "test",
            radio: "",
            agree: false,
            checkbox: [],
            select: "",
        },
        rules: {
            name: [
                { type: "required" },
                { type: "name" },
            ],
            birthday: [
                { type: "required" },
                { type: "date" }
            ],
            age: [
                { type: "required" },
                { type: "number" },
            ],
            verify: [
                { type: "required" },
                { type: "equl", equlTo: "code", caseIgnore: "true" }
            ],
            radio: [
                { type: "required" },
            ],
            agree: [
                { type: "required", message: "請先同意相關使用條款" },
            ],
            checkbox: [
                { type: "required" },
            ],
            select: [
                { type: "required" },
            ],
        },
        isTabOpen: false,
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
            { img: 'https://picsum.photos/900/506?image=508', href: '#' },
            { img: 'https://picsum.photos/900/506?image=1068', href: '#' },
            { img: 'https://picsum.photos/900/506?image=509', href: '#' }
        ],
        inputVal: "",
        textareaVal: "",
        radioVal: "",
        acceptVal: false,
        checkboxVal: [],
        selectVal: "",
        charaObj: {
            nico: "妮可",
            maru: "花丸",
            pomu: "步夢",
            rin: "凜",
            kasumin: "阿霞"
        },
        charaArr: [
            { label: "妮可", value: "nico" },
            { label: "花丸", value: "maru" },
            { label: "步夢", value: "pomu" },
            { label: "凜", value: "rin" },
            { label: "阿霞", value: "kasumin" },
        ],
        // formArr: ["妮可", "花丸", "步夢", "凜", "阿霞"],
        storeArr: [
            {
                label: "基隆市", value: "KL",
                area: [
                    { label: "仁愛區", value: "200" },
                    { label: "信義區", value: "201" },
                    { label: "中正區", value: "202" },
                    { label: "中山區", value: "203" },
                    { label: "安樂區", value: "204" },
                ]
            },
            {
                label: "台北市", value: "TP",
                area: [
                    { label: "中正區", value: "100" },
                    { label: "大同區", value: "103" },
                    { label: "中山區", value: "104" },
                    { label: "松山區", value: "105" },
                    { label: "大安區", value: "106" },
                ]
            },
            {
                label: "新北市", value: "NT",
                area: [
                    { label: "萬里區", value: "207" },
                    { label: "金山區", value: "208" },
                    { label: "板橋區", value: "220" },
                    { label: "汐止區", value: "221" },
                    { label: "深坑區", value: "222" },
                ]
            },
        ],
        form: {},
        scr: 0,
    },
    mounted: function () {
        // this.init();
        // this.getData();
        // let io = new IntersectionObserver(entry => {
        //     entry.forEach(e => {
        //       if(e.isIntersecting){
        //         e.target.src = e.target.dataset.src;
        //         e.target.classList.remove('op-0');
        //         e.target.classList.add(e.target.dataset.animate);
        //         io.unobserve(e.target);
        //       }
        //     });
        //   },
        //   { threshold: [1] }
        // );
        // let imgList = document.querySelectorAll('.test');
        // imgList.forEach(img => io.observe(img));
        // let mo = new MutationObserver(mutationRecords => {
        //   console.log(mutationRecords);
        // },)
        // mo.observe(document.querySelector('.mo'),{
        //   subtree: true,
        //   childList: true,
        //   attributes: true,
        //   characterData: true,
        // });
        // window.addEventListener('scroll', () => {
        //   this.test();
        // })
        // throttle(this.test, 2000);
    },
    methods: {
        formSubmit: function () {
            var _this = this;
            this.$refs.form.validate(function () {
                console.log('驗證成功!!');
                _this.$alert({ msg: "驗證成功!!" });
            });
        },
        test: function () {
            console.log(getRandom());
        },
        onFocus: function () {
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
            var _this = this;
            this.$alert({
                title: "警告",
                msg: this.title + "\u60A8\u597D\uFF0C\u78BA\u5B9A\u8981\u9001\u51FA\u55CE?",
                btnClose: true,
                confirm: function () {
                    _this.$formulate.submit("my-form");
                    _this.$alert({
                        maskClose: true,
                        msg: "已成功送出!",
                        confirm: function () {
                            _this.$alert();
                        }
                    });
                }
            });
        },
        confirm: function () {
            var _this = this;
            this.$confirm({
                msg: "真的要送出嗎?",
                confirm: function () {
                    _this.$formulate.submit("my-form");
                    _this.$alert({
                        msg: "已送出，謝謝您的回答"
                    });
                }
            });
        },
        submit: function () {
            this.$formulate.submit("my-form");
            this.isConfirmShow = 0;
        },
        //API
        init: function () {
            // putApi('https://private-80966-test21855.apiary-mock.com/message')
            // .then(res => console.log(res));
        },
        getData: function () {
            var _this = this;
            getApi(baseURL + "ajax/success.php").then(function (res) {
                _this.userData = res.userData;
            });
        },
        postData: function () {
            postApi(baseURL + "ajax/validate.php", "123456").then(function (res) {
                console.log("res: ", res);
            });
        }
    }
});
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map