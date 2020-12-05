import { join } from "path";

import { part1, part2, isValidPassport1, isValidByr, isValidIyr, isValidHgt, isValidHcl, isValidPid } from "..";
import parseListOfStringsWith2LineGap from "../../utils/parsers/parse-string-list-double-gap";

describe("04 - Passport Processing", () => {
  describe("isValidPassport", () => {
    it("should validate a valid passport", () => {
      const passportString = "ecl:gry pid:860033327 eyr:2020 hcl:#fffffd byr:1937 iyr:2017 cid:147 hgt:183cm";

      const isValid = isValidPassport1(passportString);

      expect(isValid).toBeTruthy();
    });

    it("should validate a passport missing just cid", () => {
      const passportString = "ecl:gry pid:860033327 eyr:2020 hcl:#fffffd byr:1937 iyr:2017 hgt:183cm";

      const isValid = isValidPassport1(passportString);

      expect(isValid).toBeTruthy();
    });

    it("should invalidate an empty passport", () => {
      const passportString = "";

      const isValid = isValidPassport1(passportString);

      expect(isValid).toBeFalsy();
    });

    it("should invalidate a passport missing just hgt", () => {
      const passportString = "ecl:gry pid:860033327 eyr:2020 hcl:#fffffd byr:1937 iyr:2017";

      const isValid = isValidPassport1(passportString);

      expect(isValid).toBeFalsy();
    });
  });

  describe("part1", () => {
    it("should solve the simple input", async () => {
      const input = join(__dirname, "fixtures", "simple-input.txt");
      const inputLines = await parseListOfStringsWith2LineGap(input);

      const numberOfValidPassports = part1(inputLines);

      expect(numberOfValidPassports).toEqual(1);
    });

    it("should solve the example input", async () => {
      const input = join(__dirname, "fixtures", "example-input.txt");
      const inputLines = await parseListOfStringsWith2LineGap(input);

      const numberOfValidPassports = part1(inputLines);

      expect(numberOfValidPassports).toEqual(2);
    });

    it("should solve the puzzle input", async () => {
      const input = join(__dirname, "fixtures", "puzzle-input.txt");
      const inputLines = await parseListOfStringsWith2LineGap(input);

      const numberOfValidPassports = part1(inputLines);

      expect(numberOfValidPassports).toEqual(247);
    });
  });

  describe("isValidByr", () => {
    it("should invalidate a byr with a letter", () => {
      const byr = "a";

      const isValid = isValidByr(byr);

      expect(isValid).toBeFalsy();
    });

    it("should validate a byr from 2000", () => {
      const byr = "2000";

      const isValid = isValidByr(byr);

      expect(isValid).toBeTruthy();
    });

    it("should invalidate a byr from before 1920", () => {
      const byr = "100";

      const isValid = isValidByr(byr);

      expect(isValid).toBeFalsy();
    });

    it("should invalidate a byr from after 2002", () => {
      const byr = "2003";

      const isValid = isValidByr(byr);

      expect(isValid).toBeFalsy();
    });
  });

  describe("isValidHgt", () => {
    it("should invalidate a hgt with no numbers", () => {
      const hgt = "a";

      const isValid = isValidHgt(hgt);

      expect(isValid).toBeFalsy();
    });

    it("should invalidate a hgt with just numbers", () => {
      const hgt = "123";

      const isValid = isValidHgt(hgt);

      expect(isValid).toBeFalsy();
    });

    it("should validate a valid hgt", () => {
      const hgt = "60in";

      const isValid = isValidHgt(hgt);

      expect(isValid).toBeTruthy();
    });
  });

  describe("isValidHcl", () => {
    it("should invalidate a hcl with no #", () => {
      const hcl = "123456";

      const isValid = isValidHcl(hcl);

      expect(isValid).toBeFalsy();
    });

    it("should invalidate a hcl with only 5 digits", () => {
      const hcl = "#abc45";

      const isValid = isValidHcl(hcl);

      expect(isValid).toBeFalsy();
    });

    it("should invalidate a hcl with 7 digits", () => {
      const hcl = "#abc1234";

      const isValid = isValidHcl(hcl);

      expect(isValid).toBeFalsy();
    });

    it("should validate a valid hcl", () => {
      const hcl = "#123abc";

      const isValid = isValidHcl(hcl);

      expect(isValid).toBeTruthy();
    });
  });

  describe("isValidPid", () => {
    it("should validate a iyr from 2015", () => {
      const pid = "0000000000";

      const isValid = isValidPid(pid);

      expect(isValid).toBeFalsy();
    });
  });

  describe("isValidIyr", () => {
    it("should validate a iyr from 2015", () => {
      const iyr = "2015";

      const isValid = isValidIyr(iyr);

      expect(isValid).toBeTruthy();
    });

    it("should invalidate a iyr from before 2010", () => {
      const iyr = "2009";

      const isValid = isValidIyr(iyr);

      expect(isValid).toBeFalsy();
    });

    it("should invalidate a iyr from after 2021", () => {
      const iyr = "2021";

      const isValid = isValidIyr(iyr);

      expect(isValid).toBeFalsy();
    });
  });

  describe("part2", () => {
    it("should solve the simple input", async () => {
      const input = join(__dirname, "fixtures", "simple-input.txt");
      const inputLines = await parseListOfStringsWith2LineGap(input);

      const numberOfValidPassports = part2(inputLines);

      expect(numberOfValidPassports).toEqual(1);
    });

    it("should solve the example input", async () => {
      const input = join(__dirname, "fixtures", "example-input.txt");
      const inputLines = await parseListOfStringsWith2LineGap(input);

      const numberOfValidPassports = part2(inputLines);

      expect(numberOfValidPassports).toEqual(2);
    });

    it("should solve the puzzle input", async () => {
      const input = join(__dirname, "fixtures", "puzzle-input.txt");
      const inputLines = await parseListOfStringsWith2LineGap(input);

      const numberOfValidPassports = part2(inputLines);

      expect(numberOfValidPassports).toEqual(145);
    });
  });
});
