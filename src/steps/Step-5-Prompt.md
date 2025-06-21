# Step 5: Add Scoring System

## Your Mission
Now let's keep track of who's winning! You'll add a scoring system that remembers how many games each player has won.

## What You Need to Build

### 1. Add Score State Variables
Create two new state variables for tracking scores:
- `playerScore` - starts at `0`
- `computerScore` - starts at `0`

### 2. Update Scores in Your Game Function
Modify your `playGame` function to update scores based on the result:
- If the result is `'player'`, increase `playerScore` by 1
- If the result is `'computer'`, increase `computerScore` by 1
- If it's a tie, don't change either score

### 3. Display the Score
Add a score display at the top of your UI:
- Show "Player: [score] | Computer: [score]"
- Update this display after every game

### 4. Use the Previous Score Value
When updating scores, use the function form of the state setter:
- `setPlayerScore(prev => prev + 1)` instead of `setPlayerScore(playerScore + 1)`
- This ensures you're always working with the latest score value

### 5. Handle Score Updates
In your `playGame` function, after determining the winner:
- Check if the result is `'player'` and update player score
- Check if the result is `'computer'` and update computer score
- Ties don't change the score

## Hints
- You'll have 5 state variables total now
- Use `if` statements to check the result before updating scores
- The score display should be visible even before the first game
- Test that scores only increase when someone actually wins

## Success Check
When you play multiple games, you should see:
- Score display at the top: "Player: 2 | Computer: 1"
- Scores only increase when someone wins (not on ties)
- Score updates immediately after each game

## Next Step
Now you'll add a reset button and improve the code organization! 