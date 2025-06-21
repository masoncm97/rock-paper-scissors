import { useState } from 'react'

// Step 4: Add Choice Display
// Now we can see what each player chose!

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
  // State from Step 3
  const [result, setResult] = useState('')
  
  // NEW: State to track what each player chose
  const [playerChoice, setPlayerChoice] = useState('')
  const [computerChoice, setComputerChoice] = useState('')
  
  // Function to play the game
  const playGame = (choice: string) => {
    const computerChoice = getComputerChoice()
    const gameResult = determineWinner(choice, computerChoice)
    
    // NEW: Update all our state variables
    setPlayerChoice(choice)
    setComputerChoice(computerChoice)
    setResult(gameResult)
    
    console.log(`You chose: ${choice}`)
    console.log(`Computer chose: ${computerChoice}`)
    console.log(`Result: ${gameResult}`)
  }
  
  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      
      {/* Buttons */}
      <button onClick={() => playGame('rock')}>Rock</button>
      <button onClick={() => playGame('paper')}>Paper</button>
      <button onClick={() => playGame('scissors')}>Scissors</button>
      
      {/* NEW: Show what each player chose */}
      {playerChoice && (
        <div>
          <p>You chose: {playerChoice}</p>
          <p>Computer chose: {computerChoice}</p>
          <p>Result: {result}</p>
        </div>
      )}
    </div>
  )
}

export default App 