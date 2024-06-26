# Where Is Waldo?

Welcome to "Where Is Waldo?", an interactive hidden object game built with React. Dive into diverse scenarios filled with secrets and discoveries. Find Waldo and other characters across various levels, beat the best times, and share your achievements with friends!

## Features

- **Engaging Gameplay**: Explore different levels, each featuring unique scenarios and hidden characters.
- **Adaptive Design**: Enjoy the game on any device thanks to responsive design.
- **Leaderboards**: Compete against yourself by saving your fastest times.
- **Dark Mode**: Protect your eyes during night-time sessions with our built-in dark mode.

## Getting Started

Follow these steps to install and start "Where Is Waldo?" locally on your machine.

### Prerequisites

- Node.js (version 12 or later recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the Repository**

   ```sh
   git clone https://github.com/yourUsername/where-is-waldo.git
   cd where-is-waldo
   ```

2. **Install Dependencies**

   ```sh
   npm install
   ```

3. **Start the Game**

   ```sh
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the game.

## How to Play

- **Objective**: Your task is to find Waldo and other characters as quickly as possible in each level.
- **Controls**: Simply click on the characters when you find them in the picture.
- **Scoring**: The faster you find all characters, the higher your score!

## Contributing

Contributions to "Where Is Waldo?" are always welcome! Whether it's bug reports, feature requests, or contributions to code, your input is valued. Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute.

## Code Explanation

### Overview

The "Where Is Waldo?" game is built using React, leveraging its powerful state management to handle game logic and UI updates.

### Components

#### Game Component (`Game.tsx`)

This is the heart of the game, orchestrating the gameplay logic, including tracking the current level, score, and whether the game has started or ended.

#### ImageDisplay Component (`ImageDisplay.tsx`)

Responsible for displaying the current game level's image and detecting clicks on characters.

#### ScoreBoard Component (`ScoreBoard.tsx`)

Displays the current score and progress, showing how many characters the player has found out of the total for the current level.

#### HighScoreBoard Component (`HighScoreBoard.tsx`)

Shows the best times players have achieved in finding all characters across sessions.

### Styling

The game uses CSS for styling, with a focus on responsiveness and dark mode support.

## License

"Where Is Waldo?" is released under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as you see fit.

## Acknowledgments

- **Game Design**: Inspired by the classic search and find books.
- **Development Team**: A shoutout to everyone who contributed to bringing "Where Is Waldo?" to life.
- **Community**: Thank you to all the players for your support and feedback.

Join the search today and let's find Waldo together!


