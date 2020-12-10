const findPairWhichSums = (numbers: number[], sum: number) => {
  return numbers.some((a: number, index: number) => numbers.slice(index + 1).some((b: number) => a + b === sum));
};

export const part1 = (numbers: number[]): number => {
  const storedNumbers = numbers.slice(0, 25);
  return numbers.slice(25).find((n: number) => {
    const is = !findPairWhichSums(storedNumbers, n);
    storedNumbers.shift();
    storedNumbers.push(n);
    return is;
  }) as number;
};

export const part2 = (numbers: number[]): number => {
  const target = part1(numbers);

  for (let i = 0; i < numbers.length; i++) {
    let currentSum = 0;
    let j = i;
    while (currentSum < target) {
      currentSum += numbers[j];
      j += 1;
    }
    if (currentSum === target) {
      const min = Math.min(...numbers.slice(i, j));
      const max = Math.max(...numbers.slice(i, j));

      return min + max;
    }
  }

  throw new Error("");
};
