# Step 3: Your First React Component

## Your Mission
Time to create a real web interface! You'll build your first React component with buttons that actually work.

## What You Need to Build

### 1. Create a React Component
- Import `useState` from React
- Create a function component called `App`
- Export it as default

### 2. Add Your First State Variable
Use the `useState` hook to create a state variable called `result`:
- Initialize it as an empty string `''`
- You'll get back the current value and a function to update it

### 3. Create a Game Function Inside Your Component
Make a function called `playGame` that:
- Takes a `playerChoice` parameter
- Calls your `getComputerChoice()` function
- Calls your `determineWinner()` function
- Uses the state setter to update the `result`
- Also logs to console for debugging

### 4. Build the UI
Return JSX that includes:
- A heading: "Rock Paper Scissors"
- Three buttons for rock, paper, and scissors
- Each button should call `playGame()` with the right choice
- Display the result below the buttons (only if there is a result)

### 5. Handle the Result Display
Use conditional rendering to show the result:
- Only show the result paragraph if `result` is not empty
- You can use `{result && <p>Result: {result}</p>}`

## Hints
- Remember to import `useState` at the top
- The state setter function is the second thing returned by `useState`
- Use `onClick={() => playGame('rock')}` for button clicks
- Test that clicking buttons updates the result on screen

## Success Check
When you click the buttons, you should see:
- The result appears on the page
- Console logs show the game details
- Each button click updates the result

## Next Step
Now you'll add more state to show what each player chose! 