import { useState } from 'react'

// Step 6: Add Reset Functionality and Improve Win Logic
// Now we can start over and the code is cleaner!

// Function to determine who wins (IMPROVED VERSION)
function determineWinner(playerChoice: string, computerChoice: string): string {
  if (playerChoice === computerChoice) return 'tie'
  
  // NEW: Using an object to make the logic cleaner
  const winConditions: { [key: string]: string } = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  }
  
  // If the computer's choice is what the player beats, player wins
  return winConditions[playerChoice] === computerChoice ? 'player' : 'computer'
}

// Function to generate computer's choice (from Step 2)
function getComputerChoice(): string {
  const choices = ['rock', 'paper', 'scissors']
  const randomIndex = Math.floor(Math.random() * 3)
  return choices[randomIndex]
}

function App() {
  // All state from previous steps
  const [result, setResult] = useState('')
  const [playerChoice, setPlayerChoice] = useState('')
  const [computerChoice, setComputerChoice] = useState('')
  const [playerScore, setPlayerScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  
  // Function to play the game
  const playGame = (choice: string) => {
    const computerChoice = getComputerChoice()
    const gameResult = determineWinner(choice, computerChoice)
    
    // Update choice and result state
    setPlayerChoice(choice)
    setComputerChoice(computerChoice)
    setResult(gameResult)
    
    // Update scores based on result
    if (gameResult === 'player') {
      setPlayerScore(prev => prev + 1)
    } else if (gameResult === 'computer') {
      setComputerScore(prev => prev + 1)
    }
    
    console.log(`You chose: ${choice}`)
    console.log(`Computer chose: ${computerChoice}`)
    console.log(`Result: ${gameResult}`)
  }
  
  // NEW: Function to reset the game
  const resetGame = () => {
    setPlayerChoice('')
    setComputerChoice('')
    setResult('')
    setPlayerScore(0)
    setComputerScore(0)
  }
  
  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      
      {/* Display the score */}
      <div>
        <p>Player: {playerScore} | Computer: {computerScore}</p>
      </div>
      
      {/* Buttons */}
      <button onClick={() => playGame('rock')}>Rock</button>
      <button onClick={() => playGame('paper')}>Paper</button>
      <button onClick={() => playGame('scissors')}>Scissors</button>
      
      {/* NEW: Reset button */}
      <button onClick={resetGame}>Reset Game</button>
      
      {/* Show what each player chose */}
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