import { join } from "path";

import { parsePasswordAndPolicy, part1, part2, isValidOnCount, isValidOnPositions } from "..";
import parseListOfStrings from "../../utils/parsers/parse-string-list";

describe("02 - Password Philosophy", () => {
  describe("isValidOnCount", () => {
    it("should validate a valid password", () => {
      const password = "abcde";
      const characer = "a";
      const minCount = 1;
      const maxCount = 3;

      const isValid = isValidOnCount(password, characer, minCount, maxCount);

      expect(isValid).toEqual(true);
    });

    it("should invalidate password with not enough occurances", () => {
      const password = "abcde";
      const characer = "z";
      const minCount = 1;
      const maxCount = 3;

      const isValid = isValidOnCount(password, characer, minCount, maxCount);

      expect(isValid).toEqual(false);
    });

    it("should invalidate password with too many Count", () => {
      const password = "aa";
      const characer = "a";
      const minCount = 1;
      const maxCount = 1;

      const isValid = isValidOnCount(password, characer, minCount, maxCount);

      expect(isValid).toEqual(false);
    });
  });

  describe("parsePasswordAndPolicy", () => {
    it("should parse the password", () => {
      const {
        password,
        character,
        numbers: [number1, number2],
      } = parsePasswordAndPolicy("1-3 a: password");

      expect(password).toEqual("password");
      expect(character).toEqual("a");
      expect(number1).toEqual(1);
      expect(number2).toEqual(3);
    });
  });

  describe("part1", () => {
    it("should solve the simple input", async () => {
      const input = join(__dirname, "fixtures", "simple-input.txt");
      const inputLines = await parseListOfStrings(input);

      const numberOfValidPasswords = part1(inputLines);

      expect(numberOfValidPasswords).toEqual(1);
    });

    it("should solve the example input", async () => {
      const input = join(__dirname, "fixtures", "example-input.txt");
      const inputLines = await parseListOfStrings(input);

      const numberOfValidPasswords = part1(inputLines);

      expect(numberOfValidPasswords).toEqual(2);
    });

    it("should solve the puzzle input", async () => {
      const input = join(__dirname, "fixtures", "puzzle-input.txt");
      const inputLines = await parseListOfStrings(input);

      const numberOfValidPasswords = part1(inputLines);

      expect(numberOfValidPasswords).toEqual(660);
    });
  });

  describe("isValidOnPositions", () => {
    it("should validate password with just first occurance", () => {
      const password = "abcde";
      const characer = "a";
      const firstPosition = 1;
      const secondPosition = 3;

      const isValid = isValidOnPositions(password, characer, firstPosition, secondPosition);

      expect(isValid).toEqual(true);
    });

    it("should validate password with just second occurance", () => {
      const password = "abcde";
      const characer = "c";
      const firstPosition = 1;
      const secondPosition = 3;

      const isValid = isValidOnPositions(password, characer, firstPosition, secondPosition);

      expect(isValid).toEqual(true);
    });

    it("should invalidate password with no occurances", () => {
      const password = "cdefg";
      const characer = "b";
      const firstPosition = 1;
      const secondPosition = 3;

      const isValid = isValidOnPositions(password, characer, firstPosition, secondPosition);

      expect(isValid).toEqual(false);
    });

    it("should invalidate password with 2 occurances", () => {
      const password = "ccccccccc";
      const characer = "c";
      const firstPosition = 2;
      const secondPosition = 9;

      const isValid = isValidOnPositions(password, characer, firstPosition, secondPosition);

      expect(isValid).toEqual(false);
    });
  });

  describe("part2", () => {
    it("should solve the simple input", async () => {
      const input = join(__dirname, "fixtures", "simple-input.txt");
      const inputLines = await parseListOfStrings(input);

      const numberOfValidPasswords = part2(inputLines);

      expect(numberOfValidPasswords).toEqual(1);
    });

    it("should solve the example input", async () => {
      const input = join(__dirname, "fixtures", "example-input.txt");
      const inputLines = await parseListOfStrings(input);

      const numberOfValidPasswords = part2(inputLines);

      expect(numberOfValidPasswords).toEqual(1);
    });

    it("should solve the puzzle input", async () => {
      const input = join(__dirname, "fixtures", "puzzle-input.txt");
      const inputLines = await parseListOfStrings(input);

      const numberOfValidPasswords = part2(inputLines);

      expect(numberOfValidPasswords).toEqual(530);
    });
  });
});
