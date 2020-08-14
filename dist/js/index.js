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
        test: [],
        form: {},
        testOptions: {
            nico: "妮可",
            maru: "花丸",
            pomu: "步夢",
            rin: "凜",
            kasukasu: "阿霞",
        },
        generate: {},
        schema: [
            {
                "component": "h3",
                "children": "Student registration"
            },
            {
                "label": "Your name",
                "name": "name",
                "validation": "required"
            },
            {
                component: 'div',
                children: 'sdfsdf'
            },
            {
                "type": "submit"
            }
        ]
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
        alert: function () {
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
        }
    }
});
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map