Vue.use(VueFormulate);
var vm = new Vue({
    el: "#app",
    data: {
        title: "",
        value: 0,
        test: [],
        form: {
            name: "UDON",
            email: "sfsdf"
        },
        form2: {},
        testOptions: {
            "nico": "妮可",
            "maru": "花丸",
            "pomu": "步夢",
            "rin": "凜",
            "kasukasu": "阿霞",
        },
        testOptionsArr: [
            {
                value: "nico",
                label: "妮可",
                id: 0
            },
            {
                value: "maru",
                label: "花丸",
                id: 1
            },
            {
                value: "pomu",
                label: "步夢",
                id: 2
            },
            {
                value: "rin",
                label: "凜",
                id: 3
            },
        ]
    },
    computed: {},
    watch: {},
    mounted: function () {
    },
    methods: {
        alert: function () {
            alert('ok');
        },
    }
});
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map