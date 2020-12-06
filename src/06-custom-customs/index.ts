const split = (on: string) => (s: string) => s.split(on);
const size = (set: Set<string>): number => set.size;
const sum = (a: number, b: number) => a + b;

const union = (sets: Set<string>[]) =>
  new Set(sets.reduce((acc: string[], x: Set<string>) => [...acc, ...Array.from(x)], []));
const intersection = (sets: Set<string>[]) =>
  sets.reduce((acc: Set<string>, x: Set<string>) => new Set([...Array.from(acc)].filter((string) => x.has(string))));

const createSetFromString = (s: string) => new Set(s);
const createSetsFromStrings = (strings: string[]): Set<string>[] => strings.map(createSetFromString);

export const part1 = (groups: string[]): number =>
  groups.map(split("\n")).map(createSetsFromStrings).map(union).map(size).reduce(sum);
export const part2 = (groups: string[]): number =>
  groups.map(split("\n")).map(createSetsFromStrings).map(intersection).map(size).reduce(sum);
