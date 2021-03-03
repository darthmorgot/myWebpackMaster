import './assets/styles/main.scss';

const test = (a, b = 5) => {
  let result = a + b;
  for (let i = 1; i <= 3; i++) {
    result *= i;
  }
  return result;
};

console.log(test(2, 4));

const testRow = 'This is test row';

console.log(`Test: ${testRow}`);

const y = 110;
const f = test(3, 2);

const func = (x, callback) => {
  return Math.floor(x / callback(3, 2));
};

console.log(`${y} / ${f} = ${func(y, test)}`);

class Game {
  constructor() {
    this.name = 'Master';
  }

  caller() {
    return this.name;
  }
}
const game = new Game();
console.log(game.caller());
