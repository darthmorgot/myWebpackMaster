const test = (a, b = 5) => {
  const result = a + b;
  for (let i = 1; i <= 3; i++) {
    result *= i;
  }
  return result;
};

console.log(test(2, 4));
