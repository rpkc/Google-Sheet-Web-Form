// MIT License
// Copyright (c) 2021 Rupak Chowdhury
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
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
