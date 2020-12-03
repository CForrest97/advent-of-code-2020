import { promises as fs } from "fs";

const parseListOfNumbers = async (path: string): Promise<number[]> => {
  const buffer: Buffer = await fs.readFile(path);

  return buffer
    .toString()
    .trim()
    .split("\n")
    .map((n) => parseInt(n, 10));
};

export default parseListOfNumbers;
