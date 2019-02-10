//Event Listener

window.addEventListener("DOMContentLoaded", function(event) {

  document.getElementById('findDiffs').onclick = function(event) {
    findDiffs();
  };

});

//Build My Text (buildmytext.com) is Copyright Ashley Harnett, 2017

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
