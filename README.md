# Choose Your Own Adventure - Project Completed!

In this project, I have created a Choose-Your-Own-Adventure-style game using JavaScript. The game prompts the player to make different choices and takes them on an exciting journey with multiple destinations and possible outcomes.

## How to Play

To play the game, simply open the browser console and interact with the prompts that appear. Each prompt will present you with a scenario and a set of choices. Enter your choice by typing 'yes' or 'no', respectively, and follow the instructions.

## Requirements

1. I have ensured that each path the user takes asks them at least three questions, making the adventure engaging and interactive.

2. The game features a minimum of seven total destinations, providing various possible outcomes based on the player's responses.

3. For one of the questions, I have added more than two possible user responses, adding complexity and diversity to the gameplay.

## Additional Features

I have organized the decision-making process into separate functions for better code structure and readability. Each function represents a question asked to the user, leading to different paths in the adventure.

Example code snippet demonstrating the pattern used:

```js
function firstQuestion() {
  let response = prompt(
    "You are walking down the road, and a hungry-looking dog comes up to you, sniffing for treats. You have a cracker wrapped in plastic in your pocket. Do you feed the cracker to the dog? (choose y or n)"
  );

  if (response === "y") {
    secondQuestion();
  } else {
    thirdQuestion();
  }
}

function secondQuestion() {
  let response = prompt(
    "You fed the dog! That was super nice. The dog offers you a gift of a watch or a pony? (choose watch or pony)"
  );
  // More conditional statements and function calls based on the user's response
}
```

Moreover, I have incorporated loops into the game logic to enhance the interactive experience. Whether using `for` loops or array iteration methods like `.forEach()`, loops contribute to the game's dynamic nature.

Lastly, I have cleverly integrated both string and number user inputs to cater to various scenarios and interactions. When necessary, I used `parseInt()` to convert strings to numbers and `${nameOfVariable}` or `.toString()` to convert numbers back into strings.

I hope you enjoy playing the completed Choose Your Own Adventure game! If you have any feedback or suggestions, feel free to share them with me. Happy adventuring!

Credit for images: [Ben Bushnell](https://www.deviantart.com/benbushnell)
