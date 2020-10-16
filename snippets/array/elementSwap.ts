import userArray from "../../mocks/data/userArray";
import { User } from "../../types/data";

let data: User[] = userArray;

console.log(data);

function elementSwap<T>(arr: T[], indexAddr1: number, indexAddr2: number): T[] {
  const tempArr: T[] = arr.concat();
  const temp: T = tempArr[indexAddr1];
  tempArr[indexAddr1] = tempArr[indexAddr2];
  tempArr[indexAddr2] = temp;

  return tempArr;
}

data = elementSwap<User>(data, 0, 1);

console.log(data);
