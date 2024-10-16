export const HelperObjectKeyToKey = <T extends string | number | symbol>(object: Object) => Object.keys(object).reduce((acc, key) => {
  acc[key as T] = key as T;
  return acc;
}, {} as Record<T, T>);