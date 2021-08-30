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

class WebForm{
    form:HTMLFormElement;
    scriptURL:string="";

    constructor(api:string,name:string){
        this.scriptURL="https://script.google.com/macros/s/"+api+"/exec";
        this.form = document.forms[name];
    }
    submit(output:(a:string)=>void = alert):void{
        fetch(this.scriptURL,{
            method: 'POST',
            body: new FormData(this.form)
        }).then(r=>{
            output("Form Submitted");
        }).catch(e=>{
            output(e.message);
        })
    }
}
