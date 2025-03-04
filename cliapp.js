const readline = require("readline");
const add=require("./add")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*rl.question("Enter your name: ", (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});*/
function getFirstWord(input) {
    const match = input.match(/\b\w+\b/); // Finds the first word
    return match ? match[0] : ""; // Return first match or empty string
  }

const askQuestion = () => {
    rl.question("Enter something (type 'exit' to quit): ", (input) => {
      if (getFirstWord(input.toLowerCase()) === "exit") {
        console.log("Goodbye!");
        rl.close();
      }else if(getFirstWord(input.toLowerCase())==="add"){ 
        
    }else {
        console.log(`You entered: ${input}`);
        askQuestion(); // Recursively ask again
      }
    });
  };
  
  askQuestion(); 