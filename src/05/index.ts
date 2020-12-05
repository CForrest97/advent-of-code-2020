const binaryToDecimal = (binary: string): number => parseInt(binary, 2);
const ticketToBinary = (ticket: string): string => ticket.replace(/[FL]/g, "0").replace(/[BR]/g, "1");
const getSeatId = (ticket: string): number => binaryToDecimal(ticketToBinary(ticket));
const isPreviousSeat = (id: number, _: number, ids: number[]): boolean => !ids.includes(id + 1) && ids.includes(id + 2);

export const part1 = (tickets: string[]): number => Math.max(...tickets.map(getSeatId));
export const part2 = (tickets: string[]): number => (tickets.map(getSeatId).find(isPreviousSeat) as number) + 1;
