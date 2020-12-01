import { promises as fs } from "fs";

const parseListOfNumbers = async (path: string): Promise<number[]> => {
  const buffer: Buffer = await fs.readFile(path);

  return buffer
    .toString()
    .split("\n")
    .slice(0, -1)
    .map((n) => parseInt(n, 10));
};

export default parseListOfNumbers;
