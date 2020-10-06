import ProductData from "../../../mocks/data/products";
import { Product, Products } from "../../../types/data/index";

const data: Products = ProductData;
const newKeys = { title: "iWish", subProducts: "subWish" };
const products = replaceObjectKeyName<Product>(data.contents, newKeys);

function replaceObjectKeyName<T>(
  arr: T[],
  newKeys: { [key: string]: any }
): { [key: string]: any }[] {
  return arr.map((obj): { [key: string]: any } => {
    return deepReplaceKeyName(obj, newKeys);
  });
}

function deepReplaceKeyName(
  obj: { [key: string]: any },
  newKeys: { [key: string]: any }
): { [key: string]: any } {
  const keyValues = Object.keys(obj).map((key): { [key: string]: any } => {
    const newKey = newKeys[key] || key;

    if (Array.isArray(obj[key])) {
      const temp = replaceObjectKeyName(obj[key], newKeys);
      return {
        [newKey]: temp,
      };
    }

    return {
      [newKey]: obj[key],
    };
  });

  return Object.assign({}, ...keyValues);
}

console.log(products);
console.log(products[0].subWish);
