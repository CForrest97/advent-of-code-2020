import { join } from "path";
import { part1, part2 } from "..";
import parseListOfStringsWith2LineGap from "../../utils/parsers/parse-string-list-double-gap";

describe("06 - Custom Customs", () => {
  describe("part1", () => {
    it("should solve the simple input", async () => {
      const input = join(__dirname, "fixtures", "simple-input.txt");
      const inputLines = await parseListOfStringsWith2LineGap(input);

      const yesAnswers = part1(inputLines);

      expect(yesAnswers).toEqual(6);
    });

    it("should solve the example input", async () => {
      const input = join(__dirname, "fixtures", "example-input.txt");
      const inputLines = await parseListOfStringsWith2LineGap(input);

      const yesAnswers = part1(inputLines);

      expect(yesAnswers).toEqual(11);
    });

    it("should solve the puzzle input", async () => {
      const input = join(__dirname, "fixtures", "puzzle-input.txt");
      const inputLines = await parseListOfStringsWith2LineGap(input);

      const yesAnswers = part1(inputLines);

      expect(yesAnswers).toEqual(6506);
    });
  });

  describe("part2", () => {
    it("should solve the simple input", async () => {
      const input = join(__dirname, "fixtures", "simple-input.txt");
      const inputLines = await parseListOfStringsWith2LineGap(input);

      const yesAnswers = part2(inputLines);

      expect(yesAnswers).toEqual(3);
    });

    it("should solve the example input", async () => {
      const input = join(__dirname, "fixtures", "example-input.txt");
      const inputLines = await parseListOfStringsWith2LineGap(input);

      const yesAnswers = part2(inputLines);

      expect(yesAnswers).toEqual(6);
    });

    it("should solve the puzzle input", async () => {
      const input = join(__dirname, "fixtures", "puzzle-input.txt");
      const inputLines = await parseListOfStringsWith2LineGap(input);

      const yesAnswers = part2(inputLines);

      expect(yesAnswers).toEqual(3243);
    });
  });
});
