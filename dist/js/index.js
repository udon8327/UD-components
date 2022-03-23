var vm = new Vue({
    el: "#app",
    data: {},
    mounted: function () {
        this.getData();
    },
    computed: {},
    methods: {
        getData: function () {
            udAxios.get("coin")
                .then(function (res) {
                console.log('res: ', res);
            })
                .catch(function (err) { });
        },
    }
});
//# sourceMappingURL=index.js.map