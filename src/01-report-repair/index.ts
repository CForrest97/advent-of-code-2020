import sortNumbersIntoAscendingOrder from "../utils/sort-numbers";

export const part1 = (numbers: number[]): number => {
  const [entry1, entry2] = get2NumbersWhichSumToTarget(numbers, 2020);

  return entry1 * entry2;
};

export const part2 = (numbers: number[]): number => {
  const [entry1, entry2, entry3] = get3NumbersWhichSumTo2020(numbers);

  return entry1 * entry2 * entry3;
};

export const get3NumbersWhichSumTo2020 = (numbers: number[]): [number, number, number] => {
  const sortedNumbers = sortNumbersIntoAscendingOrder(numbers);

  for (let i = 0; i < sortedNumbers.length - 2; i++) {
    const entry1 = sortedNumbers[i];
    try {
      const [entry2, entry3] = get2NumbersWhichSumToTarget(sortedNumbers.slice(i), 2020 - entry1);
      return [entry1, entry2, entry3];
    } catch (error) {}
  }

  throw new Error("Entries not found");
};

export const get2NumbersWhichSumToTarget = (numbers: number[], target: number): [number, number] => {
  const sortedNumbers = sortNumbersIntoAscendingOrder(numbers);

  let lowerBound = 0;
  let upperBound = sortedNumbers.length - 1;

  let sum = sortedNumbers[lowerBound] + sortedNumbers[upperBound];

  while (sum !== target) {
    if (sum < target) {
      lowerBound += 1;
    } else {
      upperBound -= 1;
    }

    if (lowerBound >= upperBound) {
      throw new Error("Entries not found");
    }

    sum = sortedNumbers[lowerBound] + sortedNumbers[upperBound];
  }

  return [sortedNumbers[lowerBound], sortedNumbers[upperBound]];
};
