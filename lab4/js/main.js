const { createApp } = Vue;

createApp({
  data() {
    return {
      guess: "",
      msg: "Start guessing",
      secretNumber: 0,
      attemptsLeft: 5,
      guesses: [],
      isGameOver: false,
    };
  },

  methods: {
    generateRandomNumber() {
      return Math.floor(Math.random() * 100) + 1;
    },

    resetGame() {
      this.guess = "";
      this.msg = "Start guessing";
      this.secretNumber = this.generateRandomNumber();
      console.log("number is :", this.secretNumber);
      this.attemptsLeft = 5;
      this.guesses = [];
      this.isGameOver = false;
    },

    finishGame(message) {
      this.msg = message;
      this.isGameOver = true;
      this.guess = "";
    },

    checkGuess() {
      if (this.isGameOver) {
        return;
      }

      const currentGuess = Number(this.guess);

      if (
        !Number.isInteger(currentGuess) ||
        currentGuess < 1 ||
        currentGuess > 100
      ) {
        this.msg = "Please enter a whole number from 1 to 100.";
        return;
      }

      this.guesses.push(currentGuess);
      this.attemptsLeft -= 1;

      if (currentGuess === this.secretNumber) {
        this.finishGame("You got it!");
        return;
      }

      if (this.attemptsLeft === 0) {
        this.finishGame(
          `No attempts left. The correct number was ${this.secretNumber}.`,
        );
        return;
      }

      this.msg =
        currentGuess < this.secretNumber ? "Guess higher" : "Guess lower";
      this.guess = "";
    },

    giveUp() {
      if (this.isGameOver) {
        return;
      }

      this.finishGame(`The correct number was ${this.secretNumber}.`);
    },

    startOver() {
      this.resetGame();
    },
  },

  created() {
    this.resetGame();
  },
}).mount("#app");
