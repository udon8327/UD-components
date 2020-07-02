var vm = new Vue({
    el: "#app",
    data: {
        title: "標題",
        agree: true,
        data: [],
        checkList: ["选中且禁用", "复选框 A"],
        go: false,
        disabled: false,
        showModal: false,
        percent: 0
    },
    computed: {
        random: function () {
            return randomString(10);
        }
    },
    watch: {},
    created: function () {
    },
    mounted: function () {
    },
    methods: {
        finish: function () {
            alert('完成');
        },
        move: function (val) {
            this.percent = val;
        }
    }
});
//# sourceMappingURL=index.js.map