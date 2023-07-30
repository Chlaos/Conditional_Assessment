let userChoice = prompt("Enter your choice: heads or tails");
let randomNumber = Math.floor(Math.random() * 2);
let computerChoice;

if (randomNumber === 0) {
    computerChoice = "heads";
} else if (randomNumber === 1) {
    computerChoice = "tails";
}

if (userChoice === computerChoice) {
    alert("You guessed right! The coin flip landed on " + userChoice);
} else {
    alert("Sorry, the coin flip landed on " + computerChoice);
}

// Part II
let birthYear = prompt("Enter your birth year");
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

if (age > 21) {
    alert("You are old enough to drink in the US");
} else if (age === 21) {
    alert("You are old enough to drink in the US...barely");
} else {
    alert("Sorry, you are not old enough to drink in the US");
}