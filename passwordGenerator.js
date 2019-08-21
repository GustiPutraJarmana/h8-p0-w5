function changeVocals(str) {
  var outputVocals = "";
  var abjad = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (var i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "i" ||
      str[i] === "u" ||
      str[i] === "e" ||
      str[i] === "o" ||
      str[i] === "A" ||
      str[i] === "I" ||
      str[i] === "U" ||
      str[i] === "E" ||
      str[i] === "O"
    ) {
      var kamus = abjad.indexOf(str[i]);
      outputVocals += abjad[kamus + 1];
    } else outputVocals += str[i];
  }
  return outputVocals;
}

function reverseWord(str) {
  var outputReverse = "";
  for (var i = str.length - 1; i >= 0; i--) {
    outputReverse += str[i];
  }
  return outputReverse;
}

function setLowerUpperCase(str) {
  var outputLUCase = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      outputLUCase += str[i].toLowerCase();
    } else if (str[i] === str[i].toLowerCase()) {
      outputLUCase += str[i].toUpperCase();
    }
  }
  return outputLUCase;
}

function removeSpaces(str) {
  var outputRSpace = "";
  for (var i = 0; i < str.length; i++) {
    var tamp = "";
    if (str[i] === " ") {
      outputRSpace += tamp;
      tamp = "";
    } else {
      tamp += str[i];
    }
    outputRSpace += tamp;
  }
  return outputRSpace;
}

function passwordGenerator(name) {
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }
  var strVocals = changeVocals(name);
  var strReverseWord = reverseWord(strVocals);
  var strSetLowerUpperCase = setLowerUpperCase(strReverseWord);
  var strRemoveSpaces = removeSpaces(strSetLowerUpperCase);
  return strRemoveSpaces;
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
