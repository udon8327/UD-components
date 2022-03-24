var vm = new Vue({
    el: "#app",
    data: {},
    mounted: function () {
        this.getData();
    },
    computed: {},
    methods: {
        getData: function () {
            udAxios.get("profile")
                .then(function (res) {
            }).catch(function (err) { });
        },
        toDemo: function () {
            location.href = 'demo.html';
        }
    }
});
//# sourceMappingURL=index.js.map