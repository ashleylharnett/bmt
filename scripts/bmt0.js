//Build My Text (buildmytext.com) is Copyright Ashley Harnett, 2018

//Version

var appVersion = '1.5';

// Copy Function

function copyStringToClipboard (str) {
   // Create new element
   var el = document.createElement('textarea');
   // Set value (string to be copied)
   el.value = document.getElementById(str).value;
   // Set non-editable to avoid focus and move outside of view
   el.setAttribute('readonly', '');
   el.style = {position: 'absolute', left: '-9999px'};
   document.body.appendChild(el);
   // Select text inside element
   el.select();
   // Copy text to clipboard
   document.execCommand('copy');
   // Remove temporary element
   document.body.removeChild(el);
}

//Global Variables

var goldOr = '\u00B7|';
var goldStar = '\u00B7*';
var goldAnd = '\u00B7&';
var goldBang = '\u00B7!';
var goldEquals =  '\u00B7=';
var goldSemicolon =  '\u00B7;';

//Functions

function buildMyList() {

  if ( document.getElementById('userDefinedPrefix') !== '' ) {
    var userDefinedPrefix = document.getElementById('userDefinedPrefix').value;
  } else {
    var userDefinedPrefix = '';
  }

  if ( document.getElementById('userDefinedSuffix') !== '' ) {
    var userDefinedSuffix = document.getElementById('userDefinedSuffix').value;
  } else {
    userDefinedSuffix = '';
  }

  var inputText = document.getElementById('textIn').value;
  var inputText = userDefinedPrefix + inputText.split('\n').join(userDefinedSuffix + '\n' + userDefinedPrefix);

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

  if ( document.getElementById('userDefinedSuffix').value !== null ) {
    trailingCharacter = document.getElementById('userDefinedSuffix').value + trailingCharacter;
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
  var outputString = outputString.replace(/(\r\n|\n|\r)/gm,  goldSemicolon + quoteType );

  document.getElementById('searchTextOut').value = '<<' + searchField + '&S' + outputString + '>>';

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

function checkVersion() {

  document.getElementById('version').innerHTML = appVersion;

}

function stripHtml() {

  document.getElementById('outputHtml').value = document.getElementById('inputHtml').value.replace(/<[^>]+>/g,'');

}

function removeBlankRows(id) {

  var source = document.getElementById(id);
  var inputData = source.value;
  var outputData = inputData.replace(/^\s*[\r\n]/gm, '');

  source.value = outputData;
  source.dispatchEvent(new Event('change'));

}

// Compara Lists


function getStats(inId,outId) {

  // Input values
  var inputText = document.getElementById(inId).value;

  // Transform input
  var inputLines = inputText.split("\n");
  var inputRowCount = inputLines.length;

  // Return 0 for row count if null
  if ( inputText.length == 0 ) {
    var inputRowCount = inputRowCount - 1 ;
  }

  // Print out to HTML
  document.getElementById(outId).innerHTML = '<p>Row count: <code>' + inputRowCount  + '</code></p>' ;
  document.getElementById(outId).style.display = "block";

};

function findDiffs() {

  // Get input values
  var inputOne = document.getElementById('diffInput1').value;
  var inputTwo = document.getElementById('diffInput2').value;

  // Assemble first input array
  var inputOneLines = $('#diffInput1').val().split(/\n/);
  var inputOneTexts = [];
  for (var i=0; i < inputOneLines.length; i++) {
    // only push this line if it contains a non whitespace character.
    if (/\S/.test(inputOneLines[i])) {
      inputOneTexts.push($.trim(inputOneLines[i]));
    }
  }

  // Assemble second input array
  var inputTwoLines = $('#diffInput2').val().split(/\n/);
  var inputTwoTexts = [];
  for (var i=0; i < inputTwoLines.length; i++) {
    // only push this line if it contains a non whitespace character.
    if (/\S/.test(inputTwoLines[i])) {
      inputTwoTexts.push($.trim(inputTwoLines[i]));
    }
  }

  // underscore.js functions
  var matchesOutput = _.intersection(inputOneLines,inputTwoLines);
  var uniqueOutputOne = _.difference(inputOneLines,inputTwoLines);
  var uniqueOutputTwo = _.difference(inputTwoLines,inputOneLines);
  var allValuesUnion = _.union(inputOneLines,inputTwoLines);

  // Convert arrays to strings
  var matchesOutput = matchesOutput.toString()
  var uniqueOutputOne = uniqueOutputOne.toString();
  var uniqueOutputTwo = uniqueOutputTwo.toString();
  var allValuesUnion = allValuesUnion.toString();

  // Replace commas in strings with new lines
  var matchesOutput = matchesOutput.replace(/,/g, '\n');
  var uniqueOutputOne = uniqueOutputOne.replace(/,/g, '\n');
  var uniqueOutputTwo = uniqueOutputTwo.replace(/,/g, '\n');
  var allValuesUnion = allValuesUnion.replace(/,/g, '\n');

  // Output results to textareas
  document.getElementById('diffOutput1').value = matchesOutput;
  document.getElementById('diffOutput2').value = uniqueOutputOne;
  document.getElementById('diffOutput3').value = uniqueOutputTwo;
  document.getElementById('diffOutput4').value = allValuesUnion;

  getStats('diffOutput1','diffOutput1Stats');
  getStats('diffOutput2','diffOutput2Stats');
  getStats('diffOutput3','diffOutput3Stats');
  getStats('diffOutput4','diffOutput4Stats');

};


// Build a SQL decode

function buildMyDecode(field,data,delim,out) {

  if ( $('#' + field).val() == '' ) {
    var searchField = 'men_fld.fld_code';
  } else {
    var searchField = $('#' + field).val();
  }

  var searchInput = $('#' + data).val();

  var delimString = '\'\,\'';
  var delimInput = $('#' + delim).val();

  if ( delimInput == 1 ) {
    var outputString = searchInput.replace( /\t/g , delimString );
  } else if ( delimInput  == 2 ) {
    var outputString = searchInput.replace( /\,/g , delimString );
  } else if ( delimInput  == 3 ) {
    var outputString = searchInput.replace( /\;/g , delimString );
  } else if ( delimInput  == 4 ) {
    var outputString = searchInput.replace( /\|/g , delimString );
  } else {
    var outputString = searchInput.replace( /\t/g , delimString );
  }

  var outputString = outputString.replace(/(\r\n|\n|\r)/gm,delimString);
  var outputString = 'decode(' + searchField + ',\'' + outputString + '\')';
  var outputString = outputString.replace('\,\'\'\)',')');
  $('#' + out).val(outputString) ;

  console.log(delimString);

};

// Split output of string concatenation

function replaceNth(string, char, repl, n) {
    var i = 0;
    return string.replace(new RegExp(char, 'g'), c => i++ % n ? c : repl);
}

function splitAtNth(inValue,splitAt,delimiter,outDiv) {

	var splitAt = 5

	var inValue = $('#in').val();

  var iterate = 1

 // var inValue = inValue.replace(/\r\n/g,"\n");

  var output = inValue.replace(/(\r\n|\n|\r)/gm,delimiter); // '~~' will be the var with the delimiter character

  var output = replaceNth( delimiter + output,delimiter,'\]\[',splitAt); //insert the brackets every n rows
  var output = output.replace(/^]/, ''); // remove eroneous start ]
  var output = output.replace(/\[$/, ''); // remove eroneous end ]


	var htmlOutput = output.replace(/\[/g,'<textarea>');
	var htmlOutput = htmlOutput.replace(/\]/g,'</textarea>');

  $('#'+outDiv).html(htmlOutput);

};

// ** Click Events

$(document).ready(function(){

  $('#version').html(appVersion);

  $('#buildMyList').click(function(){
    buildMyList();
  });

  $('#buildAndCopyMyList').click(function(){
    buildMyList();
    copyStringToClipboard("textOut");
  });

  $('#buildMySearch').click(function(){
    buildMySearch();
  });

  $('#buildMySelect').click(function(){
    buildMySelect();
  });

  $('#stripHtml').click(function(){
    stripHtml();
  });

  $('#findDiffs').click(function(){
    findDiffs();
  });

  $('.checkboxToggle').click(function(){
    var checkboxToggleId = $(this).attr('data-id');
    $('#' + checkboxToggleId).click();
  });

  $("#buildMyDecode").click(function(){
    buildMyDecode('decodeColumn','decodeTextIn','selectedDecodeDelimeter','decodeTextOut');
  });

});

// Load JQuery UI elements

$(document).ready(function() {

  //Enable JQueryUI elements
  //$('.jq-select').selectmenu();
  $( "#tabs" ).tabs();
  $( "select" ).selectmenu();

  $( "#splitRows" ).change(function(){
    $( "#splitRowsTogglable" ).toggle('fast','linear');
  });

  //Dark Mode

  // If local storage already holds dark mode setting, apply it.
  if ( localStorage.getItem('localStoragedarkModeToggle') == 'true' ) {
    //console.log(initBodyIsDarkMode);
    $( "body" ).addClass('darkMode');
    $( "#toggleDarkMode" ).attr('checked','checked');
  }

  // Toggle dark mode setting
  $( "#toggleDarkMode" ).change(function(){

    $( "body" ).addClass('darkModeTransition');
    $( "body" ).toggleClass('darkMode');
    $( ".hideIfLight" ).toggleClass('showIfDark');

    // Write dark mode setting to local storage
    var bodyIsDarkMode = $("body").hasClass("darkMode");
    localStorage.setItem('localStoragedarkModeToggle',bodyIsDarkMode);

  });

});

// Load other UI-related functions

$(document).ready(function() {
  $('.numberedText').numberedtextarea();
});
