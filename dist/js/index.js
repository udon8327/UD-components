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
            }).catch(function (err) { });
        },
        toDemo: function () {
            location.href = 'demo.html';
        }
    }
});
//# sourceMappingURL=index.js.map