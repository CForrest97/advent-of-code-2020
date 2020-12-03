import parseListOfStrings from "./parse-string-list";

const parse2DListOfCharacters = async (path: string): Promise<string[][]> => {
  const rows = await parseListOfStrings(path);

  return rows.map((row) => row.split(""));
};

export default parse2DListOfCharacters;
