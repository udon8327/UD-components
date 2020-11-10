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
      store: ["", "", ""],
      twzip: ["", ""],
      date: ["", "", ""]
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
      store: [{ type: "required", message: "櫃點為必填項目" }],
      twzip: [{ type: "required" }],
      date: [{ type: "required" }],
    },

    charaArr: [
      {label: "妮可", value: "nico"},
      {label: "花丸", value: "maru"},
      {label: "步夢", value: "pomu"},
      {label: "凜喵", value: "rin"},
      {label: "阿霞", value: "kasumin"},
    ],
    storeArr: [
      {
        label: "基隆市", value: "KL",
        children: [
          { label: "仁愛區", value: "200",
            children: [
              { label: "仁愛分店01", value: "20001"},
              { label: "仁愛分店02", value: "20002"},
              { label: "仁愛分店03", value: "20003"},
            ]
          },
          { label: "信義區", value: "201", 
            children: [
              { label: "信義分店01", value: "20101"},
              { label: "信義分店02", value: "20102"},
              { label: "信義分店03", value: "20103"},
            ]
          },
          { label: "中正區", value: "202", 
            children: [
              { label: "中正分店01", value: "20201"},
              { label: "中正分店02", value: "20202"},
              { label: "中正分店03", value: "20203"},
            ]
          },
          { label: "中山區", value: "203", 
            children: [
              { label: "中山分店01", value: "20301"},
              { label: "中山分店02", value: "20302"},
              { label: "中山分店03", value: "20303"},
            ]
          },
          { label: "安樂區", value: "204",
            children: [
              { label: "安樂分店01", value: "20401"},
              { label: "安樂分店02", value: "20402"},
              { label: "安樂分店03", value: "20403"},
            ] 
          },
        ]
      },
      {
        label: "台北市", value: "TP",
        children: [
          { label: "中正區", value: "100",
            children: [
              { label: "中正分店01", value: "10001"},
              { label: "中正分店02", value: "10002"},
              { label: "中正分店03", value: "10003"},
            ]
          },
          { label: "大同區", value: "103",
            children: [
              { label: "大同分店01", value: "10301"},
              { label: "大同分店02", value: "10302"},
              { label: "大同分店03", value: "10303"},
            ]  
          },
          { label: "中山區", value: "104",
            children: [
              { label: "中正分店01", value: "10401"},
              { label: "中正分店02", value: "10402"},
              { label: "中正分店03", value: "10403"},
            ]
          },
          { label: "松山區", value: "105", 
            children: [
              { label: "松山分店01", value: "10501"},
              { label: "松山分店02", value: "10502"},
              { label: "松山分店03", value: "10503"},
            ]
          },
          { label: "大安區", value: "106", 
            children: [
              { label: "大安分店01", value: "10601"},
              { label: "大安分店02", value: "10602"},
              { label: "大安分店03", value: "10603"},
            ] 
          },
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