const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    //Test 1: When encoding, output should be a string
    it("should return a string when encoding", () => {
        const input = "This is a string to be encoded"
        const encode = true;
        const expected = "44324234 4234 11 344424423322 4443 2151 51333143415141";
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    })
    //Test 2: When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.
    it("should return false if odd numbers of characters in string when decoding", () => {
        const input = "123456789";
        const encode = false;
        const expected = false;
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    })
    //Test 3: Spaces should be maintained throughout.
    it("should maintain spaces throughout", () => {
        const input = "I love pandas";
        const encode = true;
        const expected = "42 13431551 531133411134";
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    })
    //Test 4: Capital letters can be ignored.
    it("should ignore capital letters", () => {
        const input = "CaPiTaL LeTtErS";
        const encode = true;
        const expected = "31115342441113 13514444512434";
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    })
    //Test 5: The letters "I" and "J" share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown.
    it("should covert both i and j to 42 when encoding", () => {
        const input = "Jiggly jumping jello";
        const encode = true;
        const expected = "424222221345 42542353423322 4251131343";
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    })
    //Test 6: The letters "I" and "J" share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown.
    it("should convert 42 to i/j when decoding", () => {
        const input = "424222221345 42542353423322 4251131343";
        const encode = false;
        const expected = "i,ji,jggly i,jumpi,jng i,jello";
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    })
    //Test 7: Only spaces and numbers will be included.
    it("should exclude characters that are not letters and spaces", () => {
        const input = "I love puppies!";
        const encode = true;
        const expected = "42 13431551 53545353425134!";
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    })
})