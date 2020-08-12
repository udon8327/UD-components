Vue.use(VueFormulate);
var vm = new Vue({
    el: "#app",
    data: {
        title: "UDON",
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
        reset: function () {
            this.$formulate.reset('my-form');
        },
        random: function () {
            console.log(getRandom());
        }
    }
});
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map