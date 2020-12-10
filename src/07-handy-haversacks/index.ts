interface Bag {
  colour: string;
  children: ChildBag[];
}

interface ChildBag {
  colour: string;
  quantity: number;
}

const ruleToBag = (bagRule: string): Bag => {
  const match = bagRule.match(/(.*) bags contain (.*)./);
  if (!match) throw new Error(`cannot match ${bagRule}`);

  const [, colour, childrenBags] = match;

  const children = childrenBags.split(", ").reduce((acc: ChildBag[], child) => {
    if (child === "no other bags") {
      return acc;
    }

    const childMatch = child.match(/(\d+) (.*) bag/);
    if (!childMatch) throw new Error(`cannot match ${child}`);

    const [, quantity, childColour] = childMatch;
    return acc.concat([{ colour: childColour, quantity: +quantity }]);
  }, []);

  return { colour, children } as Bag;
};

const findAllBagsWhichContain = (bags: Bag[], bagColour: string): string[] =>
  bags
    .filter((bag) => bag.children.find((child) => child.colour === bagColour))
    .map((matchingBag) => matchingBag.colour);

export const part1 = (bagRules: string[]): number => {
  const bags: Bag[] = bagRules.map(ruleToBag);

  let currentBags: string[] = ["shiny gold"];

  let parentBagColours: string[] = [];
  let currentLength = 0;

  do {
    currentLength = parentBagColours.length;
    const nextBags = currentBags
      .flatMap((bag: string) => findAllBagsWhichContain(bags, bag))
      .filter((colour) => !parentBagColours.includes(colour));
    currentBags = [...Array.from(new Set(nextBags))];
    parentBagColours = parentBagColours.concat(...currentBags);
  } while (currentLength !== parentBagColours.length);

  return parentBagColours.length;
};

const countBagsInsideBag = (bags: Bag[], bagColour: string): number => {
  const bag = bags.find((bag) => bag.colour === bagColour);
  if (!bag) throw new Error(`cannot find bag ${bagColour}`);

  if (bag.children.length === 0) return 0;

  const childrenValues = bag.children.map((child) => child.quantity * (countBagsInsideBag(bags, child.colour) + 1));
  return childrenValues.reduce((a, b) => a + b);
};

export const part2 = (bagRules: string[]): number => {
  const bags: Bag[] = bagRules.map(ruleToBag);

  return countBagsInsideBag(bags, "shiny gold");
};
