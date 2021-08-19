const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesar", () => {
    //Test 1: If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.
    it("should return false if shift value is not present", () => {
        const input = "No shift value given";
        const shift = null;
        const expected = false;
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })

    it("should return false if shift value is equal to 0", () => {
        const input = "The shift value is 0";
        const shift = 0;
        const expected = false;
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })

    it("should return false if shift value is less than -25", () => {
        const input = "No shift is less than -25";
        const shift = -33;
        const expected = false;
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })

    it("should return false if shift value is greater than 25", () => {
        const input = "No shift is greater than 25";
        const shift = 28;
        const expected = false;
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })

    //Test 2: Spaces should be maintained throughout, as should other non-alphabetic symbols.
    it("should have spaces and other non-alphabetic symbols maintained throughout", () => {
        const input = "Lilo & Stitch";
        const shift = 7;
        const expected = "spsv & zapajo";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })

    //Test 3: Capital letters can be ignored.
    it("should ignore capital letters and make all letters lowercase", () => {
        const input = "I LOVE CODING!";
        const shift = -2;
        const expected = "g jmtc ambgle!";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })

    //Test 4: If a letter is shifted so that it goes "off" the alphabet (e.g. a shift of 3 on the letter "z"), it should wrap around to the front of the alphabet (e.g. "z" becomes "c").
    it("should wrap around to the front of the alphabet if a letter is shifted off the end of the alphabet", () => {
        const input = "Zebras";
        const shift = 4;
        const expected = "difvew";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })

    //Test 5: It should successfully encode the inputted string based on the set shift value
    it("should successfully encode the input based on the set shift value", () => {
        const input = "I am a sloth";
        const shift = -5;
        const expected = "d vh v ngjoc";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })
})