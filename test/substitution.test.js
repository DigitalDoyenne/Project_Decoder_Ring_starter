const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  //Test 1: All the characters in the alphabet parameter must be unique. Otherwise, it should return false.
  it("should return false if all alphabet characters aren't unique", () => {
    const input = "This alphabet is not unique";
    const alphabet = "xoyqmcgrukswafynthdjpzibvv"
    const encode = true;
    const expected = false;
    const actual = substitution(input, alphabet, encode);
    expect(actual).to.equal(expected);
  })

  //Test 2: The input could include spaces and letters as well as special characters such as #, $, *, etc.
  it("should allow for special characters", () => {
    const input = "The$e @re $peci@l ch@r@cter$";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const encode = true;
    const expected = "jrm$m @hm $nmyu@w yr@h@yjmh$";
    const actual = substitution(input, alphabet, encode);
    expect(actual).to.equal(expected);
  })

  //Test 3: The alphabet parameter must be a string of exactly 26 characters, Otherwise, it should return false.
  it("should return false if alphabet is not 26 characters", () => {
    const input = "This alphabet is too short";
    const alphabet = "jrufscpw";
    const encode = true;
    const expected = false;
    const actual = substitution(input, alphabet, encode);
    expect(actual).to.equal(expected);
  })

  //Test 4: Capital letters can be ignored.
  it("should turn capital letters to lowercase", () => {
    const input = "CaPiTaLiZeD";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const encode = true;
    const expected = "yxnujxwuvmq";
    const actual = substitution(input, alphabet, encode);
    expect(actual).to.equal(expected);
  })

  //Test 5: Spaces should be maintained throughout.
  it("should maintain spaces", () => {
    const input = "I love dogs";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const encode = true;
    const expected = "u wlzm qlgd";
    const actual = substitution(input, alphabet, encode);
    expect(actual).to.equal(expected);
  })

  //Test 6: Return false if no alphabet argument is given
  it("should return false if no alphabet is given", () => {
    const input = "No alphabet given";
    const encode = true;
    const expected = false;
    const actual = substitution(input, encode);
    expect(actual).to.equal(expected);
  })
})