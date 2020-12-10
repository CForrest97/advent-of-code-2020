enum Instruction {
  jmp,
  nop,
  acc,
}

interface Command {
  instruction: Instruction;
  argument: number;
}

const parseCommand = (command: string): Command => {
  // nop +0
  const match = command.match(/(\w+) ([+-]\d+)/);
  if (!match) throw new Error(`cannot parse ${command}`);
  const [, instructionString, argument] = match;

  const instruction: Instruction =
    instructionString === "jmp" ? Instruction.jmp : instructionString === "nop" ? Instruction.nop : Instruction.acc;

  return {
    instruction,
    argument: parseInt(argument),
  };
};

export const part1 = (commandStrings: string[]): number => {
  const commands: Command[] = commandStrings.map(parseCommand);

  let acc = 0;
  let currentIndex = 0;
  const visistedCommands = new Set<number>();

  while (!visistedCommands.has(currentIndex)) {
    visistedCommands.add(currentIndex);
    const command = commands[currentIndex];
    switch (command.instruction) {
      case Instruction.nop:
        currentIndex += 1;
        break;

      case Instruction.jmp:
        currentIndex += command.argument;
        break;

      case Instruction.acc:
        currentIndex += 1;
        acc += command.argument;
        break;

      default:
        throw new Error(`${command} not recognised`);
    }
  }

  return acc;
};

export const runProgram = (commands: Command[]): number => {
  let acc = 0;
  let currentIndex = 0;
  const visistedCommands = new Set<number>();

  while (currentIndex < commands.length) {
    if (visistedCommands.has(currentIndex)) throw new Error("command revisited");
    visistedCommands.add(currentIndex);
    const command = commands[currentIndex];
    switch (command.instruction) {
      case Instruction.nop:
        currentIndex += 1;
        break;

      case Instruction.jmp:
        currentIndex += command.argument;
        break;

      case Instruction.acc:
        currentIndex += 1;
        acc += command.argument;
        break;

      default:
        throw new Error(`${command} not recognised`);
    }
  }

  return acc;
};

export const part2 = (commandStrings: string[]): number => {
  const commands: Command[] = commandStrings.map(parseCommand);

  const jmpIndexes: number[] = commands.reduce(
    (acc: number[], command: Command, index) => (command.instruction === Instruction.jmp ? acc.concat([index]) : acc),
    []
  );

  for (let i = 0; i < jmpIndexes.length; i++) {
    const jmpIndex = jmpIndexes[i];

    const cutomProgram = [...commands];
    cutomProgram[jmpIndex] = { ...cutomProgram[jmpIndex], instruction: Instruction.nop };

    try {
      return runProgram(cutomProgram);
    } catch (_err) {}
  }

  throw new Error("Not found");
};
