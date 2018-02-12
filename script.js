//Build My Text (buildmytext.com) is Copyright Ashley Harnett, 2017

//Version

var appVersion = '1.0';

//Event Listener

window.addEventListener("DOMContentLoaded", function(event) {

  window.onload = function() {
    checkVersion();
  };

  document.getElementById('buildMyList').onclick = function(event) {
    buildMyList();
  };

  document.getElementById('buildMySearch').onclick = function(event) {
    buildMySearch();
  };

  document.getElementById('buildMySelect').onclick = function(event) {
    buildMySelect();
  };

  document.getElementById('trimSlashLabel').onclick = function(event) {
    selectTrimSlashLabel();
  };

  document.getElementById('addSlashStarLabel').onclick = function(event) {
    selectAddSlashStarLabel();
  };

  document.getElementById('clearSpacesLabel').onclick = function(event) {
    selectClearSpacesLabel();
  };

  document.getElementById('searchTypeLabel').onclick = function(event) {
    selectSearchTypeLabel();
  };

  document.getElementById('tabOne').onclick = function(event) {
    showAppOne();
  };

  document.getElementById('tabTwo').onclick = function(event) {
    showAppTwo();
  };

  document.getElementById('tabThree').onclick = function(event) {
    showAppThree();
  };

  document.getElementById('escapeWildcardsLabel').onclick = function(event) {
    selectEscapeWildcards();
  };

  document.getElementById('bannerHelp').onclick = function(event) {
    toggleManPage();
  };
  document.getElementById('closeManPage').onclick = function(event) {
    toggleManPage();
  };

});

//Global Variables

var goldOr = '\u00B7|';
var goldStar = '\u00B7*';
var goldAnd = '\u00B7&';
var goldBang = '\u00B7!';
var goldEquals =  '\u00B7=';
var goldSemicolon =  '\u00B7;';

//Functions

function buildMyList() {

  var inputText = document.getElementById('textIn').value;

  if ( document.getElementById('selectedOperand').value == 1 ) {
    var selectedOperand = goldOr;
    var trailingCharacter = '';
    var precedingCharacter = '';
  } else if ( document.getElementById('selectedOperand').value == 2 ) {
    var selectedOperand = goldStar + goldOr;
    var trailingCharacter = goldStar;
    var precedingCharacter = '';
  } else if ( document.getElementById('selectedOperand').value == 3 ) {
    var selectedOperand = goldAnd + goldBang;
    var trailingCharacter = '';
    var precedingCharacter = goldBang;
  } else if ( document.getElementById('selectedOperand').value == 4 ) {
    var selectedOperand = '\',\'';
    var trailingCharacter = '\'';
    var precedingCharacter = '\'';
  } else if ( document.getElementById('selectedOperand').value == 5 ) {
    var selectedOperand = ',';
    var trailingCharacter = '';
    var precedingCharacter = '';
  } else if ( document.getElementById('selectedOperand').value == 6 ) {
    var selectedOperand = ';';
    var trailingCharacter = '';
    var precedingCharacter = '';
  } else if ( document.getElementById('selectedOperand').value == 7 ) {
    var selectedOperand = goldSemicolon;
    var trailingCharacter = '';
    var precedingCharacter = '';
  } else {
    var selectedOperand = '';
    var trailingCharacter = '';
    var precedingCharacter = '';
  }

  if ( document.getElementById('trimSlash').checked ) {
    var inputText = inputText.replace(new RegExp('\/[0-9]*','g'), '');
  }

  if ( document.getElementById('addSlashStar').checked ) {
    var inputText = inputText.replace(/^\s+|\s+$/g, '');
    var inputText = inputText + '/' + goldStar ;
    var inputText = inputText.replace(/(\r\n|\n|\r)/gm, '/' + goldStar + '\r');
  }

  var cleanedText = inputText.replace(/^\s+|\s+$/g, '');
  var cleanedText = precedingCharacter + cleanedText.replace(/[\n\r]/g, selectedOperand) + trailingCharacter ;

  if ( document.getElementById('clearSpaces').checked == true ) {
    var cleanedText = cleanedText.replace(/\s/g,'');
  }

  document.getElementById('textOut').value = cleanedText;

}

