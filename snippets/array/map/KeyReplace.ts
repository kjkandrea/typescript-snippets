import UserData from "../../../mocks/data/users";
import { User, Users } from "../../../types/data/index";

const data: Users = UserData;
const newKeys = { id: "index", name: "nickname" };
const users = replaceObjectKeyName<User>(data.contents, newKeys);

function replaceObjectKeyName<T>(
  arr: T[],
  newKeys: { [key: string]: any }
): { [key: string]: any }[] {
  return arr.map((obj): { [key: string]: any } => {
    return replaceKeyName(obj, newKeys);
  });
}

function replaceKeyName(
  obj: { [key: string]: any },
  newKeys: { [key: string]: any }
): { [key: string]: any } {
  const keyValues = Object.keys(obj).map((key): { [key: string]: any } => {
    const newKey = newKeys[key] || key;
    return {
      [newKey]: obj[key],
    };
  });

  return Object.assign({}, ...keyValues);
}

console.log(users);
