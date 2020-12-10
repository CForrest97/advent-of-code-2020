import { join } from "path";
import { part1, part2 } from "..";
import parseListOfStrings from "../../utils/parsers/parse-string-list";

describe("08 - Handheld Halting", () => {
  describe("part1", () => {
    it("should solve the simple input", async () => {
      const input = join(__dirname, "fixtures", "simple-input.txt");
      const inputLines = await parseListOfStrings(input);

      const numberOfOuterBags = part1(inputLines);

      expect(numberOfOuterBags).toEqual(0);
    });

    it("should solve the example input", async () => {
      const input = join(__dirname, "fixtures", "example-input.txt");
      const inputLines = await parseListOfStrings(input);

      const numberOfOuterBags = part1(inputLines);

      expect(numberOfOuterBags).toEqual(5);
    });

    it("should solve the puzzle input", async () => {
      const input = join(__dirname, "fixtures", "puzzle-input.txt");
      const inputLines = await parseListOfStrings(input);

      const numberOfOuterBags = part1(inputLines);

      expect(numberOfOuterBags).toEqual(1317);
    });
  });

  describe("part2", () => {
    it("should solve the simple input", async () => {
      const input = join(__dirname, "fixtures", "simple-input.txt");
      const inputLines = await parseListOfStrings(input);

      const numberOfOuterBags = part2(inputLines);

      expect(numberOfOuterBags).toEqual(0);
    });

    it("should solve the example input", async () => {
      const input = join(__dirname, "fixtures", "example-input.txt");
      const inputLines = await parseListOfStrings(input);

      const numberOfOuterBags = part2(inputLines);

      expect(numberOfOuterBags).toEqual(8);
    });

    it("should solve the puzzle input", async () => {
      const input = join(__dirname, "fixtures", "puzzle-input.txt");
      const inputLines = await parseListOfStrings(input);

      const numberOfOuterBags = part2(inputLines);

      expect(numberOfOuterBags).toEqual(1033);
    });
  });
});
