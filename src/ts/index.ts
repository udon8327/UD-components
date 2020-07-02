declare var $: (selector: string) => any;

let vm = new Vue({
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
  computed: {},
  watch: {},
  mounted: function () {},
  methods: {}
});