function buildMySelect() {

  if ( document.getElementById('fieldName').value == '' ) {
    var fieldName = 'FLD_CODE'
  } else {
    var fieldName = document.getElementById('fieldName').value;
  }
  var inputText = document.getElementById('selectTextIn').value;

  if ( document.getElementById('escapeWildcards').checked == true ) {
    inputText = inputText.replace('*','%*');
    inputText = inputText.replace('?','%?');
    inputText = inputText.replace('&','%&');
    inputText = inputText.replace('#','%#');
    inputText = inputText.replace('@','%@');
  }

  if ( document.getElementById('prefixOperand').value == 0 ) {
    var prefixOperand = '';
  } else if ( document.getElementById('prefixOperand').value == 1 ) {
    var prefixOperand = '*';
  } else if ( document.getElementById('prefixOperand').value == 2 ) {
    var prefixOperand = '?';
  } else if ( document.getElementById('prefixOperand').value == 3 ) {
    var prefixOperand = '?*';
  } else if ( document.getElementById('prefixOperand').value == 4 ) {
    var prefixOperand = '#';
  } else if ( document.getElementById('prefixOperand').value == 5 ) {
    var prefixOperand = '#*';
  } else if ( document.getElementById('prefixOperand').value == 6 ) {
    var prefixOperand = '&';
  } else if ( document.getElementById('prefixOperand').value == 7 ) {
    var prefixOperand = '&*';
  } else if ( document.getElementById('prefixOperand').value == 8 ) {
    var prefixOperand = '@';
  } else if ( document.getElementById('prefixOperand').value == 9 ) {
    var prefixOperand = '@*';
  } else {
    var prefixOperand = '';
  }

  if ( document.getElementById('suffixOperand').value == 0 ) {
    var suffixOperand = '';
  } else if ( document.getElementById('suffixOperand').value == 1 ) {
    var suffixOperand = '*';
  } else if ( document.getElementById('suffixOperand').value == 2 ) {
    var suffixOperand = '?';
  } else if ( document.getElementById('suffixOperand').value == 3 ) {
    var suffixOperand = '?*';
  } else if ( document.getElementById('suffixOperand').value == 4 ) {
    var suffixOperand = '#';
  } else if ( document.getElementById('suffixOperand').value == 5 ) {
    var suffixOperand = '#*';
  } else if ( document.getElementById('suffixOperand').value == 6 ) {
    var suffixOperand = '&';
  } else if ( document.getElementById('suffixOperand').value == 7 ) {
    var suffixOperand = '&*';
  } else if ( document.getElementById('suffixOperand').value == 8 ) {
    var suffixOperand = '@';
  } else if ( document.getElementById('suffixOperand').value == 9 ) {
    var suffixOperand = '@*';
  } else {
    var suffixOperand = '';
  }

  var cleanedText = inputText.replace(/^\s+|\s+$/g, '');

  if ( document.getElementById('fieldCompareOperand').value == 1 ) {
    var stringPart = suffixOperand + '\' | ' + fieldName + ' = \'' + prefixOperand ;
    var cleanedText = '{{SEL:( ' + fieldName + ' = \'' + prefixOperand + cleanedText.replace(/[\n\r]/g, stringPart  )  + suffixOperand + '\' ): }}' ;
  } else if ( document.getElementById('fieldCompareOperand').value == 2 ) {
      var stringPart = suffixOperand + '\' & '  + fieldName + ' != \'' + prefixOperand ;
      var cleanedText = '{{SEL:( ' + fieldName + ' != \'' + prefixOperand + cleanedText.replace(/[\n\r]/g, stringPart ) + suffixOperand + '\' ): }}' ;
  } else {
    var compareOperand = '';
  }

  document.getElementById('selectTextOut').value = cleanedText;

}

