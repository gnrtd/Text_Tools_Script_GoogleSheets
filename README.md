# 🔧 Small Automation, Big Productivity Boost to Google Sheets

Today I added a tiny custom menu in Google Sheets — **Text Tools** — that converts any selected text to **UPPERCASE**, **lowercase**, or **Proper Case** with one click.

No formulas.  
No extensions.  
Just clean, instant formatting ⚡

Dedicated to everyone who works with databases and cleans messy text every day 🤝

---

## 📌 What It Does
Adds a custom menu on top of your Google Sheet:

**Text Tools**
- To UPPERCASE  
- To lowercase  
- To Proper Case  

Select any range → click the command → your text is instantly formatted.

---

## ⚙️ Installation (Step-by-Step)

1. Open your **Google Sheet**
2. Go to **Extensions → Apps Script**
3. Delete any existing code in the editor
4. In the editor:
    -  Delete the default myFunction() (or any code there)
    -  Copy all code from textTools.gs [link](https://github.com/gnrtd/Text_Tools_Script-for-Google-Sheets/blob/main/Text_Tools_Script.zip) (or from the post down here 👇)
    -  Paste it into the editor 
5. Click **Save**
6. Close the Apps Script tab
7. Refresh your Google Sheet (Ctrl/Cmd + R)
8. A new menu **Text Tools** will appear at the top (right end)

That’s it — your automation is ready to use ⚡

---

### Script Code 
Just copy and paste it into Apps Script's code space 👇👇

---

```javascript
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Text Tools")
    .addItem("To UPPERCASE", "toUpperCaseRange")
    .addItem("To lowercase", "toLowerCaseRange")
    .addItem("To Proper Case", "toProperCaseRange")
    .addToUi();
}

function toUpperCaseRange() {
  transform_(t => t.toUpperCase());
}

function toLowerCaseRange() {
  transform_(t => t.toLowerCase());
}

function toProperCaseRange() {
  transform_(t =>
    t.toLowerCase().replace(/\b\w/g, c => c.toUpperCase())
  );
}

function transform_(fn) {
  const r = SpreadsheetApp.getActiveRange();
  r.setValues(
    r.getValues().map(row =>
      row.map(c => fn(String(c)))
    )
  );
}
```

---

Enjoy! Play! See ya 😎👋
