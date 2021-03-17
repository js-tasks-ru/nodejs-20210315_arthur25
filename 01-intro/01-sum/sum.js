function sum(a, b) {
  const summ = a + b;

  if (typeof a === "number" && typeof b === "number") {
    return summ;
  } else {
    throw new TypeError();
  }
}

module.exports = sum;
