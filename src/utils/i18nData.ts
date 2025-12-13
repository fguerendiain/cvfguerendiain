import { TFunction } from "i18next";

export const translateArray = (t: TFunction, arr: any[], keys: string[]) =>
  arr.map((item) => {
    const clone = { ...item };
    keys.forEach((k) => {
      if (item[k]) clone[k] = t(item[k]);
    });
    return clone;
  });