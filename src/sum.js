export const sum = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  let numberA = a;
  let numberB = b;
  if (typeof a !== "number") {
    numberA = Number(a);
  }
  if (typeof b !== "number") {
    numberB = Number(b);
  }
  return numberA + numberB;
};
