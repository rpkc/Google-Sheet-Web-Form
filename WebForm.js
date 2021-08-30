var WebForm = /** @class */ (function () {
    function WebForm(api, name) {
        this.scriptURL = "";
        this.scriptURL = "https://script.google.com/macros/s/" + api + "/exec";
        this.form = document.forms[name];
    }
    WebForm.prototype.submit = function (output) {
        if (output === void 0) { output = alert; }
        fetch(this.scriptURL, {
            method: 'POST',
            body: new FormData(this.form)
        }).then(function (r) {
            output("Form Submitted");
        })["catch"](function (e) {
            output(e.message);
        });
    };
    return WebForm;
}());
