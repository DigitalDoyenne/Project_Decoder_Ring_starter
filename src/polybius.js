const polybiusModule = (function () {

  //Cipher grid setup to be iterable
  let cipherMap = {
      "a": 11,
      "b": 21,
      "c": 31,
      "d": 41,
      "e": 51,
      "f": 12,
      "g": 22,
      "h": 32,
      "i": 42,
      "j": 42,
      "k": 52,
      "l": 13,
      "m": 23,
      "n": 33,
      "o": 43,
      "p": 53,
      "q": 14,
      "r": 24,
      "s": 34,
      "t": 44,
      "u": 54,
      "v": 15,
      "w": 25,
      "x": 35,
      "y": 45,
      "z": 55
  }

  function polybius(input, encode = true) {
      //Check if input is alphanumeric
      if (_isAlphaNumeric(input)) {
          //Check if encode is set to true
          if (encode) {
              //Set variables for codes array and values. Make values lowercase and split.
              let values = input.toLowerCase().split('');
              let codes = [];
              //Get codes for each letter
              values.map((val) => {
                  codes.push(_getCodeForLetter(val) || val)
              });

              // return string of codes concatenated
              return codes.join('').trim();

          } else {
              //Otherwise, decode. Split input numbers into pairs.
              let codes = _splitInput(input);
              //If codes is truthy
              if (codes) {
                  //Set variable for decoded message array
                  let result = [];
                  // Get letter from each code and push into array
                  codes.map((code) => {
                      result.push(_getLetterForCode(code) || code);
                  });

                  // return string of letters concatenated
                  return result.join("").trim();
              } else {
                  //If codes if falsy, return false.
                  return false;
              }
          }
      } else {
          //Otherwise, return non-alphanumeric input
          return input;
      }
  }

  //Helper function to see if input is alphanumeric
  function _isAlphaNumeric(str) {
      //Loop through the input string to see if it's alphanumberic based on it's character code
      for (let i = 0; i < str.length; i++) {
          let code = str.charCodeAt(i);
          if (!(code > 47 && code < 58) && // numeric (0-9)
              !(code > 64 && code < 91) && // upper alpha (A-Z)
              !(code > 96 && code < 123) && // lower alpha (a-z)
              !code === 32 // space
          ) {
              //return false if not
              return false;
          }
      }
      //Otherwise return true
      return true;
  };

  function _splitInput(input) {
      //Set holder variable for array of number pairs
      let codeArray = [];
      //Split input on spaces
      let inputGroup = input.split(' ');
      //Set oddLength to false
      let oddLength = false;

      //Check if string of numbers is an odd length
      inputGroup.map((group) => {
          if (group.length % 2 !== 0) {
              oddLength = true; // Odd length
          } else {
              //If not, group numbers by pairs and push into codeArray
              for (let i = 0; i < group.length - 1; i = i + 2) {
                  codeArray.push(Number(`${group[i]}${group[i + 1]}`))
              }

              codeArray.push(" ");
          }
      });
      //If not an odd length, return the array of number pairs
      if (!oddLength) {
          return codeArray;
      } else {
          //Otherwise, return false
          return false;
      }
  }

  function _getCodeForLetter(char) {
      //Loop through cipherMap
      for (let [key, value] of Object.entries(cipherMap)) {
          //If this key equals the char input, return the corresponding value
          if (key == char) {
              return value;
          }
      }
  }

  function _getLetterForCode(code) {
      // I and J are special cases that both equal 42 so using an array instead of a flat string
      let letters = [];
      //Loop through cipherMap 
      for (let [key, value] of Object.entries(cipherMap)) {
          //If this value equals the code input
          if (value == code) {
              //Push that value's key into the letters array
              letters.push(key);
          }
      }
      //Special condition for i/j
      if (letters.length > 1) {
          return (`${letters.join(',')}`);
      } else {
          //Only one letter in the array no need to join them
          return letters[0];
      }
  }

  return {
      polybius,
  };
})();

module.exports = {
  polybius: polybiusModule.polybius
};