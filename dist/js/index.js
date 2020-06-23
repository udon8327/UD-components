var vm = new Vue({
    el: "#app",
    data: {
        title: "標題",
        agree: true,
        data: [],
        checkList: ["选中且禁用", "复选框 A"],
        arr: [[1, 2], [3, 4, 5], [6, 7, 8, 9]],
        uniqArr: [],
        go: false,
        disabled: false,
        hasLine: false,
        hasDots: false
    },
    computed: {},
    watch: {},
    created: function () { },
    mounted: function () {
        this.uniqArr = flatArray(this.arr);
    },
    methods: {}
});
//# sourceMappingURL=index.js.map