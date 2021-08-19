const caesarModule = (function () {
  
  function caesar(input, shift, encode = true) {
    //If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    //If encode is false, reverse the shift to decode
    if (encode === false) {
      shift = -shift;
    }
    //Capital letters can be ignored.
    input = input.toLowerCase();
    //Parse the individual characters.
    input = input.split("");
    const a = "a".charCodeAt(0);
    //Map over the input to change each character.
    input = input.map(char => {
      //Set a variable to convert char code to 0-25 range to make more manageable.
      let code = char.charCodeAt(0) - a;
      //Spaces should be maintained throughout, as should other non-alphabetic symbols.
      if (code < 0 || code > 25) {
        return char;
      }
      code += shift;
      //If a letter is shifted so that it goes "off" the alphabet (e.g. a shift of 3 on the letter "z"), it should wrap around to the front of the alphabet (e.g. "z" becomes "c").
      if (code > 25) {
        code -= 26;
      }
      if (code < 0) {
        code += 26;
      }
      //Convert code back to unicode points
      return String.fromCharCode(code + a);
    })
    //Return encoded or decoded input as a concatenated string
    return input.join("");
  }

  return {
    caesar,
  };
})();

module.exports = {
  caesar: caesarModule.caesar
};