const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    //Set holder variables for encoded/decoded message, index, and standard alphabet
    const code = [];
    let index = 0;
    const standard = "abcdefghijklmnopqrstuvwxyz";

    //Check if alphabet argument exists and length is 26
    if ((!alphabet) || (alphabet.length !== 26)) return false;
    //If alphabet is not unique, return false
    for (let letter of alphabet) {
      if (alphabet.indexOf(letter) !== alphabet.lastIndexOf(letter)) return false;
    }

    //Split input and alphabet to get individual characters and change to lowercase
    input = input.toLowerCase().split('');
    alphabet = alphabet.toLowerCase().split('');

    //If encode is true, encode the message
    if (encode) {
      //Maintain spaces and characters not in standard
      for (const char of input) {
        if (!standard.includes(char)) {
          code.push(char);
        } else {
          //Find index of each character in standard
          index = standard.indexOf(char);
          //Push character from alphabet with matching index to code array
          code.push(alphabet[index]);
        }
      }
      //Otherwise, decode the message
    } else {
      //Find index of each character in input
      for (const char of input) {
        if (!alphabet.includes(char)) {
          code.push(char);
        } else {
          //Find index of each character in alphabet
          index = alphabet.indexOf(char);
          //Push character from standard with matching index to code array
          code.push(standard[index]);
        }
      }
    }
    //Return final message as a string
    return code.join("");
  }

  return {
    substitution,
  };
})();

module.exports = {
  substitution: substitutionModule.substitution
};