function buildMySearch() {

  if ( document.getElementById('searchField').value == '' ) {
    var searchField = 'FLD_CODE';
  } else {
    var searchField = document.getElementById('searchField').value;
  }
//  var searchField = document.getElementById('searchField').value;
  var searchInput = document.getElementById('searchTextIn').value;

  if ( document.getElementById('searchType').checked == true ) {
    var quoteType = '\'';
  } else {
    var quoteType ='\"';
  }

  var delimString = quoteType + '=';

  if ( document.getElementById('selectedDelimeter').value  == 1 ) {
    var outputString = searchInput.replace( /\t/g , delimString );
  } else if ( document.getElementById('selectedDelimeter').value  == 2 ) {
    var outputString = searchInput.replace( /\,/g , delimString );
  } else if ( document.getElementById('selectedDelimeter').value  == 3 ) {
    var outputString = searchInput.replace( /\;/g , delimString );
  } else if ( document.getElementById('selectedDelimeter').value  == 4 ) {
    var outputString = searchInput.replace( /\|/g , delimString );
  } else {
    var outputString = searchInput.replace( /\t/g , delimString );
  }

  var outputString = quoteType + outputString;
  var outputString = outputString.replace(/(\r\n|\n|\r)/gm, goldSemicolon + quoteType );

  document.getElementById('searchTextOut').value = '<<' + searchField + '&S' + outputString + '>>' ;

}


function selectTrimSlashLabel() {

  if ( document.getElementById('trimSlash').checked == true ) {
    document.getElementById('trimSlash').checked = false;
  } else {
    document.getElementById('trimSlash').checked = true;
  };

}

function selectAddSlashStarLabel() {

  if ( document.getElementById('addSlashStar').checked == true ) {
    document.getElementById('addSlashStar').checked = false;
  } else {
    document.getElementById('addSlashStar').checked = true;
  }

}

function selectSearchTypeLabel() {

  if ( document.getElementById('searchType').checked == true ) {
    document.getElementById('searchType').checked = false;
  } else {
    document.getElementById('searchType').checked = true;
  }

}

function selectClearSpacesLabel() {

  if ( document.getElementById('clearSpaces').checked == true ) {
    document.getElementById('clearSpaces').checked = false;
  } else {
    document.getElementById('clearSpaces').checked = true;
  }

}

function selectEscapeWildcards() {

  if ( document.getElementById('escapeWildcards').checked == true ) {
    document.getElementById('escapeWildcards').checked = false;
  } else {
    document.getElementById('escapeWildcards').checked = true;
  }

}

function showAppOne() {

  document.getElementById('appTwo').classList.remove('appPanelFocused');
  document.getElementById('appThree').classList.remove('appPanelFocused');
  document.getElementById('appOne').classList.add('appPanelFocused');

  document.getElementById('tabTwo').classList.remove('selectedTab');
  document.getElementById('tabThree').classList.remove('selectedTab');
  document.getElementById('tabOne').classList.add('selectedTab');

}

function showAppTwo() {

  document.getElementById('appOne').classList.remove('appPanelFocused');
  document.getElementById('appThree').classList.remove('appPanelFocused');
  document.getElementById('appTwo').classList.add('appPanelFocused');

  document.getElementById('tabOne').classList.remove('selectedTab');
  document.getElementById('tabThree').classList.remove('selectedTab');
  document.getElementById('tabTwo').classList.add('selectedTab');

}

function showAppThree() {

  document.getElementById('appOne').classList.remove('appPanelFocused');
  document.getElementById('appTwo').classList.remove('appPanelFocused');
  document.getElementById('appThree').classList.add('appPanelFocused');

  document.getElementById('tabOne').classList.remove('selectedTab');
  document.getElementById('tabTwo').classList.remove('selectedTab');
  document.getElementById('tabThree').classList.add('selectedTab');

}

function toggleManPage() {

  document.getElementById('appManPage').classList.toggle('unfocused');

}

function checkVersion() {

  document.getElementById('version').innerHTML = appVersion;

}
