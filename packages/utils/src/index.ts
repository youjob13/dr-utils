export const getNonNullableValues = <T>(array: (T | null | undefined)[]): T[] => {
  return array.filter(v => v != null) as T[];
};