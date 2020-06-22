var vm = new Vue({
    el: "#app",
    data: {
        title: "123",
        data: [],
        checkList: ["选中且禁用", "复选框 A"],
        arr: [[1, 2], [3, 4, 5], [6, 7, 8, 9]],
        uniqArr: []
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