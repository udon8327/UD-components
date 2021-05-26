var vm = new Vue({
    el: "#app",
    data: {
        qwe: "",
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
        var _this = this;
        udAlert({
            msg: "好喔",
            title: "錯誤",
            confirm: confirm,
        })
            .then(function (val) { return _this.init(); })
            .catch(function (err) { return udAlert(err); });
        // throw new Error('123123123123')
        // this.udAlert({msg: "好喔"}).then(() => alert('aa'))
        // this.postData();
    },
    methods: {
        asd: function () {
            alert(this.qwe.replaceAll('\n', '啊'));
        },
        upload: function (param) {
            console.log('param: ', param);
            // let file = this.$refs.file.files[0];
            var formData = new FormData();
            formData.append('image', param.file);
            udAxios.post('https://api.imgur.com/3/image', formData, {
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
            udAxios.post("echo.php", { '123': 456 }, {
                params: {
                    from: "02-22",
                    to: "02-29"
                },
                headers: {
                    channel_id: "12345678"
                },
            })
                .then(function (res) { return console.log('res', res); })
                .catch(function (err) { return console.log('err', err); });
        },
        getData: function () {
            var _this = this;
            udAxios.get(BASE_URL + "ajax/success.php").then(function (res) {
                _this.userData = res.userData;
            });
        },
        postData: function () {
            udAxios.post(BASE_URL + "ajax/success.php", {
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