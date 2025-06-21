# Step 2: Add Computer Opponent

## Your Mission
Now that you have the game rules, let's add a computer opponent that can play against you!

## What You Need to Build

### 1. Create a function called `getComputerChoice`
- **Input:** No parameters needed
- **Output:** A random choice: `'rock'`, `'paper'`, or `'scissors'`

### 2. How to Generate Random Choices
You'll need to:
1. Create an array with the three choices: `['rock', 'paper', 'scissors']`
2. Generate a random number between 0 and 2 (since arrays start at index 0)
3. Use that number to pick a choice from the array

### 3. Random Number Generation
Use these JavaScript functions:
- `Math.random()` - gives you a random number between 0 and 1
- `Math.floor()` - rounds down to the nearest whole number
- Multiply by 3 to get a number between 0 and 2

### 4. Create a Complete Game Function
Make a new function called `playGame` that:
- Takes a `playerChoice` parameter
- Calls `getComputerChoice()` to get the computer's move
- Calls your `determineWinner` function from Step 1
- Prints the results to the console

### 5. Test Your Complete Game
Add some test calls:
```javascript
playGame('rock')
playGame('paper')
playGame('scissors')
```

## Hints
- `Math.random() * 3` gives you a number between 0 and 3
- `Math.floor(Math.random() * 3)` gives you 0, 1, or 2
- Use array indexing: `choices[0]` is 'rock', `choices[1]` is 'paper', etc.
- Your `playGame` function should call both `getComputerChoice()` and `determineWinner()`

## Success Check
When you run your code, you should see output like:
```
You chose: rock
Computer chose: scissors
Result: player
---
You chose: paper
Computer chose: rock
Result: player
---
You chose: scissors
Computer chose: paper
Result: player
---
```

## Next Step
Now you'll create a real UI with buttons that players can click! 