const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*rl.question("Enter your name: ", (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});*/

const askQuestion = () => {
    rl.question("Enter something (type 'exit' to quit): ", (input) => {
      if (input.toLowerCase() === "exit") {
        console.log("Goodbye!");
        rl.close();
      } else {
        console.log(`You entered: ${input}`);
        askQuestion(); // Recursively ask again
      }
    });
  };
  
  askQuestion(); 