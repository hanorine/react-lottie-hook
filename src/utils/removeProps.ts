import { object } from "./common";

export const removeProps = <T extends object, P extends keyof T>(
  obj: T,
  ...props: (P | string)[]
): { [key in keyof Omit<T, P>]: unknown } | undefined => {
  if (!object.isPopulated(obj)) return;
  const list = [...props];
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (list.includes(key)) return acc;
    return {
      ...acc,
      [key]: value,
    };
  }, {} as { [key in keyof Omit<T, P>]: unknown });
};
