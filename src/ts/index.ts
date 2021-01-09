declare var $: (selector: string) => any;

const BASE_URL = "https://udon8327.synology.me/";

let vm = new Vue({
  el: "#app",
  data: {
    isModalShow: 0,
    user: {
      name: "",
      age: "",
      birthday: "",
      code: "test", // verify需相等
      verify: "",
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
      verify: [{ type: "required" }, { type: "equal", equalTo: "code", caseIgnore: "true"}],
      radio: [{ type: "required" },],
      agree: [{ type: "required", message: "請先同意相關使用條款"},],
      checkbox: [{ type: "required" },],
      select: [{ type: "required" },],
      store: [{ type: "required", message: "櫃點為必填項目" }],
      twzip: [{ type: "required" }],
      date: [{ type: "required" }],
    },
    charaOptions: [
      {label: "妮可", value: "nico"},
      {label: "花丸", value: "maru"},
      {label: "步夢", value: "pomu"},
    ],
    storeOptions: [
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
        ]
      },
    ],
  },
  mounted: function () {
    this.postData();
  },
  methods: {
    formSubmit: function(){
      this.$refs.form.validate(() => {
        this.udAlert({msg: "驗證成功!!"})
      });
    },
    //API
    init: function () {
      udApi.get(BASE_URL + `ajax/success.php`, {
        params: {
          from: "123",
          to: "456"
        },
      })
        .then(res => console.log(res))
        // .catch(err => console.log(err))
    },
    getData() {
      udApi.get(BASE_URL + `ajax/success.php`).then(res => {
        this.userData = res.userData;
      });
    },
    postData() {
      udApi.post(BASE_URL + `ajax/success.php`, {
          mail: "udon8327@gmail.com",
          name: "UDON",
        }, {
        params: {
          from: 123,
          to: 456
        }
      })
        .then(res => {
          console.log("res: ", res);
        })
    }
  }
});