import { useState } from 'react'

// FINAL VERSION: Complete Rock Paper Scissors Game
// This includes TypeScript types, emojis, and proper styling!

// Define the possible choices as a type for better type safety
type Choice = 'rock' | 'paper' | 'scissors'

function App() {
  const [playerChoice, setPlayerChoice] = useState<Choice | ''>('')
  const [computerChoice, setComputerChoice] = useState<Choice | ''>('')
  const [result, setResult] = useState<string>('')
  const [playerScore, setPlayerScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)

  // Determine the winner based on player and computer choices
  const determineWinner = (player: Choice, computer: Choice): string => {
    if (player === computer) return 'It\'s a tie!'
    
    const winConditions = {
      rock: 'scissors',
      paper: 'rock', 
      scissors: 'paper'
    }
    
    return winConditions[player] === computer ? 'You win!' : 'Computer wins!'
  }

  // Handle player choice and play the game
  const playGame = (choice: Choice) => {
    const choices: Choice[] = ['rock', 'paper', 'scissors']
    const computerChoice = choices[Math.floor(Math.random() * 3)]
    
    setPlayerChoice(choice)
    setComputerChoice(computerChoice)
    
    // Determine and set the result
    const gameResult = determineWinner(choice, computerChoice)
    setResult(gameResult)
    
    // Update scores based on result
    if (gameResult === 'You win!') {
      setPlayerScore(prev => prev + 1)
    } else if (gameResult === 'Computer wins!') {
      setComputerScore(prev => prev + 1)
    }
  }

  // Reset the game state
  const resetGame = () => {
    setPlayerChoice('')
    setComputerChoice('')
    setResult('')
    setPlayerScore(0)
    setComputerScore(0)
  }

  return (
    <div className="game">
      <h1>Rock Paper Scissors</h1>
      
      {/* Score display */}
      <div className="score">
        <p>Player: {playerScore} | Computer: {computerScore}</p>
      </div>
      
      {/* Choice buttons */}
      <div className="choices">
        <button onClick={() => playGame('rock')}>🪨 Rock</button>
        <button onClick={() => playGame('paper')}>📄 Paper</button>
        <button onClick={() => playGame('scissors')}>✂️ Scissors</button>
      </div>
      
      {/* Game results display */}
      {playerChoice && computerChoice && (
        <div className="results">
          <p>You chose: {playerChoice}</p>
          <p>Computer chose: {computerChoice}</p>
          <p className="result">{result}</p>
        </div>
      )}
      
      {/* Reset button */}
      <button onClick={resetGame} className="reset-btn">Reset Game</button>
    </div>
  )
}

export default App 