import sortNumbersIntoAscendingOrder from "../utils/sort-numbers";

export const part1 = (adapters: number[]): number => {
  let jump1s = 0;
  let jump3s = 0;

  let currentJoltage = 0;

  const sortedAdapters = sortNumbersIntoAscendingOrder([...adapters]);
  const deviceJoltage = Math.max(...adapters) + 3;
  while (currentJoltage !== deviceJoltage - 3) {
    const nextAdapter = sortedAdapters.find((adapter) => adapter > currentJoltage);
    if (!nextAdapter) throw new Error("next adapter not found");

    if (nextAdapter - currentJoltage === 1) {
      jump1s += 1;
    }
    if (nextAdapter - currentJoltage === 3) {
      jump3s += 1;
    }
    currentJoltage = nextAdapter;
  }
  return jump1s * (jump3s + 1);
};

export const part2 = (adaptersArray: number[]): number => {
  const adapters = new Set(adaptersArray);
  const target = Math.max(...adaptersArray);

  return getNumberOfAdapterOptions(adapters, 0, {}, target);
};

const getNumberOfAdapterOptions = (
  adapters: Set<number>,
  currentJoltage: number,
  answerBook: { [joltage: number]: number },
  target: number
): number => {
  if (answerBook[currentJoltage] !== undefined) {
    return answerBook[currentJoltage];
  }

  if (currentJoltage === target) return 1;

  const options = [];
  if (adapters.has(currentJoltage + 1)) options.push(currentJoltage + 1);
  if (adapters.has(currentJoltage + 2)) options.push(currentJoltage + 2);
  if (adapters.has(currentJoltage + 3)) options.push(currentJoltage + 3);

  const solutions = options.map((option) => getNumberOfAdapterOptions(adapters, option, answerBook, target));

  const numberOfSolutions = solutions.reduce((a, b) => a + b);
  answerBook[currentJoltage] = numberOfSolutions;
  return numberOfSolutions;
};
