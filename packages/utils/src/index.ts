export const getNonNullableValues = <T>(array: (T | null | undefined)[]): T[] => {
  return array.filter(v => v != null) as T[];
};

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
