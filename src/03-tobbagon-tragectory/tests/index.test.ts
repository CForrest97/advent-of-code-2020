import { join } from "path";

import { part1, part2 } from "..";
import parse2DListOfCharacters from "../../utils/parsers/parse-2D-character-list";

describe("03 - Toboggan Trajectory", () => {
  describe("part1", () => {
    it("should solve the simple input", async () => {
      const input = join(__dirname, "fixtures", "simple-input.txt");
      const map = await parse2DListOfCharacters(input);

      const numberOfCollisions = part1(map);

      expect(numberOfCollisions).toEqual(2);
    });

    it("should solve the example input", async () => {
      const input = join(__dirname, "fixtures", "example-input.txt");
      const map = await parse2DListOfCharacters(input);

      const numberOfCollisions = part1(map);

      expect(numberOfCollisions).toEqual(7);
    });

    it("should solve the puzzle input", async () => {
      const input = join(__dirname, "fixtures", "puzzle-input.txt");
      const map = await parse2DListOfCharacters(input);

      const numberOfCollisions = part1(map);

      expect(numberOfCollisions).toEqual(242);
    });
  });
  describe("part2", () => {
    it("should solve the simple input", async () => {
      const input = join(__dirname, "fixtures", "simple-input.txt");
      const map = await parse2DListOfCharacters(input);

      const numberOfCollisions = part2(map);

      expect(numberOfCollisions).toEqual(16);
    });

    it("should solve the example input", async () => {
      const input = join(__dirname, "fixtures", "example-input.txt");
      const map = await parse2DListOfCharacters(input);

      const numberOfCollisions = part2(map);

      expect(numberOfCollisions).toEqual(336);
    });

    it("should solve the puzzle input", async () => {
      const input = join(__dirname, "fixtures", "puzzle-input.txt");
      const map = await parse2DListOfCharacters(input);

      const numberOfCollisions = part2(map);

      expect(numberOfCollisions).toEqual(2265549792);
    });
  });
});
