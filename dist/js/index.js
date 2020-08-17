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
        // formObj: ["妮可","花丸","步夢","凜","阿霞"],
        form: {
            county: "台北市",
            area: "中正區",
            address: "台北市中正區金華街30-5號2樓"
        },
    },
    computed: {
        testFilter: function () {
            return deleteObj(this.testOptions, ['maru', 'rin']);
        }
    },
    watch: {
        "testArr.a": {
            deep: true,
            handler: function (newValue, oldValue) {
                alert("\u6539\u8B8A!" + newValue + "\uFF0C" + oldValue);
            }
        }
    },
    mounted: function () {
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
            this.$alert({ msg: '確定要送出嗎?' });
        },
        confirm: function () {
            this.$formulate.submit('my-form');
            this.isConfirmShow = 0;
        }
    }
});
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map