import { join } from "path";
import { part1, part2 } from "..";
import parseListOfNumbers from "../../utils/parsers/parse-number-list";

describe("09 - Encoding Errors", () => {
  describe("part1", () => {
    // it("should solve the simple input", async () => {
    //   const input = join(__dirname, "fixtures", "simple-input.txt");
    //   const inputLines = await parseListOfNumbers(input);

    //   const numberOfOuterBags = part1(inputLines);

    //   expect(numberOfOuterBags).toEqual(0);
    // });

    // it("should solve the example input", async () => {
    //   const input = join(__dirname, "fixtures", "example-input.txt");
    //   const inputLines = await parseListOfNumbers(input);

    //   const numberOfOuterBags = part1(inputLines);

    //   expect(numberOfOuterBags).toEqual(5);
    // });

    it("should solve the puzzle input", async () => {
      const input = join(__dirname, "fixtures", "puzzle-input.txt");
      const inputLines = await parseListOfNumbers(input);

      const numberOfOuterBags = part1(inputLines);

      expect(numberOfOuterBags).toEqual(400480901);
    });
  });

  describe("part2", () => {
    // it("should solve the simple input", async () => {
    //   const input = join(__dirname, "fixtures", "simple-input.txt");
    //   const inputLines = await parseListOfNumbers(input);

    //   const numberOfOuterBags = part2(inputLines);

    //   expect(numberOfOuterBags).toEqual(4);
    // });

    // it("should solve the example input", async () => {
    //   const input = join(__dirname, "fixtures", "example-input.txt");
    //   const inputLines = await parseListOfNumbers(input);

    //   const numberOfOuterBags = part2(inputLines);

    //   expect(numberOfOuterBags).toEqual(6);
    // });

    it("should solve the puzzle input", async () => {
      const input = join(__dirname, "fixtures", "puzzle-input.txt");
      const inputLines = await parseListOfNumbers(input);

      const numberOfOuterBags = part2(inputLines);

      expect(numberOfOuterBags).toEqual(67587168);
    });
  });
});
