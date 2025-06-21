# Step 1: Core Game Logic

## Your Mission
Create the basic rules for rock-paper-scissors using pure JavaScript functions. No React, no UI - just the logic!

## What You Need to Build

### 1. Create a function called `determineWinner`
- **Input:** Two parameters: `playerChoice` and `computerChoice` (both strings)
- **Output:** A string that says who won: `'player'`, `'computer'`, or `'tie'`

### 2. The Rules
Remember the rules of rock-paper-scissors:
- Rock beats Scissors
- Paper beats Rock  
- Scissors beats Paper
- Same choice = tie

### 3. How to Write the Function
You'll need to use `if` statements to check:
1. First, check if both choices are the same (that's a tie)
2. Then check each winning combination:
   - If player has 'rock' and computer has 'scissors' → player wins
   - If player has 'paper' and computer has 'rock' → player wins
   - If player has 'scissors' and computer has 'paper' → player wins
3. If none of the above are true, computer wins

### 4. Test Your Function
Add some console.log statements to test your function:
```javascript
console.log('Rock vs Scissors:', determineWinner('rock', 'scissors')) // Should be 'player'
console.log('Paper vs Rock:', determineWinner('paper', 'rock')) // Should be 'player'
console.log('Rock vs Rock:', determineWinner('rock', 'rock')) // Should be 'tie'
console.log('Rock vs Paper:', determineWinner('rock', 'paper')) // Should be 'computer'
```

## Hints
- Start with the tie condition first
- Use `===` to compare strings
- You can use `return` to exit the function early
- Test each case in the browser console

## Success Check
When you run your code, you should see output like:
```
Rock vs Scissors: player
Paper vs Rock: player
Rock vs Rock: tie
Rock vs Paper: computer
```

## Next Step
Once this works, you'll add a computer opponent that makes random choices! 