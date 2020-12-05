import { promises as fs } from "fs";

const parseListOfStringsWith2LineGap = async (path: string): Promise<string[]> => {
  const buffer: Buffer = await fs.readFile(path);

  return buffer.toString().trim().split("\n\n");
};

export default parseListOfStringsWith2LineGap;
