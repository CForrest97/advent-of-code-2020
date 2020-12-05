import { join } from "path";
import { part1, part2 } from "..";
import parseListOfStrings from "../../utils/parsers/parse-string-list";

describe("05 - Binary Boarding", () => {
  describe("part1", () => {
    it("should solve the simple input", async () => {
      const input = join(__dirname, "fixtures", "simple-input.txt");
      const inputLines = await parseListOfStrings(input);

      const maxSeatId = part1(inputLines);

      expect(maxSeatId).toEqual(1023);
    });

    it("should solve the example input", async () => {
      const input = join(__dirname, "fixtures", "example-input.txt");
      const inputLines = await parseListOfStrings(input);

      const maxSeatId = part1(inputLines);

      expect(maxSeatId).toEqual(820);
    });

    it("should solve the puzzle input", async () => {
      const input = join(__dirname, "fixtures", "puzzle-input.txt");
      const inputLines = await parseListOfStrings(input);

      const maxSeatId = part1(inputLines);

      expect(maxSeatId).toEqual(998);
    });
  });

  describe("part2", () => {
    it("should solve the simple input", async () => {
      const input = join(__dirname, "fixtures", "simple-input.txt");
      const inputLines = await parseListOfStrings(input);

      const missingSeatId = part2(inputLines);

      expect(missingSeatId).toEqual(1);
    });

    it("should solve the puzzle input", async () => {
      const input = join(__dirname, "fixtures", "puzzle-input.txt");
      const inputLines = await parseListOfStrings(input);

      const missingSeatId = part2(inputLines);

      expect(missingSeatId).toEqual(676);
    });
  });
});
