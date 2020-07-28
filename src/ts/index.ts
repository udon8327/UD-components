declare var $: (selector: string) => any;

let vm = new Vue({
  el: "#app",
  data: {
    title: "",
    agree: true,
    data: [],
    radio: "1",
    radio2: "A",
    checkList: ["选中且禁用", "复选框 A"],
    go: false,
    disabled: false,
    showModal: false,
    percent: 0,
    options: [{
      value: '選項1',
      label: '黄金糕'
    }, {
      value: '選項2',
      label: '双皮奶'
    }, {
      value: '選項3',
      label: '蚵仔煎'
    }, {
      value: '選項4',
      label: '龙须面'
    }, {
      value: '選項5',
      label: '北京烤鸭'
    }],
    test: '',
    testArr: [
      "高高對",
      "五對高",
      "五高四",
    ]
  },
  computed: {},
  watch: {},
  mounted: function () {

  },
  methods: {
    timeup: function(){
      console.log('時間到!!');
    },
    timereset: function(){
      this.$refs.count.reset();
    },
    alert: function(){
      alert('ok');
    },
  }
});