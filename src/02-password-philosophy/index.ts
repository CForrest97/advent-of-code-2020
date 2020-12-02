export const part1 = (inputLines: string[]): number =>
  inputLines
    .map(parsePasswordAndPolicy)
    .map(({ password, character, numbers: [minCount, maxCount] }) =>
      isValidOnCount(password, character, minCount, maxCount)
    )
    .filter((isValid) => isValid).length;

export const part2 = (inputLines: string[]): number =>
  inputLines
    .map(parsePasswordAndPolicy)
    .map(({ password, character, numbers: [firstIndex, secondIndex] }) =>
      isValidOnPositions(password, character, firstIndex, secondIndex)
    )
    .filter((isValid) => isValid).length;

export const isValidOnCount = (password: string, character: string, minCount: number, maxCount: number): boolean => {
  const numberOfCharacterOccurances = (password.match(new RegExp(character, "g")) || []).length;

  return numberOfCharacterOccurances >= minCount && numberOfCharacterOccurances <= maxCount;
};

export const isValidOnPositions = (
  password: string,
  character: string,
  firstIndex: number,
  secondIndex: number
): boolean => {
  const firstCharacter = password.charAt(firstIndex - 1);
  const secondCharacter = password.charAt(secondIndex - 1);

  return (firstCharacter === character || secondCharacter === character) && firstCharacter !== secondCharacter;
};

export const parsePasswordAndPolicy = (
  passwordAndPolicy: string
): {
  password: string;
  character: string;
  numbers: [number, number];
} => {
  const [numbersWithDash, characterWithColon, password] = passwordAndPolicy.split(" ");
  const [firstNumber, secondNumber] = numbersWithDash.split("-");

  return {
    password,
    character: characterWithColon.slice(0, -1),
    numbers: [parseInt(firstNumber, 10), parseInt(secondNumber, 10)],
  };
};
