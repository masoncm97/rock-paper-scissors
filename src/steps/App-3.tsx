import { useState } from 'react'

// Step 3: Basic React Component with Minimal State
// Now we're adding a simple UI!

// Function to determine who wins (from Step 1)
function determineWinner(playerChoice: string, computerChoice: string): string {
  if (playerChoice === computerChoice) return 'tie'
  
  if (playerChoice === 'rock' && computerChoice === 'scissors') return 'player'
  if (playerChoice === 'paper' && computerChoice === 'rock') return 'player'
  if (playerChoice === 'scissors' && computerChoice === 'paper') return 'player'
  
  return 'computer'
}

// Function to generate computer's choice (from Step 2)
function getComputerChoice(): string {
  const choices = ['rock', 'paper', 'scissors']
  const randomIndex = Math.floor(Math.random() * 3)
  return choices[randomIndex]
}

function App() {
  // NEW: Our first piece of state!
  const [result, setResult] = useState('')
  
  // Function to play the game
  const playGame = (playerChoice: string) => {
    const computerChoice = getComputerChoice()
    const gameResult = determineWinner(playerChoice, computerChoice)
    
    // NEW: Update the UI with the result
    setResult(gameResult)
    
    // Also log to console for debugging
    console.log(`You chose: ${playerChoice}`)
    console.log(`Computer chose: ${computerChoice}`)
    console.log(`Result: ${gameResult}`)
  }
  
  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      
      {/* NEW: Buttons that call our game function */}
      <button onClick={() => playGame('rock')}>Rock</button>
      <button onClick={() => playGame('paper')}>Paper</button>
      <button onClick={() => playGame('scissors')}>Scissors</button>
      
      {/* NEW: Display the result */}
      {result && <p>Result: {result}</p>}
    </div>
  )
}

export default App 