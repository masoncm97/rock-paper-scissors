# Step 6: Add Reset Button and Improve Code

## Your Mission
Let's add a reset button so players can start over, and also make the win logic cleaner and more organized!

## What You Need to Build

### 1. Improve the Win Logic
Replace your long `if` statements in `determineWinner` with a cleaner approach:
- Create an object called `winConditions` that maps each choice to what it beats
- Example: `{ rock: 'scissors', paper: 'rock', scissors: 'paper' }`
- Use this object to check if the player wins in one line

### 2. Create a Reset Function
Add a new function called `resetGame` that:
- Sets `playerChoice` back to empty string `''`
- Sets `computerChoice` back to empty string `''`
- Sets `result` back to empty string `''`
- Sets `playerScore` back to `0`
- Sets `computerScore` back to `0`

### 3. Add a Reset Button
Add a button to your UI that:
- Calls the `resetGame` function when clicked
- Has text like "Reset Game" or "Start Over"
- Can be placed anywhere in your UI

### 4. Clean Up the Win Logic
Your new `determineWinner` function should:
- First check for ties (same choice)
- Then use the `winConditions` object to check if player wins
- If neither tie nor player win, computer wins

### 5. Test the Reset Functionality
Make sure the reset button:
- Clears all the game state
- Hides the game results
- Resets scores to 0
- Allows starting a fresh game

## Hints
- The `winConditions` object makes the logic much cleaner
- You can check if player wins with: `winConditions[playerChoice] === computerChoice`
- The reset function should call all 5 state setters
- Test that you can play games, reset, and start over

## Success Check
You should be able to:
- Play several games and see scores increase
- Click reset and see everything clear
- Play new games after resetting
- The win logic should work exactly the same as before

## Next Step
Now you'll add TypeScript types and make it look professional with emojis! 