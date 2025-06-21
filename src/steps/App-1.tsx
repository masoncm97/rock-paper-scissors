// Step 1: Core Game Logic (Pure Functions)
// This is just the fundamental rules of rock-paper-scissors
// No React, no state, no UI - just logic!

// Function to determine who wins
function determineWinner(playerChoice: string, computerChoice: string): string {
  if (playerChoice === computerChoice) return 'tie'
  
  if (playerChoice === 'rock' && computerChoice === 'scissors') return 'player'
  if (playerChoice === 'paper' && computerChoice === 'rock') return 'player'
  if (playerChoice === 'scissors' && computerChoice === 'paper') return 'player'
  
  return 'computer'
}

// Test our logic in the console
console.log('Testing game logic:')
console.log('Rock vs Scissors:', determineWinner('rock', 'scissors')) // Should be 'player'
console.log('Paper vs Rock:', determineWinner('paper', 'rock')) // Should be 'player'
console.log('Scissors vs Paper:', determineWinner('scissors', 'paper')) // Should be 'player'
console.log('Rock vs Rock:', determineWinner('rock', 'rock')) // Should be 'tie'
console.log('Rock vs Paper:', determineWinner('rock', 'paper')) // Should be 'computer'

// This is just the logic - no UI yet!
// We can test this by opening the browser console and seeing the output 