import { pipe } from "ramda";

interface Passport {
  byr: string;
  iyr: string;
  eyr: string;
  hgt: string;
  hcl: string;
  ecl: string;
  pid: string;
}

const replace = (pattern: RegExp, replacement: string) => (s: string) => s.replace(pattern, replacement);

const match = (pattern: RegExp) => (s: string) => {
  const match = s.match(pattern);
  if (!match) throw new Error(`Cannot match ${s} with pattern ${pattern}`);
  return match.slice(1);
};

export const part1 = (inputLines: string[]): number =>
  inputLines
    .map(replace(/\n/g, " "))
    .map(isValidPassport1)
    .filter((isValid) => isValid).length;

export const part2 = (inputLines: string[]): number =>
  inputLines
    .map(replace(/\n/g, " "))
    .map(isValidPassport2)
    .filter((isValid) => isValid).length;

const processPassport = (passportString: string): Partial<Passport> => {
  const processedInput: { [key: string]: string | undefined } = {};

  passportString.split(" ").forEach((keyValue: string) => {
    const [key, value] = keyValue.split(":");
    processedInput[key] = value;
  });

  return {
    byr: processedInput.byr,
    iyr: processedInput.iyr,
    eyr: processedInput.eyr,
    hgt: processedInput.hgt,
    hcl: processedInput.hcl,
    ecl: processedInput.ecl,
    pid: processedInput.pid,
  };
};

const isCompletePassport = ({ byr, iyr, eyr, hgt, hcl, ecl, pid }: Partial<Passport>): boolean =>
  !!byr && !!iyr && !!eyr && !!hgt && !!hcl && !!ecl && !!pid;

export const isValidPassport1 = pipe(processPassport, isCompletePassport);

export const isValidPassport2 = (passportString: string): boolean => {
  const { byr, iyr, eyr, hgt, hcl, ecl, pid } = processPassport(passportString);

  if (isValidPassport1(passportString)) {
    return (
      isValidByr(byr as string) &&
      isValidIyr(iyr as string) &&
      isValidEyr(eyr as string) &&
      isValidHgt(hgt as string) &&
      isValidHcl(hcl as string) &&
      isValidEcl(ecl as string) &&
      isValidPid(pid as string)
    );
  }
  return false;
};

const validateInRange = (minimum: number, maximum: number) => (s: string) => +s >= minimum && +s <= maximum;

export const isValidByr = validateInRange(1920, 2002);
export const isValidIyr = validateInRange(2010, 2020);
export const isValidEyr = validateInRange(2020, 2030);
export const isValidHcl = (hcl: string): boolean => !!hcl.match(/^#[a-f0-9]{6}$/);
export const isValidEcl = (ecl: string): boolean => !!ecl.match(/amb|blu|brn|gry|grn|hzl|oth/);
export const isValidPid = (pid: string): boolean => !!pid.match(/^\d{9}$/);

export const isValidHgt = (hgt: string): boolean => {
  try {
    const isValidCm = validateInRange(150, 193);
    const isValidIn = validateInRange(59, 76);

    const [height, unit] = match(/^(\d+)(in|cm)$/)(hgt);

    return unit === "cm" ? isValidCm(height) : isValidIn(height);
  } catch (_error) {
    return false;
  }
};
