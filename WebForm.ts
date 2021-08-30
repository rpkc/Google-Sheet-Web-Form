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
