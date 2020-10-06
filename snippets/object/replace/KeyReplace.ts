import UserData from "../../../mocks/data/user";
import { User } from "../../../types/data/index";

const data: User = UserData;
const newKeys = { id: "index", name: "nickname" };
const user = replaceKeyName(data, newKeys);

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

console.log(user);
