/// <reference types="node" />
import * as readline from "readline";

function multiply(num1: number, num2: number) {
  return num1 * num2;
}

function sum(num1: number | string, num2: number | string): number {
  if (typeof num1 === "string" || typeof num2 === "string") {
    return Number(num1) * Number(num2);
  }
  return num1 * num2;
}

function isEven(num: number): boolean {
  return num % 2 === 0;
}

function showResult(result: number): void {
  if (isEven(result)) {
    console.log(`The result is ${result} and it's even!`);
  } else {
    console.log(`The result is ${result} and it's odd!`);
  }
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("First Number: ", (num1: string) => {
  rl.question("Second Number: ", (num2: string) => {
    const result = sum(Number(num1), Number(num2)) + multiply(1, 2);
    showResult(result);
    rl.close();
  });
});
/*(() => {
  const num1:string = prompt("First Number");
  const num2:string = prompt("Second Number");

  let result = sum(num1, num2);
  result += multiply(1, 2);
  showResult(result);
})();*/
