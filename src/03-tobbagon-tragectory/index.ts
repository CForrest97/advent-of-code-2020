import Vector from "../Vectors/data/Vector";
import addVectors from "../Vectors/add-vectors";

export const part1 = (map: string[][]): number => getNumberOfCollisions(map, { x: 3, y: 1 });

export const part2 = (map: string[][]): number => {
  const slopes: Vector[] = [
    { x: 1, y: 1 },
    { x: 3, y: 1 },
    { x: 5, y: 1 },
    { x: 7, y: 1 },
    { x: 1, y: 2 },
  ];

  return slopes
    .map((slope) => getNumberOfCollisions(map, slope))
    .reduce((product, collisions) => product * collisions, 1);
};

const getNumberOfCollisions = (map: string[][], slope: Vector): number => {
  let currentPostion: Vector = { x: 0, y: 0 };
  let numberOfCollisions = 0;

  while (currentPostion.y < map.length) {
    if (isTreeAtPosition(map, currentPostion)) {
      numberOfCollisions += 1;
    }
    currentPostion = addVectors(currentPostion, slope);
  }

  return numberOfCollisions;
};

const isTreeAtPosition = (map: string[][], position: Vector): boolean => {
  const modularisedX = position.x % map[0].length;

  return map[position.y][modularisedX] === "#";
};
