# WebForm
A database for Webforms of Static sites using Google Sheet


## Steps
### 1. Google Sheet
1. go to <b>sheet > Tools > Script Editor</b>
2. Copy and paste the file [WebForm.gs](https://raw.githubusercontent.com/rpkc/WebForm/main/WebForm.gs) to the Script Editor
3. Change the `<SHEET_NAME>` with your sheet name 
4. deploy and copy the `deployment id`
### 2. Form (HTML)
```html
<script src="Relative/path/to/WebForm.js"></script>  <!-- Inside <head> -->
```
```html
<form method="post" autocomplete="off" name="contact">
      <input type="email" title="Type your email address" id="email" name="Email" placeholder="Your Email Address" required>
      <textarea id="message" title="Type your Message" name="Message" placeholder="Your Message ..." required></textarea>
      <input type="submit" title="Send your Message" value="Send">
</form>
```

<b>NB:</b> Names of Form Elements should be as same as field name of Google Sheet
### 3. Form (JS)
```js
document.addEventListener('submit',e=>{
    e.preventDefault(); //to stop the form being post
    var w = new WebForm(<DEPLOYMENT_ID>,<FORM_NAME>);//create an object
    w.submit(); // call to submit data
        })
```
# Caution
1. There are no Guarantee of Security
2. There are some [quotas](https://developers.google.com/apps-script/guides/services/quotas#current_quotas) of Google Sheet

