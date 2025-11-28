function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Text Tools")
    .addItem("To UPPERCASE", "toUpperCaseRange")
    .addItem("To lowercase", "toLowerCaseRange")
    .addItem("To Proper Case", "toProperCaseRange")
    .addToUi();
}

function toUpperCaseRange() { transform_(t => t.toUpperCase()); }
function toLowerCaseRange() { transform_(t => t.toLowerCase()); }
function toProperCaseRange() {
  transform_(t => t.toLowerCase().replace(/\b\w/g, c => c.toUpperCase()));
}

function transform_(fn) {
  const r = SpreadsheetApp.getActiveRange();
  r.setValues(r.getValues().map(row => row.map(c => fn(String(c)))));
}
