var BASE_URL = "https://udon8327.synology.me/";
var vm = new Vue({
    el: "#app",
    data: {
        fileList: [],
        file: "",
        isModalShow: 0,
        user: {
            name: "",
            age: "",
            birthday: "",
            code: "test",
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
            verify: [{ type: "required" }, { type: "equal", equalTo: "code", caseIgnore: "true" }],
            radio: [{ type: "required" },],
            agree: [{ type: "required", message: "請先同意相關使用條款" },],
            checkbox: [{ type: "required" },],
            select: [{ type: "required" },],
            store: [{ type: "required", message: "櫃點為必填項目" }],
            twzip: [{ type: "required" }],
            date: [{ type: "required" }],
        },
        charaOptions: [
            { label: "妮可", value: "nico" },
            { label: "花丸", value: "maru" },
            { label: "步夢", value: "pomu" },
        ],
        storeOptions: [
            {
                label: "基隆市", value: "KL",
                children: [
                    { label: "仁愛區", value: "200",
                        children: [
                            { label: "仁愛分店01", value: "20001" },
                            { label: "仁愛分店02", value: "20002" },
                            { label: "仁愛分店03", value: "20003" },
                        ]
                    },
                    { label: "信義區", value: "201",
                        children: [
                            { label: "信義分店01", value: "20101" },
                            { label: "信義分店02", value: "20102" },
                            { label: "信義分店03", value: "20103" },
                        ]
                    },
                ]
            },
            {
                label: "台北市", value: "TP",
                children: [
                    { label: "中正區", value: "100",
                        children: [
                            { label: "中正分店01", value: "10001" },
                            { label: "中正分店02", value: "10002" },
                            { label: "中正分店03", value: "10003" },
                        ]
                    },
                    { label: "大同區", value: "103",
                        children: [
                            { label: "大同分店01", value: "10301" },
                            { label: "大同分店02", value: "10302" },
                            { label: "大同分店03", value: "10303" },
                        ]
                    },
                ]
            },
        ],
    },
    mounted: function () {
        // this.udAlert({msg: "好喔"}).then(() => alert('aa'))
        this.init();
        // this.postData();
        var aa = function () {
            console.log(1);
            return new Promise(function (res) {
                setTimeout(function () { return res(2); }, 1000);
            });
            // return new Promise( resolve => resolve(2) )
            console.log(3);
            // return Promise.resolve(4);
            // return new Promise( resolve => resolve(5) )
        };
        aa()
            .then(function (res) { return console.log(res); })
            .then(function (res) { return console.log(6); });
    },
    methods: {
        upload: function (param) {
            console.log('param: ', param);
            // let file = this.$refs.file.files[0];
            var formData = new FormData();
            formData.append('image', param.file);
            axios.post('https://api.imgur.com/3/image', formData, {
                headers: {
                    Authorization: "Client-ID " + '0259aa13deafaac' //放置你剛剛申請的Client-ID
                },
            }).then(function (res) { return console.log(res); })
                .catch(function (err) { return console.log(err); });
        },
        formSubmit: function () {
            var _this = this;
            this.$refs.form.validate(function () {
                _this.udAlert({ msg: "驗證成功!!" });
            });
        },
        //API
        init: function () {
            udApi.get("https://07067335-8a87-4b24-98a8-50aaa93a19b2.mock.pstmn.io/test", {
                params: {
                    from: "123",
                    to: "456"
                },
                headers: {
                    channel_id: "12345678"
                }
            })
                .then(function (res) { return console.log(res); });
            // .catch(err => console.log(err))
        },
        getData: function () {
            var _this = this;
            udApi.get(BASE_URL + "ajax/success.php").then(function (res) {
                _this.userData = res.userData;
            });
        },
        postData: function () {
            udApi.post(BASE_URL + "ajax/success.php", {
                mail: "udon8327@gmail.com",
                name: "UDON",
            }, {
                params: {
                    from: 123,
                    to: 456
                }
            })
                .then(function (res) {
                console.log("res: ", res);
            });
        },
        handlePreview: function (item) {
            console.log(item);
        },
        handleRemove: function (item) {
            console.log(item);
        },
        beforeUpload: function (item) {
            console.log(item);
        }
    }
});
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map