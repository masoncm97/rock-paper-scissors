import { useState } from 'react'

// Step 5: Add Scoring
// Now we can keep track of who's winning!

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
  // State from previous steps
  const [result, setResult] = useState('')
  const [playerChoice, setPlayerChoice] = useState('')
  const [computerChoice, setComputerChoice] = useState('')
  
  // NEW: State for keeping score
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
    
    // NEW: Update scores based on result
    if (gameResult === 'player') {
      setPlayerScore(prev => prev + 1)
    } else if (gameResult === 'computer') {
      setComputerScore(prev => prev + 1)
    }
    // Note: Ties don't change the score
    
    console.log(`You chose: ${choice}`)
    console.log(`Computer chose: ${computerChoice}`)
    console.log(`Result: ${gameResult}`)
  }
  
  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      
      {/* NEW: Display the score */}
      <div>
        <p>Player: {playerScore} | Computer: {computerScore}</p>
      </div>
      
      {/* Buttons */}
      <button onClick={() => playGame('rock')}>Rock</button>
      <button onClick={() => playGame('paper')}>Paper</button>
      <button onClick={() => playGame('scissors')}>Scissors</button>
      
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