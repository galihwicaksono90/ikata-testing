import { createClassYears } from "utils/createClassYears";

export function divideArrayIntoChunks<T>(array: T[], chunkSize: number) {
  const newArray: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    newArray.push(chunk);
  }

  return newArray;
}

export const generateEightYears = () => {
  const years: string[] = createClassYears().reverse();
  const dividedYears = divideArrayIntoChunks(years, 8);

  const arr: { value: string; label: string; data: string[] }[] = [];
  for (let i = 0; i < dividedYears.length; i++) {
    arr.push({
      value: i.toString(),
      data: dividedYears[i],
      label: `${dividedYears[i][0]} - ${
        dividedYears[i][dividedYears[i].length - 1]
      }`,
    });
  }

  return arr;
};
