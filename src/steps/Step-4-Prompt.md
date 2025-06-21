# Step 4: Show What Each Player Chose

## Your Mission
Right now players only see who won, but they can't see what the computer chose. Let's add more state to show the full game details!

## What You Need to Build

### 1. Add Two More State Variables
Create two new state variables using `useState`:
- `playerChoice` - starts as empty string `''`
- `computerChoice` - starts as empty string `''`

### 2. Update Your Game Function
Modify your `playGame` function to:
- Store the player's choice in `playerChoice` state
- Store the computer's choice in `computerChoice` state
- Keep updating the `result` state as before

### 3. Display the Choices
Update your JSX to show:
- What the player chose
- What the computer chose
- The result

### 4. Conditional Rendering
Only show the game details when there's actually a game played:
- Use conditional rendering to show the choices and result
- Only display this section if `playerChoice` is not empty
- You can use `{playerChoice && <div>...</div>}`

### 5. Organize the Display
Structure your display like this:
```
You chose: rock
Computer chose: scissors
Result: player
```

## Hints
- You'll have 3 state variables now: `result`, `playerChoice`, `computerChoice`
- Update all three in your `playGame` function
- The conditional rendering should check if there's a `playerChoice`
- Test that clicking buttons shows both choices and the result

## Success Check
When you click a button, you should see:
- "You chose: [choice]"
- "Computer chose: [choice]"
- "Result: [winner]"
- All three pieces of information appear together

## Next Step
Now you'll add scoring to keep track of wins and losses! 