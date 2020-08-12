Vue.use(VueFormulate);
Vue.component('ud-submit', {
    template: "\n    <button @click=\"submit\">\u9001\u51FA</button>\n  ",
    methods: {
        submit: function () {
            this.$emit('submit');
        }
    }
});
var vm = new Vue({
    el: "#app",
    data: {
        text: "<span>111</span>\n<span>222</span>",
        title: "UDON",
        value: 0,
        test: [],
        form: {},
        testArr: {
            a: {
                aa: "aaa",
                bb: "bbb",
                cc: "ccc"
            }
        },
        testOptions: {
            // "1": "妮可",
            // "2": "花丸",
            // "0": "步夢",
            // "3": "凜",
            // "5": "阿霞",
            "nico": "妮可",
            "maru": "花丸",
            "pomu": "步夢",
            "rin": "凜",
            "kasukasu": "阿霞",
        },
    },
    computed: {},
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
            alert('ok');
        },
        reset: function () {
            this.$formulate.reset('my-form');
        },
        console: function () {
            console.log(getRandom());
        }
    }
});
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map