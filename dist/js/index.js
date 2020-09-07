var baseURL = "https://udon8327.synology.me/";
var officialAccountURL = "https://line.me/zh-hant/";
var vm = new Vue({
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
        formObj: {
            nico: "妮可",
            maru: "花丸",
            pomu: "步夢",
            rin: "凜",
            kasumin: "阿霞"
        },
        formArr: ["妮可", "花丸", "步夢", "凜", "阿霞"],
        form: {},
        scr: 0
    },
    mounted: function () {
        var _this = this;
        this.init();
        // this.getData();
        window.addEventListener("scroll", throttle(function () {
            _this.scr = getScrollTop() + ", " + getPageViewHeight() + ", " + getPageHeight();
            if (getPageHeight() - (getScrollTop() + getPageViewHeight()) < 10) {
                console.log("loadMore " + getRandom());
            }
        }, 0));
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