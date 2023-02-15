/* 
** FREEZE ROWS & COLUMNS FORMATTING FUNCTIONS
*/

function freezeRowsAndColumns() {
  var activeSheet = SpreadsheetApp.getActiveSpreadsheet();
  
  activeSheet.setFrozenRows(1);
  activeSheet.setFrozenColumns(7);
}

function freezeRowsAndColumns2() {
  var activeSheet = SpreadsheetApp.getActiveSpreadsheet();
  
  activeSheet.setFrozenRows(1);
}

function freezeRowsAndColumns3() {
  var activeSheet = SpreadsheetApp.getActiveSpreadsheet();
  
  activeSheet.setFrozenRows(2);
  activeSheet.setFrozenColumns(7);
}




/* 
** CENTER COLUMNS FORMATTING FUNCTIONS
*/

function centerColumns() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var s = ss.getActiveSheet();
  var range = s.getRange("H:AL")

  range.setHorizontalAlignment("center");
}

function centerColumns2() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var s = ss.getActiveSheet();
  var range = s.getRange("A:L")

  range.setHorizontalAlignment("center");
}




/* 
** DATE FORMATTING FUNCTIONS
*/
function dateFormat1() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var s = ss.getActiveSheet();
  var range = s.getRange("L:N")

  range.setNumberFormat("m/dd/yyyy");
}

function dateFormat2() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var s = ss.getActiveSheet();
  var range = s.getRange("I:J")

  range.setNumberFormat("m/dd/yyyy");
}





function ohOoFormat() {
  dateFormat1();
  centerColumns();
  freezeRowsAndColumns();
}

function endcapFormat() {
  dateFormat2();
  centerColumns2();
  freezeRowsAndColumns2();
}

function promoFormat() {
  dateFormat1();
  centerColumns();
  freezeRowsAndColumns3();
}


function onOpen() {
  let ui = SpreadsheetApp.getUi();
  // menu button name, function button name, function for button to perform
  ui.createMenu('Scripts')
    .addItem('OH OO Tab Formatting', 'ohOoFormat')
    .addSeparator()
    .addItem('Endcap Tab Formatting', 'endcapFormat')
    .addSeparator()
    .addItem('Promo Tab Formatting', 'promoFormat')

    .addToUi(); 
}








// // need to implement:
// convert decimal to percentage 
// convert to currency
// autoresize columns (autoResizeColumns())
// duplicate UPC conditional formatting
// APT column conditional formatting


