export const sum = (a: number | string, b: number | string): number => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  const numberA: number = typeof a !== "number" ? Number(a) : a;
  const numberB: number = typeof b !== "number" ? Number(b) : b;

  return numberA + numberB;
};
