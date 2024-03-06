# Assessli React Assignment
This is Contact form using React.js which includes a form with fields for name, email, phone, and message.</br>
form send the data to the google sheet and google sheet store the data.</br>
this is done by the using of google sheet api.</br>

# Project setup instructions.</br>
  include all the React libraries using :-</br>
    npx create-react-app my-app</br>
    cd my-app</br>
  run the project:-</br>
    npm start</br>


# How to run the project locally:-</br>
  download the zip file of project</br>
    then run these command:-</br>
    npm i</br>
    npm start</br>

#google sheet api:-</br>
go to sheet  then go to extension and deploy write this code on the script of sheet:-</br>
#How to create an HTML form that stores the submitted form data in Google Sheets using plain 'ol JavaScript (ES6), Google Apps Script, Fetch and FormData.</br>
# 1. Create Data Set:-</br>
First, go to Google Sheets and Start a new spreadsheet with the Blank template.</br>
Rename it Email Subscribers. Or whatever, it doesn't matter.</br>
Put the following headers into the first row:</br>


# 2.Create a Google Apps Script</br>
Click on Tools > Script Editor… which should open a new tab.</br>
Rename it Submit Form to Google Sheets. Make sure to wait for it to actually save and update the title before editing the script.</br>
Now, delete the function myFunction() {} block within the Code.gs tab.</br>
Paste the following script in it's place and File > Save:</br>
</br>
</br>
</br>
</br>
var sheetName = 'Sheet1'</br>
var scriptProp = PropertiesService.getScriptProperties()</br>

function intialSetup () {</br>
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()</br>
  scriptProp.setProperty('key', activeSpreadsheet.getId())</br>
}</br>

function doPost (e) {</br>
  var lock = LockService.getScriptLock()</br>
  lock.tryLock(10000)</br>

  try {</br>
    var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))</br>
    var sheet = doc.getSheetByName(sheetName)</br>

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]</br>
    var nextRow = sheet.getLastRow() + 1</br>

    var newRow = headers.map(function(header) {</br>
      return header === 'timestamp' ? new Date() : e.parameter[header]</br>
    })</br>

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])</br>

    return ContentService</br>
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))</br>
      .setMimeType(ContentService.MimeType.JSON)</br>
  }</br>

  catch (e) {</br>
    return ContentService</br>
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))</br>
      .setMimeType(ContentService.MimeType.JSON)</br>
  }</br>

  finally {</br>
    lock.releaseLock()</br>
  }</br>
}</br>

</br>
</br>
</br>
# 3.Run the setup function</br>
Next, go to Run > Run Function > initialSetup to run this function.</br>
In the Authorization Required dialog, click on Review Permissions.</br>
Sign in or pick the Google account associated with this projects.</br>
You should see a dialog that says Hi {Your Name}, Submit Form to Google Sheets wants to...</br>
Click Allow</br>
</br>
</br>
</br>
</br>
</br>
# Input your web app URL</br>
Open the file named index.html. On line 12 replace <SCRIPT URL> with your script url: </br>
<form name="submit-to-google-sheet">
  <input name="email" type="email" placeholder="Email" required>
  <button type="submit">Send</button>
</form>

<script>
  const scriptURL = '<SCRIPT URL>'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
</script>

<form name="submit-to-google-sheet">
  <input name="email" type="email" placeholder="Email" required>
  <input name="firstName" type="text" placeholder="First Name">
  <input name="lastName" type="text" placeholder="Last Name">
  <button type="submit">Send</button>
</form>


