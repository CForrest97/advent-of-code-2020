import { promises as fs } from "fs";

const parseListOfStrings = async (path: string): Promise<string[]> => {
  const buffer: Buffer = await fs.readFile(path);

  return buffer.toString().trim().split("\n");
};

export default parseListOfStrings;
