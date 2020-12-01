import { join } from "path";

import parseListOfNumbers from "../../utils/parsers/parse-number-list";
import { part1, part2, get2NumbersWhichSumToTarget, get3NumbersWhichSumTo2020 } from "..";

describe("01 - Report Repair", () => {
  describe("get2NumbersWhichSumToTarget", () => {
    it("should find the 2 numbers which sum to 2020", () => {
      const entries = [1721, 979, 366, 299, 675, 1456];

      const [entry1, entry2] = get2NumbersWhichSumToTarget(entries, 2020);

      expect(entry1).toEqual(299);
      expect(entry2).toEqual(1721);
    });
  });

  describe("part1", () => {
    it("should solve the simple input", async () => {
      const input = join(__dirname, "fixtures", "simple-input.txt");
      const entries = await parseListOfNumbers(input);

      const product = part1(entries);

      expect(product).toEqual(2019);
    });

    it("should solve the example input", async () => {
      const input = join(__dirname, "fixtures", "example-input.txt");
      const entries = await parseListOfNumbers(input);

      const product = part1(entries);

      expect(product).toEqual(514579);
    });

    it("should solve the puzzle input", async () => {
      const input = join(__dirname, "fixtures", "puzzle-input.txt");
      const entries = await parseListOfNumbers(input);

      const product = part1(entries);

      expect(product).toEqual(633216);
    });
  });

  describe("get3NumbersWhichSumTo2020", () => {
    it("should find the 2 numbers which sum to 2020", () => {
      const entries = [1721, 979, 366, 299, 675, 1456];

      const [entry1, entry2, entry3] = get3NumbersWhichSumTo2020(entries);

      expect(entry1).toEqual(366);
      expect(entry2).toEqual(675);
      expect(entry3).toEqual(979);
    });
  });

  describe("part2", () => {
    it("should solve the simple input", async () => {
      const input = join(__dirname, "fixtures", "simple-input.txt");
      const entries = await parseListOfNumbers(input);

      const product = part2(entries);

      expect(product).toEqual(4034);
    });

    it("should solve the example input", async () => {
      const input = join(__dirname, "fixtures", "example-input.txt");
      const entries = await parseListOfNumbers(input);

      const product = part2(entries);

      expect(product).toEqual(241861950);
    });

    it("should solve the puzzle input", async () => {
      const input = join(__dirname, "fixtures", "puzzle-input.txt");
      const entries = await parseListOfNumbers(input);

      const product = part2(entries);

      expect(product).toEqual(68348924);
    });
  });
});
