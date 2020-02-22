import readlineSync from "readline-sync";

export const run = () => {
   console.log("Welcome to the Brain Games!");

   const actual = readlineSync.question("Your answer: ");

   console.log(`Hello, ${actual}`);
}