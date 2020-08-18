Vue.use(VueFormulate);
var vm = new Vue({
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
        // formArr: ["妮可","花丸","步夢","凜","阿霞"],
        form: {
            county: "台北市",
            area: "中正區",
            address: "台北市中正區金華街30-5號2樓"
        },
    },
    mounted: function () {
        this.getData();
    },
    methods: {
        success: function () {
            alert('表單成功送出');
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
                onConfirm: function () {
                    _this.$formulate.submit('my-form');
                    _this.$alert({
                        maskClose: true,
                        msg: "已成功送出!",
                        onConfirm: function () {
                            _this.$alert();
                        }
                    });
                }
            });
        },
        confirm: function () {
            this.$formulate.submit('my-form');
            this.isConfirmShow = 0;
        },
        getData: function () {
            var _this = this;
            axios
                .get('https://udon8327.synology.me/ajax/success.php')
                .then(function (res) {
                _this.userData = res.data.userData;
            })
                .catch(function (err) {
                _this.$alert();
            })
                .finally(function () {
                _this.$loading();
            });
        }
    }
});
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map