// put code here!
document.getElementById("start").addEventListener("click", function () {
  let userInput = prompt(
    "Who will you follow? Geralt of Rivia or Yennefer of Vengerberg"
  );
  firstQuestion(userInput);
});

function firstQuestion(userInput) {
  if (userInput === "Geralt of Rivia") {
    alert(`You choose ${userInput}`);
    geraltQuestion();
  } else if (userInput === "Yennefer of Vengerberg") {
    alert(`You choose ${userInput}`);
    yenneferQuestion();
  } else {
    alert(`You must pick one of the two choices`);
    firstQuestion(userInput);
  }
}
// ------ Second question- user must answer a question based on their school of teaching related to their magic
function geraltQuestion() {
  alert(`You must go to the School of the Wolf `);
  let userInput = prompt(
    `Will you help train the new batch of baby witchers? yes or no`
  );
  if (userInput === "yes") {
    geraltQuestion2();
  } else if (userInput === "no") {
    geraltQuestion2forNO();
  } else {
    alert(`you must answer yes or no`);
    geraltQuestion();
  }
}

function yenneferQuestion() {
  alert(`You must go to Aretuza `);
  let userInput = prompt(
    `Tissaia has asked you to teach a curriculum she wants to introduce in Aretuza. Will you help her? Yes or No`
  );
  if (userInput === "yes") {
    alert(
      `Tissaia says thank you! The course is about teaching fire magic and how to truly control it`
    );
    yennerferQuestion2();
  } else if (userInput === "no") {
    yennerferQuestion2forNO();
  } else {
    alert(`you must answer yes or no`);
    yennerferQuestion();
  }
}

///---Third question- character must choose to teach new pupils
function geraltQuestion2() {
  let userInput = prompt(`How many are you willing to train?`);
  if (parseInt(userInput) >= 5) {
    let pupils = [
      "Theon",
      "Jaskier",
      "Bard",
      "Eskel",
      "Vesemir",
      "Letho",
      "Coën",
      "Adela",
      "Lexandre",
      "Cedric",
      "Luke",
      "Rhys",
    ];
    alert(`Great you can start right now they're waiting in the back!`);
    for (let i = 0; i < userInput; i++) {
      alert(`${pupils[i]} is waiting`);
      // console.log(pupils[i]);
    }
  } else {
    alert(`Ok then you can have ${userInput} apprentices`);
  }
}

function geraltQuestion2forNO() {
  alert(`Then you must go to Cintra, and visit Queen Calanthe's Banquet`);
  let userInput = prompt(
    `Duny, a knight with the head of a hedgehog has come to claim the law of surprise and ask for Pavetta to be his wife. Queen Calanthe has asked the banquet to kill Duny. Will you save his life? yes or no`
  );

  if (userInput === "yes") {
    geraltQuestion3();
  } else if (userInput === "no") {
    geraltQuestion3forNO();
  }
}
function geraltQuestion3() {
  alert(
    `You have saved Duny's life! He is now asking how he can repay you for his life.`
  );

  let userInput = prompt(
    "Will you ask him for money (how much money) or invoke the Law of Surprise?"
  );

  if (userInput === "child of surprise") {
    alert(
      `Princess Pavetta instantly became pregnant, and you now have a child of surprise cooking up!`
    );
  } else {
    // Convert the userInput to a number using parseInt()
    let amountInGoldCoins = parseInt(userInput);
    if (!isNaN(amountInGoldCoins)) {
      alert(`Duny paid you ${amountInGoldCoins.toString()} gold coins.`);
    } else {
      alert(
        `Invalid input. Please enter a valid number or 'child of surprise'.`
      );
      geraltQuestion3();
    }
  }
}

function geraltQuestion3forNO() {
  alert(`Duny is dead, Queen Calanthe has asked you how can she reward you?`);
  let userInput = prompt(
    "Will you ask the Queen for money or for a castle in Cintra?"
  );
  if (userInput === "Castle in Cintra") {
    alert(`You now have the largest neighbor castle in Cintra`);
  } else if (userInput === "money") {
    alert(`Queen Calanthe has paid you 5000 gold coins`);
  } else {
    alert(`Pick one of the two choices`);
    geraltQuestion3forNO();
  }
}

function yennerferQuestion2() {
  let userInput = prompt(
    `Tissaia needs a few items to be able to have you teach this course, she needs you to go to Cintra. Will you go?`
  );
  if (userInput === "yes") {
    alert(`You have collected all the items neccesary in the woods`);
    yennerferQuestion3();
  } else if (userInput === "no") {
    yennerferQuestion2forNO();
  } else {
    alert(`you must pick one of the two choices`);
    yennerferQuestion2();
  }
}

function yennerferQuestion2forNO() {
  alert(`Then you are forced to go be the mage for Nilfgaard`);
  let userInput = prompt(
    `You have arrived to Nilfgaard, you first task is to create a magical barrier around the area. Will you do it, or create a fake barrier they can see?`
  );
  if (userInput === "magical barrier") {
    alert(`Nilfgaard won a secret coup`);
  } else if (userInput === "fake barrier") {
    alert(`Nilfgaard was attacked and everyone killed except you.`);
  } else {
    alert(`you must pick one of the two choices`);
    yennerferQuestion2forNO();
  }
}

function yennerferQuestion3() {
  let userInput = prompt(
    `Will you take these items back to Tissaia or keep them for your self`
  );
  if (userInput === "Tissaia") {
    alert(`Yay! You can now start teaching the new course tomorrow!`);
  } else if (userInput === "self")
    alert(
      `You can now practice forbidden Fire magic you self with all these items!`
    );
}
