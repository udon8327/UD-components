declare var $: (selector: string) => any;

const baseURL = "https://udon8327.synology.me/";
const officialAccountURL = "https://line.me/zh-hant/";

let vm = new Vue({
  el: "#app",
  data: {

    isModalShow: 0,
    modalMessage: "這是modalMessage",

    user: {
      name: "",
      birthday: "",
      age: "",
      verify: "",
      code: "test",
      radio: "",
      agree: false,
      checkbox: [],
      select: "",
      store: ["", ""]
    },
    rules: {
      name: [{ type: "required" }, { type: "name" }],
      birthday: [{ type: "required" }, { type: "date" }],
      age: [{ type: "required" }, { type: "number" },],
      verify: [{ type: "required" }, { type: "equl", equlTo: "code", caseIgnore: "true"}],
      radio: [{ type: "required" },],
      agree: [{ type: "required", message: "請先同意相關使用條款"},],
      checkbox: [{ type: "required" },],
      select: [{ type: "required" },],
    },

    charaObj: {
      nico: "妮可",
      maru: "花丸",
      pomu: "步夢",
      rin: "凜",
      kasumin: "阿霞"
    },
    charaArr: [
      {label: "妮可", value: "nico"},
      {label: "花丸", value: "maru"},
      {label: "步夢", value: "pomu"},
      {label: "凜", value: "rin"},
      {label: "阿霞", value: "kasumin"},
    ],
    storeArr: [
      {
        label: "基隆市", value: "KL",
        children: [
          { label: "仁愛區", value: "200" },
          { label: "信義區", value: "201" },
          { label: "中正區", value: "202" },
          { label: "中山區", value: "203" },
          { label: "安樂區", value: "204" },
        ]
      },
      {
        label: "台北市", value: "TP",
        children: [
          { label: "中正區", value: "100" },
          { label: "大同區", value: "103" },
          { label: "中山區", value: "104" },
          { label: "松山區", value: "105" },
          { label: "大安區", value: "106" },
        ]
      },
      {
        label: "新北市", value: "NT",
        children: [
          { label: "萬里區", value: "207" },
          { label: "金山區", value: "208" },
          { label: "板橋區", value: "220" },
          { label: "汐止區", value: "221" },
          { label: "深坑區", value: "222" },
        ]
      },
    ],
  },
  mounted: function () {
    // this.init();
    // this.getData();
  },
  methods: {
    formSubmit: function(){
      this.$refs.form.validate(() => {
        this.$alert({msg: "驗證成功!!"})
      });
    },
    //API
    init: function () {
      // putApi('https://private-80966-test21855.apiary-mock.com/message')
      // .then(res => console.log(res));
    },
    getData() {
      getApi(baseURL + `ajax/success.php`).then(res => {
        this.userData = res.userData;
      });
    },
    postData() {
      postApi(baseURL + `ajax/validate.php`, "123456").then(res => {
        console.log("res: ", res);
      });
    }
  }
});